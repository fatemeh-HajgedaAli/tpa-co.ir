import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

import { BLUE } from "./aboutConstants";

const stats = [
  {
    value: "۱۳۸۹",
    label: "شروع فعالیت",
    color: BLUE,
  },
  {
    value: "+۱۵",
    label: "کشور هدف",
    color: "white",
  },
  {
    value: "+۱۰۰",
    label: "متخصص",
    color: "white",
  },
];

export default function AboutStats() {
  return (
    <SimpleGrid columns={3} spacing={6}>
      {stats.map((stat) => (
        <Box key={stat.label}>
          <Heading fontSize={{ base: "2xl", md: "3xl" }} color={stat.color}>
            {stat.value}
          </Heading>

          <Text color="gray.600" fontSize="xs" mt={2}>
            {stat.label}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
}
