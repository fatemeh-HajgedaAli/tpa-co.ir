import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import { ArrowUpLeft } from "lucide-react";

import { BLUE } from "./aboutConstants";
import { aboutImages, mainAboutImage } from "./aboutData";

import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

export default function AboutGallery() {
  return (
    <MotionBox
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      position="relative"
    >
      <Box
        position="relative"
        h={{ base: "420px", md: "580px" }}
        borderRadius="3xl"
        overflow="hidden"
        border="1px solid"
        borderColor="whiteAlpha.200"
        role="group"
      >
        <Image
          src={mainAboutImage}
          alt="تجهیزات صنعتی تجارت پرگاس آینده"
          w="100%"
          h="100%"
          objectFit="cover"
          transition="transform .8s ease"
          _groupHover={{
            transform: "scale(1.06)",
          }}
        />

        <Box
          position="absolute"
          inset="0"
          bgGradient="
            linear(
              to-t,
              rgba(0,0,0,.9),
              rgba(0,0,0,.15),
              rgba(0,0,0,.25)
            )
          "
        />

        <Badge
          position="absolute"
          top={6}
          right={6}
          px={4}
          py={2}
          bg="rgba(0,0,0,.45)"
          backdropFilter="blur(12px)"
          border="1px solid"
          borderColor="whiteAlpha.300"
          color={BLUE}
          borderRadius="full"
          fontSize="xs"
        >
          TPA / INDUSTRIAL
        </Badge>

        <Box position="absolute" bottom={8} right={8} left={8}>
          <Text color={BLUE} fontSize="xs" fontWeight={700} mb={3}>
            ENGINEERING & PROCUREMENT
          </Text>

          <Heading
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight={800}
            lineHeight="1.4"
          >
            تجربه، تخصص،
            <Box as="span" color={BLUE}>
              اعتماد
            </Box>
          </Heading>
        </Box>

        <Flex
          position="absolute"
          top={6}
          left={6}
          w="52px"
          h="52px"
          align="center"
          justify="center"
          borderRadius="full"
          bg="rgba(0,0,0,.45)"
          backdropFilter="blur(12px)"
          border="1px solid"
          borderColor="whiteAlpha.300"
          transition="all .3s"
          _groupHover={{
            bg: BLUE,
            color: "black",
          }}
        >
          <ArrowUpLeft size={20} />
        </Flex>
      </Box>

      <SimpleGrid columns={3} spacing={3} mt={3}>
        {aboutImages.slice(1).map((image, index) => (
          <Box
            key={index}
            h="95px"
            borderRadius="xl"
            overflow="hidden"
            border="1px solid"
            borderColor="whiteAlpha.200"
          >
            <Image
              src={image}
              alt={`تصویر صنعتی ${index + 2}`}
              w="100%"
              h="100%"
              objectFit="cover"
              transition="transform .5s"
              _hover={{
                transform: "scale(1.08)",
              }}
            />
          </Box>
        ))}
      </SimpleGrid>
    </MotionBox>
  );
}
