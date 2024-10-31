const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const {dts} = require('rollup-plugin-dts');
const postcss = require('rollup-plugin-postcss');
const terser = require('@rollup/plugin-terser');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const image = require('@rollup/plugin-image');
const babel = require('@rollup/plugin-babel');

const packageJson = require('./package.json');

const production = !process.env.ROLLUP_WATCH; // Detect production mode

module.exports = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: false,
      },
      {
        file: packageJson.module,
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
        declarationDir: undefined,
        outDir: './dist',
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Ensure this includes .tsx
        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
        plugins: ['@emotion/babel-plugin'],
      }),
      postcss(),
      production && terser(),
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
    input: 'dist/index.d.ts',
    output: [{file: 'dist/index.d.ts', format: 'esm'}],
    plugins: [dts()],
    external: [/\.css$/],
    onwarn: function (warning, warn) {
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.message.indexOf('use client') !== -1) {
        return;
      }
      warn(warning);
    },
  },
];
