import sharp from "sharp";
const src = "public/images/opt_hero_bg.png";
// 壁・額縁を除いたアート中央を切り出し（1024x1024 内）
const left = 130, top = 240, width = 800, height = 540;
await sharp(src).extract({ left, top, width, height })
    .resize({ width: 1600 }) // 横長ヒーロー用に拡大
    .webp({ quality: 88 })
    .toFile("public/images/hero_violin_full.webp");
const m = await sharp("public/images/hero_violin_full.webp").metadata();
console.log("hero_violin_full.webp", `${m.width}x${m.height}`);
