import headerStyles from '../trackfavmenu.module.css';
import {
    AppBar,
    Box,
    CircularProgress,
    IconButton,
    ListItemText,
    MenuItem,
    Paper,
    Slider,
    Toolbar,
    Tooltip,
    Typography,
} from '@mui/material';
import styles from './configuremap.module.css';
import AppContext from '../../context/AppContext';
import React, { useContext, useRef, useState } from 'react';
import { ReactComponent as ResetIcon } from '../../assets/icons/ic_action_reset_to_default_dark.svg';
import { ReactComponent as BackIcon } from '../../assets/icons/ic_arrow_back.svg';
import { useTranslation } from 'react-i18next';
import { ExpandMore } from '@mui/icons-material';
import SubTitle from '../components/SubTitle';
import ActionsMenu from '../actions/ActionsMenu';
import capitalize from 'lodash/capitalize';

export default function TerrainConfig({ setOpenTerrainConfig }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [openMenu, setOpenMenu] = useState(false);
    const [value, setValue] = useState(50);

    const heightmaps = ['hillshade', 'slope', 'height'];
    const heightmapsLayers = heightmaps.map((item) => {
        return {
            key: item,
            name: capitalize(item),
            url: `${process.env.REACT_APP_TILES_API_SITE}/heightmap/${item}/{z}/{x}/{y}.png`,
        };
    });

    const anchorEl = useRef(null);

    const handleSliderChange = (e, newValue) => {
        setValue(newValue);
    };

    function closeConfig() {
        setOpenTerrainConfig(false);
    }

    return (
        <>
            <AppBar position="static" className={headerStyles.appbar}>
                <Toolbar className={headerStyles.toolbar}>
                    <IconButton variant="contained" className={styles.closeIcon} onClick={() => closeConfig()}>
                        <BackIcon />
                    </IconButton>
                    <Typography component="div" className={headerStyles.title}>
                        {t('shared_string_terrain')}
                    </Typography>
                    {ctx.loginUser && (
                        <Tooltip key={'reset'} title={t('reset_to_default')} arrow placement="bottom-end">
                            <span>
                                <IconButton
                                    id="se-reset"
                                    variant="contained"
                                    type="button"
                                    className={headerStyles.appBarIcon}
                                    onClick={() => ctx.setHeightmap('none')}
                                >
                                    <ResetIcon />
                                </IconButton>
                            </span>
                        </Tooltip>
                    )}
                </Toolbar>
            </AppBar>
            <MenuItem className={styles.item}>
                <ListItemText>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Typography className={styles.colorSchemeTitleText}>Color scheme</Typography>
                            {ctx.processHeightmaps && <CircularProgress size={16} sx={{ ml: 1 }} />}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="body2" className={styles.poiCategoriesInfo} noWrap>
                                {capitalize(ctx.heightmap?.key) || 'None'}
                            </Typography>
                            <ExpandMore
                                sx={{ color: 'var(--text-secondary)', ml: 1 }}
                                ref={anchorEl}
                                onClick={() => setOpenMenu(true)}
                            />
                        </div>
                    </div>
                </ListItemText>
            </MenuItem>
            <ActionsMenu
                open={openMenu}
                setOpen={setOpenMenu}
                anchorEl={anchorEl}
                actions={
                    <Box>
                        <Paper>
                            <MenuItem
                                divider
                                onClick={() => {
                                    ctx.setHeightmap('none');
                                    setOpenMenu(false);
                                }}
                            >
                                None
                            </MenuItem>
                            {Object.values(heightmapsLayers).map((item) => {
                                return (
                                    <MenuItem
                                        key={item.key}
                                        onClick={() => {
                                            const selectedHeightmap = heightmapsLayers.find(
                                                (layer) => layer.key === item.key
                                            );
                                            ctx.setHeightmap(selectedHeightmap ?? 'none');
                                            setOpenMenu(false);
                                        }}
                                    >
                                        {item.name}
                                    </MenuItem>
                                );
                            })}
                        </Paper>
                    </Box>
                }
            />
            {ctx.heightmap?.key ? (
                <>
                    <SubTitle title={'shared_string_appearance'} />
                    <Box sx={{ m: 2 }}>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Typography className={styles.terrainSliderTitle}>Visibility</Typography>
                            <Typography className={styles.terrainSliderValue}>{`${value}%`}</Typography>
                        </div>
                        <Slider
                            value={typeof value === 'number' ? value : 0}
                            onChange={handleSliderChange}
                            size="small"
                            aria-label="Small"
                            valueLabelDisplay="off"
                        />
                    </Box>
                </>
            ) : (
                <Box sx={{ mx: 2 }}>
                    <Typography className={styles.terrainInfo}>
                        Select one of visualization options: Altitude, Hillshade, Slope.
                    </Typography>
                </Box>
            )}
        </>
    );
}
