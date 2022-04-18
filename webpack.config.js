const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry:'./src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'app.bundle.js',
    },
    module: {
        rules:[{
            test:/\.css$/,
            use:[MiniCssExtractPlugin.loader,'css-loader',
            ],
        },],
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'./style.css',
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
}