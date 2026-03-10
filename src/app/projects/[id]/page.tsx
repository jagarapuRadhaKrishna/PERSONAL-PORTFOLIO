"use client";

import { motion } from "framer-motion";
import { type Project } from "@/types";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";

const projects: Project[] = [
  {
    id: "1",
    title: "🤝 UnitEd – AI-Powered Academic Collaboration Platform",
    description: "Full-stack academic collaboration platform for students and faculty with real-time features",
    image: "/united project.png",
    technologies: ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL", "Tailwind CSS", "Machine Learning", "Realtime Systems"],
    features: [
      "Faculty publish opportunities, review candidates, invite students, and manage teams",
      "Students build profiles, discover matching posts, apply, receive invitations, and collaborate",
      "Real-time chatrooms and forums for academic discussions",
      "Secure Supabase authentication with role-based access",
      "Cosine-similarity recommendation engine for intelligent post matching",
      "Real-time subscriptions and live notifications",
      "Production deployment with Vercel and CI/CD via GitHub Actions",
      "Component-driven architecture with reusable UI patterns",
    ],
    links: {
      github: "https://github.com/jagarapuRadhaKrishna/UnitEd",
      live: "https://united-academic-network.vercel.app/",
    },
  },
  {
    id: "2",
    title: "🛋️ DFW Furniture – Premium E-Commerce Platform",
    description: "Comprehensive full-stack e-commerce platform with dual backend architecture and free demo service",
    image: "/ECOMMERCE .png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Spring Boot", "PostgreSQL", "MongoDB", "Razorpay"],
    features: [
      "60+ product subcategories across 6 main categories with advanced filtering",
      "360° product image viewer and 3D model support (GLB/GLTF/USDZ)",
      "Dual backend: MERN for content/real-time, Spring Boot for payments/orders",
      "Multi-step checkout with Razorpay and Stripe payment integration",
      "Real-time order tracking with Socket.io live updates",
      "FREE home demo booking system with technician assignment",
      "Custom furniture design requests with Cloudinary image management",
      "Admin dashboard with inventory management, user roles, and financial analytics",
      "Cart persistence, wishlist sharing, and price drop notifications",
      "SEO optimized with dynamic pages and automatic image optimization",
    ],
    links: {
      github: "https://github.com/jagarapuRadhaKrishna/full-scale-Furniture-E-Commerce-platform-",
      live: "https://divyafurnitureworld.com/",
    },
  },
  {
    id: "3",
    title: "🚀 NXT Hire – AI-Powered Career Coach & Job Portal",
    description: "Advanced AI-powered job portal with resume analysis, smart job matching, and interview preparation",
    image: "/nxthire.png",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "PostgreSQL", "Clerk Auth", "OpenAI", "Gemini API"],
    features: [
      "AI resume analyzer with ATS compatibility scoring and keyword optimization",
      "Smart job portal with AI-powered match scoring and salary prediction",
      "AI-generated personalized cover letters using OpenAI/Gemini",
      "Mock interview preparation with performance tracking",
      "Career roadmap generator for personalized career paths",
      "Multi-role authentication with Clerk (Candidates/Employers)",
      "Application tracker dashboard with progress analytics",
      "Prisma ORM with PostgreSQL (NeonDB) for type-safe data access",
      "Dark mode support with full theme switching",
      "Fully responsive UI with shadcn/ui components and Framer Motion animations",
    ],
    links: {
      github: "https://github.com/jagarapuRadhaKrishna/NXT-Hire-",
      live: "https://hirewith-nxthire.netlify.app/",
    },
  },
];

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const unwrappedParams = React.use(params);

  useEffect(() => {
    if (unwrappedParams?.id) {
      const foundProject = projects.find((p) => p.id === unwrappedParams.id);
      setProject(foundProject || null);
      setLoading(false);
    }
  }, [unwrappedParams?.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center pt-20 px-4">
        <div className="text-gray-900 dark:text-white">Loading...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center pt-20 px-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
        <Link
          href="/#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 pt-12 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => router.back()}
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold mb-4 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 shadow-lg overflow-hidden relative">
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            )}
            {!project.image && (
              <div className="w-full h-full bg-gradient-to-br from-blue-400 via-green-400 to-blue-500 dark:from-blue-600 dark:via-green-600 dark:to-blue-700" />
            )}
          </div>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {project.title}
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400">
            {project.description}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                📋 Overview
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                ✨ Key Features
              </h2>
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 + idx * 0.05 }}
                    className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-1 flex-shrink-0"></span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                🛠️ Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium text-xs border border-blue-200 dark:border-blue-800"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800"
            >
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">
                Quick Links
              </h3>
              <div className="space-y-2">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-2.5 py-1.5 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors font-semibold text-xs group"
                  >
                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Repository
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-2.5 py-1.5 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-semibold text-xs group"
                  >
                    <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Live
                  </a>
                )}
              </div>
            </motion.div>

            {/* Project Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">
                📊 Details
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Technologies</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{project.technologies.length}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Features</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{project.features.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Status</span>
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-semibold">
                    Completed
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
            Interested in working together?
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-sm"
          >
            Start Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
