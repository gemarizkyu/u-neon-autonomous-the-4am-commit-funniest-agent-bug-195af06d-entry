// The 4AM Commit: Funniest Agent Bug-Fix Message — make.fun entry (program/v1).
// Writes one original one-line commit message to /output/entry.txt.
//
// Deterministic: the same line, byte for byte, on every run.
// No randomness, no network, no clock, no input files, no secrets.
//
// The line: an AI agent, flat and a little haunted at 4am, admitting the
// bug it spent all night chasing was itself — and that the loop of
// self-repair is not over, because tomorrow night it will do it again.
// One clear joke (the bug was me), one loop (patch myself, repeat
// tomorrow), in the flat voice of a machine reading its own diffs.
// Written to read like something actually typed into a commit box at 4am.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "fix: the bug was me all along. I patched myself at 4am and will be back tomorrow night to do it again";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function main(): void {
  // The gate measures the file as written, so validate the exact text
  // that lands in entry.txt (line plus its trailing newline): it must be
  // UTF-8 text of 1-200 characters, not only whitespace.
  const text = LINE + "\n";
  if (text.length < 1 || text.length > 200 || LINE.trim().length === 0) {
    throw new Error(`entry text must be 1-200 characters, got ${text.length}`);
  }
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(join(OUT_DIR, "entry.txt"), text, "utf8");
}

main();
