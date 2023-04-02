import {
  Box,
  Flex,
  Heading,
  Icon,
  Stack,
  StackDivider,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import Link from "next/link";
import { ReactElement } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FcAssistant } from "react-icons/fc";
import { SiLinkedin } from "react-icons/si";

interface FeatureProps {
  text: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex w={8} h={8} align={"center"} justify={"center"} rounded={"full"}>
        {icon}
      </Flex>
      <Text fontWeight={600} fontSize={{ base: "sm", md: "md" }}>
        {text}
      </Text>
    </Stack>
  );
};

const contact = () => {
  return (
    <Box
      maxW={{ base: "full", md: "575px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      mt={5}
    >
      <Stack align={"left"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          <Icon as={FcAssistant} w={10} h={10} />
        </Flex>
        <Box mt={2}>
          <Heading size="md">How to contact me:</Heading>

          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
            mt={5}
          >
            <Link
              href={"https://www.linkedin.com/in/oscar-guerrero-a59289153/"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Feature
                icon={<Icon as={SiLinkedin} color={"blue.500"} w={5} h={5} />}
                text={"https://www.linkedin.com"}
              />
            </Link>
            <Link href={"mailto:oscar.computer.guy@gmail.com"}>
              <Feature
                icon={
                  <Icon as={AiOutlineMail} color={"purple.500"} w={5} h={5} />
                }
                text={"oscar.computer.guy@gmail.com"}
              />
            </Link>
            <Link
              href={
                "https://api.whatsapp.com/send?phone=34622450008&text=%20Hello"
              }
            >
              <Feature
                icon={<Icon as={BsWhatsapp} color={"green.500"} w={5} h={5} />}
                text={"whatsapp"}
              />
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default contact;
