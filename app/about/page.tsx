'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { TrendingUp, Mic, Scale } from 'lucide-react'

export default function AboutPage() {
  const pillars = [
    {
      icon: TrendingUp,
      title: 'Social Media',
      description: 'Over a decade of experience helping brands, organizations, and individuals amplify their message and build authentic connections online.',
      href: '/social-media',
    },
    {
      icon: Mic,
      title: 'Public Speaking',
      description: 'Regular speaker at conferences, universities, and events on topics ranging from digital storytelling to media literacy and civic participation.',
      href: '/public-speaking',
    },
    {
      icon: Scale,
      title: 'Human Rights',
      description: 'Active in advocacy work defending freedom of expression, working with civil society, and supporting movements for equality and justice.',
      href: '/human-rights',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600">
              I'm Adil Bayraktar, working at the intersection of communication, public voice, and human rights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row gap-12 items-start"
            >
              {/* Photo placeholder */}
              <div className="flex-shrink-0">
                <div className="w-64 h-64 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-white text-6xl font-bold">
                  AB
                </div>
              </div>

              {/* Bio */}
              <div className="flex-1 space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  I believe in the power of communication to create change. Whether it's helping a brand find its voice, 
                  speaking about the challenges and opportunities of our digital age, or working with communities fighting 
                  for their rights — I'm driven by the potential of words and stories to move people to action.
                </p>
                <p className="text-lg leading-relaxed">
                  My work spans three interconnected areas: strategic social media consulting, public speaking and education, 
                  and human rights advocacy. Each informs the others, creating a practice grounded in both strategy and values.
                </p>
                <p className="text-lg leading-relaxed">
                  I've worked with tech startups, NGOs, media organizations, universities, and grassroots movements. I've spoken 
                  at conferences across Europe and the Middle East. And I've been fortunate to collaborate with brilliant people 
                  working toward a more just and open society.
                </p>
                <p className="text-lg leading-relaxed">
                  When I'm not working, you'll find me reading, exploring cities, or having long conversations about ideas that matter.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What I Do
            </h2>
            <p className="text-lg text-gray-600">
              My work centers around three interconnected areas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-primary-300 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-50 to-primary-100 group-hover:from-primary-500 group-hover:to-primary-600 rounded-xl transition-all shadow-sm">
                  <pillar.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {pillar.description}
                </p>
                <Link
                  href={pillar.href}
                  className="inline-flex items-center text-primary-600 font-medium hover:gap-2 transition-all"
                >
                  Learn more →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you're looking for strategy, a speaker, or a collaborator on meaningful work.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

