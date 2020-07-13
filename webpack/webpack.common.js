const path = require('path');

module.exports = {
    entry: {
        index: path.resolve(__dirname, '../src', 'index.js'),
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../build/')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.js', '.jsx']
                },
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        esmodules: true
                                    }
                                }
                            ],
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    }
};