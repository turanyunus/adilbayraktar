'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ChoiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  cta: string
  href: string
  index: number
  onClick: () => void
}

export function ChoiceCard({
  icon: Icon,
  title,
  description,
  cta,
  href,
  index,
  onClick,
}: ChoiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        href={href}
        onClick={onClick}
        className="block group"
      >
        <div className="h-full p-8 bg-white rounded-xl border-2 border-gray-200 hover:border-primary-400 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300">
          <motion.div
            whileHover={{ rotate: [0, -5, 5, -5, 0] }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100 group-hover:from-primary-500 group-hover:to-accent-500 rounded-lg transition-all shadow-sm"
          >
            <Icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
          </motion.div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-600 mb-6">
            {description}
          </p>
          
          <span className="inline-flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
            {cta}
            <motion.span
              className="inline-block ml-1"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              →
            </motion.span>
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

