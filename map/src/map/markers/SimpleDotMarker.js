import L from 'leaflet';

export class SimpleDotMarker {
    static defaultOptions = {
        fillOpacity: 0.9,
        radius: 5,
        color: '#ffffff',
        fillColor: '#fe8800',
        weight: 1,
        zIndex: 500,
        zIndexOffset: 500,
        simple: true,
    };

    /**
     * @param {L.LatLng} latlng – marker position
     * @param {object} place – GeoJSON feature
     * @param {object} [options] – override defaultOptions
     */
    constructor(latlng, place, options = {}) {
        this.latlng = latlng;
        this.place = place;
        this.options = {
            ...SimpleDotMarker.defaultOptions,
            ...options,
        };
    }

    _getCircleEl() {
        const wrap = this.marker?.getElement?.();
        return wrap ? wrap.firstElementChild : null;
    }

    /**
     * Creates the divIcon marker with inline styles.
     * @returns {L.Marker}
     */
    build() {
        const { radius, fillColor, color, weight, fillOpacity } = this.options;
        const size = radius * 2;

        const html = `<div style="
            width:${size}px;
            height:${size}px;
            background:${fillColor};
            border:${weight}px solid ${color};
            border-radius:50%;
            opacity:${fillOpacity};
        "></div>`;

        const icon = L.divIcon({
            html,
            className: '',
            iconSize: [size, size],
            iconAnchor: [radius, radius],
        });

        this.marker = L.marker(this.latlng, {
            icon,
            ...this.options,
            zIndexOffset: this.options.zIndexOffset ?? this.options.zIndex ?? 0,
        });
        this.marker.setStyle = (style = {}) => this.setStyle(style);
        this.marker.paintDot = (fill) => this.paintDot(fill);

        this.marker.on('add', (e) => {
            const map = e.target._map;
            const paneName = 'poiSecondaryPane';
            const pane = map.getPane(paneName) || map.createPane(paneName);

            pane.style.zIndex = '500';

            const wrap = this.marker.getElement?.();
            if (wrap && wrap.parentNode !== pane) pane.appendChild(wrap);

            if (wrap) {
                wrap.style.background = 'transparent';
                wrap.style.border = 'none';
            }
            const el = this._getCircleEl();
            el.style.background = this.options.fillColor;
            el.style.opacity = String(this.options.fillOpacity);
            el.style.borderColor = this.options.color;
            el.style.borderWidth = `${this.options.weight}px`;
        });

        return this.marker;
    }

    setStyle(style = {}) {
        const el = this.marker?.getElement?.();

        if (style.fillColor !== undefined) {
            this.options.fillColor = style.fillColor;
            if (el) el.style.background = style.fillColor;
        }
        if (style.fillOpacity !== undefined) {
            this.options.fillOpacity = style.fillOpacity;
            if (el) el.style.opacity = String(style.fillOpacity);
        }
        if (style.color !== undefined) {
            this.options.color = style.color;
            if (el) el.style.borderColor = style.color;
        }
        if (style.weight !== undefined) {
            this.options.weight = style.weight;
            if (el) el.style.borderWidth = `${style.weight}px`;
        }
    }

    paintDot(fill) {
        const wrap = this.marker?.getElement?.();
        if (wrap) {
            wrap.style.background = 'transparent';
            wrap.style.border = 'none';
            const el = wrap.firstElementChild;
            if (el) {
                el.style.background = fill;
                return;
            }
        }
        this.marker?.setStyle?.({ fillColor: fill });
    }
}
