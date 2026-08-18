import {
  Box,
  Flex,
  HStack,
  Icon,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";

import StatusDot from "./StatusDot";

const INK = "#edeee8";
const MUTED = "#8a94a3";
const MUTED_DIM = "#5b6472";
const BLUE = "#4fb3c7";

const LINE = "rgba(237,238,232,0.08)";
const LINE_STRONG = "rgba(237,238,232,0.16)";

const MONO = "'JetBrains Mono', monospace";

export default function ContactItem({ item, index }) {
  const content = (
    <HStack
      position="relative"
      p={{ base: 4, md: 5 }}
      spacing={4}
      align="flex-start"
      overflow="hidden"
      border="1px solid"
      borderColor={LINE}
      bg="rgba(255,255,255,0.015)"
      transition="all 0.35s cubic-bezier(.2,.8,.2,1)"
      _hover={{
        borderColor: "rgba(79,179,199,0.45)",
        bg: "rgba(79,179,199,0.035)",
        transform: "translateX(-5px)",
        boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
      }}
      cursor={item.href ? "pointer" : "default"}
      role={item.href ? "group" : undefined}
    >
      {/* Left accent */}
      <Box
        position="absolute"
        top="0"
        bottom="0"
        left="0"
        w="2px"
        bg={BLUE}
        transform="scaleY(0)"
        transformOrigin="center"
        transition="transform 0.35s ease"
        _groupHover={{
          transform: "scaleY(1)",
        }}
      />

      {/* Top technical line */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        h="1px"
        bg="linear-gradient(90deg, transparent, rgba(79,179,199,0.35), transparent)"
        opacity={0}
        transition="opacity 0.35s"
        _groupHover={{
          opacity: 1,
        }}
      />

      {/* Icon */}
      <Flex
        position="relative"
        flexShrink={0}
        w={{ base: "44px", md: "48px" }}
        h={{ base: "44px", md: "48px" }}
        align="center"
        justify="center"
        border="1px solid"
        borderColor="rgba(79,179,199,0.22)"
        bg="rgba(79,179,199,0.025)"
        boxShadow="inset 0 0 20px rgba(79,179,199,0.025)"
        transition="all 0.35s cubic-bezier(.2,.8,.2,1)"
        _groupHover={{
          borderColor: BLUE,
          bg: "rgba(79,179,199,0.08)",
          boxShadow: "0 0 20px rgba(79,179,199,0.10)",
          transform: "translateY(-2px)",
        }}
      >
        <Icon
          as={item.icon}
          color={BLUE}
          boxSize={6}
          transition="transform 0.35s ease"
          _groupHover={{
            transform: "scale(1.1)",
          }}
        />
      </Flex>

      {/* Content */}
      <VStack align="start" spacing={1.5} minW={0} flex={1}>
        {/* Meta */}
        <HStack spacing={2} w="100%" justify="flex-start">
          <Text
            fontFamily={MONO}
            fontSize="9px"
            letterSpacing="1.5px"
            color={MUTED_DIM}
          >
            PORT {String(index + 1).padStart(2, "0")}
          </Text>

          <Box
            w="3px"
            h="3px"
            borderRadius="full"
            bg={MUTED_DIM}
            opacity={0.6}
          />

          <Text color={MUTED} fontSize="xs" fontWeight={500}>
            {item.title}
          </Text>
        </HStack>

        {/* Value */}
        <Text
          color={INK}
          fontSize={{ base: "sm", md: "md" }}
          fontWeight={600}
          lineHeight="1.8"
          wordBreak="break-word"
          transition="color 0.3s"
          _groupHover={{
            color: "#ffffff",
          }}
        >
          {item.value}
        </Text>
      </VStack>

      {/* Status */}
      <Flex align="center" justify="center" pt={1}>
        <StatusDot live={item.live} />
      </Flex>

      {/* Corner mark */}
      <Box
        position="absolute"
        bottom="0"
        right="0"
        w="9px"
        h="9px"
        borderTop="1px solid"
        borderLeft="1px solid"
        borderColor="transparent"
        transition="all 0.35s ease"
        _groupHover={{
          borderColor: BLUE,
        }}
      />
    </HStack>
  );

  if (!item.href) {
    return <Box>{content}</Box>;
  }

  return (
    <chakra.a
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      _hover={{
        textDecoration: "none",
      }}
    >
      {content}
    </chakra.a>
  );
}
