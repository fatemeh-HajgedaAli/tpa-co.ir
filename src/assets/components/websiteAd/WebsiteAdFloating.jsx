"use client";

import { Box } from "@chakra-ui/react";
import { useState } from "react";

import WebsiteAdCard from "./WebsiteAdCard";
import WebsiteAdTrigger from "./WebsiteAdTrigger";

export default function WebsiteAdFloating() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      position="fixed"
      bottom={{ base: "20px", md: "28px" }}
      right={{ base: "16px", md: "24px" }}
      zIndex={9999}
      dir="rtl"
      fontFamily="'Vazirmatn', sans-serif"
    >
      {isOpen && <WebsiteAdCard onClose={() => setIsOpen(false)} />}

      <WebsiteAdTrigger onClick={() => setIsOpen((prev) => !prev)} />
    </Box>
  );
}
