import React, { useState, useEffect, useContext, useMemo } from 'react';
import { Box, Collapse, Drawer, List, Tooltip } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AppContext from '../../context/AppContext';
import { useTranslation } from 'react-i18next';
import { HEADER_SIZE, MAIN_MENU_MIN_SIZE, MENU_INFO_OPEN_SIZE } from '../../manager/GlobalManager';
import HeaderNoUnderline from '../../frame/components/header/HeaderNoUnderline';
import ThickDivider from '../../frame/components/dividers/ThickDivider';
import ColorBlock from '../../frame/components/other/ColorBlock';
import ActionIconBtn from '../../frame/components/btns/ActionIconBtn';
import { ReactComponent as ResetIcon } from '../../assets/icons/ic_action_reset_to_default_dark.svg';
import SelectItem from '../../frame/components/items/SelectItem';
import SelectItemWithoutOptions from '../../frame/components/items/SelectItemWithoutOptions';
import SelectItemBoolean from '../../frame/components/items/SelectItemBoolean';

const SECTION_KEYS = {
    GENERAL: 'general',
    ALLOW: 'allow',
    AVOID: 'avoid',
    VEHICLE_PARAMETERS: 'vehicle_parameters',
    DEVELOPMENT: 'development',
};

const TRANSLATION_RULES = {
    routing: {
        labelKey: 'routing',
        valuePrefix: 'routing_type_',
    },
    approximation: {
        labelKey: 'approximation',
        valuePrefix: 'gpx_approximation_',
    },
    minPointApproximation: {
        labelKey: 'minPointApproximation',
        valuePrefix: 'minPointApproximation_',
        valueFallback: (value, t) => `${value} ${t('m')}`,
    },
};

const vehicleKeys = ['weight', 'height', 'length', 'width', 'motor_type'];
const OLD_VEHICLE_SECTION_KEY = 'vehicle_metrics';

const AVOID_UNPAVED = 'avoid_unpaved';
const PREFER_UNPAVED = 'prefer_unpaved';
const APPROXIMATION = 'applyapproximation';

