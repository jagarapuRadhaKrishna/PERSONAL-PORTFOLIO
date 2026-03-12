# Radha Krishna Jagarapu - Personal Portfolio

## 🚀 About

A modern, responsive, and interactive personal portfolio website built with cutting-edge web technologies. Showcasing skills, projects, certifications, and professional experience as a Software Developer.

**Live Demo:** [https://radha-krishna-dev-portfolio.vercel.app/](https://radha-krishna-dev-portfolio.vercel.app/)

## ✨ Features

- **Modern UI/UX Design** - Beautiful, clean, and professional interface with dark mode support
- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations** - Engaging scroll animations and transitions using Framer Motion
- **Interactive Components** - Hover effects and interactive elements for better UX
- **Multiple Sections:**
  - Hero Section - Compelling introduction with call-to-action
  - About Me - Professional background and expertise
  - Skills & Technologies - Categorized technical skills with proficiency levels
  - Experience - Work history and professional journey
  - Projects - Interactive project gallery with links and details
  - Certifications - Professional certifications with detailed information
  - Resume - Professional resume with download capability
  - Contact - Easy ways to get in touch

## 🛠️ Tech Stack

- **Frontend Framework:** [Next.js 14](https://nextjs.org/) - React for production
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Type-safe development
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **Animations:** [Framer Motion](https://www.framer.com/motion/) - Smooth animations
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Image Optimization:** [Next.js Image](https://nextjs.org/docs/app/api-reference/components/image)
- **Deployment:** [Vercel](https://vercel.com/) - Seamless deployment platform

## 📂 Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   └── certifications/
│       └── [id]/
│           └── page.tsx     # Certification details page
├── components/
│   ├── About.tsx            # About section
│   ├── Certifications.tsx    # Certifications section
│   ├── Contact.tsx          # Contact section
│   ├── Experience.tsx        # Experience section
│   ├── Footer.tsx           # Footer component
│   ├── Hero.tsx             # Hero section
│   ├── Navbar.tsx           # Navigation bar
│   ├── Projects.tsx         # Projects section
│   ├── Resume.tsx           # Resume section
│   ├── Services.tsx         # Services section
│   ├── Skills.tsx           # Skills section
│   └── ThemeToggle.tsx       # Dark mode toggle
├── data/
│   └── certifications.ts     # Certifications data
├── lib/
│   ├── ThemeContext.tsx      # Theme management
│   └── utils.ts             # Utility functions
└── types/
    └── index.ts             # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jagarapuRadhaKrishna/PERSONAL-PORTFOLIO.git
cd PERSONAL-PORTFOLIO
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📦 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint for code quality
npm run lint
```

## 🎨 Key Features Explained

### Dark Mode Support
- Automatic theme detection based on system preferences
- Manual theme toggle for user control
- Persistent theme preference using Context API

### Responsive Design
- Mobile-first approach using Tailwind CSS
- Breakpoints for sm, md, lg, xl screens
- Optimized layout for all devices

### Smooth Animations
- Entry animations for page elements
- Scroll-triggered animations
- Hover effects for interactive elements
- Professional transition timing

### Professional Content
- Comprehensive project showcases
- Detailed certification information
- Professional skills assessment
- Experience timeline
- Easy resume download

## 📱 Sections Overview

### Hero Section
Eye-catching introduction with profile photo and compelling headline

### About Me
Professional background, expertise, and personal mission

### Skills
Organized by category: Frontend, Backend, Database, Tools, Other
Each skill includes proficiency level indicator

### Experience
Professional work history with roles, descriptions, and technologies

### Projects
Interactive project cards with descriptions, technologies, and links to GitHub/Live demos

### Certifications
Professional certifications with logos, descriptions, and key skills

### Resume
Professional resume with view and download options

### Contact
Multiple ways to get in touch with links to social profiles

## 🌐 Live Deployment

The portfolio is deployed on Vercel and automatically updates on every push to the main branch.

**Live URL:** [https://radha-krishna-dev-portfolio.vercel.app/](https://radha-krishna-dev-portfolio.vercel.app/)

## 📊 Performance

- Fast page load times with Next.js optimization
- Image optimization for better performance
- Code splitting for efficient bundling
- SEO-friendly with proper meta tags

## 🔗 Links

- **GitHub Repository:** [jagarapuRadhaKrishna/PERSONAL-PORTFOLIO](https://github.com/jagarapuRadhaKrishna/PERSONAL-PORTFOLIO)
- **Live Portfolio:** [radha-krishna-dev-portfolio.vercel.app](https://radha-krishna-dev-portfolio.vercel.app/)
- **LinkedIn:** [Radha Krishna Jagarapu](https://www.linkedin.com/in/radha-krishna-jagarapu/)

## 📄 License

This project is open source and available for educational and personal use.

## 🤝 Contributing

Feel free to fork this project and use it as a template for your own portfolio!

## 📞 Contact

For inquiries or collaborations, please reach out through the contact section on the website or via email.

---

**Built with ❤️ by Radha Krishna Jagarapu**
