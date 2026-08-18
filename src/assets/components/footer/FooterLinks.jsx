import { Box, Text, VStack } from "@chakra-ui/react";

import { footerLinks } from "./footerData";

const INK = "#edeee8";
const MUTED = "#8a94a3";
const MUTED_DIM = "#5b6472";
const BLUE = "#4fb3c7";
const MONO = "'JetBrains Mono', monospace";

export default function FooterLinks() {
  return (
    <VStack align="start" spacing={4}>
      <Text
        fontFamily={MONO}
        fontSize="10px"
        letterSpacing="2px"
        color={MUTED_DIM}
        mb={1}
      >
        NAVIGATION
      </Text>

      {footerLinks.map((link, index) => (
        <Box
          key={link.href}
          as="a"
          href={link.href}
          display="flex"
          alignItems="center"
          gap={3}
          role="group"
          transition="all 0.25s ease"
          _hover={{
            textDecoration: "none",
            transform: "translateX(-4px)",
          }}
        >
          <Text
            fontFamily={MONO}
            fontSize="9px"
            color={MUTED_DIM}
            _groupHover={{
              color: BLUE,
            }}
          >
            0{index + 1}
          </Text>

          <Box
            w="16px"
            h="1px"
            bg="rgba(237,238,232,0.14)"
            transition="all 0.25s"
            _groupHover={{
              w: "24px",
              bg: BLUE,
            }}
          />

          <Text
            fontSize="sm"
            color={MUTED}
            transition="color 0.25s"
            _groupHover={{
              color: INK,
            }}
          >
            {link.label}
          </Text>
        </Box>
      ))}
    </VStack>
  );
}
