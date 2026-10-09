import { Box, Heading, ListItem, Text, UnorderedList, useColorModeValue } from "@chakra-ui/react";
import type { ExperienceEntry as ExperienceEntryData } from "@/data/resume";

const ExperienceEntry = ({ entry }: { entry: ExperienceEntryData }) => (
  <Box mb={8}>
    <Heading as="h3" size={{ base: "sm", md: "md" }} mb={1}>
      {entry.title}
    </Heading>
    <Text color={useColorModeValue("gray.700", "gray.100")} mb={3}>
      {[entry.employer, entry.location].filter(Boolean).join(" — ")} |{" "}
      {entry.dateRange}
    </Text>
    <UnorderedList pl={8} spacing={2} color={useColorModeValue("gray.700", "gray.100")}>
      {entry.responsibilities.map((responsibility) => (
        <ListItem key={responsibility}>{responsibility}</ListItem>
      ))}
    </UnorderedList>
  </Box>
);

export default ExperienceEntry;
