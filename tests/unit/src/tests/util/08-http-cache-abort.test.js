import { apiGet } from '@httpapi';

const SEARCH_URL = 'https://api.test/search/search';
const ABORT_KEY = 'searchByWord';

const options = (text, abortOnCacheHit = true) => ({
    apiCache: true,
    abortControllerKey: ABORT_KEY,
    abortOnCacheHit,
    params: { text },
});

function jsonResponse(data) {
    const body = { json: async () => data, text: async () => JSON.stringify(data), blob: async () => null };

    return {
        ok: true,
        headers: { get: () => 'application/json', forEach: () => {} },
        clone: () => body,
        ...body,
    };
}

function fetchWithSlowAnswers() {
    return jest.fn((url, opts) => {
        if (url.includes('text=cached')) {
            return Promise.resolve(jsonResponse({ query: 'cached' }));
        }

        return new Promise((_, reject) => {
            opts.signal.addEventListener('abort', () => reject(new DOMException('Aborted', 'AbortError')));
        });
    });
}

test('a cached answer cancels the request of the same abort key only when asked for', async () => {
    global.fetch = fetchWithSlowAnswers();

    expect((await apiGet(SEARCH_URL, options('cached'))).data).toEqual({ query: 'cached' });

    const slow = apiGet(SEARCH_URL, options('slow'));
    const fromCache = await apiGet(SEARCH_URL, options('cached'));

    // without the abort the slow answer arrives later and overwrites the results of the cached query
    expect(await slow).toMatchObject({ ok: false, aborted: true });
    expect(fromCache.data).toEqual({ query: 'cached' });
    expect(global.fetch).toHaveBeenCalledTimes(2);

    // every other caller of the same abort key keeps its request: an aborted answer reads as a failure there
    global.fetch = fetchWithSlowAnswers();
    await apiGet(SEARCH_URL, options('cached', false));
    apiGet(SEARCH_URL, options('slow', false));
    await apiGet(SEARCH_URL, options('cached', false));

    const [, slowRequest] = global.fetch.mock.calls;
    expect(slowRequest[1].signal.aborted).toBe(false);
});

test('a cache of a given size keeps only the last answers of its url', async () => {
    global.fetch = jest.fn((url) => Promise.resolve(jsonResponse({ url })));
    const ask = (text) =>
        apiGet('https://api.test/gpx/get-analysis', { apiCache: true, apiCacheKeepLastNumber: 2, params: { text } });

    await ask('a');
    await ask('b');
    await ask('c');
    await ask('b');
    await ask('c');
    expect(global.fetch).toHaveBeenCalledTimes(3);

    await ask('a');
    expect(global.fetch).toHaveBeenCalledTimes(4);
});

test('a cached answer expires after its time, a url or a given key keeps only its last answers', async () => {
    global.fetch = jest.fn((url) => Promise.resolve(jsonResponse({ url })));
    let now = Date.now();
    jest.spyOn(Date, 'now').mockImplementation(() => now);
    const ask = (url, options = {}) => apiGet(url, { apiCache: true, ...options });

    await ask('https://api.test/weather');
    now += 299 * 1000;
    await ask('https://api.test/weather');
    expect(global.fetch).toHaveBeenCalledTimes(1);
    now += 2 * 1000;
    await ask('https://api.test/weather');
    expect(global.fetch).toHaveBeenCalledTimes(2);

    await ask('https://api.test/poi', { apiCacheExpirySeconds: 10 });
    now += 11 * 1000;
    await ask('https://api.test/poi', { apiCacheExpirySeconds: 10 });
    expect(global.fetch).toHaveBeenCalledTimes(4);

    global.fetch.mockClear();
    const search = (text) => ask('https://api.test/search', { params: { text } });
    for (let i = 0; i <= 10; i++) {
        await search(`q${i}`);
    }
    await search('q1');
    expect(global.fetch).toHaveBeenCalledTimes(11);
    await search('q0');
    expect(global.fetch).toHaveBeenCalledTimes(12);

    global.fetch.mockClear();
    const route = (to) =>
        ask(`https://api.test/route/${to}`, { apiCacheKeepLastKey: 'route', apiCacheKeepLastNumber: 2 });
    for (const to of ['a', 'b', 'c', 'b', 'c']) {
        await route(to);
    }
    expect(global.fetch).toHaveBeenCalledTimes(3);
    await route('a');
    expect(global.fetch).toHaveBeenCalledTimes(4);
});
