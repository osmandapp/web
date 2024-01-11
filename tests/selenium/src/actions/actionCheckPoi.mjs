import { waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test({
    iconWpt = null,
    name = null,
    shape = 'circle',
    colorShape = '#f8931d',
    colorIcon = '#ffffff',
    hidden = false,
}) {
    await waitBy(By.id(`se-wpt-marker-background-${colorShape}-${shape}`), { hidden: hidden });
    if (iconWpt) {
        await waitBy(By.id(`se-wpt-marker-icon-${iconWpt}-${colorIcon}-${name}`), { hidden: hidden });
    }
}
