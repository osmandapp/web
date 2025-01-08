import actionOpenMap from '../actions/map/actionOpenMap.mjs';
import actionLogIn from '../actions/login/actionLogIn.mjs';
import actionFinish from '../actions/actionFinish.mjs';
import { clickBy, matchInnerTextBy, waitBy, waitByRemoved } from '../lib.mjs';
import { By } from 'selenium-webdriver';
import ignoreTest from '../actions/actionIgnoreTest.mjs';

export default async function test() {
    ignoreTest();

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

    await matchInnerTextBy(By.id('se-photo-date'), '25 September 2014');
    await matchInnerTextBy(By.id('se-photo-author'), 'Quotsu');
    await matchInnerTextBy(By.id('se-photo-license'), 'SELF - CC-BY-SA-4.0');
    await matchInnerTextBy(
        By.id('se-photo-description'),
        "Монумент Незалежності України - пам'ятник, присвячений незалежності України."
    );

    await clickBy(By.id('se-close-photo'));
    await waitByRemoved(By.id('se-photo-modal-62534415'));

    await actionFinish();
}
