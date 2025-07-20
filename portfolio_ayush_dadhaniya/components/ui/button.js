"use client"

import * as React from "react"

export const Button = React.forwardRef(function Button({ className = "", ...props }, ref) {
  return (
    <button
      ref={ref}
      className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 ${className}`}
      {...props}
    />
  )
}) 