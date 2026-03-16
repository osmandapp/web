---
sidebar_position: 3
title:  Astronomy
unlistead: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<InfoIncompleteArticle/>

<InfoAndroidOnly/>

:::info
**Astronomy** is currently in **beta**.
:::

## Overview {#overview}

:::tip Purchase
Astronomy plugin is a [paid feature](../purchases/index.md).  
:::

The Astronomy plugin displays a sky overlay with stars, constellations, the Sun, the Moon, and planets directly on the map. It uses an offline celestial catalog to calculate and display the current and future positions of celestial objects. The plugin also allows users to explore the night sky, identify objects, and plan observations by viewing their paths across the sky.

The plugin works fully offline using built-in star catalogs, allowing sky exploration even without an internet connection.


## Required Setup Parameters {#required-setup-parameters}
  
The following settings are required to display Astronomy overlay:

1. Enable [**Astronomy** plugin](../plugins/index.md#enable--disable) from the *Plugins* section of the *Main Menu*
2. Use **Menu → Star map** to open dedicated screen with star sky, settings and time controls.
3. Select **time and date** using the controls on the Star map screen.
4. Adjust what is shown on the Star map using [**Configure View**](#configure-view) — for example, toggle visible objects and rendering aids.
5. Tap the **Close (X)** button at the top of the Star map screen to exit Star map and return to the Earth map.

The plugin works with both Map rendering engines but performs best in OpenGL mode.

## Star Map Screen {#star-map-screen}

**Go to:** *Enabled plugin → Menu → Star map* 

![Star map screen](@site/static/img/plugins/starwatcher/view_new_1.png)

The dedicated **Star map screen** shows interactive celestial dome with stars, constellations, planets, Sun and Moon paths. At the bottom of the screen, you can access the following controls: 
- **Search** — opens a search panel with an input field where you can type an object name. Below the field, there is a list of suggested objects in alphabetical order. You can switch the sorting between A–Z and Z–A. 
- **Time and date** — lets you change the date and time to observe the sky at different moments in the past or future. This is useful for planning observations, tracking object movement, or learning how the sky changes over time. If you set a custom date/time, the chip shows the full date and time, and a reset button appears next to it to return to the current system time.
- **Magnitude filter** — allows you to limit which stars are displayed based on their brightness. Use the slider to set the maximum magnitude value. Lower values show only the brightest stars, while higher values reveal dimmer stars and deep-sky objects. This helps reduce visual clutter or simulate what is visible to the naked eye.
- [**Configure View**](#configure-view).

The screen renders the full sky hemisphere above your location, aligned with the compass direction. The Star map can be rotated manually by dragging the screen. Manual rotation of the Star map does not affect the orientation of the Earth map. The Earth map always follows the [map orientation mode](../map/interact-with-map.md#map-orientation-modes) selected in your settings. Tap celestial objects for details like magnitude, rising/setting times or paths.

The Star map can also align with your device orientation when compass mode is enabled. In this mode, the sky rotates according to the device's accelerometer and compass sensors, allowing you to explore the sky by physically moving your phone.


## Context Menu {#context-menu}

![Context Menu](@site/static/img/plugins/starwatcher/context_menu_view.png)

The **Context Menu** provides detailed information about celestial objects and tools for observing them. It opens when you tap a celestial object on the Star map.

When an object is selected, it is highlighted on the Star map with a red circle marker. Its daily motion is also visualized by an hour ring (00–23), showing where the object will appear in the sky at each hour of the local day and the direction of its movement.

The Context Menu appears at the bottom of the screen and contains object information, quick actions, and tabs for exploring the object's visibility and observation schedule.

### Object Information {#object-information}

![Object Information](@site/static/img/plugins/starwatcher/object_view.png)

The top section of the Context Menu displays the object's name and classification. Below the name, the object type and its parent constellation or group are shown. For example:  
- **Beta Ursae Minoris** — Star • Ursa Minor
- **Jupiter** — Planet • Solar system
- **Andromeda** — Galaxy • Deep sky

Quick information blocks display key observational parameters:  
- Rise – the time when the object rises above the horizon.
- Set – the time when the object sets below the horizon.
- Azimuth – the object's direction relative to north (0°–360°).
- Altitude – the object's height above the horizon.
- Magnitude – the brightness of the object as seen from Earth. 

These values update dynamically based on the selected time and the user's location.

Below the quick information blocks, the menu may also include additional information and resources about the object:  
- Read on Wikipedia – Opens the object's Wikipedia article. If offline Wikipedia data is available, the article can be opened without an internet connection; otherwise the page opens in the browser.
- Online photos – Displays available photos related to the selected celestial object.

### Actions {#actions}

Below the object information, the Context Menu provides several actions for interacting with the selected celestial object:
- **Save** – Adds the object to your Favorites list for quick access.
- **Locate** – Centers the selected object on the Star map.
- **Direction** – Shows the direction to the object on the map, helping you orient yourself while observing the sky.
- **Path** – Displays the object's daily trajectory across the sky, allowing you to see how it moves during the day.

### Visibility Graph {#actions}

![Visibility Graph](@site/static/img/plugins/starwatcher/visibility.png)

The **Visibility** tab shows how the selected object moves across the sky during a 24-hour period.

The graph displays the object's altitude above the horizon over time.

- The horizontal axis represents time from 12:00 to 12:00 the next day.
- The vertical axis represents altitude from −30° to +90°.

The colored curve shows the object's altitude throughout the day.

The background of the graph represents the state of the sky and changes depending on the Sun's position. This helps identify when observations are possible.

The colors represent different sky conditions:  
- light blue — daytime
- darker blue — twilight
- dark blue / black — night

The color of the object's trajectory also reflects its altitude:  
- yellow – high in the sky (best visibility)
- orange – medium altitude
- red – close to the horizon
- purple – below the horizon (not visible)

A movable indicator allows you to explore the object's position at different times. When the indicator is moved, the current time, altitude, and azimuth values are updated.

Below the graph, important observation events are displayed: 
- **Rise** – when the object rises above the horizon.
- **Culmination** – when the object reaches its highest altitude.
- **Set** – when the object sets below the horizon.

The graph opens with the indicator positioned at the current system time. The location used for calculations is shown below the graph.

### Observation Schedule {#actions}

![Observation Schedule](@site/static/img/plugins/starwatcher/schedule.png)

The **Schedule** tab displays the visibility of the selected object for the current week. Each row represents one day and includes:  
- the day of the week
- the date
- rise time
- set time
- a small visibility graph for that day

The mini graph shows when the object is visible during the day and how its altitude changes. The colored section of the bar represents the period when the object is above the horizon.

You can navigate between weeks using the arrow buttons in the Schedule header. The calendar button allows you to return to the current week.

<!--
## Celestial Object Info {#celestial-object-info}

![Object info popup](@site/static/img/plugins/starwatcher/object-info_new.png)

Tap any **star, planet, constellation, or Sun/Moon** on the **Star map screen** or **map overlay** to view detailed information. Selected object  is highlighted on the Star map by a red circle marker, and its daily motion is visualized by an hour ring (00–23) showing where the object will be at each hour local time and the direction of movement.

**Displayed data:**
- **Azimuth**: Direction from North (0°-360°) where the object appears in the sky
- **Altitude**: Height above horizon (0° at horizon, 90° at zenith)
- **Magnitude**: Brightness scale (-26 for Sun to +6 for faint stars; lower = brighter)
- **Rise/Set times**: When the object rises above/sets below horizon
- **Distance** (planets): Average distance from Earth in AU/km

**Wikipedia integration**: Tap **"Wikipedia"** in the info popup to open the object's page in your browser (e.g. Sirius, Orion, Venus). Works offline for cached data, online for full articles.

**Long-press** celestial objects to **pin** them as map markers with live position updates, or **share** coordinates for group stargazing.

This feature helps identify objects in real sky, plan observations, and learn astronomy facts directly from OsmAnd.
-->

## AR Star Finding (Camera Mode) {#ar-star-finding}

**Go to:** *Enabled plugin → Menu → Star map → Camera button* 

The **Astronomy** layer works with your **device camera** to enable **Augmented Reality (AR) stargazing**. Point your phone camera at the real night sky and see stars, planets, constellations, Sun/Moon overlaid in real-time.

**How AR Star Finding works:**
- **Live camera view** shows real sky with transparent astronomical overlays aligned to horizon/compass.
- **Move camera** to scan sky — objects highlight when they appear in your field of view.
- **Tap highlighted objects** to see azimuth, altitude, magnitude, rise/set times, and Wikipedia link.
- **Compass calibration** required for accurate alignment (wave phone in figure-8 if needed).

The AR mode uses device sensors (gyroscope, accelerometer, and compass) to align celestial objects with the real sky.

**Perfect for:**
- Identifying faint stars/planets invisible to naked eye.
- Locating constellations by moving phone across sky.
- Real-time sky navigation during hikes or camping.


## Configure View {#configure-view}

![Configure View](@site/static/img/plugins/starwatcher/half_state_new.png) ![Configure View](@site/static/img/plugins/starwatcher/full_state.png)

**Configure View** allows you to control how the Star map is displayed by enabling or disabling visual modes, objects, and rendering aids.

To open Configure View, tap the Configure View button in the bottom-right corner of the Star map screen. The button is represented by a layer-style icon (stacked shapes), indicating display and layer settings. Configure View opens in a *Half state*, showing the main display options. Swipe the panel upwards to expand it into *Full state* and access all available settings. To close Configure View, swipe the panel downwards once to return to the Half state, swipe downwards again to close it completely, or tap anywhere on the map outside the panel. You also can tap the Close (X) button in the top-right corner of the panel.

### Modes and Actions {#modes-and-actions}

![Configure View](@site/static/img/plugins/starwatcher/view_with_map_new.png) ![Configure View](@site/static/img/plugins/starwatcher/red_filter_new.png)

This section controls the main display modes of the Star map.

- **2D / 3D**. Switches between a celestial path view (2D), which shows the sky as a projected dome with object paths, and a globe-style sky view (3D) representing the celestial sphere.
- **Map**. Enables an additional Earth map view displayed below the Star map, allowing you to relate celestial objects to your real geographic surroundings.
- **Red filter**. Applies a red color filter to the entire screen to reduce light pollution and preserve night vision during dark-sky observations.

### Visible Objects {#visible-objects}

![Configure View](@site/static/img/plugins/starwatcher/solar_system.png) ![Configure View](@site/static/img/plugins/starwatcher/constellations.png)

This section lets you choose which types of celestial objects are shown on the Star map.

| Object | Description |
|-------|-------------|
| Solar system | Displays the Sun, Moon, and visible planets. |
| Constellations | Shows constellation lines and patterns formed by stars. |
| Stars | Displays individual stars visible on the Star map. |
| Nebulas | Shows nebula objects where available. |
| Star clusters | Displays star clusters as separate celestial objects. |
| Deep sky | Toggles deep-sky objects such as galaxies, galaxy clusters, and black holes. |

### Personal Display Options {#personal-display-options}

**Personal display options** control additional visual aids related to user focus and observation.

| Option | Description |
|-------|-------------|
| Direction | Shows a directional indicator to help orient your view. |
| Daily path | Displays the daily path of selected celestial objects across the sky. |
| Favorites | Highlights or displays objects marked as favorites. |

### Rendering Aids {#rendering-aids}

**Rendering aids** add reference lines and grids to help orient the Star map.

| Aid | Description |
|-------|-------------|
| Azimuthal grid | Adds an azimuth-based grid for horizontal sky orientation. |
| Meridian line | Displays the meridian line crossing the sky from north to south. |
| Equatorial grid | Shows the celestial equatorial coordinate grid. |
| Ecliptic line | Displays the ecliptic line representing the apparent path of the Sun. |
| Equator line | Displays the Earth's equatorial projection on the celestial sphere, helping visualize the Earth's rotation relative to the sky. |
| Galactic line | Shows the plane of the Milky Way galaxy across the sky, indicating the main direction of the galactic disk. |


<!-- 
## Astronomy Settings

*Main Menu → Plugins → Star map → ⚙️ button*

Choose visible layers and objects

### Star Layers

All astronomical data appears as map overlays, visible at zoom scales 5-15. Layers project the celestial sphere onto the flat map.

| Layer | Description |
|-------|-------------|
| Stars | Bright stars (up to magnitude 4-6) with labels and constellation lines |
| Constellations | Connects stars into familiar patterns like Orion or Big Dipper |
| Planets | Positions and daily paths for Mercury-Venus-Mars-Jupiter-Saturn (colored icons) |
| Sun & Moon | Arcs showing rise/set times and illumination phase |
| Horizon | Line separating visible sky from ground, with cardinal directions |

-->


## Related Articles {#related-articles}

- [Interact with Map](../../user/map/interact-with-map.md)
- [Global Settings](../../user/personal/global-settings.md)
- [Vector Maps](../../user/map/vector-maps.md)


