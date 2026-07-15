import { enclose, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import { driver } from '../../options.mjs';

async function waitByPoiMarker({ iconWpt, colorIcon, name }) {
    const icon = By.id(`se-poi-marker-icon-${iconWpt}-${colorIcon}-${name}`);
    const marker = By.css(`[se-poi-name="${name}"]`);
    return await enclose(
        async () => {
            const icons = await driver.findElements(icon);
            if (icons?.length > 0) {
                return icons[0];
            }
            const markers = await driver.findElements(marker);
            if (markers?.length > 0) {
                return markers[0];
            }
            return false;
        },
        { tag: `waitByPoiMarker (${name})` }
    );
}

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
            const colorHex = colorShape.replace(/^#/, '');
            await waitByRemoved(By.id(`se-selected-marker-${name}-${colorHex}`));
        }
    } else {
        await waitBy(By.id(`se-poi-marker-background-${colorShape}-${shape}`));
        if (iconWpt) {
            await waitByPoiMarker({ iconWpt, colorIcon, name });
        }
        if (isSelected) {
            const colorHex = colorShape.replace(/^#/, '');
            await waitBy(By.id(`se-selected-marker-${name}-${colorHex}`));
        }
    }
}
