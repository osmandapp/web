import React, { useState, useContext } from 'react';
import { Button, Checkbox, FormControlLabel, FormControl, InputLabel, Tooltip, Select, MenuItem } from '@mui/material/';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AppContext, { updateConfigureMapCache } from '../../context/AppContext';
import MapContext from '../../context/MapContext';
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
    const nopts = opts.map((opt) => (opt.attrName === key ? { ...opt, value: e.target.value } : opt));
    setOpts(nopts);
};

const onCheckBox = (key, opts, setOpts) => () => {
    const selectedOpt = opts.find((opt) => opt.attrName === key);
    if (!selectedOpt) {
        return;
    }

    let nopts;
    if (selectedOpt.group) {
        nopts = opts.map((opt) =>
            opt.group === selectedOpt.group ? { ...opt, value: opt.attrName === selectedOpt.attrName } : opt
        );
    } else {
        nopts = opts.map((opt) => (opt.attrName === key ? { ...opt, value: !opt.value } : opt));
    }
    setOpts(nopts);
};

function copyOptions(options = []) {
    return options.map((opt) => ({ ...opt }));
}

function getRenderingParams(options) {
    const params = new URLSearchParams();
    copyOptions(options)
        .sort((a, b) => a.attrName.localeCompare(b.attrName))
        .forEach((opt) => {
            if (opt.type === 5) {
                if (opt.value === true) {
                    params.set(opt.attrName, 'true');
                }
                return;
            }
            if (opt.value !== undefined && opt.value !== null && opt.value !== '') {
                params.set(opt.attrName, opt.value);
            }
        });

    const query = params.toString();
    return query ? `?${query}` : '';
}

function applyRenderingParams(tileURL, options) {
    const query = getRenderingParams(options);
    return {
        ...tileURL,
        properties: copyOptions(options),
        renderingParams: query,
        url: `${tileURL.baseUrl ?? tileURL.url.split('?')[0]}${query}`,
        ...(tileURL.infoUrl || tileURL.infoBaseUrl
            ? {
                  infoUrl: `${tileURL.infoBaseUrl ?? tileURL.infoUrl.split('?')[0]}${query}`,
              }
            : {}),
    };
}

export default function RenderingSettingsDialog({ setOpenSettings }) {
    const ctx = useContext(AppContext);
    const mtx = useContext(MapContext);
    const { i18n, t } = useTranslation();
    const selectedStyle = ctx.allTileURLs[mtx.tileURL.key]?.properties ? mtx.tileURL.key : 'df';
    const currentTileURL = mtx.tileURL.key === selectedStyle && mtx.tileURL?.properties ? mtx.tileURL : null;
    const selectedTileURL = currentTileURL ?? ctx.allTileURLs[selectedStyle];
    const [opts, setOpts] = useState(() => copyOptions(selectedTileURL?.properties));
    const handleClose = () => {
        setOpenSettings(false);
        setOpts(copyOptions(selectedTileURL?.properties));
    };
    const handleAccept = () => {
        if (!selectedTileURL) {
            setOpenSettings(false);
            return;
        }
        const updatedTileURL = applyRenderingParams(selectedTileURL, opts);
        ctx.setAllTileURLs((prev) => ({
            ...prev,
            [selectedStyle]: updatedTileURL,
        }));
        if (mtx.tileURL.key === selectedStyle) {
            mtx.setTileURL(updatedTileURL);
            const configureMap = {
                ...ctx.configureMapState,
                mapStyle: {
                    tileURL: updatedTileURL,
                    renderingType: mtx.renderingType,
                },
            };
            updateConfigureMapCache(configureMap);
            ctx.setConfigureMapState(configureMap);
        }
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
                                                checked={Boolean(opt.value)}
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
                                            value={opt.value ?? ''}
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
