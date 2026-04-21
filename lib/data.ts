export interface NavLink {
    name: string;
    href: string;
}

export interface SkillItem {
    name: string;
    level: number;
}

export interface SkillCategory {
    category: string;
    items: SkillItem[];
}

export interface Project {
    id: number;
    name: string;
    shortDescription: string;
    problem: string;
    solution: string;
    stack: string[];
    // features: string[];
    // technicalHighlights: string;
    // businessImpact: string;
    github: string;
    live: string;
    image: string;
}

export const navLinks: NavLink[] = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
];

export const skills: SkillCategory[] = [
    {
        category: "Frontend",
        items: [
            { name: "HTML / CSS", level: 90 },
            { name: "Tailwind CSS & Bootstrap", level: 80 },
            { name: "JavaScript (ES6+)", level: 70 },
            { name: "React & Redux/Zustand", level: 60 },
        ],
    },
    {
        category: "Tools & Others",
        items: [
            { name: "Git / GitHub", level: 80 },
            { name: "REST APIs", level: 60 },
            { name: "Cursor & Antigravity", level: 90 },
            { name: "Co-pilot & Codex", level: 90 },

        ],
    },
];

export const projects: Project[] = [

     {
        id: 1,
        name: "EduPathway",
        shortDescription: "An educational platform designed to enhance learning outcomes through interactive content and personalized learning paths.",
        problem: "Traditional educational platforms often lack engagement and personalization, leading to lower retention rates and student motivation.",
        solution: "A dynamic learning platform combining interactive modules with adaptive educational content tailored to individual student needs.",
        stack: ["React", "Tailwind CSS", "Zustand"],
        // features: [
        //     "Interactive Learning Modules: Engaging educational content designed for optimal comprehension.",
        //     "Personalized Learning Paths: Adaptive curriculum based on student progress and learning style.",
        //     "Progress Tracking: Real-time monitoring of student achievements and milestones.",
        //     "Responsive Design: Seamless learning experience across all devices.",
        // ],
        // technicalHighlights: "Built with React for a modern, interactive user interface. Tailwind CSS for responsive, accessible design. Backend integration with Node.js for scalable data management.",
        // businessImpact: "Enhances student engagement and learning outcomes through personalized educational experiences.",
        github: "https://github.com/TechyAadi12",
        live: "https://undo-school-lake.vercel.app/",
        image: "/images/undo-school.webp",
    },
    {
        id: 2,
        name: "Freelance SaaS",
        shortDescription: "A centralized mission control for independent professionals to scale their business with real-time financial insights and automated client management.",
        problem: "Independent professionals often struggle with 'admin fatigue,' losing billable hours to fragmented tools for tracking clients, project milestones, and payment statuses across multiple platforms.",
        solution: "A unified, high-performance operational dashboard designed to centralize the freelancer workflow, providing a single source of truth for business health and client relations.",
        stack: ["React", "Tailwind CSS", "ChartJS"],
        // features: [
        //     "Real-time Business Analytics: Dynamic data visualization of revenue and project velocity.",
        //     "Automated Client Lifecycle: Centralized CRM for managing lead-to-payment pipelines.",
        //     "Integrated Ledger: Live monitoring of pending, cleared, and overdue invoices.",
        //     "Responsive Architecture: Seamless transitions between desktop deep-work and mobile status checks.",
        // ],
        // technicalHighlights: "Architected with a modular React structure ensuring high maintainability. Leverages Firebase for real-time synchronization and secure authentication. Optimized data visualization using ChartJS with custom performance-tuned hooks.",
        // businessImpact: "Reduces administrative overhead by approximately 30%, allowing freelancers to focus on high-value delivery and improving invoice turnaround times through proactive monitoring.",
        github: "https://github.com/TechyAadi12",
        live: "https://freelacer-saa-s.vercel.app/dashboard",
        image: "/images/nexus.webp",
    },
    {
        id: 3,
        name: "Grocery E-Commerce",
        shortDescription: "A high-velocity grocery commerce platform emphasizing friction-free shopping and lightweight state management.",
        problem: "Traditional e-commerce platforms often suffer from slow 'add-to-cart' latency and cumbersome checkout flows, leading to high cart abandonment rates in the essential goods sector.",
        solution: "A lightweight, state-driven commerce engine focused on instantaneous feedback and a frictionless path-to-purchase.",
        stack: ["React", "Zustand", "Tailwind CSS"],
        // features: [
        //     "Latency-Free Cart Engine: Persistent state management ensuring zero-lag item updates.",
        //     "Intuitive Product Discovery: Multi-tier filtering system designed for rapid bulk shopping.",
        //     "Adaptive Inventory View: Responsive grid layouts tailored for visual clarity of product details.",
        //     "Optimized Checkout Funnel: Minimalist design to reduce cognitive load and conversion friction.",
        // ],
        // technicalHighlights: "Implemented Zustand for ultra-lightweight, high-performance state synchronization. Custom-built custom hooks for optimized shopping cart logic and local storage persistence. Component-based architecture focused on reusability and fast render cycles.",
        // businessImpact: "Streamlines the buying process, reducing the time from product discovery to checkout and decreasing abandonment through optimistic UI updates.",
        github: "https://github.com/TechyAadi12",
        live: "https://grocery-website-gules-chi.vercel.app/",
        image: "/images/aether.webp",
    },

    {
    id: 4,
    name: "FinVault - Financial Dashboard",
    shortDescription: "A high-performance financial analytics dashboard enabling real-time transaction tracking, intelligent insights, and role-based control through a visually rich, glassmorphic interface.",

    problem: "Users struggle with fragmented financial visibility and lack actionable insights due to static dashboards and tools that do not adapt to different user roles or provide real-time analytics.",

    solution: "A dynamic financial dashboard ecosystem built with modern frontend architecture, offering real-time transaction management, role-based access control, and intelligent data visualization for enhanced financial decision-making.",

    stack: ["React", "Vite", "Tailwind CSS", "Zustand", "Recharts"],

    // features: [
    //     "Role-Based Access Control (RBAC): Admins can manage transactions while viewers access read-only analytics.",
    //     "Interactive Data Visualizations: Area and bar charts for balance trends and spending insights.",
    //     "Smart Financial Insights: Automated detection of patterns like highest spending category.",
    //     "Advanced Filtering & Sorting: Search, filter by type/category, and sort transactions dynamically.",
    //     "Premium Responsive UI: Glassmorphic dark-mode design optimized for both desktop and mobile experiences."
    // ],

    // technicalHighlights: "Implemented Zustand for scalable and efficient global state management, eliminating unnecessary re-renders. Built modular UI components with Tailwind CSS and optimized rendering pipelines. Integrated Recharts for performant data visualization. Designed a role-based state architecture enabling conditional UI rendering and action control.",

    // businessImpact: "Empowers users with actionable financial insights, improving budgeting decisions and financial awareness while reducing manual tracking effort through automation and visualization.",

    github: "https://github.com/TechyAadi12",
    live: "https://financial-ui-dashboard-alpha.vercel.app/",
    image: "/images/finvault.webp",
}];