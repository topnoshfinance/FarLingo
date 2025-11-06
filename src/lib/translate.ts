// Simplified MyMemory Translation API (FREE, no signup)

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

export async function translateText({
  text,
  targetLang,
  sourceLang = "en",
}: TranslateRequest): Promise<TranslateResponse> {
  try {
    // Simple MyMemory API call - source|target format
    const langPair = `${sourceLang}|${targetLang}`;
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${langPair}`;
    
    console.log("Translation request:", { text, langPair, url });

    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    console.log("Translation response:", data);

    // Check if translation was successful
    if (!data.responseData || !data.responseData.translatedText) {
      throw new Error("Invalid response from translation API");
    }

    return {
      translatedText: data.responseData.translatedText,
      detectedLanguage: {
        confidence: 1,
        language: sourceLang,
      },
    };
  } catch (error) {
    console.error("Translation error details:", error);
    throw new Error(`Translation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export async function detectLanguage(text: string): Promise<string> {
  return "en"; // Default to English for now
}