'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { SectionHeader } from './SectionHeader'
import { LucideIcon } from 'lucide-react'

interface Service {
  title: string
  description: string
  icon?: LucideIcon
}

interface Project {
  title: string
  description: string
  goal?: string
  approach?: string
  result?: string
}

interface ProcessStep {
  step: number
  title: string
  description: string
}

interface PathPageLayoutProps {
  title: string
  subtitle: string
  heroGradient?: string
  services: Service[]
  projects: Project[]
  process: ProcessStep[]
  ctaTitle: string
  ctaDescription: string
}

export function PathPageLayout({
  title,
  subtitle,
  heroGradient = 'from-accent-50 to-white',
  services,
  projects,
  process,
  ctaTitle,
  ctaDescription,
}: PathPageLayoutProps) {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero */}
      <section className={`bg-gradient-to-b ${heroGradient} py-12 md:py-20`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              {subtitle}
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Let&apos;s Work Together
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Services"
            subtitle="What I can help you with"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all group"
              >
                {service.icon && (
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-50 to-primary-100 group-hover:from-primary-500 group-hover:to-primary-600 rounded-lg transition-all">
                    <service.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects / Work */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Selected Work"
            subtitle="Examples of recent projects and results"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                {project.goal && (
                  <div className="mb-3">
                    <span className="text-sm font-semibold text-gray-900">Goal: </span>
                    <span className="text-sm text-gray-600">{project.goal}</span>
                  </div>
                )}
                {project.approach && (
                  <div className="mb-3">
                    <span className="text-sm font-semibold text-gray-900">Approach: </span>
                    <span className="text-sm text-gray-600">{project.approach}</span>
                  </div>
                )}
                {project.result && (
                  <div>
                    <span className="text-sm font-semibold text-primary-600">Result: </span>
                    <span className="text-sm text-gray-600">{project.result}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="How I Work"
            subtitle="My process for delivering results"
            centered
          />
          
          <div className="max-w-3xl mx-auto mt-12 space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {ctaTitle}
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              {ctaDescription}
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

