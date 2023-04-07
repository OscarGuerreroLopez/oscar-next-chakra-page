import { NextSeo, SocialProfileJsonLd, CorporateContactJsonLd } from "next-seo";
import Topic from "@/components/about/topics";
import StatsText from "@/components/about/statsText";
import CustomHeader from "@/components/head";

const mainTitle = "expertise";
const subTitle = " Areas of expertise";
const mainDesc =
  "As a software engineer, my areas of expertise include BackEnd development using microservices architecture, Node.js, and TypeScript. I have extensive experience in designing, developing, and deploying complex BackEnd systems using these technologies.";

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
        software solutions, focusing on microservices architectures using
        node.js and TypeScript. With 15 years of experience, I work with
        cloud-based technologies, including AWS, and leverage the latest tools
        and best practices to ensure high-quality and efficient software
        development.
      </>
    )
  },
  {
    title: "Cloud",
    content: (
      <>
        I have extensive experience designing and implementing{" "}
        <StatsText>cloud-based infrastructures</StatsText>, with a
        specialization in scalable microservices architectures on AWS. My
        approach focuses on optimizing performance, ensuring security,{" "}
        <StatsText>reducing costs</StatsText>, and providing flexibility for
        businesses.
      </>
    )
  },
  {
    title: "Technologies",
    content: (
      <>
        As an expert in <StatsText>emerging technologies</StatsText>, I stay
        up-to-date on the latest advancements and tools to deliver cutting-edge
        solutions. I specialize in leveraging emerging technologies to develop
        innovative software solutions and provide consultation on their
        potential applications to help businesses stay ahead of the curve.
      </>
    )
  },
  {
    title: "Collaboration",
    content: (
      <>
        With extensive experience in collaboration, I excel in team environments
        and enjoy working with clients to deliver solutions that meet their
        unique needs. I specialize in effective communication, project
        management, and fostering a culture of collaboration to ensure
        <StatsText> successful outcomes</StatsText> for all stakeholders.
      </>
    )
  }
];
