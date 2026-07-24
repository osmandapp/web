import { Box, Button, Icon, ListItemText } from '@mui/material';
import { ReactComponent as EmptyIcon } from '../../assets/icons/ic_action_folder_open.svg';
import { ReactComponent as EmptyIconCloud } from '../../assets/icons/ic_action_folder_open_cloud_colored.svg';
import styles from './errors.module.css';
import CloudGpxUploader from '../../frame/util/CloudGpxUploader';
import { useContext } from 'react';
import { OBJECT_TYPE_FAVORITE } from '../../context/AppContext';
import EmptyLogin from '../../login/EmptyLogin';
import { FREE_ACCOUNT } from '../../manager/LoginManager';
import LoginContext from '../../context/LoginContext';
import { useTranslation } from 'react-i18next';
import ButtonPro from '../../frame/pro/ButtonPro';

export default function Empty({ title, text, folder = null, menu = null, checkLogin = true }) {
    const ltx = useContext(LoginContext);
    const { t } = useTranslation();

    const isFavoriteMenu = menu === OBJECT_TYPE_FAVORITE;
    const isFreeAccount = ltx.accountInfo?.account === FREE_ACCOUNT;
    const requiresProForTracks = !isFavoriteMenu && isFreeAccount;
    const showImportBtn = folder !== null && !requiresProForTracks;
    const displayText = requiresProForTracks
        ? t('empty_cloud_tracks_description')
        : text;
    const IconComponent = requiresProForTracks ? EmptyIconCloud : EmptyIcon;

    function checkLoginUser() {
        if (checkLogin) {
            return ltx.loginUser;
        }
        return true;
    }

    return (
        <>
            {checkLoginUser() ? (
                <Box className={styles.block} id="se-empty-page">
                    <Icon className={styles.icon}>
                        <IconComponent className={styles.icon} />
                    </Icon>
                    <Box className={styles.info}>
                        <ListItemText disableTypography={true} className={styles.title}>
                            {title}
                        </ListItemText>
                        <ListItemText disableTypography={true} className={styles.text}>
                            {displayText}
                        </ListItemText>
                    </Box>
                    {requiresProForTracks ? (
                        <ButtonPro />
                    ) : (
                        showImportBtn && (
                            <CloudGpxUploader folder={folder} style={styles.label}>
                                <Button id="se-import-first-track" className={styles.button} component="span">
                                    Import
                                </Button>
                            </CloudGpxUploader>
                        )
                    )}
                </Box>
            ) : (
                <EmptyLogin />
            )}
        </>
    );
}
