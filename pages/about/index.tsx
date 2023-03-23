import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import LittleCard from "@/components/about/littleCard";
import {
  AboutMeLittleCardContext,
  LittleCardContextType,
  LittleCardContent,
  Intro
} from "@/data/aboutMe";

export default function gridListWith() {
  const [aboutMeContext, useAboutMeContext] = useState<LittleCardContent[]>([]);
  useEffect(() => {
    const contextArray: LittleCardContent[] = [];
    const context = Object.keys(
      AboutMeLittleCardContext
    ) as unknown as LittleCardContextType[];

    context.forEach((item) => {
      contextArray.push(AboutMeLittleCardContext[item]);
    });
    useAboutMeContext(contextArray);
  }, []);

  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          {Intro.title}
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          {Intro.desc}
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          {aboutMeContext.length &&
            aboutMeContext.map((item) => (
              <LittleCard
                heading={item.title}
                description={item.desc}
                icon={<Icon as={item.icon} w={10} h={10} />}
                href={"bla"}
                key={item.title}
              />
            ))}
        </Flex>
      </Container>
    </Box>
  );
}
