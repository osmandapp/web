import { ListItemText, MenuItem, Tooltip, Typography } from '@mui/material';
import React, { useContext } from 'react';
import AppContext, { OBJECT_TYPE_FAVORITE } from '../../../context/AppContext';
import { makeStyles } from '@material-ui/core/styles';
import drawerStyles from '../../styles/DrawerStyles';

const useStyles = makeStyles({
    icon: {
        '& .icon': {
            top: '14px',
            left: '30px',
        },
        '& .background': {
            left: '0px',
            top: '2px',
            filter: 'drop-shadow(0 0 0 gray)',
        },
    },
    text: {
        '& .MuiTypography-root': {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: '100%',
            paddingRight: '20px',
        },
    },
});

export default function FavoriteItem({ index, marker, group }) {
    const classes = useStyles();
    const styles = drawerStyles();

    const ctx = useContext(AppContext);

    function addFavoriteToMap(marker) {
        let type = OBJECT_TYPE_FAVORITE;
        ctx.setCurrentObjectType(type);
        let newSelectedGpxFile = {};
        newSelectedGpxFile.markerCurrent = marker;
        if (!ctx.selectedGpxFile.markerPrev || ctx.selectedGpxFile.markerPrev !== ctx.selectedGpxFile.markerCurrent) {
            newSelectedGpxFile.markerPrev = ctx.selectedGpxFile.markerCurrent;
        }
        let file;
        Object.keys(ctx.favorites).forEach((favorite) => {
            if (favorite === group.name) {
                newSelectedGpxFile.nameGroup = favorite;
                Object.values(ctx.favorites[favorite].markers._layers).forEach((m) => {
                    if (m.options.title === marker.title) {
                        file = ctx.favorites[favorite];
                    }
                });
            }
        });
        newSelectedGpxFile.file = file;
        newSelectedGpxFile.file.name = ctx.favorites.groups.find((g) => g.name === group.name).file.name;
        newSelectedGpxFile.name = marker.title;
        newSelectedGpxFile.zoom = true;
        newSelectedGpxFile.prevState = ctx.selectedGpxFile;
        ctx.setUpdateInfoBlock(true);
        ctx.setSelectedGpxFile(newSelectedGpxFile);
    }

    return (
        <div className={styles.drawerItem}>
            <Tooltip title={marker.title} arrow>
                <MenuItem key={'marker' + index} sx={{ ml: 2 }} divider onClick={() => addFavoriteToMap(marker)}>
                    <div className={classes.icon} dangerouslySetInnerHTML={{ __html: marker.icon + '' }} />
                    <ListItemText className={classes.text}>
                        <Typography variant="inherit">{marker.title}</Typography>
                    </ListItemText>
                </MenuItem>
            </Tooltip>
        </div>
    );
}
