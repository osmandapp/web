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
    let heightmap = localProxy;
    let mapapi = localProxy;
    let routing = localProxy;
    let search = localProxy;
    let weather = localProxy;
    let others = localProxy;
    let osmgpx = localProxy;
    let share = localProxy;
    let fs = localProxy;

    // yarn start (test)
    if (process.env.NODE_ENV === 'development' && !process.env.USE_LOCAL_API) {
        gpx = testProxy;
        tile = testProxy;
        heightmap = testProxy;
        mapapi = testProxy;
        routing = testProxy;
        search = testProxy;
        weather = testProxy;
        others = testProxy;
        osmgpx = testProxy;
        share = testProxy;
        fs = testProxy;
    }

    // yarn start:fallback (prod)
    if (process.env.USE_MAIN_API) {
        gpx = maptileProxy;
        tile = maptileProxy;
        heightmap = maptileProxy;
        routing = maptileProxy;
        search = maptileProxy;
        weather = maptileProxy;
        mapapi = mainProxy;
        others = mainProxy;
        // TODO switch to mainProxy later
        osmgpx = testProxy;
        share = mainProxy;
        fs = mainProxy;
    }

    app.use('/gpx/', gpx);
    app.use('/tile/', tile);
    app.use('/heightmap/', heightmap);
    app.use('/mapapi/', mapapi);
    app.use('/search/', search);
    app.use('/routing/', routing);
    app.use('/weather-api/', weather);
    app.use('/osmgpx/', osmgpx);
    // app.use('/weather/', weather); // defined-by-env
    app.use('/online-routing-providers.json', others); // osrm-providers
    app.use('/share/', share);
    app.use('/fs/', fs);
};
