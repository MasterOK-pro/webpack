const path = require ("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");


module.exports = {
    entry: {
        app: "./src/index.js"
    },

    output: {
        filename: "[name].bundle.js",
        path: path.resolve (__dirname, "dist")
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },

    devServer: {
        contentBase: "./dist"
    },

    plugins: [
        new HtmlWebpackPlugin ({
            template: "./src/index.html"
        }),

        new VueLoaderPlugin ()
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|gif|svg|png|ttf|woff|eot)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            fallback: "file-loader",
                            limit: 40960,
                            esModule: false
                        }
                    }
                ]
            },

            {
                test: /\.vue/,
                use: 'vue-loader'
            },

            {
                test: /\.js/,
                use: 'babel-loader'
            }
        ]
    }
}