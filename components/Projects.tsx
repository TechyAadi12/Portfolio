"use client";

import { projects } from "@/lib/data";
import { motion, useScroll, useSpring } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, Cpu, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // Hook for the scroll progress bar
    const { scrollXProgress } = useScroll({
        container: scrollRef,
    });

    const scaleX = useSpring(scrollXProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
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
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const scrollAmount = direction === 'left' ? -clientWidth / 1.5 : clientWidth / 1.5;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="projects" className="py-24 px-6 bg-background relative overflow-hidden" ref={containerRef}>
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
                            <span className="w-8 h-px bg-primary inline-block" />
                            Selected Works
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-black tracking-tight">Case Studies</h3>
                    </motion.div>

                    {/* Desktop Navigation Controls */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            className={`p-4 rounded-full border transition-all ${canScrollLeft ? 'hover:bg-primary hover:text-white border-primary/20' : 'opacity-30 cursor-not-allowed border-border'}`}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            className={`p-4 rounded-full border transition-all ${canScrollRight ? 'hover:bg-primary hover:text-white border-primary/20' : 'opacity-30 cursor-not-allowed border-border'}`}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Horizontal Scroll Area */}
                <div className="relative group/scroll">
                    <div
                        ref={scrollRef}
                        onScroll={checkScroll}
                        className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex-shrink-0 w-[85vw] md:w-[420px] snap-start"
                            >
                                <div className="group/card h-full flex flex-col bg-muted/10 backdrop-blur-sm border border-border/40 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 active:scale-[0.98]">
                                    {/* Visual Header */}
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-600/10 z-10" />

                                        {/* Placeholder Logic with Premium Look */}
                                        <div className="absolute inset-0 bg-muted/20 flex flex-col items-center justify-center gap-4 group-hover/card:scale-105 transition-transform duration-700">
                                            <div className="w-16 h-16 rounded-3xl bg-background shadow-xl flex items-center justify-center group-hover/card:rotate-12 transition-transform duration-500">
                                                <Cpu className="text-primary" size={28} />
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40 italic">
                                                Deployment Active
                                            </span>
                                        </div>

                                        {/* Quick Access Overlay */}
                                        <div className="absolute inset-0 bg-background/60 backdrop-blur-md opacity-0 group-hover/card:opacity-100 transition-all duration-300 z-20 flex items-center justify-center gap-6">
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex flex-col items-center gap-2 group/link"
                                            >
                                                <div className="p-4 bg-primary text-primary-foreground rounded-2xl group-hover/link:scale-110 transition-transform">
                                                    <ExternalLink size={22} />
                                                </div>
                                                <span className="text-[10px] font-bold uppercase tracking-widest">Live Demo</span>
                                            </a>
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex flex-col items-center gap-2 group/link"
                                            >
                                                <div className="p-4 bg-background border rounded-2xl group-hover/link:scale-110 transition-transform">
                                                    <Github size={22} />
                                                </div>
                                                <span className="text-[10px] font-bold uppercase tracking-widest">Source</span>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Body Content */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.stack.slice(0, 3).map((tech) => (
                                                <span key={tech} className="text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 bg-primary/5 text-primary/80 border border-primary/10 rounded-lg">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <h4 className="text-2xl font-black mb-3 tracking-tighter group-hover/card:text-primary transition-colors">
                                            {project.name}
                                        </h4>

                                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6">
                                            {project.shortDescription}
                                        </p>

                                        <div className="mt-auto pt-6 border-t border-border/30 flex items-center justify-between">
                                            {/* <div className="flex -space-x-2">
                                                {[1, 2, 3].map(i => (
                                                    <div key={i} className="w-6 h-6 rounded-full border-2 border-background bg-muted text-[8px] flex items-center justify-center font-bold">
                                                        {i}
                                                    </div>
                                                ))}
                                            </div> */}
                                            {/* <a href={project.live} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:gap-3 transition-all">
                                                Details <ArrowUpRight size={14} />
                                            </a> */}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Scroll Progress Bar (Enhanced) */}
                <div className="relative h-1 w-full bg-muted rounded-full mt-4 overflow-hidden">
                    <motion.div
                        className="absolute left-0 top-0 h-full bg-primary origin-left"
                        style={{ scaleX }}
                    />
                </div>
                <div className="flex justify-between items-center mt-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Swipe to explore</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground md:hidden">Scroll Horizontally</span>
                </div>
            </div>
        </section>
    );
}
