"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SympathySection() {
    return (
        <section className="py-24 px-6 bg-stone-100">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-gold font-serif tracking-widest text-sm mb-4"
                    >
                        REALITY & IDEAL
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-3xl md:text-5xl text-stone-800 leading-tight"
                    >
                        こんなモヤモヤ、<br className="md:hidden" />抱えていませんか？
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                    {/* Left: Pain Points */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border-l-4 border-stone-300 relative"
                    >
                        <div className="absolute -top-4 -left-2 bg-stone-300 text-white text-xs px-3 py-1 rounded-full font-bold">REALITY</div>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-stone-600">
                                <span className="text-stone-300 text-xl font-serif">01.</span>
                                <span>言いたいことを我慢して、周りに合わせてばかりいる</span>
                            </li>
                            <li className="flex gap-3 text-stone-600">
                                <span className="text-stone-300 text-xl font-serif">02.</span>
                                <span>自分の「好き」が何だったのか、思い出せない</span>
                            </li>
                            <li className="flex gap-3 text-stone-600">
                                <span className="text-stone-300 text-xl font-serif">03.</span>
                                <span>忙しい毎日の中で、心が置き去りになっている気がする</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Right: Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border-l-4 border-gold relative"
                    >
                        <div className="absolute -top-4 -left-2 bg-gold text-white text-xs px-3 py-1 rounded-full font-bold">IDEAL</div>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-stone-800 font-medium">
                                <span className="text-gold text-xl font-serif">01.</span>
                                <span>自分の言葉で、ありのままの想いを伝えられる</span>
                            </li>
                            <li className="flex gap-3 text-stone-800 font-medium">
                                <span className="text-gold text-xl font-serif">02.</span>
                                <span>心から情熱を注げる「何か」を見つけ、輝いている</span>
                            </li>
                            <li className="flex gap-3 text-stone-800 font-medium">
                                <span className="text-gold text-xl font-serif">03.</span>
                                <span>肩の力を抜いて、私らしいペースで人生を楽しめる</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 text-center max-w-2xl mx-auto"
                >
                    <p className="text-lg text-stone-700 leading-relaxed">
                        そのギャップを埋めるのは、<br />
                        難しいスキルでも、厳しい努力でもありません。<br />
                        <span className="text-gold font-bold text-xl inline-block mt-4">
                            ただ、「心のチューニング」を整えるだけ。
                        </span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
