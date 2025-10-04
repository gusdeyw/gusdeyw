export const siteConfig = {
  name: "Gusde Widnyana",
  title: "Senior Developer & Full Stack Engineer",
  description: "Portfolio website of Gusde Widnyana - Senior Developer passionate about creating amazing applications",
  accentColor: "#1d4ed8",
  social: {
    email: "widnyana.bagus@gmail.com",
    linkedin: "https://www.linkedin.com/in/widnyana-masthara-67505b164/", // ⚠️ NEEDED: Your LinkedIn profile URL
    twitter: "#", // ⚠️ NEEDED: Your Twitter/X handle (optional)
    github: "https://github.com/gusdeyw", // ⚠️ NEEDED: Your GitHub username
  },
  aboutMe:
    "Love to create amazing applications, helping people to know the limitless technology around the world. Developing giant applications with thousands of databases interacting simultaneously. Experienced Full Stack Developer with expertise in modern web technologies and a passion for building scalable solutions.",
  skills: ["PHP", "Golang", "Node.js", "Laravel", "Vue.js", "React.js", "MySQL/MariaDB", "Docker", "Tailwind CSS", "Linux", "Git", "WordPress"],
  projects: [
    {
      name: "S-Console",
      description:
        "A lightweight, customizable JavaScript console library for web applications. Features built-in commands, multiple build formats (ESM, CJS, UMD, IIFE), and TypeScript support with customizable themes and fonts.",
      link: "https://github.com/gusdeyw/s-console",
      skills: ["TypeScript", "Vite", "UnoCSS", "JavaScript"],
    },
    {
      name: "Elvoiz - Invoice Management Expert",
      description:
        "Smart SaaS application handling invoices with template creation, editing, value adding, and advanced scheduling for professional businesses. Currently under development with planned release in Q1 2026.",
      link: "#", // ⚠️ NEEDED: Project URL when available
      skills: ["Golang", "Vue.js", "MySQL", "Docker"],
    },
    // {
    //   name: "University Syllabus Management System",
    //   description:
    //     "Collaborative web application for managing university project applications serving campus administration. Created syllabus apps for lecturers with modern frameworks.",
    //   link: "#", // ⚠️ NEEDED: Project URL or demo link (optional)
    //   skills: ["Laravel", "Bootstrap", "jQuery", "MySQL"],
    // },
    // {
    //   name: "BVR Group Asia - Multi-Company Website Management",
    //   description:
    //     "Full Stack development controlling 18 company websites, maintaining performance and creating new company profile websites as Webmaster.",
    //   link: "", // ⚠️ NEEDED: Company website URL (optional)
    //   skills: ["PHP", "Laravel", "WordPress", "Tailwind", "React.js", "Firebase"],
    // },
  ],
  experience: [
    {
      company: "Cakrasoft Hotel System",
      title: "Senior Developer",
      dateRange: "2022 - Present",
      bullets: [
        "Started as backend developer using Golang and expanded to database management for MySQL, MariaDB, and PostgreSQL",
        "Contributed to frontend development in Vue 3.js and managed deployments with Docker, Nginx, and Linux on DigitalOcean",
        "Led code training, workshops, and client presentations while overseeing full development lifecycle from coding to deployment",
      ],
    },
    {
      company: "BVR Group Asia",
      title: "Webmaster",
      dateRange: "2021 - 2022",
      bullets: [
        "Worked as Full Stack website developer controlling 18 company websites and maintaining performance",
        "Created new company profile websites and managed all hosting access of company websites",
        "Developed using PHP, Laravel, Firebase, WordPress, Tailwind, jQuery, and ReactJS with MySQL database",
      ],
    },
    {
      company: "Instiki University",
      title: "Front End Developer",
      dateRange: "2020 - 2021",
      bullets: [
        "Collaborated with backend team to manage university project applications serving campus administration",
        "Created syllabus apps for lecturers using Laravel framework and Bootstrap with Admin Panel 5 Template",
        "Worked with jQuery for interactive features and MySQL for database management",
      ],
    },
    {
      company: "Self Employment",
      title: "Website Developer Freelance",
      dateRange: "2020 - Present",
      bullets: [
        "Working on freelance with project-based work, creating interactive websites connected to microcontrollers (Node MCU ESP32)",
        "Accept various projects from outsourcing using PHP, WordPress, Tailwind, jQuery, and MySQL",
        "Specialized in IoT integration and custom web solutions for diverse client needs",
      ],
    },
  ],
  education: [
    {
      school: "INSTIKI University",
      degree: "Bachelor of Technology Informatics",
      dateRange: "2018 - 2022",
      achievements: [
        "Graduated with GPA: 3.67",
        "Specialized in Technology Informatics with focus on web development",
        "Located in Bali, Indonesia",
      ],
    },
  ],
};
