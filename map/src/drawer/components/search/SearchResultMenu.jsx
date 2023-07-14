import { Button, Collapse, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import { ExpandLess, ExpandMore, Search } from '@mui/icons-material';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../../context/AppContext';
import SearchResultItem from './SearchResultItem';
import drawerStyles from '../../styles/DrawerStyles';

export default function SearchResultMenu() {
    const ctx = useContext(AppContext);
    const styles = drawerStyles();

    const [searchResultOpen, setSearchResultOpen] = useState(false);
    const [searchResult, setSearchResult] = useState([]);

    function clearSearchResult() {
        ctx.setSearchCtx([]);
    }

    function showSearchResults() {
        return ctx.searchCtx && ctx.searchCtx.geojson && ctx.searchCtx.geojson.features.length > 0;
    }

    useEffect(() => {
        if (ctx.searchCtx.geojson) {
            if (ctx.searchCtx.geojson.features.length > 200) {
                setSearchResult([...ctx.searchCtx.geojson.features.slice(0, 200)]);
            } else {
                setSearchResult([...ctx.searchCtx.geojson.features]);
            }
        } else {
            setSearchResult([]);
        }
    }, [ctx.searchCtx, ctx.setSearchCtx]);

    return (
        <>
            {showSearchResults() && (
                <MenuItem sx={{ mb: 1 }} onClick={() => setSearchResultOpen(!searchResultOpen)}>
                    <ListItemIcon>
                        <Search fontSize="small" />
                    </ListItemIcon>
                    <ListItemText> Search Results </ListItemText>
                    <Typography variant="body2" color="textSecondary">
                        {ctx.searchCtx.geojson && ctx.searchCtx.geojson.features.length > 0
                            ? `${ctx.searchCtx.geojson.features.length}`
                            : ''}
                    </Typography>
                    {ctx.searchCtx.geojson && ctx.searchCtx.geojson.features.length === 0 ? (
                        <></>
                    ) : searchResultOpen ? (
                        <ExpandLess />
                    ) : (
                        <ExpandMore />
                    )}
                </MenuItem>
            )}
            <Collapse in={searchResultOpen} timeout="auto" unmountOnExit>
                {ctx.searchCtx.geojson && ctx.searchCtx.geojson.features.length > 0 && (
                    <MenuItem disableRipple={true}>
                        <Button
                            className={styles.button}
                            variant="contained"
                            component="span"
                            sx={{ ml: 3 }}
                            onClick={() => clearSearchResult()}
                        >
                            Clear
                        </Button>
                    </MenuItem>
                )}
                <div style={{ maxHeight: 350, overflow: 'auto' }}>
                    {searchResult.length > 0 &&
                        searchResult.map((res, index) => {
                            return <SearchResultItem key={res.type + index} res={res} />;
                        })}
                </div>
            </Collapse>
        </>
    );
}
