import React from 'react';
import isEmpty from 'lodash-es/isEmpty';
import FavoriteGroup from './FavoriteGroup';
import DividerWithMargin from '../../frame/components/dividers/DividerWithMargin';

export default function PinnedFavoriteGroups({ pinnedGroups }) {
    return (
        <>
            {pinnedGroups.map((g, index) => (
                <FavoriteGroup
                    key={g + index}
                    index={index}
                    group={g}
                    showDivider={index !== pinnedGroups.length - 1}
                />
            ))}
            {!isEmpty(pinnedGroups) && <DividerWithMargin margin="0px" />}
        </>
    );
}
