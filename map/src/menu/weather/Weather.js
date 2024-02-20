import React, { useContext, useEffect, useRef, useState } from 'react';
import {
    Alert,
    AppBar,
    Box,
    Button,
    CircularProgress,
    Divider,
    IconButton,
    MenuItem,
    ToggleButton,
    ToggleButtonGroup,
    Toolbar,
    Tooltip,
    Typography,
} from '@mui/material';
import { NavigateBefore, NavigateNext, RestartAlt } from '@mui/icons-material';
import AppContext, { OBJECT_TYPE_WEATHER } from '../../context/AppContext';
import WeatherManager, { ECWMF_WEATHER_TYPE, GFS_WEATHER_TYPE } from '../../manager/WeatherManager';
import { ReactComponent as ForecastSourceIcon } from '../../assets/icons/ic_action_umbrella.svg';
import { ReactComponent as WeatherLayersIcon } from '../../assets/icons/ic_map_configure_map.svg';
import headerStyles from '../trackfavmenu.module.css';
import styles from '../configuremap/configuremap.module.css';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import { closeHeader } from '../actions/HeaderHelper';
import ActionsMenu from '../actions/ActionsMenu';
import WeatherForecastSourceActions from './WeatherForecastSourceActions';
import WeatherLayersActions from './WeatherLayersActions';

