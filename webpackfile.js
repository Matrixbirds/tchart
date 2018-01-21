const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

const DirectoryNamedWebpackPlugin = require('enhanced-resolve')

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']}
        ]
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src')
        },
        modules: ["src", "node_modules"],
        extensions: ['.js', '.scss'],
        modules: [
          'node_modules'
        ],
        //plugins: [
        //    new DirectoryNamedWebpackPlugin()
        //]
    },
    plugins: [
        HtmlWebpackPluginConfig
    ]
}
