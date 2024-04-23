import React, { useState } from 'react';
import { ICONS_PREFIX, POI_ICONS_FOLDER } from '../../../../map/markers/MarkerOptions';
import { AppBar, Box, ListItem, ListItemButton, ListItemText, Tab, Typography } from '@mui/material';
import { History } from '@mui/icons-material';
import Paper from '@mui/material/Paper';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import favoriteEditMenuStyles from '../../../styles/FavoriteEditMenuStyles';
import FavoritesManager from '../../../../manager/FavoritesManager';
import { isEmpty } from 'lodash';

export default function FavoriteIcon({
    favoriteIcon,
    setFavoriteIcon,
    currentIconCategories,
    favoriteIconCategories,
    selectedGpxFile,
    add,
    defaultIcon,
    widthDialog,
}) {
    const favoriteStyles = favoriteEditMenuStyles();

    const [value, setValue] = useState(FavoritesManager.DEFAULT_TAB_ICONS);
    const [selectFavoriteIcon, setSelectFavoriteIcon] = useState(false);
    let tabs = {};
    let list = [];

    const ListIcons = ({ icons }) => {
        return (
            <Box
                sx={{
                    flexWrap: 'wrap',
                    display: 'flex',
                    maxWidth: `${widthDialog}px`,
                }}
            >
                {icons.map((icon, index) => {
                    return (
                        <ListItem key={index} sx={{ maxWidth: 50, maxHeight: 50 }} component="div" disablePadding>
                            <ListItemButton
                                sx={{ maxWidth: 50, maxHeight: 50, top: -10 }}
                                selected={favoriteIcon === icon || (!selectFavoriteIcon && icon === defaultIcon)}
                                onClick={() => {
                                    setSelectFavoriteIcon(true);
                                    setFavoriteIcon(icon);
                                }}
                            >
                                <div
                                    className={favoriteStyles.shape}
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            `<div>` +
                                            `<svg class="background" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">` +
                                            `<circle cx="24" cy="24" r="12" fill="#c1c1c1" />` +
                                            `</svg>` +
                                            `<img class="icon" src="/map/images/${POI_ICONS_FOLDER}/${ICONS_PREFIX}${icon}.svg">` +
                                            `</div>`,
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </Box>
        );
    };

    favoriteIconCategories &&
        Object.entries(favoriteIconCategories.categories).forEach((category) => {
            tabs[category[0]] = <ListIcons key={category[0]} icons={category[1].icons} />;
        });

    tabs[FavoritesManager.DEFAULT_TAB_ICONS] =
        add || isEmpty(selectedGpxFile) ? (
            <ListIcons key={FavoritesManager.DEFAULT_TAB_ICONS} icons={[favoriteIcon]} />
        ) : (
            getTabUsedIcons()
        );

    list =
        tabs &&
        list.concat(
            Object.keys(tabs).map((item) => {
                if (item !== currentIconCategories && item !== FavoritesManager.DEFAULT_TAB_ICONS) {
                    return <Tab value={tabs[item].key + ''} label={item} key={'tab:' + item} />;
                }
                return null;
            })
        );

    list = list.filter((t) => t !== null);

    list.length > 0 &&
        currentIconCategories &&
        tabs[currentIconCategories] &&
        list.unshift(
            <Tab
                value={tabs[currentIconCategories].key + ''}
                label={currentIconCategories}
                key={'tab:' + currentIconCategories}
            />
        );
    list.length > 0 &&
        tabs[FavoritesManager.DEFAULT_TAB_ICONS] &&
        list.unshift(
            <Tab
                icon={<History />}
                value={tabs[FavoritesManager.DEFAULT_TAB_ICONS].key + ''}
                key={'tab:' + FavoritesManager.DEFAULT_TAB_ICONS}
            />
        );

    function getTabUsedIcons() {
        let res = [];
        let wpts = selectedGpxFile.file ? selectedGpxFile.file.wpts : selectedGpxFile.wpts;
        wpts.forEach((wpt) => {
            if (!res.some((icon) => icon === wpt.icon)) {
                wpt.icon && res.push(wpt.icon);
            }
        });
        return <ListIcons key={FavoritesManager.DEFAULT_TAB_ICONS} icons={res} />;
    }

    return (
        <>
            <ListItemText>
                <Typography variant="inherit" noWrap>
                    Select icon
                </Typography>
            </ListItemText>
            <Box
                component="div"
                sx={{
                    flexGrow: 1,
                    maxWidth: `${widthDialog}px`,
                }}
            >
                <Paper>
                    <TabContext sx={{ maxWidth: 450 }} value={value}>
                        <AppBar position="static" color="default">
                            <div style={{ display: 'inherit' }}>
                                <TabList
                                    variant="scrollable"
                                    scrollButtons
                                    aria-label="visible arrows tabs example"
                                    onChange={(e, newValue) => {
                                        setValue(newValue);
                                    }}
                                >
                                    {list}
                                </TabList>
                            </div>
                        </AppBar>
                        {Object.values(tabs).map((item) => (
                            <TabPanel value={item.key + ''} key={'tabpanel:' + item.key}>
                                {' '}
                                {item}{' '}
                            </TabPanel>
                        ))}
                    </TabContext>
                </Paper>
            </Box>
        </>
    );
}
