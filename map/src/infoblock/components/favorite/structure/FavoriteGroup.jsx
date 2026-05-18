import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FavoritesManager from '../../../../manager/FavoritesManager';
import ChevronItem from '../../../../frame/components/items/ChevronItem';
import FolderSelectionPanel from './FolderSelectionPanel';
import itemStyles from '../../../../frame/components/items/items.module.css';

export default function FavoriteGroup({ favoriteGroup, setFavoriteGroup, defaultGroup, isTrackWpt }) {
    const { t } = useTranslation();

    const [panelOpen, setPanelOpen] = useState(false);

    const displayName = getDisplayName(favoriteGroup, defaultGroup, t);

    return (
        <>
            <ChevronItem
                id="se-fav-group-selector"
                title={t('folder')}
                titleProps={{ className: itemStyles.mainBoldText }}
                value={displayName}
                onClick={() => setPanelOpen((o) => !o)}
            />
            {panelOpen && (
                <FolderSelectionPanel
                    selectedGroup={favoriteGroup}
                    defaultGroup={defaultGroup}
                    isTrackWpt={!!isTrackWpt}
                    onSelect={setFavoriteGroup}
                    onClose={() => setPanelOpen(false)}
                />
            )}
        </>
    );
}

function getDisplayName(group, defaultGroup, t) {
    if (!group) {
        if (!defaultGroup || defaultGroup === FavoritesManager.DEFAULT_GROUP_NAME) {
            return t('shared_string_my_favorites');
        }
        const parts = defaultGroup.split('/');
        return parts[parts.length - 1];
    }
    const { name } = group;
    if (!name || name === FavoritesManager.DEFAULT_GROUP_NAME || name === '') {
        return t('shared_string_my_favorites');
    }
    const parts = name.split('/');
    return parts[parts.length - 1];
}
