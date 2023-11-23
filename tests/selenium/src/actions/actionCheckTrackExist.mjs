import { waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test(name) {
    return await waitBy(By.id(`se-cloud-track-${name}`));
}
