
import {nodeResolve} from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import {babel} from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';
// import dts from "rollup-plugin-dts";

export default [
    {
        input: ['./src/index.ts'],  // 入口文件
        output: {
            file: 'npm/build/index.js', // 输出文件
            format: 'es',
            sourcemap: false,
        },

        context: 'null',
        moduleContext: 'null',

        plugins: [
            del({
                targets: ['npm/build']
            }),
            nodeResolve({
                jsnext: true,
                main: true,
                browser: true,
            }),
            commonjs({
                include: ["node_modules/**"],
            }), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
            babel({
                babelHelpers: 'runtime',
                plugins: ["@babel/plugin-transform-runtime"],
                exclude: 'node_modules/**',
            }),  // 编译
            terser(),  // 压缩
            typescript({
                declaration: true,
                outDir: 'npm/build',
                tsconfig: 'tsconfig.json',
            })  // 编译ts
        ],

        external:[
            {
                includeDependencies: true, // 是否包含依赖 默认为 false 不包含 为true时包含
            },
        ]  // 不打包的模块

    },
    // {
    //     input: './src/index.ts',
    //     output: [
    //         {
    //             file: 'build/bundle.d.ts',
    //             format: 'es'
    //         }
    //     ],
    //     plugins: [
    //         dts(),
    //     ],
    // },
]
