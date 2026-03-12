import { Certification } from "@/types";

export const certificationsData: Certification[] = [
  {
    id: "1",
    title: "IBM Software Engineering Professional Certificate",
    issuer: "IBM",
    date: "2025",
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
    date: "2025",
    description: "Software development certification from Citi focusing on enterprise-grade application development and financial technology solutions. This certification demonstrates proficiency in building robust, scalable, and secure financial applications with focus on industry compliance, system architecture, and best practices in fintech development.",
    logo: "/citi.gif",
    images: ["/citi.png"],
    credentialUrl: "https://www.citi.com/",
    skills: ["Enterprise Development", "Financial Technology", "System Design", "Software Architecture", "FinTech Solutions", "Compliance & Security"],
  },
  {
    id: "3",
    title: "Python Certification",
    issuer: "Datapro",
    date: "2022",
    description: "Advanced Python certification with focus on data science, machine learning, and data analysis. This comprehensive certification covers data manipulation, statistical analysis, machine learning algorithms, data visualization, and practical implementation of data-driven solutions for real-world problems.",
    logo: "/datapro.webp",
    images: ["/java-python-datapro.jpg"],
    credentialUrl: "https://www.datacamp.com/",
    skills: ["Python Programming", "Data Science", "Machine Learning", "Data Analysis", "Statistical Analysis", "Data Visualization"],
  },
];
