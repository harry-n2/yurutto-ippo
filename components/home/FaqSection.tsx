"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        q: "好きなことや得意な事がなくても大丈夫ですか？",
        a: (
            <>
                はい、まったく問題ありません。<br />
                この講座は<br />
                「やりたいことが明確な人」のためのものではありません。<br />
                むしろ、<br />
                何が好きかわからない<br />
                昔はあった気がするけど思い出せない<br />
                考えようとすると不安になる<br />
                そんな状態の方を前提に設計しています。<br />
                <br />
                大切なのは<br />
                「好きなことを見つけること」ではなく<br />
                「自分を諦めずに、現実を一緒に整えていくこと」。<br />
                理想×現実ノートと月1回の作戦会議を通して、<br />
                今のあなたの状況から無理なく始められる一歩を一緒に見つけ、<br />
                行動につなげていきます。<br />
                <br />
                「何をしたいかわからない」状態は、<br />
                スタートラインに立っていないのではなく、<br />
                人生を見直すタイミングに来ているサインです。<br />
                安心して参加してください。
            </>
        )
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
                    <h2 className="font-serif text-4xl md:text-6xl text-stone-800 mb-4">Q & A</h2>
                    <p className="text-base md:text-lg text-stone-500 tracking-widest">よくあるご質問</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white rounded-xl border border-stone-200 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors"
                            >
                                <span className="font-bold text-stone-900 pr-8 text-lg md:text-xl flex-1">{faq.q}</span>
                                {openIndex === i ? (
                                    <Minus className="w-6 h-6 text-gold flex-shrink-0" />
                                ) : (
                                    <Plus className="w-6 h-6 text-stone-400 flex-shrink-0" />
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
                                        <div className="px-6 pb-8 text-stone-900 text-base md:text-lg leading-relaxed border-t border-stone-100 pt-6 px-8">
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
