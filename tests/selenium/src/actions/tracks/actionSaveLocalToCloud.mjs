import { By } from 'selenium-webdriver';
import { clickBy, replaceTextBy, waitBy } from '../../lib.mjs';
import actionIdleWait from '../actionIdleWait.mjs';

/**
 * Action: actionSaveLocalToCloud({ name, overwrite })
 *
 * Param: name <String> the name in the cloud, the one the app offers when omitted
 * Param: overwrite <Boolean> the open track is the edited copy of a cloud track, it is saved without the dialog
 *
 * test: the open local track is saved to the cloud and opened from there
 */
export default async function test({ name = null, overwrite = false } = {}) {
    // disabled while a segment is being routed
    await clickBy(By.css('#se-local-track-actions-save-to-cloud:not([disabled])'));
    if (name) {
        await replaceTextBy(By.id('se-save-track-name'), name);
    }
    if (!overwrite) {
        await clickBy(By.id('se-submit-save-to-cloud'));
    }
    await waitBy(By.id('se-track-actions-edit'));
    // saving to cloud reopens the track and refreshes the list
    await actionIdleWait();
}
