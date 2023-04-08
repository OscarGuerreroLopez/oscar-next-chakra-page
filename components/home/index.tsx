import { Container, SimpleGrid } from "@chakra-ui/react";
import Intro from "./intro";
import DataAnalysis from "./data_analysis";
import Design from "./design";
import Freelancer from "./freelancer";
import BlogRight from "@/components/blog/blogRight";
import PageCode from "./pageCode";
import Challenges from "./challenges";

export default function SplitScreen() {
  return (
    <>
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
      <Container
        maxW={{
          sm: "2xl",
          base: "4xl",
          md: "5xl",
          lg: "6xl"
        }}
        mb={{ base: 1, md: 4 }}
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 0, md: 8 }}>
          {" "}
          <PageCode /> <Challenges />
        </SimpleGrid>
      </Container>
    </>
  );
}
