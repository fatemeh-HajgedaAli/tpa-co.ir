import { Flex, IconButton } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { PORTFOLIO_TOKENS } from "./portfolioConstants";

const { INK, HEAT, LINE_STRONG } = PORTFOLIO_TOKENS;

export default function PortfolioControls() {
  const buttonStyle = {
    variant: "outline",
    color: INK,
    borderRadius: "0",
    borderColor: LINE_STRONG,

    _hover: {
      bg: "whiteAlpha.100",
      borderColor: HEAT,
      color: HEAT,
    },
  };

  return (
    <Flex
      justify="flex-end"
      mb={6}
      gap={3}
      display={{ base: "none", md: "flex" }}
    >
      <IconButton
        id="p-btn"
        aria-label="Previous slide"
        icon={<ChevronRight size={18} />}
        {...buttonStyle}
      />

      <IconButton
        id="n-btn"
        aria-label="Next slide"
        icon={<ChevronLeft size={18} />}
        {...buttonStyle}
      />
    </Flex>
  );
}
