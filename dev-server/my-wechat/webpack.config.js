const path = require ("path");
const HtmlWebpackPlugin = require ("html-webpack-plugin");

module.exports = {
    entry: ["./src/index.js"],

    output: {
        filename: "[name].bundle.js",
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
            },
            {
                test: /\.(jpg|gif|svg|png|ttf|woff|eot)$/,
                use: [
                    'file-loader',
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin ({
            template: "./src/index.html"
        })
    ],

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },

    devServer: {
        contentBase: "./dist"
    }
}