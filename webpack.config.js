module.exports = {
    devtool: "source-map",
    entry: './src/index.js',
    output: {
        pathinfo: true,
        devtoolLineToLine: true,
        sourceMapFilename: "./bundle.js.map",
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}