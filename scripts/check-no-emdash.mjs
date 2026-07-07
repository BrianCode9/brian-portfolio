// Fails if an em dash shows up anywhere in source, data, or docs.
// Use a plain hyphen (-) instead, everywhere in this repo.
import { readdirSync, statSync, readFileSync } from "fs";
import { join, extname, relative } from "path";

const ROOT = process.cwd();
const SCAN_DIRS = ["src", "scripts"].map((d) => join(ROOT, d));
const SCAN_FILES = ["README.md"].map((f) => join(ROOT, f));
const EXTENSIONS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".md",
  ".css",
]);
const SELF_FILE = "check-no-emdash.mjs";
const EM_DASH = "—";

function walk(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      results.push(...walk(fullPath));
    } else if (EXTENSIONS.has(extname(entry))) {
      results.push(fullPath);
    }
  }
  return results;
}

const files = [...SCAN_DIRS.flatMap(walk), ...SCAN_FILES].filter(
  (f) => !f.endsWith(SELF_FILE)
);
let violations = 0;

for (const file of files) {
  const lines = readFileSync(file, "utf8").split("\n");
  lines.forEach((line, i) => {
    if (line.includes(EM_DASH)) {
      console.log(`  ${relative(ROOT, file)}:${i + 1}  ${line.trim()}`);
      violations++;
    }
  });
}

if (violations > 0) {
  console.log(
    `\n${violations} em dash(es) found. Replace with a plain hyphen (-).`
  );
  process.exitCode = 1;
} else {
  console.log("No em dashes found.");
}
