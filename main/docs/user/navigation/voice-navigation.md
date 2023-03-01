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

Voice navigation helps you drive your vehicle in the right direction without distracting you from the road. It is also convenient for walking or hiking.

- Listen to voice prompts while navigating.
- You can listen to the voice prompts while the device screen is *On* or *Off*.
- If you missed a voice prompt, you can listen to it again by tapping the needed arrow in the navigation.
- Background navigation - you can use the device and listen to prompts in the background at the same time.


## Settings of voice prompts

You can enable voice prompts in the [Navigation](../navigation/route-navigation.md#navigation-options) section by tapping *Settings*. Alternatively, you can turn on and configure voice prompts in the Main menu section of the selected profile.   

:::info info
Voice prompt settings can be global and applied to all profiles.
:::

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

1. **Language** - select your preferred language and voice type.
2. **Announcement group** - allows to voice the following types of prompts: 
    - *Street names (TTS), Exit number, Traffic warnings, Pedestrian crosswalks, Tunnels.*
    - *[Speed cameras](#speed-cameras)*. 
 
:::note
You can enable the [Alert widget](../widgets/nav-widgets.md#alert-widget) for this category for more convenient use of voice prompts.
:::  

3. **User points group**: 
    - *Track waypoints, Nearby Favorites, Nearby POI*.
4. **Speed limit group**:
    - *Announce when exceeded* - allows you to announce when you exceed the allowed speed limit.
    - *Speed limit tolerance* (from -10 km/h to 20 km/h) - select the speed limit above which you will receive a voice warning.
5. **Other**: 
    - *Announce GPS signal loss and recovery, Announce route recalculation*.
6. **Options**:
    - *Repeat navigation instructions* - allows you to repeat the navigation instructions at regular intervals from 1 min to 30 min) or manually only [(tap arrow)](../widgets/nav-widgets.md#next-turns).
    - *[Announcement time](#announcement-time)*.
7. **Output**:
    - *[Voice guidance output](#voice-guidance-output)*.
    - *Pause music* - voice prompts stop music playback for a while.   


### Voice guidance output 

This setting allows you to select the loudspeaker for voice prompts.  
   - Media/navigation audio.
   - Notification audio.
   - Phone call audio (to interrupt Bluetooth [car stereos](../navigation/auto-car)).

![Voice Navigation Android](@site/static/img/navigation/voice/voice_promt-1.png)

### Speed cameras

[Speed cameras alerts](../personal/global-settings.md#uninstall-speed-camera) in some countries is prohibited by the law.  

![Voice Navigation announcement timing Android](@site/static/img/navigation/voice/voice_promt-speed-cameras.png)

### Announcement time

The announcement time of the different voice prompts depends on the type of prompt, the current navigation speed and the default navigation speed. You can choose how soon you want to receive the arrival announcement, see the table. And for more information, see the article [Voice Prompts in Navigation](https://osmand.net/docs/technical/algorithms/voice-prompt-triggering).      

**<Translate android="true" ids="arrival_distance" />** | Distance multiplier
--- | --- 
**<Translate android="true" ids="arrival_distance_factor_early" />** | 1.5
**<Translate android="true" ids="arrival_distance_factor_normally" />** | 1
**<Translate android="true" ids="arrival_distance_factor_late" />** | 0.5
**<Translate android="true" ids="arrival_distance_factor_at_last" />** | 0.25  

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

Check if your Android TTS is working properly by using the "Listen to example" or a similar test button. You can also check if OsmAnd voice prompts are selected correctly, to do this go to *Settings → Plugins → OsmAnd development → Test voice prompts* (to see this setting, the OsmAnd development plugin must be activated).   

Additional information can be found in the [Troubleshooting](../troubleshooting/navigation#voice-navigation) section.  


## Testing of voice prompts

<InfoAndroidOnly />  

For testing Voice prompts, you need to activate [OsmAnd development plugin](../plugins/development.md) and start the function ["Test voice prompts"](../plugins/development/#application-testing).

