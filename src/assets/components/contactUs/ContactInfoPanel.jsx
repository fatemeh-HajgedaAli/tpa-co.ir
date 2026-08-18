import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

import StatusDot from "./StatusDot";
import ContactItem from "./ContactItem";

const INK = "#edeee8";
const MUTED = "#8a94a3";
const MUTED_DIM = "#5b6472";
const BLUE = "#4fb3c7";
const LINE = "rgba(237,238,232,0.10)";
const LINE_STRONG = "rgba(237,238,232,0.22)";
const MONO = "'JetBrains Mono', monospace";

export default function ContactInfoPanel({ contactInfo }) {
  return (
    <Box
      p={{ base: 6, md: 9 }}
      bg="rgba(255,255,255,0.02)"
      border="1px solid"
      borderColor={LINE_STRONG}
      position="relative"
      overflow="hidden"
    >
      {/* Subtle glow */}
      <Box
        position="absolute"
        top="-100px"
        right="-100px"
        w="250px"
        h="250px"
        bg={BLUE}
        opacity={0.05}
        filter="blur(90px)"
        borderRadius="full"
        pointerEvents="none"
      />

      <VStack
        align="stretch"
        spacing={7}
        position="relative"
        zIndex={2}
      >
        {/* Header */}
        <Flex
          justify="space-between"
          align="flex-start"
          gap={4}
        >
          <Box>
            <Text
              color={BLUE}
              fontFamily={MONO}
              fontSize="11px"
              fontWeight={700}
              letterSpacing="2px"
              mb={3}
            >
              GET IN TOUCH
            </Text>

            <Heading
              color={INK}
              fontSize={{
                base: "2xl",
                md: "3xl",
              }}
              fontWeight={800}
            >
              اطلاعات تماس
            </Heading>
          </Box>

          <HStack
            spacing={2}
            border="1px solid"
            borderColor={LINE_STRONG}
            px={3}
            py={1.5}
            flexShrink={0}
          >
            <StatusDot live />

            <Text
              fontFamily={MONO}
              fontSize="10px"
              letterSpacing="1px"
              color={MUTED}
            >
              ACTIVE
            </Text>
          </HStack>
        </Flex>

        {/* Description */}
        <Text
          color={MUTED}
          fontSize="sm"
          lineHeight="2"
        >
          برای ارتباط مستقیم با مجموعه تجارت پرگاس آینده از
          راه‌های زیر با ما در تماس باشید.
        </Text>

        <Box
          borderTop="1px solid"
          borderColor={LINE}
        />

        {/* Contact items */}
        <VStack
          align="stretch"
          spacing={3}
        >
          {contactInfo.map((item, index) => (
            <ContactItem
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </VStack>

        {/* Bottom status */}
        <Box
          p={5}
          border="1px solid"
          borderColor={BLUE}
          borderOpacity={0.4}
          bg="rgba(79,179,199,0.06)"
        >
          <HStack
            justify="space-between"
            align="center"
          >
            <HStack spacing={3}>
              <StatusDot live />

              <VStack
                align="start"
                spacing={0.5}
              >
                <Text
                  color={INK}
                  fontWeight={700}
                  fontSize="sm"
                >
                  آماده همکاری هستیم
                </Text>

                <Text
                  fontFamily={MONO}
                  color={MUTED_DIM}
                  fontSize="10px"
                  letterSpacing="0.5px"
                >
                  AVAILABLE FOR NEW PROJECTS
                </Text>
              </VStack>
            </HStack>

            <Flex
              w="38px"
              h="38px"
              align="center"
              justify="center"
              border="1px solid"
              borderColor={BLUE}
              flexShrink={0}
            >
              <Text
                color={BLUE}
                fontFamily={MONO}
                fontSize="14px"
              >
                ↗
              </Text>
            </Flex>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
}