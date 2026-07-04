// Scans src/ for local asset references (/images/..., /documents/..., /fonts/...)
// and checks each one actually exists under public/. Also flags files under
// public/images that no source file references (dead weight).
import { readdirSync, statSync, readFileSync, existsSync } from "fs";
import { join, extname, relative } from "path";

const ROOT = process.cwd();
const SRC_DIR = join(ROOT, "src");
const PUBLIC_DIR = join(ROOT, "public");

const CODE_EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx", ".css"]);
const REFERENCE_PATTERN =
  /["'`](\/(?:images|documents|fonts)\/[^"'`)\s]+)["'`]/g;

function walk(dir, extensions) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      results.push(...walk(fullPath, extensions));
    } else if (!extensions || extensions.has(extname(entry))) {
      results.push(fullPath);
    }
  }
  return results;
}

const sourceFiles = walk(SRC_DIR, CODE_EXTENSIONS);
const referenced = new Map(); // public-relative path -> source file that referenced it

for (const file of sourceFiles) {
  const content = readFileSync(file, "utf8");
  for (const match of content.matchAll(REFERENCE_PATTERN)) {
    referenced.set(match[1], relative(ROOT, file));
  }
}

let brokenCount = 0;
console.log("Checking referenced assets exist...");
for (const [assetPath, sourceFile] of referenced) {
  const diskPath = join(PUBLIC_DIR, assetPath);
  if (!existsSync(diskPath)) {
    console.log(`  BROKEN  ${assetPath}  (referenced in ${sourceFile})`);
    brokenCount++;
  }
}
if (brokenCount === 0) {
  console.log("  all referenced assets exist.");
}

const publicImageFiles = walk(join(PUBLIC_DIR, "images")).map(
  (f) => "/" + relative(PUBLIC_DIR, f).split("\\").join("/")
);
const orphaned = publicImageFiles.filter((f) => !referenced.has(f));

console.log("\nUnreferenced files under public/images...");
if (orphaned.length === 0) {
  console.log("  none.");
} else {
  for (const f of orphaned) {
    console.log(`  ORPHAN  ${f}`);
  }
}

if (brokenCount > 0) {
  process.exitCode = 1;
}
