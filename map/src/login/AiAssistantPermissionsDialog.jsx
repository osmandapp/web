import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import dialogStyles from '../dialogs/dialog.module.css';

export const READ = ':read';
export const WRITE = ':write';

// group keys come from the server; an unknown group falls back to the server text
const SCOPE_GROUP_TEXTS = {
    account: { title: 'login_account', description: 'web:ai_scope_account_desc' },
    favorites: { title: 'shared_string_favorites', description: 'web:ai_scope_favorites_desc' },
    tracks: { title: 'shared_string_tracks', description: 'web:ai_scope_tracks_desc' },
    markers: { title: 'web:ai_scope_markers', description: 'web:ai_scope_markers_desc' },
    osm: { title: 'web:ai_scope_osm', description: 'web:ai_scope_osm_desc' },
    history: { title: 'web:ai_scope_history', description: 'web:ai_scope_history_desc' },
    settings: { title: 'shared_string_settings', description: 'web:ai_scope_settings_desc' },
    files: { title: 'web:ai_scope_files', description: 'web:ai_scope_files_desc' },
};

export function getScopeGroupTitle(t, group) {
    const key = SCOPE_GROUP_TEXTS[group.key]?.title;

    return key ? t(key) : group.title;
}

// Permissions of one connected AI assistant: View / Edit per OsmAnd Cloud group (groups come from the server).
export default function AiAssistantPermissionsDialog({ connection, groups, onClose, onSave, onDisconnect }) {
    const { t } = useTranslation();
    const [scopes, setScopes] = useState(() => new Set(connection.scope?.split(' ') ?? []));

    // edit includes view
    const toggle = (key, write) => {
        const next = new Set(scopes);
        if (write) {
            if (next.has(key + WRITE)) {
                next.delete(key + WRITE);
            } else {
                next.add(key + WRITE);
                next.add(key + READ);
            }
        } else if (next.has(key + READ)) {
            next.delete(key + READ);
            next.delete(key + WRITE);
        } else {
            next.add(key + READ);
        }
        setScopes(next);
    };

    return (
        <Dialog open onClose={onClose} fullWidth PaperProps={{ sx: { maxWidth: 480 } }}>
            <DialogTitle className={dialogStyles.title}>{connection.client}</DialogTitle>
            <DialogContent className={dialogStyles.content}>
                <Typography variant="body2" color="text.secondary">
                    {t('web:ai_assistant_permissions_desc')}
                </Typography>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell align="center">{t('web:ai_assistant_view')}</TableCell>
                            <TableCell align="center">{t('shared_string_edit')}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {groups?.map((g) => (
                            <TableRow key={g.key}>
                                <TableCell>
                                    <Typography variant="body2">{getScopeGroupTitle(t, g)}</Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {getScopeGroupDescription(t, g)}
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Switch
                                        id={`se-ai-scope-${g.key}-read`}
                                        checked={scopes.has(g.key + READ)}
                                        onChange={() => toggle(g.key, false)}
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    {g.write && (
                                        <Switch
                                            id={`se-ai-scope-${g.key}-write`}
                                            checked={scopes.has(g.key + WRITE)}
                                            onChange={() => toggle(g.key, true)}
                                        />
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </DialogContent>
            <DialogActions>
                <Button className={dialogStyles.button} color="error" onClick={() => onDisconnect(connection.id)}>
                    {t('web:shared_string_disconnect')}
                </Button>
                <Button className={dialogStyles.button} onClick={onClose}>
                    {t('shared_string_cancel')}
                </Button>
                <Button
                    id="se-ai-scope-save"
                    className={dialogStyles.button}
                    disabled={scopes.size === 0}
                    onClick={() => onSave(connection.id, [...scopes])}
                >
                    {t('web:shared_string_save')}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

function getScopeGroupDescription(t, group) {
    const key = SCOPE_GROUP_TEXTS[group.key]?.description;

    return key ? t(key) : group.description;
}
