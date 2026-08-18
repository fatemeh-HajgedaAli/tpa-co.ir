import { Box, Button, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import { HERO_COLORS, HERO_DATA } from "./heroData";

const MotionBox = motion.create(Box);

export default function HeroActions() {
  const { ink, muted, blue } = HERO_COLORS;
  const { description } = HERO_DATA;

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* LINE */}

      <MotionBox
        initial={{ width: 0 }}
        animate={{ width: "96px" }}
        transition={{ duration: 0.9, delay: 0.5 }}
        h="2px"
        bgGradient={`linear(to-r, ${blue}, transparent)`}
        my={{ base: 5, md: 7 }}
      />

      {/* DESCRIPTION */}

      <MotionBox
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        display="flex"
        gap={4}
        maxW="520px"
        textAlign={{ base: "center", lg: "right" }}
      >
        <Box
          display={{ base: "none", lg: "block" }}
          flexShrink={0}
          w="3px"
          borderRadius="full"
          bgGradient={`linear(to-b, ${blue}, transparent)`}
        />

        <Text
          color={muted}
          fontSize={{ base: "14px", md: "lg" }}
          lineHeight={{ base: "1.8", md: "2.05" }}
        >
          {description.first}
          <br />
          <Box as="span" color={ink} fontWeight={600}>
            {description.highlight}
          </Box>{" "}
          {description.last}
        </Text>
      </MotionBox>

      {/* BUTTONS */}

      <MotionBox
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        display="flex"
        justifyContent={{ base: "center", lg: "flex-start" }}
        gap={3}
        w="100%"
        flexWrap="wrap"
        mt={{ base: 6, md: 10 }}
      >
        {/* PRODUCTS */}

        <Button
          h={{ base: "46px", md: "52px" }}
          px={{ base: 5, md: 7 }}
          w={{ base: "100%", sm: "auto" }}
          borderRadius="4px"
          bg={blue}
          color="#06181c"
          fontSize="14px"
          fontWeight={700}
          boxShadow={`0 10px 30px rgba(79,179,199,0.22)`}
          rightIcon={<ArrowLeft size={17} />}
          onClick={() => scrollToSection("products")}
          _hover={{
            bg: "#63c2d4",
            transform: "translateY(-3px)",
          }}
          transition="all .25s"
        >
          مشاهده محصولات
        </Button>

        {/* CONTACT */}

        <Button
          h={{ base: "46px", md: "52px" }}
          px={{ base: 5, md: 7 }}
          w={{ base: "100%", sm: "auto" }}
          borderRadius="4px"
          bg="transparent"
          border="1px solid"
          borderColor="rgba(237,238,232,0.22)"
          color={ink}
          fontSize="14px"
          fontWeight={600}
          onClick={() => scrollToSection("contact")}
          _hover={{
            borderColor: blue,
            bg: "rgba(79,179,199,0.06)",
          }}
          transition="all .25s"
        >
          ارتباط با ما
        </Button>
      </MotionBox>
    </>
  );
}
