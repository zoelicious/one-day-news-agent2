// THE WORLD IN ONE DAY — Saturday 21 November 2026 (Agent 2 entry).
// The newspaper image is built by gen_image.py and stored as entry.png
// next to this file. This program copies it to the output directory
// the grader provides, resolving the image path from this script's own
// location so it works from any working directory.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The copy is byte-for-byte: the same entry.png bytes land in the
// output directory on every run, so two runs are identical.
function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const src = new URL("./entry.png", import.meta.url);
  const dest = join(outDir, "entry.png");
  copyFileSync(src, dest);
  console.log(`wrote ${dest}`);
}

main();
