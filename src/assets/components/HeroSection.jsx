import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Icon,
  SimpleGrid,
  Container,
  VStack,
} from "@chakra-ui/react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Settings } from "lucide-react";
import HeroImage from "../image/HeroImage3.jpg";

const MotionBox = motion.create(Box);

export default function HeroSection() {
  const { scrollYProgress } = useScroll();

  const rawRotation = useTransform(scrollYProgress, [0, 1], [0, 1080]);
  const rotate = useSpring(rawRotation, { stiffness: 100, damping: 30 });

  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "80vh"]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box position="relative" minH="100vh" dir="rtl">
      {/* --- SCROLL-GEAR INDICATOR --- */}
      <Box
        position="fixed"
        bottom="-40px"
        left="-40px"
        zIndex={100}
        pointerEvents="none"
      >
        <motion.div style={{ rotate }}>
          <Icon
            as={Settings}
            w={{ base: "150px", md: "250px" }}
            h={{ base: "150px", md: "250px" }}
            color="blue.500"
            opacity="0.2"
            filter="drop-shadow(0 0 20px rgba(49, 130, 206, 0.4))"
          />
        </motion.div>
      </Box>
      {/* ---  Hero --- */}
      <Box
        position="absolute"
        inset={0}
        zIndex={0}
        bgImage={`url(${HeroImage})`}
        bgSize="cover"
        bgPosition="center"
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          bgGradient: "linear(to-br, blackAlpha.800, blue.900)",
          opacity: 0.85,
        }}
      />

      <Container maxW="7xl" h="full" position="relative" zIndex={1}>
        <Flex direction="column" justify="center" minH="100vh" pt={20}>
          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Text color="blue.300" fontWeight={800} mb={4} fontSize="sm">
              ESTABLISHED IN 2004
            </Text>
            <Heading size="3xl" color="white" mb={10} fontWeight={900}>
              شرکت تجارت {""}
              <Text as="span" color="blue.400">
                پرگاس آینده
              </Text>
            </Heading>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={12}>
            <Box borderRight="4px solid" borderColor="blue.500" pr={6}>
              <Text
                color="white"
                fontSize="xl"
                fontWeight="bold"
                lineHeight="1.8"
              >
                مهندسیِ تامین، فراتر از مرزها؛ <br />پیشران 
                نوآوری در تجهیزات متالورژی و پتروشیمی.{" "}
              </Text>
            </Box>
          </SimpleGrid>

          <Button
            size="lg"
            bg="blue.600"
            color="white"
            w="fit-content"
            onClick={() => scrollToSection("products")}
          >
            مشاهده محصولات
          </Button>
        </Flex>
      </Container>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        ::-webkit-scrollbar { width: 0px; background: transparent; }
      `,
        }}
      />
    </Box>
  );
}
