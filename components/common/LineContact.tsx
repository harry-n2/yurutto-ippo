"use client";

import React from "react";
import { motion } from "framer-motion";
import { QrCode, Smartphone } from "lucide-react";

interface LineContactProps {
    title?: string;
    description?: string;
    className?: string;
}

export default function LineContact({
    title = "公式LINEで相談する",
    description = "最新情報や限定コンテンツをお届けします。",
    className = ""
}: LineContactProps) {
    return (
        <section className={`py-20 px-6 bg-stone-100 ${className}`}>
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-200">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-10 md:p-14 flex flex-col justify-center bg-[#06C755] text-white">
                        <div className="flex items-center gap-3 mb-6">
                            <Smartphone className="w-8 h-8" />
                            <span className="font-bold tracking-widest">OFFICIAL LINE</span>
                        </div>
                        <h3 className="font-serif text-2xl md:text-3xl mb-4 leading-relaxed">
                            {title}
                        </h3>
                        <p className="opacity-90 leading-relaxed mb-8 text-sm md:text-base">
                            {description}
                        </p>
                        <button className="bg-white text-[#06C755] px-8 py-3 rounded-full font-bold hover:bg-stone-100 transition-colors self-start shadow-md">
                            お友達追加はこちら
                        </button>
                    </div>
                    <div className="p-10 md:p-14 flex flex-col items-center justify-center bg-stone-50">
                        <div className="w-48 h-48 bg-white p-4 rounded-xl shadow-inner border border-stone-200 flex items-center justify-center relative">
                            {/* LINE QR Code */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/yurutto-ippo/images/line_qr_final_v3.jpg"
                                alt="LINE QR Code"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <p className="mt-6 text-xs text-stone-500 text-center">
                            カメラでQRコードを読み取るか、<br />ボタンから追加してください。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
