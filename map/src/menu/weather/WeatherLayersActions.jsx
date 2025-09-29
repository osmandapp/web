import React, { forwardRef, useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Box, Checkbox, FormControlLabel, FormControl, MenuItem, Paper, Typography } from '@mui/material';
import styles from '../trackfavmenu.module.css';
import weatherStyles from './weather.module.css';
import { disableLayers } from '../../manager/WeatherManager';
import ActionItem from '../components/ActionItem';
import { useTranslation } from 'react-i18next';

const WeatherLayersActions = forwardRef((props, ref) => {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();

    const switchLayer = (ctx, index, weatherType) => (e) => {
        ctx.setWeatherLayers((prev) => ({
            ...prev,
            [weatherType]: prev[weatherType].map((l, i) => (i === index ? { ...l, checked: e.target.checked } : l)),
        }));
    };

    function setWeatherStyles(item) {
        let res = [];
        if (item.checked) {
            res.push(weatherStyles.controlLabelSelected);
        } else {
            res.push(weatherStyles.controlLabel);
        }
        if (disableLayers(item, ctx)) {
            res.push(weatherStyles.disabled);
        }
        return res.join(' ');
    }

    return (
        <>
            <Box ref={ref}>
                <Paper id="se-weather-layers-actions" className={styles.actions}>
                    <FormControl sx={{ width: '257px' }}>
                        <MenuItem className={weatherStyles.titleItem}>
                            <Typography className={weatherStyles.titleText} noWrap>
                                {t('menu_layers')}
                            </Typography>
                        </MenuItem>
                        {ctx.weatherLayers &&
                            ctx.weatherLayers[ctx.weatherType].map((item, index) => (
                                <FormControlLabel
                                    className={setWeatherStyles(item)}
                                    disableTypography={true}
                                    key={item.key}
                                    label={<ActionItem item={item} />}
                                    labelPlacement="start"
                                    control={
                                        <Checkbox
                                            id={'se-weather-layer-' + index}
                                            className={weatherStyles.checkbox}
                                            size="small"
                                            disabled={disableLayers(item, ctx)}
                                            checked={item.checked}
                                            onChange={switchLayer(ctx, index, ctx.weatherType)}
                                        />
                                    }
                                ></FormControlLabel>
                            ))}
                    </FormControl>
                </Paper>
            </Box>
        </>
    );
});

WeatherLayersActions.displayName = 'WeatherLayersActions';
export default WeatherLayersActions;
