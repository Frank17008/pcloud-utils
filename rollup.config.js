import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import json from "@rollup/plugin-json";
import del from "rollup-plugin-delete";
import cleanup from "rollup-plugin-cleanup";

export default {
  input: "./src/index.ts",
  output: [
    {
      name: "PUtils",
      file: "dist/index.umd.js",
      format: "umd",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
    },
  ],
  plugins: [
    del({ targets: "dist/*", verbose: true }),
    json(),
    resolve(),
    commonjs(),
    typescript(),
    terser(),
    cleanup(),
  ],
};
