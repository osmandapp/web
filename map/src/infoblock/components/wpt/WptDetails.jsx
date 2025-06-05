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
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import AppContext, {
    isTrack,
    OBJECT_SEARCH,
    OBJECT_TYPE_FAVORITE,
    OBJECT_TYPE_POI,
    OBJECT_TYPE_SHARE_FILE,
} from '../../../context/AppContext';
import headerStyles from '../../../menu/trackfavmenu.module.css';
import { closeHeader } from '../../../menu/actions/HeaderHelper';
import { ReactComponent as CloseIcon } from '../../../assets/icons/ic_action_close.svg';
import { ReactComponent as BackIcon } from '../../../assets/icons/ic_arrow_back.svg';
import { ReactComponent as TimeIcon } from '../../../assets/icons/ic_action_date_start.svg';
import { ReactComponent as FolderIcon } from '../../../assets/icons/ic_action_folder.svg';
import { ReactComponent as LocationIcon } from '../../../assets/icons/ic_action_coordinates_location.svg';
import { ReactComponent as OsmIcon } from '../../../assets/icons/ic_action_openstreetmap_logo.svg';
import { ReactComponent as DirectionIcon } from '../../../assets/icons/ic_direction_arrow_16.svg';
import { ReactComponent as DescriptionIcon } from '../../../assets/icons/ic_action_note_dark.svg';
import { ReactComponent as InfoIcon } from '../../../assets/icons/ic_action_info_dark.svg';
import { ReactComponent as WikiIcon } from '../../../assets/icons/ic_plugin_wikipedia.svg';
import { cleanHtml, DEFAULT_ICON_COLOR, DEFAULT_POI_COLOR, DEFAULT_POI_SHAPE } from '../../../manager/PoiManager';
import { changeIconColor, createPoiIcon, removeShadowFromIconWpt } from '../../../map/markers/MarkerOptions';
import FavoritesManager, {
    getColorLocation,
    LOCATION_UNAVAILABLE,
    prepareBackground,
    prepareColor,
    prepareIcon,
} from '../../../manager/FavoritesManager';
import { ExpandLess, ExpandMore, Folder, LocationOn } from '@mui/icons-material';
import FavoriteActionsButtons from './actions/FavoriteActionsButtons';
import WptTagsProvider, {
    filterTag,
    FINAL_POI_ICON_NAME,
    GRAPH_URL_ENDPOINT,
    MAPILLARY_OSM_TAG,
    openWikivoyageContent,
    OSM_PREFIX,
    otherImgTags,
    PARAM_ACCESS_TOKEN,
    PARAM_FIELDS,
    POI_OSM_URL,
    WIKIDATA,
    WIKIPEDIA,
} from './WptTagsProvider';
import WptTagInfo from './WptTagInfo';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { format } from 'date-fns';
import { getDistance } from '../../../util/Utils';
import { useGeoLocation } from '../../../util/hooks/useGeoLocation';
import { getCenterMapLoc } from '../../../manager/MapManager';
import MenuItemWithLines from '../../../menu/components/MenuItemWithLines';
import { apiGet, apiPost } from '../../../util/HttpApi';
import Loading from '../../../menu/errors/Loading';
import PhotoGallery from '../../../menu/search/explore/PhotoGallery';
import wptStyles from '../wpt/wptDetails.module.css';
import parse from 'html-react-parser';
import { Dialog } from '@material-ui/core';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import { getFirstSubstring, getPropsFromSearchResultItem } from '../../../menu/search/search/SearchResultItem';
import { iconPathMap, SEARCH_ICON_MAP_OBJ } from '../../../map/layers/SearchLayer';
import capitalize from 'lodash/capitalize';
import { getCategory } from '../../../menu/search/explore/WikiPlacesItem';
import { convertMeters, getLargeLengthUnit, LARGE_UNIT } from '../../../menu/settings/units/UnitsConverter';
import PoiActionsButtons from './actions/PoiActionsButtons';

