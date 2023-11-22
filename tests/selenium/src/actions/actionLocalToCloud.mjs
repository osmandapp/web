'use strict';

import { By } from 'selenium-webdriver';

import { enclose, waitBy, clickBy, enumerateIds } from '../lib.mjs';

/**
 * Action: actionLocalToCloud({mask = '*'})
 */
export default async function test({ mask = '*' } = {}) {
    const regexp = mask.replaceAll('.', '\\.').replaceAll('*', '.*');
    await clickBy(By.id('se-show-menu-planroute'));
    const locals = await enumerateIds('se-local-track-');

    for (let i = 0; i < locals.length; i++) {
        const name = locals[i].replace('se-local-track-', '');
        if (name.match(regexp)) {
            await saveToCloud(name);
        }
    }
}

export async function saveToCloud(name) {
    await clickBy(By.id('se-local-track-' + name));
    await clickBy(By.id('se-panel-button-save-to-cloud'));
    await clickBy(By.id('se-submit-save-to-cloud'));
    await clickBy(By.id('se-overwrite-cloud-track'), { optional: true });
    await waitBy(By.id('se-panel-button-edit-track'));

    await clickBy(By.id('se-button-back'));

    // se-menu-cloud-Tracks click is unstable
    // try to chain together inside enclose()
    await enclose(
        async () => {
            return await waitBy(By.id('se-cloud-track-' + name), { optional: true });
        },
        { tag: 'saveToCloud' }
    );
}
