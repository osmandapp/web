import { prepareResult, updateFavoriteGroups } from '@map/manager/FavoritesManager';
import FavoriteHelper from '@map/infoblock/components/favorite/FavoriteHelper';
import { getUniqFileId } from '@map/manager/GlobalManager';

const file = (name) => ({ name: `favorites-${name}.gpx`, type: 'FAVOURITES', userid: 1, updatetimems: 1000 });

function group(name, extra = {}) {
    const f = file(name);
    return { id: getUniqFileId(f), name, file: f, updatetimems: 1000, pointsGroups: {}, ...extra };
}

const resp = (trackData, times = {}) => ({
    clienttime: times.clienttime ?? 2000,
    updatetime: times.updatetime ?? 3000,
    details: { trackData },
});

function ctxWith(groups, mapObjs = {}) {
    return {
        favorites: { groups, mapObjs },
        setUpdateMarkers: jest.fn(),
        setFavorites: jest.fn(),
    };
}

test('the server response is unpacked into the new and the old group', () => {
    const withNaN = '{"wpts":[{"name":"Hut","ele":NaN}]}';

    const res = prepareResult({ data: { respNewGroup: resp(withNaN), respOldGroup: '' } });

    expect(res.newGroupResp).toEqual({
        clienttimems: 2000,
        updatetimems: 3000,
        data: { wpts: [{ name: 'Hut', ele: null }] },
    });
    expect(res.oldGroupResp).toBeNull();
    expect(prepareResult({})).toBeUndefined();
});

test('a favorite moved to another group updates both groups and leaves the rest alone', () => {
    const groups = [group('Trips', { pinned: true }), group('Alps'), group('Cities')];
    const ctx = ctxWith(groups);
    const result = {
        newGroupResp: {
            clienttimems: 2000,
            updatetimems: 3000,
            data: { pointsGroups: { Alps: {} }, wpts: [{ hidden: 'true' }] },
        },
        oldGroupResp: { clienttimems: 2500, updatetimems: 3500, data: { pointsGroups: { Trips: {} }, wpts: [] } },
    };

    updateFavoriteGroups({ result, selectedGroupId: groups[1].id, oldGroupId: groups[0].id, ctx });

    const [trips, alps, cities] = ctx.favorites.groups;
    expect(trips.updatetimems).toBe(3500);
    expect(trips.pointsGroups).toEqual({ Trips: {} });
    expect(trips.pinned).toBe(true); // the pin of a group survives a change of its favorites
    expect(trips.hidden).toBeUndefined(); // an empty group is not hidden
    expect(alps.updatetimems).toBe(3000);
    expect(alps.hidden).toBe('true');
    expect(cities).toBe(groups[2]);
    expect(ctx.setUpdateMarkers).toHaveBeenCalled();
});

test('the map object of a group is updated, and created when the group was never on the map', () => {
    const groups = [group('Trips')];
    const markers = { layers: 1 };
    const ctx = ctxWith(groups, { [groups[0].id]: { name: 'Trips', markers, wpts: [], updatetimems: 1000 } });
    const result = {
        newGroupResp: { clienttimems: 2000, updatetimems: 3000, data: { wpts: [{ hidden: 'true' }] } },
        oldGroupResp: null,
    };

    updateFavoriteGroups({ result, selectedGroupId: groups[0].id, ctx });

    const updated = ctx.favorites.mapObjs[groups[0].id];
    expect(updated.updatetimems).toBe(3000);
    expect(updated.hidden).toBe('true');
    expect(updated.markers).toBeUndefined(); // the markers are rebuilt from the new data
    expect(updated.oldMarkers).toBeDefined();

    const empty = ctxWith(groups);
    updateFavoriteGroups({ result, selectedGroupId: groups[0].id, ctx: empty });

    const created = empty.favorites.mapObjs[groups[0].id];
    expect(created.updatetimems).toBe(3000);
    expect(created.url).toContain(encodeURIComponent('favorites-Trips.gpx'));
});

test('a group missing from the list is added by the response', () => {
    const favorites = { groups: [group('Trips')], mapObjs: {} };
    const result = { clienttimems: 2000, updatetimems: 3000, data: { pointsGroups: { Alps: {} }, wpts: [] } };

    const res = FavoriteHelper.updateSelectedGroup({ favorites, selectedGroupName: 'Alps', result, id: 'no-such-id' });

    const added = res.groups[1];
    expect(added.name).toBe('Alps');
    expect(added.pointsGroups).toEqual({ Alps: {} });
    expect(added.updatetimems).toBe(3000);

    const known = FavoriteHelper.updateSelectedGroup({
        favorites,
        selectedGroupName: 'Trips',
        result,
        id: favorites.groups[0].id,
    });
    expect(known.groups).toHaveLength(2);
    expect(known.groups[0].updatetimems).toBe(3000);
});
