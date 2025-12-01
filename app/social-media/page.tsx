"use client";

import { PathPageLayout } from "@/components/PathPageLayout";
import {
  BarChart,
  Calendar,
  Users,
  MessageSquare,
  Rocket,
  GraduationCap,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  TrendingUp,
  CheckCircle,
  Building2,
  User,
  Music,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SocialMediaPage() {
  const services = [
    {
      title: "Social Media Strategy & Audit",
      description:
        "Comprehensive analysis of your current presence and strategic roadmap for growth.",
      icon: BarChart,
    },
    {
      title: "Content Calendar & Production",
      description:
        "Planned, consistent content that resonates with your audience and drives engagement.",
      icon: Calendar,
    },
    {
      title: "Account Management",
      description:
        "Full management of Instagram, TikTok, X (Twitter), LinkedIn, and other platforms.",
      icon: Users,
    },
    {
      title: "Community Management",
      description:
        "Building and nurturing engaged communities around your brand.",
      icon: MessageSquare,
    },
    {
      title: "Campaigns & Launches",
      description:
        "Strategic campaign planning and execution for product launches and initiatives.",
      icon: Rocket,
    },
    {
      title: "Team Training",
      description:
        "Workshops and training sessions to upskill your internal team.",
      icon: GraduationCap,
    },
  ];

  const projects = [
    {
      title: "Tech Startup Growth",
      description:
        "Helped a B2B SaaS company establish their social presence from zero.",
      goal: "Build brand awareness and generate leads",
      approach: "LinkedIn-first strategy with thought leadership content",
      result: "12K followers and 40% increase in qualified leads in 6 months",
    },
    {
      title: "NGO Campaign",
      description:
        "Managed social media for a human rights organization's awareness campaign.",
      goal: "Amplify message and drive petition signatures",
      approach: "Multi-platform storytelling with user-generated content",
      result: "2M impressions and 25K petition signatures in 3 weeks",
    },
    {
      title: "Creator Brand Launch",
      description:
        "Launched and managed social presence for an educational content creator.",
      goal: "Build engaged audience across platforms",
      approach: "Cross-platform content adaptation and community engagement",
      result:
        "50K followers across Instagram, TikTok, and YouTube in first year",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Discovery & Audit",
      description:
        "We start with understanding your goals, audience, and current performance. I conduct a thorough audit of your existing presence.",
    },
    {
      step: 2,
      title: "Strategy Development",
      description:
        "Based on insights, I create a tailored strategy including platform priorities, content pillars, and growth tactics.",
    },
    {
      step: 3,
      title: "Content Creation & Planning",
      description:
        "I develop a content calendar and either create content or guide your team through production.",
    },
    {
      step: 4,
      title: "Implementation & Management",
      description:
        "Consistent execution with daily management, community engagement, and real-time optimization.",
    },
    {
      step: 5,
      title: "Analysis & Optimization",
      description:
        "Regular reporting with actionable insights and continuous refinement based on performance data.",
    },
  ];

  const platforms = [
    {
      name: "Instagram",
      icon: Instagram,
      color: "from-pink-500 to-purple-600",
    },
    { name: "LinkedIn", icon: Linkedin, color: "from-blue-600 to-blue-700" },
    { name: "Twitter / X", icon: Twitter, color: "from-gray-900 to-gray-800" },
    { name: "TikTok", icon: Youtube, color: "from-black to-gray-900" },
  ];

  const benefits = [
    "Increased brand awareness and visibility",
    "Higher engagement rates and community growth",
    "Data-driven strategy and optimization",
    "Consistent, authentic brand voice",
    "Time savings with professional management",
    "ROI-focused campaigns and reporting",
  ];

  return (
    <>
      <PathPageLayout
        title="Social Media Management & Consulting"
        subtitle="Strategic social media services that drive real results. From audits to full management, I help brands grow their digital presence authentically."
        heroGradient="from-blue-50 to-white"
        services={services}
        projects={projects}
        process={process}
        ctaTitle=""
        ctaDescription=""
      />

      {/* Platforms Section */}
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
                Platforms I Work With
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Expertise across all major social media platforms
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-lg transition-all group"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {platform.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients & Partners Section */}
      <section className="py-20 bg-gray-50">
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
                Clients & Partners
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                I&apos;ve had the privilege of working with diverse organizations, public figures, artists, and athletes
              </p>
            </motion.div>

            <div className="space-y-12">
              {/* Organizations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Organizations</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                    <div className="font-semibold text-gray-900 text-lg">The Spero Project</div>
                    <div className="text-gray-600 text-sm mt-1">Non-profit organization</div>
                  </div>
                  <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                    <div className="font-semibold text-gray-900 text-lg">Vocal Media</div>
                    <div className="text-gray-600 text-sm mt-1">Contractor</div>
                  </div>
                </div>
              </motion.div>

              {/* Political Figures */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                    <User className="w-6 h-6 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Political Figures</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                    <div className="font-semibold text-gray-900 text-lg">State Delegate Lesly Lopez</div>
                    <div className="text-gray-600 text-sm mt-1">Maryland State Delegate</div>
                  </div>
                  <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                    <div className="font-semibold text-gray-900 text-lg">Zeeshan Hafeez</div>
                    <div className="text-gray-600 text-sm mt-1">Texas Congress Candidate</div>
                  </div>
                </div>
              </motion.div>

              {/* Public Figures */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
                    <User className="w-6 h-6 text-purple-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Public Figures</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                    <div className="font-semibold text-gray-900 text-lg">Freeway Rick Ross</div>
                    <div className="text-gray-600 text-sm mt-1">Public figure & activist</div>
                  </div>
                </div>
              </motion.div>

              {/* Artists */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl flex items-center justify-center">
                    <Music className="w-6 h-6 text-pink-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Artists</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                    <div className="font-semibold text-gray-900 text-lg">Peezy</div>
                    <div className="text-gray-600 text-sm mt-1">Artist</div>
                  </div>
                  <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                    <div className="font-semibold text-gray-900 text-lg">38 Spesh</div>
                    <div className="text-gray-600 text-sm mt-1">Artist</div>
                  </div>
                  <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                    <div className="font-semibold text-gray-900 text-lg">Juice the Mac</div>
                    <div className="text-gray-600 text-sm mt-1">Artist</div>
                  </div>
                </div>
              </motion.div>

              {/* Athletes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-orange-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Athletes</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                    <div className="font-semibold text-gray-900 text-lg">MMA Fighters</div>
                    <div className="text-gray-600 text-sm mt-1">Mixed Martial Arts</div>
                  </div>
                  <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                    <div className="font-semibold text-gray-900 text-lg">Boxing</div>
                    <div className="text-gray-600 text-sm mt-1">Professional boxers</div>
                  </div>
                  <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                    <div className="font-semibold text-gray-900 text-lg">Soccer</div>
                    <div className="text-gray-600 text-sm mt-1">Professional players</div>
                  </div>
                  <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                    <div className="font-semibold text-gray-900 text-lg">Basketball</div>
                    <div className="text-gray-600 text-sm mt-1">Professional players</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-5xl font-bold text-white mb-2">300%</div>
                <div className="text-blue-100">Average Engagement Increase</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-5xl font-bold text-white mb-2">2M+</div>
                <div className="text-blue-100">Total Reach Managed</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-5xl font-bold text-white mb-2">50+</div>
                <div className="text-blue-100">Brands Helped</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
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
                What You&apos;ll Get
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive social media management that delivers results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-300 transition-colors"
                >
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
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
                Social Media Work Gallery
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Behind the scenes of social media campaigns and content creation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['4249', '4250', '4251', '4252', '4253', '4254', '4255', '4256', '4257', '4262', '4263', '4264'].map((imgNum, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={`/images/socialmedia/IMG_${imgNum}.jpg`}
                    alt={`Social media work ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Elevate Your Social Presence?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let&apos;s discuss how social media can help you reach your goals.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
