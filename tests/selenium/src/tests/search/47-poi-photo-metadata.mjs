import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionFinish from '../../actions/actionFinish.mjs';
import { driver, url } from '../../options.mjs';
import { clickBy, matchInnerTextBy, waitBy, waitByRemoved } from '../../lib.mjs';
import { By } from 'selenium-webdriver';

// the photo of the wikimedia_commons tag shows its date, author, license and description (web#1849)
export default async function test() {
    // west of UTC a date without a time used to fall on the previous day
    await driver.sendDevToolsCommand('Emulation.setTimezoneOverride', { timezoneId: 'America/New_York' });

    await actionOpenMap();

    await openPoi({ name: 'Naš tovor', type: 'Artwork', pin: '43.161537,16.694315', hash: '#20/43.16150/16.69413' });
    await openPhoto(151638755);
    await matchInnerTextBy(By.id('se-photo-date'), 'Date: 19 August 2024');
    await matchInnerTextBy(By.id('se-photo-author'), 'Author: Sm4rk0');
    await matchInnerTextBy(By.id('se-photo-license'), 'License: CC-BY-SA-4.0');
    await matchInnerTextBy(By.id('se-photo-description'), 'Description: A monument to a donkey in Jelsa');
    await closePhoto(151638755);

    // the file name has a space, the description on Commons is in Italian only
    await openPoi({ name: 'Pirja', type: 'Fountain', pin: '43.51004,16.43754', hash: '#18/43.51004/16.43754' });
    await openPhoto(123261428);
    await matchInnerTextBy(By.id('se-photo-date'), 'Date: 10 September 2022');
    await matchInnerTextBy(By.id('se-photo-author'), 'Author: Ivan Ruggiero');
    await matchInnerTextBy(By.id('se-photo-description'), 'Description: Fontana artistica a Split, Croazia');
    await closePhoto(123261428);

    // the file has no date
    await openPoi({
        name: 'Kapela sv. Antuna',
        type: 'Wayside shrine',
        pin: '43.18216,16.56166',
        hash: '#18/43.18216/16.56166',
    });
    await openPhoto(143028074);
    await waitBy(By.xpath("//*[text()='Date: -']"));
    await matchInnerTextBy(By.id('se-photo-author'), 'Author: Emaus78');
    await matchInnerTextBy(By.id('se-photo-description'), 'Description: Kapelica sv. Antunu u Galiji');
    await closePhoto(143028074);

    // the file of the tag is among the wikidata photos too and is shown once
    await openPoi({
        name: 'Svjetionik Pomorac',
        type: 'Lighthouse',
        pin: '43.50089,16.44318',
        hash: '#18/43.50089/16.44318',
    });
    await waitBy(By.xpath("//*[@id='se-wpt-photos']//button[text()='Show all (11)']"));

    await actionFinish();
}

async function openPoi({ name, type, pin, hash }) {
    await driver.get(
        url.split('#')[0] +
            `poi/?name=${encodeURIComponent(name)}&type=${encodeURIComponent(type)}&pin=${encodeURIComponent(pin)}${hash}`
    );
    await waitBy(By.id('se-wpt-photos'));
}

async function openPhoto(mediaId) {
    // the photo is hidden until it is loaded
    await clickBy(By.css(`#se-photo-${mediaId}[style*="display: block"]`));
    await waitBy(By.css(`.swiper-slide-active #se-photo-modal-${mediaId}`));
}

async function closePhoto(mediaId) {
    await clickBy(By.id('se-close-photo'));
    await waitByRemoved(By.id(`se-photo-modal-${mediaId}`));
}
