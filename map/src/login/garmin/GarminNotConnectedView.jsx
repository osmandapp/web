import React from 'react';
import { Box, Typography } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import { ReactComponent as GarminIcon } from '../../assets/icons/ic_logo_garmin_connect_88.svg';
import PrimaryBtn from '../../frame/components/btns/PrimaryBtn';
import ThickDivider from '../../frame/components/dividers/ThickDivider';
import SubTitleMenu from '../../frame/components/titles/SubTitleMenu';
import SimpleText from '../../frame/components/other/SimpleText';
import styles from './garmin.module.css';

export default function GarminNotConnectedView() {
    const { t } = useTranslation();

    return (
        <>
            <Box className={styles.content}>
                <Box className={styles.iconWrapper}>
                    <GarminIcon className={styles.icon} />
                </Box>
                <Typography className={styles.title}>{t('web:garmin_sync_title')}</Typography>
                <Typography className={styles.description}>{t('web:garmin_sync_description')}</Typography>
                <Box className={styles.connectBtn}>
                    <PrimaryBtn text={t('web:shared_string_connect')} action={startGarminOAuth} />
                </Box>
            </Box>

            <ThickDivider mt={'0px'} mb={'0px'} />

            <SubTitleMenu text={t('web:garmin_help')} />
            <SimpleText text={t('web:garmin_help_new_activities')} maxLines={10} />
            <SimpleText
                text={<Trans i18nKey="web:garmin_help_supported_activities" components={{ strong: <strong /> }} />}
                maxLines={10}
            />
            <SimpleText
                text={<Trans i18nKey="web:garmin_help_historic_data" components={{ strong: <strong /> }} />}
                maxLines={10}
            />
            <ThickDivider mt={'0px'} mb={'0px'} />
        </>
    );
}

function startGarminOAuth() {
    globalThis.location.assign('/mapapi/garmin/connect/start');
}
