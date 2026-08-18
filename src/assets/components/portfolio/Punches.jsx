import { Box, VStack } from "@chakra-ui/react";
import { PORTFOLIO_TOKENS } from "./portfolioConstants";

const { LINE_STRONG } = PORTFOLIO_TOKENS;

export default function Punches() {
  return (
    <VStack
      position="absolute"
      insetInlineStart="10px"
      top="10px"
      bottom="10px"
      justify="space-between"
      spacing={0}
      zIndex={2}
    >
      {[0, 1, 2].map((item) => (
        <Box
          key={item}
          w="6px"
          h="6px"
          borderRadius="full"
          border="1px solid"
          borderColor={LINE_STRONG}
        />
      ))}
    </VStack>
  );
}
