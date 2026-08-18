import {
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import { ArrowUpLeft, Factory } from "lucide-react";
import contactUs from "../../image/contactUs.jpg";
const INK = "#edeee8";
const MUTED = "#8a94a3";
const BLUE = "#4fb3c7";
const LINE_STRONG = "rgba(237,238,232,0.22)";
const MONO = "'JetBrains Mono', monospace";

const cornerPositions = [
  { top: "18px", right: "18px" },
  { top: "18px", left: "18px" },
  { bottom: "18px", right: "18px" },
  { bottom: "18px", left: "18px" },
];

export default function ContactImagePanel() {
  return (
    <Box
      position="relative"
      minH={{ base: "420px", md: "560px" }}
      overflow="hidden"
      border="1px solid"
      borderColor={LINE_STRONG}
      role="group"
    >
      <Image
        src={contactUs}
        alt="تجهیزات و صنایع فولاد"
        position="absolute"
        inset="0"
        w="100%"
        h="100%"
        objectFit="cover"
        filter="saturate(0.85) contrast(1.05)"
        transition="transform 0.8s ease"
        _groupHover={{
          transform: "scale(1.05)",
        }}
      />

      {/* Image overlay */}
      <Box
        position="absolute"
        inset="0"
        bgGradient="
          linear(
            to-t,
            rgba(10,13,16,0.95),
            rgba(10,13,16,0.15) 55%,
            rgba(10,13,16,0.4)
          )
        "
      />

      {/* Cyan accent */}
      <Box
        position="absolute"
        inset="0"
        bgGradient="
          linear(
            120deg,
            rgba(79,179,199,0.22),
            transparent 55%
          )
        "
        mixBlendMode="screen"
      />

      {/* Corner marks */}
      {cornerPositions.map((position, index) => (
        <Box
          key={index}
          position="absolute"
          w="18px"
          h="18px"
          opacity={0.6}
          {...position}
        >
          <svg viewBox="0 0 24 24" width="100%" height="100%">
            <path d="M12 0V24M0 12H24" stroke={INK} strokeWidth="1" />
          </svg>
        </Box>
      ))}

      {/* Coordinates */}
      <HStack
        position="absolute"
        top={8}
        insetInlineStart={8}
        spacing={2}
        bg="rgba(10,13,16,0.7)"
        border="1px solid"
        borderColor={LINE_STRONG}
        px={3}
        py={1.5}
      >
        <Icon as={ArrowUpLeft} color={BLUE} boxSize={3.5} />

        <Text
          fontFamily={MONO}
          fontSize="10px"
          letterSpacing="0.5px"
          color={INK}
        >
          ۳۲.۶۵۴۶° N, ۵۱.۶۶۸۰° E
        </Text>
      </HStack>
    </Box>
  );
}
