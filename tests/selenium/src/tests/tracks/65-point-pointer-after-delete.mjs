import { By } from 'selenium-webdriver';
import { clickBy, enclose, hasPointerNear, waitByRemoved } from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionCreateRoute, { SQUARE_ROUTE_POINTS } from '../../actions/tracks/actionCreateRoute.mjs';
import ignoreTest from '../../actions/actionIgnoreTest.mjs';

export default async function test() {
    ignoreTest();

    await actionOpenMap('#15/50.4925/30.5150');
    const [, second, third] = SQUARE_ROUTE_POINTS;
    await actionCreateRoute(SQUARE_ROUTE_POINTS);
    await clickBy(By.css("[testid='se-tab-track']"));

    await clickBy(By.id('se-track-point-1'));
    await waitPointer(second, true);
    await clickBy(By.id('se-track-point-delete-1'));
    await waitByRemoved(By.id('se-track-point-3'));

    // the pointer of a deleted point is gone
    await waitPointer(second, false);

    await clickBy(By.id('se-track-point-1'));
    await waitPointer(third, true);
    await clickBy(By.id('se-button-back'));
    await waitByRemoved(By.id('se-panel-button-undo'));

    // Back takes the pointer of the picked point off the map
    await waitPointer(third, false);

    await actionFinish();
}

async function waitPointer([lat, lng], shown) {
    await enclose(async () => (await hasPointerNear(lat, lng)) === shown, {
        tag: `pointer at ${lat}, ${lng} ${shown ? 'shown' : 'gone'}`,
    });
}
