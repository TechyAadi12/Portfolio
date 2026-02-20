"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Menu, X, Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "./theme-provider";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                isScrolled
                    ? "glass-dark dark:glass bg-white/70 dark:bg-black/50 py-3 shadow-lg"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <a href="#" className="text-2xl font-bold tracking-tighter">
                    <span className="text-primary">Portfolio</span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center bg-muted/50 rounded-full p-1 border">
                        <button
                            onClick={() => setTheme("light")}
                            className={cn(
                                "p-2 rounded-full transition-all",
                                theme === "light" ? "bg-background shadow-sm text-primary" : "text-muted-foreground"
                            )}
                        >
                            <Sun size={16} />
                        </button>
                        <button
                            onClick={() => setTheme("dark")}
                            className={cn(
                                "p-2 rounded-full transition-all",
                                theme === "dark" ? "bg-background shadow-sm text-primary" : "text-muted-foreground"
                            )}
                        >
                            <Moon size={16} />
                        </button>
                        <button
                            onClick={() => setTheme("system")}
                            className={cn(
                                "p-2 rounded-full transition-all",
                                theme === "system" ? "bg-background shadow-sm text-primary" : "text-muted-foreground"
                            )}
                        >
                            <Monitor size={16} />
                        </button>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-2 rounded-full bg-muted/50"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-background border-b shadow-xl px-6 py-8 md:hidden flex flex-col space-y-4"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg font-medium hover:text-primary transition-colors py-2"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
