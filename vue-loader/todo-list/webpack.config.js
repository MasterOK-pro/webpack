const path = require ("path");
const VueLoaderPlugin = require ("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require ("html-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/index.js"
    },

    output: {
        filename: "[name].bundle.js",
        path: path.resolve (__dirname, "dist")
    },

    devServer: {
        contentBase: "./dist"
    },

    resolve: {
        alias: {
            "vue$": 'vue/dist/vue.esm.js'
        }
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                use: "babel-loader"
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin ({
            template: "./src/todo-list.html"
        }),

        new VueLoaderPlugin ()
    ],
}