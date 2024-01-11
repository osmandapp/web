import { waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import actionIdleWait from './actionIdleWait.mjs';
import { TIMEOUT_OPTIONAL } from '../options.mjs';

export default async function test({ id = '', optional = true, timeout = TIMEOUT_OPTIONAL }) {
    await actionIdleWait();
    return await waitBy(By.id(id), { optional: optional, timeout: timeout });
}
