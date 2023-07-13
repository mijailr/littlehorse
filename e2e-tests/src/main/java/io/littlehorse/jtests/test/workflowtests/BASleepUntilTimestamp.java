package io.littlehorse.jtests.test.workflowtests;

import io.littlehorse.jtests.test.LogicTestFailure;
import io.littlehorse.jtests.test.WorkflowLogicTest;
import io.littlehorse.sdk.client.LHClient;
import io.littlehorse.sdk.common.config.LHWorkerConfig;
import io.littlehorse.sdk.common.exception.LHApiError;
import io.littlehorse.sdk.common.proto.LHStatusPb;
import io.littlehorse.sdk.common.proto.VariableTypePb;
import io.littlehorse.sdk.common.util.Arg;
import io.littlehorse.sdk.wfsdk.WfRunVariable;
import io.littlehorse.sdk.wfsdk.Workflow;
import io.littlehorse.sdk.wfsdk.internal.WorkflowImpl;
import io.littlehorse.sdk.worker.LHTaskMethod;
import java.sql.Date;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class BASleepUntilTimestamp extends WorkflowLogicTest {

    public BASleepUntilTimestamp(LHClient client, LHWorkerConfig workerConfig) {
        super(client, workerConfig);
    }

    public String getDescription() {
        return "Ensures that we can pass input variables to Task Runs properly.";
    }

    public Workflow getWorkflowImpl() {
        return new WorkflowImpl(
            getWorkflowName(),
            thread -> {
                WfRunVariable myVar = thread.addVariable(
                    "timestamp-to-wait-for",
                    VariableTypePb.INT
                );
                thread.sleepUntil(myVar);
            }
        );
    }

    public List<Object> getTaskWorkerObjects() {
        return new ArrayList<>();
    }

    public List<String> launchAndCheckWorkflows(LHClient client)
        throws LogicTestFailure, InterruptedException, LHApiError {
        String wfRunId = runWf(
            client,
            Arg.of(
                "timestamp-to-wait-for",
                new Date(System.currentTimeMillis() + (1000 * 2)).getTime()
            )
        );
        Thread.sleep(1000);
        assertStatus(client, wfRunId, LHStatusPb.RUNNING);
        Thread.sleep(7000); // note that the timer interval is 4 seconds
        assertStatus(client, wfRunId, LHStatusPb.COMPLETED);

        return Arrays.asList(wfRunId);
    }
}

class BADoubler {

    @LHTaskMethod("ba-double-it")
    public int doubleIt(int toDouble) {
        return toDouble * 2;
    }

    @LHTaskMethod("ba-subtract")
    public Long subtract(long first, Integer second) {
        return first - second;
    }
}
