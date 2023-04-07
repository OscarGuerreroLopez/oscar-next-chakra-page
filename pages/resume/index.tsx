import Layout from "@/components/layout";
import { Container } from "@chakra-ui/react";
import CustomCard from "@/components/resume/card";
import EducationCard from "@/components/resume/educationCard";
import CVSection from "@/components/resume/cvSection";
import CustomHeader from "@/components/head/customHeader";

const resume = () => {
  return (
    <>
      <Layout>
        <CustomHeader
          title="Oscar Software Engineer"
          description="Best Software Engineer. Freelance Software Engineer. Software Developer"
          url="https://oscarcomputerguy.com/resume"
          siteName="Oscar Software Engineer resume"
        />
        <Container maxW={"4xl"} mt={{ base: 0, md: 8 }}>
          <CVSection title="Professional Experience" imgSrc="/cv.svg" />
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
              "Chakra UI",
              "Buddy",
              "Next.js"
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
              "ECS/fargate",
              "Redis",
              "AWS SQS",
              "RabbitMq",
              "GraphQL",
              "Rest apis",
              "MySql",
              "MongoDb",
              "Jest ",
              "Angular 9"
            ]}
          />

          <CustomCard
            mainHeader="Software Engineer (Full Stack)"
            subHeader="Red Acre Ltd, Malta"
            body="June 2019 – July 2020"
            desc="Full Stack developing the new microservice backend for the company using Node.js with typescript. Alternating GraphQL and Rest endpoints. Also collaborating with the development of the frontend part with React(Redux, Mobx, rebass, theme-ui, Emotion, SWR). All of this in AWS (Lambda, S3, ECS...). Microservices using Docker and the ELK stack as a monitoring tool. mongoDb as the database."
            stack={[
              "node.js",
              "express",
              "serverless",
              "ELK",
              "React",
              "Redux",
              "SWR",
              "Emotion",
              "ECS/fargate",
              "theme-ui",
              "rebass"
            ]}
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
            mainHeader="Manager/owner"
            subHeader="Ciclos Barajas S.L, Madrid"
            body="January 2010 – May 2016"
            desc="Created and ran my own sports business."
            stack={["Management"]}
          />

          <CustomCard
            mainHeader="Programmer Analyst"
            subHeader="Freelance, Madrid"
            body="November 2005 – December 2009"
            desc="Developed and maintained applications and databases for different clients working through the entire life cycle, from the problem definition all the way to deployment and maintenance. Used programming languages such as C++ and Java"
            stack={["Java", "C++"]}
          />

          <CustomCard
            mainHeader="Programmer Analyst"
            subHeader="Drago Solutions, Madrid"
            body="September 2001 – June 2005"
            desc="Worked on IBM AS/400 systems with RPG IV and SQL, mainly at CEMEX.
          Acquired as well as developed test data, revising program(s) resulting in improved performance."
            stack={["RPG IV", "SQL", "AS/400"]}
          />

          <CustomCard
            mainHeader="Programmer Analyst"
            subHeader="Stryker Corporation, Michigan, EEUU"
            body="May 2000 – August 2001"
            desc="Developed programs in RPG III, RPG IV, ILE and CL. Monitored the execution of strategies and kept up to date with the new technology and researched the latest technology market trends."
            stack={["RPG III", "RPG IV", "ILE", "AS/400"]}
          />

          <CVSection title="Education" imgSrc="/certificate.svg" />

          <EducationCard
            mainHeader="Scrum Master certification"
            subHeader="Scrum Manager number 32675"
            body="November 2020"
          />

          <EducationCard
            mainHeader="Computer and Information Systems"
            subHeader="Kalamazoo Valley Community College, Michigan, USA"
            body="January 1998 – August 2001"
          />
        </Container>
      </Layout>
    </>
  );
};

export default resume;
