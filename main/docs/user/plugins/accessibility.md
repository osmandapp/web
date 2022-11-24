---
sidebar_position: 12
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

<InfoIncompleteArticle/>  


:::caution Android only
This plugin is available only for the **Android version** of OsmAnd app but there basic **Accessibility** features are supported in **[iOS Version](#how-to-use-ios)**.
:::


The Accessibility plugin allows you to use Accessibility Android features that are in your device's system settings directly in the OsmAnd app.  


## Overview  

Makes device accessibility features directly available in OsmAnd. The plugin allows blind and visually impaired people to take full advantage of the OsmAnd app's features. Accessibility plugin makes it easy to set speech speed for text pronunciation, customize navigation, zoom controls, and automatic announcements. [Learn more](https://www.android.com/accessibility/) about Android accessibility features.


### How to use (Android)

For the plugin to work, you need to go to Accessibility from the settings item on the app screen, or go directly through the system settings of the device, and select the required settings. To set individual parameters, [see here](#plugin-settings).  

After enabling the plugin and enabling the Android Accessibility settings for your device, the map's reaction to gestures will be changed. The Screen reader will tell you in which situations to apply which gesture. 

**Key features**:

- A long tap on the map displays a context menu referring not to the tap point but to the location point of the map.
- The map is moved with two fingers.
- A single tap on a graphical interface element gives information about it, and a double tap makes an action.  
 
![Accessibility](@site/static/img/plugins/Accessibility/access_turned_off.png)  

:::info NOTE
All sound and haptic functions The OsmAnd app accessibility plugin remain running in the background when the screen is turned off or locked.
:::

### How to use (iOS)

Main key feature for iOS.

## Setup 

To activate device's accessibility features in OsmAnd, you need to make the following settings:  

1. Enable the [Accessibility plugin](../plugins/index.md#enable--disable) in the Plugins section of the Main menu.  
2. Turn on accessibility mode on the Android system.   
3. Make the necessary settings in the plugin's [Settings menu](#plugin-settings).

## Plugin settings

To go to the Accessibility plugin settings, follow this path:  
*<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_accessibility,shared_string_settings"/>*   

![Accessibility](@site/static/img/plugins/Accessibility/access_.png)  

The Accessibility plugin settings allow you to configure the application in accordance to your individual needs. All settings relate to the navigation process and are set individually for each [profile](../personal/profiles.md). 
- **Accessibility Mode**. Allows you to enable special tools that help people with disabilities interact with the OsmAnd app. There are three modes: *On* - turns on the built-in OsmAnd features, *Off* - turns off all plugin features, and *According to the Android system settings*  - turns on Android system settings.  
- **Speech rate**. Allows you to adjust the speech rate of the text-to-speech, ranging from 50%  to 200%.  
- **Smart autoannounce**. If this setting is enabled, you will receive voice announcements when you deviate from the set track.  
- **Autoannounce period**. This is an automatic announcement of the direction and distance to your destination. You can select a minimal time between announcements, ranging from 5 seconds to 5 minutes.  
- **Direction style**. Allows you to choose how the OsmAnd app will notify you about directions. *Sidewise* - indicates the direction to the sides of the world (8 directions), *Clockwise* - indicates directions oriented to the clock face (12 directions).  
- **Audio directions**. Provides feedback when navigating by indicating the direction to the target point with sound.
- **Haptic directions**. This setting provides haptic feedback when navigating. The vibration indicates the direction to the target point and deviations from the path.  

