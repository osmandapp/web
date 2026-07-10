import React, { useContext } from 'react';
import { Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import capitalize from 'lodash-es/capitalize';
import AppContext from '../../../context/AppContext';
import DefaultItem from '../../../frame/components/items/DefaultItem';
import DividerWithMargin from '../../../frame/components/dividers/DividerWithMargin';
import { ReactComponent as ActivityIcon } from '../../../assets/icons/ic_action_activity.svg';
import { ReactComponent as DescIcon } from '../../../assets/icons/ic_action_info_outlined.svg';
import { ReactComponent as LinkIcon } from '../../../assets/icons/ic_action_link.svg';
import { ReactComponent as TagsIcon } from '../../../assets/icons/ic_group.svg';
import { ReactComponent as CalendarIcon } from '../../../assets/icons/ic_action_calendar_16.svg';

export default function TravelTrackInfo() {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const file = ctx.selectedGpxFile;
    const activity = file?.activity ? capitalize(String(file.activity).replaceAll('_', ' ')) : null;
    const tags = file?.tags?.length ? file.tags.join(', ') : null;
    const date = file?.date ? String(file.date).slice(0, 10) : null;
    const osmUrl =
        file?.id != null && file?.user
            ? `https://www.openstreetmap.org/user/${encodeURIComponent(file.user)}/traces/${file.id}`
            : null;

    const rows = [
        file?.description && {
            key: 'description',
            icon: <DescIcon />,
            name: t('shared_string_description'),
            value: file.description,
        },
        activity && { key: 'activity', icon: <ActivityIcon />, name: t('web:shared_string_activity'), value: activity },
        file?.id != null && {
            key: 'osmid',
            icon: <LinkIcon />,
            name: 'OSM ID',
            // render as a link (like WptDetails), or plain id when there is no user for the OSM url
            value: osmUrl ? (
                <Link href={osmUrl} target="_blank" rel="noopener noreferrer">
                    {String(file.id)}
                </Link>
            ) : (
                String(file.id)
            ),
        },
        tags && { key: 'tags', icon: <TagsIcon />, name: t('web:shared_string_tags'), value: tags },
        date && { key: 'date', icon: <CalendarIcon />, name: t('web:date_added'), value: date },
    ].filter(Boolean);

    if (rows.length === 0) {
        return null;
    }

    return (
        <>
            {rows.map((row, i) => (
                <React.Fragment key={row.key}>
                    <DefaultItem icon={row.icon} name={row.name} additionalInfo={row.value} revertText={true} />
                    {i < rows.length - 1 && <DividerWithMargin margin={'64px'} />}
                </React.Fragment>
            ))}
        </>
    );
}
