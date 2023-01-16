---
sidebar_position: 6
title:  Voice navigation
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

Receive voice prompts while navigating: turn-by-turn instructions, alerts, and additional information.  


## How to use

Voice navigation helps you drive your vehicle in the right direction without distracting you from the road.

- Listen to voice prompts while navigating.
- You can listen to the voice prompts while the device screen is *On* or *Off*.
- If you miss a voice prompt, you can listen to it again by tapping the needed arrow in the navigation.
- Background navigation - audio.


## Settings of voice prompts

You can receive voice prompts while navigating. You can enable them in the [Navigation](../navigation/route-navigation.md#navigation-options) section by tapping on Settings, and also turn them on and configure them in the Main menu section of the selected profile.    

1. **Language** - select your preferred language and voice type.
2. **Announce** - allows to voice the following types:
- Street names (TTS).
- Exit number.
- Traffic warnings.
- Pedestrian crosswalks.
- [Speed cameras](#speed-cameras). 
- Tunnels.   
:::note
You can enable the [Alert widget](../widgets/nav-widgets.md#alert-widget) for this category for more convenient use of voice prompts.
:::  
3. **User point**:
- Track waypoints.
- Nearby Favorites.
- Nearby POI.
4. **Speed limit**:
- Announce when exceeded - allows you to announce when you exceed the allowed speed limit.
- Speed limit tolerance (from -10 km/h to 20 km/h) - select the speed limit above which you will receive a voice warning.
5. **Other**:
- Announce GPS signal loss and recovery.
- Announce route recalculation.
6. **Options**:
- Repeat navigation instructions - aallows you to repeat the navigation instructions at regular intervals from 1 min to 30 min) or manually only [(tap arrow)](../widgets/nav-widgets.md#next-turns).
- [Announcement time](#announcement-time).
7. **Output**:
- Voice guidance output - allows you to select the loudspeaker for voice prompts: Audio multimedia/navigation, Audio notification, and Audio phone call (to interrupt Bluetooth car stereos).
- Pause music - voice prompts stop music playback for a while. 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*

![Voice Navigation settings Android](@site/static/img/navigation/voice/voice_promt-settings.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="menu,sett_settings,app_profiles,sett_settings,routing_settings_2,voice_announces"/>*

![Voice Navigation settings iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

:::info info
Voice prompt settings can be global and applied to all profiles.
:::

### Speed cameras

[Speed cameras alerts](../personal/global-settings.md#uninstall-speed-camera) in some countries is prohibited by the law. [Go back to settings](#settings-of-voice-prompts).  

![Voice Navigation announcement timing Android](@site/static/img/navigation/voice/voice_promt-speed-cameras.png)

### Announcement time

The announcement time of the different voice prompts depends on the type of prompt, the current navigation speed and the default navigation speed. [Go back to settings](#settings-of-voice-prompts).  

![Voice Navigation announcement timing Android](@site/static/img/navigation/voice/voice_promt-announ-time.png)  


## Download voice prompts

<InfoAndroidOnly />  

You can download voice prompts from two different sets from the list.  
- The first type, these are the recommended ones:  
*<Translate android="true" ids="shared_string_menu,welmode_download_maps,other_location,index_name_tts_voice"/>*

![Voice Navigation settings Android](@site/static/img/navigation/voice/TTS-preferred-1.png)  ![Voice Navigation settings Android](@site/static/img/navigation/voice/TTS-preferred-2.png)  

- The second type is recorded voice prompts, with an incomplete set of features:  
*<Translate android="true" ids="shared_string_menu,welmode_download_maps,index_name_voice"/>*  

![Voice Navigation settings Android](@site/static/img/navigation/voice/TTS-recorded.png)  


## TTS (text-to-speech)

If you choose TTS voice, you need to have an appropriate [text-to-speech engine](https://en.wikipedia.org/wiki/Speech_synthesis) in your operating system. They are partly included in Android, and iOS or can be installed separately. Go to [the settings of your Android (device)](https://support.google.com/accessibility/android/answer/6006983), find the section *Language and keyboard*, Text-to-speech or similar. Select or install the engine, then also set up support for the language you want, this can be an additional setting or a small download.  

Check if your Android TTS is working properly by using the "Listen to example" or a similar test button. You can also check if OsmAnd voice prompts are selected correctly, to do this go to *Settings → Plugins → OsmAnd development → Test voice prompts* (to see this setting, the OsmAnd development plugin must be activated). To disable voice prompts, go to *Profile Settings → Navigation Settings → Voice Prompts → Voice Guidance* and select 'Do not use'. 


## Testing of voice prompts

<InfoAndroidOnly />  

For testing Voice prompts, you need to activate [OsmAnd development plugin](../plugins/development.md) and start the function ["Test voice prompts"](../plugins/development/#application-testing).

