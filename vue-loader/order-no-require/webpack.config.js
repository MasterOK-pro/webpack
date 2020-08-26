const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/index.js",


    },

    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },

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
                test: /\.js$/,
                loader: 'babel-loader'
            },

            {
                test: /\.(png|jpg|svg|gif|jpeg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            fallback: "file-loader",
                            limit: 40960,
                            esModule: false
                        }
                    }
                ]
            },

            {
                test: /\.vue$/,
                use: [
                    {
                        loader: "vue-loader",
                        options: {
                            esModule: false
                        }
                    }
                ]
                
            }
        ]
    },

    devServer: {
        contentBase: "./dist"
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/menu.html"
        }),

        new VueLoaderPlugin()
    ]
}