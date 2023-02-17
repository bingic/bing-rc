
import {nodeResolve} from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import {babel} from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';
import dts from "rollup-plugin-dts";

export default [
    {
        input: ['./src/index.ts'], // 入口文件
        output: {
            // name: 'rollup-react-component', //当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下：window.rollup-react-component=...
            file: 'build/bundle.js', // 输出文件
            //输出 d.ts 文件
            format: 'es', //  五种输出格式：amd /  es6 / iife / umd / cjs , 默认为es6
            sourcemap: true, // 生成map文件
            // inlineDynamicImports: true
            // external: ['react', 'react-dom'], // 不打包的模块
            //导出组件
            // exports: 'About',
        },

        // output: [
        //     {
        //         file: 'dist/bundle.cjs.js',
        //         format: 'cjs',
        //         exports: 'named',
        //         sourcemap: true,
        //     },
        //     {
        //         file: 'dist/bundle.es.js',
        //         format: 'es',
        //         sourcemap: true,
        //     },
        // ],

        // name: 'rollup-react-component',
        context: 'null',
        moduleContext: 'null',
        //各种插件使用的配置
        plugins: [
            del({
                targets: ['dist'] // 清除build文件夹 babel输出会自动创建
            }),
            // dts(), // 生成d.ts文件  这里不能和下面的 dts() 同时使用
            nodeResolve({
                jsnext: true,
                main: true,
                browser: true,
            }),
            commonjs({
                include: ["node_modules/**"],
            }),
            babel({
                babelHelpers: 'runtime', // 生成runtime模式的babel代码 默认为 bundled
                plugins: ["@babel/plugin-transform-runtime"],
                // babelHelpers: 'bundled',
                // presets: ['@babel/preset-react'],
                exclude: 'node_modules/**', // 只编译源代码
            }), // 会自动读取babel的配置文件
            terser(), // 压缩代码
            typescript({
                // compilerOptions: {
                //     lib: ["es5", "es6", "dom"],
                //     target: "es5",
                //     jsx: 'react',
                // },
                declaration: true, // 生成.d.ts文件  //这里取消 使用了统一的dts插件
                outDir: 'build/types',//输出目录
                tsconfig: 'tsconfig.json',
                //
                // include: ['./src/**/*.ts', './src/**/*.tsx'], // 仅编译src目录下的ts文件
                // compilerOptions: {
                //     // lib: ['es5', 'es6', 'dom'], // 指定要包含在编译中的库文件
                //     // // exclude: ['./src/**/style/*.ts'], //排除样式文件
                //     // target: 'ES6', // 编译目标
                //     // typeRoots: ["./types"], // 指定自定义类型文件的位置
                //     // moduleResolution: 'node', // 模块解析策略
                //     // module: 'ES6', // 生成的模块类型
                //     // jsx: 'react', // 生成的js文件中的jsx语法
                //     // allowSyntheticDefaultImports: true, // 允许从没有设置默认导出的模块中默认导入
                //     // ...tsConfig, // 读取tsconfig.json中的配置
                // },
            })
        ],
        // 项目中引用的第三方库
        external: [
            {
                includeDependencies: true, // 是否包含依赖 默认为false 不包含 为true时包含
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