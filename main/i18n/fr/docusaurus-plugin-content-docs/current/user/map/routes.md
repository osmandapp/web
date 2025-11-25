---
source-hash: c542cbb5952fb2ff6a44defcd1d4f1428cda6f2f08e20fdd5c2611ae081556a3
sidebar_position: 10
title:  Itinéraires
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
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Aperçu {#overview}

OsmAnd dispose de nombreuses fonctionnalités puissantes pour afficher différents [itinéraires](#type-of-routes) sur la carte. Par défaut, ces itinéraires font partie des [cartes vectorielles](./vector-maps.md#routes) (données OpenStreetMap), mais une fonctionnalité similaire est fournie par les [traces](./tracks/index.md) qui peuvent être créées avec [Planifier un itinéraire](../plan-route/create-route.md), importées en tant que [traces GPX](#save-as-a-track), ou enregistrées avec le [plugin Enregistrement de trajet](../plugins/trip-recording.md). La légende de la carte des itinéraires se trouve [ici](../map-legend/osmand.md#routes).


## Types d'itinéraires {#type-of-routes}

Les itinéraires représentent différentes activités de plein air en utilisant les données d'[OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Appuyer sur **l'icône de bouclier avec un numéro d'itinéraire ou un drapeau d'itinéraire** sur la carte ouvrira un menu contextuel qui fournit des informations supplémentaires sur l'itinéraire et permet de l'utiliser pour la navigation.

Vous pouvez configurer le filtrage de certains types d'itinéraires dans le menu [Configurer la carte](../map/configure-map-menu.md).

### Itinéraires cyclables {#cycle-routes}

Les [itinéraires cyclables](https://wiki.openstreetmap.org/wiki/Cycle_routes) existent en trois types : *locaux* (`lcn`), *régionaux* (`rcn`), *nationaux* (`ncn`), *internationaux* (`icn`). De plus, les itinéraires cyclables peuvent faire partie de [réseaux de nœuds](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). Vous pouvez choisir comment attribuer une couleur aux segments de l'itinéraire :

- ***<Translate android="true" ids="layer_route"/>***.  
![Itinéraires sur la carte - itinéraires cyclables](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  
![Itinéraires sur la carte - réseaux de nœuds cyclables](@site/static/img/map/map-routes-cycle-node-networks.png)

Vous trouverez plus d'informations dans l'article [Légende de la carte](../map-legend/index.md).


### Itinéraires VTT {#mountain-bike-routes}

Les itinéraires VTT ont un balisage spécifique dans [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) et peuvent être sélectionnés séparément des itinéraires cyclables.

<!--
| | | |
|------------|------------|------------|
| ***<Translate android="true" ids="mtb_scale"/>*** | Shows trails according to the MTB scale. More information is in the [Map Legend](../map-legend/index.md) article. | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png) |
| ***<Translate android="true" ids="mtb_imba"/>*** | Show MTB trails according to the International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). More information is in the article [Map legend](../map-legend/index.md). | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png) |
-->

- ***<Translate android="true" ids="mtb_scale"/>***. Affiche les sentiers selon l'échelle VTT. Plus d'informations dans l'article [Légende de la carte](../map-legend/index.md).  
![Itinéraires sur la carte - sentiers VTT](@site/static/img/map/map-routes-mtb-trails.png)  

- ***<Translate android="true" ids="mtb_imba"/>***. Affiche les sentiers VTT selon l'International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). Plus d'informations dans l'article [Légende de la carte](../map-legend/index.md).  
![Itinéraires sur la carte - sentiers VTT IMBA](@site/static/img/map/map-routes-mtb_imba-trails.png)

### Itinéraires de randonnée / marche {#hiking--walking-routes}

Les [itinéraires de randonnée](https://wiki.openstreetmap.org/wiki/Walking_Routes) existent en trois types : *locaux* (`lwn`), *régionaux* (`rwn`), *nationaux* (`nwn`), *internationaux* (`iwn`). De plus, les itinéraires de marche peuvent faire partie de [réseaux de nœuds](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). OsmAnd ne sépare pas les itinéraires de marche et de randonnée et les combine en un seul groupe. Vous pouvez choisir comment attribuer une couleur aux segments de l'itinéraire :

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***. Colore les itinéraires en fonction de leur [couleur locale](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) individuelle (si disponible dans OpenStreetMap) et du symbole de bouclier touristique.  
![Itinéraires sur la carte - randonnée osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***. Colore par [affiliation au réseau](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).  
![Itinéraires sur la carte - réseau de randonnée](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***. Colore les itinéraires en fonction du type de [réseau de nœuds](https://wiki.openstreetmap.org/wiki/Node_Networks) (international, régional ou local).  
![Itinéraires sur la carte - réseaux de nœuds de randonnée](@site/static/img/map/map-routes-hiking-node-networks.png)


### Pistes de moto tout-terrain {#dirt-bike-trails}

![Itinéraires sur la carte - Pistes de moto tout-terrain](@site/static/img/map/map-routes-dirt-bike-trails.png)

La fonctionnalité **Pistes de moto tout-terrain** vous permet d'afficher sur la carte des itinéraires spécifiques à la moto tout-terrain basés sur le tag `dirtbike:scale`. Cette échelle met en évidence les pistes adaptées à la moto tout-terrain, avec une superposition colorée indiquant les niveaux de difficulté ([Légende de la carte](../map-legend/osmand.md#routes)).  

Vous pouvez activer cette fonctionnalité dans *Menu → Configurer la carte → Itinéraires → Itinéraires de moto tout-terrain*. Le système fonctionne de manière similaire à l'échelle VTT, offrant une représentation visuelle des itinéraires adaptés à la moto tout-terrain — plus d'informations sur le [tag `dirtbike` peuvent être trouvées ici](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).


### Voies d'escalade {#climbing-routes}

![Itinéraires sur la carte - Voies d'escalade](@site/static/img/map/map-routes-climbing-routes.png)

OsmAnd prend en charge les *zones d'escalade* (`climbing=area`) et les *falaises d'escalade* (`climbing=crag`), vous permettant de trouver des sites d'[escalade](https://wiki.openstreetmap.org/wiki/Climbing) directement sur la carte.

- Les **zones d'escalade** représentent des **zones plus vastes** où existent plusieurs voies d'escalade.

- Les **falaises d'escalade** désignent des **formations rocheuses spécifiques** ou des parois adaptées à l'escalade.

- Ces emplacements incluent des **attributs détaillés** tels que :

    - *Cotation d'escalade* (par ex., UIAA, française, YDS).
    - *Type de roche* (par ex., calcaire, granite).
    - *Longueur de la voie* (en mètres).
    - *Qualité de l'escalade* (solide, friable, mixte).
    - *Disponibilité du livre de sommet*.

Pour activer les sites d'escalade sur la carte, allez dans : *Menu → Configurer la carte → Itinéraires → Voies d'escalade*.


### Niveau de difficulté des sentiers de randonnée {#hiking-trails-difficulty-grade}

![Itinéraires sur la carte - randonnée alpine](@site/static/img/map/map-routes-alpine-hiking.png)

Certains segments de chemin peuvent faire partie de nombreux itinéraires, mais ils peuvent être colorés individuellement pour représenter la difficulté du segment dans les zones montagneuses. Actuellement, OsmAnd prend en charge les classifications italienne et suisse, et chacune a une liste spécifique d'exigences en matière d'équipement pour accéder à ce segment.  

1. [Échelle SAC](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [Échelle CAI](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)  


### Pistes et itinéraires de ski {#ski-slopes-and-routes}

- _Pistes et itinéraires de ski_ dans le style de carte _Hiver et ski_.  
![Itinéraires sur la carte - pistes de ski](@site/static/img/map/map-routes-ski-slopes.png)

- _Pistes et itinéraires de ski_ dans le style de carte _OsmAnd par défaut_.  
![Itinéraires sur la carte - pistes de ski](@site/static/img/map/map-routes-ski-slopes_1.png)

Les pistes et itinéraires de ski sont un groupe spécifique d'[itinéraires](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) dans OpenStreetMap. Typiquement, ces itinéraires peuvent être utilisés avec le style de carte [Hiver et ski](../map/vector-maps.md#winter-and-ski) avec toutes les [pistes](https://wiki.openstreetmap.org/wiki/Pistes) visibles. Si un autre style de carte est actif, une bannière s'affiche suggérant un passage à [Hiver et ski](../map/vector-maps.md#winter-and-ski) (*Android uniquement*) et seules les pistes sont affichées. Appuyez sur ***Changer*** pour modifier le style de carte sans quitter l'écran actuel, ou ***Plus tard*** pour masquer la bannière.


### Pistes de motoneige {#snowmobile-trails}

![Itinéraires sur la carte - motoneige](@site/static/img/map/snowmobile_trail.png)

Les pistes de motoneige sont cartographiées dans [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dsnowmobile) comme `route=snowmobile`. Elles sont utilisées pour les loisirs d'hiver et pour relier des zones isolées pendant la saison des neiges. Dans OsmAnd, les pistes de motoneige sont cliquables, voir la section [Actions avec les itinéraires](#actions-with-routes).


### Itinéraires équestres {#horse-routes}

![Itinéraires sur la carte - itinéraires équestres](@site/static/img/map/map-routes-horse.png)

Les [itinéraires équestres](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) sont affichés comme des itinéraires indiqués par des couleurs avec des symboles pour l'équitation.  


### Sports d'eaux vives {#whitewater-sports}

![Itinéraires sur la carte - sports d'eaux vives](@site/static/img/map/map-routes-whitewater-sport.png)

Les [itinéraires en eaux vives](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) sont affichés avec des icônes d'accès, des zones de danger pour le [tourisme en eaux vives](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map).  


### Itinéraires de course à pied {#running-routes}

![Itinéraires de fitness](@site/static/img/map/fitness_1.png)

Les [itinéraires de course à pied](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) dans OpenStreetMap sont utilisés pour les parcours de course nommés, numérotés ou autrement balisés, principalement pour l'athlétisme.


### Parcours de santé {#fitness-trails}

![Itinéraires de fitness](@site/static/img/map/fitness_route.png)

Un [parcours de santé](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail) est un sentier ou un chemin équipé d'obstacles ou de stations le long de son parcours pour exercer le corps humain afin d'améliorer la santé.  


### Itinéraires de voyage {#travel-routes}

<InfoAndroidOnly />

![Itinéraires de voyage](@site/static/img/map/travel_route_2.png)  ![Itinéraires de voyage](@site/static/img/map/travel_routes.png)

Les itinéraires de voyage font partie des fichiers personnalisés de [carnet de voyage](../plan-route/travel-guides.md) (`travel.obf`), qui peuvent être générés à partir des [itinéraires de l'utilisateur](https://osmand.net/blog/routes#generated-travel-routes) ou faire partie de [plugins](../plugins/index.md) supplémentaires.  

Vous pouvez personnaliser l'affichage de certains ***Carnets de voyage*** et types de ***traces***, afficher les traces sous forme de points, ou de ***Groupes de points*** (par exemple pour les carnets de voyage Wikivoyage). Apprenez-en plus sur les [guides de voyage ici](../plan-route/travel-guides.md).


## Afficher les itinéraires sur la carte {#display-routes-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez dans : *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Section Itinéraires de Configurer la carte](@site/static/img/map/configure_map_routes_android.png) ![Classes d'itinéraires](@site/static/img/map/routes_classes_android.png)

- Pour afficher les itinéraires requis sur la carte, activez-les dans la *liste des itinéraires* du menu [Configurer la carte](../map/configure-map-menu.md).
- OsmAnd peut mettre en évidence les [itinéraires présents sur OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Ils peuvent être sélectionnés en appuyant sur [le symbole sur l'itinéraire](#save-as-a-track), et si l'ensemble visible d'itinéraires est correctement configuré, vous pouvez suivre la couleur et les icônes.
- Les principaux types d'itinéraires peuvent également être filtrés par classes et sous-classes, vous permettant d'afficher uniquement des groupes spécifiques au sein de chaque type. Par exemple, vous pouvez afficher les itinéraires de randonnée par **symboles OSMC** en tant que classes, et par *réseaux internationaux, nationaux, régionaux* ou *locaux* en tant que sous-classes.
- Vous pouvez créer une trace par-dessus les itinéraires en utilisant l'outil [Planifier un itinéraire](../plan-route/create-route.md). 
- Lorsque plusieurs itinéraires suivent la même route, chaque itinéraire est affiché comme une ligne semi-transparente séparée placée au-dessus des autres. 
- Lorsque vous appuyez sur un emplacement où plusieurs itinéraires se chevauchent, un menu contextuel avec tous les itinéraires passant par ce point s'affiche. 
- Des cartes vectorielles mises à jour sont nécessaires pour afficher tous les éléments du nouveau schéma de rendu des itinéraires. 

![Itinéraires sur la carte - randonnée osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Itinéraires sur la carte - réseaux de nœuds cyclables](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez dans : *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Menu Trace iOS](@site/static/img/map/configure_map_routes_ios.png)

- Pour afficher les itinéraires requis sur la carte, activez-les dans la *liste des itinéraires* du menu [Configurer la carte](../map/configure-map-menu.md).
- OsmAnd peut mettre en évidence les [itinéraires présents sur OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Ils peuvent être sélectionnés en appuyant sur [le symbole sur l'itinéraire](#save-as-a-track), et si l'ensemble visible d'itinéraires est correctement configuré, vous pouvez suivre la couleur et les icônes.
- Vous pouvez créer une trace par-dessus les itinéraires en utilisant l'outil [Planifier un itinéraire](../plan-route/create-route.md). 
- Lorsque plusieurs itinéraires suivent la même route, chaque itinéraire est affiché comme une ligne semi-transparente séparée placée au-dessus des autres.   

![Itinéraires sur la carte - randonnée osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Itinéraires sur la carte - réseaux de nœuds cyclables](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

</Tabs>


## Détails de la zone et de la falaise d'escalade {#climbing-area-and-crag-details}

![Détails de l'escalade](@site/static/img/map/climbing_andr.png)

Lors de la sélection d'une [zone ou d'une falaise d'escalade](../map/routes.md#climbing-routes), OsmAnd fournit un résumé détaillé du site d'escalade, incluant : le nom et l'emplacement, la cotation de difficulté d'escalade (UIAA, française, YDS, etc.), le type de roche, la hauteur et la longueur de la voie, la qualité de l'escalade et les conditions de surface.


## Actions avec les itinéraires {#actions-with-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Infos sur l'itinéraire](@site/static/img/map/routes_osm.png) ![Infos sur l'itinéraire](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Infos sur l'itinéraire](@site/static/img/map/routes_osm_ios_new.png) ![Infos sur l'itinéraire](@site/static/img/map/routes_osm_ios_new_2.png)

</TabItem>

</Tabs>

Sur la carte, vous pouvez sélectionner des itinéraires pour [la randonnée, le cyclisme, le ski, le VTT, la moto tout-terrain, les voyages, et plus encore](#type-of-routes). Lorsque disponible, les itinéraires de randonnée affichent leurs balises en utilisant les [symboles OSMC](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol) ; les autres types d'itinéraires utilisent leurs propres marquages.

Lorsque vous appuyez sur un **symbole d'itinéraire** sur la carte :

- Une **liste des itinéraires à proximité** à cet endroit est affichée.
- Après avoir sélectionné un itinéraire dans la liste, un [menu contextuel](../map/tracks/track-context-menu.md) pour cet itinéraire s'ouvre, affichant des informations détaillées et les actions disponibles.

Dans le **menu contextuel**, vous pouvez :

- Afficher des [informations supplémentaires](#route-info-and-elevation) sur l'itinéraire sélectionné.
- [Enregistrer l'itinéraire](#save-as-a-track) en tant que **trace GPX**.
- [Démarrer la navigation](#start-navigation) le long de l'itinéraire.


### Infos sur l'itinéraire et dénivelé {#route-info-and-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Infos sur l'itinéraire](@site/static/img/map/route_info_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Infos sur l'itinéraire](@site/static/img/map/route_info_1_ios.png)

</TabItem>

</Tabs>

Les informations suivantes seront visibles dans le menu contextuel :

- **Infos sur l'itinéraire** : Nom de l'itinéraire, lien OSM (plugin d'édition OSM requis), Type, Description, Distance, Direction, Montée/Descente, Plage d'altitude, Réseau, Opérateur, État, Couleur, Boucle, Points de départ/arrivée, et plus encore.
- **Général** : Taille, Emplacement, Créé le.
- **Infos supplémentaires**. Affiche le type d'activité.
- boutons d'action : [Enregistrer comme](#save-as-a-track) et [Démarrer la navigation](#start-navigation).
- [Infos sur le dénivelé](../navigation/setup/route-details.md#elevation-info). Affiche des informations sur les données de dénivelé de l'itinéraire.
- [Analyser la trace sur la carte](../map/tracks/index.md#analyze-track-on-map). Affiche une analyse détaillée des données de la trace à l'aide de graphiques et de cartes.

Pour afficher le graphique du dénivelé, de la pente ou les détails de l'altitude pour un itinéraire sélectionné, appuyez simplement sur l'une des valeurs suivantes dans le menu contextuel : **Distance**, **Montée**, **Descente** ou **Altitude**.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Itinéraires sur le terrain](@site/static/img/map/routes_osm_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Itinéraires sur le terrain](@site/static/img/map/routes_osm_ios_2.png)

</TabItem>

</Tabs>  

### Enregistrer comme une trace {#save-as-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Itinéraires sur le terrain](@site/static/img/map/routes-4.png)   ![Itinéraires sur le terrain](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Itinéraires sur le terrain](@site/static/img/map/hiking.png)   ![Itinéraires sur le terrain](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>  


Pour enregistrer l'itinéraire en tant que *fichier GPX*, appuyez sur le bouton **Enregistrer (Télécharger)** sous le [panneau d'information](../map/tracks/track-context-menu.md#info-panel). Cela ouvrira le panneau de boutons des [actions rapides](../map/tracks/track-context-menu.md#track-actions) où vous aurez accès aux actions de la trace telles que la modification de l'[Apparence](./tracks/appearance.md), la [Navigation](../navigation/setup/route-navigation.md), ou l'édition avec [Planifier un itinéraire](../plan-route/create-route.md).


### Démarrer la navigation {#start-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Itinéraires sur le terrain](@site/static/img/map/routes_osm_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Itinéraires sur le terrain](@site/static/img/map/routes_osm_ios_3.png)

</TabItem>

</Tabs>  

Pour démarrer la navigation le long de l'itinéraire OSM sélectionné, appuyez sur le bouton **Démarrer la navigation** dans le [**panneau d'information**](../map/tracks/track-context-menu.md#info-panel).

Cela lancera le mode [**Navigation par trace**](../navigation/setup/gpx-navigation.md), vous permettant de suivre l'itinéraire avec un guidage vocal et des fonctionnalités de navigation.



### Actions rapides {#quick-actions}

Vous pouvez personnaliser l'activation ou la désactivation des itinéraires à l'aide du widget [Action rapide](../widgets/quick-action.md#configure-map).


## Recherche d'itinéraires {#routes-search}

Trouvez des itinéraires en utilisant la fonction [Recherche](../search/index.md) par nom ou en sélectionnant "Itinéraires" dans la section [Catégories](../search/search-poi.md#).

Pour rechercher, allez dans le menu *<Translate android="true" ids="search_button"/>* ou *<Translate android="true" ids="search_button,search_categories"/>* et entrez votre activité.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Itinéraires sur le terrain](@site/static/img/map/route_search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Itinéraires sur le terrain](@site/static/img/map/route_search_ios.png)

</TabItem>

</Tabs>  

Naviguez vers *<Translate android="true" ids="search_button,search_categories,poi_routes"/>* pour trouver les itinéraires souhaités. Les résultats de recherche d'itinéraires affichent le nom de l'itinéraire, le type d'activité, la longueur, l'emplacement et la distance jusqu'au point le plus proche. Sur Android, les métriques d'altitude telles que la montée et la descente sont également affichées lorsque disponibles. Les changements d'altitude mineurs (moins de 10 m) sont masqués pour garder la liste claire. Toutes les valeurs respectent les unités de distance et d'altitude sélectionnées dans l'application.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Itinéraires sur le terrain](@site/static/img/map/route_search_1_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Itinéraires sur le terrain](@site/static/img/map/route_search_1_ios.png)

</TabItem>

</Tabs>

Utilisez le bouton de filtres (coin supérieur droit) pour n'afficher que les itinéraires souhaités.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Itinéraires sur le terrain](@site/static/img/map/route_search_2_new.png) ![Itinéraires sur le terrain](@site/static/img/map/route_search_3_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Itinéraires sur le terrain](@site/static/img/map/route_search_2_ios.png) ![Itinéraires sur le terrain](@site/static/img/map/route_search_3_ios.png)

</TabItem>

</Tabs>


## Articles connexes {#related-articles}

- [Menu contextuel de la carte](./map-context-menu.md)
- [Configurer la carte](./configure-map-menu.md)
- [Traces](./tracks/index.md)
- [Menu contextuel des traces](./tracks/track-context-menu.md)
- [Transports en commun](./public-transport.md)
- [Apparence de la ligne d'itinéraire de navigation](../navigation/guidance/map-during-navigation.md#route-line-appearance)