import type { Metadata } from "next";
import { Mail, ExternalLink, MapPin } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez le collectif Hors Codes — avocats et juristes du droit du numérique sur l'arc Annecy · Annemasse · Lyon · Grenoble.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        section="section 07 / contact"
        title="Une question,"
        emphasis="un sujet, une idée."
        lead="Le collectif est joignable par email. Pour adhérer, voir la page dédiée. Pour les médias, propositions de partenariat ou interventions, écrivez-nous directement."
      />

      <div className="px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
          {/* Email */}
          <a
            href="mailto:contact@horscodes.fr"
            className="card-hover rounded-2xl border p-7 sm:p-8 block"
            style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
          >
            <div
              className="w-11 h-11 rounded-lg flex items-center justify-center mb-5"
              style={{
                backgroundColor: "rgba(37,99,235,0.08)",
                border: "1px solid rgba(37,99,235,0.2)",
              }}
            >
              <Mail size={20} className="text-teal" aria-hidden="true" />
            </div>
            <p className="code-comment mb-2">email</p>
            <h3
              className="text-lg mb-1.5"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
            >
              contact@horscodes.fr
            </h3>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              Réponse sous quelques jours par un membre du bureau.
            </p>
          </a>

          {/* LinkedIn placeholder */}
          <a
            href="#"
            className="card-hover rounded-2xl border p-7 sm:p-8 block"
            style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
          >
            <div
              className="w-11 h-11 rounded-lg flex items-center justify-center mb-5"
              style={{
                backgroundColor: "rgba(37,99,235,0.08)",
                border: "1px solid rgba(37,99,235,0.2)",
              }}
            >
              <ExternalLink size={20} className="text-teal" aria-hidden="true" />
            </div>
            <p className="code-comment mb-2">linkedin</p>
            <h3
              className="text-lg mb-1.5"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
            >
              Page Hors Codes
            </h3>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              À venir — annonces des meetups et publications de veille.
            </p>
          </a>

          {/* Géographie */}
          <div
            className="rounded-2xl border p-7 sm:p-8 sm:col-span-2"
            style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
          >
            <div
              className="w-11 h-11 rounded-lg flex items-center justify-center mb-5"
              style={{
                backgroundColor: "rgba(37,99,235,0.08)",
                border: "1px solid rgba(37,99,235,0.2)",
              }}
            >
              <MapPin size={20} className="text-teal" aria-hidden="true" />
            </div>
            <p className="code-comment mb-2">géographie</p>
            <h3
              className="text-xl mb-3"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
            >
              Annecy · Annemasse · Lyon · Grenoble
            </h3>
            <p className="text-sm sm:text-base leading-relaxed prose-justify" style={{ color: "var(--muted-strong)" }}>
              Le collectif n&apos;a pas d&apos;adresse postale unique : chaque membre exerce depuis
              son cabinet. Pour les rencontres présentielles, on s&apos;appuie sur les locaux des
              membres ou des partenaires (incubateurs, écoles, événements).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
