import { AppBar, Box, IconButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import styles from '../../infoblock.module.css';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import AppContext, { isTrack, OBJECT_TYPE_FAVORITE, OBJECT_TYPE_POI } from '../../../context/AppContext';
import headerStyles from '../../../menu/trackfavmenu.module.css';
import { closeHeader } from '../../../menu/actions/HeaderHelper';
import { ReactComponent as CloseIcon } from '../../../assets/icons/ic_action_close.svg';
import { ReactComponent as BackIcon } from '../../../assets/icons/ic_arrow_back.svg';
import { ReactComponent as TimeIcon } from '../../../assets/icons/ic_action_date_start.svg';
import { ReactComponent as FolderIcon } from '../../../assets/icons/ic_action_folder.svg';
import { ReactComponent as LocationIcon } from '../../../assets/icons/ic_action_coordinates_location.svg';
import PoiManager, { DEFAULT_POI_COLOR, DEFAULT_POI_SHAPE } from '../../../manager/PoiManager';
import MarkerOptions, { changeIconSizeWpt, removeShadowFromIconWpt } from '../../../map/markers/MarkerOptions';
import FavoritesManager, { prepareBackground, prepareColor, prepareIcon } from '../../../manager/FavoritesManager';
import { Folder, LocationOn } from '@mui/icons-material';
import WptDetailsButtons from './WptDetailsButtons';
import WptTagsProvider from './WptTagsProvider';
import WptTagInfo from './WptTagInfo';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import * as locales from 'date-fns/locale';
import { format } from 'date-fns';

export default function WptDetails({ isDetails = false, setOpenWptTab, setShowInfoBlock }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const ICON_IMG_SIZE = 24;
    const ICON_SHIELD_SIZE = 40;

    const [wpt, setWpt] = useState(null);

    const newWpt = useMemo(() => {
        let result = null;
        const type = getWptType(ctx.selectedWpt);
        if (type?.isPoi) {
            const currentPoi = ctx.selectedWpt.poi;
            const { options: poiOptions, latlng } = currentPoi;
            result = {
                type: type,
                name: poiOptions.title ? poiOptions.title : PoiManager.formattingPoiType(poiOptions.poiType),
                latlon: latlng,
                background: DEFAULT_POI_SHAPE,
                color: DEFAULT_POI_COLOR,
                icon: poiOptions.finalIconName,
            };
        } else if (type?.isWpt) {
            result = {
                type: type,
                file: ctx.selectedWpt.file,
                name: ctx.selectedWpt.name,
                latlon: { lat: ctx.selectedWpt.lat, lon: ctx.selectedWpt.lon },
                marker: null,
                background: prepareBackground(ctx.selectedWpt.background),
                color: prepareColor(ctx.selectedWpt.color),
                icon: prepareIcon(ctx.selectedWpt.icon),
                category: ctx.selectedWpt.category,
                address: ctx.selectedWpt.address,
            };
        } else if (type?.isFav) {
            let markerName = ctx.selectedWpt.markerCurrent.title;
            let currentWpt = ctx.selectedWpt.file.wpts.find((p) => p.name === markerName);
            if (currentWpt) {
                result = {
                    type: type,
                    file: ctx.selectedWpt.file,
                    name: currentWpt.name,
                    latlon: { lat: currentWpt.lat, lon: currentWpt.lon },
                    marker: currentWpt.marker,
                    background: prepareBackground(currentWpt.background),
                    color: prepareColor(currentWpt.color),
                    icon: prepareIcon(currentWpt.icon),
                    category: currentWpt.category,
                    address: currentWpt.address,
                    time: parseInt(currentWpt.ext?.time) !== 0 ? currentWpt.ext.time : null,
                    tags: WptTagsProvider.getWptTags(currentWpt, type),
                };
            }
        } else {
            result = null;
        }
        return result;
    }, [ctx.selectedWpt]);

    useEffect(() => {
        if (newWpt !== null) {
            setWpt(newWpt);
        }
    }, [newWpt]);

    function getWptType(wpt) {
        return {
            isPoi: ctx.currentObjectType === OBJECT_TYPE_POI && wpt?.poi,
            isWpt: isTrack(ctx) && (wpt?.trackWpt || wpt?.trackWptItem),
            isFav: ctx.currentObjectType === OBJECT_TYPE_FAVORITE && wpt?.markerCurrent,
        };
    }

    function closeDetails() {
        if (wpt.type?.isPoi) {
            closeHeader({ ctx });
        } else if (wpt.type?.isWpt) {
            isDetails ? setOpenWptTab(true) : closeHeader({ ctx });
        } else if (wpt.type?.isFav) {
            isDetails ? closeOnlyFavDetails() : closeHeader({ ctx });
        }
        ctx.setSelectedWpt(null);
    }

    function closeOnlyFavDetails() {
        setShowInfoBlock(false);
        ctx.setCurrentObjectType(null);
        ctx.setSelectedGpxFile({});
    }

    function getId() {
        if (wpt.type?.isFav) {
            return 'se-fav-item-info-' + wpt.name;
        }
        if (wpt.type?.isPoi) {
            return 'se-poi-infoblock-' + wpt.name;
        }
        return null;
    }

    function formatTime(time) {
        const locale = locales[i18n.language] || locales.enUS;
        return format(time, 'MMM dd, yyyy – HH:mm', { locale: locale }).replace(',', '');
    }

    const Header = () => {
        return (
            <AppBar position="static" className={headerStyles.appbar}>
                <Toolbar className={headerStyles.toolbar}>
                    <IconButton
                        variant="contained"
                        type="button"
                        className={styles.closeIcon}
                        onClick={() => closeDetails()}
                    >
                        {isDetails ? <BackIcon /> : <CloseIcon />}
                    </IconButton>
                </Toolbar>
            </AppBar>
        );
    };

    const WptIcon = () => {
        return (
            <div
                style={{ display: 'flex' }}
                dangerouslySetInnerHTML={{
                    __html:
                        changeIconSizeWpt(
                            removeShadowFromIconWpt(
                                MarkerOptions.getWptIcon(wpt, wpt?.color, wpt?.background, wpt?.icon).options.html
                            ),
                            ICON_IMG_SIZE,
                            ICON_SHIELD_SIZE
                        ) + '',
                }}
            />
        );
    };

    const WptCategory = () => {
        return (
            <Box className={styles.wptCategory}>
                <ListItemIcon
                    style={{
                        color:
                            wpt.category &&
                            FavoritesManager.getColorGroup({ gpxFile: wpt.file, groupName: wpt.category }),
                        minWidth: 'auto',
                    }}
                >
                    <Folder fontSize="small" />
                </ListItemIcon>
                <Box>
                    <Typography className={styles.wptCategoryText} noWrap>
                        {`${wpt.category ? wpt.category : 'Favorites'} (${wpt.file?.wpts?.length})`}
                    </Typography>
                </Box>
            </Box>
        );
    };

    const WptAddress = () => {
        return (
            <Box className={styles.wptCategory}>
                <ListItemIcon style={{ minWidth: 'auto' }}>
                    <LocationOn fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                    <Typography className={styles.wptCategoryText} noWrap>
                        {wpt.address}
                    </Typography>
                </ListItemText>
            </Box>
        );
    };

    return (
        <>
            <Box
                minWidth={ctx.infoBlockWidth}
                maxWidth={ctx.infoBlockWidth}
                sx={{ height: 'auto', overflowX: 'hidden' }}
            >
                <Header />
                {wpt !== null && (
                    <ListItemText id={getId()}>
                        <Box className={styles.topContainer}>
                            <Typography variant="body2" noWrap className={styles.name}>
                                {wpt.name ?? 'No name'}
                            </Typography>
                            {wpt.icon && <WptIcon />}
                        </Box>
                        {wpt?.category && <WptCategory />}
                        {wpt?.address && <WptAddress />}
                        <WptDetailsButtons wpt={wpt} isDetails={isDetails} />
                        {wpt.time && (
                            <WptTagInfo
                                key={'time'}
                                baseTag={{
                                    icon: <TimeIcon />,
                                    name: t('date_of_creation'),
                                    value: formatTime(wpt.time),
                                }}
                            />
                        )}
                        {wpt.category && (
                            <WptTagInfo
                                key={'folder'}
                                baseTag={{
                                    icon: <FolderIcon />,
                                    name: t('folder'),
                                    value: wpt.category,
                                }}
                            />
                        )}
                        {wpt.latlon && (
                            <WptTagInfo
                                key={'latlon'}
                                baseTag={{
                                    icon: <LocationIcon />,
                                    name: t('coordinates'),
                                    value: wpt.latlon.lat.toFixed(6) + ', ' + wpt.latlon.lon.toFixed(6),
                                }}
                            />
                        )}
                        {wpt?.tags?.res?.map((t, index) => {
                            return <WptTagInfo key={index} tag={t} />;
                        })}
                    </ListItemText>
                )}
            </Box>
        </>
    );
}
