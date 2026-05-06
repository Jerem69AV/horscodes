"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/manifeste", label: "Manifeste" },
  { href: "/expertises", label: "Expertises" },
  { href: "/evenements", label: "Événements" },
  { href: "/veille", label: "Veille" },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur-md"
      style={{
        backgroundColor: "rgba(250, 248, 243, 0.85)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo "// Hors Codes" */}
          <Link href="/" className="group flex items-center gap-2.5">
            <span
              className="font-mono text-teal text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
            >
              //
            </span>
            <span
              className="text-xl tracking-tight"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Hors Codes
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(({ href, label }) => {
              const active = pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className="text-sm font-medium transition-colors"
                  style={{
                    color: active ? "var(--primary)" : "var(--muted-strong)",
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/adhesion"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-lg text-sm btn-teal"
          >
            Adhérer
          </Link>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg"
            style={{ color: "var(--foreground)" }}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 space-y-1 border-t" style={{ borderColor: "var(--border)" }}>
            {navLinks.map(({ href, label }) => {
              const active = pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm font-medium"
                  style={{
                    color: active ? "var(--primary)" : "var(--muted-strong)",
                    backgroundColor: active ? "var(--primary-soft)" : "transparent",
                  }}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              href="/adhesion"
              onClick={() => setMobileOpen(false)}
              className="block mt-2 px-3 py-2.5 rounded-lg text-sm text-center btn-teal"
            >
              Adhérer
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
