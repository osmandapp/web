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

OsmAnd is a "Swiss knife" among similar applications. We always try to create very useful and flexible app. Experienced OsmAnd users are our gold team because it is not easy to start using OsmAnd for 100 percent at once.

In the earlier versions, we have added customization of your navigation profiles. In the last version of OsmAnd (3.7) you can customize the Configure map menu, Drawer, etc. In general, you can send your <a href="https://osmand.net/docs/user/personal/profiles">navigation profile</a> to your friends with all your settings anytime.

But if you want to send not only profile dependant settings, but rendering files, fonts, routings, maps, and other data, we have added this opportunity. You can create your own plugin file for this. The plugin file is a special *zip* file in the *.osf* format. In this article you can see a comprehensive tutorial on how to do your own plugin for OsmAnd.

## How to create

*OSF-file* is a renamed *zip-file* which contains json-files and folders. <a href="https://drive.google.com/drive/folders/1wDPGThkdRi9_3UrCKROgt49qi-1gM6jk?usp=sharing">Here</a>, you can download files from our example. This finished plugin you can download <a href="https://drive.google.com/open?id=1efZ01uAIL27aTQLLoTl8KYH-ts_WSRSe">here</a>.  

![Custom package](@site/static/img/plugins/custom/1.jpg)

Read more about the JSON-format <a href="https://en.wikipedia.org/wiki/JSON">here</a>. You can open and edit this format with any <a href="https://en.wikipedia.org/wiki/List_of_text_editors">txt editors</a>. We will use the <a href="https://en.wikipedia.org/wiki/Sublime_Text">Sublime Text editor</a> for the reference. You can check your code <a href="https://jsoneditoronline.org/">here</a>.

We want to add that we made the opportunity to modify JSON file for not only programmers, but for all our users.
Our general JSON file is "items" contains commands for import JSON-files, obf-files, icons, etc.


__________________________________



**items.json**


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

There are many import types for OsmAnd *items.JSON*. You can find all of types <a href="https://github.com/osmandapp/Osmand/blob/r3.7/OsmAnd/src/net/osmand/plus/settings/backend/SettingsHelper.java#L133">here</a>. We will describe some of import types (*"type"*) in this article.

In the first part of *items.JSON* we can create and add your plugin. The first import type will be **"PLUGIN"**.

**Note:** you must create and add this line for each type: <u>"pluginId":"test.plugin"</u>. Where *test.plugin* is a name of your package.

![Custom package](@site/static/img/plugins/custom/2.jpg)

To import icon images of your plugin to OsmAnd you can create folder (in our example *"res"* folder) where we store our image files. This type name is *"RESOURSES"*.


![Custom package](@site/static/img/plugins/custom/4.jpg)


The *"DOWNLOADS"* type: you can add any files (sqlite, obf, fonts...) for downloading. You can see the general types of downloading files <a href="https://github.com/osmandapp/Osmand/blob/master/OsmAnd/src/net/osmand/plus/download/DownloadActivityType.java#L33">here</a>.

**Note**: _"isHidden":"true"_ tag (by default - false) can hide your map data from [Maps and Resources](../personal/maps#local-maps) of OsmAnd.

![Custom package](@site/static/img/plugins/custom/3.jpg)

In *"scope-id"* you can add all necessary information about url of your files, name, description and etc.

![Custom package](@site/static/img/plugins/custom/5.jpg)

In type *"PROFILE"*, you can add a navigation profile which added with your Plugin. You can find all info about your navigation profile during export and read the JSON file. In the JSON file you can find types of added *items.JSON*: "QUICK_ACTIONS", "POI_UI_FILTERS", "MAP_SOURCES", etc. Our advice is to start creating a navigation profile with all parameteres, export navigation profiles, copy needed from navigation profiles.osf (items.JSON) to your PLUGIN.osf (items.JSON).

![Custom package](@site/static/img/plugins/custom/6.jpg)

In type *"SUGGESTED_DOWNLOADS"*, you can install maps which OsmAnd suggests when you import the new plugin.

![Custom package](@site/static/img/plugins/custom/7.jpg)

In type *"FILE"* you can add files from folders in your Plugin to OsmAnd. The "subtype" of these files you can find <a href="https://github.com/osmandapp/Osmand/blob/r3.7/OsmAnd/src/net/osmand/plus/settings/backend/SettingsHelper.java#L1312">here</a>. In our example we added routing.xml and rendering.xml files. You can read <a href="https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml">here</a> and <a href="https://github.com/osmandapp/OsmAnd-resources/tree/master/rendering_styles">here</a> on how to create these files.

![Custom package](@site/static/img/plugins/custom/8.jpg)

When all files in folder and  *items.JSON*  will  be ready, you can zip all your files in one container. After that you can rename *.zip* file format to *.osf*. After that, your *Plugin.osf* will be ready for adding to the OsmAnd app.


>In this article, we try to explain the first steps of your own Plugin creation. In the future, we want to add OsmAnd market in our application so you can share your own plugins, maps, and navigation profiles with others.


## Examples

Here we added some examples of custom plugins that our users created by yourself.

 - [US Maps](https://t.me/OsmAnd_News/65) custom plugin (PAD-US data, USFS trails and roads, USFS recreation).
 - [Anygis maps](https://t.me/ruosmand/127579) custom plugin.
 - [Map Legend](https://t.me/OsmAndMaps/45410) custom plugin.
 - [UMP-PL](https://ump.waw.pl/) Poland [map custom plugin](https://ump.waw.pl/update/UMP-PL-OsmAnd_plugin.osf).

_________________________________________________

<LinksTelegram/>
<AppleStore/>
<AndroidStore/>