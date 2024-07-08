"use strict";(self.webpackChunklh_site=self.webpackChunklh_site||[]).push([[5423],{8133:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>r,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>t,toc:()=>h});var o=n(4848),s=n(8453);const i={sidebar_label:"Nodes"},c="Node and NodeRun",t={id:"concepts/nodes",title:"Node and NodeRun",description:"The LittleHorse Workflow SDK's abstract away most of the details of Nodes and NodeRuns; however, the curious reader will find this information quite interesting. If you just want to get started, you could skip this section and read the examples in the developer guide.",source:"@site/docs/04-concepts/02-nodes.md",sourceDirName:"04-concepts",slug:"/concepts/nodes",permalink:"/docs/concepts/nodes",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Nodes"},sidebar:"tutorialSidebar",previous:{title:"Workflows",permalink:"/docs/concepts/workflows"},next:{title:"Tasks",permalink:"/docs/concepts/tasks"}},r={},h=[{value:"In the API",id:"in-the-api",level:2},{value:"Edges",id:"edges",level:2},{value:"Node Types",id:"node-types",level:2},{value:"<code>ENTRYPOINT</code> Node",id:"entrypoint-node",level:3},{value:"<code>EXIT</code> Node",id:"exit-node",level:3},{value:"<code>TASK</code> Node",id:"task-node",level:3},{value:"<code>EXTERNAL_EVENT</code> Node",id:"external_event-node",level:3},{value:"<code>SPAWN_THREAD</code> Node",id:"spawn_thread-node",level:3},{value:"<code>WAIT_FOR_THREAD</code> Node",id:"wait_for_thread-node",level:3},{value:"<code>NOP</code> Node",id:"nop-node",level:3},{value:"<code>SLEEP</code> Node",id:"sleep-node",level:3},{value:"Node Outputs",id:"node-outputs",level:2},{value:"<code>TaskRun</code> Lifecycle",id:"taskrun-lifecycle",level:2}];function a(e){const d={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(d.h1,{id:"node-and-noderun",children:[(0,o.jsx)(d.code,{children:"Node"})," and ",(0,o.jsx)(d.code,{children:"NodeRun"})]}),"\n",(0,o.jsx)(d.admonition,{type:"note",children:(0,o.jsxs)(d.p,{children:["The LittleHorse Workflow SDK's abstract away most of the details of ",(0,o.jsx)(d.code,{children:"Node"}),"s and ",(0,o.jsx)(d.code,{children:"NodeRun"}),"s; however, the curious reader will find this information quite interesting. If you just want to get started, you could skip this section and read the examples in the developer guide."]})}),"\n",(0,o.jsxs)(d.p,{children:["Just like ",(0,o.jsx)(d.code,{children:"WfSpec"}),"s and ",(0,o.jsx)(d.code,{children:"WfRun"}),"s, ",(0,o.jsx)(d.code,{children:"Node"}),"s and ",(0,o.jsx)(d.code,{children:"NodeRun"}),"s are another example of the Metadata/Execution duality in LittleHorse. A ",(0,o.jsx)(d.code,{children:"Node"})," is a single step in a ",(0,o.jsx)(d.code,{children:"ThreadSpec"}),", and a ",(0,o.jsx)(d.code,{children:"NodeRun"})," is a running (or already-run) instance of that ",(0,o.jsx)(d.code,{children:"Node"}),"."]}),"\n",(0,o.jsxs)(d.p,{children:["If a ",(0,o.jsx)(d.code,{children:"NodeRun"})," fails for any reason (for example, a ",(0,o.jsx)(d.code,{children:"TASK"})," node times out) and there is no registered Failure Handler (see Exception Handling section), then the ",(0,o.jsx)(d.code,{children:"ThreadRun"})," also fails."]}),"\n",(0,o.jsx)(d.h2,{id:"in-the-api",children:"In the API"}),"\n",(0,o.jsxs)(d.p,{children:["A ",(0,o.jsx)(d.code,{children:"NodeRun"})," is a LittleHorse API Object. Since a ",(0,o.jsx)(d.code,{children:"WfRun"})," might have hundreds (or even thousands) of ",(0,o.jsx)(d.code,{children:"NodeRun"}),"s, the API allows you to access ",(0,o.jsx)(d.code,{children:"NodeRun"}),"s separately from their associated ",(0,o.jsx)(d.code,{children:"WfRun"}),"s."]}),"\n",(0,o.jsxs)(d.p,{children:["The ",(0,o.jsx)(d.code,{children:"NodeRun"})," has three-part composite ID:"]}),"\n",(0,o.jsxs)(d.ol,{children:["\n",(0,o.jsxs)(d.li,{children:["The ",(0,o.jsx)(d.code,{children:"wfRunId"}),", which is the ID of the associated ",(0,o.jsx)(d.code,{children:"WfRun"}),"."]}),"\n",(0,o.jsxs)(d.li,{children:["The ",(0,o.jsx)(d.code,{children:"threadRunNumber"}),", which is the ID of the associated ",(0,o.jsx)(d.code,{children:"ThreadRun"}),"."]}),"\n",(0,o.jsxs)(d.li,{children:["The ",(0,o.jsx)(d.code,{children:"position"}),". Each ",(0,o.jsx)(d.code,{children:"ThreadRun"})," consists of an ordered list of ",(0,o.jsx)(d.code,{children:"NodeRun"}),"s; the ",(0,o.jsx)(d.code,{children:"position"})," is the individual ",(0,o.jsx)(d.code,{children:"NodeRun"}),"'s index in that list."]}),"\n"]}),"\n",(0,o.jsxs)(d.p,{children:["Note that, unlike a ",(0,o.jsx)(d.code,{children:"NodeRun"}),", a ",(0,o.jsx)(d.code,{children:"Node"})," is not an Object in the LittleHorse API. Since a ",(0,o.jsx)(d.code,{children:"Node"})," belongs to a ",(0,o.jsx)(d.code,{children:"ThreadSpec"}),", and a ",(0,o.jsx)(d.code,{children:"ThreadSpec"})," belongs to a ",(0,o.jsx)(d.code,{children:"WfSpec"}),", you can view a ",(0,o.jsx)(d.code,{children:"Node"})," by getting its ",(0,o.jsx)(d.code,{children:"WfSpec"}),"."]}),"\n",(0,o.jsx)(d.h2,{id:"edges",children:"Edges"}),"\n",(0,o.jsxs)(d.p,{children:["Each ",(0,o.jsx)(d.code,{children:"Node"})," in the ",(0,o.jsx)(d.code,{children:"ThreadSpec"})," (except for the ",(0,o.jsx)(d.code,{children:"EXIT"})," nodes) has a list of one or more outgoing edges."]}),"\n",(0,o.jsxs)(d.p,{children:["When a ",(0,o.jsx)(d.code,{children:"ThreadRun"})," arrives at a ",(0,o.jsx)(d.code,{children:"Node"})," in its ",(0,o.jsx)(d.code,{children:"ThreadSpec"}),", a ",(0,o.jsx)(d.code,{children:"NodeRun"})," for that ",(0,o.jsx)(d.code,{children:"Node"})," is instantiated. Once the ",(0,o.jsx)(d.code,{children:"NodeRun"})," is completed, then the ",(0,o.jsx)(d.code,{children:"ThreadRun"})," advances to the ",(0,o.jsx)(d.code,{children:"Node"})," pointed to by the outgoing edges."]}),"\n",(0,o.jsxs)(d.p,{children:["A ",(0,o.jsx)(d.code,{children:"NOP"})," node may have more than one outgoing edge. In that case, the outgoing edges may have a Condition attached to them (see the Conditional Branching section). The first outgoing edge whos Condition evaluates to true is activaed, and the ",(0,o.jsx)(d.code,{children:"ThreadRun"})," advances to the ",(0,o.jsx)(d.code,{children:"Node"})," pointed to by that edge."]}),"\n",(0,o.jsxs)(d.p,{children:["Note that there are no restrictions on cycles in LittleHorse, except that a ",(0,o.jsx)(d.code,{children:"Node"})," may not have outgoing edges pointing directly to itself."]}),"\n",(0,o.jsx)(d.h2,{id:"node-types",children:"Node Types"}),"\n",(0,o.jsxs)(d.p,{children:["A ",(0,o.jsx)(d.code,{children:"Node"})," (and its associated ",(0,o.jsx)(d.code,{children:"NodeRun"}),") can be any of the following types. Note that when using the SDK's to build your workflows, you may not need to review this information."]}),"\n",(0,o.jsxs)(d.h3,{id:"entrypoint-node",children:[(0,o.jsx)(d.code,{children:"ENTRYPOINT"})," Node"]}),"\n",(0,o.jsxs)(d.p,{children:["The ",(0,o.jsx)(d.code,{children:"ENTRYPOINT"})," node is equivalent to the entrypoint ",(0,o.jsx)(d.code,{children:"ThreadSpec"})," and ",(0,o.jsx)(d.code,{children:"ThreadRun"}),". When a ",(0,o.jsx)(d.code,{children:"ThreadRun"})," is instantiated, it starts at the ",(0,o.jsx)(d.code,{children:"ENTRYPOINT"})," node and proceeds to the node pointed to by the entrypoint node's outgoing edges."]}),"\n",(0,o.jsxs)(d.h3,{id:"exit-node",children:[(0,o.jsx)(d.code,{children:"EXIT"})," Node"]}),"\n",(0,o.jsxs)(d.p,{children:["The ",(0,o.jsx)(d.code,{children:"EXIT"})," node marks the end of a ",(0,o.jsx)(d.code,{children:"ThreadSpec"}),"/",(0,o.jsx)(d.code,{children:"ThreadRun"}),". Noramlly, when a ",(0,o.jsx)(d.code,{children:"ThreadRun"})," reaches an ",(0,o.jsx)(d.code,{children:"EXIT"})," node, the ",(0,o.jsx)(d.code,{children:"ThreadRun"})," is marked as completed."]}),"\n",(0,o.jsxs)(d.p,{children:["In many programming languages, you can explicitly ",(0,o.jsx)(d.code,{children:"throw"})," or ",(0,o.jsx)(d.code,{children:"raise"})," an exception, which causes that thread in your program to fail. You can achieve the same effect in LittleHorse by assigning a ",(0,o.jsx)(d.code,{children:"Failure"})," to an ",(0,o.jsx)(d.code,{children:"EXIT"})," node (in the Java SDK, this is accomplished via ",(0,o.jsx)(d.code,{children:"WorkflowThread::fail()"}),"). See the WfRun Lifecycle section for more information."]}),"\n",(0,o.jsxs)(d.p,{children:["If a ",(0,o.jsx)(d.code,{children:"ThreadRun"})," arrives at an ",(0,o.jsx)(d.code,{children:"EXIT"})," node while it still has running child ",(0,o.jsx)(d.code,{children:"ThreadRun"}),"s, the parent ",(0,o.jsx)(d.code,{children:"ThreadRun"})," will not complete until all of its children have completed or failed. If one of the children threads fail, then the parent ",(0,o.jsx)(d.code,{children:"ThreadRun"})," will also fail and throw a ",(0,o.jsx)(d.code,{children:"CHILD_FAILED"})," exception."]}),"\n",(0,o.jsxs)(d.h3,{id:"task-node",children:[(0,o.jsx)(d.code,{children:"TASK"})," Node"]}),"\n",(0,o.jsxs)(d.p,{children:["The ",(0,o.jsx)(d.code,{children:"TASK"})," node is the most common Node type in LittleHorse. As the name implies, the ",(0,o.jsx)(d.code,{children:"TASK"})," node specifies a ",(0,o.jsx)(d.code,{children:"TaskDef"})," to execute when the ",(0,o.jsx)(d.code,{children:"ThreadRun"})," arrives at that node. The resulting ",(0,o.jsx)(d.code,{children:"NodeRun"})," schedules a Task Run that must be executed by your Task Worker clients."]}),"\n",(0,o.jsxs)(d.p,{children:["A ",(0,o.jsx)(d.code,{children:"TASK"})," node has a series of input variables which correspond to the input variables of the node's ",(0,o.jsx)(d.code,{children:"TaskDef"}),". These are passed to the Task Worker."]}),"\n",(0,o.jsxs)(d.p,{children:["The output of a ",(0,o.jsx)(d.code,{children:"TASK"})," node is simply the value returned by the Task Function called by the Task Worker. It may be any arbitrary Variable Value."]}),"\n",(0,o.jsxs)(d.p,{children:["Every ",(0,o.jsx)(d.code,{children:"TASK"})," node must have a configured timeout. The recommended timeout is 20 seconds; lower or higher values are acceptable. See the Developer Guide for information about how to set Timeouts."]}),"\n",(0,o.jsxs)(d.h3,{id:"external_event-node",children:[(0,o.jsx)(d.code,{children:"EXTERNAL_EVENT"})," Node"]}),"\n",(0,o.jsxs)(d.p,{children:["An ",(0,o.jsx)(d.code,{children:"EXTERNAL_EVENT"})," node specifies an ",(0,o.jsx)(d.code,{children:"ExternalEventDef"}),". When a ",(0,o.jsx)(d.code,{children:"ThreadRun"})," reaches an ",(0,o.jsx)(d.code,{children:"EXTERNAL_EVENT"})," node, the ",(0,o.jsx)(d.code,{children:"ThreadRun"})," will halt until an External Event of the specified ",(0,o.jsx)(d.code,{children:"ExternalEventDef"})," and associated with the correct ",(0,o.jsx)(d.code,{children:"WfRun"})," arrives."]}),"\n",(0,o.jsxs)(d.p,{children:["Once the External Event arrives, the ",(0,o.jsx)(d.code,{children:"ExternalEvent"}),' object in the API will show that it has been "claimed" by the specific ',(0,o.jsx)(d.code,{children:"NodeRun"}),", and the ",(0,o.jsx)(d.code,{children:"NodeRun"})," will complete. The output of the ",(0,o.jsx)(d.code,{children:"NodeRun"})," is simply the payload of the External Event."]}),"\n",(0,o.jsxs)(d.h3,{id:"spawn_thread-node",children:[(0,o.jsx)(d.code,{children:"SPAWN_THREAD"})," Node"]}),"\n",(0,o.jsxs)(d.p,{children:["A ",(0,o.jsx)(d.code,{children:"SPAWN_THREAD"})," Node refers to a ",(0,o.jsx)(d.code,{children:"ThreadSpec"}),", and when a ",(0,o.jsx)(d.code,{children:"ThreadRun"})," arrives at that ",(0,o.jsx)(d.code,{children:"SPAWN_THREAD"})," node, the specified ",(0,o.jsx)(d.code,{children:"ThreadSpec"})," is instantiated as a child ",(0,o.jsx)(d.code,{children:"ThreadRun"}),"."]}),"\n",(0,o.jsxs)(d.p,{children:["The ",(0,o.jsx)(d.code,{children:"SPAWN_THREAD"})," Node optionally specifies input variables for the child ",(0,o.jsx)(d.code,{children:"ThreadRun"}),"."]}),"\n",(0,o.jsxs)(d.p,{children:["The output of the ",(0,o.jsx)(d.code,{children:"SPAWN_THREAD"})," node run is an ",(0,o.jsx)(d.code,{children:"INT"})," Variable Value representing the ID of the resulting Child ",(0,o.jsx)(d.code,{children:"ThreadRun"}),"."]}),"\n",(0,o.jsxs)(d.h3,{id:"wait_for_thread-node",children:[(0,o.jsx)(d.code,{children:"WAIT_FOR_THREAD"})," Node"]}),"\n",(0,o.jsxs)(d.p,{children:["A ",(0,o.jsx)(d.code,{children:"WAIT_FOR_THREAD"})," node takes as input the ID of a specific Child ",(0,o.jsx)(d.code,{children:"ThreadRun"}),". When a ",(0,o.jsx)(d.code,{children:"ThreadRun"})," arrives at a ",(0,o.jsx)(d.code,{children:"WAIT_FOR_THREAD"})," node, it blocks until the specified Child ",(0,o.jsx)(d.code,{children:"ThreadRun"})," also completes."]}),"\n",(0,o.jsxs)(d.p,{children:["If the Child ",(0,o.jsx)(d.code,{children:"ThreadRun"})," fails, then the ",(0,o.jsx)(d.code,{children:"WAIT_FOR_THREAD"})," ",(0,o.jsx)(d.code,{children:"NODE_RUN"})," also fails."]}),"\n",(0,o.jsxs)(d.p,{children:["A ",(0,o.jsx)(d.code,{children:"WAIT_FOR_THREAD"})," node run has no output."]}),"\n",(0,o.jsxs)(d.h3,{id:"nop-node",children:[(0,o.jsx)(d.code,{children:"NOP"})," Node"]}),"\n",(0,o.jsxs)(d.p,{children:["A ",(0,o.jsx)(d.code,{children:"NOP"})," Node is a no-op. It is used by the SDK's to make control flow simpler to understand."]}),"\n",(0,o.jsxs)(d.h3,{id:"sleep-node",children:[(0,o.jsx)(d.code,{children:"SLEEP"})," Node"]}),"\n",(0,o.jsxs)(d.p,{children:["A ",(0,o.jsx)(d.code,{children:"SLEEP"})," Node takes as input either a time duration (measured in seconds) or a timestamp, and causes the ",(0,o.jsx)(d.code,{children:"ThreadRun"})," to wait until the specified amount of time or timestamp passes."]}),"\n",(0,o.jsx)(d.h2,{id:"node-outputs",children:"Node Outputs"}),"\n",(0,o.jsxs)(d.p,{children:["Every ",(0,o.jsx)(d.code,{children:"NodeRun"})," produces some output. The output is any ",(0,o.jsx)(d.code,{children:"VariableValue"}),", and can be used to mutate any ",(0,o.jsx)(d.code,{children:"Variable"}),"s in the scope of the ",(0,o.jsx)(d.code,{children:"ThreadRun"}),"."]}),"\n",(0,o.jsxs)(d.h2,{id:"taskrun-lifecycle",children:[(0,o.jsx)(d.code,{children:"TaskRun"})," Lifecycle"]}),"\n",(0,o.jsxs)(d.p,{children:["The ",(0,o.jsx)(d.code,{children:"TaskRun"}),' is the "Sub Node Run" for a ',(0,o.jsx)(d.code,{children:"TASK"})," node. The status lifecycle is as follows:"]}),"\n",(0,o.jsxs)(d.ul,{children:["\n",(0,o.jsxs)(d.li,{children:[(0,o.jsx)(d.code,{children:"STARTING"}),": indicates that the ",(0,o.jsx)(d.code,{children:"ThreadRun"})," has arrived at this node, and the Task is scheduled."]}),"\n",(0,o.jsxs)(d.li,{children:[(0,o.jsx)(d.code,{children:"RUNNING"}),": indicates that the Task has been dispatched to a Task Worker."]}),"\n",(0,o.jsxs)(d.li,{children:[(0,o.jsx)(d.code,{children:"COMPLETED"}),": indicates that the Task has been completed."]}),"\n",(0,o.jsxs)(d.li,{children:[(0,o.jsx)(d.code,{children:"ERROR"}),": indicates that the Task is timed out, or the Task Worker reported an error."]}),"\n"]})]})}function l(e={}){const{wrapper:d}={...(0,s.R)(),...e.components};return d?(0,o.jsx)(d,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,d,n)=>{n.d(d,{R:()=>c,x:()=>t});var o=n(6540);const s={},i=o.createContext(s);function c(e){const d=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function t(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(i.Provider,{value:d},e.children)}}}]);