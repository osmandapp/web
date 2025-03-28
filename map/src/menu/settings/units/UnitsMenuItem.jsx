import styles from '../settings.module.css';
import { ClickAwayListener, ListItemIcon, ListItemText, MenuItem, Popover, Typography } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext, { LOCAL_STORAGE_UNITS_SETTINGS } from '../../../context/AppContext';
import { useWindowSize } from '../../../util/hooks/useWindowSize';
import DividerWithMargin from '../../components/dividers/DividerWithMargin';
import { useTranslation } from 'react-i18next';
import UnitsSelectMenu from './UnitsSelectMenu';

export default function UnitsMenuItem({ unit, isLastItem = false }) {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();

    const [, height] = useWindowSize();
    const [openList, setOpenList] = useState(false);
    const anchorEl = useRef(null);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_UNITS_SETTINGS, JSON.stringify(ctx.unitsSettings));
    }, [ctx.unitsSettings]);

    return (
        <>
            <MenuItem className={styles.item} onClick={() => setOpenList(true)}>
                <ListItemIcon className={styles.icon}>{unit.icon}</ListItemIcon>
                <ListItemText>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography variant="inherit" noWrap>
                            {t(unit.title)}
                        </Typography>
                        <Typography ref={anchorEl} variant="body2" className={styles.lang} noWrap>
                            {t(ctx.unitsSettings[unit.type])}
                        </Typography>
                    </div>
                </ListItemText>
            </MenuItem>
            {!isLastItem && <DividerWithMargin margin={'64px'} />}
            <Popover
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                sx={{ ml: '8px', mt: '40px', maxHeight: height / 2 }}
                open={openList}
                anchorEl={anchorEl.current}
                disablePortal={true}
            >
                <ClickAwayListener
                    onClickAway={() => {
                        setOpenList(false);
                        ctx.setOpenedPopper(null);
                    }}
                >
                    <div>
                        <UnitsSelectMenu unit={unit} setOpenList={setOpenList} />
                    </div>
                </ClickAwayListener>
            </Popover>
        </>
    );
}
