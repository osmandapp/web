import { Collapse, IconButton, Link, ListItemIcon, ListItemText, MenuItem, Tooltip, Typography } from '@mui/material';
import styles from './wptDetails.module.css';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { OPENING_HOURS, POI_PREFIX, SEPARATOR } from './WptTagsProvider';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import MenuItemsTitle from '../../../menu/components/MenuItemsTitle';

export default function WptTagInfo({ tag = null, baseTag = null, copy = false }) {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
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

    function getText(tag) {
        return tag.isUrl ? (
            <Link href={tag.value} target="_blank" rel="noopener noreferrer">
                {tag.value}
            </Link>
        ) : tag.isPhoneNumber || tag.key === 'email' ? (
            tag.value
        ) : tag.textPrefix ? (
            t(tag.textPrefix)
        ) : (
            t(`${POI_PREFIX}${tag.key}`)
        );
    }

    function getValue(tag) {
        if (tag.collapsable) {
            const items = tag.value.split(SEPARATOR);

            return (
                <>
                    <ListItemText onClick={() => setOpen(!open)}>
                        <ListItemText>
                            <MenuItemsTitle
                                name={t(`${POI_PREFIX}${tag.textPrefix}`)}
                                maxLines={2}
                                className={styles.tagName}
                            />
                            <Typography variant="caption" noWrap>
                                {t(`${POI_PREFIX}${items[0]}`)}
                            </Typography>
                        </ListItemText>
                    </ListItemText>
                    {items.length > 1 && (
                        <IconButton onClick={() => setOpen(!open)}>{open ? <ExpandLess /> : <ExpandMore />}</IconButton>
                    )}
                </>
            );
        } else {
            return (
                <ListItemText>
                    <MenuItemsTitle name={getText(tag)} maxLines={2} className={styles.tagName} />
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
                    </MenuItem>
                </div>
            )}
            {tagList && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    {tagList.map((item, index) => (
                        <MenuItem key={index} divider>
                            <Typography key={index} variant="caption" style={{ paddingLeft: 20 }}>
                                {t(`${POI_PREFIX}${item}`)}
                            </Typography>
                        </MenuItem>
                    ))}
                </Collapse>
            )}
        </>
    );
}
