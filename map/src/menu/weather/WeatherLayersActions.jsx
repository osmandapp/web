import React, { forwardRef, useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Box, Checkbox, FormControlLabel, MenuItem, Paper, Typography } from '@mui/material';
import styles from '../trackfavmenu.module.css';
import weatherStyles from './weather.module.css';
import { FormControl } from '@mui/material/';
import { disableLayers } from '../../manager/WeatherManager';
import ActionItem from '../components/ActionItem';

const WeatherLayersActions = forwardRef((props, ref) => {
    const ctx = useContext(AppContext);

    const switchLayer = (ctx, index, weatherType) => (e) => {
        let newLayers = { ...ctx.weatherLayers };
        newLayers[weatherType][index].checked = e.target.checked;
        ctx.setWeatherLayers(newLayers);
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
                                Map layers
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
