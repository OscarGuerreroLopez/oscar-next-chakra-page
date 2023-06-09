import Topic from "@/components/about/topics";
import StatsText from "@/components/about/statsText";
import CustomHeader from "@/components/head/customHeader";

const mainTitle = "PROBLEM-SOLVING";
const subTitle = "Solving complex problems";
const mainDesc =
  "As a software engineer, I am passionate about using technology to solve complex problems. I approach problem-solving with a logical and analytical mindset, breaking down complex issues into manageable parts and addressing them one by one.";

export default function StatsGridWithImage() {
  return (
    <>
      <CustomHeader
        title="Oscar Software Engineer"
        description="Best Software Engineer. Freelance Software Engineer. Software Developer"
        url="https://oscarcomputerguy.com/about/problem"
        siteName="Oscar Software Engineer problem"
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
    title: "Solve problems effectively",
    content: (
      <>
        I always start by understanding the{" "}
        <StatsText>root cause of the issue</StatsText>. This involves gathering
        information from various sources, such as user feedback, system logs,
        and other relevant data. I then analyze this information to gain a deep
        understanding of the problem and its impact on the system.
      </>
    )
  },
  {
    title: "Starting point",
    content: (
      <>
        Once I have a clear understanding of the problem, I begin to develop
        potential solutions. I{" "}
        <StatsText>brainstorm different approaches</StatsText>, weigh their pros
        and cons, and evaluate their feasibility based on the project's
        technical constraints, timeline, and budget.
      </>
    )
  },
  {
    title: "Implementation",
    content: (
      <>
        I use an <StatsText>agile development approach</StatsText>, breaking the
        solution into smaller, manageable tasks that can be iteratively
        implemented, tested, and refined. I always ensure that the solution
        meets the user's needs, is scalable, and is maintainable over the long
        term.
      </>
    )
  },
  {
    title: "Flow",
    content: (
      <>
        Throughout the problem-solving process, I prioritize{" "}
        <StatsText>communication and collaboration</StatsText> with
        stakeholders. I keep them informed of progress, seek their input and
        feedback, and work closely with them to ensure that the solution meets
        their requirements and expectations. Overall, my problem-solving
        approach is characterized by a systematic and collaborative approach
        that emphasizes understanding the problem, developing innovative
        solutions, and ensuring that the final product meets the user's needs.
      </>
    )
  }
];
