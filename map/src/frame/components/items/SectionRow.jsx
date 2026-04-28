import React from 'react';
import { MenuItem } from '@mui/material';
import { ReactComponent as ArrowUpIcon } from '../../../assets/icons/ic_action_arrow_up.svg';
import styles from './items.module.css';

export default function SectionRow({ id, name, onClick, maxLines = 2 }) {
    return (
        <MenuItem id={id} className={styles.sectionRow} onClick={onClick} disableRipple>
            <div className={styles.sectionRowText} style={{ WebkitLineClamp: maxLines }}>
                {name}
            </div>
            <ArrowUpIcon className={styles.sectionRowChevron} />
        </MenuItem>
    );
}
