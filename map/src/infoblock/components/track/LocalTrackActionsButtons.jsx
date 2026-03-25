import React, { useContext, useState } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from '../../infoblock.module.css';
import BlueBtn from '../../../frame/components/btns/BlueBtn';
import AppContext from '../../../context/AppContext';
import DownloadTrackDialog from '../../../dialogs/tracks/DownloadTrackDialog';
import { ReactComponent as CloudIcon } from '../../../assets/icons/ic_action_cloud.svg';
import { ReactComponent as DownloadIcon } from '../../../assets/icons/ic_action_gsave_dark.svg';

export default function LocalTrackActionsButtons({ track }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();
    const [openDownloadDialog, setOpenDownloadDialog] = useState(false);

    if (!track?.name) {
        return null;
    }

    return (
        <>
            <Box className={styles.wptActionButtonContainer}>
                <BlueBtn
                    action={() => {
                        ctx.selectedGpxFile.save = true;
                        ctx.setSelectedGpxFile({ ...ctx.selectedGpxFile });
                    }}
                    id="se-local-track-actions-save-to-cloud"
                    icon={<CloudIcon className={styles.wptActionButtonIcon} />}
                    tooltipTitle={t('web:save_to_cloud')}
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
        </>
    );
}
