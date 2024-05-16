import React, { useRef, useState, useEffect, useContext } from 'react';
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
import AppContext from '../../context/AppContext';
import { useMutator } from '../../util/Utils';

const ENABLE_PROVIDER_SELECTION = false; // disabled by default, but allowed if type=osrm is specified in URL

export default function RouteProfileSettings({ geoRouter, useDevelFeatures = true, setOpenSettings, embed = false }) {
    const ctx = useContext(AppContext);

    const [unfoldedSections, mutateUnfoldedSections] = useMutator({}); // all sections are folded by default

    geoRouter = geoRouter || ctx.routeObject; // `trackRouter` callers should specify distinct geoRouter

    const [opts, setOpts] = useState(geoRouter.getParams());

    // Close = Accept
    const handleCloseAccept = () => {
        setOpenSettings(false);
        saveParams();
    };

    // Reset options
    const handleReset = () => {
        setOpts(geoRouter.getResetParams());
        embed && saveParams(geoRouter.getResetParams());
    };

    const REFRESH_DEBOUNCE_MS = 1000;
    const embedRefreshTimer = useRef();

    const saveParams = (params = opts) => {
        if (params) {
            geoRouter.onParamsChanged({ params });

            if (embed) {
                // debounced routing refresh
                clearTimeout(embedRefreshTimer.current);
                embedRefreshTimer.current = setTimeout(() => {
                    // emulate open/close
                    geoRouter.onOpenSettings();
                    setTimeout(() => geoRouter.onCloseSettings(), 100);
                }, REFRESH_DEBOUNCE_MS);
            }
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
        if (section === 'Hidden') {
            return false;
        }
        if (newSection === section) {
            return false;
        }
        section = newSection;
        return true;
    }

    function showDevSection(opt) {
        if (opt.section === 'Hidden') {
            return false;
        }
        if (useDevelFeatures) {
            return true;
        }
        if (opt.section && (opt.section === 'Development' || opt.section.includes('(devel)'))) {
            return false;
        }
        return true;
    }

    const onSelect = (key, opts, setOpts) => (e) => {
        let nopts = Object.assign({}, opts);
        nopts[key].value = e.target.value;
        embed && saveParams(nopts);
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
        embed && saveParams(nopts);
        setOpts(nopts);
    };

    const showReset = () => geoRouter.isParamsChanged({ params: opts });

    useEffect(() => {
        setOpts(geoRouter.getParams());
    }, [geoRouter.getEffectDeps()]);

    const { type, router, profile } = geoRouter.getProfile();

    // disable other options when `applyaproximation` exist and set to false
    const APPROXIMATION = 'applyapproximation';
    function isDisabled(key) {
        if (key === APPROXIMATION) {
            return false;
        }
        if (opts[APPROXIMATION]?.value === false) {
            return true;
        }
        return false;
    }

    const hasOptions = () => opts && Object.keys(opts).length > 0;

    // sort section === null as 1st, keep others' order
    const sortValues = (a, b) => !!a.section - !!b.section; // for Object.entries
    const sortEntries = (a, b) => (a && a[1] && !!a[1].section) - (b && b[1] && !!b[1].section); // for Object.values

    // sections list
    const sections = [];
    if (opts) {
        const hash = {};
        Object.values(opts)
            .sort(sortValues)
            .forEach(({ section }) => {
                if (section !== 'Hidden') {
                    hash[section] || sections.push(section);
                    hash[section] = true;
                }
            });
    }

    const switchFolding = (s) => mutateUnfoldedSections((o) => (o[s] = !o[s]));

    const OptBoolean = ({ opt }) => (
        <Tooltip key={'tool_' + opt.key} title={opt.description} arrow placement="right">
            <FormControlLabel
                key={opt.key}
                label={opt.label}
                disabled={isDisabled(opt.key)}
                control={
                    <Checkbox
                        sx={{ mt: '-1px' }}
                        key={'check_' + opt.key}
                        checked={opt.value}
                        icon={opt.group && <RadioButtonUncheckedIcon />}
                        checkedIcon={opt.group && <RadioButtonCheckedIcon />}
                        onChange={onCheckBox(opt.key, opts, setOpts)}
                    />
                }
            ></FormControlLabel>
        </Tooltip>
    );

    const OptSelect = ({ opt }) => (
        <Tooltip key={'tool_' + opt.key} title={opt.description} arrow placement="right">
            <FormControl sx={{ m: 0, minWidth: 240 }} size="small">
                <InputLabel id={'routing-param-' + opt.key}>{opt.label}</InputLabel>
                <Select
                    labelId={'routing-param-' + opt.key}
                    label={opt.label}
                    value={opt.value ? opt.value : ''}
                    onChange={onSelect(opt.key, opts, setOpts)}
                    disabled={isDisabled(opt.key)}
                >
                    {opt.values.map((item, index) => (
                        <MenuItem key={item} value={item}>
                            {opt.valueDescriptions[index]}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Tooltip>
    );

    const OptFlatItem = ({ opt }) => (
        <MenuItem
            key={'option_' + opt.key}
            dense={opt.type === 'boolean'}
            sx={{ maxHeight: opt.type === 'boolean' ? '32px' : '68px' }}
        >
            {opt.type === 'boolean' ? <OptBoolean opt={opt} /> : <OptSelect opt={opt} />}
        </MenuItem>
    );

    // new flat-style options
    const flatOptions = () => {
        return (
            hasOptions() && (
                <>
                    {sections.map((s) => (
                        <React.Fragment key={'section_' + s}>
                            <MenuItem
                                key={'unfold_' + s}
                                selected={true}
                                divider={true}
                                onClick={() => switchFolding(s)}
                            >
                                {s ?? 'General options'}
                            </MenuItem>
                            {/* <Collapse key={'collapse_' + s} in={unfoldedSections[s]}> */}
                            <div style={{ display: unfoldedSections[s] ? '' : 'none' }}>
                                {Object.values(opts)
                                    .filter((o) => o.section === s)
                                    .map((opt) => (
                                        <OptFlatItem key={'opt_' + opt.key} opt={opt} />
                                    ))}
                            </div>
                            {/* </Collapse> */}
                        </React.Fragment>
                    ))}
                    {showReset() && (
                        <MenuItem>
                            <Button sx={{ ml: 1 }} onClick={handleReset}>
                                Reset options
                            </Button>
                        </MenuItem>
                    )}
                </>
            )
        );
    };

    // old dialog-style options
    const dialogOptions = () => {
        return (
            <Dialog open={true} onClose={handleCloseAccept}>
                <Box display="flex">
                    <Box flexGrow={1}>
                        <DialogTitle>Advanced Routing Settings</DialogTitle>
                    </Box>
                    <Box>
                        <IconButton onClick={handleCloseAccept}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </Box>

                <DialogContent>
                    {(ENABLE_PROVIDER_SELECTION || type === 'osrm') && (
                        <>
                            <InputLabel id="route-provider-label">Provider</InputLabel>
                            <FormControl fullWidth>
                                <Select value={router} onChange={onChangeRouter}>
                                    {geoRouter.listProviders().map(({ key, name }) => (
                                        <MenuItem key={key} value={key}>
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </>
                    )}

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
                        Object.entries(opts)
                            .sort(sortEntries)
                            .map(([key, opt]) => (
                                <React.Fragment key={'dialog_' + key}>
                                    {checkSection(opt.section) && showDevSection(opt) && (
                                        <DialogContentText key={'section_' + key}>{section}</DialogContentText>
                                    )}
                                    {showDevSection(opt) &&
                                        (opt.type === 'boolean' ? <OptBoolean opt={opt} /> : <OptSelect opt={opt} />)}
                                </React.Fragment>
                            ))}
                </DialogContent>
                <DialogActions>
                    <Box display="flex" flexGrow={1}>
                        {showReset() && (
                            <Button sx={{ ml: 1 }} onClick={handleReset}>
                                Reset options
                            </Button>
                        )}
                    </Box>
                    <Button onClick={handleCloseAccept} sx={{ fontWeight: 'bold' }}>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        );
    };

    return embed ? flatOptions() : dialogOptions();
}
