"use strict";(self.webpackChunklh_site=self.webpackChunklh_site||[]).push([[9291],{365:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var t=n(4848),r=n(8453),l=n(1470),o=n(9365);const i={},s="Mutating Variables",d={id:"developer-guide/wfspec-development/mutating-variables",title:"Mutating Variables",description:"Recall from the Concepts Documentation that every Node can have zero or more VariableMutations on it. A VariableMutation changes the value of a ThreadRun's Variables.",source:"@site/docs/05-developer-guide/08-wfspec-development/03-mutating-variables.md",sourceDirName:"05-developer-guide/08-wfspec-development",slug:"/developer-guide/wfspec-development/mutating-variables",permalink:"/docs/developer-guide/wfspec-development/mutating-variables",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Conditionals and Loops",permalink:"/docs/developer-guide/wfspec-development/conditionals"},next:{title:"External Events",permalink:"/docs/developer-guide/wfspec-development/external-events"}},c={},u=[{value:"Basic Structure",id:"basic-structure",level:2},{value:"Examples",id:"examples",level:2},{value:"Hard-Coded Literal Value",id:"hard-coded-literal-value",level:3},{value:"Using a <code>NodeOutput</code>",id:"using-a-nodeoutput",level:3},{value:"Using other <code>WfRunVariables</code>",id:"using-other-wfrunvariables",level:3},{value:"Using JsonPath",id:"using-jsonpath",level:2}];function h(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"mutating-variables",children:"Mutating Variables"}),"\n",(0,t.jsxs)(a.p,{children:["Recall from the ",(0,t.jsx)(a.a,{href:"/docs/concepts/workflows#variables",children:"Concepts Documentation"})," that every ",(0,t.jsx)(a.code,{children:"Node"})," can have zero or more ",(0,t.jsx)(a.code,{children:"VariableMutation"}),"s on it. A ",(0,t.jsx)(a.code,{children:"VariableMutation"})," changes the value of a ",(0,t.jsx)(a.code,{children:"ThreadRun"}),"'s ",(0,t.jsx)(a.code,{children:"Variable"}),"s."]}),"\n",(0,t.jsxs)(a.p,{children:["You can add a ",(0,t.jsx)(a.code,{children:"VariableMutation"})," at any point in your Thread Function by using tghe ",(0,t.jsx)(a.code,{children:"WorkflowThread#mutate()"})," method or function."]}),"\n",(0,t.jsx)(a.h2,{id:"basic-structure",children:"Basic Structure"}),"\n",(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.code,{children:"WorkflowThread::Mutate()"})," functions/methods take three arguments:"]}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["A ",(0,t.jsx)(a.code,{children:"WfRunVariable"})," which is the LHS to mutate."]}),"\n",(0,t.jsxs)(a.li,{children:["A ",(0,t.jsx)(a.code,{children:"VariableMutationType"})," which specifies which mutation to execute."]}),"\n",(0,t.jsxs)(a.li,{children:["A ",(0,t.jsx)(a.code,{children:"WfRunVariable"}),", ",(0,t.jsx)(a.code,{children:"NodeOutput"}),", Object/interface/struct, or primitive type to serve as the RHS for the mutation."]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["The valid Mutation Types come from the ",(0,t.jsx)(a.code,{children:"VariableMutationType"})," enum and are:"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.code,{children:"ASSIGN"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.code,{children:"ADD"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.code,{children:"SUBTRACT"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.code,{children:"DIVIDE"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.code,{children:"MULTIPLY"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.code,{children:"EXTEND"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.code,{children:"REMOVE_IF_PRESENT"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.code,{children:"REMOVE_KEY"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.code,{children:"REMOVE_INDEX"})}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["A description of each ",(0,t.jsx)(a.code,{children:"VariableType"})," can be found on the ",(0,t.jsx)(a.a,{href:"/docs/api#variabletype",children:"protobuf documentation"}),"."]}),"\n",(0,t.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(a.p,{children:["Here are some examples of mutating variables inside a ",(0,t.jsx)(a.code,{children:"WfSpec"}),"."]}),"\n",(0,t.jsx)(a.h3,{id:"hard-coded-literal-value",children:"Hard-Coded Literal Value"}),"\n",(0,t.jsxs)(a.p,{children:["Let's assign our variable ",(0,t.jsx)(a.code,{children:"foo"})," to the hard-coded value of ",(0,t.jsx)(a.code,{children:"3"}),"."]}),"\n","\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(o.A,{value:"java",label:"Java",default:!0,children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'public void threadFunction(WorkflowThread thread) {\n    WfRunVariable foo = thread.addVariable("foo", VariableType.INT);\n    // ... optionally execute some tasks\n    thread.mutate(foo, VariableMutationType.ASSIGN, 3);\n}\n'})})}),(0,t.jsx)(o.A,{value:"go",label:"Go",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-go",children:'func someThreadFunction(thread *wflib.WorkflowThread) {\n    foo := thread.AddVariable("foo", model.VariableType_INT)\n    // ... optionally execute some tasks\n    thread.Mutate(foo, model.VariableMutationType_ASSIGN, 3)\n}\n'})})}),(0,t.jsx)(o.A,{value:"python",label:"Python",default:!0,children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'def thread_function(thread: WorkflowThread) -> None:\n    foo = thread.add_variable("foo", VariableType.INT)\n    # ... optionally execute some tasks\n    thread.mutate(foo, VariableMutationType.ASSIGN, 3)\n'})})})]}),"\n",(0,t.jsxs)(a.h3,{id:"using-a-nodeoutput",children:["Using a ",(0,t.jsx)(a.code,{children:"NodeOutput"})]}),"\n",(0,t.jsxs)(a.p,{children:["Let's say we have a ",(0,t.jsx)(a.code,{children:"TaskDef"})," which returns an ",(0,t.jsx)(a.code,{children:"INT"})," value, and we want to add that value to our ",(0,t.jsx)(a.code,{children:"WfRunVariable"}),". To do that, we use the ",(0,t.jsx)(a.code,{children:"NodeOutput"})," as the ",(0,t.jsx)(a.code,{children:"RHS"}),"."]}),"\n",(0,t.jsx)(a.p,{children:"This is analogous to the following pseudocode."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"int myInt = 1;\nmyInt += doTask1();\n"})}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(o.A,{value:"java",label:"Java",default:!0,children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'public void threadFunction(WorkflowThread thread) {\n    WfRunVariable foo = thread.addVariable("foo", 3);\n    NodeOutput intOutput = thread.execute("some-task-that-returns-int");\n    thread.mutate(foo, VariableMutationType.ADD, intOutput);\n}\n'})})}),(0,t.jsx)(o.A,{value:"go",label:"Go",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-go",children:'func someThreadFunction(thread *wflib.WorkflowThread) {\n    foo := thread.AddVariableWithDefault("foo", model.VariableType_INT, 1)\n    taskOutput := thread.Execute("some-task-that-returns-int")\n    thread.Mutate(foo, model.VariableMutationType_ADD, taskOutput)\n}\n'})})}),(0,t.jsx)(o.A,{value:"python",label:"Python",default:!0,children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'def thread_function(thread: WorkflowThread) -> None:\n    foo = thread.add_variable("foo", VariableType.INT, 3)\n    int_output = thread.execute("some-task-that-returns-int")\n    thread.mutate(foo, VariableMutationType.ADD, int_output)\n'})})})]}),"\n",(0,t.jsxs)(a.h3,{id:"using-other-wfrunvariables",children:["Using other ",(0,t.jsx)(a.code,{children:"WfRunVariables"})]}),"\n",(0,t.jsxs)(a.p,{children:["We can also use another ",(0,t.jsx)(a.code,{children:"WfRunVariable"})," as the ",(0,t.jsx)(a.code,{children:"RHS"}),". For example, if our ",(0,t.jsx)(a.code,{children:"LHS"})," is a ",(0,t.jsx)(a.code,{children:"JSON_ARR"}),", we append a ",(0,t.jsx)(a.code,{children:"STR"})," variable to it as follows:"]}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(o.A,{value:"java",label:"Java",default:!0,children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'public void threadFunction(WorkflowThread thread) {\n    WfRunVariable strToAppend = thread.addVariable("string-to-append", VariableType.STR);\n    WfRunVariable myList = thread.addVariable("my-list", VariableType.JSON_ARR);\n\n    // ... execute some tasks\n\n    thread.mutate(myList, VariableMutationType.EXTEND, strToAppend);\n}\n'})})}),(0,t.jsx)(o.A,{value:"go",label:"Go",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-go",children:'func someThreadFunction(thread *wflib.WorkflowThread) {\n    strToAppend := thread.AddVariable("string-to-append", model.VariableType_STR)\n    myList := thread.AddVariable("my-list", model.VariableType_JSON_ARR)\n\n    // ... execute a few tasks\n\n    thread.Mutate(myList, model.VariableMutationType_EXTEND, strToAppend)\n}\n'})})}),(0,t.jsx)(o.A,{value:"python",label:"Python",default:!0,children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'def thread_function(thread: WorkflowThread) -> None:\n    str_to_append = thread.add_variable("string-to-append", VariableType.STR)\n    my_list = thread.add_variable("my-list", VariableType.JSON_ARR)\n\n    # ... execute a few tasks\n\n    thread.mutate(my_list, VariableMutationType.EXTEND, str_to_append)\n'})})})]}),"\n",(0,t.jsx)(a.h2,{id:"using-jsonpath",children:"Using JsonPath"}),"\n",(0,t.jsxs)(a.p,{children:["Both ",(0,t.jsx)(a.code,{children:"NodeOutput"})," and ",(0,t.jsx)(a.code,{children:"WfRunVariable"})," have a ",(0,t.jsx)(a.code,{children:"#jsonPath()"})," method."]}),"\n",(0,t.jsxs)(a.p,{children:["If your ",(0,t.jsx)(a.code,{children:"LHS"})," variable is of type ",(0,t.jsx)(a.code,{children:"JSON_ARR"})," or ",(0,t.jsx)(a.code,{children:"JSON_OBJ"}),", you can use ",(0,t.jsx)(a.code,{children:"WfRunVariable#jsonPath()"})," to allow you to mutate a specific sub-field of your object or list. For eample, if I have a ",(0,t.jsx)(a.code,{children:"my-var"})," variable as follows:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n  "foo": "bar",\n  "counter": 123\n}\n'})}),"\n",(0,t.jsxs)(a.p,{children:["and I want to increment the ",(0,t.jsx)(a.code,{children:"counter"})," field, I can do so as follows:"]}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(o.A,{value:"java",label:"Java",default:!0,children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'public void threadFunction(WorkflowThread thread) {\n    WfRunVariable myVar = thread.addVariable("my-var", VariableType.JSON_OBJ);\n    // ... execute some tasks\n    thread.mutate(myVar.jsonPath("$.foo"), VariableMutationType.ADD, 1);\n}\n'})})}),(0,t.jsx)(o.A,{value:"go",label:"Go",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-go",children:'func someThread(thread *wflib.WorkflowThread) {\n  myVar := thread.AddVariable("my-var", model.VariableType_JSON_OBJ)\n  fooPath := myVar.JsonPath("$.foo")\n  // ... execute some tasks\n  thread.Mutate(&fooPath, model.VariableMutationType_ADD, 1)\n}\n'})})}),(0,t.jsx)(o.A,{value:"python",label:"Python",default:!0,children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'def thread_function(thread: WorkflowThread) -> None:\n    my_var = thread.add_variable("my-var", VariableType.JSON_OBJ)\n    # ... execute some tasks\n    thread.mutate(my_var.with_json_path("$.foo"), VariableMutationType.ADD, 1)\n'})})})]}),"\n",(0,t.jsxs)(a.p,{children:["You can also use ",(0,t.jsx)(a.code,{children:".jsonPath()"})," on the RHS to pick out a specific field of your ",(0,t.jsx)(a.code,{children:"RHS"})," value."]})]})}function p(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9365:(e,a,n)=>{n.d(a,{A:()=>o});n(6540);var t=n(8215);const r={tabItem:"tabItem_Ymn6"};var l=n(4848);function o(e){let{children:a,hidden:n,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,o),hidden:n,children:a})}},1470:(e,a,n)=>{n.d(a,{A:()=>T});var t=n(6540),r=n(8215),l=n(3104),o=n(6347),i=n(205),s=n(7485),d=n(1682),c=n(9466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return u(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:r}}=e;return{value:a,label:n,attributes:t,default:r}}))}(n);return function(e){const a=(0,d.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function p(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function f(e){let{queryString:a=!1,groupId:n}=e;const r=(0,o.W6)(),l=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,s.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(r.location.search);a.set(l,e),r.replace({...r.location,search:a.toString()})}),[l,r])]}function b(e){const{defaultValue:a,queryString:n=!1,groupId:r}=e,l=h(e),[o,s]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:l}))),[d,u]=f({queryString:n,groupId:r}),[b,x]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,l]=(0,c.Dv)(n);return[r,(0,t.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),m=(()=>{const e=d??b;return p({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{m&&s(m)}),[m]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),x(e)}),[u,x,l]),tabValues:l}}var x=n(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(4848);function v(e){let{className:a,block:n,selectedValue:t,selectValue:o,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),c=e=>{const a=e.currentTarget,n=s.indexOf(a),r=i[n].value;r!==t&&(d(a),o(r))},u=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;a=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;a=s[n]??s[s.length-1];break}}a?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},a),children:i.map((e=>{let{value:a,label:n,attributes:l}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>s.push(e),onKeyDown:u,onClick:c,...l,className:(0,r.A)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":t===a}),children:n??a},a)}))})}function y(e){let{lazy:a,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function g(e){const a=b(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,j.jsx)(v,{...a,...e}),(0,j.jsx)(y,{...a,...e})]})}function T(e){const a=(0,x.A)();return(0,j.jsx)(g,{...e,children:u(e.children)},String(a))}},8453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>i});var t=n(6540);const r={},l=t.createContext(r);function o(e){const a=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(l.Provider,{value:a},e.children)}}}]);