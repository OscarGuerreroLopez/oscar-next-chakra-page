import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  useColorModeValue
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { FreelanceOptions } from "@/data/freelanceOptions";
import Description from "@/components/custom/description";

const freeLancer = () => {
  return (
    <Box
      mb={{ base: "8", md: "32" }}
      py={7}
      background={useColorModeValue(
        "linear-gradient(180deg, #3182ce 0%, #00BCFF 50%, #8BC34A 100%, #9C27B0 100%)",
        "linear-gradient(180deg, #00457A 0%, #005D9A 33.33%, #0072B2 66.67%, #1E6449 100%)"
      )}
      borderRadius="3xl"
    >
      <Stack spacing={4} as={Container} maxW={"4xl"}>
        <Heading fontSize={"3xl"} textAlign={"center"}>
          Hiring a freelancer to help you
        </Heading>

        <Description
          desc="In today's fast-paced digital world, having a reliable and efficient
          IT system is crucial for any business. Whether you're a startup or a
          well-established company, you need to have the right technology in
          place to stay ahead of the competition. One way to achieve this is by
          hiring an IT freelancer. Not only can they provide you with the
          expertise you need, but they can also offer a number of other
          benefits."
        />
      </Stack>

      <Container maxW={{ base: "none", md: "5xl", lg: "6xl" }} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {FreelanceOptions.map((option) => (
            <HStack key={option.id} align={"top"}>
              <Box color={"black.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{option.title}</Text>
                <Description desc={option.text} />
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default freeLancer;
