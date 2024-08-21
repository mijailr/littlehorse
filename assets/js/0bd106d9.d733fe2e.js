"use strict";(self.webpackChunklh_site=self.webpackChunklh_site||[]).push([[9371],{9084:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var a=n(4848),i=n(8453),t=n(1470),l=n(9365);const r={},s="Conditionals and Loops",d={id:"developer-guide/wfspec-development/conditionals",title:"Conditionals and Loops",description:"In a LittleHorse WfSpec, the Edge structure tells the workflow scheduler what Node to advance to next. The Edge has a conditions field, which allows you to specify different control flow paths based on variables in your WfRun. This is analogous to if/else in programming.",source:"@site/docs/05-developer-guide/08-wfspec-development/02-conditionals.md",sourceDirName:"05-developer-guide/08-wfspec-development",slug:"/developer-guide/wfspec-development/conditionals",permalink:"/docs/developer-guide/wfspec-development/conditionals",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/docs/developer-guide/wfspec-development/basics"},next:{title:"Mutating Variables",permalink:"/docs/developer-guide/wfspec-development/mutating-variables"}},c={},h=[{value:"Concepts",id:"concepts",level:2},{value:"Comparator Types",id:"comparator-types",level:3},{value:"The <code>WorkflowCondition</code>",id:"the-workflowcondition",level:2},{value:"IN Conditional",id:"in-conditional",level:3},{value:"If Statements",id:"if-statements",level:2},{value:"Nested Conditions",id:"nested-conditions",level:3},{value:"If Else Statements",id:"if-else-statements",level:2},{value:"While Loops",id:"while-loops",level:2}];function f(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.h1,{id:"conditionals-and-loops",children:"Conditionals and Loops"}),"\n",(0,a.jsxs)(o.p,{children:["In a LittleHorse ",(0,a.jsx)(o.code,{children:"WfSpec"}),", the ",(0,a.jsx)(o.a,{href:"/docs/api#edge",children:(0,a.jsx)(o.code,{children:"Edge"})})," structure tells the workflow scheduler what ",(0,a.jsx)(o.code,{children:"Node"})," to advance to next. The ",(0,a.jsx)(o.code,{children:"Edge"})," has a ",(0,a.jsx)(o.code,{children:"conditions"})," field, which allows you to specify different control flow paths based on variables in your ",(0,a.jsx)(o.code,{children:"WfRun"}),". This is analogous to ",(0,a.jsx)(o.code,{children:"if/else"})," in programming."]}),"\n",(0,a.jsx)(o.h2,{id:"concepts",children:"Concepts"}),"\n",(0,a.jsx)(o.admonition,{type:"tip",children:(0,a.jsxs)(o.p,{children:["This section covers the low-level details of how conditionals work in LittleHorse. If you just want to see some examples, skip ahead to ",(0,a.jsx)(o.a,{href:"#the-workflowcondition",children:"the next section"}),"."]})}),"\n",(0,a.jsxs)(o.p,{children:["An ",(0,a.jsx)(o.a,{href:"/docs/api#edgecondition",children:(0,a.jsx)(o.code,{children:"EdgeCondition"})})," has three parts:"]}),"\n",(0,a.jsxs)(o.ol,{children:["\n",(0,a.jsx)(o.li,{children:'A "LHS" (left-hand side),'}),"\n",(0,a.jsxs)(o.li,{children:["A ",(0,a.jsx)(o.code,{children:"comparator"}),", and"]}),"\n",(0,a.jsx)(o.li,{children:'A "RHS" (right-hand side).'}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["The ",(0,a.jsx)(o.code,{children:"comparator"})," is a boolean operator that operates on the LHS and the RHS and returns either ",(0,a.jsx)(o.code,{children:"true"})," or ",(0,a.jsx)(o.code,{children:"false"}),". The ",(0,a.jsx)(o.code,{children:"EdgeCondition"})," evaluates to `"]}),"\n",(0,a.jsxs)(o.p,{children:["Just as ",(0,a.jsx)(o.code,{children:"if/else"})," allows you to implement control flow in your programs, Conditional Branching allows you to add control flow to your LittleHorse Workflows."]}),"\n",(0,a.jsx)(o.p,{children:"Let's look at how an if statement works in Python:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:"if foo < bar:\n    do_something()\n"})}),"\n",(0,a.jsxs)(o.p,{children:["Look at the booean expression ",(0,a.jsx)(o.code,{children:"foo < bar"}),". It consists of a left-hand-side (",(0,a.jsx)(o.code,{children:"foo"}),"), comparator (",(0,a.jsx)(o.code,{children:"<"}),"), and right-hand-side (",(0,a.jsx)(o.code,{children:"bar"}),")."]}),"\n",(0,a.jsxs)(o.p,{children:["In LittleHorse, we have Edge Conditions, which also have an LHS, Comparator, and RHS. The LHS and RHS are any ",(0,a.jsx)(o.code,{children:"VariableAssignment"}),", meaning they can be a value taken from some ",(0,a.jsx)(o.code,{children:"Variable"})," or a hard-coded literal value."]}),"\n",(0,a.jsx)(o.h3,{id:"comparator-types",children:"Comparator Types"}),"\n",(0,a.jsxs)(o.p,{children:["The supported ",(0,a.jsx)(o.code,{children:"Comparator"}),"'s are:"]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:"LESS_THAN"})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:"GREATER_THAN"})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:"LESS_THAN_EQ"})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:"GREATER_THAN_EQ"})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:"EQUALS"})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:"NOT_EQUALS"})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:"IN"})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:"NOT_IN"})}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["You can find a detailed description of them in the ",(0,a.jsx)(o.a,{href:"/docs/api#comparator",children:"protobuf documentation"}),"."]}),"\n",(0,a.jsxs)(o.h2,{id:"the-workflowcondition",children:["The ",(0,a.jsx)(o.code,{children:"WorkflowCondition"})]}),"\n",(0,a.jsxs)(o.p,{children:["Our SDK's all have a ",(0,a.jsx)(o.code,{children:"WorkflowCondition"})," struct/object which makes it really easy to work with ",(0,a.jsx)(o.code,{children:"EdgeCondition"}),"s in a way that feels just like using if/else. In fact, you may not even need to know that the ",(0,a.jsx)(o.code,{children:"EdgeCondition"})," exists."]}),"\n",(0,a.jsxs)(o.p,{children:["In LittleHorse, you can create an expression using ",(0,a.jsx)(o.code,{children:"WorkflowThread#condition"})," in any of our SDK's. The method or function takes three parameters:"]}),"\n",(0,a.jsxs)(o.ol,{children:["\n",(0,a.jsxs)(o.li,{children:["The ",(0,a.jsx)(o.code,{children:"LHS"})]}),"\n",(0,a.jsx)(o.li,{children:"The Comparator"}),"\n",(0,a.jsxs)(o.li,{children:["The ",(0,a.jsx)(o.code,{children:"RHS"})]}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["The ",(0,a.jsx)(o.code,{children:"LHS"})," and the ",(0,a.jsx)(o.code,{children:"RHS"})," can be set in two ways:"]}),"\n",(0,a.jsxs)(o.ol,{children:["\n",(0,a.jsx)(o.li,{children:"A literal value."}),"\n",(0,a.jsxs)(o.li,{children:["A ",(0,a.jsx)(o.code,{children:"WfRunVariable"}),", which means that the value of that ",(0,a.jsx)(o.code,{children:"Variable"})," in the ",(0,a.jsx)(o.code,{children:"WfRun"})," is used."]}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["The following is equivalent to ",(0,a.jsx)(o.code,{children:"foo < 3"}),":"]}),"\n","\n",(0,a.jsxs)(t.A,{children:[(0,a.jsx)(l.A,{value:"java",label:"Java",default:!0,children:(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-java",children:'\nimport io.littlehorse.sdk.common.proto.Comparator;\nimport io.littlehorse.sdk.common.proto.VariableType;\n// ...\n\nWfRunVariable foo = wf.addVariable("foo", VariableType.INT);\n\nWorkflowCondition condition = wf.condition(\n    foo,\n    Comparator.LESS_THAN,\n    3\n);\n'})})}),(0,a.jsx)(l.A,{value:"go",label:"Go",children:(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-go",children:'foo := wf.AddVariable("foo", model.VariableType_INT)\n\ncondition := wf.Condition(\n    foo,\n    model.Comparator_LESS_THAN,\n    3,\n)\n'})})}),(0,a.jsx)(l.A,{value:"python",label:"Python",children:(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'def entrypoint(wf: WorkflowThread) -> None:\n    foo = wf.add_variable("foo", VariableType.INT)\n    condition = wf.condition(foo, Comparator.LESS_THAN, 3)\n'})})})]}),"\n",(0,a.jsx)(o.h3,{id:"in-conditional",children:"IN Conditional"}),"\n",(0,a.jsxs)(o.p,{children:["For the ",(0,a.jsx)(o.code,{children:"IN"})," conditional you have to provide either a variable or a literal value on the ",(0,a.jsx)(o.code,{children:"LHS"})," that might be contained on a collection of values that is provided on the ",(0,a.jsx)(o.code,{children:"RHS"}),"."]}),"\n",(0,a.jsxs)(t.A,{children:[(0,a.jsx)(l.A,{value:"java",label:"Java",default:!0,children:(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-java",children:'\nimport io.littlehorse.sdk.common.proto.Comparator;\n// ...\n\nWfRunVariable foo = wf.addVariable("foo", VariableType.INT);\n\nWorkflowCondition condition = wf.condition(\n    foo,\n    Comparator.IN,\n    [2, 3, 4]\n);\n'})})}),(0,a.jsx)(l.A,{value:"go",label:"Go",children:(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-go",children:'foo := wf.AddVariable("foo", model.VariableType_INT)\n\ncondition := wf.Condition(\n    foo,\n    model.IN,\n    [3]int{1,2,3},\n)\n'})})}),(0,a.jsx)(l.A,{value:"python",label:"Python",children:(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'def entrypoint(wf: WorkflowThread) -> None:\n    foo = wf.add_variable("foo", VariableType.INT)\n    condition = wf.condition(foo, Comparator.IN, [1, 2, 3])\n'})})})]}),"\n",(0,a.jsx)(o.h2,{id:"if-statements",children:"If Statements"}),"\n",(0,a.jsxs)(o.p,{children:["To do an ",(0,a.jsx)(o.code,{children:"if"})," statement, you use ",(0,a.jsx)(o.code,{children:"WorkflowThread::doIf()"}),". The method takes two arguments:"]}),"\n",(0,a.jsxs)(o.ol,{children:["\n",(0,a.jsxs)(o.li,{children:["A ",(0,a.jsx)(o.code,{children:"WorkflowCondition"})," (see above)."]}),"\n",(0,a.jsxs)(o.li,{children:["An ",(0,a.jsx)(o.code,{children:"IfElseBody"})," implementation."]}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["The ",(0,a.jsx)(o.code,{children:"IfElseBody"})," is just a type: think of it as a functional interface that's the same as a ",(0,a.jsx)(o.code,{children:"ThreadFunc"})," but it's used differently. Generally, an ",(0,a.jsx)(o.code,{children:"IfElseBody"})," is provided by an anonymous function; however, in Python it is required to pass a proper function (not a ",(0,a.jsx)(o.code,{children:"lambda"}),")."]}),"\n",(0,a.jsxs)(o.p,{children:["Here's an example of executing a ",(0,a.jsx)(o.code,{children:"my-task"})," Task if ",(0,a.jsx)(o.code,{children:"foo < 3"}),":"]}),"\n",(0,a.jsxs)(t.A,{children:[(0,a.jsx)(l.A,{value:"java",label:"Java",default:!0,children:(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-java",children:'WfRunVariable foo = wf.addVariable("foo", VariableType.INT);\n\nwf.doIf(\n    wf.condition(foo, Comparator.LESS_THAN, 3),\n    ifBody -> {\n        ifBody.execute("my-task");\n    }\n);\n'})})}),(0,a.jsx)(l.A,{value:"go",label:"Go",children:(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-go",children:'foo := wf.AddVariable("foo", model.VariableType_INT)\n\nwf.DoIf(\n    wf.Condition(foo, model.Comparator_LESS_THAN, 3),\n    func (ifBody *wflib.WorkflowThread) {\n        ifBody.Execute("my-task")\n    },\n)\n'})})}),(0,a.jsxs)(l.A,{value:"python",label:"Python",children:[(0,a.jsxs)(o.p,{children:["In python you have to use a first-class function, pay attention to ",(0,a.jsx)(o.code,{children:"if_body"})," function.\nThis is also applicable for methods."]}),(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'def if_body(wf: WorkflowThread) -> None:\n    wf.execute("my-task")\n\ndef entrypoint(wf: WorkflowThread) -> None:\n    foo = wf.add_variable("foo", VariableType.INT)\n    condition = wf.condition(foo, Comparator.LESS_THAN, 3)\n    wf.do_if(condition, if_body)\n'})})]})]}),"\n",(0,a.jsx)(o.h3,{id:"nested-conditions",children:"Nested Conditions"}),"\n",(0,a.jsxs)(o.p,{children:["Here's an example of executing a ",(0,a.jsx)(o.code,{children:"my-task"})," Task if ",(0,a.jsx)(o.code,{children:"foo < 3 and foo > 1"}),":"]}),"\n",(0,a.jsxs)(t.A,{children:[(0,a.jsx)(l.A,{value:"java",label:"Java",default:!0,children:(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-java",children:'WfRunVariable foo = wf.addVariable("foo", VariableType.INT);\nwf.doIf(wf.condition(foo, Comparator.GREATER_THAN, 1),\n        ifHandler -> {\n            wf.doIf(wf.condition(foo, Comparator.LESS_THAN, 3), ifBody -> {\n                ifBody.execute("my-task");\n            });\n});\n'})})}),(0,a.jsx)(l.A,{value:"go",label:"Go",children:(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-go",children:'wf.DoIf(\n\t\twf.Condition(foo, model.Comparator_LESS_THAN, 3),\n\t\tfunc (ifBody *wflib.WorkflowThread) {\n\t\t\twf.DoIf(\n\t\t\t\t\twf.Condition(foo, model.Comparator.GREATER_THAN, 1),\n\t\t\t\t\tfunc (ifBody *wflib.WorkflowThread) {\n\t\t\t\t\t\tifBody.Execute("my-task")\n\t\t\t\t\t}\n\t\t\t)\n\t\t}\n\t)\n'})})}),(0,a.jsxs)(l.A,{value:"python",label:"Python",children:[(0,a.jsxs)(o.p,{children:["In python you have to use a first-class function, pay attention to ",(0,a.jsx)(o.code,{children:"if_body"})," function.\nThis is also applicable for methods."]}),(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'from littlehorse.model import VariableType, Comparator\nfrom littlehorse.workflow import WorkflowThread\n\nfoo = wf.add_variable("foo", VariableType.INT)\n\ndef if_body(wf: WorkflowThread) -> None:\n    wf.execute("my-task")\n\ndef second_if(wf: WorkflowThread) -> None:\n    wf.do_if(wf.condition(foo, Comparator.GREATER_THAN, 1), if_body)\n\ndef entrypoint(wf: WorkflowThread) -> None:\n    condition = wf.condition(foo, Comparator.LESS_THAN, 3)\n    wf.do_if(condition, second_if)\n'})})]})]}),"\n",(0,a.jsx)(o.h2,{id:"if-else-statements",children:"If Else Statements"}),"\n",(0,a.jsxs)(o.p,{children:["To do an ",(0,a.jsx)(o.code,{children:"if"}),"/",(0,a.jsx)(o.code,{children:"else"})," statement, you can use ",(0,a.jsx)(o.code,{children:"WorkflowThread::doIfElse()"}),", which is identical to ",(0,a.jsx)(o.code,{children:"doIf()"})," but it takes an additional ",(0,a.jsx)(o.code,{children:"IfElseBody"})," that is executed if the condition is false."]}),"\n",(0,a.jsx)(o.p,{children:"An example:"}),"\n",(0,a.jsxs)(t.A,{children:[(0,a.jsx)(l.A,{value:"java",label:"Java",default:!0,children:(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-java",children:'WfRunVariable foo = wf.addVariable("foo", VariableType.INT);\n\nwf.doIf(\n    wf.condition(foo, Comparator.LESS_THAN, 3),\n    ifBody -> {\n        ifBody.execute("my-task");\n    },\n    elseBody -> {\n        elseBody.execute("my-other-task");\n        elseBody.execute("yet-another-task");\n    }\n);\n'})})}),(0,a.jsx)(l.A,{value:"go",label:"Go",children:(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-go",children:'foo := wf.AddVariable("foo", model.VariableType_INT)\n\nwf.DoIfElse(\n    wf.Condition(foo, model.Comparator_LESS_THAN, 3),\n    func (ifBody *wflib.WorkflowThread) {\n        ifBody.Execute("my-task")\n    },\n    func (elseBody *wflib.WorkflowThread) {\n        elseBody.Execute("another-task")\n        elseBody.Execute("yet-another-task")\n    },\n)\n'})})}),(0,a.jsxs)(l.A,{value:"python",label:"Python",children:[(0,a.jsxs)(o.p,{children:["In python you have to use a first-class function, pay attention to ",(0,a.jsx)(o.code,{children:"if_body"})," and ",(0,a.jsx)(o.code,{children:"else_body"})," functions.\nThis is also applicable for methods."]}),(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'def entrypoint(wf: WorkflowThread) -> None:\n    def else_body(wf: WorkflowThread) -> None:\n        wf.execute("another-task")\n        wf.execute("yet-another-task")\n\n    def if_body(wf: WorkflowThread) -> None:\n        wf.execute("my-task")\n\n    foo = wf.add_variable("foo", VariableType.INT)\n    condition = wf.condition(foo, Comparator.LESS_THAN, 3)\n    wf.do_if(condition, if_body, else_body)\n'})})]})]}),"\n",(0,a.jsx)(o.h2,{id:"while-loops",children:"While Loops"}),"\n",(0,a.jsxs)(o.p,{children:["The ",(0,a.jsx)(o.code,{children:"WorkflowThread"})," in LittleHorse also has a ",(0,a.jsx)(o.code,{children:"doWhile()"})," function/method. To use it, you pass in a ",(0,a.jsx)(o.code,{children:"WorkflowCondition"})," and a ",(0,a.jsx)(o.code,{children:"WhileBody"}),", which is just a lambda function or interface defining workflow logic."]}),"\n",(0,a.jsx)(o.admonition,{type:"info",children:(0,a.jsxs)(o.p,{children:["The semantics of ",(0,a.jsx)(o.code,{children:"WorkflowThread#doWhile()"})," are the same as a ",(0,a.jsx)(o.code,{children:"while"})," loop in programming, not a ",(0,a.jsx)(o.code,{children:"do while"}),". That is because ",(0,a.jsx)(o.code,{children:"while"})," is a reserved word in most languages, so we couldn't add a function called ",(0,a.jsx)(o.code,{children:"while"}),"."]})}),"\n",(0,a.jsxs)(o.p,{children:["Here's an example that executes two tasks in a loop as long as ",(0,a.jsx)(o.code,{children:"foo < 3"}),":"]}),"\n",(0,a.jsxs)(t.A,{children:[(0,a.jsx)(l.A,{value:"java",label:"Java",default:!0,children:(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-java",children:'WfRunVariable foo = wf.addVariable("foo", VariableType.INT);\n\nwf.doWhile(\n    wf.condition(foo, Comparator.LESS_THAN, 3),\n    loopBody -> {\n        loopBody.execute("my-task");\n        loopBody.execute("another-task");\n    }\n);\n'})})}),(0,a.jsx)(l.A,{value:"go",label:"Go",children:(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-go",children:'foo := wf.AddVariable("foo", model.VariableType_INT)\n\nwf.DoWhile(\n    wf.Condition(foo, model.Comparator_LESS_THAN, 3),\n    func (loopBody *wflib.WorkflowThread) {\n        loopBody.Execute("my-task")\n        loopBody.Execute("another-task")\n    },\n)\n'})})}),(0,a.jsxs)(l.A,{value:"python",label:"Python",children:[(0,a.jsxs)(o.p,{children:["In python you have to use a first-class function, pay attention to ",(0,a.jsx)(o.code,{children:"while_body"})," function.\nThis is also applicable for methods."]}),(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'def entrypoint(wf: WorkflowThread) -> None:\n    def while_body(wf: WorkflowThread) -> None:\n        wf.execute("my-task")\n        wf.execute("another-task")\n\n    foo = wf.add_variable("foo", VariableType.INT)\n    condition = wf.condition(foo, Comparator.LESS_THAN, 3)\n    wf.do_while(condition, while_body)\n'})})]})]})]})}function u(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},9365:(e,o,n)=>{n.d(o,{A:()=>l});n(6540);var a=n(8215);const i={tabItem:"tabItem_Ymn6"};var t=n(4848);function l(e){let{children:o,hidden:n,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,l),hidden:n,children:o})}},1470:(e,o,n)=>{n.d(o,{A:()=>T});var a=n(6540),i=n(8215),t=n(3104),l=n(6347),r=n(205),s=n(7485),d=n(1682),c=n(9466);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:o}=e;return!!o&&"object"==typeof o&&"value"in o}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:o,children:n}=e;return(0,a.useMemo)((()=>{const e=o??function(e){return h(e).map((e=>{let{props:{value:o,label:n,attributes:a,default:i}}=e;return{value:o,label:n,attributes:a,default:i}}))}(n);return function(e){const o=(0,d.X)(e,((e,o)=>e.value===o.value));if(o.length>0)throw new Error(`Docusaurus error: Duplicate values "${o.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[o,n])}function u(e){let{value:o,tabValues:n}=e;return n.some((e=>e.value===o))}function p(e){let{queryString:o=!1,groupId:n}=e;const i=(0,l.W6)(),t=function(e){let{queryString:o=!1,groupId:n}=e;if("string"==typeof o)return o;if(!1===o)return null;if(!0===o&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:o,groupId:n});return[(0,s.aZ)(t),(0,a.useCallback)((e=>{if(!t)return;const o=new URLSearchParams(i.location.search);o.set(t,e),i.replace({...i.location,search:o.toString()})}),[t,i])]}function x(e){const{defaultValue:o,queryString:n=!1,groupId:i}=e,t=f(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:o,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(o){if(!u({value:o,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${o}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return o}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:t}))),[d,h]=p({queryString:n,groupId:i}),[x,j]=function(e){let{groupId:o}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(o),[i,t]=(0,c.Dv)(n);return[i,(0,a.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:i}),m=(()=>{const e=d??x;return u({value:e,tabValues:t})?e:null})();(0,r.A)((()=>{m&&s(m)}),[m]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);s(e),h(e),j(e)}),[h,j,t]),tabValues:t}}var j=n(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=n(4848);function y(e){let{className:o,block:n,selectedValue:a,selectValue:l,tabValues:r}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,t.a_)(),c=e=>{const o=e.currentTarget,n=s.indexOf(o),i=r[n].value;i!==a&&(d(o),l(i))},h=e=>{let o=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;o=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;o=s[n]??s[s.length-1];break}}o?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},o),children:r.map((e=>{let{value:o,label:n,attributes:t}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:a===o?0:-1,"aria-selected":a===o,ref:e=>s.push(e),onKeyDown:h,onClick:c,...t,className:(0,i.A)("tabs__item",m.tabItem,t?.className,{"tabs__item--active":a===o}),children:n??o},o)}))})}function b(e){let{lazy:o,children:n,selectedValue:i}=e;const t=(Array.isArray(n)?n:[n]).filter(Boolean);if(o){const e=t.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:t.map(((e,o)=>(0,a.cloneElement)(e,{key:o,hidden:e.props.value!==i})))})}function v(e){const o=x(e);return(0,w.jsxs)("div",{className:(0,i.A)("tabs-container",m.tabList),children:[(0,w.jsx)(y,{...o,...e}),(0,w.jsx)(b,{...o,...e})]})}function T(e){const o=(0,j.A)();return(0,w.jsx)(v,{...e,children:h(e.children)},String(o))}},8453:(e,o,n)=>{n.d(o,{R:()=>l,x:()=>r});var a=n(6540);const i={},t=a.createContext(i);function l(e){const o=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(t.Provider,{value:o},e.children)}}}]);