import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import { Links } from "@/constants/links";
import NavLink from "../navbar/navlink";

export default function SmallWithNavigation() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
        minH={"10vh"}
        // mt="40px"
      >
        <Stack direction={"row"} spacing={6}>
          {Links.map(({ name, path }) => (
            <NavLink key={path} path={path}>
              {name}
            </NavLink>
          ))}
        </Stack>
        <Text>© 2023 Oscar Guerrero. All rights reserved</Text>
      </Container>
    </Box>
  );
}
