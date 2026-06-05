import React, { useState } from 'react';
import {
    Alert,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    InputAdornment,
    LinearProgress,
    Slider,
    TextField,
    Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as CopyIcon } from '../../../assets/icons/ic_action_copy.svg';
import { LIVE_TRACKS_URL, MAIN_URL_WITH_SLASH } from '../../../manager/GlobalManager';
import { generateTranslationKey, computeTranslationId } from '../../../util/livetracks/liveTrackCrypto';
import dialogStyles from '../../../dialogs/dialog.module.css';
import styles from '../../trackfavmenu.module.css';

const DURATION_MARKS = [{ value: 0 }, { value: 1 }, { value: 4 }, { value: 8 }, { value: 24 }];

function durationLabel(value, t) {
    if (value === 0) return t('web:live_track_duration_permanent');
    if (value === 1) return t('web:live_track_duration_1h');
    if (value === 4) return t('web:live_track_duration_4h');
    if (value === 8) return t('web:live_track_duration_8h');
    return t('web:live_track_duration_24h');
}

export default function CreateLiveTrackDialog({ open, onClose, createLiveTrack }) {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [duration, setDuration] = useState(0);
    const [shareUrl, setShareUrl] = useState(null);
    const [creating, setCreating] = useState(false);
    const [copied, setCopied] = useState(false);
    const [geoError, setGeoError] = useState(null);
    const [createError, setCreateError] = useState(null);

    function clearGeoError() {
        setGeoError(null);
    }

    function clearCreateError() {
        setCreateError(null);
    }

    async function handleCreate() {
        setGeoError(null);
        setCreateError(null);

        // Check geolocation permission before creating the translation.
        if (!navigator.geolocation) {
            setGeoError('web:live_track_geo_not_supported');
            return;
        }
        if (navigator.permissions) {
            try {
                const status = await navigator.permissions.query({ name: 'geolocation' });
                if (status.state === 'denied') {
                    setGeoError('web:live_track_geo_denied');
                    return;
                }
            } catch (_) {
                // permissions API not supported — proceed and let watchPosition handle it
            }
        }

        setCreating(true);

        let key, translationId;
        try {
            key = await generateTranslationKey();
            translationId = await computeTranslationId(key);
        } catch (_) {
            setCreateError(t('web:live_track_key_gen_error'));
            setCreating(false);
            return;
        }

        createLiveTrack(
            translationId,
            key,
            name.trim() || null,
            duration,
            (translation) => {
                const urlParams = new URLSearchParams({ tid: translation.id });
                if (translation.name) {
                    urlParams.set('name', translation.name);
                }
                setShareUrl(`${globalThis.location.origin}/map/live/?${urlParams}#${key}`);
                setCreating(false);
                navigate(
                    `${MAIN_URL_WITH_SLASH}${LIVE_TRACKS_URL}?tid=${translation.id}&name=${encodeURIComponent(translation.name)}`
                );
            },
            (errCode) => {
                setGeoError(toGeoErrorKey(errCode));
                setCreating(false);
            }
        );
    }

    function handleCopy() {
        navigator.clipboard.writeText(shareUrl);
        setCopied(true);
    }

    function handleClose() {
        setName('');
        setDuration(0);
        setShareUrl(null);
        setCreating(false);
        setCopied(false);
        setGeoError(null);
        setCreateError(null);
        onClose();
    }

    return (
        <Dialog id="se-create-live-track-dialog" open={open} onClose={handleClose}>
            {creating && <LinearProgress />}
            <DialogTitle className={dialogStyles.title}>{t('web:live_track_create')}</DialogTitle>
            <DialogContent className={dialogStyles.content} sx={{ overflowY: 'visible' }}>
                {shareUrl ? (
                    <TextField
                        fullWidth
                        variant="filled"
                        value={shareUrl}
                        label={copied ? t('shared_string_copied') : t('web:live_track_share_link')}
                        slotProps={{
                            input: {
                                readOnly: true,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton className={styles.appBarIcon} onClick={handleCopy}>
                                            <CopyIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                ) : (
                    <div className={styles.liveTrackDialogContent}>
                        {geoError && (
                            <Alert severity="warning" onClose={clearGeoError}>
                                {t(geoError)}
                            </Alert>
                        )}
                        {createError && (
                            <Alert severity="error" onClose={clearCreateError}>
                                {createError}
                            </Alert>
                        )}
                        <TextField
                            fullWidth
                            variant="filled"
                            label={t('shared_string_name')}
                            placeholder={t('web:live_track_name_hint')}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <div className={styles.liveTrackSliderBox}>
                            <Typography className={styles.liveTrackDurationLabel}>
                                {durationLabel(duration, t)}
                            </Typography>
                            <Slider
                                value={duration}
                                onChange={(_, v) => setDuration(v)}
                                min={0}
                                max={24}
                                step={null}
                                marks={DURATION_MARKS}
                                size="small"
                                valueLabelDisplay="off"
                                sx={{ color: '#237BFF' }}
                            />
                        </div>
                    </div>
                )}
            </DialogContent>
            <DialogActions>
                <Button className={dialogStyles.button} onClick={handleClose}>
                    {t(shareUrl ? 'shared_string_close' : 'shared_string_cancel')}
                </Button>
                {!shareUrl && (
                    <Button className={dialogStyles.button} disabled={creating} onClick={handleCreate}>
                        {t('shared_string_add')}
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    );
}

function toGeoErrorKey(code) {
    if (code === 'geolocation_denied') return 'web:live_track_geo_denied';
    if (code === 'geolocation_unavailable') return 'web:live_track_geo_unavailable';
    return 'web:live_track_geo_not_supported';
}
