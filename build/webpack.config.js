const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const projectRoot = path.resolve(__dirname, '../')

module.exports = {
    entry: {
        app: [
          path.resolve(projectRoot, './src/main.js')
        ]
    },
    output: {
        path: path.resolve(projectRoot, './dist'),
        filename: "app.bundle.js"
    },
    plugins: [new HtmlWebpackPlugin()]
};