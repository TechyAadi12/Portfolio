"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Star } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="py-24 px-6 relative overflow-hidden">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 mb-4"
                    >
                        <div className="h-px w-8 bg-primary/40" />
                        <h2 className="text-sm font-bold tracking-widest uppercase text-primary">
                            Academic Foundation
                        </h2>
                        <div className="h-px w-8 bg-primary/40" />
                    </motion.div>

                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black tracking-tight"
                    >
                        Education & <span className="text-gradient">Growth</span>
                    </motion.h3>
                </div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative group lg:p-10 p-6 bg-background backdrop-blur-sm border border-border/40 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5"
                    >
                        <div className="absolute left-8 lg:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-border to-transparent hidden sm:block" />

                        <div className="relative z-10 sm:pl-12 lg:pl-16">
                            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-background border-4 border-primary shadow-lg hidden sm:block" />

                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
                                <div className="space-y-3">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider border border-primary/20">
                                        <GraduationCap size={14} /> Degree Candidate
                                    </div>

                                    <h4 className="text-2xl md:text-3xl font-black tracking-tighter">
                                        Bachelor of Technology in Information Technology
                                    </h4>

                                    <div className="flex flex-wrap gap-4 text-sm font-medium text-muted-foreground">
                                        <div className="flex items-center gap-1.5">
                                            <BookOpen size={16} className="text-primary/60" />
                                            Rajkiya Engineering College
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <MapPin size={16} className="text-primary/60" />
                                            Ambedkar Nagar, India
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-end gap-2 shrink-0">
                                    <div className="flex items-center gap-2 px-4 py-2 bg-background border rounded-2xl shadow-sm">
                                        <Calendar size={16} className="text-primary" />
                                        <span className="text-sm font-bold">2022 — 2026</span>
                                    </div>

                                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest bg-background px-3 py-1 rounded-lg border border-border/50">
                                        Current GPA: <span className="text-primary">7.10</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* LEFT */}
                                <div className="space-y-6">
                                    <div>
                                        <h5 className="text-xs font-black uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
                                            <Star size={14} /> Core Focus
                                        </h5>

                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            Focused on building{" "}
                                            <span className="text-foreground font-semibold">
                                                scalable and performant frontend applications
                                            </span>{" "}
                                            using modern frameworks. Continuously improving in{" "}
                                            <span className="text-foreground font-semibold">
                                                UI architecture, optimization techniques,
                                            </span>{" "}
                                            and real-world project development.
                                        </p>
                                    </div>

                                    <div className="p-5 rounded-2xl bg-primary/5 border border-primary/10">
                                        <h5 className="text-xs font-black uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
                                            <Award size={14} /> Initiative & Growth
                                        </h5>

                                        <p className="text-xs font-medium leading-relaxed italic">
                                            "Actively building real-world projects, exploring modern frontend tools,
                                            and continuously improving through hands-on development and self-driven learning."
                                        </p>
                                    </div>
                                </div>

                                {/* RIGHT */}
                                <div className="bg-background p-6 rounded-3xl border border-border/50">
                                    <h5 className="text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Key Work & Learning
                                    </h5>

                                    <ul className="space-y-4">
                                        {[
                                            {
                                                title: "Frontend Development",
                                                desc: "Built responsive UI using React, Tailwind CSS, and component-based architecture.",
                                            },
                                            {
                                                title: "Performance Practices",
                                                desc: "Applied techniques like lazy loading and code splitting to improve efficiency.",
                                            },
                                            {
                                                title: "Project Development",
                                                desc: "Developed real-world applications to strengthen practical understanding.",
                                            },
                                            {
                                                title: "Version Control",
                                                desc: "Used Git and GitHub for collaboration and code management.",
                                            },
                                            {
                                                title: "Continuous Learning",
                                                desc: "Actively exploring modern tools, frameworks, and frontend best practices.",
                                            },
                                        ].map((item, i) => (
                                            <li key={i} className="flex flex-col gap-1">
                                                <span className="text-xs font-bold">{item.title}</span>
                                                <span className="text-[11px] text-muted-foreground">
                                                    {item.desc}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}