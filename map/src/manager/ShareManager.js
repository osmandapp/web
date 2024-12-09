import { apiGet, apiPost } from '../util/HttpApi';

export async function openShareFileMenu({ file, ctx }) {
    const res = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/share/get-share-file-info`, {
        params: {
            fileName: file.name,
            fileType: file.type,
            createIfNotExists: true,
        },
    });
    if (res.ok) {
        const shareFile = await res.json();
        ctx.setShareFile({
            mainFile: file,
            sharedObj: shareFile,
        });
    }
}

export async function generateLink({ file, publicAccess }) {
    const res = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/share/generate-link`, '', {
        params: {
            fileName: file.name,
            fileType: file.type,
            publicAccess,
        },
    });
    if (res.ok) {
        return await res.json();
    } else {
        return null;
    }
}
