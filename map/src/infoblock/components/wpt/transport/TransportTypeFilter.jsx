import React from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SquareTextBtn from '../../../../frame/components/btns/SquareTextBtn';
import { ROUTE_TYPES } from './TransportStopsRoutes';
import styles from './transport.module.css';

export default function TransportTypeFilter({ routes, selectedType, setSelectedType }) {
    const { t } = useTranslation();

    const getTypeLabel = (type) => t(`web:${ROUTE_TYPES[type].name}`);

    const availableTypes = Object.keys(ROUTE_TYPES).filter((type) => routes.some((r) => r.type === type));

    return (
        <Box className={styles.filterBar}>
            <SquareTextBtn
                text={t('web:transport_filter_all')}
                selected={selectedType === null}
                onClick={() => setSelectedType(null)}
            />
            {availableTypes.length > 0 && (
                <>
                    <Box component="span" className={styles.filterDivider} />
                    {availableTypes.map((type) => (
                        <SquareTextBtn
                            key={type}
                            text={getTypeLabel(type)}
                            selected={selectedType === type}
                            onClick={() => setSelectedType(type)}
                        />
                    ))}
                </>
            )}
        </Box>
    );
}
