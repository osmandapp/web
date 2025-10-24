import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import { clickBy, leftClickBy, matchTextBy, rightClickBy, waitBy } from '../../lib.mjs';
import { By } from 'selenium-webdriver';

const strings = [/Points: 3/, /Distance: 5\.[0-9]+ km/];

export default async function test() {
    await actionOpenMap('#14/50.4432/30.4995');
    await actionLogIn();

    await rightClickBy(50.4432, 30.4995);
    await waitBy(By.id('se-context-menu'));
    await clickBy(By.id('se-create-route-action'));

    await leftClickBy(50.447667, 30.505171);
    await leftClickBy(50.443622, 30.527744);

    await waitBy(By.className('leaflet-interactive'));
    await waitBy(By.id('se-infoblock-all'));
    await validateInfoBlockStrings(strings);

    await waitBy(By.id('se-main-graph'));
    await waitBy(By.id('se-road-attributes-graph'));

    await actionFinish();
}

async function validateInfoBlockStrings(strings) {
    for await (const match of strings) {
        await matchTextBy(By.id('se-infoblock-all'), match);
    }
}
