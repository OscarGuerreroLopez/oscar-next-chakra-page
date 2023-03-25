import { Box, Container, Flex, Icon } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import LittleCard from "@/components/about/littleCard";
import {
  AboutMeLittleCardContext,
  LittleCardContextType,
  LittleCardContent,
  Intro
} from "@/data/aboutMe";
import PageIntro from "@/components/about/pageIntro";
import Layout from "@/components/layout";

export default function gridListWith() {
  const [aboutMeContext, setAboutMeContext] = useState<LittleCardContent[]>([]);
  useEffect(() => {
    const contextArray: LittleCardContent[] = [];
    const context = Object.keys(
      AboutMeLittleCardContext
    ) as unknown as LittleCardContextType[];

    context.forEach((item) => {
      contextArray.push(AboutMeLittleCardContext[item]);
    });
    setAboutMeContext(contextArray);
  }, []);

  return (
    <>
      <Layout>
        <Box p={4}>
          <PageIntro title={Intro.title} desc={Intro.desc} />
          <Container maxW={"5xl"} mt={12}>
            <Flex flexWrap="wrap" gridGap={6} justify="center">
              {aboutMeContext.length &&
                aboutMeContext.map((item) => (
                  <LittleCard
                    heading={item.title}
                    description={item.desc}
                    icon={<Icon as={item.icon} w={10} h={10} />}
                    href={item.href}
                    key={item.title}
                  />
                ))}
            </Flex>
          </Container>
        </Box>
      </Layout>
    </>
  );
}
