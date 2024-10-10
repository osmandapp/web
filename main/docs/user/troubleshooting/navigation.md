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


## Route Calculation

### Route calculation is slow

*Android*. OsmAnd uses two different **offline routing engines**: a *Java-based engine* and a *Native (C++) engine*.

- The *Java-based engine* is used in [*Safe Mode*](../plugins/development.md#safe), but it is approximately 10 times slower than the native engine. It also has strict memory limitations, which can lead to errors such as *Not enough memory to compute*. If you encounter this issue, navigate to *Plugins → OsmAnd development → Settings →* [*Safe Mode*](../plugins/development.md#safe) and ensure this option is disabled.
- The *Native (C++) engine* offers better performance, but its efficiency depends on your device’s memory and processor capabilities. Generally, native routing performs well for routes under 300 km, with route calculation times ranging from 15 seconds to 4 minutes. If the process takes longer than 4 minutes, it is advisable to stop, as the application may crash.


### How to calculate routes longer than 250km?

1. If the app does not show a route after 7-8 minutes of calculation time, consider [placing waypoints](../navigation/setup/route-navigation.md#route-recalculation) (pick e.g. places on motorways). 3-4 waypoints will be enough to calculate even 1000 km routes.

2. For Top-end devices you can increase memory up to 512 MB or 1024 MB - [Memory allocated devices](../plugins/development.md#memory-allocated-for-routing).

3. For Android version you can create a Navigation Profile with Online or Third-party routing (BRouter). Read more about it [here](../navigation/routing/brouter.md).

### Calculation of 50 km routes for pedestrians

If you are using the **Walking** profile in OsmAnd, the application may crash when calculating routes over 50 km. This issue occurs specifically when the [**Standard Routing A***](../navigation/guidance/navigation-settings.md#development-settings) is selected in the navigation settings. Several factors can contribute to this problem:

- The route length exceeds 50 km.
- The number of direct points on the route is greater than 1 million.
- You are using a mobile device to calculate the route, which is not recommended for routes of this length. Consider using the web version for better performance.

To avoid crashes with routes of similar distances, you may want to switch to other profile types like **Bicycle**.


## The Calculated Route does not Seem Correct

To track down issues with wrong or sub-optimum routes, please open a new posting in [Github discussions](https://github.com/osmandapp/OsmAnd/discussions) or [Github issue](https://github.com/osmandapp/Osmand/issues) and specify as detailed as possible the following information:

- What version of OsmAnd are you using, on what device?
- Do you use the offline maps offered within the OsmAnd app for download, or online (tile / raster) maps?
- If you use offline maps, tell us the exact name of the map file where the routing issue occurs, and its edition date.
- Tell us whether you have used OsmAnd's in-app offline routing, or any online routing provider like YOURS, OpenRouteService or OSRM.
- What routing profile is choosen in OsmAnd app (car, bike or pedestrian)?
- Please specify as exactly as possible the start and end point of your route. If possible, tell us city name and street name for each. Also a [Permalink](https://wiki.openstreetmap.org/wiki/Permalink) from openstreetmap.org can be helpful.
- Tell us your expected routing, and how OsmAnd routes.

## Road Information

### OsmAnd only shows some speed cams

Due to the geodata taken from the OpenStreetMap project there are by now two methods how speed cameras are integrated in the raw OSM data:

- A point (called "node" in OSM terminology) of a way is tagged with "highway=speed_camera", see OSM wiki at [highway=speed_camera](https://wiki.openstreetmap.org/wiki/Tag%3Ahighway%3Dspeed_camera)
- A group of OSM data elements are joined together in a so called "relation" that contains more elements than a single node to describe the direction that is covered by the speed trap. See [Relation:enforcement](https://wiki.openstreetmap.org/wiki/Relation:enforcement).

Currently, OsmAnd can only make use of the elements that consists of a single node. Analyzing of relations is to come in a future release.


## Voice Navigation

### Why should I use a TTS voice, not a recorded voice

**Text-to-Speech (TTS)** voices synthesize prompts from any specified text "on the fly," allowing them to pronounce dynamic information such as street names, place names, and highway numbers. In contrast, **recorded voices** are limited to playing combinations of pre-recorded snippets and cannot pronounce specific names or numbers.

For this reason, we recommend using a **TTS voice** in OsmAnd, as it offers more flexibility and is regularly updated by developers to include the latest features.

To use TTS, your device must have a TTS engine installed. Many systems come with a TTS engine pre-installed, but they can also be added manually if needed. You can find a [list of supported TTS engines and languages for Android here](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

For detailed instructions on setting up and adjusting Voice Prompts, refer to the [Voice Navigation Setup Guide](../navigation/guidance/voice-navigation.md).


### TTS does not function properly

*Text-to-Speech (TTS)* issues will usually have to be fixed in your **Android configuration and settings**, not within the OsmAnd app.

To use TTS, your device needs to have TTS engine installed. Select or install a TTS engine via your **Android device settings**. Often, one TTS engine is already pre-installed on each device (e.g. google, Samsung, Pico), but another engine can be installed if needed. [Here](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/) is a compilation of supported engines and languages for Android.

A TTS engine often supports several languages, so one must be selected to be used. Also, to improve the voice quality: Some TTS engines come pre-installed with only a set of basic-quality pronunciation packages, and then facilitate downloading higher quality voices per language language.

If you have issues with the TTS voice guidance:

- First check if you have a TTS engine installed on your Android device which supports the language you want (i.e. offers it for selection in its options). To do this, find and select the language you want in the Android (not OsmAnd) settings, often located under "Language and Input / Text-to-speech options".
- Then use the test button usually provided there to "Listen to an example". You should hear a test announcement in the correct language and pronunciation.
- Once this works, finally go to OsmAnd's [General settings / Voice guidance and there select the corresponding TTS language](../navigation/guidance/voice-navigation.md#settings-of-voice-prompts).  
  - Please note that the language list OsmAnd initially displays can be extended by tapping the "Install more..." option.


## Other

### Navigation stops while screen is off

- [The same issue](../troubleshooting/track-recording-issues.md#the-system-may-kill-background-apps-to-save-power) with track recording in the background.
