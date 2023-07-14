package main

import (
	"log"

	"bitbucket.org/littlehorse-core/littlehorse/sdk-go/common"
	"bitbucket.org/littlehorse-core/littlehorse/sdk-go/examples"
	"bitbucket.org/littlehorse-core/littlehorse/sdk-go/examples/taskmetadata"
	"bitbucket.org/littlehorse-core/littlehorse/sdk-go/wflib"
)

func main() {
	_, client := examples.LoadConfigAndClient()
	wf := wflib.NewWorkflow(taskmetadata.MyWorkflowGet, "my-workflow")
	putWf, err := wf.Compile()
	if err != nil {
		log.Fatal(err)
	}

	resp, err := client.PutWfSpec(putWf)
	if err != nil {
		log.Fatal(err)
	}
	common.PrintProto(resp)
}