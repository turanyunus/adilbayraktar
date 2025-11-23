"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Linkedin,
  Twitter,
  Mail,
  Send,
  Clock,
  CheckCircle,
  MessageSquare,
  Phone,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
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
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
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
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
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
                    <option value="human-rights">
                      Human Rights Collaboration
                    </option>
                    <option value="other">Something Else</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
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
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-bold text-primary-700">
                    Response Time
                  </h3>
                </div>
                <p className="text-gray-600">
                  I typically respond to inquiries within 1-2 business days.
                  Looking forward to connecting!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
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
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Quick answers to common questions
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  q: "What types of projects do you take on?",
                  a: "I work with a wide range of clients including tech startups, NGOs, media organizations, universities, and grassroots movements. Whether you need social media strategy, a speaker for your event, or a collaborator on human rights work, I&apos;d love to hear about your project.",
                },
                {
                  q: "How do you approach new projects?",
                  a: "Every project starts with understanding your goals, audience, and values. I believe in collaborative partnerships where we work together to create something meaningful and effective.",
                },
                {
                  q: "Do you work with international clients?",
                  a: "Yes! I&apos;ve worked with clients and spoken at events across Europe, the Middle East, and beyond. Remote collaboration is seamless, and I&apos;m happy to travel for speaking engagements.",
                },
                {
                  q: "What&apos;s your typical response time?",
                  a: "I aim to respond to all inquiries within 1-2 business days. For urgent matters, feel free to mention it in your message.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-start gap-2">
                    <MessageSquare className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 ml-7">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Work Together */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work Together?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: CheckCircle,
                  title: "Proven Results",
                  description:
                    "Track record of successful campaigns and meaningful impact across diverse projects.",
                },
                {
                  icon: MessageSquare,
                  title: "Clear Communication",
                  description:
                    "Transparent process with regular updates and collaborative decision-making.",
                },
                {
                  icon: Clock,
                  title: "Reliable & Timely",
                  description:
                    "Consistent delivery on time, every time. Your deadlines are my priorities.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-100 text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl mb-4">
                    <item.icon className="w-7 h-7 text-primary-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
