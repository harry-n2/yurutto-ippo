// 自動生成（scripts/convert-books.mjs）。手動編集しない。
export type BookImage = { src: string; alt: string; w: number; h: number };
export type BookSection = { id: string; title: string; images: BookImage[] };
export type BookPage = { key: string; title: string; slug: string; sections: BookSection[] };

export const books: Record<string, BookPage> = {
  "recipe-manga": {
    "key": "recipe-manga",
    "title": "レシピマンガ統合版",
    "slug": "/recipe-manga",
    "sections": [
      {
        "id": "cover",
        "title": "表紙",
        "images": [
          {
            "src": "/images/books/recipe-manga/1-cover.webp",
            "alt": "表紙 1",
            "w": 980,
            "h": 1671
          }
        ]
      },
      {
        "id": "intro",
        "title": "はじめに",
        "images": [
          {
            "src": "/images/books/recipe-manga/2-intro01.webp",
            "alt": "はじめに 1",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/recipe-manga/3-intro02.webp",
            "alt": "はじめに 2",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/recipe-manga/4-intro03.webp",
            "alt": "はじめに 3",
            "w": 1086,
            "h": 1448
          }
        ]
      },
      {
        "id": "toc",
        "title": "目次",
        "images": [
          {
            "src": "/images/books/recipe-manga/5-toc4.webp",
            "alt": "目次 1",
            "w": 975,
            "h": 1614
          }
        ]
      },
      {
        "id": "carrot-cake",
        "title": "キャロットケーキ",
        "images": [
          {
            "src": "/images/books/recipe-manga/6-carrot-cake-done2.webp",
            "alt": "キャロットケーキ 1",
            "w": 1055,
            "h": 1491
          },
          {
            "src": "/images/books/recipe-manga/7-carrot-cake01.webp",
            "alt": "キャロットケーキ 2",
            "w": 1055,
            "h": 1491
          },
          {
            "src": "/images/books/recipe-manga/8-carrot-cake02.webp",
            "alt": "キャロットケーキ 3",
            "w": 1055,
            "h": 1491
          },
          {
            "src": "/images/books/recipe-manga/9-carrot-cake01-manga.webp",
            "alt": "キャロットケーキ 4",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/recipe-manga/10-carrot-cake02-manga.webp",
            "alt": "キャロットケーキ 5",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/recipe-manga/11-carrot-cake03-manga.webp",
            "alt": "キャロットケーキ 6",
            "w": 1086,
            "h": 1448
          }
        ]
      },
      {
        "id": "mushroom-salad",
        "title": "きのこサラダ",
        "images": [
          {
            "src": "/images/books/recipe-manga/12-mushroom-salad-done.webp",
            "alt": "きのこサラダ 1",
            "w": 1055,
            "h": 1491
          },
          {
            "src": "/images/books/recipe-manga/13-mushroom-salad01.webp",
            "alt": "きのこサラダ 2",
            "w": 1024,
            "h": 1536
          },
          {
            "src": "/images/books/recipe-manga/14-mushroom-salad02.webp",
            "alt": "きのこサラダ 3",
            "w": 1055,
            "h": 1491
          },
          {
            "src": "/images/books/recipe-manga/15-mushroom-salad01-manga.webp",
            "alt": "きのこサラダ 4",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/recipe-manga/16-mushroom-salad02-manga.webp",
            "alt": "きのこサラダ 5",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/recipe-manga/17-mushroom-salad03-manga.webp",
            "alt": "きのこサラダ 6",
            "w": 1086,
            "h": 1448
          }
        ]
      },
      {
        "id": "green-curry",
        "title": "グリーンカレー",
        "images": [
          {
            "src": "/images/books/recipe-manga/18-green-curry-done.webp",
            "alt": "グリーンカレー 1",
            "w": 1055,
            "h": 1491
          },
          {
            "src": "/images/books/recipe-manga/19-green-curry01.webp",
            "alt": "グリーンカレー 2",
            "w": 1055,
            "h": 1491
          },
          {
            "src": "/images/books/recipe-manga/20-green-curry02.webp",
            "alt": "グリーンカレー 3",
            "w": 1055,
            "h": 1491
          },
          {
            "src": "/images/books/recipe-manga/21-green-curry01-manga.webp",
            "alt": "グリーンカレー 4",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/recipe-manga/22-green-curry02-manga.webp",
            "alt": "グリーンカレー 5",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/recipe-manga/23-green-curry03-manga.webp",
            "alt": "グリーンカレー 6",
            "w": 1086,
            "h": 1448
          }
        ]
      },
      {
        "id": "carrot-dressing",
        "title": "にんじんドレッシング",
        "images": [
          {
            "src": "/images/books/recipe-manga/24-carrot-dressing-done.webp",
            "alt": "にんじんドレッシング 1",
            "w": 1055,
            "h": 1491
          },
          {
            "src": "/images/books/recipe-manga/25-carrot-dressing01.webp",
            "alt": "にんじんドレッシング 2",
            "w": 1055,
            "h": 1491
          },
          {
            "src": "/images/books/recipe-manga/26-carrot-dressing02.webp",
            "alt": "にんじんドレッシング 3",
            "w": 1055,
            "h": 1491
          },
          {
            "src": "/images/books/recipe-manga/27-carrot-dressing01-manga.webp",
            "alt": "にんじんドレッシング 4",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/recipe-manga/28-carrot-dressing02-manga.webp",
            "alt": "にんじんドレッシング 5",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/recipe-manga/29-carrot-dressing03-manga.webp",
            "alt": "にんじんドレッシング 6",
            "w": 1086,
            "h": 1448
          }
        ]
      },
      {
        "id": "veggie-curry",
        "title": "野菜が主役のペーストカレー",
        "images": [
          {
            "src": "/images/books/recipe-manga/30-veggie-curry-done.webp",
            "alt": "野菜が主役のペーストカレー 1",
            "w": 1055,
            "h": 1491
          },
          {
            "src": "/images/books/recipe-manga/31-veggie-curry01.webp",
            "alt": "野菜が主役のペーストカレー 2",
            "w": 1055,
            "h": 1491
          },
          {
            "src": "/images/books/recipe-manga/32-veggie-curry02.webp",
            "alt": "野菜が主役のペーストカレー 3",
            "w": 1055,
            "h": 1491
          },
          {
            "src": "/images/books/recipe-manga/33-veggie-curry01-manga.webp",
            "alt": "野菜が主役のペーストカレー 4",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/recipe-manga/34-veggie-curry02-manga.webp",
            "alt": "野菜が主役のペーストカレー 5",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/recipe-manga/35-veggie-curry03-manga.webp",
            "alt": "野菜が主役のペーストカレー 6",
            "w": 1086,
            "h": 1448
          }
        ]
      },
      {
        "id": "bolognese",
        "title": "野菜が基本のボロネーゼ",
        "images": [
          {
            "src": "/images/books/recipe-manga/36-bolognese-done.webp",
            "alt": "野菜が基本のボロネーゼ 1",
            "w": 1055,
            "h": 1491
          },
          {
            "src": "/images/books/recipe-manga/37-bolognese01.webp",
            "alt": "野菜が基本のボロネーゼ 2",
            "w": 1055,
            "h": 1491
          },
          {
            "src": "/images/books/recipe-manga/38-bolognese02.webp",
            "alt": "野菜が基本のボロネーゼ 3",
            "w": 1055,
            "h": 1491
          },
          {
            "src": "/images/books/recipe-manga/39-bolognese01-manga.webp",
            "alt": "野菜が基本のボロネーゼ 4",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/recipe-manga/40-bolognese02-manga.webp",
            "alt": "野菜が基本のボロネーゼ 5",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/recipe-manga/41-bolognese03-manga.webp",
            "alt": "野菜が基本のボロネーゼ 6",
            "w": 1086,
            "h": 1448
          }
        ]
      },
      {
        "id": "profile",
        "title": "筆者の紹介",
        "images": [
          {
            "src": "/images/books/recipe-manga/42-profile01-nana.webp",
            "alt": "筆者の紹介 1",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/recipe-manga/43-profile02-nana.webp",
            "alt": "筆者の紹介 2",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/recipe-manga/44-profile03-nana.webp",
            "alt": "筆者の紹介 3",
            "w": 1086,
            "h": 1448
          }
        ]
      },
      {
        "id": "review",
        "title": "レビュー・特典",
        "images": [
          {
            "src": "/images/books/recipe-manga/45-review1.webp",
            "alt": "レビュー・特典 1",
            "w": 1280,
            "h": 2120
          },
          {
            "src": "/images/books/recipe-manga/46-review2.webp",
            "alt": "レビュー・特典 2",
            "w": 1280,
            "h": 2120
          }
        ]
      }
    ]
  },
  "recipes": {
    "key": "recipes",
    "title": "レシピ集",
    "slug": "/recipes",
    "sections": [
      {
        "id": "cover",
        "title": "表紙",
        "images": [
          {
            "src": "/images/books/recipes/1-cover.webp",
            "alt": "表紙 1",
            "w": 980,
            "h": 1671
          }
        ]
      },
      {
        "id": "toc",
        "title": "目次",
        "images": [
          {
            "src": "/images/books/recipes/5-toc4.webp",
            "alt": "目次 1",
            "w": 975,
            "h": 1614
          }
        ]
      },
      {
        "id": "carrot-cake",
        "title": "キャロットケーキ",
        "images": [
          {
            "src": "/images/books/recipes/6-carrot-cake-done2.webp",
            "alt": "キャロットケーキ 1",
            "w": 1055,
            "h": 1491
          },
          {
            "src": "/images/books/recipes/7-carrot-cake01.webp",
            "alt": "キャロットケーキ 2",
            "w": 1055,
            "h": 1491
          },
          {
            "src": "/images/books/recipes/8-carrot-cake02.webp",
            "alt": "キャロットケーキ 3",
            "w": 1055,
            "h": 1491
          }
        ]
      },
      {
        "id": "mushroom-salad",
        "title": "きのこサラダ",
        "images": [
          {
            "src": "/images/books/recipes/12-mushroom-salad-done.webp",
            "alt": "きのこサラダ 1",
            "w": 1055,
            "h": 1491
          },
          {
            "src": "/images/books/recipes/13-mushroom-salad01.webp",
            "alt": "きのこサラダ 2",
            "w": 1024,
            "h": 1536
          },
          {
            "src": "/images/books/recipes/14-mushroom-salad02.webp",
            "alt": "きのこサラダ 3",
            "w": 1055,
            "h": 1491
          }
        ]
      },
      {
        "id": "green-curry",
        "title": "グリーンカレー",
        "images": [
          {
            "src": "/images/books/recipes/18-green-curry-done.webp",
            "alt": "グリーンカレー 1",
            "w": 1055,
            "h": 1491
          },
          {
            "src": "/images/books/recipes/19-green-curry01.webp",
            "alt": "グリーンカレー 2",
            "w": 1055,
            "h": 1491
          },
          {
            "src": "/images/books/recipes/20-green-curry02.webp",
            "alt": "グリーンカレー 3",
            "w": 1055,
            "h": 1491
          }
        ]
      },
      {
        "id": "carrot-dressing",
        "title": "にんじんドレッシング",
        "images": [
          {
            "src": "/images/books/recipes/24-carrot-dressing-done.webp",
            "alt": "にんじんドレッシング 1",
            "w": 1055,
            "h": 1491
          },
          {
            "src": "/images/books/recipes/25-carrot-dressing01.webp",
            "alt": "にんじんドレッシング 2",
            "w": 1055,
            "h": 1491
          },
          {
            "src": "/images/books/recipes/26-carrot-dressing02.webp",
            "alt": "にんじんドレッシング 3",
            "w": 1055,
            "h": 1491
          }
        ]
      },
      {
        "id": "veggie-curry",
        "title": "野菜が主役のペーストカレー",
        "images": [
          {
            "src": "/images/books/recipes/30-veggie-curry-done.webp",
            "alt": "野菜が主役のペーストカレー 1",
            "w": 1055,
            "h": 1491
          },
          {
            "src": "/images/books/recipes/31-veggie-curry01.webp",
            "alt": "野菜が主役のペーストカレー 2",
            "w": 1055,
            "h": 1491
          },
          {
            "src": "/images/books/recipes/32-veggie-curry02.webp",
            "alt": "野菜が主役のペーストカレー 3",
            "w": 1055,
            "h": 1491
          }
        ]
      },
      {
        "id": "bolognese",
        "title": "野菜が基本のボロネーゼ",
        "images": [
          {
            "src": "/images/books/recipes/36-bolognese-done.webp",
            "alt": "野菜が基本のボロネーゼ 1",
            "w": 1055,
            "h": 1491
          },
          {
            "src": "/images/books/recipes/37-bolognese01.webp",
            "alt": "野菜が基本のボロネーゼ 2",
            "w": 1055,
            "h": 1491
          },
          {
            "src": "/images/books/recipes/38-bolognese02.webp",
            "alt": "野菜が基本のボロネーゼ 3",
            "w": 1055,
            "h": 1491
          }
        ]
      },
      {
        "id": "review",
        "title": "レビュー・特典",
        "images": [
          {
            "src": "/images/books/recipes/45-review1.webp",
            "alt": "レビュー・特典 1",
            "w": 1280,
            "h": 2120
          },
          {
            "src": "/images/books/recipes/46-review2.webp",
            "alt": "レビュー・特典 2",
            "w": 1280,
            "h": 2120
          }
        ]
      }
    ]
  },
  "manga": {
    "key": "manga",
    "title": "マンガ集",
    "slug": "/manga",
    "sections": [
      {
        "id": "cover",
        "title": "表紙",
        "images": [
          {
            "src": "/images/books/manga/1-cover.webp",
            "alt": "表紙 1",
            "w": 980,
            "h": 1671
          }
        ]
      },
      {
        "id": "intro",
        "title": "はじめに",
        "images": [
          {
            "src": "/images/books/manga/2-intro01.webp",
            "alt": "はじめに 1",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/manga/3-intro02.webp",
            "alt": "はじめに 2",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/manga/4-intro03.webp",
            "alt": "はじめに 3",
            "w": 1086,
            "h": 1448
          }
        ]
      },
      {
        "id": "toc",
        "title": "目次",
        "images": [
          {
            "src": "/images/books/manga/5-toc4.webp",
            "alt": "目次 1",
            "w": 975,
            "h": 1614
          }
        ]
      },
      {
        "id": "carrot-cake",
        "title": "キャロットケーキ",
        "images": [
          {
            "src": "/images/books/manga/6-carrot-cake01-manga.webp",
            "alt": "キャロットケーキ 1",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/manga/7-carrot-cake02-manga.webp",
            "alt": "キャロットケーキ 2",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/manga/8-carrot-cake03-manga.webp",
            "alt": "キャロットケーキ 3",
            "w": 1086,
            "h": 1448
          }
        ]
      },
      {
        "id": "mushroom-salad",
        "title": "きのこサラダ",
        "images": [
          {
            "src": "/images/books/manga/9-mushroom-salad01-manga.webp",
            "alt": "きのこサラダ 1",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/manga/10-mushroom-salad02-manga.webp",
            "alt": "きのこサラダ 2",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/manga/11-mushroom-salad03-manga.webp",
            "alt": "きのこサラダ 3",
            "w": 1086,
            "h": 1448
          }
        ]
      },
      {
        "id": "green-curry",
        "title": "グリーンカレー",
        "images": [
          {
            "src": "/images/books/manga/12-green-curry01-manga.webp",
            "alt": "グリーンカレー 1",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/manga/13-green-curry02-manga.webp",
            "alt": "グリーンカレー 2",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/manga/14-green-curry03-manga.webp",
            "alt": "グリーンカレー 3",
            "w": 1086,
            "h": 1448
          }
        ]
      },
      {
        "id": "carrot-dressing",
        "title": "にんじんドレッシング",
        "images": [
          {
            "src": "/images/books/manga/15-carrot-dressing01-manga.webp",
            "alt": "にんじんドレッシング 1",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/manga/16-carrot-dressing02-manga.webp",
            "alt": "にんじんドレッシング 2",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/manga/17-carrot-dressing03-manga.webp",
            "alt": "にんじんドレッシング 3",
            "w": 1086,
            "h": 1448
          }
        ]
      },
      {
        "id": "veggie-curry",
        "title": "野菜が主役のペーストカレー",
        "images": [
          {
            "src": "/images/books/manga/18-veggie-curry01-manga.webp",
            "alt": "野菜が主役のペーストカレー 1",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/manga/19-veggie-curry02-manga.webp",
            "alt": "野菜が主役のペーストカレー 2",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/manga/20-veggie-curry03-manga.webp",
            "alt": "野菜が主役のペーストカレー 3",
            "w": 1086,
            "h": 1448
          }
        ]
      },
      {
        "id": "bolognese",
        "title": "野菜が基本のボロネーゼ",
        "images": [
          {
            "src": "/images/books/manga/21-bolognese01-manga.webp",
            "alt": "野菜が基本のボロネーゼ 1",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/manga/22-bolognese02-manga.webp",
            "alt": "野菜が基本のボロネーゼ 2",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/manga/23-bolognese03-manga.webp",
            "alt": "野菜が基本のボロネーゼ 3",
            "w": 1086,
            "h": 1448
          }
        ]
      },
      {
        "id": "profile",
        "title": "筆者の紹介",
        "images": [
          {
            "src": "/images/books/manga/24-profile01-nana.webp",
            "alt": "筆者の紹介 1",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/manga/25-profile02-nana.webp",
            "alt": "筆者の紹介 2",
            "w": 1086,
            "h": 1448
          },
          {
            "src": "/images/books/manga/26-profile03-nana.webp",
            "alt": "筆者の紹介 3",
            "w": 1086,
            "h": 1448
          }
        ]
      }
    ]
  }
};
