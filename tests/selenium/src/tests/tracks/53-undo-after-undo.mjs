import { By } from 'selenium-webdriver';
import { clickBy, leftClickBy, matchPointsCount, waitRoutedLines } from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionCreateRoute, { SQUARE_ROUTE_POINTS } from '../../actions/tracks/actionCreateRoute.mjs';

export default async function test() {
    await actionOpenMap('#15/50.4925/30.5150');
    const [first, second, third, fourth] = SQUARE_ROUTE_POINTS;
    const routedLines = await actionCreateRoute([first, second, third]);

    await clickBy(By.id('se-panel-button-undo'));
    await matchPointsCount(2);
    await leftClickBy(...fourth);
    await matchPointsCount(3);
    await waitRoutedLines(routedLines);

    // the next undo takes back the point added after the first undo
    await clickBy(By.id('se-panel-button-undo'));
    await matchPointsCount(2);

    await actionFinish();
}
