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
            subHeader="Crowdfarming, Madrid"
            body="April 2024 - Present"
            desc="Senior Software Engineer in the Finance Squad, specializing in backend development. Refactoring existing code, implementing new features, and optimizing system performance using Node.js/NestJS and MongoDB. Building and integrating payment solutions, including Stripe. Enhancing
                system efficiency and contributing to high-impact financial projects through scalable, high-performance solutions."
            stack={[
              "Node.js",
              "Typescript",
              "express",
              "nest.js",
              "Jest",
              "Docker",
              "ECS",
              "mongoDB"
            ]}
          />
          <CustomCard
            mainHeader="Senior Software Engineer"
            subHeader="Jacquard, London"
            body="March 2023 - April 2024"
            desc="Collaborated with a cross-functional team to refactor the backend into
              a microservices architecture, optimizing performance and scalability.
              Integrated artificial intelligence for natural language generation,
              enhancing user experience and content quality. Using AWS ECS,
              Lambdas, and event-driven design, enabling real-time data processing.
              Utilized technologies such as NestJS, Express, MongoDB, and PostgreSQL
              to enhance backend functionality and achieve project goals."
            stack={[
              "Node.js",
              "Typescript",
              "express",
              "nest.js",
              "Kafka",
              "Jest",
              "Docker",
              "ECS",
              "mongoDB"
            ]}
          />
          <CustomCard
            mainHeader="Senior Software Engineer"
            subHeader="Freelancer, Madrid"
            body="October 2021 - February 2023"
            desc="Collaborated with a variety of tech companies, including Tier, PayFit, and
                  GoStudent. Developed and refactored backend systems into microservices
                  architectures using Node.js (Express, Fastify, NestJS) and TypeScript.
                  Worked with React and Next.js for frontend development in some of the
                  projects."
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
            body="August 2020 – September 2021"
            desc="Developed a microservices infrastructure for new projects and migrated
                  legacy systems, applying Domain-Driven Design (DDD) principles when
                  possible. Built and optimized backend services using Node.js/TypeScript, Docker
                  with AWS ECS/Fargate, Redis (Pub/Sub), AWS SQS, RabbitMQ, GraphQL,
                  and REST APIs with MySQL (Sequelize) and MongoDB (Mongoose),
                  improving system scalability and reducing deployment time by 30%."
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
            desc="Developed a new microservices backend using Node.js with TypeScript,
                  implementing both GraphQL and REST endpoints. Collaborated on frontend development with React, working with Redux,
                  MobX, Rebass, Theme UI, Emotion, and SWR. Utilized AWS services (Lambda, S3, ECS) and Docker for microservices
                  deployment. Implemented monitoring and logging solutions with the ELK
                  stack. Managed data storage and retrieval using MongoDB."
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
            mainHeader="Software Operations Engineer"
            subHeader="Techona, Prague, Czechia"
            body="June 2016 – May 2019"
            desc="Developed internal applications using Node.js/TypeScript (Express).
                  Worked on frontend development with React, Redux (Thunk), Styled
                  Components, Axios, Lodash, Normalizr, Material-UI, AtlasKit, and PWA. 
                  Managed SQL databases, monitored and debugged APIs, and handled
                  Windows app/web servers. Performed rollouts and deployments while
                  supporting CDNs like Limelight, Cloudflare, and CDNetworks. Utilized tools such as Confluence, Jira, and Swagger for documentation
                  and collaboration."
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
            body="January 2006 – May 2016"
            desc="Founded and managed a sports (cycling) business, adapting to
                dynamic market conditions with effective sales strategies. Developed a deep understanding of customer needs and adjusted
                marketing approaches accordingly. Created my own bike brand. Leveraged my IT background to automate inventory management and
                build an online store to expand sales channels."
            stack={["Management"]}
          />

          <CustomCard
            mainHeader="Programmer Analyst"
            subHeader="Stryker, MI, USA / Drago Solutions, Madrid"
            body="May 2001 – December 2005"
            desc="Worked as a Programmer Analyst for Stryker (USA) as part of my internship and then
              Drago Solutions (Madrid). Developed software using RPG III, RPG IV, ILE, CL, as well as Java and C++
              with SQL databases"
            stack={["RPG IV", "SQL", "AS/400"]}
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
