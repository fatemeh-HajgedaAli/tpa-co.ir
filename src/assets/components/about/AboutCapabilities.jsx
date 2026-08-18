import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

import { catalog } from "./aboutData";
import { BLUE } from "./aboutConstants";

const MotionBox = motion.create(Box);

export default function AboutCapabilities() {
  return (
    <Box mt={{ base: 20, md: 28 }}>
      <Flex justify="space-between" align="center" mb={8}>
        <Box>
          <Text
            color={BLUE}
            fontSize="xs"
            fontWeight={700}
            letterSpacing="2px"
            mb={2}
          >
            OUR CAPABILITIES
          </Text>

          <Heading fontSize={{ base: "2xl", md: "3xl" }} fontWeight={800}>
            چرا پرگاس؟
          </Heading>
        </Box>
      </Flex>

      <SimpleGrid
        columns={{
          base: 1,
          sm: 2,
          lg: 4,
        }}
        spacing={4}
      >
        {catalog.map((item, index) => (
          <MotionBox
            key={item.code}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
          >
            <Box
              p={6}
              h="100%"
              bg="rgba(255,255,255,.025)"
              border="1px solid"
              borderColor="whiteAlpha.100"
              borderRadius="2xl"
              position="relative"
              overflow="hidden"
              role="group"
              transition="all .35s"
              _hover={{
                transform: "translateY(-6px)",
                borderColor: BLUE,
                bg: "rgba(79,179,199,.05)",
              }}
            >
              <Flex justify="space-between" align="center" mb={6}>
                <Flex
                  w="48px"
                  h="48px"
                  align="center"
                  justify="center"
                  borderRadius="xl"
                  bg="rgba(79,179,199,.08)"
                  color={BLUE}
                >
                  <Icon as={item.icon} boxSize={5} />
                </Flex>

                <Text color="gray.700" fontSize="xs" fontWeight={700}>
                  {item.code}
                </Text>
              </Flex>

              <Heading fontSize="lg" mb={3}>
                {item.title}
              </Heading>

              <Text color="gray.500" fontSize="sm" lineHeight="2">
                {item.description}
              </Text>

              <Box
                position="absolute"
                bottom="0"
                right="0"
                h="2px"
                w="0"
                bg={BLUE}
                transition="width .4s"
                _groupHover={{
                  w: "100%",
                }}
              />
            </Box>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
}
