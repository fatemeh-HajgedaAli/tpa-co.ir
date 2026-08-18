import {
  Box,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  chakra,
} from "@chakra-ui/react";

import { Search } from "lucide-react";

import { CATEGORIES, TOKENS } from "../productsConfig";

import { MotionBox, itemVariants } from "../styles/productsAnimations";

export default function ProductsFilter({
  activeCategory,
  setActiveCategory,
  searchTerm,
  setSearchTerm,
}) {
  return (
    <MotionBox variants={itemVariants} mb={14}>
      <Flex
        direction={{
          base: "column",
          md: "row",
        }}
        justify="space-between"
        align={{
          md: "center",
        }}
        gap={5}
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor={TOKENS.LINE}
        py={5}
      >
        <HStack spacing={1} flexWrap="wrap">
          <CategoryButton
            active={activeCategory === "ALL"}
            onClick={() => setActiveCategory("ALL")}
          >
            همه
          </CategoryButton>

          {Object.entries(CATEGORIES).map(([key, category]) => (
            <CategoryButton
              key={key}
              active={activeCategory === key}
              color={category.color}
              onClick={() => setActiveCategory(key)}
            >
              <Box w="6px" h="6px" borderRadius="full" bg={category.color} />

              {category.label}
            </CategoryButton>
          ))}
        </HStack>

        <InputGroup
          size="md"
          maxW={{
            md: "280px",
          }}
        >
          <InputLeftElement pointerEvents="none">
            <Search size={15} color={TOKENS.MUTED} />
          </InputLeftElement>

          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="جستجو در بانک اطلاعاتی..."
            bg="rgba(255,255,255,0.02)"
            border="1px solid"
            borderColor={TOKENS.LINE_STRONG}
            borderRadius="4px"
            color={TOKENS.INK}
            fontSize="sm"
            _placeholder={{
              color: TOKENS.MUTED_DIM,
            }}
            _focus={{
              borderColor: TOKENS.BLUE,
              boxShadow: `0 0 0 1px ${TOKENS.BLUE}`,
            }}
          />
        </InputGroup>
      </Flex>
    </MotionBox>
  );
}

function CategoryButton({ children, active, color = TOKENS.BLUE, onClick }) {
  return (
    <chakra.button
      onClick={onClick}
      px={4}
      py={2}
      fontFamily={TOKENS.MONO}
      fontSize="12px"
      color={active ? TOKENS.INK : TOKENS.MUTED_DIM}
      borderBottom="2px solid"
      borderColor={active ? color : "transparent"}
      _hover={{
        color: TOKENS.INK,
        borderColor: color,
      }}
      transition="all 0.2s"
      display="flex"
      alignItems="center"
      gap={2}
    >
      {children}
    </chakra.button>
  );
}
