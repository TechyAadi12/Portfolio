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
    features: string[];
    technicalHighlights: string;
    businessImpact: string;
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
            { name: "React / Next.js", level: 90 },
            { name: "Tailwind CSS", level: 95 },
            { name: "HTML5 / CSS3", level: 95 },
            { name: "JavaScript (ES6+)", level: 90 },
        ],
    },
    {
        category: "Tools & Others",
        items: [
            { name: "Git / GitHub", level: 90 },
            { name: "Node.js / Express", level: 80 },
            { name: "MongoDB / PostgreSQL", level: 75 },
            { name: "REST APIs", level: 85 },
        ],
    },
];

export const projects: Project[] = [
    {
        id: 1,
        name: "Freelance SaaS",
        shortDescription: "A centralized mission control for independent professionals to scale their business with real-time financial insights and automated client management.",
        problem: "Independent professionals often struggle with 'admin fatigue,' losing billable hours to fragmented tools for tracking clients, project milestones, and payment statuses across multiple platforms.",
        solution: "A unified, high-performance operational dashboard designed to centralize the freelancer workflow, providing a single source of truth for business health and client relations.",
        stack: ["React", "Tailwind CSS", "ChartJS"],
        features: [
            "Real-time Business Analytics: Dynamic data visualization of revenue and project velocity.",
            "Automated Client Lifecycle: Centralized CRM for managing lead-to-payment pipelines.",
            "Integrated Ledger: Live monitoring of pending, cleared, and overdue invoices.",
            "Responsive Architecture: Seamless transitions between desktop deep-work and mobile status checks.",
        ],
        technicalHighlights: "Architected with a modular React structure ensuring high maintainability. Leverages Firebase for real-time synchronization and secure authentication. Optimized data visualization using ChartJS with custom performance-tuned hooks.",
        businessImpact: "Reduces administrative overhead by approximately 30%, allowing freelancers to focus on high-value delivery and improving invoice turnaround times through proactive monitoring.",
        github: "https://github.com/TechyAadi12",
        live: "https://freelacer-saas.netlify.app/dashboard",
        image: "/images/nexus.webp",
    },
    {
        id: 2,
        name: "Grocery E-Commerce Website",
        shortDescription: "A high-velocity grocery commerce platform emphasizing friction-free shopping and lightweight state management.",
        problem: "Traditional e-commerce platforms often suffer from slow 'add-to-cart' latency and cumbersome checkout flows, leading to high cart abandonment rates in the essential goods sector.",
        solution: "A lightweight, state-driven commerce engine focused on instantaneous feedback and a frictionless path-to-purchase.",
        stack: ["React", "Zustand", "Tailwind CSS"],
        features: [
            "Latency-Free Cart Engine: Persistent state management ensuring zero-lag item updates.",
            "Intuitive Product Discovery: Multi-tier filtering system designed for rapid bulk shopping.",
            "Adaptive Inventory View: Responsive grid layouts tailored for visual clarity of product details.",
            "Optimized Checkout Funnel: Minimalist design to reduce cognitive load and conversion friction.",
        ],
        technicalHighlights: "Implemented Zustand for ultra-lightweight, high-performance state synchronization. Custom-built custom hooks for optimized shopping cart logic and local storage persistence. Component-based architecture focused on reusability and fast render cycles.",
        businessImpact: "Streamlines the buying process, reducing the time from product discovery to checkout and decreasing abandonment through optimistic UI updates.",
        github: "https://github.com/TechyAadi12",
        live: "https://imaginative-malasada-3f56ed.netlify.app/",
        image: "/images/aether.webp",
    },
    {
        id: 3,
        name: "Zym Fitness Website",
        shortDescription: "A high-performance fitness landing experience optimized for user conversion through fluid motion and strategic information hierarchy.",
        problem: "Many fitness platforms fail to convert visitors due to static, unengaging layouts that don't effectively communicate the energy and professionalism of the training programs.",
        solution: "A kinetic, performance-driven web experience that uses fluid motion and clear information hierarchy to drive memberships and engagement.",
        stack: ["React", "Java Script", "Tailwind CSS"],
        features: [
            "Immersive Program Discovery: Interactive workout modules with optimized visual feedback.",
            "Trainer Synergy Profiles: Dynamic layouts showcasing expertise and social proof.",
            "Kinetic UI Design: Sophisticated scroll-triggered animations that boost time-on-site.",
            "Mobile-First Performance: Lightning-fast load times even with heavy visual assets."
        ],
        technicalHighlights: "Advanced animation choreography using Framer Motion for a 60fps 'liquid' feel. Highly scalable component design for rapid deployment of new fitness modules. Strategic use of layout shifts and lazy loading to ensure optimal Lighthouse scores.",
        businessImpact: "Enhances brand authority and trust, significantly increasing user retention and click-through rates for membership inquiries.",
        github: "https://github.com/TechyAadi12",
        live: "https://heartfelt-figolla-9ae1c5.netlify.app/",
        image: "/images/gym.webp",
    },
    {
        id: 4,
        name: "To-Do Application",
        shortDescription: "A high-performance full-stack task management ecosystem facilitating seamless productivity through real-time data persistence and a minimalist, focused interface.",
        problem: "Users often experience 'task fragmentation' and cognitive overload when using cluttered productivity tools that lack instant synchronization across devices.",
        solution: "A full-stack task orchestration platform built on a robust NoSQL foundation, emphasizing zero-latency updates and a clean, distraction-free user experience.",
        stack: ["React", "Node.js", "Mongo DB"],
        features: [
            "Real-time CRUD Operations: Instantaneous task creation and state transitions powered by a shared backend logic.",
            "Persistent Task Ledger: Scalable MongoDB integration ensuring data durability and rapid retrieval.",
            "Dynamic Filtering & Sorting: Categorize and prioritize tasks with a fluid, state-driven interface.",
            "Responsive Task Ecosystem: Adaptive design fluidly transitioning between focus-intensive desktop views and on-the-go mobile management.",
        ],
        technicalHighlights: "Engineered a RESTful API using Node.js and Express to handle high-frequency data operations. Implemented Mongoose schemas for structured data modeling in MongoDB. Optimized frontend state management to ensure optimistic UI updates, reducing perceived latency to near-zero.",
        businessImpact: "Improves personal and professional throughput by centralizing task management, reducing the time spent on 'tool management' and increasing focus on execution.",
        github: "https://github.com/TechyAadi12",
        live: "https://to-do-frontnd.netlify.app/",
        image: "/images/todo.webp",
    },
];
