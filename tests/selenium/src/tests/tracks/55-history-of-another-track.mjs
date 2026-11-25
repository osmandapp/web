import { validateEnabled } from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import actionCreateRoute, { SQUARE_ROUTE_POINTS } from '../../actions/tracks/actionCreateRoute.mjs';

export default async function test() {
    await actionOpenMap('#15/50.4925/30.5150');
    const [first, second] = SQUARE_ROUTE_POINTS;
    await actionCreateRoute([first]);
    await validateEnabled('se-panel-button-undo', false);

    // a new track with as many points as the open one starts a history of its own
    await actionCreateRoute([second]);
    await validateEnabled('se-panel-button-undo', false);

    await actionFinish();
}
