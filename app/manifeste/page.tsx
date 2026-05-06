import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Manifeste",
  description:
    "Pourquoi Hors Codes existe. Notre vision du droit du numérique, notre approche de la veille mutualisée, des formations entre confrères et des événements destinés aux acteurs économiques.",
};

const SECTIONS = [
  {
    title: "Pourquoi un collectif ?",
    paragraphs: [
      "Le droit du numérique évolue plus vite que les codes ne s'écrivent. NIS2, IA Act, DORA, MiCA, CRA — chaque texte ouvre des angles qu'aucun avocat seul ne peut couvrir intégralement avec la même profondeur.",
      "Hors Codes naît d'un constat simple : il manquait, sur l'arc Annecy · Annemasse · Lyon · Grenoble, un espace où les avocats spécialisés en droit du numérique puissent partager leur veille, se former mutuellement, et porter des contenus à destination des acteurs économiques de la région.",
      "Pas un cabinet déguisé en association. Pas un groupement d'intérêt commercial. Une association loi 1901 de praticiens indépendants qui mettent en commun leur intelligence des sujets.",
    ],
  },
  {
    title: "Ce que nous faisons",
    paragraphs: [
      "Veille mutualisée. Chaque membre suit ses domaines de prédilection (RGPD, cyber, IA, crypto, IP, contrats IT) et partage les jurisprudences, doctrines et signaux faibles avec le collectif. On évite à chacun de relire ce qu'un autre a déjà décanté.",
      "Formations entre confrères. Quand un membre a creusé un sujet (par exemple : LCB-FT pour PSAN, NIS2 pour ETI, garanties autonomes en restructuring tech), il forme les autres en distanciel, format court (30 min), interactif.",
      "Événements pour acteurs économiques. Meetups bi-mensuels, conférences pour DSI, juristes d'entreprise, dirigeants d'ETI. Sur le territoire, là où on en a besoin.",
    ],
  },
  {
    title: "Ce que nous ne sommes pas",
    paragraphs: [
      "Pas un cabinet collectif. Chaque membre garde sa structure, son barreau, son indépendance déontologique. Aucune prestation vendue ensemble. Aucun mandat partagé.",
      "Pas une plateforme commerciale. Hors Codes n'a pas vocation à générer du chiffre d'affaires. Les membres se font connaître à travers leurs interventions et leur participation à la vie de l'association — la suite leur appartient.",
      "Pas une commission d'ordre. Les barreaux ont leurs commissions. Hors Codes les complète : multi-barreaux, multi-géographique, distanciel, et avec une régularité qui ne dépend pas du calendrier institutionnel.",
    ],
  },
  {
    title: "Géographie",
    paragraphs: [
      "Annecy, Annemasse, Lyon, Grenoble — l'arc qui structure notre activité. Mais aussi Chambéry, Thonon, le bassin lémanique, le sillon rhodanien.",
      "L'objectif : ramener de la compétence dans le territoire. Aujourd'hui, pour se former en cyber ou en IA, on prend la route de Lyon ou Paris. Demain, on échange à 9h sur un canal dédié, on monte un meetup distanciel à 18h, on intervient le mois suivant à Grenoble.",
    ],
  },
];

export default function ManifestePage() {
  return (
    <div>
      <PageHeader
        section="manifeste / version 0.1"
        title="Le droit, à la vitesse"
        emphasis="du code."
        lead="Ce qui nous réunit, ce que nous voulons construire, et les lignes que nous ne franchirons pas."
      />

      <div className="px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
        <div className="max-w-3xl mx-auto space-y-14 sm:space-y-16">
          {SECTIONS.map((s, i) => (
            <section key={i}>
              <p className="code-comment mb-3">chapter {String(i + 1).padStart(2, "0")}</p>
              <h2
                className="text-3xl sm:text-4xl mb-6"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  lineHeight: "1.1",
                }}
              >
                {s.title}
              </h2>
              <div className="space-y-5 text-base sm:text-[1.0625rem] leading-[1.75] prose-justify" style={{ color: "var(--muted-strong)" }}>
                {s.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
