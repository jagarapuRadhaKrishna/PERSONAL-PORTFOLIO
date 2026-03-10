"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Search, Users } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Professional, responsive websites built with Next.js and React. I create blazing-fast, SEO-friendly sites with modern design, optimal performance, and excellent user experience. Perfect for businesses, portfolios, blogs, and online presence.",
    skills: ["React", "Next.js", "Tailwind CSS", "Responsive Design", "Performance Optimization"],
    benefits: ["Mobile-Responsive", "Fast Loading", "SEO-Friendly", "Modern Design", "Easy Maintenance"],
  },
  {
    icon: Smartphone,
    title: "Web Apps & Applications",
    description:
      "Full-featured, interactive web applications with real-time functionality, smooth user interfaces, and scalable architecture. From concept design to production deployment with dedicated support.",
    skills: ["React", "Node.js/Express", "MongoDB", "Authentication", "Real-time Features"],
    benefits: ["Interactive UI", "Scalable Architecture", "Secure & Reliable", "Full-Featured", "Production-Ready"],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Comprehensive SEO strategies designed to boost your search rankings, increase organic traffic, and maximize online visibility. I optimize technical SEO, on-page elements, and content strategy for maximum conversions.",
    skills: ["On-Page SEO", "Technical SEO", "Content Strategy", "Meta Optimization", "Analytics"],
    benefits: ["Higher Rankings", "Increased Organic Traffic", "Better Online Visibility", "More Qualified Leads"],
  },
  {
    icon: Users,
    title: "Client-Focused Solutions",
    description:
      "Dedicated support, maintenance, and custom solutions tailored to your unique business needs. I provide ongoing assistance, regular updates, and scalable solutions to help your business grow and adapt.",
    skills: ["Support & Maintenance", "Consulting", "Scalable Architecture", "Custom Solutions"],
    benefits: ["Responsive Support", "Long-term Partnership", "Custom Solutions", "Business Growth Focus"],
  },
];

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section
      id="services"
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
            What I Offer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive web development and digital solutions tailored to help your business grow online
          </p>
        </motion.div>

        {/* Services Grid with Interactive Selection */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-5 rounded-lg border-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              >
                <div className="mb-3 w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1.5">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                  {service.description}
                </p>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {service.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Benefits */}
                <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs font-semibold text-gray-900 dark:text-white mb-2">
                    🎯 Key Benefits:
                  </p>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="text-xs text-gray-600 dark:text-gray-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Ready to bring your project to life?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
