import { Flex, chakra, Heading, Image, Box, Link } from "@chakra-ui/react";

import Description from "../custom/description";

interface Props {
  title: string;
  date: string;
  tag: string;
  avatar: string;
  author: string;
  desc1: string;
  desc2?: string[];
}

const entry: React.FC<Props> = ({ ...props }) => {
  return (
    <Flex p={5} w="full" alignItems="center" justifyContent="center">
      <Box mx="auto" px={8} py={4} rounded="lg" shadow="lg" maxW="5xl">
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.span
            fontSize="sm"
            color="gray.600"
            _dark={{
              color: "gray.400"
            }}
          >
            {props.date}
          </chakra.span>
          <Link
            px={3}
            py={1}
            bg="gray.600"
            color="gray.100"
            fontSize="sm"
            fontWeight="700"
            rounded="md"
            _hover={{
              bg: "gray.500"
            }}
          >
            {props.tag}
          </Link>
        </Flex>

        <Box mt={2}>
          <Heading fontSize="2xl" mt={5} fontWeight="700">
            {props.title}
          </Heading>
          <Description desc={props.desc1} props={{ mt: 5 }} />
          {props.desc2?.map((desc) => {
            return <Description desc={desc} props={{ mt: 3 }} />;
          })}
        </Box>

        <Flex alignItems="center" mt={4}>
          <Image
            mx={4}
            w={10}
            h={10}
            rounded="full"
            fit="cover"
            src={props.avatar}
            alt="avatar"
          />
          <Link
            color="gray.700"
            _dark={{
              color: "gray.200"
            }}
            fontWeight="700"
            cursor="pointer"
          >
            {props.author}
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default entry;
