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
            subHeader="PropHero, Madrid"
            body="April 2025 – Present"
            desc={`Refactoring and extending backend systems using Node.js (Express) and TypeScript, applying Domain-Driven Design (DDD) and Event-Driven Architecture.

Building serverless workflows on AWS (Lambda, SST) backed by PostgreSQL (Prisma ORM).

Integrating AI-driven features to enhance automation and decision-making.

Focused on clean, observable, and maintainable architecture tied to core business domains.`}
            stack={[
              "Node.js",
              "TypeScript",
              "Express",
              "DDD",
              "EDA",
              "AWS Lambda",
              "SST",
              "PostgreSQL",
              "Prisma ORM"
            ]}
          />
          <CustomCard
            mainHeader="Senior Software Engineer"
            subHeader="Crowdfarming, Madrid"
            body="April 2024 – April 2025"
            desc={`Owned backend development for high-impact financial features, including Stripe integrations.

Designed and deployed serverless workflows (AWS Lambda, Step Functions).

Improved system scalability and maintainability with NestJS and MongoDB.

Delivered reliable event-driven services powering core finance operations.`}
            stack={[
              "Node.js",
              "TypeScript",
              "NestJS",
              "MongoDB",
              "Stripe",
              "AWS Lambda",
              "Step Functions",
              "Event-driven"
            ]}
          />
          <CustomCard
            mainHeader="Senior Software Engineer"
            subHeader="Jacquard, London / Madrid"
            body="March 2023 – April 2024"
            desc={`Refactored the backend into microservices for scalability and resilience.

Integrated AI-powered natural language generation to improve content quality and engagement.

Used AWS ECS, Lambdas, event-driven patterns for real-time data processing.

Utilized technologies such as NestJS, Express, MongoDB, and PostgreSQL to enhance backend functionality and achieve project goals.`}
            stack={[
              "Node.js",
              "TypeScript",
              "NestJS",
              "Express",
              "AWS ECS",
              "AWS Lambda",
              "Event-driven",
              "MongoDB",
              "PostgreSQL"
            ]}
          />
          <CustomCard
            mainHeader="Senior Software Engineer"
            subHeader="Independent, Madrid"
            body="October 2021 – February 2023"
            desc={`Supported fast-growing startups (Tier, PayFit, GoStudent, Hurdle) modernizing backends using Node.js, TypeScript, and modern frameworks (Express, NestJS, Fastify).

Utilized tools such as Jest for unit testing, Git Flow, Docker, CircleCI, ArgoCD, SonarQube, Code Climate, Datadog, and the ELK stack to ensure high-quality software delivery.`}
            stack={[
              "Node.js",
              "TypeScript",
              "Express",
              "NestJS",
              "Fastify",
              "Jest",
              "Git Flow",
              "Docker",
              "CircleCI",
              "ArgoCD",
              "SonarQube",
              "Code Climate",
              "Datadog",
              "ELK"
            ]}
          />
          <CustomCard
            mainHeader="Senior Software Engineer"
            subHeader="Grupo OneTec, Madrid"
            body="October 2020 – September 2021"
            desc={`Designed microservices infrastructure from the ground up and migrated legacy systems using Domain-Driven Design principles.

Built high-throughput services with Node.js/TypeScript, AWS ECS/Fargate, Redis (Pub/Sub), and message queues (SQS, RabbitMQ).`}
            stack={[
              "Node.js",
              "TypeScript",
              "DDD",
              "AWS ECS/Fargate",
              "Redis",
              "AWS SQS",
              "RabbitMQ"
            ]}
          />
          <CustomCard
            mainHeader="Software Engineer (Full Stack)"
            subHeader="Red Acre LTD, Malta"
            body="June 2019 – July 2020"
            desc={`Developed a new microservices backend with TypeScript, supporting both GraphQL and REST APIs.

Collaborated on frontend development with React, working with Redux, MobX, Rebass, Theme UI, Emotion, and SWR.

Deployed services on AWS (Lambda, ECS, S3) and implemented centralized logging with the ELK stack.`}
            stack={[
              "Node.js",
              "TypeScript",
              "GraphQL",
              "REST APIs",
              "React",
              "Redux",
              "MobX",
              "Theme UI",
              "Emotion",
              "SWR",
              "AWS Lambda",
              "AWS ECS",
              "AWS S3",
              "ELK"
            ]}
          />
          <CustomCard
            mainHeader="Software Operations Engineer"
            subHeader="Techona, Prague"
            body="June 2017 – May 2019"
            desc={`Developed internal applications using Node.js/TypeScript (Express).

Worked on frontend development with React, Redux (Thunk), Styled Components, Axios, Lodash, Normalizr, Material-UI, AtlasKit, and PWA.

Managed SQL databases, debugged production APIs, and supported global CDN integrations (Cloudflare, Limelight).`}
            stack={[
              "Node.js",
              "TypeScript",
              "Express",
              "React",
              "Redux",
              "Styled Components",
              "Axios",
              "Lodash",
              "Normalizr",
              "Material-UI",
              "AtlasKit",
              "PWA",
              "SQL",
              "Cloudflare",
              "Limelight"
            ]}
          />
          <CustomCard
            mainHeader="Manager/owner"
            subHeader="Ciclos Barajas S.L, Madrid"
            body="January 2010 – May 2016"
            desc={`Founded and operated a cycling business, launching an e-commerce platform with automated inventory.`}
            stack={["Management", "E-commerce", "Inventory automation"]}
          />
          <CustomCard
            mainHeader="Programming Analyst"
            subHeader="Independent, USA and Madrid"
            body="May 2001 – December 2009"
            desc={`Developed and maintained software for Stryker, CEMEX, and Drago Solutions.

Technologies: RPG III/IV, CL, Java, C++, SQL.`}
            stack={["RPG III/IV", "CL", "Java", "C++", "SQL"]}
          />

          <CVSection title="Education" imgSrc="/certificate.svg" />

          <EducationCard
            mainHeader="Scrum Master certification"
            subHeader="Scrum Manager number 32675, Tanta Training Center, Madrid, Spain"
            body="November 2020"
          />

          <EducationCard
            mainHeader="Computer and Information Systems"
            subHeader="Virginia Western Community College, Virginia, USA & Kalamazoo Valley Community College, Michigan, USA"
            body="January 1998 – August 2001"
          />
        </Container>
      </Layout>
    </>
  );
};

export default resume;
