import {
  Box,
  Container,
  Heading,
  Link,
  useColorModeValue,
  Image,
  HStack,
  SpaceProps,
  Tag,
  Text
} from "@chakra-ui/react";

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}
interface BlogProps {
  title: string;
  tags: string[];
  blogTitle: string;
  desc: string;
  pic: string;
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const BlogRight: React.FC<BlogProps> = ({
  title,
  tags,
  blogTitle,
  desc,
  pic
}) => {
  return (
    <Container maxW={"5xl"} p={{ base: "3", md: "12" }} mt="10">
      <Heading as="h1">{title}</Heading>

      <Box
        marginTop={{ base: "1", sm: "3" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <BlogTags tags={tags} />
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              {blogTitle}
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            {desc}
          </Text>
        </Box>
        <Box
          display="flex"
          flex="1"
          marginRight={{ base: "0", md: "3" }}
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius="lg"
                src={pic}
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default BlogRight;
