import { apiGet, apiPost } from '../util/HttpApi';

export const REQUEST_ACCESS_TYPE = 'request';
export const APPROVED_ACCESS_TYPE = 'approved';
export const APPROVED_ACCESS_TYPE_SERVER = ['read'];
export const PENDING_ACCESS_TYPE = 'pending';
export const BLOCKED_ACCESS_TYPE = 'blocked';

export async function getShareFileInfo({ file, ctx }) {
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

export async function sendRequest(uuid) {
    const res = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/share/request-access`, {
        params: {
            uuid,
        },
    });
    return res.ok;
}

export async function updateRequests(list, fileId) {
    const requests = list.reduce((req, lItem) => {
        req[lItem.id] = lItem.type;
        return req;
    }, {});
    const res = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/share/update-requests`, requests, {
        params: {
            fileId,
        },
    });
    if (res.ok) {
        return await res.json();
    } else {
        return null;
    }
}

export async function updateUserRequests(ctx) {
    if (ctx.updatedRequestList.length > 0) {
        const updatedFile = await updateRequests(ctx.updatedRequestList, ctx.shareFile?.sharedObj?.file.id);
        if (updatedFile) {
            ctx.setUpdatedRequestList([]);
            ctx.setShareFile((prev) => ({
                ...prev,
                sharedObj: {
                    ...prev.sharedObj,
                    file: updatedFile,
                },
            }));
        }
    }
}
