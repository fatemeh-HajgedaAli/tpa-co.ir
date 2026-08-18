import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";

import { Mail, Phone, MapPin, Instagram } from "lucide-react";

import { footerContact } from "./footerData";

const INK = "#edeee8";
const MUTED = "#8a94a3";
const MUTED_DIM = "#5b6472";
const BLUE = "#4fb3c7";
const LINE = "rgba(237,238,232,0.10)";
const MONO = "'JetBrains Mono', monospace";

const ICON_MAP = {
  EMAIL: Mail,
  PHONE: Phone,
  LOCATION: MapPin,
};

export default function FooterContact() {
  return (
    <VStack align="start" spacing={5}>
      <Text
        fontFamily={MONO}
        fontSize="10px"
        letterSpacing="2px"
        color={MUTED_DIM}
      >
        CONTACT
      </Text>

      {footerContact.map((item) => {
        const ItemIcon = ICON_MAP[item.label];

        const content = (
          <HStack align="flex-start" spacing={3} w="full" role="group">
            <Box
              w="38px"
              h="38px"
              flexShrink={0}
              display="flex"
              alignItems="center"
              justifyContent="center"
              border="1px solid"
              borderColor={LINE}
              transition="all 0.25s"
              _groupHover={{
                borderColor: BLUE,
                bg: "rgba(79,179,199,0.06)",
              }}
            >
              <Icon as={ItemIcon} boxSize={4} color={BLUE} />
            </Box>

            <VStack align="start" spacing={1} minW={0}>
              <Text
                fontFamily={MONO}
                fontSize="8px"
                letterSpacing="1.5px"
                color={MUTED_DIM}
              >
                {item.label}
              </Text>

              <Text
                color={MUTED}
                fontSize="sm"
                lineHeight="1.8"
                transition="color 0.25s"
                _groupHover={{
                  color: INK,
                }}
                wordBreak="break-word"
              >
                {item.value}
              </Text>
            </VStack>
          </HStack>
        );

        if (!item.href) {
          return <Box key={item.label}>{content}</Box>;
        }

        return (
          <Box
            key={item.label}
            as="a"
            href={item.href}
            w="full"
            _hover={{
              textDecoration: "none",
            }}
          >
            {content}
          </Box>
        );
      })}

      {/* Social */}
      <HStack pt={2}>
        <Box
          as="a"
          href="#"
          w="38px"
          h="38px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="1px solid"
          borderColor={LINE}
          color={MUTED}
          transition="all 0.25s"
          _hover={{
            color: BLUE,
            borderColor: BLUE,
            bg: "rgba(79,179,199,0.06)",
          }}
          aria-label="Instagram"
        >
          <Icon as={Instagram} boxSize={4} />
        </Box>
      </HStack>
    </VStack>
  );
}
