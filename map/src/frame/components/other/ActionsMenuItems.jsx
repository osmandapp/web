import { Divider, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import React from 'react';
import styles from '../../../menu/trackfavmenu.module.css';

/**
 * Renders a list of styled action menu items for use inside a MUI Menu or Paper.
 *
 * items: Array<{
 *   id: string,
 *   icon: ReactNode,
 *   label: string,
 *   onClick: () => void,
 *   dividerBefore?: boolean,
 * }>
 */
export default function ActionsMenuItems({ items }) {
    return items.map((item) => (
        <React.Fragment key={item.id}>
            {item.dividerBefore && <Divider className={styles.dividerActions} />}
            <MenuItem id={item.id} className={styles.action} onClick={item.onClick}>
                <ListItemIcon className={styles.iconAction}>{item.icon}</ListItemIcon>
                <ListItemText>
                    <Typography className={styles.actionName} noWrap>
                        {item.label}
                    </Typography>
                </ListItemText>
            </MenuItem>
        </React.Fragment>
    ));
}
