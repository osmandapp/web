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
