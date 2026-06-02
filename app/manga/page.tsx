import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import LineContact from "@/components/common/LineContact";
import BookGallery from "@/components/books/BookGallery";
import { books } from "@/lib/books/data";

export const metadata: Metadata = {
    title: "マンガ集 | ゆるっと一歩相談室",
    description: "野菜ソムリエ・奈々の料理にまつわる物語マンガ集。各レシピが生まれた背景の物語をマンガでお楽しみいただけます。",
};

export default function MangaPage() {
    return (
        <>
            <Header variant="light" />
            <BookGallery page={books["manga"]} />
            <LineContact
                title="続きや限定マンガは、公式LINEで"
                description="新作マンガや限定コラムを公式LINEでお届けしています。"
            />
            <Footer />
        </>
    );
}