export default function NavigationSettings({
    geoRouter,
    setOpenSettings,
    resetSettings = false,
    setResetSettings = null,
}) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const useDevelFeatures = ctx.develFeatures;

    const drawerWidth = MENU_INFO_OPEN_SIZE;
    const drawerLeftOffset = MAIN_MENU_MIN_SIZE + drawerWidth;

    const [unfoldedSections, setUnfoldedSections] = useState({}); // all sections are folded by default

    geoRouter = geoRouter || ctx.routeObject;

    const [opts, setOpts] = useState(geoRouter.getParams());

    const getStateKey = (opt) => opt?.optionId || opt?.key || '';

    // Update options when geoRouter params change
    useEffect(() => {
        const params = geoRouter.getParams();
        setOpts(params);
    }, [geoRouter.getEffectDeps()]);

    useEffect(() => {
        if (resetSettings) {
            handleReset();
            geoRouter.resetRoute();
            setUnfoldedSections({});
            if (setResetSettings) setResetSettings(false);
        }
    }, [resetSettings]);

    const handleCloseAccept = () => {
        if (setOpenSettings) {
            setOpenSettings(false);
        }
    };

    const showReset = () => geoRouter.isParamsChanged({ params: opts });
    const handleReset = () => {
        const reset = geoRouter.getResetParams();
        setOpts(reset);
        saveParams(reset);
    };

    const saveParams = (params) => {
        const nextParams = params ?? opts;
        if (nextParams) {
            geoRouter.onParamsChanged({ params: nextParams });
        }
    };

    // Translation helpers

    const normalizeKey = (key) => {
        if (!key) return '';
        return key.startsWith('routing_attr_') ? key.substring('routing_attr_'.length) : key;
    };

    const getTranslationRule = (key) => {
        if (!key) return null;
        return TRANSLATION_RULES[key] || TRANSLATION_RULES[normalizeKey(key)];
    };

    const getNormalizedOptionKey = (opt) => normalizeKey(opt?.key || opt?.optionId);

    const getTranslationKey = (opt, value = null) => {
        if (!opt?.key) {
            return { key: null, valueFallback: null };
        }

        const key = opt.key;
        const normalizedKey = normalizeKey(key);
        const rule = getTranslationRule(key);

        const normalizeBaseKey = (baseKey) => {
            let finalKey = baseKey;
            if (finalKey.startsWith('vehicle_')) {
                finalKey = finalKey.slice('vehicle_'.length);
            }
            if (finalKey === PREFER_UNPAVED) {
                finalKey = `driving_style_${finalKey}`;
            }
            return finalKey;
        };

        const buildDefaultKey = (suffix) => {
            const baseKey = normalizeBaseKey(normalizedKey);
            return `routing_attr_${baseKey}${suffix ? `_${suffix}` : '_name'}`;
        };

        if (value !== null) {
            if (rule?.valueKey) {
                const translationKey = typeof rule.valueKey === 'function' ? rule.valueKey(value) : rule.valueKey;
                return { key: translationKey, valueFallback: rule?.valueFallback ?? null };
            }
            if (rule?.valuePrefix) {
                return { key: `${rule.valuePrefix}${value}`, valueFallback: rule?.valueFallback ?? null };
            }
            return { key: buildDefaultKey(value), valueFallback: rule?.valueFallback ?? null };
        }

        if (rule?.labelKey) {
            return { key: rule.labelKey };
        }

        return { key: buildDefaultKey(), valueFallback: null };
    };

    const translateOption = (opt, { value = null, fallback = null } = {}) => {
        const { key: translationKey, valueFallback } = getTranslationKey(opt, value);
        if (!translationKey) {
            return fallback ?? value ?? opt?.label ?? '';
        }

        const translated = t(translationKey, {
            ns: ['web', 'translation'],
            defaultValue: translationKey,
        });

        if (translated !== translationKey) {
            return translated;
        }

        if (valueFallback) {
            return valueFallback(value, t);
        }

        return fallback ?? value ?? opt?.label ?? '';
    };

    const getOptionName = (opt) => translateOption(opt, { fallback: opt.label });

    const normalizeSectionKey = (sectionName) => {
        if (!sectionName) return SECTION_KEYS.GENERAL;
        const normalized = sectionName.toLowerCase().replaceAll(/\s+/g, '_');
        if (normalized === OLD_VEHICLE_SECTION_KEY) return SECTION_KEYS.VEHICLE_PARAMETERS;
        return normalized;
    };

    // Build section list with options

    const sectionList = useMemo(() => {
        const sectionsMap = {
            [SECTION_KEYS.GENERAL]: {
                name: t('general_settings'),
                opts: {},
            },
            [SECTION_KEYS.ALLOW]: {
                name: t('shared_string_allow'),
                opts: {},
            },
            [SECTION_KEYS.AVOID]: {
                name: t('shared_string_avoid'),
                opts: {},
            },
            [SECTION_KEYS.VEHICLE_PARAMETERS]: {
                name: t('vehicle_parameters'),
                opts: {},
            },
            [SECTION_KEYS.DEVELOPMENT]: {
                name: t('development'),
                opts: {},
            },
        };

        if (!opts) {
            return sectionsMap;
        }

        for (const [optKey, opt] of Object.entries(opts)) {
            if (opt.section === 'Hidden' || !showDevSection(opt)) {
                continue;
            }

            const isVehicleParam = vehicleKeys.some((vk) => optKey.includes(vk));
            let targetSectionKey;

            if (isVehicleParam) {
                targetSectionKey = SECTION_KEYS.VEHICLE_PARAMETERS;
            } else if (opt.section === 'Routing (devel)' || opt.section === 'Approximation (devel)') {
                targetSectionKey = SECTION_KEYS.DEVELOPMENT;
            } else {
                targetSectionKey = normalizeSectionKey(opt.section ?? SECTION_KEYS.GENERAL);
                if (targetSectionKey === SECTION_KEYS.GENERAL && isVehicleParam) {
                    continue;
                }
            }

            if (targetSectionKey in sectionsMap) {
                const optionId = optKey;
                const optKeyWithPrefix = opt.key || optKey;
                const optWithKey = { ...opt, key: optKeyWithPrefix, optionId };

                sectionsMap[targetSectionKey].opts[optionId] = {
                    ...optWithKey,
                    displayLabel: getOptionName(optWithKey),
                };
            }
        }

        return sectionsMap;
    }, [opts]);

    const sections = useMemo(() => {
        return Object.keys(sectionList).filter((key) => {
            const section = sectionList[key];
            return section.opts && Object.keys(section.opts).length > 0;
        });
    }, [sectionList]);

    function showDevSection(opt) {
        if (opt.section === 'Hidden') {
            return false;
        }
        if (useDevelFeatures) {
            return true;
        }
        return !(
            opt.section &&
            (normalizeSectionKey(opt.section) === SECTION_KEYS.DEVELOPMENT || opt.section.includes('(devel)'))
        );
    }

    // Handle select option change
    const onSelect = (key) => (e) => {
        const value = e.target.value;
        const next = { ...(opts || {}) };
        if (!next[key]) {
            return;
        }
        next[key] = { ...next[key], value };
        setOpts(next);
        setTimeout(() => saveParams(next), 0);
    };

    // Toggle boolean option value
    const toggleBooleanValue = (key, explicitValue = null) => {
        const next = { ...opts };
        const option = next[key];
        if (!option) {
            return;
        }
        next[key] = { ...option };
        if (option.group) {
            next[key].value = true;
            for (const [optKey, oldOpt] of Object.entries(next)) {
                if (oldOpt?.group === option.group && optKey !== key && oldOpt.value) {
                    next[optKey] = { ...oldOpt, value: false };
                }
            }
        } else {
            next[key].value = typeof explicitValue === 'boolean' ? explicitValue : !option.value;
        }
        setOpts(next);
        saveParams(next);
    };

    function isDisabled(key) {
        if (key === APPROXIMATION) {
            return false;
        }
        if (opts[APPROXIMATION]?.value === false) {
            return true;
        }
        if (key === AVOID_UNPAVED && opts[PREFER_UNPAVED]?.value === true) return true;
        if (key === PREFER_UNPAVED && opts[AVOID_UNPAVED]?.value === true) return true;

        return false;
    }

    // Initialize unfolded state for all sections when they change
    // Example: sections = ['general', 'avoid', 'allow']
    // Before: unfoldedSections = {}
    // After: unfoldedSections = { general: false, avoid: false, allow: false }
    useEffect(() => {
        if (sections.length > 0) {
            setUnfoldedSections((state) => {
                const next = { ...state };
                for (const sectionName of sections) {
                    if (next[sectionName] === undefined) {
                        next[sectionName] = false;
                    }
                }
                return next;
            });
        }
    }, [sections]);

    // Toggle section folding
    const switchFolding = (sectionName) =>
        setUnfoldedSections((prev) => {
            const next = { ...prev };
            next[sectionName] = !next?.[sectionName];
            return next;
        });

    // Boolean option component
    const BooleanOption = ({ opt, showDivider }) => {
        const stateKey = getStateKey(opt);
        const logicalKey = getNormalizedOptionKey(opt);
        const disabled = isDisabled(logicalKey);
        const handleToggle = (nextValue) => {
            toggleBooleanValue(stateKey, nextValue);
        };
        return (
            <SelectItemBoolean
                title={opt.displayLabel}
                checked={!!opt.value}
                disabled={disabled}
                onToggle={handleToggle}
                showDivider={showDivider}
                boldTitle={false}
            />
        );
    };

    // Select option component
    const SelectOption = ({ opt }) => {
        const stateKey = getStateKey(opt);
        const logicalKey = getNormalizedOptionKey(opt);
        const disabled = isDisabled(logicalKey);

        // need for vehicle parameters that have numeric values
        const normalizeValue = (value) => (value === null || value === undefined ? '' : String(value));
        const normalizedCurrentValue = normalizeValue(opt.value);

        const getOptionSelectItem = (value) => translateOption(opt, { value, fallback: value ?? '-' });

        const optionsList = (opt.values || []).map((value, index) => {
            const description = opt.valueDescriptions[index];
            const isNone = description === '-' || description === '' || description === null;
            const label = isNone ? t('shared_string_none') : getOptionSelectItem(description);
            return {
                value: normalizeValue(value),
                originalValue: value,
                label,
                divider: index === 0 && isNone,
            };
        });

        const handleSelect = (value) => {
            onSelect(stateKey)({ target: { value } });
        };

        return (
            <SelectItem
                title={opt.displayLabel}
                value={normalizedCurrentValue}
                options={optionsList}
                onSelect={(selectedValue) => handleSelect(selectedValue)}
                disabled={disabled}
                placeholder={t('shared_string_none')}
                boldTitle={false}
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value}
            />
        );
    };

    const hasOptions = () => opts && Object.keys(opts).length > 0;

    // Render all sections with their options
    const renderSections = () => {
        if (!hasOptions()) {
            return null;
        }
        return (
            <List disablePadding>
                {sections.map((sectionKey) => {
                    const section = sectionList[sectionKey];
                    if (!section?.opts || Object.keys(section.opts).length === 0) {
                        return null;
                    }

                    const sectionOptions = Object.values(section.opts);
                    const expanded = unfoldedSections[sectionKey];
                    return (
                        <Box key={'section_' + sectionKey}>
                            <SelectItemWithoutOptions
                                title={section.name}
                                onClick={() => switchFolding(sectionKey)}
                                endIcon={
                                    expanded ? (
                                        <ExpandLessIcon sx={{ color: 'var(--text-secondary)' }} />
                                    ) : (
                                        <ExpandMoreIcon sx={{ color: 'var(--text-secondary)' }} />
                                    )
                                }
                                showValue={false}
                            />
                            <Collapse in={!!expanded} timeout="auto" unmountOnExit>
                                <List disablePadding>
                                    {sectionOptions.map((opt, index) => {
                                        const isLast = index === sectionOptions.length - 1;
                                        return (
                                            <Box key={'opt_' + opt.key}>
                                                {opt.type === 'boolean' ? (
                                                    <BooleanOption opt={opt} showDivider={!isLast} />
                                                ) : (
                                                    <SelectOption opt={opt} />
                                                )}
                                            </Box>
                                        );
                                    })}
                                </List>
                            </Collapse>
                            <ThickDivider mt={0} mb={0} />
                        </Box>
                    );
                })}
            </List>
        );
    };

    return (
        <Drawer
            anchor="left"
            open={true}
            onClose={handleCloseAccept}
            hideBackdrop
            ModalProps={{
                keepMounted: true,
                hideBackdrop: true,
                disableEnforceFocus: true,
                disableAutoFocus: true,
                disableRestoreFocus: true,
                style: { pointerEvents: 'none' },
            }}
            PaperProps={{
                sx: {
                    width: { xs: '100%', sm: `${drawerWidth}px` },
                    maxWidth: {
                        xs: '100%',
                        sm: `${drawerWidth}px`,
                    },
                    ml: { xs: 0, sm: `${drawerLeftOffset}px` },
                    borderLeft: { xs: 'none', sm: '1px solid #e0e0e0' },
                    borderRight: 'none',
                    top: `${HEADER_SIZE}px`,
                    height: `calc(100% - ${HEADER_SIZE}px)`,
                    boxShadow: 'none',
                    pointerEvents: 'auto',
                },
            }}
        >
            <HeaderNoUnderline
                title={t('shared_string_settings')}
                onClose={handleCloseAccept}
                rightContent={
                    <Tooltip title={t('reset_to_default')} arrow>
                        <span>
                            <ActionIconBtn
                                id="navigation-settings-reset"
                                icon={<ResetIcon />}
                                onClick={handleReset}
                                disabled={!showReset()}
                            />
                        </span>
                    </Tooltip>
                }
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, minHeight: 0 }}>
                <Box sx={{ overflowY: 'auto', overflowX: 'hidden' }}>{renderSections()}</Box>
                <ColorBlock color={'#f0f0f0'} />
            </Box>
        </Drawer>
    );
}
