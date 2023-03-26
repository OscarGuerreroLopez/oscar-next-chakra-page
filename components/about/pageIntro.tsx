import { InfoIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";

interface PageIntroProps {
  title: string;
  desc: string;
}

const PageIntro: React.FC<PageIntroProps> = ({ title, desc }) => {
  return (
    <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
      <Box textAlign="center" py={10} px={6}>
        <InfoIcon boxSize={"50px"} color={"red.400"} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          {title}
        </Heading>
        <Text color={"gray.500"}>{desc}</Text>
      </Box>
    </Stack>
  );
};

export default PageIntro;

{
  /* <Box textAlign="center" py={10} px={6}>
      <InfoIcon boxSize={"50px"} color={"blue.500"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        {title}
      </Heading>
      <Text color={"gray.500"}>{desc}</Text>
    </Box> */
}
