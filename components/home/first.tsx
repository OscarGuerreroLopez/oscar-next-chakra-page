import {
  Stack,
  Flex,
  Heading,
  useBreakpointValue,
  Button,
  Text,
  Image,
  Container
} from "@chakra-ui/react";
import Link from "next/link";

const firstHome = () => {
  return (
    <Container minW={{ base: "none", md: "6xl" }}>
      <Stack minH={"90vh"} direction={{ base: "column", md: "row" }}>
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
                  bg: "red.400",
                  zIndex: -1
                }}
              >
                Freelancer
              </Text>
              <br />{" "}
              <Text color={"red.400"} as={"span"}>
                Software Engineer
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              Experienced Programmer and Operations Engineer with a demonstrated
              history of working in the information technology and services
              industry. Team player, communicative, problem-solving and eager to
              learn everyday are just part of my soft skills. EU passport so
              free to work anywhere in the EU. Scrum Master
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"red.400"}
                color={"white"}
                _hover={{
                  bg: "red.500"
                }}
              >
                <Link href={"/about"}>More about me</Link>
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={"/software-engineering.jpeg"}
          />
        </Flex>
      </Stack>
    </Container>
  );
};

export default firstHome;
