---
sidebar_position: 2
---

# OsmAnd GPX

## Introduction

GPX (GPS Exchange Format) is a widely-used XML-based standard for storing GPS data, including tracks, routes, and waypoints. OsmAnd supports the GPX format for importing, exporting, and customizing GPS data for navigation, enabling both beginner and advanced users to optimize their experience.

#### What Makes OsmAnd GPX Unique?

OsmAnd extends the standard GPX 1.1 format by introducing its own custom `osmand:` XML namespace. This namespace enables storing additional data such as:

- Track visual settings (color, width, arrows).
- Waypoint grouping and icons.
- Detailed route attributes, including calculated routes and activity types.

#### What Will You Learn in This Guide?

This article provides a comprehensive overview of GPX file structure and features in OsmAnd. You will learn:

1. How to customize tracks and waypoints using GPX tags.
2. Advanced features such as HTML descriptions, sensor data, and activity types.
3. How to export calculated routes and preserve their full functionality.
4. Converting GPX files into OBF format for optimized storage and advanced search capabilities.

#### GPX Structure Overview

GPX files in OsmAnd organize data hierarchically into the following elements:

- `<gpx>` - the root element of the file.
- `<trk>` - represents tracks, which contain:
  - `<trkseg>` - segments of the track, which are further divided into `<trkpt>` (track points).
- `<rte>` - represents routes, including waypoints and key points.
- `<wpt>` - represents individual waypoints.


## Track Customization

### Track Appearance Parameters

This section describes how OsmAnd displays tracks on the map and the customization options available to adjust their appearance. The parameters described below are applied within the `<gpx>` tag and affect all tracks included in a GPX file.

| Tag Name  | Description / Values |
|:----------------------------------------|:---------|
| `<color>`                                 | - Defines the color of the track line on the map.  <br/>  - *String:* HEX color code `#RRGGBB` or `#AARRGGBB` |
| `<width>`                                 | - Specifies the width of the track line. <br/>  - *String:* `“thin”`, `“medium"`, `“bold”` (defined by the `“currentTrackWidth”` attribute), or integer (1-24) |
| `<show_arrows>`                           | - Enables or disables direction arrows along the track. <br/> - *Bool:* `"true"` / `"false"` |
| `<show_start_finish>`                     | - Shows or hides markers for the start and end of the track. <br/> - *Bool:* `"true"` / `"false"` |
| `<split_type>`                            | - Specifies the type of segmentation for the track. <br/> - *String:* `"no_split"`, `"distance"`, `"time"` |
| `<split_interval>`                        | - Sets the interval for track segmentation based on the selected type. <br/> - *Double:* Integer (meters for `"distance"`, seconds for `"time"`) |
| `<line_3d_visualization_by_type>`         | - Specifies the type of 3D visualization for the track. <br/> - *String:* `"none"`, `"altitude"`, `"shared_string_speed"`, `"map_widget_ant_heart_rate"`, `"map_widget_ant_bicycle_cadence"`, `"map_widget_ant_bicycle_power"`, `"shared_string_temperature"`, `"shared_string_speed"`, `"fixed_height"` |
| `<line_3d_visualization_wall_color_type>` | - Defines the wall color type for 3D visualization. <br/> - *String:* `"none"`, `"solid"`, `"downward_gradient"`, `"upward_gradient"`, `"altitude"`, `"slope"`, `"speed"` |
| `<line_3d_visualization_position_type>`   | - Sets the position of the 3D visualization relative to the track. <br/> - *String:* `"top"`, `"bottom"`, `"top_bottom"`|
| `<vertical_exaggeration_scale>`           | - Multiplier to scale the value of the `line_3d_visualization_by_type` attribute. <br/> - *Float:* Default: 1.0 |
| `<elevation_meters>`                      | - Specifies a fixed elevation in meters for `"fixed_height"` in `<line_3d_visualization_by_type>`. <br/> - *Float:* Default: `1000` |
| `<coloring_type>`                         | - Determines the coloring method for the track. <br/> - *String:* `"solid"`, `"speed"`, `"altitude"`, `"slope"`, `"routeInfo_roadClass`, `"routeInfo_surface"`, `"routeInfo_smoothness"` |
| `<color_palette>`                         | - Specifies the color scheme for the track. <br/> - *String:* `"default"` / [user-defined schemes](/docs/user/personal/color-palette-schemes) |

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

