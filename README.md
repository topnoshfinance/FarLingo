# Farlingo 🌐

**Translate Farcaster casts across 29 languages. Earn points. Share translations.**

Farlingo is a Farcaster mini-app that translates casts, tracks your translation history, and rewards you with points for a potential future airdrop.

---

## Features (MVP - Phase 1)

- ✅ Translate text from 29 languages
- ✅ Auto-detect source language
- ✅ Paste Warpcast URL or raw text
- ✅ Clean UI (Tailwind + shadcn/ui)
- ✅ LibreTranslate integration (free/open-source)

---

## Tech Stack

- **Framework**: Next.js 14 (App Router) + React + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Translation**: LibreTranslate (https://libretranslate.com)
- **Deployment**: Vercel

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/topnoshfinance/farlingo.git
cd farlingo
```

### 2. Install dependencies

```bash
npm install
# or
pnpm install
```

### 3. Set up environment variables

Create `.env.local`:

```bash
# LibreTranslate API (optional - for higher rate limits)
LIBRETRANSLATE_API_KEY=your_api_key_here
LIBRETRANSLATE_URL=https://libretranslate.com
```

> Get a free API key at https://libretranslate.com

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Roadmap

- [x] Phase 1: Core translation (MVP)
- [ ] Phase 2: Farcaster integration (fetch casts by URL/hash)
- [ ] Phase 3: Wallet auth + points system
- [ ] Phase 4: Post translated casts to Farcaster
- [ ] Phase 5: Leaderboard + analytics

---

## Supported Languages (29)

English, Mandarin, Hindi, Spanish, French, Modern Standard Arabic, Bengali, Russian, Portuguese, Urdu, Indonesian, German, Japanese, Korean, Italian, Thai, Turkish, Tamil, Cantonese, Vietnamese, Polish, Ukrainian, Persian, Swahili, Dutch, Greek, Malay, Finnish, Norwegian

---

## Contributing

PRs welcome! Please open an issue first to discuss changes.

---

## License

MIT