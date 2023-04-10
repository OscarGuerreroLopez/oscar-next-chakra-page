import { Box, Flex, chakra, Link, List, VStack } from "@chakra-ui/react";
import NavLink from "next/link";
import CustomDescription from "@/components/custom/description";
import ListItemWithCheck from "./listItemWithCheck";

export default function blogPostWithImage() {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg="white"
        _dark={{
          bg: "gray.800"
        }}
        mx={{
          lg: 8
        }}
        display={{
          lg: "flex"
        }}
        maxW={{
          lg: "5xl"
        }}
        shadow={{
          lg: "lg"
        }}
        rounded={{
          lg: "lg"
        }}
      >
        <Box
          w={{
            lg: "50%"
          }}
        >
          <Box
            h={{
              base: 64,
              lg: "full"
            }}
            rounded={{
              lg: "lg"
            }}
            bgSize="cover"
            style={{
              backgroundImage: "/coder.avif"
            }}
          ></Box>
        </Box>

        <Box
          py={12}
          px={6}
          maxW={{
            base: "xl",
            lg: "5xl"
          }}
          w={{
            lg: "50%"
          }}
        >
          <chakra.h2
            fontSize={{
              base: "2xl",
              md: "3xl"
            }}
            color="gray.800"
            _dark={{
              color: "white"
            }}
            fontWeight="bold"
          >
            Code used for this page
          </chakra.h2>
          <CustomDescription
            desc=" For this page I used Next.js with Chakra UI. Next.js is a
            React-based framework that offers several advantages for web
            development, including:"
          />
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

          <span>Visit on:</span>
          <Link
            mx={2}
            cursor="pointer"
            textDecor="underline"
            color="brand.600"
            _dark={{
              color: "brand.400"
            }}
          >
            <NavLink
              href={
                "https://github.com/OscarGuerreroLopez/oscar-next-chakra-page"
              }
              passHref
              legacyBehavior
            >
              <a title="github-repo">github.com</a>
            </NavLink>
          </Link>
        </Box>
      </Box>
    </Flex>
  );
}
