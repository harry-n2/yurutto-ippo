"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DobutsuUranaiSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-stone-50 to-stone-100">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            viewport={{ once: true }}
            className="text-stone-900 font-bold font-serif text-base md:text-lg uppercase mb-6 tracking-widest"
          >
            A MOMENT OF DISCOVERY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-6 leading-tight"
          >
            あなたの中に眠る、<br />もうひとつの可能性
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 text-base md:text-lg leading-relaxed"
          >
            12種のどうぶつタイプから紐解く、あなたの強みと未来へのヒント。
          </motion.p>
        </div>

        {/* iframe Container */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-stone-300 max-w-[480px] mx-auto h-[1600px]">
          <iframe
            src="https://harry-n2.github.io/dobutsu-uranai/"
            title="どうぶつ幸福占い"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            loading="lazy"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
