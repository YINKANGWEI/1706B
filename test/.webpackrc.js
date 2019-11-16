

const path = require("path")
module.exports = {
  alias: {
    '@': path.resolve(__dirname, "src/")
  },
  extraBabelPlugins: [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
  ]
}
