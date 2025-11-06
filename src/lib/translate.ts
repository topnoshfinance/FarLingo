// LibreTranslate API client

const LIBRETRANSLATE_URL = process.env.LIBRETRANSLATE_URL || "https://libretranslate.com";
const API_KEY = process.env.LIBRETRANSLATE_API_KEY || "";

export interface TranslateRequest {
  text: string;
  targetLang: string;
  sourceLang?: string; // auto-detect if not provided
}

export interface TranslateResponse {
  translatedText: string;
  detectedLanguage: {
    confidence: number;
    language: string;
  };
}

export async function translateText({
  text,
  targetLang,
  sourceLang = "auto",
}: TranslateRequest): Promise<TranslateResponse> {
  const url = `${LIBRETRANSLATE_URL}/translate`;

  const body: any = {
    q: text,
    target: targetLang,
    format: "text",
  };

  if (sourceLang !== "auto") {
    body.source = sourceLang;
  }

  if (API_KEY) {
    body.api_key = API_KEY;
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`LibreTranslate API error: ${error}`);
  }

  const data = await response.json();

  return {
    translatedText: data.translatedText,
    detectedLanguage: data.detectedLanguage || {
      confidence: 0,
      language: sourceLang === "auto" ? "unknown" : sourceLang,
    },
  };
}

export async function detectLanguage(text: string): Promise<string> {
  const url = `${LIBRETRANSLATE_URL}/detect`;

  const body: any = {
    q: text,
  };

  if (API_KEY) {
    body.api_key = API_KEY;
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("Language detection failed");
  }

  const data = await response.json();

  // LibreTranslate returns an array of detections, take the most confident
  if (data && data.length > 0) {
    return data[0].language;
  }

  return "unknown";
}