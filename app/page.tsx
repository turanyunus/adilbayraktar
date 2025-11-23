'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Mic, Scale, X } from 'lucide-react'
import { ChoiceCard } from '@/components/ChoiceCard'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const choices = [
  {
    icon: TrendingUp,
    title: 'Social Media Management & Consulting',
    description: 'Strategy, management, and growth for your brand.',
    cta: 'Explore social media services',
    href: '/social-media',
    path: '/social-media',
  },
  {
    icon: Mic,
    title: 'Public Speaking',
    description: 'Talks, panels, workshops, and moderation.',
    cta: 'See speaking topics',
    href: '/public-speaking',
    path: '/public-speaking',
  },
  {
    icon: Scale,
    title: 'Human Rights Work & Activism',
    description: 'Advocacy, projects, and community work.',
    cta: 'View activism work',
    href: '/human-rights',
    path: '/human-rights',
  },
]

const pathLabels: Record<string, string> = {
  '/social-media': 'Social Media',
  '/public-speaking': 'Public Speaking',
  '/human-rights': 'Human Rights',
}

export default function HomePage() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null)
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('selectedPath')
    if (stored && pathLabels[stored]) {
      setSelectedPath(stored)
      setShowBanner(true)
    }
  }, [])

  const handleChoiceClick = (path: string) => {
    localStorage.setItem('selectedPath', path)
  }

  const handleDismissBanner = () => {
    setShowBanner(false)
  }

  return (
    <div className="min-h-screen">
      {/* Welcome Back Banner */}
      {showBanner && selectedPath && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-gradient-to-r from-primary-50 to-accent-50 border-b border-primary-100"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-gray-700">
                  Welcome back — continue with <strong className="text-primary-600">{pathLabels[selectedPath]}</strong>?
                </span>
                <Link
                  href={selectedPath}
                  className="px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-sm hover:shadow-md"
                >
                  Continue
                </Link>
              </div>
              <button
                onClick={handleDismissBanner}
                className="p-1 text-gray-400 hover:text-primary-600 transition-colors"
                aria-label="Dismiss"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-primary-700 to-gray-900 bg-clip-text text-transparent">
                Hi, I&apos;m Adil Bayraktar.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              I work at the intersection of communication, public voice, and human rights.
            </p>
            <p className="text-lg text-gray-500 mt-8 mb-16">
              What brings you here today?
            </p>
          </motion.div>

          {/* Choice Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {choices.map((choice, index) => (
              <ChoiceCard
                key={choice.path}
                icon={choice.icon}
                title={choice.title}
                description={choice.description}
                cta={choice.cta}
                href={choice.href}
                index={index}
                onClick={() => handleChoiceClick(choice.path)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

