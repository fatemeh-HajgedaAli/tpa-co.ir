import { SimpleGrid, Text, Flex } from "@chakra-ui/react";

import ProductCard from "./ProductCard";

import { MotionBox, itemVariants } from "../styles/productsAnimations";

import { TOKENS } from "../productsConfig";

export default function ProductGrid({ products }) {
  if (products.length === 0) {
    return <EmptyProducts />;
  }

  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
        lg: 3,
      }}
      spacing={7}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
}

function EmptyProducts() {
  return (
    <Flex direction="column" align="center" py={24} gap={3}>
      <Text
        fontFamily={TOKENS.MONO}
        fontSize="12px"
        letterSpacing="1.5px"
        color={TOKENS.MUTED_DIM}
      >
        NO RECORDS FOUND
      </Text>

      <Text color={TOKENS.MUTED} fontSize="lg">
        محصولی با این مشخصات یافت نشد.
      </Text>
    </Flex>
  );
}
