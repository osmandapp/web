import React, { useContext, useState } from 'react';
import { Box, Button, Collapse, Paper } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import AppContext from '../../context/AppContext';
import LoginContext from '../../context/LoginContext';
import { downloadTravelReviews } from '../../menu/travel/TravelMenu';
import SelectItem from '../components/items/SelectItem';
import GrayBtnWithBlueHover from '../components/btns/GrayBtnWithBlueHover';
import styles from '../../map/map.module.css';

const HOUR_MS = 3600 * 1000;
const PERIODS = [
    { hours: 24, name: 'web:travel_reviews_period_day' },
    { hours: 24 * 7, name: 'web:travel_reviews_period_week' },
    { hours: 24 * 30, name: 'web:travel_reviews_period_month' },
    { hours: 0, name: 'web:travel_reviews_period_all' },
];

// the admin download of the reviewed tracks, as the Admin panel of public/prototypes/heatmap.html
export default function TravelReviewsAdminPanel() {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);

    const { t } = useTranslation();

    const [open, setOpen] = useState(false);
    const [hours, setHours] = useState(PERIODS[0].hours);

    if (!ctx.openTravel || !ltx.isAdmin()) {
        return null;
    }

    function download() {
        downloadTravelReviews(hours ? new Date(Date.now() - hours * HOUR_MS).toISOString() : null);
    }

    return (
        <Paper className={styles.travelReviewsAdmin}>
            <Button
                id="se-travel-reviews-admin"
                className={styles.travelReviewsAdminHead}
                onClick={() => setOpen(!open)}
                endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            >
                {t('web:travel_reviews_admin')}
            </Button>
            <Collapse in={open} unmountOnExit>
                <SelectItem
                    title={t('web:travel_reviews')}
                    value={hours}
                    options={PERIODS}
                    getOptionLabel={(period) => t(period.name)}
                    getOptionValue={(period) => period.hours}
                    onSelect={setHours}
                    showDivider={false}
                />
                <Box className={styles.travelReviewsAdminDownload}>
                    <GrayBtnWithBlueHover
                        id="se-travel-reviews-admin-download"
                        action={download}
                        text={t('web:travel_reviews_admin_download')}
                    />
                </Box>
            </Collapse>
        </Paper>
    );
}
