import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { mkdtemp, rm, rmdir, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { By } from 'selenium-webdriver';
import { clickBy, getTextBy, matchTextBy, waitBy, waitByRemoved } from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionOpenLocalTrack from '../../actions/tracks/actionOpenLocalTrack.mjs';

const track = '25226_custom-tags';
const fixture = `test-resources/ui/${track}.gpx`;
const points = [
    [
        'Test',
        [
            /Country\s+United States/,
            /Postcode\s+23284/,
            /Start date\s+Thursday, June 8, 2023/,
            /State\s+Virginia/,
            /Telephone\s+\(804\) 828-0100/,
        ],
    ],
    ['Test all tags', [/My note\s+yes/, /Color\s+red/, /Status\s+air_conditioning_yes/]],
    ['Test filtered keys', [/Route id\s+1234/i, /Content\s+abc/, /Wikipedia\s+en:Richmond, Virginia/]],
];

// Android and iOS package this same file from OsmAnd-resources. Standalone web checkouts can fetch it.
async function openFixture() {
    const resources =
        process.env.OSMAND_RESOURCES_DIR ||
        resolve(dirname(fileURLToPath(import.meta.url)), '../../../../../../resources');
    const local = resolve(resources, 'test-resources/ui');
    if (existsSync(join(local, track + '.gpx'))) {
        return actionOpenLocalTrack(track, local);
    }
    const url = 'https://raw.githubusercontent.com/osmandapp/OsmAnd-resources/r5.5/' + fixture;
    const response = await fetch(url);
    assert.ok(response.ok, `Cannot read ${url}: HTTP ${response.status}`);
    const dir = await mkdtemp(join(tmpdir(), 'osmand-gpx-'));
    const file = join(dir, track + '.gpx');
    try {
        await writeFile(file, new Uint8Array(await response.arrayBuffer()));
        await actionOpenLocalTrack(track, dir);
    } finally {
        await rm(file, { force: true });
        await rmdir(dir);
    }
}

export default async function test() {
    await actionOpenMap();
    await openFixture();
    await clickBy(By.css("[testid='se-tab-points']"));
    await waitBy(By.id('se-waypoints-tab-content'));
    for (const [name, fields] of points) {
        const row = By.id('se-wpt-row-' + name);
        if (!(await waitBy(row, { optional: true, now: true }))) {
            await clickBy(By.id('se-wpt-group-header-SOTM'));
        }
        await clickBy(row);
        const details = By.id('se-wpt-item-info-' + name);
        for (const field of fields) {
            await matchTextBy(details, field);
        }
        assert.doesNotMatch(await getTextBy(details), /place_town|#ff4e4eff|(?:^|\n)circle(?:\n|$)/i);
        await clickBy(By.id('se-back-wpt-details'));
        await waitByRemoved(By.id('se-wpt-details'));
    }
    await actionFinish();
}
