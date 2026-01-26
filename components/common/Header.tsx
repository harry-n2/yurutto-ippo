"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
    { href: "/", label: "Home", labelJa: "ホーム" },
    { href: "/profile", label: "Profile", labelJa: "プロフィール" },
    { href: "/course", label: "Course", labelJa: "講座案内" },
];

interface HeaderProps {
    variant?: "light" | "dark" | "transparent";
}

export default function Header({ variant = "transparent" }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/" || pathname === "";
        return pathname.startsWith(href);
    };

    const headerBg = isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm"
        : variant === "transparent"
            ? "bg-transparent"
            : variant === "light"
                ? "bg-white"
                : "bg-stone-900";

    const textColor = isScrolled
        ? "text-stone-800"
        : variant === "transparent" || variant === "dark"
            ? "text-white"
            : "text-stone-800";

    return (
        <>
            <header
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerBg}`}
            >
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className={`font-serif text-xl md:text-2xl tracking-widest ${textColor} hover:opacity-80 transition-opacity`}>
                        ゆるっと一歩相談室
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`relative text-base tracking-widest uppercase transition-colors ${textColor} hover:text-gold ${isActive(item.href) ? "text-gold" : ""
                                    }`}
                            >
                                {item.label}
                                {isActive(item.href) && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gold"
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden p-2 ${textColor}`}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-stone-900/98 md:hidden"
                    >
                        <nav className="flex flex-col items-center justify-center h-full gap-8">
                            {navItems.map((item, i) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`text-2xl font-serif tracking-widest text-white hover:text-gold transition-colors ${isActive(item.href) ? "text-gold" : ""
                                            }`}
                                    >
                                        {item.label}
                                        <span className="block text-xs text-stone-500 font-sans mt-1">
                                            {item.labelJa}
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
