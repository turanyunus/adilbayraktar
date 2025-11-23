'use client'

import { PathPageLayout } from '@/components/PathPageLayout'
import { MessageCircle, Presentation, Users, Lightbulb, Shield, BookOpen } from 'lucide-react'

export default function PublicSpeakingPage() {
  const services = [
    {
      title: 'Keynote Speeches',
      description: 'Inspiring and thought-provoking talks tailored to your event\'s theme and audience.',
      icon: Presentation,
    },
    {
      title: 'Panel Discussions',
      description: 'Expert participation in panel discussions on digital communication and social issues.',
      icon: MessageCircle,
    },
    {
      title: 'Workshops & Training',
      description: 'Interactive sessions on storytelling, digital strategy, and effective communication.',
      icon: BookOpen,
    },
    {
      title: 'Event Moderation',
      description: 'Professional moderation for conferences, debates, and community events.',
      icon: Users,
    },
    {
      title: 'Media Literacy Talks',
      description: 'Educational sessions on navigating the digital information landscape.',
      icon: Lightbulb,
    },
    {
      title: 'Human Rights Topics',
      description: 'Speaking on civic participation, freedom of expression, and social justice.',
      icon: Shield,
    },
  ]

  const projects = [
    {
      title: 'TEDx Istanbul',
      description: 'Keynote on "The Power of Digital Storytelling in Social Change"',
      goal: 'Inspire audience to use digital tools for impact',
      approach: 'Personal stories combined with actionable frameworks',
      result: '500+ attendees, 50K+ video views, featured in 3 media outlets',
    },
    {
      title: 'Digital Rights Conference',
      description: 'Moderated panel discussion with journalists, activists, and policymakers.',
      goal: 'Facilitate nuanced conversation on online freedom',
      approach: 'Prepared questions, ensured diverse perspectives heard',
      result: 'Highly engaging session praised by organizers and attendees',
    },
    {
      title: 'University Workshop Series',
      description: '3-day workshop on "Building Your Voice Online" for journalism students.',
      goal: 'Equip students with practical digital communication skills',
      approach: 'Mix of theory, case studies, and hands-on exercises',
      result: '95% positive feedback, invited back for annual series',
    },
    {
      title: 'Corporate Training',
      description: 'Communication workshop for executives at a Fortune 500 company.',
      goal: 'Improve leadership communication on social platforms',
      approach: 'Personalized coaching and strategic guidance',
      result: 'Executives increased their authentic engagement by 200%',
    },
  ]

  const process = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'We discuss your event, audience, goals, and specific topics you\'d like me to address.',
    },
    {
      step: 2,
      title: 'Content Development',
      description: 'I research and develop tailored content that resonates with your audience and fits your event format.',
    },
    {
      step: 3,
      title: 'Coordination & Preparation',
      description: 'Close collaboration with your team on logistics, A/V needs, and any special requirements.',
    },
    {
      step: 4,
      title: 'Delivery',
      description: 'Engaging, professional delivery with energy and authenticity that connects with your audience.',
    },
    {
      step: 5,
      title: 'Follow-Up',
      description: 'Post-event materials, Q&A continuation, and gathering feedback for future collaborations.',
    },
  ]

  return (
    <PathPageLayout
      title="Public Speaking"
      subtitle="Engaging talks, panels, and workshops on digital communication, storytelling, media literacy, and human rights. I bring insight and energy to every stage."
      heroGradient="from-purple-50 to-white"
      services={services}
      projects={projects}
      process={process}
      ctaTitle="Book Me for Your Next Event"
      ctaDescription="Let's create an impactful experience for your audience."
    />
  )
}

