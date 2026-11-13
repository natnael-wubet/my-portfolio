/**
 * A tiny build-time echo of ConAnim's P5py framebuffer.
 *
 * The real engine (src: github.com/natnael-wubet/ConAnim) holds a 2-D array
 * of characters, samples `line()` into cells, and prints the grid. These
 * frames use the same idea, an oscilloscope-style readout of three phases
 * and their sum, so the portfolio can show an honest artefact instead of a
 * screenshot. Frames are generated once at build time and cycled in CSS.
 */

const BANDS = [
  { id: "A", char: ".", base: 0.16, phase: 2.4, div: 6, fn: Math.sin },
  { id: "B", char: ":", base: 0.38, phase: 1.1, div: 7, fn: Math.cos },
  { id: "C", char: "+", base: 0.6, phase: 3.6, div: 5, fn: Math.sin },
] as const;

const clampCell = (value: number, limit: number) => Math.max(0, Math.min(limit, Math.round(value)));

export function conanimFrame(tick: number, cols = 68, rows = 20): string {
  const grid = Array.from({ length: rows }, () => Array<string>(cols).fill(" "));
  const gutter = 5;
  const amp = rows * 0.085;

  const wave = (band: (typeof BANDS)[number], x: number) =>
    band.fn((x + tick * band.phase) / band.div);

  // Baselines first: a dotted rail per channel, then the trace on top.
  for (const band of BANDS) {
    const y = clampCell(band.base * rows, rows - 1);
    for (let x = gutter; x < cols; x++) grid[y][x] = "·";
  }
  {
    const y = clampCell(0.84 * rows, rows - 1);
    for (let x = gutter; x < cols; x++) grid[y][x] = "·";
  }

  for (const band of BANDS) {
    for (let x = gutter; x < cols; x++) {
      const y = clampCell(band.base * rows - wave(band, x) * amp, rows - 1);
      grid[y][x] = band.char;
    }
  }

  for (let x = gutter; x < cols; x++) {
    const sum =
      (wave(BANDS[0], x) + wave(BANDS[1], x) + wave(BANDS[2], x)) / 2;
    const y = clampCell(0.84 * rows - sum * amp, rows - 1);
    grid[y][x] = "#";
  }

  for (const band of BANDS) {
    grid[clampCell(band.base * rows, rows - 1)][1] = band.id;
  }
  grid[clampCell(0.84 * rows, rows - 1)][1] = "Σ";

  return grid
    .map((line) => line.join("").replace(/\s+$/, ""))
    .join("\n")
    .replace(/^\n+/, "")
    .replace(/\n+$/, "");
}

export function conanimFrames(count = 6): string[] {
  return Array.from({ length: count }, (_, i) => conanimFrame(i * 2));
}
