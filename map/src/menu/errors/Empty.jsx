import { Box, Button, Icon, ListItemText } from '@mui/material';
import { ReactComponent as EmptyIcon } from '../../assets/icons/ic_action_folder_open.svg';
import styles from './errors.module.css';
import CloudGpxUploader from '../../frame/components/util/CloudGpxUploader';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import EmptyLogin from './EmptyLogin';

export default function Empty({ title, text, folder = null }) {
    const ctx = useContext(AppContext);

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
                    {folder && (
                        <CloudGpxUploader folder={folder} style={styles.label}>
                            <Button className={styles.button} component="span">
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
