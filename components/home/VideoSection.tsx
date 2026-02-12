"use client";

import React from "react";
import { motion } from "framer-motion";

export default function VideoSection() {
    return (
        <section className="py-16 md:py-24 px-6 bg-stone-100">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="aspect-video rounded-2xl overflow-hidden shadow-lg"
                >
                    <iframe
                        src="https://www.youtube.com/embed/kcK0BcsEzz4"
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full"
                    />
                </motion.div>
            </div>
        </section>
    );
}
