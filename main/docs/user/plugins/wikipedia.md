---
sidebar_position: 2
title:  Wikipedia
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


Having Wikipedia with you on a trip helps to learn more about the places you are visiting. It is available offline, and shows the Wikipedia articles in relation to the points of interest directly on the map.


## Overview 

The Wikipedia plugin is an autonomous functionality that can be enabled/disabled as needed. Once enabled, it allows the Wikipedia data to be [downloaded](../personal/maps#download-maps-maps) per geographical region. There are two views to display the downloaded Wikipedia knowledge on the map: a short summary, and a full article. 

The short summary is provided via the Wikipedia POI (abbrev. from '[point of interest](../map/point-layers-on-map)'). If the Wikipedia option is toggled on in the menu, the Wikipedia POI shows up on the map. On tap, the POI expands and provides a summary of the available Wikipedia information and the option to open the full article. The Wikipedia POI as well as the associated articles are available offline. It is possible to read them whenever needed, switch languages, and search for other Wikipedia information. 


[Wikipedia](https://en.wikipedia.org/wiki/Wikipedia) is a free, multilingual open-collaborative online encyclopedia created and maintained by a community of volunteer editors using a wiki-based editing system. ![Wikipedia](@site/static/img/map/map-wikipedia.png)


## Setup

For the Wikipedia data to show up on the map, the following setup is needed: 

1. If needed, purchase paid services.

2. Enable the Wikipedia plugin in the Plugins section of the main menu.

3. Download the Wikipedia packages for the required regions.

4. Display the Wikipedia POI on the map for the needed profile.



### Purchase and enable plugin  

Depending on the mobile application you are using, whether it is the Android version, or the iOS version, a [paid subscription](../purchases) might be required, to allow the Wikipedia plugin to be enabled among other plugins. 

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

With the purchase done, Wikipedia Offline can be enabled in the Plugins section of the menu, and then it is possible to download the Wikipedia data for the needed geographical regions.

![Wikipedia plugin in iOS](@site/static/img/plugins/wikipedia/Wikipedia_plugin_ios2.png) ![Wikipedia plugin in Android](@site/static/img/plugins/wikipedia/Wikipedia_plugin_android2.png)

</TabItem>

<TabItem value="ios" label="iOS">

The **iOS** version provides the Wikipedia plugin by default. To enable the plugin, turn on the **Wikipedia** option in the following menu of the app: <Translate ios="true" ids="menu,plugins,product_title_wiki"/>

![Wikipedia plugin in iOS](@site/static/img/plugins/wikipedia/Wikipedia_plugin_ios2.png)

</TabItem>

<TabItem value="android" label="Android">

The **Android** version requires one of the [paid services](../purchases/android#free-and-paid-features): in-app purchases, or a subscription. Having made a purchase, to enable the Wikipedia plugin, turn on the **Wikipedia** option in the Plugins section of the main menu.

![Wikipedia plugin in Android](@site/static/img/plugins/wikipedia/Wikipedia_plugin_android2.png)

</TabItem>

</Tabs>



### Download Wikipedia packages 

The Wikipedia data is available per geographical region. If it is downloaded for one region, and not downloaded for another, in the first case it would be possible to work with the Wikipedia information when browsing across the region on the map, and in the other case, the region will lack any Wikipedia information. Being downloaded, the Wikipedia data becomes available in general, as well as offline. 

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

To download the Wikipedia data for a region, go to the [available packages for download in the main menu](../start-with/download-maps#download---main-menu), find the needed region and open it. The Wikipedia data will be among other packages.

![Download Wikipedia in iOS](@site/static/img/plugins/wikipedia/download_wikipedia_ios2.png) ![Download Wikipedia in Android](@site/static/img/plugins/wikipedia/download_wikipedia_android2.png)

</TabItem>

<TabItem value="ios" label="iOS">

In the **iOS** version, the Wikipedia data to download per region can be opened, as follows: 

1. Go to: <Translate ios="true" ids="menu,res_mapsres,res_worldwide"/>

2. Select the required region. Once the region is opened, the Wikipedia data will be among other packages. 

To view what data is already downloaded, go to: 

<Translate ios="true" ids="menu,res_mapsres,download_tab_local"/>

![Download Wikipedia in iOS](@site/static/img/plugins/wikipedia/download_wikipedia_ios2.png) 

</TabItem>

<TabItem value="android" label="Android">

In the **Android** version, the Wikipedia data to download per region can be opened, as follows: 

1. Go to: <Translate android="true" ids="shared_string_menu,welmode_download_maps,regions"/>

2. Select the required region. Once the region is opened, the Wikipedia data will be among other packages. 
 
To view what data is already downloaded, go to: 
 
<Translate android="true" ids="shared_string_menu,download_tab_local,download_wikipedia_maps"/>

![Download Wikipedia in Android](@site/static/img/plugins/wikipedia/download_wikipedia_android2.png)

</TabItem>

</Tabs>


### Display Wikipedia on the map

With the Wikipedia data downloaded for the required regions, it is possible to manage the visibility of this data on the map. The visibility is managed via the [Wikipedia POI](../map/point-layers-on-map#-wikipedia), which can be shown, or hidden for all downloaded regions per specific [profile](../personal/profiles), such as: a profile for driving a car, a profile for cycling, another one to show the Public Transport, etc. 

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

To show, or hide the Wikipedia POI, select the profile first, and then toggle the **Wikipedia** option on/off.

![Wikipedia POI on iOS](@site/static/img/map/map-wikipedia-on-map_ios.png) ![Wikipedia POI on Android](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

In the **iOS** version, to show/hide the Wikipedia POI, do the following:

1. Go to: <Translate ios="true" ids="menu,configure_map"/>

2. Select a Profile, and look for the **<Translate ios="true" ids="map_settings_show"/>** section in the menu.

3. Toggle **<Translate ios="true" ids="res_wiki"/>** on.  

![Wikipedia POI on iOS](@site/static/img/map/map-wikipedia-on-map_ios.png) 

</TabItem>

<TabItem value="android" label="Android">

In the **Android** version, to show/hide the Wikipedia POI, do the following: 

1. Go to: <Translate android="true" ids="shared_string_menu,configure_map"/>

2. Select a Profile, and look for the **<Translate android="true" ids="shared_string_show"/>** section of settings in the menu.

3. Toggle **<Translate android="true" ids="shared_string_wikipedia"/>** on. 

![Wikipedia POI on Android](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

</Tabs>


## Search Wikipedia

With the Wikipedia data downloaded, regardless of the visibility mode of the [Wikipedia POI](../map/point-layers-on-map#-wikipedia) on the map, it is possible to [search](../search/search-poi) for any Wikipedia information.


<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

By tapping Search, an extra pane pops up and allows you to [search](../search) everything, and/or by the specific category. In the first case, the search results will show the Wikipedia POI with associated Wikipedia articles among other types of the information. In case of the [search by the Wikipedia category](../search/search-poi#poi-search), the search results will show only the Wikipedia information sorted by the nearest location in relation to the area of the map currently viewable on the screen. 

![Wikipedia category on iOS](@site/static/img/map/map-wikipedia-search-on-map_ios.png) ![Wikipedia category on Android](@site/static/img/map/map-wikipedia-search-on-map.png) 

</TabItem>

<TabItem value="ios" label="iOS">

In the **iOS** version, to open [Search](../search), tap the Search icon in the left-hand top corner of the screen. 

![Wikipedia search on iOS](@site/static/img/map/map-wikipedia-search_ios.png)

To search by the Wikipedia [category](../search/search-poi#poi-search), select: 

&nbsp;&nbsp;&nbsp;&nbsp;<Translate ios="true" ids="shared_string_search,categories,res_wiki"/>

![Wikipedia category on iOS](@site/static/img/map/map-wikipedia-search-on-map_ios.png)

If needed, tap the **Show Wikipedia on the map** option at the top of the search panel, and the search results retrieved by the Wikipedia category will show up on the map. 

</TabItem>

<TabItem value="android" label="Android">

In the **Android** version, you can open [Search](../search) by:

- tapping the Search icon in the left-hand top corner of the screen, and/or
- tapping the Search option in the menu.

![Wikipedia search on Android](@site/static/img/map/map-wikipedia-search.png) 

To search by the Wikipedia [category](../search/search-poi#poi-search), select: 

&nbsp;&nbsp;&nbsp;&nbsp;<Translate android="true" ids="map_widget_search,search_categories,shared_string_wikipedia"/>

![Wikipedia category on Android](@site/static/img/map/map-wikipedia-search-on-map.png) 

If needed, tap the **Show Wikipedia on the map** option at the top of the search panel, and the search results retrieved by the Wikipedia category will show up on the map. 

</TabItem>

</Tabs>

## Wikipedia languages 

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

In case when there is a choice of languages to display the Wikipedia data in, you can set the language you prefer to read the text in. The figure below shows an example of the [Wikipedia POI](../map/point-layers-on-map#-wikipedia) and the article, which are written in French by default, and displayed in English, thanks to the availability of other translations for this Wikipedia data and the English language established for the Wikipedia in the [Profile settings](../personal/profiles). 

![French Wikipedia POI in English in iOS](@site/static/img/plugins/wikipedia/ios_wiki_language2.png) ![French Wikipedia POI in English](@site/static/img/plugins/wikipedia/Andr-french-wikipedia-in-eng1.png) 

</TabItem>

<TabItem value="ios" label="iOS">

With the preferred language established for Wikipedia, for example, a French POI can show the text in English (see the figure below). 

![French Wikipedia POI in English in iOS](@site/static/img/plugins/wikipedia/ios_wiki_language2.png)

</TabItem>

<TabItem value="android" label="Android">

With the preferred language established for Wikipedia, for example, a French POI can show the text in English (see the figure below). 

![French Wikipedia POI in English](@site/static/img/plugins/wikipedia/Andr-french-wikipedia-in-eng1.png) 

</TabItem>

</Tabs>

### Set preferred language

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

To set the preferred language, so that to view the Wikipedia data in, go to the required profile, tap the **Wikipedia** option, and in the opened list, deselect **All language** and check a specific option. In case of some languages selected, the displayed text will be in any of the languages. 

![Setting a preferred language on iOS](@site/static/img/map/map-wikipedia-language-2-ios.png) ![Setting a preferred language on Android](@site/static/img/plugins/wikipedia/and_select_languages_wiki1.png)

</TabItem>

<TabItem value="ios" label="iOS">

In the **iOS** version, to set the preferred language for the Wikipedia data, do the following:

1. Go to: <Translate ios="true" ids="menu,configure_map"/>

2. Select a profile and find the **<Translate ios="true" ids="map_settings_show"/>** section of settings.

3. Tap **<Translate ios="true" ids="res_wiki"/>**, if needed, toggle **<Translate ios="true" ids="shared_string_enabled"/>** on, and then tap **<Translate ios="true" ids="language"/>**. 

4. Check the preferred language(-s) in the opened list. 


![Setting a preferred language on iOS](@site/static/img/map/map-wikipedia-language-2-ios.png) 

</TabItem>

<TabItem value="android" label="Android">

In the **Android** version, to set the preferred language for the Wikipedia data, do the following:

1. Go to: <Translate android="true" ids="shared_string_menu,configure_map"/>

2. Select a profile and find the **<Translate android="true" ids="shared_string_show"/>** section of settings.

3. Tap **<Translate android="true" ids="shared_string_wikipedia"/>**, toggle it enabled, and then tap **<Translate android="true" ids="shared_string_language"/>**. 

4. Check the preferred language(-s) in the opened list. 

![Setting a preferred language on Android](@site/static/img/plugins/wikipedia/and_select_languages_wiki1.png)

</TabItem>

</Tabs>

### Switch languages inside article

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

In case if some translation options are available, it is possible to switch the language when viewing a specific Wikipedia article. A language icon at the right-hand top area of the article will offer the options for selection. 

![Switching languages for a specific article in iOS](@site/static/img/plugins/wikipedia/ios_switch_lang_inside_article2.png) ![Switching languages for a specific article](@site/static/img/plugins/wikipedia/and_lang_inside_article.png) 

</TabItem>

<TabItem value="ios" label="iOS">

In the **iOS** version, with the [Wikipedia POI](../map/point-layers-on-map#-wikipedia) turned on for a specific profile, it is enough to tap a POI, then scroll the opened [context menu](../map/map-context-menu) upwards till viewing an abstract of the Wikipedia article:

- tap the article, 
- tap the current language icon in the header at the right-hand top corner of the screen, and the list of available language options opens,
- select the required language. 

![Switching languages for a specific article in iOS](@site/static/img/plugins/wikipedia/ios_switch_lang_inside_article2.png) 

</TabItem>

<TabItem value="android" label="Android">

In the **Android** version, with the [Wikipedia POI](../map/point-layers-on-map#-wikipedia) turned on for a specific profile, it is enough to tap a POI, then scroll the opened [context menu](../map/map-context-menu) upwards till viewing an abstract of the Wikipedia article:

- tap the article, 
- tap the current language icon in the header at the right-hand top corner of the screen, and the list of available language options opens,
- select the required language.


![Switching languages for a specific article](@site/static/img/plugins/wikipedia/and_lang_inside_article.png) 

</TabItem>

</Tabs>