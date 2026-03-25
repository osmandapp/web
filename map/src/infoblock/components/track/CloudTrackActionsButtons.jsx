import React, { useContext, useState } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from '../../infoblock.module.css';
import BlueBtn from '../../../frame/components/btns/BlueBtn';
import AppContext from '../../../context/AppContext';
import TracksManager from '../../../manager/track/TracksManager';
import { getShareFileInfo } from '../../../manager/ShareManager';
import DownloadTrackDialog from '../../../dialogs/tracks/DownloadTrackDialog';
import { ReactComponent as HideTrackIcon } from '../../../assets/icons/ic_action_hide.svg';
import { ReactComponent as ShowTrackIcon } from '../../../assets/icons/ic_action_show.svg';
import { ReactComponent as AppearanceIcon } from '../../../assets/icons/ic_action_appearance.svg';
import { ReactComponent as EditIcon } from '../../../assets/icons/ic_action_edit_track.svg';
import { ReactComponent as ShareIcon } from '../../../assets/icons/ic_group.svg';
import { ReactComponent as DownloadIcon } from '../../../assets/icons/ic_action_gsave_dark.svg';

export default function CloudTrackActionsButtons({ track, toggleVisibility, checkedSwitch }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();
    const [openDownloadDialog, setOpenDownloadDialog] = useState(false);

    if (!track?.name) {
        return null;
    }

    const flexBtn = { flex: 1 };

    return (
        <>
            <Box className={styles.wptActionButtonContainer}>
                <BlueBtn
                    action={() => toggleVisibility(!checkedSwitch)}
                    id="se-track-actions-visibility"
                    icon={
                        checkedSwitch ? (
                            <HideTrackIcon className={styles.wptActionButtonIcon} />
                        ) : (
                            <ShowTrackIcon className={styles.wptActionButtonIcon} />
                        )
                    }
                    tooltipTitle={checkedSwitch ? t('web:hide_track') : t('web:make_track_visible')}
                    additionalStyle={flexBtn}
                />
                <BlueBtn
                    action={() => {}}
                    id="se-track-actions-appearance"
                    icon={<AppearanceIcon className={styles.wptActionButtonIconDisabled} />}
                    tooltipTitle={t('shared_string_appearance')}
                    additionalStyle={flexBtn}
                    disabled
                />
                <BlueBtn
                    action={() => TracksManager.handleEditCloudTrack(ctx)}
                    id="se-track-actions-edit"
                    icon={<EditIcon className={styles.wptActionButtonIcon} />}
                    tooltipTitle={t('shared_string_edit')}
                    additionalStyle={flexBtn}
                />
                <BlueBtn
                    action={() => getShareFileInfo({ file: track, ctx })}
                    id="se-track-actions-share"
                    icon={<ShareIcon className={styles.wptActionButtonIcon} />}
                    tooltipTitle={t('shared_string_share')}
                    additionalStyle={flexBtn}
                />
                <BlueBtn
                    action={() => setOpenDownloadDialog(true)}
                    id="se-track-actions-download"
                    icon={<DownloadIcon className={styles.wptActionButtonIcon} />}
                    tooltipTitle={t('shared_string_download')}
                    additionalStyle={flexBtn}
                />
            </Box>
            {openDownloadDialog && (
                <DownloadTrackDialog
                    dialogOpen={openDownloadDialog}
                    setDialogOpen={setOpenDownloadDialog}
                    track={track}
                    sharedFile={false}
                />
            )}
        </>
    );
}
