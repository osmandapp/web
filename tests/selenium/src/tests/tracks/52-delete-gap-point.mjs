import { By } from 'selenium-webdriver';
import { clickBy, matchPointsCount, waitRoutedLines } from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionCreateRoute, { SQUARE_ROUTE_POINTS } from '../../actions/tracks/actionCreateRoute.mjs';
import actionDeletePoint from '../../actions/tracks/actionDeletePoint.mjs';
import actionOpenPointMenu from '../../actions/tracks/actionOpenPointMenu.mjs';

export default async function test() {
    await actionOpenMap('#15/50.4925/30.5150');
    const routedLines = await actionCreateRoute(SQUARE_ROUTE_POINTS);

    // Split after the second point leaves no line between it and the third one
    await actionOpenPointMenu(SQUARE_ROUTE_POINTS[1]);
    await clickBy(By.id('se-point-context-menu-split-after'));
    await waitRoutedLines(routedLines - 1);

    // the point after a gap is deleted: the gap stretches to the next point, nothing is routed
    await actionDeletePoint(SQUARE_ROUTE_POINTS[2]);
    await matchPointsCount(3);
    await waitRoutedLines(routedLines - 2);

    // the gap point is deleted: the gap passes to the previous point, nothing is routed
    await actionDeletePoint(SQUARE_ROUTE_POINTS[1]);
    await matchPointsCount(2);
    await waitRoutedLines(routedLines - 3);

    await actionFinish();
}
