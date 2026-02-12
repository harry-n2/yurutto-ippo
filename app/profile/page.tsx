"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Heart, Music, BookOpen, Feather, Sparkles } from "lucide-react";
import Header from "@/components/common/Header";
import LineContact from "@/components/common/LineContact";
import { basePath } from "@/lib/basePath";

const PROFILE_IMAGE_PATH = `${basePath}/images/nana-profile.jpg`;

const SectionHeading = ({ children, number }: { children: React.ReactNode, number: string }) => (
    <div className="flex items-end gap-4 mb-4">
        <span className="text-5xl md:text-7xl font-serif text-gold/20 leading-none">{number}</span>
        <h3 className="text-xl md:text-2xl font-serif text-stone-800 pb-2 border-b border-gold heading-line">{children}</h3>
    </div>
);

export default function ProfilePage() {
    return (
        <main className="min-h-screen bg-[#F9F9F5] text-stone-800 font-sans selection:bg-gold/20">
            <Header variant="light" />

            {/* --- HERO: Profile Intro --- */}
            <section className="relative pt-32 pb-20 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <p className="text-gold font-serif text-base tracking-[0.3em] uppercase mb-4">The Journey</p>
                        <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-stone-900 leading-tight">
                            一人の女性の目覚めが、<br className="hidden md:block" />
                            世界と家庭の境界線を溶かすまで
                        </h1>
                    </motion.div>

                    {/* Zig-Zag Layout for Journey Stories */}
                    <div className="space-y-24">

                        {/* Story 1: Violin (Text Left, Image Right) */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="order-2 lg:order-1"
                            >
                                <h4 className="font-serif text-2xl md:text-3xl text-stone-900 mb-6 flex items-center gap-3">
                                    <span className="w-10 h-[1px] bg-gold" />
                                    <Music className="w-6 h-6 text-gold" />
                                    不可能の超え方
                                </h4>
                                <p className="text-stone-600 leading-loose text-justify text-lg md:text-xl">
                                    大人になってから始めたバイオリン。周囲の「今さら？」という視線を背に、私は理想と現実を一致させるメソッドを自身に適用しました。<br />
                                    わずか1年後、私はプロの演奏家たちと共にステージに立ち、喝采を浴びていました。<br /><br />
                                    この経験から学んだのは、「年齢や環境は、何一つ諦める理由にならない」という真実。私がステージで奏でる音色は、かつての私のように迷っている誰かへのエールなのです。
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="order-1 lg:order-2 relative"
                            >
                                <div className="aspect-[3/4] max-w-sm mx-auto overflow-hidden rounded-lg shadow-xl">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={`${basePath}/images/profile-violin.jpg`}
                                        alt="Playing Violin on Stage"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-stone-100 -z-10 rounded-full" />
                            </motion.div>
                        </div>

                        {/* Story 2: Flower Bag (Image Left, Text Right) */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={`${basePath}/images/flower-set-black.jpg`}
                                        alt="Flower Bag Collection"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/10 -z-10 rounded-full" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h4 className="font-serif text-2xl md:text-3xl text-stone-900 mb-6 flex items-center gap-3">
                                    <span className="w-10 h-[1px] bg-gold" />
                                    <Feather className="w-6 h-6 text-gold" />
                                    世界と繋がる手仕事
                                </h4>
                                <p className="text-stone-600 leading-loose text-justify text-lg md:text-xl">
                                    2022年、華道家や花屋のための専用バッグ事業をゼロから立ち上げました。<br />
                                    オーダーメイドを中心に生み出した作品は、言葉も文化も異なる海外のクリエイターまで届き、累計400個を超える注文をいただくように。<br /><br />
                                    「一人の主婦」の発想と手仕事が、世界の伝統文化を支える一助となっている。この事実は、私に伴走するすべての方への「希望の証明」でもあります。
                                </p>
                            </motion.div>
                        </div>

                        {/* Story 3: Picture Book (Text Left, Placeholder Image Right) */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="order-2 lg:order-1"
                            >
                                <h4 className="font-serif text-2xl md:text-3xl text-stone-900 mb-6 flex items-center gap-3">
                                    <span className="w-10 h-[1px] bg-gold" />
                                    <BookOpen className="w-6 h-6 text-gold" />
                                    次世代へのラブレター
                                </h4>
                                <p className="text-stone-600 leading-loose text-justify text-lg md:text-xl">
                                    幼稚園からの依頼で始まった「絵本 × 音楽」の活動。<br />
                                    生演奏と物語を融合させたステージは、子供たちの感性を刺激するだけでなく、それを見守るお母さんたちに「大人が夢中になって生きる姿」を見せる教育的な挑戦でもあります。<br /><br />
                                    私たちは、背中で語れる。その確信が、今の活動の原動力です。
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="order-1 lg:order-2 relative"
                            >
                                <div className="aspect-[4/3] bg-stone-200 rounded-lg shadow-lg overflow-hidden">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={`${basePath}/images/profile_flower_kit.jpg`}
                                        alt="Flower Arrangement Kit"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- METHOD SECTION --- */}
            <section className="py-24 px-6 bg-stone-900 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-10 pointer-events-none"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <p className="text-gold font-serif tracking-[0.2em] text-base uppercase mb-2">The Method</p>
                        <h2 className="text-2xl md:text-3xl font-serif">なぜ、私の伴走は「現実」を変えるのか？</h2>
                        <p className="text-stone-400 mt-4 text-base md:text-lg">Amazon Kindleでの評価が物語る、理想を現実にするための「黄金律」</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-sm">
                            <span className="text-4xl text-gold font-serif block mb-4">01</span>
                            <h3 className="text-xl md:text-2xl font-medium mb-3">理想の言語化</h3>
                            <p className="text-stone-400 text-base md:text-lg leading-relaxed">
                                蓋をしていた本音を引き出し、「本当はどう生きたいか」の解像度を極限まで高めます。
                            </p>
                        </div>
                        {/* Step 2 */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-sm">
                            <span className="text-4xl text-gold font-serif block mb-4">02</span>
                            <h3 className="text-xl md:text-2xl font-medium mb-3">現実の構造改革</h3>
                            <p className="text-stone-400 text-base md:text-lg leading-relaxed">
                                精神的・経済的自立を果たすことで、夫や子供への執着を「健全な応援」へと反転させます。
                            </p>
                        </div>
                        {/* Step 3 */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-sm">
                            <span className="text-4xl text-gold font-serif block mb-4">03</span>
                            <h3 className="text-xl md:text-2xl font-medium mb-3">定着のサブスクリプション</h3>
                            <p className="text-stone-400 text-base md:text-lg leading-relaxed">
                                脳が拒絶しない「極小の一歩」を月1回のZoom作戦会議で設計。継続を「当たり前の習慣」に変えます。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- EPILOGUE SECTION --- */}
            <section className="py-24 px-6 bg-[#F9F9F5]">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="mb-12">
                        <h2 className="font-serif text-2xl md:text-3xl text-stone-900 mb-8 leading-tight">
                            あなたが変われば、<br />家庭も、世界も、優しくなる。
                        </h2>
                        <p className="text-stone-600 leading-loose text-center text-lg md:text-xl">
                            かつて離婚寸前だった私の家庭が、<br />
                            今や互いの活動を尊重し合う<br className="md:hidden" />最高のパートナーシップへと進化した理由。<br />
                            それは、私が「家族のために」という名目で<br />
                            自分を犠牲にするのをやめたからです。<br /><br />
                            あなたが「一人の女性」としての自分を取り戻し、<br />
                            生き生きと輝き始めたとき、<br />
                            お子さんは「お母さんの子供に生まれてよかった。<br />
                            人生ってこんなに楽しいんだ！」と、<br />
                            背中で学ぶのです。<br />
                            これ以上の教育が、他にあるでしょうか。<br /><br />
                            「ゆるっと一歩」は、<br />
                            決して小さな歩みではありません。<br />
                            それは、あなたの人生の、<br />
                            そしてあなたの大切な人たちの運命を根底から変える、<br />
                            偉大なる最初の一歩です。
                        </p>
                    </div>

                    <div className="relative inline-block mt-8">
                        <div className="absolute top-0 left-0 w-full h-full bg-gold/10 blur-xl rounded-full"></div>
                        <p className="relative z-10 font-serif text-xl md:text-2xl text-stone-800 leading-relaxed">
                            私は、あなたがその一歩を踏み出し、<br />
                            自分の翼で羽ばたき続けるその日まで、<br />
                            誠実な伴走者として、<br />
                            あなたのすぐ隣に居続けることを誓います。
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section with LINE */}
            <LineContact
                title="あなたの物語を、ここから始めましょう"
                description="公式LINEでは、より身近な情報発信や、個別の簡易相談も受け付けています。"
            />

            {/* Footer */}
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
