import { Button, ButtonGroup } from '@mui/material';
import React, { useContext } from 'react';
import TracksManager from '../../manager/TracksManager';
import drawerStyles from '../../frame/styles/DrawerStyles';
import AppContext from '../../context/AppContext';
import LocalGpxUploader from '../../frame/components/util/LocalGpxUploader';

export default function PlanRouteMenu() {
    const styles = drawerStyles();
    const ctx = useContext(AppContext);

    return (
        <>
            <ButtonGroup variant="text" sx={{ mt: 1 }}>
                <Button
                    className={styles.button}
                    sx={{ ml: 3, fontSize: 11, textAlign: 'center' }}
                    variant="contained"
                    component="span"
                    onClick={() => TracksManager.createTrack(ctx)}
                >
                    Create track
                </Button>
                <LocalGpxUploader>
                    <Button className={styles.button} variant="contained" component="span" sx={{ fontSize: 11, ml: 2 }}>
                        Import track
                    </Button>
                </LocalGpxUploader>
            </ButtonGroup>
        </>
    );
}
