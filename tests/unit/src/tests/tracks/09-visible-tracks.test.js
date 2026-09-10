import {
    getCountVisibleTracks,
    hideAllVisTracks,
    isVisibleTrack,
    showAllVisTracks,
    updateVisibleCache,
    VISIBLE_SHARE_MARKER,
} from '@map/menu/visibletracks/VisibleTracks';
import { TRACK_VISIBLE_FLAG } from '@map/manager/track/TracksManager';
import { SHARE_TYPE } from '@map/menu/share/shareConstants';

function savedVisible(value) {
    localStorage.setItem(TRACK_VISIBLE_FLAG, JSON.stringify(value));
}

function readVisible() {
    return JSON.parse(localStorage.getItem(TRACK_VISIBLE_FLAG));
}

beforeEach(() => {
    localStorage.clear();
});

describe('updateVisibleCache', () => {
    test('an opened track is added to the cache', () => {
        savedVisible({ old: [], new: [], open: [] });

        updateVisibleCache({ visible: true, file: { name: 'Folder/Track.gpx' } });

        expect(readVisible().open).toEqual(['Folder/Track.gpx']);
    });

    test('a closed track is dropped from the cache', () => {
        savedVisible({ old: [], new: [], open: ['Folder/Track.gpx', 'Other.gpx'] });

        updateVisibleCache({ visible: false, file: { name: 'Folder/Track.gpx' } });

        expect(readVisible().open).toEqual(['Other.gpx']);
    });

    test('a shared track is marked as shared in the cache', () => {
        savedVisible({ old: [], new: [], open: [] });

        updateVisibleCache({ visible: true, file: { name: 'Track.gpx' }, smartf: { type: SHARE_TYPE } });

        expect(readVisible().open).toEqual([VISIBLE_SHARE_MARKER + 'Track.gpx']);
    });

    test('the cache of an older version without open tracks is upgraded', () => {
        savedVisible({ old: ['Old.gpx'], new: [] });

        updateVisibleCache({ visible: true, file: { name: 'Track.gpx' } });

        expect(readVisible()).toEqual({ old: ['Old.gpx'], new: [], open: ['Track.gpx'] });
    });

    test('an empty cache is created on the first opened track', () => {
        updateVisibleCache({ visible: true, file: { name: 'Track.gpx' } });

        expect(readVisible()).toEqual({ old: [], new: [], open: ['Track.gpx'] });
    });
});

describe('isVisibleTrack', () => {
    test('a track shown on the map is visible', () => {
        savedVisible({ open: ['Folder/Track.gpx'] });

        expect(isVisibleTrack({ name: 'Folder/Track.gpx' })).toBe(true);
        expect(isVisibleTrack({ name: 'Other.gpx' })).toBe(false);
    });

    test('a shared track shown on the map is visible', () => {
        savedVisible({ open: [] });
        updateVisibleCache({ visible: true, file: { name: 'Track.gpx' }, smartf: { type: SHARE_TYPE } });

        expect(isVisibleTrack({ name: 'Track.gpx', sharedWithMe: true })).toBe(true);
    });

    test('an empty cache means nothing is visible', () => {
        expect(isVisibleTrack({ name: 'Track.gpx' })).toBe(false);
    });
});

describe('hideAllVisTracks / showAllVisTracks', () => {
    test('hiding all clears the opened tracks and keeps the lists', () => {
        savedVisible({ old: ['Old.gpx'], new: ['New.gpx'], open: ['New.gpx'] });

        hideAllVisTracks();

        expect(readVisible()).toEqual({ old: ['Old.gpx'], new: ['New.gpx'], open: [] });
    });

    test('showing all opens every known track', () => {
        savedVisible({ old: ['Old.gpx'], new: ['New.gpx'], open: [] });

        showAllVisTracks();

        expect(readVisible().open).toEqual(['Old.gpx', 'New.gpx']);
    });

    test('an empty cache is left empty', () => {
        hideAllVisTracks();
        showAllVisTracks();

        expect(localStorage.getItem(TRACK_VISIBLE_FLAG)).toBeNull();
    });
});

describe('getCountVisibleTracks', () => {
    test('only the recently opened tracks are counted', () => {
        expect(getCountVisibleTracks({ new: ['A.gpx', 'B.gpx'], old: ['C.gpx'] })).toBe(2);
        expect(getCountVisibleTracks({ old: ['C.gpx'] })).toBe(0);
        expect(getCountVisibleTracks(null)).toBe(0);
    });
});
