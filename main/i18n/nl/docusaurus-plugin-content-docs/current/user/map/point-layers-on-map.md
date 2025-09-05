---
source-hash: e005142473200bc1f9ed4e7e38e90fe7a2db323071277cbdb521ac266234d560
sidebar_position: 7
title: Punten op de kaart
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Overzicht {#overview}

De kaart kan punten weergeven zoals [Favorieten](#favorites), [Nuttige Plaatsen (POI's)](#points-of-interest-pois), [Markeringen](#markers), [Wikipedia](#-wikipedia--wikipedia), [Zoekresultaten](#search-results-poi), [Audio- en videonotities](#-audio--video-points-android--audio--video-points-android), en [OSM-bewerkingen](#-osm-edit-points--osm-edit-points).


## Favorieten {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Favotires layer Android](@site/static/img/map/favorites_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Favotires layer iOS](@site/static/img/map/favorites_layer_ios.png)  

</TabItem>

</Tabs>

[Favorieten](../personal/favorites.md) zijn speciale punten die door gebruikers zijn gemarkeerd. Standaard verschijnen ze als gele sterren op de kaart, hoewel ze kunnen worden aangepast met elke kleur, vorm en pictogram. Ze worden zichtbaar op de kaart vanaf zoomniveau 6.

:::info
In de Android-versie van OsmAnd kunt u alleen bepaalde groepsfavorieten op de kaart en tijdens het zoeken weergeven. Ga naar *Menu → Mijn plaatsen → Favorieten*, tik op &#8942; en kies of u *Op de kaart weergeven* wilt of niet.
:::


## Favoriete en POI-namen {#favorite-and-poi-names}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Favotire labels layer](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Favotire labels layer](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

</Tabs>

Standaard worden Favorieten en nuttige plaatsen (POI's) zonder namen weergegeven, om de kaart niet te overladen met tekst. U kunt namen inschakelen in het menu Kaart configureren.  


## Nuttige Plaatsen (POI's) {#points-of-interest-pois}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,layer_poi"/>*

![POI overlay Android](@site/static/img/map/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,poi_overlay"/>*

![POI overlay iOS](@site/static/img/map/poi_overlay_ios.png)  

</TabItem>

</Tabs>

[Nuttige plaatsen (POI's)](https://wiki.openstreetmap.org/wiki/Points_of_interest) zijn specifieke locaties die met een symbool op de kaart zijn gemarkeerd. Ze geven interessante of nuttige plaatsen en objecten aan en maken deel uit van de [Vector Kaarten](../map/vector-maps.md).  

De meest opvallende POI's worden automatisch op de kaart weergegeven. U kunt echter een specifiek type POI's selecteren (bijv. *Restaurants*) en deze worden allemaal op de kaart gemarkeerd met een **oranje cirkel** (vanaf zoomniveau 9).  

Gedetailleerde informatie over een nuttige plaats vindt u in het [Contextmenu](../map/map-context-menu.md) dat verschijnt wanneer u op het punt [tikt](../map/map-context-menu.md#select-an-object-single-tap).  


### POI-typen {#poi-types}

![Single POI Selection](@site/static/img/map/single_selection_android.png) ![Multiple POI Selection](@site/static/img/map/multiple_selection_android.png)

U kunt één of meerdere standaard OsmAnd POI-typen selecteren, of uw eigen [POI-filter](../search/search-poi.md) maken en deze selecteren om POI's op de kaart weer te geven.

**Android**. Tik op de knop links onderin om te schakelen tussen het selecteren van één of meerdere nuttige plaatsen.


### Kaartstijl POI {#map-style-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*

![POI on map style](@site/static/img/map/poi_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,rendering_category_hide"/>*

![POI on topo style](@site/static/img/map/poi_layer_topo_style.png)  

</TabItem>

</Tabs>

Elk POI-type in OsmAnd heeft een specifiek pictogram en een specifieke kleur. Het [zoomniveau](../map/vector-maps.md#details) en het ontwerp van POI's kunnen verschillen in sommige [kaartstijlen](../map/vector-maps.md#default-map-styles).  

[Lees meer](../map/vector-maps.md#hide).


## Markeringen {#markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,map_markers_item"/>*

![Map markers Android](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,map_markers"/>*

![Map markers iOS](@site/static/img/map/map_markers_ios.png)  

</TabItem>

</Tabs>

[Kaartmarkeringen](../personal/markers.md) zijn tijdelijke punten die op de kaart als vlaggen zijn gemarkeerd. Hun uiterlijk kan worden aangepast met behulp van **pijlen** (Pijlen op de kaart) en **afstandsaanduiding** (Richtinglijnen).  

U kunt meer lezen over het uiterlijk van de markeringen in dit [artikel](../personal/markers#appearance-on-the-map).


## Track Waypoints {#track-waypoints}

![Track on map](@site/static/img/map/track_point_on_map.png)

Trackpunten (waypoints) maken deel uit van Track (GPX) bestanden. Deze punten worden automatisch weergegeven als de track op de kaart staat. Ze zien eruit en kunnen worden geconfigureerd zoals [Favorieten](#favorites) - pictogram, namen, kleur, vorm. Hoe u een Waypoint maakt en toevoegt, leest u in het [artikel](../map/tracks/track-context-menu.md#add-waypoint-to-a-track).  

[Lees meer](../map/tracks/index.md) over tracks op de kaart.


## Zoekresultaten (POI) {#search-results-poi}

![POI search](@site/static/img/map/poi_search.png) ![POI search result](@site/static/img/map/poi_search_result.png)

Zoekresultaten kunnen op de kaart worden weergegeven als een speciale POI-laag. Tik tijdens het zoeken op een speciale rij (**<Translate android="true" ids="shared_string_show_on_map"/>**) om POI's op de kaart weer te geven.  

Om POI's uit te schakelen, drukt u op **X** in de rechterbovenhoek.  

Lees meer over [zoeken](../search/index.md).


## * Street-Level Imagery {#-street-level-imagery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![Mapillary filter](@site/static/img/map/mapillary_filter.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![Mapillary street view](@site/static/img/map/mapillary_street-view.png)

</TabItem>

</Tabs>

[Street-level imagery (Mapillary)](../plugins/mapillary.md) worden weergegeven als groene stippen op de kaart. Foto's van het straatbeeld zijn aan deze stippen gekoppeld. U kunt een [filter](../plugins/mapillary.md#data-filtering) maken en de foto's selecteren die u op de kaart wilt weergeven. Om een straatbeeld te openen, tikt u op de groene stip.  

Vereist [Mapillary plugin](../plugins/mapillary.md).


## * Parkeerpunt {#-parking-point}

![Limited parking](@site/static/img/map/context_menu_limited_parking.png) ![Unlimited parking](@site/static/img/map/context_menu_unlimited_parking.png)

Een [Parkeerpunt](../plugins/parking.md) is een punt dat door gebruikers op de kaart is gemarkeerd om informatie over de exacte locatie van het voertuig op te slaan. Het kan worden onderverdeeld in onbeperkte en beperkte parkeerzones.  

Vereist [Parkeerpositie plugin](../plugins/parking.md).


## * Wikipedia {#-wikipedia}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Wikipedia on map](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

![Wikipedia language - iOS](@site/static/img/map/map-wikipedia-language-ios.png)

</TabItem>

</Tabs>

OsmAnd heeft speciale nuttige plaatsen die zijn gemarkeerd met een "W"-logo en gekoppeld zijn aan Wikipedia-artikelen. Deze punten kunnen net als elk ander POI-type worden weergegeven, via zoeken of door naar <Translate android="true" ids="configure_map"/> → <Translate android="true" ids="layer_poi"/> te gaan. Er is echter een speciale manier om Wikipedia-artikelen te filteren op **beschikbare talen**.  

[Lees meer](../plugins/wikipedia.md) hoe u de Wikipedia-functie in OsmAnd kunt downloaden en gebruiken.


## * Audio / Video Punten (Android) {#-audio--video-points-android}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![AV POI](@site/static/img/map/av_poi.png)

</TabItem>

</Tabs>

Audio-/videonotities zijn punten met audio-, foto- en videogegevens op de kaart die door gebruikers zijn gemaakt.  

Vereist [Audio-/videonotitieplugin](../plugins/audio-video-notes.md).


## * OSM Bewerkingspunten {#-osm-edit-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*

![OSM edit POI](@site/static/img/map/osm_edit_poi.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_edits_title"/>*

![OSM edit POI](@site/static/img/map/osm_edit_poi.png)

</TabItem>

</Tabs>

OSM-bewerkingspunten zijn POI's die door gebruikers zijn gemaakt om toe te voegen aan het [OpenStreetMap-project](https://www.openstreetmap.org/).  

Vereist [OSM Bewerken plugin](../plugins/osm-editing.md).


## * OSM Notities {#-osm-notes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*

![OSM notes](@site/static/img/map/osm_note.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_notes_online_layer"/>*

![OSM notes](@site/static/img/map/osm_note.png)

</TabItem>

</Tabs>

OSM-notities zijn door gebruikers gemaakte POI's voor het melden van problemen met kaartgegevens in [OpenStreetMap](https://www.openstreetmap.org/). Nieuwe notities (nog niet geüpload naar OpenStreetMap) zijn groen gemarkeerd met een **+**, gesloten notities zijn groen gemarkeerd met een "V", en open notities zijn rood gemarkeerd. U kunt het zoomniveau voor het weergeven van notities aanpassen en kiezen of u gesloten notities wilt weergeven of verbergen.  

Vereist de [OSM Bewerken plugin](../plugins/osm-editing.md).


## Punten langs de route {#points-along-the-route}

Waypoints, POI's, Favoriete punten en Audio-/videonotities verwijzen allemaal naar het concept van het opslaan van locaties en routes in [GPX (GPS Exchange Format)](https://en.wikipedia.org/wiki/GPS_Exchange_Format). U kunt [dezelfde tags](../map/tracks/track-context-menu.md#display-custom-gpx-tags) gebruiken om ze te beschrijven en te bewerken.  

[Waypoints](#track-waypoints) zijn individuele punten op een kaart of route. Ze kunnen worden gebruikt om bepaalde plaatsen te markeren die belangrijk kunnen zijn voor navigatie of het vastleggen van uw reizen. U kunt bijvoorbeeld een waypoint op de kaart maken om een belangrijk kruispunt of richtingsverandering aan te geven.  

[Nuttige plaatsen (POI's)](#points-of-interest-pois) zijn plaatsen van bijzonder belang voor gebruikers. Dit kunnen bezienswaardigheden, restaurants, hotels, benzinestations en andere interessante plaatsen zijn die u wilt noteren of bezoeken.  

[Favoriete punten](#favorites) zijn plaatsen die gebruikers bijzonder belangrijk of interessant vinden en opslaan in hun lijst met favoriete plaatsen. Plaatsen kunnen elke locatie omvatten die u later wilt vinden en terugkeren.

[Audio-/videonotities](#-audio--video-points-android--audio--video-points-android). In GPX-formaat kunt u audio- en video-opnamen opslaan als waypoints. Hiermee kunt u mediabestanden koppelen aan specifieke locaties op de kaart of route.  

Al deze puntentypen kunnen in GPX-formaat worden opgeslagen om u locatie-informatie te bieden en te helpen bij navigatie en routeplanning. Ze dienen verschillende doelen, maar het algemene idee is om geografische informatie op te slaan en te verzenden, zodat u deze kunt gebruiken bij uw navigatietaken.


## Gerelateerde artikelen {#related-articles}

- [Kaartmenu configureren](../map/configure-map-menu.md)
- [Vector kaarten (Kaartstijlen)](./vector-maps.md)
- [Rasterkaarten (Online / Offline)](./raster-maps.md)

> *Laatst bijgewerkt: juni 2025*