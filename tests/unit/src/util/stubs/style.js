// CSS modules: styles.foo returns 'foo'
module.exports = new Proxy(
    {},
    {
        get: (target, key) => (key === '__esModule' ? false : String(key)),
    }
);
