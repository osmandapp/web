import CloudTrash from './CloudTrash';
import CloudChanges from './CloudChanges';
import React, { useEffect, useState } from 'react';
import { apiGet } from '../../util/HttpApi';
import { GPX_FILE_TYPE } from '../../manager/track/TracksManager';
import { FAVORITE_FILE_TYPE } from '../../manager/FavoritesManager';

export default function CloudSettings({ cloudSettings, setOpenCloudSettings }) {
    const [allFilesVersions, setAllFilesVersions] = useState([]);
    const [filesLoading, setFilesLoading] = useState(false);

    useEffect(() => {
        setFilesLoading(true);
        const fetchData = async () => {
            const response = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/list-files`, {
                params: {
                    allVersions: true,
                },
            });
            if (response.ok) {
                const res = response.data.allFiles.filter(
                    (f) =>
                        (f.type === GPX_FILE_TYPE || f.type === FAVORITE_FILE_TYPE) &&
                        f.name.toLowerCase().endsWith('.gpx')
                );
                setFilesLoading(false);
                setAllFilesVersions(res);
            }
        };

        fetchData().then();
    }, []);

    return cloudSettings.changes ? (
        <CloudChanges
            setOpenCloudSettings={setOpenCloudSettings}
            allFilesVersions={allFilesVersions}
            filesLoading={filesLoading}
        />
    ) : cloudSettings.trash ? (
        <CloudTrash setOpenCloudSettings={setOpenCloudSettings} />
    ) : null;
}
