import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Eye, Users, Calendar, Shield,
  Brain, Lock, Coins, Lightbulb, FileCode,
  Building2, MapPin, GraduationCap,
} from "lucide-react";
import { ExpertiseCard, type Expertise } from "@/components/expertise-card";
import { Emphasis } from "@/components/emphasis";

const PILLARS = [
  {
    icon: Eye,
    title: "Veille mutualisée",
    text: "Chaque membre suit ses domaines de prédilection et partage avec le collectif les jurisprudences, doctrines et signaux faibles qui méritent d'être décantés. On évite à chacun de relire ce qu'un autre a déjà résumé.",
  },
  {
    icon: GraduationCap,
    title: "Formations entre confrères",
    text: "Quand un membre a creusé un sujet — NIS2, MiCA, IA Act, LCB-FT — il forme les autres en distanciel, format court et interactif. Régularité bi-mensuelle.",
  },
  {
    icon: Calendar,
    title: "Événements pour acteurs économiques",
    text: "Meetups, conférences et interventions à destination des dirigeants, juristes d'entreprise et DSI de la région. Sur le territoire, là où on en a besoin.",
  },
  {
    icon: Shield,
    title: "Indépendance professionnelle",
    text: "Chaque membre garde sa structure, son barreau, ses dossiers. Aucune prestation commune, aucun mandat partagé — un collectif, jamais un cabinet.",
  },
];

const EXPERTISES: Expertise[] = [
  {
    icon: Lock,
    code: "rgpd",
    title: "RGPD & données personnelles",
    description: "Conformité, audit, contentieux CNIL, transferts internationaux, DPO externalisé.",
    topics: ["CNIL", "DPIA", "DPA", "Transferts"],
  },
  {
    icon: Brain,
    code: "ai-act",
    title: "Intelligence artificielle",
    description: "Règlement IA Act européen, qualification des systèmes, gouvernance, responsabilité.",
    topics: ["IA Act", "Modèles", "Gouvernance"],
  },
  {
    icon: Shield,
    code: "cyber",
    title: "Cybersécurité",
    description: "NIS2, DORA, CRA — accompagnement de la mise en conformité et défense en cas d'incident.",
    topics: ["NIS2", "DORA", "CRA", "Incidents"],
  },
  {
    icon: Coins,
    code: "crypto",
    title: "Crypto-actifs & Web3",
    description: "MiCA, agrément PSAN, qualification des tokens, LCB-FT, contentieux d'escroquerie.",
    topics: ["MiCA", "PSAN", "LCB-FT", "DAO"],
  },
  {
    icon: Lightbulb,
    code: "ip",
    title: "Propriété intellectuelle",
    description: "Brevets logiciels, droit d'auteur, secret des affaires, contentieux PI dans le numérique.",
    topics: ["Brevets", "Droit d'auteur", "Marques"],
  },
  {
    icon: FileCode,
    code: "contract",
    title: "Contrats IT & contentieux numérique",
    description: "Rédaction, négociation et défense sur les contrats SaaS, cloud, intégration, sous-traitance.",
    topics: ["SaaS", "Cloud", "Intégration"],
  },
];

