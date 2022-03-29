---
sidebar_position: 3
title:  Main menu
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/_buttonAndroidStore.mdx';
import AppleStore from '@site/src/components/_buttonAppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';

# Main menu
Main menu' is a primary list of options available to use in the application. It provides quick access to the profile configuration, global settings, search, personal data, navigation and other features.

The [Main menu](/docs/documentation/widgets/map-buttons#main-menu) icon '&#8801;' is located on the left bottom corner of the Map screen. In navigation mode this button is not visible by default. It appears after a short tap on the map. 

![Main menu Android](@site/static/img/menu/main_menu_android.png) 
![Main menu iOS](@site/static/img/menu/main_menu_ios.png)

## Main menu (Drawer)

### Features
* [Map markers](/docs/documentation/personal/markers) is a tool that allows to mark place on the map.
* [My places](//docs/documentation/personal/myplaces) is a menu that includes by default Favorites and tracks and in addition can include [A/V notes](/docs/documentation/plugins/audio-video-notes) and [OSM edits](/docs/documentation/plugins/osm-editing) (if such plugins are turned on). 
* [Search](/docs/documentation/search) (Android) is a tool that allows you to find the place or object that exist on the map.
* [Directions](/docs/documentation/widgets/map-buttons#directions) button allows to create a route and start navigation.
* [Configure map](/docs/documentation/map/configure-map-menu) is a menu that allows configuring map view.
* [Download maps](/docs/documentation/start-with/download-maps) is a menu that contains all files that could be downloaded.
* [Travel guides (Beta)](/docs/documentation/plan-route/travel-guides) (Android) is a tool that allows using Wikivoyage guide for your trip.
* [Plan route](/docs/documentation/plan-route/create-route) is a tool that allows you to measure distances on the map, create GPX tracks or add new segments to existing ones.
* [* Trip recording](/docs/documentation/plugins/trip-recording) (Android) is a tool that allows to record all movements into track using phone's GPS. 

### Settings
* [Configure screen](/docs/documentation/widgets/configure-screen) is a menu that allows configuring displaying widgets on the Map.
* [Plugins](/docs/documentation/plugins) is a list of additional functionality and advanced settings.
* [Settings](/docs/documentation/personal/global-settings) is a menu that allows configuring main app parameters.
- Help is a menu that provides quick access to a detailed explanation of the feature,  information about the app version and allows to fast contact the development team.

### Active Profile (Android)

Main menu provides quick access to switch and [customize profile](/docs/documentation/personal/profiles). Main purpose of profiles to have different application look & fill for navigation. Though you could use it to customize screen & widgets and switch profiles for different view purposes. All [settings](/docs/documentation/personal/profiles) are configured separately for each profile.

![profile_menu](@site/static/img/menu/profile_menu.png)

In this menu you can **switch** active profile, **configure** (change settings) for active profile or **manage** all application profiles.


### Customize (Android Advanced)

It is a menu where the user can reorder or hide items from the Drawer, to see hidden items from the menu, copy the list of items from the another profile and reset to default settings.

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,shared_string_drawer"/> →  &#65049; → Enable

<p> </p>

![Drawer menu items ](@site/static/img/settings/drawer_menu_correct.png)

The *bin on the left* side of the item will remove the item from the main list.
Spin up or down the *line on the right* will give an opportunity to move the item up or down along the list.

The items that was moved to the bin would be moved to the section 'Hidden' below. They and can be restored by clicking the green button on the left.

![Drawer menu hidden items ](@site/static/img/settings/drawer_menu_hidden_items.png)

