export default async function test({ driver, url /*, mobile, headless */ }) {
    await driver.get(url);
    await driver.actions().pause(1000).perform();
    throw new Error('under construction');
}
