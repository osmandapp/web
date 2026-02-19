import { waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test({
    iconWpt = null,
    name = null,
    shape = 'circle',
    colorShape = '#f8931d',
    colorIcon = '#ffffff',
    hidden = false,
    isSelected = false,
}) {
    if (hidden) {
        await waitByRemoved(By.id(`se-poi-marker-background-${colorShape}-${shape}`));
        if (iconWpt) {
            await waitByRemoved(By.id(`se-poi-marker-icon-${iconWpt}-${colorIcon}-${name}`));
        }
        if (isSelected) {
            await waitByRemoved(By.id(`se-selected-marker-${name}`));
        }
    } else {
        await waitBy(By.id(`se-poi-marker-background-${colorShape}-${shape}`));
        if (iconWpt) {
            await waitBy(By.id(`se-poi-marker-icon-${iconWpt}-${colorIcon}-${name}`));
        }
        if (isSelected) {
            await waitBy(By.id(`se-selected-marker-${name}`));
        }
    }
}
