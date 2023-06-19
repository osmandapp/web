const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    const proxy = createProxyMiddleware({
        target: (process.env.NODE_ENV === 'development')
            ? 'https://test.osmand.net/' // https
            : 'http://localhost:8080/',
         changeOrigin: true,
        hostRewrite: 'localhost:3000',
        logLevel: 'debug'
    });
    app.use('/mapapi/', proxy);
    app.use('/routing/', proxy);
    app.use('/gpx/', proxy);
    app.use('/tile/', proxy);
    app.use('/weather-api/', proxy);
    app.use('/online-routing-providers.json', proxy); // osrm
};