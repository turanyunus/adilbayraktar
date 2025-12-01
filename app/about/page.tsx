"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  TrendingUp,
  Mic,
  Scale,
  GraduationCap,
  Briefcase,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Globe,
} from "lucide-react";

export default function AboutPage() {
  const pillars = [
    {
      icon: TrendingUp,
      title: "Social Media",
      description:
        "Over a decade of experience helping brands, organizations, and individuals amplify their message and build authentic connections online.",
      href: "/social-media",
    },
    {
      icon: Mic,
      title: "Public Speaking",
      description:
        "Regular speaker at conferences, universities, and events on topics ranging from digital storytelling to media literacy and civic participation.",
      href: "/public-speaking",
    },
    {
      icon: Scale,
      title: "Human Rights",
      description:
        "Active in advocacy work defending freedom of expression, working with civil society, and supporting movements for equality and justice.",
      href: "/human-rights",
    },
  ];

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
            <p className="text-2xl md:text-3xl font-semibold text-primary-600 mb-4">
              Culture Broker
            </p>
            <p className="text-xl text-gray-600">
              I&apos;m Adil Bayraktar, working at the intersection of
              communication, public voice, and human rights.
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
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/publicspeaker/IMG_4244.jpg"
                    alt="Adil Bayraktar"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="flex-1 space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  I believe in the power of communication to create change.
                  Whether it&apos;s helping a brand find its voice, speaking
                  about the challenges and opportunities of our digital age, or
                  working with communities fighting for their rights — I&apos;m
                  driven by the potential of words and stories to move people to
                  action.
                </p>
                <p className="text-lg leading-relaxed">
                  My work spans three interconnected areas: strategic social
                  media consulting, public speaking and education, and human
                  rights advocacy. Each informs the others, creating a practice
                  grounded in both strategy and values.
                </p>
                <p className="text-lg leading-relaxed">
                  I&apos;ve worked with tech startups, NGOs, media
                  organizations, universities, and grassroots movements.
                  I&apos;ve spoken at conferences across Europe and the Middle
                  East. And I&apos;ve been fortunate to collaborate with
                  brilliant people working toward a more just and open society.
                </p>
                <p className="text-lg leading-relaxed">
                  When I&apos;m not working, you&apos;ll find me reading,
                  exploring cities, or having long conversations about ideas
                  that matter.
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
                <p className="text-gray-600 mb-6">{pillar.description}</p>
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

      {/* Experience & Education */}
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
                Background & Experience
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 bg-gray-50 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Professional Experience
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      10+ Years in Digital Communication
                    </div>
                    <div className="text-gray-600 text-sm">
                      Social media strategy, content creation, and brand
                      building
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      50+ Speaking Engagements
                    </div>
                    <div className="text-gray-600 text-sm">
                      Conferences, universities, and events across Europe &
                      Middle East
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      100+ Projects Completed
                    </div>
                    <div className="text-gray-600 text-sm">
                      Working with startups, NGOs, media, and grassroots
                      movements
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 bg-gray-50 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-100 to-accent-200 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-accent-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Areas of Expertise
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Social Media Strategy
                      </div>
                      <div className="text-gray-600 text-sm">
                        Platform management, content strategy, community
                        building
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mic className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Public Speaking & Education
                      </div>
                      <div className="text-gray-600 text-sm">
                        Keynotes, workshops, media literacy, digital
                        storytelling
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Scale className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Human Rights Advocacy
                      </div>
                      <div className="text-gray-600 text-sm">
                        Freedom of expression, digital rights, civic
                        participation
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests & Values */}
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
                What Drives Me
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-6 bg-white rounded-xl border border-gray-200 text-center"
              >
                <BookOpen className="w-10 h-10 text-primary-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Learning</h3>
                <p className="text-gray-600 text-sm">
                  Always reading, exploring, and staying curious about the world
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-6 bg-white rounded-xl border border-gray-200 text-center"
              >
                <Globe className="w-10 h-10 text-primary-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Connection</h3>
                <p className="text-gray-600 text-sm">
                  Building bridges between ideas, people, and communities
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 bg-white rounded-xl border border-gray-200 text-center"
              >
                <Award className="w-10 h-10 text-primary-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Impact</h3>
                <p className="text-gray-600 text-sm">
                  Creating meaningful change through words and action
                </p>
              </motion.div>
            </div>
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
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you&apos;re looking for strategy, a speaker, or a
              collaborator on meaningful work.
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
  );
}
