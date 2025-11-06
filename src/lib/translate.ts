// MyMemory Translation API client (FREE, no API key needed)

const MYMEMORY_URL = "https://api.mymemory.translated.net";

export interface TranslateRequest {
  text: string;
  targetLang: string;
  sourceLang?: string;
}

export interface TranslateResponse {
  translatedText: string;
  detectedLanguage: {
    confidence: number;
    language: string;
  };
}

// Language code mapping (MyMemory uses standard ISO codes)
const LANG_CODE_MAP: Record<string, string> = {
  "zh": "zh-CN",    // Mandarin
  "zh-TW": "zh-TW", // Cantonese/Traditional Chinese
  "ar": "ar",       // Arabic
  "bn": "bn",       // Bengali
  "de": "de",       // German
  "en": "en",       // English
  "es": "es",       // Spanish
  "fr": "fr",       // French
  "hi": "hi",       // Hindi
  "id": "id",       // Indonesian
  "it": "it",       // Italian
  "ja": "ja",       // Japanese
  "ko": "ko",       // Korean
  "pt": "pt",       // Portuguese
  "ru": "ru",       // Russian
  "th": "th",       // Thai
  "tr": "tr",       // Turkish
  "ur": "ur",       // Urdu
  "vi": "vi",       // Vietnamese
  "pl": "pl",       // Polish
  "uk": "uk",       // Ukrainian
  "fa": "fa",       // Persian
  "sw": "sw",       // Swahili
  "nl": "nl",       // Dutch
  "el": "el",       // Greek
  "ms": "ms",       // Malay
  "fi": "fi",       // Finnish
  "no": "no",       // Norwegian
  "ta": "ta",       // Tamil
};

function mapLanguageCode(code: string): string {
  return LANG_CODE_MAP[code] || code;
}

export async function translateText({
  text,
  targetLang,
  sourceLang = "auto",
}: TranslateRequest): Promise<TranslateResponse> {
  // MyMemory auto-detects if source is not provided
  const langPair = sourceLang === "auto" 
    ? `auto|${mapLanguageCode(targetLang)}`
    : `${mapLanguageCode(sourceLang)}|${mapLanguageCode(targetLang)}`;

  const url = `${MYMEMORY_URL}/get?q=${encodeURIComponent(text)}&langpair=${langPair}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("MyMemory API error:", error);
    throw new Error(`Translation API error: ${error}`);
  }

  const data = await response.json();

  // MyMemory response format
  if (data.responseStatus !== 200) {
    throw new Error(data.responseDetails || "Translation failed");
  }

  // Detect source language from response
  let detectedLang = sourceLang;
  if (sourceLang === "auto" && data.matches && data.matches.length > 0) {
    // MyMemory doesn't return detected language directly, 
    // so we'll use "auto" or parse from matches if available
    detectedLang = "auto";
  }

  return {
    translatedText: data.responseData.translatedText,
    detectedLanguage: {
      confidence: data.matches?.[0]?.match || 1,
      language: detectedLang,
    },
  };
}

export async function detectLanguage(text: string): Promise<string> {
  // MyMemory doesn't have a dedicated detect endpoint
  // We'll use a translation to English with auto-detect
  try {
    await translateText({
      text,
      targetLang: "en",
      sourceLang: "auto",
    });
    return "auto"; // MyMemory auto-detects but doesn't return the source lang
  } catch (error) {
    console.error("Language detection failed:", error);
    return "unknown";
  }
}