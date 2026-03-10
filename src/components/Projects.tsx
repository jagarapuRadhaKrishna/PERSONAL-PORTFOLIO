"use client";

import { motion } from "framer-motion";
import { type Project } from "@/types";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
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
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my recent work and projects I'm proud of
          </p>
        </motion.div>

        {/* Projects Grid - Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-blue-500 dark:hover:border-blue-400 transition-all shadow-sm hover:shadow-md"
            >
              {/* Project Image Header */}
              <div className="h-40 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                )}
                {!project.image && (
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-green-400 dark:from-blue-600 dark:to-green-600" />
                )}
              </div>

              {/* Compact Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack - Compact */}
                <div className="mb-3 flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-400">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Quick Access Buttons */}
                <div className="flex gap-2 mb-3">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      <span className="hidden sm:inline">Repo</span>
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="hidden sm:inline">Live</span>
                    </a>
                  )}
                </div>

                {/* More Details Button */}
                <Link
                  href={`/projects/${project.id}`}
                  className="w-full px-3 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors border border-blue-200 dark:border-blue-800 inline-block text-center"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
