import { HStack } from "@chakra-ui/react";

import { NAV_LINKS } from "./navData";
import NavItem from "./NavItem";
import ContactButton from "./ContactButton";

export default function DesktopMenu() {
  return (
    <HStack
      spacing={{ md: 6, lg: 9 }}
      display={{
        base: "none",
        md: "flex",
      }}
    >
      {NAV_LINKS.map((link) => (
        <NavItem key={link.href} {...link} />
      ))}

      <ContactButton />
    </HStack>
  );
}
