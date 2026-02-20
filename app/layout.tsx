import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "../components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Alex Rivera | Frontend / Full Stack Web Developer",
    description: "Senior-level developer focused on building high-performance, accessible, and beautiful web applications. Specializing in React, Next.js, and modern web architecture.",
    keywords: ["Web Developer", "Frontend Engineer", "Full Stack Developer", "Portfolio", "Next.js", "React"],
    openGraph: {
        title: "Alex Rivera | Portfolio",
        description: "Building the next generation of web experiences.",
        url: "https://alexrivera.dev",
        siteName: "Alex Rivera Portfolio",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={inter.className}>
                <ThemeProvider>
                    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
