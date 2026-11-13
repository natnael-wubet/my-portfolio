/**
 * Project marks.
 *
 * A card has to be recognisable before it is opened, so every deployment
 * carries a mark: a real favicon or brand asset where the live site has one,
 * and a hand-drawn glyph or wordmark where it does not. Glyphs are inline SVG
 * so they inherit the card accent and stay crisp in both themes.
 */

export type LogoGlyph =
  | "flow"
  | "target"
  | "book"
  | "network"
  | "abyss"
  | "shield"
  | "translate"
  | "layers"
  | "ticket"
  | "rim";

export type LogoSpec =
  | { kind: "image"; src: string; fit?: "square" | "wide" | "tall" }
  | { kind: "wordmark"; head: string; tail: string }
  | { kind: "glyph"; glyph: LogoGlyph; label?: string; color?: string };

export const logos: Record<string, LogoSpec> = {
  bigxo: { kind: "image", src: "/logos/bigxo.png" },
  "bigxo-mini": { kind: "image", src: "/logos/bigxo-mini.png" },
  gameo: { kind: "image", src: "/logos/gameo.svg" },
  "cite-chain": { kind: "wordmark", head: "Cite", tail: "Chain" },
  ticketye: { kind: "glyph", glyph: "ticket" },
  "rim-addis": { kind: "glyph", glyph: "rim", color: "#3ec46d" },
  "day-flow": { kind: "glyph", glyph: "flow" },
  "scribble-diffusion": { kind: "image", src: "/logos/scribble-diffusion.svg" },
  "objective-log": { kind: "glyph", glyph: "target" },
  bookreader: { kind: "glyph", glyph: "book" },
  eliteconnect: { kind: "glyph", glyph: "network" },
  "abyss-studio": { kind: "glyph", glyph: "abyss" },
  "niala-insurance": { kind: "glyph", glyph: "shield" },
  "event-calendar": { kind: "image", src: "/logos/event-calendar.webp", fit: "tall" },
  "abyss-translator": { kind: "glyph", glyph: "translate" },
  podcast: { kind: "image", src: "/logos/podcast.png" },
  nexus: { kind: "image", src: "/logos/nexus.png" },
  "portfolio-v1": { kind: "glyph", glyph: "layers" },
};
