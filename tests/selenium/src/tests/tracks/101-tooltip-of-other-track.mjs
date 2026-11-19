import { By } from 'selenium-webdriver';
import { clickBy, getTrackLines, hoverBy, setMapCenter, waitBy, waitByRemoved } from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionUploadGpx from '../../actions/actionUploadGpx.mjs';
import ignoreTest from '../../actions/actionIgnoreTest.mjs';

const SHOWN = 'test-track-trkpt';
const EDITED = 'test-track-mixed';
const ZOOM = 16;
const TOOLTIP = By.xpath(`//*[contains(@class, 'leaflet-tooltip') and contains(., '${SHOWN}')]`);

export default async function test() {
    ignoreTest();

    await actionOpenMap();
    await actionUploadGpx({ mask: 'test-track-*.gpx', multiple: true });
    await clickBy(By.id('se-local-track-' + SHOWN));
    await waitBy(By.id('se-panel-button-undo'), { idle: true });
    await clickBy(By.id('se-button-back'));
    await waitByRemoved(By.id('se-panel-button-undo'));
    const [line] = await getTrackLines(SHOWN);
    await hoverLine(line.middle);
    await waitBy(TOOLTIP);

    await clickBy(By.id('se-local-track-' + EDITED));
    await waitBy(By.id('se-panel-button-undo'), { idle: true });
    await waitByRemoved(TOOLTIP);

    // the line of another visible track shows its name on hover while a track is edited
    await hoverLine(line.middle);
    await waitBy(TOOLTIP);

    await actionFinish();
}

async function hoverLine({ lat, lng }) {
    await setMapCenter(lat, lng, ZOOM);
    await hoverBy(lat + 0.001, lng + 0.001);
    await hoverBy(lat, lng);
}
