import {
  Avatar,
  Box,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Button,
  Icon
} from "@chakra-ui/react";
import { SiLinkedin } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

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
          <Stack spacing={2} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              Oscar Guerrero
            </Heading>
            <Text color={"gray.500"}>Full-Stack Developer</Text>
          </Stack>
          <Stack direction={"row"} justify={"center"} spacing={10}>
            <Link
              href={"https://www.linkedin.com/in/oscar-guerrero-a59289153/"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Stack spacing={0} align={"center"}>
                <Icon as={SiLinkedin} w={5} h={5} />
              </Stack>
            </Link>
            <Link href={"mailto:oscar.computer.guy@gmail.com"}>
              <Stack spacing={0} align={"center"}>
                <Icon as={AiOutlineMail} w={5} h={5} />
              </Stack>
            </Link>
            <Link
              href={
                "https://api.whatsapp.com/send?phone=34622450008&text=%20Hello"
              }
            >
              <Stack spacing={0} align={"center"}>
                <Icon as={BsWhatsapp} w={5} h={5} />
              </Stack>
            </Link>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
};

export default PageIntro;
