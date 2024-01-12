import { waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test({
    iconWpt = null,
    name = null,
    shape = 'circle',
    colorShape = '#f8931d',
    colorIcon = '#ffffff',
    hidden = false,
}) {
    if (hidden) {
        await waitByRemoved(By.id(`se-wpt-marker-background-${colorShape}-${shape}`));
        if (iconWpt) {
            await waitByRemoved(By.id(`se-wpt-marker-icon-${iconWpt}-${colorIcon}-${name}`));
        }
    } else {
        await waitBy(By.id(`se-wpt-marker-background-${colorShape}-${shape}`));
        if (iconWpt) {
            await waitBy(By.id(`se-wpt-marker-icon-${iconWpt}-${colorIcon}-${name}`));
        }
    }
}
