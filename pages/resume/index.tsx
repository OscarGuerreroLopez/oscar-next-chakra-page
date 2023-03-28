import Layout from "@/components/layout";

import { Container } from "@chakra-ui/react";
import CustomCard from "@/components/resume/card";

const resume = () => {
  return (
    <Layout>
      <Container maxW={"4xl"} mt="10">
        <CustomCard
          mainHeader="Senior Software Engineer"
          subHeader="Freelancer, Madrid"
          body="October 2021 –Present"
          desc="Collaborating with some tech companies right now to improve, create, and refactor the backend. Working in a microservice environment with Node(express, fastify and nest.js) , TypeScript, DDD with rabbitMQ and Kafka. Designing IoT systems to get information from different devices scattered all over Europe. Some of the tools used to develop and deliver are: Jest for unit testing, Git flow, Docker, CircleCi, ArgoCD, sonarqube and code climate, DataDog and and the ELK stack.... Just to name a few"
          stack={[
            "Node.js",
            "Typescript",
            "express",
            "fastify",
            "nest.js",
            "EDD",
            "DDD",
            "rabbitMQ",
            "Kafka",
            "Jest",
            "Git flow",
            "Docker",
            "ECS",
            "Kubernetes",
            "CircleCi",
            "ArgoCD",
            "sonarqube",
            "code climate",
            "DataDog",
            "ELK stack",
            "React",
            "Chakra UI"
          ]}
        />
        <CustomCard
          mainHeader="Software Engineer (Backend Lead)"
          subHeader="Grupo OneTec, Madrid"
          body="October 2020 – September 2021"
          desc="Developing a microservice infrastructure for the new projects and migrating old ones following a DDD approach when possible. Managing a group of developers to follow best practices and also to comply with the deadlines using agile methods. Stacks"
          stack={[
            "Node.js",
            "TypeScript",
            "Docker",
            "ECS with fargate",
            "Redis",
            "AWS SQS",
            "RabbitMq",
            "GraphQL",
            "Rest apis",
            "MySql",
            "MongoDb",
            "Jest for testing",
            "Angular 9"
          ]}
        />

        <CustomCard
          mainHeader="Software Engineer (Full Stack)"
          subHeader="Red Acre Ltd, Malta"
          body="June 2019 – July 2020"
          desc="Full Stack developing the new microservice backend for the company using Node.js with typescript. Alternating GraphQL and Rest endpoints. Also collaborating with the development of the frontend part with React(Redux, Mobx, rebass, theme-ui, Emotion, SWR). All of this in AWS (Lambda, S3, ECS...). Microservices using Docker and the ELK stack as a monitoring tool. mongoDb as the database."
        />

        <CustomCard
          mainHeader="Software Engineer"
          subHeader="LiveScore, Prague, Czechia"
          body="November 2018 – May 2019"
          desc="Front-end engineer working in the new system. Migrating the old front-end application to react/typescript and optimazing their FE processes. Stack: "
          stack={[
            "React",
            "Redux (+thunk)",
            "Styled Components",
            "Axios",
            "Lodash",
            "Normalizr",
            "Material-UI",
            "AtlasKit",
            "PWA"
          ]}
        />

        <CustomCard
          mainHeader="Software Operations Engineer"
          subHeader="Techona, Prague, Czechia"
          body="February 2018 – October 2018"
          desc="Created internal applications with Angular 5 and node.js, built Rest APIs with node.js(express) and Swagger, and managed SQL databases and APIs. In addition, I handled Windows app and web servers, monitored and debugged APIs, and provided support for CDNs such as Limelight, Cloudflare, and CDNetworks. To facilitate project management and monitoring, I utilized tools and technologies such as Confluence, Jira, and Swagger. I also performed rollouts and deployments to production environments. My skills include full-stack development, Rest APIs with node.js(express) and Swagger, SQL database management and monitoring, Windows app and web server handling, API monitoring and debugging, and CDN support (Limelight, Cloudflare, CDNetworks)."
          stack={[
            "Angular",
            "node",
            "Typescript",
            "Express",
            "Swagger",
            "Rest APIs",
            "CDN",
            "Limelight",
            "Cloudflare",
            "CDNetworks",
            "Confluence",
            "Jira"
          ]}
        />

        <CustomCard
          mainHeader="Full-Stack engineer"
          subHeader="Europcar, Madrid"
          body="June 2016 – January 2018"
          desc="
          Developed and maintained applications using Angular2/4, Bootstrap, Node JS, and MySql. Also, I was required to develop scripts in Python and Bash."
          stack={[
            "REST APIs",
            "GIT",
            "Angular",
            "node.js",
            "Typescript",
            "MySql",
            "Python",
            "Bash"
          ]}
        />
      </Container>
    </Layout>
  );
};

export default resume;
