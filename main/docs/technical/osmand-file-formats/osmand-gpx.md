---
sidebar_position: 2
---

# OsmAnd GPX


## Introduction

GPX (GPS Exchange Format) is an XML-based format for storing GPS data such as tracks, routes, and waypoints. OsmAnd supports GPX for importing, exporting, and customizing tracks and routes for navigation.

OsmAnd uses the `osmand:` XML namespace for all custom tags. These extensions store additional data, such as visual settings and route-specific attributes. The GPX file structure in OsmAnd follows the standard XML-based format defined in GPX 1.1. It organizes data using hierarchical elements such as `<gpx>`, `<trk>` (track), `<rte>` (route), and `<wpt>` (waypoint).

This article outlines the structure of GPX files in OsmAnd, key parameters for tracks and waypoints, and examples of saving and displaying calculated routes.


## Track Appearance Parameters

This section describes how OsmAnd displays tracks on the map and the customization options available to adjust their appearance. The parameters described below are applied within the `<gpx>` tag and affect all tracks included in a GPX file.

| Tag Name  | Description / Values |
|:----------------------------------------|:---------|
| `color`                                 | - Defines the color of the track line on the map.  <br/>  - *String:* HEX color code `#RRGGBB` or `#AARRGGBB` |
| `width`                                 | - Specifies the width of the track line. <br/>  - *String:* `“thin”`, `“medium"`, `“bold”` (defined by the `“currentTrackWidth”` attribute), or integer (1-24) |
| `show_arrows`                           | - Enables or disables direction arrows along the track. <br/> - *Bool:* `"true"` / `"false"` |
| `show_start_finish`                     | - Shows or hides markers for the start and end of the track. <br/> - *Bool:* `"true"` / `"false"` |
| `split_type`                            | - Specifies the type of segmentation for the track. <br/> - *String:* `"no_split"`, `"distance"`, `"time"` |
| `split_interval`                        | - Sets the interval for track segmentation based on the selected type. <br/> - *Double:* Integer (meters for `"distance"`, seconds for `"time"`) |
| `line_3d_visualization_by_type`         | - Specifies the type of 3D visualization for the track. <br/> - *String:* `"none"`, `"altitude"`, `"shared_string_speed"`, `"map_widget_ant_heart_rate"`, `"map_widget_ant_bicycle_cadence"`, `"map_widget_ant_bicycle_power"`, `"shared_string_temperature"`, `"shared_string_speed"`, `"fixed_height"` |
| `line_3d_visualization_wall_color_type` | - Defines the wall color type for 3D visualization. <br/> - *String:* `"none"`, `"solid"`, `"downward_gradient"`, `"upward_gradient"`, `"altitude"`, `"slope"`, `"speed"` |
| `line_3d_visualization_position_type`   | - Sets the position of the 3D visualization relative to the track. <br/> - *String:* `"top"`, `"bottom"`, `"top_bottom"`|
| `vertical_exaggeration_scale`           | - Multiplier to scale the value of the `line_3d_visualization_by_type` attribute. <br/> - *Float:* Default: 1.0 |
| `elevation_meters`                      | - Specifies a fixed elevation in meters for `"fixed_height"` in `line_3d_visualization_by_type`. <br/> - *Float:* Default: `1000` |
| `coloring_type`                         | - Determines the coloring method for the track. <br/> - *String:* `"solid"`, `"speed"`, `"altitude"`, `"slope"`, `"routeInfo_roadClass`, `"routeInfo_surface"`, `"routeInfo_smoothness"` |
| `color_palette`                         | - Specifies the color scheme for the track. <br/> - *String:* `"default"` / [user-defined schemes](/docs/user/personal/color-palette-schemes) |

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

### Tag 'coloring_type'

The `coloring_type` tag in OsmAnd allows users to customize track coloring based on specific data attributes, providing a visual way to interpret key information along the track.

