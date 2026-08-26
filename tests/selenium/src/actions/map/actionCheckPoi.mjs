import { enclose, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';
import { driver } from '../../options.mjs';

async function waitByPoiMarker({ iconWpt, colorIcon, name }) {
    const icon = By.id(`se-poi-marker-icon-${iconWpt}-${colorIcon}-${name}`);
    const marker = By.css(`[se-poi-name="${name}"]`);
    return await enclose(
        async () => {
            const elements = [...(await driver.findElements(icon)), ...(await driver.findElements(marker))];
            for (const element of elements) {
                if ((await element.getCssValue('visibility')) !== 'hidden') {
                    return element;
                }
            }
            return false;
        },
        { tag: `waitByPoiMarker (${name})` }
    );
}

async function waitByPoiMarkerRemoved({ iconWpt, colorIcon, name }) {
    await waitByRemoved(By.id(`se-poi-marker-icon-${iconWpt}-${colorIcon}-${name}`));
    await waitByRemoved(By.css(`[se-poi-name="${name}"]`));
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
            await waitByPoiMarkerRemoved({ iconWpt, colorIcon, name });
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
