---
sidebar_position: 3
title:  Main menu
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';


# Main menu
Main menu' is a primary list of options available to use in the application. It provides quick access to the profile configuration, global settings, search, personal data, navigation and other features.

The [Main menu](../widgets/map-buttons.md#main-menu) icon '&#8801;' is located on the left bottom corner of the Map screen. In navigation mode this button is not visible by default. It appears after a short tap on the map. 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Main menu Android](@site/static/img/menu/main_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Main menu iOS](@site/static/img/menu/main_menu_ios.png)

</TabItem>

</Tabs>


## Main menu (Drawer)

### Features
* [Map markers](../personal/markers.md) is a tool that allows to mark place on the map.
* [My places](../personal/myplaces.md) is a menu that includes by default Favorites and tracks and in addition can include [A/V notes](../plugins/audio-video-notes.md) and [OSM edits](../plugins/osm-editing.md) (if such plugins are turned on). 
* [Search](../search/index.md) (Android) is a tool that allows you to find the place or object that exist on the map.
* [Directions](../widgets/map-buttons.md#directions) button allows to create a route and start navigation.
* [Configure map](../map/configure-map-menu.md) is a menu that allows configuring map view.
* [Download maps](../start-with/download-maps.md) is a menu that contains all files that could be downloaded.
* [Travel guides (Beta)](../plan-route/travel-guides.md) (Android) is a tool that allows using Wikivoyage guide for your trip.
* [Plan route](../plan-route/create-route.md) is a tool that allows you to measure distances on the map, create GPX tracks or add new segments to existing ones.
* [* Trip recording](../plugins/trip-recording.md) (Android) is a tool that allows to record all movements into track using phone's GPS. 

### Settings
* [Configure screen](../widgets/configure-screen.md) is a menu that allows configuring displaying widgets on the Map.
* [Plugins](../plugins/index.md) is a list of additional functionality and advanced settings.
* [Settings](../personal/global-settings.md) is a menu that allows configuring main app parameters.
- [Help](./first-steps.md#offline-help) provides quick access to the user guide, information about the app version and allows to quickly contact the development team.

### Active Profile (Android)

Main menu provides quick access to switch and [customize profile](../personal/profiles.md). Main purpose of profiles to have different application look & fill for navigation. Though you could use it to customize screen & widgets and switch profiles for different view purposes. All [settings](../personal/profiles.md) are configured separately for each profile.

![profile_menu](@site/static/img/menu/profile_menu.png)

In this menu you can **switch** active profile, **configure** (change settings) for active profile or **manage** all application profiles.


### Customize (Android Advanced)

It is a menu where the user can reorder or hide items from the Drawer, to see hidden items from the menu, copy the list of items from the another profile and reset to default settings.

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,shared_string_drawer"/> →  &#65049; → Enable*.  

![Drawer menu items ](@site/static/img/settings/drawer_menu_correct.png)

The *bin on the left* side of the item will remove the item from the main list.
Spin up or down the *line on the right* will give an opportunity to move the item up or down along the list.

The items that have been moved to the bin are moved to the "Hidden" section. You can restore them by clicking on the green button to the left of their titles.

![Drawer menu hidden items ](@site/static/img/settings/drawer_menu_hidden_items.png)

