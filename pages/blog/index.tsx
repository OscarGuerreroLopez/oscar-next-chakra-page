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

const Blog = () => {
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

      {BlogData.map((blogItem) => {
        return (
          <BlogEntry
            key={`${blogItem.title}.${blogItem.date}`}
            title={blogItem.title}
            date={blogItem.date}
            tag={blogItem.tag}
            avatar={blogItem.avatar}
            author={blogItem.author}
            desc1={blogItem.desc1}
            desc2={blogItem.desc2}
          />
        );
      })}
    </Layout>
  );
};

export default Blog;
