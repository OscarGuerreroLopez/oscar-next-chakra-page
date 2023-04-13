import { Container, SimpleGrid, useMediaQuery } from "@chakra-ui/react";
import Intro from "./intro";
import DataAnalysis from "./data_analysis";
import Design from "./design";
import Freelancer from "./freelancer";
import BlogRight from "@/components/blog/blogRight";
import LittleCard from "@/components/custom/littleCard";
import Divider from "@/components/custom/divider";

export default function SplitScreen() {
  const [isLargerThan1280] = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Intro />
      <Design />
      <Divider
        text="Delivering cloud-based solutions with precision and expertise"
        imgSrc="/programming.svg"
      />
      <Freelancer />

      {isLargerThan1280 && <DataAnalysis />}

      {!isLargerThan1280 && (
        <BlogRight
          title="Build scalable systems"
          tags={["Scalability", "Resilience"]}
          blogTitle="The cloud approach"
          desc="Cloud-based systems offer scalable and flexible infrastructure, reduced costs, improved security, and accessibility from anywhere. They allow businesses to quickly adapt to changing needs and provide a competitive edge. I am here to help you achieve your goals"
          pic="/cloud.jpeg"
        />
      )}
      <Divider
        text="Building scalable cloud infrastructures for modern applications."
        imgSrc="/cloud.svg"
      />

      <Container
        maxW={{ base: "none", md: "5xl", lg: "6xl" }}
        py={{ base: 8, md: 16 }}
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <LittleCard
            title="Page Code"
            desc="For this page I used Next.js with Chakra UI. Next.js offers server-side rendering, automatic code splitting, static export, and easy deployment, making it fast and SEO-friendly for building modern web applications."
            imgSrc="/chakra_code.png"
            linkAddress="https://github.com/OscarGuerreroLopez/oscar-next-chakra-page"
            linkDesc="Check out the code...."
          />
          <LittleCard
            title="Blog"
            desc="Looking for fresh ideas and unique perspectives? Join me on my personal blog where I share my thoughts and insights. Let's expand our knowledge together."
            imgSrc="/blog.jpeg"
            linkAddress="/blog"
            linkDesc="Click to explore more..."
          />
        </SimpleGrid>
      </Container>
      {isLargerThan1280 && (
        <BlogRight
          title="Build scalable systems"
          tags={["Scalability", "Resilience"]}
          blogTitle="The cloud approach"
          desc="Cloud-based systems offer scalable and flexible infrastructure, reduced costs, improved security, and accessibility from anywhere. They allow businesses to quickly adapt to changing needs and provide a competitive edge. I am here to help you achieve your goals"
          pic="/cloud.jpeg"
        />
      )}
    </>
  );
}
