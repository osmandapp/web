import {useContext, useEffect, useState, useRef} from "react";
import AppContext from "../../context/AppContext";
import {useMap} from "react-leaflet";
import _ from "lodash";
import L from "leaflet";
import MarkerOptions from "../markers/MarkerOptions";
import Utils from "../../util/Utils";
import icons from "../../generated/poiicons.json"
import 'leaflet-spin';
import PoiManager from "../../context/PoiManager";
import "leaflet.markercluster";
import {Alert} from "@mui/material";
import {apiPost} from "../../util/HttpApi";

export default function PoiLayer() {

    const ctx = useContext(AppContext);
    const map = useMap();
    const [prevZoom, setPrevZoom] = useState(null);
    const [prevTypesLength, setPrevTypesLength] = useState(null);
    const [zoom, setZoom] = useState(null);
    const [move, setMove] = useState(false);
    const [poiList, setPoiList] = useState({
        layer: null,
        prevLayer: null
    });
    const [prevController, setPrevController] = useState(false);
    const [useLimit, setUseLimit] = useState(false);
    const [mapLimitExceeded, setMapLimitExceeded] = useState(false);
    const [addAlert, setAddAlert] = useState(false);
    const [bbox, setBbox] = useState(null);

    async function getPoi(controller, showPoiCategories, bbox, savedBbox) {
        const searchData = {
            categories: showPoiCategories,
            northWest: `${bbox.getNorthWest().lat},${bbox.getNorthWest().lng}`,
            southEast: `${bbox.getSouthEast().lat},${bbox.getSouthEast().lng}`,
            savedNorthWest: savedBbox ? `${savedBbox.getNorthWest().lat},${savedBbox.getNorthWest().lng}` : null,
            savedSouthEast: savedBbox ? `${savedBbox.getSouthEast().lat},${savedBbox.getSouthEast().lng}` : null
        };
        let response = await apiPost(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/search/search-poi?`, searchData,
            {
                signal: controller.signal
            }
        )
        if (response?.data) {
            return response.data;
        } else {
            console.log(`Pois not found`);
        }
    }

    useEffect(() => {
        if (map) {
            map.on('zoomend', () => {
                setZoom(map.getZoom());
            });

            map.on("dragend", () => {
                setMove(true);
            });
        }
    }, [map])

    function typesChanged() {
        return (!_.isEmpty(ctx.showPoiCategories) && prevTypesLength !== ctx.showPoiCategories?.length);
    }

    const debouncedGetPoi = useRef(_.debounce(async (controller, ignore, zoom, poiList, showPoiCategories, savedBbox) => {
        map.spin(true, {color: '#1976d2'});
        let bbox = map.getBounds();
        await getPoi(controller, showPoiCategories, bbox, savedBbox).then((res) => {
            map.spin(false);
            if (res && !ignore) {
                if (!res.alreadyFound) {
                    if (!res.mapLimitExceeded && res.features) {
                        const newPoiList = {
                            prevLayer: _.cloneDeep(poiList.layer),
                            layer: createPoiLayer(res.features.features),
                        }
                        setPoiList(newPoiList);
                        setBbox(!res.useLimit ? bbox : null);
                        setUseLimit(res.useLimit);
                    }
                }
                setMapLimitExceeded(res.mapLimitExceeded);
            }
        })
    }, 1000)).current;

    function allPoiFound(zoom, prevZoom) {
        return prevZoom && zoom > prevZoom && !useLimit;
    }

    useEffect(() => {
        let ignore = false;
        let controller = new AbortController();

        async function getPoiList() {
            if (((!allPoiFound(zoom, prevZoom) && zoom !== prevZoom) || move || typesChanged()) && !_.isEmpty(ctx.showPoiCategories)) {
                if (prevController) {
                    prevController.abort();
                }
                setPrevController(controller);
                setPrevZoom(_.cloneDeep(zoom));
                setPrevTypesLength(_.cloneDeep(ctx.showPoiCategories.length));
                debouncedGetPoi(controller, ignore, zoom, poiList, ctx.showPoiCategories, bbox);
            } else {
                if (poiList.layer && _.isEmpty(ctx.showPoiCategories)) {
                    const newPoiList = {
                        prevLayer: _.cloneDeep(poiList.layer),
                        layer: null
                    }
                    setPoiList(newPoiList);
                }
            }
        }

        if ((zoom < 8 && !_.isEmpty(ctx.showPoiCategories)) || mapLimitExceeded) {
            setAddAlert(true);
        } else {
            setAddAlert(false);
            getPoiList().then();
            return () => {
                ignore = true;
            }
        }

    }, [zoom, move, ctx.showPoiCategories])

    useEffect(() => {
        if (poiList.layer && !map.hasLayer(poiList.layer)) {
            poiList.layer.addTo(map).on('click', onClick);
        }
        if (poiList.prevLayer) {
            map.removeLayer(poiList.prevLayer);
        }
        setMove(false);
    }, [poiList])

    function onClick(e) {
        const type = ctx.OBJECT_TYPE_POI;
        ctx.setCurrentObjectType(type);

        const poi = {
            options: e.sourceTarget.options,
            latlng: e.sourceTarget._latlng
        }
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile, poi});
        ctx.setUpdateContextMenu(true);
    }

    function createPoiLayer(poiList = []) {
        const layers = poiList.map(poi => {
            const coord = poi.geometry.coordinates;
            return new L.Marker((new L.LatLng(coord[1], coord[0])), {
                title: poi.properties.name,
                icon: getPoiIcon(poi),
                type: poi.properties.type,
                subType: poi.properties.subType,
                iconKeyName: poi.properties.iconKeyName,
                typeOsmTag: poi.properties.typeOsmTag,
                typeOsmValue: poi.properties.typeOsmValue,
                iconName: poi.properties.iconName,
                operator: poi.properties.operator,
                website: poi.properties.website,
                opening_hours: poi.properties.opening_hours,
                email: poi.properties.email,
                phone: poi.properties.phone,
                facebook: poi.properties.facebook,
                instagram: poi.properties.instagram,
                osmUrl: poi.properties.osmUrl
            });
        })

        if (layers.length) {
            return new L.FeatureGroup(layers);
        }
    }

    function getPoiIcon(poi) {
        const color = poi.properties.color;
        let colorBackground = color && color !== 'null' ? color : PoiManager.DEFAULT_POI_COLOR;
        colorBackground = Utils.hexToArgb(colorBackground);
        const svg = MarkerOptions.getSvgBackground(colorBackground, PoiManager.DEFAULT_SHAPE_COLOR);
        const iconWpt = PoiManager.getIconNameForPoiType(poi.properties.iconKeyName, poi.properties.typeOsmTag, poi.properties.typeOsmValue, poi.properties.iconName);
        if (iconWpt) {
            return L.divIcon({
                html: `
                              <div>
                                  ${svg}
                                  <img alt="iconWpt" class="icon" src="/map/images/${MarkerOptions.POI_ICONS_FOLDER}/mx_${iconWpt}.svg">
                                  </div>
                              </div>
                              `
            })
        }
    }

    return <>
        {addAlert && <Alert sx={{position: 'absolute', zIndex: 1000, left: '40%', top: '2%'}} severity="info">Please zoom in closer!</Alert>}
    </>
}
