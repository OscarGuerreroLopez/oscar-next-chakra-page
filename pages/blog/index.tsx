import Layout from "@/components/layout";
import CustomHeader from "@/components/head/customHeader";
import { Container, Stack } from "@chakra-ui/react";
import Description from "@/components/custom/description";
import BlogEntry from "@/components/blog/entry";
import { BlogData } from "@/data/blogData";

const intro =
  "Welcome to my blog, where I share my thoughts and experiences on the \
          world of technology and software development. From tips and tricks for \
          coding to insights on industry trends and debates, this blog is a \
          platform for me to share my passion for all things tech. Whether \
          you're a seasoned developer or just starting out, I hope that you'll \
          find something of value in my posts. Join me on this journey as we \
          explore the exciting and ever-evolving world of technology together!";

const blog = () => {
  return (
    <Layout>
      <CustomHeader
        title="Oscar Software Engineer"
        description="Best Software Engineer. Freelance Software Engineer. Software Developer. Software Engineering Blog"
        url="https://oscarcomputerguy.com/blog"
        siteName="Oscar Software Engineer blog"
      />

      <Stack spacing={4} as={Container} maxW={"4xl"} textAlign={"left"}>
        <Description desc={intro} props={{ fontWeight: "bold", mt: 7 }} />
      </Stack>

      {BlogData.map((blog) => {
        return (
          <BlogEntry
            title={blog.title}
            date={blog.date}
            tag={blog.tag}
            avatar={blog.avatar}
            author={blog.author}
            desc1={blog.desc1}
            desc2={blog.desc2}
          />
        );
      })}
    </Layout>
  );
};

export default blog;
