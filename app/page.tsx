"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, User, BookOpen } from "lucide-react";
import Link from "next/link";

// New Components
import SympathySection from "@/components/home/SympathySection";
import FaqSection from "@/components/home/FaqSection";
import LineContact from "@/components/common/LineContact";

export default function LandingPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  // Parallax for Hero Background
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="bg-stone-50 min-h-screen text-stone-800 overflow-x-hidden font-sans selection:bg-gold/20">

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-900">
        {/* Background Parallax */}
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          {/* New Premium Background Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/opt_hero_bg.png" alt="Luminous Symphony" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-serif text-xl md:text-2xl tracking-[0.2em] uppercase text-gold/90"
          >
            光の交響曲
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-tight mt-6"
          >
            圧倒的な気品と<br />
            <span className="font-light text-gold text-4xl md:text-6xl lg:text-7xl block mt-4">心を開く親しみ</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="font-sans text-base md:text-lg tracking-wide opacity-90 mt-8"
          >
            心に響く唯一無二のライフシフト体験
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="mt-12"
          >
            <Link href="/course">
              <button
                className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-gold hover:bg-white/20 transition-all duration-500 font-serif tracking-widest text-sm group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  体験セッションを予約する <ArrowRight className="w-4 h-4" />
                </span>
                <div className="absolute inset-0 bg-gold/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- SYMPATHY SECTION (NEW) --- */}
      <SympathySection />

      {/* --- SOLUTION / VALUE PROPOSITION --- */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl text-stone-800 mb-6">
            音楽の力が、心を解き放つ
          </h2>
          <p className="text-stone-600 leading-loose">
            言葉だけで変わろうとしないでください。<br />
            音の波動、対話の温度、空間の余白。<br />
            五感すべてを使って、あなたの本来の輝きを呼び覚まします。
          </p>
        </div>
      </section>

      {/* --- TEASER SECTIONS (VISUAL UPGRADE) --- */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Profile Teaser - Image Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/opt_profile.png"
              alt="Profile"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80" />

            <div className="absolute inset-0 p-10 flex flex-col justify-end items-center text-center text-white">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 border border-white/20">
                <User className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-3xl mb-4">Profile</h3>
              <p className="text-stone-300 text-sm mb-8 leading-relaxed max-w-sm">
                バイオリニストとしての感性と、<br />数多くの対話から生まれた独自のメソッド。<br />代表・奈々の想いをご紹介します。
              </p>
              <Link href="/profile" className="w-full max-w-xs">
                <button className="w-full py-3 px-6 bg-white text-stone-900 font-serif tracking-widest uppercase hover:bg-gold hover:text-white transition-colors duration-300">
                  View Profile
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Course Teaser - Image Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/opt_course_teaser.png"
              alt="Courses"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80" />

            <div className="absolute inset-0 p-10 flex flex-col justify-end items-center text-center text-white">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 border border-white/20">
                <BookOpen className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-3xl mb-4">Courses</h3>
              <p className="text-stone-300 text-sm mb-8 leading-relaxed max-w-sm">
                自己解放から実践的スキルまで。<br />あなたのステージに合わせた<br />多彩なプログラムをご用意しています。
              </p>
              <Link href="/course" className="w-full max-w-xs">
                <button className="w-full py-3 px-6 bg-white text-stone-900 font-serif tracking-widest uppercase hover:bg-gold hover:text-white transition-colors duration-300">
                  View Courses
                </button>
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- FAQ SECTION (NEW) --- */}
      <FaqSection />

      {/* --- LINE CONTACT / CTA --- */}
      <LineContact
        title="公式LINEで、新しい一歩を"
        description="限定コラムやイベント情報のほか、個別のメッセージも受け付けています。"
      />

      {/* --- FOOTER --- */}
      <footer className="bg-stone-900 text-stone-500 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-serif text-white tracking-widest">Yurutto Ippo</div>
          <div className="flex gap-8 text-sm tracking-wider">
            <Link href="/profile" className="hover:text-gold transition-colors">Profile</Link>
            <Link href="/course" className="hover:text-gold transition-colors">Course</Link>
          </div>
          <p className="text-xs">&copy; {new Date().getFullYear()} Yurutto Ippo.</p>
        </div>
      </footer>

    </div>
  );
}
