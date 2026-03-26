import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from '../../infoblock.module.css';
import BlueBtn from '../../../frame/components/btns/BlueBtn';
import DownloadTrackDialog from '../../../dialogs/tracks/DownloadTrackDialog';
import { ReactComponent as DownloadIcon } from '../../../assets/icons/ic_action_gsave_dark.svg';

export default function ShareTrackActionsButtons({ track }) {
    const { t } = useTranslation();
    const [openDownloadDialog, setOpenDownloadDialog] = useState(false);

    if (!track?.name) {
        return null;
    }

    return (
        <>
            <Box className={styles.wptActionButtonContainer}>
                <BlueBtn
                    action={() => setOpenDownloadDialog(true)}
                    id="se-share-track-actions-download"
                    icon={<DownloadIcon className={styles.wptActionButtonIcon} />}
                    tooltipTitle={t('shared_string_download')}
                    additionalStyle={{ flex: 1 }}
                />
            </Box>
            {openDownloadDialog && (
                <DownloadTrackDialog
                    dialogOpen={openDownloadDialog}
                    setDialogOpen={setOpenDownloadDialog}
                    track={track}
                    sharedFile={true}
                />
            )}
        </>
    );
}
