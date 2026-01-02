import { Box, Flex, Heading, Text, Button, SimpleGrid } from "@chakra-ui/react";
import { ArrowLeft, Zap, Shield, TrendingUp, Pointer } from "lucide-react";
import { motion } from "framer-motion";

import HeroImage from "../image/HeroImage.jpg";

const MotionBox = motion(Box);

function StatBox({ icon: Icon, value, label, delay = 0 }) {
  return (
    <MotionBox
      bg="whiteAlpha.100"
      border="1px solid"
      borderColor="whiteAlpha.200"
      rounded="2xl"
      p={6}
      textAlign="center"
      backdropFilter="blur(8px)"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(235, 224, 224, 0.25)" }}
      boxShadow="0 2px 8px rgba(0,0,0,0.1)"
      cursor={"Pointer"}
    >
      <Box mb={0}>
        <Icon size={36} color="#FFA500"  />
      </Box>

      <Heading size="xl" color="white" mb={2}>
        {value}
      </Heading>

      <Text color="gray.300" fontWeight="medium">
        {label}
      </Text>
    </MotionBox>
  );
}

function StatsSection() {
  const stats = [
    { icon: Zap, value: "+20", label: "سال تجربه" },
    { icon: Shield, value: "100%", label: "محصولات و کیفیت تضمین شده" },
    { icon: TrendingUp, value: "+500", label: "پروژه موفق" },
  ];

  return (
    <SimpleGrid
      columns={{ base: 1, md: 3 }}
      textAlign="center"
      spacing={6}
      mt={16}
    >
      {stats.map((stat, index) => (
        <StatBox
          key={index}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
          delay={index * 0.3}
        />
      ))}
    </SimpleGrid>
  );
}

export default function HeroSection() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box position="relative" minH="100vh" overflow="hidden">
      {/* background */}
      <Box
        position="absolute"
        inset={0}
        zIndex={0}
        bgImage={`url(${HeroImage})`}
        bgSize="cover"
        bgPosition="center"
        bgRepeat={"no-repeat"}
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          bgGradient: "linear(to-br, blackAlpha.700, blue.800)",
        }}
      />

      {/* main content */}
      <Flex
        position="relative"
        zIndex={1}
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
        px={6}
        py={20}
        mt={12}
      >
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Text
            color="blue.300"
            bg="orange.400Alpha.200"
            px={4}
            py={2}
            rounded="full"
            fontSize="sm"
            mb={6}
            display="inline-block"
          >
            پیشرو در صنعت فولاد
          </Text>

          <Heading size="3xl" color="white" mb={6}>
            شرکت <br />
            <Text as="span" color="blue.300">
              تجارت پرگاس آینده
            </Text>
          </Heading>

          <Text fontSize="xl" color="gray.300" maxW="3xl" mb={10}>
            تولیدکننده محصولات فولادی با بیش از ۲۰ سال تجربه در صنعت ساختمان
          </Text>

          <Flex gap={4} justify="center" mb={16} wrap="wrap">
            <Button
              variant="outline"
              color="blue.300"
              size="lg"
              onClick={() => scrollToSection("products")}
              _hover={{
                bg: "blue.300",
                color: "white",
                transform: "scale(1.05)",
                boxShadow: "0 4px 12px rgba(255, 252, 252, 0.32)",
              }}
            >
              مشاهده محصولات
            </Button>
          </Flex>
        </MotionBox>

        {/* بخش آمار */}
        <StatsSection />
      </Flex>
    </Box>
  );
}
