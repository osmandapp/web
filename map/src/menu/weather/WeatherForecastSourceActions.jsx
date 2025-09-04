import React, { forwardRef, useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Box, FormControlLabel, FormControl, MenuItem, Paper, Radio, RadioGroup, Typography } from '@mui/material';
import styles from '../trackfavmenu.module.css';
import weatherStyles from './weather.module.css';
import { ReactComponent as WeatherIcon } from '../../assets/menu/ic_action_umbrella.svg';
import {
    ECWMF_WEATHER_TYPE,
    GFS_WEATHER_TYPE,
    LOCAL_STORAGE_WEATHER_FORECAST_WEEK,
} from '../../manager/WeatherManager';
import ActionItem from '../components/ActionItem';
import { useTranslation } from 'react-i18next';
import { FORECAST_SOURCE_PARAM } from './Weather';
import { useUpdateQueryParam } from '../../util/hooks/menu/useUpdateQueryParam';

export const weatherTypes = {
    GFS: {
        icon: <WeatherIcon className={weatherStyles.icon} />,
        name: 'GFS',
    },
    ECWMF: {
        icon: <WeatherIcon className={weatherStyles.icon} />,
        name: 'ECWMF',
    },
};

const WeatherForecastSourceActions = forwardRef(({ setOpenActions = null }, ref) => {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();

    const updateQueryParam = useUpdateQueryParam();

    const handleWeatherType = (e) => {
        const selectedType = e.target.value;
        if (selectedType !== null && selectedType !== ctx.weatherType) {
            localStorage.removeItem(LOCAL_STORAGE_WEATHER_FORECAST_WEEK);
            ctx.setWeatherType(selectedType);
            updateQueryParam(FORECAST_SOURCE_PARAM, selectedType);
            ctx.setForecastLoading(true);
            if (setOpenActions) {
                setOpenActions(false);
            }
        }
    };

    function setWeatherTypeStyles(type) {
        let res = [];
        if (ctx.weatherType === type) {
            res.push(weatherStyles.controlLabelSelected);
        } else {
            res.push(weatherStyles.controlLabel);
        }
        return res.join(' ');
    }

    return (
        <>
            <Box ref={ref}>
                <Paper id="se-weather-source-actions" className={styles.actions}>
                    <MenuItem className={weatherStyles.titleItem}>
                        <Typography className={weatherStyles.titleText} noWrap>
                            {t('web:weather_source')}
                        </Typography>
                    </MenuItem>
                    <FormControl sx={{ width: '257px' }}>
                        <RadioGroup value={ctx.weatherType} onChange={handleWeatherType}>
                            <FormControlLabel
                                id={'se-GFS'}
                                className={setWeatherTypeStyles(GFS_WEATHER_TYPE)}
                                disableTypography={true}
                                labelPlacement="start"
                                value={GFS_WEATHER_TYPE}
                                control={<Radio className={styles.control} size="small" />}
                                label={<ActionItem item={weatherTypes.GFS} />}
                            />
                            <FormControlLabel
                                id={'se-ECWMF'}
                                className={setWeatherTypeStyles(ECWMF_WEATHER_TYPE)}
                                disableTypography={true}
                                labelPlacement="start"
                                value={ECWMF_WEATHER_TYPE}
                                control={<Radio className={styles.control} size="small" />}
                                label={<ActionItem item={weatherTypes.ECWMF} />}
                            />
                        </RadioGroup>
                    </FormControl>
                </Paper>
            </Box>
        </>
    );
});

WeatherForecastSourceActions.displayName = 'WeatherForecastSourceActions';
export default WeatherForecastSourceActions;
