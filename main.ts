import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

const punchline = "He automates complex cloud infrastructure with AI, then spends half an hour choosing between two identical dark themes.";
writeFileSync(join(outputDir, 'entry.txt'), punchline);
