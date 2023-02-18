
import {nodeResolve} from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import {babel} from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';
import dts from "rollup-plugin-dts";

export default [
    {
        input: ['./src/index.ts'],
        output: {
            file: 'build/bundle.js',
            format: 'es',
            sourcemap: true,
        },

        context: 'null',
        moduleContext: 'null',

        plugins: [
            del({
                targets: ['build']
            }),
            nodeResolve({
                jsnext: true,
                main: true,
                browser: true,
            }),
            commonjs({
                include: ["node_modules/**"],
            }),
            babel({
                babelHelpers: 'runtime',
                plugins: ["@babel/plugin-transform-runtime"],
                exclude: 'node_modules/**',
            }),
            terser(),
            typescript({
                declaration: false,
                outDir: 'build/types',
                tsconfig: 'tsconfig.json',

            })
        ],

        external: [
            {
                includeDependencies: true,
            },
        ],

    },
    {
        input: './src/index.ts',
        output: [
            {
                file: 'build/bundle.d.ts',
                format: 'es'
            }
        ],
        plugins: [
            dts(),
        ],
    },
]