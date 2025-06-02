import { CircularProgress, IconButton, Tooltip } from '@mui/material';
import styles from '../../../menu/trackfavmenu.module.css';
import React, { useContext, useState } from 'react';
import { ReactComponent as MenuIcon } from '../../../assets/icons/ic_overflow_menu_white.svg';
import { ReactComponent as MenuIconHover } from '../../../assets/icons/ic_overflow_menu_with_background.svg';
import { useTranslation } from 'react-i18next';
import AppContext from '../../../context/AppContext';

export default function ThreeDotsButton({ name, tip, id, setOpenActions, anchorEl, processDownload = false }) {
    const ctx = useContext(AppContext);
    const { t } = useTranslation();

    const [hoverIconInfo, setHoverIconInfo] = useState(false);

    return (
        <>
            <Tooltip key={name} title={t(tip)} arrow placement="bottom-end">
                <IconButton
                    id={id}
                    className={styles.sortIcon}
                    onMouseEnter={() => setHoverIconInfo(true)}
                    onMouseLeave={() => setHoverIconInfo(false)}
                    onClick={(e) => {
                        setOpenActions(true);
                        ctx.setOpenedPopper(anchorEl);
                        e.stopPropagation();
                    }}
                    ref={anchorEl}
                >
                    {processDownload ? (
                        <CircularProgress size={24} />
                    ) : hoverIconInfo ? (
                        <MenuIconHover />
                    ) : (
                        <MenuIcon />
                    )}
                </IconButton>
            </Tooltip>
        </>
    );
}
