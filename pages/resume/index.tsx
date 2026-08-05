import Layout from "@/components/layout";
import { Container } from "@chakra-ui/react";
import CustomCard from "@/components/resume/card";
import EducationCard from "@/components/resume/educationCard";
import CVSection from "@/components/resume/cvSection";
import CustomHeader from "@/components/head/customHeader";

const Resume = () => {
  return (
    <>
      <Layout>
        <CustomHeader
          title="Resume | Senior Software Engineer | Oscar Guerrero"
          description="See Oscar Guerrero's resume, including backend and AI engineering experience across PropHero, CrowdFarming, Jacquard, and other product teams."
          url="https://oscarcomputerguy.com/resume"
          siteName="Oscar Guerrero Resume"
        />
        <Container maxW={"4xl"} mt={{ base: 0, md: 8 }}>
          <CVSection title="Professional Experience" imgSrc="/cv.svg" />

          <CustomCard
            mainHeader="Senior Software Engineer"
            subHeader="PropHero, Madrid"
            body="April 2025 – Present"
            desc={`Build scalable backend systems in Node.js (Express) and TypeScript.

Develop serverless workflows with AWS Lambda/SST, PostgreSQL, and Prisma.

Implement event-driven integrations and async processing pipelines.

Build AI backend capabilities in Python with LangChain/LangGraph and AWS AgentCore.

Develop multi-agent workflows and RAG pipelines using AWS Bedrock Knowledge Bases and OpenSearch.`}
            stack={[
              "Node.js",
              "TypeScript",
              "Python",
              "AWS Lambda",
              "SST",
              "PostgreSQL",
              "Prisma",
              "LangChain",
              "LangGraph",
              "AWS Bedrock",
              "OpenSearch",
              "EventBridge"
            ]}
          />

          <CustomCard
            mainHeader="Senior Software Engineer"
            subHeader="CrowdFarming, Madrid"
            body="April 2024 – April 2025"
            desc={`Owned backend development for financial and operational features.

Integrated Stripe for payments, subscriptions, and billing automation.

Designed serverless workflows with Lambda and Step Functions.

Improved maintainability and scalability with NestJS and MongoDB.`}
            stack={[
              "Node.js",
              "TypeScript",
              "NestJS",
              "MongoDB",
              "AWS Lambda",
              "Step Functions",
              "Stripe",
              "Event-Driven Architecture"
            ]}
          />

          <CustomCard
            mainHeader="Senior Software Engineer"
            subHeader="Jacquard (formerly Phrasee), London (Remote)"
            body="March 2023 – April 2024"
            desc={`Refactored backend systems into resilient microservices.

Built event-driven AI content-generation services.

Collaborated across distributed teams and mentored junior engineers.`}
            stack={[
              "Node.js",
              "TypeScript",
              "NestJS",
              "Express",
              "AWS ECS",
              "AWS Lambda",
              "MongoDB",
              "PostgreSQL"
            ]}
          />

          <CustomCard
            mainHeader="Senior Software Engineer Consultant"
            subHeader="Freelance / Self-Employed, Madrid"
            body="October 2021 – February 2023"
            desc={`Supported startups (Tier Mobility, PayFit, GoStudent, Hurdle) modernizing backend/cloud systems.

Designed and refactored microservices in Node.js/TypeScript (NestJS, Fastify, Express).

Worked on AWS-based delivery pipelines with strong DevOps/quality tooling.`}
            stack={[
              "Node.js",
              "TypeScript",
              "NestJS",
              "Fastify",
              "Express",
              "Docker",
              "AWS",
              "CircleCI",
              "ArgoCD",
              "Datadog",
              "ELK",
              "Jest"
            ]}
          />

          <CustomCard
            mainHeader="Senior Software Engineer"
            subHeader="Grupo OneTec, Madrid"
            body="August 2020 – September 2021"
            desc={`Designed microservices architecture and led legacy migration using DDD principles.

Built high-throughput services and messaging infrastructure.`}
            stack={[
              "Node.js",
              "TypeScript",
              "AWS ECS/Fargate",
              "Redis",
              "RabbitMQ",
              "SQS",
              "GraphQL",
              "MySQL",
              "MongoDB",
              "Docker",
              "DDD"
            ]}
          />

          <CustomCard
            mainHeader="Software Engineer (Full Stack)"
            subHeader="Red Acre LTD, Malta"
            body="June 2019 – July 2020"
            desc={`Built TypeScript microservices supporting GraphQL and REST APIs.

Contributed to React frontend and deployed services on AWS.

Implemented centralized logging and monitoring with ELK.`}
            stack={[
              "Node.js",
              "TypeScript",
              "React",
              "Redux",
              "GraphQL",
              "REST",
              "AWS Lambda",
              "AWS ECS",
              "MongoDB",
              "ELK"
            ]}
          />

          <CustomCard
            mainHeader="Software Operations Engineer"
            subHeader="Techona, Prague"
            body="June 2016 – May 2019"
            desc={`Built internal tools and REST APIs with Node.js/Express.

Managed SQL databases and supported deployment/operations reliability.`}
            stack={[
              "Node.js",
              "Express",
              "TypeScript",
              "Angular",
              "SQL",
              "MySQL",
              "Python",
              "Bash",
              "Swagger",
              "Cloudflare",
              "Limelight"
            ]}
          />

          <CustomCard
            mainHeader="Earlier Experience (before 2016)"
            subHeader="Independent Business Owner, Ciclos Barajas (2010–2016) · Programming Analyst, Freelance (2001–2009, USA & Spain)"
            body="2001 – 2016"
            desc={`Built and maintained business software and databases and operated a retail business end-to-end, including process automation and e-commerce implementation.

Worked with clients such as Stryker, CEMEX, and Drago Solutions using RPG III/IV, ILE, CL, Java, C++, and SQL.`}
            stack={[
              "RPG III/IV",
              "ILE",
              "CL",
              "Java",
              "C++",
              "SQL",
              "E-commerce",
              "Process automation"
            ]}
          />

          <CVSection title="Education" imgSrc="/certificate.svg" />

          <EducationCard
            mainHeader="Associate’s Degree — Computer and Information Systems"
            subHeader="Kalamazoo Valley Community College, Michigan, USA"
            body="1998 – 2001"
          />

          <EducationCard
            mainHeader="Scrum Master Certification"
            subHeader="Scrum Manager #32675, Tanta Training Center, Madrid, Spain"
            body="2020"
          />
        </Container>
      </Layout>
    </>
  );
};

export default Resume;
