---
sidebar_position: 2
---

# OsmAnd GPX

The OsmAnd's GPX file format conforms to the GPX 1.1 specification, with additional data written as extensions.

OsmAnd uses XML namespace `osmand:` for all OsmAnd-specific tags.

There are several sections of such data:

## Track Appearance

The following parameters customize the appearance of a track on the map. They are used inside the GPX tag and apply to all tracks contained in the GPX.

### Parameters

|Name| Spec and Purpose                                                                                                                                                                                                     |
|:--------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[color]| String. Hex value "#AARRGGBB" or "#RRGGBB". Color of a track line on the map.                                                                                                                                        |
|[width]| String. "thin", "medium", "bold" or number 1-24. Width of the track line on the map. The thin, medium, and bold are style-dependent values (should be defined as currentTrackWidth attribute).                        |
|[show_arrows]| Bool. "true" or "false". Show / Hide arrows along the path line.                                                                                                                                                     |
|[show_start_finish]| Bool. "true" or "false". Show / Hide edges of segments.                                                                                                                                                              |
|[split_type]| String. "no_split", "distance" or "time". Split type for a track.                                                                                                                                                    |
|[split_interval]| Double. Split interval for a track. Distance (meters), time (seconds).                                                                                                                                               |
|[line_3d_visualization_by_type]| String. "none", "altitude", "shared_string_speed", "map_widget_ant_heart_rate", "map_widget_ant_bicycle_cadence", "map_widget_ant_bicycle_power", "shared_string_temperature", "shared_string_speed", "fixed_height" |
|[line_3d_visualization_wall_color_type]| String. "none", "solid", "downward_gradient", "upward_gradient", "altitude", "slope", "speed"                                                                                                                        |
|[line_3d_visualization_position_type]| String. "top", "bottom", "top_bottom"                                                                                                                                                                                |
|[vertical_exaggeration_scale]| Float. Multiplier to scale the value of line_3d_visualization_by_type. Default is 1.0                                                                                                                                |
|[elevation_meters]| Float. Used with "fixed_height" in line_3d_visualization_by_type. Default is 1000                                                                                                                                    |
|[coloring_type]| String. "solid", "speed", "altitude", "slope", "routeInfo_roadClass", "routeInfo_surface", "routeInfo_smoothness"                                                                                                    |
|[color_palette]| String. "default" or user-defined [(see color schemes)](/docs/user/personal/color-palette-schemes)                                                                                                                   |

### Coloring_type in Details

| Type                 | Details                                          |
|:---------------------|:-------------------------------------------------|
| solid                | Solid-colored track according to tag `color`     |
| speed                | Gradiently filled according to `trkpt` speed     |
| altitude             | Gradiently filled according to `trkpt` elevation |
| slope                | Gradiently filled according to `trkpt` slope     |
| routeInfo_roadClass  | Color based on OSM road type                     |
| routeInfo_surface    | Color based on OSM road surface                  |
| routeInfo_smoothness | Color based on OSM road smoothness               |

***Example:***

```xml
<gpx version="1.1" creator="OsmAnd~ 5.0.0" xmlns="https://www.topografix.com/GPX/1/1" xmlns:osmand="https://osmand.net/docs/technical/osmand-file-formats/osmand-gpx" xmlns:gpxtpx="https://www8.garmin.com/xmlschemas/TrackPointExtensionv1.xsd" xmlns:xsi="https://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://www.topografix.com/GPX/1/1 https://www.topografix.com/GPX/1/1/gpx.xsd">
...
  <extensions>
    <osmand:color>#4e4eff</osmand:color>
    <osmand:width>bold</osmand:width>
    <osmand:show_arrows>true</osmand:show_arrows>
    <osmand:split_type>distance</osmand:split_type>
    <osmand:split_interval>2000.0</osmand:split_interval>
  </extensions>
</gpx>
```

## Waypoints Icons

| GPX tag    | Default | Purpose                                   |
|:-----------|:--------|:---------------------------------------------------|
| icon       | -       | Icon name |
| color      | red     | Icon color: hex or text |
| background | circle  | shape of the icon (circle, square, octagon)    |

## Waypoints Groups

Track Waypoints can be sorted into Points groups.

The point group name is stored in `<type>` tag inside `<wpt>`.
`osmand:points_groups` is located in the main GPX extensions:

***Example:***

