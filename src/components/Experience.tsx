"use client";

import { motion } from "framer-motion";
import { type Experience } from "@/types";
import { Briefcase } from "lucide-react";
import Image from "next/image";

const experiences: Experience[] = [
  {
    id: "1",
    role: "MERN Stack Intern",
    company: "Abilio IT Solutions PVT LTD – Hyderabad, India",
    duration: {
      start: "Nov 2025",
      end: "Present",
    },
    description:
      "Developing full-stack MERN applications with focus on responsive design, secure authentication, and payment gateway integration for production-ready e-commerce solutions.",
    responsibilities: [
      "Developed a MERN-based E-Commerce Application using React, Node.js, Express, and MongoDB",
      "Implemented JWT Authentication, structured MongoDB schemas, and REST APIs for secure user login",
      "Integrated Razorpay Payment Gateway with secure transaction handling",
      "Deployed applications using Render & Netlify with SSL configuration",
      "Built admin dashboard with responsive UI design and cart management features",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Razorpay", "Vercel", "Netlify", "SSL"],
  },
  {
    id: "2",
    role: "Full Stack Web Developer Intern",
    company: "Internzvalley – Bengaluru, India",
    duration: {
      start: "Sept 2025",
      end: "Oct 2025",
    },
    description:
      "Built full-stack MERN applications with AI-driven features, implementing advanced authentication and database handling for production-ready job portal and collaboration platforms.",
    responsibilities: [
      "Developed MERN stack applications with React frontend and Node.js/Express backend",
      "Implemented advanced AI-driven features including resume parsing and job-match scoring",
      "Integrated OpenAI APIs for semantic embeddings-based recommendations",
      "Shipped production-ready Job Portal with role-based access and candidate tracking",
      "Implemented real-time updates and search filters for job matching",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "OpenAI", "JWT"],
  },
  {
    id: "3",
    role: "Artificial Intelligence Intern",
    company: "Corizo  – Bengaluru, India",
    duration: {
      start: "Jun 2024",
      end: "Aug 2024",
    },
    description:
      "Researched and implemented machine learning models for natural language processing and computer vision applications.",
    responsibilities: [
      "Conducted research on state-of-the-art NLP techniques and implemented them in real-world applications",
      "Developed computer vision models for image classification and object detection tasks",
      "Collaborated with senior developers to integrate AI models into existing software solutions",
      "Presented findings and insights to the development team and stakeholders",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Scikit-learn"],
  }
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A timeline of my professional journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-green-500 dark:from-blue-400 dark:to-green-400 transform md:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative ${index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2"}`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute left-0 md:left-1/2 top-2 w-4 h-4 bg-white dark:bg-gray-800 border-4 border-blue-600 dark:border-blue-400 rounded-full transform -translate-x-1.5 md:-translate-x-[0.4375rem]"
                />

                {/* Content */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`ml-8 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-1/2 md:pr-12" : "md:ml-1/2 md:pl-12"
                  } bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors`}
                >
                  <div className="flex items-center mb-2">
                    {exp.company.includes("Abilio") && (
                      <Image
                        src="/COMPANIES/new logo abilio.jpeg"
                        alt="Abilio IT Solutions Logo"
                        width={40}
                        height={40}
                        className="w-10 h-10 mr-3 rounded-full"
                      />
                    )}
                    {exp.company.includes("Internzvalley") && (
                      <Image
                        src="/COMPANIES/INTERNZVALLEy cut logog.png"
                        alt="Internzvalley Logo"
                        width={40}
                        height={40}
                        className="w-10 h-10 mr-3 rounded-full"
                      />
                    )}
                    {exp.company.includes("Corizo") && (
                      <Image
                        src="/COMPANIES/idgJPjoAMv_logos.png"
                        alt="Corizo Logo"
                        width={40}
                        height={40}
                        className="w-10 h-10 mr-3 rounded-full"
                      />
                    )}
                    <span className="font-bold text-xl text-gray-900 dark:text-white">
                      {exp.role}
                    </span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {exp.duration.start} — {exp.duration.end}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1 flex-shrink-0"></span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
