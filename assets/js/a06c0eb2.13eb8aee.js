"use strict";(self.webpackChunklh_site=self.webpackChunklh_site||[]).push([[300],{4898:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>t});var c=s(4848),d=s(8453);const i={sidebar_label:"LittleHorse CLI"},l="LittleHorse CLI",r={id:"developer-guide/lhctl",title:"LittleHorse CLI",description:"lhctl is the LittleHorse CLI. It allows you to manage metadata in your system, observe and analyze your WfRuns, and also perform rudimentary actions such as running a WfRun.",source:"@site/docs/05-developer-guide/03-lhctl.md",sourceDirName:"05-developer-guide",slug:"/developer-guide/lhctl",permalink:"/docs/developer-guide/lhctl",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"LittleHorse CLI"},sidebar:"tutorialSidebar",previous:{title:"Configuring the Clients",permalink:"/docs/developer-guide/client-configuration"},next:{title:"Developing Task Workers",permalink:"/docs/developer-guide/task-worker-development"}},o={},t=[{value:"Create Metadata",id:"create-metadata",level:2},{value:"View Objects",id:"view-objects",level:2},{value:"Common Notes",id:"common-notes",level:3},{value:"<code>WfSpec</code>",id:"wfspec",level:3},{value:"<code>WfRun</code>",id:"wfrun",level:3},{value:"Specific <code>WfSpec</code> Version",id:"specific-wfspec-version",level:4},{value:"By <code>wfSpecName</code> and <code>status</code>",id:"by-wfspecname-and-status",level:4},{value:"By <code>wfSpecName</code>",id:"by-wfspecname",level:4},{value:"By Time",id:"by-time",level:4},{value:"<code>NodeRun</code>",id:"noderun",level:3},{value:"<code>TaskDef</code> and <code>ExternalEventDef</code>",id:"taskdef-and-externaleventdef",level:3},{value:"<code>TaskRun</code>",id:"taskrun",level:3},{value:"<code>UserTaskRun</code>",id:"usertaskrun",level:3},{value:"<code>UserTaskDef</code>",id:"usertaskdef",level:3},{value:"<code>ExternalEvent</code>",id:"externalevent",level:3},{value:"<code>Variable</code>",id:"variable",level:3},{value:"Metrics",id:"metrics",level:3},{value:"Manage <code>WfRun</code>s",id:"manage-wfruns",level:2},{value:"Run a <code>WfRun</code>",id:"run-a-wfrun",level:3},{value:"Stop and Resume a <code>WfRun</code>",id:"stop-and-resume-a-wfrun",level:3},{value:"Post an <code>ExternalEvent</code>",id:"post-an-externalevent",level:3}];function a(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"littlehorse-cli",children:"LittleHorse CLI"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"lhctl"})," is the LittleHorse CLI. It allows you to manage metadata in your system, observe and analyze your ",(0,c.jsx)(n.code,{children:"WfRun"}),"s, and also perform rudimentary actions such as running a ",(0,c.jsx)(n.code,{children:"WfRun"}),"."]}),"\n",(0,c.jsx)(n.h2,{id:"create-metadata",children:"Create Metadata"}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"lhctl deploy"})," command allows you to create metadata such as ",(0,c.jsx)(n.code,{children:"WfSpec"}),", ",(0,c.jsx)(n.code,{children:"TaskDef"}),", ",(0,c.jsx)(n.code,{children:"UserTaskDef"}),", and ",(0,c.jsx)(n.code,{children:"ExternalEventDef"}),"."]}),"\n",(0,c.jsx)(n.p,{children:"The syntax of the command is as follows:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl deploy {wfSpec,taskDef,externalEventDef} <file>\n"})}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"<file>"})," parameter is expected to be a JSON-formatted printout of the corresponding protobuf. If your file is in the binary form, you can deploy using the ",(0,c.jsx)(n.code,{children:"--proto"})," flag."]}),"\n",(0,c.jsxs)(n.p,{children:["The following creates a simple ",(0,c.jsx)(n.code,{children:"TaskDef"}),":"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:'-> cat <<EOF > /tmp/taskDef.json\n{\n    "name": "my-task",\n    "inputVars": [{\n\t    "type": "STR",\n\t    "name": "my-input-var"\n    }]\n}\n\n-> lhctl deploy taskDef /tmp/taskDef.json\n{\n  "code":  "OK",\n  "result":  {\n    "name":  "my-task",\n    "inputVars":  [\n      {\n        "type":  "STR",\n        "name":  "my-input-var",\n        "required":  false\n      }\n    ],\n    "createdAt":  "2023-04-18T18:54:23.263Z"\n  }\n}\n\n'})}),"\n",(0,c.jsxs)(n.p,{children:["The same syntax can be used for creating ",(0,c.jsx)(n.code,{children:"WfSpec"}),", ",(0,c.jsx)(n.code,{children:"UserTaskDef"}),", and ",(0,c.jsx)(n.code,{children:"ExternalEventDef"})," objects."]}),"\n",(0,c.jsx)(n.h2,{id:"view-objects",children:"View Objects"}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"lhctl get"})," command allows you to inspect the state of an API Object; ",(0,c.jsx)(n.code,{children:"lhctl search"})," allows you to find the ID's of API Object which match certain criteria; and ",(0,c.jsx)(n.code,{children:"lhctl list"})," allows you to retrieve multiple API Objects at one time."]}),"\n",(0,c.jsx)(n.p,{children:"The following sections describe how to interact with each type of API Object."}),"\n",(0,c.jsx)(n.h3,{id:"common-notes",children:"Common Notes"}),"\n",(0,c.jsxs)(n.p,{children:["In ",(0,c.jsx)(n.code,{children:"lhctl search"}),", there are two global flags:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"bookmark"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"limit"})}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"limit"})," flag is quite self-explanatory as it simply limits the number of results for a request."]}),"\n",(0,c.jsxs)(n.p,{children:["All ",(0,c.jsx)(n.code,{children:"lhctl search"})," responses have an optional ",(0,c.jsx)(n.code,{children:"bookmark"})," field, which is a base64-encoded pagination token. If all results that match the search have been returned, then no ",(0,c.jsx)(n.code,{children:"bookmark"})," is provided. Otherwise, if you wish to retrieve more results starting from where you left off, just pass in the provided ",(0,c.jsx)(n.code,{children:"bookmark"})," by copying and pasting the base64-encoded data."]}),"\n",(0,c.jsx)(n.h3,{id:"wfspec",children:(0,c.jsx)(n.code,{children:"WfSpec"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"WfSpec"}),"s are versioned objects, meaning that their ID comprises a ",(0,c.jsx)(n.code,{children:"name"})," and a ",(0,c.jsx)(n.code,{children:"version"}),". When a new ",(0,c.jsx)(n.code,{children:"WfSpec"})," is created with the same ",(0,c.jsx)(n.code,{children:"name"})," as an older one, it gets an incremented ",(0,c.jsx)(n.code,{children:"version"})," number and lives in the API as its own separate object."]}),"\n",(0,c.jsxs)(n.p,{children:["You can retrieve the latest ",(0,c.jsx)(n.code,{children:"WfSpec"})," named ",(0,c.jsx)(n.code,{children:"foo"})," by doing:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl get wfSpec foo\n"})}),"\n",(0,c.jsxs)(n.p,{children:["You can retrieve a list of all ",(0,c.jsx)(n.code,{children:"WfSpec"}),"s named ",(0,c.jsx)(n.code,{children:"foo"})," by doing:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:'-> lhctl search wfSpec --name foo\n{\n  "results":  [\n    {\n      "name":  "foo",\n      "version":  0\n    },\n    {\n      "name":  "foo",\n      "version":  1\n    }\n  ],\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["To get an old version (eg. ",(0,c.jsx)(n.code,{children:"0"}),") of a ",(0,c.jsx)(n.code,{children:"WfSpec"})," named ",(0,c.jsx)(n.code,{children:"foo"}),", you can:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl get wfSpec foo --v 0\n"})}),"\n",(0,c.jsx)(n.h3,{id:"wfrun",children:(0,c.jsx)(n.code,{children:"WfRun"})}),"\n",(0,c.jsxs)(n.p,{children:["To get a ",(0,c.jsx)(n.code,{children:"WfRun"})," with id ",(0,c.jsx)(n.code,{children:"<my-wf-id>"})," you can:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl get wfRun <my-wf-id>\n"})}),"\n",(0,c.jsxs)(n.h4,{id:"specific-wfspec-version",children:["Specific ",(0,c.jsx)(n.code,{children:"WfSpec"})," Version"]}),"\n",(0,c.jsxs)(n.p,{children:["You can search for ",(0,c.jsx)(n.code,{children:"WfRun"}),"s by providing the name and version of the ",(0,c.jsx)(n.code,{children:"WfSpec"})," and the status of the ",(0,c.jsx)(n.code,{children:"WfRun"}),". For example, if you want to find all failed ",(0,c.jsx)(n.code,{children:"WfRun"}),"'s from the ",(0,c.jsx)(n.code,{children:"foo"})," WfSpec, version ",(0,c.jsx)(n.code,{children:"9"}),", you would do the following:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl search wfRun --wfSpecName foo --wfSpecVersion 9 --status ERROR\n"})}),"\n",(0,c.jsxs)(n.h4,{id:"by-wfspecname-and-status",children:["By ",(0,c.jsx)(n.code,{children:"wfSpecName"})," and ",(0,c.jsx)(n.code,{children:"status"})]}),"\n",(0,c.jsxs)(n.p,{children:["You can search for ",(0,c.jsx)(n.code,{children:"WfRun"}),"s by providing the name of the ",(0,c.jsx)(n.code,{children:"WfSpec"})," and the ",(0,c.jsx)(n.code,{children:"status"})," of the ",(0,c.jsx)(n.code,{children:"WfRun"}),". This retrieves results from all versions of the ",(0,c.jsx)(n.code,{children:"WfSpec"}),":"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl search wfRun --wfSpecName foo --status ERROR\n"})}),"\n",(0,c.jsxs)(n.h4,{id:"by-wfspecname",children:["By ",(0,c.jsx)(n.code,{children:"wfSpecName"})]}),"\n",(0,c.jsxs)(n.p,{children:["If you only specify ",(0,c.jsx)(n.code,{children:"--wfSpecName"}),", ",(0,c.jsx)(n.code,{children:"WfRun"}),"s with any status and any version of the provided ",(0,c.jsx)(n.code,{children:"WfSpec"})," are returned:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl search wfRun --wfSpecName foo\n"})}),"\n",(0,c.jsx)(n.h4,{id:"by-time",children:"By Time"}),"\n",(0,c.jsxs)(n.p,{children:["Every flavor of ",(0,c.jsx)(n.code,{children:"lhctl search wfRun"})," shown above also allows you to filter based on the ",(0,c.jsxs)(n.em,{children:["time that the ",(0,c.jsx)(n.code,{children:"WfRun"})," was launched"]})," via the following options:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"--earliestMinutesAgo"}),": Only show ",(0,c.jsx)(n.code,{children:"WfRun"}),"s more recent than this configuration."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"--latestMinutesAgo"}),": only show ",(0,c.jsx)(n.code,{children:"WfRun"}),"'s less recent than this configuration."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["For example, to find all workflows started between 10 and 15 minutes ago that are in the ",(0,c.jsx)(n.code,{children:"COMPLETED"})," state, we would do:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl search wfRun --wfSpecName foo --status COMPLETED --earliestMinutesAgo 15 --latestMinutesAgo 10\n"})}),"\n",(0,c.jsx)(n.h3,{id:"noderun",children:(0,c.jsx)(n.code,{children:"NodeRun"})}),"\n",(0,c.jsxs)(n.p,{children:["A ",(0,c.jsx)(n.code,{children:"NodeRun"})," has a composite ID consisting of the ",(0,c.jsx)(n.code,{children:"wfRunId"}),", ",(0,c.jsx)(n.code,{children:"threadRunNumber"}),", and ",(0,c.jsx)(n.code,{children:"position"}),"."]}),"\n",(0,c.jsx)(n.p,{children:"To get all NodeRun associated to an specific WfRun:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl list nodeRun <wfRunId>\n"})}),"\n",(0,c.jsx)(n.p,{children:"Get an simplified response as follows:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl search nodeRun --wfRunId <my-wf-id>\n"})}),"\n",(0,c.jsxs)(n.p,{children:["Use ",(0,c.jsx)(n.code,{children:"lhctl get nodeRun"})," to find an specific NodeRun, The syntax for this is as follows:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl get nodeRun <wfRunId> <threadRunNumber> <position>\n"})}),"\n",(0,c.jsxs)(n.p,{children:["To get the second (zero-indexed) ",(0,c.jsx)(n.code,{children:"NodeRun"})," for the entrypoint thread (Thread Run ",(0,c.jsx)(n.code,{children:"0"}),") of the ",(0,c.jsx)(n.code,{children:"WfRun"})," with id ",(0,c.jsx)(n.code,{children:"123foo"}),", you can:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl get nodeRun 123foo 0 2\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"taskdef-and-externaleventdef",children:[(0,c.jsx)(n.code,{children:"TaskDef"})," and ",(0,c.jsx)(n.code,{children:"ExternalEventDef"})]}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"lhctl"})," syntax for ",(0,c.jsx)(n.code,{children:"TaskDef"})," and ",(0,c.jsx)(n.code,{children:"ExternalEventDef"})," is identical. You can get a specific ",(0,c.jsx)(n.code,{children:"TaskDef"})," or ",(0,c.jsx)(n.code,{children:"ExternalEventDef"})," by its ",(0,c.jsx)(n.code,{children:"name"})," using:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl get taskDef <name>\n"})}),"\n",(0,c.jsxs)(n.p,{children:["You can list all ",(0,c.jsx)(n.code,{children:"TaskDef"}),"s or ",(0,c.jsx)(n.code,{children:"ExternalEventDef"}),"s as follows:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl search externalEventDef\n"})}),"\n",(0,c.jsxs)(n.p,{children:["You can search ",(0,c.jsx)(n.code,{children:"TaskDef"}),"s and ",(0,c.jsx)(n.code,{children:"ExternalEventDef"}),"s with prefixes as follows:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl search taskDef --prefix some-pref\n"})}),"\n",(0,c.jsx)(n.h3,{id:"taskrun",children:(0,c.jsx)(n.code,{children:"TaskRun"})}),"\n",(0,c.jsxs)(n.p,{children:["A ",(0,c.jsx)(n.code,{children:"TaskRun"})," is a running instance of a Task in LittleHorse. A ",(0,c.jsx)(n.code,{children:"TaskRun"})," is associated with a ",(0,c.jsx)(n.code,{children:"TaskDef"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["To retrieve all ",(0,c.jsx)(n.code,{children:"TaskRun"}),"'s associated with a ",(0,c.jsx)(n.code,{children:"TaskDef"}),", use the following command:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl search taskRun --taskDefName <TaskDefName>\n"})}),"\n",(0,c.jsxs)(n.p,{children:["You can also filter ",(0,c.jsx)(n.code,{children:"TaskRun"}),"s by specifying a particular ",(0,c.jsx)(n.code,{children:"TaskRun"})," status:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl search taskRun --taskDefName <TaskDefName> --status <TaskRunStatus>\n"})}),"\n",(0,c.jsx)(n.p,{children:"Possible values for the status parameter are as follows:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"TASK_SCHEDULED"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"TASK_RUNNING"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"TASK_SUCCESS"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"TASK_FAILED"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"TASK_TIMEOUT"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"TASK_OUTPUT_SERIALIZING_ERROR"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"TASK_INPUT_VAR_SUB_ERROR"})}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Just like ",(0,c.jsx)(n.code,{children:"lhctl search wfRun"}),", each flavor of ",(0,c.jsx)(n.code,{children:"lhctl search taskRun"})," shown above also allows you to filter based on the ",(0,c.jsxs)(n.em,{children:["time that the ",(0,c.jsx)(n.code,{children:"taskRun"})," was scheduled"]})," via the following options:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"--earliestMinutesAgo"}),": Only show ",(0,c.jsx)(n.code,{children:"TaskRun"}),"s more recent than this configuration."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"--latestMinutesAgo"}),": only show ",(0,c.jsx)(n.code,{children:"TaskRun"}),"'s less recent than this configuration."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["A ",(0,c.jsx)(n.code,{children:"TaskRun"})," has a composite id consisting of the ",(0,c.jsx)(n.code,{children:"id"})," of its ",(0,c.jsx)(n.code,{children:"WfRun"}),", and a ",(0,c.jsx)(n.code,{children:"taskGuid"}),". To get a ",(0,c.jsx)(n.code,{children:"TaskRun"}),", you can use:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl get taskRun <wfRunId> <taskGuid>\n\n# This is equivalent:\nlhctl get taskRun <wfRunId>/<taskGuid>\n"})}),"\n",(0,c.jsx)(n.h3,{id:"usertaskrun",children:(0,c.jsx)(n.code,{children:"UserTaskRun"})}),"\n",(0,c.jsxs)(n.p,{children:["A ",(0,c.jsx)(n.code,{children:"UserTaskRun"})," is an instance of a ",(0,c.jsx)(n.code,{children:"UserTaskDef"})," in LittleHorse, in which a human is assigned a Task and the ",(0,c.jsx)(n.code,{children:"WfRun"})," blocks until that Task is completed. The ID of a ",(0,c.jsx)(n.code,{children:"UserTaskRun"})," is a composite ID consisting of the ID of the ",(0,c.jsx)(n.code,{children:"WfRun"})," and a Guid."]}),"\n",(0,c.jsxs)(n.p,{children:["To get a ",(0,c.jsx)(n.code,{children:"UserTaskRun"}),", you can run:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl get userTaskRun <wfRunId> <userTaskGuid>\n"})}),"\n",(0,c.jsxs)(n.p,{children:["You can search for ",(0,c.jsx)(n.code,{children:"UserTaskRun"}),"'s with multiple combinations of flags. Supported flags for a ",(0,c.jsx)(n.code,{children:"UserTaskRun"})," search are:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"--earliestMinutesAgo"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"--latestMinutesAgo"})}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"--userTaskStatus"}),", which is the status of the ",(0,c.jsx)(n.code,{children:"UserTaskRun"}),". Valid values are:","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"UNASSIGNED"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"ASSIGNED"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"DONE"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"CANCELLED"})}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"--userId"}),", or the ID of the User to whom the Task is assigned."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"--userGroup"}),", or the ID of the User Group to whom the Task is assigned."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"--userTaskDefName"}),", or the name of the ",(0,c.jsx)(n.code,{children:"UserTaskDef"})," that the Task comes from."]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"usertaskdef",children:(0,c.jsx)(n.code,{children:"UserTaskDef"})}),"\n",(0,c.jsxs)(n.p,{children:["A ",(0,c.jsx)(n.code,{children:"UserTaskDef"})," is equivalent to a ",(0,c.jsx)(n.code,{children:"TaskDef"})," but for ",(0,c.jsx)(n.code,{children:"UserTaskRun"}),"s instead of ",(0,c.jsx)(n.code,{children:"TaskRun"}),"s. To find all ",(0,c.jsx)(n.code,{children:"UserTaskDef"}),"s, you can:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl search userTaskDef\n\n# By Prefix\nlhctl search userTaskDef --prefix some-prefix-\n"})}),"\n",(0,c.jsxs)(n.p,{children:["You can get a ",(0,c.jsx)(n.code,{children:"userTaskDef"})," as follows:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl get userTaskDef my-user-task-def\n\n# optionally specify version. If version not set, defaults to latest.\nlhctl get userTaskDef my-user-task-def --v 2\n"})}),"\n",(0,c.jsxs)(n.p,{children:["You can delete a ",(0,c.jsx)(n.code,{children:"UserTaskDef"})," as follows:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl delete userTaskDef my-user-task-def 2  # version is required\n"})}),"\n",(0,c.jsx)(n.h3,{id:"externalevent",children:(0,c.jsx)(n.code,{children:"ExternalEvent"})}),"\n",(0,c.jsxs)(n.p,{children:["An ",(0,c.jsx)(n.code,{children:"ExternalEvent"})," has a composite ID consisting of:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["The associated ",(0,c.jsx)(n.code,{children:"wfRunId"}),"."]}),"\n",(0,c.jsxs)(n.li,{children:["The ",(0,c.jsx)(n.code,{children:"name"})," of the ",(0,c.jsx)(n.code,{children:"ExternalEventDef"}),"."]}),"\n",(0,c.jsxs)(n.li,{children:["A unique ",(0,c.jsx)(n.code,{children:"guid"})," for that ",(0,c.jsx)(n.code,{children:"ExternalEvent"})," instance."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["To get an ",(0,c.jsx)(n.code,{children:"ExternalEvent"}),", you can:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl search externalEvent <wfRunId> <externalEventDefName> <guid>\n"})}),"\n",(0,c.jsxs)(n.p,{children:["You can list all ",(0,c.jsx)(n.code,{children:"ExternalEvent"}),"s for a given ",(0,c.jsx)(n.code,{children:"wfRunId"})," via the following:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl search externalEvent --wfRunId <wfRunId>\n"})}),"\n",(0,c.jsx)(n.h3,{id:"variable",children:(0,c.jsx)(n.code,{children:"Variable"})}),"\n",(0,c.jsxs)(n.p,{children:["A ",(0,c.jsx)(n.code,{children:"Variable"})," has a composite ID consisting of:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["The associated ",(0,c.jsx)(n.code,{children:"wfRunId"}),"."]}),"\n",(0,c.jsxs)(n.li,{children:["The ",(0,c.jsx)(n.code,{children:"threadRunNumber"})," of the owning ThreadRun."]}),"\n",(0,c.jsxs)(n.li,{children:["The ",(0,c.jsx)(n.code,{children:"name"})," of the Variable."]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"You can get a specific variable via:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl get variable <wfRunId> <threadRunNumber> <name>\n"})}),"\n",(0,c.jsxs)(n.p,{children:["You can list all ",(0,c.jsx)(n.code,{children:"Variable"}),"s for a given ",(0,c.jsx)(n.code,{children:"WfRun"})," via:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl search variable --wfRunId <wfRunId>\n"})}),"\n",(0,c.jsxs)(n.p,{children:["You can search for ",(0,c.jsx)(n.code,{children:"Variable"}),"s with a certain value (not supported for ",(0,c.jsx)(n.code,{children:"JSON_OBJ"}),", ",(0,c.jsx)(n.code,{children:"BYTES"}),", and ",(0,c.jsx)(n.code,{children:"JSON_ARR"})," variables). You must pass in the Variable ",(0,c.jsx)(n.code,{children:"name"}),", the type, and the value. For example, to search for ",(0,c.jsx)(n.code,{children:"email-address"})," variable's with the value ",(0,c.jsx)(n.code,{children:"foo@bar.com"}),", you would:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl search variable --varType STR --value 'foo@bar.com' --name email-address\n"})}),"\n",(0,c.jsx)(n.p,{children:"Supported variable types for searching are:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"STR"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"INT"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"DOUBLE"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"BOOL"})}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"metrics",children:"Metrics"}),"\n",(0,c.jsx)(n.p,{children:"The LittleHorse CLI lets you view metrics in a rudimentary manner. It is recommended to use the Admin Dashboard to better visualize these metrics; however, you can still view metrics through the CLI."}),"\n",(0,c.jsxs)(n.p,{children:['LittleHorse exposes two types of metrics: "Task Metrics", which are aggregated by ',(0,c.jsx)(n.code,{children:"TaskDef"}),', and "Workflow Metrics", which are aggregated by ',(0,c.jsx)(n.code,{children:"WfSpec"}),"."]}),"\n",(0,c.jsx)(n.p,{children:"Metrics are collected and aggregated on tumbling time windows. There are three sizes of windows which you can use:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"MINUTES_5"}),","]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"HOURS_2"}),", and"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"DAYS_1"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["To get the last 10 windows of size ",(0,c.jsx)(n.code,{children:"MINUTES_5"})," of metrics for the ",(0,c.jsx)(n.code,{children:"foo-task"})," TaskDef, you can:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl taskDefMetrics foo-task MINUTES_5 10\n"})}),"\n",(0,c.jsxs)(n.p,{children:["To get the last 5 windows of size ",(0,c.jsx)(n.code,{children:"DAYS_1"})," for the second version of the ",(0,c.jsx)(n.code,{children:"foo-wf"})," WfSpec, you can:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl wfSpecMetrics foo-wf 2 DAYS_1 5\n"})}),"\n",(0,c.jsxs)(n.h2,{id:"manage-wfruns",children:["Manage ",(0,c.jsx)(n.code,{children:"WfRun"}),"s"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"lhctl"})," allows you to perform basic actions around running, stopping, and resuming ",(0,c.jsx)(n.code,{children:"WfRun"}),"s and also creating ",(0,c.jsx)(n.code,{children:"ExternalEvent"}),"s."]}),"\n",(0,c.jsxs)(n.h3,{id:"run-a-wfrun",children:["Run a ",(0,c.jsx)(n.code,{children:"WfRun"})]}),"\n",(0,c.jsxs)(n.p,{children:["You can run a ",(0,c.jsx)(n.code,{children:"WfRun"})," using the ",(0,c.jsx)(n.code,{children:"lhctl run"})," command. The syntax is:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl run <wfSpecName> ...args\n"})}),"\n",(0,c.jsxs)(n.p,{children:["All positional arguments after the WfSpec Name are interpreted as pairs of\n",(0,c.jsx)(n.code,{children:"{Variable Name, Variable Value}"}),". The variable values are intelligently deserialized\nto their appropriate types; for example, if var 'foo' is of type 'JSON_OBJ', then\nthe argument ",(0,c.jsx)(n.code,{children:'\'{"bar":"baz"}\''})," will be unmarshalled as a JSON object."]}),"\n",(0,c.jsxs)(n.p,{children:['To run the "my-workflow" ',(0,c.jsx)(n.code,{children:"WfSpec"})," with two input parameters,"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"foo"})," set to the Json Object ",(0,c.jsx)(n.code,{children:'{"bar":"baz"}'})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"my-int"})," set to ",(0,c.jsx)(n.code,{children:"123"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"you can:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:'lhctl run my-workflow foo \'{"bar":"baz"}\' my-int 123\n'})}),"\n",(0,c.jsxs)(n.p,{children:["You can also set the ID of the ",(0,c.jsx)(n.code,{children:"WfRun"})," using the ",(0,c.jsx)(n.code,{children:"--wfRunId"})," flag. Note that there can only be one ",(0,c.jsx)(n.code,{children:"WfRun"})," with a given ID. This can be used to guarantee idempotence."]}),"\n",(0,c.jsxs)(n.h3,{id:"stop-and-resume-a-wfrun",children:["Stop and Resume a ",(0,c.jsx)(n.code,{children:"WfRun"})]}),"\n",(0,c.jsx)(n.p,{children:"You can use:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl stop wfRun <wfRunId>\n"})}),"\n",(0,c.jsxs)(n.p,{children:["to stop a ",(0,c.jsx)(n.code,{children:"WfRun"}),", and then resume it with:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl resume wfRun <wfRunId>\n"})}),"\n",(0,c.jsxs)(n.p,{children:["You can optionally stop or resume a child thread (without affecting the entrypoint ThreadRun) by using the ",(0,c.jsx)(n.code,{children:"--threadRunNumber"})," argument."]}),"\n",(0,c.jsxs)(n.h3,{id:"post-an-externalevent",children:["Post an ",(0,c.jsx)(n.code,{children:"ExternalEvent"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"lhctl postEvent"})," allows you to post an ExternalEvent of a specified Event Type and Variable Type to a WfRun. Specifying the Variable Type for the external event is currently required as ExternalEventDef's currently do not carry Schema information (this will change in a future release). The payload is deserialized according to the type. JSON objects should be provided as\na string; BYTES objects should be b64-encoded."]}),"\n",(0,c.jsxs)(n.p,{children:["To send an External Event of type ",(0,c.jsx)(n.code,{children:"my-event"})," with a String value ",(0,c.jsx)(n.code,{children:'"my-event-content"'})," to the ",(0,c.jsx)(n.code,{children:"WfRun"}),' given by id "my-wf-id", you can:']}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lhctl postEvent my-wf-id my-event STR my-event-content\n"})}),"\n",(0,c.jsx)(n.p,{children:"As a refresher, the valid variable types in LittleHorse are:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"STR"}),"\n",(0,c.jsx)(n.li,{children:"INT"}),"\n",(0,c.jsx)(n.li,{children:"DOUBLE"}),"\n",(0,c.jsx)(n.li,{children:"BOOL"}),"\n",(0,c.jsx)(n.li,{children:"JSON_OBJ"}),"\n",(0,c.jsx)(n.li,{children:"JSON_ARR"}),"\n",(0,c.jsx)(n.li,{children:"BYTES"}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["You can optionally specify the ",(0,c.jsx)(n.code,{children:"--guid"})," flag to guarantee idempotence of this request, as only one ",(0,c.jsx)(n.code,{children:"ExternalEvent"})," can exist with the same ",(0,c.jsx)(n.code,{children:"guid"}),", ",(0,c.jsx)(n.code,{children:"wfRunId"}),", and ",(0,c.jsx)(n.code,{children:"externalEventDefName"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["You can optionally assign the ",(0,c.jsx)(n.code,{children:"ExternalEvent"})," to a specific ",(0,c.jsx)(n.code,{children:"NodeRun"})," or ",(0,c.jsx)(n.code,{children:"ThreadRun"})," using the ",(0,c.jsx)(n.code,{children:"--nodeRunPosition"})," and ",(0,c.jsx)(n.code,{children:"--threadRunNumber"})," flags, respectively. The ",(0,c.jsx)(n.code,{children:"--nodeRunPosition"})," flag is only valid if the ",(0,c.jsx)(n.code,{children:"--threadRunNumber"})," flag is also set."]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var c=s(6540);const d={},i=c.createContext(d);function l(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);