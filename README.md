# WebDev-setup

`npm init -y` and delete ***main*** in **package.jason**

## Dependencies installed

### Webpack
> `npm i -D webpack webpack-cli webpack-dev-server`

### Babel
> `npm i -D babel-loader @babel/core @babel/preset-env`

### HTML
>`npm i -D html-webpack-plugin`

### CSS
>`npm i -D style-loader css-loader`

This strucutre uses SASS/SCSS, and the **style file being tracked is actually the compiled .css** file. So, in this case, I am writing my code in SASS and compiling to .css to be tracked by webpack. For this reason, the ***sass-loader*** was not installed.
___

Create **src** with:
* app.js,
* temp.html (template for plugin)


Create **webpack.config.js** with:
```
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
        assetModuleFilename: '[name][ext]',
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
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.(svg|ico|png|webp|jpg|jpeg|gif)$/, type: 'asset/resource'},
        ]
    },

    // Plugins
    plugins: [new HtmlWebpackPlugin({
        title: 'Project Name',
        filename: 'index.html',
        template: path.resolve(__dirname, 'src/temp.html'),
    })],
}
```

