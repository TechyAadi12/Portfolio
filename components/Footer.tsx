"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-muted/20 overflow-hidden border-t">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <a href="#" className="text-xl font-bold tracking-tighter">
                            Aadi<span className="text-primary">.dev</span>
                        </a>
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} All rights reserved. Built with precision & craft.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a
                            href="https://github.com/TechyAadi12"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-background border rounded-2xl hover:border-primary transition-all shadow-sm text-muted-foreground hover:text-primary hover:shadow-lg hover:shadow-primary/5"
                        >
                            <Github size={22} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/roshan-pandey-7a6254259/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-background border rounded-2xl hover:border-primary transition-all shadow-sm text-muted-foreground hover:text-primary hover:shadow-lg hover:shadow-primary/5"
                        >
                            <Linkedin size={22} />
                        </a>
                        <a
                            href="https://in.pinterest.com/promptledger31"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-background border rounded-2xl hover:border-primary transition-all shadow-sm text-muted-foreground hover:text-primary hover:shadow-lg hover:shadow-primary/5"
                        >
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.27 2.67 7.91 6.45 9.38-.09-.8-.16-2.02.03-2.89.18-.78 1.16-4.9 1.16-4.9s-.3-.59-.3-1.47c0-1.38.8-2.41 1.79-2.41.85 0 1.25.64 1.25 1.4 0 .85-.54 2.12-.82 3.3-.23.99.49 1.8 1.47 1.8 1.76 0 3.12-1.86 3.12-4.55 0-2.38-1.71-4.05-4.15-4.05-2.83 0-4.49 2.12-4.49 4.31 0 .85.33 1.77.74 2.27.08.1.09.19.07.29-.07.3-.24.97-.28 1.1-.05.18-.16.22-.36.12-1.35-.63-2.19-2.6-2.19-4.18 0-3.41 2.48-6.54 7.14-6.54 3.75 0 6.66 2.67 6.66 6.24 0 3.72-2.34 6.72-5.6 6.72-1.1 0-2.13-.57-2.48-1.24l-.67 2.57c-.24.93-.9 2.09-1.35 2.82 1.13.33 2.33.51 3.56.51 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                            </svg>
                        </a>
                        {/* <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-background border rounded-2xl hover:border-primary transition-all shadow-sm text-muted-foreground hover:text-primary hover:shadow-lg hover:shadow-primary/5"
                        >
                            <Instagram size={22} />
                        </a> */}
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute bottom-0 right-0 w-[20%] h-[20%] bg-primary/5 blur-[80px] rounded-full -z-10" />
        </footer>
    );
}
