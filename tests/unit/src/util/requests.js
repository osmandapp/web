/** Find the request the app has sent to the given endpoint (apiGet/apiPost are jest.fn() in tests). */
export function findRequest(apiMock, endpoint) {
    const call = apiMock.mock.calls.find(([url]) => url.endsWith(endpoint));
    if (!call) {
        const sent = apiMock.mock.calls.map(([url]) => url).join(', ') || 'nothing';
        throw new Error(`No request to ${endpoint}, sent: ${sent}`);
    }
    // apiPost(url, body, options), apiGet(url, options)
    const [url, ...rest] = call;
    const body = rest.length > 1 ? rest[0] : undefined;
    const options = rest.length > 1 ? rest[1] : rest[0];

    return { url, body, options };
}
