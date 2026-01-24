"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        q: "楽器の経験がなくても大丈夫ですか？",
        a: "はい、全く問題ありません。当プログラムは音楽の技術を教えるものではなく、音楽的感性を使って心を整える独自メソッドです。"
    },
    {
        q: "オンラインでの受講は可能ですか？",
        a: "はい、すべてのセッションはZoomなどのオンラインツールに対応しております。全国・海外どこからでもご受講いただけます。"
    },
    {
        q: "体験セッションでは何をしますか？",
        a: "現在のお悩みや理想の状態をお伺いし、あなたに合った解決の糸口を一緒に探します。無理な勧誘は一切ありませんのでご安心ください。"
    }
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 px-6 bg-stone-50">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-2">Q & A</h2>
                    <p className="text-xs text-stone-500 tracking-widest">よくあるご質問</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white rounded-xl border border-stone-200 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors"
                            >
                                <span className="font-medium text-stone-800 pr-8">{faq.q}</span>
                                {openIndex === i ? (
                                    <Minus className="w-5 h-5 text-gold flex-shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-stone-400 flex-shrink-0" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
