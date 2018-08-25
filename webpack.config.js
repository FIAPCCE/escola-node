const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './app/public/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/public/dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                }) 
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot|jpg)/,
                exclude: /node_modules/,
                use: {
                    loader: 'url-loader',
                    options: {limit: 8000}
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
}