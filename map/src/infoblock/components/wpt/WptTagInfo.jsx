import { Collapse, IconButton, Link, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import styles from './wptDetails.module.css';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { OPENING_HOURS, SEPARATOR } from './WptTagsProvider';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import MenuItemsTitle from '../../../menu/components/MenuItemsTitle';

export default function WptTagInfo({ tag = null, baseTag = null }) {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [tagList, setTagList] = useState(null);

    useEffect(() => {
        if (tag?.collapsable) {
            const items = tag.value.split(SEPARATOR);
            if (items.length > 1) {
                setTagList(items);
            }
        }
    }, [tag]);

    function getValue(tag) {
        if (tag.collapsable) {
            const items = tag.value.split(SEPARATOR);

            return (
                <>
                    <ListItemText onClick={() => setOpen(!open)}>
                        <ListItemText>
                            <MenuItemsTitle name={t(`poi_${tag.textPrefix}`)} maxLines={2} className={styles.tagName} />
                            <Typography variant="caption" noWrap>
                                {t(`poi_${items[0]}`)}
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
                    <Typography variant="inherit" className={styles.tagName}>
                        {tag.isUrl ? (
                            <Link href={tag.value} target="_blank" rel="noopener noreferrer">
                                {tag.value}
                            </Link>
                        ) : tag.isPhoneNumber || tag.key === OPENING_HOURS || tag.key === 'email' ? (
                            tag.value
                        ) : (
                            t(`poi_${tag.key}`)
                        )}
                    </Typography>
                </ListItemText>
            );
        }
    }

    return (
        <>
            {tag && (
                <MenuItem className={styles.tagItem} divider>
                    <ListItemIcon className={styles.tagIcon}>{tag.icon}</ListItemIcon>
                    {getValue(tag)}
                </MenuItem>
            )}
            {baseTag && (
                <MenuItem className={styles.tagItem} divider>
                    <ListItemIcon className={styles.tagIcon}>{baseTag.icon}</ListItemIcon>
                    <ListItemText>
                        <Typography variant="inherit" className={styles.tagName}>
                            {baseTag.name}
                        </Typography>
                    </ListItemText>
                    <Typography variant="inherit" className={styles.tagValue}>
                        {baseTag.value}
                    </Typography>
                </MenuItem>
            )}
            {tagList && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    {tagList.map((item, index) => (
                        <MenuItem key={index} divider>
                            <Typography key={index} variant="caption" style={{ paddingLeft: 20 }}>
                                {t(`poi_${item}`)}
                            </Typography>
                        </MenuItem>
                    ))}
                </Collapse>
            )}
        </>
    );
}
