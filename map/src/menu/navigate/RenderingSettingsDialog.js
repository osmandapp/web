import React, { useState, useContext } from 'react';
import { Button, Checkbox, FormControlLabel, FormControl, InputLabel, Tooltip, Select, MenuItem } from '@mui/material/';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AppContext from '../../context/AppContext';
import { useTranslation } from 'react-i18next';
import renderingAttrTrans from '../../resources/renderingAttributesTranslations.json';

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

export default function RenderingSettingsDialog({ setOpenSettings }) {
    const ctx = useContext(AppContext);
    const { i18n, t } = useTranslation();
    const selectedStyle = 'df'; // TODO
    const [opts, setOpts] = useState(ctx.allTileURLs[selectedStyle].properties);
    const handleClose = () => {
        setOpenSettings(false);
        setOpts(ctx.allTileURLs[selectedStyle].properties);
    };
    const handleAccept = () => {
        setOpenSettings(false);
    };
    section = '';

    function getTranslation(value) {
        if (renderingAttrTrans[value]) {
            return t(renderingAttrTrans[value]);
        }

        const currentLanguage = i18n.language;

        if (currentLanguage === 'en') {
            return value;
        }

        const englishTranslations = i18n.store.data['en']['translation'];
        const key = Object.keys(englishTranslations).find((k) => englishTranslations[k] === value);

        if (key) {
            return t(key);
        }

        return value;
    }

    return (
        <Dialog open={true} onClose={handleClose}>
            <DialogTitle>Rendering Settings</DialogTitle>
            <DialogContent>
                {opts.map((opt) => {
                    const name = getTranslation(opt.name);
                    return (
                        <React.Fragment key={opt.attrName}>
                            {checkSection(opt.category) && (
                                <DialogContentText>{getTranslation(section)}</DialogContentText>
                            )}
                            <Tooltip key={'tool_' + opt.attrName} title={opt.description} arrow placement="right">
                                {opt.type === 5 ? (
                                    <FormControlLabel
                                        key={opt.attrName}
                                        label={name}
                                        control={
                                            <Checkbox
                                                key={'check_' + opt.attrName}
                                                checked={opt.value}
                                                onChange={onCheckBox(opt.attrName, opts, setOpts)}
                                            />
                                        }
                                    ></FormControlLabel>
                                ) : (
                                    <FormControl sx={{ m: 2, minWidth: 250 }}>
                                        <InputLabel id={'routing-param-id-' + opt.attrName}>{name}</InputLabel>
                                        <Select
                                            labelId={'routing-param-' + opt.attrName}
                                            label={name}
                                            value={opt.value ? opt.value : ''}
                                            onChange={onSelect(opt.attrName, opts, setOpts)}
                                        >
                                            {opt.possibleValues.map((item) => (
                                                <MenuItem key={'value-' + item} value={item}>
                                                    {item}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                )}
                            </Tooltip>
                        </React.Fragment>
                    );
                })}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleAccept}>OK</Button>
            </DialogActions>
        </Dialog>
    );
}
