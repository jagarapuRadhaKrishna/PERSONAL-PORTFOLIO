"use client";

import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/utils";
import { ArrowDownRight, Linkedin, Github, Mail, Phone } from "lucide-react";
import { NaukriLogo } from "./NaukriLogo";
import Image from "next/image";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-green-400 dark:bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ scale: [1, 1.2, 1], x: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Avatar and Title horizontally centered */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Avatar and Title horizontally centered */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8">
          <motion.div variants={itemVariants} className="flex-shrink-0 flex justify-center mt-8 md:mt-0">
            <motion.div className="w-56 h-56 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400">
              <Image
                src="/mine.jpg"
                alt="Jagarapu Radha Krishna"
                width={224}
                height={224}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-center">
              <span className="block text-gray-900 dark:text-white">Hello, I'm</span>
              <span className="block gradient-text text-5xl sm:text-5xl lg:text-7xl">Jagarapu Radha Krishna</span>
            </h1>
            {/* Subtitle */}
            <div className="overflow-hidden w-full mt-4">
              <motion.div
                variants={itemVariants}
                className="whitespace-nowrap text-lg sm:text-xl text-gray-600 dark:text-gray-400 flex items-center justify-center"
                animate={{ x: [0, -600] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                Full Stack Developer
                <span className="mx-8">•</span>
                Backend Engineer
                <span className="mx-8">•</span>
                MERN Stack Enthusiast
                <span className="mx-8">•</span>
                Freelance Developer
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bio summary centered below avatar/title */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-gray-700 dark:text-gray-300 w-full mt-12 leading-relaxed text-center"
        >
          I build fast, reliable, and visually appealing websites and web applications for businesses and startups. Using modern tools like React, Next.js, Node.js, and Tailwind CSS, I create solutions that are easy to use, mobile-friendly, and optimized for search engines. My focus is on understanding your needs, delivering measurable results, and making sure every project is secure, scalable, and ready for growth. Whether you need an e-commerce site, a portfolio, or a custom web app, I turn your ideas into real, impactful digital experiences.
        </motion.p>

        {/* Quick Links centered below summary */}
        <motion.div variants={itemVariants} className="flex flex-row gap-4 justify-center mt-8">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/jagarapuradhakrishna/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/jagarapuRadhaKrishna"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-900 dark:bg-gray-700 text-white rounded-full hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
            title="GitHub"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:jagarapuradhakrishna.work@gmail.com"
            className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
            title="Email"
          >
            <Mail className="w-6 h-6" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+91 9550897539"
            className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
            title="Phone"
          >
            <Phone className="w-6 h-6" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.naukri.com/mnjuser/profile?id=&altresid"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            title="Naukri"
          >
            <NaukriLogo className="w-6 h-6" />
          </motion.a>
        </motion.div>

        {/* CTA Buttons centered below quick links */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors flex items-center gap-2"
          >
            View Projects
            <ArrowDownRight className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
          >
            Get In Touch
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            download
            className="px-8 py-3 bg-green-600 dark:bg-green-500 text-white rounded-lg font-semibold hover:bg-green-700 dark:hover:bg-green-600 transition-colors"
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="pt-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-2">Scroll to explore</p>
          <ArrowDownRight className="w-6 h-6 mx-auto text-blue-600 dark:text-blue-400" />
        </motion.div>
      </div>
    </section>
  );
}