const STRUCTURE = [
  { role: "Présidence", desc: "Direction générale, représentation du collectif" },
  { role: "Vice-présidence", desc: "Coordination des activités, suppléance" },
  { role: "Secrétariat", desc: "Convocations, comptes-rendus, archives" },
  { role: "Trésorerie", desc: "Cotisations, comptes annuels, transparence" },
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* ════════════════════════════ HERO ════════════════════════════ */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-20 sm:pb-32">
        {/* Image filigrane Léman + Alpes — ancrage territorial Annecy/Annemasse/Léman */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Lac_d%27Annecy_vue_panoramique.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 50%", opacity: 0.95, filter: "saturate(0.9)" }}
          />
          {/* Voile très léger — image dominante, texte lisible via gradient bottom */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(250,248,243,0.15) 0%, rgba(250,248,243,0.45) 60%, rgba(250,248,243,0.92) 100%)",
            }}
          />
          {/* Backdrop spécifique sous le texte pour garantir la lisibilité */}
          <div
            className="absolute inset-x-0 bottom-0 h-1/2"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(250,248,243,0.7) 100%)",
            }}
          />
          {/* Halo bleu subtil en haut */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(37, 99, 235, 0.06) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Badge pill éditorial avec dot animé */}
          <div className="animate-fade-in-up mb-7 sm:mb-9">
            <span className="badge-pill">
              <span className="badge-dot" aria-hidden="true" />
              Association loi 1901 · Auvergne-Rhône-Alpes
            </span>
          </div>

          {/* H1 ENORME serif — laser-cut, fin, premium */}
          <h1
            className="animate-fade-in-up-delay-1 text-[clamp(3.5rem,11vw,8rem)] leading-[0.92] mb-6 sm:mb-8"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 300,
              fontVariationSettings: '"opsz" 36',
              letterSpacing: "-0.05em",
              color: "#0a1024",
            }}
          >
            Hors Codes.
          </h1>

          {/* Tagline — fin et précis */}
          <p
            className="animate-fade-in-up-delay-2 text-2xl sm:text-3xl lg:text-4xl mb-8 sm:mb-10 max-w-3xl"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 300,
              fontVariationSettings: '"opsz" 36',
              lineHeight: "1.2",
              letterSpacing: "-0.025em",
              color: "#131a2e",
            }}
          >
            Le droit, à la vitesse du code.
          </p>

          {/* Lead — solide, justifié */}
          <p
            className="animate-fade-in-up-delay-2 text-base sm:text-lg max-w-2xl mb-10 sm:mb-12 leading-relaxed prose-justify"
            style={{ color: "rgba(19, 26, 46, 0.78)" }}
          >
            Association d&apos;avocats indépendants spécialisés dans le droit du numérique,
            l&apos;intelligence artificielle, la cybersécurité, les données personnelles et les
            crypto-actifs. Sur l&apos;arc{" "}
            <span className="font-medium" style={{ color: "var(--primary)" }}>
              Annecy · Annemasse · Lyon · Grenoble
            </span>
            .
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-14 sm:mb-16">
            <Link
              href="/adhesion"
              className="btn-teal inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm sm:text-base"
            >
              Adhérer au collectif
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/manifeste"
              className="btn-ghost inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm sm:text-base"
            >
              Lire le manifeste
            </Link>
          </div>

          {/* Stats line — discrète, données factuelles non inventées */}
          <div className="animate-fade-in-up-delay-3 grid grid-cols-2 sm:grid-cols-4 gap-px max-w-4xl" style={{ backgroundColor: "var(--border)" }}>
            {[
              { value: "6", label: "Expertises" },
              { value: "4", label: "Grandes villes" },
              { value: "AURA", label: "Région" },
              { value: "Loi 1901", label: "Statut" },
            ].map((s, i) => (
              <div
                key={i}
                className="px-4 py-5 sm:px-5 sm:py-6"
                style={{ backgroundColor: "var(--background)" }}
              >
                <p
                  className="text-2xl sm:text-3xl mb-1.5"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                    color: "#0a1024",
                  }}
                >
                  {s.value}
                </p>
                <p
                  className="text-[10px] sm:text-[11px] font-mono uppercase"
                  style={{
                    letterSpacing: "0.14em",
                    color: "var(--muted)",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="separator-fine" />
      </div>

      {/* ════════════════════════════ PILIERS ════════════════════════════ */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-12 sm:mb-14">
            <p className="code-comment mb-3">section 01 / manifeste</p>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl mb-5 max-w-3xl"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 500,
                letterSpacing: "-0.025em",
                lineHeight: "1.05",
              }}
            >
              Quatre piliers, une{" "}
              <Emphasis>seule</Emphasis>{" "}
              ligne.
            </h2>
            <p
              className="text-base sm:text-lg max-w-2xl leading-relaxed prose-justify"
              style={{ color: "var(--muted-strong)" }}
            >
              Une association d&apos;avocats spécialisés qui mutualisent leur veille, se forment
              entre eux et portent des contenus à destination des acteurs économiques. Sans jamais
              sacrifier l&apos;indépendance professionnelle de chacun.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <article
                  key={i}
                  className="card-hover card-base p-7 sm:p-8 rounded-2xl"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: "var(--primary-soft)",
                        border: "1px solid rgba(37,99,235,0.18)",
                      }}
                    >
                      <Icon size={20} style={{ color: "var(--primary)" }} aria-hidden="true" />
                    </div>
                    <h3
                      className="text-xl sm:text-2xl"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 500,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {p.title}
                    </h3>
                  </div>
                  <p
                    className="text-sm sm:text-base leading-relaxed prose-justify"
                    style={{ color: "var(--muted-strong)" }}
                  >
                    {p.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════ EXPERTISES ════════════════════════════ */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24 relative"
        style={{ backgroundColor: "var(--background-alt)" }}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-12 sm:mb-14">
            <p className="code-comment mb-3">section 02 / expertises</p>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl mb-5 max-w-3xl"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 500,
                letterSpacing: "-0.025em",
                lineHeight: "1.05",
              }}
            >
              Le droit,{" "}
              <Emphasis>en code source</Emphasis>.
            </h2>
            <p
              className="text-base sm:text-lg max-w-2xl leading-relaxed prose-justify"
              style={{ color: "var(--muted-strong)" }}
            >
              Six expertises au croisement du juridique et de la technologie. Au moins un membre
              du collectif intervient activement sur chacune d&apos;elles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {EXPERTISES.map((e, i) => (
              <ExpertiseCard key={i} expertise={e} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════ STRUCTURE / Le bureau (sans noms) ════════════════════════════ */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-12 sm:mb-14 text-center">
            <p className="code-comment mb-3">section 03 / structure</p>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl mb-5"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 500,
                letterSpacing: "-0.025em",
                lineHeight: "1.05",
              }}
            >
              Un bureau,{" "}
              <Emphasis>quatre fonctions</Emphasis>.
            </h2>
            <p
              className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed prose-justify"
              style={{ color: "var(--muted-strong)" }}
            >
              Le bureau est composé d&apos;avocats indépendants exerçant en région
              Auvergne-Rhône-Alpes. Renouvellement par élection annuelle.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px max-w-4xl mx-auto" style={{ backgroundColor: "var(--border)" }}>
            {STRUCTURE.map((s, i) => (
              <div
                key={i}
                className="card-base p-6 sm:p-8 text-center"
              >
                <p className="font-mono text-[10px] mb-3" style={{ color: "var(--code-comment)", letterSpacing: "0.14em" }}>
                  0{i + 1}
                </p>
                <h3
                  className="text-base sm:text-lg mb-2"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
                >
                  {s.role}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Profil membre */}
          <div className="mt-14 max-w-3xl mx-auto">
            <div
              className="rounded-2xl p-7 sm:p-9 text-center"
              style={{
                background:
                  "linear-gradient(135deg, var(--primary-soft), rgba(37,99,235,0.02))",
                border: "1px solid rgba(37,99,235,0.2)",
              }}
            >
              <p className="kicker-mono mb-4">Profil-type d&apos;un membre</p>
              <h3
                className="text-2xl sm:text-3xl mb-5"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 500, letterSpacing: "-0.015em" }}
              >
                Avocat·e indépendant·e exerçant sur l&apos;arc{" "}
                <Emphasis>AURA</Emphasis>.
              </h3>
              <div className="grid sm:grid-cols-3 gap-5 mt-7 text-left">
                <div>
                  <Building2 size={16} className="text-teal mb-2" aria-hidden="true" />
                  <p className="text-sm font-medium mb-1">Indépendance</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                    Cabinet propre, barreau au choix
                  </p>
                </div>
                <div>
                  <MapPin size={16} className="text-teal mb-2" aria-hidden="true" />
                  <p className="text-sm font-medium mb-1">Géographie</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                    Annecy, Annemasse, Lyon, Grenoble, Thonon, Chambéry
                  </p>
                </div>
                <div>
                  <Users size={16} className="text-teal mb-2" aria-hidden="true" />
                  <p className="text-sm font-medium mb-1">Engagement</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                    Veille partagée, présence aux meetups
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════ ÉVÉNEMENTS (placeholder) ════════════════════════════ */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24 relative"
        style={{ backgroundColor: "var(--background-alt)" }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-10">
            <p className="code-comment mb-3">section 04 / événements</p>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl mb-5"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 500,
                letterSpacing: "-0.025em",
                lineHeight: "1.05",
              }}
            >
              Bientôt en{" "}
              <Emphasis>scène</Emphasis>.
            </h2>
            <p
              className="text-base sm:text-lg max-w-2xl leading-relaxed prose-justify"
              style={{ color: "var(--muted-strong)" }}
            >
              Format inspiré du meetup juridique : 30 minutes de présentation par un membre du
              collectif sur un sujet d&apos;actualité, suivies d&apos;un échange. Bi-mensuel,
              distanciel, gratuit pour les acteurs économiques de la région.
            </p>
          </div>

          <article
            className="rounded-2xl p-7 sm:p-9"
            style={{
              backgroundColor: "var(--card)",
              border: "1px solid rgba(37,99,235,0.25)",
              boxShadow: "0 8px 30px -10px rgba(37,99,235,0.12)",
            }}
          >
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <span
                className="font-mono text-xs px-2.5 py-1 rounded-full"
                style={{
                  backgroundColor: "var(--primary-soft)",
                  color: "var(--primary)",
                  border: "1px solid rgba(37,99,235,0.3)",
                  letterSpacing: "0.12em",
                }}
              >
                À VENIR
              </span>
              <span className="font-mono text-xs" style={{ color: "var(--muted)" }}>
                Date à confirmer · Distanciel
              </span>
            </div>
            <h3
              className="text-2xl sm:text-3xl mb-3"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 500,
                letterSpacing: "-0.015em",
              }}
            >
              Premier meetup Hors Codes
            </h3>
            <p className="text-sm sm:text-base leading-relaxed prose-justify" style={{ color: "var(--muted-strong)" }}>
              Lancement officiel du collectif. Présentation des activités, premiers retours de
              veille (NIS2, IA Act, MiCA), tour de table des sujets d&apos;intérêt pour les
              prochains rendez-vous.
            </p>
          </article>
        </div>
      </section>

      {/* ════════════════════════════ CTA FINAL ════════════════════════════ */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="code-comment mb-6">end of file / join us</p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 500,
              letterSpacing: "-0.025em",
              lineHeight: "1.05",
            }}
          >
            Le droit du numérique se construit{" "}
            <Emphasis>maintenant</Emphasis>.
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ color: "var(--muted-strong)" }}
          >
            Vous êtes avocat·e ou juriste d&apos;entreprise sur la région
            Auvergne-Rhône-Alpes, et vous travaillez sur ces sujets ? Le collectif est ouvert.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/adhesion"
              className="btn-teal inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm sm:text-base"
            >
              Demander à adhérer
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="btn-ghost inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm sm:text-base"
            >
              Poser une question
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
