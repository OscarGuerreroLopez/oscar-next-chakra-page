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
    desc: "I bring 20+ years of software engineering experience, with recent focus on cloud-native backend and AI platform engineering across PropHero, CrowdFarming, and Jacquard.",
    icon: FcBusinessman,
    href: "experience"
  },
  areasOfExpertise: {
    title: "Areas of expertise",
    desc: "My expertise includes backend development with Node.js, TypeScript, and Python; microservices and event-driven/serverless architecture on AWS; and modern AI backend patterns such as RAG and multi-agent workflows.",
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
  desc: "I am a Senior Software Engineer focused on AI backend engineering. With over 20 years of experience, I build scalable backend systems for fintech, SaaS, and marketplace products using Node.js, TypeScript, Python, and AWS. I work with microservices, event-driven/serverless architecture, and RAG-based multi-agent workflows. On this page, you can explore my background, engineering approach, and long-term vision."
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
      "I have been working as a software engineer since 2001, building over 20 years of experience across enterprise software, SaaS platforms, and startup environments. This long trajectory gave me a strong foundation in engineering fundamentals, delivery ownership, and cross-team collaboration.",
    second:
      "Since 2016, I have focused heavily on product-driven teams and startups, working across companies such as Techona, Red Acre, Grupo OneTec, and consulting engagements. I have led backend modernization projects, designed resilient microservices, and delivered cloud-native systems while balancing speed, quality, and business impact.",
    third:
      "In recent roles at Jacquard, CrowdFarming, and PropHero, I have specialized in AI backend engineering on top of Node.js and AWS, including event-driven pipelines, serverless workflows, LangChain/LangGraph orchestration, and RAG systems with Bedrock and OpenSearch."
  }
};
