import Topic from "@/components/about/topics";

import StatsText from "@/components/about/statsText";

const mainTitle = "Experience";
const subTitle = "Software Engineering";
const mainDesc =
  "My 15+ years of experience as a software engineer, combined with my specialization in startups since 2016, have given me the skills, expertise, and adaptability to tackle any software development challenge with confidence and creativity.";

export default function StatsGridWithImage() {
  return (
    <Topic
      mainTitle={mainTitle}
      subTitle={subTitle}
      mainDesc={mainDesc}
      stats={stats}
    />
  );
}

const stats = [
  {
    title: "Professional Journey",
    content: (
      <>
        I've been working as<StatsText> a software engineer </StatsText> for
        over 15 years, and during that time, I've gained extensive experience in
        various aspects of software development. I started my career working on
        enterprise-level applications for large corporations, where I gained a
        solid foundation in software engineering principles, project management,
        and collaboration.
      </>
    )
  },
  {
    title: "Specialization",
    content: (
      <>
        In 2016, I shifted my focus to working with{" "}
        <StatsText>startups</StatsText>, and I've been specializing in this area
        ever since. Working with startups has allowed me to be part of exciting
        projects from the ground up and helped me develop a unique skill set
        that combines technical expertise with a deep understanding of the
        startup ecosystem.
      </>
    )
  },
  {
    title: "Projects",
    content: (
      <>
        I've had the opportunity to work on a range of projects, from developing
        minimum viable products to building out complex{" "}
        <StatsText>software systems</StatsText>. I understand the importance of
        balancing speed with quality and the need to iterate quickly while
        keeping the user's needs at the forefront.
      </>
    )
  },
  {
    title: "Passion",
    content: (
      <>
        Over the years, I've developed a passion for using technology to{" "}
        <StatsText>solve complex problems</StatsText>, and I've become
        proficient in several programming languages, platforms, and frameworks.
        I'm always learning and keeping up with the latest industry trends, and
        I'm excited to bring my skills and experience to new challenges and
        opportunities.
      </>
    )
  }
];
