package io.littlehorse.driver;

import java.util.Set;
import java.util.concurrent.TimeUnit;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class TestExecutor {

    private static final Logger log = LoggerFactory.getLogger(TestExecutor.class);

    private TestDriver driver;

    public TestExecutor(TestConfig testConfig) {
        Set<Class<?>> tests = TestUtils.getAllTestClasses(testConfig.getTestToRun());

        // Set the strategy
        if (testConfig.shouldProvision()) {
            log.info("Using test container");
            this.driver = new TestDriverProvision(tests, testConfig.getThreads());
        } else {
            log.info("Conecting to external server");
            this.driver = new TestDriverExternal(tests, testConfig.getThreads());
        }
    }

    public void run() throws Exception {
        driver.arrange();
        driver.run();
        TimeUnit.SECONDS.sleep(30);
        driver.teardown();
    }
}