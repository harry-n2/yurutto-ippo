import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import LineContact from "@/components/common/LineContact";
import BookGallery from "@/components/books/BookGallery";
import { books } from "@/lib/books/data";

export const metadata: Metadata = {
    title: "レシピ集 | ゆるっと一歩相談室",
    description: "野菜ソムリエ・奈々のレシピ集。料理ごとの完成イメージと作り方をまとめてご覧いただけます。",
};

export default function RecipesPage() {
    return (
        <>
            <Header variant="light" />
            <BookGallery page={books["recipes"]} />
            <LineContact
                title="新作レシピは、公式LINEで"
                description="季節のレシピや限定コラムを公式LINEでお届けしています。"
            />
            <Footer />
        </>
    );
}
