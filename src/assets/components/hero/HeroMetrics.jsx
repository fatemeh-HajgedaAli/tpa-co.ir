import { Box, Text } from "@chakra-ui/react";

import { HERO_COLORS, HERO_DATA } from "./heroData";

export default function HeroMetrics() {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        base: "1fr",
        sm: "repeat(2, 1fr)",
        md: "repeat(4, 1fr)",
      }}
      borderTop="1px solid"
      borderColor={HERO_COLORS.lineStrong}
    >
      {HERO_DATA.metrics.map((metric, index) => (
        <MetricCell key={metric.label} {...metric} index={index} />
      ))}
    </Box>
  );
}

function MetricCell({ label, value, suffix, small }) {
  return (
    <Box
      py={4}
      px={{ base: 3, md: 5 }}
      borderBottom={{
        base: "1px solid rgba(237,238,232,0.10)",
        sm: "none",
      }}
      borderLeft={{
        base: "none",
        sm: "1px solid rgba(237,238,232,0.10)",
      }}
      _last={{
        borderLeft: "none",
        borderBottom: "none",
      }}
      textAlign={{
        base: "center",
        sm: "right",
      }}
    >
      <Text
        fontSize="10px"
        letterSpacing="1.5px"
        color={HERO_COLORS.mutedDim}
        mb={1}
      >
        {label}
      </Text>

      <Text
        fontSize={small ? "14px" : "18px"}
        fontWeight={700}
        color={HERO_COLORS.ink}
      >
        {value}

        {suffix && (
          <Text
            as="span"
            fontSize="11px"
            color={HERO_COLORS.muted}
            fontWeight={400}
            mr={1}
          >
            {suffix}
          </Text>
        )}
      </Text>
    </Box>
  );
}
