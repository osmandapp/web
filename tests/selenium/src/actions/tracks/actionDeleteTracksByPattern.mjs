import { By } from 'selenium-webdriver';
import { deleteTrack } from '../../util.mjs';
import { waitBy } from '../../lib.mjs';
import { driver } from '../../options.mjs';

export default async function test(trackName) {
    while (true) {
        await waitBy(By.css('[id^="se-cloud-track-"]'), { optional: true, idle: true });

        const elements = await driver.findElements(By.css('[id^="se-cloud-track-"]'));
        let found = false;

        for (const el of elements) {
            const text = await el.getText();
            if (text.trim().startsWith(trackName)) {
                const elementId = await el.getAttribute('id');
                await deleteTrack(elementId.replace('se-cloud-track-', ''));
                found = true;
                break;
            }
        }

        if (!found) break;
    }
}