The `<coloring_type>` tag in OsmAnd allows users to customize track coloring based on specific data attributes, providing a visual way to interpret key information along the track.

| Type | Description | Use Case |
|:-----------------------|:--------|:--------|
| `<solid>`                | The entire track is displayed with a single, solid color specified by the `color` tag. | Use when a uniform color is needed for clear visibility. |
| `<speed>`                | The track is colored in a gradient based on the speed values at each track point (`<trkpt>`). Higher speeds are represented by distinct colors. | Ideal for activities such as cycling or driving to visualize changes in speed. |
| `<altitude>`             | The track is colored according to the elevation data at each `<trkpt>`. A gradient is applied, indicating different altitude ranges. | Useful for hiking or mountain routes to highlight altitude changes. |
| `<slope>`                | The track is colored based on the incline/decline between consecutive track points. Positive gradients indicate uphill slopes, while negative gradients indicate downhill. | Suitable for cyclists or hikers analyzing track difficulty. |
| `<routeInfo_roadClass>`  | Colors the track segments based on the OpenStreetMap (OSM) road classification (e.g., highway, residential street). | Helps distinguish between different road types when following a route. |
| `<routeInfo_surface>`    | Colors the track segments based on the OSM surface type (e.g., paved, gravel, dirt). | Useful for determining track conditions during activities like off-roading. |
| `<routeInfo_smoothness>` | Colors the track according to OSM smoothness ratings, indicating the roughness or smoothness of the path (e.g., excellent, bad). | Helpful for evaluating track navigability for specific vehicles. |

### GPX tags in UI

GPX extensions tags displayed at the bottom of Track context menu.
Both `<metadata>` and `<gpx>` `<extensions>` are listed.
Appearance tags are excluded from the listing.
Supported since OsmAnd Android 5.0.

## Waypoints Customization

This section explains how OsmAnd allows customization of waypoints in GPX files by using icons, colors, and grouping.

### Waypoint Icons

The following tags control the appearance of waypoint icons in OsmAnd:

| GPX tag      | Default   | Purpose    |
|:-------------|:----------|:-----------|
| `<icon>`       | *(none)*    | Specifies the icon for the waypoint (e.g., `historic_castle`). |
| `<color>`      | `"red"`     | Sets the icon’s color using a HEX code (e.g., `#FF0000`) or color name (e.g., `"blue"`). |
| `<background>` | `"circle"`  | Defines the icon's background shape. Possible values: `"circle"`, `"square"`, `"octagon"`. |

***Example:***

```xml
<wpt lat="52.5163" lon="13.3779">
  <name>Brandenburg Gate</name>
  <icon>landmark_arch</icon>
  <color>#FFD700</color>
  <background>square</background>
</wpt>
```

### Waypoint Groups

Waypoints in OsmAnd can be sorted into groups based on their type. This grouping allows the user to organize multiple waypoints under specific categories, improving clarity and map readability.

- **Point group definition.** The `<type>` tag inside the `<wpt>` element specifies the point's group (e.g., `"castle"`, `"aqueduct"`).
- **Group configuration.** The `<osmand:points_groups>` extension in the `<gpx>` element defines the settings for each group, including the `name`, `color`, `icon`, and `background` for all waypoints in that group.

***Example:***

```xml
<gpx>
  <wpt lat="1.234" lon="5.678">
    <name>Look up to see the water</name>
    <type>aqueduct</type>
  </wpt>
  <wpt lat="5.678" lon="1.234">
    <name>Beware of ghosts</name>
    <type>castle</type>
  </wpt>
  <wpt lat="66.666" lon="66.666">
    <name>The house of Beetlejuice</name>
    <type>castle</type>
  </wpt>
  <extensions>
    <osmand:points_groups>
      <group name="castle" color="#FF0000" icon="historic_castle" background="circle"/>
      <group name="aqueduct" color="#0000FF" icon="bridge_structure_arch" background="circle"/>
    </osmand:points_groups>
  </extensions>
</gpx>
```


## Advanced GPX Features

### Activity Type

