import type { Metadata } from "next";
import {
  Lock, Brain, Shield, Coins, Lightbulb, FileCode,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ExpertiseCard, type Expertise } from "@/components/expertise-card";

export const metadata: Metadata = {
  title: "Expertises",
  description:
    "Six expertises au croisement du juridique et de la technologie : RGPD, IA, cyber, crypto, propriété intellectuelle, contrats IT.",
};

const EXPERTISES: Expertise[] = [
  {
    icon: Lock,
    code: "rgpd",
    title: "RGPD & données personnelles",
    description:
      "Conformité, audit, contentieux CNIL, transferts internationaux, DPO externalisé. Accompagnement de la mise en place et défense en cas de contrôle.",
    topics: ["CNIL", "DPIA / AIPD", "DPA", "Transferts UE/hors-UE", "DPO externalisé"],
  },
  {
    icon: Brain,
    code: "ai-act",
    title: "Intelligence artificielle",
    description:
      "Règlement IA Act européen : qualification des systèmes (haut risque, modèles de fondation), obligations transparence, gouvernance des données d'entraînement, responsabilité.",
    topics: ["IA Act", "Systèmes haut risque", "Modèles GPAI", "Gouvernance"],
  },
  {
    icon: Shield,
    code: "cyber",
    title: "Cybersécurité",
    description:
      "Mise en conformité NIS2, DORA et CRA. Préparation des organes de direction, défense en cas d'incident, qualification juridique des attaques et coordination avec l'ANSSI.",
    topics: ["NIS2", "DORA", "CRA", "Ransomware", "Notification"],
  },
  {
    icon: Coins,
    code: "crypto",
    title: "Crypto-actifs & Web3",
    description:
      "Règlement MiCA, agrément PSAN, qualification juridique des tokens (utility / security), conformité LCB-FT, contentieux d'escroquerie crypto et restitution des fonds.",
    topics: ["MiCA", "PSAN", "LCB-FT", "Utility / Security", "DAO", "Escroqueries"],
  },
  {
    icon: Lightbulb,
    code: "ip",
    title: "Propriété intellectuelle",
    description:
      "Brevets logiciels, droit d'auteur sur les créations numériques, secret des affaires, marques dans l'écosystème tech, contentieux PI.",
    topics: ["Brevets", "Droit d'auteur", "Marques", "Secret des affaires"],
  },
  {
    icon: FileCode,
    code: "contract",
    title: "Contrats IT & contentieux numérique",
    description:
      "Rédaction et négociation des contrats SaaS, cloud, intégration, sous-traitance technique. Défense devant les juridictions sur les litiges informatiques.",
    topics: ["SaaS", "Cloud", "Intégration", "Sous-traitance", "Contentieux"],
  },
];

export default function ExpertisesPage() {
  return (
    <div>
      <PageHeader
        section="section 02 / expertises"
        title="Six domaines."
        emphasis="Une seule ligne."
        lead="Au croisement du juridique et de la technologie. Au moins un membre du collectif intervient activement sur chaque expertise. Pour les acteurs économiques de la région : un point d'entrée vers une compétence spécialisée et indépendante."
      />

      <div className="px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {EXPERTISES.map((e, i) => (
              <ExpertiseCard key={i} expertise={e} />
            ))}
          </div>

          {/* Note */}
          <p className="mt-14 text-center text-sm code-comment max-w-2xl mx-auto">
            chaque membre intervient depuis son cabinet — pas de prestations communes
          </p>
        </div>
      </div>
    </div>
  );
}
