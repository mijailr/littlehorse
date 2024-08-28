"use strict";(self.webpackChunklh_site=self.webpackChunklh_site||[]).push([[4120],{7783:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=n(4848),t=n(8453);const r={},i="Using Confluent Cloud",l={id:"operations/docker-compose/confluent-cloud",title:"Using Confluent Cloud",description:"LittleHorse requires Apache Kafka as its only hard dependency. Kafka is the source-of-truth for the state of a LittleHorse Cluster as all data is stored in Kafka Streams state stores (therefore, the durability of the Changelog Topics determines the durability of the LittleHorse Cluster's data).",source:"@site/docs/06-operations/10-docker-compose/05-confluent-cloud.md",sourceDirName:"06-operations/10-docker-compose",slug:"/operations/docker-compose/confluent-cloud",permalink:"/docs/operations/docker-compose/confluent-cloud",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basic Deployment",permalink:"/docs/operations/docker-compose/basic"},next:{title:"Three LittleHorse Orchestrators",permalink:"/docs/operations/docker-compose/three-servers"}},c={},a=[{value:"Docker Compose File",id:"docker-compose-file",level:2},{value:"Configuring the Clients",id:"configuring-the-clients",level:2},{value:"CLI Configs",id:"cli-configs",level:3},{value:"Worker Configs",id:"worker-configs",level:3}];function d(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"using-confluent-cloud",children:"Using Confluent Cloud"})}),"\n",(0,s.jsxs)(o.p,{children:["LittleHorse requires ",(0,s.jsx)(o.a,{href:"https://kafka.apache.org",children:"Apache Kafka"})," as its only hard dependency. Kafka is the source-of-truth for the state of a LittleHorse Cluster as all data is stored in Kafka Streams state stores (therefore, the durability of the Changelog Topics determines the durability of the LittleHorse Cluster's data)."]}),"\n",(0,s.jsxs)(o.p,{children:["Managing Kafka in production is difficult; so users of our open-source community may wish to use a hosted SaaS version of Kafka. The leading Kafka Cloud Service is provided by ",(0,s.jsx)(o.a,{href:"https://confluent.io",children:"Confluent"}),", a company founded by the creators of Apache Kafka."]}),"\n",(0,s.jsx)(o.p,{children:"This example shows you how to connect your LittleHorse cluster to Confluent Cloud."}),"\n",(0,s.jsx)(o.h2,{id:"docker-compose-file",children:"Docker Compose File"}),"\n",(0,s.jsxs)(o.p,{children:["Confluent Cloud uses the ",(0,s.jsx)(o.code,{children:"SASL_SSL"})," protocol with the ",(0,s.jsx)(o.code,{children:"PLAIN"})," Sasl mechanism. before running this example, you must:"]}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["Create a Confluent Cloud cluster and an API key. You can do so on ",(0,s.jsx)(o.a,{href:"https://confluent.cloud/",children:"Confluent's Cloud Console"}),"."]}),"\n",(0,s.jsx)(o.li,{children:"Download the API Key file. It should look like the following:"}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"=== Confluent Cloud API key: lkc-0595zp ===\n\nAPI key:\nXXXXXXXXXXXXXXXX\n\nAPI secret:\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx+xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n\nBootstrap server:\npkc-n98pk.us-west-2.aws.confluent.cloud:9092\n"})}),"\n",(0,s.jsxs)(o.p,{children:["LittleHorse will expect the ",(0,s.jsx)(o.code,{children:"LHS_SASL_JAAS_CONFIG_FILE"})," environment variable, which points to a flat file on the LH Server's file system whose contents are the required ",(0,s.jsx)(o.code,{children:"sasl.jaas.config"}),". Your ",(0,s.jsx)(o.code,{children:"sasl.jaas.config"})," should look like:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"org.apache.kafka.common.security.plain.PlainLoginModule required username='<API key>' password='<API secret>';\n"})}),"\n",(0,s.jsx)(o.p,{children:"Let's do the following:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"API_KEY=<your api key from cflt cloud console>\nAPI_SECRET=<your api secret from cflt cloud console>\n\n# This is for demo purposes. In production please do something more secure.\nmkdir /tmp/cflt-creds\necho \"org.apache.kafka.common.security.plain.PlainLoginModule required username='$API_KEY' password='$API_SECRET';\" > /tmp/cflt-creds/sasl-jaas-config.txt\n"})}),"\n",(0,s.jsxs)(o.p,{children:["Replace the ",(0,s.jsx)(o.code,{children:"<API key>"})," and ",(0,s.jsx)(o.code,{children:"<API secret>"})," with the values you downloaded from Confluent Cloud, and then run the above script."]}),"\n",(0,s.jsxs)(o.p,{children:["Save the following docker-compose file and run: ",(0,s.jsx)(o.code,{children:"docker compose up -d"}),"."]}),"\n",(0,s.jsx)(o.admonition,{type:"caution",children:(0,s.jsx)(o.p,{children:"Remember to substitute your bootstrap servers!"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-yaml",children:'services:\n  littlehorse:\n    container_name: lh-server\n    image: ghcr.io/littlehorse-enterprises/littlehorse/lh-server:0.10.1\n    volumes:\n      # Mount a volume to give the LH Server container access to your Confluent creds.\n      - /tmp/cflt-creds:/secrets\n    environment:\n      # NOTE: Please replace your bootstrap servers\n      LHS_KAFKA_BOOTSTRAP_SERVERS: <your-bootstrap-servers-from-confluent>\n\n      # That this comes from where you mount the volume a few lines above\n      LHS_KAFKA_SASL_JAAS_CONFIG_FILE: /secrets/sasl-jaas-config.txt\n      LHS_KAFKA_SASL_MECHANISM: PLAIN\n      LHS_KAFKA_SECURITY_PROTOCOL: SASL_SSL\n      LHS_SHOULD_CREATE_TOPICS: "true"\n      LHS_HEALTH_SERVICE_PORT: "1822"\n\n      LHS_REPLICATION_FACTOR: "3"\n    restart: on-failure\n    healthcheck:\n      test: curl -f localhost:1822/liveness\n      interval: 5s\n    ports:\n      - "2023:2023"\n  dashboard:\n    container_name: lh-dashboard\n    image: ghcr.io/littlehorse-enterprises/littlehorse/lh-dashboard:0.10.1\n    environment:\n      LHC_API_HOST: littlehorse\n      LHC_API_PORT: 2023\n      LHC_OAUTH_ENABLED: false\n    restart: on-failure\n    ports:\n      - "8080:3000"\n'})}),"\n",(0,s.jsx)(o.h2,{id:"configuring-the-clients",children:"Configuring the Clients"}),"\n",(0,s.jsxs)(o.p,{children:["Once you have created the LH Cluster using Docker Compose, the next step is to access it. For example, you can use one of our ",(0,s.jsx)(o.a,{href:"/docs/developer-guide/install#get-started",children:"quickstarts"})," with the following configurations."]}),"\n",(0,s.jsxs)(o.p,{children:["The dashboard can be accessed at ",(0,s.jsx)(o.a,{href:"http://localhost:8080",children:(0,s.jsx)(o.code,{children:"http://localhost:8080"})}),"."]}),"\n",(0,s.jsx)(o.h3,{id:"cli-configs",children:"CLI Configs"}),"\n",(0,s.jsxs)(o.p,{children:["The ",(0,s.jsx)(o.code,{children:"lhctl"})," CLI is configured using (by default) the ",(0,s.jsx)(o.code,{children:"${HOME}/.config/littlehorse.config"})," file."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"LHC_API_HOST=localhost\nLHC_API_PORT=2023\n"})}),"\n",(0,s.jsx)(o.admonition,{type:"tip",children:(0,s.jsxs)(o.p,{children:["You can override the location of your configuration file for ",(0,s.jsx)(o.code,{children:"lhctl"})," by using the ",(0,s.jsx)(o.code,{children:"--configFile"})," option."]})}),"\n",(0,s.jsx)(o.h3,{id:"worker-configs",children:"Worker Configs"}),"\n",(0,s.jsxs)(o.p,{children:["Workers are configured when you create an ",(0,s.jsx)(o.code,{children:"LHConfig"})," object according to ",(0,s.jsx)(o.a,{href:"/docs/developer-guide/client-configuration#creating-the-lhconfig",children:"our documentation"}),". You need to pass in certain properties (either directly to the ",(0,s.jsx)(o.code,{children:"LHConfig"})," constructor, through a ",(0,s.jsx)(o.code,{children:"Properties"})," file, or through environment variables)."]}),"\n",(0,s.jsx)(o.p,{children:"For this example, your workers should be configured as follows:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"LHC_API_HOST=localhost\nLHC_API_PORT=2023\nLHW_SERVER_CONNECT_LISTENER=PLAIN\n"})}),"\n",(0,s.jsx)(o.admonition,{type:"tip",children:(0,s.jsxs)(o.p,{children:["If you walk through our ",(0,s.jsx)(o.a,{href:"/docs/developer-guide/install#get-started",children:"quickstarts"}),", the code in all three assumes that your configuration is set as environment variables."]})})]})}function h(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>l});var s=n(6540);const t={},r=s.createContext(t);function i(e){const o=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);