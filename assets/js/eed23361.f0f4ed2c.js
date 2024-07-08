"use strict";(self.webpackChunklh_site=self.webpackChunklh_site||[]).push([[3234],{7414:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=s(4848),n=s(8453),o=s(1470),a=s(9365);const i={},l="Architecture and Guarantees",c={id:"architecture-and-guarantees",title:"Architecture and Guarantees",description:"LittleHorse is a horizontally scalable, high-performance system with enterprise-grade security integrations to help you build systems that support even the most mission-critical workloads.",source:"@site/docs/02-architecture-and-guarantees.md",sourceDirName:".",slug:"/architecture-and-guarantees",permalink:"/docs/architecture-and-guarantees",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LittleHorse Overview",permalink:"/docs/overview"},next:{title:"Concepts",permalink:"/docs/concepts/"}},d={},h=[{value:"Architecture Overview",id:"architecture-overview",level:2},{value:"Deployment Options",id:"deployment-options",level:3},{value:"Security",id:"security",level:3},{value:"Architecture Internals",id:"architecture-internals",level:2},{value:"How is Data Stored?",id:"how-is-data-stored",level:3},{value:"Kafka Streams Topologies",id:"kafka-streams-topologies",level:3},{value:"Metadata Sub-Topology",id:"metadata-sub-topology",level:4},{value:"Core Sub-Topology",id:"core-sub-topology",level:4},{value:"Repartitioned Sub-Topology",id:"repartitioned-sub-topology",level:4},{value:"Timer Topology",id:"timer-topology",level:4},{value:"Guarantees",id:"guarantees",level:2},{value:"Fault Tolerance",id:"fault-tolerance",level:3},{value:"Strongly Consistent Scheduling",id:"strongly-consistent-scheduling",level:3},{value:"Idempotency of Requests",id:"idempotency-of-requests",level:3},{value:"Non-<code>WfRun</code> Data",id:"non-wfrun-data",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"architecture-and-guarantees",children:"Architecture and Guarantees"}),"\n",(0,r.jsx)(t.p,{children:"LittleHorse is a horizontally scalable, high-performance system with enterprise-grade security integrations to help you build systems that support even the most mission-critical workloads."}),"\n",(0,r.jsx)(t.h2,{id:"architecture-overview",children:"Architecture Overview"}),"\n",(0,r.jsx)(t.p,{children:"LittleHorse is a distributed system. That means that we have:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Partitioning"}),", to distribute work across multiple servers for horizontal scalability."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Replication"}),", to ensure high availability and durability in case a server instance crashes."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"For performance reasons, LittleHorse does not rely upon an external database. Instead, we built our own data store using Kafka as a write-ahead-log and using RocksDB/Speedb as our indexing layer. Kafka is a distributed log that supports partitioning, replication, and transactions, making it ideal as the backbone for the LittleHorse data store."}),"\n",(0,r.jsxs)(t.p,{children:["As such, LittleHorse has a dependency on Kafka. We have ",(0,r.jsx)(t.em,{children:"optional"})," integrations with Prometheus, Grafana, any TLS system (such as openssl or Cert Manager), and any OAuth Identity Provider (eg. Keycloak or Auth0)."]}),"\n",(0,r.jsx)(t.h3,{id:"deployment-options",children:"Deployment Options"}),"\n",(0,r.jsx)(t.p,{children:"There are three main physical components in a LittleHorse System:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"The LittleHorse Server."}),"\n",(0,r.jsx)(t.li,{children:"Task Workers."}),"\n",(0,r.jsxs)(t.li,{children:["LittleHorse Clients (either ",(0,r.jsx)(t.code,{children:"lhctl"})," or a client using one of our SDK's)."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The Clients create and manage metadata objects, such as ",(0,r.jsx)(t.code,{children:"TaskDef"}),"s and ",(0,r.jsx)(t.code,{children:"WfSpec"}),"s. The Clients also run workflows using the ",(0,r.jsx)(t.code,{children:"RunWf"})," grpc call. The Task Workers connect to the LittleHorse Server, and the LittleHorse Server dispatches tasks to be executed by the Task Workers."]}),"\n",(0,r.jsx)(t.p,{children:"The Task Workers and Clients are owned and deployed by you, the user of LittleHorse. The LittleHorse Server does not initiate any outbound connections to your Task Workers or Clients. Additionally, your Task Workers and Clients can run anywhere so long as they have network access to the LH Server."}),"\n",(0,r.jsx)(t.p,{children:"The LittleHorse Server can be deployed in one of three ways: LittleHorse OSS, LittleHorse Platform, and LittleHorse Cloud."}),"\n","\n",(0,r.jsxs)(o.A,{children:[(0,r.jsxs)(a.A,{value:"lh-oss",label:"LH OSS",default:!0,children:[(0,r.jsxs)(t.p,{children:["In LittleHorse Community, you run the LH Server free of charge in your own environment. You can get the code from our ",(0,r.jsx)(t.a,{href:"https://github.com/littlehorse-enterprises/littlehorse",children:"GitHub Repo"}),", and our repo has quickstart tutorials for running LittleHorse using our public docker image."]}),(0,r.jsxs)(t.p,{children:["LittleHorse OSS is licensed under the ",(0,r.jsx)(t.a,{href:"https://www.mongodb.com/licensing/server-side-public-license",children:"Server Side Public License"}),". Mongo has a fantastic ",(0,r.jsx)(t.a,{href:"https://www.mongodb.com/licensing/server-side-public-license/faq",children:"SSPL FAQ"}),". The TLDR of the license is that you can use LittleHorse OSS for free in production without restriction unless you are offering LittleHorse-as-a-Service to external organizations."]}),(0,r.jsxs)(t.p,{children:["For information on how to run LittleHorse OSS in production, check out our ",(0,r.jsx)(t.a,{href:"/docs/operations/",children:"Operations Documentation"}),"."]}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"LH OSS logo",src:s(4426).A+"",width:"2000",height:"1000"})}),(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsxs)(t.p,{children:["If you are building a software application delivered over the internet (SaaS), you may do so without restriction even if your SaaS app is ",(0,r.jsx)(t.em,{children:"powered by"})," LittleHorse."]}),(0,r.jsx)(t.p,{children:'A SaaS application qualifies as "powered by LittleHorse" so long as the end product used by customers has a meaningfully differentiated API from the core LH Server Public GRPC API. For example, you can sell an e-commerce application that runs on LittleHorse OSS without restriction.'}),(0,r.jsx)(t.p,{children:"However, if a company explicitly exposes the entire LH Server Public GRPC API as a SaaS service, then Section 13 of the SSPL would apply."})]})]}),(0,r.jsxs)(a.A,{value:"lh-platform",label:"LH Platform",children:[(0,r.jsx)(t.p,{children:"LittleHorse Platform is an enterprise-ready managed installation of LittleHorse in your Kubernetes cluster. It is delivered through a subscription to a Kubernetes Operator, which takes LittleHorse from a stick-shift car (LH OSS) and turns it into a Tesla."}),(0,r.jsx)(t.p,{children:"LH Platform is suitable for large enterprises who have strict data privacy and security requirements, and who are uncomfortable with allowing data to leave their four walls. LH Platform is highly configurable, yet it is also simple and comes with sensible defaults, 24/7 support, and hands-off upgrades."}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"LH Platform Overview",src:s(7572).A+"",width:"3199",height:"2404"})}),(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["To inquire about LittleHorse Platform, fill out the ",(0,r.jsx)(t.a,{href:"https://docs.google.com/forms/d/e/1FAIpQLScXVvTYy4LQnYoFoRKRQ7ppuxe0KgncsDukvm96qKN0pU5TnQ/viewform?usp=sf_link",children:"waitlist form"})," or contact ",(0,r.jsx)(t.code,{children:"sales@littlehorse.io"}),"."]})})]}),(0,r.jsxs)(a.A,{value:"lh-cloud",label:"LH Cloud",children:[(0,r.jsx)(t.p,{children:"In LittleHorse Cloud, all of the operational burden of running LittleHorse is handled for you. A team of experts runs LittleHorse securely in our cloud environment, allowing you to focus on your business processes. We will support several flavors of LH Cloud:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Standard: serverless, pay-as-you-go offereing."}),"\n",(0,r.jsx)(t.li,{children:"Reserved: save money by reserving capacity up-front."}),"\n",(0,r.jsx)(t.li,{children:"Dedicated: maximum-security, dedicated installation with VPC peering into your own account."}),"\n"]}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"LH Cloud Overview",src:s(8458).A+"",width:"2964",height:"2106"})}),(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["To inquire about LittleHorse Platform, fill out the ",(0,r.jsx)(t.a,{href:"https://docs.google.com/forms/d/e/1FAIpQLScXVvTYy4LQnYoFoRKRQ7ppuxe0KgncsDukvm96qKN0pU5TnQ/viewform?usp=sf_link",children:"waitlist form"})," or contact ",(0,r.jsx)(t.code,{children:"sales@littlehorse.io"}),". LittleHorse Cloud is expected for early access in March 2024."]})})]})]}),"\n",(0,r.jsx)(t.h3,{id:"security",children:"Security"}),"\n",(0,r.jsx)(t.p,{children:"The LittleHorse Server supports various security mechanisms:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"TLS to encrypt incoming connections."}),"\n",(0,r.jsx)(t.li,{children:"Federated identity for authentication (either mTLS or OAuth)."}),"\n",(0,r.jsx)(t.li,{children:"mTLS to secure inter-server communication."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"LittleHorse Platform supports integration with Istio, Cert Manager, and Keycloak. Additionally, since LH Platform runs entirely in your own network, your firewall rules can add an additional layer of security."}),"\n",(0,r.jsx)(t.p,{children:"LittleHorse Cloud will use TLS and OAuth for client authentication, and SSO for access to the LH Dashboard."}),"\n",(0,r.jsx)(t.h2,{id:"architecture-internals",children:"Architecture Internals"}),"\n",(0,r.jsxs)(t.p,{children:["Recall that LittleHorse built its own data store RocksDB/Speedb as the indexing layer and Kafka as a WAL (all through ",(0,r.jsx)(t.a,{href:"https://kafka.apache.org/documentation/streams/",children:"Kafka Streams"}),"). The request processing flow has two phases:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"The request is recorded to a Kafka topic."}),"\n",(0,r.jsx)(t.li,{children:"A Kafka Streams Processor on one of the LH Servers processes that request, at which point the response is returned to the client."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Command Processing Diagram",src:s(5495).A+"",width:"4140",height:"2202"})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Client sends request (eg. Create Workflow Specification)\nto LH Server."}),"\n",(0,r.jsxs)(t.li,{children:["LH Server records the request (along with a Request Guid) to the core command Kafka Topic (",(0,r.jsx)(t.code,{children:"2a"}),"). LH Server contacts the designated Command Processor and asks to wait for the response for the Request Guid (",(0,r.jsx)(t.code,{children:"2b"}),")."]}),"\n",(0,r.jsx)(t.li,{children:"The Command Processor processes the Command after reading it from the Core Command Topic."}),"\n",(0,r.jsxs)(t.li,{children:["The Command Processor updates the state (eg. create the ",(0,r.jsx)(t.code,{children:"WfRun"})," Object) in the RocksDB State Store (",(0,r.jsx)(t.code,{children:"4a"}),"). The Command Processor notifies the original calling LH Server of the results of the processing (",(0,r.jsx)(t.code,{children:"4b"}),")."]}),"\n",(0,r.jsx)(t.li,{children:"The LH Server sends the results back to the client."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Because the data is stored in RocksDB on the same disk as where the processing happens, we can achieve extremely high throughput. One single partition of LittleHorse can schedule and process over 1,000 ",(0,r.jsx)(t.code,{children:"TaskRun"}),"s per second, which means 3,000 requests being processed per second on one partition."]}),"\n",(0,r.jsx)(t.p,{children:"The latency of a request is normally under 20ms, depending on your LH Server configuration."}),"\n",(0,r.jsx)(t.h3,{id:"how-is-data-stored",children:"How is Data Stored?"}),"\n",(0,r.jsxs)(t.p,{children:["As mentioned above, we use RocksDB as the backbone for our custom data store. All read operations (eg. ",(0,r.jsx)(t.code,{children:"rpc GetWfRun"}),", ",(0,r.jsx)(t.code,{children:"rpc SearchVariable"}),") read directly from the RocksDB Stores in LittleHorse. Note that a RocksDB store is an embedded key-value store and does not natively provide replication. However, since these stores are managed through Kafka Streams, they are backed by a durable and replicated Kafka Changelog Topic. All writes and deletes to the RocksDB stores are first written to a Kafka Changelog Topic to provide durability and recovery in the case of a crash."]}),"\n",(0,r.jsx)(t.p,{children:"As such, data is written to two places:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The RocksDB instances, stored on disk on the LH Servers."}),"\n",(0,r.jsx)(t.li,{children:"The Kafka Changelog Topic, stored on disk in the backing Kafka cluster."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["When data is removed (eg. ",(0,r.jsx)(t.code,{children:"rpc DeleteWfRun"}),"), the records are removed from RocksDB, and a tombstone is written to the Kafka Changelog Topic so that the data is completely erased once Kafka Log Compaction is triggered."]}),"\n",(0,r.jsx)(t.h3,{id:"kafka-streams-topologies",children:"Kafka Streams Topologies"}),"\n",(0,r.jsxs)(t.p,{children:["Internally, LittleHorse has two Kafka Streams ",(0,r.jsx)(t.code,{children:"Topology"}),"'s and a total of four Sub-Topologies. If you want to check it out in the code, the file you want is ",(0,r.jsx)(t.a,{href:"https://github.com/littlehorse-enterprises/littlehorse/blob/0.7.0/server/src/main/java/io/littlehorse/server/streams/ServerTopology.java",children:(0,r.jsx)(t.code,{children:"ServerTopology.java"})}),". A basic overview of the roles of each sub-topology can be found below."]}),"\n",(0,r.jsx)(t.h4,{id:"metadata-sub-topology",children:"Metadata Sub-Topology"}),"\n",(0,r.jsxs)(t.p,{children:["The Metadata Sub-Topology is responsible for processing and storing udpates to metadata such as ",(0,r.jsx)(t.code,{children:"WfSpec"}),", ",(0,r.jsx)(t.code,{children:"TaskDef"}),", ",(0,r.jsx)(t.code,{children:"ExternalEventDef"}),", and ",(0,r.jsx)(t.code,{children:"UserTaskDef"})," objects. When you make an RPC call that impacts metadata (eg. ",(0,r.jsx)(t.code,{children:"rpc PutWfSpec"}),"), the resulting ",(0,r.jsx)(t.code,{children:"Command"})," is processed on the Metadata Topology."]}),"\n",(0,r.jsxs)(t.p,{children:["Because metadata depend on each other (i.e. a ",(0,r.jsx)(t.code,{children:"PutWfSpecRequest"})," should fail if the ",(0,r.jsx)(t.code,{children:"WfSpec"})," references a non-existent ",(0,r.jsx)(t.code,{children:"TaskDef"}),"), the input topic to the Metadata Sub-Topology has a single partition."]}),"\n",(0,r.jsx)(t.p,{children:"The metadata objects are required by other sub-topologies, so they are broadcast as a Kafka Streams Global Store which is available for read-only access on other processors."}),"\n",(0,r.jsx)(t.h4,{id:"core-sub-topology",children:"Core Sub-Topology"}),"\n",(0,r.jsxs)(t.p,{children:["The Core Sub-Topology is where most of the LittleHorse work happens. All state for a ",(0,r.jsx)(t.code,{children:"WfRun"}),", ",(0,r.jsx)(t.code,{children:"NodeRun"}),", ",(0,r.jsx)(t.code,{children:"TaskRun"}),", ",(0,r.jsx)(t.code,{children:"UserTaskRun"}),", etc is processed and stored on the Core Sub-Topology. For example, the ",(0,r.jsx)(t.code,{children:"rpc RunWf"})," request sends a ",(0,r.jsx)(t.code,{children:"Command"})," that is routed to this Sub-Topology, and the ",(0,r.jsx)(t.code,{children:"rpc GetWfRun"})," request performs a hashed key-value lookup on this sub-topology."]}),"\n",(0,r.jsxs)(t.p,{children:["This Sub-Topology also stores some index information related to the ",(0,r.jsx)(t.code,{children:"WfRun"}),"s. This Sub-Topology has the heaviest workload in terms of state and data processing."]}),"\n",(0,r.jsx)(t.h4,{id:"repartitioned-sub-topology",children:"Repartitioned Sub-Topology"}),"\n",(0,r.jsxs)(t.p,{children:["Refered to as the ",(0,r.jsx)(t.code,{children:"Repartition"})," topology inside our code, this sub-topology is responsible for aggregating metrics and also storing some types of indexes. This sub-topology stores much less state than the Core Sub-Topology and also has less processing throughput."]}),"\n",(0,r.jsx)(t.h4,{id:"timer-topology",children:"Timer Topology"}),"\n",(0,r.jsxs)(t.p,{children:["Lastly, we have a timer service which runs as its own Kafka Streams ",(0,r.jsx)(t.code,{children:"Topology"})," due to different configuration requirements. When the LittleHorse Scheduler (generally, in the Core Sub-Topology) needs to schedule some action with a delay, it sends a ",(0,r.jsx)(t.code,{children:"LHTimer"})," event to the Timer Topology. The Timer Topology will then send the requested payload in the form of a ",(0,r.jsx)(t.code,{children:"Command"})," back into the Core Sub-Topology at the specified time."]}),"\n",(0,r.jsxs)(t.p,{children:["For example, when a ",(0,r.jsx)(t.code,{children:"TaskRun"})," is started by a Task Worker (let's say the configured Task Timeout is 15 seconds), the Core Sub-Topology sends an ",(0,r.jsx)(t.code,{children:"LHTimer"})," with a ",(0,r.jsx)(t.code,{children:"TaskRunTimeout"})," payload and delay of 15 seconds. Then, 15 seconds later, the Timer Topology sends the ",(0,r.jsx)(t.code,{children:"TaskRunTimeout"})," payload into the Core Sub-Topology."]}),"\n",(0,r.jsx)(t.p,{children:"Separating it into a different topology rather than using a punctuator was necessary for several reasons:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Strong ordering during backpressure situations."}),"\n",(0,r.jsxs)(t.li,{children:["Performance: punctuators block processing of ",(0,r.jsx)(t.code,{children:"Command"}),"s."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"guarantees",children:"Guarantees"}),"\n",(0,r.jsx)(t.p,{children:"LittleHorse provides certain guarantees which can help you build reliable and correct applications. These are important to understand when designing mission-critical applications."}),"\n",(0,r.jsx)(t.h3,{id:"fault-tolerance",children:"Fault Tolerance"}),"\n",(0,r.jsxs)(t.p,{children:["In order to provide high availability and durability, LittleHorse Platform and LittleHorse Cloud synchronously replicate all data across three Availability Zones. Before an event (such as a request to run a ",(0,r.jsx)(t.code,{children:"WfRun"}),") can be processed by a LH Server, it first must be accepted by Kafka Brokers on two of the three Availability Zones."]}),"\n",(0,r.jsx)(t.p,{children:"This provides three neat results in the face of an outage (whether one server or a whole datacenter):"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"We do not experience data loss."}),"\n",(0,r.jsxs)(t.li,{children:["We can continue processing ",(0,r.jsx)(t.code,{children:"WfRun"}),"s after a short rebalance period, between 10-30 seconds depending on your LH Server configuration."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Since LittleHorse requires two acknowledgements before accepting an event, it is possible that some partitions of the system will become unavailable if physical machines fail in two datacenters as LittleHorse is a CP system (prioritizing consistency over availability)."}),"\n",(0,r.jsx)(t.p,{children:"LittleHorse OSS can provide the same guarantees if both the LH Server and the backing Kafka cluster are properly configured."}),"\n",(0,r.jsx)(t.h3,{id:"strongly-consistent-scheduling",children:"Strongly Consistent Scheduling"}),"\n",(0,r.jsxs)(t.p,{children:["When a ",(0,r.jsx)(t.code,{children:"WfRun"})," reaches a ",(0,r.jsx)(t.code,{children:"TASK"})," node, LittleHorse schedules a ",(0,r.jsx)(t.code,{children:"TaskRun"})," and thereby returns a ",(0,r.jsx)(t.code,{children:"ScheduledTask"})," payload to one of the Task Workers polling for such a task."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.strong,{children:["LittleHorse guarantees ",(0,r.jsx)(t.em,{children:"at-most-once"})," delivery of a ",(0,r.jsx)(t.code,{children:"ScheduledTask"}),"."]})," This means that LittleHorse will never return the same ",(0,r.jsx)(t.code,{children:"ScheduledTask"})," twice to the Task Workers. However, if there is a network partition between the Task Workers and the LittleHorse Servers, it is possible that LittleHorse thinks the task has been scheduled but the Task Workers never receive it."]}),"\n",(0,r.jsx)(t.p,{children:"If you want to achieve at-least-once delivery of a task, you can achieve that by configuring retries for that Task Node. If the Task is not delivered to the Task Workers, then the task will fail with a timeout error and be retried."}),"\n",(0,r.jsx)(t.p,{children:"Effectively-once processing can be achieved if you can design your Task Worker to be idempotent. The steps to achieve this are:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Enable multiple retries for your task."}),"\n",(0,r.jsxs)(t.li,{children:["Use the idempotency id for the ",(0,r.jsx)(t.code,{children:"ScheduledTask"})," to ensure that your Task is idempotent (for examples, see the Developer Guide)."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"NOTE: Providing exactly-once delivery without some form of 2-phase commit is impossible due to the laws of physics."})}),"\n",(0,r.jsx)(t.h3,{id:"idempotency-of-requests",children:"Idempotency of Requests"}),"\n",(0,r.jsx)(t.p,{children:"Requests made to the grpc in LittleHorse can be safely retried through idempotency."}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Note that retries of a ",(0,r.jsx)(t.code,{children:"TaskRun"})," are a separate concept from retries on grpc requests made by LittleHorse clients. A ",(0,r.jsx)(t.code,{children:"TaskRun"})," retry causes another ",(0,r.jsx)(t.code,{children:"ScheduledTask"})," to be sent to a Task Worker by the LittleHorse Server; in contrast, this section discusses what happens when a client retries a request made to the LH Server grpc api."]})}),"\n",(0,r.jsx)(t.p,{children:"In LittleHorse, some requests are idempotent by default, meaning they can be safely retried indefinitely. For example:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["All ",(0,r.jsx)(t.code,{children:"Delete"})," requests are idempotent."]}),"\n",(0,r.jsx)(t.li,{children:"All requests made by the Task Worker are idempotent."}),"\n",(0,r.jsxs)(t.li,{children:["All requests related to assigning, cancelling, or completing a ",(0,r.jsx)(t.code,{children:"UserTask"})," are idempotent by default."]}),"\n",(0,r.jsxs)(t.li,{children:["All requests to create ",(0,r.jsx)(t.code,{children:"TaskDef"})," or ",(0,r.jsx)(t.code,{children:"ExternalEventDef"})," metadata are idempotent by default."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Additionally, ",(0,r.jsxs)(t.strong,{children:["all ",(0,r.jsx)(t.code,{children:"WfRun"}),"-related requests in LittleHorse can be made idempotent with proper configuration."]})," For example:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["If you pass an ",(0,r.jsx)(t.code,{children:"id"})," in a ",(0,r.jsx)(t.code,{children:"RunWf"})," rpc call, you can safely retry the request indefinitely, and only one ",(0,r.jsx)(t.code,{children:"WfRun"})," is created."]}),"\n",(0,r.jsxs)(t.li,{children:["If you pass a ",(0,r.jsx)(t.code,{children:"guid"})," in a ",(0,r.jsx)(t.code,{children:"PutExternalEvent"})," rpc call, you can safely retry the request indefinitely, and only one ",(0,r.jsx)(t.code,{children:"ExternalEvent"})," will be created."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Lastly, some metadata requests are partially idempotent. If you specify a ",(0,r.jsx)(t.code,{children:"version"})," in a ",(0,r.jsx)(t.code,{children:"PutWfSpec"})," or ",(0,r.jsx)(t.code,{children:"PutUserTaskDef"})," request, the request can be safely retried indefinitely. Without specifying a ",(0,r.jsx)(t.code,{children:"version"}),", retried requests will result in identical ",(0,r.jsx)(t.code,{children:"WfSpec"})," or ",(0,r.jsx)(t.code,{children:"UserTaskDef"})," objects being created, which does not affect business logic."]}),"\n",(0,r.jsxs)(t.h3,{id:"non-wfrun-data",children:["Non-",(0,r.jsx)(t.code,{children:"WfRun"})," Data"]}),"\n",(0,r.jsxs)(t.p,{children:["All data related to ",(0,r.jsx)(t.code,{children:"WfRun"})," processing is strongly consistent. However, like other systems such as Kafka, changes to metadata (",(0,r.jsx)(t.code,{children:"WfSpec"}),", ",(0,r.jsx)(t.code,{children:"TaskDef"}),", ",(0,r.jsx)(t.code,{children:"ExternalEventDef"}),", ",(0,r.jsx)(t.code,{children:"UserTaskDef"}),") are eventually-consistent."]}),"\n",(0,r.jsx)(t.p,{children:"Upon creating or deleting a metadata object, news of the change can take up to 300ms to propagate to all LittleHorse Server Instances. However, this is acceptable since updates to metadata objects are infrequent. In production, we recommend a Git-Ops approach for deploying changes to metadata, just like deploying changes to microservices."}),"\n",(0,r.jsxs)(t.p,{children:["Additionally, certain indexes on ",(0,r.jsx)(t.code,{children:"Variable"}),"s are eventually consistent and can be delayed by up to 200ms. However, all indexes in LittleHorse are exclusively used for read-only observability requests and are not used by the scheduler when making decisions about workflow scheduling. As such, ",(0,r.jsxs)(t.strong,{children:["all ",(0,r.jsx)(t.code,{children:"WfRun"})," scheduling in LittleHorse is strongly consistent."]})]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},9365:(e,t,s)=>{s.d(t,{A:()=>a});s(6540);var r=s(8215);const n={tabItem:"tabItem_Ymn6"};var o=s(4848);function a(e){let{children:t,hidden:s,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,a),hidden:s,children:t})}},1470:(e,t,s)=>{s.d(t,{A:()=>k});var r=s(6540),n=s(8215),o=s(3104),a=s(6347),i=s(205),l=s(7485),c=s(1682),d=s(9466);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:s}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:s,attributes:r,default:n}}=e;return{value:t,label:s,attributes:r,default:n}}))}(s);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function p(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:s}=e;const n=(0,a.W6)(),o=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function m(e){const{defaultValue:t,queryString:s=!1,groupId:n}=e,o=u(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,h]=f({queryString:s,groupId:n}),[m,g]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,d.Dv)(s);return[n,(0,r.useCallback)((e=>{s&&o.set(e)}),[s,o])]}({groupId:n}),x=(()=>{const e=c??m;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),g(e)}),[h,g,o]),tabValues:o}}var g=s(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=s(4848);function j(e){let{className:t,block:s,selectedValue:r,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const t=e.currentTarget,s=l.indexOf(t),n=i[s].value;n!==r&&(c(t),a(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;t=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;t=l[s]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":s},t),children:i.map((e=>{let{value:t,label:s,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:h,onClick:d,...o,className:(0,n.A)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":r===t}),children:s??t},t)}))})}function b(e){let{lazy:t,children:s,selectedValue:n}=e;const o=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function v(e){const t=m(e);return(0,y.jsxs)("div",{className:(0,n.A)("tabs-container",x.tabList),children:[(0,y.jsx)(j,{...t,...e}),(0,y.jsx)(b,{...t,...e})]})}function k(e){const t=(0,g.A)();return(0,y.jsx)(v,{...e,children:h(e.children)},String(t))}},5495:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/command-processing-75411a029c01d44dbaeaa5698a762bda.png"},8458:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/lh-cloud-017bb558e186fd570785059dfa5f2c7d.png"},7572:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/lh-platform-7f745f022b7a3b5d0cc2074799aacce4.png"},4426:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/logo-41ece11b57b8bdc87d2a631a2b4e676e.jpg"},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>i});var r=s(6540);const n={},o=r.createContext(n);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);