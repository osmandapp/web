import React, { useContext, useState } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from '../../infoblock.module.css';
import BlueBtn from '../../../frame/components/btns/BlueBtn';
import AppContext from '../../../context/AppContext';
import DownloadTrackDialog from '../../../dialogs/tracks/DownloadTrackDialog';
import { ReactComponent as CloudIcon } from '../../../assets/icons/ic_action_cloud.svg';
import { ReactComponent as DownloadIcon } from '../../../assets/icons/ic_action_gsave_dark.svg';
import LoginContext from '../../../context/LoginContext';
import { FREE_ACCOUNT } from '../../../manager/LoginManager';
import UnavailableActionAlert from '../../../menu/errors/UnavailableActionAlert';

export default function LocalTrackActionsButtons({ track }) {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);
    const { t } = useTranslation();
    const [openDownloadDialog, setOpenDownloadDialog] = useState(false);
    const [openUnavailableDialog, setOpenUnavailableDialog] = useState(false);
    const isSaveDisabled = !ltx.loginUser;

    if (!track?.name) {
        return null;
    }

    return (
        <>
            <Box className={styles.wptActionButtonContainer}>
                <BlueBtn
                    action={() => {
                        if (ltx.accountInfo?.account === FREE_ACCOUNT) {
                            setOpenUnavailableDialog(true);
                            return;
                        }
                        ctx.selectedGpxFile.save = true;
                        ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
                    }}
                    id="se-local-track-actions-save-to-cloud"
                    icon={
                        <CloudIcon
                            className={isSaveDisabled ? styles.wptActionButtonIconDisabled : styles.wptActionButtonIcon}
                        />
                    }
                    tooltipTitle={t('web:save_to_cloud')}
                    disabled={isSaveDisabled}
                    additionalStyle={{ flex: 1 }}
                />
                <BlueBtn
                    action={() => setOpenDownloadDialog(true)}
                    id="se-local-track-actions-download"
                    icon={<DownloadIcon className={styles.wptActionButtonIcon} />}
                    tooltipTitle={t('shared_string_download')}
                    additionalStyle={{ flex: 1 }}
                />
            </Box>
            {openDownloadDialog && (
                <DownloadTrackDialog dialogOpen={openDownloadDialog} setDialogOpen={setOpenDownloadDialog} />
            )}
            <UnavailableActionAlert open={openUnavailableDialog} onClose={() => setOpenUnavailableDialog(false)} />
        </>
    );
}
