const nodeExternals = require('webpack-node-externals');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

module.exports = {
    mode: 'development',
    target: 'node',
    entry: './src/serverRenderer.js',
    externals: [nodeExternals()],
    output: {
        filename: 'serverRenderer.js',
        libraryTarget: 'commonjs2',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        plugins: [
            new DirectoryNamedWebpackPlugin()
        ]
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        }, {
            test: /\.css$/,
            use: ['css-loader']
        }, {
            test: /\.(png|svg|jpe?g|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images/'
                }
            }]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }]
        }],
    },
};
