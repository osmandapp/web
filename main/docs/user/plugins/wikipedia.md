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
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';



Having Wikipedia on your trip helps you learn more about the places you visit. It is available offline and shows Wikipedia articles in relation to the points of interest right on the map.


## Overview 

The Wikipedia plugin is a separate feature that can be enabled/disabled as needed. Once enabled, it allows you to upload Wikipedia data [downloaded](../personal/maps.md#download-maps-maps) for each geographical region. The map has two kinds of uploaded knowledge from Wikipedia: a brief information and a full article.  


Brief information is provided by Wikipedia POIs (an abbreviation for "[point of interest](../map/point-layers-on-map.md)"). If the Wikipedia option is toggled on in the menu, a Wikipedia POI appears on the map. When you tap on a point of interest, it expands to provide brief information from Wikipedia, as well as the ability to open a full article. The Wikipedia POI, as well as related articles, are available offline. You can read them as needed, switch languages, and search for other information on Wikipedia.  


[Wikipedia](https://en.wikipedia.org/wiki/Wikipedia) is a free, multilingual open-collaborative online encyclopedia created and maintained by a community of volunteer editors using a wiki-based editing system.  

&nbsp;  
![Wikipedia](@site/static/img/map/map-wikipedia.png)


## Setup

For Wikipedia data to be displayed on the map, you need to make the following setting: 

1. Purchase <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro subscribers</a> paid services if necessary.    
2. Enable the [Wikipedia plugin](https://docs.osmand.net/docs/user/plugins/wikipedia/#purchase-and-enable-plugin) in the Plugins section of the main menu.    
3. Download the [Wikipedia packages](https://docs.osmand.net/docs/user/plugins/wikipedia/#download-wikipedia-packages) for the required regions.  
4. Display the [Wikipedia POIs](https://docs.osmand.net/docs/user/plugins/wikipedia/#display-wikipedia-on-the-map) on the map for the required profile.  



### Purchase and enable plugin  

Depending on the mobile app you are using, whether the Android or iOS version, a [paid subscription](../purchases/index.md) may be required for the Wikipedia plug-in to be included among other plugins.


Once purchased, Wikipedia Offline can be enabled in the Plugins menu and then you can download Wikipedia data for the selected geographical regions.  

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">  

:::note
  
<ProFeature/>  This plugin you can use with Pro feature  <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro subscribers</a>.

:::


The **Android** version requires one of the [paid services](../purchases/android.md#free-and-paid-features): in-app purchases or a subscription. After making a purchase, to enable the Wikipedia plugin, turn on the **Wikipedia** option in the Plugins section of the main menu.

![Wikipedia plugin in Android](@site/static/img/plugins/wikipedia/Wikipedia_plugin_android2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

:::note
  
<ProFeature/>  This plugin you can use with Pro feature  <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro subscribers</a>.

:::


The **iOS** version provides the Wikipedia plugin by default. To enable the plugin, turn on the **Wikipedia** option in the following menu of the app: *<Translate ios="true" ids="menu,plugins,product_title_wiki"/>* 



![Wikipedia plugin in iOS](@site/static/img/plugins/wikipedia/Wikipedia_plugin_ios2.png)

</TabItem>

</Tabs>



### Download Wikipedia packages 

Wikipedia data is available for each geographic region. If it is loaded for one region and not loaded for another, in the first case you can work with Wikipedia information when viewing the region on a map, and in the other case the region will not have any Wikipedia information. Once loaded, Wikipedia data becomes available in general, as well as offline.      

To download the Wikipedia data for a region, go to the [available packages for download in the main menu](../start-with/download-maps.md#download---main-menu), find the needed region and open it. The Wikipedia data will be among other packages.

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

In the **Android** version, you can open Wikipedia data to download by region as follows:  
1. Go to: *<Translate android="true" ids="shared_string_menu,welmode_download_maps,regions"/>*   
2. Select the required region. Once the region is opened, the Wikipedia data will be among other packages.   
 
To see what data has already been uploaded, go to: *<Translate android="true" ids="shared_string_menu,download_tab_local,download_wikipedia_maps"/>*  

![Download Wikipedia in Android](@site/static/img/plugins/wikipedia/download_wikipedia_android2.png)

</TabItem>

<TabItem value="ios" label="iOS">

In the **iOS** version, you can open Wikipedia data to download by region as follows: 
1. Go to: *<Translate ios="true" ids="menu,res_mapsres,res_worldwide"/>*  
2. Select the required region. Once the region is opened, the Wikipedia data will be among other packages.  

To see what data has already been uploaded, go to: *<Translate ios="true" ids="menu,res_mapsres,download_tab_local"/>*  

![Download Wikipedia in iOS](@site/static/img/plugins/wikipedia/download_wikipedia_ios2.png) 

</TabItem>

</Tabs>


### Display Wikipedia on the map

By loading Wikipedia data for the required regions, you can control the visibility of that data on the map. Visibility is controlled by [Wikipedia POIs](../map/point-layers-on-map.md#-wikipedia), which can be shown or hidden for all uploaded regions by a certain [profile](../personal/profiles.md), for example, a profile for driving, a profile for cycling, another profile to show public transport, etc.  


To show or hide Wikipedia POIs, first select a profile and then on/off **Wikipedia** option.

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

In the **Android** version, to show/hide Wikipedia POIs, do the following:  
1. Go to: *<Translate android="true" ids="shared_string_menu,configure_map"/>*  
2. Select a Profile, and look for the *<Translate android="true" ids="shared_string_show"/>* section of settings in the menu.  
3. Toggle *<Translate android="true" ids="shared_string_wikipedia"/>* on.  

![Wikipedia POIs on Android](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

In the **iOS** version, to show/hide Wikipedia POIs, do the following:  
1. Go to: *<Translate ios="true" ids="menu,configure_map"/>*  
2. Select a Profile, and look for the *<Translate ios="true" ids="map_settings_show"/>* section in the menu.  
3. Toggle *<Translate ios="true" ids="res_wiki"/>* on.   

![Wikipedia POI on iOS](@site/static/img/map/map-wikipedia-on-map_ios.png) 

</TabItem>

</Tabs>


## Search Wikipedia

With uploaded Wikipedia data, regardless of the visibility mode of the [Wikipedia POIs](../map/point-layers-on-map.md#-wikipedia) on the map, it is possible to [search](../search/search-poi.md) for any information from Wikipedia.   

When you tap the Search button, an additional panel appears allowing you to [search](../search/index.md) the entire text and/or a specific category. In the former case, the search results will show Wikipedia POIs with corresponding Wikipedia articles among other types of information. In the case of a [Wikipedia category search](../search/search-poi.md#poi-search), the search results will only show Wikipedia information, sorted by the closest location to the area of the map that is currently displayed on the screen.  
 

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

In the **Android** version, you can open [Search](../search/index.md) by:

- tapping the Search icon in the upper left corner of the screen  
and/or  
- tapping the Search option in the menu.

![Wikipedia search on Android](@site/static/img/map/map-wikipedia-search.png) 

To search by the Wikipedia [category](../search/search-poi.md#poi-search), select: *<Translate android="true" ids="map_widget_search,search_categories,shared_string_wikipedia"/>*  

![Wikipedia category on Android](@site/static/img/map/map-wikipedia-search-on-map.png) 

If necessary, tap the **Show Wikipedia on the map** option at the top of the search panel and search results from the Wikipedia category will appear on the map.   

</TabItem>

<TabItem value="ios" label="iOS">

In the **iOS** version, to open [Search](../search/index.md), the Search icon in the upper left corner of the screen. 

![Wikipedia search on iOS](@site/static/img/map/map-wikipedia-search_ios.png)

To search by the Wikipedia [category](../search/search-poi.md#poi-search), select: *<Translate ios="true" ids="shared_string_search,categories,res_wiki"/>*

![Wikipedia category on iOS](@site/static/img/map/map-wikipedia-search-on-map_ios.png)

If necessary, tap the **Show Wikipedia on the map** option at the top of the search panel and search results from the Wikipedia category will appear on the map.    

</TabItem>

</Tabs>

## Wikipedia languages  

When there is a choice of languages to display the Wikipedia data, you can set the language in which you prefer to read the text. The figure below shows an example of [Wikipedia POIs](../map/point-layers-on-map.md#-wikipedia) and an article that is written in French by default and is displayed in English, thanks to the other translations available for this Wikipedia data and the English language set for Wikipedia in the [Profile settings](../personal/profiles.md).  


<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

With the preferred language established for Wikipedia, for example, a French POI can show the text in English (see the figure below). 

![French Wikipedia POI in English](@site/static/img/plugins/wikipedia/Andr-french-wikipedia-in-eng1.png) 

</TabItem>

<TabItem value="ios" label="iOS">

If you have set a preferred language for Wikipedia, for example, the French POI may show text in English (see figure below).  

![French Wikipedia POI in English in iOS](@site/static/img/plugins/wikipedia/ios_wiki_language2.png)

</TabItem>

</Tabs>

### Set preferred language  

To set your preferred language, browse the Wikipedia data, navigate to the desired profile, tap the **Wikipedia** option, and in the list that opens, deselect **All language** and check the specific option. If multiple languages are selected, the displayed text will be in any of them.  


<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

In the **Android** version, to set the preferred language for the Wikipedia data, do the following:  
1. Go to: *<Translate android="true" ids="shared_string_menu,configure_map"/>*  
2. Select a profile and find the *<Translate android="true" ids="shared_string_show"/>* section of settings.  
3. Tap *<Translate android="true" ids="shared_string_wikipedia"/>*, toggle it enabled, and then tap *<Translate android="true" ids="shared_string_language"/>*.  
4. Check the preferred language(-s) in the opened list.  

![Setting a preferred language on Android](@site/static/img/plugins/wikipedia/and_select_languages_wiki1.png)

</TabItem>

<TabItem value="ios" label="iOS">

In the **iOS** version, to set the preferred language for the Wikipedia data, do the following:  
1. Go to: *<Translate ios="true" ids="menu,configure_map"/>*  
2. Select a profile and find the *<Translate ios="true" ids="map_settings_show"/>* section of settings.  
3. Tap *<Translate ios="true" ids="res_wiki"/>*, if needed, toggle *<Translate ios="true" ids="shared_string_enabled"/>* on, and then tap *<Translate ios="true" ids="language"/>*.  
4. Check the preferred language(-s) in the opened list.  


![Setting a preferred language on iOS](@site/static/img/map/map-wikipedia-language-2-ios.png) 

</TabItem>

</Tabs>

### Switch languages inside article  

If some translation options are available, you can switch the language when viewing a particular Wikipedia article. The language icon in the upper right corner of the article will offer options to choose from.  

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

In the **Android** version, with the [Wikipedia POI](../map/point-layers-on-map.md#-wikipedia) turned on for a specific profile, it is enough to tap a POI, then scroll the opened [context menu](../map/map-context-menu.md) upwards till viewing an abstract of the Wikipedia article:

- Tap on an article.
- Tap the current language icon in the header in the upper right corner of the screen, which opens a list of available language options.
- Select the desired language.

![Switching languages for a specific article](@site/static/img/plugins/wikipedia/and_lang_inside_article.png) 

</TabItem>  

<TabItem value="ios" label="iOS">

In the **iOS** version, with the [Wikipedia POI](../map/point-layers-on-map.md#-wikipedia) turned on for a specific profile, it is enough to tap a POI, then scroll the opened [context menu](../map/map-context-menu.md) upwards till viewing an abstract of the Wikipedia article:

- Tap on an article.
- Tap the current language icon in the header in the upper right corner of the screen, which opens a list of available language options.
- Select the desired language.

![Switching languages for a specific article](@site/static/img/plugins/wikipedia/switch_languages_ios_1.png) ![Switching languages for a specific article](@site/static/img/plugins/wikipedia/switch_languages_ios_2.png)

</TabItem>



</Tabs>
