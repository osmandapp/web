import React, { useState, useEffect, useContext } from 'react';
import {
    Button,
    Checkbox,
    FormControlLabel,
    FormControl,
    InputLabel,
    Box,
    IconButton,
    Tooltip,
    Select,
    MenuItem,
} from '@mui/material/';
import CloseIcon from '@mui/icons-material/Close';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AppContext from '../context/AppContext';

export default function RouteProfileSettingsDialog({ geoRouter, useDev, setOpenSettings }) {
    const ctx = useContext(AppContext);

    geoRouter = geoRouter || ctx.routeObject; // trackRouter callers specify distinct geoRouter

    // Close = Accept
    const handleCloseAccept = () => {
        setOpenSettings(false);
        saveParams();
    };

    // Reset options
    const handleReset = () => {
        setOpts(geoRouter.getResetParams());
    };

    const saveParams = () => {
        if (opts) {
            geoRouter.onParamsChanged({ params: opts });
        }
    };

    const onChangeRouter = (e) => {
        saveParams();
        geoRouter.onRouterProfileSelected({ router: e.target.value });
    };

    const onChangeProfile = (e) => {
        saveParams();
        geoRouter.onRouterProfileSelected({ profile: e.target.value });
    };

    let section = '';

    function checkSection(newSection) {
        if (newSection === section) {
            return false;
        }
        section = newSection;
        return true;
    }

    function checkDevSection(opt) {
        if (!useDev) {
            return opt.section !== 'Development';
        } else return true;
    }

    const onSelect = (key, opts, setOpts) => (e) => {
        let nopts = Object.assign({}, opts);
        nopts[key].value = e.target.value;
        setOpts(nopts);
    };

    const onCheckBox = (key, opts, setOpts) => () => {
        let nopts = Object.assign({}, opts);
        if (nopts[key].group) {
            nopts[key].value = true;
            Object.values(nopts).forEach((oldOpt) => {
                if (oldOpt.group === nopts[key].group && key !== oldOpt.key && oldOpt.value) {
                    oldOpt.value = false;
                }
            });
        } else {
            nopts[key].value = !nopts[key].value;
        }
        setOpts(nopts);
    };

    const showReset = () => {
        return geoRouter.isParamsChanged({ params: opts });
    };

    const [opts, setOpts] = useState();

    useEffect(() => {
        setOpts(geoRouter.getParams());
    }, [geoRouter.getEffectDeps()]);

    const { router, profile } = geoRouter.getProfile();

    return (
        <Dialog open={true} onClose={handleCloseAccept}>
            <Box display="flex">
                <Box flexGrow={1}>
                    <DialogTitle>Routing Provider Settings</DialogTitle>
                </Box>
                <Box>
                    <IconButton onClick={handleCloseAccept}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </Box>

            <DialogContent>
                <InputLabel id="route-provider-label">Provider</InputLabel>
                <FormControl fullWidth>
                    <Select value={router} onChange={onChangeRouter}>
                        {geoRouter.listProviders().map(
                            ({ key, name, type }) =>
                                geoRouter.isAllowedType({ type, develFeatures: ctx.develFeatures }) && (
                                    <MenuItem key={key} value={key}>
                                        {name}
                                    </MenuItem>
                                )
                        )}
                    </Select>
                </FormControl>

                <InputLabel>Profile</InputLabel>
                <FormControl fullWidth>
                    <Select value={profile} onChange={onChangeProfile}>
                        {geoRouter.listProfiles().map(({ key, name, icon }) => (
                            <MenuItem key={key} value={key}>
                                <Box display="flex" width="100%" alignItems="center">
                                    <Box display="flex" width={25} justifyContent="center" alignItems="center">
                                        {icon}
                                    </Box>
                                    <Box display="flex" sx={{ ml: 1 }}>
                                        <Box sx={{ mt: '3px' }}>{name}</Box>
                                    </Box>
                                </Box>
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {opts &&
                    Object.entries(opts).map(([key, opt]) => (
                        <React.Fragment key={'dialog_' + key}>
                            {checkSection(opt.section) && checkDevSection(opt) && (
                                <DialogContentText key={key}>{section}</DialogContentText>
                            )}
                            {checkDevSection(opt) && (
                                <Tooltip key={'tool_' + key} title={opt.description}>
                                    {opt.type === 'boolean' ? (
                                        <FormControlLabel
                                            key={key}
                                            label={opt.label}
                                            control={
                                                <Checkbox
                                                    sx={{ mt: '-6px' }}
                                                    key={'check_' + key}
                                                    checked={opt.value}
                                                    icon={opt.group && <RadioButtonUncheckedIcon />}
                                                    checkedIcon={opt.group && <RadioButtonCheckedIcon />}
                                                    onChange={onCheckBox(key, opts, setOpts)}
                                                />
                                            }
                                        ></FormControlLabel>
                                    ) : (
                                        <FormControl sx={{ m: 1, minWidth: 100 }}>
                                            <InputLabel id={'routing-param-' + opt.key}>{opt.label}</InputLabel>
                                            <Select
                                                labelId={'routing-param-' + opt.key}
                                                label={opt.label}
                                                value={opt.value ? opt.value : ''}
                                                onChange={onSelect(key, opts, setOpts)}
                                            >
                                                {opt.values.map((item, index) => (
                                                    <MenuItem key={item} value={item}>
                                                        {opt.valueDescriptions[index]}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    )}
                                </Tooltip>
                            )}
                        </React.Fragment>
                    ))}
            </DialogContent>
            <DialogActions>
                <Box display="flex" flexGrow={1}>
                    {showReset() && (
                        <Button sx={{ ml: 1 }} onClick={handleReset}>
                            Reset
                        </Button>
                    )}
                </Box>
                <Button onClick={handleCloseAccept} sx={{ fontWeight: 'bold' }}>
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    );
}
