"use strict";(self.webpackChunklh_site=self.webpackChunklh_site||[]).push([[3828],{4298:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var r=s(4848),i=s(8453);const n={title:"Releasing 0.9",description:"Revamping the LittleHorse Dashboard",slug:"littlehorse-0.9-release",authors:["lh_council"],tags:["littlehorse","release"],image:"https://avatars.githubusercontent.com/u/140006313?s=400&u=7bf4c91d92dfe590ac71bb6b4821e1a81aa5b712&v=4",hide_table_of_contents:!1},a=void 0,l={permalink:"/blog/littlehorse-0.9-release",source:"@site/blog/2024-06-24-0.9.2-release.md",title:"Releasing 0.9",description:"Revamping the LittleHorse Dashboard",date:"2024-06-24T00:00:00.000Z",tags:[{inline:!1,label:"LittleHorse Orchestrator",permalink:"/blog/tags/littlehorse/",description:"Information about the LittleHorse Orchestrator."},{inline:!1,label:"LittleHorse Releases",permalink:"/blog/tags/release/",description:"Release blogs for LittleHorse Orchestrator."}],readingTime:2.35,hasTruncateMarker:!0,authors:[{name:"The LittleHorse Council",title:"The Council of LittleHorse Maintainers",description:"LittleHorse Orchestrator is maintained by LittleHorse Enterprises LLC and available under the SSPL license. The LittleHorse Council is the group of engineers inside LittleHorse Enterprises LLC who are responsible for the stewardship of the open-source Orchestrator project and charged with looking out for the best interests of the LH Community.",url:"https://littlehorse.io",page:{permalink:"/blog/authors/lh-council"},socials:{github:"https://github.com/littlehorse-enterprises",linkedin:"https://www.linkedin.com/company/littlehorse"},imageURL:"https://avatars.githubusercontent.com/u/140006313?s=400&u=7bf4c91d92dfe590ac71bb6b4821e1a81aa5b712&v=4",key:"lh_council"}],frontMatter:{title:"Releasing 0.9",description:"Revamping the LittleHorse Dashboard",slug:"littlehorse-0.9-release",authors:["lh_council"],tags:["littlehorse","release"],image:"https://avatars.githubusercontent.com/u/140006313?s=400&u=7bf4c91d92dfe590ac71bb6b4821e1a81aa5b712&v=4",hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Releasing 0.10",permalink:"/blog/littlehorse-0.10-release"},nextItem:{title:"Releasing 0.8",permalink:"/blog/littlehorse-0.8-release"}},o={authorsImageUrls:[void 0]},h=[{value:"New Features",id:"new-features",level:2},{value:"Dashboard Rewrite",id:"dashboard-rewrite",level:3},{value:"Internal Task Queue Optimizations",id:"internal-task-queue-optimizations",level:3},{value:"Principal Deletion",id:"principal-deletion",level:3},{value:"<code>PollThread</code> in Java Task Worker",id:"pollthread-in-java-task-worker",level:3},{value:"What&#39;s Next",id:"whats-next",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"0.9.2"})," release is now availble and ready for use.  The ",(0,r.jsx)(t.code,{children:"0.9.x"})," releases focused mainly on:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Improving the user experience on the LittleHorse Dashboard"}),"\n",(0,r.jsx)(t.li,{children:"Improving the reliability of the LH Server in the face of rebalances and failures."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"new-features",children:"New Features"}),"\n",(0,r.jsxs)(t.p,{children:["While the majority of the improvements in the ",(0,r.jsx)(t.code,{children:"0.9"})," release revolve around performance and stability, several of them are highly visible to the user (especially the new dashboard!)."]}),"\n",(0,r.jsx)(t.h3,{id:"dashboard-rewrite",children:"Dashboard Rewrite"}),"\n",(0,r.jsxs)(t.p,{children:["With help from ",(0,r.jsx)(t.a,{href:"https://github.com/diablouma",children:"Nelson Jumbo"}),", LittleHorse Knight ",(0,r.jsx)(t.a,{href:"https://github.com/mijailrondon",children:"Mija\xedl Rond\xf3n"})," rewrote and revamped our administrative dashboard. It now inclues new features such as:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"User Task Detail page"}),"\n",(0,r.jsxs)(t.li,{children:["Improved details on ",(0,r.jsx)(t.code,{children:"TaskRun"})," progress"]}),"\n",(0,r.jsxs)(t.li,{children:["Improved details on ",(0,r.jsx)(t.code,{children:"WfRun"})," progress"]}),"\n",(0,r.jsx)(t.li,{children:"A plethora of small bug fixes."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"internal-task-queue-optimizations",children:"Internal Task Queue Optimizations"}),"\n",(0,r.jsxs)(t.p,{children:["Deep in the internals of the LittleHorse Server, we implement a Task Queue mechanism to store ",(0,r.jsx)(t.code,{children:"ScheduledTask"}),"s before they're dispatched to the Task Worker clients. This release included many improvements to stability of the Task Queues."]}),"\n",(0,r.jsxs)(t.p,{children:["Most importantly, our Grumpy Maintainer (Eduwer Camacaro) put a cap on the memory consumption of a single ",(0,r.jsx)(t.code,{children:"TaskDef"}),". Prior to this release, it was possible for poorly-behaved clients to cause an OOM on the server by running millions of workflows which use a ",(0,r.jsx)(t.code,{children:"TaskDef"})," but not executing the resulting ",(0,r.jsx)(t.code,{children:"TaskRun"}),"s. This would cause an un-bounded buildup of ",(0,r.jsx)(t.code,{children:"ScheduledTask"}),"s in memory until the server crashed."]}),"\n",(0,r.jsxs)(t.p,{children:["After the ",(0,r.jsx)(t.code,{children:"0.9"})," release, any more than 1,000 ",(0,r.jsx)(t.code,{children:"ScheduledTask"}),"s for a certain ",(0,r.jsx)(t.code,{children:"TaskDef"})," are not loaded into memory but left on disk."]}),"\n",(0,r.jsx)(t.h3,{id:"principal-deletion",children:"Principal Deletion"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"0.9"})," release includes the ability to delete a ",(0,r.jsx)(t.code,{children:"Principal"}),". The ",(0,r.jsx)(t.code,{children:"rpc DeletePrincipal"})," is smart enough to ensure that there is always at least one Admin ",(0,r.jsx)(t.code,{children:"Principal"})," to prevent a user from locking themselves out of the cluster."]}),"\n",(0,r.jsxs)(t.h3,{id:"pollthread-in-java-task-worker",children:[(0,r.jsx)(t.code,{children:"PollThread"})," in Java Task Worker"]}),"\n",(0,r.jsxs)(t.p,{children:["We refactored the internal implementation of the Java Task Worker so that, for each LH Server in the cluster, the Task Worker creates a single ",(0,r.jsx)(t.code,{children:"PollThread"})," object which is responsible for polling and executing ",(0,r.jsx)(t.code,{children:"TaskRun"}),"s. The ",(0,r.jsx)(t.code,{children:"PollThread"}),"s now poll in parallel, drastically increasing the throughput of a single Java Task Worker."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"PollThread"})," was introduced in ",(0,r.jsx)(t.a,{href:"https://github.com/littlehorse-enterprises/littlehorse/pull/796",children:"#796"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"whats-next",children:"What's Next"}),"\n",(0,r.jsxs)(t.p,{children:["Our wire protocol (the GRPC API) is quite stable; there have been no major breaking changes since we introduced the alpha version of Multi-Tenancy in ",(0,r.jsx)(t.code,{children:"0.7"}),". We are diligently proceeding through soak tests, load tests, and chaos tests with our server and we have found and addressed several issues."]}),"\n",(0,r.jsxs)(t.p,{children:["We continue to look foward to the ",(0,r.jsx)(t.code,{children:"1.0"})," release, and we will reach that milestone once:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"We are satisfied with results of load tests and soak tests."}),"\n",(0,r.jsx)(t.li,{children:"We have had language experts review each of our three main SDK's (Java, Go, Python) and we have addressed any change requests."}),"\n",(0,r.jsx)(t.li,{children:"We approach a year without any breaking changes to our wire protocol."}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>l});var r=s(6540);const i={},n=r.createContext(i);function a(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);