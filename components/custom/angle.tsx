import {
  Box,
  chakra,
  Container,
  Flex,
  useColorModeValue
} from "@chakra-ui/react";
import Link from "next/link";

const angle = () => {
  return (
    <Container maxW={"5xl"} mt="10">
      <Flex
        bg="#edf3f8"
        _dark={{
          bg: "purple.600"
        }}
        _light={{
          bg: "purple.400"
        }}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          justify="center"
          bg="white"
          _dark={{
            bg: "gray.800"
          }}
          w="full"
        >
          <Box
            w={{
              base: "full",
              md: "75%",
              lg: "50%"
            }}
            px={4}
            py={20}
            textAlign={{
              base: "left",
              md: "center"
            }}
          >
            <chakra.span
              fontSize={{
                base: "3xl",
                sm: "4xl"
              }}
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="shorter"
              color="gray.900"
              _dark={{
                color: "gray.100"
              }}
              mb={6}
            >
              <chakra.span
                display="block"
                color={useColorModeValue("blue.500", "blue.400")}
              >
                Ready to make the change?
              </chakra.span>
              <Link href={"/about"}>
                <chakra.span
                  display="block"
                  color="brand.600"
                  _dark={{
                    color: "gray.500"
                  }}
                >
                  Contact me today.
                </chakra.span>
              </Link>
            </chakra.span>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default angle;
