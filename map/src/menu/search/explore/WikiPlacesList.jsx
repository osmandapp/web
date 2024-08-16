import WikiPlacesItem from './WikiPlacesItem';
import { Box } from '@mui/material';
import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';

export default function WikiPlacesList({ size, showAll = null, useOverflow = true }) {
    const ctx = useContext(AppContext);

    return (
        <Box
            id={'se-wiki_places-items'}
            sx={{
                overflowY: useOverflow ? 'auto' : 'hidden',
                overflowX: 'hidden',
            }}
        >
            {!ctx.searchSettings.useWikiImages &&
                ctx.wikiPlaces
                    ?.slice(0, size)
                    .map((item, index) => (
                        <WikiPlacesItem key={index} item={item} index={index} lastIndex={size - 1} />
                    ))}
            {showAll}
        </Box>
    );
}
