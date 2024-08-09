import gStyles from '../gstylesmenu.module.css';
import { Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function SubTitle({ title, hasTranslation = true }) {
    const { t } = useTranslation();

    return (
        <MenuItem className={gStyles.innerTitleItem}>
            <Typography className={gStyles.innerTitleText} noWrap>
                {hasTranslation ? t(title) : title}
            </Typography>
        </MenuItem>
    );
}
