---
source-hash: a299ff4aecadfdc9bf18081279073760b514c798b579cc75e3642a2a8f646195
sidebar_position: 7
title:  Points sur la carte
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Vue d'ensemble {#overview}

La carte peut afficher des points tels que les [Favoris](#favorites), les [Points d'intérêt](#points-of-interest-pois), les [Marqueurs](#markers), [Wikipedia](#-wikipedia--wikipedia), les [Résultats de recherche](#search-results-poi), les [Notes audio et vidéo](#-audio--video-points-android--audio--video-points-android), et les [Modifications OSM](#-osm-edit-points--osm-edit-points).


## Favoris {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Favotires layer Android](@site/static/img/map/favorites_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Favotires layer iOS](@site/static/img/map/favorites_layer_ios.png)  

</TabItem>

</Tabs>

Les [Favoris](../personal/favorites.md) sont des points spéciaux marqués par les utilisateurs. Par défaut, ils apparaissent comme des étoiles jaunes sur la carte, bien qu'ils puissent être personnalisés avec n'importe quelle couleur, forme et icône. Ils deviennent visibles sur la carte à partir du niveau de zoom 6.

:::info
Dans la version Android d'OsmAnd, vous pouvez afficher uniquement certains groupes de favoris sur la carte et pendant la recherche. Allez dans *Menu → Mes lieux → Favoris*, appuyez sur &#8942; et choisissez *Afficher sur la carte* ou non.
:::


## Noms des favoris et des POI {#favorite-and-poi-names}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Favotire labels layer](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Favotire labels layer](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

</Tabs>

Par défaut, les favoris et les points d'intérêt (POI) sont affichés sans nom, afin de ne pas encombrer la carte avec du texte. Vous pouvez activer les noms dans le menu Configurer la carte.  


## Points d'intérêt (POI) {#points-of-interest-pois}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Aller à : *<Translate android="true" ids="shared_string_menu,configure_map,layer_poi"/>*

![POI overlay Android](@site/static/img/map/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Aller à : *<Translate ios="true" ids="shared_string_menu,configure_map,poi_overlay"/>*

![POI overlay iOS](@site/static/img/map/poi_overlay_ios.png)  

</TabItem>

</Tabs>

Les [Points d'intérêt (POI)](https://wiki.openstreetmap.org/wiki/Points_of_interest) sont des lieux spécifiques marqués d'un symbole sur la carte. Ils indiquent des lieux et des objets intéressants ou utiles et font partie des [Cartes vectorielles](../map/vector-maps.md).  

Les POI les plus notables sont affichés automatiquement sur la carte. Cependant, vous pouvez sélectionner un type spécifique de POI (par exemple, *Restaurants*) et tous seront mis en évidence sur la carte par un **cercle orange** (à partir du niveau de zoom 9).  

Des informations détaillées sur un point d'intérêt peuvent être trouvées dans le [Menu contextuel](../map/map-context-menu.md) qui apparaît lorsque vous [appuyez](../map/map-context-menu.md#select-an-object-single-tap) sur le point.  


### Types de POI {#poi-types}

![Single POI Selection](@site/static/img/map/single_selection_android.png) ![Multiple POI Selection](@site/static/img/map/multiple_selection_android.png)

Vous pouvez sélectionner un ou plusieurs types de POI standard d'OsmAnd, ou créer votre propre [filtre de POI](../search/search-poi.md) et le sélectionner pour afficher les POI sur la carte.

**Android**. Appuyez sur le bouton inférieur gauche pour basculer entre la sélection d'un ou plusieurs points d'intérêt.


### Style de carte POI {#map-style-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Aller à : *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*

![POI on map style](@site/static/img/map/poi_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Aller à : *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,rendering_category_hide"/>*

![POI on topo style](@site/static/img/map/poi_layer_topo_style.png)  

</TabItem>

</Tabs>

Chaque type de POI dans OsmAnd se voit attribuer une icône et une couleur spécifiques. Le [niveau de zoom](../map/vector-maps.md#details) et la conception des POI peuvent être différents dans certains [styles de carte](../map/vector-maps.md#default-map-styles).  

[En savoir plus](../map/vector-maps.md#hide).


## Marqueurs {#markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Aller à : *<Translate android="true" ids="shared_string_menu,map_markers_item"/>*

![Map markers Android](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Aller à : *<Translate ios="true" ids="shared_string_menu,map_markers"/>*

![Map markers iOS](@site/static/img/map/map_markers_ios.png)  

</TabItem>

</Tabs>

Les [Marqueurs de carte](../personal/markers.md) sont des points temporaires marqués sur la carte comme des drapeaux. Leur apparence peut être personnalisée à l'aide de **flèches** (Flèches sur la carte) et d'une **indication de distance** (Lignes de direction).  

Vous pouvez en savoir plus sur l'apparence des marqueurs dans cet [article](../personal/markers#appearance-on-the-map).


## Points de passage de trace {#track-waypoints}

![Track on map](@site/static/img/map/track_point_on_map.png)

Les points de trace (points de passage) font partie des fichiers de trace (GPX). Ces points sont affichés automatiquement si la trace est sur la carte. Ils ressemblent et peuvent être configurés de manière similaire aux [Favoris](#favorites) - icône, noms, couleur, forme. Pour savoir comment créer et ajouter un point de passage, lisez l'[article](../map/tracks/track-context-menu.md#add-waypoint-to-a-track).  

[En savoir plus](../map/tracks/index.md) sur les traces sur la carte.


## Résultats de recherche (POI) {#search-results-poi}

![POI search](@site/static/img/map/poi_search.png) ![POI search result](@site/static/img/map/poi_search_result.png)

Les résultats de recherche peuvent être affichés sur la carte comme une couche spéciale de POI. Pendant la recherche, appuyez sur une ligne spéciale (**<Translate android="true" ids="shared_string_show_on_map"/>**) pour afficher les POI sur la carte.  

Pour désactiver les POI, appuyez sur **X** dans le coin supérieur droit.  

En savoir plus sur la [recherche](../search/index.md).


## * Imagerie au niveau de la rue {#-street-level-imagery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Aller à : *<Translate android="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![Mapillary filter](@site/static/img/map/mapillary_filter.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Aller à : *<Translate ios="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![Mapillary street view](@site/static/img/map/mapillary_street-view.png)

</TabItem>

</Tabs>

L'[Imagerie au niveau de la rue (Mapillary)](../plugins/mapillary.md) est affichée sous forme de points verts sur la carte. Des photos de la vue de la rue sont attachées à ces points. Vous pouvez créer un [filtre](../plugins/mapillary.md#data-filtering) et sélectionner les photos que vous souhaitez afficher sur la carte. Pour ouvrir une photo de la vue de la rue, appuyez sur le point vert.  

Nécessite le [plugin Mapillary](../plugins/mapillary.md).


## * Point de stationnement {#-parking-point}

![Limited parking](@site/static/img/map/context_menu_limited_parking.png) ![Unlimited parking](@site/static/img/map/context_menu_unlimited_parking.png)

Un [Point de stationnement](../plugins/parking.md) est un point marqué par les utilisateurs sur la carte pour stocker des informations sur l'emplacement exact du véhicule. Il peut être divisé en zones de stationnement illimitées et restreintes.  

Nécessite le [plugin Position de stationnement](../plugins/parking.md).


## * Wikipedia {#-wikipedia}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Aller à : *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Wikipedia on map](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Aller à : *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

![Wikipedia language - iOS](@site/static/img/map/map-wikipedia-language-ios.png)

</TabItem>

</Tabs>

OsmAnd propose des points d'intérêt spéciaux marqués d'un logo "W" et liés à des articles Wikipedia. Ces points peuvent être affichés comme n'importe quel autre type de POI, via la recherche ou en allant dans <Translate android="true" ids="configure_map"/> → <Translate android="true" ids="layer_poi"/>. Cependant, il existe un moyen spécial de filtrer les articles Wikipedia par **langues disponibles**.  

[En savoir plus](../plugins/wikipedia.md) sur le téléchargement et l'utilisation de la fonctionnalité Wikipedia dans OsmAnd.


## * Points audio / vidéo (Android) {#-audio--video-points-android}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Aller à : *<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![AV POI](@site/static/img/map/av_poi.png)

</TabItem>

</Tabs>

Les notes audio / vidéo sont des points avec des données audio, photo et vidéo sur la carte créés par les utilisateurs.  

Nécessite le [plugin Notes audio / vidéo](../plugins/audio-video-notes.md).


## * Points de modification OSM {#-osm-edit-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Aller à : *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*

![OSM edit POI](@site/static/img/map/osm_edit_poi.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Aller à : *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_edits_title"/>*

![OSM edit POI](@site/static/img/map/osm_edit_poi.png)

</TabItem>

</Tabs>

Les points de modification OSM sont des POI créés par les utilisateurs pour être ajoutés au [projet OpenStreetMap](https://www.openstreetmap.org/).  

Nécessite le [plugin Modification OSM](../plugins/osm-editing.md).


## * Notes OSM {#-osm-notes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Aller à : *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*

![OSM notes](@site/static/img/map/osm_note.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Aller à : *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_notes_online_layer"/>*

![OSM notes](@site/static/img/map/osm_note.png)

</TabItem>

</Tabs>

Les notes OSM sont des POI créés par les utilisateurs pour signaler des problèmes avec les données cartographiques dans [OpenStreetMap](https://www.openstreetmap.org/). Les nouvelles notes (pas encore téléchargées sur OpenStreetMap) sont marquées en vert avec un **+**, les notes fermées sont marquées en vert avec un "V", et les notes ouvertes sont marquées en rouge. Vous pouvez personnaliser le niveau de zoom pour afficher les notes et choisir d'afficher ou de masquer les notes fermées.  

Nécessite le [plugin Modification OSM](../plugins/osm-editing.md).


## Points le long de l'itinéraire {#points-along-the-route}

Les points de passage, les POI, les points favoris et les notes audio/vidéo font tous référence au concept de sauvegarde des emplacements et des itinéraires au format [GPX (GPS Exchange Format)](https://en.wikipedia.org/wiki/GPS_Exchange_Format). Vous pouvez utiliser [les mêmes balises](../map/tracks/track-context-menu.md#display-custom-gpx-tags) pour les décrire et les modifier.  

Les [Points de passage](#track-waypoints) sont des points individuels sur une carte ou un itinéraire. Ils peuvent être utilisés pour marquer certains lieux qui peuvent être importants pour la navigation ou l'enregistrement de vos voyages. Par exemple, vous pouvez créer un point de passage sur la carte pour indiquer une intersection importante ou un changement de direction.  

Les [Points d'intérêt (POI)](#points-of-interest-pois) sont des lieux d'intérêt particulier pour les utilisateurs. Il peut s'agir de points de repère, de restaurants, d'hôtels, de stations-service et d'autres lieux d'intérêt que vous pourriez vouloir noter ou visiter.  

Les [Points favoris](#favorites) sont des lieux que les utilisateurs trouvent particulièrement importants ou intéressants et qu'ils enregistrent dans leur liste de lieux favoris. Les lieux peuvent inclure n'importe quel emplacement que vous pourriez vouloir retrouver et revisiter plus tard.

[Notes audio/vidéo](#-audio--video-points-android--audio--video-points-android). Au format GPX, vous pouvez enregistrer des enregistrements audio et vidéo en tant que points de passage. Cela vous permet d'associer des fichiers multimédias à des emplacements spécifiques sur la carte ou l'itinéraire.  

Tous ces types de points peuvent être enregistrés au format GPX pour vous fournir des informations de localisation et vous aider à naviguer et à planifier des itinéraires. Ils servent à des fins différentes, mais l'idée générale est de stocker et de transmettre des informations géographiques afin que vous puissiez les utiliser dans leurs tâches de navigation.


## Articles connexes {#related-articles}

- [Menu Configurer la carte](../map/configure-map-menu.md)
- [Cartes vectorielles (Styles de carte)](./vector-maps.md)
- [Cartes raster (En ligne / Hors ligne)](./raster-maps.md)

> *Dernière mise à jour : juin 2025*