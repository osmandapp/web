import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as LinkIcon } from '../assets/icons/ic_action_link.svg';
import SimpleItemWithSwitch from '../frame/components/items/SimpleItemWithSwitch';
import DefaultItem from '../frame/components/items/DefaultItem';
import { apiGet, apiPost } from '../util/HttpApi';
import LoginContext from '../context/LoginContext';
import AppContext from '../context/AppContext';
import ButtonPro from '../frame/pro/ButtonPro';
import { openPricingPage } from '../manager/GlobalManager';
import { confirm } from '../dialogs/GlobalConfirmationDialog';
import AiAssistantPermissionsDialog, { getScopeGroupTitle, READ, WRITE } from './AiAssistantPermissionsDialog';

const OAUTH_API = `${process.env.REACT_APP_USER_API_SITE}/mapapi/oauth`;

// Access for AI assistants (OAuth clients of /mcp): on/off switch and the connected assistants.
// OsmAnd Pro feature like Garmin Connect. Hidden when the server runs without OAuth (the endpoint is missing).
export default function AiAssistantsItem() {
    const ltx = useContext(LoginContext);
    const ctx = useContext(AppContext);
    const { t } = useTranslation();
    const [state, setState] = useState(null);
    const [editing, setEditing] = useState(null);
    const [saving, setSaving] = useState(false);

    const load = useCallback(async () => {
        const res = await apiGet(`${OAUTH_API}/connections`);
        setState(res.ok && res.data ? res.data : null);
    }, []);

    useEffect(() => {
        load().then();
    }, [load]);

    const isProUser = ltx.isProAccount();

    if (!state) {
        return null;
    }

    if (!isProUser) {
        const openPricing = () => openPricingPage('external_integrations');

        return (
            <DefaultItem
                id="se-login-menu-ai-assistants"
                icon={<LinkIcon />}
                name={t('web:ai_assistants_access')}
                component="div"
                onClick={openPricing}
                rightSlot={
                    <span onClick={(e) => e.stopPropagation()}>
                        <ButtonPro onClick={openPricing} />
                    </span>
                }
            />
        );
    }

    const update = async (url) => {
        if (saving) {
            return false;
        }
        setSaving(true);
        const res = await apiPost(url, '');
        setSaving(false);
        if (!res.ok || !res.data) {
            ctx.setNotification({ text: t('web:ai_assistants_not_saved'), severity: 'error' });
            return false;
        }
        setState(res.data);

        return true;
    };

    const toggle = () =>
        confirm({
            ctx,
            skip: !state.enabled || !state.connections?.length,
            text: t('web:ai_assistants_turn_off_confirm'),
            callback: () => update(`${OAUTH_API}/enabled?enabled=${!state.enabled}`),
        });

    const disconnect = (id) =>
        confirm({
            ctx,
            text: t('web:ai_assistant_disconnect_confirm', { client: editing.client }),
            callback: async () => {
                if (await update(`${OAUTH_API}/revoke?id=${id}`)) {
                    setEditing(null);
                }
            },
        });

    const saveScope = async (id, scopes) => {
        const params = scopes.map((s) => `&scope=${encodeURIComponent(s)}`).join('');
        if (await update(`${OAUTH_API}/scope?id=${id}${params}`)) {
            setEditing(null);
        }
    };

    // "Favorites, Tracks (edit)": groups the assistant can view, (edit) where it can also change
    const summary = (scope) => {
        const granted = new Set(scope?.split(' ') ?? []);

        return state.groups
            ?.filter((g) => granted.has(g.key + READ))
            .map((g) =>
                granted.has(g.key + WRITE)
                    ? t('web:ai_assistant_group_edit', { group: getScopeGroupTitle(t, g) })
                    : getScopeGroupTitle(t, g)
            )
            .join(', ');
    };

    return (
        <>
            <SimpleItemWithSwitch
                id="se-login-menu-ai-assistants"
                icon={<LinkIcon />}
                text={t('web:ai_assistants_access')}
                checked={!!state.enabled}
                onChange={toggle}
            />
            {state.enabled &&
                state.connections?.map((c) => (
                    <DefaultItem
                        key={c.id}
                        id={`se-ai-connection-${c.id}`}
                        name={c.client}
                        additionalInfo={summary(c.scope)}
                        component="div"
                        onClick={() => setEditing(c)}
                        rightText={t('web:ai_assistant_permissions')}
                    />
                ))}
            {editing && (
                <AiAssistantPermissionsDialog
                    connection={editing}
                    groups={state.groups}
                    onClose={() => setEditing(null)}
                    onSave={saveScope}
                    onDisconnect={disconnect}
                />
            )}
        </>
    );
}
