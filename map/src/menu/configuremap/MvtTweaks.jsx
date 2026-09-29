import React, { useContext } from 'react';
import { CircularProgress, Link, Stack, TextField, Typography } from '@mui/material';
import MapContext from '../../context/MapContext';
import { isMvtTileURL, isOsmAndTileURL } from '../../map/layers/MvtLayerConfig';
import { parseMinZoomIdFilter } from '../../map/util/MvtMapUtils';
import SimpleText from '../../frame/components/other/SimpleText';
import SimpleItemWithSwitch from '../../frame/components/items/SimpleItemWithSwitch';
import ActionIconBtn from '../../frame/components/btns/ActionIconBtn';
import { ReactComponent as AddIcon } from '../../assets/icons/ic_action_add_outlined.svg';
import { ReactComponent as RemoveIcon } from '../../assets/icons/ic_action_remove_outlined.svg';
import { ReactComponent as AddActiveIcon } from '../../assets/icons/ic_action_add_filled.svg';
import { ReactComponent as RemoveActiveIcon } from '../../assets/icons/ic_action_remove_filled.svg';

const MIN_ZOOM_ID_PLACEHOLDER = '^(admin_level_[24]|place-city-capital)';

export default function MvtTweaks() {
    const mtx = useContext(MapContext);
    if (!isMvtTileURL(mtx.tileURL)) {
        return null;
    }
    const size = Number.isFinite(mtx.mvtTileStats?.bytes) ? (mtx.mvtTileStats.bytes / 1024 ** 2).toFixed(2) : '—';
    const invalidFilter = !parseMinZoomIdFilter(mtx.mvtTweaks.minZoomIdFilter);
    const changeMinZoomIdFilter = (minZoomIdFilter) => {
        if (minZoomIdFilter === mtx.mvtTweaks.minZoomIdFilter) {
            return;
        }
        mtx.setMvtStyleUpdating(true);
        mtx.setMvtTweaks((prev) => ({ ...prev, minZoomIdFilter }));
    };
    const zoomShifts = [
        {
            id: 'data-zoom-shift',
            name: 'Data zoom shift',
            value: isOsmAndTileURL(mtx.tileURL) ? mtx.mvtTweaks.dataZoomShift : 0,
            disabled: !isOsmAndTileURL(mtx.tileURL),
            loading: mtx.mvtTileStats?.count == null,
            onChange: (delta) =>
                mtx.setMvtTweaks((prev) => ({
                    ...prev,
                    dataZoomShift: Math.max(-3, Math.min(3, prev.dataZoomShift + delta)),
                })),
        },
        {
            id: 'style-detail-shift',
            name: 'Style details (minZoom)',
            value: mtx.mvtTweaks.styleDetailShift,
            loading: mtx.mvtStyleUpdating,
            onChange: (delta) => {
                mtx.setMvtStyleUpdating(true);
                mtx.setMvtTweaks((prev) => ({
                    ...prev,
                    styleDetailShift: Math.max(-3, Math.min(3, prev.styleDetailShift + delta)),
                }));
            },
        },
    ];

    return (
        <>
            <SimpleText
                id="se-mvt-tile-stats"
                text={
                    <Typography component="div" align="center">
                        Size <strong>{size} MB</strong>
                        {` (${mtx.mvtTileStats?.count ?? '—'} tiles, map z${mtx.mvtTileStats?.mapZoom ?? '—'}, mvt z${mtx.mvtTileStats?.zoom ?? '—'})`}
                    </Typography>
                }
                maxLines={1}
            />
            {zoomShifts.map(({ id, name, value, disabled, loading, onChange }) => (
                <SimpleText
                    key={id}
                    id={`se-mvt-${id}`}
                    text={
                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <Typography>{name}</Typography>
                                {loading && <CircularProgress size={16} aria-label={`Loading: ${name}`} />}
                            </Stack>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <ActionIconBtn
                                    aria-label={`Decrease ${name}`}
                                    disabled={disabled || value <= -3}
                                    onClick={onChange ? () => onChange(-1) : undefined}
                                    icon={<RemoveIcon />}
                                    activeIcon={<RemoveActiveIcon />}
                                />
                                <Typography>{value}</Typography>
                                <ActionIconBtn
                                    aria-label={`Increase ${name}`}
                                    disabled={disabled || value >= 3}
                                    onClick={onChange ? () => onChange(1) : undefined}
                                    icon={<AddIcon />}
                                    activeIcon={<AddActiveIcon />}
                                />
                            </Stack>
                        </Stack>
                    }
                />
            ))}
            <SimpleText
                maxLines={null}
                text={
                    <Stack spacing={1}>
                        <Typography component="div">
                            <label htmlFor="se-mvt-minzoom-id-filter">Limit minZoom shift by id</label> (
                            <Link
                                component="button"
                                type="button"
                                variant="inherit"
                                color="inherit"
                                underline="always"
                                onClick={() =>
                                    changeMinZoomIdFilter(
                                        mtx.mvtTweaks.minZoomIdFilter === MIN_ZOOM_ID_PLACEHOLDER
                                            ? ''
                                            : MIN_ZOOM_ID_PLACEHOLDER
                                    )
                                }
                            >
                                regexp
                            </Link>
                            )
                        </Typography>
                        <TextField
                            id="se-mvt-minzoom-id-filter"
                            fullWidth
                            size="small"
                            placeholder={MIN_ZOOM_ID_PLACEHOLDER}
                            value={mtx.mvtTweaks.minZoomIdFilter}
                            error={invalidFilter}
                            helperText={invalidFilter ? 'Invalid regular expression' : null}
                            onChange={(event) => changeMinZoomIdFilter(event.target.value)}
                        />
                    </Stack>
                }
            />
            <SimpleItemWithSwitch
                id="se-mvt-fractional-zoom"
                text="Enable fractional map zoom"
                checked={mtx.mvtTweaks.fractionalZoom}
                onChange={() => mtx.setMvtTweaks((prev) => ({ ...prev, fractionalZoom: !prev.fractionalZoom }))}
            />
        </>
    );
}
