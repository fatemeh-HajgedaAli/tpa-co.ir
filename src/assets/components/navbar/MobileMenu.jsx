import { Box, Collapse, Flex } from "@chakra-ui/react";

import { NAV_LINKS } from "./navData";
import MobileNavItem from "./MobileNavItem";
import ContactButton from "./ContactButton";

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <Collapse in={isOpen} animateOpacity>
      <Box
        mt={3}
        mb={1}
        p={4}
        bg="rgba(10,10,10,0.92)"
        backdropFilter="blur(20px)"
        border="1px solid"
        borderColor="whiteAlpha.100"
        borderRadius="xl"
      >
        <Flex direction="column" gap={1}>
          {NAV_LINKS.map((link) => (
            <MobileNavItem key={link.href} {...link} onClick={onClose} />
          ))}

          <ContactButton mobile onClick={onClose} />
        </Flex>
      </Box>
    </Collapse>
  );
}
