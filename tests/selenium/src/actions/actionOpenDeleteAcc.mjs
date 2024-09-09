import { driver, url } from '../options.mjs';

export default async function test() {
    const baseUrl = url.split('/map')[0];
    const URL = `${baseUrl}/map/delete-account`;
    await driver.get(URL);
}
