import { decodeSimplifiedGeometry } from '@map/util/decodeSimplifiedGeometry';
import { distance, encodeGeometry } from '../../util/fixtures/geometry';

// the encoder used here is a copy of the server one - see the note in fixtures/geometry.js

// the z18+8 storage grid is about 0.6 m, so a decoded point must land within a couple of cells
const GRID_TOLERANCE_M = 2;

function expectSameTrack(decoded, expected) {
    expect(decoded).toHaveLength(expected.length);
    decoded.forEach((segment, s) => {
        expect(segment).toHaveLength(expected[s].length);
        segment.forEach((point, i) => {
            const [latitude, longitude] = expected[s][i];
            expect(distance(point.latitude, point.longitude, latitude, longitude)).toBeLessThan(GRID_TOLERANCE_M);
        });
    });
}

test('empty input', () => {
    expect(decodeSimplifiedGeometry('')).toEqual([]);
    expect(decodeSimplifiedGeometry(null)).toEqual([]);
    expect(decodeSimplifiedGeometry(undefined)).toEqual([]);
});

test('no segments', () => {
    expect(decodeSimplifiedGeometry(encodeGeometry([]))).toEqual([]);
});

test('single segment', () => {
    const track = [
        [
            [50.45, 30.523],
            [50.4501, 30.5231],
            [50.4502, 30.5233],
        ],
    ];

    expectSameTrack(decodeSimplifiedGeometry(encodeGeometry(track)), track);
});

test('several segments', () => {
    const track = [
        [
            [50.45, 30.523],
            [50.451, 30.524],
        ],
        [
            [49.84, 24.03],
            [49.841, 24.031],
            [49.842, 24.032],
        ],
    ];

    expectSameTrack(decodeSimplifiedGeometry(encodeGeometry(track)), track);
});

test('empty segments are dropped', () => {
    const decoded = decodeSimplifiedGeometry(
        encodeGeometry([
            [],
            [
                [50.45, 30.523],
                [50.451, 30.524],
            ],
        ])
    );
    expect(decoded).toHaveLength(1);
    expect(decoded[0]).toHaveLength(2);
});

test('negative coordinates and deltas in both directions', () => {
    const track = [
        [
            [-33.87, -151.21],
            [-33.871, -151.212],
            [-33.869, -151.209],
        ],
    ];

    expectSameTrack(decodeSimplifiedGeometry(encodeGeometry(track)), track);
});

test('the extremes of the mercator grid', () => {
    const track = [
        [
            [0, 0],
            [0, 179.9],
            [0, -179.9],
            [84, 0],
            [-84, 0],
        ],
    ];

    expectSameTrack(decodeSimplifiedGeometry(encodeGeometry(track)), track);
});

test('a long jump needs a multi-byte varint', () => {
    const track = [
        [
            [50.45, 30.523],
            [51.5, 0.12], // Kyiv -> London in one delta
        ],
    ];

    expectSameTrack(decodeSimplifiedGeometry(encodeGeometry(track)), track);
});

test('a truncated payload is reported, not silently decoded', () => {
    const b64 = encodeGeometry([
        [
            [50.45, 30.523],
            [50.451, 30.524],
        ],
    ]);
    const cut = Buffer.from(b64, 'base64').subarray(0, 3).toString('base64');

    expect(() => decodeSimplifiedGeometry(cut)).toThrow('Corrupted varint geometry');
});
