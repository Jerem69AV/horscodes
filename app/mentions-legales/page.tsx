import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site horscodes.fr — collectif Hors Codes, association loi 1901.",
};

export default function MentionsPage() {
  return (
    <div>
      <PageHeader
        section="legal / mentions"
        title="Mentions"
        emphasis="légales."
      />

      <div className="px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
        <div className="max-w-3xl mx-auto space-y-10 text-base leading-[1.7] prose-justify" style={{ color: "var(--muted-strong)" }}>
          <section>
            <h2
              className="text-2xl mb-4 text-teal"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
            >
              1. Éditeur du site
            </h2>
            <p>
              Le présent site (horscodes.fr) est édité par <strong>Hors Codes</strong>, association
              loi 1901, en cours de constitution.
            </p>
            <p className="mt-3">
              <strong>Email</strong>: contact@horscodes.fr<br />
              <strong>Numéro RNA</strong>: à compléter lors de la déclaration en préfecture<br />
              <strong>Siège social</strong>: à compléter
            </p>
          </section>

          <section>
            <h2
              className="text-2xl mb-4 text-teal"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
            >
              2. Hébergement
            </h2>
            <p>
              Site hébergé par <strong>Vercel Inc.</strong>, 440 N Barranca Ave #4133, Covina, CA
              91723, USA.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl mb-4 text-teal"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
            >
              3. Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, identité visuelle,
              structure) sont la propriété du collectif Hors Codes ou de leurs auteurs respectifs.
              Toute reproduction sans autorisation expresse est interdite.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl mb-4 text-teal"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
            >
              4. Données personnelles
            </h2>
            <p>
              Le site ne collecte aucune donnée personnelle automatiquement. Les seules données
              traitées sont celles que vous transmettez volontairement par email. Conformément au
              RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression
              en écrivant à contact@horscodes.fr.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl mb-4 text-teal"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
            >
              5. Cookies
            </h2>
            <p>
              Ce site n&apos;utilise pas de cookies de tracking. Seuls des cookies techniques
              strictement nécessaires au fonctionnement du site peuvent être déposés.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl mb-4 text-teal"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
            >
              6. Limite de responsabilité
            </h2>
            <p>
              Les contenus publiés sur Hors Codes (veille, articles, présentations) sont à titre
              informatif. Ils ne constituent pas un conseil juridique personnalisé au sens de la
              loi n° 71-1130 du 31 décembre 1971. Pour toute situation particulière, consultez un
              avocat.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
