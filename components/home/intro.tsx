import {
  Stack,
  Flex,
  Heading,
  useBreakpointValue,
  Button,
  Text,
  Image,
  Container,
  useColorModeValue
} from "@chakra-ui/react";
import Link from "next/link";
import LinkButton from "./linkButton";

const introHome = () => {
  return (
    <Container
      maxW={{ base: "none", md: "4xl", lg: "5xl" }}
      mt={{ base: 0, md: 6 }}
    >
      <Stack minH={"80vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: useColorModeValue("blue.500", "blue.400"),
                  zIndex: -1
                }}
              >
                Freelancer
              </Text>
              <br />{" "}
              <Text
                color={useColorModeValue("blue.500", "blue.400")}
                as={"span"}
              >
                Software Engineer
              </Text>{" "}
            </Heading>
            <Text
              fontSize={{ base: "md", lg: "lg" }}
              color={useColorModeValue("gray.700", "gray.400")}
            >
              With over 15 years of experience as a software engineer, I
              specialize in creating microservices environments using
              node/typescript. I believe software development is both an art and
              a science, requiring creativity, discipline, and collaboration. I
              take pride in writing clean, well-organized code and mentoring
              others. On this website, you'll find more about my background, my
              philosophy on software development, and my vision for the future.
              Explore my work and connect with me to learn more. Thank you for
              visiting!
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <LinkButton name="More about me" link="/about" />
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={"/code4.jpeg"}
            rounded={"2xl"}
          />
        </Flex>
      </Stack>
    </Container>
  );
};

export default introHome;
