/* eslint-disable no-sparse-arrays */
import { Box, Container, Flex, Icon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CorporateContactJsonLd, NextSeo, SocialProfileJsonLd } from "next-seo";
import LittleCard from "@/components/about/littleCard";
import {
  AboutMeLittleCardContext,
  LittleCardContextType,
  LittleCardContent
} from "@/data/aboutMe";
import PageIntro from "@/components/about/pageIntro";
import Layout from "@/components/layout";
import Contact from "@/components/about/contact";

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
        <NextSeo
          title="Oscar Software Engineer"
          description="Best Software Engineer. Freelance Software Engineer. Software Developer"
          openGraph={{
            type: "website",
            locale: "en_US",
            url: "https://oscarcomputerguy.com/about",
            siteName: "Oscar Software Engineer about"
          }}
          canonical="https://oscarcomputerguy.com/about"
        />

        <SocialProfileJsonLd
          type="Person"
          name="Oscar Guerrero"
          url="https://oscarcomputerguy.com/about"
          sameAs={[
            "https://www.facebook.com/oscar.lopez.33331508",
            "https://www.linkedin.com/in/oscar-guerrero-a59289153/"
          ]}
        />

        <CorporateContactJsonLd
          url="https://oscarcomputerguy.com/about"
          contactPoint={[
            {
              telephone: "+34-622-450-008",
              contactType: "Freelance Software Engineer",
              email: "oscar.computer.guy@gmail.com",
              areaServed: "EU",
              availableLanguage: ["English", "Spanish"]
            }
          ]}
        />

        <Box p={4}>
          <PageIntro />
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
