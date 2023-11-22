import {clickBy, waitBy} from "../lib.mjs";
import {By} from "selenium-webdriver";
import {driver} from "../options.mjs";

export default async function test(name) {
    await waitBy(By.id(`se-menu-cloud-${name}`));
    await clickBy(By.id('se-folder-actions-button'));
    await waitBy(By.id('se-folder-actions'));
    await clickBy(By.id('se-folder-actions-delete'));
    await waitBy(By.id('se-delete-folder-dialog'));
    await clickBy(By.id('se-delete-folder-submit'));

    const found = await driver.findElements(By.id(`se-menu-cloud-${name}`));

    return !found || found.length === 0;
}