import React, { useEffect, useRef, useState } from 'react';
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Slider, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
    hsvToRgb,
    parseCssRgb,
    parseColorToRgba,
    parseHexAlphaLast,
    parseRgbaChannels,
    parseShortHex,
    rgbToHsv,
    toColorString,
} from '../../../../util/ColorUtil';
import GrayBtnWithBlueHover from '../../../../frame/components/btns/GrayBtnWithBlueHover';
import PrimaryBtn from '../../../../frame/components/btns/PrimaryBtn';
import styles from '../wptEditPanel.module.css';

const SV_STEP_KEY = 0.03;

export default function ColorPickerDialog({ open, initialColor, onApply, onClose }) {
    const { t } = useTranslation();

    const gradientRef = useRef(null);
    // Prevents the picker→inputText sync effect from running when the text
    // input itself triggered the picker state change (avoids cursor-jump loops).
    const skipSyncRef = useRef(false);

    const [hue, setHue] = useState(220);
    const [saturation, setSaturation] = useState(0.8);
    const [colorValue, setColorValue] = useState(1.0);
    const [alpha, setAlpha] = useState(255);
    const [dragging, setDragging] = useState(false);
    const [inputText, setInputText] = useState('');

    // Initialise all state when dialog opens.
    useEffect(() => {
        if (open && initialColor) {
            const { r, g, b, a } = parseColorToRgba(initialColor);
            const { h, s, v } = rgbToHsv(r, g, b);
            setHue(h);
            setSaturation(s);
            setColorValue(v);
            setAlpha(a);
            setInputText(formatColor(r, g, b, a));
        }
    }, [open, initialColor]);

    // Keep input field in sync when sliders / gradient change the color.
    useEffect(() => {
        if (skipSyncRef.current) {
            skipSyncRef.current = false;
            return;
        }
        const { r, g, b } = hsvToRgb(hue, saturation, colorValue);
        setInputText(formatColor(r, g, b, alpha));
    }, [hue, saturation, colorValue, alpha]);

    // Pointer drag on the SV gradient.
    useEffect(() => {
        if (!dragging) return;
        function onPointerMove(e) {
            const rect = gradientRef.current?.getBoundingClientRect();
            if (!rect) return;
            setSaturation(Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)));
            setColorValue(1 - Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height)));
        }
        function endDrag() {
            setDragging(false);
        }
        document.addEventListener('pointermove', onPointerMove);
        document.addEventListener('pointerup', endDrag);
        document.addEventListener('pointercancel', endDrag);

        return () => {
            document.removeEventListener('pointermove', onPointerMove);
            document.removeEventListener('pointerup', endDrag);
            document.removeEventListener('pointercancel', endDrag);
        };
    }, [dragging]);

    function setSvFromClient(clientX, clientY) {
        const rect = gradientRef.current?.getBoundingClientRect();
        if (!rect) return;
        setSaturation(Math.max(0, Math.min(1, (clientX - rect.left) / rect.width)));
        setColorValue(1 - Math.max(0, Math.min(1, (clientY - rect.top) / rect.height)));
    }

    function handleGradientPointerDown(e) {
        if (e.button != null && e.button !== 0) return;
        e.preventDefault();
        e.currentTarget.focus({ preventScroll: true });
        setDragging(true);
        setSvFromClient(e.clientX, e.clientY);
    }

    function handleGradientKeyDown(e) {
        if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) return;
        e.preventDefault();
        if (e.key === 'ArrowLeft') setSaturation((s) => Math.max(0, s - SV_STEP_KEY));
        if (e.key === 'ArrowRight') setSaturation((s) => Math.min(1, s + SV_STEP_KEY));
        if (e.key === 'ArrowUp') setColorValue((v) => Math.min(1, v + SV_STEP_KEY));
        if (e.key === 'ArrowDown') setColorValue((v) => Math.max(0, v - SV_STEP_KEY));
    }

    function handleInputChange(raw) {
        setInputText(raw);
        const parsed = parseColorInput(raw);
        if (!parsed) return;
        const { r, g, b, a } = parsed;
        const { h, s, v } = rgbToHsv(r, g, b);
        skipSyncRef.current = true;
        setHue(h);
        setSaturation(s);
        setColorValue(v);
        setAlpha(a);
    }

    function handlePaste(e) {
        e.preventDefault();
        const pasted = e.clipboardData.getData('text');
        const detected = detectFormatAndParse(pasted);
        if (!detected) return;
        const { r, g, b, a } = detected;
        const { h, s, v } = rgbToHsv(r, g, b);
        skipSyncRef.current = true;
        setInputText(pasted.trim());
        setHue(h);
        setSaturation(s);
        setColorValue(v);
        setAlpha(a);
    }

    function handleInputBlur() {
        // If the user left an incomplete / invalid value, snap back to current color.
        if (!parseColorInput(inputText) && !detectFormatAndParse(inputText)) {
            const { r, g, b } = hsvToRgb(hue, saturation, colorValue);
            setInputText(formatColor(r, g, b, alpha));
        }
    }

    function handleApply() {
        const { r, g, b } = hsvToRgb(hue, saturation, colorValue);
        onApply(toColorString(r, g, b, alpha));
    }

    const { r, g, b } = hsvToRgb(hue, saturation, colorValue);
    const alphaPercent = Math.round((alpha / 255) * 100);
    const selectedCssColor = `rgb(${r} ${g} ${b})`;
    const swatchCssColor = alpha < 255 ? `rgba(${r},${g},${b},${(alpha / 255).toFixed(3)})` : selectedCssColor;
    const inputIsInvalid = inputText.length > 0 && !parseColorInput(inputText) && !detectFormatAndParse(inputText);

    return (
        <Dialog
            id="se-color-picker-dialog"
            open={open}
            onClose={onClose}
            PaperProps={{ className: styles.colorPickerPaper }}
        >
            <DialogTitle className={styles.colorPickerTitle}>{t('web:color_picker_title')}</DialogTitle>
            <DialogContent className={styles.colorPickerDialogContent} style={{ '--selected-color': selectedCssColor }}>
                <button
                    ref={gradientRef}
                    id="se-color-picker-sv-plane"
                    type="button"
                    className={styles.colorPickerGradient}
                    style={{ background: `hsl(${hue}, 100%, 50%)` }}
                    aria-label={t('web:color_picker_sv_plane')}
                    onPointerDown={handleGradientPointerDown}
                    onKeyDown={handleGradientKeyDown}
                >
                    <span className={styles.colorPickerGradientWhite} aria-hidden />
                    <span className={styles.colorPickerGradientBlack} aria-hidden />
                    <span
                        className={styles.colorPickerCursor}
                        aria-hidden
                        style={{
                            left: `${saturation * 100}%`,
                            top: `${(1 - colorValue) * 100}%`,
                            background: toColorString(r, g, b),
                            '--sv-picker-rgb': `${r} ${g} ${b}`,
                        }}
                    />
                </button>

                <Box className={styles.colorPickerHueTrack}>
                    <Slider
                        id="se-color-picker-hue"
                        className={styles.colorPickerSlider}
                        min={0}
                        max={360}
                        step={1}
                        value={hue}
                        onChange={(_, v) => setHue(Number(v))}
                        getAriaValueText={(v) => `${v}°`}
                        aria-label={t('web:color_picker_hue')}
                    />
                </Box>

                <div className={styles.colorPickerAlphaLabel}>
                    <Typography variant="caption" className={styles.colorPickerLabel}>
                        {t('web:color_picker_alpha')}
                    </Typography>
                    <Typography variant="caption" className={styles.colorPickerLabel}>
                        {alphaPercent}%
                    </Typography>
                </div>
                <Box className={styles.colorPickerAlphaShell}>
                    <Box
                        className={styles.colorPickerAlphaGradientOverlay}
                        style={{
                            backgroundImage: `linear-gradient(to right, rgba(${r},${g},${b},0), rgba(${r},${g},${b},1))`,
                        }}
                        aria-hidden
                    />
                    <Slider
                        id="se-color-picker-alpha"
                        className={styles.colorPickerSlider}
                        min={0}
                        max={255}
                        step={1}
                        value={alpha}
                        onChange={(_, v) => setAlpha(Number(v))}
                        size="small"
                        getAriaValueText={(v) => `${Math.round((v / 255) * 100)}%`}
                        aria-label={t('web:color_picker_alpha')}
                    />
                </Box>

                <Box className={styles.colorPickerHexRow}>
                    <Box className={styles.colorPickerSwatch} aria-hidden>
                        <Box className={styles.colorPickerSwatchColor} style={{ background: swatchCssColor }} />
                    </Box>
                    <Box
                        className={`${styles.colorPickerHexWrap}${inputIsInvalid ? ` ${styles.colorPickerHexWrapError}` : ''}`}
                    >
                        <span className={styles.colorPickerHexPrefix}>#</span>
                        <input
                            id="se-color-picker-hex"
                            className={styles.colorPickerHexInput}
                            value={inputText}
                            onChange={(e) => handleInputChange(e.target.value)}
                            onFocus={(e) => e.target.select()}
                            onBlur={handleInputBlur}
                            onPaste={handlePaste}
                            maxLength={8}
                            spellCheck={false}
                            autoComplete="off"
                            autoCorrect="off"
                            placeholder="RRGGBB"
                            aria-label="Color code"
                        />
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions className={styles.colorPickerActions}>
                <GrayBtnWithBlueHover id="se-color-picker-cancel" text={t('shared_string_cancel')} action={onClose} />
                <PrimaryBtn id="se-color-picker-apply" text={t('shared_string_apply')} action={handleApply} />
            </DialogActions>
        </Dialog>
    );
}

