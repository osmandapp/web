// Auto-mock: any named export is a jest.fn(). Used for modules a unit test never exercises.
module.exports = new Proxy(
    { __esModule: true },
    {
        get: (target, key) => {
            if (typeof key === 'symbol' || key === 'then' || key === '__esModule') {
                return target[key];
            }
            if (!(key in target)) {
                target[key] = jest.fn();
            }

            return target[key];
        },
    }
);
