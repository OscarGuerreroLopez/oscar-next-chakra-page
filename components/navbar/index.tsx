import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Heading,
  Text,
  Container
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import NavLink from "./navlink";
import { Links } from "@/constants/links";

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box px={4}>
        <Container minW={{ base: "none", md: "3xl", lg: "4xl" }}>
          <Flex
            minH={"10vh"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
              bg={useColorModeValue("white.200", "black.200")}
            />
            <HStack spacing={8} alignItems={"center"}>
              <Box>
                {" "}
                <Heading as="h3" size={"md"}>
                  <Text as={"span"}>Oscar Guerrero</Text>
                </Heading>
              </Box>
            </HStack>
            <Flex alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map(({ name, path }) => (
                  <NavLink key={path} path={path}>
                    {name}
                  </NavLink>
                ))}
              </HStack>
              <Stack direction={"row"} spacing={{ base: 1, md: 3, lg: 5 }}>
                <Button
                  onClick={toggleColorMode}
                  background={colorMode}
                  aria-label="buy product"
                >
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Stack>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                {Links.map(({ name, path }) => (
                  <NavLink key={path} path={path}>
                    {name}
                  </NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Container>
      </Box>
    </>
  );
}
