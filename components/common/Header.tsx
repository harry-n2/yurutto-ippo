"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, GraduationCap, BookOpen, UtensilsCrossed, Images } from "lucide-react";

const navItems = [
    { href: "/", label: "Home", Icon: Home },
    { href: "/profile", label: "Profile", Icon: User },
    { href: "/course", label: "Course", Icon: GraduationCap },
];

const bookItems = [
    { href: "/recipe-manga", label: "レシピマンガ統合版", Icon: BookOpen },
    { href: "/recipes", label: "レシピ集", Icon: UtensilsCrossed },
    { href: "/manga", label: "マンガ集", Icon: Images },
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

    const pillBase =
        "inline-flex items-center gap-1.5 rounded-full px-3.5 lg:px-4 py-2 text-xs lg:text-sm font-bold tracking-wide shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md whitespace-nowrap";

    // 本事業（Home/Profile/Course）= ボタニカル深緑
    const navPill = (href: string) =>
        `${pillBase} ${isActive(href)
            ? "bg-[#21413f] text-white ring-2 ring-white/60"
            : "bg-botanical text-white hover:bg-[#264a48]"}`;

    // 書籍3冊 = gold
    const bookPill = (href: string) =>
        `${pillBase} ${isActive(href)
            ? "bg-stone-900 text-gold ring-2 ring-gold"
            : "bg-gold text-stone-900 hover:bg-[#c9a635]"}`;

    return (
        <>
            <header
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerBg}`}
            >
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
                    {/* Logo */}
                    <Link href="/" className={`font-serif text-xl md:text-2xl tracking-widest ${textColor} hover:opacity-80 transition-opacity shrink-0`}>
                        ゆるっと一歩相談室
                    </Link>

                    {/* Desktop button cluster (lg+) */}
                    <div className="hidden lg:flex items-center gap-2 xl:gap-3">
                        {/* 本事業: 深緑ピル */}
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href} className={navPill(item.href)}>
                                <item.Icon className="w-4 h-4 shrink-0" />
                                {item.label}
                            </Link>
                        ))}
                        {/* 区切り */}
                        <span className="mx-1 h-6 w-px bg-current opacity-20" />
                        {/* 書籍: goldピル */}
                        {bookItems.map((b) => (
                            <Link key={b.href} href={b.href} className={bookPill(b.href)}>
                                <b.Icon className="w-4 h-4 shrink-0" />
                                {b.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile/Tablet Menu Button (< lg) */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`lg:hidden p-2 ${textColor}`}
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
                        className="fixed inset-0 z-40 bg-stone-900/98 lg:hidden overflow-y-auto"
                    >
                        <nav className="flex flex-col items-center justify-center min-h-full gap-8 px-8 py-28">
                            {/* 本事業（深緑） */}
                            <div className="flex flex-col items-stretch gap-4 w-full max-w-xs">
                                <span className="text-xs tracking-[0.3em] text-white/50 uppercase text-center mb-1">Menu</span>
                                {navItems.map((item, i) => (
                                    <motion.div key={item.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`flex items-center justify-center gap-2 w-full rounded-full px-6 py-4 font-bold text-base shadow-md transition-colors ${isActive(item.href) ? "bg-[#21413f] text-white ring-2 ring-white/60" : "bg-botanical text-white"}`}
                                        >
                                            <item.Icon className="w-5 h-5 shrink-0" />
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* 書籍（gold） */}
                            <div className="flex flex-col items-stretch gap-4 w-full max-w-xs pt-6 mt-2 border-t border-white/10">
                                <span className="text-xs tracking-[0.3em] text-gold/80 uppercase text-center mb-1">Books</span>
                                {bookItems.map((b, i) => (
                                    <motion.div key={b.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: (navItems.length + i) * 0.08 }}>
                                        <Link
                                            href={b.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`flex items-center justify-center gap-2 w-full rounded-full px-6 py-4 font-bold text-base shadow-md transition-colors ${isActive(b.href) ? "bg-stone-900 text-gold ring-2 ring-gold" : "bg-gold text-stone-900"}`}
                                        >
                                            <b.Icon className="w-5 h-5 shrink-0" />
                                            {b.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
