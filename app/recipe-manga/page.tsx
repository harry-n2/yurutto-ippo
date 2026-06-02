import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import LineContact from "@/components/common/LineContact";
import BookGallery from "@/components/books/BookGallery";
import { books } from "@/lib/books/data";

export const metadata: Metadata = {
    title: "レシピマンガ統合版 | ゆるっと一歩相談室",
    description: "野菜ソムリエ・奈々のレシピとマンガを一冊にまとめた統合版。料理ごとの完成イメージ・レシピ・物語マンガをまとめてご覧いただけます。",
};

export default function RecipeMangaPage() {
    return (
        <>
            <Header variant="light" />
            <BookGallery page={books["recipe-manga"]} />
            <LineContact
                title="続きや限定特典は、公式LINEで"
                description="最新のレシピや限定コラム、個別のご相談も公式LINEで受け付けています。"
            />
            <Footer />
        </>
    );
}
