import React from 'react';
import FavoriteGroup from './FavoriteGroup';
import DividerWithMargin from '../../frame/components/dividers/DividerWithMargin';

export default function PinnedFavoriteGroups({ pinnedGroups }) {
    return (
        <>
            {pinnedGroups.map((g, index) => (
                <FavoriteGroup
                    key={g.id ?? index}
                    index={index}
                    group={g}
                    showDivider={index !== pinnedGroups.length - 1}
                />
            ))}
            {pinnedGroups.length > 0 && <DividerWithMargin margin="0px" />}
        </>
    );
}
