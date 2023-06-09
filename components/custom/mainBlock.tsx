import { Container, Heading, Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface MainBlockProps {
  title: string;
  children: ReactNode;
}

const mainBlock: React.FC<MainBlockProps> = ({ title, children }) => {
  return (
    <Container
      maxW={{ base: "none", md: "5xl", lg: "6xl" }}
      p={{ base: "3", md: "12" }}
      mt={{ base: 7, md: 1 }}
    >
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
