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

<InfoIncompleteArticle/>

## Route calculation
### Route calculation is slow 

**Android**: Please be aware that there are 2 offline routing engines in the app: a Java based approach and a "Native" (C++) routing. The Java based approach is used in ['Safe Mode'](../plugins/development.md#safe), it is 10 times slower than native mode and it has strict memory limitations. If you experience it and you see messages 'Not enough memory to compute', please go to Plugins → OsmAnd development → Settings → ['Safe Mode'](../plugins/development.md#safe) and make sure the option is disabled.

For native routing there are different limitations for different phones, depending on memory &amp; processor. In general, native routing should handle &lt; 300 km routes nicely. The route calculation should take between 15 sec and 4 minutes. It is prudent to not wait much longer than 4 minutes, because most likely the program will crash.

### How to calculate routes longer than 250km?

1. If the app does not show a route after 7-8 minutes of calculation time, consider [placing waypoints](../navigation/setup/route-navigation.md#route-recalculation) (pick e.g. places on motorways). 3-4 waypoints will be enough to calculate even 1000km routes.

2. For Top-end devices you can increase memory up to 512 MB or 1024 MB - [Memory allocated devices](../plugins/development.md#memory-allocated-for-routing).

3. For Android version you can create a Navigation Profile with Online or Third-party routing (BRouter). Read more about it [here](../navigation/routing/brouter.md).

## The calculated route does not seem correct

To track down issues with wrong or sub-optimum routes, please open a new posting in [Github discussions](https://github.com/osmandapp/OsmAnd/discussions) or [Github issue](https://github.com/osmandapp/Osmand/issues) and specify as detailed as possible the following information:

- What version of OsmAnd are you using, on what device?
- Do you use the offline maps offered within the OsmAnd app for download, or online (tile / raster) maps?
- If you use offline maps, tell us the exact name of the map file where the routing issue occurs, and its edition date.
- Tell us whether you have used OsmAnd's in-app offline routing, or any online routing provider like YOURS, OpenRouteService or OSRM.
- What routing profile is choosen in OsmAnd app (car, bike or pedestrian)?
- Please specify as exactly as possible the start and end point of your route. If possible, tell us city name and street name for each. Also a [Permalink](https://wiki.openstreetmap.org/wiki/Permalink) from openstreetmap.org can be helpful.
- Tell us your expected routing, and how OsmAnd routes.

## Road information
### OsmAnd only shows some speed cams

Due to the geodata taken from the OpenStreetMap project there are by now two methods how speed cameras are integrated in the raw OSM data:
- A point (called "node" in OSM terminology) of a way is tagged with "highway=speed_camera"), see OSM wiki at [highway=speed_camera](https://wiki.openstreetmap.org/wiki/Tag%3Ahighway%3Dspeed_camera)
- A group of OSM data elements are joined together in a so called "relation" that contains more elements than a single node to describe the direction that is covered by the speed trap. See [Relation:enforcement](https://wiki.openstreetmap.org/wiki/Relation:enforcement).

Currently, OsmAnd can only make use of the elements that consists of a single node. Analyzing of relations is to come in a future release.


## Voice navigation

### What is the difference between TTS (text to speech) and recorded voices?

TTS (text to speech) synthesizes any voice prompt just from a specified text "on the fly", while recorded voices depend on combining every command from a set of snippets pre-recorded from a human voice.

In OsmAnd, we recommend using a synthesized (TTS) voice. They are better maintained by the project developers to provide the latest feature set. Since they are more flexible, they are e.g. able to also pronounce street names or highway numbers (OsmAnd version 1.5.1 and newer), which pre-recorded voices can not. TTS prompts may on some devices sound a bit more "robotic", and the selection of languages actually supported on your device is more limited. Both what languages are supported and their voice quality strictly depend on the TTS engine installed on your device, not on OsmAnd. See also next section "TTS does not function
properly".

We suggest that recorded voices should only be a fallback if you **really** like a particular voice, or if you cannot find a TTS engine supporting your language. Many 'recorded' voices have significant shortcomings like gaps and unnatural intonation, and some phrases may be missing entirely, where for a maintenance like adding new commands we could not get access to the original speakers any more.

Read more about Voice prompts:
- [Voice guidance](../navigation/guidance/voice-navigation.md)
- [Adjusting voice prompts](../navigation/guidance/voice-navigation.md#settings-of-voice-prompts)
- [TTS does not function properly](../troubleshooting/navigation.md#tts-does-not-function-properly)

### TTS does not function properly

Text-to-Speech (TTS) issues will usually have to be fixed in your **Android configuration and settings**, not within the OsmAnd app!

Which TTS languages are supported on your device and the sound quality of each TTS voice strictly depends on the TTS engine you select (or install) via your **Android device settings**. There is usually one TTS engine pre-installed on each device (e.g. google, Samsung, Pico). An additional 3rd party engine (see below) can be installed if needed.

A TTS engine often supports several languages, but one needs to be selected as the one to be used. To improve the voice quality: Some TTS engines come pre-installed with only a set of basic-quality pronunciation packages for the languages they support, and then faciliate downloading a high-quality package for the very language you actually select to be used.

If you have issues with the TTS voice guidance:

-   First check if you have a TTS engine installed on your Android device which supports the language you want (i.e. offers it for selection in its options). To do this, find and select the language you want in the Android (not OsmAnd) settings, often located under "Language and Input / Text-to-speech options".
-   Then use the test button usually provided there to "Listen to an example". You should hear a test announcement in the correct language and pronunciation.
-   Once this works, finally go to OsmAnd's [General settings / Voice guidance and there select the corresponding TTS language](../navigation/guidance/voice-navigation.md#settings-of-voice-prompts).
	(Please note that the language list OsmAnd initially displays can be extended by tapping the "Install more..." option.)

It is a known issue that many pre-installed TTS engines may not support less widely spoken languages (even though the number of languages supported is growing). You can always try to find a 3rd party TTS engine
supporting the language you are looking for: Install it on your device, and follow the above procedure. This should then provide TTS support for this language. Some of the more prominent TTS engines are:

-   [SVOX](https://play.google.com/store/apps/details?id=com.svox.classic)
-   [IVONA](https://play.google.com/store/apps/developer?id=IVONA+Text-to-Speech)
-   [eSpeak](https://play.google.com/store/apps/details?id=com.googlecode.eyesfree.espeak)

## Other

### Navigation stops while screen is off

- [The same issue](../troubleshooting/track-recording-issues.md#the-system-may-kill-background-apps-to-save-power) with track recording in the background.
