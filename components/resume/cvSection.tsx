import { Box, Heading, VStack, Image, Center } from "@chakra-ui/react";

interface SectionProps {
  title: string;
  imgSrc: string;
}

const cvSection: React.FC<SectionProps> = ({ title, imgSrc }) => {
  return (
    <VStack mb={6}>
      <Center alignContent={"center"}>
        <Image
          src={imgSrc}
          p={4}
          boxSize="auto"
          maxW="75%"
          maxH="75%"
          objectFit="contain"
          alt={`${title} software engineer`}
        />
      </Center>
      <Box>
        <Heading as={"h2"} size={{ base: "md", md: "xl" }}>
          {title}:
        </Heading>
      </Box>
    </VStack>
  );
};

export default cvSection;
