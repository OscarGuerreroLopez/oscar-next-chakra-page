import {
  Box,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import { resumeProfile } from "@/data/resume";

const contactLinkProps = {
  fontSize: { base: "sm", md: "md" },
  color: "blue.600"
};

const Profile = () => {
  const metaColor = useColorModeValue("gray.600", "gray.100");
  const supportingTextColor = useColorModeValue("gray.700", "gray.100");

  return (
    <Box as="header" mb={{ base: 10, md: 14 }}>
      <Heading as="h1" size={{ base: "lg", md: "2xl" }} mb={2}>
        {resumeProfile.name}
      </Heading>
      <Stack
        as="ul"
        listStyleType="none"
        direction={{ base: "column", sm: "row" }}
        spacing={{ base: 0, sm: 4 }}
        fontSize={{ base: "sm", md: "md" }}
        color={metaColor}
        mb={1}
      >
        <Box as="li">{resumeProfile.location}</Box>
        <Box as="li">
          <Link
            href={`tel:${resumeProfile.phone.replace(/\s/g, "")}`}
            {...contactLinkProps}
          >
            {resumeProfile.phone}
          </Link>
        </Box>
        <Box as="li">
          <Link href={`mailto:${resumeProfile.email}`} {...contactLinkProps}>
            {resumeProfile.email}
          </Link>
        </Box>
      </Stack>
      <Link href={resumeProfile.linkedinUrl} isExternal {...contactLinkProps}>
        {resumeProfile.linkedinUrl}
      </Link>
      <Heading as="h2" size={{ base: "md", md: "lg" }} mt={8} mb={4}>
        {resumeProfile.title}
      </Heading>
      <Text lineHeight="1.8" color={supportingTextColor}>
        {resumeProfile.summary}
      </Text>
    </Box>
  );
};

export default Profile;
