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
            desc="Senior Software Engineer in the Finance Squad, specializing in backend development. Focused on refactoring code, implementing new features, and ensuring optimal performance using Nest.js, MongoDB, and PostgreSQL. Dedicated to enhancing system efficiency and contributing to high-impact financial projects through innovative solutions and robust database management."
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
            subHeader="Phrasee, London"
            body="March 2023 - April 2024"
            desc="Collaborate with a cross-functional team to refactor the backend into a microservice architecture, optimizing performance and scalability.
            Integrate artificial intelligence for natural language generation, enhancing user experiences and content quality.
            Ensure seamless integration of AI-generated content using AWS ECS services, Lambdas, and event-driven design, enabling real-time data processing.
            Utilize technologies including Nest.js, Express, MongoDB, and Postgres to achieve project goals and enhance backend functionality.
            Contribute to the development of reliable, scalable, and secure backend services, delivering high-quality, AI-generated content to users.
            Mentor and assist junior programmers, fostering skill development and collaboration within the team."
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
            desc="Collaborating with tech companies to improve, create, and refactor the backend. Working in a microservice environment with Node (Express, Fastify, and Nest.js), TypeScript, and DDD with RabbitMQ and Kafka. Developing code for IoT devices to communicate with the backend. Additionally, working with React and Next.js for some frontend development. Some of the tools used to develop and deliver are: Jest for unit testing, Git flow, Docker, CircleCI, ArgoCD, SonarQube and Code Climate, DataDog, and the ELK stack."
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
            desc="Developed a microservices infrastructure for new projects and migrated old ones following a DDD approach when possible. Managed a group of developers to follow best practices and meet deadlines using agile methods. Utilized Node.js/TypeScript, Docker with AWS ECS/Fargate, Redis with pub/sub, AWS SQS, RabbitMQ, GraphQL, and Rest APIs against MySQL (Sequelize) and MongoDB (Mongoose). Tested with Jest and worked with Angular 9."
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
            desc="Developed a new microservices backend using Node.js with TypeScript and alternating between GraphQL and Rest endpoints. Also collaborated with the frontend development using React (Redux, Mobx, rebass, theme-ui, Emotion, SWR). Utilized AWS (Lambda, S3, ECS) and Docker for microservices and the ELK stack for monitoring, with MongoDB as the database."
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
            desc="Worked as a frontend developer using React, Redux (+thunk), Styled Components, Axios, Lodash, Normalizr, Material-UI, AtlasKit, PWA, and more."
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
            desc="Created internal applications with Angular 5 and Node.js, built Rest APIs with Node.js (Express) and Swagger, managed SQL databases, monitored and debugged APIs, handled Windows APP/Web Servers, performed rollouts and deployments, supported CDNs (Limelight, Cloudflare, CDNetworks), and used tools such as Confluence, Jira, and Swagger."
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
            mainHeader="Full Stack Engineer"
            subHeader="Europcar, Madrid"
            body="June 2016 – January 2018"
            desc="Developed and maintained applications using Angular2/4, Bootstrap, Node.js, and MySQL. Also developed scripts in Python and Bash."
            stack={["Node", "Typescript", "Angular", "MySql", "Python", "Bash"]}
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
            desc="Developed and maintained applications and databases for different clients, working through the entire life cycle from problem definition to deployment and maintenance. Used programming languages such as C++ and Java"
            stack={["Java", "C++"]}
          />

          <CustomCard
            mainHeader="Programmer Analyst"
            subHeader="Drago Solutions, Madrid"
            body="September 2001 – June 2005"
            desc="Worked on IBM AS/400 systems with RPG IV and SQL, mainly at CEMEX. Acquired as well as developed test data, revising program(s) resulting in improved performance."
            stack={["RPG IV", "SQL", "AS/400"]}
          />

          <CustomCard
            mainHeader="Programmer Analyst"
            subHeader="Stryker Corporation, Michigan, EEUU"
            body="May 2000 – August 2001"
            desc="Developed programs in RPG III, RPG IV, ILE, and CL. Monitored the execution of strategies and kept up-to-date with the latest technology market trends."
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
