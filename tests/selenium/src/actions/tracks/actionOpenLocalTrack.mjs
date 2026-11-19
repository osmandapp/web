import { By } from 'selenium-webdriver';
import { clickBy, waitBy } from '../../lib.mjs';
import actionUploadGpx from '../actionUploadGpx.mjs';

/**
 * Action: actionOpenLocalTrack(name)
 *
 * Param: name <String> gpx file of the gpx folder without its extension
 *
 * test: the gpx is a local track open in the editor
 */
export default async function test(name) {
    await actionUploadGpx({ mask: name + '.gpx' });
    await clickBy(By.id('se-local-track-' + name));
    await waitBy(By.id('se-panel-button-undo'), { idle: true });
}
