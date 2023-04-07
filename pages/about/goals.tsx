import Topic from "@/components/about/topics";
import CustomHeader from "@/components/head";

const mainTitle = "CAREER GOALS";
const subTitle = "Looking forward";
const mainDesc =
  "As a software engineer with over 15 years of experience, I have achieved a lot in my career. However, I am constantly striving to learn and grow, and I believe that there is always room for improvement.";

export default function StatsGridWithImage() {
  return (
    <>
      <CustomHeader
        title="Oscar Software Engineer"
        description="Best Software Engineer. Freelance Software Engineer. Software Developer"
        url="https://oscarcomputerguy.com/about/goals"
        siteName="Oscar Software Engineer goals"
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
    title: "Ultimate career goal ",
    content: (
      <>
        My ultimate career goal is to become a thought leader in my field,
        someone who is recognized for their expertise and their contributions to
        the industry. To achieve this goal, I plan to continue expanding my
        knowledge and skills through ongoing learning and development.
      </>
    )
  },
  {
    title: "Short term",
    content: (
      <>
        I would like to continue specializing in startup development and further
        hone my skills in this area. I am interested in exploring new
        technologies and tools, such as AI and machine learning, and integrating
        them into my work where appropriate.
      </>
    )
  },
  {
    title: "Helping",
    content: (
      <>
        Another key goal for me is to become a mentor and coach for junior
        engineers. I believe that I have a lot to offer in terms of technical
        expertise, project management skills, and professional development, and
        I am passionate about sharing my knowledge and helping others grow.
      </>
    )
  },
  {
    title: "Overall",
    content: (
      <>
        My career goals center around ongoing learning and growth, becoming a
        thought leader in my field, and making a positive impact on others while
        achieving personal fulfillment and work-life balance.
      </>
    )
  }
];
