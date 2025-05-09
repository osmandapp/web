---
source-hash: aa40addf6503f2a62232139c48a2c15c3e10cc75c46124828533c07d410d00b2 
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


## Aperçu

La carte peut afficher des points tels que les [Favoris](#favorites), les [Points d'intérêt](#points-of-interest-pois), les [Marqueurs](#markers), [Wikipedia](#-wikipedia), les [Résultats de recherche](#search-results-poi), les [Notes audio et vidéo](#-audio--video-points-android), et les [Points d'édition OSM](#-osm-edit-points).


## Favoris

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Favotires layer Android](@site/static/img/map/favorites_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Favotires layer iOS](@site/static/img/map/favorites_layer_ios.png)  

</TabItem>

</Tabs>

Les [Favoris](../personal/favorites.md) sont des points spéciaux marqués par les utilisateurs. Par défaut, ils apparaissent comme des étoiles jaunes sur la carte, bien qu'ils puissent être personnalisés avec n'importe quelle couleur, forme et icône. Ils deviennent visibles sur la carte à partir du niveau de zoom 6.

:::info
Dans la version Android d'OsmAnd, vous pouvez afficher uniquement certains groupes de favoris sur la carte et pendant la recherche. Allez dans *Menu → Mes lieux → Favoris*, appuyez sur &#8942; et choisissez *Afficher sur la carte* ou non.
:::


