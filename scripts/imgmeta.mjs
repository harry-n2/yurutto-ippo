import sharp from "sharp";
for (const f of ["opt_hero_bg.png"]) {
  const m = await sharp(`public/images/${f}`).metadata();
  console.log(f, m.width + "x" + m.height, m.format);
}
