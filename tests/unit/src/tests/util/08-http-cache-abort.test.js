import { apiGet } from '@httpapi';

const SEARCH_URL = 'https://api.test/search/search';
const ABORT_KEY = 'searchByWord';

const options = (text) => ({ apiCache: true, abortControllerKey: ABORT_KEY, params: { text } });

function jsonResponse(data) {
    const body = { json: async () => data, text: async () => JSON.stringify(data), blob: async () => null };

    return {
        ok: true,
        headers: { get: () => 'application/json', forEach: () => {} },
        clone: () => body,
        ...body,
    };
}

test('a cached answer cancels the request of the same abort key still in flight', async () => {
    global.fetch = jest.fn((url, opts) => {
        if (url.includes('text=cached')) {
            return Promise.resolve(jsonResponse({ query: 'cached' }));
        }

        return new Promise((_, reject) => {
            opts.signal.addEventListener('abort', () => reject(new DOMException('Aborted', 'AbortError')));
        });
    });

    expect((await apiGet(SEARCH_URL, options('cached'))).data).toEqual({ query: 'cached' });

    const slow = apiGet(SEARCH_URL, options('slow'));
    const fromCache = await apiGet(SEARCH_URL, options('cached'));

    // without the abort the slow answer arrives later and overwrites the results of the cached query
    expect(await slow).toMatchObject({ ok: false, aborted: true });
    expect(fromCache.data).toEqual({ query: 'cached' });
    expect(global.fetch).toHaveBeenCalledTimes(2);
});
