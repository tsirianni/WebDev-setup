const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // or Production

    entry: {
        main: path.resolve(__dirname, 'src/app.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    },

    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        open: true,
        hot: true,
        watchFiles: {
            paths: ['src', 'SASS/main.css']},
    },

    // Loaders
    module: {
        rules: [{test: /\.css$/, use: ['style-loader', 'css-loader']}]
    },

    // Plugins
    plugins: [new HtmlWebpackPlugin({
        title: 'Project Name',
        filename: 'index.html',
        template: path.resolve(__dirname, 'src/temp.html'),
    })],
}