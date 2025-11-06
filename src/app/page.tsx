import { TranslateForm } from "@/components/TranslateForm";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Farlingo
          </h1>
          <p className="text-xl text-gray-600">
            Translate Farcaster casts across 29 languages
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Paste a Warpcast URL or enter text to translate
          </p>
        </div>

        <TranslateForm />
      </div>
    </div>
  );
}