```xml
<gpx>
  <wpt lat="1.234" lon="5.678">
    <type>aqueduct</type>
    <name>Look up to see the water</name>
  </wpt>
  <wpt lat="5.678" lon="1.234">
    <type>castle</type>
    <name>Beware of ghosts</name>
  </wpt>
  <wpt lat="66.666" lon="66.666">
    <type>castle</type>
    <name>The house of Beetlejuice</name>
  </wpt>
  <extensions>
    <osmand:points_groups>
      <group name="castle" color="#FF0000" icon="historic_castle" background="circle"/>
      <group name="aqueduct" color="#0000FF" icon="bridge_structure_arch" background="circle"/>
    </osmand:points_groups>
  </extensions>
</gpx>
```

## Track Activity Type

Track Activity Type was introduced in [OsmAnd 4.9](/blog/osmand-android-4-9-released/#gpx-track-activities).
Supported activity types: [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json)

Activity Types are identified by `id` and stored in the Metadata extensions:

***Example:***

```xml
  <metadata>
    <extensions>
      <osmand:activity>off_road_motorcycling_dirt_biking</osmand:activity>
    </extensions>
  </metadata>
```

## HTML in Description

HTML code is allowed in Metadata `<desc>` and Waypoint `<desc>` tags.

Characters `<` `>` and `&` must be replaced with `&lt;` `&gt;` `&amp;` to avoid confusion with XML tags.

***Example:***

```xml
<metadata>
  <desc>
    &lt;p&gt;
        The first paragraph will be displayed as &lt;b&gt;brief&lt;/b&gt; description.
        HTML tags are stripped in brief descriptions.
    &lt;/p&gt;
    &lt;p&gt;
      &lt;h3&gt;Second paragraph&lt;/h3&gt;
      &lt;b&gt;Hello, world!&lt;/b&gt;&lt;br/&gt;
      &lt;img src="..."/&gt;&lt;br/&gt;
      &lt;a href="..."&gt;url&lt;/a&gt;&lt;br/&gt;
      &lt;table&gt; ... &lt;/table&gt;
    &lt;/p&gt;
  </desc>
</metadata>
```

## Link Tag (Link-as-Image)

Link and Text tags are supported in Metadata, Author, and Waypoint extensions.

Visually, Link href may specify the URL to be displayed as the image for Track / Waypoint.

***Examples:***

```xml
<metadata>
  <link href="https://osmand.net/img/logo.png">
    <text>optional text</text>
  </link>
</metadata>
```

```xml
<wpt>
  <link href="https://osmand.net/img/logo.png" />
</wpt>
```

## Details of a Track Point (trkpt)

Write to a GPX file while recording a track.

* **speed** (meters per second)
* **heading** (0-359 degrees)

***Example:***

```xml
  <trkpt lat="52.397799" lon="4.575998">
    <ele>203</ele>
    <time>2019-05-08T10:36:43Z</time>
    <hdop>3</hdop>
    <extensions>
      <heading>273</heading>
      <speed>5.02</speed>
    </extensions>
  </trkpt>
```

## Tags Name for Sensor Data

Increased compatibility of OsmAnd tracks with **Strava and Garmin Basecamp**. *Temperature, Heart Rate, Bicycle Power, Bicycle Cadence, and Bicycle Speed* sensors are enrolled in the Garmin https://www8.garmin.com/xmlschemas/TrackPointExtensionv1.xsd extension scheme.

***Example:***

```xml
<extensions>
  <gpxtpx:TrackPointExtension>
    <gpxtpx:hr>107</gpxtpx:hr>
    <gpxtpx:cad>107</gpxtpx:cad>
    <gpxtpx:atemp>107</gpxtpx:atemp>
    <gpxtpx:wtemp>107</gpxtpx:wtemp>
    <gpxtpx:power>107</gpxtpx:power>
  </gpxtpx:TrackPointExtension>
</extensions>
```

## Calculated Route(s)

This data contains all details of a route built with **OsmAnd** (route segments, turns, road names, road types, restrictions, etc.). The route can be completely restored as if just built, even in the absence of the respective offline maps.

A GPX file may contain several routes. Each of them is contained in a specific segment under **trkseg** / **extensions**. A GPX file is saved in this form when exporting a constructed route or when saving a track that consists of several separate segments via the [**Plan a route**](../../user/plan-route/create-route.md) functionality.

[**Plan a route**](../../user/plan-route/create-route.md) also adds one (or several, in accordance with the number of contained separate segments / tracks) **rte** blocks to the gpx file, containing route key points (**rtept**).

***Gpx structure:***

```xml
<trk>
  <trkseg>
    // List of segment points. The order of the points corresponds to the order and length of the route segments (<route><segment length="x" ... />).
    // The value of the "length" attribute corresponds to the number of points in this segment of the route.
    <trkpt ... ></trkpt>
    <extensions>
      // List of route segments
      <route>
        <segment ... />
      </route>
      // Properties of segments included in the route.
      // This data is taken from offline maps during the initial construction of a route.
      <types>
        <type ... />
      </types>
    </extensions>
  </trkseg>
</trk>

// List of intermediate route points. If there are multiple routes, the order of the rte list matches the order of the route segments.
<rte>
  <rtept ... />
    // For routes built with the "Plan route", the parameters of key points are saved.
    // If rtept is not first and last, before it (with the same idx) trkpt will be with the same data.
    <extensions>
      // Route profile type for next segment (car, bicycle, pedestrian, etc.).
      <profile>...</profile>
      // The index of the point in the GPX segment that corresponds to the first point of the calculated route for this segment.
      // If rtept is not first and last, before it (with the same idx) trkpt will be with the same data.
      <trkpt_idx>...</trkpt_idx>
    </extensions>
  </rtept>
</rte>
```

### Important Properties

- **trkpt_idx** of first **rtept** in **trkseg** is 0. So, if there are two **trkseg**s, there will be two **rtept**s with **trkpt_idx** = 0
- **trkpt_idx** of last **rtept** in **trkseg** is equal to number of **trkpt**s in **trkseg** minus 1. For example, if **trkseg** has 12 **trkpt**s, **trkpt_idx** of last **rtept** should be 11
- Neighbouring route **segments** of are overlapping: the end of previous **segment** and start of next **segment** is the one and same **trkpt**.
- There is exception when neighbouring route **segments** don't overlap (don't share the same **trkpt**). It happens when there is **rtept** "between" route **segment**s. End of previous route **segment** is one **trkpt**, and start of next route **segment** is another **rtept**. But these two **trkpt**s are equal by lat, lon and other params.
- Route **segment** overlapping can be detected via **length** and **startTrkptIdx** (the latter is used only for convenience of human reading):
  - If sum of **startTrkptIdx** and **length** of prevous route **segment** equals **startTrkptIdx** of next route **segment**, route **segment**s are not overlapping
  - If sum is less by one, then route **segment**s are overlapping
