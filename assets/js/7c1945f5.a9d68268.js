"use strict";(self.webpackChunklh_site=self.webpackChunklh_site||[]).push([[8205],{7567:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=r(4848),n=r(8453);const i={title:"Helm and Kubernetes Operators",description:"To Helm or to Operator?",slug:"helm-and-k8s-operators",authors:[{name:"Colt McNealy",title:"LittleHorse Council Member",url:"https://www.linkedin.com/in/colt-mcnealy-900b7a148/",image_url:"https://avatars.githubusercontent.com/u/100447728"}],tags:["friday-tech-tips","kubernetes"],image:"https://avatars.githubusercontent.com/u/140006313?s=400&u=7bf4c91d92dfe590ac71bb6b4821e1a81aa5b712&v=4",hide_table_of_contents:!1},a=void 0,s={permalink:"/blog/helm-and-k8s-operators",source:"@site/blog/2023-09-01-helm-and-k8s-operators.md",title:"Helm and Kubernetes Operators",description:"To Helm or to Operator?",date:"2023-09-01T00:00:00.000Z",tags:[{label:"friday-tech-tips",permalink:"/blog/tags/friday-tech-tips"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"}],readingTime:5.58,hasTruncateMarker:!0,authors:[{name:"Colt McNealy",title:"LittleHorse Council Member",url:"https://www.linkedin.com/in/colt-mcnealy-900b7a148/",image_url:"https://avatars.githubusercontent.com/u/100447728",imageURL:"https://avatars.githubusercontent.com/u/100447728"}],frontMatter:{title:"Helm and Kubernetes Operators",description:"To Helm or to Operator?",slug:"helm-and-k8s-operators",authors:[{name:"Colt McNealy",title:"LittleHorse Council Member",url:"https://www.linkedin.com/in/colt-mcnealy-900b7a148/",image_url:"https://avatars.githubusercontent.com/u/100447728",imageURL:"https://avatars.githubusercontent.com/u/100447728"}],tags:["friday-tech-tips","kubernetes"],image:"https://avatars.githubusercontent.com/u/140006313?s=400&u=7bf4c91d92dfe590ac71bb6b4821e1a81aa5b712&v=4",hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Releasing 0.5.0",permalink:"/blog/littlehorse-0.5.0-release"},nextItem:{title:"Releasing 0.2.0",permalink:"/blog/littlehorse-0.2.0-release"}},l={authorsImageUrls:[void 0]},c=[{value:"Helm",id:"helm",level:2},{value:"How it Works",id:"how-it-works",level:3},{value:"The Good",id:"the-good",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Operators",id:"operators",level:2},{value:"How they Work",id:"how-they-work",level:3},{value:"The Good",id:"the-good-1",level:3},{value:"The Ugly",id:"the-ugly",level:3},{value:"Helm or Operators?",id:"helm-or-operators",level:2},{value:"LittleHorse Platform",id:"littlehorse-platform",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["About ",(0,o.jsx)(t.a,{href:"https://helm.sh",children:"Helm"})," vs Kubernetes Operators."]}),"\n",(0,o.jsx)(t.h2,{id:"helm",children:"Helm"}),"\n",(0,o.jsxs)(t.p,{children:["Helm is like ",(0,o.jsx)(t.code,{children:"brew"})," or ",(0,o.jsx)(t.code,{children:"npm"})," for Kubernetes. There are repositories containing charts, and each chart allows you to install an application into your K8s cluster."]}),"\n",(0,o.jsx)(t.h3,{id:"how-it-works",children:"How it Works"}),"\n",(0,o.jsx)(t.p,{children:"Under the hood, Helm works by filling out some templated Kubernetes yaml files with user-provided values, drastically reducing boilerplate and allowing you to deploy a reasonably complex application without the user of the helm chart having to understand too much about how to manage such an application."}),"\n",(0,o.jsxs)(t.p,{children:["In addition to that template-engine functionality, Helm also manages versions of your application. You can use Helm to release a new version of your app (for example, updating the docker image tag) and then quickly roll back to a previous version if you discover a bug. This is great for teams deploying stateless applications such as microservices or ",(0,o.jsx)(t.a,{href:"https://littlehorse.dev/docs/concepts/task-workers",children:"LittleHorse Task Workers"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"the-good",children:"The Good"}),"\n",(0,o.jsx)(t.p,{children:"First, it is quite simple to write a Helm chart. This means that most DevOps teams can quickly write a helm chart that can be used by microservice teams across their organization."}),"\n",(0,o.jsx)(t.p,{children:"Secondly, Helm is a client library (well, it has been since the removal of Tiller...but that's another blog post). Therefore, you don't need to run any privileged pods inside the K8s cluster; all you need is a CI server with permission to create the necessary K8s resources."}),"\n",(0,o.jsx)(t.h3,{id:"limitations",children:"Limitations"}),"\n",(0,o.jsx)(t.p,{children:"Unfortunately, Helm doesn't do much beyond initial installation and upgrades. Monitoring, self-healing, autoscaling, certificate rotation, and management of non-Kubernetes resources (eg. Kafka Topics, LittleHorse Task Definitions, AWS LoadBalancers, etc) are some exercises left to the reader, to name just a few."}),"\n",(0,o.jsx)(t.h2,{id:"operators",children:"Operators"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://operatorframework.io/",children:"Kubernetes Operators"})," are a pattern introduced by Red Hat that intends to capture the knowledge of an expert Site Reliability Engineer (or, more punnily, a software operator) into a program that manages (or operates) a complex application."]}),"\n",(0,o.jsxs)(t.p,{children:["To accomplish this, a Kubernetes Operator ",(0,o.jsx)(t.em,{children:"extends"})," the Kubernetes API to introduce a new resource type that is custom-made for your application. The Operator works in tandem with Kubernetes itself to manage applications of a specific type."]}),"\n",(0,o.jsx)(t.h3,{id:"how-they-work",children:"How they Work"}),"\n",(0,o.jsx)(t.p,{children:"A Kubernetes Operator has two components:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["A ",(0,o.jsx)(t.code,{children:"CustomResourceDefinition"}),", which defines the extension to the Kubernetes API (including relevant configurations for your application type)."]}),"\n",(0,o.jsx)(t.li,{children:'A Controller, which watches any resources from your Custom Resource Definition and "reconciles" them.'}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"CustomResourceDefinition"})," can be over-simplified as an Open API (not Open AI) specification for how your custom resource will look. For example, in LittleHorse Platform, the simplest version of a ",(0,o.jsx)(t.code,{children:"LHCluster"})," resource (which creates a, you guessed it, LittleHorse Cluster) is:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:'apiVersion: littlehorse.io/v1\nkind: LHCluster\nmetadata:\n  name: hello-littlehorse\n  namespace: lh\nspec:\n  server:\n    version: "0.2.0"\n    listeners:\n    - name: internal-k8s\n      type: internal\n      port: 2023\n    replicas: 3\n    storage:\n      volumeSize: "10G"\n  kafka:\n    strimziClusterRef:\n      clusterName: my-strimzi-kafka-cluster\n      listenerPort: 9093\n'})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"CustomResourceDefinition"})," allows you to ",(0,o.jsx)(t.code,{children:"kubectl apply -f <that file up there>"}),", and then you can ",(0,o.jsx)(t.code,{children:"kubectl get lhclusters"}),":"]}),"\n",(0,o.jsxs)(t.p,{children:["Now how does the LittleHorse cluster get created, configured, managed, and monitored? That's where the Controller comes into play. In the Operator pattern, a Controller is a process (normally, it runs as a ",(0,o.jsx)(t.code,{children:"Pod"})," in a cluster) that watches for all events related to a ",(0,o.jsx)(t.code,{children:"CustomResourceDefinition"})," and manipulates the external world to match what the Custom Resources specify."]}),"\n",(0,o.jsxs)(t.p,{children:["Generally, that means creating a bunch of Kubernetes ",(0,o.jsx)(t.code,{children:"Service"}),"s, ",(0,o.jsx)(t.code,{children:"Deployment"}),"s, etc. to spin up an instance of an application. For example, the ",(0,o.jsx)(t.a,{href:"https://strimzi.io",children:"Strimzi"})," Kafka Operator watches ",(0,o.jsx)(t.code,{children:"Kafka"})," resources and deploys an actual Kafka cluster."]}),"\n",(0,o.jsxs)(t.p,{children:["However, a Controller can also manage non-kuberentes resources. For example, many ",(0,o.jsx)(t.code,{children:"Ingress"})," controllers provision or configure physical load balancers outside of the Kubernetes cluster. As another great example, the ",(0,o.jsx)(t.a,{href:"https://strimzi.io",children:"Strimzi"})," Kafka Topic Operator watches for ",(0,o.jsx)(t.code,{children:"KafkaTopic"})," resources and creates (you guessed it) Kafka Topics using the Kafa Admin API."]}),"\n",(0,o.jsxs)(t.p,{children:["We at LittleHorse plan to add similar CRD's that are specific to LittleHorse...stay tuned to learn about the ",(0,o.jsx)(t.code,{children:"LHTaskDef"})," and ",(0,o.jsx)(t.code,{children:"LHPrincipal"})," CRD's ","\ud83d\ude09","."]}),"\n",(0,o.jsx)(t.h3,{id:"the-good-1",children:"The Good"}),"\n",(0,o.jsxs)(t.p,{children:["Kubernetes Operators are beautiful. Since they were developed by Red Hat, they (along with ",(0,o.jsx)(t.a,{href:"https://strimzi.io",children:"Strimzi"}),") are the biggest reason why Red Hat is in my top-three favorite software companies of all time."]}),"\n",(0,o.jsx)(t.p,{children:"A well-written operator can make it a breeze to manage even the most daunting applications. Since the Controller is code written in a general-purpose language (normally Go or Java), an Operator can do just about anything that can be automated by an SRE. This includes:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Autoscaling and alerting based on metrics"}),"\n",(0,o.jsx)(t.li,{children:"Self-healing and mitigation in the face of hardware faults or degradations"}),"\n",(0,o.jsx)(t.li,{children:"Certificate rotation"}),"\n",(0,o.jsx)(t.li,{children:"Metadata management in your application (for example, creating Kafka Users)"}),"\n",(0,o.jsx)(t.li,{children:"Intelligent rolling restarts that preserve high availability"}),"\n",(0,o.jsxs)(t.li,{children:["Provisioning infrastructure ",(0,o.jsx)(t.em,{children:"outside of"})," Kubernetes, for example ",(0,o.jsx)(t.a,{href:"https://crossplane.io",children:"CrossPlane"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"the-ugly",children:"The Ugly"}),"\n",(0,o.jsxs)(t.p,{children:["The biggest downside to Operators in Kubernetes is that writing a Controller is ",(0,o.jsx)(t.em,{children:"hard"}),". Additionally, it requires running a ",(0,o.jsx)(t.code,{children:"Pod"})," with special privileges that allow the ",(0,o.jsx)(t.code,{children:"Pod"})," to create other K8s resources. Because of this, writing an Operator for something like standardizing your team's blueprints for deploying a microservice just doesn't make sense."]}),"\n",(0,o.jsx)(t.p,{children:"Future blogs will dive into some of the challenges that we had to overcome with LittleHorse Platform, and how we minimized the permissions that our Operator needs to provide a self-driving LittleHorse experience to our customers."}),"\n",(0,o.jsx)(t.h2,{id:"helm-or-operators",children:"Helm or Operators?"}),"\n",(0,o.jsxs)(t.p,{children:["Well, I'm a software engineer, so I'm going to say \"it depends.\" However, Kafka legend Gwen Shapira said in a fantastic ",(0,o.jsx)(t.a,{href:"https://open.spotify.com/episode/0BYwF3e8y5OzrPt0xYMyqb?si=0c7d44154b434d0e",children:"podcast"}),' that some "it depends" are more helpful than others. So in an effort to fall in the "more helpful" side:']}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"If you want a framework for deploying simple stateless applications while minimizing boilerplate (i.e. allowing different teams to deploy microservices), then you probably want Helm."}),"\n",(0,o.jsx)(t.li,{children:"If your application doesn't require much hand-holding after initial configuration on Kubernetes, Helm might do."}),"\n",(0,o.jsx)(t.li,{children:"If you want to provide a Kubernetes-native way to manage non-kubernetes infrastructure, you need an Operator."}),"\n",(0,o.jsx)(t.li,{children:"If you want to provide a self-driving experience for consumers of a highly complex application such as Kafka, ElasticSearch, or LittleHorse, you need an Operator."}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"littlehorse-platform",children:"LittleHorse Platform"}),"\n",(0,o.jsxs)(t.p,{children:["LittleHorse Platform is an enterprise-ready distribution of LittleHorse that runs in your own Kubernetes environment. We believe that Helm is fantastic for deploying many stateless applications, and even some stateful applications. However, Helm wouldn't let us go far enough towards providing our customers with a fully self-driving LittleHorse experience. As such, we chose to put in the extra work and build a full Kubernetes Operator. Stay tuned for an extensive list of current and upcoming LH Platform features, all powered by the ",(0,o.jsx)(t.a,{href:"https://javaoperatorsdk.io",children:"Java Operator SDK"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["To inquire about LittleHorse Platform, contact ",(0,o.jsx)(t.code,{children:"sales@littlehorse.io"}),". To get started with LittleHorse Community (free for production use under the SSPL), check out our ",(0,o.jsx)(t.a,{href:"https://littlehorse.dev/docs/developer-guide/install",children:"Installation Docs"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>s});var o=r(6540);const n={},i=o.createContext(n);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);