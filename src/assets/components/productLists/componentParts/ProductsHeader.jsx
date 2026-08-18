import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { TOKENS, CATEGORIES } from "../productsConfig";

import { MotionBox, itemVariants } from "../styles/productsAnimations";

export default function ProductsHeader({ totalProducts, filteredCount }) {
  return (
    <>
      {/* Breadcrumb */}

      <MotionBox variants={itemVariants} mb={10}>
        <HStack
          spacing={2}
          fontFamily={TOKENS.MONO}
          fontSize="15px"
          color={TOKENS.MUTED_DIM}
        >
          <Text
            as={RouterLink}
            to="/"
            color={TOKENS.MUTED_DIM}
            _hover={{
              color: TOKENS.BLUE,
            }}
            transition="color 0.2s"
            cursor="pointer"
          >
            خانه
          </Text>

          <Text opacity={0.5}>/</Text>

          <Text color={TOKENS.BLUE}>محصولات</Text>
        </HStack>
      </MotionBox>
      {/* Sheet */}

      <Flex
        justify="space-between"
        fontFamily={TOKENS.MONO}
        fontSize="11px"
        letterSpacing="2px"
        color={TOKENS.MUTED_DIM}
        mb={8}
        wrap="wrap"
        gap={2}
      >
        <span>SHEET 04 / A</span>

        <HStack spacing={5}>
          <span>
            REC {String(filteredCount).padStart(2, "0")} /{" "}
            {String(totalProducts).padStart(2, "0")}
          </span>

          <span>SYNC 2026.08</span>
        </HStack>
      </Flex>

      {/* Main Header */}

      <Flex
        direction={{
          base: "column",
          lg: "row",
        }}
        justify="space-between"
        align={{
          lg: "flex-end",
        }}
        mb={10}
        gap={8}
      >
        <MotionBox variants={itemVariants}>
          <HStack spacing={2} mb={5}>
            <Box
              w="5px"
              h="5px"
              borderRadius="full"
              bg={TOKENS.BLUE}
              boxShadow={`0 0 8px ${TOKENS.BLUE}`}
            />

            <Text
              fontFamily={TOKENS.MONO}
              fontSize="11px"
              letterSpacing="2.5px"
              color={TOKENS.BLUE}
            >
              DATABASE / MATERIALS
            </Text>
          </HStack>

          <Heading
            fontWeight="800"
            fontSize={{
              base: "3xl",
              md: "5xl",
            }}
            lineHeight="1.2"
            color={TOKENS.INK}
            mb={3}
          >
            محبوب‌ترین محصولات
          </Heading>

          <Text color={TOKENS.MUTED} fontSize="lg" maxW="xl" lineHeight="1.9">
            تامین کامل ملزومات و مواد اولیه زنجیره فولاد با استانداردهای
            بین‌المللی
          </Text>
        </MotionBox>

        <Stats
          totalProducts={totalProducts}
          categories={Object.keys(CATEGORIES).length}
        />
      </Flex>
    </>
  );
}

function Stats({ totalProducts, categories }) {
  return (
    <MotionBox variants={itemVariants}>
      <Flex
        border="1px solid"
        borderColor={TOKENS.LINE_STRONG}
        bg="rgba(255,255,255,0.02)"
        px={6}
        py={4}
        align="center"
        gap={6}
      >
        <Stat label="ITEMS" value={totalProducts} color={TOKENS.BLUE} />

        <Box w="1px" h="34px" bg={TOKENS.LINE} />

        <Stat label="CATEGORIES" value={categories} color={TOKENS.INK} />
      </Flex>
    </MotionBox>
  );
}

function Stat({ label, value, color }) {
  return (
    <Box>
      <Text
        fontFamily={TOKENS.MONO}
        fontSize="9px"
        letterSpacing="1.5px"
        color={TOKENS.MUTED_DIM}
        mb={1}
      >
        {label}
      </Text>

      <Text
        fontFamily={TOKENS.MONO}
        fontSize="28px"
        color={color}
        fontWeight={700}
        lineHeight={1}
      >
        {String(value).padStart(2, "0")}
      </Text>
    </Box>
  );
}
