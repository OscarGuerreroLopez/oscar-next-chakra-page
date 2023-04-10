import { ListItem, useColorModeValue, ListIcon } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

interface ListItemParams {
  desc: string;
}

const listItemWithCheck: React.FC<ListItemParams> = ({ desc }) => {
  return (
    <ListItem color={useColorModeValue("gray.700", "gray.400")}>
      <ListIcon as={FaCheckCircle} color="green.500" />
      {desc}
    </ListItem>
  );
};

export default listItemWithCheck;
