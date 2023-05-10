import {useContext, useEffect, useState} from "react";
import AppContext from "../../context/AppContext";
import {useMap} from "react-leaflet";
import _ from "lodash";
import L from "leaflet";
import MarkerOptions from "../markers/MarkerOptions";
import Utils from "../../util/Utils";
import icons from "../../generated/poiicons.json"
import axios from 'axios';
import PoiManager from "../../context/PoiManager";
import "leaflet.markercluster";

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

    async function getPoi(controller) {
        let latlng = map.getCenter();
        let bbox = map.getBounds();
        const data = {
            categories: ctx.showPoiCategories,
            latBboxPoint1: bbox.getNorthEast().lat,
            lngBboxPoint1: bbox.getNorthEast().lng,
            latBboxPoint2: bbox.getSouthWest().lat,
            lngBboxPoint2: bbox.getSouthWest().lng,
        };
        let response = await axios.post(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/search/search-poi?`, data,
            {
                params: {
                    lat: latlng.lat.toFixed(6),
                    lon: latlng.lng.toFixed(6),
                    zoom: zoom
                },
                signal: controller.signal
            }
        ).catch(function (thrown) {});
        if (response?.data) {
            return response.data.features;
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

    useEffect(() => {
        let ignore = false;
        let controller = new AbortController();

        async function getPoiList() {
            if (((zoom !== prevZoom) || move || typesChanged()) && !_.isEmpty(ctx.showPoiCategories)) {
                if (prevController) {
                    prevController.abort();
                }
                setPrevController(controller);
                setPrevZoom(_.cloneDeep(zoom));
                setPrevTypesLength(_.cloneDeep(ctx.showPoiCategories.length));
                _.debounce(await getPoi(controller).then((res) => {
                    if (res && !ignore) {
                        const newPoiList = {
                            prevLayer: _.cloneDeep(poiList.layer),
                            layer: createPoiLayer(res)
                        }
                        setPoiList(newPoiList);
                    }
                }), 1000);
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

        getPoiList();
        return () => {
            ignore = true;
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
                instagram: poi.properties.instagram
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
        const iconWpt = getIconNameForPoiType(poi);
        if (iconWpt) {
            return L.divIcon({
                html: `
                              <div>
                                  ${svg}
                                  <img class="icon" src="/map/images/${MarkerOptions.POI_ICONS_FOLDER}/mx_${iconWpt}.svg">
                                  </div>
                              </div>
                              `
            })
        }
    }

    function getIconNameForPoiType(poi) {
        if (poi) {
            const iconKeyName = poi.properties.iconKeyName;
            const typeOsmTag = poi.properties.typeOsmTag;
            const typeOsmValue = poi.properties.typeOsmValue;
            const iconName = poi.properties.iconName;
            if (icons.includes(`mx_${iconKeyName}.svg`)) {
                return iconKeyName;
            } else if (icons.includes(`mx_${typeOsmTag} ${typeOsmValue}.svg`)) {
                return `${typeOsmTag} ${typeOsmValue}`;
            } else if (iconName !== 'null' && icons.includes(`mx_${iconName}.svg`)) {
                return iconName;
            } else {
                return PoiManager.DEFAULT_POI_ICON;
            }
        }
    }
}