export default function Weather() {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const MIN_WEATHER_DAYS = -2;
    const MAX_WEATHER_DAYS = +7;

    const [loadingWeatherForecast, setLoadingWeatherForecast] = useState(false);
    const [resultText, setResultText] = useState(null);

    const [openForecastActions, setOpenForecastActions] = useState(false);
    const [openLayersActions, setOpenLayersActions] = useState(false);
    const anchorForecastSource = useRef(null);
    const anchorWeatherLayers = useRef(null);

    const currentDiffHours =
        Math.trunc(ctx.weatherDate.getTime() / (3600 * 1000)) - Math.trunc(new Date().getTime() / (3600 * 1000));

    const handleWeatherType = (event, selectedType) => {
        if (selectedType !== null && selectedType !== ctx.weatherType) {
            ctx.setWeatherType(selectedType);
        }
    };

    function addWeatherHours(ctx, hours) {
        const dt = new Date(ctx.weatherDate.getTime() + hours * 60 * 60 * 1000);
        ctx.setWeatherDate(dt);
    }

    function resetWeatherDate() {
        const alignedStep = getAlignedStep({ direction: 0, diffHours: 0, date: new Date() });
        if (alignedStep) {
            const alignedDate = new Date(new Date().getTime() + alignedStep * 60 * 60 * 1000);
            ctx.setWeatherDate(alignedDate);
        } else {
            ctx.setWeatherDate(new Date());
        }
    }

    useEffect(() => {
        if (ctx.currentObjectType === OBJECT_TYPE_WEATHER) {
            WeatherManager.displayWeatherForecast(ctx, ctx.setWeatherPoint, ctx.weatherType).then();
        }
        if (ctx.weatherType) {
            const alignedStep = getAlignedStep({ direction: 0 });
            if (alignedStep) {
                addWeatherHours(ctx, alignedStep); // step current when need
            }
        }
    }, [ctx.weatherType]);

    useEffect(() => {
        let weatherDateObj = ctx.weatherDate;
        let hourstr = 'now';
        let hours = currentDiffHours;

        if (hours !== 0) {
            let day = 0;
            while (hours >= 24) {
                day++;
                hours -= 24;
            }
            if (day > 0) {
                if (day === 1) {
                    hourstr = '+ ' + day + ' day ';
                } else {
                    hourstr = '+ ' + day + ' days ';
                }
                hours = hours - (hours % 3);
            } else if (hours > 0) {
                hourstr = '+';
            }
            if (hours > 0) {
                hourstr += hours + ' hours';
            } else if (hours < 0) {
                hourstr = hours + ' hours';
            }
        }

        setResultText(`${weatherDateObj.toDateString()}  ${weatherDateObj.getHours()}:00 [${hourstr}].`);
    }, [ctx.weatherPoint, ctx.setWeatherPoint, ctx.weatherDate, ctx.setWeatherDate, ctx.setWeatherLayers]);

    function getBaseStep(diffHours) {
        if (ctx.weatherType === ECWMF_WEATHER_TYPE) {
            return Math.abs(diffHours) + new Date().getUTCHours() >= 120 ? 6 : 3;
        }
        if (ctx.weatherType === GFS_WEATHER_TYPE) {
            return Math.abs(diffHours) >= 24 ? 3 : 1;
        }
        return 0;
    }

    // align-backward (<0) align-forward (>0) else just align if needed
    function getAlignedStep({ direction, diffHours = currentDiffHours, date = ctx.weatherDate }) {
        const baseStep = getBaseStep(diffHours);

        const baseStepWithDirection = direction < 0 ? -baseStep : direction > 0 ? +baseStep : 0;
        const newHoursUTC = new Date(date.getTime() + baseStepWithDirection * 3600 * 1000).getUTCHours();

        if (newHoursUTC % baseStep === 0) {
            return baseStepWithDirection;
        }

        const currentHoursUTC = date.getUTCHours();
        return direction < 0 ? -(currentHoursUTC % baseStep) : +(baseStep - (currentHoursUTC % baseStep));
    }

    function getActions(e, anchorEl, setOpenActions) {
        setOpenActions(true);
        ctx.setOpenedPopper(anchorEl);
        e.stopPropagation();
    }

    return (
        <Box minWidth={ctx.infoBlockWidth} maxWidth={ctx.infoBlockWidth} sx={{ overflow: 'hidden' }}>
            <AppBar position="static" className={headerStyles.appbar}>
                <Toolbar className={headerStyles.toolbar}>
                    <IconButton
                        variant="contained"
                        type="button"
                        className={styles.closeIcon}
                        onClick={() => closeHeader(ctx)}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography id="se-configure-map-menu-name" component="div" className={headerStyles.title}>
                        {t('shared_string_weather')}
                    </Typography>
                    <Tooltip key={'forecast_source'} title={t('web:forecast_source')} arrow placement="bottom-end">
                        <span>
                            <IconButton
                                id="se-forecast_source"
                                variant="contained"
                                type="button"
                                className={headerStyles.appBarIcon}
                                onClick={(e) => getActions(e, anchorForecastSource, setOpenForecastActions)}
                                ref={anchorForecastSource}
                            >
                                <ForecastSourceIcon />
                            </IconButton>
                        </span>
                    </Tooltip>
                    <Tooltip key={'weather_layers'} title={t('web:weather_layers')} arrow placement="bottom-end">
                        <span>
                            <IconButton
                                id="se-weather_layers"
                                variant="contained"
                                type="button"
                                className={headerStyles.appBarIcon}
                                onClick={(e) => getActions(e, anchorWeatherLayers, setOpenLayersActions)}
                                ref={anchorWeatherLayers}
                            >
                                <WeatherLayersIcon />
                            </IconButton>
                        </span>
                    </Tooltip>
                </Toolbar>
            </AppBar>
            <ToggleButtonGroup
                color="primary"
                value={ctx.weatherType}
                exclusive
                fullWidth={true}
                onChange={handleWeatherType}
                aria-label="Platform"
            >
                <ToggleButton value={GFS_WEATHER_TYPE}>GFS</ToggleButton>
                <ToggleButton value={ECWMF_WEATHER_TYPE}>ECWMF</ToggleButton>
            </ToggleButtonGroup>
            <Alert severity="info">{resultText}</Alert>
            <MenuItem disableRipple={true}>
                <IconButton sx={{ ml: 1 }} disabled={currentDiffHours === 0} onClick={resetWeatherDate}>
                    <RestartAlt sx={{ color: '#ff8800' }} />
                </IconButton>
                <IconButton
                    sx={{ ml: 6 }}
                    disabled={currentDiffHours <= MIN_WEATHER_DAYS * 24}
                    onClick={() => addWeatherHours(ctx, getAlignedStep({ direction: -1 }))}
                >
                    <NavigateBefore />
                </IconButton>
                <Typography>
                    {ctx.weatherDate.toLocaleDateString() + ' ' + ctx.weatherDate.getHours() + ':00'}
                </Typography>
                <IconButton
                    disabled={currentDiffHours >= MAX_WEATHER_DAYS * 24}
                    onClick={() => addWeatherHours(ctx, getAlignedStep({ direction: +1 }))}
                >
                    <NavigateNext />
                </IconButton>
                {loadingWeatherForecast ? <CircularProgress size={18} sx={{ ml: 6 }} /> : <></>}
            </MenuItem>
            <Divider />
            <Button
                variant="contained"
                component="span"
                sx={{ mx: 2 }}
                onClick={() =>
                    WeatherManager.displayWeatherForecast(
                        ctx,
                        ctx.setWeatherPoint,
                        ctx.weatherType,
                        setLoadingWeatherForecast
                    )
                }
            >
                Weather Forecast
            </Button>
            <ActionsMenu
                open={openForecastActions}
                setOpen={setOpenForecastActions}
                anchorEl={anchorForecastSource}
                actions={<WeatherForecastSourceActions setOpenActions={setOpenForecastActions} />}
            />
            <ActionsMenu
                open={openLayersActions}
                setOpen={setOpenLayersActions}
                anchorEl={anchorWeatherLayers}
                actions={<WeatherLayersActions />}
            />
        </Box>
    );
}
