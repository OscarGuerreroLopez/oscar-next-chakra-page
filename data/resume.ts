export interface ResumeProfile {
  name: string;
  location: string;
  phone: string;
  email: string;
  linkedinUrl: string;
  title: string;
  summary: string;
}

export interface SkillCategory {
  label: string;
  items: string;
}

export interface ExperienceEntry {
  title: string;
  employer: string;
  location?: string;
  dateRange: string;
  responsibilities: string[];
  stack?: string[];
}

export interface EducationEntry {
  credential: string;
  institution: string;
  date: string;
}

export const resumeProfile: ResumeProfile = {
  name: "Oscar Guerrero Lopez",
  location: "Madrid, Spain",
  phone: "+34 622 45 00 08",
  email: "oscar.computer.guy@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/oscar-guerrero-a59289153/",
  title: "Senior Software Engineer | Backend, Cloud & AI Systems",
  summary:
    "Senior Software Engineer with 10+ years of backend engineering experience designing, building, and modernizing cloud-based software systems. Specializes in Node.js, TypeScript, and Amazon Web Services (AWS), including microservices, serverless architecture, event-driven systems, SQL and NoSQL databases, and AI/RAG applications. Experienced in software development, system migration, API integration, deployment, and operational support for fintech, SaaS, and marketplace products."
};

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages & Frameworks",
    items: "Node.js, TypeScript, NestJS, Express, React"
  },
  {
    label: "Cloud & Serverless",
    items:
      "Amazon Web Services (AWS), Lambda, ECS, Fargate, Step Functions, EventBridge, SQS, Bedrock, SST"
  },
  {
    label: "Backend & Architecture",
    items:
      "Backend Development, Microservices, Serverless Architecture, Event-Driven Architecture, Domain-Driven Design (DDD), REST APIs, GraphQL, API Integration"
  },
  {
    label: "Databases & Search",
    items: "PostgreSQL, MongoDB, MySQL, Redis, Prisma, OpenSearch"
  },
  {
    label: "DevOps & Observability",
    items: "Docker, CI/CD, ELK Stack, Logging, Monitoring"
  },
  {
    label: "AI Engineering",
    items:
      "Retrieval-Augmented Generation (RAG), Generative AI, LangChain, LangGraph, AWS AgentCore, Bedrock Knowledge Bases"
  }
];

export const experience: ExperienceEntry[] = [
  {
    title: "Senior Software Engineer",
    employer: "PropHero",
    location: "Madrid",
    dateRange: "Apr 2025 – Aug 2026",
    responsibilities: [
      "Engineered Node.js and TypeScript backend services and serverless workflows on AWS Lambda/SST, PostgreSQL, and Prisma.",
      "Enabled asynchronous, event-driven processing between backend services through EventBridge and SQS integrations.",
      "Developed AI-powered automations and RAG services for internal teams and operational workflows using Python, LangChain, LangGraph, AWS AgentCore, Bedrock Knowledge Bases, Pinecone and OpenSearch."
    ],
    stack: [
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
    ]
  },
  {
    title: "Senior Software Engineer",
    employer: "CrowdFarming",
    location: "Madrid",
    dateRange: "Apr 2024 – Apr 2025",
    responsibilities: [
      "Owned backend delivery for financial and operational product capabilities, including Stripe payments, subscriptions, and billing automation.",
      "Implemented AWS Lambda and Step Functions workflows to support and automate financial and operational processes using NestJS and mongoDB.",
      "Delivered reliable event-driven services to support operations"
    ],
    stack: [
      "Node.js",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "AWS Lambda",
      "Step Functions",
      "Stripe",
      "Event-Driven Architecture"
    ]
  },
  {
    title: "Senior Software Engineer",
    employer: "Jacquard (formerly Phrasee)",
    location: "London (Remote)",
    dateRange: "Mar 2023 – Apr 2024",
    responsibilities: [
      "Modernized legacy backend systems into NestJS and Express microservices deployed on AWS ECS and Lambda, with MongoDB and PostgreSQL data stores.",
      "Delivered event-driven services that supported AI content-generation workflows."
    ],
    stack: [
      "Node.js",
      "TypeScript",
      "NestJS",
      "Express",
      "AWS ECS",
      "AWS Lambda",
      "MongoDB",
      "PostgreSQL"
    ]
  },
  {
    title: "Senior Software Engineer",
    employer: "Grupo OneTec",
    location: "Madrid",
    dateRange: "Aug 2021 – Feb 2023",
    responsibilities: [
      "Led the modernization of legacy systems toward Domain-Driven Design and Node.js/TypeScript microservices.",
      "Engineered backend services and messaging infrastructure with AWS ECS/Fargate, RabbitMQ, SQS, Redis, and GraphQL."
    ],
    stack: [
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
    ]
  },
  {
    title: "Software Engineer",
    employer: "Red Acre Ltd",
    location: "Malta",
    dateRange: "Jun 2019 – Jul 2021",
    responsibilities: [
      "Developed TypeScript microservices exposing GraphQL and REST APIs, deployed on AWS Lambda and ECS.",
      "Improved operational visibility through centralized logging and monitoring with the ELK Stack, while contributing React frontend features."
    ],
    stack: [
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
    ]
  },
  {
    title: "Software Operations Engineer",
    employer: "Techona",
    location: "Prague",
    dateRange: "Jun 2016 – May 2019",
    responsibilities: [
      "Developed internal tools and REST APIs with Node.js and Express to support business operations.",
      "Managed SQL databases, application deployments, and production troubleshooting to maintain operational continuity."
    ],
    stack: [
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
    ]
  }
];

export const earlierExperience: ExperienceEntry[] = [
  {
    title: "Independent Business Owner",
    employer: "Ciclos Barajas",
    dateRange: "2010 – May 2016",
    responsibilities: [
      "Operated a retail business while building and maintaining its software, databases, process automation, and e-commerce systems."
    ]
  },
  {
    title: "Programming Analyst",
    employer: "Freelance",
    location: "USA & Spain",
    dateRange: "2001 – 2010",
    responsibilities: [
      "Delivered business software solutions for clients including Stryker, CEMEX, and Drago Solutions."
    ]
  }
];

export const education: EducationEntry[] = [
  {
    credential: "Associate’s Degree, Computer and Information Systems",
    institution: "Kalamazoo Valley Community College, Michigan, USA",
    date: "1998–2001"
  },
  {
    credential: "Scrum Master Certification",
    institution: "Scrum Manager #32675, Tanta Training Center, Madrid, Spain",
    date: "2020"
  }
];
