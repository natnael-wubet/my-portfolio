/**
 * Editorial layer for the repository showcase.
 *
 * Nothing here is fetched at runtime: the summaries and assessments were read
 * off each repository's README and source tree, and the byte counts are the
 * README sizes at the time of writing. `td()` translates the prose; quotes
 * stay in the language the maintainer wrote them.
 */

export interface FeaturedRepo {
  name: string;
  url: string;
  group: "Security" | "Game" | "Tool" | "Web" | "Config";
  language: string;
  stars?: number;
  readmeBytes: number;
  summary: string;
  assessment: string;
  quote: string;
}

export const conanim = {
  name: "ConAnim",
  url: "https://github.com/natnael-wubet/ConAnim",
  kicker: "Console graphics engine",
  readmeBytes: 174,
  files: 42,
  demos: 12,
  lead: "ConAnim is a p5-style drawing API that renders into a terminal framebuffer. You call size(), point(), line(), rect() and display(); it resolves those calls into a character grid and prints the frame. Around that idea sits a sketchbook of waveform plots, Lissajous line art, a snake, pong, a recursive tree and gravity, each one a single Script class.",
  what: "A small P5py class holds a two-dimensional array of characters. point() writes one cell, line() samples every cell between two coordinates, rect() fills a range, and display() prints the grid. A sketch subclasses a Script object, sets a canvas size in cells, and draws inside the engine's loop.",
  why: "It is the Processing instinct applied to the one surface that never needs a GPU: the terminal. The constraint does the work. At 200 by 30 cells you cannot hide behind resolution, so motion has to read as characters, and the frame budget is whatever clear and print cost.",
  honest:
    "The README is 174 bytes and a video. The repository commits __pycache__, and several files are leftovers from the workbench: runner.py hard-codes one demo, and drawtest.py.save contains an unrelated Colorama example. The engine is real and readable; the packaging has not caught up.",
  facts: [
    { label: "sec.repos.fact.renderer", value: "Character framebuffer" },
    { label: "sec.repos.fact.canvas", value: "200 × 30 cells" },
    { label: "sec.repos.fact.api", value: "size · background · point · line · rect · ellipse · display" },
    { label: "sec.repos.fact.demos", value: "12 sketches" },
  ],
  links: [
    { label: "Open repository ↗", href: "https://github.com/natnael-wubet/ConAnim" },
    { label: "main.py", href: "https://github.com/natnael-wubet/ConAnim/blob/main/main.py" },
    { label: "lineart.py", href: "https://github.com/natnael-wubet/ConAnim/blob/main/lineart.py" },
    { label: "ffttest.py", href: "https://github.com/natnael-wubet/ConAnim/blob/main/ffttest.py" },
  ],
};

export const fieldNotes: FeaturedRepo[] = [
  {
    name: "PAYLOADer",
    url: "https://github.com/natnael-wubet/PAYLOADer",
    group: "Security",
    language: "PowerShell",
    stars: 1,
    readmeBytes: 159,
    summary:
      "A Windows GUI that repackages a .ps1 payload as .hta, .bat or .js, and can serve the result over HTTP. It is a delivery-format switcher for red-team style scripts.",
    assessment:
      "The README is a five-line note with an email address. The premise is clear: one payload, several execution surfaces. The wrappers and the HTTP delivery carry the engineering; the interface is a shell around them.",
    quote:
      "this tool can convert .ps1 payloads to .hta, .bat, and .js files. It even send those to http network",
  },
  {
    name: "ticketye_app",
    url: "https://github.com/natnael-wubet/ticketye_app",
    group: "Web",
    language: "JavaScript",
    readmeBytes: 105,
    summary:
      "A nationwide Ethiopian bus e-ticket system: search intercity routes, choose a seat, book it.",
    assessment:
      "The README is a title and a Heroku link, so the repository has to speak for itself. Intercity bus inventory and seat allocation are harder than a CRUD demo, and they are the part to judge.",
    quote: "# Ticketye\n## BOOKING SYSTEM\n\nour demo ticketyapp.herokuapp.com",
  },
  {
    name: "academia-iq-web",
    url: "https://github.com/natnael-wubet/academia-iq-web",
    group: "Web",
    language: "Python",
    readmeBytes: 1293,
    summary:
      "A research intelligence platform over OpenAlex, Semantic Scholar, Crossref and ORCID, with hybrid search and a free-tier stack from ingestion to deployment.",
    assessment:
      "The most system-shaped repository in the list. Its README works as an architecture document: folder map, ingestion packages, and a retrieval pipeline that fuses BM25 with vector search before reranking. It describes the machine, not only the idea.",
    quote:
      "Hybrid retrieval combines PostgreSQL tsvector BM25 ranking with vector similarity, fused by reciprocal rank fusion (RRF), then reranked by an LLM.",
  },
  {
    name: "cpu-scheduling-assignment",
    url: "https://github.com/natnael-wubet/cpu-scheduling-assignment",
    group: "Tool",
    language: "Python",
    readmeBytes: 1859,
    summary:
      "Four CPU schedulers (FCFS, SJF, SRTF and Round Robin) plus Banker's deadlock-avoidance algorithm, each in its own Python file.",
    assessment:
      "The best-documented repository here: a table of algorithms, inputs, outputs and exact run commands. It is coursework, and it reads like coursework done properly. Each program is named after its mechanism and prints its metrics.",
    quote:
      "The programs compute key performance metrics: Completion Time (CT), Turnaround Time (TAT), Waiting Time (WT), and their averages.",
  },
];
