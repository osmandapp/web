import {useContext, useEffect, useState} from "react";
import AppContext from "../../context/AppContext";
import {useMap} from "react-leaflet";
import _ from "lodash";
import L from "leaflet";
import MarkerOptions from "../markers/MarkerOptions";
import Utils from "../../util/Utils";
import icons from "../../generated/poiicons.json"
import {get} from "axios";

export default function PoiLayer() {

    const ctx = useContext(AppContext);
    const map = useMap();
    const [zoom, setZoom] = useState(null);
    const [move, setMove] = useState(false);
    const [poiList, setPoiList] = useState({
        layer: null,
        prevLayer: null
    });

    const DEFAULT_POI_COLOR = '#f8931d';
    const DEFAULT_SHAPE_COLOR = 'circle';
    const DEFAULT_POI_ICON = "craft_default";

    async function getPoi() {
        let latlng = map.getCenter();
        let response = await get(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/get-poi?`,
            {
                params: {
                    lat: latlng.lat.toFixed(6),
                    lon: latlng.lng.toFixed(6),
                    zoom: zoom,
                    radius: getRadiusByZoom(zoom),
                }
            }
        );
        if (response.data) {
            return response.data.features;
        }
    }

    function getRadiusByZoom(zoom) {
        switch (true) {
            case (zoom < 15):
                return 3000;
            case (zoom === 15):
                return 1000;
            case (zoom === 16):
                return 500;
            case (zoom === 17):
                return 200;
            case (zoom === 18):
                return 100;
            default:
                return 50;
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

    useEffect(() => {
        if ((zoom || move) && ctx.showPoi) {
            getPoi().then((res) => {
                if (res) {
                    setPoiList(
                        {
                            ...poiList,
                            ...(poiList.layer && {prevLayer: _.cloneDeep(poiList.layer)}),
                            layer: createPoiLayer(res)
                        });
                }
            });
        } else {
            if (poiList.layer) {
                setPoiList(
                    {
                        ...poiList,
                        prevLayer: _.cloneDeep(poiList.layer),
                        layer: null
                    }
                );
            }
        }
    }, [zoom, move, ctx.showPoi])

    useEffect(() => {
        if (poiList.layer) {
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
        let colorBackground = color && color !== 'null' ? color : DEFAULT_POI_COLOR;
        colorBackground = Utils.hexToArgb(colorBackground);
        const svg = MarkerOptions.getSvgBackground(colorBackground, DEFAULT_SHAPE_COLOR);
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
                return DEFAULT_POI_ICON;
            }
        }
    }
}
