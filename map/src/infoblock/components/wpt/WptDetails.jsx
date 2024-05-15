import {
    AppBar,
    Box,
    Button,
    CircularProgress,
    Collapse,
    Divider,
    IconButton,
    Link,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography,
} from '@mui/material';
import styles from '../../infoblock.module.css';
import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext, { isTrack, OBJECT_TYPE_FAVORITE, OBJECT_TYPE_POI } from '../../../context/AppContext';
import headerStyles from '../../../menu/trackfavmenu.module.css';
import { closeHeader } from '../../../menu/actions/HeaderHelper';
import { ReactComponent as CloseIcon } from '../../../assets/icons/ic_action_close.svg';
import { ReactComponent as BackIcon } from '../../../assets/icons/ic_arrow_back.svg';
import { ReactComponent as TimeIcon } from '../../../assets/icons/ic_action_date_start.svg';
import { ReactComponent as FolderIcon } from '../../../assets/icons/ic_action_folder.svg';
import { ReactComponent as LocationIcon } from '../../../assets/icons/ic_action_coordinates_location.svg';
import { ReactComponent as DirectionIcon } from '../../../assets/icons/ic_direction_arrow_16.svg';
import { ReactComponent as DescriptionIcon } from '../../../assets/icons/ic_action_note_dark.svg';
import { ReactComponent as InfoIcon } from '../../../assets/icons/ic_action_info_dark.svg';
import { ReactComponent as FavoritesIcon } from '../../../assets/menu/ic_action_favorite.svg';
import { ReactComponent as WikiIcon } from '../../../assets/icons/ic_plugin_wikipedia.svg';
import { DEFAULT_POI_COLOR, DEFAULT_POI_SHAPE } from '../../../manager/PoiManager';
import MarkerOptions, { changeIconSizeWpt, removeShadowFromIconWpt } from '../../../map/markers/MarkerOptions';
import FavoritesManager, {
    getColorLocation,
    LOCATION_UNAVAILABLE,
    prepareBackground,
    prepareColor,
    prepareIcon,
} from '../../../manager/FavoritesManager';
import { ExpandLess, ExpandMore, Folder, LocationOn } from '@mui/icons-material';
import WptDetailsButtons from './WptDetailsButtons';
import WptTagsProvider, { FINAL_ICON_NAME, POI_OSM_URL, POI_PREFIX, TYPE_OSM_VALUE } from './WptTagsProvider';
import WptTagInfo from './WptTagInfo';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import * as locales from 'date-fns/locale';
import { format } from 'date-fns';
import { getDistance } from '../../../util/Utils';
import { useGeoLocation } from '../../../util/hooks/useGeoLocation';
import { getCenterMapLoc } from '../../../manager/MapManager';
import MenuItemWithLines from '../../../menu/components/MenuItemWithLines';
import { useNavigate } from 'react-router-dom';
import { apiGet } from '../../../util/HttpApi';
import Loading from '../../../menu/errors/Loading';
import PhotoGallery from '../../../menu/search/PhotoGallery';
import wptStyles from '../wpt/wptDetails.module.css';

