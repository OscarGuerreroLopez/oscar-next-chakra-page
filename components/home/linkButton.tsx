import { Button } from "@chakra-ui/react";
import Link from "next/link";

interface ButtonProps {
  name: string;
  link: string;
}

const linkButton: React.FC<ButtonProps> = ({ name, link }) => {
  return (
    <Button
      rounded={"full"}
      size={"lg"}
      px={6}
      colorScheme={"red"}
      color={"white"}
      bg={"red.400"}
      _hover={{ bg: "red.500" }}
    >
      <Link href={link}>{name}</Link>
    </Button>
  );
};

export default linkButton;
