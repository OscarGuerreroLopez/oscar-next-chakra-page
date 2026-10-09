import { Box, Heading, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { resumeProfile } from "@/data/resume";

const Profile = () => (
  <Box as="header" mb={{ base: 10, md: 14 }}>
    <Heading as="h1" size={{ base: "lg", md: "2xl" }} mb={2}>{resumeProfile.name}</Heading>
    <Text fontSize={{ base: "sm", md: "md" }} color={useColorModeValue("gray.600", "gray.100")} mb={1}>
      {resumeProfile.location} | {resumeProfile.phone} | {resumeProfile.email}
    </Text>
    <Link href={resumeProfile.linkedinUrl} isExternal color="blue.600" fontSize={{ base: "sm", md: "md" }}>
      {resumeProfile.linkedinUrl}
    </Link>
    <Heading as="h2" size={{ base: "md", md: "lg" }} mt={8} mb={4}>{resumeProfile.title}</Heading>
    <Text lineHeight="1.8" color={useColorModeValue("gray.700", "gray.100")}>{resumeProfile.summary}</Text>
  </Box>
);

export default Profile;
