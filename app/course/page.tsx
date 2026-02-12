"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, Clock, Calendar, Users, Zap } from "lucide-react";
import Header from "@/components/common/Header";
import LineContact from "@/components/common/LineContact";
import { basePath } from "@/lib/basePath";

export default function CoursePage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <main className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-gold/20">
            {/* Header Navigation */}
            <Header variant="light" />

            {/* Header Section */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 bg-gradient-to-b from-stone-200 to-stone-50">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 mb-6 tracking-tight">
                            Course Menu
                        </h1>
                        <p className="text-gold font-serif text-xl tracking-widest uppercase mb-8">
                            講座・サービス一覧
                        </p>
                        <p className="max-w-2xl mx-auto text-stone-600 leading-relaxed text-lg md:text-xl">
                            あなたの現在のステージや目的に合わせて選べる、<br className="hidden md:block" />
                            実践的かつ心に響く独自のプログラムをご用意しています。
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Course List */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto space-y-24">

                    {/* Course 1: Beginner */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    >
                        <div className="order-2 lg:order-1 space-y-6">
                            <motion.div variants={itemVariants} className="inline-block px-4 py-1 bg-stone-200 rounded-full text-stone-600 text-sm tracking-widest uppercase">
                                Step 1
                            </motion.div>
                            <motion.h2 variants={itemVariants} className="font-serif text-2xl md:text-3xl text-stone-800">
                                自己解放ベーシック講座
                            </motion.h2>
                            <motion.p variants={itemVariants} className="text-stone-600 leading-relaxed text-lg md:text-xl">
                                まずは「自分を知る」ことから始めます。日常の忙しさに埋もれてしまった自分の本音に耳を傾け、
                                心のブロックを優しく解きほぐしていく入門コースです。
                            </motion.p>

                            <motion.ul variants={itemVariants} className="space-y-3 pt-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                                    <span className="text-stone-700 text-lg">自分の思考の癖を知るワーク</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                                    <span className="text-stone-700 text-lg">感情デトックスセッション</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                                    <span className="text-stone-700 text-lg">理想の未来を描くビジョンマップ作成</span>
                                </li>
                            </motion.ul>

                            <motion.div variants={itemVariants} className="pt-6 grid grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg border border-stone-100 flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-stone-400" />
                                    <div>
                                        <p className="text-sm text-stone-400">期間</p>
                                        <p className="font-medium text-stone-800 text-lg">1ヶ月 (全3回)</p>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-stone-100 flex items-center gap-3">
                                    <Zap className="w-5 h-5 text-stone-400" />
                                    <div>
                                        <p className="text-sm text-stone-400">形式</p>
                                        <p className="font-medium text-stone-800 text-lg">オンライン / 録画</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <motion.div variants={itemVariants} className="order-1 lg:order-2 rounded-2xl overflow-hidden aspect-video relative group shadow-2xl">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={`${basePath}/images/opt_course_basic.png`}
                                alt="Basic Course"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    </motion.div>

                    {/* Course 2: Standard (Reversed Layout) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    >
                        <motion.div variants={itemVariants} className="bg-stone-800 rounded-2xl overflow-hidden aspect-video relative group shadow-2xl">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={`${basePath}/images/opt_course_adv.png`}
                                alt="Advance Course"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-stone-900/20" />
                        </motion.div>

                        <div className="space-y-6">
                            <motion.div variants={itemVariants} className="inline-block px-4 py-1 bg-gold/20 text-gold rounded-full text-sm tracking-widest uppercase">
                                Most Popular
                            </motion.div>
                            <motion.h2 variants={itemVariants} className="font-serif text-2xl md:text-3xl text-stone-800">
                                ライフシフト実践アカデミー
                            </motion.h2>
                            <motion.p variants={itemVariants} className="text-stone-600 leading-relaxed text-lg md:text-xl">
                                「わかる」を「できる」に変える、本格的な変容プログラム。
                                マンツーマンの対話と実践的なワークを通じて、
                                自分軸を確固たるものにし、理想のライフスタイルを実現します。
                            </motion.p>

                            <motion.ul variants={itemVariants} className="space-y-3 pt-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                                    <span className="text-stone-700 text-lg">月2回のマンツーマンコンサルティング</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                                    <span className="text-stone-700 text-lg">無制限チャットサポート</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                                    <span className="text-stone-700 text-lg">オリジナルブランディング構築</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                                    <span className="text-stone-700 text-lg">コミュニティ参加権</span>
                                </li>
                            </motion.ul>

                            <motion.div variants={itemVariants} className="pt-6 grid grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg border border-stone-100 flex items-center gap-3">
                                    <Calendar className="w-5 h-5 text-stone-400" />
                                    <div>
                                        <p className="text-sm text-stone-400">期間</p>
                                        <p className="font-medium text-stone-800 text-lg">3ヶ月 / 6ヶ月</p>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-stone-100 flex items-center gap-3">
                                    <Users className="w-5 h-5 text-stone-400" />
                                    <div>
                                        <p className="text-sm text-stone-400">形式</p>
                                        <p className="font-medium text-stone-800 text-lg">対面 & オンライン</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Process Flow */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-16 text-center">
                        Flow to Start <br />
                        <span className="text-lg text-stone-500 font-sans font-normal tracking-wide mt-2 block">受講までの流れ</span>
                    </h2>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-[15px] top-6 bottom-6 w-[2px] bg-stone-100 md:left-1/2 md:-ml-[1px]" />

                        <div className="space-y-12">
                            {[
                                { title: "お問い合わせ・予約", desc: "公式LINEまたは予約フォームより、体験セッションにお申し込みください。" },
                                { title: "体験セッション (60min)", desc: "現状の課題や悩みをヒアリングし、あなたに最適なプランをご提案します。" },
                                { title: "プラン決定・お申し込み", desc: "内容にご納得いただけましたら、正式なお申し込み・ご入金となります。" },
                                { title: "プログラム開始", desc: "オリエンテーションを行い、いよいよ新しい一歩の始まりです。" }
                            ].map((step, i) => (
                                <div key={i} className={`relative flex gap-8 items-start ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                                    {/* Number Bubble */}
                                    <div className="relative z-10 w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center font-bold text-base flex-shrink-0 md:absolute md:left-1/2 md:top-0 md:-ml-4">
                                        {i + 1}
                                    </div>

                                    {/* Content */}
                                    <div className={`flex-1 md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                                        <h3 className="font-serif text-2xl text-stone-800 mb-2">{step.title}</h3>
                                        <p className="text-stone-600 text-base md:text-lg">{step.desc}</p>
                                    </div>

                                    {/* Empty Space for alternate side on desktop */}
                                    <div className="hidden md:block md:w-1/2" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing / FAQ Placeholder Link */}
            <section className="py-20 px-6 bg-stone-50">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <div className="text-left space-y-8">
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 leading-tight">
                            プログラムの詳細は、<br />体験セッションにてお伝えしています。
                        </h2>
                        <p className="text-stone-900 text-lg md:text-xl leading-relaxed">
                            一人ひとりの状況に合わせて最適なプランをオーダーメイドでご提案する場合もあるため、<br className="hidden md:block" />
                            まずは一度お話できることを楽しみにしています。
                        </p>
                    </div>

                    {/* Right: Image & Caption */}
                    <div className="flex flex-col items-center">
                        <div className="relative w-full max-w-sm shadow-2xl rounded-lg overflow-hidden border-4 border-white/50">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={`${basePath}/images/journal_cover.jpg`}
                                alt="理想×現実ノート"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <p className="mt-6 text-xl font-serif tracking-[0.2em] text-stone-900 border-b border-gold pb-2">
                            理想×現実ノート
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <LineContact
                title="まずは体験セッションへ"
                description="どのコースが自分に合っているかわからない方も、まずはLINEからお気軽にご相談ください。"
                className="bg-white"
            />

            <footer className="bg-stone-900 text-stone-300 py-12 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-3xl font-serif text-white tracking-widest">ゆるっと一歩相談室</div>
                    <div className="flex gap-8 text-lg tracking-wider">
                        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                        <Link href="/profile" className="hover:text-gold transition-colors">Profile</Link>
                        <Link href="/course" className="hover:text-gold transition-colors">Course</Link>
                    </div>
                    <p className="text-base">&copy; {new Date().getFullYear()} ゆるっと一歩相談室.</p>
                </div>
            </footer>
        </main>
    );
}
