import {
  Box,
  Heading,
  ListItem,
  SimpleGrid,
  Tag,
  Text,
  UnorderedList,
  useColorModeValue
} from "@chakra-ui/react";
import type { ExperienceEntry as ExperienceEntryData } from "@/data/resume";

const ExperienceEntry = ({ entry }: { entry: ExperienceEntryData }) => {
  const supportingTextColor = useColorModeValue("gray.700", "gray.100");

  return (
    <Box mb={8}>
      <Heading as="h3" size={{ base: "sm", md: "md" }} mb={1}>
        {entry.title}
      </Heading>
      <Text color={supportingTextColor} mb={3}>
        {[entry.employer, entry.location].filter(Boolean).join(" — ")} |{" "}
        {entry.dateRange}
      </Text>
      <UnorderedList pl={8} spacing={2} color={supportingTextColor}>
        {entry.responsibilities.map((responsibility) => (
          <ListItem key={responsibility}>{responsibility}</ListItem>
        ))}
      </UnorderedList>
      {entry.stack && (
        <SimpleGrid
          columns={{ base: 3, md: 6 }}
          spacing={2}
          mt={4}
          aria-label="Technology stack"
        >
          {entry.stack.map((item) => (
            <Tag
              key={item}
              size="md"
              variant="subtle"
              colorScheme="purple"
              justifyContent="center"
              fontSize={{ base: "xs", md: "sm" }}
            >
              {item}
            </Tag>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default ExperienceEntry;
