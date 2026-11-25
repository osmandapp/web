import { By } from 'selenium-webdriver';
import { clickBy, waitBy } from '../../lib.mjs';
import actionUploadGpx from '../actionUploadGpx.mjs';

/**
 * Action: actionOpenLocalTrack(name, folder)
 *
 * Param: name <String> gpx file name without its extension
 * Param: folder <String> directory containing the file
 *
 * test: the gpx is a local track open in the editor
 */
export default async function test(name, folder = 'gpx') {
    await actionUploadGpx({ mask: name + '.gpx', folder });
    await clickBy(By.id('se-local-track-' + name));
    await waitBy(By.id('se-panel-button-undo'), { idle: true });
}
