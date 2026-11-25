// The Funniest Office Joke, Judged Head to Head
// make.fun bounty: u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c
// Writes one office joke, a single line, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I asked my boss for a raise, and he gave me a standing desk — technically, I am now standing up for myself.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Refuse to write an invalid entry.
const text = JOKE.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`joke is ${text.length} characters, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
