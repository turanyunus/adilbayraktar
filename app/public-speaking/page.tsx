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
  Mic,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function PublicSpeakingPage() {
  const services = [
    {
      title: "Interfaith Dialogue",
      description:
        "Extensive experience facilitating interfaith dialogue at churches, universities, and private organizations, building bridges between communities.",
      icon: MessageCircle,
    },
    {
      title: "Keynote Speeches",
      description:
        "Inspiring and thought-provoking talks tailored to your event's theme and audience, including TEDx and Pecha Kucha formats.",
      icon: Presentation,
    },
    {
      title: "Panel Discussions",
      description:
        "Expert participation in panel discussions on immigration rights, refugee resettlement, political dialogue, and human rights advocacy.",
      icon: Users,
    },
    {
      title: "Workshops & Training",
      description:
        "Interactive sessions on storytelling, digital strategy, effective communication, and human rights topics.",
      icon: BookOpen,
    },
    {
      title: "Event Moderation",
      description:
        "Professional moderation for conferences, debates, and community events, including interfaith and political dialogues.",
      icon: Mic,
    },
    {
      title: "Human Rights Advocacy",
      description:
        "Speaking on refugee rights, immigration rights, Ahıska Turks mass exile, and broader human rights advocacy.",
      icon: Shield,
    },
  ];

  const projects = [
    {
      title: "Pecha Kucha Events",
      description:
        "Fast-paced presentations on refugee resettlement, immigration rights, and Ahıska Turks mass exile.",
      goal: "Share important stories in an accessible format",
      approach: "20 slides, 20 seconds each - concise and impactful",
      result:
        "High audience engagement, increased awareness of critical issues",
    },
    {
      title: "Interfaith Dialogue - Churches",
      description:
        "Facilitated interfaith dialogue sessions at churches, building understanding between faith communities.",
      goal: "Foster mutual respect and understanding across faith traditions",
      approach:
        "Open dialogue, shared experiences, and common ground exploration",
      result:
        "Strengthened community bonds, ongoing relationships, positive feedback",
    },
    {
      title: "Interfaith Dialogue - Universities",
      description:
        "Speaking engagements at universities on interfaith dialogue, refugee rights, and political dialogue.",
      goal: "Educate and inspire students to engage in meaningful dialogue",
      approach: "Academic rigor combined with personal narratives",
      result:
        "Student engagement, invitations for return visits, impact on campus dialogue",
    },
    {
      title: "Refugee Resettlement Panels",
      description:
        "Panel discussions on refugee resettlement, immigration rights, and refugee advocacy.",
      goal: "Raise awareness and advocate for refugee communities",
      approach: "Collaborative panels with diverse perspectives",
      result:
        "Increased community support, policy discussions, actionable outcomes",
    },
    {
      title: "Ahıska Turks Mass Exile Discussions",
      description:
        "Presentations and discussions on the historical and contemporary impact of Ahıska Turks mass exile.",
      goal: "Preserve history and raise awareness of this important community",
      approach:
        "Historical context, personal stories, and contemporary relevance",
      result: "Documented history, community recognition, educational impact",
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
    "Interfaith Dialogue",
    "Political Dialogue",
    "Refugee Resettlement",
    "Ahıska Turks Mass Exile Discussions",
    "Refugee Rights",
    "Immigration Rights & Panel Discussions",
    "Human Rights Advocacy",
    "Digital Storytelling & Content Strategy",
    "Media Literacy in the Digital Age",
    "Social Media for Social Change",
    "Freedom of Expression & Digital Rights",
    "Building Authentic Online Communities",
    "Civic Participation & Democracy",
  ];

  const recentEvents = [
    {
      name: "Pecha Kucha",
      location: "Various Locations",
      date: "Recent",
      type: "Presentation",
    },
    {
      name: "Interfaith Dialogue - Churches",
      location: "Various Locations",
      date: "Ongoing",
      type: "Dialogue",
    },
    {
      name: "Interfaith Dialogue - Universities",
      location: "Various Locations",
      date: "Ongoing",
      type: "Dialogue",
    },
    {
      name: "Interfaith Dialogue - Private Organizations",
      location: "Various Locations",
      date: "Ongoing",
      type: "Dialogue",
    },
  ];

  const testimonials = [
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
        subtitle="Engaging talks, panels, and workshops on digital communication, storytelling, media literacy, and human rights. I bring extensive experience in interfaith dialogue at churches, universities, and private organizations, along with appearances at events like Pecha Kucha. I bring insight and energy to every stage."
        heroGradient="from-purple-50 to-white"
        services={services}
        projects={projects}
        process={process}
        ctaTitle=""
        ctaDescription=""
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
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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

      {/* Photo Gallery */}
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
                Speaking Events Gallery
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Moments from various speaking engagements and events
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "4244",
                "4245",
                "4246",
                "4247",
                "4248",
                "4258",
                "4259",
                "4260",
                "4261",
                "4265",
                "4266",
                "4267",
              ].map((imgNum, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={`/images/publicspeaker/IMG_${imgNum}.jpg`}
                    alt={`Public speaking event ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
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
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Book Me for Your Next Event
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let&apos;s create an impactful experience for your audience.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
