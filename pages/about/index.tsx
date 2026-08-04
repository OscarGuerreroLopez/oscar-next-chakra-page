import { Box, Container, Flex, Icon } from "@chakra-ui/react";
import LittleCard from "@/components/about/littleCard";
import {
  AboutMeLittleCardContext,
  LittleCardContextType,
  LittleCardContent
} from "@/data/aboutMe";
import PageIntro from "@/components/about/pageIntro";
import Layout from "@/components/layout";
import Contact from "@/components/about/contact";
import CustomHeader from "@/components/head/customHeader";

export default function GridListWith() {
  const context = Object.keys(
    AboutMeLittleCardContext
  ) as unknown as LittleCardContextType[];
  const aboutMeContext: LittleCardContent[] = context.map(
    (item) => AboutMeLittleCardContext[item]
  );

  return (
    <>
      <Layout>
        <CustomHeader
          title="Oscar Software Engineer"
          description="Best Software Engineer. Freelance Software Engineer. Software Developer"
          url="https://oscarcomputerguy.com/about"
          siteName="Oscar Software Engineer about"
        />

        <Box p={4}>
          <PageIntro />
          <Container maxW={"5xl"} mt={12}>
            <Flex flexWrap="wrap" gridGap={6} justify="center">
              {aboutMeContext.map((item) => (
                <LittleCard
                  heading={item.title}
                  description={item.desc}
                  icon={<Icon as={item.icon} w={10} h={10} />}
                  href={item.href}
                  key={item.title}
                />
              ))}
            </Flex>
            <Flex flexWrap="wrap" gridGap={6} justify="center">
              {" "}
              <Contact />
            </Flex>
          </Container>
        </Box>
      </Layout>
    </>
  );
}
