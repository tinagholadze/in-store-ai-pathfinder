"use client"

import React, { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TilesProps {
  className?: string
  rows?: number
  cols?: number
  tileClassName?: string
  tileSize?: "sm" | "md" | "lg"
}

const tileSizes = {
  sm: "w-8 h-8",
  md: "w-9 h-9 md:w-12 md:h-12",
  lg: "w-12 h-12 md:w-16 md:h-16",
}

export function Tiles({
  className,
  rows = 100,
  cols = 10,
  tileClassName,
  tileSize = "md",
}: TilesProps) {
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(null)

  const rowsArray = new Array(rows).fill(1)
  const colsArray = new Array(cols).fill(1)

  const handleHover = useCallback((row: number, col: number) => {
    setHovered({ row, col })
  }, [])

  const handleLeave = useCallback(() => {
    setHovered(null)
  }, [])

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden flex flex-wrap content-start justify-center -z-10",
        className
      )}
    >
      {rowsArray.map((_, i) => (
        <div key={`row-${i}`} className="flex">
          {colsArray.map((_, j) => {
            const isHovered =
              hovered &&
              Math.abs(hovered.row - i) <= 1 &&
              Math.abs(hovered.col - j) <= 1

            return (
              <motion.div
                key={`tile-${i}-${j}`}
                className={cn(
                  "border border-black/[0.03] bg-transparent transition-colors duration-300",
                  tileSizes[tileSize],
                  tileClassName
                )}
                onMouseEnter={() => handleHover(i, j)}
                onMouseLeave={handleLeave}
                animate={{
                  backgroundColor: isHovered
                    ? "rgba(0, 0, 0, 0.06)"
                    : "rgba(0, 0, 0, 0)",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}
