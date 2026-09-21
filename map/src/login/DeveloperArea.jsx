import SubTitleMenu from '../frame/components/titles/SubTitleMenu';
import React, { useState } from 'react';
import { Box, Collapse, List } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SimpleItemWithRightInfo from '../frame/components/items/SimpleItemWithRightInfo';
import { ReactComponent as OrderIcon } from '../assets/icons/ic_action_purchases_outlined.svg';
import { ReactComponent as IndexesIcon } from '../assets/icons/ic_action_multi_download.svg';
import { ReactComponent as ReleasesIcon } from '../assets/icons/ic_action_apk.svg';
import { ReactComponent as InfoIcon } from '../assets/icons/ic_action_info_outlined.svg';
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { ReactComponent as FilterIcon } from '../assets/icons/ic_action_filter.svg';
import { ReactComponent as CopyIcon } from '../assets/icons/ic_action_copy.svg';
import DividerWithMargin from '../frame/components/dividers/DividerWithMargin';
import { useTranslation } from 'react-i18next';
import ThickDivider from '../frame/components/dividers/ThickDivider';

// admin pages of the top places photo scoring
const TOP_PHOTOS_URL = `${window.location.origin}/admin/top-photos`;
const topPhotosPages = (t) => [
    {
        name: t('web:top_photos_places'),
        url: TOP_PHOTOS_URL,
        icon: <PlaceOutlinedIcon sx={{ color: 'var(--svg-icon-color)' }} />,
    },
    { name: t('web:top_photos_filter'), url: `${TOP_PHOTOS_URL}/filter`, icon: <FilterIcon /> },
    { name: t('web:top_photos_stat'), url: `${TOP_PHOTOS_URL}/stat`, icon: <InfoIcon /> },
    { name: t('web:top_photos_diff'), url: `${TOP_PHOTOS_URL}/diff`, icon: <CopyIcon /> },
];

export default function DeveloperArea() {
    const { t } = useTranslation();

    const [showTopPhotos, setShowTopPhotos] = useState(false);

    return (
        <>
            <SubTitleMenu text={t('web:developer')} />
            <SimpleItemWithRightInfo
                name={t('web:order_management')}
                icon={<OrderIcon />}
                onClick={() => window.open(`${window.location.origin}/admin/order-mgmt`, '_blank')}
            />
            <DividerWithMargin margin={'64px'} />
            <SimpleItemWithRightInfo
                name={t('web:indexes')}
                icon={<IndexesIcon />}
                onClick={() => window.open(`${window.location.origin}/admin/indexes`, '_blank')}
            />
            <DividerWithMargin margin={'64px'} />
            <SimpleItemWithRightInfo
                name={t('web:releases')}
                icon={<ReleasesIcon />}
                onClick={() => window.open(`${window.location.origin}/admin/releases`, '_blank')}
            />
            <DividerWithMargin margin={'64px'} />
            <SimpleItemWithRightInfo
                name={t('web:info')}
                icon={<InfoIcon />}
                onClick={() => window.open(`${window.location.origin}/admin/info`, '_blank')}
            />
            <DividerWithMargin margin={'64px'} />
            <SimpleItemWithRightInfo
                name={t('web:dev_issues')}
                icon={<InfoIcon />}
                onClick={() => window.open(`https://test.osmand.net/admin/issues`, '_blank')}
            />
            <DividerWithMargin margin={'64px'} />
            <SimpleItemWithRightInfo
                name={t('web:dev_operations')}
                icon={<InfoIcon />}
                onClick={() => window.open(`https://test.osmand.net/admin/operations`, '_blank')}
            />
            <DividerWithMargin margin={'64px'} />
            <SimpleItemWithRightInfo
                name={t('web:dev_search_test')}
                icon={<InfoIcon />}
                onClick={() => window.open(`https://test.osmand.net/admin/search-test`, '_blank')}
            />
            <DividerWithMargin margin={'64px'} />
            <SimpleItemWithRightInfo
                name={t('web:dev_backup_maps')}
                icon={<InfoIcon />}
                onClick={() => window.open(`https://data.osmand.net/backup-maps/`, '_blank')}
            />
            <DividerWithMargin margin={'64px'} />
            <Box>
                <SimpleItemWithRightInfo
                    name={t('web:dev_top_photos')}
                    icon={<PhotoLibraryOutlinedIcon sx={{ color: 'var(--svg-icon-color)' }} />}
                    rightText={
                        showTopPhotos ? (
                            <ExpandLessIcon sx={{ color: 'var(--text-secondary)' }} />
                        ) : (
                            <ExpandMoreIcon sx={{ color: 'var(--text-secondary)' }} />
                        )
                    }
                    onClick={() => setShowTopPhotos(!showTopPhotos)}
                />
                <Collapse in={showTopPhotos} timeout="auto" unmountOnExit>
                    <List disablePadding>
                        {topPhotosPages(t).map((page) => (
                            <React.Fragment key={page.url}>
                                <DividerWithMargin margin={'64px'} />
                                <SimpleItemWithRightInfo
                                    name={page.name}
                                    icon={page.icon}
                                    onClick={() => window.open(page.url, '_blank')}
                                />
                            </React.Fragment>
                        ))}
                    </List>
                </Collapse>
            </Box>
            <ThickDivider mt={'0px'} mb={'0px'} />
        </>
    );
}
