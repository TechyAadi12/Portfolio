"use client";

import { motion } from "framer-motion";
import { Code2, Zap, Layout, Globe } from "lucide-react";

const principles = [
    {
        icon: <Code2 className="text-primary" size={24} />,
        title: "Clean Architecture",
        description: "Focusing on maintainable, modular, and scalable code that stands the test of time.",
    },
    {
        icon: <Zap className="text-blue-500" size={24} />,
        title: "Performance First",
        description: "Optimizing for speed and efficiency to ensure a seamless experience for every user.",
    },
    {
        icon: <Layout className="text-purple-500" size={24} />,
        title: "User-Centric Design",
        description: "Creating intuitive interfaces that prioritize accessibility and user satisfaction.",
    },
    {
        icon: <Globe className="text-green-500" size={24} />,
        title: "Modern Tech Stack",
        description: "Leveraging the power of React, Next.js, and TypeScript to build robust applications.",
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-4">
                            Behind the code
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            A problem solver at heart, <br />
                            <span className="text-muted-foreground">an engineer by craft.</span>
                        </h3>
                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                As a developer, I don&apos;t just write code—I build solutions. My approach is rooted in architectural thinking and a deep understanding of how variables, functions, and systems interact to create meaningful user experiences.
                            </p>
                            <p>
                                I thrive on challenges that require creative problem-solving and a growth mindset. Whether it&apos;s optimizing a database query or crafting a complex animation, I approach every task with precision and a commitment to excellence.
                            </p>
                            <p>
                                My development philosophy is simple: keep it clean, keep it fast, and always keep the user in mind. I believe that great software is a blend of solid engineering and intentional design.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {principles.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-8 rounded-2xl border bg-muted/20 backdrop-blur-sm hover:border-primary/50 transition-colors"
                            >
                                <div className="mb-4 p-3 bg-background rounded-xl inline-block shadow-sm">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
