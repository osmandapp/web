import { enclose, waitBy } from '../../lib.mjs';
import { By } from 'selenium-webdriver';

export default async function test({ files }) {
    const uploader = async () => {
        const element = await waitBy(By.id('se-upload-fav-group'));
        await element.sendKeys(files);
        return true;
    };

    await enclose(uploader, { tag: 'Upload favorite group' });
}
