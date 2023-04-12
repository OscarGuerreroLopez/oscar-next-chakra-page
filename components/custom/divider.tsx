import {
  Box,
  Flex,
  Center,
  Image,
  Heading,
  useColorModeValue
} from "@chakra-ui/react";
import React from "react";

interface Props {
  text: string;
  imgSrc: string;
}

const GradientBackground: React.FC<Props> = ({ text, imgSrc }) => {
  return (
    <Flex
      align="center"
      justify="center"
      h={{ base: "25vh", md: "50vh", lg: "100vh" }}
      bgGradient={useColorModeValue(
        "linear(to-r, blue.400, green.400)",
        "linear(to-r, blue.600, green.600)"
      )}
      my={9}
      borderRadius="0 0 33px 33px"
    >
      <Box flex="1">
        <Box textAlign="left" p={7}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "lg", md: "2xl", lg: "4xl", xl: "6xl" }}
            fontFamily={"Caveat"}
            color={useColorModeValue("gray.800", "gray.200")}
          >
            {text}
          </Heading>
        </Box>
      </Box>
      <Box flex="1" display="flex" justifyContent="center">
        <Center>
          <Image
            src={imgSrc}
            p={4}
            boxSize="auto"
            maxW={{ base: "100%", md: "65%" }}
            objectFit="contain"
            alt={`software engineer`}
          />
        </Center>
      </Box>
    </Flex>
  );
};

export default GradientBackground;