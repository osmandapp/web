import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import ActionIconBtn from '../../frame/components/btns/ActionIconBtn';
import { ReactComponent as RemoveIcon } from '../../assets/icons/ic_action_remove_outlined.svg';
import { useTranslation } from 'react-i18next';
import styles from './routemenu.module.css';
import SubTitleMenu from '../../frame/components/titles/SubTitleMenu';

export default function AvoidRoadsList({ avoidRoads, onRemove }) {
    const { t } = useTranslation();

    if (!avoidRoads || avoidRoads.length === 0) {
        return null;
    }

    return (
        <>
            <SubTitleMenu text={t('shared_string_avoid')} />
            <Box sx={{ px: 2 }}>
                {avoidRoads.map((item, ind) => (
                    <Box key={'avoid_' + (ind + 1)} className={styles.navigationInputRow}>
                        <Box className={styles.inputContainer}>
                            <Link
                                target="_blank"
                                rel="noopener"
                                href={'https://openstreetmap.org/way/' + Math.floor(item.id / 64)}
                                sx={{ textDecoration: 'none' }}
                            >
                                <Typography className={styles.inputFieldLink}>{item.name}</Typography>
                            </Link>
                        </Box>
                        <Box className={styles.actionButtons}>
                            <ActionIconBtn
                                id={`se-avoid-road-remove-${ind}`}
                                icon={<RemoveIcon />}
                                onClick={() => onRemove(ind)}
                            />
                        </Box>
                    </Box>
                ))}
            </Box>
        </>
    );
}
