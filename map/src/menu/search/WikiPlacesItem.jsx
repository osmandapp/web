import { useInView } from 'react-intersection-observer';
import { useMemo, useRef } from 'react';
import { ListItemIcon, ListItemText, MenuItem, Skeleton } from '@mui/material';
import MenuItemsTitle from '../components/MenuItemsTitle';
import { WIKI_IMAGE_BASE_URL } from '../../manager/SearchManager';

export default function WikiPlacesItem({ item }) {
    const { ref, inView } = useInView();
    const anchorEl = useRef(null);

    const name = item.properties?.wikiTitle;
    const imageTitle = item.properties?.imageTitle;

    function openInfo(item) {
        console.log(item);
    }

    return useMemo(
        () => (
            <>
                <div ref={ref}>
                    {!inView ? (
                        <Skeleton variant="rectangular" width="100%" height={'var(--menu-item-size)'} />
                    ) : (
                        <>
                            <div>
                                <MenuItem
                                    id={`se-wiki_place-${item.properties?.id}`}
                                    divider
                                    onClick={() => openInfo(item)}
                                >
                                    <ListItemText>
                                        <MenuItemsTitle name={name} maxLines={2} />
                                    </ListItemText>
                                    <ListItemIcon>
                                        <img
                                            src={`${WIKI_IMAGE_BASE_URL}${imageTitle}`}
                                            alt={name}
                                            style={{ width: '66px', height: '66px' }}
                                        />
                                    </ListItemIcon>
                                </MenuItem>
                            </div>
                        </>
                    )}
                </div>
            </>
        ),
        [inView, item, anchorEl]
    );
}
