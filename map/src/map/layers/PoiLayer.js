import {useContext, useEffect, useState} from "react";
import AppContext from "../../context/AppContext";
import {useMap} from "react-leaflet";
import _ from "lodash";
import L from "leaflet";
import MarkerOptions from "../markers/MarkerOptions";
import Utils from "../../util/Utils";

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

    async function getPoi() {
        let latlng = map.getCenter();
        const params = `lat=${latlng.lat.toFixed(6)}&lon=${latlng.lng.toFixed(6)}&zoom=${zoom}&radius=${getRadiusByZoom(zoom)}`;
        const response = await fetch(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/get-poi?${params}`, {
            method: 'POST',
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
            }
            setPoiList({...poiList});
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
        let type = ctx.OBJECT_TYPE_POI;
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
            let coord = poi.geometry.coordinates;
            let marker = new L.Marker((new L.LatLng(coord[1], coord[0])), {
                title: poi.properties.name,
                icon: getPoiIcon(poi.properties.type, poi.properties.color),
                type: poi.properties.type,
                subType: poi.properties.subType,
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

    function getPoiIcon(type, color) {
        let colorBackground = color && color !== 'null' ? color : DEFAULT_POI_COLOR;
        colorBackground = Utils.hexToArgb(colorBackground);
        let svg = MarkerOptions.getSvgBackground(colorBackground, DEFAULT_SHAPE_COLOR);
        let iconWpt = type;
        let iconsFolder = MarkerOptions.POI_ICONS_FOLDER;
        let part = 'mx_';
        if (iconWpt) {
            return L.divIcon({
                html: `
                              <div>
                                  ${svg}
                                  <img class="icon" src="/map/images/${iconsFolder}/${part}${iconWpt}.svg">
                                  </div>
                              </div>
                              `
            })
        }
    }
}