/**
 * Header éditorial réutilisé pour toutes les pages internes.
 * Pattern: kicker + H1 serif laser uniforme + accent fin sous mot-clé + lead.
 */
export function PageHeader({
  section,
  title,
  emphasis,
  lead,
}: {
  section: string;
  title: string;
  emphasis?: string;
  lead?: string;
}) {
  return (
    <header className="px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-10 sm:pb-14">
      <div className="max-w-5xl mx-auto">
        <p className="code-comment mb-5">{section}</p>

        {/* H1 laser-cut, tout en navy, italic même couleur — rythme typographique unifié */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl mb-6 max-w-4xl"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 300,
            fontVariationSettings: '"opsz" 36',
            letterSpacing: "-0.04em",
            lineHeight: "1.02",
            color: "#0a1024",
          }}
        >
          {title}{" "}
          {emphasis && (
            <span
              className="relative inline-block"
              style={{ fontStyle: "italic", fontWeight: 300 }}
            >
              {emphasis}
              {/* Trait bleu fin sous le mot-clé — accent éditorial subtle */}
              <span
                aria-hidden="true"
                className="absolute left-0 right-0"
                style={{
                  bottom: "0.06em",
                  height: "0.06em",
                  background: "var(--primary)",
                  opacity: 0.9,
                }}
              />
            </span>
          )}
        </h1>

        {lead && (
          <p
            className="text-base sm:text-lg max-w-2xl leading-relaxed prose-justify"
            style={{ color: "var(--muted-strong)" }}
          >
            {lead}
          </p>
        )}
      </div>
    </header>
  );
}
