import { Button, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

interface ButtonProps {
  name: string;
  link: string;
}

const linkButton: React.FC<ButtonProps> = ({ name, link }) => {
  return (
    <Link href={link}>
      <Button
        rounded={"full"}
        size={"lg"}
        px={6}
        colorScheme={"red"}
        color={"white"}
        bg={useColorModeValue("blue.500", "blue.600")}
        _hover={{ bg: "blue.700" }}
      >
        {name}
      </Button>
    </Link>
  );
};

export default linkButton;
