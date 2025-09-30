import { Collapse, IconButton, Link, ListItemIcon, ListItemText, MenuItem, Tooltip, Typography } from '@mui/material';
import styles from './wptDetails.module.css';
import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CUISINE_PREFIX, openWikipediaContent, POI_PREFIX, SEPARATOR, WIKIPEDIA } from './WptTagsProvider';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import MenuItemWithLines from '../../../menu/components/MenuItemWithLines';
import i18n from 'i18next';
import MoreInfoDialog from './MoreInfoDialog';
import AppContext from '../../../context/AppContext';
import capitalize from 'lodash-es/capitalize';
import { translateWithSplit } from '../../../manager/PoiManager';
import { getLanguageName } from '../../../util/LanguageDisplayName';

export default function WptTagInfo({ tag = null, baseTag = null, copy = false, setDevWikiContent = null }) {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [openMoreDialog, setOpenMoreDialog] = useState(null);
    const [tagList, setTagList] = useState(null);
    const [newTag, setNewTag] = useState(null);
    const [hover, setHover] = useState(false);

    function handleCopy(value) {
        navigator.clipboard.writeText(value);
    }

    useEffect(() => {
        if (tag?.collapsable) {
            const items = tag.value.split(SEPARATOR);
            if (items.length > 1) {
                setTagList(items);
            }
        }
        if (tag?.otherLangs) {
            const currentLanguage = i18n.language;
            if (tag.lang === currentLanguage) {
                setTagList(tag.otherLangs);
                return;
            }
            let newTag;
            let ind = tag.otherLangs.findIndex((item) => item.lang === currentLanguage);
            let tagWithoutLangInd = tag.otherLangs.findIndex((item) => !item.lang);
            if (ind > -1) {
                newTag = tag.otherLangs[ind];
                if (tagWithoutLangInd > -1) {
                    newTag.otherLangs = tag.otherLangs.filter(
                        (_, index) => index !== ind && index !== tagWithoutLangInd
                    );
                    newTag.otherLangs.unshift(tag.otherLangs[tagWithoutLangInd], tag);
                } else {
                    newTag.otherLangs = tag.otherLangs.filter((_, index) => index !== ind);
                    newTag.otherLangs.unshift(tag);
                }
            } else {
                if (tagWithoutLangInd > -1) {
                    newTag = tag.otherLangs[tagWithoutLangInd];
                    newTag.otherLangs = [
                        ...tag.otherLangs.slice(0, tagWithoutLangInd),
                        ...tag.otherLangs.slice(tagWithoutLangInd + 1),
                    ];
                    newTag.otherLangs.unshift(tag);
                }
            }
            if (!newTag) {
                if (tag?.otherLangs?.length) {
                    setTagList(tag.otherLangs);
                }
                return;
            }
            setNewTag(newTag);
            setTagList(newTag.otherLangs);
        }
    }, [tag]);

    function wrapValueInLink(tag, value) {
        if (tag.isPhoneNumber) {
            return (
                <Link href={`tel:${value}`} target="_blank" rel="noopener noreferrer">
                    {value}
                </Link>
            );
        }
        if (tag.isEmail) {
            return (
                <Link href={`mailto:${value}`} target="_blank" rel="noopener noreferrer">
                    {value}
                </Link>
            );
        }
        if (tag.url) {
            return (
                <Link href={tag.url} target="_blank" rel="noopener noreferrer">
                    {value}
                </Link>
            );
        }
        if (tag.isUrl) {
            return (
                <Link href={value} target="_blank" rel="noopener noreferrer">
                    {value}
                </Link>
            );
        }
        return value;
    }

    function getText(tag, value) {
        const items = value.split(' • ');
        if (items.length > 1) {
            return items.map((item, index) => (
                <React.Fragment key={index}>
                    {index > 0 && ' • '}
                    {wrapValueInLink(tag, item)}
                </React.Fragment>
            ));
        }
        return wrapValueInLink(tag, value);
    }

    function showPrefix(tag) {
        return tag.value !== tag.textPrefix;
    }

    function prefixContainsValue(tag) {
        return (
            (tag.textPrefix?.endsWith('yes') && tag.value === 'yes') ||
            (tag.textPrefix?.endsWith('no') && tag.value === 'no')
        );
    }

    function prepareValue(item, addPrefix, POI_PREFIX) {
        const hasCuisine = item.startsWith(CUISINE_PREFIX);
        const cuisinePrefix = addPrefix && !hasCuisine ? CUISINE_PREFIX : '';
        const base = hasCuisine ? item.slice(CUISINE_PREFIX.length) : item;

        const preparedItem = cuisinePrefix + item;

        const keyWithPrefix = POI_PREFIX + preparedItem;
        const keyWithoutPrefix = preparedItem;
        const poiOnly = POI_PREFIX + base;
        const noPrefix = base;

        let key = null;

        if (i18n.exists(keyWithPrefix)) {
            key = keyWithPrefix;
        } else if (i18n.exists(keyWithoutPrefix)) {
            key = keyWithoutPrefix;
        } else if (i18n.exists(poiOnly)) {
            key = poiOnly;
        } else if (i18n.exists(noPrefix)) {
            key = noPrefix;
        }

        return key ? translateWithSplit(t, key) : base;
    }

    function prepareValueFromList(tag) {
        const addPrefix = tag.key === 'cuisine';
        if (tag.isUrl) {
            return tag.value;
        }
        if (prefixContainsValue(tag)) {
            tag.value = tag.textPrefix;
        }
        const items = tag.value.split(SEPARATOR);
        if (items.length > 1) {
            const values = items.map((item) => {
                return prepareValue(item, addPrefix, POI_PREFIX);
            });
            return values.join(' • ');
        }
        return prepareValue(tag.value, addPrefix, POI_PREFIX);
    }

    function openMoreInfoDialog(tag) {
        return tag.desc
            ? setOpenMoreDialog({ title: translateWithSplit(t, `${POI_PREFIX}${tag.key}`), content: tag.value })
            : null;
    }

    function getTranslation({ key, mainTag = true }) {
        const preparedKey = key.includes('shared_string_name') ? key : `${POI_PREFIX}${key}`;
        if (preparedKey.includes(':')) {
            const arr = preparedKey.split(':');
            const t = arr[0];
            const lang = arr[1];
            if (mainTag) {
                return capitalize(translateWithSplit(i18n.t, t)) + ': ' + capitalize(getLanguageName(lang));
            }
            return capitalize(getLanguageName(lang));
        }
        if (i18n.exists(preparedKey)) {
            if (mainTag) {
                return capitalize(translateWithSplit(i18n.t, preparedKey));
            }
            return capitalize(translateWithSplit(i18n.t, 'web:lang_local'));
        }
        return capitalize(key);
    }

    function getValue(tag) {
        let value = prepareValueFromList(tag);
        if (tag.collapsable) {
            const items = tag.value.split(SEPARATOR);

            return (
                <>
                    <ListItemText onClick={() => setOpen(!open)}>
                        <MenuItemWithLines
                            name={getTranslation({ key: tag.textPrefix })}
                            maxLines={2}
                            className={styles.tagPrefix}
                        />
                        <MenuItemWithLines name={value} maxLines={1} className={styles.tagName} />
                    </ListItemText>
                    {items.length > 1 && (
                        <IconButton onClick={() => setOpen(!open)}>{open ? <ExpandLess /> : <ExpandMore />}</IconButton>
                    )}
                </>
            );
        } else if (tag.otherLangs) {
            const mainTag = newTag ?? tag;
            const listTags = tagList ?? mainTag.otherLangs;
            value = prepareValueFromList(mainTag);
            return (
                <>
                    <ListItemText onClick={() => setOpen(!open)}>
                        <MenuItemWithLines
                            name={getTranslation({
                                key: mainTag.textPrefix,
                            })}
                            maxLines={2}
                            className={styles.tagPrefix}
                        />
                        <MenuItemWithLines name={value} maxLines={1} className={styles.tagName} />
                    </ListItemText>
                    {listTags.length > 0 && (
                        <IconButton onClick={() => setOpen(!open)}>{open ? <ExpandLess /> : <ExpandMore />}</IconButton>
                    )}
                </>
            );
        } else {
            return (
                <ListItemText onClick={() => openMoreInfoDialog(tag)}>
                    {showPrefix(tag) && (
                        <Typography className={styles.tagPrefix} noWrap>
                            {getTranslation({ key: tag.textPrefix })}
                        </Typography>
                    )}
                    <MenuItemWithLines
                        name={getText(tag, value)}
                        maxLines={tag.desc ? 5 : 2}
                        className={styles.tagName}
                    />
                </ListItemText>
            );
        }
    }

    function isServiceTag(tag) {
        const notString = typeof tag.value !== 'string';
        const isServiceTag =
            tag.key === 'fillOpacity' ||
            tag.key === 'radius' ||
            tag.key === 'color' ||
            tag.key === 'fillColor' ||
            tag.key === 'weight' ||
            tag.key === 'zIndex';
        return notString || isServiceTag;
    }

    return (
        <>
            {tag && !isServiceTag(tag) && (
                <MenuItem
                    style={{ userSelect: 'text' }}
                    disableRipple={!(tag.key === WIKIPEDIA && ctx.develFeatures)}
                    onClick={() => {
                        openWikipediaContent(tag, setDevWikiContent);
                    }}
                    className={styles.tagItem}
                    divider
                >
                    <ListItemIcon className={styles.tagIcon}>{tag.icon}</ListItemIcon>
                    {getValue(tag)}
                </MenuItem>
            )}
            {baseTag && (
                <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <MenuItem disableRipple style={{ userSelect: 'text' }} className={styles.tagItem} divider>
                        <ListItemIcon className={styles.tagIcon}>{baseTag.icon}</ListItemIcon>
                        <ListItemText
                            onClick={() => {
                                if (baseTag.value?.length > 50) {
                                    setOpenMoreDialog({ title: baseTag.name, content: baseTag.value });
                                }
                            }}
                        >
                            <Typography variant="inherit" className={styles.tagPrefix} noWrap>
                                {baseTag.name}
                            </Typography>
                            {baseTag.value && (
                                <Tooltip
                                    title={t('shared_string_copy')}
                                    arrow
                                    placement="bottom"
                                    open={hover && copy}
                                    onClick={() => handleCopy(baseTag.value)}
                                >
                                    <MenuItemWithLines name={baseTag.value} maxLines={3} className={styles.tagName} />
                                </Tooltip>
                            )}
                            {baseTag.link}
                        </ListItemText>
                    </MenuItem>
                </div>
            )}
            {tagList && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    {tagList.map((item, index) =>
                        typeof item === 'string' ? (
                            <MenuItem disableRipple key={index} divider className={styles.tagList}>
                                <Typography key={index} className={styles.tagName}>
                                    {translateWithSplit(t, `${POI_PREFIX}${item}`)}
                                </Typography>
                            </MenuItem>
                        ) : (
                            <MenuItem
                                key={index}
                                style={{ userSelect: 'text' }}
                                disableRipple={!(tag.key === WIKIPEDIA && ctx.develFeatures)}
                                className={styles.tagItem}
                                divider
                            >
                                <ListItemText>
                                    <MenuItemWithLines
                                        name={getTranslation({
                                            key: item.textPrefix,
                                            mainTag: false,
                                        })}
                                        maxLines={2}
                                        className={styles.tagPrefix}
                                    />
                                    <MenuItemWithLines
                                        name={prepareValueFromList(item)}
                                        maxLines={1}
                                        className={styles.tagName}
                                    />
                                </ListItemText>
                            </MenuItem>
                        )
                    )}
                </Collapse>
            )}
            {openMoreDialog && (
                <MoreInfoDialog
                    setOpenMoreDialog={setOpenMoreDialog}
                    title={openMoreDialog.title}
                    content={openMoreDialog.content}
                />
            )}
        </>
    );
}
