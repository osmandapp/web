import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { FREE_ACCOUNT } from '../../manager/LoginManager';
import { DEFAULT_GROUP_NAME } from '../../manager/track/TracksManager';
import LoginContext from '../../context/LoginContext';
import useCloudGpxImport from '../../util/hooks/useCloudGpxImport';

export default function CloudGpxUploader({ children, folder = DEFAULT_GROUP_NAME, style = null }) {
    const ltx = useContext(LoginContext);
    const { importGpxFiles } = useCloudGpxImport();

    const fileSelected = (e) => {
        importGpxFiles(e.target.files, folder);
    };

    const HiddenInput = styled('input')({ display: 'none' });

    return (
        <label className={style} htmlFor="se-upload-cloud-gpx">
            <HiddenInput
                disabled={ltx.accountInfo?.account === FREE_ACCOUNT}
                id="se-upload-cloud-gpx"
                accept=".gpx, .kmz, .kml"
                multiple
                type="file"
                onChange={fileSelected}
            />
            {children}
        </label>
    );
}
