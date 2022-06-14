import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import del from "rollup-plugin-delete";
import visualizer from "rollup-plugin-visualizer";

import packageJson from "./package.json";

const plugins = [
  del({ targets: ["dist/*"] }),
  resolve({ browser: true }),
  commonjs(),
  json(),
  typescript(),
  terser(),
  visualizer({ sourcemap: true, gzipSize: true }),
];

export default {
  input: "src/index.ts",
  plugins,
  external: ["react", "react-dom", "@chakra-ui"],
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
};
