import { useColorModeValue, Text, TextProps } from "@chakra-ui/react";

interface DescriptionProps {
  desc: string;
  props?: Omit<TextProps, "color">;
}
const description: React.FC<DescriptionProps> = ({ desc, props }) => {
  return (
    <Text
      fontSize={{ base: "md", lg: "lg" }}
      color={useColorModeValue("gray.700", "gray.400")}
      {...props}
    >
      {desc}
    </Text>
  );
};

export default description;
