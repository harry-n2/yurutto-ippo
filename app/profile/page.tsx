"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Star, Heart, Music } from "lucide-react";
import LineContact from "@/components/common/LineContact";

const PROFILE_IMAGE_PATH = "/yurutto-ippo/images/nana-profile.jpg";

export default function ProfilePage() {
    return (
        <main className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-gold/20">
            {/* Navigation Back */}
            <nav className="fixed top-0 w-full z-50 px-6 py-6 mix-blend-difference text-white">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm tracking-widest hover:opacity-70 transition-opacity"
                >
                    <ArrowLeft className="w-4 h-4" /> BACK TO HOME
                </Link>
            </nav>

            {/* Header Section */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 bg-stone-100/50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-6 tracking-tight">
                            Profile
                        </h1>
                        <p className="text-gold font-serif text-lg tracking-widest uppercase">
                            代表プロフィール
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Image Column - Contained, not full screen */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="lg:col-span-5 relative"
                        >
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={PROFILE_IMAGE_PATH}
                                    alt="Nana - Violinist & Mentor"
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent pointer-events-none" />
                            </div>
                            {/* Decorative Element */}
                            <div className="absolute -bottom-6 -right-6 w-full h-full border border-gold/30 rounded-2xl -z-10 hidden md:block" />
                        </motion.div>

                        {/* Content Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="lg:col-span-7 space-y-10 lg:pl-10"
                        >
                            <div>
                                <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-4 leading-normal">
                                    音楽と対話で、<br />
                                    <span className="text-gold">あなたらしい一歩</span>を紡ぐ。
                                </h2>
                                <div className="w-20 h-[1px] bg-gold mb-8" />
                                <p className="text-stone-600 leading-relaxed text-justify mb-6">
                                    はじめまして、奈々です。<br />
                                    バイオリニストとして長年音楽の世界に身を置き、音を通じて人の心と向き合ってきました。<br />
                                    <br />
                                    演奏家としての活動の中で、多くの人が「理想の自分」と「現実の自分」のギャップに苦しみ、
                                    本当にやりたいことを心の中に閉じ込めてしまっていることに気づきました。<br />
                                    <br />
                                    私自身も、完璧を求めるあまり身動きが取れなくなった経験があります。<br />
                                    そんな時、私を救ってくれたのは「音楽」の自由さと、
                                    心の内をありのままに話せる「対話」の時間でした。
                                </p>
                                <p className="text-stone-600 leading-relaxed text-justify">
                                    「ゆるっと一歩相談室」は、そんな私の経験から生まれた場所です。<br />
                                    あなたが本来持っている美しい音色（個性）を取り戻し、
                                    肩の力を抜いて、軽やかに人生の新しい一歩を踏み出す。<br />
                                    そのお手伝いをさせていただけることが、私の何よりの喜びです。
                                </p>
                            </div>

                            {/* Bio/Stats */}
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100">
                                <dl className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                                    <div>
                                        <dt className="text-xs text-stone-400 uppercase tracking-wider mb-1">Role</dt>
                                        <dd className="font-serif text-lg text-stone-800">Violinist / Life Mentor</dd>
                                    </div>
                                    <div>
                                        <dt className="text-xs text-stone-400 uppercase tracking-wider mb-1">Experience</dt>
                                        <dd className="font-serif text-lg text-stone-800">15+ Years in Music</dd>
                                    </div>
                                    <div className="md:col-span-2">
                                        <dt className="text-xs text-stone-400 uppercase tracking-wider mb-1">Mission</dt>
                                        <dd className="font-serif text-lg text-stone-800">
                                            誰もが自分の人生の主人公として、<br className="md:hidden" />美しい旋律を奏でられる世界を作る
                                        </dd>
                                    </div>
                                </dl>
                            </div>

                            {/* Values */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center p-4 bg-white rounded-lg border border-stone-100">
                                    <Heart className="w-8 h-8 text-gold mx-auto mb-3" />
                                    <h3 className="font-serif text-sm mb-2">Empathy</h3>
                                    <p className="text-xs text-stone-500">心に寄り添う</p>
                                </div>
                                <div className="text-center p-4 bg-white rounded-lg border border-stone-100">
                                    <Music className="w-8 h-8 text-gold mx-auto mb-3" />
                                    <h3 className="font-serif text-sm mb-2">Harmony</h3>
                                    <p className="text-xs text-stone-500">調和を生む</p>
                                </div>
                                <div className="text-center p-4 bg-white rounded-lg border border-stone-100">
                                    <Star className="w-8 h-8 text-gold mx-auto mb-3" />
                                    <h3 className="font-serif text-sm mb-2">Brilliance</h3>
                                    <p className="text-xs text-stone-500">輝きを引き出す</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section with LINE */}
            <LineContact
                title="まずは、あなたの声を聞かせてください"
                description="公式LINEでは、より身近な情報発信や、個別の簡易相談も受け付けています。お友達登録お待ちしています。"
            />

            {/* Footer Simple */}
            <footer className="bg-stone-900 text-stone-400 py-12 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Yurutto Ippo. All Rights Reserved.</p>
            </footer>
        </main>
    );
}
