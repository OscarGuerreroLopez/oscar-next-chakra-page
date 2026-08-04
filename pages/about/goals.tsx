import Topic from "@/components/about/topics";
import CustomHeader from "@/components/head/customHeader";

const mainTitle = "CAREER GOALS";
const subTitle = "Looking forward";
const mainDesc =
  "As a software engineer with 20+ years of experience, I continue to focus on growth, impact, and long-term technical leadership, especially in AI-enabled backend systems.";

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
    title: "Ultimate career goal",
    content: (
      <>
        My long-term goal is to be recognized as a technical leader who builds
        reliable, scalable backend platforms and helps teams adopt AI
        capabilities in a pragmatic way. I keep investing in continuous learning
        and in sharing knowledge across teams.
      </>
    )
  },
  {
    title: "Short term",
    content: (
      <>
        In the short term, I want to keep deepening my expertise in AI backend
        engineering, event-driven architecture, and cloud-native delivery on
        AWS. I am focused on turning AI prototypes into production-grade
        services.
      </>
    )
  },
  {
    title: "Helping",
    content: (
      <>
        Another key goal for me is to become a mentor and coach for junior
        engineers. I enjoy supporting teammates with architecture decisions,
        engineering practices, and career growth, while helping teams raise the
        overall quality of delivery.
      </>
    )
  },
  {
    title: "Overall",
    content: (
      <>
        My goals combine continuous growth, strong technical contribution,
        mentorship, and sustainable work-life balance while delivering products
        that create real business value.
      </>
    )
  }
];
