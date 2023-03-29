import { Container, Heading, Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface MainBlockProps {
  title: string;
  children: ReactNode;
}

const mainBlock: React.FC<MainBlockProps> = ({ title, children }) => {
  return (
    <Container maxW={"5xl"} p={{ base: "3", md: "12" }} mt="10">
      <Heading as="h1">{title}</Heading>
      <Box
        marginTop={{ base: "1", sm: "3" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        {children}
      </Box>
    </Container>
  );
};

export default mainBlock;
