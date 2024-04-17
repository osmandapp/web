import { Collapse, IconButton, Link, ListItemIcon, ListItemText, MenuItem, Tooltip, Typography } from '@mui/material';
import styles from './wptDetails.module.css';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { POI_PREFIX, SEPARATOR } from './WptTagsProvider';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import MenuItemsTitle from '../../../menu/components/MenuItemsTitle';
import i18n from 'i18next';
import MoreInfoDialog from './MoreInfoDialog';

export default function WptTagInfo({ tag = null, baseTag = null, copy = false }) {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [openMoreDialog, setOpenMoreDialog] = useState(null);
    const [tagList, setTagList] = useState(null);
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
    }, [tag]);

    function getText(tag, value) {
        return tag.isUrl ? (
            <Link href={value} target="_blank" rel="noopener noreferrer">
                {value}
            </Link>
        ) : (
            value
        );
    }

    function showPrefix(tag) {
        return !tag.isPhoneNumber && !tag.isUrl && tag.value !== tag.textPrefix;
    }

    function prefixContainsValue(tag) {
        return (
            (tag.textPrefix.endsWith('yes') && tag.value === 'yes') ||
            (tag.textPrefix.endsWith('no') && tag.value === 'no')
        );
    }

    function prepareValue(item, addPrefix, POI_PREFIX) {
        const prefix = addPrefix && !item.startsWith('cuisine_') ? 'cuisine_' : '';
        const keyWithPrefix = `${POI_PREFIX}${prefix}${item}`;
        const keyWithoutPrefix = `${prefix}${item}`;
        // Check if translation with POI_PREFIX exists, if not use without POI_PREFIX
        const key = i18n.exists(keyWithPrefix) ? keyWithPrefix : keyWithoutPrefix;
        return t(key);
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

    function getValue(tag) {
        const value = prepareValueFromList(tag);
        if (tag.collapsable) {
            const items = tag.value.split(SEPARATOR);

            return (
                <>
                    <ListItemText onClick={() => setOpen(!open)}>
                        <MenuItemsTitle
                            name={t(`${POI_PREFIX}${tag.textPrefix}`)}
                            maxLines={2}
                            className={styles.tagPrefix}
                        />
                        <MenuItemsTitle name={value} maxLines={1} className={styles.tagName} />
                    </ListItemText>
                    {items.length > 1 && (
                        <IconButton onClick={() => setOpen(!open)}>{open ? <ExpandLess /> : <ExpandMore />}</IconButton>
                    )}
                </>
            );
        } else {
            return (
                <ListItemText
                    onClick={() => setOpenMoreDialog({ title: t(`${POI_PREFIX}${tag.key}`), content: tag.value })}
                >
                    {showPrefix(tag) && (
                        <Typography className={styles.tagPrefix} noWrap>
                            {t(`${POI_PREFIX}${tag.textPrefix}`)}
                        </Typography>
                    )}
                    <MenuItemsTitle name={getText(tag, value)} maxLines={tag.desc ? 5 : 2} className={styles.tagName} />
                </ListItemText>
            );
        }
    }

    return (
        <>
            {tag && (
                <MenuItem style={{ userSelect: 'text' }} disableRipple className={styles.tagItem} divider>
                    <ListItemIcon className={styles.tagIcon}>{tag.icon}</ListItemIcon>
                    {getValue(tag)}
                </MenuItem>
            )}
            {baseTag && (
                <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <MenuItem disableRipple style={{ userSelect: 'text' }} className={styles.tagItem} divider>
                        <ListItemIcon className={styles.tagIcon}>{baseTag.icon}</ListItemIcon>
                        {baseTag.isDesc ? (
                            <ListItemText
                                onClick={() => setOpenMoreDialog({ title: baseTag.name, content: baseTag.value })}
                            >
                                <Typography variant="inherit" className={styles.tagPrefix} noWrap>
                                    {baseTag.name}
                                </Typography>
                                <MenuItemsTitle name={baseTag.value} maxLines={3} className={styles.tagName} />
                            </ListItemText>
                        ) : (
                            <>
                                <ListItemText>
                                    <Typography variant="inherit" className={styles.tagName}>
                                        {baseTag.name}
                                    </Typography>
                                </ListItemText>
                                <Tooltip
                                    title={t('shared_string_copy')}
                                    arrow
                                    placement="bottom"
                                    open={hover && copy}
                                    onClick={() => handleCopy(baseTag.value)}
                                >
                                    <Typography variant="inherit" className={styles.tagValue}>
                                        {baseTag.value}
                                    </Typography>
                                </Tooltip>
                            </>
                        )}
                    </MenuItem>
                </div>
            )}
            {tagList && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    {tagList.map((item, index) => (
                        <MenuItem disableRipple key={index} divider className={styles.tagList}>
                            <Typography key={index} className={styles.tagName}>
                                {t(`${POI_PREFIX}${item}`)}
                            </Typography>
                        </MenuItem>
                    ))}
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
