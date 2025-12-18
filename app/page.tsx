'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Mic, Scale, X, Award, Users, Calendar, Globe, ArrowRight, Linkedin, Mail, Instagram } from 'lucide-react'
import { ChoiceCard } from '@/components/ChoiceCard'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
            {/* Profile Photo */}
            <div className="flex justify-center mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-xl ring-4 ring-primary-100"
              >
                <Image
                  src="/images/publicspeaker/IMG_4244.jpg"
                  alt="Adil Bayraktar"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-primary-700 to-gray-900 bg-clip-text text-transparent">
                Hi, I&apos;m Adil Bayraktar.
              </span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-primary-600 mb-4">
              Culture Broker
            </p>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              I work at the intersection of communication, public voice, and human rights.
            </p>
            <p className="text-lg text-gray-500 mb-4">
              Over 10+ years of volunteer experience with nonprofit organizations across the United States — primarily in Oklahoma, Texas, Maryland, and Pennsylvania.
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

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl mb-4">
                  <Calendar className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl mb-4">
                  <Users className="w-8 h-8 text-accent-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">100+</div>
                <div className="text-gray-600">Projects Completed</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl mb-4">
                  <Mic className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600">Speaking Events</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-50 to-primary-50 rounded-xl mb-4">
                  <Globe className="w-8 h-8 text-accent-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">20+</div>
                <div className="text-gray-600">Countries Reached</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Communication, Voice, and Impact
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                I believe in the power of communication to create change. Whether it&apos;s helping a brand find its voice, 
                speaking about the challenges and opportunities of our digital age, or working with communities fighting 
                for their rights — I&apos;m driven by the potential of words and stories to move people to action.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Thinking</h3>
                <p className="text-gray-600">
                  Data-driven strategies that align with your goals and values.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent-50 to-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">
                  Track record of successful campaigns and meaningful impact.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Values-Driven</h3>
                <p className="text-gray-600">
                  Work grounded in principles of justice, equality, and human rights.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Learn More About Me
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Links & CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let&apos;s Connect
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Follow my work, reach out for collaboration, or just say hello.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a
                  href="https://www.linkedin.com/in/adil-bayraktar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all backdrop-blur-sm"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/adil_is5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all backdrop-blur-sm"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@adilbayraktar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all backdrop-blur-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  TikTok
                </a>
                <a
                  href="mailto:bayraktar.adil94@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all backdrop-blur-sm"
                >
                  <Mail className="w-5 h-5" />
                  Email
                </a>
              </div>

              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

