import Topic from "@/components/about/topics";
import StatsText from "@/components/about/statsText";

const mainTitle = "expertise";
const subTitle = " Areas of expertise";
const mainDesc =
  "As a software engineer, my areas of expertise include BackEnd development using microservices architecture, Node.js, and TypeScript. I have extensive experience in designing, developing, and deploying complex BackEnd systems using these technologies.";

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
    title: "Front End",
    content: (
      <>
        In addition to my BackEnd expertise, I am also proficient in{" "}
        <StatsText>front-end development using React</StatsText>. I have worked
        on several projects that involve developing user interfaces, and I
        understand the importance of creating a seamless user experience that is
        both intuitive and visually appealing.
      </>
    )
  },
  {
    title: "Cloud",
    content: (
      <>
        To ensure the scalability, reliability, and security of the applications
        I build, I always deploy them on AWS (Amazon Web Services). I have
        experience with various AWS services, including EC2, S3, RDS, and
        Lambda, and I am proficient in setting up and managing the
        <StatsText> infrastructure required</StatsText> to support the
        applications I build.
      </>
    )
  },
  {
    title: "Overall",
    content: (
      <>
        My expertise in BackEnd development using microservices, Node.js, and
        TypeScript, combined with my front-end development skills using React,
        and my proficiency in deploying on AWS, allows me to develop
        <StatsText>
          {" "}
          high-quality, robust, and scalable software systems
        </StatsText>{" "}
        that meet the needs of my clients.
      </>
    )
  }
];
