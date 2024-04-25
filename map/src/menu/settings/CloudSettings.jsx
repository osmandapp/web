import CloudTrash from './CloudTrash';
import CloudChanges from './CloudChanges';
import React, { useEffect, useMemo, useState } from 'react';
import { apiGet } from '../../util/HttpApi';
import { format } from 'date-fns';
import * as locales from 'date-fns/locale';
import i18n from 'i18next';
import devList from '../../resources/apple_device_model_list.json';

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
                    addDevices: true,
                },
            });
            if (response.ok) {
                const res = response.data.allFiles.filter((f) => !f.name.toLowerCase().endsWith('.info'));
                setFilesLoading(false);
                preparedDevices(res);
                setAllFilesVersions(res);
            }
        };

        fetchData().then();
    }, []);

    function preparedDevices(files) {
        files.forEach((file) => {
            if (!file.deviceInfo) {
                return;
            }
            const modelInfo = file.deviceInfo.split('__model__');
            if (file.deviceInfo.startsWith('Apple')) {
                const updatedDevice = devList[modelInfo[1]];
                if (updatedDevice) {
                    file.deviceInfo = modelInfo[0] + ' ' + updatedDevice;
                }
            } else {
                file.deviceInfo =
                    modelInfo[0].charAt(0).toUpperCase() +
                    modelInfo[0].slice(1) +
                    ' ' +
                    modelInfo[1].charAt(0).toUpperCase() +
                    modelInfo[1].slice(1);
            }
        });
    }

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

    // Process and group files by updatetimems (month/year).
    function getPreparedFiles(files) {
        const filesByDate = {};
        const locale = locales[i18n.language] || locales.enUS;
        files.forEach((file) => {
            let dateKey = format(new Date(file.updatetimems), 'LLLL yyyy', { locale });
            dateKey = dateKey.charAt(0).toUpperCase() + dateKey.slice(1);
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
