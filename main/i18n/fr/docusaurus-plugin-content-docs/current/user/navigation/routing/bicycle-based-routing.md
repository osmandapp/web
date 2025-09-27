---
source-hash: 61b0680b73157560322c9e1f518e6754f7621729463a0d13adc86d23430d9851
sidebar_position: 3
title:  Itinéraire vélo (VTT)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Aperçu {#overview}

Le calcul d'itinéraire à vélo prend en compte des facteurs tels que la disponibilité de pistes cyclables, de sentiers et de routes sûrs et autorisés pour les cyclistes. OsmAnd utilise toujours les données d'altitude pour calculer l'heure d'arrivée estimée (temps pour parcourir la distance) selon la [règle de Naismith](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb). Par défaut, l'itinéraire le plus rapide est proposé.  
Le calcul d'itinéraire à vélo peut également être utile pour le [VTT](#mtb-routing-particularities).  

Vous pouvez configurer l'*Itinéraire vélo* dans la section [Paramètres d'itinéraire](../guidance/navigation-settings#route-parameters) des paramètres de Navigation.


## Paramètres d'itinéraire - Vélo {#route-parameters---bicycle}

Les fonctionnalités de calcul d'itinéraire à vélo d'OsmAnd permettent aux cyclistes de saisir un point de départ et d'arrivée, puis de générer un itinéraire qui tient compte de leurs préférences et de la géographie locale.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Paramètres d'itinéraire vélo](@site/static/img/navigation/routing/cycling_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres d'itinéraire vélo iOS](@site/static/img/navigation/routing/cycling_routing_ios.png)  

</TabItem>

</Tabs>

| Paramètre | Description | Remarque |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="fast_route_mode"/>*  |  Le mécanisme de calcul d'itinéraire choisira des routes plus directes et, par conséquent, plus rapides.  | Malgré l'augmentation de la vitesse de déplacement, la distance parcourue augmente également en même temps. Cela entraîne une augmentation de l'effort musculaire. |
| *<Translate android="true" ids="routing_attr_driving_style_name"/>* (Android) *Style&nbsp;de&nbsp;conduite* (iOS) | <details><summary> Vous pouvez choisir votre style de conduite pour un meilleur itinéraire. </summary> ![Style de conduite vélo Android](@site/static/img/navigation/routing/style_cycling_andr.png)  </details>  | <ul><li> *<Translate android="true" ids="routing_attr_driving_style_safety_name"/>* (les routes moins fréquentées avec les balises [secondaire](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsecondary) et [résidentielle](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential) seront préférées) </li><li> *Préférer les [routes non goudronnées](https://wiki.openstreetmap.org/wiki/Key:surface#Unpaved)* </li><li>  *<Translate android="true" ids="routing_attr_driving_style_balance_name"/>* (cette option est un compromis entre *préférer les chemins de traverse* et *l'itinéraire le plus court*) </li><li>  *<Translate android="true" ids="routing_attr_driving_style_speed_name"/>* (pour le calcul d'itinéraire, les routes plus larges et généralement plus fréquentées seront préférées, offrant des itinéraires plus rapides) </li></ul>  |
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Sélectionnez les routes que vous souhaitez éviter pendant la navigation.  </summary>![Éviter les routes Android](@site/static/img/navigation/routing/avoid_cycling_andr.png) </details>  | Vous pouvez soit [sélectionner une route sur la carte](../../map/map-context-menu/#avoid-road) soit choisir un ou plusieurs types de routes dans la liste :  <ul><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Éviter de traverser une frontière vers un autre pays)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un type de transport par eau, qui transporte des véhicules à travers des étendues d'eau)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[Éviter les pavés](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dcobblestone)</li><li> [<Translate android="true" ids="routing_attr_avoid_fords_name"/>](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (parties d'une route où un cours d'eau la traverse) </li><li> [<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel) </li><li> [Pas de pavés autobloquants](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dsett)</li><li> [<Translate android="true" ids="routing_attr_avoid_footways_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dfootway) </li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Les restrictions d'accès privé seront ignorées lors du calcul de l'itinéraire.  | La balise *[private](https://wiki.openstreetmap.org/wiki/Key:access)* est utilisée dans OSM pour décrire les restrictions d'utilisation des routes et autres voies de transport, ainsi que des bâtiments, des entrées, des commodités et des entités de loisirs.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* (Android) *Terrain&nbsp;préféré* (iOS) | <details><summary> Les données d'altitude seront utilisées dans le calcul de l'itinéraire : des [pénalités pour les routes](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) avec un profil d'altitude différent seront définies. </summary> ![Utiliser les données d'altitude Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png)  </details> | Cette préférence peut aider à éviter les pentes raides ou, au contraire, à les préférer. Si vous choisissez un itinéraire *vallonné*, la préférence sera donnée aux collines et aux montagnes. Si *plat* - aux plaines, les collines seront évitées. La préférence moins vallonnée est un compromis entre ces deux options. Sans données d'altitude, l'itinéraire le plus rapide comme sur un terrain plat sera calculé. |


## Particularités de l'itinéraire VTT {#mtb-routing-particularities}

Le mécanisme de calcul d'itinéraire VTT (vélo tout-terrain) est le même que celui du vélo. Notez qu'il y a des pénalités pour l'utilisation des [itinéraires VTT](../../map/vector-maps.md#routes), et par conséquent, ils sont moins susceptibles d'être proposés pour se rendre à la maison ou au travail à vélo.