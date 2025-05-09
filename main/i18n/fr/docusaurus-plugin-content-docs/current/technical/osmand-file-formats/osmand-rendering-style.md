---
sidebar_position: 6
---

# Map Rendering style - .render.xml


In case you want to modify the default rendering style, you need to check out the [definition on GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml). You'll find all sorts of styles at this [link](https://github.com/osmandapp/OsmAnd-resources/tree/master/rendering_styles), so if you're going to create your own style, you can find the easiest example.

In case you decide to create your custom rendering style, you may need to create [your own maps](../map-creation/create-offline-maps-yourself.md#custom-vector-map-tags) to add custom features display.

## Map style sections 

Map style file consists of several sections.

| Section | Description |
|---------|-------------|
| **Header** | Consists of `name` (style name), `defaultColor` (default map color could be overridden by attribute defaultColor) and `depends` (inherits all properties from parent style). |
| **Parameters** | Defined as `<renderingProperty>` has `attr` which will be used in the style as a parameter name and `name`, `description` will be displayed to user. |
| **Attributes** and **constants** | Defined as `<renderingAttribute>` and as `<renderingConstant>` allows to reuse same blocks of rendering styles for different map objects | 
| **Order** section | Defined as a block [`<order>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#L2876). Each map object is searched in the order-section to get whether it will be rendered as point, line or polygon (`objectType`) and in which `order` should be displayed.  **Search parameters** (input): `tag`, `value`, `zoom`, `point` (true or false), `area` (osm type), `cycle` (start and end point are same).  **Search result** (output): `objectType` (point = 1, line = 2, polygon = 3), `order` (0-255). Order of rendering is defined as: polygons, line-shadows, lines, points. If `order` is the same for polygons, then polygons are displayed from the largest polygon to the smallest. Note: polygons shouldn't overlap partially otherwise behavior is not defined. |
| **Text** section | Defined as a block [`<text>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#L3811). Each displayed map object is searched whether it should display the text and how it should be displayed.  **Search parameters** (input): `tag`, `value`, `zoom`, `nameTag` (each text tag is checked).  **Search result** (output): `textOnPath`, `textMinDistance` (margin between same texts i.e. road names, refs ), `textSize`, `textColor`, `textHaloRadius`, `textOrder`, `textDy`, `textBold`, `nameTag2` (extra name in the braces if present), `textShield` (background arond text), `icon` (icon instead of text), `textItalic`, `textWrapWidth`, `intersectionMargin` (extra margin to not overlap text). |
| **Point** section | Defined as a block [`<point>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#6467). Each displayed point map object (defined in `order`-section) is searched in this section to determine how it should be displayed.  **Search parameters** (input): `tag`, `value`, `zoom`, `e`.  **Search result** (output): `shield` (icon shield), `icon`, `iconVisibleSize` (extra space to not clutter icons), `iconOrder`, `intersectionSizeFactor`. |
| **Polygon** section | Defined as a block [`<polygon>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#8580). Each displayed polygon map object (defined in `order`-section) is searched in this section to determine how it should be displayed.  **Search parameters** (input): `tag`, `value`, `zoom` .  **Search result** (output): `color` (color to fill the polygon), `shader` (fill polygon with same icon), `color_2, color_N` (color of stroke around polygon), `strokeWidth_2` (stroke width), `pathEffect_2`, `cap_2`. |
| **Line** section | Defined as a block [`<line>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#9535). Each displayed line map object (defined in `order`-section) is searched whether in this section to determine how it should be displayed. 1 line object could be rendered as multiple combined lines up to -2 layers below and up to 7 layers on top.  **Search parameters** (input): `tag`, `value`, `zoom`, `nameTag` (each text tag is checked), .  **Search result** (output): `color, color_*` (color of stroke around polygon), `strokeWidth, strokeWidth_*` (stroke width), `pathEffect, pathEffect_*` (path effect), `cap, cap_*` (BUTT, ROUND, SQUARE), `pathIcon`, `pathIconStep`, `shadowRadius` (shadow around line). |


## Map feature selectors
To determine which attributes should be retrieved from rendering style, following search procedure is completed:
- Find the most inner `<case>` that corresponds to Search input parameters `tag/value/zoom` i.e. for `highway=primary` - `<case tag="highway" value="primary">` will be found.
- All internals of `<case>` are applied sequentially deep and output parameters are collected
 - `<case><apply output="1"/><apply_if zoom="15" output="2"> <case>` - output will be 2 in case `zoom=15` and output will be 1 otherwise.    
- Checked if `<case>` is part of any `<switch>` and if it is then all `apply` and `apply_if` of that switch will be evaluated as well

Evaluation rules:
- In each  'case', `apply_if`, `switch`, `apply` input attributes are checked to match (evalute to true), otherwise section is skipped and output attributes are not collected.
- All rules evaluated sequentially and output parameters could be overridden by folowing rules
- `additional=?` is a special input attribute that checks additional tags of the object
- Map style parameters are input search parameters as well next to `tag/value/zoom`
    - Example: `<apply_if nightMode="false" streetLightingNight="false" shield="street_lamp_lit_no_shield"/>`. Input parameters: nightMode, streetLightingNight; output parameters - shield.


## Attributes (special) & Constants 
Rendering constants & rendering attributes are interchangeable and could be used to simplify rendering style and avoid copy/pasting of values or blocks of code. In case attribute like `color` is a single value, it is **preferred** to use **rendering constant** cause it greatly speeds up rendering style performance. 

Rendering constants could be used only with one given value: `<renderingConstant name="motorwayShadowRadius" value="1.6"/>` and later in feature selectors as `<apply_if shadowRadius="$motorwayShadowRadius"/>`. 

Rendering attributes could have embedded structure with extra selectors and output one of the following attributes (`attrColorValue`, `attrBoolValue`, `attrFloatValue`, `attrIntValue`, `attrStringValue`). Example:
```
    <renderingAttribute name="motorroadShadowColor">
		<case attrColorValue="#5f5fff"/>
	</renderingAttribute>
    .....
    <case showAccess="true" additional="motorroad=yes" attrColorValue="$motorroadShadowColor"/>
```    

### Special attributes 

Special attributes are `<renderingAttribute >` that are not used by selectors but used directly by the code to query specific feature which is drawn in application like a navigation route, ruler, gpx track, etc.


| Special attribute | Description |
|-------------------|-------------|
| `measureDistanceLine` | Line rendering for Plan Route feature | 
| `markerGuideline`, `markerPlanRouteline` | Rendering lines to the markers |
| `route` | Rendering a navigation route | 
| `gpx` | Rendering a GPX track |
| `publicTransportLine` | Rendering a public transport navigation route | 
| `walkingRouteLine` | Rendering a public transport navigation: pedestrian route between stops | 
| `rulerLineFont`, `rulerLine`, `rulerCircleAlt`, `rulerCircle` | How to render Radius-Ruler widget and measure distance by tap | 
|||
| `defaultColor` | Default color to fill the map (switches night / day mode) |
| `shadowRendering` | Internal how to render shadow with Skia |
||| 
| `routeInfo_*` | Example: `routeInfo_surface`, `routeInfo_roadClass` produce classes of roads to be displayed in the legend of the route. | 
|||
| `polygonMinSizeToDisplay` | Internals how to render small lines and small polygons | 
| `roadDensityZoomTile` | Internals how to render small lines and small polygons |
| `roadsDensityLimitPerTile` | Internals how to render small lines and small polygons |
| `defaultSymbolPathSpacing` | Internals how to render small lines and small polygons |
| `defaultBlockPathSpacing` | Internals how to render small lines and small polygons |
| `globalPathPadding` | Internals how to render small lines and small polygons |
|||
| `debugTextDisplayBBox` | Attributes to debug text rendering and positioning | 
| `debugTextDisplayShieldBBox` | Attributes to debug text rendering and positioning |
| `debugTextDoNotFindIntersections` | Attributes to debug text rendering and positioning |
| `debugTextDoNotFindIntersectionsSameName` | Attributes to debug text rendering and positioning |
| `debugTextDisplayShortRoadNames` | Attributes to debug text rendering and positioning |

## Map Style Parameters

Map style parameters allow to combine multiple rendering style within one file definition i.e. there is no need to have separate 'my_custom_style_night_mode.render.xml', it is possible to define parameter like `night_mode` (enabled by default) and customize certain rules (like colors) using this parameter. Later in the User interface it's possible to easy switch that parameter and have a different map style in OsmAnd.

Here is a definition of `baseAppMode` parameter. `possibleValues` are values will be displayed in OsmAnd UI, `category` assists in which UI category this property belongs to.
```
<renderingProperty attr="baseAppMode" name="Default Rendering mode" description="Map optimization for respective User Profile based on base (parent) profile"
		type="string" possibleValues="default, car, bicycle, pedestrian, public_transport, boat, ski"/>
```

Later in the selection style you can specify when this selector could be applied i.e. for which application mode specified by the user
```
<renderingAttribute name="roadsDensityLimitPerTile">
		<!-- Number of roads to display per tile -->
		<case moreDetailed="true" attrIntValue="55"/>
		<case baseAppMode="pedestrian" attrIntValue="40"/>
		<case baseAppMode="bicycle" attrIntValue="40"/>
		<case attrIntValue="60"/>
	</renderingAttribute>
```

So if user selects `moreDetailed=true` then output value for density will be `55` and if `baseAppMode=pedestrian` (another parameter)  it wil be `40`, otherwise 60.


