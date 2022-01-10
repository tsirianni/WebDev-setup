# WebDev basic setup with Webpack|SASS|Babel

##### Introduction - Portuguese
Este repositório busca fornecer uma estrutura inicial básica para projetos de desenvolvimento web que utilizam webpack como *bundler*, SASS e Babel como transpilador. Este é um ótimo ponto de partida para qualquer projeto, uma vez que possibilita que tire proveito das vantagens oferecidas pelo SASS e já fornece maior compatibilidade com navegadores mais antigos através do Babel. Para utilizar essa estrutura, clone este repositório e execute `npm install` para instalar as dependências necessárias.

**Aviso:** Esta estrutura utiliza SASS/SCSS e **a folha de estilo (css) sendo rastreada é o arquivo .css compilado** na pasta *SASS*. Então, neste caso, estou escrevendo meu código em SASS e compilando-o para .css para ser rastreado pelo webpack. Por essa razão, o **sass-loader** não foi instalado. Você precisará de uma ferramenta para compilar arquivos sass/scss.

##### Introduction - English
This repository aims to provide a basic starting pack to a web-development project that uses webpack as bundler, SASS and Babel as transpiler. This is a great starting point for any project, as it allows you to take advantage of the sass functions and already provides greater compatibility with older browsers through babel. To use this structure, clone this repo and run `npm install` to install all the DevDependencies.

**Note:** This strucutre uses SASS/SCSS, and the **style file being tracked is actually the compiled .css** file in the *SASS* folder. So, in this case, I am writing my code in SASS and compiling to .css to be tracked by webpack. For this reason, the ***sass-loader*** was not installed. You will need a tool to compile the sass/scss files.

___
## WebDev-setup

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

