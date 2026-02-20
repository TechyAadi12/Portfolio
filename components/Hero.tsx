"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-[#0f1d24]">
            {/* Background Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 bg-[radial-gradient(circle_at_70%_50%,rgba(45,212,191,0.08),transparent_50%)]" />

            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-left order-2 lg:order-1">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-[#2dd4bf] font-mono mb-4 text-lg"
                        >
                            Hi, my name is
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2 text-white"
                        >
                            <span className="bg-gradient-to-r from-[#2dd4bf] to-[#60a5fa] bg-clip-text text-transparent">
                                Aadi Pandey
                            </span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-4xl md:text-5xl font-bold text-[#94a3b8] mb-8"
                        >
                            Frontend Developer
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-[#94a3b8] text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
                        >
                            I create beautiful and functional web experiences using modern technologies.
                            Passionate about building user-friendly applications that make a difference.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <a
                                href="#projects"
                                className="inline-block px-10 py-4 bg-[#63f7d1] text-[#0f1d24] rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(99,247,209,0.3)] transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg"
                            >
                                View My Work
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="flex justify-center lg:justify-end order-1 lg:order-2"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
                            {/* Decorative Outer Ring */}
                            <div className="absolute inset-0 rounded-full border-2 border-[#2dd4bf]/20 animate-[spin_10s_linear_infinite]" />
                            <div className="absolute -inset-4 rounded-full border border-[#2dd4bf]/10" />

                            {/* Image Container */}
                            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-[#2dd4bf]/20 shadow-2xl shadow-[#2dd4bf]/10">
                                <img
                                    src="/hero.png"
                                    alt="Roshan Pandey"
                                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.parentElement!.style.backgroundColor = '#1e293b';
                                        e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-[#2dd4bf] text-6xl font-bold">RP</div>';
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer text-[#94a3b8]"
                onClick={() => document.getElementById('about')?.scrollIntoView()}
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
}
