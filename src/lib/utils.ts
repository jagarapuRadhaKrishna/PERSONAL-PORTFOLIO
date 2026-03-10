import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80; // Navbar height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export const downloadResume = () => {
  // This would typically link to an actual resume file
  const link = document.createElement("a");
  link.setAttribute(
    "href",
    "https://example.com/resume.pdf" // Replace with actual resume URL
  );
  link.setAttribute("download", "resume.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
