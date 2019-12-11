module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://169.254.156.144:7001",
                pathRewrite: {
                    "/api": ""
                }
            }
        }
    }
}