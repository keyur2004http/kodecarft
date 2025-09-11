import React from "react";
import { motion } from "framer-motion";

function FloatingPaths({ position }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 800 1000"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          stroke="currentColor"
          strokeWidth={path.width}
          strokeOpacity={0.05 + path.id * 0.015}
          initial={{ pathLength: 0.3, opacity: 0.2 }}
          animate={{
            pathLength: 1,
            opacity: [0.2, 0.4, 0.2],
            pathOffset: [0, 1, 0],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </svg>
  );
}

const BackgroundVisualPaths = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 text-white/10 dark:text-white/10">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  );
};

export default BackgroundVisualPaths;
