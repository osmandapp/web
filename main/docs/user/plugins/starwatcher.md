---
sidebar_position: 14
title:  Star Watcher
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
**Star Watcher** is currently in **beta**.
:::

## Overview {#overview}

The Star Watcher plugin shows the star sky overlay on the map with stars, constellations, Sun, Moon and planets. The positions and paths of Sun, Moon, planets and major stars are shown on the map.


## Required Setup Parameters {#required-setup-parameters}
  
The following settings are required to display Star Watcher overlay:

1. Enable [**Star Watcher** plugin](../plugins/index.md#enable--disable) from the *Plugins* section of the *Main Menu*
2. Use **Menu → Star map** to open dedicated screen with star sky, settings and time controls.
3. Select **time and date** using the controls on the Star map screen.
4. Adjust what is shown on the Star map using [**Configure View**](#configure-view) — for example, toggle visible objects and rendering aids.
5. Tap the **Close (X)** button at the top of the Star map screen to exit Star map and return to the Earth map.

The plugin works with both Map rendering engines but performs best in OpenGL mode.

## Star Map Screen {#star-map-screen}

**Go to:** *Enabled plugin → Menu → Star map* 

![Star map screen](@site/static/img/plugins/starwatcher/view_new.png)

The dedicated **Star map screen** shows interactive celestial dome with stars, constellations, planets, Sun and Moon paths. At the bottom of the screen, you can access the following controls: 
- **Search** — opens a search panel with an input field where you can type an object name. Below the field, there is a list of suggested objects in alphabetical order. You can switch the sorting between A–Z and Z–A. 
- **Time and date** — lets you change the date and time to observe the sky at different moments in the past or future. This is useful for planning observations, tracking object movement, or learning how the sky changes over time. If you set a custom date/time, the chip shows the full date and time, and a reset button appears next to it to return to the current system time.
- [**Configure View**](#configure-view).

The screen renders the full sky hemisphere above your location, aligned with compass direction. The Star map can be rotated manually. Manual rotation of the Star map does not affect the orientation of the Earth map. The Earth map always follows the [map orientation mode](../map/interact-with-map.md#map-orientation-modes) selected in your settings. Tap celestial objects for details like magnitude, rising/setting times or paths.


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


## AR Star Finding (Camera Mode) {#ar-star-finding}

**Go to:** *Enabled plugin → Menu → Star map → Camera button* 

The **Star Watcher** layer works with your **device camera** to enable **Augmented Reality (AR) stargazing**. Point your phone camera at the real night sky and see stars, planets, constellations, Sun/Moon overlaid in real-time.

**How AR Star Finding works:**
- **Live camera view** shows real sky with transparent astronomical overlays aligned to horizon/compass
- **Move camera** to scan sky — objects highlight when they appear in your field of view
- **Tap highlighted objects** to see azimuth, altitude, magnitude, rise/set times, and Wikipedia link
- **Compass calibration** required for accurate alignment (wave phone in figure-8 if needed)

**Perfect for:**
- Identifying faint stars/planets invisible to naked eye
- Locating constellations by moving phone across sky
- Real-time sky navigation during hikes or camping


## Configure View {#configure-view}

![Configure View](@site/static/img/plugins/starwatcher/half_state.png) ![Configure View](@site/static/img/plugins/starwatcher/full_state.png)

**Configure View** allows you to control how the Star map is displayed by enabling or disabling visual modes, objects, and rendering aids.

To open Configure View, tap the Configure View button in the bottom-right corner of the Star map screen. The button is represented by a layer-style icon (stacked shapes), indicating display and layer settings. Configure View opens in a *Half state*, showing the main display options. Swipe the panel upwards to expand it into *Full state* and access all available settings. To close Configure View, swipe the panel downwards once to return to the Half state, swipe downwards again to close it completely, or tap the Close (X) button in the top-right corner of the panel.

### Modes and Actions {#modes-and-actions}

![Configure View](@site/static/img/plugins/starwatcher/view_with_map.png) ![Configure View](@site/static/img/plugins/starwatcher/red_filter.png)

This section controls the main display modes of the Star map.

- **2D / 3D**. Switches the Star map between a flat (2D) view and a globe-like (3D) view.
- **Map**. Enables an additional Earth map view displayed below the Star map, helping you relate celestial objects to your geographic location.
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
| Galaxy equator | Shows the equatorial plane of the Milky Way galaxy. |


<!-- 
## Star Watcher Settings

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


