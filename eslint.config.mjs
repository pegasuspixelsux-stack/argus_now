import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Harness-managed git worktrees (e.g. .claude/worktrees/*) can contain
    // their own nested .next/** build output, which the pattern above
    // doesn't reach since it's anchored to this config's directory.
    ".claude/**",
  ]),
]);

export default eslintConfig;
