import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { HERO_COLORS, HERO_DATA } from "./heroData";

const MotionBox = motion.create(Box);

export default function HeroHeader() {
  const { ink, blue } = HERO_COLORS;
  const { company, title } = HERO_DATA;

  return (
    <VStack
      align={{ base: "center", lg: "start" }}
      textAlign={{ base: "center", lg: "right" }}
      spacing={0}
    >
      {/* EYEBROW */}

      <MotionBox
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.05 }}
        display="inline-flex"
        alignItems="center"
        gap={3}
        px={4}
        py={2}
        border="1px solid"
        borderColor="rgba(79,179,199,0.28)"
        borderRadius="3px"
        bg="rgba(79,179,199,0.06)"
        color={blue}
        fontSize={{ base: "10px", sm: "11px" }}
        letterSpacing="1px"
        mb={4}
        mt={{ base: "-28px", lg: "-50px" }}
      >
        <Box
          w="5px"
          h="5px"
          borderRadius="full"
          bg={blue}
          boxShadow={`0 0 8px ${blue}`}
        />

        {company}
      </MotionBox>

      {/* TITLE */}

      <MotionBox
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <Heading
          fontSize={{
            base: "28px",
            sm: "40px",
            md: "6xl",
            lg: "7xl",
          }}
          fontWeight={800}
          lineHeight="1.25"
          color={ink}
        >
          {title.first}
        </Heading>

        <Heading
          fontSize={{
            base: "28px",
            sm: "40px",
            md: "6xl",
            lg: "7xl",
          }}
          fontWeight={800}
          lineHeight="1.25"
          color={blue}
        >
          {title.second}
        </Heading>
      </MotionBox>
    </VStack>
  );
}
