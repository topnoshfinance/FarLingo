import { NextRequest, NextResponse } from "next/server";
import { translateText } from "@/lib/translate";

export async function POST(request: NextRequest) {
  try {
    const { text, targetLang } = await request.json();

    if (!text || !targetLang) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: In Phase 2, check if input is a Warpcast URL and fetch the cast

    const result = await translateText({
      text,
      targetLang,
      sourceLang: "auto", // Auto-detect
    });

    return NextResponse.json({
      translatedText: result.translatedText,
      detectedLang: result.detectedLanguage.language,
      sourceText: text,
    });
  } catch (error) {
    console.error("Translation error:", error);
    return NextResponse.json(
      { error: "Translation failed" },
      { status: 500 }
    );
  }
}