export const WptIcon = ({ wpt = null, color, background, icon, iconSize, shieldSize, ctx }) => {
    const iconSvg = iconPathMap[icon] ? ctx.poiIconCache[icon] : null;
    let coloredSvg = null;
    if (iconSvg) {
        coloredSvg = changeIconColor(iconSvg, DEFAULT_ICON_COLOR);
    }

    const iconHtml = createPoiIcon({
        color: color,
        background: background,
        hasBackgroundLight: false,
        svgIcon: coloredSvg,
        iconSize: iconSize,
        backgroundSize: shieldSize,
        point: wpt,
        icon: icon === SEARCH_ICON_MAP_OBJ ? null : icon,
    }).options.html;

    return (
        <div
            style={{ display: 'flex' }}
            dangerouslySetInnerHTML={{
                __html: removeShadowFromIconWpt(iconHtml) + EMPTY_STRING,
            }}
        />
    );
};

export function getObjType(wpt) {
    if (!wpt) {
        return TYPE_NOT_FOUND;
    }
    let type = wpt?.poiType;
    if (!wpt.name || wpt.name === EMPTY_STRING) {
        type = wpt?.tags?.type ?? wpt?.poiType;
    }
    return capitalize(getFirstSubstring(type));
}

export const ADDRESS_NOT_FOUND = 'No data';
export const TYPE_NOT_FOUND = 'No type';
export const EMPTY_STRING = '';

