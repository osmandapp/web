import CloudTrash from './CloudTrash';
import CloudChanges from './CloudChanges';
import React, { useEffect, useMemo, useState } from 'react';
import { apiGet } from '../../util/HttpApi';
import { GPX_FILE_TYPE } from '../../manager/track/TracksManager';
import { FAVORITE_FILE_TYPE } from '../../manager/FavoritesManager';

export default function CloudSettings({ cloudSettings, setOpenCloudSettings }) {
    const [allFilesVersions, setAllFilesVersions] = useState([]);
    const [trashFiles, setTrashFiles] = useState([]);
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

    useEffect(() => {
        const groupedFiles = allFilesVersions.reduce((v, file) => {
            (v[file.name] = v[file.name] || []).push(file);
            return v;
        }, {});

        const latestFiles = Object.values(groupedFiles).map((files) =>
            files.reduce((latest, current) => (current.updatetimems > latest.updatetimems ? current : latest))
        );

        const trash = latestFiles.filter((file) => file.zipSize <= 0);
        setTrashFiles(trash);
    }, [allFilesVersions]);

    const changesListItems = useMemo(() => {
        return getPreparedFiles(allFilesVersions);
    }, [allFilesVersions]);

    const trashListItems = useMemo(() => {
        return getPreparedFiles(trashFiles);
    }, [trashFiles]);

    // Processes and groups files by their update month and year.
    function getPreparedFiles(files) {
        const filesByDate = {};
        files.forEach((file) => {
            const dateKey = new Date(file.updatetimems).toLocaleString('default', { month: 'long', year: 'numeric' });
            if (!filesByDate[dateKey]) {
                filesByDate[dateKey] = [];
            }
            filesByDate[dateKey].push(file);
        });

        const sortedDates = Object.keys(filesByDate).sort((a, b) => new Date(b) - new Date(a));

        return sortedDates.reduce((arr, date) => {
            arr.push({ type: 'month', date, id: `month-${date}` });
            const sortedFiles = filesByDate[date].sort((a, b) => b.updatetimems - a.updatetimems);
            sortedFiles.forEach((file, index) =>
                arr.push({ type: 'file', file, id: file.id, isLast: index === sortedFiles.length - 1 })
            );
            return arr;
        }, []);
    }

    return cloudSettings.changes ? (
        <CloudChanges
            files={changesListItems}
            setOpenCloudSettings={setOpenCloudSettings}
            filesLoading={filesLoading}
        />
    ) : cloudSettings.trash ? (
        <CloudTrash files={trashListItems} setOpenCloudSettings={setOpenCloudSettings} filesLoading={filesLoading} />
    ) : null;
}
