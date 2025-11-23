'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Linkedin, Twitter, Mail, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to an API
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Let&apos;s Talk
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a project in mind? Want to collaborate? Just want to say hi? 
              I&apos;d love to hear from you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-thunder-blue focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-thunder-blue focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    I&apos;m interested in...
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-thunder-blue focus:border-transparent"
                  >
                    <option value="">Select a topic</option>
                    <option value="social-media">Social Media Services</option>
                    <option value="speaking">Public Speaking / Event</option>
                    <option value="human-rights">Human Rights Collaboration</option>
                    <option value="other">Something Else</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    <>
                      <span>Message Sent!</span>
                      <span className="text-2xl">✓</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Direct Contact */}
              <div className="p-8 bg-gray-50 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:hello@adilbayraktar.com"
                    className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>hello@adilbayraktar.com</span>
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-8 bg-gray-50 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Connect on Social
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://linkedin.com/in/adilbayraktar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors group"
                  >
                    <div className="p-2 bg-white rounded-lg group-hover:bg-primary-50 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://twitter.com/adilbayraktar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors group"
                  >
                    <div className="p-2 bg-white rounded-lg group-hover:bg-primary-50 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </div>
                    <span>Twitter / X</span>
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="p-8 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl border border-primary-100">
                <h3 className="text-xl font-bold text-primary-700 mb-2">
                  Response Time
                </h3>
                <p className="text-gray-600">
                  I typically respond to inquiries within 1-2 business days. 
                  Looking forward to connecting!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

