/* eslint-disable @next/next/no-img-element */
import { ArrowUp } from "lucide-react";
import { basePath } from "@/lib/basePath";
import type { BookPage } from "@/lib/books/data";

export default function BookGallery({ page }: { page: BookPage }) {
    const cover = page.sections.find((s) => s.id === "cover");
    const content = page.sections.filter((s) => s.id !== "cover");

    return (
        <main id="top" className="min-h-screen bg-[#F9F9F5] text-stone-800 font-sans selection:bg-gold/20">
            {/* Hero */}
            <section className="pt-32 pb-12 px-6 text-center bg-gradient-to-b from-stone-200 to-[#F9F9F5]">
                <p className="text-gold font-serif text-sm tracking-[0.3em] uppercase mb-3">Yurutto Ippo Books</p>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 tracking-tight">
                    {page.title}
                </h1>
            </section>

            {/* Cover */}
            {cover && cover.images[0] && (
                <div className="px-6 mb-2 flex justify-center">
                    <img
                        src={`${basePath}${cover.images[0].src}`}
                        alt={cover.images[0].alt}
                        width={cover.images[0].w}
                        height={cover.images[0].h}
                        className="w-full max-w-sm rounded-2xl shadow-2xl border border-stone-200"
                    />
                </div>
            )}

            {/* もくじ */}
            <nav aria-label="もくじ" className="max-w-3xl mx-auto px-6 py-10">
                <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 md:p-8">
                    <h2 className="font-serif text-xl md:text-2xl text-stone-900 mb-6 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-gold" />
                        もくじ
                    </h2>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
                        {content.map((s, i) => (
                            <li key={s.id}>
                                <a
                                    href={`#${s.id}`}
                                    className="group flex items-baseline gap-3 text-stone-700 hover:text-gold transition-colors"
                                >
                                    <span className="font-serif text-gold/70 w-7 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                                    <span className="text-[1.1rem] border-b border-transparent group-hover:border-gold leading-relaxed">
                                        {s.title}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ol>
                </div>
            </nav>

            {/* Sections */}
            <div className="max-w-3xl mx-auto px-6 pb-12 space-y-20">
                {content.map((s) => (
                    <section key={s.id} id={s.id} className="scroll-mt-28">
                        <h2 className="font-serif text-2xl md:text-3xl text-stone-900 mb-8 flex items-center gap-3 border-b border-gold/60 pb-3">
                            <span className="w-2 h-8 bg-gold rounded-full" />
                            {s.title}
                        </h2>
                        <div className="space-y-6">
                            {s.images.map((img) => (
                                <img
                                    key={img.src}
                                    src={`${basePath}${img.src}`}
                                    alt={img.alt}
                                    width={img.w}
                                    height={img.h}
                                    loading="lazy"
                                    className="w-full h-auto rounded-xl shadow-md border border-stone-100 bg-white"
                                />
                            ))}
                        </div>
                        <div className="mt-8 text-center">
                            <a
                                href="#top"
                                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-stone-900 text-white text-sm tracking-widest hover:bg-gold transition-colors duration-300"
                            >
                                <ArrowUp className="w-4 h-4" />
                                トップにもどる
                            </a>
                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
}
