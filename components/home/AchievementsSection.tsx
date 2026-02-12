"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { basePath } from "@/lib/basePath";

type AchievementProps = {
    title: string;
    subtitle: string;
    description: string;
    before: string;
    beforeDetail: string;
    after: string;
    afterDetail: string;
    image?: string;
};

const achievements: AchievementProps[] = [
    {
        title: "Case 01",
        subtitle: "販売未経験から「即完売」の作家へ - ハンドメイド作家 Tさん",
        description: "「作品はある。でも、どうやって売ればいいのか…」と途方に暮れていた彼女。私は彼女の「自信のなさ」というブレーキを外し、ブランディングと導線を徹底的に構築しました。公式LINEを立ち上げ、一通のメッセージを送る。その瞬間に「また売れました！」と鳴り止まない通知。今、彼女は「家事の合間に趣味で」ではなく、一人の事業主として誇りを持って生きています。",
        before: "Before",
        beforeDetail: "素敵な作品を作っているものの、どこで売ればいいのか、公式LINEの作り方、写真の撮り方も分からず、立ち止まっていました。",
        after: "After",
        afterDetail: "魅力が伝わる撮影方法をレクチャーし、販売サイトの構築と公式LINEの立ち上げをサポート。公式LINEから新作のお知らせをするたびに注文が入る状態が定着。",
        image: `${basePath}/images/achievement_handler.jpg`,
    },
    {
        title: "Case 02",
        subtitle: "育児の「消耗」を「コンテンツ」に変えた主婦 - Aさん",
        description: "「子供が小さくて何もできない」と涙ぐんでいた彼女に見えたのは、他人には真似できない「圧倒的な家事能力と大家族のリアル」という宝の山でした。私が提案したのは、その日常を世界へ発信するYouTube戦略。隙間時間で動画編集を学び、今や万単位の視聴者に勇気を与える人気チャンネルに。彼女の自立は、子供たちにとっても「かっこいいお母さん」の象徴となりました。",
        before: "Before",
        beforeDetail: "小さな子供たちがいて時間も余裕もない。「自分には特技もない」と、育児に消耗する毎日に焦りを感じていました。",
        after: "After",
        afterDetail: "「家事能力の高さ」を非日常の価値として再定義。YouTubeチャンネルの設立をプロデュースし、隙間時間での動画編集をマスター。多くのファンを持つ人気アカウントへ成長。",
        image: `${basePath}/images/achievement_mom.jpg`,
    },
    {
        title: "Case 03",
        subtitle: "封印した「アイドルの夢」を解き放ったママ - Eさん",
        description: "「この年齢で、母親なのに、そんなこと言えない」……。心の奥底に沈めていた「ステージへの憧れ」。私は彼女のその本音を、絶対に否定しませんでした。体験レッスンへの一歩から始まり、今や彼女のSNSは「自分を生きる美しさ」に溢れ、同世代の女性から圧倒的な支持を得るインフルエンサーへと変貌を遂げました。",
        before: "Before",
        beforeDetail: "「アイドルになりたい」という本音を、母親という立場から封印。生きがいのなさを感じていました。",
        after: "After",
        afterDetail: "心の奥底にある「本音」を引き出し、ダンスレッスンの体験へ。個人SNSでの発信を開始し、「母親として」ではなく「自分自身」としての発信を確立。顔つきまで明るく変化。",
        image: `${basePath}/images/achievement_idol.jpg`,
    },
];

const AchievementCard = ({ item, index }: { item: AchievementProps; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-stone-100 flex flex-col h-full"
        >
            {/* Upper Color Bar */}
            <div className="h-2 bg-gradient-to-r from-stone-200 to-gold/50" />

            <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-4 text-gold">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                </div>

                <p className="text-stone-400 font-serif text-base mb-2">{item.title}</p>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-6 leading-relaxed">{item.subtitle}</h3>

                <p className="text-stone-600 leading-relaxed text-base md:text-lg mb-8 flex-1">
                    {item.description}
                </p>

                {/* Before/After Box */}
                <div className="bg-stone-50 rounded-lg p-5 text-base space-y-4 border border-stone-100">
                    <div className="border-l-2 border-stone-300 pl-4">
                        <span className="font-bold text-stone-500 block text-base mb-1 tracking-wider">{item.before}</span>
                        <span className="text-stone-600 text-base leading-relaxed block">{item.beforeDetail}</span>
                    </div>
                    <div className="border-l-2 border-gold pl-4">
                        <span className="font-bold text-gold block text-base mb-1 tracking-wider">{item.after}</span>
                        <span className="text-stone-800 font-medium text-base leading-relaxed block">{item.afterDetail}</span>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default function AchievementsSection() {
    return (
        <section className="py-24 px-6 bg-stone-50/50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left: Text Content */}
                    <div className="text-left">
                        <motion.p
                            initial={{ opacity: 0, letterSpacing: "0.1em" }}
                            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
                            viewport={{ once: true }}
                            className="text-stone-900 font-bold font-serif text-base md:text-lg uppercase mb-6 tracking-widest"
                        >
                            GENESIS OF CHANGE
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-8 leading-tight"
                        >
                            人生を変えた<br />3つの成功神話
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-stone-800 text-lg md:text-xl leading-relaxed"
                        >
                            「何もない」から始まった、彼女たちの劇的なパラダイムシフト。<br />
                            あなたが理想を手にするための、確かな道しるべです。
                        </motion.p>
                    </div>

                    {/* Right: Image & Caption */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col items-center"
                    >
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
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {achievements.map((item, index) => (
                        <AchievementCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
