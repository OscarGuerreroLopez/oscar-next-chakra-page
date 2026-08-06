import {
  Stack,
  Flex,
  Heading,
  useBreakpointValue,
  Text,
  Image,
  Container,
  useColorModeValue,
  Center,
  useMediaQuery
} from "@chakra-ui/react";
import LinkButton from "../custom/linkButton";
import Description from "@/components/custom/description";

const IntroHome = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 768px)");

  return (
    <Container
      maxW={{ base: "none", md: "5xl", lg: "6xl" }}
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
                Senior
              </Text>
              <br />{" "}
              <Text
                color={useColorModeValue("blue.500", "blue.400")}
                as={"span"}
              >
                Software Engineer
              </Text>{" "}
            </Heading>
            {!isLargerThan1280 && (
              <Flex flex={1}>
                <Image
                  alt={"Senior software engineer coding"}
                  objectFit={"cover"}
                  src={"/code4.jpeg"}
                  rounded={"2xl"}
                />
              </Flex>
            )}

            <Description
              desc="With more than 20 years of software engineering experience,
              I specialize in cloud-native backend and AI backend development
              using Node.js, TypeScript, Python, and AWS. I design microservices,
              event-driven systems, and serverless workflows, and I build
              production-ready RAG and multi-agent capabilities when they create
              clear product value. On this website, you'll find more about my
              background, my engineering approach, and the kinds of systems I
              help teams deliver."
            />

            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Center>
                <LinkButton name="More about me" link="/about" />
              </Center>
            </Stack>
          </Stack>
        </Flex>
        {isLargerThan1280 && (
          <Flex flex={1}>
            <Image
              alt={"Senior software engineer coding"}
              objectFit={"cover"}
              src={"/code4.jpeg"}
              rounded={"2xl"}
              mt={{ base: 4, md: "none" }}
            />
          </Flex>
        )}
      </Stack>
    </Container>
  );
};

export default IntroHome;
