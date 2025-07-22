import actionOpenMap from '../actions/map/actionOpenMap.mjs';
import actionLogIn from '../actions/login/actionLogIn.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import { clickBy, leftClickBy, rightClickBy, waitBy } from '../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test() {
    await actionOpenMap('#14/50.4432/30.4995');
    await actionLogIn();

    await rightClickBy(50.4432, 30.4995);
    await waitBy(By.id('se-context-menu'));
    await clickBy(By.id('se-create-route-action'));

    await leftClickBy(50.442037, 30.496588);
    await leftClickBy(50.447667, 30.505171);
    await leftClickBy(50.443622, 30.527744);

    await actionFinish();
}