## Noms des favoris et des POI

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Favotire labels layer](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Favotire labels layer](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

</Tabs>

Par défaut, les favoris et les points d'intérêt (POI) sont affichés sans nom, afin de ne pas encombrer la carte avec du texte. Vous pouvez activer les noms dans le menu Configurer la carte.  


## Points d'intérêt (POI)

Activer ou désactiver les points d'intérêt de type **sélectionné** sur la carte :

- **<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="shared_string_menu,configure_map,layer_poi"/>*
- **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,poi_overlay"/>*  

![POI overlay Android](@site/static/img/map/poi_overlay_android.png) ![POI overlay iOS](@site/static/img/map/poi_overlay_ios.png)  

Les [Points d'intérêt (POI)](https://wiki.openstreetmap.org/wiki/Points_of_interest) sont des points spécifiques mis en évidence par une icône sur la carte. Ils représentent des lieux et des objets intéressants ou utiles et font partie des [Cartes vectorielles](../map/vector-maps.md). Les POI les plus notables sont affichés automatiquement sur la carte. Cependant, vous pouvez sélectionner un type spécifique de POI (par exemple, Restaurants) et ils seront tous mis en évidence sur la carte dans un **cercle orange** (à partir du niveau de zoom 9). Vous pouvez trouver des informations détaillées sur le point d'intérêt dans le [Menu contextuel](../map/map-context-menu.md) qui apparaît lors d'un [appui court](../map/map-context-menu.md#select-an-object-short-tap) sur le point.  


### Types de POI

![Single POI Selection](@site/static/img/map/single_selection_android.png) ![Multiple POI Selection](@site/static/img/map/multiple_selection_android.png)

Vous pouvez sélectionner un ou plusieurs types de POI standard d'OsmAnd, ou créer votre propre [filtre de POI](../search/search-poi.md) et le sélectionner pour afficher les POI sur la carte.

**Android**. Appuyez sur le bouton en bas à gauche pour basculer entre la sélection d'un ou plusieurs points d'intérêt.


### POI de style de carte

Masquer les POI du style de carte :

- **<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*
- **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,rendering_category_hide"/>*

![POI on map style](@site/static/img/map/poi_layer.png) ![POI on topo style](@site/static/img/map/poi_layer_topo_style.png)

Chaque type de POI dans OsmAnd se voit attribuer une icône et une couleur spécifiques. Le [niveau de zoom](../map/vector-maps.md#details) et la conception des POI peuvent être différents dans certains [styles de carte](../map/vector-maps.md#default-map-styles).  

[En savoir plus](../map/vector-maps.md#hide).


## Marqueurs

Suivez le chemin vers les marqueurs disponibles et leurs paramètres :

- **Android**: *<Translate android="true" ids="shared_string_menu,map_markers_item"/>*  
- **iOS**: *<Translate ios="true" ids="shared_string_menu,map_markers"/>*

![Map markers Android](@site/static/img/map/map_markers_android.png) ![Map markers iOS](@site/static/img/map/map_markers_ios.png)

Les [Marqueurs de carte](../personal/markers.md) sont des points temporaires indiqués sur la carte sous forme de drapeaux. Leur apparence peut être configurée avec des **flèches** (Flèches sur la carte) et une **indication de distance** (Lignes de direction).  

Vous pouvez en savoir plus sur l'apparence des marqueurs dans cet [article](../personal/markers#appearance-on-the-map).


## Points de passage de trace

![Track on map](@site/static/img/map/track_point_on_map.png)

Les points de trace (points de passage) font partie des fichiers de trace (GPX). Ces points sont affichés automatiquement si la trace est sur la carte. Ils ressemblent et peuvent être configurés de manière similaire aux [Favoris](#favorites) - icône, noms, couleur, forme. Pour créer et ajouter un point de passage, lisez [ici](../map/tracks/track-context-menu.md#add-waypoint-to-a-track).  

[En savoir plus](../map/tracks/index.md) sur les traces sur la carte.


## Résultats de recherche (POI)

![POI search](@site/static/img/map/poi_search.png) ![POI search result](@site/static/img/map/poi_search_result.png)

Les résultats de recherche peuvent être affichés sur la carte comme une couche spéciale de POI. Pendant la recherche, appuyez sur une ligne spéciale (**<Translate android="true" ids="shared_string_show_on_map"/>**) pour afficher les POI sur la carte.  

Pour désactiver les POI, appuyez sur **X** dans le coin supérieur droit.  

En savoir plus sur la [recherche](../search/index.md).


## * Imagerie au niveau de la rue

Activer ou désactiver l'imagerie au niveau de la rue sur la carte :

- **<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*  
- **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![Mapillary filter](@site/static/img/map/mapillary_filter.png) ![Mapillary street view](@site/static/img/map/mapillary_street-view.png)  

L'[Imagerie au niveau de la rue (Mapillary)](../plugins/mapillary.md) est affichée sous forme de points verts sur la carte. Des photos avec une vue de la rue sont attachées à ces points. Vous pouvez créer un [filtre](../plugins/mapillary.md#filtering-the-data) et sélectionner les photos que vous souhaitez afficher sur la carte. Pour ouvrir une photo de vue de rue, vous devez appuyer sur le point vert.  

Nécessite le [plugin Mapillary](../plugins/mapillary.md).


## * Point de stationnement

![Limited parking](@site/static/img/map/context_menu_limited_parking.png) ![Unlimited parking](@site/static/img/map/context_menu_unlimited_parking.png)

Un [Point de stationnement](../plugins/parking.md) est un point marqué par les utilisateurs sur la carte pour stocker des informations sur l'emplacement exact du véhicule. Il peut être divisé en zones de stationnement illimitées et restreintes.  

Nécessite le [plugin Position de stationnement](../plugins/parking.md).


## * Wikipedia

Activer ou désactiver les articles Wikipedia sur la carte et filtrer par langue :

- **<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="shared_string_menu,configure_map,local_indexes_cat_wiki"/>*
- **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,local_indexes_cat_wiki"/>*  

![Wikipedia on map](@site/static/img/map/map-wikipedia-on-map.png) ![Wikipedia language - iOS](@site/static/img/map/map-wikipedia-language-ios.png)  

OsmAnd a des points d'intérêt spéciaux indiqués par le logo "W" et des articles Wikipedia attachés aux points. Ces points peuvent être affichés exactement comme tout autre type de POI via la recherche ou <Translate android="true" ids="configure_map"/> → <Translate android="true" ids="layer_poi"/>. Cependant, il existe un moyen spécial de filtrer les articles Wikipedia par **langues disponibles**.  

[En savoir plus](../plugins/wikipedia.md) sur la façon de télécharger et d'utiliser la fonctionnalité Wikipedia dans OsmAnd.


## * Points audio / vidéo (Android)

Activer ou désactiver les points d'enregistrement sur la carte :

- **<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![AV POI](@site/static/img/map/av_poi.png)

Les notes audio / vidéo sont des points avec des données audio, photo et vidéo sur la carte créés par les utilisateurs.  

Nécessite le [plugin Notes audio / vidéo](../plugins/audio-video-notes.md).


## * Points d'édition OSM

Activer ou désactiver les modifications OSM sur la carte :

- **<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*
- **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_edits_title"/>*

![OSM edit POI](@site/static/img/map/osm_edit_poi.png)

Les points d'édition OSM sont des POI créés par les utilisateurs pour les ajouter au [projet OpenStreetMap](https://www.openstreetmap.org/).  

Nécessite le [plugin d'édition OSM](../plugins/osm-editing.md).


## * Notes OSM

Activer ou désactiver les notes OSM sur la carte :

- **<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*
- **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_notes_online_layer"/>*

![OSM notes](@site/static/img/map/osm_note.png)

Les points de note OSM sont des POI créés par les utilisateurs pour signaler des problèmes concernant les données cartographiques dans [OpenStreetMap](https://www.openstreetmap.org/). Une nouvelle note (non téléchargée sur OpenStreetMap) est marquée en vert avec **+**, la note fermée est marquée en vert avec "V", et la note ouverte est marquée en rouge. Vous pouvez personnaliser le niveau de zoom pour afficher les notes et choisir d'afficher ou de masquer les notes fermées.  

Nécessite le [plugin d'édition OSM](../plugins/osm-editing.md#how-to-report-a-mistake).


## Points le long de l'itinéraire

Les points de passage, les POI, les points favoris et les notes audio/vidéo font tous référence au concept de sauvegarde des emplacements et des itinéraires au format [GPX (GPS Exchange Format)](https://en.wikipedia.org/wiki/GPS_Exchange_Format). Vous pouvez utiliser [les mêmes balises](../map/tracks/track-context-menu.md#display-custom-gpx-tags) pour les décrire et les modifier.  

Les [Points de passage](#track-waypoints) sont des points individuels sur une carte ou un itinéraire. Ils peuvent être utilisés pour marquer certains lieux qui peuvent être importants pour la navigation ou l'enregistrement de vos voyages. Par exemple, vous pouvez créer un point de passage sur la carte pour indiquer une intersection importante ou un changement de direction.  

Les [Points d'intérêt (POI)](#points-of-interest-pois) sont des lieux d'intérêt particulier pour les utilisateurs. Il peut s'agir de points de repère, de restaurants, d'hôtels, de stations-service et d'autres lieux d'intérêt que vous pourriez vouloir noter ou visiter.  

Les [Points favoris](#favorites) sont des lieux que les utilisateurs trouvent particulièrement importants ou intéressants et qu'ils enregistrent dans leur liste de lieux favoris. Les lieux peuvent inclure n'importe quel emplacement que vous pourriez vouloir retrouver et revisiter plus tard.

Les [Notes audio/vidéo](#-audio--video-points-android). Au format GPX, vous pouvez enregistrer des enregistrements audio et vidéo sous forme de points de passage. Cela vous permet d'associer des fichiers multimédias à des emplacements spécifiques sur la carte ou l'itinéraire.  

Tous ces types de points peuvent être enregistrés au format GPX pour vous fournir des informations de localisation et vous aider à naviguer et à planifier des itinéraires. Ils servent à des fins différentes, mais l'idée générale est de stocker et de transmettre des informations géographiques afin que vous puissiez les utiliser dans leurs tâches de navigation.


## Articles connexes

- [Menu Configurer la carte](../map/configure-map-menu.md)
- [Cartes vectorielles (Styles de carte)](./vector-maps.md)
- [Cartes raster (en ligne / hors ligne)](./raster-maps.md)

> *Cet article a été mis à jour pour la dernière fois en novembre 2024*

