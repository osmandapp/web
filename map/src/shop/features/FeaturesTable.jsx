import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { features, planFeatures } from './FeaturesManager';
import { ReactComponent as CheckIcon } from '../../assets/icons/ic_action_checkmark_colored_day.svg';
import { ReactComponent as ItemNotIncludedIcon } from '../../assets/icons/ic_action_item_not_included.svg';
import React from 'react';
import styles from '../shop.module.css';
import { useTranslation } from 'react-i18next';
import { products } from '../products/ProductManager';

const grouped = features.reduce((acc, feat) => {
    (acc[feat.category] = acc[feat.category] || []).push(feat);
    return acc;
}, {});

export default function FeaturesTable() {
    const { t } = useTranslation();

    const plans = products.filter((p) => p.show).map((p) => ({ key: p.id, label: t(p.name) }));

    return (
        <TableContainer className={styles.pricingTableContainer}>
            <Table className={styles.pricingTable}>
                <TableHead>
                    <TableRow>
                        <TableCell>{t('features_menu_group')}</TableCell>
                        {plans.map((plan) => (
                            <TableCell key={plan.key} className={styles.planCell}>
                                {plan.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.entries(grouped).map(([category, feats]) => (
                        <React.Fragment key={category}>
                            <TableRow className={styles.categoryRow}>
                                {category !== t('features_menu_group') && (
                                    <TableCell className={styles.categoryCell} colSpan={plans.length + 1}>
                                        {category}
                                    </TableCell>
                                )}
                            </TableRow>
                            {feats.map((feat) => (
                                <React.Fragment key={feat.id}>
                                    <TableRow key={feat.id} className={styles.featureRow}>
                                        <TableCell className={styles.featureCell}>
                                            <div className={styles.featureWrapper}>
                                                <div className={styles.featureIcon}>{feat.icon}</div>
                                                <div className={styles.featureContent}>
                                                    <div className={styles.featureName}>{t(feat.name)}</div>
                                                    <div className={styles.featureDesc}>{t(feat.desc)}</div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        {plans.map((plan) => (
                                            <TableCell key={plan.key} className={styles.planCell}>
                                                {planFeatures[plan.key].includes(feat.id) ? (
                                                    <CheckIcon className={styles.checkIcon} />
                                                ) : (
                                                    <ItemNotIncludedIcon className={styles.checkIcon} />
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </React.Fragment>
                            ))}
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
