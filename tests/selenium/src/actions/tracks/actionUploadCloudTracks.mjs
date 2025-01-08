import { enclose, waitBy } from '../../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test({ files }) {
    const uploader = async () => {
        const element = await waitBy(By.id('se-upload-cloud-gpx'));
        await element.sendKeys(files);
        return true;
    };

    await enclose(uploader, { tag: 'Upload cloud track' });
}
