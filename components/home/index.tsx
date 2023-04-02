import Intro from "./intro";
import DataAnalysis from "./data_analysis";
import Design from "./design";
import Freelancer from "./freelancer";
import BlogRight from "@/components/blog/blogRight";
import CustomHeader from "@/components/head";

export default function SplitScreen() {
  return (
    <>
      <CustomHeader />
      <Intro />
      <Design />
      <Freelancer />
      <DataAnalysis />
      <BlogRight
        title="Build scalable systems"
        tags={["Scalability", "Resilience"]}
        blogTitle="The cloud approach"
        desc="Cloud-based systems offer scalable and flexible infrastructure, reduced costs, improved security, and accessibility from anywhere. They allow businesses to quickly adapt to changing needs and provide a competitive edge. I am here to help you achieve your goals"
        pic="/cloud.jpeg"
      />
    </>
  );
}
