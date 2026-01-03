import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  Badge,
  Stack,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { ChevronLeft, CheckCircle2, Search } from "lucide-react";
import { motion, isValidMotionProp } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
// image
import productImg1 from "../assets/image/آهن اسفنجی.jpg";
import productImg2 from "../assets/image/کک.jpg";
import productImg3 from "../assets/image/فرو منگز.jpg";
import productImg4 from "../assets/image/فرو سیلیس.jpg";
import productImg5 from "../assets/image/سیلیکو.jpg";
import productImg6 from "../assets/image/انواع خاک.jpg";
import productImg7 from "../assets/image/نازل افشانک.jpg";
import productImg8 from "../assets/image/شمش.jpg";
import productImg9 from "../assets/image/بریکتهای.jpg";
import productImg10 from "../assets/image/شلاکه.jpg";
import productImg11 from "../assets/image/ترموکوپل.jpg";
import productImg12 from "../assets/image/پودر ریخته گری.jpg";
import productImg13 from "../assets/image/نازل تاندیش.jpg";
import productImg14 from "../assets/image/سیستم اسلاید گیت.jpg";
import productImg15 from "../assets/image/شیلنگ فری کربن.jpg";
import productImg16 from "../assets/image/نوار ابریشمی نسوز.jpg";
import productImg17 from "../assets/image/انواع سیم.jpg";
import productImg18 from "../assets/image/دسته لنس اکسیژن.jpg";

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProducts = [
    {
      id: 1,
      name: "آهن اسفنجی، گندله و کنسانتره",
      description:
        "تامین مواد اولیه زنجیره فولاد با خلوص بالا جهت واحدهای ذوب و احیا.",
      image: productImg1,
      specs: ["خلوص بالا", "تامین مستمر"],
    },
    {
      id: 2,
      name: "کک متالوژی",
      description:
        "کک متالوژی در دانه‌بندی‌ها و گریدهای مختلف صنعتی و متالوژیکی.",
      image: productImg2,
      specs: ["دانه‌بندی دقیق", "کربن بهینه"],
    },
    {
      id: 3,
      name: "فرو منگنز (پرکربن و کم‌کربن)",
      description:
        "فرو منگنز ۶۰-۱۰ در انواع مختلف جهت اصلاح خواص مکانیکی فولاد.",
      image: productImg3,
      specs: ["آنالیز ۶۰-۱۰", "کیفیت تضمینی"],
    },
    {
      id: 4,
      name: "فرو سیلیس و پودر فرو سیلیس",
      description:
        "تامین فرو سیلیس با دانه‌بندی متنوع برای صنایع ریخته‌گری و فولادسازی.",
      image: productImg4,
      specs: ["دانه بندی متنوع", "خلوص استاندارد"],
    },
    {
      id: 5,
      name: "سیلیکو منگنز",
      description:
        "ترکیب سیلیکو منگنز ۶۰-۱۰ جهت اکسیژن‌زدایی موثر در پاتیل مذاب.",
      image: productImg5,
      specs: ["آنالیز دقیق", "ارسال فوری"],
    },
    {
      id: 6,
      name: "خاک و جرم‌های نسوز",
      description:
        "انواع جرم‌های نسوز کوبیدنی و ریختنی برای جداره کوره‌ها و پاتیل‌ها.",
      image: productImg6,
      specs: ["تحمل دمایی بالا", "مقاومت به خوردگی"],
    },
    {
      id: 7,
      name: "نازل افشانک",
      description:
        "انواع نازل‌های افشانک با پاشش دقیق جهت سیستم‌های خنک‌کننده صنعتی.",
      image: productImg7,
      specs: ["پاشش یکنواخت", "استیل ضد زنگ"],
    },
    {
      id: 8,
      name: "شمش‌های فولادی",
      description: "شمش در سایزها و گریدهای متنوع (3SP, 5SP) برای تولید مقاطع.",
      image: productImg8,
      specs: ["گرید ساختمانی", "ابعاد استاندارد"],
    },
    {
      id: 9,
      name: "بریکت سرد و گرم",
      description:
        "بریکت‌های متراکم جهت جایگزینی قراضه در کوره‌های القایی و قوس.",
      image: productImg9,
      specs: ["چگالی بالا", "شارژ بهینه"],
    },
    {
      id: 10,
      name: "شلاکه، خرسک و تاندیش",
      description: "بازیافت و تامین انواع خرسک و شلاکه فلزی با آنالیز مشخص.",
      image: productImg10,
      specs: ["صرفه اقتصادی", "تصفیه شده"],
    },
    {
      id: 11,
      name: "ترموکوپل و تجهیزات اندازه‌گیری",
      description:
        "ترموکوپل و سمپلر جهت اندازه‌گیری دقیق دمای مذاب در سایزهای مختلف.",
      image: productImg11,
      specs: ["دقت سنسور بالا", "پاسخ سریع"],
    },
    {
      id: 12,
      name: "پودر ریخته‌گری و ماسه کرومیتی",
      description:
        "مواد مصرفی ریخته‌گری مداوم و ماسه کرومیتی با درصدهای متفاوت خلوص.",
      image: productImg12,
      specs: ["گریدهای متنوع", "خلوص بالا"],
    },
    {
      id: 13,
      name: "نازل تاندیش و صفحه نازل پاتیل",
      description: "قطعات ویژه نسوز جهت کنترل جریان خروجی ذوب در ریخته‌گری.",
      image: productImg13,
      specs: ["مقاومت فرسایشی", "سایزبندی متنوع"],
    },
    {
      id: 14,
      name: "سیستم اسلاید گیت و متعلقات",
      description: "مکانیزم اسلاید گیت و تمامی قطعات یدکی و مکانیکی مربوطه.",
      image: productImg14,
      specs: ["عملکرد ایمن", "قطعات اورجینال"],
    },
    {
      id: 15,
      name: "شیلنگ فری کربن",
      description:
        "شیلنگ‌های بدون کربن جهت انتقال آب در کوره‌های القایی با عایق الکتریکی.",
      image: productImg15,
      specs: ["عایق برق", "انعطاف پذیر"],
    },
    {
      id: 16,
      name: "نوار ابریشمی نسوز (فایبر گلاس)",
      description:
        "نوار ابریشمی نسوز فایبرگلاس در اندازه‌های مختلف جهت عایق‌بندی حرارتی و آب‌بندی صنعتی.",
      image: productImg16,
      specs: ["مقاومت حرارتی بالا", "عایق الکتریکی"],
    },
    {
      id: 17,
      name: "عایق‌های نسوز و کابل سیلیکونی",
      description:
        "نوار فایبرگلاس و سیم و کابل‌های نسوز سیلیکونی برای محیط‌های با دمای بالا.",
      image: productImg17,
      specs: ["ضد حریق", "تحمل حرارتی بالا"],
    },
    {
      id: 18,
      name: "لنس اکسیژن و لوله‌های اسیدشویی",
      description:
        "دسته لنس و لوله‌های لنس اکسیژن اسیدشویی شده جهت برش و ذوب‌ریزی.",
      image: productImg18,
      specs: ["ایمنی عملیاتی", "سایز بندی کامل"],
    },
  ];

  const filteredProducts = allProducts.filter(
    (p) => p.name.includes(searchTerm) || p.description.includes(searchTerm)
  );

  return (
    <Box bg="gray.950" minH="100vh" py={20} dir="rtl">
      <Container maxW="7xl">
        <Breadcrumb
          spacing="8px"
          separator={<ChevronLeft size={14} color="gray" />}
          color="gray.500"
          mb={10}
        >
          <BreadcrumbItem>
            <BreadcrumbLink as={RouterLink} to="/">
              خانه
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink color="blue.500">محصولات</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ md: "center" }}
          mb={12}
          gap={6}
        >
          <Box>
            <Heading color="white" fontSize="4xl" mb={5}>
              محصولات و{" "}
              <Text as="span" color="blue.500">
                تجهیزات فولادی
              </Text>
            </Heading>
            <Text color="gray.400">
              تامین کامل ملزومات و مواد اولیه کارخانجات ذوب و ریخته‌گری
            </Text>
          </Box>

          {/*  search part*/}
          <InputGroup maxW={{ md: "300px" }}>
            <InputLeftElement pointerEvents="none">
              <Icon as={Search} color="gray.500" />
            </InputLeftElement>
            <Input
              placeholder="جستجوی محصول..."
              bg="gray.900"
              border="none"
              color="white"
              _focus={{ border: "1px solid", borderColor: "blue.500" }}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {filteredProducts.map((product, index) => (
            <MotionBox
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              bg="gray.900"
              borderRadius="2xl"
              overflow="hidden"
              border="1px solid"
              borderColor="gray.800"
              _hover={{
                borderColor: "orange.500",
                transform: "translateY(-5px)",
              }}
            >
              <Box h="240px" w="full" overflow="hidden" bg="gray.800">
                <Image
                  src={product.image}
                  alt={product.name}
                  w="full"
                  h="full"
                  objectFit="cover"
                  objectPosition="center"
                  transition="0.6s cubic-bezier(0.4, 0, 0.2, 1)"
                  _hover={{ transform: "scale(1.1)" }}
                  backfaceVisibility="hidden"
                  cursor={"pointer"}
                />
              </Box>
              <Stack p={6} spacing={4}>
                <Heading size="md" color="white">
                  {product.name}
                </Heading>
                <Text color="gray.400" fontSize="sm" noOfLines={3}>
                  {product.description}
                </Text>
                <Flex wrap="wrap" gap={2}>
                  {product.specs.map((s) => (
                    <Badge
                      key={s}
                      variant="outline"
                      color="orange.200"
                      borderColor="gray.700"
                      p={"2"}
                    >
                      <Icon as={CheckCircle2} size={10} ml={1} /> {s}
                    </Badge>
                  ))}
                </Flex>
              </Stack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
