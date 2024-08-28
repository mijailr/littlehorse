"use strict";(self.webpackChunklh_site=self.webpackChunklh_site||[]).push([[7784],{9548:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=o(4848),t=o(8453);const r={},i="Basic Deployment",c={id:"operations/docker-compose/basic",title:"Basic Deployment",description:"This example shows how to run LittleHorse with a single Server and the dashboard, without authentication, using Docker Compose, accessible on localhost:2023.",source:"@site/docs/06-operations/10-docker-compose/00-basic.md",sourceDirName:"06-operations/10-docker-compose",slug:"/operations/docker-compose/basic",permalink:"/docs/operations/docker-compose/basic",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docker Compose Examples",permalink:"/docs/operations/docker-compose/"},next:{title:"Using Confluent Cloud",permalink:"/docs/operations/docker-compose/confluent-cloud"}},l={},a=[{value:"Docker Compose File",id:"docker-compose-file",level:2},{value:"Using the Example",id:"using-the-example",level:2},{value:"CLI Configs",id:"cli-configs",level:3},{value:"Worker Configs",id:"worker-configs",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"basic-deployment",children:"Basic Deployment"})}),"\n",(0,s.jsxs)(n.p,{children:["This example shows how to run LittleHorse with a single Server and the dashboard, without authentication, using Docker Compose, accessible on ",(0,s.jsx)(n.code,{children:"localhost:2023"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"docker-compose-file",children:"Docker Compose File"}),"\n",(0,s.jsxs)(n.p,{children:["Save the following docker-compose file and run: ",(0,s.jsx)(n.code,{children:"docker compose up -d"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'services:\n  kafka:\n    container_name: lh-kafka\n    image: apache/kafka:3.8.0\n    environment:\n      KAFKA_LISTENERS: CONTROLLER://:29092,EXTERNAL://:19092,INTERNAL://:9092\n      KAFKA_ADVERTISED_LISTENERS: EXTERNAL://localhost:19092,INTERNAL://kafka:9092\n      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: CONTROLLER:PLAINTEXT,EXTERNAL:PLAINTEXT,INTERNAL:PLAINTEXT\n      KAFKA_INTER_BROKER_LISTENER_NAME: INTERNAL\n      KAFKA_BROKER_ID: "1"\n      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: "1"\n      KAFKA_TRANSACTION_STATE_LOG_MIN_ISR: "1"\n      KAFKA_TRANSACTION_STATE_LOG_REPLICATION_FACTOR: "1"\n      KAFKA_CONTROLLER_QUORUM_VOTERS: 1@localhost:29092\n      KAFKA_CONTROLLER_LISTENER_NAMES: CONTROLLER\n      KAFKA_PROCESS_ROLES: broker,controller\n      KAFKA_NODE_ID: "1"\n      KAFKA_KRAFT_CLUSTER_ID: abcdefghijklmnopqrstuv\n    restart: on-failure\n    healthcheck:\n      test: /opt/kafka/bin/kafka-topics.sh --bootstrap-server kafka:9092 --list > /dev/null 2>&1\n      interval: 5s\n  littlehorse:\n    container_name: lh-server\n    image: ghcr.io/littlehorse-enterprises/littlehorse/lh-server:0.10.1\n    environment:\n      LHS_KAFKA_BOOTSTRAP_SERVERS: kafka:9092\n      LHS_SHOULD_CREATE_TOPICS: "true"\n      LHS_HEALTH_SERVICE_PORT: "1822"\n    restart: on-failure\n    healthcheck:\n      test: curl -f localhost:1822/liveness\n      interval: 5s\n    depends_on:\n      kafka:\n        condition: service_healthy\n    ports:\n      - "2023:2023"\n  dashboard:\n    container_name: lh-dashboard\n    image: ghcr.io/littlehorse-enterprises/littlehorse/lh-dashboard:0.10.1\n    environment:\n      LHC_API_HOST: littlehorse\n      LHC_API_PORT: 2023\n      LHC_OAUTH_ENABLED: false\n    restart: on-failure\n    depends_on:\n      littlehorse:\n        condition: service_healthy\n'})}),"\n",(0,s.jsx)(n.h2,{id:"using-the-example",children:"Using the Example"}),"\n",(0,s.jsxs)(n.p,{children:["Once you have created the LH Cluster using Docker Compose, the next step is to access it. For example, you can use one of our ",(0,s.jsx)(n.a,{href:"/docs/developer-guide/install#get-started",children:"quickstarts"})," with the following configurations."]}),"\n",(0,s.jsxs)(n.p,{children:["The dashboard can be accessed at ",(0,s.jsx)(n.a,{href:"http://localhost:8080",children:(0,s.jsx)(n.code,{children:"http://localhost:8080"})}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"cli-configs",children:"CLI Configs"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"lhctl"})," CLI is configured using (by default) the ",(0,s.jsx)(n.code,{children:"${HOME}/.config/littlehorse.config"})," file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"LHC_API_HOST=localhost\nLHC_API_PORT=2023\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["You can override the location of your configuration file for ",(0,s.jsx)(n.code,{children:"lhctl"})," by using the ",(0,s.jsx)(n.code,{children:"--configFile"})," option."]})}),"\n",(0,s.jsx)(n.h3,{id:"worker-configs",children:"Worker Configs"}),"\n",(0,s.jsxs)(n.p,{children:["Workers are configured when you create an ",(0,s.jsx)(n.code,{children:"LHConfig"})," object according to ",(0,s.jsx)(n.a,{href:"/docs/developer-guide/client-configuration#creating-the-lhconfig",children:"our documentation"}),". You need to pass in certain properties (either directly to the ",(0,s.jsx)(n.code,{children:"LHConfig"})," constructor, through a ",(0,s.jsx)(n.code,{children:"Properties"})," file, or through environment variables)."]}),"\n",(0,s.jsx)(n.p,{children:"For this example, your workers should be configured as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"LHC_API_HOST=localhost\nLHC_API_PORT=2023\nLHW_SERVER_CONNECT_LISTENER=PLAIN\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["If you walk through our ",(0,s.jsx)(n.a,{href:"/docs/developer-guide/install#get-started",children:"quickstarts"}),", the code in all three assumes that your configuration is set as environment variables."]})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>c});var s=o(6540);const t={},r=s.createContext(t);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);