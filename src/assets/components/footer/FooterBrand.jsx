import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const INK = "#edeee8";
const MUTED = "#8a94a3";
const BLUE = "#4fb3c7";
const MONO = "'JetBrains Mono', monospace";

export default function FooterBrand() {
  return (
    <VStack align="start" spacing={5} maxW="480px">
      <Text fontFamily={MONO} fontSize="10px" letterSpacing="2px" color={BLUE}>
        ENGINEERING & PROCUREMENT
      </Text>

      <Heading
        color={INK}
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight={800}
        lineHeight="1.4"
      >
        تجارت{" "}
        <Box as="span" color={BLUE}>
          پرگاس آینده
        </Box>
      </Heading>

      <Text color={MUTED} fontSize="sm" lineHeight="2">
        شرکت مهندسی، تأمین و بازرگانی بین‌المللی فعال در حوزه تجهیزات متالورژی،
        پتروشیمی و صنایع سنگین.
      </Text>

      {/* Small technical info */}
      <Box pt={3} borderTop="1px solid rgba(237,238,232,0.08)" w="full">
        <Text
          fontFamily={MONO}
          fontSize="9px"
          letterSpacing="1px"
          color="#5b6472"
        >
          TPA / INDUSTRIAL / ENGINEERING
        </Text>
      </Box>
    </VStack>
  );
}
