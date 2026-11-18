import { By } from 'selenium-webdriver';
import { clickBy, leftClickBy, matchPointsCount, rightClickBy, waitBy, waitRoutedLines } from '../../lib.mjs';

export const ROUTE_POINTS = [
    [50.492409, 30.525041],
    [50.496149, 30.514956],
    [50.501308, 30.514183],
];

export const SQUARE_ROUTE_POINTS = [
    [50.49, 30.51],
    [50.49, 30.52],
    [50.495, 30.52],
    [50.495, 30.51],
];

/**
 * Action: actionCreateRoute(points)
 *
 * Param: points <Array> [lat, lng] pairs: the route is created from the map context menu at the first one,
 * the next ones are added by clicks on the map
 *
 * Return: the number of routed lines on the map
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
    await matchPointsCount(points.length);

    return await waitRoutedLines(routedBefore + next.length);
}
