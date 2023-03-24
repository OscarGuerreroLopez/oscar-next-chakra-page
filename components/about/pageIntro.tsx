import { Container, Heading, Stack, Text } from "@chakra-ui/react";

interface PageIntroProps {
  title: string;
  desc: string;
}

const PageIntro: React.FC<PageIntroProps> = ({ title, desc }) => {
  return (
    <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
      <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
        {title}
      </Heading>
      <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
        {desc}
      </Text>
    </Stack>
  );
};

export default PageIntro;
