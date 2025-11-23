'use client'

import { PathPageLayout } from '@/components/PathPageLayout'
import { BarChart, Calendar, Users, MessageSquare, Rocket, GraduationCap } from 'lucide-react'

export default function SocialMediaPage() {
  const services = [
    {
      title: 'Social Media Strategy & Audit',
      description: 'Comprehensive analysis of your current presence and strategic roadmap for growth.',
      icon: BarChart,
    },
    {
      title: 'Content Calendar & Production',
      description: 'Planned, consistent content that resonates with your audience and drives engagement.',
      icon: Calendar,
    },
    {
      title: 'Account Management',
      description: 'Full management of Instagram, TikTok, X (Twitter), LinkedIn, and other platforms.',
      icon: Users,
    },
    {
      title: 'Community Management',
      description: 'Building and nurturing engaged communities around your brand.',
      icon: MessageSquare,
    },
    {
      title: 'Campaigns & Launches',
      description: 'Strategic campaign planning and execution for product launches and initiatives.',
      icon: Rocket,
    },
    {
      title: 'Team Training',
      description: 'Workshops and training sessions to upskill your internal team.',
      icon: GraduationCap,
    },
  ]

  const projects = [
    {
      title: 'Tech Startup Growth',
      description: 'Helped a B2B SaaS company establish their social presence from zero.',
      goal: 'Build brand awareness and generate leads',
      approach: 'LinkedIn-first strategy with thought leadership content',
      result: '12K followers and 40% increase in qualified leads in 6 months',
    },
    {
      title: 'NGO Campaign',
      description: 'Managed social media for a human rights organization\'s awareness campaign.',
      goal: 'Amplify message and drive petition signatures',
      approach: 'Multi-platform storytelling with user-generated content',
      result: '2M impressions and 25K petition signatures in 3 weeks',
    },
    {
      title: 'Creator Brand Launch',
      description: 'Launched and managed social presence for an educational content creator.',
      goal: 'Build engaged audience across platforms',
      approach: 'Cross-platform content adaptation and community engagement',
      result: '50K followers across Instagram, TikTok, and YouTube in first year',
    },
  ]

  const process = [
    {
      step: 1,
      title: 'Discovery & Audit',
      description: 'We start with understanding your goals, audience, and current performance. I conduct a thorough audit of your existing presence.',
    },
    {
      step: 2,
      title: 'Strategy Development',
      description: 'Based on insights, I create a tailored strategy including platform priorities, content pillars, and growth tactics.',
    },
    {
      step: 3,
      title: 'Content Creation & Planning',
      description: 'I develop a content calendar and either create content or guide your team through production.',
    },
    {
      step: 4,
      title: 'Implementation & Management',
      description: 'Consistent execution with daily management, community engagement, and real-time optimization.',
    },
    {
      step: 5,
      title: 'Analysis & Optimization',
      description: 'Regular reporting with actionable insights and continuous refinement based on performance data.',
    },
  ]

  return (
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
  )
}

