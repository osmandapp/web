import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { ReactComponent as ProIcon } from '../../assets/icons/ic_action_osmand_pro_logo_colored.svg';
import BlueButtonWithIcon from '../../frame/components/btns/BlueButtonWithIcon';
import styles from '../trackfavmenu.module.css';
import { useTranslation } from 'react-i18next';
import { openPricingPage } from '../../manager/GlobalManager';
import { findPurchase, getDiscountPercent } from '../../shop/products/ProductManager';
import { fetchSinglePrice } from '../../login/fs/FastSpringHelper';

export default function TracksProBanner() {
    const { t } = useTranslation();

    const annualPurchase = findPurchase('annual', 'osmand-pro');

    const [discountPercent, setDiscountPercent] = useState(getDiscountPercent(annualPurchase));

    useEffect(() => {
        fetchSinglePrice(annualPurchase?.fsName, (purchaseObj) => setDiscountPercent(getDiscountPercent(purchaseObj)));
    }, []);

    return (
        <Box id="se-tracks-pro-banner" className={styles.tracksProBanner}>
            <Box className={styles.tracksProBannerHeader}>
                <ProIcon className={styles.tracksProBannerIcon} />
                <Box className={styles.tracksProBannerTextBlock}>
                    <Typography className={styles.tracksProBannerTitle}>{t('web:empty_cloud_tracks')}</Typography>
                    <Typography className={styles.tracksProBannerDesc}>
                        {t('web:empty_cloud_tracks_description')}
                    </Typography>
                </Box>
            </Box>
            <Box className={styles.tracksProBannerBtnWrap}>
                <BlueButtonWithIcon
                    id={'se-tracks-pro-banner-btn'}
                    text={t('web:get_osmand_pro')}
                    action={() => openPricingPage('osmand_cloud_backup')}
                    icon={
                        discountPercent ? (
                            <span className={styles.tracksProBannerDiscount}>{`-${discountPercent}%`}</span>
                        ) : null
                    }
                />
            </Box>
        </Box>
    );
}
