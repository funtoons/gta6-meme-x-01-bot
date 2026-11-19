// Entry program for the gta6-meme-x-01 bounty (Node 22, standard library only).
// The entry itself is a post on X; this program just hands in the post's
// address by copying POST.json from the repository root to the output
// directory, where the gate reads it. It prints nothing on success, so the
// two runs the grader performs write exactly the same bytes.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, "POST.json"), join(outputDir, "POST.json"));
} catch (error) {
  console.error(`Could not copy POST.json from ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
