import React, { useState, useContext } from 'react';
import { Button, Checkbox, FormControlLabel,
        FormControl, InputLabel, Box, IconButton,
        Tooltip, Select, MenuItem } from '@mui/material/';
import CloseIcon from '@mui/icons-material/Close';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AppContext from "../../../context/AppContext"

let section = '';
function checkSection(newSection) {
    if (newSection === section) {
        return false;
    }
    section = newSection;
    return true;
}

const onSelect = (key, opts, setOpts) => (e) => {
    let nopts = Object.assign({}, opts);
    nopts[key].value = e.target.value;
    setOpts(nopts);
}

const onCheckBox = (key, opts, setOpts) => (e) => {
    let nopts = Object.assign({}, opts);
    if (nopts[key].group) {
        nopts[key].value = true;
        Object.values(nopts).forEach(oldOpt => {
            if (oldOpt.group === nopts[key].group &&
                key !== oldOpt.key && oldOpt.value) {
                oldOpt.value = false;
            }
        });
    } else {
        nopts[key].value = !nopts[key].value;
    }
    setOpts(nopts);
}

export default function RouteSettingsDialog({ setOpenSettings, profile, setProfile, useDev}) {
    const ctx = useContext(AppContext);
    const [opts, setOpts] = useState(profile.opts);

    const handleCloseAccept = () => {
        setOpenSettings(false);
        let newRouteMode = Object.assign({}, profile);
        newRouteMode.opts = opts;
        setProfile(newRouteMode);
    };

    const showReset = () => {
        return opts &&
            JSON.stringify(opts)
            !== JSON.stringify(ctx.routeRouter.getResetParams({ type: 'osmand', profile: profile.mode }));
    }
    const handleReset = () => {
        setOpts(ctx.routeRouter.getResetParams({ type: 'osmand', profile: profile.mode }));
    };

    section = '';

    function checkDevSection(opt) {
        if (!useDev) {
            return opt.section !== 'Development'
        } else return true;
    }

    return (
        <Dialog open={true} onClose={handleCloseAccept}>
            <Box display="flex">
                <Box flexGrow={1}>
                    <DialogTitle>
                        Advanced Routing Settings
                    </DialogTitle>
                </Box>
                <Box>
                    <IconButton onClick={handleCloseAccept}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </Box>

            <DialogContent>
                {Object.entries(opts).map(([key, opt]) =>
                    <React.Fragment key={'dialog_' + key}>
                        {checkSection(opt.section) && checkDevSection(opt) && <DialogContentText key={key}>{section}</DialogContentText>}
                        {checkDevSection(opt) && <Tooltip key={'tool_' + key} title={opt.description} >
                            {opt.type === 'boolean' ?
                                <FormControlLabel key={key} label={opt.label} control={
                                    <Checkbox sx={{ mt: '-6px' }} key={'check_' + key} checked={opt.value}
                                        icon={opt.group && <RadioButtonUncheckedIcon />}
                                        checkedIcon={opt.group && <RadioButtonCheckedIcon />}
                                        onChange={onCheckBox(key, opts, setOpts)} />
                                }>
                                </FormControlLabel>
                                :
                                <FormControl sx={{ m: 1, minWidth: 100}}>
                                    <InputLabel id={'routing-param-' + opt.key}>{opt.label}</InputLabel>
                                    <Select
                                        labelId={'routing-param-' + opt.key}
                                        label={opt.label}
                                        value={opt.value ? opt.value : ''}
                                        onChange={onSelect(key, opts, setOpts)}>
                                        {opt.values.map((item, index) =>
                                            <MenuItem key={item} value={item}>{opt.valueDescriptions[index]}</MenuItem>
                                        )}
                                    </Select>
                                </FormControl>
                            }
                        </Tooltip>}
                    </React.Fragment>
                )}

            </DialogContent>
            <DialogActions>
                <Box display='flex' flexGrow={1}>
                    {showReset() && <Button sx={{ ml: 1 }} onClick={handleReset}>Reset</Button>}
                </Box>
                <Button onClick={handleCloseAccept}>OK</Button>
            </DialogActions>
        </Dialog>
    );
}