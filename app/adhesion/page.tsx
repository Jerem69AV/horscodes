import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Adhésion",
  description:
    "Conditions et formulaire d'adhésion au collectif Hors Codes — avocats et juristes d'entreprise spécialisés en droit du numérique sur l'arc AURA.",
};

export default function AdhesionPage() {
  return (
    <div>
      <PageHeader
        section="section 06 / join"
        title="Rejoindre"
        emphasis="le collectif."
        lead="Le collectif est ouvert aux avocat·e·s et juristes d'entreprise installé·e·s ou actifs sur la région Auvergne-Rhône-Alpes, qui exercent dans un ou plusieurs des domaines couverts."
      />

      <div className="px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Conditions */}
          <div
            className="rounded-2xl border p-7 sm:p-9"
            style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
          >
            <p className="code-comment mb-4">conditions</p>
            <h2
              className="text-2xl sm:text-3xl mb-6"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 500, letterSpacing: "-0.015em" }}
            >
              Profil recherché
            </h2>
            <ul className="space-y-3 text-sm sm:text-base" style={{ color: "var(--muted-strong)" }}>
              {[
                "Avocat·e inscrit·e à un barreau français OU juriste d'entreprise basée en région AURA",
                "Pratique active sur au moins un des domaines : RGPD, IA, cyber, crypto, IP, contrats IT",
                "Disponibilité pour participer aux meetups bi-mensuels (présence régulière, pas obligatoire à chaque séance)",
                "Engagement à partager veille et retours d'expérience avec le collectif",
              ].map((c, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: "rgba(37,99,235,0.1)",
                      border: "1px solid rgba(37,99,235,0.3)",
                    }}
                  >
                    <Check size={12} className="text-teal" aria-hidden="true" />
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cotisation */}
          <div
            className="rounded-2xl border p-7 sm:p-9"
            style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
          >
            <p className="code-comment mb-4">cotisation</p>
            <h2
              className="text-2xl sm:text-3xl mb-4"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 500, letterSpacing: "-0.015em" }}
            >
              Frais d&apos;adhésion <span className="text-teal" style={{ fontStyle: "italic" }}>annuels</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed prose-justify mb-3" style={{ color: "var(--muted-strong)" }}>
              Montant fixé en assemblée générale lors de la première année. Communication des
              détails à confirmation de candidature.
            </p>
            <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
              <span className="text-teal">{"//"}</span> indicatif: cotisation symbolique pour
              couvrir les frais (hébergement, domaine, outils de visio)
            </p>
          </div>

          {/* CTA contact */}
          <div
            className="rounded-2xl p-7 sm:p-9 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(37,99,235,0.05), rgba(37,99,235,0.02))",
              border: "1px solid rgba(37,99,235,0.2)",
            }}
          >
            <p className="code-comment mb-4">next step</p>
            <h2
              className="text-2xl sm:text-3xl mb-5"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 500, letterSpacing: "-0.015em" }}
            >
              Contactez-nous pour candidater
            </h2>
            <p className="text-base leading-relaxed mb-7 max-w-md mx-auto" style={{ color: "var(--muted-strong)" }}>
              Envoyez-nous un message court avec votre profil, vos domaines de prédilection et
              votre lieu d&apos;exercice. Réponse sous quelques jours par un membre du bureau.
            </p>
            <a
              href="mailto:contact@horscodes.fr?subject=Candidature%20adh%C3%A9sion%20Hors%20Codes"
              className="btn-teal inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm sm:text-base"
            >
              Envoyer une candidature
            </a>
            <p className="mt-5 text-xs font-mono" style={{ color: "var(--muted)" }}>
              contact@horscodes.fr
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
