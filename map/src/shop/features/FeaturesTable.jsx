import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {features, planFeatures} from "./FeaturesManager";
import { ReactComponent as CheckIcon } from '../../assets/icons/ic_action_checkmark_colored_day.svg';
import React from 'react';
import styles from '../shop.module.css';
import {useTranslation} from "react-i18next";

const plans = [
    { key: 'osmand-start', label: 'Start' },
    { key: 'osmand-maps-plus', label: 'Maps+' },
    { key: 'osmand-pro', label: 'OsmAnd Pro' },
];

const grouped = features.reduce((acc, feat) => {
    (acc[feat.category] = acc[feat.category] || []).push(feat);
    return acc;
}, {});

export default function FeaturesTable() {

    const { t } = useTranslation();

    return (
        <TableContainer component={Paper} className={styles.pricingTableContainer}>
            <Table className={styles.pricingTable}>
                <TableHead>
                    <TableRow>
                        <TableCell />
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
                            <TableRow className="categoryRow">
                                <TableCell className="categoryCell" colSpan={plans.length + 1}>
                                    {category}
                                </TableCell>
                            </TableRow>
                            {feats.map((feat) => (
                                <TableRow key={feat.id} className="featureRow">
                                    <TableCell className="featureCell">
                                        <div className={styles.featureName}>
                                            {feat.icon}
                                            <span>{t(feat.name)}</span>
                                        </div>
                                        <div className={styles.featureDesc}>{t(feat.desc)}</div>
                                    </TableCell>
                                    {plans.map((plan) => (
                                        <TableCell key={plan.key} className={styles.planCell}>
                                            {planFeatures[plan.key].includes(feat.id) && (
                                                <CheckIcon className={styles.checkIcon} />
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}