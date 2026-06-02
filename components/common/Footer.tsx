import Link from "next/link";
import { Home, User, GraduationCap, BookOpen, UtensilsCrossed, Images, ArrowRight } from "lucide-react";

const navItems = [
    { href: "/", label: "Home", Icon: Home },
    { href: "/profile", label: "Profile", Icon: User },
    { href: "/course", label: "Course", Icon: GraduationCap },
];

const bookItems = [
    { href: "/recipe-manga", label: "レシピマンガ統合版", Icon: BookOpen },
    { href: "/recipes", label: "レシピ集", Icon: UtensilsCrossed },
    { href: "/manga", label: "マンガ集", Icon: Images },
];

export default function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-300 py-14 px-6">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-10 text-center">
                <div className="text-3xl font-serif text-white tracking-widest">ゆるっと一歩相談室</div>

                {/* 本事業メニュー（深緑・主導線） */}
                <div className="w-full">
                    <p className="text-xs tracking-[0.3em] text-white/50 uppercase mb-5">Menu</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                        {navItems.map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                className="group flex items-center justify-center gap-2 rounded-2xl bg-botanical text-white font-bold px-5 py-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#264a48] hover:shadow-xl"
                            >
                                <l.Icon className="w-5 h-5 shrink-0" />
                                <span>{l.label}</span>
                                <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* 書籍（gold・主導線） */}
                <div className="w-full">
                    <p className="text-xs tracking-[0.3em] text-gold/80 uppercase mb-5">Books</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                        {bookItems.map((b) => (
                            <Link
                                key={b.href}
                                href={b.href}
                                className="group flex items-center justify-center gap-2 rounded-2xl bg-gold text-stone-900 font-bold px-5 py-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#c9a635] hover:shadow-xl"
                            >
                                <b.Icon className="w-5 h-5 shrink-0" />
                                <span>{b.label}</span>
                                <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                            </Link>
                        ))}
                    </div>
                </div>

                <p className="text-sm text-stone-500 border-t border-white/10 w-full max-w-xl pt-6">&copy; {new Date().getFullYear()} ゆるっと一歩相談室.</p>
            </div>
        </footer>
    );
}
