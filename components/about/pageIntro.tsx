import {
  Avatar,
  Box,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  Image
} from "@chakra-ui/react";

const PageIntro: React.FC = () => {
  return (
    <Center py={{ base: 0, md: 6 }}>
      <Box
        maxW={"690px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Image h={"120px"} w={"full"} src={"/code2.png"} objectFit={"cover"} />
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"xl"}
            src={"/photo.jpeg"}
            css={{
              border: "2px solid white"
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              Oscar Guerrero
            </Heading>
            <Text color={"gray.500"}>Full-Stack Developer</Text>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
};

export default PageIntro;
