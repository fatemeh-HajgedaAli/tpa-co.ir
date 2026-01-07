import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  HStack,
  Text,
  Link,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <Box
      bg="#ffff"
      color="blue.900"
      pt={20}
      pb={10}
      mt={0}
      dir="rtl"
      position="relative"
      overflow="hidden"
    >
      {/* Decorative glow */}
      <Box
        position="absolute"
        top="-120px"
        right="-120px"
        w="300px"
        h="300px"
        bg="blue.600"
        filter="blur(160px)"
        opacity="0.5"
      />

      <Container maxW="7xl" position="relative">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={12}>
          {/* ===== BRAND ===== */}
          <VStack align="start" spacing={4}>
            <Text fontSize="2xl" fontWeight="700">
              تجارت{" "}
              <Text as="span" color="blue.400" >
                پرگاس آینده
              </Text>
            </Text>
            <Text fontSize="sm" color="gray.500" lineHeight="tall">
              شرکت مهندسی تأمین و بازرگانی بین‌المللی فعال در حوزه تجهیزات
              متالورژی، پتروشیمی و صنایع سنگین.
            </Text>
          </VStack>

          {/* ===== QUICK LINKS ===== */}
          <VStack align="start" spacing={3}>
            <Text fontWeight="bold" mb={2}>
              دسترسی سریع
            </Text>
            <Link href="#about" color="gray.400" _hover={{ color: "blue.400" }}>
              درباره ما
            </Link>
            <Link
              href="#products"
              color="gray.400"
              _hover={{ color: "blue.400" }}
            >
              محصولات
            </Link>
            <Link
              href="#services"
              color="gray.400"
              _hover={{ color: "blue.400" }}
            >
              خدمات
            </Link>
            <Link
              href="#contact"
              color="gray.400"
              _hover={{ color: "blue.400" }}
            >
              تماس با ما
            </Link>
          </VStack>

          {/* ===== CONTACT ===== */}
          <VStack align="start" spacing={4}>
            <Text fontWeight="bold" mb={2}>
              ارتباط با ما
            </Text>

            <HStack spacing={3}>
              <Icon as={Mail} color="blue.400" />
              <Text fontSize="sm" color="gray.400">
                info@tpa-co.ir
              </Text>
            </HStack>

            <HStack spacing={3}>
              <Icon as={Phone} color="blue.400" />
              <Text fontSize="sm" color="gray.400">
                09134602129{" "}
              </Text>
            </HStack>

            <HStack spacing={3}>
              <Icon as={MapPin} color="blue.400" />
              <Text fontSize="sm" color="gray.400">
                اصفهان ، خیابان شیخ کلینی ، خیابان رسالت جنوبی ، کوچه 5 ، پلاک43{" "}
              </Text>
            </HStack>

            {/* Social */}
            <HStack spacing={4} pt={2}>
              <Link href="#" _hover={{ color: "blue.400" }}>
                <Icon as={Linkedin} />
              </Link>
              <Link href="#" _hover={{ color: "blue.400" }}>
                <Icon as={Instagram} />
              </Link>
            </HStack>
          </VStack>
        </SimpleGrid>

        <Divider my={10} borderColor="blue.900" />

        {/* ===== COPYRIGHT ===== */}
        <Text
          fontSize="xs"
          textAlign="center"
          color="gray.500"
          letterSpacing="1px"
        >
          © {new Date().getFullYear()} TPA-CO.IR — کلیه حقوق محفوظ است
        </Text>
      </Container>
    </Box>
  );
}
