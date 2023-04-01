import {
  Box,
  Heading,
  Link,
  useColorModeValue,
  Image,
  Text
} from "@chakra-ui/react";
import BlogTags from "./blogTags";
import MainBlock from "./mainBlock";
import Description from "@/components/custom/description";

interface BlogProps {
  title: string;
  tags: string[];
  blogTitle: string;
  desc: string;
  pic: string;
}

const BlogLeft: React.FC<BlogProps> = ({
  title,
  tags,
  blogTitle,
  desc,
  pic
}) => {
  return (
    <MainBlock title={title}>
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
        <Description desc={desc} props={{ as: "p", marginTop: "2" }} />
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
    </MainBlock>
  );
};

export default BlogLeft;
