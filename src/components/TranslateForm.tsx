"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { LanguageSelector } from "@/components/LanguageSelector";
import { TranslationResult } from "@/components/TranslationResult";
import { Languages, Loader2 } from "lucide-react";

export function TranslateForm() {
  const [input, setInput] = useState("");
  const [targetLang, setTargetLang] = useState("en");
  const [result, setResult] = useState<{
    translatedText: string;
    detectedLang: string;
    sourceText: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTranslate = async () => {
    if (!input.trim()) {
      setError("Please enter text to translate");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: input,
          targetLang,
        }),
      });

      if (!response.ok) {
        throw new Error("Translation failed");
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError("Translation failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Warpcast URL or Text
          </label>
          <Textarea
            placeholder="Paste a Warpcast URL or enter text to translate..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[120px]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Translate to
          </label>
          <LanguageSelector value={targetLang} onChange={setTargetLang} />
        </div>

        {error && (
          <div className="text-sm text-red-600 bg-red-50 p-3 rounded">
            {error}
          </div>
        )}

        <Button
          onClick={handleTranslate}
          disabled={loading}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          size="lg"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Translating...
            </>
          ) : (
            <>
              <Languages className="mr-2 h-4 w-4" />
              Translate
            </>
          )}
        </Button>
      </div>

      {result && <TranslationResult result={result} />}
    </div>
  );
}