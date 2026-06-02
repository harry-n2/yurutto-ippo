// 書籍画像を WebP 軽量化 + ASCII リネーム + セクション構造化する変換スクリプト
// 実行: (cwd= yurutto-ippo) node scripts/convert-books.mjs
import sharp from "sharp";
import fs from "fs";
import path from "path";

const SRC_BASE = "C:\\Users\\naoya\\myproject\\奈々さん\\Kindle support business\\レシピ";
const PROJECT = "C:\\Users\\naoya\\myproject\\奈々さん\\yurutto-ippo";
const OUT_IMG_BASE = path.join(PROJECT, "public", "images", "books");
const OUT_DATA = path.join(PROJECT, "lib", "books", "data.ts");
const OUT_MAP = path.join(PROJECT, "scripts", "rename-map.md");

const jobs = [
  { src: "レシピマンガ出版", out: "recipe-manga", title: "レシピマンガ統合版", slug: "/recipe-manga" },
  { src: "レシピ集", out: "recipes", title: "レシピ集", slug: "/recipes" },
  { src: "電子マンガ", out: "manga", title: "マンガ集", slug: "/manga" },
];

// セクション判定（元の日本語ファイル名のキーワードで判定）
const sectionRules = [
  { key: "cover", title: "表紙", test: (n) => /表紙/.test(n) },
  { key: "intro", title: "はじめに", test: (n) => /はじめに/.test(n) },
  { key: "toc", title: "目次", test: (n) => /目次/.test(n) },
  { key: "carrot-cake", title: "キャロットケーキ", test: (n) => /キャロットケーキ/.test(n) },
  { key: "mushroom-salad", title: "きのこサラダ", test: (n) => /きのこサラダ/.test(n) },
  { key: "green-curry", title: "グリーンカレー", test: (n) => /グリーンカレー/.test(n) },
  { key: "carrot-dressing", title: "にんじんドレッシング", test: (n) => /にんじんドレッシング|野菜ソムリエのドレッシング/.test(n) },
  { key: "veggie-curry", title: "野菜が主役のペーストカレー", test: (n) => /野菜が基本のカレー|野菜カレー/.test(n) },
  { key: "bolognese", title: "野菜が基本のボロネーゼ", test: (n) => /ボロネーゼ/.test(n) },
  { key: "profile", title: "筆者の紹介", test: (n) => /Profile/i.test(n) },
  { key: "review", title: "レビュー・特典", test: (n) => /review/i.test(n) },
];
const sectionOrder = sectionRules.map((r) => r.key);
const titleByKey = Object.fromEntries(sectionRules.map((r) => [r.key, r.title]));

// ASCII スラッグ化
const asciiRules = [
  [/表紙/g, "cover"], [/はじめに/g, "intro"], [/目次/g, "toc"],
  [/キャロットケーキ/g, "carrot-cake"], [/きのこサラダ/g, "mushroom-salad"],
  [/グリーンカレー/g, "green-curry"],
  [/にんじんドレッシング|野菜ソムリエのドレッシング/g, "carrot-dressing"],
  [/野菜が基本のカレー|野菜カレー/g, "veggie-curry"], [/ボロネーゼ/g, "bolognese"],
  [/完成品|完成/g, "done"], [/マンガ/g, "manga"],
];
function toAscii(filename) {
  let base = filename.replace(/\.[^.]+$/, "");
  for (const [re, rep] of asciiRules) base = base.replace(re, rep);
  base = base.replace(/[^\x20-\x7E]/g, "");
  base = base.replace(/[.\s_]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "").toLowerCase();
  return base || "img";
}
function leadNum(filename) {
  const m = filename.match(/^(\d+)/);
  return m ? parseInt(m[1], 10) : 9999;
}
function sectionOf(filename) {
  for (const r of sectionRules) if (r.test(filename)) return r.key;
  return "other";
}

const MAX_W = 1280;
const QUALITY = 80;
const books = {};
const mapLines = ["# 画像リネーム対応表（自動生成）", ""];

for (const job of jobs) {
  const srcDir = path.join(SRC_BASE, job.src);
  const outDir = path.join(OUT_IMG_BASE, job.out);
  fs.mkdirSync(outDir, { recursive: true });
  const files = fs.readdirSync(srcDir).filter((f) => /\.(png|jpe?g)$/i.test(f));

  const buckets = {};
  mapLines.push(`## ${job.title}  (${job.src} → public/images/books/${job.out})`, "");
  mapLines.push("| 元ファイル | 変換後(.webp) | セクション |", "|---|---|---|");

  for (const f of files) {
    const sec = sectionOf(f);
    const num = leadNum(f);
    const asciiName = toAscii(f) + ".webp";
    const outPath = path.join(outDir, asciiName);
    const meta = await sharp(path.join(srcDir, f))
      .resize({ width: MAX_W, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outPath);
    (buckets[sec] ||= []).push({
      src: `/images/books/${job.out}/${asciiName}`,
      num,
      w: meta.width,
      h: meta.height,
    });
    mapLines.push(`| ${f} | ${asciiName} | ${sec} |`);
  }
  mapLines.push("");

  const sections = [];
  for (const key of sectionOrder) {
    const arr = buckets[key];
    if (!arr || !arr.length) continue;
    arr.sort((a, b) => a.num - b.num);
    sections.push({
      id: key,
      title: titleByKey[key],
      images: arr.map((x, i) => ({ src: x.src, alt: `${titleByKey[key]} ${i + 1}`, w: x.w, h: x.h })),
    });
  }
  books[job.out] = { key: job.out, title: job.title, slug: job.slug, sections };
  console.log(`[${job.out}] ${files.length} imgs -> ${sections.length} sections`);
}

const ts = `// 自動生成（scripts/convert-books.mjs）。手動編集しない。
export type BookImage = { src: string; alt: string; w: number; h: number };
export type BookSection = { id: string; title: string; images: BookImage[] };
export type BookPage = { key: string; title: string; slug: string; sections: BookSection[] };

export const books: Record<string, BookPage> = ${JSON.stringify(books, null, 2)};
`;
fs.mkdirSync(path.dirname(OUT_DATA), { recursive: true });
fs.writeFileSync(OUT_DATA, ts, "utf8");
fs.writeFileSync(OUT_MAP, mapLines.join("\n"), "utf8");
console.log("WROTE", OUT_DATA);
console.log("WROTE", OUT_MAP);
