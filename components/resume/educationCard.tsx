import {
  Card,
  useColorModeValue,
  CardHeader,
  Flex,
  Heading,
  CardBody,
  Box,
  Text
} from "@chakra-ui/react";

interface CustomCardProps {
  mainHeader: string;
  subHeader: string;
  body: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  mainHeader,
  subHeader,
  body
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
              size={"md"}
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
    </Card>
  );
};

export default CustomCard;