- There can be straight route **segment**s. They are marked with **id="-1"**. They can appear in two cases:
  - It is multiprofile route, and user selected straight line
  - User placed **rtept** too far away from closest road, so osmand made straight line between **rtept** and road
- trkpts = length - (segments - 1) + (rtepts - 2), where:
  - trkpts - amount of **trkpt**s inside **trkseg**
  - length - sum of all **length**s of route **segment**s inside **trkseg**
  - segments - amount of route **segment**s inside **trkseg**
  - rtepts - amount of **rtept**s owned by **trkseg**  


***Example:***

```xml
<gpx version="1.1" creator="OsmAndRouterV2" xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
  <metadata>
    <name>Fri 06 Nov 2020</name>
  </metadata>
  <trk>
    <name>Fri 06 Nov 2020</name>
    <trkseg>
      <trkpt lat="52.3639849" lon="4.8900533">
        <ele>0.801</ele>
      </trkpt>
      <trkpt lat="52.3636917" lon="4.8922849">
        <ele>0.998</ele>
      </trkpt>
      <trkpt lat="52.3636885" lon="4.892309">
        <ele>1</ele>
      </trkpt>
      <trkpt lat="52.3636426" lon="4.8922902">
        <ele>0.963</ele>
      </trkpt>
      <trkpt lat="52.363564" lon="4.8922607">
        <ele>0.899</ele>
      </trkpt>

      ....

      <extensions>
        <route>
          <segment id="7372058" length="3" segmentTime="178.44" speed="1.11" turnType="C" types="0,1,2,3,4,5,6" names="57" />
          <segment id="334164679" length="5" segmentTime="86.11" speed="1.11" turnType="TR" turnAngle="91.88" types="7,8,0,9,10,11,12,13,6" pointTypes=";;14,15;16,17,18;" names="58" />
          <segment id="334603581" length="6" segmentTime="75.5" speed="1.11" types="19,20,21,7,8,0,22,9,10,11,12,13,23,6" pointTypes=";14;16,24;16,24;14;" names="58" />
          <segment id="446707354" length="3" segmentTime="8.32" speed="1.11" turnType="TSLL" turnAngle="-25.44" types="19,25,21,7,8,22,9,1,11,12,13,6" names="58" />
          ...
        </route>
        <types>
          <type t="lit" v="yes" />
          <type t="oneway" v="yes" />
          <type t="highway" v="unclassified" />
          <type t="surface" v="paving_stones" />
          <type t="maxspeed" v="30" />
          ...
        </types>
      </extensions>
    </trkseg>
  </trk>

  <rte>
    <rtept lat="52.3639945" lon="4.8900532">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>0</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.3612797" lon="4.8911677">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>24</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.356996" lon="4.8912071">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>89</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.3542374" lon="4.8947024">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>121</trkpt_idx>
      </extensions>
    </rtept>
  </rte>
</gpx>
```

