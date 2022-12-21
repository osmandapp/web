const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    let proxy = createProxyMiddleware({
        target: 'http://localhost:8080/',
        changeOrigin: true,
        hostRewrite: 'localhost:3000',
        logLevel: 'debug'
    });
    let testProxy = createProxyMiddleware({
        target: 'http://test.osmand.net/',
        changeOrigin: true,
        hostRewrite: 'localhost:3000',
        logLevel: 'debug'
    });
    app.use('/fav/', proxy);
    app.use('/mapapi/', proxy);
    app.use('/routing/', proxy);
    app.use('/gpx/', proxy);
    app.use('/tile/', proxy);
    app.use('/weather-api/', proxy);
    // app.use('/weather-api/', testProxy);
    
};
