'use client'
import { motion } from 'framer-motion'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

export interface ChevronColapseProps {
  onClick: () => void
  isActive: boolean
}

export function ChevronColapse({ onClick, isActive }: ChevronColapseProps) {
  return (
    <button
      type="button"
      className="hidden md:flex flex-row-reverse py-2 px-4 text-2xl font-bold text-snow-600 hover:text-snow-400 transition-all"
      onClick={() => onClick()}
    >
      <motion.div
        initial={{
          rotate: 0,
        }}
        animate={{
          rotate: isActive ? 0 : 180,
        }}
      >
        <FaChevronRight />
      </motion.div>
    </button>
  )
}
