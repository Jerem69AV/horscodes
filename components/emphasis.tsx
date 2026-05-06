import type { ReactNode } from "react";

/**
 * Emphasis — mot-clé italique avec trait bleu fin en dessous.
 * Style éditorial magazine premium, sans cassure de couleur.
 */
export function Emphasis({ children }: { children: ReactNode }) {
  return (
    <span
      className="relative inline-block"
      style={{ fontStyle: "italic", fontWeight: 300 }}
    >
      {children}
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
  );
}