## GPX in OBF (OsmAnd Binary Format)

It's possible to convert multiple GPX files into OsmAnd Maps (.obf), so this collection could contain thousands of GPX tracks and work flawlessly.
Specific features such as special icons on the map, track lines appearance, and search functionality are supported via GPX extension tags.

OsmAnd Cloud users can convert GPX tracks into OBF files using [OsmAnd Web Map](https://osmand.net/map).

`Login` -> `Tracks` -> `Choose folder` -> `Menu (⋮)` -> `Download as OBF collection`

The resultant file can be imported to OsmAnd (supported by OsmAnd Android 5.0+)

### Map Line Color / Width

| GPX tag                 | Default | Purpose                                     |
|:------------------------|:--------|:-----------------------------------------------------|
| `<name>`                | -       | Track name to display over track line                |
| color                   | red     | Color: hex or text (see supported colors)            |
| colour                  | -       | Override `color` tag                                 |
| displaycolor            | -       | Override `color` tag                                 |
| shield_waycolor         | -       | Override `color` tag                                 |
| translucent_line_colors | no      | Set to "yes" to use semi-transparent line colors     |
| width                   | thin    | Width: "thin", "medium", "bold", 1-24 or "roadstyle" |

Supported colors: black blue brown darkyellow gray green lightblue lightgreen orange purple red white yellow

***Example:***

```xml
<gpx>
  <metadata>
    <name>
      Track name located in Metadata
    </name>
  </metadata>
  <trk>
    ...
  </trk>
  <extensions>
    <osmand:color>yellow</osmand:color>
    <osmand:width>roadstyle</osmand:width>
    <osmand:translucent_line_colors>yes</osmand:translucent_line_colors>
  </extensions>
</gpx>
```

### Map Line Icons (shields)

Line shields might be used to display [OSMC-symbol-styled](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol) icons over the Track Line.

Shield is a special set of icons (1 background and 0-2 foreground) with optional text displayed over icons.

OsmAnd supports a variety of the icons used by OSM's `osmc:symbol` tag, as well as text / textcolor / waycolor elements.

Shields might display a short text over icons. The text is taken from `shield_text` or `ref` tags.

If shield icons are not specified, an auto-sized yellow shield will be used by default.

| GPX tag          | Purpose                                    |
|:-----------------|:----------------------------------------------------|
| shield_bg        | Shield background icon name                         |
| shield_fg        | Shield foreground icon name                         |
| shield_fg_2      | Second foreground icon (optional)                   |
| shield_text      | Text to display over Shield (optional)              |
| shield_textcolor | Color of the text over Shield (optional)            |
| shield_waycolor  | Override the standard `color` of the track (optional)   |
| ref              | Might be used as text if no `shield_text` specified |

***Example:***

```xml
<gpx>
  <trk>
    ...
  </trk>
  <extensions>
    <osmand:shield_text>Hi!</osmand:shield_text>
    <osmand:shield_fg>osmc_red_dot</osmand:shield_fg>
    <osmand:shield_bg>osmc_white_bg</osmand:shield_bg>
    <osmand:shield_waycolor>red</osmand:shield_waycolor>
    <osmand:shield_textcolor>black</osmand:shield_textcolor>
  </extensions>
</gpx>
```

### Track Waypoints Display

| GPX tag    | Default | Purpose                                   |
|:-----------|:--------|:---------------------------------------------------|
| icon       | -       | Icon name (standard OsmAnd waypoint editor icons)  |
| color      | red     | Icon color: hex or text (limited colors supported) |
| background | circle  | The shape of the icon (circle, square, octagon)    |

Background=square will be displayed in red, background=octagon will be displayed as circle.

Supported colors (background=circle): blue gray green light-blue light-green orange purple yellow

In addition, [HTML-code](#html-in-description) in the description and [Link-as-Image](#link-tag-link-as-image) can be used to decorate waypoints as well as the track itself.


***Example:***

```xml
<wpt lat="3.1415926" lon="42">
  <name>PI</name>
  <extensions>
    <osmand:icon>historic_archaeological_site</osmand:icon>
    <osmand:background>circle</osmand:background>
    <osmand:color>#ffaa00</osmand:color>
  </extensions>
</wpt>
```

### Search by Name and Ref

A variety of GPX tags are indexed and used to find tracks and points.

| GPX tag     | Location               | Purpose                   |
|:------------|:-----------------------|:-----------------------------------|
| `<name>`    | `<metadata>`           | Main GPX name (applied to tracks)  |
| ref         | gpx `<extensions>`     | Short name (usually OSM tag `ref`) |
| shield_text | gpx `<extensions>`     | Shield text (may be used with ref) |
| name_-_lang | gpx/wpt `<extensions>` | Localized name:lang (`:` -> `_-_`) |
| `<name>`    | `<wpt>`                | Waypoint name                      |

***Example:***

```xml
<gpx>
  <metadata>
    <name>Xemxija Heritage Trail</name>
  </metadata>
  <extensions>
    <osmand:ref>XHT</osmand:ref>
  </extensions>
  <wpt lat="35.948477" lon="14.3806796">
    <name>Il-Mighba Rumana</name>
    <extensions>
      <osmand:name_-_en>The Roman Apiary</osmand:name_-_en>
    </extensions>
  </wpt>
</gpx>
```

### Search by Activity Type

Tracks in the OBF collection are automatically organized into Activity groups and Activity types.

Activity types as well as groups can be used to search as POI categories or to create POI filters.

Both the "id" and "tags" from `activites.json` file will be used to determine the Activity type.

Supported activity groups and types: [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json)

| GPX tag  | Location            | Purpose                                |
|:---------|:--------------------|:------------------------------------------------|
| activity | metadata extensions | Main OsmAnd tag to store the Activity type (id) |
| route    | GPX extensions      | Alternative OSM-way to define the Activity type |


***Examples:***

Will be organized into `Motorcycling` group with `Off-Road Motorcycling (Dirt Biking)` type:

```xml
<metadata>
  <extensions>
    <osmand:activity>off_road_motorcycling_dirt_biking</osmand:activity>
  </extensions>
</metadata>
```

Will be organized into `Cycling` group with `Mountain biking` type:

```xml
<gpx>
  <extensions>
    <osmand:route>mtb</osmand:route>
  </extensions>
</gpx>
```


### OBF Tags (information)

Track information, analytics, and statistics are automatically generated and stored as OBF tags.

| OBF tag                                                        | Purpose                                             |
|:---------------------------------------------------------------|:-------------------------------------------------------------|
| distance                                                       | Summarized distance of all track segments                    |
| start_ele, ele_graph                                           | GPX-specified elevation data wrapped in compact binary array |
| min_ele, avg_ele, max_ele, diff_ele_up, diff_ele_down          | Analytics of GPX-specified elevation data                    |
| max_speed, avg_speed, min_speed                                | Track speed analytics                                        |
| time_span, time_span_no_gaps, time_moving, time_moving_no_gaps | Track time analytics                                         |


### OBF tags (internals)

Some GPX tags are used or stored indirectly in OBF files. See [OsmGpxWriteContext.java](https://github.com/osmandapp/OsmAnd-tools/blob/master/java-tools/OsmAndMapCreatorUtilities/src/main/java/net/osmand/obf/OsmGpxWriteContext.java) for details of the implementation.

| OBF tag                | Purpose                                                                                         |
|:-----------------------|:------------------------------------------------------------------------------------------------|
| route_id               | Used to identify unique GPX and to connect Map<->POI data (format:`/[A-Z]+[0-9]+/` eg OSM12345) |
| track_color            | Map section track color generated from shield_waycolor / color / colour / displaycolor          |
| route_radius           | Specify the default radius to search parts of the track in the POI section                              |
| filename               | The name of the original GPX file used to generate this track                                   |
| extensions_extra_tags  | Extra arbitrary tags for `<gpx><extension>` in JSON format                                      |
| metadata_extra_tags    | Extra arbitrary tags for `<metadata><extension>` in JSON format                                 |
| wpt_extra_tags         | Extra arbitrary tags for each point `<wpt><extension>` in JSON format                           |
| name, ref, description | Localizable and searchable attributes (lang="true")                                             |
| route_name             | Route name for internal searchPoiByName                                                         |
| route_type             | Activity group ("id")                                                                           |
| route_activity_type    | Activity type ("id")                                                                            |
| route_track_point      | Waypoint POI-type                                                                               |

> *This article was last updated in January 2025*
