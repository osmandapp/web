import { waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionIdleWait from './actionIdleWait.mjs';

export default async function test({ id = '' }) {
    await actionIdleWait();
    return await waitBy(By.id(id));
}
