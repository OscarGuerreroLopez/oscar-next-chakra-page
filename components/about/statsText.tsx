import { ReactNode } from "react";
import { Text } from "@chakra-ui/react";

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={"span"} fontWeight={700} color={"white"}>
    {children}
  </Text>
);

export default StatsText;
