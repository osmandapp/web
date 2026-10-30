import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import { clickBy, matchInnerTextBy, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();

    await clickBy(By.id('se-show-menu-search'));

    await waitByRemoved(By.id('se-wiki-place-progress'));
    await waitBy(By.id('se-wiki-places-items'));
    await waitBy(By.id('se-show-all-wiki-place'));
    await clickBy(By.id('se-show-all-wiki-place'));
    await waitBy(By.id('se-wiki-place-171599273'));
    await clickBy(By.id('se-wiki-place-171599273'));

    await waitBy(By.id('se-wpt-details'));
    await waitBy(By.id('se-wpt-photos'));

    // the photo is hidden until it is loaded
    await clickBy(By.css('#se-photo-35992817[style*="display: block"]'));
    await waitBy(By.css('.swiper-slide-active #se-photo-modal-35992817'));

    await matchInnerTextBy(By.id('se-photo-date'), 'Date: 10 November 2013');
    await matchInnerTextBy(By.id('se-photo-author'), 'Author: Pedro J Pacheco');
    await matchInnerTextBy(By.id('se-photo-license'), 'License: CC-BY-SA-4.0');
    await matchInnerTextBy(By.id('se-photo-description'), 'Description: Монумент Незалежності');

    await clickBy(By.id('se-next-photo'));
    await waitBy(By.css('.swiper-slide-active #se-photo-modal-43077173'));

    await matchInnerTextBy(By.id('se-photo-date'), '2 August 2013');
    await matchInnerTextBy(By.id('se-photo-author'), 'Klymenko Tatyana');
    await matchInnerTextBy(By.id('se-photo-license'), 'CC-BY-SA-4.0');
    await matchInnerTextBy(By.id('se-photo-description'), 'Монумент Незалежності, Київ, Незалежності Майдан');

    await clickBy(By.id('se-close-photo'));
    await waitByRemoved(By.id('se-photo-modal-43077173'));

    await actionFinish();
}
