import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="mt-auto border-t relative overflow-hidden"
      style={{ borderColor: "var(--border)", backgroundColor: "var(--background-alt)" }}
    >
      {/* Liseré teal top */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(37,99,235,0.4), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Identité */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="font-mono text-teal text-sm opacity-70" aria-hidden="true">
                //
              </span>
              <span
                className="text-xl"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
              >
                Hors Codes
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed max-w-md mb-5"
              style={{ color: "var(--muted-strong)" }}
            >
              Association loi 1901 réunissant des avocats indépendants spécialisés en droit du
              numérique, IA, cybersécurité, données personnelles et crypto-actifs sur la région
              Auvergne-Rhône-Alpes.
            </p>
            <p className="text-xs code-comment">
              Association loi 1901 — fondée en 2026
            </p>
          </div>

          {/* Liens */}
          <div>
            <h6 className="mb-4">Navigation</h6>
            <ul className="space-y-2.5 text-sm" style={{ color: "var(--muted-strong)" }}>
              <li><Link href="/manifeste" className="hover:text-teal transition-colors">Manifeste</Link></li>
              <li><Link href="/expertises" className="hover:text-teal transition-colors">Expertises</Link></li>
              <li><Link href="/evenements" className="hover:text-teal transition-colors">Événements</Link></li>
              <li><Link href="/veille" className="hover:text-teal transition-colors">Veille</Link></li>
            </ul>
          </div>

          {/* Asso */}
          <div>
            <h6 className="mb-4">Association</h6>
            <ul className="space-y-2.5 text-sm" style={{ color: "var(--muted-strong)" }}>
              <li><Link href="/adhesion" className="hover:text-teal transition-colors">Adhérer</Link></li>
              <li><Link href="/contact" className="hover:text-teal transition-colors">Contact</Link></li>
              <li><Link href="/mentions-legales" className="hover:text-teal transition-colors">Mentions légales</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderColor: "var(--border)", color: "var(--muted)" }}
        >
          <p>© {new Date().getFullYear()} Hors Codes — Association loi 1901.</p>
          <p className="font-mono text-[11px]">
            <span style={{ color: "var(--primary)", opacity: 0.6 }}>{"{"}</span>
            <span className="mx-2">droit numérique · IA · cyber · données · crypto · IP</span>
            <span style={{ color: "var(--primary)", opacity: 0.6 }}>{"}"}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
