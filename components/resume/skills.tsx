import { Box, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { skillCategories } from "@/data/resume";

const Skills = () => {
  const supportingTextColor = useColorModeValue("gray.700", "gray.100");

  return (
    <Box mb={{ base: 10, md: 14 }}>
      <Heading as="h2" size={{ base: "md", md: "lg" }} mb={5}>Technical Skills</Heading>
      <Stack spacing={2}>
        {skillCategories.map((category) => (
          <Text key={category.label} lineHeight="1.7" color={supportingTextColor}>
            <Box as="span" fontWeight="bold">{category.label}:</Box> {category.items}
          </Text>
        ))}
      </Stack>
    </Box>
  );
};

export default Skills;
