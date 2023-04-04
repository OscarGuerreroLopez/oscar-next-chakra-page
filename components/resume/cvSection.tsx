import { Box, Heading, VStack, Image, Center } from "@chakra-ui/react";

interface SectionProps {
  title: string;
  imgSrc: string;
}

const imageStyles = {
  width: "75%",
  height: "auto"
};

const cvSection: React.FC<SectionProps> = ({ title, imgSrc }) => {
  return (
    <VStack mb={6}>
      <Center bg={"yellow"} alignContent={"center"}>
        <Image
          src={imgSrc}
          p={4}
          alt={`${title} software engineer`}
          style={imageStyles}
          bg={"orange"}
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
