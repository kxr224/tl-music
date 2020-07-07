module.exports = {
    devServer: {
        open: true,
        proxy: {
            // 规则的配置，匹配请求了这个地址的话，就会代理到我们对应服务器
            // "/v1/restserver/ting": {
            //     // 这个规则对应的服务端的地址
            //     target: "http://tingapi.ting.baidu.com",
            //     changeOrigin: true
            // },
            // 接口都是以/api开头
            "/api":{
                target: "http://tingapi.ting.baidu.com",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            "/taihe-api":{
                target: "http://music.taihe.com",
                changeOrigin: true,
                pathRewrite: {
                    '^/taihe-api': ''
                }
            }
        }
    }
}
