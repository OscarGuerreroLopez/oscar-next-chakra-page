import { IconType } from "react-icons";
import {
  FcBusinessman,
  FcFlowChart,
  FcList,
  FcManager,
  FcVoicePresentation
} from "react-icons/fc";

export type LittleCardContextType =
  | "experience"
  | "areasOfExpertise"
  | "problemSolving"
  | "personalInterest"
  | "careerGoals";

export interface LittleCardContent {
  title: string;
  desc: string;
  icon: IconType;
  href: string;
}
export type LittleCardContext = {
  [key in LittleCardContextType]: LittleCardContent;
};

export const AboutMeLittleCardContext: LittleCardContext = {
  experience: {
    title: "Experience",
    desc: "My 15+ years of experience as a software engineer, combined with my specialization in startups since 2016, have given me the skills, expertise, and adaptability to tackle any software development challenge with confidence and creativity.",
    icon: FcBusinessman,
    href: "experience"
  },
  areasOfExpertise: {
    title: "Areas of expertise",
    desc: "My expertise in BackEnd development using microservices, Node.js, and TypeScript, combined with my front-end development skills using React, and my proficiency in deploying on AWS, allows me to develop high-quality, robust, and scalable software systems that meet the needs of my clients.",
    icon: FcVoicePresentation,
    href: "expertise"
  },
  problemSolving: {
    title: "Problem-Solving",
    desc: "My problem-solving approach is characterized by a systematic and collaborative approach that emphasizes understanding the problem, developing innovative solutions, and ensuring that the final product meets the user's needs.",
    icon: FcFlowChart,
    href: "problem"
  },
  personalInterest: {
    title: "Personal Interest",
    desc: "My personal interests reflect my love of physical activity, adventure, and exploration. Although my specific interests may have evolved over time, I remain committed to staying active and engaged outside of work and finding new ways to challenge myself both physically and mentally",
    icon: FcManager,
    href: "interest"
  },
  careerGoals: {
    title: "Career Goals",
    desc: "My career goals center around ongoing learning and growth, becoming a thought leader in my field, and making a positive impact on others while achieving personal fulfillment and work-life balance.",
    icon: FcList,
    href: "goals"
  }
};

export const Intro = {
  title: "About Me",
  desc: "As a software engineer with over 15 years of experience, I specialize in creating microservices environments on AWS using node/typescript. I have worked on successful projects and overcome challenges, gaining valuable knowledge and expertise. On this page, you'll learn about my background, my philosophy on software development, and my vision for the future. Explore my work and connect with me to learn more."
};

export type PageTextType = "experience";

export interface TextContent {
  title: string;
  first: string;
  second: string;
  third: string;
}

export type AboutMePageTextType = {
  [key in PageTextType]: TextContent;
};

export const PageText: AboutMePageTextType = {
  experience: {
    title: "Experience",
    first:
      "I've been working as a software engineer for over 15 years, and during that time, I've gained extensive experience in various aspects of software development. I started my career working on enterprise-level applications for large corporations, where I gained a solid foundation in software engineering principles, project management, and collaboration.",
    second:
      "In 2016, I shifted my focus to working with startups, and I've been specializing in this area ever since. Working with startups has allowed me to be part of exciting projects from the ground up and helped me develop a unique skill set that combines technical expertise with a deep understanding of the startup ecosystem. As a software engineer for startups, I've had the opportunity to work on a range of projects, from developing minimum viable products to building out complex software systems. I understand the importance of balancing speed with quality and the need to iterate quickly while keeping the user's needs at the forefront.",
    third:
      "Over the years, I've developed a passion for using technology to solve complex problems, and I've become proficient in several programming languages, platforms, and frameworks. I'm always learning and keeping up with the latest industry trends, and I'm excited to bring my skills and experience to new challenges and opportunities."
  }
};
