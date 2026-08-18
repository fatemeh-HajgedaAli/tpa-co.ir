import { Box } from "@chakra-ui/react";
import { BLUE, ORANGE } from "./aboutConstants";

export default function AboutBackground() {
  return (
    <>
      <Box
        position="absolute"
        top="-250px"
        right="-180px"
        w="650px"
        h="650px"
        bg={BLUE}
        opacity={0.07}
        filter="blur(160px)"
        borderRadius="full"
        pointerEvents="none"
      />

      <Box
        position="absolute"
        bottom="-300px"
        left="-200px"
        w="600px"
        h="600px"
        bg={ORANGE}
        opacity={0.035}
        filter="blur(170px)"
        borderRadius="full"
        pointerEvents="none"
      />
    </>
  );
}
