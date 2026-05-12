import React from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton, Paper, SvgIcon, Tooltip } from '@mui/material';
import mapStyles from '../../../map/map.module.css';
import { ReactComponent as FocusOnIcon } from '../../../assets/icons/ic_action_points_focus_on.svg';
import { ReactComponent as FocusOffIcon } from '../../../assets/icons/ic_action_points_focus_off.svg';
import { useFocusMode } from '../../../util/hooks/map/useFocusMode';

const PRIMARY_BLUE = '#237BFF';
const PRIMARY_BLUE_HOVER = '#1a5fcc';

export default function FocusToggleBtn({ id = 'se-focus-toggle' }) {
    const { t } = useTranslation();
    const { selectionFocus, focusModeOn, toggleFocusMode } = useFocusMode();

    if (!selectionFocus) return null;

    const Icon = focusModeOn ? FocusOffIcon : FocusOnIcon;
    const tip = t(focusModeOn ? 'web:focus_off' : 'web:focus_on');

    const primarySx = focusModeOn
        ? {
              backgroundColor: `${PRIMARY_BLUE} !important`,
              '&:hover': { backgroundColor: `${PRIMARY_BLUE_HOVER} !important` },
              '& svg, & svg path': { fill: '#fff' },
          }
        : undefined;

    return (
        <Tooltip title={tip} arrow placement="bottom">
            <Paper id={id} className={mapStyles.button} sx={primarySx}>
                <IconButton onClick={toggleFocusMode}>
                    <SvgIcon component={Icon} inheritViewBox />
                </IconButton>
            </Paper>
        </Tooltip>
    );
}
