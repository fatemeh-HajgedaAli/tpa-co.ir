function ContactBackground() {
  return (
    <>
      {/* Subtle radial atmosphere */}
      <Box
        position="absolute"
        inset="0"
        pointerEvents="none"
        background={`
          radial-gradient(
            circle at 15% 20%,
            rgba(79, 179, 199, 0.055),
            transparent 32%
          ),
          radial-gradient(
            circle at 85% 80%,
            rgba(79, 179, 199, 0.025),
            transparent 28%
          )
        `}
      />

      {/* Technical vertical line */}
      <Box
        position="absolute"
        top="0"
        bottom="0"
        left={{ base: "8%", md: "14%" }}
        w="1px"
        bg={LINE}
        opacity={0.35}
        pointerEvents="none"
      />

      {/* Technical horizontal line */}
      <Box
        position="absolute"
        top={{ base: "18%", md: "22%" }}
        left="0"
        right="0"
        h="1px"
        bg={LINE}
        opacity={0.25}
        pointerEvents="none"
      />

      {/* Small accent point */}
      <Box
        position="absolute"
        top={{ base: "18%", md: "22%" }}
        left={{ base: "8%", md: "14%" }}
        w="5px"
        h="5px"
        borderRadius="full"
        bg={BLUE}
        boxShadow={`0 0 14px ${BLUE}`}
        pointerEvents="none"
      />

      {/* Very soft bottom atmosphere */}
      <Box
        position="absolute"
        bottom="-180px"
        right="25%"
        w="420px"
        h="260px"
        bg={BLUE}
        opacity={0.025}
        filter="blur(120px)"
        borderRadius="full"
        pointerEvents="none"
      />
    </>
  );
}
