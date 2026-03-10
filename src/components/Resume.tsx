"use client";

import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";

export function Resume() {
  const handleViewResume = () => {
    window.open("#", "_blank");
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "#";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
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
            Resume
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Download or view my resume
          </p>
        </motion.div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          {/* Resume Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Preview Area */}
            <div className="col-span-2 bg-gray-100 dark:bg-gray-900 p-8 border-r border-gray-200 dark:border-gray-700 min-h-96 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="w-full max-w-sm"
              >
                <div className="bg-white dark:bg-gray-800 rounded shadow-md p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
                    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-4/5"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
                    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <div className="p-8 flex flex-col gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleViewResume}
                className="w-full px-4 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
              >
                <Eye className="w-5 h-5" />
                View Resume
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </motion.button>

              {/* Resume Stats */}
              <div className="mt-6 space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Quick Stats
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Experience</span>
                    <span className="font-semibold text-gray-900 dark:text-white">1+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Projects</span>
                    <span className="font-semibold text-gray-900 dark:text-white">10+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Skills</span>
                    <span className="font-semibold text-gray-900 dark:text-white">20+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Certifications</span>
                    <span className="font-semibold text-gray-900 dark:text-white">6</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">LeetCode</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Top 10%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
