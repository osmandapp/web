---
sidebar_position: 1
title:  Accessibility
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Overview

:::caution Note
This plugin is available only for the **Android version** of the OsmAnd app.  

The **[iOS Version](#how-to-use-ios)** uses the basic accessibility features of the system.
:::

Makes device accessibility features directly available in OsmAnd. The plugin allows blind and visually impaired people to take full advantage of the OsmAnd app's features. Accessibility plugin makes it easy to set speech speed for text pronunciation, customize navigation, zoom controls, and automatic announcements. [Learn more](https://www.android.com/accessibility/) about Android accessibility features.


### How To Use (Android)

![Accessibility](@site/static/img/plugins/Accessibility/access_turned_off.png)  

For the plugin to work, you need to go to Accessibility from the settings item on the app screen, or go directly through the system settings of the device, and select the required settings. To set individual parameters, [see here](#plugin-settings).  

- After enabling the plugin and enabling the Android Accessibility settings for your device, the map's reaction to gestures will be changed.

- The Android’s TalkBack screen reader will tell you in which situations to apply which gesture.

- The full **list of TalkBack gestures** can be viewed [here](https://support.google.com/accessibility/android/answer/6151827?hl=en&ref_topic=10601570#zippy=%2Cother%2Cbasic-navigation).

- All [OsmAnd gestures](../map/interact-with-map#gestures) used to interact with maps built into the app will also be available.

- All sound and haptic functions The OsmAnd app accessibility plugin remain running in the background when the screen is turned off or locked.  

- The following actions available by [tapping the compass button](../map/interact-with-map.md#map-orientation-and-compass):

   - **Single tap**. Rotates the map to the North in main mode.  
      *→*  &nbsp;This action corresponds to a **Double tap** in *TalkBack*.
   - **Long tap**. Opens the bottom sheet with orientations in main mode.  
      *→*  &nbsp;This action corresponds to a **Double tap and hold** in *TalkBack*.
   - **Double tap** to switch map orientation is not available in Accessibility mode.


### How To Use (iOS)

The iOS version of the OsmAnd app does not include an Accessibility plugin. However, the accessibility settings configured on your device will also work in the app.

- You can read general information about Vision Accessibility iOS features [here](https://www.apple.com/accessibility/vision/).

- On the iOS system, you can use a VoiceOver gesture-based screen reader. For a full list of VoiceOver gestures on iPhone, click [here](https://support.apple.com/en-gb/guide/iphone/iph3e2e2281/ios). To see lists of gestures and settings for other devices, follow this [link](https://support.apple.com/accessibility).

- All [OsmAnd gestures](../map/interact-with-map#gestures) used to interact with the maps built into the app will also be available.  


## Required Setup Parameters

To activate device's accessibility features in OsmAnd, you need to make the following settings:

1. Enable the [Accessibility plugin](../plugins/index.md#enable--disable) in the Plugins section of the *Main Menu*.  
2. Turn on accessibility mode on the Android system.
3. Make the necessary settings in the plugin's [Settings menu](#plugin-settings).

## Plugin Settings

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_accessibility,shared_string_settings"/>*

![Accessibility](@site/static/img/plugins/Accessibility/access_.png)  

The Accessibility plugin settings allow you to configure the application in accordance to your individual needs. All settings relate to the navigation process and are set individually for each [profile](../personal/profiles.md).

- **Accessibility Mode**. Enable special tools that help people with disabilities interact with the OsmAnd app. There are three modes: *On* - turns on the built-in OsmAnd features, *Off* - turns off all plugin features, and *According to the Android system settings* - turns on Android system settings.

- **Speech rate**. Adjust the speech rate of the text-to-speech, ranging from 50%  to 200%.

- **Smart autoannounce**. If enabled, you will receive voice announcements when you deviate from the set track.

- **Autoannounce period**. This is an automatic announcement of the direction and distance to your destination. You can select a minimal time between announcements, ranging from 5 seconds to 5 minutes.

- **Direction style**. Choose how the OsmAnd app will notify you about directions. *Sidewise* - indicates the direction to the sides of the world (8 directions), *Clockwise* - indicates directions oriented to the clock face (12 directions).

- **Audio directions**. Provides feedback when navigating by indicating the direction to the target point with sound.

- **Haptic directions**. This setting provides haptic feedback when navigating. The vibration indicates the direction to the target point and deviations from the path.


## Related Articles

- [Interact with Map](../../user/map/interact-with-map.md)
- [Global Settings](../../user/personal/global-settings.md)
- [Vector Maps (Map Styles)](../../user/map/vector-maps.md)

> *This article was last updated in May 2023*

