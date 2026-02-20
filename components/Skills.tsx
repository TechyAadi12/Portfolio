"use client";

import { skills } from "@/lib/data";
import { motion } from "framer-motion";

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 bg-[#0a0a0c] text-white overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="mb-20 text-center md:text-left">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4"
                    >
                        Capabilities
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black tracking-tighter"
                    >
                        Technical Engineering
                    </motion.h3>
                </div>

                <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
                    {skills.map((category, catIdx) => (
                        <div key={category.category} className="space-y-10">
                            <motion.h4
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground border-b border-white/10 pb-4"
                            >
                                {category.category}
                            </motion.h4>

                            <div className="space-y-8">
                                {category.items.map((skill, index) => (
                                    <div key={skill.name} className="space-y-3">
                                        <div className="flex justify-between items-end">
                                            <span className="text-sm font-bold tracking-tight text-white/90">
                                                {skill.name}
                                            </span>
                                            <span className="text-[10px] font-black tracking-widest text-primary">
                                                {skill.level}%
                                            </span>
                                        </div>

                                        <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, ease: [0.65, 0, 0.35, 1], delay: index * 0.05 }}
                                                className="h-full bg-primary relative"
                                            >
                                                {/* Subtle glow at the end of the bar */}
                                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary/40 blur-md rounded-full" />
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 pt-10 border-t border-white/5 flex flex-wrap gap-8 justify-center md:justify-start"
                >
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Continuous Learning Path
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Core Competencies
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
