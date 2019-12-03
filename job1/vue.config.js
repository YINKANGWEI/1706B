
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://169.254.156.144:8080',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
}


