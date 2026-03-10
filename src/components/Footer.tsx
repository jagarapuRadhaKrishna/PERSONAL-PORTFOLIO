"use client";

import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { NaukriLogo } from "./NaukriLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-100 border-t border-gray-800">
      <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Branding */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-1">Jagarapu Radha Krishna</h3>
          <p className="text-xs text-gray-400">Full Stack Developer</p>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-2">
            <Mail size={18} color="#EA4335" />
            <a href="mailto:jagarapuradhakrishna.work@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">jagarapuradhakrishna.work@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={18} color="#34A853" />
            <span className="text-gray-400">+91 9550897539</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={18} color="#FBBC05" />
            <span className="text-gray-400">Hyderabad, India</span>
          </div>
        </div>
        {/* Social Links */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <a href="https://linkedin.com/in/radhakrishna-jagarapu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} color="#0077B5" className="hover:text-blue-400 transition-colors gradient-text" />
          </a>
          <a href="https://github.com/radhakrishna-jagarapu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={20} color="#333" className="hover:text-blue-400 transition-colors gradient-text" />
          </a>
          <a href="https://www.naukri.com/mnjuser/profile" target="_blank" rel="noopener noreferrer" aria-label="Naukri">
            <span className="gradient-text">
              <NaukriLogo className="w-6 h-6 hover:opacity-80 transition-opacity" />
            </span>
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-800">
        &copy; {currentYear} Jagarapu Radha Krishna. All rights reserved.
      </div>
    </footer>
  );
}
