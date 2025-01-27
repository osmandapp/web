import { By } from 'selenium-webdriver';
import { deleteTrack } from '../../util.mjs';
import { waitBy } from '../../lib.mjs';

export default async function test(trackName) {
    let existResult;
    do {
        existResult = await waitBy(By.css(`[id^="se-cloud-track-${trackName}"]`), { optional: true, idle: true });
        if (existResult) {
            const elementId = await existResult.getAttribute('id');
            await deleteTrack(elementId.replace('se-cloud-track-', ''));
        }
    } while (existResult);
}
