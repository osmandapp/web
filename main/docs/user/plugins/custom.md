---
sidebar_position: 17
title:  Custom package
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStoreTracker from '@site/src/components/buttons/TrackerGooglePlay.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Overview

In the OsmAnd app, you can customize the *Configure map menu* or *Drawer*, and share your [navigation profile](../personal/profiles.md) with all settings, however, if you want to share not only profile-dependent settings, but also rendering files, fonts, routes, maps and other data, you can create your own plugin *zip file* in *.osf format* for this purpose.  


## How to create

![Custom package](@site/static/img/plugins/custom/1.jpg)

The *OSF file* is a renamed *zip file* containing JSON files and folders. As an example, you can download our prepared files from [Google Drive](https://drive.google.com/drive/folders/1wDPGThkdRi9_3UrCKROgt49qi-1gM6jk?usp=sharing) or a ready-made plugin from this [link](https://drive.google.com/open?id=1efZ01uAIL27aTQLLoTl8KYH-ts_WSRSe).  

You can modify JSON files using OsmAnd's *items.json* file, which contains commands for importing JSON files, obf files, icons, and more.

You may need to read:
- About [JSON format](https://en.wikipedia.org/wiki/JSON).
- About [txt editors](https://en.wikipedia.org/wiki/List_of_text_editors), with which you can open and edit files in JSON format.
- About [Sublime Text editor](https://en.wikipedia.org/wiki/Sublime_Text), which is used in OsmAnd as a reference.
- You can check your code in [JSON Editor Online](https://jsoneditoronline.org/).


### items.json

<details><summary> OsmAnd's <b>items.json</b> file. </summary> 

```
{
   "version":1,
   "items":[

      {
         "type":"PLUGIN",
         "pluginId":"test.plugin",
         "version" : 1,
         "icon": {
             "" : "@plugin-id.png"
             
         },
         "image": {
             "" :"@plugin-image.webp"
         },
         "name":{
            "":"Test Plugin",
            "ru":"Test Plugin: RU language"
         },
         "description":{
            "":"This package is a test package and displays test information.",
            "ru":"This package is a test package and displays test information. RU language."
         }
      },

      {
         "type":"RESOURCES",
         "pluginId":"test.plugin",
         "file":"res"
      },


      {
         "type":"DOWNLOADS",
         "pluginId":"test.plugin",
         "items":[
            {
               "path":"test",
               "name":{
                  "":"My offline maps",
                  "ru":"RU: My offline maps"
               },
               "icon":{
                  "":"ic_world_globe_dark"
               },
               "header-color":"#002E64",
               "description":{
                  "text":{
                     "":"This package is a collection of online and offline map sources of various types.",
                     "ru":"RU: This package is a collection of online and offline map sources of various types."
                  },
                  "button":[
                     {
                        "":"Telegram chat OsmAnd",
                        "url":"https:\/\/t.me\/OsmAndMaps"
                     }
                  ]
               }
            },
            {
               "scope-id":"offline-maps",
               "path":"test/Waterway",
               "header-color":"#002E64",
               "name":{
                  "":"Waterway",
                  "ru":"RU: waterway"
               },
               "icon":{
                  "":"ic_world_globe_dark"
               },
               "items":[
                  {
                     "name":{
                        "":"Offline Waterway map SA",
                        "ru":"RU: Offline Waterway map SA"
                     },
                     "filename":"waterway.obf.zip",
                     "type":"map",
                     "isHidden":"true",
                     "timestamp":1582994500,
                     "containerSize":28195301,
                     "contentSize":28195301,
                     "description":{
                        "text":{
                           "":"Zoom min: 0<br />Zoom max: 19<br />Countries: SA",
                           "ru":"RU: Zoom min: 0<br />Zoom max: 19<br />Countries: SA"
                        },
                        "image":[
                           "https://drive.google.com/uc?id=16HjUHsSWNgeQI0bmuup9ohpyrg6rWkHH&export=download"
                        ]
                     },
                     "downloadurl":"https://drive.google.com/uc?id=10iP2VZexHtHC0QLhACZ1QoEy-duNN5Wg&export=download",
                     "firstsubname":{
                        "":"Waterway",
                        "ru":"RU: Waterway"
                     },
                     "secondsubname":{
                        "":"",
                        "ru":""
                     }
                }
           ]
        }] 
    },

      {
         "type":"PROFILE",
         "pluginId":"test.plugin",
         "file":"bicycle_test.json",
         "appMode":{
            "iconColor":"RED",
            "iconName":"ic_action_motorcycle_dark",
            "locIcon":"BENTLEY",
            "navIcon":"BENTLEY",
            "order":32,
            "parent":"bicycle",
            "stringKey":"bicycle_test",
            "userProfileName" : "Test Prof"
         },
         "prefs" : {
            "drawer_logo": { "" : "@logo.png"},
            "drawer_url" : { "" : "https://osmand.net"},
            "drawer_items" : { "hidden" : ["dashboard"], "order" : ["map_markers", "my_places", "search"] },
            "context_menu_items" : {},
            "configure_map_items" : {},
            "route_service":"OSMAND",
            "renderer":"test-rendering.render.xml",
            "routing_profile":"routing-test.xml/test-car"
        }
      },

      {
         "type":"FILE",
         "pluginId":"test.plugin",
         "subtype" : "rendering_style",
         "file":"\/rendering\/test-rendering.render.xml"
      },

      {
         "type":"FILE",
         "pluginId":"test.plugin",
         "subtype" : "routing_config",
         "file":"\/routing\/routing-test.xml"
      },

      {
         "type":"SUGGESTED_DOWNLOADS",
         "pluginId":"test.plugin",
         "comment-1" : "search-type are latlon (closest by latlon), worldregion (by boundaries if name matches worldRegion downloadName as we do for default types), by default natural order, limit finds first N elements",
         "comment-2" : "predefined scope-id are @type of indexes.xml map, srtm_map, road_map, wikimap, wikivoyage, hillshade, slope, fonts, voice, depth ",
         "comment-3" : "names filters ignore case by name.contains(filterName)",
         "items": [{
             "scope-id" : "test-downloads",
             "limit" : 1,
             "search-type" : "latlon"
         }, {
             "scope-id" : "road_map",
             "names" : [
                 "Poland_lesser-poland_europe_2.obf.zip", "netherlands_noord-holland_europe"]
         }, {
             "scope-id" : "wikimap",
             "search-type" : "worldregion"
         }]
      },

      {
         "type":"NAVIGATION_ICONS",
         "pluginId":"test.plugin",
         "items" : [{
            "locationIcon": {
                 "" : "@bentley-car.png"
            },
            "locationIconId": "BENTLEY", 
            "navigationIcon": {
                 "" : "@bentley-car-moving.png"
            },
            "navigationIconId": "BENTLEY"
         }]
      },
      
      {
         "type":"QUICK_ACTIONS",
         "pluginId":"test.plugin",
         "items": [{
            "name": "Test quick action",
            "actionType": "osmbug.add",
            "params": "{\"dialog\":\"false\",\"message\":\"Message\"}"
          }]
      },

      {
         "type":"POI_UI_FILTERS",
         "pluginId":"test.plugin",
          "items": [{
                "name": "Test Search",
                "filterId": "test_search",
                "acceptedTypes": "{\"sustenance\":[\"bar\",\"alpine_hut\"]}"
            }]
      },

      {
         "type":"MAP_SOURCES",
         "pluginId":"test.plugin",
         "items": [{
            "sql": false,
            "name": "OsmAnd (test)",
            "minZoom": 1,
            "maxZoom": 19,
            "url": "https:\/\/tile.osmand.net\/hd\/{0}\/{1}\/{2}.png",
            "ellipsoid": false,
            "inverted_y": false,
            "timesupported": false,
            "expire": -1,
            "inversiveZoom": false,
            "ext": ".png",
            "tileSize": 512,
            "bitDensity": 8,
            "avgSize": 18000
        }]
      }
   ]
}

```
</details>

### Import types

There are many import types for OsmAnd *items.JSON* file. All types can be found [here](https://github.com/osmandapp/Osmand/blob/r3.7/OsmAnd/src/net/osmand/plus/settings/backend/SettingsHelper.java#L133), and this article describes only a few of them.

1. To start, you create and add your plugin to *items.JSON*. The first type of import is **"PLUGIN"**.  
   *<u>NOTE</u>*. You must create and add this line for each type **"pluginId":"test.plugin"**, where *test.plugin* is the name of your package.  

   ![Custom package](@site/static/img/plugins/custom/2.jpg)

2. To import images of your plugin icons into OsmAnd, create a folder (in our example it is the *"res"* folder) where the image files will be stored. The name of this type is **"RESOURSES"**.  

   ![Custom package](@site/static/img/plugins/custom/4.jpg)

3. You can add any files such as *SQLite, OBF, or fonts* for download using the **"DOWNLOADS"** type. The main types of downloadable files can be found [here](https://github.com/osmandapp/Osmand/blob/master/OsmAnd/src/net/osmand/plus/download/DownloadActivityType.java#L33).  
   *<u>NOTE</u>*. The tag **"isHidden":"true"** (by default it is *false*) can hide your map data from [Maps and Resources](../personal/maps.md#local) of OsmAnd.  

   ![Custom package](@site/static/img/plugins/custom/3.jpg)

4. In **"scope-id"** you can add all the necessary information about your file's URL, name, description, and more.  

   ![Custom package](@site/static/img/plugins/custom/5.jpg)

5. Using the **"PROFILE ”** type you can add a navigation profile for your plugin. You can get all the information about your navigation profile in the exported JSON file, where it is possible to read which *items.JSON* types were added (*“QUICK_ACTIONS”, “POI_UI_FILTERS”, “MAP_SOURCES ”* or others). 
NOTE: Start creating a navigation profile with all parameters, for this purpose export navigation profiles, and copy necessary items from the navigation *profiles.osf* (items.JSON) file to *PLUGIN.osf* (items.JSON) file.  

   ![Custom package](@site/static/img/plugins/custom/6.jpg)

6. In the **"SUGGESTED_DOWNLOADS"** type, you can download the maps that OsmAnd offers when importing a new plugin.  

   ![Custom package](@site/static/img/plugins/custom/7.jpg)

7. In the **"FILE"** type you can add files from your plugin folders to OsmAnd folders, the "subtype" of which can be found [here](https://github.com/osmandapp/Osmand/blob/r3.7/OsmAnd/src/net/osmand/plus/settings/backend/SettingsHelper.java#L1312). In the example provided, the *routing.xml* and *rendering.xml* files have been added. You can read about how to create these files at the links [here](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) and [here](https://github.com/osmandapp/OsmAnd-resources/tree/master/rendering_styles).  

   ![Custom package](@site/static/img/plugins/custom/8.jpg)

When the *items.JSON* file and all the files in the folder are ready, you can zip them into one document. After that, the *.zip file* should be renamed to *.os*f*, and then your *PLUGIN.osf* will be ready to be added to the OsmAnd application.


## Examples

You can take a look at some of the plugins that OsmAnd users have made on their own:

 - [The USA Maps](https://osmand.net/uploads/plugins/us.maps/2/us.maps-2.osf) custom plugin (PAD-US data, USFS trails and roads, USFS recreation).
 - [Anygis maps](https://osmand.net/uploads/plugins/ru.anygis.plugin/2/ru.anygis.plugin-2.osf) custom plugin.
 - [Map Legend](https://osmand.net/uploads/plugins/legend.plugin/1/legend.plugin-1.osf) custom plugin.
 - [UMP-PL](https://ump.waw.pl/) Poland [map custom plugin](https://osmand.net/uploads/plugins/UMP_map.plugin/1/UMP_map.plugin-1.osf).
 - [OsmAnd Rendering plugin](https://osmand.net/uploads/plugins/osmand.rendering.plugin/1/osmand.rendering.plugin-1.osf) custopm plugin.
 - [Outdoor Explorer](https://osmand.net/uploads/plugins/outdoor-explorer.plugin/1/outdoor-explorer.plugin-1.osf) custom plugin.
