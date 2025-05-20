import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import { AppBar, Box, Divider, IconButton, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { ReactComponent as CloseIcon } from '../../../assets/icons/ic_action_close.svg';
import { ReactComponent as LogoProIcon } from '../../../assets/ic_action_osmand_pro_logo_colored.svg';
import styles from './pro.module.css';
import GrayBtnWithBlueHover from '../btns/GrayBtnWithBlueHover';

export default function ProFeatures() {
    const ctx = useContext(AppContext);

    function close() {
        ctx.setOpenProFeatures(null);
    }

    function openLink(url) {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <>
            <AppBar position="static" className={styles.appBar}>
                <IconButton variant="contained" type="button" className={styles.closeIcon} onClick={close}>
                    <CloseIcon />
                </IconButton>
            </AppBar>
            {ctx.openProFeatures && ctx.openProFeatures.type}
            <Divider />
            <Box className={styles.body}>
                <ListItem className={styles.bodyInfo}>
                    <ListItemIcon className={styles.bodyIcon}>
                        <LogoProIcon />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography className={styles.text1}>OsmAnd Pro</Typography>
                        <Typography className={styles.text2}>Cross-platform</Typography>
                    </ListItemText>
                </ListItem>
                <GrayBtnWithBlueHover
                    action={() => openLink('https://play.google.com/store/apps/details?id=net.osmand')}
                    text="Google Play"
                    span={true}
                />
                <GrayBtnWithBlueHover
                    action={() => openLink('https://apps.apple.com/us/app/osmand-maps-travel-navigate/id934850257')}
                    text="Apple App Store"
                    additionalStyle={{ mt: '-4px' }}
                    span={true}
                />
                <Typography className={styles.text2}>
                    Subscriptions aren’t available on the web. You can get OsmAnd Pro in the app via Google Play or the
                    App Store.
                </Typography>
            </Box>
        </>
    );
}
