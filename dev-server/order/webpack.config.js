const path = require ("path");
const HtmlWebpackPlugin = require ("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    
    output: {
        filename: "bundle.js",
        path: path.resolve (__dirname, "dist")
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
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
            title: "order manager",
            template: "./src/menu.html"
        })
    ]
}