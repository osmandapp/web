import React, { useState } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTranslation } from 'react-i18next';
import FavoritesManager from '../../../../manager/FavoritesManager';
import SelectItemWithoutOptions from '../../../../frame/components/items/SelectItemWithoutOptions';
import FolderSelectionPanel from './FolderSelectionPanel';

export default function FavoriteGroup({ favoriteGroup, setFavoriteGroup, defaultGroup, isTrackWpt }) {
    const { t } = useTranslation();

    const [panelOpen, setPanelOpen] = useState(false);

    const displayName = getDisplayName(favoriteGroup, defaultGroup, t);

    return (
        <>
            <SelectItemWithoutOptions
                id="se-fav-group-selector"
                title={t('folder')}
                value={displayName}
                boldTitle={false}
                endIcon={<ChevronRightIcon sx={{ color: 'var(--text-secondary)' }} />}
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
