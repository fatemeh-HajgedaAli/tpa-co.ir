import { Box, Heading, Text } from "@chakra-ui/react";

import { motion } from "framer-motion";

import { BLUE } from "./aboutConstants";
import AboutStats from "./AboutStats";

const MotionBox = motion.create(Box);

export default function AboutContent() {
  return (
    <MotionBox
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Text
        color={BLUE}
        fontSize="xs"
        fontWeight={700}
        letterSpacing="2px"
        mb={4}
      >
        WHO WE ARE
      </Text>

      <Heading
        fontSize={{
          base: "2xl",
          md: "4xl",
        }}
        fontWeight={800}
        lineHeight="1.6"
        mb={6}
      >
        یک شریک مطمئن برای پروژه‌های
        <Box as="span" color={BLUE}>
          {" "}
          صنعتی
        </Box>
      </Heading>

      <Text
        color="gray.400"
        fontSize={{ base: "sm", md: "md" }}
        lineHeight="2.2"
        textAlign="justify"
        mb={10}
      >
        شرکت پرگاس تجارت آینده فعالیت خود را از سال ۱۳۸۹ در زمینه تأمین مواد
        اولیه و مصرفی، تجهیزات و قطعات یدکی مورد نیاز در صنعت فولاد، نفت، گاز،
        پتروشیمی، سیمان و سایر صنایع آغاز نموده است.
        <br />
        <br />
        ما با شناسایی دقیق نیاز مشتریان و بهره‌گیری از تجربه نیروهای متخصص و
        همکاری با شرکای تجاری معتبر، تلاش می‌کنیم راهکارهایی مطمئن و اقتصادی
        برای پروژه‌های صنعتی ارائه کنیم.
      </Text>

      <Box w="100%" h="1px" bg="whiteAlpha.200" mb={8} />

      <AboutStats />
    </MotionBox>
  );
}
