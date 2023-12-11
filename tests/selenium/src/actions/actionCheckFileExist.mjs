import { waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test({ id = '' }) {
    return await waitBy(By.id(id), { optional: true });
}
