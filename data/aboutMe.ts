import { IconType } from "react-icons";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager
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
}
export type LittleCardContext = {
  [key in LittleCardContextType]: LittleCardContent;
};

export const AboutMeLittleCardContext: LittleCardContext = {
  experience: {
    title: "Experience",
    desc: "My 15+ years of experience as a software engineer, combined with my specialization in startups since 2016, have given me the skills, expertise, and adaptability to tackle any software development challenge with confidence and creativity.",
    icon: FcAssistant
  },
  areasOfExpertise: {
    title: "Areas of expertise",
    desc: "My expertise in BackEnd development using microservices, Node.js, and TypeScript, combined with my front-end development skills using React, and my proficiency in deploying on AWS, allows me to develop high-quality, robust, and scalable software systems that meet the needs of my clients.",
    icon: FcCollaboration
  },
  problemSolving: {
    title: "Problem-Solving",
    desc: "My problem-solving approach is characterized by a systematic and collaborative approach that emphasizes understanding the problem, developing innovative solutions, and ensuring that the final product meets the user's needs.",
    icon: FcDonate
  },
  personalInterest: {
    title: "Personal Interest",
    desc: "My personal interests reflect my love of physical activity, adventure, and exploration. Although my specific interests may have evolved over time, I remain committed to staying active and engaged outside of work and finding new ways to challenge myself both physically and mentally",
    icon: FcManager
  },
  careerGoals: {
    title: "Career Goals",
    desc: "My career goals center around ongoing learning and growth, becoming a thought leader in my field, and making a positive impact on others while achieving personal fulfillment and work-life balance.",
    icon: FcAbout
  }
};

export const Intro = {
  title: "About Me",
  desc: "Welcome to my about me page! My name is Oscar, and I am a highly experienced software engineer with over 15 years of industry expertise. Throughout my career, I have honed my skills in developing and implementing cutting-edge software solutions for a variety of clients, ranging from small startups to large corporations. My passion for coding and problem-solving has allowed me to consistently deliver high-quality software solutions that meet and exceed the expectations of my clients. With a deep understanding of software development principles and an unwavering commitment to excellence, I am confident in my ability to tackle even the most complex software projects. Thank you for visiting my page, and I look forward to sharing more about my professional journey with you."
};
