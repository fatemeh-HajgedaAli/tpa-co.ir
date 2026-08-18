import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";

import { Factory } from "lucide-react";

import Punches from "./Punches";
import { ICON_MAP } from "./portfolioData";
import { PORTFOLIO_TOKENS } from "./portfolioConstants";

const { INK, MUTED, MUTED_DIM, BLUE, HEAT, LINE, LINE_STRONG, MONO } =
  PORTFOLIO_TOKENS;

export default function PortfolioCard({ item }) {
  const ItemIcon = ICON_MAP[item.icon] || Factory;

  return (
    <Box
      position="relative"
      h={{ base: "auto", md: "300px" }}
      py={7}
      px={8}
      ps={12}
      bg="rgba(24, 20, 18, 0.6)"
      backdropFilter="blur(10px)"
      border="1px dashed"
      borderColor={LINE_STRONG}
      transition="all 0.3s"
      role="group"
      _hover={{
        borderColor: HEAT,
        transform: "translateY(-4px)",
      }}
    >
      <Punches />

      <VStack align="start" spacing={4} h="full" position="relative" zIndex={1}>
        <Flex w="full" justify="space-between" align="flex-start">
          <Text
            fontFamily={MONO}
            fontSize="10px"
            letterSpacing="1.5px"
            color={MUTED_DIM}
          >
            LOG №{item.id}
          </Text>

          <Text color={HEAT} fontStyle="italic" fontWeight={700} fontSize="md">
            {item.year}
          </Text>
        </Flex>

        <IconBadge icon={ItemIcon} />

        <Heading size="md" color={INK} fontWeight={700}>
          {item.title}
        </Heading>

        <Text color={MUTED} fontSize="sm" lineHeight="1.8" noOfLines={3}>
          {item.desc}
        </Text>

        <CardFooter type={item.type} />
      </VStack>
    </Box>
  );
}

function IconBadge({ icon }) {
  return (
    <Flex
      w="46px"
      h="46px"
      align="center"
      justify="center"
      borderRadius="full"
      border="1px solid"
      borderColor={HEAT}
      color={HEAT}
      transform="rotate(-6deg)"
      _groupHover={{
        borderColor: BLUE,
        color: BLUE,
        transform: "rotate(0deg)",
      }}
      transition="all 0.35s ease"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        inset: "4px",
        border: "1px solid",
        borderColor: "inherit",
        borderRadius: "full",
        opacity: 0.5,
      }}
    >
      <Icon as={icon} w={5} h={5} />
    </Flex>
  );
}

function CardFooter({ type }) {
  return (
    <Flex
      mt="auto"
      w="full"
      justify="space-between"
      align="center"
      pt={4}
      borderTop="1px dashed"
      borderColor={LINE}
    >
      <Text
        fontFamily={MONO}
        fontSize="11px"
        color={MUTED_DIM}
        letterSpacing="0.5px"
      >
        {type}
      </Text>

      <HStack spacing={1}>
        <Box w="4px" h="4px" borderRadius="full" bg={LINE_STRONG} />

        <Box w="16px" h="1px" bg={LINE_STRONG} />

        <Box w="4px" h="4px" borderRadius="full" bg={HEAT} />
      </HStack>
    </Flex>
  );
}
