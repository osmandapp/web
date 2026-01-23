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
2. Use **Menu → Star map** to open dedicated screen with star sky, settings and time controls
3. Select **time and date** using sliders or buttons on the Star map screen
4. Adjust **visibility and transparency** in the "Star map" menu settings.

The plugin works with both Map rendering engines but performs best in OpenGL mode.

## Star Map Screen

**Go to:** *Enabled plugin → Menu → Star map* 

![Star map screen](@site/static/img/plugins/starwatcher/view.png)

The dedicated **Star map screen** shows interactive celestial dome with stars, constellations, planets, Sun and Moon paths. At the bottom is a **toolbar** with time/date sliders, day buttons and quick toggles for layers like horizon line or labels.


- The screen renders the full sky hemisphere above your location, aligned with compass direction
- Tap celestial objects for details like magnitude, rising/setting times or paths



## Celestial Object Info

Tap any **star, planet, constellation, or Sun/Moon** on the **Star map screen** or **map overlay** to view detailed information.

![Object info popup](@site/static/img/plugins/starwatcher/object-info.png)

**Displayed data:**
- **Azimuth**: Direction from North (0°-360°) where the object appears in the sky
- **Altitude**: Height above horizon (0° at horizon, 90° at zenith)
- **Magnitude**: Brightness scale (-26 for Sun to +6 for faint stars; lower = brighter)
- **Rise/Set times**: When the object rises above/sets below horizon
- **Distance** (planets): Average distance from Earth in AU/km

**Wikipedia integration**: Tap **"Wikipedia"** in the info popup to open the object's page in your browser (e.g. Sirius, Orion, Venus). Works offline for cached data, online for full articles.

**Long-press** celestial objects to **pin** them as map markers with live position updates, or **share** coordinates for group stargazing.

This feature helps identify objects in real sky, plan observations, and learn astronomy facts directly from OsmAnd.


## AR Star Finding (Camera Mode)

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


## Related Articles {#related-articles}

- [Interact with Map](../../user/map/interact-with-map.md)
- [Global Settings](../../user/personal/global-settings.md)
- [Vector Maps (Map Styles)](../../user/map/vector-maps.md)


