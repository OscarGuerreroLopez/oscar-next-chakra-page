import CustomHeader from "@/components/head/customHeader";
import Topic from "@/components/about/topics";
import StatsText from "@/components/about/statsText";

const mainTitle = "Experience";
const subTitle = "Software Engineering";
const mainDesc =
  "I bring 20+ years of software engineering experience across enterprise software, startups, and cloud-native product teams, with a current specialization in AI backend engineering.";

export default function StatsGridWithImage() {
  return (
    <>
      <CustomHeader
        title="Oscar Software Engineer"
        description="Best Software Engineer. Freelance Software Engineer. Software Developer"
        url="https://oscarcomputerguy.com/about/experience"
        siteName="Oscar Software Engineer experience"
      />

      <Topic
        mainTitle={mainTitle}
        subTitle={subTitle}
        mainDesc={mainDesc}
        stats={stats}
      />
    </>
  );
}

const stats = [
  {
    title: "Professional Journey",
    content: (
      <>
        I have worked as<StatsText> a software engineer </StatsText> since 2001,
        building more than 20 years of experience across enterprise and product
        organizations. This path helped me strengthen software architecture,
        delivery ownership, and collaboration with cross-functional teams.
      </>
    )
  },
  {
    title: "Recent Roles",
    content: (
      <>
        Recent roles include <StatsText>PropHero</StatsText> (Apr 2025–Present),{" "}
        <StatsText>CrowdFarming</StatsText> (Apr 2024–Apr 2025), and{" "}
        <StatsText>Jacquard</StatsText> (Mar 2023–Apr 2024), where I focused on
        scalable backend systems, fintech and operational services, and
        AI-enabled product capabilities.
      </>
    )
  },
  {
    title: "Architecture Focus",
    content: (
      <>
        I design and deliver <StatsText>cloud-native backend architecture</StatsText>{" "}
        using Node.js, TypeScript, and AWS. My work includes microservices,
        event-driven systems, and serverless workflows using Lambda, ECS,
        Step Functions, and EventBridge, with data platforms such as PostgreSQL,
        MongoDB, and Prisma.
      </>
    )
  },
  {
    title: "AI Backend Engineering",
    content: (
      <>
        I build AI backend capabilities with <StatsText>Python</StatsText>,
        LangChain, and LangGraph, including multi-agent orchestration and
        RAG pipelines powered by AWS Bedrock Knowledge Bases and OpenSearch.
        My focus is reliable, observable systems that deliver real product value
        in production.
      </>
    )
  }
];
