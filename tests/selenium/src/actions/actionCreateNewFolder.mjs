import {clickBy, waitBy} from "../lib.mjs";
import {By} from "selenium-webdriver";
import {driver} from "../options.mjs";
import actionDeleteFolder from '../actions/actionDeleteFolder.mjs';

export default async function test(name) {

    let found = await driver.findElements(By.id(`se-menu-cloud-${name}`));
    if (found && found.length > 0) {
        found = await actionDeleteFolder(name);
    }
    if (!found || found.length === 0) {
        await clickBy(By.id('se-add-folder'));
        const input = await waitBy(By.id('se-add-folder-input'));
        await input.sendKeys(`${name}`);
        await clickBy(By.id('se-add-folder-submit'));
        await waitBy(By.id(`se-menu-cloud-${name}`));
        await clickBy(By.id(`se-menu-cloud-${name}`));
    }
}