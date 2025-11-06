import Link from "next/link";
import { Languages } from "lucide-react";

export function Navbar() {
  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Languages className="w-6 h-6 text-purple-600" />
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Farlingo
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-purple-600 transition-colors">
            Translate
          </Link>
          <Link href="/history" className="text-sm font-medium text-gray-500 hover:text-purple-600 transition-colors">
            History
          </Link>
          <Link href="/leaderboard" className="text-sm font-medium text-gray-500 hover:text-purple-600 transition-colors">
            Leaderboard
          </Link>
          {/* Wallet connect button will go here in Phase 3 */}
        </div>
      </div>
    </nav>
  );
}