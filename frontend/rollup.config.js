import babel from "rollup-plugin-babel"
import uglify from "rollup-plugin-uglify"

export default {
    input: './main.js',
    output: {
        file: '../public/pkg/bundle.js',
        format: 'cjs',
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        uglify,
    ]
};