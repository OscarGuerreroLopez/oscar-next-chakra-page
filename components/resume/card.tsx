import { ViewIcon, EditIcon } from "@chakra-ui/icons";
import {
  Card,
  useColorModeValue,
  CardHeader,
  Flex,
  Heading,
  CardBody,
  Divider,
  CardFooter,
  HStack,
  Button,
  Box,
  Text,
  UnorderedList,
  ListItem,
  VStack,
  Tag,
  SimpleGrid,
  SpaceProps
} from "@chakra-ui/react";

interface CustomCardProps {
  mainHeader: string;
  subHeader: string;
  body: string;
  desc: string;
  stack?: string[];
}

const CustomCard: React.FC<CustomCardProps> = ({
  mainHeader,
  subHeader,
  body,
  desc,
  stack
}) => {
  return (
    <Card
      borderTop="8px"
      borderColor={useColorModeValue("purple.400", "purple.600")}
      marginBottom={"25px"}
    >
      <CardHeader>
        <Flex gap={5}>
          <Box>
            <Heading
              as="h3"
              size={"sm"}
              color={useColorModeValue("purple.600", "purple.400")}
            >
              {mainHeader}
            </Heading>
            <Heading
              as="h5"
              size={"sm"}
              mt="2"
              color={useColorModeValue("purple.600", "purple.400")}
            >
              {subHeader}
            </Heading>
          </Box>
        </Flex>
      </CardHeader>

      <CardBody color={"gray.500"}>
        <Text color={useColorModeValue("gray.600", "gray.300")}>{body}</Text>
      </CardBody>
      <Divider borderColor={"grey.200"} />
      <CardFooter alignSelf={"left"}>
        <VStack align="left">
          <Text color={useColorModeValue("gray.600", "gray.300")}>{desc}</Text>
          <HStack spacing={2} marginTop={2}>
            <SimpleGrid columns={{ base: 4, md: 6, lg: 6 }} spacing={4}>
              {stack &&
                stack.map((item) => {
                  return (
                    <Tag
                      size={"md"}
                      variant="solid"
                      colorScheme="orange"
                      fontSize={{ base: "8px", md: "14px", lg: "18px" }}
                      justifyContent="center"
                    >
                      {item}
                    </Tag>
                  );
                })}
            </SimpleGrid>
          </HStack>
        </VStack>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
