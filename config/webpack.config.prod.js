const base = require('./webpack.config')
const path = require('path')

module.exports = Object.assign({}, base,{
  mode: 'production',
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[hash:5].js",
    libraryTarget: "umd",
  },
})