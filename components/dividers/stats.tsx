import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue
} from "@chakra-ui/react";
import React from "react";

interface StatsCardProps {
  title: string;
  stat: string;
}

interface StatsProps {
  mainTitle: string;
  stats: StatsCardProps[];
}
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <StatLabel fontWeight={"medium"} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

const BasicStatistics: React.FC<StatsProps> = ({ mainTitle, stats }) => {
  return (
    <Box maxW="5xl" mx={"auto"} px={{ base: 2, sm: 12, md: 17 }} mb="10">
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        {mainTitle}
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        {stats.map((stat) => (
          <StatsCard title={stat.title} stat={stat.stat} key={stat.stat} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default BasicStatistics;