| Type | Description | Use Case |
|:-----------------------|:--------|:--------|
| `solid`                | The entire track is displayed with a single, solid color specified by the `color` tag. | Use when a uniform color is needed for clear visibility. |
| `speed`                | The track is colored in a gradient based on the speed values at each track point (`trkpt`). Higher speeds are represented by distinct colors. | Ideal for activities such as cycling or driving to visualize changes in speed. |
| `altitude`             | The track is colored according to the elevation data at each `trkpt`. A gradient is applied, indicating different altitude ranges. | Useful for hiking or mountain routes to highlight altitude changes. |
| `slope`                | The track is colored based on the incline/decline between consecutive track points. Positive gradients indicate uphill slopes, while negative gradients indicate downhill. | Suitable for cyclists or hikers analyzing track difficulty. |
| `routeInfo_roadClass`  | Colors the track segments based on the OpenStreetMap (OSM) road classification (e.g., highway, residential street). | Helps distinguish between different road types when following a route. |
| `routeInfo_surface`    | Colors the track segments based on the OSM surface type (e.g., paved, gravel, dirt). | Useful for determining track conditions during activities like off-roading. |
| `routeInfo_smoothness` | Colors the track according to OSM smoothness ratings, indicating the roughness or smoothness of the path (e.g., excellent, bad). | Helpful for evaluating track navigability for specific vehicles. |


## Waypoints Customization

This section explains how OsmAnd allows customization of waypoints in GPX files by using icons, colors, and grouping.

### Waypoints Icons

The following tags control the appearance of waypoint icons in OsmAnd:

| GPX tag    | Default | Purpose  |
|:-------------|:----------|:-----------|
| `icon`       | (none)    | Specifies the icon name for the waypoint (e.g., `historic_castle`). |
| `color`      | `red`     | Sets the icon’s color using a HEX code (e.g., `#FF0000`) or color name (e.g., `blue`). |
| `background` | `circle`  | Defines the icon's background shape. Possible values: `"circle"`, `"square"`, `"octagon"`. |

***Example:***

```xml
<wpt lat="52.5163" lon="13.3779">
  <name>Brandenburg Gate</name>
  <icon>landmark_arch</icon>
  <color>#FFD700</color>
  <background>square</background>
</wpt>
```

### Waypoints Groups

Waypoints in OsmAnd can be sorted into groups based on their type. This grouping allows the user to organize multiple waypoints under specific categories, improving clarity and map readability.

- **Point group definition.** The `<type>` tag inside the `<wpt>` element specifies the point's group (e.g., `"castle"`, `"aqueduct"`).
- **Group configuration.** The `osmand:points_groups` extension in the `<gpx>` element defines the settings for each group, including the `name`, `color`, `icon`, and `background` for all waypoints in that group.

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

