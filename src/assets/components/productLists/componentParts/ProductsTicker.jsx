import { Box, Flex, HStack, Text } from "@chakra-ui/react";

import { motion } from "framer-motion";

import { CATEGORIES, TOKENS, codeFor } from "../productsConfig";

export default function ProductsTicker({ products }) {
  const items = [...products, ...products];

  return (
    <>
      {/* Hazard */}
      <Box
        h="6px"
        w="full"
        position="relative"
        zIndex={2}
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              -45deg,
              ${TOKENS.AMBER} 0 10px,
              #0e1216 10px 20px
            )
          `,
          opacity: 0.55,
        }}
      />

      {/* Ticker */}
      <Box
        position="relative"
        zIndex={2}
        overflow="hidden"
        borderBottom="1px solid"
        borderColor={TOKENS.LINE}
        py={2.5}
      >
        <Flex
          as={motion.div}
          style={{
            animation: "tickerScroll 38s linear infinite",
          }}
          whiteSpace="nowrap"
          width="max-content"
        >
          {items.map((product, index) => (
            <HStack key={index} spacing={3} me={10} flexShrink={0}>
              <Box
                w="4px"
                h="4px"
                borderRadius="full"
                bg={CATEGORIES[product.cat].color}
              />

              <Text
                fontFamily={TOKENS.MONO}
                fontSize="11px"
                letterSpacing="0.5px"
                color={TOKENS.MUTED_DIM}
              >
                {codeFor(product.id)} — {product.name}
              </Text>
            </HStack>
          ))}
        </Flex>
      </Box>
    </>
  );
}
