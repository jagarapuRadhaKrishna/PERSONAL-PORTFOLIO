"use client";

import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";

export function Resume() {
  const handleViewResume = () => {
    window.open("/JAGARAPU RADHA KRISHNA UPDATED RESUME.pdf", "_blank");
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/JAGARAPU RADHA KRISHNA UPDATED RESUME.pdf";
    link.download = "RADHA KRISHNA JAGARAPU RESUME.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
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
            Resume
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Download or view my professional resume
          </p>
        </motion.div>

        {/* Resume Preview Image Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Interactive Resume Card */}
            <div className="flex items-center justify-center">
              <div
                className="relative w-full max-w-sm cursor-pointer group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col items-center justify-center h-80 space-y-6">
                    {/* Professional Resume Design */}
                    <div className="relative w-32 h-40 bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="absolute inset-0 p-3 flex flex-col justify-between text-xs text-gray-400 dark:text-gray-500">
                        {/* Resume Lines */}
                        <div className="space-y-2">
                          <div className="h-2 bg-blue-500 rounded w-20"></div>
                          <div className="h-1 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
                          <div className="h-1 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-1 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
                          <div className="h-1 bg-gray-300 dark:bg-gray-600 rounded w-4/5"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-1 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
                          <div className="h-1 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center space-y-3">
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Professional Resume
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Complete profile with experience, skills & certifications
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Info and Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Professional Resume
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  View or download my complete professional resume including experience, skills, projects, and certifications.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Experience</p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">1+ Years</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Projects</p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Tech Skills</p>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">45+</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Certifications</p>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">3</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleViewResume}
                  className="flex-1 px-4 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Eye className="w-5 h-5" />
                  View Resume
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownloadResume}
                  className="flex-1 px-4 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