export default function WptDetails({ isDetails = false, setOpenWptTab, setShowInfoBlock }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();
    const hash = window.location.hash;

    const currentLoc = useGeoLocation(ctx);

    const ADDRESS_NOT_FOUND = 'No data';

    const ICON_IMG_SIZE = 24;
    const ICON_SHIELD_SIZE = 40;

    const [wpt, setWpt] = useState(null);
    const [loading, setLoading] = useState(false);

    const [isAddressAdded, setIsAddressAdded] = useState(false);
    const [isPhotosAdded, setIsPhotosAdded] = useState(false);

    const [delayedHash, setDelayedHash] = useState(hash);
    const debouncerTimer = useRef(0);
    // debounce map move/scroll
    useEffect(() => {
        debouncerTimer.current > 0 && clearTimeout(debouncerTimer.current);
        debouncerTimer.current = setTimeout(() => {
            debouncerTimer.current = 0;
            setDelayedHash(hash);
        }, 1000);

        return () => {
            clearTimeout(debouncerTimer.current);
        };
    }, [hash]);

    const [newWpt, setNewWpt] = useState(null);

    useEffect(() => {
        if (wpt?.type?.isWikiPoi) {
            setLoading(ctx.loadingContextMenu);
            if (!ctx.loadingContextMenu && !ctx.searchSettings.getPoi) {
                setShowInfoBlock(false);
            }
        }
    }, [ctx.loadingContextMenu]);

    useEffect(() => {
        const fetchWpt = async () => {
            let result = null;
            const type = getWptType(ctx.selectedWpt);
            if (type?.isPoi) {
                const currentPoi = ctx.selectedWpt.poi;
                const { options: poiOptions, latlng } = currentPoi;
                const tags = await WptTagsProvider.getWptTags(currentPoi, type, ctx);
                result = {
                    type: type,
                    poiType: t(POI_PREFIX + poiOptions[TYPE_OSM_VALUE]),
                    name: poiOptions.title ? poiOptions.title : t(POI_PREFIX + poiOptions[TYPE_OSM_VALUE]),
                    latlon: { lat: latlng.lat, lon: latlng.lng },
                    background: DEFAULT_POI_SHAPE,
                    color: DEFAULT_POI_COLOR,
                    icon: poiOptions[FINAL_ICON_NAME],
                    tags: tags,
                    osmUrl: poiOptions[POI_OSM_URL],
                };
            } else if (type?.isWikiPoi) {
                const currentPoi = ctx.selectedWpt.poi;
                const wikiObj = ctx.searchSettings.getPoi;
                const { properties: poiOptions } = currentPoi;
                const coords = currentPoi.geometry.coordinates;
                const tags = await WptTagsProvider.getWptTags(currentPoi, type, ctx);
                result = {
                    id: wikiObj?.properties.id,
                    type: type,
                    poiType: t(POI_PREFIX + poiOptions[TYPE_OSM_VALUE]),
                    name: wikiObj?.properties.wikiTitle,
                    latlon: { lat: coords[1], lon: coords[0] },
                    wikiDesc: wikiObj?.properties.wikiDesc,
                    background: DEFAULT_POI_SHAPE,
                    color: DEFAULT_POI_COLOR,
                    icon: poiOptions[FINAL_ICON_NAME],
                    tags: tags,
                    osmUrl: poiOptions[POI_OSM_URL],
                    wvLinks: wikiObj?.properties.wvLinks,
                    lang: wikiObj?.properties.wikiLang,
                };
            } else if (type?.isWpt) {
                result = await getDataFromWpt(type, ctx.selectedWpt);
            } else if (type?.isFav) {
                let markerName = ctx.selectedWpt.markerCurrent.title;
                let currentWpt = ctx.selectedWpt.file.wpts.find((p) => p.name === markerName);
                if (currentWpt) {
                    result = await getDataFromWpt(type, ctx.selectedWpt, currentWpt);
                }
            } else {
                result = null;
            }
            setNewWpt(result);
        };

        fetchWpt().then();
    }, [ctx.selectedWpt]);

    async function getDataFromWpt(type, selectedWpt, wptFromFile = null) {
        const currentWpt = wptFromFile ? wptFromFile : selectedWpt;
        const tags = await WptTagsProvider.getWptTags(currentWpt, type, ctx);
        return {
            type: type,
            file: selectedWpt.file,
            name: currentWpt.name,
            desc: currentWpt.desc,
            hidden: currentWpt.hidden,
            latlon: { lat: currentWpt.lat, lon: currentWpt.lon },
            marker: currentWpt.marker,
            background: prepareBackground(currentWpt.background),
            color: prepareColor(currentWpt.color),
            icon: prepareIcon(currentWpt.icon),
            category: currentWpt.category,
            address: currentWpt.address,
            time: parseInt(currentWpt.ext?.time) !== 0 ? currentWpt.ext?.time : null,
            tags: tags,
        };
    }

    useEffect(() => {
        if (newWpt !== null) {
            setWpt(newWpt);
            setIsAddressAdded(false);
            setIsPhotosAdded(false);
        }
    }, [newWpt]);

    useEffect(() => {
        if ((wpt?.type?.isPoi || wpt?.type?.isWikiPoi) && !isAddressAdded) {
            setIsAddressAdded(true);
            getPoiAddress(wpt).then((data) => {
                if (data) {
                    setWpt((prevWpt) => ({ ...prevWpt, address: data }));
                } else {
                    setWpt((prevWpt) => ({ ...prevWpt, address: ADDRESS_NOT_FOUND }));
                }
            });
        }
    }, [wpt, isAddressAdded]);

    useEffect(() => {
        if (wpt?.type?.isWikiPoi && !isPhotosAdded) {
            setIsPhotosAdded(true);
            getWikiPhotos(wpt).then((data) => {
                if (data) {
                    setWpt((prevWpt) => ({ ...prevWpt, photos: data }));
                }
            });
        }
    }, [wpt, isPhotosAdded]);

    function getWptType(wpt) {
        return {
            isPoi: ctx.currentObjectType === OBJECT_TYPE_POI && wpt?.poi,
            isWikiPoi: wpt?.poi && wpt?.wikidata,
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
        } else if (wpt.type?.isWikiPoi) {
            setShowInfoBlock(false);
            ctx.setSearchSettings({ ...ctx.searchSettings, getPoi: null });
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
    const navigate = useNavigate();
    function addPointToFavorites() {
        if (ctx.loginUser) {
            ctx.setAddFavorite({
                ...ctx.addFavorite,
                poi: ctx.selectedWpt?.poi,
                address: wpt.address,
                location: ctx.selectedWpt?.poi?.latlng,
            });
        } else {
            navigate('/map/loginForm' + window.location.search + window.location.hash);
        }
    }

    async function getPoiAddress(wpt) {
        let response = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/search/get-poi-address`, {
            apiCache: true,
            params: {
                lat: wpt.latlon.lat,
                lon: wpt.latlon.lon,
            },
        });
        if (response && response.data) {
            return response.data
                .replace(/ str\./g, '')
                .replace(/ city/g, ',')
                .replace(/ dist.*/g, '');
        } else {
            return null;
        }
    }

    async function getWikiPhotos(wpt) {
        let response = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/search/get-wiki-photos`, {
            apiCache: true,
            params: {
                id: wpt.id,
            },
        });
        if (response && response.data) {
            return response.data;
        } else {
            return null;
        }
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
                    <Typography className={styles.wptCategoryText}>{wpt.address}</Typography>
                </ListItemText>
            </Box>
        );
    };

    const WptLoc = ({ wpt, location }) => {
        const locDist = (wpt, location) => {
            if (location && wpt.latlon) {
                if (location === LOCATION_UNAVAILABLE) {
                    location = getCenterMapLoc(delayedHash);
                }
                return (
                    (getDistance(location.lat, location.lng, wpt.latlon.lat, wpt.latlon.lon) / 1000).toFixed(0) + ' km'
                );
            }
            return null;
        };

        const color = getColorLocation(location);

        return (
            <Box className={styles.wptCategory}>
                <ListItemIcon sx={{ minWidth: 'auto', fill: color }}>
                    <DirectionIcon />
                </ListItemIcon>
                <ListItemText>
                    <Typography sx={{ color: color + '!important' }} className={styles.wptCategoryText} noWrap>
                        {locDist(wpt, location) ?? 'No distance'}
                    </Typography>
                </ListItemText>
            </Box>
        );
    };

    const WikiVoyageLinks = ({ wvLinks }) => {
        const [open, setOpen] = useState(false);

        const value = Object.values(wvLinks)
            .map((link) => link[0])
            .join(' • ');

        return (
            <>
                <MenuItem style={{ userSelect: 'text' }} disableRipple className={wptStyles.tagItem} divider>
                    <WikiIcon className={wptStyles.tagIcon} />
                    <>
                        <ListItemText onClick={() => setOpen(!open)}>
                            <MenuItemWithLines
                                name={t('shared_string_wikivoyage')}
                                maxLines={1}
                                className={wptStyles.tagPrefix}
                            />
                            {Object.keys(wvLinks).length > 1 ? (
                                <MenuItemWithLines name={value} maxLines={1} className={wptStyles.tagName} />
                            ) : (
                                <Link href={Object.values(wvLinks)[0][1]} target="_blank" rel="noopener noreferrer">
                                    {Object.values(wvLinks)[0][1]}
                                </Link>
                            )}
                        </ListItemText>
                        {Object.keys(wvLinks).length > 1 && (
                            <IconButton onClick={() => setOpen(!open)}>
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </IconButton>
                        )}
                    </>
                </MenuItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    {Object.values(wvLinks).map((item, index) => (
                        <MenuItem disableRipple key={index} divider className={wptStyles.tagList}>
                            <Link href={item[1]} target="_blank" rel="noopener noreferrer">
                                {item[0]}
                            </Link>
                        </MenuItem>
                    ))}
                </Collapse>
            </>
        );
    };

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <Box
                    minWidth={ctx.infoBlockWidth}
                    maxWidth={ctx.infoBlockWidth}
                    sx={{ height: 'auto', overflowX: 'hidden' }}
                >
                    <Header />
                    {wpt !== null && (
                        <ListItemText id={getId()}>
                            <Box className={styles.topContainer}>
                                <div>
                                    <MenuItemWithLines maxLines={3} className={styles.name}>
                                        <Typography className={styles.name}>
                                            {wpt.type?.isPoi || wpt.type?.isWikiPoi ? (
                                                <Link href={wpt.osmUrl} target="_blank" underline="none">
                                                    {wpt.name ? wpt.name : wpt.poiType}
                                                </Link>
                                            ) : (
                                                wpt.name ?? 'No name'
                                            )}
                                        </Typography>
                                    </MenuItemWithLines>
                                    <Typography className={styles.type} noWrap>
                                        {wpt?.poiType}
                                    </Typography>
                                </div>
                                {wpt.icon && <WptIcon />}
                            </Box>
                            {wpt?.category && <WptCategory />}
                            <div className={styles.location}>
                                {wpt.latlon && currentLoc && <WptLoc wpt={wpt} location={currentLoc} />}
                                {wpt.type?.isPoi && (
                                    <>
                                        <Tooltip
                                            title={t('shared_string_add_to_favorites')}
                                            arrow
                                            placement="bottom"
                                            onClick={() => addPointToFavorites()}
                                        >
                                            <FavoritesIcon />
                                        </Tooltip>
                                    </>
                                )}
                            </div>
                            {wpt?.address && wpt?.address !== ADDRESS_NOT_FOUND ? (
                                <WptAddress />
                            ) : wpt?.address !== ADDRESS_NOT_FOUND ? (
                                <CircularProgress sx={{ ml: 2 }} size={19} />
                            ) : null}
                            {!wpt.type?.isWikiPoi && <WptDetailsButtons wpt={wpt} isDetails={isDetails} />}
                            {wpt?.wikiDesc && (
                                <>
                                    <Divider sx={{ mt: 2 }} />
                                    <MenuItem className={styles.descTitle}>
                                        <ListItemText>
                                            <Typography className={styles.descTitleText}>
                                                {t('shared_string_description')}
                                            </Typography>
                                        </ListItemText>
                                    </MenuItem>
                                    <div className={styles.descTextBlock}>
                                        <Typography className={styles.descText}>{wpt?.wikiDesc}</Typography>
                                    </div>
                                    <Button
                                        sx={{ ml: 1 }}
                                        onClick={() =>
                                            window.open(
                                                'https://' + wpt.lang + '.wikipedia.org/wiki/' + wpt.name,
                                                '_blank'
                                            )
                                        }
                                    >
                                        {t('shared_string_read_more')}
                                    </Button>
                                </>
                            )}
                            <Divider sx={{ mt: wpt.type?.isPoi ? '0px' : '16px' }} />
                            {wpt.photos && <PhotoGallery photos={wpt.photos} />}
                            {wpt.wvLinks && <WikiVoyageLinks wvLinks={wpt.wvLinks} />}
                            {wpt.desc && (
                                <WptTagInfo
                                    key={'desc'}
                                    baseTag={{
                                        icon: <DescriptionIcon />,
                                        name: t('shared_string_description'),
                                        value: wpt.desc,
                                        isDesc: true,
                                    }}
                                />
                            )}
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
                            {wpt?.hidden === 'true' && (
                                <WptTagInfo
                                    key={'hidden'}
                                    baseTag={{
                                        icon: <InfoIcon />,
                                        name: t('shared_string_hidden'),
                                        value: t('shared_string_yes'),
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
                            {wpt?.tags?.res?.map((t, index) => {
                                return <WptTagInfo key={index} tag={t} />;
                            })}
                            {wpt.latlon && (
                                <WptTagInfo
                                    key={'latlon'}
                                    copy={true}
                                    baseTag={{
                                        icon: <LocationIcon />,
                                        name: t('coordinates'),
                                        value: wpt.latlon.lat.toFixed(6) + ', ' + wpt.latlon.lon.toFixed(6),
                                    }}
                                />
                            )}
                        </ListItemText>
                    )}
                </Box>
            )}
        </>
    );
}
