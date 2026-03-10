"use client";

import { motion } from "framer-motion";
import { type Skill } from "@/types";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiFigma,
} from "react-icons/si";

const skillsByCategory: { [key: string]: Skill[] } = {
  frontend: [
    { id: "1", name: "JavaScript (ES6+)", icon: "/icons/js.png", category: "frontend", proficiency: 90 },
    { id: "2", name: "React.js", icon: "/icons/React.png", category: "frontend", proficiency: 85 },
    { id: "3", name: "Next.js (SSR/SSG/ISR)", icon: "/icons/Next.js.png", category: "frontend", proficiency: 85 },
    { id: "4", name: "TypeScript", icon: "/icons/TypeScript.png", category: "frontend", proficiency: 85 },
    { id: "5", name: "HTML5 & CSS", icon: "/icons/HTML5.png", category: "frontend", proficiency: 90 },
    { id: "6", name: "Tailwind CSS", icon: "/icons/Tailwind CSS.png", category: "frontend", proficiency: 90 },
    { id: "8", name: "Redux Toolkit", icon: "/icons/Redux.png", category: "frontend", proficiency: 80 },
    { id: "11", name: "Framer Motion", icon: "/icons/new updated icons/Brand-Framer-Motion--Streamline-Tabler.png", category: "frontend", proficiency: 80 },
    { id: "12", name: "UI Performance Optimization", icon: "/icons/new updated icons/optimization.png", category: "frontend", proficiency: 85 },
    { id: "13", name: "Component-Driven Development", icon: "/icons/React.png", category: "frontend", proficiency: 90 },
  ],
  backend: [
    { id: "14", name: "Node.js & Express.js", icon: "/icons/Node.js.png", category: "backend", proficiency: 85 },
    { id: "15", name: "REST API Architecture", icon: "/icons/Express.png", category: "backend", proficiency: 88 },
    { id: "16", name: "JWT Authentication & RBAC", icon: "/icons/js.png", category: "backend", proficiency: 85 },
    { id: "17", name: "Socket.io (Real-time)", icon: "/icons/Socket.io.png", category: "backend", proficiency: 80 },
    { id: "18", name: "Microservices Architecture", icon: "/icons/Node.js.png", category: "backend", proficiency: 75 },
    { id: "19", name: "Async Programming", icon: "/icons/js.png", category: "backend", proficiency: 88 },
    { id: "20", name: "Event-Driven Architecture", icon: "/icons/Node.js.png", category: "backend", proficiency: 80 },
  ],
  database: [
    { id: "21", name: "MongoDB (Aggregation/Indexing)", icon: "/icons/MongoDB.png", category: "database", proficiency: 85 },
    { id: "22", name: "PostgreSQL", icon: "/icons/new updated icons/PostgresSQL.png", category: "database", proficiency: 80 },
    { id: "23", name: "MySQL", icon: "/icons/MySQL.png", category: "database", proficiency: 80 },
    { id: "24", name: "Redis", icon: "/icons/Redis.png", category: "database", proficiency: 75 },
    { id: "25", name: "Prisma ORM", icon: "/icons/js.png", category: "database", proficiency: 80 },
    { id: "26", name: "Mongoose", icon: "/icons/Mongoose.js.png", category: "database", proficiency: 85 },
    { id: "27", name: "SQL & Database Design", icon: "/icons/new updated icons/DB.png", category: "database", proficiency: 88 },
  ],
  tools: [
    { id: "28", name: "Git & GitHub", icon: "/icons/Git.png", category: "tools", proficiency: 90 },
    { id: "29", name: "GitHub Actions (CI/CD)", icon: "/icons/GitHub.png", category: "tools", proficiency: 85 },
    { id: "31", name: "AWS (EC2/S3)", icon: "/icons/Cloudflare.png", category: "tools", proficiency: 75 },
    { id: "32", name: "Vercel", icon: "/icons/Vercel.png", category: "tools", proficiency: 90 },
    { id: "33", name: "Netlify", icon: "/icons/new updated icons/netlify.png", category: "tools", proficiency: 85 },
    { id: "34", name: "Render", icon: "/icons/new updated icons/Render logomark - White.png", category: "tools", proficiency: 80 },
    { id: "35", name: "Cloudinary", icon: "/icons/Cloudflare.png", category: "tools", proficiency: 80 },
    { id: "36", name: "Razorpay/Stripe", icon: "/icons/new updated icons/Razorpay.png", category: "tools", proficiency: 85 },
    { id: "37", name: "Postman", icon: "/icons/Postman.png", category: "tools", proficiency: 90 },
    { id: "38", name: "Jest (Testing)", icon: "/icons/Jest.png", category: "tools", proficiency: 80 },
    { id: "39", name: "ESLint & Prettier", icon: "/icons/ESLint.png", category: "tools", proficiency: 85 },
    { id: "40", name: "Jira (Project Management)", icon: "/icons/Jira.png", category: "tools", proficiency: 80 },
    { id: "41", name: "Agile/Scrum", icon: "/icons/Git.png", category: "tools", proficiency: 85 },
  ],
  other: [
    { id: "42", name: "Python", icon: "/icons/Python.png", category: "other", proficiency: 75 },
    { id: "43", name: "Data Structures & Algorithms", icon: "/icons/The Algorithms.png", category: "other", proficiency: 88 },
    { id: "44", name: "Object-Oriented Programming (OOP)", icon: "/icons/new updated icons/OOP.png", category: "other", proficiency: 85 },
    { id: "46", name: "Problem-Solving & Debugging", icon: "/icons/new updated icons/prob solving .png", category: "other", proficiency: 90 },
    { id: "49", name: "MVC Architecture", icon: "/icons/js.png", category: "other", proficiency: 85 },
  ],
};

const iconMap: { [key: string]: any } = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  node: SiNodedotjs,
  express: SiExpress,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  git: SiGit,
  docker: SiDocker,
  figma: SiFigma,
};

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid by Category */}
        {Object.entries(skillsByCategory).map((category) => (
          <div key={category[0]} className="mb-12">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6 capitalize"
            >
              {category[0]}
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {category[1].map((skill) => {
                return (
                  <motion.div
                    key={skill.id}
                    variants={itemVariants}
                    className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all cursor-pointer group"
                  >
                    <div className="flex flex-col items-center">
                      {skill.icon ? (
                        <img
                          src={skill.icon}
                          alt={skill.name + ' icon'}
                          className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform"
                        />
                      ) : (
                        <SiReact className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                      )}
                      <h4 className="font-semibold text-gray-900 dark:text-white text-center mb-3">
                        {skill.name}
                      </h4>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="bg-blue-600 dark:bg-blue-400 h-full rounded-full"
                        />
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        {skill.proficiency}%
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
