import { waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test({ hidden = false, classname }) {
    if (hidden) {
        if (classname) {
            await waitByRemoved(By.css(`[class*="${classname}"]`));
        }
    } else {
        if (classname) {
            await waitBy(By.css(`[class*="${classname}"]`));
        }
    }
}
