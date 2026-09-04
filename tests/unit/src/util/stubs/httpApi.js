// every network call of the app is a jest.fn() - unit tests assert on its arguments
module.exports = {
    __esModule: true,
    default: jest.fn(),
    apiGet: jest.fn(),
    apiPost: jest.fn(),
    digest: jest.fn(),
    abortApiRequest: jest.fn(),
};