// Formats r,g,b,a → HEX display string: RRGGBB (opaque) or RRGGBBAA (with alpha).
function formatColor(r, g, b, a) {
    const h = (v) => v.toString(16).padStart(2, '0').toUpperCase();

    return a === 255 ? `${h(r)}${h(g)}${h(b)}` : `${h(r)}${h(g)}${h(b)}${h(a)}`;
}

// Parses a user-typed HEX string → {r,g,b,a} or null if invalid / incomplete.
// Accepts RRGGBB (opaque) or RRGGBBAA (alpha last).
function parseColorInput(text) {
    const clean = text.replace(/[^0-9a-fA-F]/g, '');
    if (clean.length !== 6 && clean.length !== 8) return null;
    if (clean.length === 6) return parseColorToRgba('#' + clean);

    return parseHexAlphaLast(clean);
}

// Auto-detects color format from arbitrary pasted text and parses it.
// Supports: css rgb()/rgba(), comma-separated R,G,B[,A],
// #RRGGBB / #RRGGBBAA (HEX), RRGGBB (HEX), AARRGGBB (ARGB).
// Returns {r,g,b,a} or null if unrecognised.
function detectFormatAndParse(text) {
    const trimmed = text.trim();

    // CSS rgb() / rgba() — e.g. "rgb(255, 128, 0)" or "rgba(255,128,0,0.5)"
    const cssRgb = parseCssRgb(trimmed);
    if (cssRgb) return cssRgb;

    // Comma-separated integers — e.g. "255, 128, 0" or "255,128,0,128"
    if (trimmed.includes(',')) {
        const rgba = parseRgbaChannels(trimmed);
        if (rgba) return rgba;
    }

    // Hex strings
    const hasHash = trimmed.startsWith('#');
    const clean = trimmed.replace(/^#/, '').replace(/\s/g, '');
    if (/^[0-9a-fA-F]+$/.test(clean)) {
        if (clean.length === 3) return parseShortHex(clean);
        if (clean.length === 6) return parseColorToRgba('#' + clean);
        if (clean.length === 8) {
            // #RRGGBBAA — alpha last; AARRGGBB without # — alpha first (OsmAnd)
            return hasHash ? parseHexAlphaLast(clean) : parseColorToRgba('#' + clean);
        }
    }

    return null;
}
