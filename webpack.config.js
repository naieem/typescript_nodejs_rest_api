const path = require('path');

module.exports = {
    entry: './src/app.ts',
    target: "node",
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    }
};