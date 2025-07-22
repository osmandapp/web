---
source-hash: 0e2f6c946c393607b5033a3e8d96b50750de7efd28c223841bc9d886f3ec9f2d
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

OsmAnd dispose de nombreuses fonctionnalités puissantes pour afficher différents [itinéraires](#type-of-routes) sur la carte. Par défaut, ces itinéraires font partie des [cartes vectorielles](./vector-maps.md#routes) (données OpenStreetMap), mais une fonctionnalité similaire est fournie par les [traces](./tracks/index.md) qui peuvent être créées avec [Planifier un itinéraire](../plan-route/create-route.md), importées en tant que [traces GPX](#save-as-a-track), enregistrées avec le [plugin Enregistrement de trajet](../plugins/trip-recording.md).


## Type d'itinéraires {#type-of-routes}

Les itinéraires représentent différentes activités de plein air en utilisant les données d'[OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). En appuyant sur **l'icône de bouclier avec un numéro d'itinéraire ou un drapeau d'itinéraire** sur la carte, un menu contextuel s'ouvre, fournissant des informations supplémentaires sur l'itinéraire et permettant de l'utiliser dans le cadre de la navigation.

Vous pouvez configurer le filtrage de certains types d'itinéraires dans le menu [Configurer la carte](../map/configure-map-menu.md).

### Itinéraires cyclables {#cycle-routes}

Les [itinéraires cyclables](https://wiki.openstreetmap.org/wiki/Cycle_routes) sont présents en trois types : *locaux* (`lcn`), *régionaux* (`rcn`), *nationaux* (`ncn`), *internationaux* (`icn`). De plus, les itinéraires cyclables peuvent faire partie de [réseaux de nœuds](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). Vous pouvez choisir comment attribuer une couleur aux segments d'itinéraire :

- ***<Translate android="true" ids="layer_route"/>***.  
![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  
![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

Vous trouverez plus d'informations dans l'article [Légende de la carte](../map-legend/index.md).


### Itinéraires VTT {#mountain-bike-routes}

Les itinéraires VTT ont un mappage spécifique dans [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) et peuvent être sélectionnés séparément des itinéraires cyclables.

<!--
| | | |
|------------|------------|------------|
| ***<Translate android="true" ids="mtb_scale"/>*** | Shows trails according to the MTB scale. More information is in the [Map Legend](../map-legend/index.md) article. | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png) |
| ***<Translate android="true" ids="mtb_imba"/>*** | Show MTB trails according to the International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). More information is in the article [Map legend](../map-legend/index.md). | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png) |
-->

- ***<Translate android="true" ids="mtb_scale"/>***.  Affiche les sentiers selon l'échelle VTT. Plus d'informations sont disponibles dans l'article [Légende de la carte](../map-legend/index.md).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png)  

- ***<Translate android="true" ids="mtb_imba"/>***.  Affiche les sentiers VTT selon l'International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). Plus d'informations sont disponibles dans l'article [Légende de la carte](../map-legend/index.md).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png)

### Itinéraires de randonnée / marche {#hiking--walking-routes}

Les [itinéraires de randonnée](https://wiki.openstreetmap.org/wiki/Walking_Routes) sont présents en trois types : *locaux* (`lwn`), *régionaux* (`rwn`), *nationaux* (`nwn`), *internationaux* (`iwn`). De plus, les itinéraires de marche peuvent faire partie de [réseaux de nœuds](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). OsmAnd ne sépare pas les itinéraires de marche et de randonnée et les combine en 1 groupe. Vous pouvez choisir comment attribuer une couleur aux segments d'itinéraire :

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***.  Colore les itinéraires selon leur [couleur locale](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) individuelle (si disponible dans OpenStreetMap) et le symbole du bouclier touristique.  
![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***.  Colore par [affiliation réseau](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).  
![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  Colore les itinéraires selon le type de [réseau de nœuds](https://wiki.openstreetmap.org/wiki/Node_Networks) (international, régional ou local).  
![Map routes - hiking node networks](@site/static/img/map/map-routes-hiking-node-networks.png)


### Sentiers de moto tout-terrain {#dirt-bike-trails}

![Map routes - Dirt Bike Trails](@site/static/img/map/map-routes-dirt-bike-trails.png)

La fonction **Sentiers de moto tout-terrain** vous permet d'afficher des itinéraires spécifiques aux motos tout-terrain sur la carte en fonction du tag `dirtbike:scale`. Cette échelle met en évidence les sentiers adaptés à la moto tout-terrain, avec une superposition colorée indiquant les niveaux de difficulté.  

Vous pouvez activer cette fonction dans *Menu → Configurer la carte → Itinéraires → Itinéraires de moto tout-terrain*. Le système fonctionne de manière similaire à l'échelle VTT, offrant une représentation visuelle des itinéraires adaptés à la moto tout-terrain — plus d'informations sur le [`dirtbike` tag peuvent être trouvées ici](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).


### Itinéraires d'escalade {#climbing-routes}

![Map routes - Climbing Routes](@site/static/img/map/map-routes-climbing-routes.png)

OsmAnd prend en charge les *zones d'escalade* (`climbing=area`) et les *falaises d'escalade* (`climbing=crag`), vous permettant de trouver des sites d'[escalade](https://wiki.openstreetmap.org/wiki/Climbing) directement sur la carte.

- Les **zones d'escalade** représentent des **zones plus vastes** où existent plusieurs voies d'escalade.

- Les **falaises d'escalade** désignent des **formations rocheuses spécifiques** ou des murs adaptés à l'escalade.

- Ces sites incluent des **attributs détaillés** tels que :

    - *Niveau d'escalade* (par exemple, UIAA, Français, YDS).
    - *Type de roche* (par exemple, calcaire, granite).
    - *Longueur de la voie* (en mètres).
    - *Qualité de l'escalade* (solide, lâche, mixte).
    - *Disponibilité du carnet de sommet*.

Pour activer les sites d'escalade sur la carte, allez dans : *Menu → Configurer la carte → Itinéraires → Itinéraires d'escalade*.


### Niveau de difficulté des sentiers de randonnée {#hiking-trails-difficulty-grade}

![Map routes - alpine hiking](@site/static/img/map/map-routes-alpine-hiking.png)

Certains segments de route peuvent faire partie de nombreux itinéraires, mais ils peuvent être colorés individuellement pour représenter la difficulté du segment dans les zones montagneuses. Actuellement, OsmAnd prend en charge les classifications italiennes et suisses, et chacune a une liste spécifique d'équipements requis pour accéder à ce segment.  

1. [Échelle SAC](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [Échelle CAI](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)  


### Itinéraires de ski {#ski-routes}

![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes.png)

Les itinéraires de ski sont un groupe spécifique d'[itinéraires](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) dans OpenStreetMap. Typiquement, ces itinéraires peuvent être utilisés avec le style de carte [Hiver et ski](../map/vector-maps.md#winter-and-ski) avec toutes les [pistes](https://wiki.openstreetmap.org/wiki/Pistes) visibles.  


### Itinéraires équestres {#horse-routes}

![Map routes - horse routes](@site/static/img/map/map-routes-horse.png)

Les [itinéraires équestres](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) sont affichés comme des itinéraires colorés avec des symboles pour l'équitation.  


### Sports d'eau vive {#whitewater-sports}

![Map routes - whitewater sport](@site/static/img/map/map-routes-whitewater-sport.png)

Les [itinéraires d'eau vive](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) sont affichés avec des icônes d'accès et des zones de danger pour le [tourisme d'eau vive](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map).  


### Itinéraires de course à pied {#running-routes}

![Fitness routes](@site/static/img/map/fitness_1.png)

Les [itinéraires de course à pied](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) dans OpenStreetMap sont utilisés pour les itinéraires de course à pied nommés, numérotés ou autrement marqués, principalement pour l'athlétisme.


### Sentiers de fitness {#fitness-trails}

![Fitness routes](@site/static/img/map/fitness_route.png)

Un [sentier de fitness](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail) est un sentier ou un chemin équipé d'obstacles ou de stations le long de sa longueur pour exercer le corps humain afin d'améliorer la santé.  


### Itinéraires de voyage {#travel-routes}

<InfoAndroidOnly />

![Travel routes](@site/static/img/map/travel_route_2.png)  ![Travel routes](@site/static/img/map/travel_routes.png)

Les itinéraires de voyage font partie des fichiers [Carnet de voyage](../plan-route/travel-guides.md) personnalisés (`travel.obf`), qui peuvent être générés à partir des [itinéraires de l'utilisateur](https://osmand.net/blog/routes#generated-travel-routes) ou faire partie de [plugins](../plugins/index.md) supplémentaires.  

Vous pouvez personnaliser l'affichage de certains ***Carnets de voyage*** et types de ***traces***, afficher les traces sous forme de points, ou ***Groupes de points*** (par exemple pour les carnets de voyage Wikivoyage). Apprenez-en davantage sur les [Guides de voyage ici](../plan-route/travel-guides.md).


## Afficher les itinéraires sur la carte {#display-routes-on-the-map}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Allez dans : *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Configure Map Routes section](@site/static/img/map/configure_map_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez dans : *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Track menu iOS](@site/static/img/map/configure_map_routes_ios.png)

</TabItem>

</Tabs>

- Pour afficher les itinéraires requis sur la carte, activez-les dans la *Liste des itinéraires* du menu [Configurer la carte](../map/configure-map-menu.md).
- OsmAnd peut mettre en évidence les [itinéraires présents sur OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Ils peuvent être sélectionnés en appuyant sur [le symbole sur l'itinéraire](#save-as-a-track), et si l'ensemble visible d'itinéraires est configuré correctement, vous pouvez suivre la couleur et les icônes.
- Vous pouvez créer une trace par-dessus les itinéraires à l'aide de l'outil [Planifier un itinéraire](../plan-route/create-route.md).  

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)



## Actions avec les itinéraires {#actions-with-routes}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/routes_osm.png) ![Route info](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/routes_osm_ios.png) ![Route info](@site/static/img/map/routes_osm_ios_1.png)

</TabItem>

</Tabs>

Sur la carte, vous pouvez sélectionner des itinéraires pour la [randonnée, le vélo, les voyages, et plus encore](#type-of-routes), qui sont marqués avec des [symboles OSMC](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol) le cas échéant.

Lorsque vous appuyez sur un **symbole d'itinéraire** sur la carte :

- Une **liste des itinéraires proches** à cet endroit est affichée.
- Après avoir sélectionné un itinéraire dans la liste, un [menu contextuel](../map/tracks/track-context-menu.md) pour cet itinéraire s'ouvre, affichant des informations détaillées et les actions disponibles.

Dans le **menu contextuel**, vous pouvez :

- Afficher des [informations supplémentaires](#route-info-and-elevation) sur l'itinéraire sélectionné.
- [Enregistrer l'itinéraire](#save-as-a-track) en tant que **trace GPX**.
- [Démarrer la navigation](#start-navigation) le long de l'itinéraire.


### Informations sur l'itinéraire et l'altitude {#route-info-and-elevation}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/route_info_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/route_info_1_ios.png)

</TabItem>

</Tabs>

Les informations suivantes seront visibles dans le menu contextuel :

- **Informations sur l'itinéraire** : Nom de l'itinéraire, lien OSM (plugin d'édition OSM requis), Type, Description, Distance, Direction, Montée/Descente, Plage d'altitude, Réseau, Opérateur, État, Couleur, Boucle, Points de départ/arrivée, et plus encore.
- **Général** : Taille, Emplacement, Créé le.
- **Informations supplémentaires**. Affiche le type d'activité.
- boutons d'action : [Enregistrer sous](#save-as-a-track) et [Démarrer la navigation](#start-navigation).
- [Informations sur l'altitude](../navigation/setup/route-details.md#elevation-info). Affiche des informations sur les données d'altitude de l'itinéraire.
- [Analyser la trace sur la carte](../map/tracks/index.md#analyze-track-on-map). Affiche une analyse détaillée des données de trace à l'aide de graphiques et de cartes.

Pour afficher le graphique de l'altitude, de la pente ou des détails d'altitude pour un itinéraire sélectionné, appuyez simplement sur l'une des valeurs suivantes dans le menu contextuel : **Distance**, **Montée**, **Descente** ou **Altitude**.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes_osm_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/routes_osm_ios_2.png)

</TabItem>

</Tabs>  

### Enregistrer en tant que trace {#save-as-a-track}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes-4.png)   ![Routes on the ground](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/hiking.png)   ![Routes on the ground](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>  


Pour enregistrer l'itinéraire en tant que *fichier GPX*, appuyez sur le bouton **Enregistrer (Télécharger)** sous le [panneau d'informations](../map/tracks/track-context-menu.md#info-panel). Cela ouvrira le panneau de boutons [Actions rapides](../map/tracks/track-context-menu.md#track-actions) où vous aurez accès aux actions de trace telles que la modification de l'[Apparence](./tracks/appearance.md), de la [Navigation](../navigation/setup/route-navigation.md) ou l'édition de [Planifier un itinéraire](../plan-route/create-route.md).


### Démarrer la navigation {#start-navigation}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes_osm_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/routes_osm_ios_3.png)

</TabItem>

</Tabs>  

Pour démarrer la navigation le long de l'itinéraire OSM sélectionné, appuyez sur le bouton **Démarrer la navigation** dans le [**panneau d'informations**](../map/tracks/track-context-menu.md#info-panel).

Cela lancera le mode [**Navigation par trace**](../navigation/setup/gpx-navigation.md), vous permettant de suivre l'itinéraire avec guidage vocal et fonctions de navigation.



### Actions rapides {#quick-actions}

Vous pouvez personnaliser l'activation ou la désactivation des itinéraires à l'aide du widget [Action rapide](../widgets/quick-action.md#configure-map).


## Recherche d'itinéraires {#routes-search}

Trouvez des itinéraires à l'aide de la fonction [Recherche](../search/index.md) par nom ou en sélectionnant "Itinéraires" dans la section [Catégories](../search/search-poi.md#).

Pour rechercher, allez dans le menu *<Translate android="true" ids="search_button"/>* ou *<Translate android="true" ids="search_button,search_categories"/>* et entrez votre activité.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_ios.png)

</TabItem>

</Tabs>  

Naviguez vers *<Translate android="true" ids="search_button,search_categories,poi_routes"/>* pour trouver les itinéraires souhaités. Les itinéraires comprennent le nom, le type d'activité, la longueur, l'emplacement et la distance jusqu'au point le plus proche.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_1_ios.png)

</TabItem>

</Tabs>

Utilisez le bouton filtres (coin supérieur droit) pour afficher uniquement les itinéraires souhaités.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search_2.png) ![Routes on the ground](@site/static/img/map/route_search_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_2_ios.png) ![Routes on the ground](@site/static/img/map/route_search_3_ios.png)

</TabItem>

</Tabs>


## Articles connexes {#related-articles}

- [Menu contextuel de la carte](./map-context-menu.md)
- [Configurer la carte](./configure-map-menu.md)
- [Traces](./tracks/index.md)
- [Menu contextuel des traces](./tracks/track-context-menu.md)
- [Transports en commun](./public-transport.md)
- [Apparence de la ligne d'itinéraire de navigation](../navigation/guidance/map-during-navigation.md#route-line-appearance)

> *Dernière mise à jour : mai 2025*