---
source-hash: 8b0e6840fa8a6ab7074614a2706b18f2202e61cb73c6101c59c92ac68b75cc73
sidebar_position: 4
title:  Aangepast pakket
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



## Overzicht {#overview}

In de OsmAnd-applicatie kunt u veel aanpassingen maken en deze exporteren naar een `.osf`-bestand. Na het toevoegen van een beschrijving, afbeelding en pictogram, worden deze aanpassingen een volledig onafhankelijke plug-in. Deze plug-in kan het volgende omvatten:

- Alle [Profielinstellingen](../personal/profiles.md) met een nieuw profiel.
- Specifieke set snelle acties en menu-indelingen voor *Lade* en *Contextmenu*.
- Aangepaste offline kaart in de plug-in of voorgesteld om te downloaden.
- Specifieke online routeringstypen en online kaarten.


## Hoe te maken {#how-to-create}

![Aangepast pakket](@site/static/img/plugins/custom/1.jpg)

Het `.osf` *bestand* is een hernoemd `.zip` *bestand* dat `.json`-bestanden en mappen bevat. Als voorbeeld kunt u onze voorbereide bestanden downloaden van [Google Drive](https://drive.google.com/drive/folders/1wDPGThkdRi9_3UrCKROgt49qi-1gM6jk?usp=sharing) of een kant-en-klare plug-in via deze [link](https://drive.google.com/open?id=1efZ01uAIL27aTQLLoTl8KYH-ts_WSRSe).

U kunt `.json`-bestanden wijzigen met behulp van het *items.json*-bestand van OsmAnd, dat opdrachten bevat voor het importeren van `.json`-bestanden, `.obf`-bestanden, pictogrammen en meer.

Mogelijk moet u lezen:

- Over [`.json`-formaat](https://en.wikipedia.org/wiki/JSON).
- Over [teksteditors](https://en.wikipedia.org/wiki/List_of_text_editors), waarmee u bestanden in JSON-formaat kunt openen en bewerken.
- Over [Sublime Text-editor](https://en.wikipedia.org/wiki/Sublime_Text), die in OsmAnd als referentie wordt gebruikt.
- U kunt uw code controleren in [JSON Editor Online](https://jsoneditoronline.org/).


### items.json {#itemsjson}

<details>
<summary> OsmAnd's <b>items.json</b> bestand. </summary>

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


## Importtypen {#import-types}

Er zijn veel importtypen voor het OsmAnd *items.JSON*-bestand. Alle typen zijn [hier](https://github.com/osmandapp/Osmand/blob/r3.7/OsmAnd/src/net/osmand/plus/settings/backend/SettingsHelper.java#L133) te vinden, en dit artikel beschrijft er slechts enkele.

### Plug-inbeschrijving {#plugin-description}

Om te beginnen maakt u uw plug-in en voegt u deze toe aan *items.JSON*. Het eerste importtype is **"PLUGIN"**.
   *<u>OPMERKING</u>*. U moet deze regel voor elk type maken en toevoegen: **"pluginId":"test.plugin"**, waarbij *test.plugin* de naam van uw pakket is.

   ![Aangepast pakket](@site/static/img/plugins/custom/2.jpg)

### Plug-inafbeeldingen {#plugin-images}

Om uw plug-inpictogramafbeeldingen in OsmAnd te importeren, maakt u een map (in ons voorbeeld is dit de map *"res"*) waarin de afbeeldingsbestanden worden opgeslagen. De naam van dit type is **"RESOURCES"**.

   ![Aangepast pakket](@site/static/img/plugins/custom/4.jpg)


### Profielen {#profiles}

Met het type **"PROFILE"** kunt u een navigatieprofiel voor uw plug-in toevoegen. U kunt alle informatie over uw navigatieprofiel vinden in het geëxporteerde JSON-bestand, waar u kunt lezen welke *items.JSON*-typen zijn toegevoegd (*"QUICK_ACTIONS", "POI_UI_FILTERS", "MAP_SOURCES"* of andere).
OPMERKING: Begin met het maken van een navigatieprofiel met alle parameters, exporteer hiervoor navigatieprofielen en kopieer de benodigde items van het navigatie-*profiles.osf* (items.JSON)-bestand naar het *PLUGIN.osf* (items.JSON)-bestand.

   ![Aangepast pakket](@site/static/img/plugins/custom/6.jpg)

### Downloads {#downloads}

U kunt alle bestanden zoals *SQLite, OBF of lettertypen* toevoegen om te downloaden met behulp van het type **"DOWNLOADS"**. De belangrijkste typen downloadbare bestanden zijn [hier](https://github.com/osmandapp/Osmand/blob/master/OsmAnd/src/net/osmand/plus/download/DownloadActivityType.java#L33) te vinden.
   *<u>OPMERKING</u>*. De tag **"isHidden":"true"** (standaard is dit *false*) kan uw kaartgegevens verbergen voor [Kaarten en bronnen](../personal/maps-resources.md#local) van OsmAnd. In **"scope-id"** kunt u alle benodigde informatie over de URL, naam, beschrijving en meer van uw bestand toevoegen.

   ![Aangepast pakket](@site/static/img/plugins/custom/3.jpg)

### Voorgestelde downloads {#suggested-downloads}

In het type **"SUGGESTED_DOWNLOADS"** kunt u de kaarten downloaden die OsmAnd aanbiedt bij het importeren van een nieuwe plug-in.

   ![Aangepast pakket](@site/static/img/plugins/custom/7.jpg)

### Bestanden {#files}

In het type **"FILE"** kunt u bestanden van uw plug-inmappen naar OsmAnd-mappen toevoegen, waarvan het "subtype" [hier](https://github.com/osmandapp/Osmand/blob/r3.7/OsmAnd/src/net/osmand/plus/settings/backend/SettingsHelper.java#L1312) te vinden is. In het gegeven voorbeeld zijn de bestanden *routing.xml* en *rendering.xml* toegevoegd. U kunt lezen hoe u deze bestanden maakt via de links [hier](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) en [hier](https://github.com/osmandapp/OsmAnd-resources/tree/master/rendering_styles).

   ![Aangepast pakket](@site/static/img/plugins/custom/8.jpg)

Wanneer het *items.JSON*-bestand en alle bestanden in de map klaar zijn, kunt u ze in één document zippen. Daarna moet het *.zip-bestand* worden hernoemd naar *.osf*, en dan is uw *PLUGIN.osf* klaar om te worden toegevoegd aan de OsmAnd-applicatie.


## Voorbeelden {#examples}

U kunt enkele plug-ins bekijken die OsmAnd-gebruikers zelf hebben gemaakt:

 - [De USA Maps](https://osmand.net/uploads/plugins/us.maps/2/us.maps-2.osf) aangepaste plug-in (PAD-US-gegevens, USFS-paden en -wegen, USFS-recreatie).
 - [Anygis maps](https://osmand.net/uploads/plugins/ru.anygis.plugin/2/ru.anygis.plugin-2.osf) aangepaste plug-in.
 - [Map Legend](https://osmand.net/uploads/plugins/legend.plugin/1/legend.plugin-1.osf) aangepaste plug-in.
 - [UMP-PL](https://ump.waw.pl/) Polen [kaart aangepaste plug-in](https://osmand.net/uploads/plugins/UMP_map.plugin/1/UMP_map.plugin-1.osf).
 - [OsmAnd Rendering plug-in](https://osmand.net/uploads/plugins/osmand.rendering.plugin/1/osmand.rendering.plugin-1.osf) aangepaste plug-in.
 - [Outdoor Explorer](https://osmand.net/uploads/plugins/outdoor-explorer.plugin/1/outdoor-explorer.plugin-1.osf) aangepaste plug-in.


## Gerelateerde artikelen {#related-articles}

- [Interactie met kaart](../../user/map/interact-with-map.md)
- [Algemene instellingen](../../user/personal/global-settings.md)
- [Vector kaarten (kaartstijlen)](../../user/map/vector-maps.md)

 > *Laatst bijgewerkt: juni 2024*