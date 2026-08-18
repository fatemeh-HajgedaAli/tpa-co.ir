import { motion } from "framer-motion";

export default function MotionPath({
  d,
  stroke,
  strokeWidth,
  strokeDasharray,
  delay = 0.6,
}) {
  return (
    <motion.path
      d={d}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeDasharray={strokeDasharray}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{
        duration: 1.8,
        delay,
        ease: [0.3, 0.6, 0.2, 1],
      }}
    />
  );
}
