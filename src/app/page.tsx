"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import Certifications from "@/components/Certifications";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