Starting with OsmAnd [version 4.9](/blog/osmand-android-4-9-released/#gpx-track-activities), you can classify your tracks by activity type for further analysis and organization in folders.

The list of supported activity types is available in the [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json) file. Each activity is identified by its unique `id` and stored within the `<metadata>` extensions of the GPX file.


***Example:***

```xml
  <metadata>
    <extensions>
      <osmand:activity>off_road_motorcycling_dirt_biking</osmand:activity>
    </extensions>
  </metadata>
```

## HTML in Description

HTML tags can be used within the `<desc>` tags in the `<metadata>` or `<wpt>` elements to provide formatted descriptions for tracks or waypoints.  

To avoid conflicts with XML syntax, replace special characters as follows:  

- `<` *→* `&lt;`
- `>` *→* `&gt;`
- `&` *→* `&amp;`

***Example:***

```xml
<metadata>
  <desc>
    &lt;p&gt;This is a &lt;b&gt;bold&lt;/b&gt; example.&lt;/p&gt;
    &lt;p&gt;
      &lt;h3&gt;Waypoint Information&lt;/h3&gt;
      &lt;a href="https://osmand.net"&gt;Visit OsmAnd&lt;/a&gt;&lt;br/&gt;
      &lt;img src="https://osmand.net/img/logo.png" /&gt;
    &lt;/p&gt;
  </desc>
</metadata>
```

***Important Notes***

- OsmAnd removes all HTML tags when generating brief descriptions, leaving plain text.
- You can use tags like `<b>`, `<i>`, `<p>`, `<br/>`, `<a>`, `<img>`, and more for customization.


## Link Tag (Link-as-Image)

The `<link>` tag is used to associate URLs with metadata, author information, or waypoints in OsmAnd GPX files. This tag can also display an image when the URL points to an image file.

***Examples (Metadata link with image):***

```xml
<metadata>
  <link href="https://osmand.net/img/logo.png">
    <text>OsmAnd Logo</text>
  </link>
</metadata>
```

***Examples (Waypoint link with image):***

```xml
<wpt lat="52.5163" lon="13.3779">
  <link href="https://osmand.net/img/landmark.png" />
</wpt>
```


## Details of a Track Point (trkpt)

Each `<trkpt>` (track point) in the GPX file can include additional attributes to capture data such as speed, heading, and elevation.  

*Supported attributes:*

- **speed** - speed at the track point (in meters per second).
- **heading** - direction of movement (0-359 degrees).
- **ele** - elevation above sea level (in meters).
- **time** - timestamp for the track point.

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

You can enrich your tracks with data from fitness sensors, such as heart rate monitors or temperature sensors. OsmAnd uses Garmin’s [TrackPointExtension](https://www8.garmin.com/xmlschemas/TrackPointExtensionv1.xsd) schema to store this data, making it compatible with platforms like **Strava** and **Garmin Basecamp**.

*Supported Sensor Data Tags:*

- **hr** - heart rate (in beats per minute).
- **cad** - bicycle cadence (in revolutions per minute).
- **atemp** - ambient temperature (in degrees Celsius).
- **power** - bicycle power output (in watts).

***Example:***

```xml
<extensions>
  <gpxtpx:TrackPointExtension>
    <gpxtpx:hr>145</gpxtpx:hr>
    <gpxtpx:cad>80</gpxtpx:cad>
    <gpxtpx:atemp>22</gpxtpx:atemp>
    <gpxtpx:power>250</gpxtpx:power>
  </gpxtpx:TrackPointExtension>
</extensions>
```

## Calculated Routes

With OsmAnd, you can export detailed calculated routes, including all essential data such as route segments, turns, road names, road types, and restrictions. This functionality ensures the route can be fully restored as if it were freshly built, even without access to the respective offline maps.  

***GPX File Structure for Calculated Routes***  

A GPX file may contain multiple calculated routes. Each route is divided into segments within the `<trkseg>` tags. These segments include detailed metadata under the `<extensions>` tag, enabling full reconstruction of the route. Additionally, the `<rte>` block stores key points of the route, which are used for visualization and analysis.  

The GPX file is saved in this form when you export a built route or when you save a track consisting of several individual segments using the [Plan a route](../../user/plan-route/create-route.md) feature.


***GPX Structure Explanation***

1. **Track segment.**

    - The `<trk>` element is the root for a track. It contains the overall track data.
    - The `<trkseg>` element represents a segment of the track, which consists of a series of track points. Each track point contains geographical coordinates and may have additional metadata, like elevation or time. The order of these track points indicates the sequence and the *length* of the route segments.

2. **Extensions.** Within the `<trkseg>`, the `<extensions>` element provides additional information not covered by the standard GPX schema. This includes:

    - *Route segments*. Defined within the `<route>` element, which lists individual segments summarized in the overall route.
    - *Types of Segments*. The `<types>` section specifies the characteristics of each segment in the route. This data is taken from offline maps during the initial route creation.

3. **Route Points**

    - The <rte> element encapsulates the entire route, which may include multiple route points.
    - The <rtept> element represents individual route points. Like track points, these are linked to the route and can include parameters for key points. If a route point is not the first or last, it shares the same data as the corresponding track point that has the same index.

4. 



<!--
xml
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
-->

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

Supported colors: black, blue, brown, darkyellow, gray, green, lightblue, lightgreen, orange, purple, red, white, yellow.

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

Supported colors (background=circle): blue gray green lightblue lightgreen orange purple yellow

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

