import Layout from "@/components/layout";
import CustomHeader from "@/components/head/customHeader";
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Image,
  chakra
} from "@chakra-ui/react";
import Description from "@/components/custom/description";
import BlogEntry from "@/components/blog/entry";

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
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Blog Posts
        </Heading>
        <Description desc={intro} />
      </Stack>
      <BlogEntry
        title="The Challenge of Live Coding Interviews for Senior Developers"
        date="Apr 15, 2023"
        tag="Interviews"
        avatar="/photo.jpeg"
        author="Oscar Guerrero"
        desc1="Live coding interviews can be particularly challenging for senior developers. Unlike traditional interviews, live coding interviews require you to demonstrate your coding skills in real-time, which can be difficult for those who are not used to working under pressure. Senior developers may also find it challenging to solve complex problems on the spot, especially if they have not done hands-on coding in a while. Finally, even the most experienced developers can feel anxious or nervous in a live coding interview, which can lead to mistakes or difficulty thinking clearly."
        desc2={[
          " To prepare for a live coding interview, senior developers should practice coding under pressure, stay up-to-date with the latest technologies, and be familiar with common coding challenges. By following these tips, senior developers can increase their chances of success in a live coding interview."
        ]}
      />
      <BlogEntry
        title="Challenges of AI for Programmers"
        date="Apr 15, 2023"
        tag="AI Challenges"
        avatar="/photo.jpeg"
        author="Oscar Guerrero"
        desc1="The rise of artificial intelligence (AI) presents both opportunities and challenges for programmers. On the one hand, AI has the potential to revolutionize many aspects of software development, from automating routine tasks to improving the accuracy and speed of algorithms. On the other hand, AI also poses significant challenges for programmers. For example, as AI systems become more sophisticated, they may require specialized skills and knowledge that many programmers currently lack."
        desc2={[
          "Additionally, the use of AI in programming raises ethical concerns, such as ensuring transparency and fairness in algorithmic decision-making. ",
          "Finally, the increasing use of AI may also lead to job displacement for programmers in certain industries. As AI continues to advance and become more widespread, it will be important for programmers to adapt and develop new skills in order to stay relevant in the industry."
        ]}
      />
    </Layout>
  );
};

export default blog;
