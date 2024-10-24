const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const {dts} = require('rollup-plugin-dts');
const postcss = require('rollup-plugin-postcss');
const terser = require('@rollup/plugin-terser');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const image = require('@rollup/plugin-image');

const packageJson = require('./package.json');

const production = !process.env.ROLLUP_WATCH; // Detect production mode

module.exports = [
  {
    input: 'src/index.ts', // Entry point for your source code
    output: [
      {
        file: packageJson.main, // Output for CommonJS
        format: 'cjs',
        sourcemap: false,
      },
      {
        file: packageJson.module, // Output for ESModules
        format: 'esm',
        sourcemap: false,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: undefined, // Let TypeScript handle declarations normally
        outDir: './dist', // Ensure output goes to dist
      }),
      postcss(),
      production && terser(), // Minify only in production
      image(),
    ],
    onwarn: function (warning, warn) {
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.message.indexOf('use client') !== -1) {
        return;
      }
      warn(warning);
    },
  },
  {
    input: 'dist/index.d.ts', // Input for .d.ts file bundle
    output: [{file: 'dist/index.d.ts', format: 'esm'}],
    plugins: [dts()],
    external: [/\.css$/], // Ignore CSS files in .d.ts generation
    onwarn: function (warning, warn) {
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.message.indexOf('use client') !== -1) {
        return;
      }
      warn(warning);
    },
  },
];
