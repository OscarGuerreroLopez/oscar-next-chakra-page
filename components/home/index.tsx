import First from "./first";
import Second from "./second";
import Third from "./third";
import Methods from "./methods";
import BlogRight from "@/components/blog/blogRight";
export default function SplitScreen() {
  return (
    <>
      <First />
      <Third />
      <Methods />
      <Second />
      <BlogRight
        title="Build scalable systems"
        tags={["Scalability", "Resilience"]}
        blogTitle="The cloud approach"
        desc="Cloud-based systems offer scalable and flexible infrastructure, reduced costs, improved security, and accessibility from anywhere. They allow businesses to quickly adapt to changing needs and provide a competitive edge. I am here to help you achieve your goals"
      />
    </>
  );
}
