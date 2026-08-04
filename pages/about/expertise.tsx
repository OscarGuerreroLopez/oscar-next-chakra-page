import Topic from "@/components/about/topics";
import StatsText from "@/components/about/statsText";
import CustomHeader from "@/components/head/customHeader";

const mainTitle = "EXPERTISE";
const subTitle = "Areas of expertise";
const mainDesc =
  "As a senior software engineer, my core expertise is cloud-native backend development with Node.js, TypeScript, Python, and AWS, including AI backend systems for real production use cases.";

export default function StatsGridWithImage() {
  return (
    <>
      <CustomHeader
        title="Oscar Software Engineer"
        description="Best Software Engineer. Freelance Software Engineer. Software Developer"
        url="https://oscarcomputerguy.com/about/expertise"
        siteName="Oscar Software Engineer expertise"
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
    title: "Development",
    content: (
      <>
        I specialize in <StatsText>designing and developing</StatsText> scalable
        software solutions, focusing on microservices and modular backend
        architecture with Node.js, TypeScript, and Python. With more than 20
        years of experience, I prioritize maintainability, observability, and
        business-aligned delivery.
      </>
    )
  },
  {
    title: "Cloud",
    content: (
      <>
        I have extensive experience designing and implementing{" "}
        <StatsText>cloud-based infrastructures</StatsText>, with a
        specialization in scalable microservices and serverless architectures on
        AWS. I work with Lambda, ECS/Fargate, Step Functions, and EventBridge,
        focusing on performance, security, and <StatsText>cost efficiency</StatsText>.
      </>
    )
  },
  {
    title: "Technologies",
    content: (
      <>
        I build <StatsText>AI backend capabilities</StatsText> with LangChain,
        LangGraph, and AWS Bedrock, including RAG and multi-agent workflows. I
        focus on practical AI adoption that improves automation, decision-making,
        and product outcomes.
      </>
    )
  },
  {
    title: "Collaboration",
    content: (
      <>
        I thrive in distributed and cross-functional teams, partnering with
        product, data, and operations to deliver measurable outcomes. I value
        clear communication, mentoring, and strong engineering standards to
        ensure <StatsText>successful delivery</StatsText>.
      </>
    )
  }
];
