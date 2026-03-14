import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { ivi } from "@ivi/rollup-plugin";
import { oveo } from "@oveo/rollup";
import { minify, defineRollupSwcMinifyOption } from 'rollup-plugin-swc3'

export default [
  {
    input: `./src/main.ts`,
    output: {
      file: "./dist/bundle.min.js",
      format: "es",
      strict: true,
      sourcemap: true,
    },
    watch: {
      clearScreen: false,
    },
    plugins: [
      nodeResolve(),
      typescript(),
      ivi({
        oveo: true,
      }),
      oveo({
        hoist: true,
        dedupe: true,
        // externs: {
        //   import: ["ivi/oveo.json"],
        // },
      }),
      minify(
        defineRollupSwcMinifyOption({
          compress: {
            inline: 0,
            keep_infinity: true,
          },
          toplevel: true,
          module: true,
          sourceMap: true,
        })
      ),
    ],
  },
];