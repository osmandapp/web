/**
 * Copyright (C) 2011-2012 Pavel Shramov
 * Copyright (C) 2013-2017 Maxime Petazzoni <maxime.petazzoni@bulix.org>
 * All Rights Reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * - Redistributions of source code must retain the above copyright notice,
 *   this list of conditions and the following disclaimer.
 *
 * - Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

/*
 * Thanks to Pavel Shramov who provided the initial implementation and Leaflet
 * integration. Original code was at https://github.com/shramov/leaflet-plugins.
 *
 * It was then cleaned-up and modified to record and make available more
 * information about the GPX track while it is being parsed so that the result
 * can be used to display additional information about the track that is
 * rendered on the Leaflet map.
 */

import "../assets/css/gpx.css"
import {Point, Segment, Track} from "gpx-builder/dist/builder/BaseBuilder/models";

var L = L || require('leaflet');

var _MAX_POINT_INTERVAL_MS = 15000;
var _SECOND_IN_MILLIS = 1000;
var _MINUTE_IN_MILLIS = 60 * _SECOND_IN_MILLIS;
var _HOUR_IN_MILLIS = 60 * _MINUTE_IN_MILLIS;
var _DAY_IN_MILLIS = 24 * _HOUR_IN_MILLIS;

var _GPX_STYLE_NS = 'http://www.topografix.com/GPX/gpx_style/0/2';

var _DEFAULT_MARKER_OPTS = {
    wptIconsType: [],
    pointMatchers: [],
    iconSize: [33, 45],
    shadowSize: [50, 50],
    iconAnchor: [16, 45],
    shadowAnchor: [16, 47],
    clickable: false
};

let _FAVORITE_MARKER_OPTS = {
    wptIconUrls: [],
    iconSize: [33, 45],
    shadowSize: [50, 50],
    iconAnchor: [16, 45],
    shadowAnchor: [16, 47],
    clickable: false
};

var _DEFAULT_POLYLINE_OPTS = {
    color: 'blue'
};
var _DEFAULT_GPX_OPTS = {
    parseElements: ['track', 'route', 'waypoint'],
    joinTrackSegments: true
};

