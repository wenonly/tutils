import json from "rollup-plugin-json";
import typescript from "rollup-plugin-typescript2";
import sourceMaps from "rollup-plugin-sourcemaps";

const libraryName = '@iwowen/utils'

export default {
  input: "modules/index.ts",
  output: [
    { format: "es", file: 'lib/main.esm.js' },
    { format: "umd", file: 'lib/main.umd.js', name: libraryName },
  ],
  plugins: [
    json(),
    typescript({
      exclude: "node_modules/**",
      typescript: require("typescript"),
      useTsconfigDeclarationDir: true
    }),
    sourceMaps(),
  ],
};
