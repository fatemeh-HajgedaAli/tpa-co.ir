import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

import MotionPath from "./MotionPath";
import { HERO_COLORS } from "./heroData";

export default function TechnicalSchematic() {
  const { blue, ink, muted, mutedDim, heat } = HERO_COLORS;

  return (
    <Box
      w={{ base: "75%", sm: "80%", md: "60%", lg: "460px" }}
      maxW="460px"
      mx="auto"
      flexShrink={0}
      mt={{ base: -8, lg: 0 }}
      position="relative"
    >
      <svg viewBox="0 0 460 520" width="100%" fill="none">
        {/* Main pipeline */}

        <MotionPath d="M60 260 L180 260" stroke={blue} strokeWidth="2.5" />

        <MotionPath d="M280 260 L400 260" stroke={blue} strokeWidth="2.5" />

        <MotionPath d="M400 260 L400 140" stroke={blue} strokeWidth="2.5" />

        <MotionPath d="M400 140 L340 140" stroke={blue} strokeWidth="2.5" />

        {/* Valve */}

        <MotionPath d="M58 244 L58 276" stroke={muted} strokeWidth="2.5" />

        <MotionPath d="M66 248 L66 272" stroke={muted} strokeWidth="2.5" />

        <MotionPath
          d="M180 232 L230 260 L180 288 Z"
          stroke={ink}
          strokeWidth="2.5"
        />

        <MotionPath
          d="M280 232 L230 260 L280 288 Z"
          stroke={ink}
          strokeWidth="2.5"
        />

        <MotionPath d="M230 260 L230 200" stroke={ink} strokeWidth="2.5" />

        <MotionPath d="M214 200 L246 200" stroke={ink} strokeWidth="2.5" />

        {/* PT Circle */}

        <motion.circle
          cx="340"
          cy="110"
          r="30"
          stroke={heat}
          strokeWidth="2.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            delay: 0.8,
          }}
        />

        <motion.text
          x="340"
          y="116"
          textAnchor="middle"
          fill={heat}
          fontSize="15"
          fontWeight="600"
          fontFamily="monospace"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          PT
        </motion.text>

        <MotionPath
          d="M340 140 L340 110"
          stroke={heat}
          strokeWidth="2"
          strokeDasharray="4 4"
        />

        {/* Center indicator */}

        <motion.circle
          cx="230"
          cy="260"
          r="4"
          fill={heat}
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
        />

        {/* Lower pipeline */}

        <MotionPath d="M60 260 L60 380" stroke={blue} strokeWidth="2.5" />

        <MotionPath d="M60 380 L160 380" stroke={blue} strokeWidth="2.5" />

        <MotionPath d="M160 366 L160 394" stroke={muted} strokeWidth="2.5" />

        <MotionPath d="M168 370 L168 390" stroke={muted} strokeWidth="2.5" />

        {/* Dimension line */}

        <MotionPath d="M60 440 L400 440" stroke={mutedDim} strokeWidth="1" />

        <MotionPath d="M60 434 L60 446" stroke={mutedDim} strokeWidth="1" />

        <MotionPath d="M400 434 L400 446" stroke={mutedDim} strokeWidth="1" />

        {/* Technical labels */}

        <text
          x="230"
          y="466"
          textAnchor="middle"
          fill={mutedDim}
          fontSize="12"
          fontFamily="monospace"
        >
          Ø150 — DN & PN RATED
        </text>

        <text
          x="60"
          y="490"
          fill={mutedDim}
          fontSize="11"
          fontFamily="monospace"
        >
          FIG. 3 / PIPING & INSTRUMENT DETAIL
        </text>
      </svg>
    </Box>
  );
}