Starting with OsmAnd [version 4.9](/blog/osmand-android-4-9-released/#gpx-track-activities), you can classify your tracks by activity type for further analysis and organization in folders.

The list of supported activity types is available in the [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json) file. Each activity is identified by its unique `ID` and stored within the `<metadata>` extensions of the GPX file.


***Example:***

```xml
  <metadata>
    <extensions>
      <osmand:activity>off_road_motorcycling_dirt_biking</osmand:activity>
    </extensions>
  </metadata>
```

### HTML in Descriptions

HTML tags can be used within the `<desc>` tags in the `<metadata>` or `<wpt>` elements to provide formatted descriptions for tracks or waypoints.  

To avoid conflicts with XML syntax, replace special characters as follows:  

- `<` *→* `&lt;`
- `>` *→* `&gt;`
- `&` *→* `&amp;`

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

***Important notes:***

- OsmAnd removes all HTML tags when generating brief descriptions, leaving plain text.
- You can use tags like `<b>`, `<i>`, `<p>`, `<br/>`, `<a>`, `<img>`, and more for customization.


### Link Tag

Use `<link>` tag to associate URLs with metadata, author information, or waypoints in OsmAnd GPX files. This tag can also display an image when the URL points to an image file.

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
  <link href="https://osmand.net/img/logo.png" />
</wpt>
```

### Sensor Data Tags

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

### Track Point Details

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



## Calculated route(s)

In **OsmAnd** you can can calculate route and save all data in GPX, so later all features navigation will be available as running GPX navigation, so **OsmAnd** gpx will contain route segments, turns, road names, road types, restrictions, etc.. The route can be completely restored as if just built, even in the absence of the respective offline maps.

A gpx file may contain several routes. Each of them is contained in a specific segment under **trkseg** / **extensions**. A gpx file is saved in this form when exporting a constructed route or when saving a track that consists of several separate segments via the [**Plan a route**](../../user/plan-route/create-route.md) functionality.

[**Plan a route**](../../user/plan-route/create-route.md) also adds one (or several, in accordance with the number of contained separate segments / tracks) **rte** blocks to the gpx file, containing route key points (**rtept**).

#### Gpx structure:

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
      // The index of the point in the gpx segment that corresponds to the first point of the calculated route for this segment.
      // If rtept is not first and last, before it (with the same idx) trkpt will be with the same data.
      <trkpt_idx>...</trkpt_idx>
    </extensions>
  </rtept>
</rte>
```

#### Important properties:

* **trkpt_idx** of first **rtept** in **trkseg** is 0. So, if there are two **trkseg**s, there will be two **rtept**s with **trkpt_idx** = 0
* **trkpt_idx** of last **rtept** in **trkseg** is equal to number of **trkpt**s in **trkseg** minus 1. For example, if **trkseg** has 12 **trkpt**s, **trkpt_idx** of last **rtept** should be 11
* Neighbouring route **segments** of are overlapping: the end of previous **segment** and start of next **segment** is the one and same **trkpt**.
* There is exception when neighbouring route **segments** don't overlap (don't share the same **trkpt**). It happens when there is **rtept** "between" route **segment**s. End of previous route **segment** is one **trkpt**, and start of next route **segment** is another **rtept**. But these two **trkpt**s are totally equal by lat, lon and other params.
* Route **segment** overlapping can be detected via **length** and **startTrkptIdx** (the latter is used only for convenience of human reading):
  - If sum of **startTrkptIdx** and **length** of prevous route **segment** equals **startTrkptIdx** of next route **segment**, route **segment**s are not overlapping
  - If sum is less by one, then route **segment**s are overlapping
* There can be straight route **segment**s. They are marked with **id="-1"**. They can appear in two cases:
  - It is multiprofile route, and user selected straight line
  - User placed **rtept** too far away from closest road, so osmand made straight line between **rtept** and road
* trkpts = length - (segments - 1) + (rtepts - 2), where:
  - trkpts - amount of **trkpt**s inside **trkseg**
  - length - sum of all **length**s of route **segment**s inside **trkseg**
  - segments - amount of route **segment**s inside **trkseg**
  - rtepts - amount of **rtept**s owned by **trkseg**  

#### Example:

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

## GPX Collections in OBF

OsmAnd allows you to convert multiple GPX files into a single OBF file. This enables the storage of thousands of GPX tracks in a compact, optimized format while maintaining features like special map icons, track appearance customization, and search functionality. This avoids a limit of local large GPX files which typically can't handle > 500 K points in total however some features of GPX tracks might be missing comparing displaying OBF file.

Steps to convert GPX to OBF:  

