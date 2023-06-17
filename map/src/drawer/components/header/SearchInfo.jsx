import {IconButton, Input} from "@mui/material";
import {Close, Search} from "@mui/icons-material";
import React, {useContext, useEffect, useState} from "react";
import AppContext from "../../../context/AppContext";
import { apiGet } from '../../../login/HttpApiLogout';

export default function SearchInfo() {

    const ctx = useContext(AppContext);

    const [processSearch, setProcessSearch] = useState(false);

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
            setProcessSearch(true);
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
        const response = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/search/search?${params}`, {
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
            setProcessSearch(false);
        }
    };

    useEffect(() => {
        let resultText = '';
        if (processSearch) {
            resultText = `Searching…`;
        } else {
            if (ctx.searchCtx.geojson) {
                resultText = `Found ${ctx.searchCtx.geojson.features.length} search results.`
            }
        }
        ctx.setHeaderText(prevState => ({
            ...prevState,
            search: {text: resultText}
        }));
    }, [ctx.searchCtx, ctx.setSearchCtx, processSearch, setProcessSearch]);

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