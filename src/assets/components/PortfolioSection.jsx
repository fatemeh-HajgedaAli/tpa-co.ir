import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Icon,
  Badge,
  HStack,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  Factory,
  Globe,
  Zap,
  ShieldCheck,
  Settings,
  ChevronRight,
  ChevronLeft,
  Wrench,
  Construction,
  Thermometer,
  Cpu,
  ArrowLeft,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const experienceData = [
  {
    id: "01",
    year: "۱۴۰۳",
    title: "مشاوره ذوب هرازدان",
    desc: "قوس ۳۰ تن - ارمنستان. بهینه‌سازی فرآیند ذوب.",
    type: "مشاوره بین‌المللی",
    icon: Globe,
  },
  {
    id: "02",
    year: "۱۴۰۲",
    title: "فولاد موید زنجان",
    desc: "اورهال کوره القایی ۱۲ و ۵ تن و سیستم هیدرولیک.",
    type: "اورهال و تعمیرات",
    icon: Wrench,
  },
  {
    id: "03",
    year: "۱۴۰۱",
    title: "فولاد ذوب الوند",
    desc: "نصب کوره ۲۰ تن و ماشین R8000 همدان.",
    type: "نصب تجهیزات",
    icon: Factory,
  },
  {
    id: "04",
    year: "۱۴۰۰",
    title: "پروژه باکو - آذربایجان",
    desc: "نصب کوره ۱۲ تن و خط CCM دو استرند R6000.",
    type: "نصب بین‌المللی",
    icon: Globe,
  },
  {
    id: "05",
    year: "۱۳۹۹",
    title: "شمش نگین مشهد",
    desc: "مدیر و سرپرست واحد ریخته گری.",
    type: "مدیریت اجرایی",
    icon: ShieldCheck,
  },
  {
    id: "06",
    year: "۹۸-۹۹",
    title: "فولاد اردستان",
    desc: "مدیر تولید (کوره قوس ۷۰ تن و خط ۵ استرند).",
    type: "مدیریت کارخانه",
    icon: Factory,
  },
  {
    id: "07",
    year: "۱۳۹۸",
    title: "فولاد پیروان غدیر یزد",
    desc: "مدیر کارخانه (کوره ۱۰ تن و خط ریخته گری).",
    type: "مدیریت ارشد",
    icon: ShieldCheck,
  },
  {
    id: "08",
    year: "۹۶-۹۷",
    title: "شمش نگین مشهد",
    desc: "مدیر و سرپرست واحد ریخته گری (دوره دوم).",
    type: "سرپرستی",
    icon: Settings,
  },
  {
    id: "09",
    year: "//",
    title: "شمش نگین مشهد",
    desc: "اصلاح و راه اندازی خط CCM (کوره قوس ۵۰ تن).",
    type: "اصلاح فنی",
    icon: Zap,
  },
  {
    id: "10",
    year: "۱۳۹۶",
    title: "سپهر فولاد لنجان",
    desc: "راه اندازی ۴ کوره ۱۰ تن تپکا و بهره برداری.",
    type: "راه اندازی",
    icon: Construction,
  },
  {
    id: "11",
    year: "۹۵-۹۶",
    title: "پرتو صنعت شرق",
    desc: "نصب و راه اندازی ۲ کوره ۱۰ تن الکتروترم.",
    type: "نصب صنعتی",
    icon: Wrench,
  },
  {
    id: "12",
    year: "۹۲-۹۴",
    title: "فولاد فلز ارفع شهرضا",
    desc: "نصب کوره ۶ تن و خط ماشین ریخته گری.",
    type: "نصب و راه اندازی",
    icon: Factory,
  },
  {
    id: "13",
    year: "۹۱-۹۲",
    title: "فولاد سفید دشت",
    desc: "نصب ۲ کوره ۱۰ تن الکتروترم و خط CCM.",
    type: "نصب صنعتی",
    icon: Construction,
  },
  {
    id: "14",
    year: "۹۰-۹۱",
    title: "سپاهان ذوب نجف آباد",
    desc: "نصب ۲ کوره ۶ تن و خط ریخته گری.",
    type: "اجرای فنی",
    icon: Zap,
  },
  {
    id: "15",
    year: "۱۳۹۰",
    title: "ره پویان نوین گرمسار",
    desc: "راه اندازی ۲ عدد کوره ۳ تن دماوند.",
    type: "راه اندازی",
    icon: Thermometer,
  },
  {
    id: "16",
    year: "۸۹-۹۰",
    title: "پارت مثال ارمنستان",
    desc: "نصب و بهره برداری کوره‌های ۵۰۰ کیلو و ۱ تن.",
    type: "پروژه خارجی",
    icon: Globe,
  },
  {
    id: "17",
    year: "۷۰-۹۰",
    title: "ذوب آهن اصفهان",
    desc: "تکنسین ارشد ریخته گری (۲۰ سال سابقه).",
    type: "سابقه کلیدی",
    icon: ShieldCheck,
  },
  {
    id: "18",
    year: "۸۰-۸۳",
    title: "ذوب آهن اصفهان",
    desc: "تکنولوژ پاتیل و بنای ارشد نسوز.",
    type: "تخصص فنی",
    icon: Cpu,
  },
];

