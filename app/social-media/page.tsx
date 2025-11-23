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
} from "lucide-react";
import { motion } from "framer-motion";

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
        ctaTitle="Ready to Elevate Your Social Presence?"
        ctaDescription="Let's discuss how social media can help you reach your goals."
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
              <p className="text-lg text-gray-600">
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

      {/* Benefits Section */}
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
                What You&apos;ll Get
              </h2>
              <p className="text-lg text-gray-600">
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
    </>
  );
}
