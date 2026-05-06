import type { LucideIcon } from "lucide-react";

export interface Expertise {
  icon: LucideIcon;
  code: string;
  title: string;
  description: string;
  topics?: string[];
}

export function ExpertiseCard({ expertise }: { expertise: Expertise }) {
  const Icon = expertise.icon;
  return (
    <article
      className="card-hover card-base group relative p-6 sm:p-7 rounded-xl"
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
        <div className="flex-1 min-w-0">
          <p
            className="font-mono text-[10px] mb-1.5"
            style={{ color: "var(--code-comment)", letterSpacing: "0.1em" }}
          >
            [{expertise.code}]
          </p>
          <h3
            className="text-lg sm:text-xl leading-tight"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 500,
              letterSpacing: "-0.005em",
            }}
          >
            {expertise.title}
          </h3>
        </div>
      </div>

      <p
        className="text-sm leading-relaxed mb-4"
        style={{ color: "var(--muted-strong)" }}
      >
        {expertise.description}
      </p>

      {expertise.topics && expertise.topics.length > 0 && (
        <ul className="flex flex-wrap gap-1.5 list-none">
          {expertise.topics.map((t) => (
            <li
              key={t}
              className="text-[11px] font-mono px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: "var(--background-alt)",
                color: "var(--muted-strong)",
                border: "1px solid var(--border)",
                letterSpacing: "0.04em",
              }}
            >
              {t}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
