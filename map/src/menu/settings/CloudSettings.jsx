import CloudTrash from './CloudTrash';
import CloudChanges from './CloudChanges';
import React from 'react';

export default function CloudSettings({ cloudSettings, setOpenCloudSettings }) {
    return cloudSettings.changes ? (
        <CloudChanges setOpenCloudSettings={setOpenCloudSettings} />
    ) : cloudSettings.trash ? (
        <CloudTrash setOpenCloudSettings={setOpenCloudSettings} />
    ) : null;
}
