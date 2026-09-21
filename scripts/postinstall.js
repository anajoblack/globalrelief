const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

console.log("=== Running Cloudflare OpenNext setup & build hook ===");

// 1. Patch deploy.js to auto-build if compiled config is missing
try {
  const deployFilePath = path.join(
    __dirname,
    "../node_modules/@opennextjs/cloudflare/dist/cli/commands/deploy.js"
  );
  if (fs.existsSync(deployFilePath)) {
    let content = fs.readFileSync(deployFilePath, "utf8");
    if (!content.includes("await buildCommand(args)")) {
      // Add buildCommand import
      content = 'import { buildCommand } from "./build.js";\nimport { existsSync } from "node:fs";\n' + content;
      // Add auto-build check inside deployCommand
      content = content.replace(
        'printHeaders("deploy");',
        'printHeaders("deploy");\n    if (!existsSync(".open-next/.build/open-next.config.edge.mjs")) {\n        logger.info("⚡ Auto-building OpenNext before deployment...\\n");\n        await buildCommand(args);\n    }'
      );
      fs.writeFileSync(deployFilePath, content, "utf8");
      console.log("✓ Successfully patched opennextjs-cloudflare deploy command to auto-build if missing.");
    }
  }
} catch (err) {
  console.warn("Warning: Could not patch deploy.js:", err.message);
}

// 2. Run opennextjs-cloudflare build so all build artifacts are ready
try {
  console.log("Building OpenNext Cloudflare worker...");
  execSync("npx opennextjs-cloudflare build", { stdio: "inherit" });
  console.log("✓ OpenNext build completed successfully.");
} catch (err) {
  console.error("Error during opennextjs-cloudflare build:", err.message);
  process.exit(1);
}
