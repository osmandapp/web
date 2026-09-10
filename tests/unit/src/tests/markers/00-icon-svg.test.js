import MarkerOptions, {
    changeIconColor,
    changeIconSizeWpt,
    changeSvgColor,
    getBackground,
    getIconUrlByName,
    getShaderUrlByName,
    removeShadowFromIconWpt,
    resolvePoiIconKey,
    BACKGROUND_WPT_SHAPE_CIRCLE,
    MAP_ICON_TYPE,
    POI_ICON_TYPE,
} from '@map/map/markers/MarkerOptions';
import { resolveWptAppearance } from '@map/manager/FavoritesManager';

const { DEFAULT_WPT_COLOR, DEFAULT_WPT_ICON } = MarkerOptions;

describe('coloring an icon', () => {
    test('shapes are painted, an empty fill stays empty', () => {
        const svg = '<svg fill="none"><circle fill="#727272"/></svg>';

        expect(changeSvgColor(svg, '#ff0000')).toBe('<svg fill="none"><circle fill="#ff0000"/></svg>');
    });

    test('only the paths of the icon are painted', () => {
        const svg = '<circle fill="#000"/><path fill="#000" stroke="#000" d="M0 0"/>';

        expect(changeIconColor(svg, '#ff0000')).toBe(
            '<circle fill="#000"/><path fill="#ff0000" stroke="#ff0000" d="M0 0"/>'
        );
    });

    test('the shadow is removed from the attribute and from the style', () => {
        const svg = '<g filter="url(#shadow)" style="opacity:1;filter:blur(2px);"><path d="M0 0"/></g>';

        expect(removeShadowFromIconWpt(svg)).toBe('<g  style="opacity:1;"><path d="M0 0"/></g>');
    });
});

describe('changeIconSizeWpt', () => {
    const ICON_SIZE = 12;
    const SHAPE_SIZE = 36;

    function resize(svg) {
        return changeIconSizeWpt(svg, ICON_SIZE, SHAPE_SIZE);
    }

    test('the shape follows the size it is drawn with', () => {
        const svg =
            '<svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#727272"/>' +
            '<rect x="0" width="24" y="0" height="24" rx="3" fill="#fff" /></svg>';

        const res = resize(svg);

        expect(res).toContain('viewBox="0 0 36 36"');
        expect(res).toContain(' width="36"');
        expect(res).toContain('cx="18"');
        expect(res).toContain('r="18"');
        expect(res).toContain('rx="4.5"');
    });

    test('the drawing is scaled and keeps its attributes', () => {
        const svg = '<svg viewBox="0 0 24 24"><path fill-rule="evenodd" d="M2 4L8 12Z" fill="#727272"/></svg>';

        const res = resize(svg);

        expect(res).toContain('d="M3 6L12 18Z"');
        expect(res).toContain('fill-rule="evenodd"');
    });

    test('the rotation and the flags of an arc are not sizes, in every set of one arc', () => {
        const svg = '<svg viewBox="0 0 24 24"><path d="M2 2A4 4 45 1 0 8 8 6 6 30 0 1 10 10"/></svg>';

        expect(resize(svg)).toContain('d="M3 3A6 6 45 1 0 12 12 9 9 30 0 1 15 15"');
    });

    test('a stroke is scaled with the icon and never disappears', () => {
        const thick = '<svg viewBox="0 0 580 580"><path stroke-width="33" d="M0 0"/></svg>';
        const thin = '<svg viewBox="0 0 580 580"><path stroke-width="1" d="M0 0"/></svg>';

        expect(resize(thick)).toContain('stroke-width="2.05"');
        expect(resize(thin)).toContain('stroke-width="0.5"');
    });

    test('a picture inside the shape is centered by the size of the icon', () => {
        const svg = '<svg viewBox="0 0 24 24"><g><image href="/map/images/poi.svg" width="24" height="24"/></g></svg>';

        expect(resize(svg)).toContain(
            '<image transform="translate(12,12)" width="12" height="12" href="/map/images/poi.svg" />'
        );
    });
});

describe('the background of a marker', () => {
    test('the shape is painted with the color of the point', () => {
        expect(getBackground('#ff0000', 'square')).toContain('fill="#ff0000"');
    });

    test('an unknown shape falls back to the circle', () => {
        expect(getBackground('#ff0000', 'triangle')).toBe(getBackground('#ff0000', 'circle'));
        expect(getBackground('#ff0000', null)).toBe(getBackground('#ff0000', 'circle'));
    });
});

describe('the file of an icon', () => {
    test('an icon is taken by its own name, the colored one is the fallback', () => {
        expect(getIconUrlByName(POI_ICON_TYPE, 'amenity_bank')).toBe('/map/images/poi-icons-svg/mx_amenity_bank.svg');
        expect(getIconUrlByName(POI_ICON_TYPE, 'not_existing')).toBe('/map/images/poi-icons-svg/c_mx_not_existing.svg');
        expect(getIconUrlByName(MAP_ICON_TYPE, 'not_existing')).toBe('/map/images/map-icons-svg/c_mx_not_existing.svg');
        expect(getShaderUrlByName('not_existing')).toBe('/map/images/map-shaders-svg/c_h_not_existing.svg');
    });

    test('a poi type without an icon has no key', () => {
        expect(resolvePoiIconKey('amenity_bank')).toBe('amenity_bank');
        expect(resolvePoiIconKey('not_existing')).toBeNull();
    });
});

describe('resolveWptAppearance', () => {
    const GROUPS = { Camps: { color: '#00ff00', iconName: 'star', backgroundType: 'octagon' } };

    test('the values of the point win, the rest comes from its group', () => {
        expect(resolveWptAppearance({ category: 'Camps', color: '#ff0000' }, GROUPS)).toEqual({
            color: '#ff0000',
            icon: 'star',
            background: 'octagon',
        });
    });

    test('a point of no group gets the default appearance', () => {
        expect(resolveWptAppearance({}, {})).toEqual({
            color: DEFAULT_WPT_COLOR,
            icon: DEFAULT_WPT_ICON,
            background: BACKGROUND_WPT_SHAPE_CIRCLE,
        });
    });

    test('the string null of the server is not a value', () => {
        const wpt = { category: 'Camps', color: 'null', icon: 'null' };

        expect(resolveWptAppearance(wpt, GROUPS)).toMatchObject({ color: '#00ff00', icon: 'star' });
    });
});