- Log in to [OsmAnd Web Map](https://osmand.net/map) *→ Tracks → Select a folder → *Menu* (⋮) *→ Download as OBF collection*  

- The resulting `<.obf>` file can be imported into OsmAnd (requires OsmAnd Android 5.0+).


### Track Line Style

Customize track lines with the following tags:

| GPX tag                   | Default | Purpose  |
|:--------------------------|:--------|:---------|
| `<name>`                  | *(none)*  | Name displayed over the track line.  |
| `color`                   | `red`   | Primary color (HEX or text). |
| `colour`, `displaycolor`  | *(none)*  | Alternative ways to override `color`. |
| `shield_waycolor`         | *(none)*  | Override for shield track line `color`. |
| `translucent_line_colors` | `no`    | Set to `yes` for semi-transparent colors. |
| `width`                   | `thin`  | Line width: `"thin"`, `"medium"`, `"bold"`, `"1-24"`, or `"roadstyle"` |

**Supported colors:** black, blue, brown, darkyellow, gray, green, lightblue, lightgreen, orange, purple, red, white, yellow.

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

### Track Line Shields

Shields are icons or symbols displayed along the track line. OsmAnd supports [OSMC-symbol-style](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol) shields, which may include:

- Background icon - the main shape (e.g., circle or square).
- Foreground icons - up to two smaller symbols layered over the background.
- Text - short descriptions or identifiers, derived from the `shield_text` or `ref` tags.

If no shield properties are defined, OsmAnd uses an auto-sized yellow shield for the track.

***Tags for shields:***

| GPX tag            | Purpose                                                                |
|:-------------------|:-----------------------------------------------------------------------|
| `shield_bg`        | Defines the background icon for the shield.                            |
| `shield_fg`        | Specifies the first foreground icon (e.g., an arrow or dot).           |
| `shield_fg_2`      | Specifies the second foreground icon (optional).                       |
| `shield_text`      | Sets the short text to be displayed over the shield (e.g., route ref). |
| `shield_textcolor` | Determines the color of the shield text (optional).                    |
| `shield_waycolor`  | Overrides the standard track color for the shield’s line (optional).   |
| `ref`              | Used as fallback text if `shield_text` is not provided.                |

***Example:***

```xml
<gpx>
  <trk>
    <name>Sample Route</name>
  </trk>
  <extensions>
    <osmand:shield_text>ABC</osmand:shield_text>
    <osmand:shield_fg>osmc_red_dot</osmand:shield_fg>
    <osmand:shield_bg>osmc_white_bg</osmand:shield_bg>
    <osmand:shield_waycolor>red</osmand:shield_waycolor>
    <osmand:shield_textcolor>black</osmand:shield_textcolor>
  </extensions>
</gpx>
```

### Waypoints Display

Waypoint icons can be customized with the following tags:

| GPX tag      | Default  | Purpose                                   |
|:-------------|:---------|:---------------------------------------------------|
| `icon`       | *(none)*   | Specifies the icon for the waypoint (uses standard OsmAnd waypoint editor icons). |
| `color`      | `red`    | Sets the icon color using a HEX code (e.g., `#ffaa00`) or a supported color name (limited options). |
| `background` | `circle` | Defines the shape of the icon. Supported values: `circle`, `square`, `octagon`. |

***Behavior of `background` shapes:***

- `circle` - displays the icon with a circular background.
- `square` - displays the icon with a square background, defaulting to red if no color is specified.
- `octagon` - treated as a circular background in OsmAnd.

**Supported colors for** `background=circle`: blue, gray, green, lightblue, lightgreen, orange, purple, yellow.

***Enhancements with additional elements:***

- You can add formatted descriptions to waypoints using [HTML-code](#html-in-descriptions). This allows you to include styled text, links, or even images.
- Waypoints can display linked images using [Link-as-Image](#link-tag).

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


### Search by Name and Refs 

Tracks and waypoints can be located using a variety of GPX tags.

| GPX tag       | Location               | Purpose                                                                     |
|:--------------|:-----------------------|:----------------------------------------------------------------------------|
| `<name>`      | `<metadata>`           | The primary name of the GPX track.                                          |
| `ref`         | GPX `<extensions>`     | A short identifier, often derived from the OSM `ref` tag.                   |
| `shield_text` | GPX `<extensions>`     | Text displayed on shields (can also be used with `ref`).                    |
| `name_-_lang` | GPX/WPT `<extensions>` | Localized `name:lang` (e.g., `name_-_en` for English, replace `:` -> `_-_`) |
| `<name>`      | `<wpt>`                | The name of the waypoint.                                                   |

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

### Search by activity type

OsmAnd organizes tracks in OBF files into **Activity Groups** and **Activity Types**. These classifications help you filter tracks as POIs or create activity-based search filters.  

How activity types work:

- Activity types and groups are determined using the `"id"` and `"tags"` from the [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json) file.
- OsmAnd uses `osmand:activity` or `osmand:route` tags to classify activities in GPX files.


| GPX tag           | Location | Purpose                                          |
|:------------------|:---------|:-------------------------------------------------|
| `osmand:activity` | `<metadata>` | Main OsmAnd tag to store the Activity type (ID). |
| `osmand:route`    | GPX `<extensions>` | Alternative OSM-way to define the Activity type. |


***Examples of organizing tracks by activity type:***

1. This will classify the track under the **Motorcycling** group with the type **Off-Road Motorcycling (Dirt Biking)**.

    ```xml
    <metadata>
      <extensions>
        <osmand:activity>off_road_motorcycling_dirt_biking</osmand:activity>
      </extensions>
    </metadata>
    ```

2. This will organize the track under the **Cycling** group with the type **Mountain Biking**.

    ```xml
    <gpx>
      <extensions>
        <osmand:route>mtb</osmand:route>
      </extensions>
    </gpx>
    ```

### Search information Tags

OBF files automatically generate and store critical track statistics and analytics.

| OBF tag                               | Purpose                                                               |
|:--------------------------------------|:----------------------------------------------------------------------|
| `distance`                            | Total distance covered by all track segments.                         |
| `start_ele`, `ele_graph`              | Elevation data from GPX, wrapped in a compact binary array.           |
| `min_ele`, `avg_ele`, `max_ele`       | Minimum, average, and maximum elevation analytics.                    |
| `diff_ele_up`, `diff_ele_down`        | Total elevation gain and loss across the track.                       |
| `max_speed`, `avg_speed`, `min_speed` | Track speed analytics, including maximum, average, and minimum speed. |
| `time_span`, `time_span_no_gaps`      | Total time for the track, with and without accounting for gaps.       |
| `time_moving`, `time_moving_no_gaps`  | Total moving time, with and without accounting for gaps.              |

### Internal Tags

Some GPX tags are used or stored indirectly in OBF files. Refer to [OsmGpxWriteContext.java](https://github.com/osmandapp/OsmAnd-tools/blob/master/java-tools/OsmAndMapCreatorUtilities/src/main/java/net/osmand/obf/OsmGpxWriteContext.java) for details on the implementation.

| OBF tag                      | Purpose                                                                                                    |
|:-----------------------------|:-----------------------------------------------------------------------------------------------------------|
| `route_id`                   | A unique identifier for the GPX file, linking Map and POI data (format: `/[A-Z]+[0-9]+/` e.g. `OSM12345`). |
| `route_type`                 | Activity group identifier (`id`) derived from `poi/activities.json`                                        |
| `route_activity_type`        | Activity type (within the group) identifier (`id`) derived from `poi/activities.json`                      |
| `name`, `ref`, `description` | Localizable and searchable attributes (`lang="true"` in POI types)                                         |
| `filename`                   | The name of the original GPX file used to generate this track.                                             |
| `track_color`                | Map section track color derived from `shield_waycolor`, `color`, `colour`, or `displaycolor`               |
| `extensions_extra_tags`      | Arbitrary extra tags for `<gpx><extensions>` in JSON format.                                               |
| `metadata_extra_tags`        | Arbitrary extra tags for `<metadata><extensions>` in JSON format.                                          |
| `wpt_extra_tags`             | Arbitrary extra tags for waypoints `<wpt><extensions>` in JSON format.                                     |
| `route_track_point`          | Waypoints from GPX file use this type in POI data.                                                         |
| `route_bbox_radius`          | Specifies the default radius for searching parts of the track within the POI section                       |
| `route_shortlink_tiles`      | Specifies a comma-separated list of OSM Shortlink tiles to speed up reading geometry data (optional)       |
| `route_segment_index`        | Specifies an ordinal number of the geometry segment which is linked to this point (optional)               |
| `route_name`                 | The route name, used by internal `searchPoiByName` (deprecated)                                            |

> *This article was last updated in March 2025*
