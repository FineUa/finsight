"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Кредити", href: "/" },
  { label: "Кредитні картки", href: "/cards" },
  { label: "Депозити", href: "/deposits" },
  { label: "Порівняння", href: "/comparison" },
  { label: "Новини", href: "/news" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center gap-0.5">
          <span className="text-xl font-bold text-blue-600">Fin</span>
          <span className="text-xl font-bold text-gray-800">sight</span>
        </Link>

        {/* Navigation links */}
        <nav className="flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={
                  isActive
                    ? "px-4 py-2 rounded-lg text-sm font-semibold text-blue-600 bg-blue-50"
                    : "px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                }
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
