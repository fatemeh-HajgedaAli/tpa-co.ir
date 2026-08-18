import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";

import { BLUE } from "./aboutConstants";

export default function AboutHeader() {
  return (
    <Flex
      justify="space-between"
      align={{ base: "flex-start", md: "center" }}
      direction={{ base: "column", md: "row" }}
      gap={6}
      mb={{ base: 12, md: 20 }}
    >
      <Box>
        <HStack spacing={3} mb={4}>
          <Box
            w="8px"
            h="8px"
            bg={BLUE}
            borderRadius="full"
            boxShadow={`0 0 15px ${BLUE}`}
          />

          <Text color={BLUE} fontSize="xs" fontWeight={700} letterSpacing="2px">
            ABOUT TPA
          </Text>
        </HStack>

        <Heading
          fontSize={{
            base: "3xl",
            md: "5xl",
            lg: "6xl",
          }}
          fontWeight={900}
          lineHeight="1.25"
        >
          مهندسی برای{" "}
          <Box as="span" color={BLUE}>
            آینده صنعت
          </Box>
        </Heading>
      </Box>

      <Text
        maxW="450px"
        color="gray.500"
        fontSize={{ base: "sm", md: "md" }}
        lineHeight="2.1"
      >
        تجارت پرگاس آینده، با تمرکز بر تأمین تجهیزات، مواد اولیه و قطعات مورد
        نیاز صنایع فولاد، نفت، گاز و پتروشیمی، همراه مطمئن پروژه‌های صنعتی است.
      </Text>
    </Flex>
  );
}
