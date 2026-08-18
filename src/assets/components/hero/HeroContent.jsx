import { VStack } from "@chakra-ui/react";

import HeroHeader from "./HeroHeader";
import HeroActions from "./HeroActions";

export default function HeroContent() {
  return (
    <VStack
      align={{ base: "center", lg: "start" }}
      textAlign={{ base: "center", lg: "right" }}
      maxW={{ base: "100%", lg: "640px" }}
      spacing={0}
    >
      <HeroHeader />

      <HeroActions />
    </VStack>
  );
}
