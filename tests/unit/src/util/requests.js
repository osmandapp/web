/** Find the request the app has sent to the given endpoint (apiGet/apiPost are jest.fn() in tests). */
export function findRequest(apiMock, endpoint) {
    const call = apiMock.mock.calls.find(([url]) => url.endsWith(endpoint));
    if (!call) {
        const sent = apiMock.mock.calls.map(([url]) => url).join(', ') || 'nothing';
        throw new Error(`No request to ${endpoint}, sent: ${sent}`);
    }
    const [url, body, options] = call;

    return { url, body, options };
}
