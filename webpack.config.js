const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: '/src/App.js',
    output: { path: path.resolve(__dirname, 'dist') },
    devServer: {
        static: './',
        port: 8080,
        compress: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({ template: './src/index.html' })
        // new BundleAnalyzerPlugin(),
    ],
    mode: 'development',
    devtool: 'inline-source-map'
};
