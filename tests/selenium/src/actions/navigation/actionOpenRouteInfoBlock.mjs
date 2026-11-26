import { By } from 'selenium-webdriver';
import { clickBy, enclose, enumerateIds } from '../../lib.mjs';

const ROUTE_TRACK_ACTION_BUTTONS = [
    'se-route-track-actions-edit',
    'se-route-track-actions-save-to-cloud',
    'se-route-track-actions-download',
];

/**
 * Action: actionOpenRouteInfoBlock()
 *
 * test: the info of the built route is open with its edit, save and download buttons
 */
export default async function test() {
    await clickBy(By.id('se-route-more-information'));
    await enclose(
        async () => {
            const actual = await enumerateIds('se-route-track-actions-');
            return JSON.stringify(actual) === JSON.stringify(ROUTE_TRACK_ACTION_BUTTONS);
        },
        { tag: 'openRouteInfoBlock' }
    );
}
