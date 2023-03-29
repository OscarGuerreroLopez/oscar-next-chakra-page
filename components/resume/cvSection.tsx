import { Box, Heading, VStack, Image } from "@chakra-ui/react";

interface SectionProps {
  title: string;
  imgSrc: string;
}

const cvSection: React.FC<SectionProps> = ({ title, imgSrc }) => {
  return (
    <VStack mb={6}>
      <Box>
        <Image src={imgSrc} p={4} maxBlockSize={"500px"}></Image>
      </Box>
      <Box>
        <Heading as={"h2"} size={{ base: "md", md: "xl" }}>
          {title}:
        </Heading>
      </Box>
    </VStack>
  );
};

export default cvSection;
