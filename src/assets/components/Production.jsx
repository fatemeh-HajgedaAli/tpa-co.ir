import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Badge,
  Button,
  Stack,
  Flex,
  Icon,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
// images
import Tir from "../image/شمش های فولادی.jpg";
import navdani from "../image/navdan.jpg";
import milgerd from "../image/milgerd.jpg";
const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function ProductsSection() {
  const products = [
    {
      name: "تیرآهن و ناودانی",
      description:
        "انواع تیرآهن و ناودانی با استانداردهای بین‌المللی برای پروژه‌های صنعتی و ساختمانی",
      image: navdani,
      specs: ["استاندارد DIN", "مقاومت بالا", "ضد خوردگی"],
    },
    {
      name: "میلگرد و آرماتور",
      description:
        "میلگرد آجدار و ساده با کیفیت عالی برای سازه‌های بتنی و ساختمانی",
      image: milgerd,
      specs: ["گرید ۴۰۰ و ۵۰۰", "آجدار استاندارد", "کنترل کیفیت"],
    },
    {
      name: "شمش های فولادی",
      description: "شمش های فولادی در سایز ها و گرید های مختلف",
      image: Tir,
      specs: ["سطح صیقلی", "ضخامت متنوع", "برش دقیق"],
    },
  ];

  return (
    <Box
      as="section"
      id="products"
      py={24}
      bg="gray.950"
      position="relative"
      overflow="hidden"
      dir="rtl"
    >
      {/* Background Glows */}
      <Box
        position="absolute"
        top="0"
        left="25%"
        w="400px"
        h="400px"
        bg="orange.500"
        opacity="0.05"
        filter="blur(100px)"
        borderRadius="full"
      />
      <Box
        position="absolute"
        bottom="0"
        right="25%"
        w="400px"
        h="400px"
        bg="blue.500"
        opacity="0.05"
        filter="blur(100px)"
        borderRadius="full"
      />

      <Container maxW="7xl" position="relative">
        {/* Section Header */}
        <MotionBox
         
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center"
          mb={16}
        >
          <Badge
            colorScheme="orange"
            variant="subtle"
            px={3}
            py={1}
            borderRadius="full"
            mb={4}
          >
            محصولات ما
          </Badge>
          <Heading
         fontFamily="Vazirmatn"
           fontWeight="800"
            color="white"
            fontSize={{ base: "3xl", md: "5xl" }}
            mb={6}
          >
            محصولات{" "}
            <Text as="span" color="orange.500">
              با کیفیت
            </Text>
          </Heading>
          <Text color="gray.400" fontSize="lg" maxW="2xl" mx="auto">
            مجموعه کاملی از محصولات فولادی برای پروژه‌های صنعتی، ساختمانی و
            زیرساختی
          </Text>
        </MotionBox>

        {/* Products Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {products.map((product, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              role="group"
              bg="gray.900"
              borderRadius="2xl"
              overflow="hidden"
              border="1px solid"
              borderColor="gray.800"
              _hover={{
                borderColor: "orange.500",
                boxShadow: "0 0 20px rgba(237, 137, 54, 0.1)",
              }}
            >
              {/* Image Container */}
              <Box position="relative" h="240px" overflow="hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  w="full"
                  h="full"
                  objectFit="cover"
                  transition="0.5s all ease-in-out"
                  _groupHover={{ transform: "scale(1.1)" }}
                />
                <Box
                  position="absolute"
                  inset="0"
                  bgGradient="linear(to-t, gray.900, transparent)"
                />
                <Badge
                  position="absolute"
                  top={4}
                  right={4}
                  colorScheme="orange"
                  variant="solid"
                  borderRadius="full"
                >
                  {product.specs[0]}
                </Badge>
              </Box>

              {/* Card Body */}
              <Stack p={6} spacing={4}>
                <Heading
                  size="md"
                  color="white"
                  _groupHover={{ color: "orange.500" }}
                  transition="0.3s"
                >
                  {product.name}
                </Heading>
                <Text color="gray.400" fontSize="sm" noOfLines={2}>
                  {product.description}
                </Text>

                {/* Specs */}
                <Flex wrap="wrap" gap={2}>
                  {product.specs.map((spec, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      color="gray.300"
                      borderColor="gray.700"
                      textTransform="none"
                    >
                      <Icon
                        as={CheckCircle2}
                        size={12}
                        ml={1}
                        color="orange.500"
                      />
                      {spec}
                    </Badge>
                  ))}
                </Flex>

              </Stack>
            </MotionBox>
          ))}
        </SimpleGrid>

        {/* Bottom CTA */}
        <MotionBox
          mt={16}
          textAlign="center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <Text color="gray.400" mb={6}>
            محصول خاصی می‌خواهید؟
          </Text>
          <Button
            as={RouterLink}
            to="/products"
            size="lg"
            colorScheme="orange"
            borderRadius="xl"
            px={10}
            boxShadow="0 10px 20px -5px rgba(237, 137, 54, 0.4)"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "0 15px 25px -5px rgba(237, 137, 54, 0.5)",
            }}
          >
محصولات بیشتر          </Button>
        </MotionBox>
      </Container>
    </Box>
  );
}
