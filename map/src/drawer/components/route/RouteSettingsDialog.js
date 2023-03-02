import React, { useState, useContext } from 'react';
import { Button, Checkbox, FormControlLabel, 
        FormControl, InputLabel,
        Tooltip, Select, MenuItem } from '@mui/material/';
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
    const handleClose = () => {
        setOpenSettings(false);
        setOpts(ctx.routeMode.opts);
    };
    const handleAccept = () => {
        setOpenSettings(false);
        let newRouteMode = Object.assign({}, profile);
        newRouteMode.opts = opts;
        setProfile(newRouteMode);
    };
    section = '';

    function checkDevSection(opt) {
        if (!useDev) {
            return opt.section !== 'Development'
        } else return true;
    }

    return (
        <Dialog open={true} onClose={handleClose}>
            <DialogTitle>Additional Route Settings</DialogTitle>
            <DialogContent>
                {Object.entries(opts).map(([key, opt]) =>
                <>
                        {checkSection(opt.section) && checkDevSection(opt) && <DialogContentText key={key}>{section}</DialogContentText>}
                        {checkDevSection(opt) && <Tooltip key={'tool_' + key} title={opt.description} >
                            {opt.type === 'boolean' ?
                                <FormControlLabel key={key} label={opt.label} control={
                                    <Checkbox key={'check_' + key} checked={opt.value}
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
                    </>
                )}

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleAccept}>OK</Button>
            </DialogActions>
        </Dialog>
    );
}