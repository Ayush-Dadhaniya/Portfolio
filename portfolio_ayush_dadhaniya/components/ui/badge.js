"use client"

import * as React from "react"

export const Badge = React.forwardRef(function Badge({ className = "", variant = "secondary", ...props }, ref) {
  const base = "inline-block px-3 py-1 rounded-full text-xs font-semibold border"
  const variants = {
    secondary: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    outline: "border-pink-400 text-pink-400 bg-transparent",
  }
  return (
    <span
      ref={ref}
      className={`${base} ${variants[variant] || variants.secondary} ${className}`}
      {...props}
    />
  )
}) 