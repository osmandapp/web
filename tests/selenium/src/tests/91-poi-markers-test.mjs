import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import { clickBy, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    const category = 'Cafe and restaurant';
    const iconWpt1 = 'amenity_restaurant';
    const iconWpt2 = 'amenity_cafe';

    const shape = 'circle';
    const colorShape = '#f8931d';
    const colorIcon = '#ffffff';

    await checkPoi({ iconWpt1, iconWpt2, shape, colorShape, colorIcon, hidden: true });

    await waitBy(By.id('se-poi-panel-button'));
    await clickBy(By.id('se-poi-panel-button'));

    await waitBy(By.id('se-open-poi-dialog'));
    await clickBy(By.id(`se-poi-category-${category}`));

    await checkPoi({ iconWpt1, iconWpt2, shape, colorShape, colorIcon });

    await actionFinish();
}

async function checkPoi({ iconWpt1 = null, iconWpt2 = null, shape, colorShape, colorIcon, hidden = false }) {
    await waitBy(By.id(`se-wpt-marker-background-${colorShape}-${shape}`), { hidden: hidden });
    if (iconWpt1) {
        await waitBy(By.id(`se-wpt-marker-icon-${iconWpt1}-${colorIcon}`), { hidden: hidden });
    }
    if (iconWpt2) {
        await waitBy(By.id(`se-wpt-marker-icon-${iconWpt2}-${colorIcon}`), { hidden: hidden });
    }
}
