import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  HStack,
  useColorModeValue
} from "@chakra-ui/react";
import { Links } from "@/constants/links";
import Link from "next/link";

interface TopicsParams {
  mainTitle: string;
  subTitle: string;
  mainDesc: string;
  stats: {
    title: string;
    content: JSX.Element;
  }[];
}

const Topics: React.FC<TopicsParams> = ({
  mainTitle,
  subTitle,
  mainDesc,
  stats
}) => {
  return (
    <Box bg={"gray.800"} position={"relative"}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: "none", lg: "flex" }}
        backgroundImage="url('/program.webp')"
        backgroundSize={"cover"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={"absolute"}
        width={"60%"}
        insetY={0}
        right={0}
      >
        <Flex
          bgGradient={"linear(to-r, gray.800 10%, transparent)"}
          w={"full"}
          h={"full"}
        />
      </Flex>
      <Container maxW={"7xl"} zIndex={10} position={"relative"}>
        <Box py={{ base: 2, md: 2, xl: 3 }}>
          <HStack as={"nav"} spacing={6}>
            {Links.map(({ name, path }) => (
              <Link href={path}>
                <Text color={"white"}>{name}</Text>
              </Link>
            ))}
          </HStack>
        </Box>
        <Stack direction={{ base: "column", lg: "row" }}>
          <Stack
            flex={1}
            color={"gray.400"}
            justify={{ lg: "center" }}
            py={{ base: 4, md: 10, xl: 39 }}
          >
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={"heading"}
                fontWeight={700}
                textTransform={"uppercase"}
                mb={3}
                fontSize={"xl"}
                color={"gray.500"}
              >
                {mainTitle}
              </Text>
              <Heading
                color={"white"}
                mb={5}
                fontSize={{ base: "3xl", md: "5xl" }}
              >
                {subTitle}
              </Heading>
              <Text fontSize={"xl"} color={"gray.400"}>
                {mainDesc}
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={"heading"}
                    fontSize={"3xl"}
                    color={"white"}
                    mb={3}
                  >
                    {stat.title}
                  </Text>
                  <Text fontSize={"xl"} color={"gray.400"}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
};

export default Topics;
