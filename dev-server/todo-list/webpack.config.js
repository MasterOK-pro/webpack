const path = require ("path");
const HtmlWebpackPlugin = require ("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "todo-list.js",
        path: path.resolve (__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    /* 版本别名 */
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
    },

    plugins: [
        new HtmlWebpackPlugin ({
            title: "todo-list",
            template: "./src/todo-list.html"
        })
    ],

    devServer: {
        contentBase: "./dist"
    }
}