import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";

import { PORTFOLIO_TOKENS } from "./portfolioConstants";

const { INK, MUTED_DIM, HEAT, LINE, MONO } = PORTFOLIO_TOKENS;

export default function PortfolioHeader() {
  const startYear = "۱۳۷۰";
  const endYear = "۱۴۰۳";

  return (
    <Flex
      justify="space-between"
      align="flex-end"
      mb={12}
      wrap="wrap"
      gap={6}
      borderBottom="1px solid"
      borderColor={LINE}
      pb={8}
    >
      <VStack align="start" spacing={4}>
        <HStack spacing={2}>
          <Box
            w="5px"
            h="5px"
            borderRadius="full"
            bg={HEAT}
            boxShadow={`0 0 8px ${HEAT}`}
          />

          <Text
            fontFamily={MONO}
            fontSize="11px"
            letterSpacing="2.5px"
            color={HEAT}
          >
            LOG BOOK — FIELD RECORDS
          </Text>
        </HStack>

        <Heading
          color={INK}
          fontSize={{ base: "3xl", md: "6xl" }}
          fontWeight={800}
          letterSpacing="-1px"
        >
          سوابق{" "}
          <Box as="span" color={HEAT}>
            اجرایی
          </Box>
        </Heading>
      </VStack>

      <HStack
        spacing={4}
        fontFamily={MONO}
        fontSize="12px"
        color={MUTED_DIM}
        display={{ base: "none", md: "flex" }}
      >
        <Text>{endYear} · اکنون</Text>

        <Box
          w="80px"
          h="1px"
          bg={PORTFOLIO_TOKENS.LINE_STRONG}
          position="relative"
        >
          <Box
            position="absolute"
            insetInlineStart="0"
            top="-2px"
            w="5px"
            h="5px"
            borderRadius="full"
            bg={HEAT}
          />
        </Box>

        <Text>{startYear} · آغاز</Text>
      </HStack>
    </Flex>
  );
}
