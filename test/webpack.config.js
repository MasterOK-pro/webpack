const path = require ('path');
const HtmlWebpackPlugin = require ("html-webpack-plugin")

module.exports = {
    entry: {
        app: './src/index.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve (__dirname, 'dist')
    },

    plugins: [
        new HtmlWebpackPlugin ({
            template: './src/todo-list.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },

    devServer: {
        contentBase: './dist'
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}