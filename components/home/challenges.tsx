import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  List,
  VStack,
  Button
} from "@chakra-ui/react";
import Link from "next/link";
import CustomDescription from "@/components/custom/description";
import ListItemWithCheck from "./listItemWithCheck";

export default function blogPostWithImage() {
  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image src={"/coder.avif"} layout={"fill"} alt="Coding" />
        </Box>
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            Quick code challenges
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            Entry level Code Challenges
          </Heading>
          <CustomDescription desc="These are some code challenges I have done for some companies to assess my coding. Most are backend, but some are also front end." />

          <VStack py={4} borderBottomRadius={"xl"}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItemWithCheck
                desc="Improved performance and faster load times through automatic
                code splitting and server-side rendering."
              />
              <ListItemWithCheck
                desc="Simplified development process with built-in routing, hot
                reloading, and automatic code optimization."
              />
              <ListItemWithCheck
                desc="Enhanced SEO capabilities through server-side rendering and
                support for meta tags and Open Graph protocol."
              />
              <ListItemWithCheck
                desc="Increased scalability with support for static site generation,
                serverless functions, and API routes."
              />
              <ListItemWithCheck
                desc="Better developer experience with extensive documentation,
                community support, and easy deployment to popular hosting
                services."
              />
            </List>
          </VStack>

          <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
            <Link
              href="https://github.com/OscarGuerreroLopez/oscar-next-chakra-page"
              passHref
              legacyBehavior
            >
              <a title="code used for this page">
                Check them at my Github repository
              </a>
            </Link>
          </Button>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar src={"/photo.jpeg"} name={"Author"} />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>Oscar Guerrero</Text>
            <Text color={"gray.500"}>April 10, 2023</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
