import { Box, Flex, Heading, Text, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = chakra(motion.create("div"));

const INK = "#edeee8";
const MUTED = "#8a94a3";
const MUTED_DIM = "#5b6472";
const BLUE = "#4fb3c7";
const MONO = "'JetBrains Mono', monospace";

export default function ProductsHeader({ variants }) {
  return (
    <>
      {/* Sheet */}
      <Flex
        justify="space-between"
        px={{ base: 3, md: 5 }}
        fontFamily={MONO}
        fontSize="11px"
        letterSpacing="2px"
        color={MUTED_DIM}
        mb={{ base: 10, md: 12 }}
      >
        <Text>SHEET 03 / A</Text>
        <Text>MATERIAL CATALOG</Text>
      </Flex>

      {/* Title */}
      <MotionBox variants={variants} mb={6} px={{ base: 3, md: 5 }}>
        <Flex align="center" gap={2} mb={6}>
          <Box
            w="5px"
            h="5px"
            borderRadius="full"
            bg={BLUE}
            boxShadow={`0 0 8px ${BLUE}`}
          />

          <Text
            fontFamily={MONO}
            fontSize="11px"
            letterSpacing="2.5px"
            color={BLUE}
          >
            محصولات ما
          </Text>
        </Flex>

        <Heading
          fontWeight="800"
          fontSize={{
            base: "4xl",
            md: "6xl",
          }}
          lineHeight="1.22"
        >
          <Box as="span" color={INK}>
            مهندسی و تامین
          </Box>

          <Box as="span" display="block" mt={1} color={BLUE}>
            متریال فولاد
          </Box>
        </Heading>

        <MotionBox
          initial={{ width: 0 }}
          whileInView={{ width: "96px" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
          height="2px"
          bgGradient={`linear(to-l, ${BLUE}, transparent)`}
          mt={6}
        />
      </MotionBox>

      {/* Description */}
      <MotionBox
        variants={variants}
        mb={{ base: 12, md: 16 }}
        px={{ base: 3, md: 5 }}
      >
        <Text
          color={MUTED}
          fontSize={{
            base: "md",
            md: "lg",
          }}
          maxW="2xl"
          lineHeight="2"
        >
          ما زنجیره تامین شما را با محصولات دارای گواهینامه بین‌المللی و تضمین
          اصالت کالا، به شکلی ناگسستنی تقویت می‌کنیم.
        </Text>
      </MotionBox>
    </>
  );
}
