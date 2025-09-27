---
source-hash: a6e0323cbd4db8c2fd02e4930fceccaef76a54dd4ddb8b27261785baf14b6d7c
sidebar_position: 7
title:  Punten op de Kaart
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Overzicht {#overview}

De kaart kan punten weergeven zoals [Favorieten](#favorites), [Nuttige Plaatsen (POI's)](#points-of-interest-pois), [Markers](#markers), [Wikipedia](#-wikipedia), [Zoekresultaten](#search-results-poi), [Audio- en videonotities](#-audio--video-points-android), en [OSM-bewerkingen](#-osm-edit-points).


## Favorieten {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Favorietenlaag Android](@site/static/img/map/favorites_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Favorietenlaag iOS](@site/static/img/map/favorites_layer_ios.png)  

</TabItem>

</Tabs>

[Favorieten](../personal/favorites.md) zijn speciale punten die door gebruikers zijn gemarkeerd. Standaard verschijnen ze als gele sterren op de kaart, hoewel ze kunnen worden aangepast met elke kleur, vorm en icoon. Ze worden zichtbaar op de kaart vanaf zoomniveau 6.

:::info
In de Android-versie van OsmAnd kunt u alleen bepaalde groepsfavorieten op de kaart en tijdens het zoeken weergeven. Ga naar *Menu → Mijn Plaatsen → Favorieten*, tik op &#8942; en kies *Toon op de kaart* of niet.
:::


## Namen van Favorieten en POI's {#favorite-and-poi-names}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Favorietenlabels laag](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Favorietenlabels laag](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

</Tabs>

Standaard worden Favorieten en nuttige plaatsen (POI's) zonder namen weergegeven, om de kaart niet vol te proppen met tekst. U kunt namen inschakelen in het menu Kaart configureren.  


## Nuttige Plaatsen (POI's) {#points-of-interest-pois}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,layer_poi"/>*

![POI-overlay Android](@site/static/img/map/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,poi_overlay"/>*

![POI-overlay iOS](@site/static/img/map/poi_overlay_ios.png)  

</TabItem>

</Tabs>

[Nuttige plaatsen (POI's)](https://wiki.openstreetmap.org/wiki/Points_of_interest) zijn specifieke locaties die met een symbool op de kaart zijn gemarkeerd. Ze duiden interessante of nuttige plaatsen en objecten aan en maken deel uit van de [Vectorkaarten](../map/vector-maps.md).  

De meest opvallende POI's worden automatisch op de kaart weergegeven. U kunt echter een specifiek type POI's selecteren (bijv. *Restaurants*) en deze worden allemaal gemarkeerd op de kaart met een **oranje cirkel** (vanaf zoomniveau 9).  

Gedetailleerde informatie over een nuttige plaats is te vinden in het [Contextmenu](../map/map-context-menu.md) dat verschijnt wanneer u op het punt [tikt](../map/map-context-menu.md#select-an-object-single-tap).  


### POI-types {#poi-types}

![Enkele POI-selectie](@site/static/img/map/single_selection_android.png) ![Meerdere POI-selecties](@site/static/img/map/multiple_selection_android.png)

U kunt één of meerdere standaard OsmAnd POI-types selecteren, of uw eigen [POI-filter](../search/search-poi.md) maken en selecteren om POI's op de kaart weer te geven.

**Android**. Tik op de knop linksonder om te wisselen tussen het selecteren van één of meerdere nuttige plaatsen.


### POI's in Kaartstijl {#map-style-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*

![POI in kaartstijl](@site/static/img/map/poi_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,rendering_category_hide"/>*

![POI in topografische stijl](@site/static/img/map/poi_layer_topo_style.png)  

</TabItem>

</Tabs>

Elk POI-type in OsmAnd heeft een specifiek icoon en kleur toegewezen gekregen. Het [zoomniveau](../map/vector-maps.md#details) en het ontwerp van POI's kunnen verschillen in sommige [kaartstijlen](../map/vector-maps.md#default-map-styles).  

[Lees meer](../map/vector-maps.md#hide).


## Markers {#markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,map_markers_item"/>*

![Kaartmarkers Android](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,map_markers"/>*

![Kaartmarkers iOS](@site/static/img/map/map_markers_ios.png)  

</TabItem>

</Tabs>

[Kaartmarkers](../personal/markers.md) zijn tijdelijke punten die op de kaart als vlaggen worden gemarkeerd. Hun uiterlijk kan worden aangepast met **pijlen** (Pijlen op de kaart) en **afstandsindicatie** (Richtingslijnen).  

U kunt meer lezen over het uiterlijk van de markers in dit [artikel](../personal/markers#appearance-on-the-map).


## Routepunten van een Track {#track-waypoints}

![Track op kaart](@site/static/img/map/track_point_on_map.png)

Trackpunten (waypoints) maken deel uit van Track (GPX)-bestanden. Deze punten worden automatisch weergegeven als de track op de kaart staat. Ze zien eruit en kunnen worden geconfigureerd zoals [Favorieten](#favorites) - icoon, namen, kleur, vorm. Hoe u een routepunt kunt aanmaken en toevoegen, leest u in het [artikel](../map/tracks/track-context-menu.md#add-waypoint-to-a-track).  

[Lees meer](../map/tracks/index.md) over tracks op de kaart.


## Zoekresultaten (POI) {#search-results-poi}

![POI-zoekopdracht](@site/static/img/map/poi_search.png) ![POI-zoekresultaat](@site/static/img/map/poi_search_result.png)

Zoekresultaten kunnen op de kaart worden weergegeven als een speciale POI-laag. Tik tijdens het zoeken op een speciale rij (**<Translate android="true" ids="shared_string_show_on_map"/>**) om POI's op de kaart weer te geven.  

Om POI's uit te schakelen, klikt u op de **X** in de rechterbovenhoek.  

Lees meer over [zoeken](../search/index.md).


## * Beelden op Straatniveau {#-street-level-imagery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![Mapillary-filter](@site/static/img/map/mapillary_filter.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![Mapillary straatbeeld](@site/static/img/map/mapillary_street-view.png)

</TabItem>

</Tabs>

[Beelden op straatniveau (Mapillary)](../plugins/mapillary.md) worden weergegeven als groene stippen op de kaart. Foto's van het straatbeeld zijn aan deze stippen gekoppeld. U kunt een [filter](../plugins/mapillary.md#data-filtering) maken en de foto's selecteren die u op de kaart wilt weergeven. Om een straatbeeldfoto te openen, tikt u op de groene stip.  

Vereist de [Mapillary-plugin](../plugins/mapillary.md).


## * Parkeerpunt {#-parking-point}

![Beperkt parkeren](@site/static/img/map/context_menu_limited_parking.png) ![Onbeperkt parkeren](@site/static/img/map/context_menu_unlimited_parking.png)

Een [Parkeerpunt](../plugins/parking.md) is een punt dat door gebruikers op de kaart is gemarkeerd om informatie over de exacte locatie van het voertuig op te slaan. Het kan worden onderverdeeld in onbeperkte en beperkte parkeerzones.  

Vereist de [Parkeerpositie-plugin](../plugins/parking.md).


## * Wikipedia {#-wikipedia}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Wikipedia op kaart](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

![Wikipedia-taal - iOS](@site/static/img/map/map-wikipedia-language-ios.png)

</TabItem>

</Tabs>

OsmAnd heeft speciale nuttige plaatsen gemarkeerd met een "W"-logo en gekoppeld aan Wikipedia-artikelen. Deze punten kunnen net als elk ander POI-type worden weergegeven, via zoeken of door naar <Translate android="true" ids="configure_map"/> → <Translate android="true" ids="layer_poi"/> te gaan. Er is echter een speciale manier om Wikipedia-artikelen te filteren op **beschikbare talen**.  

[Lees meer](../plugins/wikipedia.md) over hoe u de Wikipedia-functie in OsmAnd kunt downloaden en gebruiken.


## * Audio- / Videopunten (Android) {#-audio--video-points-android}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![AV POI](@site/static/img/map/av_poi.png)

</TabItem>

</Tabs>

Audio- / Videonotities zijn punten met audio-, foto- en videogegevens op de kaart die door gebruikers zijn gemaakt.  

Vereist de [Audio- / Videonotities-plugin](../plugins/audio-video-notes.md).


## * OSM-bewerkingspunten {#-osm-edit-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*

![OSM-bewerkings-POI](@site/static/img/map/osm_edit_poi.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_edits_title"/>*

![OSM-bewerkings-POI](@site/static/img/map/osm_edit_poi.png)

</TabItem>

</Tabs>

OSM-bewerkingspunten zijn POI's die door gebruikers zijn gemaakt om te worden toegevoegd aan het [OpenStreetMap-project](https://www.openstreetmap.org/).  

Vereist de [OSM Bewerken-plugin](../plugins/osm-editing.md).


## * OSM-notities {#-osm-notes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*

![OSM-notities](@site/static/img/map/osm_note.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_notes_online_layer"/>*

![OSM-notities](@site/static/img/map/osm_note.png)

</TabItem>

</Tabs>

OSM-notities zijn door gebruikers gemaakte POI's voor het melden van problemen met kaartgegevens in [OpenStreetMap](https://www.openstreetmap.org/). Nieuwe notities (nog niet geüpload naar OpenStreetMap) zijn groen gemarkeerd met een **+**, gesloten notities zijn groen gemarkeerd met een "V", en open notities zijn rood gemarkeerd. U kunt het zoomniveau voor het weergeven van notities aanpassen en kiezen of u gesloten notities wilt weergeven of verbergen.  

Vereist de [OSM Bewerken-plugin](../plugins/osm-editing.md).


## Punten langs de Route {#points-along-the-route}

Routepunten, POI's, Favoriete punten en Audio-/videonotities verwijzen allemaal naar het concept van het opslaan van locaties en routes in [GPX (GPS Exchange Format)](https://en.wikipedia.org/wiki/GPS_Exchange_Format). U kunt [dezelfde tags](../map/tracks/track-context-menu.md#display-custom-gpx-tags) gebruiken om ze te beschrijven en te bewerken.  

[Routepunten](#track-waypoints) zijn individuele punten op een kaart of route. Ze kunnen worden gebruikt om bepaalde plaatsen te markeren die belangrijk kunnen zijn voor het navigeren of het vastleggen van uw reizen. U kunt bijvoorbeeld een routepunt op de kaart maken om een belangrijk kruispunt of een richtingsverandering aan te geven.  

[Nuttige plaatsen (POI's)](#points-of-interest-pois) zijn plaatsen die van speciaal belang zijn voor gebruikers. Dit kunnen bezienswaardigheden, restaurants, hotels, benzinestations en andere interessante plaatsen zijn die u misschien wilt noteren of bezoeken.  

[Favoriete punten](#favorites) zijn plaatsen die gebruikers bijzonder belangrijk of interessant vinden en opslaan in hun lijst met favoriete plaatsen. Plaatsen kunnen elke locatie omvatten die u later misschien wilt vinden en terugkeren.

[Audio-/videonotities](#-audio--video-points-android). In GPX-formaat kunt u audio- en video-opnamen opslaan als routepunten. Hiermee kunt u mediabestanden koppelen aan specifieke locaties op de kaart of route.  

Al deze puntentypes kunnen in GPX-formaat worden opgeslagen om u locatie-informatie te bieden en te helpen bij navigatie en routeplanning. Ze dienen verschillende doelen, maar het algemene idee is om geografische informatie op te slaan en door te geven, zodat u deze kunt gebruiken bij uw navigatietaken.


## Gerelateerde Artikelen {#related-articles}

- [Menu Kaart configureren](../map/configure-map-menu.md)
- [Vectorkaarten (Kaartstijlen)](./vector-maps.md)
- [Rasterkaarten (Online / Offline)](./raster-maps.md)