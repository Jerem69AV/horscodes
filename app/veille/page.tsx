import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Veille",
  description:
    "Veille juridique mutualisée du collectif Hors Codes — RGPD, IA Act, NIS2, MiCA, DORA, CRA et autres signaux faibles du droit du numérique.",
};

export default function VeillePage() {
  return (
    <div>
      <PageHeader
        section="section 05 / veille mutualisée"
        title="Ce qui se prépare,"
        emphasis="ce qui se précise."
        lead="Synthèses courtes, jurisprudences décantées, signaux faibles partagés. Mises à jour selon l'actualité — pas selon un calendrier éditorial."
      />

      <div className="px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
        <div className="max-w-3xl mx-auto">
          {/* Placeholder : pas encore d'articles */}
          <div
            className="rounded-2xl border p-10 sm:p-14 text-center"
            style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
          >
            <p className="code-comment mb-5">status: 200 — coming soon</p>
            <h2
              className="text-3xl sm:text-4xl mb-5"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
              }}
            >
              Le flux ouvre <span className="text-teal" style={{ fontStyle: "italic" }}>bientôt</span>.
            </h2>
            <p className="text-base leading-relaxed max-w-md mx-auto" style={{ color: "var(--muted-strong)" }}>
              Premières publications dès l&apos;activation du collectif : synthèses NIS2, premiers
              retours sur l&apos;IA Act, jurisprudences CNIL marquantes, signaux MiCA / PSAN.
            </p>
          </div>

          {/* Domaines couverts en veille */}
          <div className="mt-12">
            <p className="code-comment mb-5">domaines couverts</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "RGPD & sanctions CNIL",
                "IA Act & règlements connexes",
                "NIS2 / DORA / CRA",
                "Crypto-actifs · MiCA · PSAN",
                "LCB-FT & compliance",
                "Propriété intellectuelle logicielle",
                "Contrats IT & SaaS",
                "Contentieux numérique",
              ].map((d) => (
                <div
                  key={d}
                  className="px-4 py-3 rounded-lg border text-sm"
                  style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--border)",
                    color: "var(--muted-strong)",
                  }}
                >
                  <span className="text-teal font-mono mr-2">{">"}</span>
                  {d}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
