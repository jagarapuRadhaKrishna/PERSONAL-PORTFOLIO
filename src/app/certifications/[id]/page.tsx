"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";

const certifications = [
  {
    id: "1",
    title: "IBM Software Engineering Professional Certificate",
    issuer: "IBM",
    date: "2024",
    description: "Comprehensive software engineering certification covering full-stack development, cloud computing, and agile methodologies. This professional certificate validates expertise in developing, deploying, and maintaining enterprise-level software solutions with modern development practices and industry best practices.",
    logo: "/IBM LOGO.webp",
    images: ["/ibm recoginzation.pdf", "/IBM SOFTWARE ENGINEERING CERTIFICATION.pdf"],
    credentialUrl: "https://www.ibm.com/training/",
    skills: ["Software Development", "Cloud Computing", "Agile Methodology", "Full-Stack Development", "Enterprise Software", "DevOps Practices"],
  },
  {
    id: "2",
    title: "Technology Software Development",
    issuer: "Citi",
    date: "2023",
    description: "Software development certification from Citi focusing on enterprise-grade application development and financial technology solutions. This certification demonstrates proficiency in building robust, scalable, and secure financial applications with focus on industry compliance, system architecture, and best practices in fintech development.",
    logo: "/citi.gif",
    images: ["/citi .png"],
    credentialUrl: "https://www.citi.com/",
    skills: ["Enterprise Development", "Financial Technology", "System Design", "Software Architecture", "FinTech Solutions", "Compliance & Security"],
  },
  {
    id: "3",
    title: "Python & Data Science Professional Certificate",
    issuer: "Data Professionals",
    date: "2023",
    description: "Advanced Python certification with focus on data science, machine learning, and data analysis. This comprehensive certification covers data manipulation, statistical analysis, machine learning algorithms, data visualization, and practical implementation of data-driven solutions for real-world problems.",
    logo: "/datapro.webp",
    images: ["/datapro-certificate.png"],
    credentialUrl: "https://www.datacamp.com/",
    skills: ["Python Programming", "Data Science", "Machine Learning", "Data Analysis", "Statistical Analysis", "Data Visualization"],
  },
];

export default function CertificationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [certification, setCertification] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const unwrappedParams = React.use(params);

  useEffect(() => {
    if (unwrappedParams?.id) {
      const found = certifications.find((c) => c.id === unwrappedParams.id);
      setCertification(found || null);
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

  if (!certification) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center pt-20 px-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Certification Not Found</h1>
        <Link
          href="/#certifications"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Certifications
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
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold mb-6 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back
        </motion.button>

        {/* Header with Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row items-center md:items-start gap-8 mb-6">
            {/* Logo */}
            {certification.logo && (
              <div className="flex-shrink-0 h-32 w-32 bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-600">
                <Image
                  src={certification.logo}
                  alt={certification.issuer}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
            )}

            {/* Header Content */}
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {certification.title}
                </h1>
                <a
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg"
                  title="View Credential"
                >
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
                  {certification.issuer}
                </span>
                <span className="text-gray-600 dark:text-gray-400 font-medium">{certification.date}</span>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Award className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Description */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Overview</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {certification.description}
              </p>
            </motion.div>

            {/* Certificate Images for card 2 and 3: just display image below title */}
            {certification.id === "1" && certification.images && certification.images.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Certificates</h2>
                <div className={`grid gap-4 ${certification.images.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}>
                  {certification.images.map((image: string, idx: number) => (
                    <a
                      key={idx}
                      href={image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg overflow-hidden border border-blue-300 dark:border-blue-700 hover:shadow-lg transition-all group"
                    >
                      <div className="aspect-square flex flex-col items-center justify-center p-4 text-white">
                        <svg className="w-12 h-12 mb-2 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12.75c1.148 0 2.26.023 3.35.068.5.036.898.416.898.916v7.064c0 .502-.398.88-.898.916-1.09.045-2.202.068-3.35.068s-2.26-.023-3.35-.068c-.5-.036-.898-.414-.898-.916V13.75c0-.5.398-.88.898-.916 1.09-.045 2.202-.068 3.35-.068m0-3a.75.75 0 100-1.5.75.75 0 000 1.5m6 0a.75.75 0 100-1.5.75.75 0 000 1.5" />
                        </svg>
                        <span className="font-semibold text-center text-sm">Download PDF</span>
                        <span className="text-xs opacity-75 mt-1">Certificate {idx + 1}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
            {(certification.id === "2" || certification.id === "3") && certification.images && certification.images.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center"
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Certificate</h2>
                <Image
                  src={certification.images[0]}
                  alt={certification.title + " Certificate"}
                  width={400}
                  height={300}
                  className="rounded-lg object-contain"
                />
              </motion.div>
            )}
          </div>

          {/* Right Column - Skills & Info */}
          <div className="lg:col-span-1">
            {/* Skills Section */}
            {certification.skills && certification.skills.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 sticky top-24"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Key Skills</h3>
                <div className="space-y-2">
                  {certification.skills.map((skill: string, idx: number) => (
                    <div
                      key={idx}
                      className="px-3 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium"
                    >
                      ✓ {skill}
                    </div>
                  ))}
                </div>

                {/* Credential Link */}
                <a
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  <ExternalLink className="w-5 h-5" />
                  Verify Credential
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