export default function IndustrialPortfolio() {
  return (
    <Box
      as="section"
      py={{ base: 12, md: 24 }}
      bg="#080808"
      dir="rtl"
      position="relative"
      overflow="hidden"
    >
      {/* Background Decor */}
      <Box
        position="absolute"
        top="0"
        right="0"
        w="400px"
        h="400px"
        bg="blue.900"
        opacity="0.05"
        filter="blur(100px)"
      />

      <Container maxW="7xl">
        <Flex justify="space-between" align="flex-end" mb={12} px={4}>
          <VStack align="start" spacing={3}>
            <Badge
              colorScheme="blue"
              variant="outline"
              borderRadius="sm"
              px={2}
            >
              PROJECTS
            </Badge>
            <Heading
              color="white"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="800"
            >
              سوابق{" "}
              <Box as="span" color="blue.500">
                اجرایی
              </Box>
            </Heading>
            <Text color="gray.500">لیست کامل ۱۸ پروژه و تجربه تخصصی</Text>
          </VStack>

          <HStack spacing={3} display={{ base: "none", md: "flex" }}>
            <IconButton
              id="p-btn"
              icon={<ChevronRight />}
              variant="outline"
              color="white"
              borderRadius="full"
              _hover={{ bg: "blue.600", borderColor: "blue.600" }}
            />
            <IconButton
              id="n-btn"
              icon={<ChevronLeft />}
              variant="outline"
              color="white"
              borderRadius="full"
              _hover={{ bg: "blue.600", borderColor: "blue.600" }}
            />
          </HStack>
        </Flex>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          navigation={{ nextEl: "#n-btn", prevEl: "#p-btn" }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          modules={[Navigation, Pagination, Autoplay]}
          className="industrial-swiper"
        >
          {experienceData.map((item) => (
            <SwiperSlide key={item.id}>
              <Box
                bg="rgba(20, 20, 20, 0.7)"
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor="whiteAlpha.200"
                borderRadius="2xl"
                p={{ base: 6, md: 8 }}
                h={{ base: "auto", md: "280px" }}
                position="relative"
                transition="0.3s"
                _hover={{
                  borderColor: "blue.500",
                  bg: "rgba(25, 25, 25, 0.9)",
                }}
                display="flex"
                flexDirection="row"
              >
                {/* بخش محتوا (سمت چپ در RTL) */}
                <VStack align="start" spacing={4} flex="1">
                  <HStack w="full" justify="space-between">
                    <Badge variant="subtle" colorScheme="blue" fontSize="xs">
                      {item.year}
                    </Badge>
                    <Icon as={item.icon} color="whiteAlpha.400" boxSize={5} />
                  </HStack>

                  <Heading size="md" color="white" fontWeight="700">
                    {item.title}
                  </Heading>

                  <Text
                    color="gray.400"
                    fontSize="sm"
                    lineHeight="1.6"
                    noOfLines={3}
                  >
                    {item.desc}
                  </Text>

                  <HStack mt="auto" spacing={2} color="blue.400">
                    <Text fontSize="xs" fontWeight="bold" letterSpacing="1px">
                      {item.type}
                    </Text>
                    <ArrowLeft size={12} />
                  </HStack>
                </VStack>

                {/* بخش شاخص (سمت راست در RTL) */}
                <Flex
                  w="60px"
                  direction="column"
                  align="center"
                  justify="center"
                  borderRight="1px solid"
                  borderColor="whiteAlpha.100"
                  mr={6}
                >
                  <Text
                    fontSize="4xl"
                    fontWeight="900"
                    color="whiteAlpha.100"
                    sx={{ writingMode: "vertical-rl" }}
                    transform="rotate(180deg)"
                  >
                    {item.id}
                  </Text>
                </Flex>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .industrial-swiper { padding-bottom: 60px !important; }
        .swiper-pagination-bullet { background: #333 !important; opacity: 1; }
        .swiper-pagination-bullet-active { background: #3182ce !important; width: 20px !important; border-radius: 4px !important; }
      `,
        }}
      />
    </Box>
  );
}
