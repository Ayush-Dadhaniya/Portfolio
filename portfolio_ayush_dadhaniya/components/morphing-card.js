"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function MorphingCard({ children, className = "" }) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        scale: 1.02,
        rotateX: 5,
        rotateY: 5,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`
        relative overflow-hidden rounded-xl
        bg-gradient-to-br from-white/5 to-white/10
        backdrop-blur-lg border border-white/20
        ${className}
      `}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        animate={
          isHovered
            ? {
                background: [
                  "linear-gradient(0deg, transparent, transparent)",
                  "linear-gradient(180deg, rgba(168, 85, 247, 0.4), transparent)",
                  "linear-gradient(360deg, transparent, transparent)",
                ],
              }
            : {}
        }
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      />
      {/* Content */}
      <div className="relative z-10 p-6">{children}</div>
      {/* Hover effect overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
} 