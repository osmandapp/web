---
sidebar_position: 3
title:  Navigation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Route Calculation {#route-calculation}

### Route calculation is slow {#route-calculation-is-slow}

*Android*. OsmAnd uses two different **offline routing engines**: a *Java-based engine* and a *Native (C++) engine*.

- The *Java-based engine* is used in [Safe Mode](../plugins/development.md#overview), but it is approximately 10 times slower than the native engine. It also has strict memory limitations, which can lead to errors such as *Not enough memory to compute*. If you encounter this issue, navigate to *Plugins → OsmAnd development → Settings →* [*Safe Mode*](../plugins/development.md#overview) and ensure this option is disabled.
- The *Native (C++) engine* offers better performance, but its efficiency depends on your device’s memory and processor capabilities. Generally, native routing performs well for routes under 300 km, with route calculation times ranging from 15 seconds to 4 minutes. If the process takes longer than 4 minutes, it is advisable to stop, as the application may crash.


### How to calculate routes longer than 250km? {#how-to-calculate-routes-longer-than-250km}

1. If the app does not show a route after 7-8 minutes of calculation time, consider [placing waypoints](../navigation/setup/route-navigation.md#route-recalculation) (pick e.g. places on motorways). 3-4 waypoints will be enough to calculate even 1000 km routes.

2. For Top-end devices you can increase memory up to 512 MB or 1024 MB - [Memory allocated devices](../plugins/development.md#memory-settings).

3. For Android version you can create a Navigation Profile with Online or Third-party routing (BRouter). Read more about it [here](../navigation/routing/brouter.md).

### Calculation of 50 km routes for pedestrians {#calculation-of-50-km-routes-for-pedestrians}

If you are using the **Walking** profile in OsmAnd, the application may crash when calculating routes over 50 km. This issue occurs specifically when the [**Standard Routing A***](../navigation/guidance/navigation-settings.md#development-settings) is selected in the navigation settings. Several factors can contribute to this problem:

- The route length exceeds 50 km.
- The number of direct points on the route is greater than 1 million.
- You are using a mobile device to calculate the route, which is not recommended for routes of this length. Consider using the web version for better performance.

To avoid crashes with routes of similar distances, you may want to switch to other profile types like **Bicycle**.


## The Calculated Route does not Seem Correct {#the-calculated-route-does-not-seem-correct}

To track down issues with wrong or sub-optimum routes, please open a new posting in [Github discussions](https://github.com/osmandapp/OsmAnd/discussions) or [Github issue](https://github.com/osmandapp/Osmand/issues) and specify as detailed as possible the following information:

- What version of OsmAnd are you using, on what device?
- Do you use the offline maps offered within the OsmAnd app for download, or online (tile / raster) maps?
- If you use offline maps, tell us the exact name of the map file where the routing issue occurs, and its edition date.
- Tell us whether you have used OsmAnd's in-app offline routing, or any online routing provider like YOURS, OpenRouteService or OSRM.
- What routing profile is choosen in OsmAnd app (car, bike or pedestrian)?
- Please specify as exactly as possible the start and end point of your route. If possible, tell us city name and street name for each. Also a [Permalink](https://wiki.openstreetmap.org/wiki/Permalink) from openstreetmap.org can be helpful.
- Tell us your expected routing, and how OsmAnd routes.

## Road Information {#road-information}

### OsmAnd only shows some speed cams {#osmand-only-shows-some-speed-cams}

Due to the geodata taken from the OpenStreetMap project there are by now two methods how speed cameras are integrated in the raw OSM data:

- A point (called "node" in OSM terminology) of a way is tagged with "highway=speed_camera", see OSM wiki at [highway=speed_camera](https://wiki.openstreetmap.org/wiki/Tag%3Ahighway%3Dspeed_camera)
- A group of OSM data elements are joined together in a so called "relation" that contains more elements than a single node to describe the direction that is covered by the speed trap. See [Relation:enforcement](https://wiki.openstreetmap.org/wiki/Relation:enforcement).

Currently, OsmAnd can only make use of the elements that consists of a single node. Analyzing of relations is to come in a future release.


## Voice Navigation {#voice-navigation}

### Why should I use a TTS voice instead of a recorded voice? {#why-should-i-use-a-tts-voice-instead-of-a-recorded-voice}

**Text-to-Speech (TTS)** voices generate spoken prompts dynamically, allowing them to pronounce street names, place names, and highway numbers. In contrast, **recorded voices** are limited to pre-recorded phrases and cannot pronounce specific names or numbers.

*Advantages of TTS over recorded voices:*

- Pronounces street names and dynamic information.
- Regularly updated with new features.
- Offers better flexibility for navigation.

To use TTS in OsmAnd, your device must have a **TTS engine** installed. Many devices come with a pre-installed TTS engine, but additional ones can be manually installed if needed. [List of supported TTS engines and languages for Android](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

For detailed instructions on setting up and adjusting Voice Prompts, refer to: [Voice Navigation Setup Guide](../navigation/guidance/voice-navigation.md).

### TTS does not function properly? Follow these steps to fix it {#tts-does-not-function-properly-follow-these-steps-to-fix-it}

Issues with **Text-to-Speech (TTS)** are typically related to **Android system settings**, not the OsmAnd app itself.  

1. Ensure a TTS engine is installed.

    - Open *Device Settings → Language & Input → Text-to-Speech Options*.
    - Check if a **TTS engine** is installed (e.g., Google TTS, Samsung TTS, Pico).
    - If no engine is installed, select *“Install more…”* and download a compatible one.
    - [List of supported TTS engines and languages.](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/)

2. Verify TTS language settings.

    - Select the language you want to use in *Android Settings → Text-to-Speech Options*.
    - Tap *“Listen to an example”* to test if the TTS engine is working.
    - If you don’t hear anything, update or reinstall the TTS engine.

3. Adjust OsmAnd voice navigation settings.

    - Open *OsmAnd → Menu → Configure Profile → Navigation Settings → Voice Prompts*.
    - Select a compatible *Language → TTS*.
    - Test the voice prompts by navigating to *Menu → Plugins → Enable OsmAnd Development → Settings → Test Voice Prompts*.

#### Additional Steps {#additional-steps}

- *Update Google TTS*. Open Google Play Store, search for **Google Text-to-Speech**, and update it.  
- *Simulate Navigation*. Tap *Navigation button → Settings → Simulate Navigation* to check if voice guidance plays.  
- *Reinstall OsmAnd*:  
   - **Back up settings:** *Menu → Settings → Export to File*.  
   - Uninstall OsmAnd, then reinstall it from the app store.  
   - Restore settings: *Menu → Settings → Import File*.

For additional troubleshooting, visit:

- [Voice Navigation Guide](../navigation/guidance/voice-navigation.md)  
- [Import/Export Settings](../personal/import-export.md)  


## Other {#other}

### Navigation stops while screen is off {#navigation-stops-while-screen-is-off}

- [The same issue](../troubleshooting/track-recording-issues.md#overview) with track recording in the background.
