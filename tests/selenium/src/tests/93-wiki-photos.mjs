import actionOpenMap from '../actions/actionOpenMap.mjs';
import actionLogIn from '../actions/actionLogIn.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import { clickBy, matchInnerTextBy, waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    await clickBy(By.id('se-show-main-menu'), { optional: true });
    await clickBy(By.id('se-show-menu-search'));

    await waitByRemoved(By.id('se-wiki-place-progress'));
    await waitBy(By.id('se-wiki-places-items'));
    await waitBy(By.id('se-show-all-wiki-place'));
    await clickBy(By.id('se-show-all-wiki-place'));
    await waitBy(By.id('se-wiki-place-171599273'));
    await clickBy(By.id('se-wiki-place-171599273'));

    await waitBy(By.id('se-wpt-details'));
    await waitBy(By.id('se-wpt-photos'));

    await clickBy(By.id('se-photo-27933593'));
    await waitBy(By.id('se-photo-modal-27933593'));

    await matchInnerTextBy(By.id('se-photo-date'), 'Date: 5 August 2013');
    await matchInnerTextBy(By.id('se-photo-author'), 'Author: Tiia Monto');
    await matchInnerTextBy(By.id('se-photo-license'), 'License: CC-BY-SA-3.0 - TIIA MONTO');
    await matchInnerTextBy(
        By.id('se-photo-description'),
        'Description: Maidan Nezalezhnosti square in Kyiv. The Independence monument in on the left.'
    );

    await clickBy(By.id('se-next-photo'));
    await waitBy(By.id('se-photo-modal-62534415'));

    await matchInnerTextBy(By.id('se-photo-date'), 'Date: 30 July 2013');
    await matchInnerTextBy(By.id('se-photo-author'), 'Author: Haidamac');
    await matchInnerTextBy(By.id('se-photo-license'), 'License: SELF - CC-BY-SA-4.0');
    await matchInnerTextBy(By.id('se-photo-description'), 'Description: Монумент Независимости Украины, Киев');

    await clickBy(By.id('se-close-photo'));
    await waitByRemoved(By.id('se-photo-modal-62534415'));

    await actionFinish();
}
