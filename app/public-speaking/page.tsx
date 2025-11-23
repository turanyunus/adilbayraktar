"use client";

import { PathPageLayout } from "@/components/PathPageLayout";
import {
  MessageCircle,
  Presentation,
  Users,
  Lightbulb,
  Shield,
  BookOpen,
  Calendar,
  MapPin,
  Video,
  Star,
  Quote,
} from "lucide-react";
import { motion } from "framer-motion";

export default function PublicSpeakingPage() {
  const services = [
    {
      title: "Keynote Speeches",
      description:
        "Inspiring and thought-provoking talks tailored to your event's theme and audience.",
      icon: Presentation,
    },
    {
      title: "Panel Discussions",
      description:
        "Expert participation in panel discussions on digital communication and social issues.",
      icon: MessageCircle,
    },
    {
      title: "Workshops & Training",
      description:
        "Interactive sessions on storytelling, digital strategy, and effective communication.",
      icon: BookOpen,
    },
    {
      title: "Event Moderation",
      description:
        "Professional moderation for conferences, debates, and community events.",
      icon: Users,
    },
    {
      title: "Media Literacy Talks",
      description:
        "Educational sessions on navigating the digital information landscape.",
      icon: Lightbulb,
    },
    {
      title: "Human Rights Topics",
      description:
        "Speaking on civic participation, freedom of expression, and social justice.",
      icon: Shield,
    },
  ];

  const projects = [
    {
      title: "TEDx Istanbul",
      description:
        'Keynote on "The Power of Digital Storytelling in Social Change"',
      goal: "Inspire audience to use digital tools for impact",
      approach: "Personal stories combined with actionable frameworks",
      result: "500+ attendees, 50K+ video views, featured in 3 media outlets",
    },
    {
      title: "Digital Rights Conference",
      description:
        "Moderated panel discussion with journalists, activists, and policymakers.",
      goal: "Facilitate nuanced conversation on online freedom",
      approach: "Prepared questions, ensured diverse perspectives heard",
      result: "Highly engaging session praised by organizers and attendees",
    },
    {
      title: "University Workshop Series",
      description:
        '3-day workshop on "Building Your Voice Online" for journalism students.',
      goal: "Equip students with practical digital communication skills",
      approach: "Mix of theory, case studies, and hands-on exercises",
      result: "95% positive feedback, invited back for annual series",
    },
    {
      title: "Corporate Training",
      description:
        "Communication workshop for executives at a Fortune 500 company.",
      goal: "Improve leadership communication on social platforms",
      approach: "Personalized coaching and strategic guidance",
      result: "Executives increased their authentic engagement by 200%",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Initial Consultation",
      description:
        "We discuss your event, audience, goals, and specific topics you'd like me to address.",
    },
    {
      step: 2,
      title: "Content Development",
      description:
        "I research and develop tailored content that resonates with your audience and fits your event format.",
    },
    {
      step: 3,
      title: "Coordination & Preparation",
      description:
        "Close collaboration with your team on logistics, A/V needs, and any special requirements.",
    },
    {
      step: 4,
      title: "Delivery",
      description:
        "Engaging, professional delivery with energy and authenticity that connects with your audience.",
    },
    {
      step: 5,
      title: "Follow-Up",
      description:
        "Post-event materials, Q&A continuation, and gathering feedback for future collaborations.",
    },
  ];

  const topics = [
    "Digital Storytelling & Content Strategy",
    "Media Literacy in the Digital Age",
    "Social Media for Social Change",
    "Freedom of Expression & Digital Rights",
    "Building Authentic Online Communities",
    "Civic Participation & Democracy",
  ];

  const recentEvents = [
    {
      name: "TEDx Istanbul",
      location: "Istanbul, Turkey",
      date: "2023",
      type: "Keynote",
    },
    {
      name: "Digital Rights Summit",
      location: "Berlin, Germany",
      date: "2023",
      type: "Panel",
    },
    {
      name: "Media Literacy Conference",
      location: "Amsterdam, Netherlands",
      date: "2024",
      type: "Workshop",
    },
    {
      name: "Social Impact Forum",
      location: "London, UK",
      date: "2024",
      type: "Keynote",
    },
  ];

  const testimonials = [
    {
      quote:
        "Adil brought incredible energy and insight to our event. His talk on digital storytelling resonated deeply with our audience.",
      author: "Event Organizer",
      event: "TEDx Istanbul",
    },
    {
      quote:
        "The workshop was engaging, practical, and inspiring. Our students left with actionable strategies they could implement immediately.",
      author: "University Professor",
      event: "Journalism Workshop Series",
    },
  ];

  return (
    <>
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

      {/* Topics Section */}
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
                Speaking Topics
              </h2>
              <p className="text-lg text-gray-600">
                Topics I frequently speak about, tailored to your audience
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {topics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-3">
                    <Presentation className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium">{topic}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Events */}
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
                Recent Speaking Engagements
              </h2>
              <p className="text-lg text-gray-600">
                Where I&apos;ve been sharing insights recently
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {recentEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {event.name}
                    </h3>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
                      {event.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
                What People Say
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100"
                >
                  <Quote className="w-8 h-8 text-purple-300 mb-4" />
                  <p className="text-gray-700 mb-6 italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.event}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
