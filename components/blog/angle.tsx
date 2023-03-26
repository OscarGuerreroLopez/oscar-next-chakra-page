import { Box, chakra, Container, Flex } from "@chakra-ui/react";

const angle = () => {
  return (
    <Container maxW={"5xl"}>
      <Flex
        bg="#edf3f8"
        _dark={{
          bg: "orange.600"
        }}
        _light={{
          bg: "orange.400"
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
              <chakra.span display="block" color={"orange.400"}>
                Ready to make the change?
              </chakra.span>
              <chakra.span
                display="block"
                color="brand.600"
                _dark={{
                  color: "gray.500"
                }}
              >
                Contact me today.
              </chakra.span>
            </chakra.span>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default angle;
