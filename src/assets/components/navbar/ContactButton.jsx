import { Box, Button, HStack } from "@chakra-ui/react";
import { ArrowLeft } from "lucide-react";

export default function ContactButton({ mobile = false, onClick }) {
  return (
    <Button
      as="a"
      href="#contact"
      onClick={onClick}
      w={mobile ? "100%" : "auto"}
      mt={mobile ? 3 : 0}
      h={mobile ? "48px" : "42px"}
      px={5}
      borderRadius={mobile ? "xl" : "full"}
      bgGradient="linear(to-l, blue.500, cyan.500)"
      color="white"
      fontWeight={700}
      boxShadow="0 8px 25px rgba(49,130,206,0.25)"
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "0 12px 35px rgba(49,130,206,0.4)",
      }}
    >
      <HStack spacing={2}>
        <Box>تماس با ما</Box>
        <ArrowLeft size={17} />
      </HStack>
    </Button>
  );
}
