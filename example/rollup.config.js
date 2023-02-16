import clear from 'rollup-plugin-clear'; // 清除文件夹
import {nodeResolve} from '@rollup/plugin-node-resolve' // 用于解析node_modules中的模块
import commonjs from '@rollup/plugin-commonjs'; // 用于将CommonJS模块转换为ES6，以便其他插件可以处理
import {babel} from '@rollup/plugin-babel'; // babel插件
import terser from '@rollup/plugin-terser'; // 压缩代码
import replace from '@rollup/plugin-replace'; // 替换环境变量
import serve from 'rollup-plugin-serve'; // 本地服务 结合rollup-plugin-livereload使用
import livereload from 'rollup-plugin-livereload'; // 热更新 结合rollup-plugin-serve使用
import htmlTemplate from 'rollup-plugin-generate-html-template'; // 生成html模板
import typescript from '@rollup/plugin-typescript';

export default {

    input: ['./src/index.tsx'], // 入口文件
    output: {
        name: 'react-project',
        file: 'dist/main.js',
        format: 'es',
        sourcemap: true, // 生成map文件
    },
    context: 'null',
    moduleContext: 'null',
    plugins: [
        // clear({
        //     targets: ['dist']  // 清除dist文件夹
        // }),
        nodeResolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs({
            include: ["node_modules/**"],
        }),
        replace({
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify('production') // 否则会报：process is not defined的错
        }),
        babel({
            babelHelpers: 'runtime',
            'plugins': ["@babel/plugin-transform-runtime"],
            exclude: 'node_modules/**', // 只编译源代码
        }), // 会自动读取babel的配置文件
        terser(),
        typescript({
            tsconfig: 'tsconfig.json',
        }),

        //监听dist文件夹下的文件变化，自动刷新浏览器
        livereload({
            watch: 'dist', // 监听dist文件夹下的文件变化
            verbose: false, // 输出日志
            delay: 500, // 延迟刷新
        }),

        serve('dist'), // 本地服务

        htmlTemplate({
            template: 'public/index.html',
            target: 'dist/index.html',
        }),
    ],
    external: [
        {
            includeDependencies: true,
        },
    ], // 项目中引用的第三方库
}
