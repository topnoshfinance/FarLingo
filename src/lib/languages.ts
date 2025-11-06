// 29 supported languages for Farlingo
// Note: LibreTranslate uses ISO 639-1 codes

export const SUPPORTED_LANGUAGES = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "zh", name: "Mandarin (Simplified)", flag: "🇨🇳" },
  { code: "hi", name: "Hindi", flag: "🇮🇳" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "ar", name: "Arabic", flag: "🇸🇦" },
  { code: "bn", name: "Bengali", flag: "🇧🇩" },
  { code: "ru", name: "Russian", flag: "🇷🇺" },
  { code: "pt", name: "Portuguese", flag: "🇵🇹" },
  { code: "ur", name: "Urdu", flag: "🇵🇰" },
  { code: "id", name: "Indonesian", flag: "🇮🇩" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "ja", name: "Japanese", flag: "🇯🇵" },
  { code: "ko", name: "Korean", flag: "🇰🇷" },
  { code: "it", name: "Italian", flag: "🇮🇹" },
  { code: "th", name: "Thai", flag: "🇹🇭" },
  { code: "tr", name: "Turkish", flag: "🇹🇷" },
  { code: "ta", name: "Tamil", flag: "🇮🇳" },
  { code: "zh-TW", name: "Cantonese (Traditional)", flag: "🇭🇰" },
  { code: "vi", name: "Vietnamese", flag: "🇻🇳" },
  { code: "pl", name: "Polish", flag: "🇵🇱" },
  { code: "uk", name: "Ukrainian", flag: "🇺🇦" },
  { code: "fa", name: "Persian (Farsi)", flag: "🇮🇷" },
  { code: "sw", name: "Swahili", flag: "🇰🇪" },
  { code: "nl", name: "Dutch", flag: "🇳🇱" },
  { code: "el", name: "Greek", flag: "🇬🇷" },
  { code: "ms", name: "Malay", flag: "🇲🇾" },
  { code: "fi", name: "Finnish", flag: "🇫🇮" },
  { code: "no", name: "Norwegian", flag: "🇳🇴" },
] as const;

export type LanguageCode = typeof SUPPORTED_LANGUAGES[number]["code"];