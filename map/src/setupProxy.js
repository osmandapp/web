const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    let proxy = createProxyMiddleware({
        target: 'http://localhost:8080/',
        changeOrigin: true,
        hostRewrite: 'localhost:3000',
        logLevel: 'debug'
    });
    let testProxy = createProxyMiddleware({
        target: 'https://test.osmand.net/',
        changeOrigin: true,
        hostRewrite: 'localhost:3000',
        logLevel: 'debug'
    });
    app.use('/mapapi/', testProxy);
    app.use('/routing/', testProxy);
    app.use('/gpx/', testProxy);
    app.use('/tile/', testProxy);
    app.use('/weather-api/', testProxy);
    app.use('/online-routing-providers.json', testProxy); // temporarly used for OSRM tasks
};