export default function WptDetails({ isDetails = false, setOpenWptTab, setShowInfoBlock }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();
    const hash = window.location.hash;

    const [devWikiContent, setDevWikiContent] = useState(null);

    const currentLoc = useGeoLocation(ctx);

    const ICON_IMG_SIZE = 24;
    const ICON_SHIELD_SIZE = 48;

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

    const newWpt = useMemo(() => {
        if (!ctx.selectedWpt) return null;

        const type = getWptType(ctx.selectedWpt);
        if (type?.isWikiPoi) {
            setLoading(true);
            const currentPoi = ctx.selectedWpt.poi;
            const wikiObj = ctx.searchSettings.getPoi;
            const coords = wikiObj.geometry.coordinates;
            const poiType = getCategory(wikiObj.properties);
            return {
                id: wikiObj?.properties.id,
                elo: wikiObj?.properties.elo,
                type,
                firstPhoto: wikiObj?.properties.photoTitle,
                poiType,
                name: wikiObj?.properties.wikiTitle,
                latlon: { lat: coords[1], lon: coords[0] },
                wikiDesc: wikiObj?.properties.wikiDesc,
                background: DEFAULT_POI_SHAPE,
                color: DEFAULT_POI_COLOR,
                icon: currentPoi?.properties[FINAL_POI_ICON_NAME],
                tags: null,
                osmUrl: currentPoi?.properties[POI_OSM_URL],
                wvLinks: wikiObj?.properties.wvLinks,
                lang: wikiObj?.properties.wikiLang,
            };
        } else if (type?.isWpt) {
            return getDataFromWpt(type, ctx.selectedWpt);
        } else if (type?.isFav || type?.isShareFav) {
            const markerName = ctx.selectedWpt.markerCurrent.name;
            const wpts = ctx.selectedWpt.trackData?.wpts ?? ctx.selectedWpt.wpts;
            const currentWpt = wpts.find((p) => p.name === markerName);
            if (currentWpt) {
                return getDataFromWpt(type, ctx.selectedWpt, currentWpt);
            }
        } else if (type?.isSearch || type?.isPoi) {
            const currentPoi = ctx.selectedWpt.poi;
            const { options: objOptions, latlng } = currentPoi;
            const { name, type: objType } = getPropsFromSearchResultItem(objOptions, t);
            return {
                type,
                poiType: objType,
                name,
                latlon: { lat: latlng.lat, lon: latlng.lng },
                background: DEFAULT_POI_SHAPE,
                color: DEFAULT_POI_COLOR,
                icon: objOptions[FINAL_POI_ICON_NAME],
                tags: null,
                osmUrl: objOptions[POI_OSM_URL],
                wikipedia: getWikipedia(objOptions[OSM_PREFIX + WIKIPEDIA]),
            };
        }
        return null;
    }, [ctx.selectedWpt]);

    useEffect(() => {
        if (!newWpt || !ctx.selectedWpt) return;

        const fetchTagsAndData = async () => {
            const type = getWptType(ctx.selectedWpt);
            let tags;
            if (type?.isWpt) {
                tags = await WptTagsProvider.getWptTags(ctx.selectedWpt, type, ctx);
            } else if (type?.isFav || type?.isShareFav) {
                const markerName = ctx.selectedWpt.markerCurrent.name;
                const wpts = ctx.selectedWpt.trackData?.wpts ?? ctx.selectedWpt.wpts;
                const currentWpt = wpts.find((p) => p.name === markerName);
                if (currentWpt) {
                    tags = await WptTagsProvider.getWptTags(currentWpt, type, ctx);
                }
            } else if (type?.isSearch || type?.isPoi || type?.isWikiPoi) {
                const currentPoi = ctx.selectedWpt.poi;
                tags = currentPoi ? await WptTagsProvider.getWptTags(currentPoi, type, ctx) : null;
            }
            return tags;
        };

        setLoading(true);
        fetchTagsAndData().then((tags) => {
            setWpt({ ...newWpt, tags });
            setIsAddressAdded(false);
            setIsPhotosAdded(false);
            setLoading(false);
        });
    }, [newWpt]);

    useEffect(() => {
        if (wpt?.type?.isWikiPoi) {
            if (!ctx.loadingContextMenu && !ctx.searchSettings.getPoi) {
                setShowInfoBlock(false);
            }
        }
    }, [ctx.loadingContextMenu]);

    function getWikiCommons(wikimediaCommons) {
        const WIKIMEDIA_FILE = 'File:';
        const WIKIMEDIA_CATEGORY = 'Category:';

        if (wikimediaCommons && wikimediaCommons.trim() !== EMPTY_STRING) {
            const commonsItems = wikimediaCommons.split(';').map((item) => item.trim());

            const files = [];
            const categories = [];

            commonsItems.forEach((item) => {
                if (item.startsWith(WIKIMEDIA_FILE)) {
                    files.push({
                        type: 'Feature',
                        properties: {
                            imageTitle: item.replace(WIKIMEDIA_FILE, EMPTY_STRING),
                        },
                        geometry: {
                            type: 'Point',
                            coordinates: [0, 0],
                        },
                    });
                } else if (item.startsWith(WIKIMEDIA_CATEGORY)) {
                    categories.push(item.replace(WIKIMEDIA_CATEGORY, EMPTY_STRING));
                }
            });

            return {
                files: files.length > 0 ? files : null,
                categories: categories.length > 0 ? categories[0] : null,
            };
        }
        return null;
    }

    function getWikipedia(wikipedia, tags) {
        let wikiTitle = null;

        const urlInd = !wikipedia ? -1 : wikipedia.indexOf('.wikipedia.org/wiki/');
        if (urlInd > 0) {
            const prefix = wikipedia.substring(0, urlInd);
            const lang = prefix.substring(prefix.lastIndexOf('/') + 1);
            const title = wikipedia.substring(urlInd + '.wikipedia.org/wiki/'.length);
            wikiTitle = `${lang}:${title}`;
        }
        if (!wikiTitle) {
            for (const tag in tags) {
                if (tag.startsWith(WIKIPEDIA + ':')) {
                    wikiTitle = tag.substring((WIKIPEDIA + ':').length) + ':' + tags[tag];
                }
            }
        }
        return wikiTitle ? wikiTitle : wikipedia;
    }

    function getDataFromWpt(type, selectedWpt, wptFromFile = null) {
        const currentWpt = wptFromFile ? wptFromFile : selectedWpt;
        return {
            type: type,
            file: selectedWpt.file,
            trackData: selectedWpt.trackData,
            groupId: selectedWpt.id,
            sharedWithMe: selectedWpt.file?.sharedWithMe,
            name: currentWpt.name,
            desc: currentWpt.desc,
            hidden: currentWpt.hidden,
            latlon: getCoordsFromWpt(currentWpt),
            marker: currentWpt.marker,
            background: prepareBackground(currentWpt.background),
            color: prepareColor(currentWpt.color),
            icon: prepareIcon(currentWpt.icon),
            category: currentWpt.category,
            address: currentWpt.address ?? ADDRESS_NOT_FOUND,
            time: parseInt(currentWpt.ext?.time) !== 0 ? currentWpt.ext?.time : null,
            tags: null,
        };
    }

    function getCoordsFromWpt(wpt) {
        if (wpt.latlng) {
            return { lat: wpt.latlng.lat, lon: wpt.latlng.lng };
        }
        return {
            lat: wpt.lat ? parseFloat(wpt.lat) : null,
            lon: wpt.lon ? parseFloat(wpt.lon) : null,
        };
    }

    function addFirstPhoto(wpt) {
        const mainPhotoName = wpt.firstPhoto;
        if (!mainPhotoName || mainPhotoName === EMPTY_STRING) {
            return wpt;
        }
        const mainPhoto = wpt.photos.features.find((photo) => photo.properties.imageTitle.endsWith(mainPhotoName));
        if (mainPhoto) {
            mainPhoto.properties.rowNum = 0;
            wpt.photos.features.unshift(mainPhoto);
        } else {
            const mainFeature = {
                type: 'Feature',
                properties: {
                    imageTitle: mainPhotoName,
                    mediaId: 0,
                    rowNum: 0,
                },
                geometry: {
                    type: 'Point',
                    coordinates: [wpt.latlon.lon, wpt.latlon.lat],
                },
            };
            wpt.photos.features.unshift(mainFeature);
        }
        return wpt;
    }

    function objWithPhotos(obj) {
        return obj?.type?.isPoi || obj?.type?.isSearch || obj?.type?.isWikiPoi;
    }

    useEffect(() => {
        if (objWithPhotos(wpt) && !isAddressAdded) {
            setIsAddressAdded(true);
            getPoiAddress(wpt).then((addressData) => {
                setWpt((prevWpt) => {
                    if (prevWpt?.id !== wpt?.id) return prevWpt;

                    let updatedWpt = { ...prevWpt, address: addressData ? addressData : ADDRESS_NOT_FOUND };

                    if (!isPhotosAdded) {
                        setIsPhotosAdded(true);
                        if (objWithPhotos(prevWpt)) {
                            getPhotos(prevWpt).then((photosData) => {
                                setWpt((finalWpt) => {
                                    if (finalWpt?.id !== prevWpt?.id) return finalWpt;

                                    let newWpt = { ...finalWpt, photos: photosData || [] };
                                    if (finalWpt?.type?.isWikiPoi) {
                                        newWpt = addFirstPhoto(newWpt);
                                    }
                                    return newWpt;
                                });
                            });
                        }
                    }

                    return updatedWpt;
                });
            });
        }
    }, [wpt, isAddressAdded, isPhotosAdded]);

    function getWptType(wpt) {
        return {
            isPoi: ctx.currentObjectType === OBJECT_TYPE_POI && wpt?.poi,
            isSearch: ctx.currentObjectType === OBJECT_SEARCH && wpt?.poi && !wpt?.wikidata,
            isWikiPoi: wpt?.wikidata,
            isWpt: isTrack(ctx) && (wpt?.trackWpt || wpt?.trackWptItem),
            isFav: ctx.currentObjectType === OBJECT_TYPE_FAVORITE && wpt?.markerCurrent,
            isShareFav: ctx.currentObjectType === OBJECT_TYPE_SHARE_FILE && wpt?.markerCurrent,
        };
    }

    function closeDetails() {
        if (wpt?.type?.isPoi || wpt?.type?.isSearch) {
            if (ctx.selectedPoiId) {
                ctx.setSelectedPoiId((prev) => {
                    return { ...prev, show: false };
                });
            }
            isDetails ? returnToSearch() : closeHeader({ ctx });
        } else if (wpt?.type?.isWpt) {
            isDetails ? setOpenWptTab(true) : closeHeader({ ctx });
        } else if (wpt?.type?.isFav) {
            isDetails ? closeOnlyFavDetails() : closeHeader({ ctx });
        } else if (wpt?.type?.isWikiPoi) {
            setShowInfoBlock(false);
            ctx.setSearchSettings({ ...ctx.searchSettings, getPoi: null });
        } else if (wpt?.type?.isShareFav) {
            ctx.setSelectedGpxFile((prev) => ({ ...prev, markerCurrent: null, favItem: false, name: null }));
            setShowInfoBlock(false);
        }
        ctx.setSelectedWpt(null);
    }

    function returnToSearch() {
        setShowInfoBlock(false);
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
        return format(time, 'MMM dd, yyyy – HH:mm', { locale: ctx.dateLocale }).replace(',', EMPTY_STRING);
    }

    async function getPoiAddress(wpt) {
        let response = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/search/get-poi-address`, {
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

    async function getPhotos(wpt) {
        let tags;
        const objTags = wpt.tags?.res;
        const wikidataId = wpt.id;
        if (!objTags && wikidataId) {
            tags = {
                wikidata: wikidataId,
            };
        } else {
            tags = Object.fromEntries(wpt.tags.res.map(({ key, value }) => [key, String(value)]));
            if (!tags[WIKIDATA] && wikidataId) {
                tags[WIKIDATA] = wikidataId;
            }
        }
        if (!tags) {
            return null;
        }
        const response = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/search/get-poi-photos`, tags, {
            apiCache: true,
        });

        let result;
        if (response && response.data) {
            result = response.data;
        } else {
            return null;
        }

        for (const tagKey of Object.keys(tags)) {
            if (otherImgTags(tagKey)) {
                let imgFeature;
                if (tagKey === MAPILLARY_OSM_TAG) {
                    const link = await getMapillaryLink(tags[MAPILLARY_OSM_TAG]);
                    imgFeature = createTagImg({ tags, tagKey, link });
                } else {
                    imgFeature = createTagImg({ tags, tagKey });
                }
                if (imgFeature) {
                    result.features.push(imgFeature);
                }
            }
        }

        return result;
    }

    async function getMapillaryLink(tagValue) {
        const url = `${GRAPH_URL_ENDPOINT}${tagValue}?${PARAM_ACCESS_TOKEN}&${PARAM_FIELDS}`;

        return fetch(url)
            .then((response) => {
                if (!response.ok) {
                    return null;
                }
                return response.json();
            })
            .then((data) => findBestThumbnail(data))
            .catch(() => {
                return null;
            });
    }

    function createTagImg({ tags, tagKey, link = null }) {
        const tagValue = tags[tagKey];

        if (!tagValue) return null;

        return {
            type: 'Feature',
            properties: {
                imageTitle: link ?? tagValue,
                osmTag: tagKey,
                mediaId: 0,
                rowNum: 0,
            },
            geometry: {
                type: 'Point',
                coordinates: [wpt.latlon.lon, wpt.latlon.lat],
            },
        };
    }

    function findBestThumbnail(data) {
        if (!data) return null;

        if (data.thumb_1024_url) return data.thumb_1024_url;

        for (const key in data) {
            if (key.startsWith('thumb') && key.endsWith('url')) {
                return data[key];
            }
        }
        return null;
    }

    function showFavoriteActions() {
        return wpt.type.isFav || wpt.type.isShareFav;
    }

    function showPoiActions() {
        return wpt.type.isPoi || wpt.type.isWikiPoi || wpt?.type?.isSearch;
    }

    const Header = () => {
        return (
            <AppBar position="static" className={headerStyles.appbar}>
                <Toolbar className={headerStyles.toolbar}>
                    <IconButton
                        id={'se-close-wpt-details'}
                        variant="contained"
                        type="button"
                        className={styles.closeIcon}
                        onClick={() => closeDetails()}
                    >
                        {ctx.searchSettings?.isDetails || isDetails ? <BackIcon /> : <CloseIcon />}
                    </IconButton>
                </Toolbar>
            </AppBar>
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
                    <Typography id={'se-wpt-group'} className={styles.wptCategoryText} noWrap>
                        {getWptGroup(wpt)}
                    </Typography>
                </Box>
            </Box>
        );
    };

    function getWptGroup(wpt) {
        let groupStr = wpt.category ?? 'Favorites';
        const groupLength = wpt.trackData ? wpt.trackData.wpts.length : wpt?.wpts?.length;
        if (groupLength) {
            groupStr += ` (${groupLength})`;
        }
        return groupStr;
    }

    const WptAddress = () => {
        return (
            <Box className={styles.wptCategory}>
                <ListItemIcon style={{ minWidth: 'auto' }}>
                    <LocationOn fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                    <Typography id={'se-wpt-address'} className={styles.wptCategoryText}>
                        {wpt.address}
                    </Typography>
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
                    convertMeters(
                        getDistance(location.lat, location.lng, wpt.latlon.lat, wpt.latlon.lon),
                        ctx.unitsSettings.len,
                        LARGE_UNIT
                    ).toFixed(0) + ` ${t(getLargeLengthUnit(ctx))}`
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
                        <MenuItem
                            disableRipple={!ctx.develFeatures}
                            onClick={() => {
                                openWikivoyageContent(item, setDevWikiContent);
                            }}
                            key={index}
                            divider
                            className={wptStyles.tagList}
                        >
                            <Link href={item[1]} target="_blank" rel="noopener noreferrer">
                                {item[0]}
                            </Link>
                        </MenuItem>
                    ))}
                </Collapse>
            </>
        );
    };

    const WptName = () => {
        let name = wpt.name;
        if (!name) {
            name = wpt.poiType ? getFirstSubstring(wpt.poiType) : 'No name';
        }
        if (wpt.osmUrl) {
            return (
                <Typography className={styles.name}>
                    <Link href={wpt.osmUrl} target="_blank" underline="none">
                        {name}
                    </Link>
                </Typography>
            );
        } else {
            return (
                <Typography id={'se-wpt-name'} className={styles.name}>
                    {wpt.name ?? 'No name'}
                </Typography>
            );
        }
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
                            <Box id={'se-wpt-details'} className={styles.topContainer}>
                                <div>
                                    <MenuItemWithLines maxLines={3} className={styles.name}>
                                        <WptName />
                                    </MenuItemWithLines>
                                    <MenuItemWithLines className={styles.type} name={getObjType(wpt)} maxLines={2} />
                                </div>
                                {wpt.icon && (
                                    <WptIcon
                                        wpt={wpt}
                                        color={wpt.color}
                                        background={wpt.background}
                                        icon={wpt.icon}
                                        iconSize={ICON_IMG_SIZE}
                                        shieldSize={ICON_SHIELD_SIZE}
                                        ctx={ctx}
                                    />
                                )}
                            </Box>
                            {wpt?.category && <WptCategory />}
                            {wpt?.address && wpt?.address !== ADDRESS_NOT_FOUND ? (
                                <WptAddress />
                            ) : wpt?.address !== ADDRESS_NOT_FOUND ? (
                                <CircularProgress sx={{ ml: 2 }} size={19} />
                            ) : null}
                            {showFavoriteActions() && <FavoriteActionsButtons wpt={wpt} isDetails={isDetails} />}
                            {showPoiActions() && <PoiActionsButtons wpt={wpt} />}
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
                                        <Typography id={'se-wpt-desc'} className={styles.descText}>
                                            {parse(cleanHtml(wpt?.wikiDesc || EMPTY_STRING))}
                                        </Typography>
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
                            <Divider sx={{ mt: '16px' }} />
                            {wpt.photos && <PhotoGallery photos={wpt.photos} />}
                            {wpt.elo && ctx.develFeatures && (
                                <WptTagInfo
                                    key={'elo'}
                                    baseTag={{
                                        icon: <InfoIcon />,
                                        name: 'Elo',
                                        value: Number(wpt.elo).toFixed(0),
                                    }}
                                />
                            )}
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
                            {wpt?.tags?.res
                                ?.filter((t) => filterTag(t))
                                .map((t, index) => (
                                    <WptTagInfo key={index} tag={t} setDevWikiContent={setDevWikiContent} />
                                ))}
                            {wpt.osmUrl && (
                                <WptTagInfo
                                    key={'osm'}
                                    baseTag={{
                                        icon: <OsmIcon />,
                                        name: 'OSM ID',
                                        link: (
                                            <Link href={wpt.osmUrl} target="_blank" rel="noopener noreferrer">
                                                {wpt.osmUrl.split('/').pop()}
                                            </Link>
                                        ),
                                    }}
                                />
                            )}
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
            {devWikiContent && (
                <Dialog open={true}>
                    <DialogContent>
                        <DialogContentText>{parse(devWikiContent)}</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setDevWikiContent(null)} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </>
    );
}
