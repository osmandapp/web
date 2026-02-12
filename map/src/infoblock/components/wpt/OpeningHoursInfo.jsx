import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ReactComponent as OpeningHoursIcon } from '../../../assets/icons/ic_action_opening_hour_16.svg';
import { localizeWeekTokens } from '../../../util/dateFmt';
import styles from '../wpt/wptDetails.module.css';

const IS_OPEN_PREFIX = 'open:';

export function getOpeningHours(openingHoursString) {
    if (!openingHoursString) {
        return null;
    }
    const openingHoursItems = openingHoursString.split(';').map((item) => item.trim());
    const openingHours = [];
    for (const item of openingHoursItems) {
        const isOpen = item.startsWith(IS_OPEN_PREFIX);
        const text = item.replace(IS_OPEN_PREFIX, '');
        openingHours.push({ isOpen, text });
    }
    return openingHours;
}

export default function OpeningHoursInfo({ openingHours }) {
    const { t } = useTranslation();

    if (!openingHours || openingHours.length === 0) {
        return null;
    }

    const translatedOpeningHours = openingHours.map((item) => {
        const translated = translateOpeningHours(item.text);
        return { ...item, text: translated };
    });

    function translateOpeningHours(text) {
        const patterns = [
            { prefix: 'Will open tomorrow at', stringId: 'will_open_tomorrow_at' },
            { prefix: 'Open 24/7', stringId: 'shared_string_is_open_24_7' },
            { prefix: 'Will open at', stringId: 'will_open_at' },
            { prefix: 'Will close at', stringId: 'will_close_at' },
            { prefix: 'Will open on', stringId: 'will_open_on' },
            { prefix: 'Open from', stringId: 'open_from' },
            { prefix: 'Open till', stringId: 'open_till' },
            { prefix: 'Open', stringId: 'poi_dialog_opening_hours' },
            { prefix: 'off', stringId: 'day_off_label' },
        ];

        for (const { prefix, stringId } of patterns) {
            if (text && text.startsWith(prefix)) {
                const time = text.substring(prefix.length);
                return t(stringId) + localizeWeekTokens(time);
            }
        }
        return text;
    }

    return (
        <List disablePadding>
            {translatedOpeningHours.map((item, index) => (
                <ListItem sx={{ py: 0 }} key={item.text + index}>
                    <ListItemIcon className={item.isOpen ? styles.openingHoursOpenIcon : styles.openingHoursClosedIcon}>
                        <OpeningHoursIcon />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography
                            className={item.isOpen ? styles.openingHoursOpenText : styles.openingHoursClosedText}
                            id={'opening-hours-' + index}
                        >
                            {item.text}
                        </Typography>
                    </ListItemText>
                </ListItem>
            ))}
        </List>
    );
}
