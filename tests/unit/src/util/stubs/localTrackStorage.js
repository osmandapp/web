// IndexedDB is not available in jsdom
module.exports = {
    __esModule: true,
    saveTrackToLocalStorage: jest.fn(),
    deleteLocalTrack: jest.fn(),
    loadLocalTracksFromStorage: jest.fn(),
};
