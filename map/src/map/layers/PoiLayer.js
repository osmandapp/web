import {useContext, useEffect, useState} from "react";
import AppContext from "../../context/AppContext";
import {useMap} from "react-leaflet";
import _ from "lodash";
import L from "leaflet";
import MarkerOptions from "../markers/MarkerOptions";
import Utils from "../../util/Utils";
import icons from "../../generated/poiicons.json"

export default function PoiLayer() {

    const ctx = useContext(AppContext);
    const map = useMap();
    const [zoom, setZoom] = useState(null);
    const [move, setMove] = useState(false);
    const [poiList, setPoiList] = useState({
        new: {},
        prev: {}
    });

    const DEFAULT_POI_COLOR = '#f8931d';
    const DEFAULT_SHAPE_COLOR = 'circle';
    const DEFAULT_POI_ICON = "craft_default";

    async function getPoi() {
        let latlng = map.getCenter();
        const params = `lat=${latlng.lat.toFixed(6)}&lon=${latlng.lng.toFixed(6)}&zoom=${zoom}&radius=${getRadiusByZoom(zoom)}`;
        const response = await fetch(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/get-poi?${params}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok) {
            let data = await response.json();
            if (data.features.length > 0) {
                return data.features;
            }
        }
    }

    function getRadiusByZoom(zoom) {
        if (zoom < 15) {
            return 3000;
        } else if (zoom < 16) {
            return 1000;
        } else if (zoom < 17) {
            return 500;
        } else if (zoom < 18) {
            return 200;
        } else if (zoom < 19) {
            return 100;
        } else {
            return 50;
        }
    }

    map.on('zoomend', function () {
        setZoom(map.getZoom());
    });

    map.on("dragend", function (e) {
        setMove(true);
    });

    useEffect(() => {
        if ((zoom || move) && ctx.showPoi) {
            getPoi().then((res) => {
                if (res) {
                    if (poiList?.new?.layer) {
                        poiList.prev = _.cloneDeep(poiList.new.layer);
                    }
                    poiList.new.pois = res;
                    poiList.new.layer = createPoiLayer(poiList.new.pois);
                    setPoiList({...poiList});
                }
            });
        } else {
            if (poiList?.new?.layer) {
                poiList.prev = _.cloneDeep(poiList.new.layer);
                poiList.new.layer = null;
                setPoiList({...poiList});
            }
        }
    }, [zoom, move, ctx.showPoi])

    useEffect(() => {
        if (poiList?.new?.layer) {
            poiList?.new?.layer.addTo(map).on('click', onClick);
        }
        if (poiList.prev) {
            map.removeLayer(poiList.prev);
        }
        setMove(false);
    }, [poiList])

    function onClick(e) {
        const type = ctx.OBJECT_TYPE_POI;
        ctx.setCurrentObjectType(type);
        ctx.selectedGpxFile = {};
        ctx.selectedGpxFile.poi = {
            options: e.sourceTarget.options,
            latlng: e.sourceTarget._latlng
        }
        ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
        ctx.setUpdateContextMenu(true);
    }

    function createPoiLayer(poiList) {
        let layers = [];
        poiList.forEach(poi => {
            const coord = poi.geometry.coordinates;
            const marker = new L.Marker((new L.LatLng(coord[1], coord[0])), {
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
            layers.push(marker);
        })

        if (layers.length > 0) {
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
