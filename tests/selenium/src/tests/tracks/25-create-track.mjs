import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import { clickBy, leftClickBy, matchTextBy, rightClickBy, waitBy } from '../../lib.mjs';
import { By } from 'selenium-webdriver';

const strings = [/Points: 3/, /Distance: 3\.[0-5]+ km/];

export default async function test() {
    await actionOpenMap('#15/50.4946/30.5220');
    await actionLogIn();

    await rightClickBy(50.492409, 30.525041);
    await waitBy(By.id('se-context-menu'));
    await clickBy(By.id('se-create-route-action'));

    await leftClickBy(50.496149, 30.514956);
    await leftClickBy(50.501308,30.514183);

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
