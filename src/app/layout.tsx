import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { RootLayoutClient } from "./layout-client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jagarapu Radha Krishna | Full Stack Engineer",
  description: "Full Stack Engineer specializing in Python Django, Node.js, React, and AI/ML. Top 10% LeetCode achiever with expertise in DSA, System Design, and building scalable applications.",
  keywords: ["full stack engineer", "python django", "node.js", "react", "ai", "ml", "rest api", "developer", "freelancer"],
  authors: [{ name: "Jagarapu Radha Krishna" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jagarapuradhakrishna.com",
    siteName: "Jagarapu Radha Krishna Portfolio",
    title: "Jagarapu Radha Krishna | Full Stack Engineer",
    description: "Full Stack Engineer specializing in Python Django, Node.js, and React with AI/ML expertise",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black text-gray-900 dark:text-white`}
      >
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
