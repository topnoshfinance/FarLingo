"use client";

import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SUPPORTED_LANGUAGES } from "@/lib/languages";

interface TranslationResultProps {
  result: {
    translatedText: string;
    detectedLang: string;
    sourceText: string;
  };
}

export function TranslationResult({ result }: TranslationResultProps) {
  const [copied, setCopied] = useState(false);

  const sourceLang = SUPPORTED_LANGUAGES.find(
    (l) => l.code === result.detectedLang
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(result.translatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">Translation</h3>
        {sourceLang && (
          <span className="text-sm text-gray-500">
            Detected: {sourceLang.flag} {sourceLang.name}
          </span>
        )}
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-4 min-h-[100px]">
        <p className="text-gray-800 leading-relaxed">{result.translatedText}</p>
      </div>

      <div className="flex gap-2">
        <Button
          onClick={handleCopy}
          variant="outline"
          size="sm"
          className="flex-1"
        >
          {copied ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4" />
              Copy
            </>
          )}
        </Button>
        {/* Share button will be added in Phase 4 */}
      </div>

      <details className="text-sm">
        <summary className="cursor-pointer text-gray-600 hover:text-gray-800">
          Show original text
        </summary>
        <div className="mt-2 p-3 bg-gray-50 rounded border text-gray-700">
          {result.sourceText}
        </div>
      </details>
    </div>
  );
}