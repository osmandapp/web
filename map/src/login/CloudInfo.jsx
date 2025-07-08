import React, { useContext, useState } from 'react';
import AppBarWithBtns from '../frame/components/header/AppBarWithBtns';
import DefaultItem from '../frame/components/items/DefaultItem';
import { ReactComponent as FilesIcon } from '../assets/icons/ic_action_file_info.svg';
import { ReactComponent as StorageIcon } from '../assets/icons/ic_action_storage.svg';
import { ReactComponent as CloudIcon } from '../assets/icons/ic_action_cloud.svg';
import { useTranslation } from 'react-i18next';
import AppContext from '../context/AppContext';
import LoginContext from '../context/LoginContext';
import DividerWithMargin from '../frame/components/dividers/DividerWithMargin';
import GrayBtnWithBlueHover from '../frame/components/btns/GrayBtnWithBlueHover';
import { Box } from '@mui/material';
import loginStyles from './login.module.css';
import ColorBlock from '../frame/components/other/ColorBlock';
import DownloadBackupDialog from './dialogs/DownloadBackupDialog';
import { useWindowSize } from '../util/hooks/useWindowSize';
import { formatString } from '../manager/SettingsManager';

export default function CloudInfo({ setOpenCloudInfo }) {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);

    const { t } = useTranslation();
    const [openDownloadBackupDialog, setOpenDownloadBackupDialog] = useState(false);
    const [width] = useWindowSize();
    const widthDialog = width / 2 < 450 ? width * 0.75 : width / 2;

    function getTotalFiles() {
        return formatString(t('web:total_files_desc'), [ctx.listFiles.totalFiles, ctx.listFiles.totalFileVersions]);
    }

    function getStorageInfo() {
        return `${(ctx.listFiles.totalFileSize / 1024.0 / 1024.0).toFixed(1)} MB`;
    }

    function getCloudStorageInfo() {
        return `${(ctx.listFiles.totalZipSize / 1024 / 1024.0).toFixed(1)} MB ${
            ltx.accountInfo && `of ${ltx.accountInfo.maxAccSize / (1024 * 1024)} MB`
        }`;
    }

    return (
        <>
            <AppBarWithBtns
                id={'cloud-info'}
                header={t('osmand_cloud')}
                hasBackBtn={true}
                leftBtnAction={() => {
                    setOpenCloudInfo(false);
                }}
            />
            <Box className={loginStyles.block} sx={{ mt: -2 }}>
                <DefaultItem
                    id={'cloud-info-total-files'}
                    icon={<FilesIcon />}
                    name={t('web:total_files_title')}
                    additionalInfo={getTotalFiles()}
                    revertText={true}
                />
                <DividerWithMargin margin={'64px'} />
                <DefaultItem
                    id={'cloud-info-storage'}
                    icon={<StorageIcon />}
                    name={t('web:storage')}
                    additionalInfo={getStorageInfo()}
                    revertText={true}
                />
                <DividerWithMargin margin={'64px'} />
                <DefaultItem
                    id={'cloud-info-cloud-storage'}
                    icon={<CloudIcon />}
                    name={t('web:storage_used')}
                    additionalInfo={getCloudStorageInfo()}
                    revertText={true}
                />
                <GrayBtnWithBlueHover
                    id={'se-download-backup'}
                    action={() => setOpenDownloadBackupDialog(true)}
                    text={t('download_all')}
                    additionalStyle={{ mt: 1.5, mb: -1.5 }}
                />
            </Box>
            <ColorBlock color={'#f0f0f0'} />
            {openDownloadBackupDialog && (
                <DownloadBackupDialog
                    openDownloadBackupDialog={openDownloadBackupDialog}
                    setOpenDownloadBackupDialog={setOpenDownloadBackupDialog}
                    widthDialog={widthDialog}
                />
            )}
        </>
    );
}
