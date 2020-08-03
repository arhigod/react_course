const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = env => {
    const mode = env.MODE || 'dev';
    const conf = require(`./webpack.${mode}.js`);

    return merge({
        entry: './src/index.js',
        output: {
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: './index.html'
            })
        ]
    }, conf);
};
