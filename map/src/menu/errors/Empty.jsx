import { Box, Button, Icon, ListItemText } from '@mui/material';
import { ReactComponent as EmptyIcon } from '../../assets/icons/ic_action_folder_open.svg';
import styles from './errors.module.css';
import CloudGpxUploader from '../../frame/components/util/CloudGpxUploader';
import { useContext } from 'react';
import AppContext, { OBJECT_TYPE_FAVORITE } from '../../context/AppContext';
import EmptyLogin from './EmptyLogin';
import { FREE_ACCOUNT } from '../../manager/LoginManager';

export default function Empty({ title, text, folder = null, menu = null }) {
    const ctx = useContext(AppContext);

    function showImportBtn() {
        if (folder !== null) {
            if (menu === OBJECT_TYPE_FAVORITE) {
                return true;
            } else {
                if (ctx.accountInfo?.account !== FREE_ACCOUNT) {
                    return true;
                }
            }
        }
        return false;
    }

    return (
        <>
            {ctx.loginUser ? (
                <Box className={styles.block}>
                    <Icon className={styles.icon}>
                        <EmptyIcon className={styles.icon} />
                    </Icon>
                    <Box className={styles.info}>
                        <ListItemText disableTypography={true} className={styles.title}>
                            {title}
                        </ListItemText>
                        <ListItemText disableTypography={true} className={styles.text}>
                            {text}
                        </ListItemText>
                    </Box>
                    {showImportBtn() && (
                        <CloudGpxUploader folder={folder} style={styles.label}>
                            <Button id="se-import-first-track" className={styles.button} component="span">
                                Import
                            </Button>
                        </CloudGpxUploader>
                    )}
                </Box>
            ) : (
                <EmptyLogin />
            )}
        </>
    );
}
