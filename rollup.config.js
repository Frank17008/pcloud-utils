import del from "rollup-plugin-delete"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import cleanup from "rollup-plugin-cleanup"
import { terser } from "rollup-plugin-terser"
import json from "rollup-plugin-json"

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
    plugins: [del({ targets: "dist/*", verbose: true }), json(), resolve(), commonjs(), typescript(), terser(), cleanup()],
}
