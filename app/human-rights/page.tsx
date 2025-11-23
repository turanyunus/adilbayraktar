"use client";

import { PathPageLayout } from "@/components/PathPageLayout";
import {
  Scale,
  Heart,
  Users,
  Megaphone,
  FileText,
  Globe,
  Award,
  TrendingUp,
  Handshake,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HumanRightsPage() {
  const services = [
    {
      title: "Freedom of Expression Advocacy",
      description:
        "Campaigns and initiatives defending free speech and digital rights.",
      icon: Megaphone,
    },
    {
      title: "Social Justice Projects",
      description:
        "Community-driven projects addressing inequality and systemic issues.",
      icon: Scale,
    },
    {
      title: "Civil Society Collaboration",
      description:
        "Partnerships with NGOs and grassroots organizations on rights-based work.",
      icon: Users,
    },
    {
      title: "Policy & Research",
      description:
        "Contributing to policy discussions and research on digital rights and governance.",
      icon: FileText,
    },
    {
      title: "Community Organizing",
      description:
        "Building networks and movements for collective action and change.",
      icon: Heart,
    },
    {
      title: "International Advocacy",
      description:
        "Cross-border collaboration on global human rights challenges.",
      icon: Globe,
    },
  ];

  const projects = [
    {
      title: "Digital Rights Campaign",
      description:
        "Led a coalition campaign for stronger online privacy protections.",
      goal: "Raise awareness and influence policy discussions",
      approach:
        "Multi-stakeholder collaboration with NGOs, activists, and legal experts",
      result:
        "Campaign reached 5M people, contributed to policy review process",
    },
    {
      title: "Press Freedom Initiative",
      description:
        "Co-founded initiative supporting journalists facing legal harassment.",
      goal: "Provide legal, financial, and psychological support",
      approach:
        "Built network of lawyers, raised funds, created support systems",
      result: "Assisted 40+ journalists, created sustainable support model",
    },
    {
      title: "Community Education Program",
      description:
        "Developed educational program on rights and civic participation for youth.",
      goal: "Empower next generation with knowledge of their rights",
      approach: "Interactive workshops in schools and community centers",
      result: "Reached 2,000 young people across 15 cities",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Issue Identification",
      description:
        "Working with communities to identify pressing rights issues and needs.",
    },
    {
      step: 2,
      title: "Coalition Building",
      description:
        "Bringing together diverse stakeholders and building strong partnerships.",
    },
    {
      step: 3,
      title: "Strategy Development",
      description:
        "Creating comprehensive strategies combining advocacy, education, and direct action.",
    },
    {
      step: 4,
      title: "Implementation & Action",
      description:
        "Executing campaigns, providing support, and driving tangible change.",
    },
    {
      step: 5,
      title: "Impact & Sustainability",
      description:
        "Measuring impact, documenting learnings, and building for long-term change.",
    },
  ];

  const impactMetrics = [
    { label: "People Reached", value: "5M+", icon: Users },
    { label: "Projects Completed", value: "30+", icon: Target },
    { label: "Partners", value: "50+", icon: Handshake },
    { label: "Countries", value: "20+", icon: Globe },
  ];

  const focusAreas = [
    {
      title: "Freedom of Expression",
      description:
        "Defending the right to speak, write, and share ideas freely, especially in digital spaces.",
      icon: Megaphone,
    },
    {
      title: "Digital Rights",
      description:
        "Advocating for privacy, data protection, and equitable access to digital technologies.",
      icon: FileText,
    },
    {
      title: "Social Justice",
      description:
        "Working toward equality, fairness, and systemic change in our communities.",
      icon: Scale,
    },
    {
      title: "Civic Participation",
      description:
        "Empowering people to engage in democratic processes and community organizing.",
      icon: Heart,
    },
  ];

  return (
    <>
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

      {/* Impact Metrics */}
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
                Impact & Reach
              </h2>
              <p className="text-lg text-gray-600">
                The scale of our collective work for human rights
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {impactMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 bg-gradient-to-br from-amber-50 to-white rounded-xl border border-amber-100"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl mb-4">
                    <metric.icon className="w-8 h-8 text-amber-700" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-gray-600">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
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
                Focus Areas
              </h2>
              <p className="text-lg text-gray-600">
                The core issues I work on and advocate for
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center">
                      <area.icon className="w-7 h-7 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {area.title}
                      </h3>
                      <p className="text-gray-600">{area.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-amber-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Award className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Values-Driven Work
              </h2>
              <p className="text-xl text-amber-100 mb-8">
                Every project I take on is grounded in principles of justice,
                equality, and human dignity. I believe that meaningful change
                comes from working with communities, not for them.
              </p>
              <p className="text-lg text-amber-50">
                If you&apos;re working on human rights, social justice, or civic
                engagement, I&apos;d love to explore how we can collaborate.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
