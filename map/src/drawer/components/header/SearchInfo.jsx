import {IconButton, Input, Typography} from "@mui/material";
import {Close, Search} from "@mui/icons-material";
import React, {useContext} from "react";
import AppContext from "../../../context/AppContext";

export default function SearchInfo() {

    const ctx = useContext(AppContext);

    const searchEnable = () => {
        const shallowClone = {...ctx.searchCtx};
        shallowClone.query = '';

        ctx.setSearchCtx(shallowClone);
    }
    const searchRun = (event) => {
        if (event.key === 'Enter') {
            let hash = window.location.hash;
            if (!hash) {
                alert("Please zoom in closer");
                return;
            }
            let arr = hash.split('/');
            if (parseInt(arr[0].substring(1)) < 7) {
                alert("Please zoom in closer");
                return;
            }
            let latlng = {lat: parseFloat(arr[1]), lng: parseFloat(arr[2])};
            searchAsync(ctx.searchCtx.query, latlng).then();
        }
    }
    const cancelSearch = () => {
        const shallowClone = {...ctx.searchCtx};
        delete shallowClone.query;
        delete shallowClone.geojson;
        ctx.setSearchCtx(shallowClone);
    }
    const updateSearch = (event) => {
        const shallowClone = {...ctx.searchCtx};
        shallowClone.query = event.target.value;
        ctx.setSearchCtx(shallowClone);
    };

    const searchAsync = async (text, latlng) => {
        const params = `lat=${latlng.lat.toFixed(6)}&lon=${latlng.lng.toFixed(6)}&search=${text}`;
        const response = await fetch(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/search?${params}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok) {
            let data = await response.json();
            let props = {};
            if (data.features.length > 0) {
                props = data.features[0]?.properties;
            }
            const copy = {...ctx.searchCtx};
            copy.id = new Date().getTime();
            copy.props = props;
            copy.geojson = data;
            ctx.setSearchCtx(copy);
        }
    };

    return <>
        {ctx.searchCtx.query !== undefined && <>
            <Input inputProps={{style: {color: "white"}}}
                   label="Search Results"
                   inputRef={(input) => {
                       if (input != null) {
                           input.focus();
                       }
                   }}
                   onChange={updateSearch}
                   onKeyPress={searchRun}
            >
            </Input>
            <IconButton onClick={cancelSearch} color="inherit">
                <Close/>
            </IconButton>
        </>}
        {ctx.searchCtx.query === undefined && <>
            <IconButton onClick={searchEnable} color="inherit">
                <Search/>
            </IconButton>
        </>}
    </>
}