import type { Metadata } from "next";
import { Calendar, Video, MapPin } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Événements",
  description:
    "Meetups distanciel, conférences locales, rencontres entre confrères — l'agenda du collectif Hors Codes.",
};

export default function EvenementsPage() {
  return (
    <div>
      <PageHeader
        section="section 04 / events"
        title="Ce qui s'écrit"
        emphasis="en ce moment."
        lead="Format inspiré du meetup Lyon (3 ans, 300+ inscrits) : 30 minutes de présentation par un membre, suivies d'un échange ouvert. Bi-mensuel, distanciel, gratuit."
      />

      <div className="px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* À venir — featured */}
          <article
            className="rounded-2xl border p-7 sm:p-9 "
            style={{ backgroundColor: "var(--card)", borderColor: "rgba(37,99,235,0.25)" }}
          >
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <span
                className="font-mono text-xs px-2.5 py-1 rounded-full text-teal"
                style={{
                  backgroundColor: "rgba(37,99,235,0.1)",
                  border: "1px solid rgba(37,99,235,0.3)",
                  letterSpacing: "0.12em",
                }}
              >
                À VENIR
              </span>
              <span className="font-mono text-xs flex items-center gap-1.5" style={{ color: "var(--muted)" }}>
                <Calendar size={12} aria-hidden="true" />
                Date à confirmer
              </span>
              <span className="font-mono text-xs flex items-center gap-1.5" style={{ color: "var(--muted)" }}>
                <Video size={12} aria-hidden="true" />
                Distanciel
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl mb-4"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                lineHeight: "1.15",
              }}
            >
              Premier meetup Hors Codes
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--muted-strong)" }}>
              Lancement officiel du collectif. Présentation des activités, premiers retours de
              veille (NIS2, IA Act, MiCA), tour de table des sujets pour les prochains rendez-vous.
              Ouvert aux avocats et juristes d&apos;entreprise de la région AURA.
            </p>
          </article>

          {/* Format */}
          <div
            className="rounded-2xl border p-7 sm:p-9"
            style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
          >
            <p className="code-comment mb-3">format</p>
            <h3
              className="text-2xl sm:text-3xl mb-5"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 500, letterSpacing: "-0.015em" }}
            >
              30 minutes. <span className="text-teal" style={{ fontStyle: "italic" }}>Régularité</span> avant tout.
            </h3>
            <ul className="space-y-3 text-sm sm:text-base leading-relaxed prose-justify" style={{ color: "var(--muted-strong)" }}>
              <li className="flex gap-3">
                <span className="text-teal shrink-0 font-mono">{">"}</span>
                <span>Un sujet par séance, présenté par un membre du collectif (ou un invité).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal shrink-0 font-mono">{">"}</span>
                <span>Distanciel (Google Meet ou équivalent), sans inscription préalable.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal shrink-0 font-mono">{">"}</span>
                <span>Échanges ouverts à la suite — retours d&apos;expérience terrain bienvenus.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal shrink-0 font-mono">{">"}</span>
                <span>Bi-mensuel pendant la phase de lancement, à ajuster selon l&apos;adoption.</span>
              </li>
            </ul>
          </div>

          {/* Présentiel ponctuel */}
          <div
            className="rounded-2xl border p-7 sm:p-9"
            style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
          >
            <p className="code-comment mb-3">présentiel</p>
            <h3
              className="text-2xl sm:text-3xl mb-5"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 500, letterSpacing: "-0.015em" }}
            >
              Quelques rencontres <span className="text-teal" style={{ fontStyle: "italic" }}>physiques</span> par an.
            </h3>
            <p className="text-sm sm:text-base leading-relaxed prose-justify mb-4" style={{ color: "var(--muted-strong)" }}>
              Le collectif se retrouve ponctuellement en présentiel à Annecy, Annemasse, Lyon,
              Grenoble — chez un membre, dans un incubateur, ou en partenariat avec un événement
              local.
            </p>
            <p className="text-xs flex items-center gap-2" style={{ color: "var(--muted)" }}>
              <MapPin size={11} aria-hidden="true" className="text-teal" />
              Annecy · Annemasse · Lyon · Grenoble
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
