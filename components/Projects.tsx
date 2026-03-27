"use client";

import { projects } from "@/lib/data";
import { motion, useScroll, useSpring } from "framer-motion";
import { Github, ExternalLink, Cpu, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const { scrollXProgress } = useScroll({
        container: scrollRef,
    });

    const scaleX = useSpring(scrollXProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener("resize", checkScroll);
        return () => window.removeEventListener("resize", checkScroll);
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const scrollAmount = direction === "left" ? -clientWidth / 1.5 : clientWidth / 1.5;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section id="projects" className="relative overflow-hidden bg-background px-6 py-24" ref={containerRef}>
            <div className="absolute top-1/2 left-0 -z-10 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

            <div className="max-w-7xl mx-auto">
                <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
                            <span className="inline-block h-px w-8 bg-primary" />
                            Selected Works
                        </h2>
                        <h3 className="text-4xl font-black tracking-tight md:text-5xl">Case Studies</h3>
                    </motion.div>

                    <div className="hidden items-center gap-4 md:flex">
                        <button
                            onClick={() => scroll("left")}
                            disabled={!canScrollLeft}
                            className={`rounded-full border p-4 transition-all ${canScrollLeft ? "border-primary/20 hover:bg-primary hover:text-white" : "cursor-not-allowed border-border opacity-30"}`}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            disabled={!canScrollRight}
                            className={`rounded-full border p-4 transition-all ${canScrollRight ? "border-primary/20 hover:bg-primary hover:text-white" : "cursor-not-allowed border-border opacity-30"}`}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="relative group/scroll">
                    <div
                        ref={scrollRef}
                        onScroll={checkScroll}
                        className="scrollbar-hide -mx-6 flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-12 md:mx-0 md:px-0"
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="w-[85vw] flex-shrink-0 snap-start md:w-[420px]"
                            >
                                <div className="group/card flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-border/40 bg-background backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 active:scale-[0.98]">
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/10 via-transparent to-blue-600/10" />

                                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background transition-transform duration-700 group-hover/card:scale-105">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-background shadow-xl transition-transform duration-500 group-hover/card:rotate-12">
                                                <Cpu className="text-primary" size={28} />
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] italic text-muted-foreground/40">
                                                Deployment Active
                                            </span>
                                        </div>

                                        <div className="absolute inset-0 z-20 flex items-center justify-center gap-6 bg-background/80 opacity-0 backdrop-blur-md transition-all duration-300 group-hover/card:opacity-100">
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/link flex flex-col items-center gap-2"
                                            >
                                                <div className="rounded-2xl bg-primary p-4 text-primary-foreground transition-transform group-hover/link:scale-110">
                                                    <ExternalLink size={22} />
                                                </div>
                                                <span className="text-[10px] font-bold uppercase tracking-widest">Live Demo</span>
                                            </a>
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/link flex flex-col items-center gap-2"
                                            >
                                                <div className="rounded-2xl border bg-background p-4 transition-transform group-hover/link:scale-110">
                                                    <Github size={22} />
                                                </div>
                                                <span className="text-[10px] font-bold uppercase tracking-widest">Source</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex flex-grow flex-col p-8">
                                        <div className="mb-4 flex flex-wrap gap-2">
                                            {project.stack.slice(0, 3).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-lg border border-primary/10 bg-primary/5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-primary/80"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <h4 className="mb-3 text-2xl font-black tracking-tighter transition-colors group-hover/card:text-primary">
                                            {project.name}
                                        </h4>

                                        <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                                            {project.shortDescription}
                                        </p>

                                        <div className="mt-auto border-t border-border/30 pt-6" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="relative mt-4 h-1 w-full overflow-hidden rounded-full border border-border/40 bg-background">
                    <motion.div
                        className="absolute left-0 top-0 h-full origin-left bg-primary"
                        style={{ scaleX }}
                    />
                </div>
                <div className="mt-3 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Swipe to explore</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground md:hidden">Scroll Horizontally</span>
                </div>
            </div>
        </section>
    );
}
