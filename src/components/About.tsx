"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Target, Zap } from "lucide-react";
import { useState } from "react";

const highlights = [
  {
    icon: Briefcase,
    title: "Professional Developer",
    description:
      "Specialized in building production-ready websites and web applications with a focus on quality and performance.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description:
      "I prioritize understanding client needs and delivering solutions that drive real business results and growth.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every project is optimized for SEO, user experience, and conversion with measurable KPIs and analytics.",
  },
  {
    icon: Zap,
    title: "Always Learning",
    description:
      "Staying updated with latest web technologies and best practices to deliver cutting-edge solutions.",
  },
];

export function About() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Web developer & designer dedicated to creating exceptional digital experiences that help businesses thrive
          </p>
        </motion.div>

        {/* Interactive Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="p-6 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all"
            >
              <div
                className="inline-block p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4 transition-all"
              >
                <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bio Section - Interactive Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            My Journey
          </h3>

          {/* Quick Summary */}
          <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed text-sm">
            🎓 <span className="font-semibold text-blue-600 dark:text-blue-400">Fresher & Freelance Web Developer</span> • Graduated from <span className="font-semibold">ANITS</span> in <span className="font-semibold">April 2026</span> • Specializing in building fast, responsive websites and web applications
          </p>

          {/* Side by Side Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Tabs - Left Side */}
            <div className="md:col-span-1">
              <div className="flex md:flex-col gap-2">
                {[
                  { id: "overview", label: "💡 Overview" },
                  { id: "education", label: "🎓 Education" },
                  { id: "freelance", label: "💼 Freelance" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all whitespace-nowrap md:whitespace-normal ${
                      activeTab === tab.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="md:col-span-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 min-h-20"
            >
              {activeTab === "overview" && (
                <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>Building fast, responsive websites & web apps with MERN stack. Focused on client success & delivering solutions that drive real business results.</p>
                </div>
              )}

              {activeTab === "education" && (
                <div className="text-sm space-y-1.5">
                  <div className="text-gray-900 dark:text-white font-semibold">B.Tech Computer Science</div>
                  <div className="text-blue-600 dark:text-blue-400 font-medium text-sm">ANITS • Graduated April 2026</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Specialization: DSA, Web Dev, System Design</div>
                </div>
              )}

              {activeTab === "freelance" && (
                <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                  <li>✓ Full-stack website development</li>
                  <li>✓ Web application development</li>
                  <li>✓ SEO optimization & performance</li>
                  <li>✓ Dedicated client support</li>
                </ul>
              )}
            </motion.div>
          </div>

          <div className="space-y-4 mt-5">
            {/* Main Skills */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-600 rounded"></span>
                Main Skills
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* Problem Solving */}
                <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Problem Solving & Algorithms</h5>
                  <p className="text-sm text-gray-700 dark:text-gray-300">✓ Python (Data Structures & Algorithms)</p>
                </div>

                {/* Frontend Development */}
                <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Frontend Development</h5>
                  <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <p>✓ React & Next.js</p>
                    <p>✓ Tailwind CSS & Responsive</p>
                    <p>✓ JavaScript/TypeScript</p>
                    <p>✓ UI/UX Implementation</p>
                  </div>
                </div>

                {/* Backend & Database */}
                <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Backend & Database</h5>
                  <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <p>✓ Node.js & Express</p>
                    <p>✓ MongoDB & PostgreSQL</p>
                    <p>✓ REST APIs & Authentication</p>
                    <p>✓ Server Architecture</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Competencies */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-600 rounded"></span>
                Core Competencies
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Website Development",
                  "Web Applications",
                  "SEO Optimization",
                  "UI/UX Design",
                  "Performance Optimization",
                  "Client Consultation",
                  "Responsive Design",
                  "E-commerce Solutions",
                ].map((skill, idx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-600 rounded"></span>
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "React",
                  "Next.js",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Tailwind CSS",
                  "TypeScript",
                  "SEO Tools",
                ].map((tech) => (
                  <motion.span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </motion.span>
                ))}
              </div>
            </div>

            {/* Education & Experience */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-600 rounded"></span>
                Education & Experience
              </h4>
              <div className="space-y-2">
                <div className="pb-2 border-l-4 border-blue-500 pl-3">
                  <h5 className="font-bold text-gray-900 dark:text-white text-sm">
                    B.Tech in Computer Science & Engineering
                  </h5>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                    ANITS
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-0.5">
                    Graduated: <span className="font-semibold">April 2026</span>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                    <span className="inline-block px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold">Fresher & Freelancer</span>
                  </p>
                </div>
                
                <div className="pb-2 border-l-4 border-blue-500 pl-3">
                  <h5 className="font-bold text-gray-900 dark:text-white text-sm">
                    Freelance Web Developer
                  </h5>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                    Self-Employed | Web Development
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                    Building responsive websites, web apps & providing SEO optimization services. Focused on quality solutions with dedicated client support.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Work With Me */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-600 rounded"></span>
                Why Choose Me
              </h4>
              <ul className="space-y-1.5 text-gray-700 dark:text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 flex-shrink-0">✓</span>
                  <span><strong>Dedicated Support:</strong> Ongoing support & maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 flex-shrink-0">✓</span>
                  <span><strong>SEO-First:</strong> Optimized for search & performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 flex-shrink-0">✓</span>
                  <span><strong>Business Focused:</strong> Solutions that drive conversions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 flex-shrink-0">✓</span>
                  <span><strong>Modern Tech:</strong> Latest tools & best practices</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
            Let's collaborate to turn your vision into reality
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Start a Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
