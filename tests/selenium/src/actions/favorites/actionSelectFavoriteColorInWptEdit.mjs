import { clickBy, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';

/**
 * In add/edit favorite (WptEditPanel), open the color selection drawer, pick a color, return to the form.
 * If the user's cloud palette is empty, opens the picker dialog and applies the default selection.
 */
export default async function actionSelectFavoriteColorInWptEdit() {
    await clickBy(By.id('se-fav-color-row'));
    await waitBy(By.id('se-back-color-selection-panel'));
    const swatch = await waitBy(By.id('se-color-item-0'), { optional: true, idle: true });
    if (swatch) {
        await clickBy(By.id('se-color-item-0'));
    } else {
        await clickBy(By.id('se-color-add-btn'));
        await waitBy(By.id('se-color-picker-dialog'));
        await clickBy(By.id('se-color-picker-apply'));
        await waitByRemoved(By.id('se-color-picker-dialog'));
    }
    await clickBy(By.id('se-back-color-selection-panel'));
    await waitByRemoved(By.id('se-back-color-selection-panel'));
}
