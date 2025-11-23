'use client'

import { PathPageLayout } from '@/components/PathPageLayout'
import { Scale, Heart, Users, Megaphone, FileText, Globe } from 'lucide-react'

export default function HumanRightsPage() {
  const services = [
    {
      title: 'Freedom of Expression Advocacy',
      description: 'Campaigns and initiatives defending free speech and digital rights.',
      icon: Megaphone,
    },
    {
      title: 'Social Justice Projects',
      description: 'Community-driven projects addressing inequality and systemic issues.',
      icon: Scale,
    },
    {
      title: 'Civil Society Collaboration',
      description: 'Partnerships with NGOs and grassroots organizations on rights-based work.',
      icon: Users,
    },
    {
      title: 'Policy & Research',
      description: 'Contributing to policy discussions and research on digital rights and governance.',
      icon: FileText,
    },
    {
      title: 'Community Organizing',
      description: 'Building networks and movements for collective action and change.',
      icon: Heart,
    },
    {
      title: 'International Advocacy',
      description: 'Cross-border collaboration on global human rights challenges.',
      icon: Globe,
    },
  ]

  const projects = [
    {
      title: 'Digital Rights Campaign',
      description: 'Led a coalition campaign for stronger online privacy protections.',
      goal: 'Raise awareness and influence policy discussions',
      approach: 'Multi-stakeholder collaboration with NGOs, activists, and legal experts',
      result: 'Campaign reached 5M people, contributed to policy review process',
    },
    {
      title: 'Press Freedom Initiative',
      description: 'Co-founded initiative supporting journalists facing legal harassment.',
      goal: 'Provide legal, financial, and psychological support',
      approach: 'Built network of lawyers, raised funds, created support systems',
      result: 'Assisted 40+ journalists, created sustainable support model',
    },
    {
      title: 'Community Education Program',
      description: 'Developed educational program on rights and civic participation for youth.',
      goal: 'Empower next generation with knowledge of their rights',
      approach: 'Interactive workshops in schools and community centers',
      result: 'Reached 2,000 young people across 15 cities',
    },
  ]

  const process = [
    {
      step: 1,
      title: 'Issue Identification',
      description: 'Working with communities to identify pressing rights issues and needs.',
    },
    {
      step: 2,
      title: 'Coalition Building',
      description: 'Bringing together diverse stakeholders and building strong partnerships.',
    },
    {
      step: 3,
      title: 'Strategy Development',
      description: 'Creating comprehensive strategies combining advocacy, education, and direct action.',
    },
    {
      step: 4,
      title: 'Implementation & Action',
      description: 'Executing campaigns, providing support, and driving tangible change.',
    },
    {
      step: 5,
      title: 'Impact & Sustainability',
      description: 'Measuring impact, documenting learnings, and building for long-term change.',
    },
  ]

  return (
    <PathPageLayout
      title="Human Rights Work & Activism"
      subtitle="Committed to defending freedom of expression, equality, and social justice. I work with communities, organizations, and movements to create lasting change."
      heroGradient="from-amber-50 to-white"
      services={services}
      projects={projects}
      process={process}
      ctaTitle="Join Forces for Change"
      ctaDescription="Let's work together on projects that matter."
    />
  )
}

