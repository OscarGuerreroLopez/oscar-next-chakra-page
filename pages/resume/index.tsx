import Layout from "@/components/layout";
import { Box, Container, Heading, useColorModeValue } from "@chakra-ui/react";
import CustomHeader from "@/components/head/customHeader";
import Profile from "@/components/resume/profile";
import Skills from "@/components/resume/skills";
import ExperienceEntry from "@/components/resume/experienceEntry";
import { education, earlierExperience, experience } from "@/data/resume";

const Resume = () => {
  const educationColor = useColorModeValue("gray.700", "gray.100");

  return (
    <Layout>
      <CustomHeader
        title="Resume | Senior Software Engineer | Oscar Guerrero"
        description="Oscar Guerrero Lopez — Senior Software Engineer specializing in backend, cloud, and AI systems."
        url="https://oscarcomputerguy.com/resume"
        siteName="Oscar Guerrero Resume"
      />
      <Container maxW="4xl" py={{ base: 8, md: 14 }}>
        <Profile />
        <Skills />
        <Box
          as="section"
          aria-labelledby="experience-heading"
          mb={{ base: 10, md: 14 }}
        >
          <Heading
            id="experience-heading"
            as="h2"
            size={{ base: "md", md: "lg" }}
            mb={7}
          >
            Professional Experience
          </Heading>
          {experience.map((entry) => (
            <ExperienceEntry
              key={`${entry.employer}-${entry.dateRange}`}
              entry={entry}
            />
          ))}
        </Box>
        <Box
          as="section"
          aria-labelledby="earlier-experience-heading"
          mb={{ base: 10, md: 14 }}
        >
          <Heading
            id="earlier-experience-heading"
            as="h2"
            size={{ base: "md", md: "lg" }}
            mb={7}
          >
            Earlier Experience
          </Heading>
          {earlierExperience.map((entry) => (
            <ExperienceEntry
              key={`${entry.employer}-${entry.dateRange}`}
              entry={entry}
            />
          ))}
        </Box>
        <Box as="section" aria-labelledby="education-heading">
          <Heading
            id="education-heading"
            as="h2"
            size={{ base: "md", md: "lg" }}
            mb={7}
          >
            Education &amp; Certification
          </Heading>
          {education.map((entry) => (
            <Box key={`${entry.credential}-${entry.date}`} mb={7}>
              <Heading as="h3" size={{ base: "sm", md: "md" }} mb={1}>
                {entry.credential}
              </Heading>
              <Box color={educationColor} mb={3}>
                {entry.institution} | {entry.date}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Layout>
  );
};

export default Resume;
