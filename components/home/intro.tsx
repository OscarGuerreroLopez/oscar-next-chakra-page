import {
  Stack,
  Flex,
  Heading,
  useBreakpointValue,
  Text,
  Image,
  Container,
  useColorModeValue,
  Center
} from "@chakra-ui/react";
import LinkButton from "../custom/linkButton";
import Description from "@/components/custom/description";

const introHome = () => {
  return (
    <Container
      maxW={{ base: "none", md: "4xl", lg: "5xl" }}
      mt={{ base: 0, md: 6 }}
    >
      <Stack minH={"80vh"} direction={{ base: "column", md: "row" }}>
        <Flex
          p={{ base: 0, md: 8 }}
          flex={1}
          align={"center"}
          justify={"center"}
        >
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

            <Description
              desc="With over 15 years of experience as a software engineer, I
              specialize in creating microservices environments using
              node/typescript. I believe software development is both an art and
              a science, requiring creativity, discipline, and collaboration. I
              take pride in writing clean, well-organized code and mentoring
              others. On this website, you'll find more about my background, my
              philosophy on software development, and my vision for the future.
              Explore my work and connect with me to learn more. Thank you for
              visiting!"
            />
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Center>
                <LinkButton name="More about me" link="/about" />
              </Center>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={"/code4.jpeg"}
            rounded={"2xl"}
            mt={{ base: 4, md: "none" }}
          />
        </Flex>
      </Stack>
    </Container>
  );
};

export default introHome;
