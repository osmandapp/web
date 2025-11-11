import React from 'react';
import { Box, Typography } from '@mui/material';
import ThickDivider from '../../frame/components/dividers/ThickDivider';
import ActionIconBtn from '../../frame/components/btns/ActionIconBtn';
import { ReactComponent as RemoveIcon } from '../../assets/icons/ic_action_remove_outlined.svg';
import { useTranslation } from 'react-i18next';
import styles from './routemenu.module.css';
import SubTitleMenu from '../../frame/components/titles/SubTitleMenu';

export default function SelectedTrackRow({ trackFile, onClear }) {
    const { t } = useTranslation();

    if (!trackFile) {
        return null;
    }

    return (
        <>
            <ThickDivider />
            <SubTitleMenu text={t('web:selected_track')} />
            <Box sx={{ px: 2 }}>
                <Box className={styles.navigationInputRow}>
                    <Box className={styles.inputContainer}>
                        <Typography>{trackFile.name}</Typography>
                    </Box>
                    <Box className={styles.actionButtons}>
                        <ActionIconBtn id="se-selected-track-remove" icon={<RemoveIcon />} onClick={onClear} />
                    </Box>
                </Box>
            </Box>
        </>
    );
}
