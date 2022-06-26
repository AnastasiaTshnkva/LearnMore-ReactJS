const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve('__dirname'),
        filename: "[name].[contenthash].js",
        clean: true,
        publicPath: "/",
    },
    devtool: "source-map",
    devServer: {
        hot: true,
        port: 3000,
        historyApiFallback: {index: '/'},
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: "/node_modules/",
                use: [{
                    loader: 'babel-loader',
                }],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader",],
            },
        ]
    },
     plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
     ],
    resolve: {
        extensions: ['.json', '.js', '.jsx'],
    },
};