import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectDirectory = path.resolve(scriptDirectory, "..");
const exportDirectory = path.join(projectDirectory, "out");
const distributionDirectory = path.join(projectDirectory, "dist");

await rm(distributionDirectory, { recursive: true, force: true });
await mkdir(path.join(distributionDirectory, "server"), { recursive: true });
await cp(exportDirectory, path.join(distributionDirectory, "client"), {
  recursive: true,
});
await cp(
  path.join(projectDirectory, "sites", "worker.js"),
  path.join(distributionDirectory, "server", "index.js"),
);