L.GPX = L.FeatureGroup.extend({
    initialize: function (gpx, options) {
        options.max_point_interval = options.max_point_interval || _MAX_POINT_INTERVAL_MS;
        options.marker_options = this._merge_objs(
            _DEFAULT_MARKER_OPTS,
            options.marker_options || {});
        options.polyline_options = options.polyline_options || {};
        options.gpx_options = this._merge_objs(
            _DEFAULT_GPX_OPTS,
            options.gpx_options || {});

        L.Util.setOptions(this, options);

        // Base icon class for track pins.
        L.GPXTrackIcon = L.Icon.extend({options: options.marker_options});
        L.FavoriteIcon = L.Icon.extend({options: _FAVORITE_MARKER_OPTS});

        this._gpx = gpx;
        this._layers = {};
        this._init_info();

        if (gpx) {
            this._parse(gpx, options, this.options.async);
        }
    },

    get_duration_string: function (duration, hidems) {
        var s = '';

        if (duration >= _DAY_IN_MILLIS) {
            s += Math.floor(duration / _DAY_IN_MILLIS) + 'd ';
            duration = duration % _DAY_IN_MILLIS;
        }

        if (duration >= _HOUR_IN_MILLIS) {
            s += Math.floor(duration / _HOUR_IN_MILLIS) + ':';
            duration = duration % _HOUR_IN_MILLIS;
        }

        var mins = Math.floor(duration / _MINUTE_IN_MILLIS);
        duration = duration % _MINUTE_IN_MILLIS;
        if (mins < 10) s += '0';
        s += mins + '\'';

        var secs = Math.floor(duration / _SECOND_IN_MILLIS);
        duration = duration % _SECOND_IN_MILLIS;
        if (secs < 10) s += '0';
        s += secs;

        if (!hidems && duration > 0) s += '.' + Math.round(Math.floor(duration) * 1000) / 1000;
        else s += '"';

        return s;
    },

    get_duration_string_iso: function (duration, hidems) {
        var s = this.get_duration_string(duration, hidems);
        return s.replace("'", ':').replace('"', '');
    },

    // Public methods
    to_miles: function (v) {
        return v / 1.60934;
    },
    to_ft: function (v) {
        return v * 3.28084;
    },
    m_to_km: function (v) {
        return v / 1000;
    },
    m_to_mi: function (v) {
        return v / 1609.34;
    },
    ms_to_kmh: function (v) {
        return v * 3.6;
    },
    ms_to_mih: function (v) {
        return v / 1609.34 * 3600;
    },

    get_name: function () {
        return this._info.name;
    },
    get_desc: function () {
        return this._info.desc;
    },
    get_author: function () {
        return this._info.author;
    },
    get_copyright: function () {
        return this._info.copyright;
    },
    get_distance: function () {
        return this._info.length;
    },
    get_distance_imp: function () {
        return this.to_miles(this.m_to_km(this.get_distance()));
    },

    get_start_time: function () {
        return this._info.duration.start;
    },
    get_end_time: function () {
        return this._info.duration.end;
    },
    get_moving_time: function () {
        return this._info.duration.moving;
    },
    get_total_time: function () {
        return this._info.duration.total;
    },

    get_moving_pace: function () {
        return this.get_moving_time() / this.m_to_km(this.get_distance());
    },
    get_moving_pace_imp: function () {
        return this.get_moving_time() / this.get_distance_imp();
    },

    get_moving_speed: function () {
        return this.m_to_km(this.get_distance()) / (this.get_moving_time() / (3600 * 1000));
    },
    get_moving_speed_imp: function () {
        return this.to_miles(this.m_to_km(this.get_distance())) / (this.get_moving_time() / (3600 * 1000));
    },

    get_total_speed: function () {
        return this.m_to_km(this.get_distance()) / (this.get_total_time() / (3600 * 1000));
    },
    get_total_speed_imp: function () {
        return this.to_miles(this.m_to_km(this.get_distance())) / (this.get_total_time() / (3600 * 1000));
    },

    get_elevation_gain: function () {
        return this._info.elevation.gain;
    },
    get_elevation_loss: function () {
        return this._info.elevation.loss;
    },
    get_elevation_gain_imp: function () {
        return this.to_ft(this.get_elevation_gain());
    },
    get_elevation_loss_imp: function () {
        return this.to_ft(this.get_elevation_loss());
    },
    get_elevation_data: function () {
        var _this = this;
        return this._info.elevation._points.map(
            function (p) {
                return _this._prepare_data_point(p, _this.m_to_km, null,
                    function (a, b) {
                        return a.toFixed(2) + ' km, ' + b.toFixed(0) + ' m';
                    });
            });
    },
    get_elevation_data_imp: function () {
        var _this = this;
        return this._info.elevation._points.map(
            function (p) {
                return _this._prepare_data_point(p, _this.m_to_mi, _this.to_ft,
                    function (a, b) {
                        return a.toFixed(2) + ' mi, ' + b.toFixed(0) + ' ft';
                    });
            });
    },
    get_elevation_max: function () {
        return this._info.elevation.max;
    },
    get_elevation_min: function () {
        return this._info.elevation.min;
    },
    get_elevation_max_imp: function () {
        return this.to_ft(this.get_elevation_max());
    },
    get_elevation_min_imp: function () {
        return this.to_ft(this.get_elevation_min());
    },

    get_speed_data: function () {
        var _this = this;
        return this._info.speed._points.map(
            function (p) {
                return _this._prepare_data_point(p, _this.m_to_km, _this.ms_to_kmh,
                    function (a, b) {
                        return a.toFixed(2) + ' km, ' + b.toFixed(2) + ' km/h';
                    });
            });
    },
    get_speed_data_imp: function () {
        var _this = this;
        return this._info.speed._points.map(
            function (p) {
                return _this._prepare_data_point(p, _this.m_to_mi, _this.ms_to_mih,
                    function (a, b) {
                        return a.toFixed(2) + ' mi, ' + b.toFixed(2) + ' mi/h';
                    });
            });
    },
    get_speed_max: function () {
        return this.m_to_km(this._info.speed.max) * 3600;
    },
    get_speed_max_imp: function () {
        return this.to_miles(this.get_speed_max());
    },

    get_average_hr: function () {
        return this._info.hr.avg;
    },
    get_average_temp: function () {
        return this._info.atemp.avg;
    },
    get_average_cadence: function () {
        return this._info.cad.avg;
    },
    get_heartrate_data: function () {
        var _this = this;
        return this._info.hr._points.map(
            function (p) {
                return _this._prepare_data_point(p, _this.m_to_km, null,
                    function (a, b) {
                        return a.toFixed(2) + ' km, ' + b.toFixed(0) + ' bpm';
                    });
            });
    },
    get_heartrate_data_imp: function () {
        var _this = this;
        return this._info.hr._points.map(
            function (p) {
                return _this._prepare_data_point(p, _this.m_to_mi, null,
                    function (a, b) {
                        return a.toFixed(2) + ' mi, ' + b.toFixed(0) + ' bpm';
                    });
            });
    },
    get_cadence_data: function () {
        var _this = this;
        return this._info.cad._points.map(
            function (p) {
                return _this._prepare_data_point(p, _this.m_to_km, null,
                    function (a, b) {
                        return a.toFixed(2) + ' km, ' + b.toFixed(0) + ' rpm';
                    });
            });
    },
    get_temp_data: function () {
        var _this = this;
        return this._info.atemp._points.map(
            function (p) {
                return _this._prepare_data_point(p, _this.m_to_km, null,
                    function (a, b) {
                        return a.toFixed(2) + ' km, ' + b.toFixed(0) + ' degrees';
                    });
            });
    },
    get_cadence_data_imp: function () {
        var _this = this;
        return this._info.cad._points.map(
            function (p) {
                return _this._prepare_data_point(p, _this.m_to_mi, null,
                    function (a, b) {
                        return a.toFixed(2) + ' mi, ' + b.toFixed(0) + ' rpm';
                    });
            });
    },
    get_temp_data_imp: function () {
        var _this = this;
        return this._info.atemp._points.map(
            function (p) {
                return _this._prepare_data_point(p, _this.m_to_mi, null,
                    function (a, b) {
                        return a.toFixed(2) + ' mi, ' + b.toFixed(0) + ' degrees';
                    });
            });
    },

    reload: function () {
        this._init_info();
        this.clearLayers();
        this._parse(this._gpx, this.options, this.options.async);
    },

    // Private methods
    _merge_objs: function (a, b) {
        let _ = {};
        for (let attr1 in a) {
            _[attr1] = a[attr1];
        }
        for (let attr2 in b) {
            _[attr2] = b[attr2];
        }
        return _;
    },

    _prepare_data_point: function (p, trans1, trans2, trans_tooltip) {
        let r = [(trans1 && trans1(p[0])) || p[0], (trans2 && trans2(p[1])) || p[1]];
        r.push((trans_tooltip && trans_tooltip(r[0], r[1])) || (r[0] + ': ' + r[1]));
        return r;
    },

    _init_info: function () {
        this._info = {
            name: null,
            points: [],
            meta: null,
            trk: [],
            rte: [],
            wpt: null,
            length: 0.0,
            elevation: {gain: 0.0, loss: 0.0, max: 0.0, min: Infinity, _points: []},
            speed: {max: 0.0, _points: []},
            hr: {avg: 0, _total: 0, _points: []},
            duration: {start: null, end: null, moving: 0, total: 0},
            atemp: {avg: 0, _total: 0, _points: []},
            cad: {avg: 0, _total: 0, _points: []},
            favouritesGroup: [],
            bounds: null
        };
    },

    _load_xml: function (url, cb, options, async) {
        if (async === undefined) async = this.options.async;
        if (options === undefined) options = this.options;

        var req = new window.XMLHttpRequest();
        req.open('GET', url, async);
        try {
            req.overrideMimeType('text/xml'); // unsupported by IE
        } catch (e) {
        }
        req.onreadystatechange = function () {
            if (req.readyState !== 4) return;
            if (req.status === 200) cb(req.responseXML, options);
        };
        req.send(null);
    },

    _parse: function (input, options, async) {
        var _this = this;
        var cb = function (gpx, options) {
            var layers = _this._parse_gpx_data(gpx, options);
            if (!layers) {
                _this.fire('error', {element: gpx});
                return;
            }
            _this.addLayer(layers);
            _this._info.bounds = layers.getBounds();
            _this.fire('loaded', {layers: layers, element: gpx});
        }
        if (input.substr(0, 1) === '<') { // direct XML has to start with a <
            var parser = new DOMParser();
            if (async) {
                setTimeout(function () {
                    cb(parser.parseFromString(input, "text/xml"), options);
                });
            } else {
                cb(parser.parseFromString(input, "text/xml"), options);
            }
        } else {
            this._load_xml(input, cb, options, async);
        }
    },

    _parse_gpx_data: function (xml, options) {
        let layers = [];

        let parseElements = options.gpx_options.parseElements;

        this._parseMETA(xml);
        layers = this._parseRTE(parseElements, xml, layers, options);
        layers = this._parseTRK(parseElements, xml, layers, options);
        layers = this._parseWPT(parseElements, xml, layers, options);

        this._info.hr.avg = Math.round(this._info.hr._total / this._info.hr._points.length);
        this._info.cad.avg = Math.round(this._info.cad._total / this._info.cad._points.length);
        this._info.atemp.avg = Math.round(this._info.atemp._total / this._info.atemp._points.length);

        if (layers.length > 1) {
            return new L.FeatureGroup(layers);
        } else if (layers.length === 1) {
            return layers[0];
        }
    },

    _parseMETA: function (xml) {
        let metaTag = xml.getElementsByTagName('metadata');
        if (metaTag.length > 0) {
            this._info.meta = {};
            for (const [key, value] of Object.entries(metaTag[0].children)) {
                if (key === 'extensions') {
                    let extTag = metaTag.getElementsByTagName('extensions');
                    if (extTag.length > 0) {
                        this._info.meta.extensions = {};
                        for (const [key, value] of Object.entries(extTag[0].children)) {
                            this._info.meta.extensions[`${extTag[0].children[key].nodeName}`] = extTag[0].children[key].textContent;
                        }
                    }
                } else {
                    this._info.meta[`${metaTag[0].children[key].nodeName}`] = metaTag[0].children[key].textContent;
                }
            }
        }

        // let name = metaTag.getElementsByTagName('name');
        // if (name.length > 0) {
        //     this._info.meta.name = name[0].textContent;
        // }
        // let desc = metaTag.getElementsByTagName('desc');
        // if (desc.length > 0) {
        //     this._info.meta.desc = desc[0].textContent;
        // }
        // let author = metaTag.getElementsByTagName('author');
        // if (author.length > 0) {
        //     this._info.meta.author = author[0].textContent;
        // }
        // let copyright = metaTag.getElementsByTagName('copyright');
        // if (copyright.length > 0) {
        //     this._info.meta.copyright = copyright[0].textContent;
        // }
    },

    _parseTRK: function (parseElements, xml, layers, options) {
        if (parseElements.indexOf('track') > -1) {
            // tracks are <trkpt> tags in one or more <trkseg> sections in each <trk>
            let tracks = xml.getElementsByTagName('trk');
            for (let i = 0; i < tracks.length; i++) {
                let track = tracks[i];
                let polyline_options = this._extract_styling(track);
                let lastId = 0;
                let pointsAll = [];

                let segments = track.getElementsByTagName('trkseg');
                for (let j = 0; j < segments.length; j++) {
                    let points = this._parse_points(segments[j], options, polyline_options, 'trkpt', lastId);
                    let extensions = {}
                    let routesegments = [];
                    let routetypes = [];
                    pointsAll = pointsAll.concat(points)
                    lastId = points[points.length - 1].id;

                    let ext = segments[j].getElementsByTagName('extensions');
                    if (ext.length > 0) {
                        for (const [key, value] of Object.entries(ext[0].children)) {
                            if (ext[0].children[key].nodeName === 'osmand:route') {
                                routesegments = this._getAttributes(ext[0].children[key], routesegments);
                            } else if (ext[0].children[key].nodeName === 'osmand:types') {
                                routetypes = this._getAttributes(ext[0].children[key], routetypes);
                            } else {
                                extensions[`${ext[0].children[key].nodeName}`] = ext[0].children[key].textContent;
                            }
                        }
                    }

                    if (!this._info.trk[i]) {
                        this._info.trk[i] = [];
                    }

                    this._info.trk[i].push({
                        points: points,
                        extensions: extensions,
                        routesegments: routesegments,
                        routetypes: routetypes
                    });
                }

                if (options.gpx_options.joinTrackSegments) {
                    layers = layers.concat(this._createLayers(pointsAll, track, options, 'trkpt', polyline_options, true));
                } else {
                    for (let j = 0; j < segments.length; j++) {
                        layers = layers.concat(this._createLayers(this._info.trk[j].points, segments[j], options, 'trkpt', polyline_options, true));
                    }
                }
            }
        }
        return layers;
    },

    _getAttributes: function (element, arr) {
        for (const [k, v] of Object.entries(element.children)) {
            const attrNames = v.getAttributeNames();
            let segment = {};
            for (let y in attrNames) {
                segment[`${attrNames[y]}`] = v.getAttribute(attrNames[y]);
            }
            arr.push(segment)
        }
        return arr;
    },

    _parseRTE: function (parseElements, xml, layers, options) {
        if (parseElements.indexOf('route') > -1) {
            if (parseElements.indexOf('waypoint') !== -1) {
                let el = xml.getElementsByTagName('rtept');
                for (let i = 0; i < el.length; i++) {
                    this._createRteMarker(el[i], layers);
                }

                this._parseRtePoints(xml, options, layers, false);
            } else {
                // routes are <rtept> tags inside <rte> sections
                this._parseRtePoints(xml, options, layers, true);
            }
        }
        return layers;
    },

    _parseWPT: function (parseElements, xml, layers, options) {
        if (parseElements.indexOf('waypoint') > -1) {
            let el = xml.getElementsByTagName('wpt');
            let pointsAll = null;
            for (let i = 0; i < el.length; i++) {
                let ll = new L.LatLng(
                    el[i].getAttribute('lat'),
                    el[i].getAttribute('lon'));

                ll.meta = {name: null, time: null, cmt: null, desc: null, symKey: null, typeKey: null};
                ll.id = i;

                let nameEl = el[i].getElementsByTagName('name');
                let name = nameEl.length > 0 ? nameEl[0].textContent : '';
                ll.meta.name = name;

                let timeEl = el[i].getElementsByTagName('time');
                let time = timeEl.length > 0 ? timeEl[0].textContent : '';
                ll.meta.time = time;

                let cmtEl = el[i].getElementsByTagName('cmt');
                let cmt = cmtEl.length > 0 ? cmtEl[0].textContent : '';
                ll.meta.cmt = cmt;

                let descEl = el[i].getElementsByTagName('desc');
                let desc = descEl.length > 0 ? descEl[0].textContent : '';
                ll.meta.desc = desc;

                let symEl = el[i].getElementsByTagName('sym');
                let symKey = symEl.length > 0 ? symEl[0].textContent : null;
                ll.meta.symKey = symKey;

                let typeEl = el[i].getElementsByTagName('type');
                let typeKey = typeEl.length > 0 ? typeEl[0].textContent : 'Favorites';
                ll.meta.typeKey = typeKey;

                let extEl = el[i].getElementsByTagName('extensions');

                if (extEl.length > 0) {
                    ll.meta.extensions = {}
                    for (const [key, value] of Object.entries(extEl[0].children)) {
                        ll.meta.extensions[extEl[0].children[key].nodeName] = extEl[0].children[key].textContent;
                    }
                }


                let address;
                let icon;
                let background;
                let color;
                let hidden;
                if (extEl) {
                    let addressEl = el[i].getElementsByTagName('osmand:address');
                    address = addressEl.length > 0 ? addressEl[0].textContent : '';

                    let iconEl = el[i].getElementsByTagName('osmand:icon');
                    icon = iconEl.length > 0 ? iconEl[0].textContent : '';

                    let backgroundEl = el[i].getElementsByTagName('osmand:background');
                    background = backgroundEl.length > 0 ? backgroundEl[0].textContent : '';

                    let colorEl = el[i].getElementsByTagName('osmand:color');
                    color = colorEl.length > 0 ? this._hexToArgb(colorEl[0].textContent) : '';

                    let hiddenEl = el[i].getElementsByTagName('osmand:hidden');
                    hidden = hiddenEl.length > 0 ? hiddenEl[0].textContent : 'false';
                }
                if (!pointsAll) {
                    pointsAll = {};
                }
                pointsAll[ll.id] = ll;
                /*
                 * Add waypoint marker based on the waypoint symbol key.
                 *
                 * First look for a configured icon for that symKey. If not found, look
                 * for a configured icon URL for that symKey and build an icon from it.
                 * If none of those match, look through the point matchers for a match
                 * on the waypoint's name.
                 *
                 * Otherwise, fall back to the default icon if one was configured, or
                 * finally to the default icon URL, if one was configured.
                 */

                color = this._checkColor(color);
                let svg = this._checkBackground(background, color);
                let symIcon = this._checkIcon(icon, svg, options, symKey, typeKey, name);

                if (!symIcon) {
                    console.log(
                        'No waypoint icon could be matched for symKey=%s,typeKey=%s,name=%s on waypoint %o',
                        symKey, typeKey, name, el[i]);
                    continue;
                }

                let marker = new L.Marker(ll, {
                    clickable: options.marker_options.clickable,
                    title: name,
                    icon: symIcon,
                    group: typeKey,
                    time: time,
                    address: address,
                    cmt: cmt
                });
                marker.bindPopup("<b>" + name + "</b>" + (desc.length > 0 ? '<br>' + desc : '')).openPopup();
                this.fire('addpoint', {point: marker, point_type: 'waypoint', element: el[i]});

                if (!options.group) {
                    layers.push(marker);
                } else {
                    if (options.group.length > 0) {
                        options.group.forEach(function (item) {
                            if (item.type === typeKey) {
                                layers.push(marker);
                            }
                        });
                    } else {
                        let group = this._info.favouritesGroup.find(g => {
                            return g.type === typeKey;
                        })
                        if (group) {
                            group.markers.push(marker);
                        } else {
                            this._info.favouritesGroup.push({type: typeKey, hidden: hidden, markers: [marker]});
                        }
                    }
                }
            }
            this._info.wpt = pointsAll;
        }
        return layers;
    },

    _createRteMarker: function (el, layers) {
        let ll = new L.LatLng(
            el.getAttribute('lat'),
            el.getAttribute('lon'));
        let pointIcon = L.icon({
            iconUrl: '/map/images/map_icons/circle.svg',
            pointMatchers: [],
            iconSize: [10, 10],
            clickable: false
        });

        let marker = new L.Marker(ll, {
            icon: pointIcon
        });
        layers.push(marker);
    },

    _parseRtePoints: function (xml, options, layers, addLayer) {
        let routes = xml.getElementsByTagName('rte');
        let pointsAll = [];
        let lastId = 0;
        for (let i = 0; i < routes.length; i++) {
            let points = this._parse_points(routes[i], options, {}, 'rtept', lastId);
            pointsAll = pointsAll.concat(points)
            lastId = points[points.length - 1].id;
            if (this._info.rte[i]) {
                this._info.rte[i].push({points: points});
            } else {
                this._info.rte[i] = [];
                this._info.rte[i].push({points: points});
            }
            if (addLayer) {
                layers = layers.concat(this._createLayers(pointsAll, routes[i], options, 'rtept', {}, false));
            }
        }
    },

    _checkColor: function (color) {
        return color && color !== 'null' ? color : '#eecc22';
    },

    _checkBackground: function (background, color) {
        let svg;
        if (background && background !== 'null') {
            if (background === "circle") {
                svg = ` <svg class="background" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="12" fill="${color}"/>
                        </svg>`
            }
            if (background === "octagon") {
                svg = `<svg class="background" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                           <path d="M13 19L19 13H29L35 19V29L29 35H19L13 29V19Z" fill="${color}"/>
                        </svg>`
            }
            if (background === "square") {
                svg = `<svg class="background" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <rect x="13" y="13" width="22" height="22" rx="3" fill="${color}"/>
                        </svg>`
            }
        } else {
            svg = `<svg class="background" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                         <circle cx="24" cy="24" r="12" fill="${color}"/>
                        </svg>`
        }
        return svg;
    },

    _checkIcon: function (icon, svg, options, symKey, typeKey, name) {
        let wptIcons = options.marker_options.wptIcons;
        let wptIconUrls = options.marker_options.wptIconUrls;
        let wptIconsType = options.marker_options.wptIconsType;
        let wptIconTypeUrls = options.marker_options.wptIconTypeUrls;
        let ptMatchers = options.marker_options.pointMatchers || [];

        if (icon && icon !== 'null') {
            return L.divIcon({
                html: `
                              <div>
                                  ${svg}
                                  <img class="icon" src="/map/images/poi-icons-svg/mx_${icon}.svg"
                              </div>
                              `
            })
        } else {
            if (wptIcons && symKey && wptIcons[symKey]) {
                return wptIcons[symKey];
            } else if (wptIconsType && typeKey && wptIconsType[typeKey]) {
                return wptIconsType[typeKey];
            } else if (wptIconUrls && symKey && wptIconUrls[symKey]) {
                return new L.GPXTrackIcon({iconUrl: wptIconUrls[symKey]});
            } else if (wptIconTypeUrls && typeKey && wptIconTypeUrls[typeKey]) {
                return new L.GPXTrackIcon({iconUrl: wptIconTypeUrls[typeKey]});
            } else if (ptMatchers.length > 0) {
                for (var j = 0; j < ptMatchers.length; j++) {
                    if (ptMatchers[j].regex.test(name)) {
                        return ptMatchers[j].icon;
                    }
                }
            } else if (wptIcons && wptIcons['']) {
                return wptIcons[''];
            } else if (wptIconUrls && wptIconUrls['']) {
                return new L.GPXTrackIcon({iconUrl: wptIconUrls['']});
            } else {
                return L.divIcon({
                    html: `
                              <div>
                                  ${svg}
                                  <img class="icon" src="/map/images/poi-icons-svg/mx_special_star.svg"
                              </div>
                              `
                })
            }
        }
    },

    _hexToArgb: function (hex) {
        hex = hex.replace(/^#/, '');
        let alphaFromHex = 1;

        if (hex.length === 8) {
            alphaFromHex = Number.parseInt(hex.slice(0, 2), 16) / 255;
            hex = hex.slice(2, 8);
        }
        const number = Number.parseInt(hex, 16);
        const red = number >> 16;
        const green = (number >> 8) & 255;
        const blue = number & 255;
        const alpha = alphaFromHex;
        const alphaString = alpha === 1 ? '' : ` / ${Number((alpha * 100).toFixed(2))}%`;
        return `rgb(${red} ${green} ${blue}${alphaString})`;
    },

    _parse_points: function (line, options, polyline_options, tag, lastId) {
        var el = line.getElementsByTagName(tag);
        if (!el.length) return [];

        var coords = [];
        var markers = [];
        var layers = [];
        var last = null;

        for (var i = 0; i < el.length; i++) {
            var _, ll = new L.LatLng(
                el[i].getAttribute('lat'),
                el[i].getAttribute('lon'));
            ll.meta = {};
            ll.id = i + lastId;
            _ = el[i].getElementsByTagName('time');
            if (_.length > 0) {
                ll.meta.time = new Date(Date.parse(_[0].textContent));
            }
            var time_diff = last != null ? Math.abs(ll.meta.time - last.meta.time) : 0;

            _ = el[i].getElementsByTagName('ele');
            if (_.length > 0) {
                ll.meta.ele = parseFloat(_[0].textContent);
            } else {
                // If the point doesn't have an <ele> tag, assume it has the same
                // elevation as the point before it (if it had one).
                if (last != null && last.meta.ele) {
                    ll.meta.ele = last.meta.ele;
                }
            }
            var ele_diff = last != null ? ll.meta.ele - last.meta.ele : 0;
            var dist_3d = last != null ? this._dist3d(last, ll) : 0;

            if (tag === 'trkpt') {
                this._info.points.push({lat: ll.lat, lng: ll.lng, meta: ll.meta});
            }
            _ = el[i].getElementsByTagName('name');
            if (_.length > 0) {
                var name = _[0].textContent;
                var ptMatchers = options.marker_options.pointMatchers || [];

                for (var j = 0; j < ptMatchers.length; j++) {
                    if (ptMatchers[j].regex.test(name)) {
                        markers.push({label: name, coords: ll, icon: ptMatchers[j].icon, element: el[i]});
                        break;
                    }
                }
            }
            _ = el[i].getElementsByTagName('extensions');
            if (_.length > 0) {
                ll.meta.extensions = {}
                for (const [key, value] of Object.entries(_[0].children)) {
                    ll.meta.extensions[`${_[0].children[key].nodeName}`] = _[0].children[key].textContent;
                }
            }
            _ = el[i].getElementsByTagNameNS('*', 'hr');
            if (_.length > 0) {
                ll.meta.hr = parseInt(_[0].textContent);
                this._info.hr._points.push([this._info.length, ll.meta.hr]);
                this._info.hr._total += ll.meta.hr;
            }

            _ = el[i].getElementsByTagNameNS('*', 'cad');
            if (_.length > 0) {
                ll.meta.cad = parseInt(_[0].textContent);
                this._info.cad._points.push([this._info.length, ll.meta.cad]);
                this._info.cad._total += ll.meta.cad;
            }

            _ = el[i].getElementsByTagNameNS('*', 'atemp');
            if (_.length > 0) {
                ll.meta.atemp = parseInt(_[0].textContent);
                this._info.atemp._points.push([this._info.length, ll.meta.atemp]);
                this._info.atemp._total += ll.meta.atemp;
            }

            if (ll.meta.ele > this._info.elevation.max) {
                this._info.elevation.max = ll.meta.ele;
            }
            if (ll.meta.ele < this._info.elevation.min) {
                this._info.elevation.min = ll.meta.ele;
            }
            this._info.elevation._points.push([this._info.length, ll.meta.ele]);

            if (ll.meta.speed > this._info.speed.max) {
                this._info.speed.max = ll.meta.speed;
            }
            this._info.speed._points.push([this._info.length, ll.meta.speed]);

            if ((last == null) && (this._info.duration.start == null)) {
                this._info.duration.start = ll.meta.time;
            }
            this._info.duration.end = ll.meta.time;
            this._info.duration.total += time_diff;
            if (time_diff < options.max_point_interval) {
                this._info.duration.moving += time_diff;
            }

            this._info.length += dist_3d;

            if (ele_diff > 0) {
                this._info.elevation.gain += ele_diff;
            } else {
                this._info.elevation.loss += Math.abs(ele_diff);
            }

            last = ll;
            coords.push(ll);
        }
        return coords;
    },

    _createLayers: function (coords, line, options, tag, polyline_options, addStartEnd) {
        let layers = [];
        //let markers = [];
        let el = line.getElementsByTagName(tag);
        let l = new L.Polyline(coords, this._extract_styling(line, polyline_options, options.polyline_options));
        this.fire('addline', {line: l, element: line});
        layers.push(l);

        if (addStartEnd) {
            if (options.marker_options.startIcon || options.marker_options.startIconUrl) {
                // add start pin
                let startMarker = new L.Marker(coords[0], {
                    zIndexOffset: 1000,
                    clickable: options.marker_options.clickable,
                    icon: options.marker_options.startIcon || new L.GPXTrackIcon({iconUrl: options.marker_options.startIconUrl})
                });
                this.fire('addpoint', {point: startMarker, point_type: 'start', element: el[0]});
                layers.push(startMarker);
            }

            if (options.marker_options.endIcon || options.marker_options.endIconUrl) {
                // add end pin
                let endMarker = new L.Marker(coords[coords.length - 1], {
                    zIndexOffset: 1000,
                    clickable: options.marker_options.clickable,
                    icon: options.marker_options.endIcon || new L.GPXTrackIcon({iconUrl: options.marker_options.endIconUrl})
                });
                this.fire('addpoint', {point: endMarker, point_type: 'end', element: el[el.length - 1]});
                layers.push(endMarker);
            }
        }

        return layers;
    },

    _parse_segment: function (line, options, polyline_options, tag, segmentObj) {
        var el = line.getElementsByTagName(tag);
        if (!el.length) return [];

        var coords = [];
        var markers = [];
        var layers = [];
        var last = null;

        for (var i = 0; i < el.length; i++) {
            var _, ll = new L.LatLng(
                el[i].getAttribute('lat'),
                el[i].getAttribute('lon'));
            ll.meta = {time: null, ele: null, hr: null, cad: null, atemp: null, speed: null};

            _ = el[i].getElementsByTagName('time');
            if (_.length > 0) {
                ll.meta.time = new Date(Date.parse(_[0].textContent));
            }
            var time_diff = last != null ? Math.abs(ll.meta.time - last.meta.time) : 0;

            _ = el[i].getElementsByTagName('ele');
            if (_.length > 0) {
                ll.meta.ele = parseFloat(_[0].textContent);
            } else {
                // If the point doesn't have an <ele> tag, assume it has the same
                // elevation as the point before it (if it had one).
                ll.meta.ele = last != null ? last.meta.ele : null;
            }
            var ele_diff = last != null ? ll.meta.ele - last.meta.ele : 0;
            var dist_3d = last != null ? this._dist3d(last, ll) : 0;

            _ = el[i].getElementsByTagName('speed');
            if (_.length > 0) {
                ll.meta.speed = parseFloat(_[0].textContent);
            } else {
                // speed in meter per second
                ll.meta.speed = time_diff > 0 ? 1000.0 * dist_3d / time_diff : 0;
            }
            //this._info.points.push({lat: ll.lat, lng: ll.lng, meta: ll.meta});
            _ = el[i].getElementsByTagName('name');
            if (_.length > 0) {
                var name = _[0].textContent;
                var ptMatchers = options.marker_options.pointMatchers || [];

                for (var j = 0; j < ptMatchers.length; j++) {
                    if (ptMatchers[j].regex.test(name)) {
                        markers.push({label: name, coords: ll, icon: ptMatchers[j].icon, element: el[i]});
                        break;
                    }
                }
            }

            _ = el[i].getElementsByTagNameNS('*', 'hr');
            if (_.length > 0) {
                ll.meta.hr = parseInt(_[0].textContent);
                this._info.hr._points.push([this._info.length, ll.meta.hr]);
                this._info.hr._total += ll.meta.hr;
            }

            _ = el[i].getElementsByTagNameNS('*', 'cad');
            if (_.length > 0) {
                ll.meta.cad = parseInt(_[0].textContent);
                this._info.cad._points.push([this._info.length, ll.meta.cad]);
                this._info.cad._total += ll.meta.cad;
            }

            _ = el[i].getElementsByTagNameNS('*', 'atemp');
            if (_.length > 0) {
                ll.meta.atemp = parseInt(_[0].textContent);
                this._info.atemp._points.push([this._info.length, ll.meta.atemp]);
                this._info.atemp._total += ll.meta.atemp;
            }

            if (ll.meta.ele > this._info.elevation.max) {
                this._info.elevation.max = ll.meta.ele;
            }
            if (ll.meta.ele < this._info.elevation.min) {
                this._info.elevation.min = ll.meta.ele;
            }
            this._info.elevation._points.push([this._info.length, ll.meta.ele]);

            if (ll.meta.speed > this._info.speed.max) {
                this._info.speed.max = ll.meta.speed;
            }
            this._info.speed._points.push([this._info.length, ll.meta.speed]);

            if ((last == null) && (this._info.duration.start == null)) {
                this._info.duration.start = ll.meta.time;
            }
            this._info.duration.end = ll.meta.time;
            this._info.duration.total += time_diff;
            if (time_diff < options.max_point_interval) {
                this._info.duration.moving += time_diff;
            }

            this._info.length += dist_3d;

            if (ele_diff > 0) {
                this._info.elevation.gain += ele_diff;
            } else {
                this._info.elevation.loss += Math.abs(ele_diff);
            }

            last = ll;
            coords.push(ll);
        }

        return layers;
    },

    _extract_styling: function (el, base, overrides) {
        var style = this._merge_objs(_DEFAULT_POLYLINE_OPTS, base);
        var e = el.getElementsByTagNameNS(_GPX_STYLE_NS, 'line');
        if (e.length > 0) {
            var _ = e[0].getElementsByTagName('color');
            if (_.length > 0) style.color = '#' + _[0].textContent;
            _ = e[0].getElementsByTagName('opacity');
            if (_.length > 0) style.opacity = _[0].textContent;
            _ = e[0].getElementsByTagName('weight');
            if (_.length > 0) style.weight = _[0].textContent;
            _ = e[0].getElementsByTagName('linecap');
            if (_.length > 0) style.lineCap = _[0].textContent;
            _ = e[0].getElementsByTagName('linejoin');
            if (_.length > 0) style.lineJoin = _[0].textContent;
            _ = e[0].getElementsByTagName('dasharray');
            if (_.length > 0) style.dashArray = _[0].textContent;
            _ = e[0].getElementsByTagName('dashoffset');
            if (_.length > 0) style.dashOffset = _[0].textContent;
        }
        return this._merge_objs(style, overrides)
    },

    _dist2d: function (a, b) {
        var R = 6371000;
        var dLat = this._deg2rad(b.lat - a.lat);
        var dLon = this._deg2rad(b.lng - a.lng);
        var r = Math.sin(dLat / 2) *
            Math.sin(dLat / 2) +
            Math.cos(this._deg2rad(a.lat)) *
            Math.cos(this._deg2rad(b.lat)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(r), Math.sqrt(1 - r));
        var d = R * c;
        return d;
    },

    _dist3d: function (a, b) {
        var planar = this._dist2d(a, b);
        var height = Math.abs(b.meta.ele - a.meta.ele);
        return Math.sqrt(Math.pow(planar, 2) + Math.pow(height, 2));
    },

    _deg2rad: function (deg) {
        return deg * Math.PI / 180;
    }
});

if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = L;
}