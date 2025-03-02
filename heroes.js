const heroes = [
  {
    id: 1,
    name: "Alucard",
    position: "Fighter/Assassin",
    description: "A vampire hunter with high lifesteal and burst damage.",
    rating: 4.7,
    image:
      "https://external-preview.redd.it/UFiIka4A9nfESKE_WxTsELo3N1PDIrdLjXLOHB7S7ew.jpg?auto=webp&s=9712144d785aa33a585b14f1c16b759602406313",
  },
  {
    id: 2,
    name: "Layla",
    position: "Marksman",
    description: "A long-range marksman with high damage in the late game.",
    rating: 4.5,
    image: "https://pbs.twimg.com/media/F6zCObObAAApVEH?format=jpg&name=large",
  },
  {
    id: 3,
    name: "Tigreal",
    position: "Tank",
    description: "A powerful tank with strong crowd control abilities.",
    rating: 4.6,
    image:
      "https://d1x91p7vw3vuq8.cloudfront.net/itemku-upload/202417/t2e41era62xrny0jx068b.jpg",
  },
  {
    id: 4,
    name: "Gusion",
    position: "Assassin",
    description: "A highly mobile assassin with deadly burst damage.",
    rating: 4.8,
    image:
      "https://cdna.artstation.com/p/assets/images/images/059/949/938/large/yenagry-ffffffffffffffffffffffffffffffffffffffffff.jpg?1677509213",
  },
  {
    id: 5,
    name: "Lancelot",
    position: "Assassin",
    description:
      "A swift assassin who can dash multiple times and deal burst damage.",
    rating: 4.7,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/87f1d34d-2002-4608-b166-a5c6fac0f344/dgkghkb-c25ec259-5430-4c63-b605-268d92633be1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg3ZjFkMzRkLTIwMDItNDYwOC1iMTY2LWE1YzZmYWMwZjM0NFwvZGdrZ2hrYi1jMjVlYzI1OS01NDMwLTRjNjMtYjYwNS0yNjhkOTI2MzNiZTEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tD1QXiipbseu8cyDehbyf1efIO2SDotQyRMzcryrm1Q",
  },
  {
    id: 6,
    name: "Guinevere",
    position: "Fighter/Mage",
    description: "A magic-based fighter with strong crowd control.",
    rating: 4.6,
    image: "https://i.redd.it/f7uufkb7e9r61.jpg",
  },
  {
    id: 7,
    name: "Kagura",
    position: "Mage",
    description: "A mage with complex mechanics and strong mobility.",
    rating: 4.7,
    image: "https://i.redd.it/bthbpqx0ismd1.jpeg",
  },
  {
    id: 8,
    name: "Aldous",
    position: "Fighter",
    description: "A fighter who gets stronger as the game progresses.",
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/20/94/ab/2094ab8e5efe8c90dbd0dc6a1c042b76.jpg",
  },
  {
    id: 9,
    name: "Lesley",
    position: "Marksman/Assassin",
    description: "A sniper with high critical damage and stealth abilities.",
    rating: 4.7,
    image:
      "https://cdn.oneesports.gg/cdn-data/2022/11/MLBB_HawkeyedSniper_Lesley.webp",
  },
  {
    id: 10,
    name: "Franco",
    position: "Tank",
    description: "A tank with a powerful hook ability to control enemies.",
    rating: 4.6,
    image:
      "https://i.ytimg.com/vi/_PdS-VPD46U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCzYW0_zuhg4Qw_IBfowkG62K7hXA",
  },
  {
    id: 11,
    name: "Natalia",
    position: "Assassin",
    description: "A stealth assassin who excels in ambushing enemies.",
    rating: 4.7,
    image: "https://i.ytimg.com/vi/RIFfxOtv1c0/maxresdefault.jpg",
  },
  {
    id: 12,
    name: "Esmeralda",
    position: "Tank/Mage",
    description: "A mage-tank hybrid that absorbs enemy shields.",
    rating: 4.8,
    image:
      "https://media.assettype.com/afkgaming%2F2024-03%2F70e0e555-209b-48b6-a2ec-b6388b83dbf7%2FMLBB_Esmeralda_Build_Guide.jpg?auto=format%2Ccompress&dpr=1.0&w=1200",
  },
  {
    id: 13,
    name: "Balmond",
    position: "Fighter/Tank",
    description: "A durable fighter with strong area damage.",
    rating: 4.5,
    image:
      "https://cdn.oneesports.gg/cdn-data/2023/07/MLBB_InfernalWarlordBalmond.jpg",
  },
  {
    id: 14,
    name: "Harith",
    position: "Mage",
    description: "A highly mobile mage with strong burst damage.",
    rating: 4.7,
    image:
      "https://api.duniagames.co.id/api/content/upload/file/16607617221587032454.jfif",
  },
  {
    id: 15,
    name: "Claude",
    position: "Marksman",
    description: "A marksman with high attack speed and mobility.",
    rating: 4.6,
    image:
      "https://cdn.oneesports.gg/cdn-data/2024/11/MLBB_M6WorldChampionship_CosmicBlazeClaude_splashart.jpg",
  },
  {
    id: 16,
    name: "Jawhead",
    position: "Fighter",
    description:
      "A strong initiator with the ability to throw enemies or allies.",
    rating: 4.6,
    image:
      "https://cdn.oneesports.gg/cdn-data/2022/08/MLBB_CyberRanger_Jawhead.webp",
  },
  {
    id: 17,
    name: "Chou",
    position: "Fighter",
    description: "A martial artist with excellent mobility and crowd control.",
    rating: 4.9,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/875f2d74-8587-4c51-ab41-6e5e48de00ae/dgcyiy8-df915223-6691-4f15-aebf-2f8b2310c180.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg3NWYyZDc0LTg1ODctNGM1MS1hYjQxLTZlNWU0OGRlMDBhZVwvZGdjeWl5OC1kZjkxNTIyMy02NjkxLTRmMTUtYWViZi0yZjhiMjMxMGMxODAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-gk4ElpWf_DtX3QBHeyESnxjN_ino_TIVCB3-7bBD-8",
  },
  {
    id: 19,
    name: "Cyclops",
    position: "Mage",
    description:
      "A small mage with high cooldown reduction and single-target damage.",
    rating: 4.5,
    image:
      "https://news.codashop.com/ph/wp-content/uploads/sites/5/2021/07/MLBB-Cyclops-%E2%80%98Master-Yoda-limited-skin-1024x1024.png",
  },
  {
    id: 20,
    name: "Argus",
    position: "Fighter",
    description:
      "A fighter who can become temporarily immortal with his ultimate skill.",
    rating: 4.6,
    image:
      "https://news.codashop.com/ph/wp-content/uploads/sites/5/2021/07/MLBB-Argus-%E2%80%98Darth-Vader-limited-skin.png",
  },
  {
    id: 21,
    name: "Kimmy",
    position: "Marksman/Mage",
    description: "A hybrid marksman-mage with a unique shooting mechanic.",
    rating: 4.7,
    image:
      "https://cdn.oneesports.gg/cdn-data/wp-content/uploads/2020/07/MLBB_DragonTamer_FrostWing_Kimmy.jpg",
  },
];
