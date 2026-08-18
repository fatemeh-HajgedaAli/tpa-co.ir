import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

import PhoneIcon from "./PhoneIcon";
import TelegramIcon from "./TelegramIcon";

const BLUE = "#4fb3c7";
const INK = "#0f1720";
const MUTED = "#64748b";

export default function WebsiteAdCard({ onClose }) {
  return (
    <Box
      position="absolute"
      bottom="72px"
      right={0}
      w={{ base: "300px", sm: "340px" }}
      overflow="hidden"
      borderRadius="24px"
      border="1px solid"
      borderColor="rgba(255,255,255,0.55)"
      bg="rgba(255,255,255,0.72)"
      backdropFilter="blur(24px)"
      boxShadow="0 25px 60px rgba(15,23,42,0.18)"
      p={5}
      animation="adEnter .35s ease-out"
    >
      {/* Top gradient */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="5px"
        bgGradient="linear(to-r, cyan.400, blue.500, purple.500)"
        opacity={0.85}
      />

      {/* Close */}
      <IconButton
        position="absolute"
        top="12px"
        left="12px"
        zIndex={10}
        aria-label="بستن"
        onClick={onClose}
        icon={<Text fontSize="14px">✕</Text>}
        size="sm"
        minW="28px"
        h="28px"
        borderRadius="full"
        bg="rgba(255,255,255,0.45)"
        border="1px solid"
        borderColor="rgba(255,255,255,0.6)"
        color="slate.600"
        _hover={{
          bg: "white",
          color: INK,
        }}
      />

      {/* Brand */}
      <HStack spacing={3} pt={1}>
        <Flex
          position="relative"
          w="44px"
          h="44px"
          flexShrink={0}
          align="center"
          justify="center"
          borderRadius="16px"
          bg="#0f1720"
          color={BLUE}
          fontFamily="monospace"
          fontSize="11px"
          fontWeight={900}
          boxShadow="0 10px 25px rgba(15,23,42,0.2)"
        >
          <Box
            position="absolute"
            inset={0}
            borderRadius="16px"
            bg={`${BLUE}20`}
            filter="blur(10px)"
          />

          <Text position="relative">{"</>"}</Text>
        </Flex>

        <Box>
          <Text
            fontSize="10px"
            fontWeight={500}
            letterSpacing="2px"
            color="slate.500"
          >
            WEB DEVELOPMENT
          </Text>

          <Text
            mt="2px"
            fontSize="14px"
            fontWeight={900}
            letterSpacing="1px"
            color={INK}
          >
            ASK
            <Box as="span" color="cyan.600">
              .DEV
            </Box>
          </Text>
        </Box>
      </HStack>

      {/* Title */}
      <Heading
        mt={4}
        fontSize={{ base: "16px", sm: "18px" }}
        lineHeight="2"
        fontWeight={800}
        color={INK}
      >
        <Box
          as="span"
          bgGradient="linear(to-r, blue.600, cyan.600, purple.600)"
          bgClip="text"
          color="transparent"
        >
          وب‌سایت حرفه‌ای
        </Box>
      </Heading>

      <Box
        mt={1}
        w="100%"
        h="2px"
        bgGradient="linear(to-r, blue.400, purple.500)"
        opacity={0.4}
      />

      {/* Description */}
      <Text
        mt={3}
        fontSize="12px"
        lineHeight="1.9"
        fontWeight={500}
        color={MUTED}
      >
        طراحی وب‌سایت حرفه‌ای و مدرن، متناسب با برند و نیازهای کسب‌وکار شما با
        تجربه کاربری سریع و جذاب.
      </Text>

      {/* Contact buttons */}
      <VStack mt={5} spacing={3}>
        {/* Telegram */}
        <Link
          href="https://t.me/Ask_cod"
          target="_blank"
          rel="noopener noreferrer"
          w="full"
          _hover={{ textDecoration: "none" }}
        >
          <Flex
            align="center"
            justify="space-between"
            p={3}
            borderRadius="16px"
            border="1px solid"
            borderColor="rgba(56,189,248,0.4)"
            bgGradient="linear(to-r, blue.400, blue.900)"
            color="white"
            boxShadow="0 10px 25px rgba(14,165,233,0.2)"
            transition="all .3s"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "0 15px 30px rgba(14,165,233,0.25)",
            }}
          >
            <HStack spacing={3}>
              <Flex
                w="36px"
                h="36px"
                align="center"
                justify="center"
                borderRadius="12px"
                bg="whiteAlpha.300"
              >
                <TelegramIcon />
              </Flex>

              <Box>
                <Text fontSize="10px" color="whiteAlpha.800">
                  مشاوره و سفارش
                </Text>

                <Text fontSize="12px" fontWeight={700}>
                  گفتگو در تلگرام
                </Text>
              </Box>
            </HStack>

            <Text
              fontSize="18px"
              transition="transform .3s"
              _groupHover={{ transform: "translateX(-4px)" }}
            >
              ←
            </Text>
          </Flex>
        </Link>

        {/* Phone */}
        <Link
          href="tel:+989351680236"
          w="full"
          _hover={{ textDecoration: "none" }}
        >
          <Flex
            align="center"
            justify="space-between"
            p={3}
            borderRadius="16px"
            border="1px solid"
            borderColor="rgba(255,255,255,0.65)"
            bg="rgba(255,255,255,0.5)"
            backdropFilter="blur(12px)"
            transition="all .3s"
            _hover={{
              bg: "rgba(255,255,255,0.8)",
              transform: "translateY(-2px)",
            }}
          >
            <HStack spacing={3}>
              <Flex
                w="36px"
                h="36px"
                align="center"
                justify="center"
                borderRadius="12px"
                border="1px solid"
                borderColor="whiteAlpha.700"
                bg="whiteAlpha.700"
                color="blue.500"
              >
                <PhoneIcon />
              </Flex>

              <Box>
                <Text fontSize="10px" color="slate.500">
                  تماس مستقیم
                </Text>

                <Text dir="ltr" fontSize="12px" fontWeight={700} color={INK}>
                  0935 168 0236
                </Text>
              </Box>
            </HStack>

            <Text fontSize="18px" color="blue.500">
              ←
            </Text>
          </Flex>
        </Link>
      </VStack>

      {/* Footer */}
      <Flex mt={4} align="center" justify="center" gap={2}>
        <Box
          w="6px"
          h="6px"
          borderRadius="full"
          bg="green.400"
          boxShadow="0 0 8px rgba(72,187,120,.5)"
        />

        <Text fontSize="10px" fontWeight={500} color="slate.500">
          آماده شروع یک پروژه حرفه‌ای
        </Text>
      </Flex>

      <style jsx>{`
        @keyframes adEnter {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </Box>
  );
}
