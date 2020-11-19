const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

    mode: 'development',
    module: { 
        rules: [
            {
                test: /\.json5$/i,
                loader: 'json5-loader',
                type: 'javascript/auto',
            },
            {
                test:/\.css$/i,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    attributes: false,
                    minimize: false,
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { 
                            esModule: false
                         }
                    }
                ]
            }
        ]
     },
     plugins: [
         new HtmlWebPackPlugin({
             template: './src/index.html',
             filename: './index.html'
         }),
         new MiniCssExtractPlugin({
             filename: '[name].css',
             igonreOrder: false,
         }),
         new CopyPlugin({
             patterns: [
                { from: 'src/assets', to: 'assets/' },
             ],
         })
     ]

}