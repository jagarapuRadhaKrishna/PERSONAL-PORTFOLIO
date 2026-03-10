"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const certifications = [
  {
    id: "1",
    title: "IBM Software Engineering Professional Certificate",
    issuer: "IBM",
    date: "2024",
    description: "Comprehensive software engineering certification covering full-stack development, cloud computing, and agile methodologies",
    logo: "/IBM LOGO.webp",
    images: ["/ibm recoginzation.pdf", "/IBM SOFTWARE ENGINEERING CERTIFICATION.pdf"],
    credentialUrl: "https://www.ibm.com/training/",
    skills: ["Software Development", "Cloud Computing", "Agile Methodology", "Full-Stack Development"],
  },
  {
    id: "2",
    title: "Technology Software Development",
    issuer: "Citi",
    date: "2023",
    description: "Software development certification from Citi focusing on enterprise-grade application development and financial technology solutions",
    logo: "/citi.gif",
    images: ["/citi.png"],
    credentialUrl: "https://www.citi.com/",
    skills: ["Enterprise Development", "Financial Technology", "System Design", "Software Architecture"],
  },
  {
    id: "3",
    title: "Python & Data Science Professional Certificate",
    issuer: "Data Professionals",
    date: "2023",
    description: "Advanced Python certification with focus on data science, machine learning, and data analysis",
    logo: "/datapro.webp",
    images: ["/java-python.png"],
    credentialUrl: "https://www.datacamp.com/",
    skills: ["Python Programming", "Data Science", "Machine Learning", "Data Analysis"],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-8 h-8 text-blue-500" />
            <h2 className="text-3xl sm:text-4xl font-bold">Professional Certifications</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Industry-recognized certifications demonstrating expertise and commitment to professional growth
          </p>
        

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-1 lg:grid-cols-3"
        >
          {certifications.map((cert) => (
            <Link key={cert.id} href={`/certifications/${cert.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer h-full flex flex-col"
              >
                {/* Logo Section - Compact */}
                {cert.logo && (
                  <div className="bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-5 border-b border-gray-200 dark:border-gray-700">
                    <Image
                      src={cert.logo}
                      alt={cert.issuer}
                      width={100}
                      height={100}
                      className="object-contain max-h-20"
                    />
                  </div>
                )}

                {/* Content Section - Compact */}
                <div className="p-4 flex-1 flex flex-col">
                  {/* Header */}
                  <div className="mb-3 pb-3 border-b border-gray-200 dark:border-gray-700 flex-1">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1 line-clamp-2">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                        {cert.issuer}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-xs">{cert.date}</span>
                    </div>
                  </div>

                  {/* Description - Hide on card */}
                  <p className="text-gray-600 dark:text-gray-400 text-xs mb-3 line-clamp-2 hidden sm:block">
                    {cert.description.substring(0, 80)}...
                  </p>

                  {/* Skills - Compact */}
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.slice(0, 2).map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 2 && (
                          <span className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium">
                            +{cert.skills.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* View Details Button */}
                  <button className="w-full px-3 py-2 text-xs font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-colors border border-blue-200 dark:border-blue-800">
                    View Details
                  </button>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
