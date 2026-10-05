import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ReactComponent as LinkIcon } from '../assets/icons/ic_action_link.svg';
import SimpleItemWithSwitch from '../frame/components/items/SimpleItemWithSwitch';
import DefaultItem from '../frame/components/items/DefaultItem';
import { apiGet, apiPost } from '../util/HttpApi';
import LoginContext from '../context/LoginContext';
import ButtonPro from '../frame/pro/ButtonPro';
import { openPricingPage } from '../manager/GlobalManager';
import AiAssistantPermissionsDialog, { getScopeGroupTitle, READ, WRITE } from './AiAssistantPermissionsDialog';

const OAUTH_API = `${process.env.REACT_APP_USER_API_SITE}/mapapi/oauth`;

// Access for AI assistants (OAuth clients of /mcp): on/off switch and the connected assistants.
// OsmAnd Pro feature like Garmin Connect. Hidden when the server runs without OAuth (the endpoint is missing).
export default function AiAssistantsItem() {
    const ltx = useContext(LoginContext);
    const { t } = useTranslation();
    const [state, setState] = useState(null);
    const [editing, setEditing] = useState(null);

    const isProUser = ltx.isProAccount();

    const load = useCallback(async () => {
        const res = await apiGet(`${OAUTH_API}/connections`);
        setState(res.ok && res.data ? res.data : null);
    }, []);

    useEffect(() => {
        load().then();
    }, [load]);

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

    const toggle = async () => {
        const res = await apiPost(`${OAUTH_API}/enabled?enabled=${!state.enabled}`, '');
        if (res.ok && res.data) {
            setState(res.data);
        }
    };

    const disconnect = async (id) => {
        const res = await apiPost(`${OAUTH_API}/revoke?id=${id}`, '');
        if (res.ok && res.data) {
            setState(res.data);
            setEditing(null);
        }
    };

    const saveScope = async (id, scopes) => {
        const params = scopes.map((s) => `&scope=${encodeURIComponent(s)}`).join('');
        const res = await apiPost(`${OAUTH_API}/scope?id=${id}${params}`, '');
        if (res.ok && res.data) {
            setState(res.data);
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
                        rightSlot={
                            <Button size="small" onClick={() => setEditing(c)}>
                                {t('web:ai_assistant_permissions')}
                            </Button>
                        }
                    />
                ))}
            <AiAssistantPermissionsDialog
                connection={editing}
                groups={state.groups}
                onClose={() => setEditing(null)}
                onSave={saveScope}
                onDisconnect={disconnect}
            />
        </>
    );
}
