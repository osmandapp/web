export default async function test({ driver, url, mobile, headless }) {
    await driver.get(url);
    await driver.actions().pause(3000).perform();
    throw new Error('failed');
}
