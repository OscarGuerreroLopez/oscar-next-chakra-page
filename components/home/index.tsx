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
        title="This is the main title"
        tags={["Engineering", "Petardo"]}
        blogTitle="Anothe title here"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book."
      />
    </>
  );
}
