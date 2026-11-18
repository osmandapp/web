import { By } from 'selenium-webdriver';
import { clickBy, leftClickBy, matchTextBy, rightClickBy, waitBy, waitRoutedLines } from '../../lib.mjs';

/**
 * Action: actionCreateRoute(points)
 *
 * Param: points <Array> [lat, lng] pairs: the route is created from the map context menu at the first one,
 * the next ones are added by clicks on the map
 *
 * test: the track has all the points, every new segment is routed
 */
export default async function test(points) {
    const routedBefore = await waitRoutedLines();
    const [first, ...next] = points;
    await rightClickBy(...first);
    await waitBy(By.id('se-context-menu'));
    await clickBy(By.id('se-create-route-action'));
    for (const point of next) {
        await leftClickBy(...point);
    }
    await matchTextBy(By.id('se-track-context-menu'), new RegExp(`Points: ${points.length}\\b`));
    await waitRoutedLines(routedBefore + next.length);
}
