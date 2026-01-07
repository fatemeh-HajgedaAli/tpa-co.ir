import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Icon,
  SimpleGrid,
  Container,
} from "@chakra-ui/react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Settings } from "lucide-react";
import HeroImage from "../image/HeroImage3.jpg";

const MotionBox = motion.create(Box);

export default function HeroSection() {
  const { scrollYProgress } = useScroll();

  /* ===== decorative rotating gear ===== */
  const rotate = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1080]), {
    stiffness: 100,
    damping: 30,
  });

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box position="relative" minH="100vh" dir="rtl">
      {/* ===== DECORATIVE GEAR ===== */}
      <Box
        position="fixed"
        bottom="-40px"
        left="-40px"
        zIndex={10}
        pointerEvents="none"
      >
        <motion.div style={{ rotate }}>
          <Icon
            as={Settings}
            w={{ base: "140px", md: "240px" }}
            h={{ base: "140px", md: "240px" }}
            color="blue.500"
            opacity="0.15"
          />
        </motion.div>
      </Box>

      {/* ===== HERO BACKGROUND ===== */}
      <Box
        position="absolute"
        inset={0}
        bgImage={`url(${HeroImage})`}
        bgSize="cover"
        bgPosition="center"
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          bgGradient: "linear(to-br, blackAlpha.700, blue.900)",
          opacity: 0.85,
        }}
      />

      {/* ===== CONTENT ===== */}
      <Container maxW="7xl" position="relative" zIndex={1}>
        <Flex direction="column" justify="center" minH="100vh" pt={24}>
          <Heading size="3xl" color="white" mb={6}>
            شرکت تجارت{" "}
            <Text as="span" color="blue.400">
              پرگاس آینده
            </Text>
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={12}>
            <Box borderRight="4px solid" borderColor="blue.500" pr={6}>
              <Text fontSize="xl" fontWeight="400" color={"#ffff"}>
                مهندسیِ تأمین، فراتر از مرزها؛ <br />
                پیشران نوآوری در تجهیزات متالورژی و پتروشیمی.
              </Text>
            </Box>
          </SimpleGrid>

          <Button
            bg="blue.600"
            color="white"
            w="fit-content"
            _hover={{ bg: "blue.500" }}
            onClick={() => scrollToSection("products")}
          >
            مشاهده محصولات
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}
