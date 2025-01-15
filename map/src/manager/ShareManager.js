import { apiGet, apiPost } from '../util/HttpApi';
import { quickNaNfix } from '../util/Utils';
import { FILE_WAS_DELETED } from './GlobalManager';
import { getShare } from './track/TracksManager';

export const SHARE_TYPE = 'share';
export const SHARE_FILE_TYPE = 'shared_with_me';
export const REQUEST_ACCESS_TYPE = 'request';
export const APPROVED_ACCESS_TYPE = 'approved';
export const APPROVED_ACCESS_TYPE_SERVER = ['read'];
export const PENDING_ACCESS_TYPE = 'pending';
export const BLOCKED_ACCESS_TYPE = 'blocked';

export async function getShareFileInfo({ file, ctx }) {
    //get share file info only if file is shared
    if (!getShare(file, ctx)) {
        ctx.setShareFile({
            mainFile: file,
            sharedObj: null,
        });
        return;
    }
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

export async function sendRequest(uuid, userName) {
    const res = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/share/request-access`, {
        params: {
            uuid,
            nickname: userName,
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

export async function changeShareTypeFile({ file, shareType, ctx }) {
    const res = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/share/change-share-type`, {
        params: {
            filePath: file.name,
            fileType: file.type,
            shareType: shareType,
            createIfNotExists: true,
        },
    });
    if (res.ok) {
        const text = await res.text();
        try {
            const updatedFile = JSON.parse(quickNaNfix(text));
            ctx.setShareFile((prev) => ({
                ...prev,
                sharedObj: {
                    ...prev.sharedObj,
                    file: updatedFile,
                },
            }));
        } catch (error) {
            const textLower = text.toLowerCase();
            if (textLower === FILE_WAS_DELETED) {
                ctx.setShareFile({
                    mainFile: file,
                    sharedObj: null,
                });
            } else {
                console.log('Error parsing share file:', text);
            }
        }
    }
}

export async function getShareWithMe({ type }) {
    const res = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/share/get-shared-with-me`, {
        params: {
            type,
        },
    });
    if (res.ok) {
        return await res.json();
    }
    return null;
}

export async function deleteSharedWithMe(name, type) {
    const res = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/share/remove-shared-with-me-file`, {
        params: {
            name,
            type,
        },
    });
    return res.ok;
}
