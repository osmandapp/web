const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    const prepare = (target) => ({ target, hostRewrite: 'localhost:3000', changeOrigin: true, logLevel: 'debug' });

    const localProxy = createProxyMiddleware(prepare('http://localhost:8080'));

    const testProxy = createProxyMiddleware(prepare('https://test.osmand.net'));

    const mainProxy = createProxyMiddleware(prepare('https://osmand.net'));
    const maptileProxy = createProxyMiddleware(prepare('https://maptile.osmand.net'));

    // yarn start:local
    let gpx = localProxy;
    let tile = localProxy;
    let mapapi = localProxy;
    let routing = localProxy;
    let weather = localProxy;
    let others = localProxy;

    // yarn start (test)
    if (process.env.NODE_ENV === 'development' && !process.env.USE_LOCAL_API) {
        gpx = testProxy;
        tile = testProxy;
        mapapi = testProxy;
        routing = testProxy;
        weather = testProxy;
        others = testProxy;
    }

    // yarn start:fallback (prod)
    if (process.env.USE_MAIN_API) {
        gpx = maptileProxy;
        tile = maptileProxy;
        routing = maptileProxy;
        weather = maptileProxy;
        mapapi = mainProxy;
        others = mainProxy;
    }

    app.use('/gpx/', gpx);
    app.use('/tile/', tile);
    app.use('/mapapi/', mapapi);
    app.use('/routing/', routing);
    app.use('/weather-api/', weather);
    // app.use('/weather/', weather); // defined-by-env
    // app.use('/search/', others); // actually /routing/search
    app.use('/online-routing-providers.json', others); // osrm-providers
};
