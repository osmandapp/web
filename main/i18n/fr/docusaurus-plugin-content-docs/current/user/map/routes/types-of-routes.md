---
source-hash: 97cbadd50fbc4e3456c25be84373804b63617bf768394b167c130bfa44b414f0
sidebar_position: 12
title: Types d'itinéraires
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

Les itinéraires représentent différentes activités de plein air utilisant des données d'[OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Appuyer sur **l'icône de bouclier avec un numéro d'itinéraire ou un drapeau d'itinéraire** sur la carte ouvrira un menu contextuel qui fournit des informations supplémentaires sur l'itinéraire et permet de l'utiliser dans le cadre de la navigation.

Vous pouvez configurer le filtrage de certains types d'itinéraires dans le menu [Configurer la carte](../../map/configure-map-menu.md).

## Cyclisme {#cycle}

[Les itinéraires cyclables](https://wiki.openstreetmap.org/wiki/Cycle_routes) sont présents en trois types : *local* (`lcn`), *régional* (`rcn`), *national* (`ncn`), *international* (`icn`). Les itinéraires cyclables peuvent également faire partie de [réseaux de nœuds](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). Vous pouvez choisir comment attribuer une couleur aux segments d'itinéraire :

- ***<Translate android="true" ids="layer_route"/>***.  
![Itinéraires sur la carte - itinéraires cyclables](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  
![Itinéraires sur la carte - réseaux de nœuds cyclables](@site/static/img/map/map-routes-cycle-node-networks.png)

Vous trouverez plus d'informations dans l'article [Légende de la carte](../../map-legend/index.md).


## Vélo de montagne {#mountain-bike}

Les itinéraires VTT ont un mappage spécifique dans [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) et peuvent être sélectionnés séparément des itinéraires cyclables.

- ***<Translate android="true" ids="mtb_scale"/>***.  Affiche les sentiers selon l'échelle VTT. Plus d'informations dans l'article [Légende de la carte](../../map-legend/index.md).  
![Itinéraires sur la carte - sentiers VTT](@site/static/img/map/map-routes-mtb-trails.png)  

- ***<Translate android="true" ids="mtb_imba"/>***.  Affiche les sentiers VTT selon l'International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). Plus d'informations dans l'article [Légende de la carte](../../map-legend/index.md).  
![Itinéraires sur la carte - sentiers VTT](@site/static/img/map/map-routes-mtb_imba-trails.png)

## Randonnée / Marche {#hiking--walking}

[Les itinéraires de randonnée](https://wiki.openstreetmap.org/wiki/Walking_Routes) sont présents en trois types : *local* (`lwn`), *régional* (`rwn`), *national* (`nwn`), *international* (`iwn`). Les itinéraires de marche peuvent également faire partie de [réseaux de nœuds](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). OsmAnd ne sépare pas les itinéraires de marche et de randonnée et les combine en 1 groupe. Vous pouvez choisir comment attribuer une couleur aux segments d'itinéraire :

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***.  Colore les itinéraires selon leur [couleur locale](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) individuelle (si disponible dans OpenStreetMap) et le symbole du bouclier touristique.  
![Itinéraires sur la carte - randonnée osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***.  Colore selon [l'affiliation au réseau](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).  
![Itinéraires sur la carte - réseau de randonnée](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  Colore les itinéraires selon le type de [réseau de nœuds](https://wiki.openstreetmap.org/wiki/Node_Networks) (international, régional ou local).  
![Itinéraires sur la carte - réseaux de nœuds de randonnée](@site/static/img/map/map-routes-hiking-node-networks.png)


## Sentiers de moto tout-terrain {#dirt-bike-trails}

![Itinéraires sur la carte - Sentiers de moto tout-terrain](@site/static/img/map/map-routes-dirt-bike-trails.png)

La fonctionnalité **Sentiers de moto tout-terrain** permet d'afficher sur la carte des itinéraires spécifiques aux motos tout-terrain en fonction de la balise `dirtbike:scale`. Cette échelle met en évidence les sentiers adaptés à la moto tout-terrain, avec une superposition colorée indiquant les niveaux de difficulté ([Légende de la carte](../../map-legend/osmand.md#routes)).  

Vous pouvez activer cette fonctionnalité dans *Menu → Configurer la carte → Itinéraires → Itinéraires moto tout-terrain*. Le système fonctionne de manière similaire à l'échelle VTT, offrant une représentation visuelle des itinéraires adaptés à la moto tout-terrain — plus d'informations sur la [balise `dirtbike` peuvent être trouvées ici](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).


## Itinéraires d'escalade {#climbing-routes}

![Itinéraires sur la carte - Itinéraires d'escalade](@site/static/img/map/map-routes-climbing-routes.png)

OsmAnd prend en charge les *zones d'escalade* (`climbing=area`) et les *falaises d'escalade* (`climbing=crag`), vous permettant de trouver des sites d'[escalade](https://wiki.openstreetmap.org/wiki/Climbing) directement sur la carte.

- Les **zones d'escalade** représentent des **zones plus vastes** où existent plusieurs itinéraires d'escalade.

- Les **falaises d'escalade** désignent des **formations rocheuses** ou des parois spécifiques adaptées à l'escalade.

- Ces sites incluent des **attributs détaillés** tels que :

    - *Niveau d'escalade* (par ex. UIAA, Français, YDS).
    - *Type de roche* (par ex. calcaire, granit).
    - *Longueur de l'itinéraire* (en mètres).
    - *Qualité de l'escalade* (solide, meuble, mixte).
    - *Disponibilité d'un registre au sommet*.

Pour activer les sites d'escalade sur la carte, allez dans : *Menu → Configurer la carte → Itinéraires → Itinéraires d'escalade*.


## Niveau de difficulté des sentiers de randonnée {#hiking-trails-difficulty-grade}

![Itinéraires sur la carte - randonnée alpine](@site/static/img/map/map-routes-alpine-hiking.png)

Certains segments de route peuvent faire partie de nombreux itinéraires, mais ils peuvent être colorés individuellement pour représenter la difficulté du segment en zone montagneuse. Actuellement, OsmAnd prend en charge les classifications italienne et suisse, chacune ayant une liste spécifique d'équipements requis pour accéder à ce segment.  

1. [Échelle SAC](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [Échelle CAI](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)  


## Pistes et itinéraires de ski {#ski-slopes-and-routes}

- _Pistes et itinéraires de ski_ dans le style de carte _Hiver et ski_.  
![Itinéraires sur la carte - pistes de ski](@site/static/img/map/map-routes-ski-slopes.png)

- _Pistes et itinéraires de ski_ dans le style de carte _OsmAnd par défaut_.  
![Itinéraires sur la carte - pistes de ski](@site/static/img/map/map-routes-ski-slopes_1.png)

Les pistes et itinéraires de ski constituent un groupe spécifique d'[itinéraires](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) dans OpenStreetMap. Généralement, ces itinéraires peuvent être utilisés avec le style de carte [Hiver et ski](../../map/map-styles.md#winter-and-ski) avec toutes les [pistes](https://wiki.openstreetmap.org/wiki/Pistes) visibles. Si un autre style de carte est actif, une bannière suggère de passer au style [Hiver et ski](../../map/map-styles.md#winter-and-ski) (*Android uniquement*) et seules les pistes sont affichées. Appuyez sur ***Basculer*** pour changer le style de carte sans quitter l'écran actuel, ou sur ***Plus tard*** pour masquer la bannière.


## Sentiers de motoneige {#snowmobile-trails}

![Itinéraires sur la carte - motoneige](@site/static/img/map/snowmobile_trail_new.png)

Les sentiers de motoneige sont cartographiés dans [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dsnowmobile) en tant que `route=snowmobile`. Ils sont utilisés pour les loisirs hivernaux et pour relier des zones isolées pendant la saison de neige. Dans OsmAnd, les sentiers de motoneige sont cliquables, voir la section [Actions avec les itinéraires](./index.md#actions-with-routes).


## Itinéraires équestres {#horse-routes}

![Itinéraires sur la carte - itinéraires équestres](@site/static/img/map/map-routes-horse.png)

[Les itinéraires équestres](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) sont affichés sous forme d'itinéraires indiqués par des couleurs avec des symboles pour l'équitation.  


## Sports d'eau vive {#whitewater-sports}

![Itinéraires sur la carte - sport d'eau vive](@site/static/img/map/map-routes-whitewater-sport.png)

[Les itinéraires d'eau vive](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) sont affichés avec des icônes d'accès, des zones de danger et les rapides à proximité pour le [tourisme en eau vive](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map). Voir [Caractéristiques des sports d'eau vive](../../map-legend/osmand.md#whitewater-features) dans la Légende de la carte pour les niveaux de rapides, les niveaux de sections de rivière et les symboles associés.


## Course à pied {#running}

![Itinéraires fitness](@site/static/img/map/fitness_1.png)

[Les itinéraires de course à pied](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) dans OpenStreetMap sont utilisés pour les itinéraires de course nommés, numérotés ou autrement balisés, principalement pour l'athlétisme.


## Parcours de fitness {#fitness-trails}

![Itinéraires fitness](@site/static/img/map/fitness_route.png)

Un [parcours de fitness](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail) est un sentier ou un chemin équipé d'obstacles ou de stations le long de sa longueur pour exercer le corps humain afin d'améliorer la santé.  


## Voyage {#travel}

<InfoAndroidOnly />

![Itinéraires de voyage](@site/static/img/map/travel_route_2.png)  ![Itinéraires de voyage](@site/static/img/map/travel_routes.png)

Les itinéraires de voyage font partie des fichiers [Carnet de voyage](../../plan-route/travel-guides.md) personnalisés (`travel.obf`), qui peuvent être générés à partir des [itinéraires de l'utilisateur](https://osmand.net/blog/routes#generated-travel-routes) ou faire partie de [plugins](../../plugins/index.md) supplémentaires.  

Vous pouvez personnaliser l'affichage de certains ***Carnets de voyage*** et types de ***traces***, afficher les traces sous forme de points, ou ***Groupes de points*** (par exemple pour les carnets de voyage Wikivoyage). En savoir plus sur les [Guides de voyage ici](../../plan-route/travel-guides.md).


## Articles connexes {#related-articles}

- [Configurer la carte](../../map/configure-map-menu.md)
- [Légende de la carte](../../map-legend/osmand.md)
- [Itinéraires](./index.md)