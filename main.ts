// laugh-480-vs-12000 — Make the AI Judge Laugh
// Writes one office-life joke (130 chars, no trailing newline) to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LEAD =
  "Finance rejected my $4.80 coffee receipt for missing a VAT number, then approved $12,000 for a two-day offsite about saving money.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LEAD, "utf8");
