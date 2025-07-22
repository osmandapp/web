---
source-hash: 11ccd7dd12c26392daa1886c0a0736ecbb759c2d6277a6807c7a313134cd6080
sidebar_position: 3
title:  Itinéraire à vélo (VTT)
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



## Vue d'ensemble {#overview}

L'itinéraire à vélo prend en compte des facteurs tels que la disponibilité des pistes cyclables, des sentiers et des routes sûres et légales pour les cyclistes. OsmAnd utilise toujours les données d'altitude lors du calcul de l'heure d'arrivée estimée (temps nécessaire pour parcourir la distance) selon la [règle de Naismith](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb). Par défaut, l'itinéraire le plus rapide est fourni.
L'itinéraire à vélo peut également être utile pour le [VTT](#mtb-routing-particularities).

Vous pouvez configurer l'*itinéraire à vélo* dans la section [Paramètres de l'itinéraire](../guidance/navigation-settings#route-parameters) des paramètres de navigation.


## Paramètres de l'itinéraire - Vélo {#route-parameters---bicycle}

Les fonctionnalités d'itinéraire à vélo d'OsmAnd permettent aux cyclistes de saisir un point de départ et un point d'arrivée, puis de générer un itinéraire qui tient compte de leurs préférences et de la géographie locale.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paramètres d'itinéraire à vélo](@site/static/img/navigation/routing/cycling_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres d'itinéraire à vélo iOS](@site/static/img/navigation/routing/cycling_routing_ios.png)

</TabItem>

</Tabs>

| Paramètre | Description | Note |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="fast_route_mode"/>* | Le mécanisme de routage choisira des routes plus directes et, par conséquent, plus rapides. | Malgré l'augmentation de la vitesse de déplacement, la distance parcourue augmente également en même temps. Cela entraîne une augmentation de l'effort musculaire. |
| *<Translate android="true" ids="routing_attr_driving_style_name"/>* (Android) *Style&nbsp;de&nbsp;conduite* (iOS) | <details><summary> Vous pouvez choisir votre style de conduite pour un meilleur itinéraire. </summary> ![Style de conduite à vélo Android](@site/static/img/navigation/routing/style_cycling_andr.png) </details> | <ul><li> *<Translate android="true" ids="routing_attr_driving_style_safety_name"/>* (les routes moins fréquentées avec les balises [secondaire](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsecondary) et [résidentiel](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential) seront préférées) </li><li> *Préférer les [routes non pavées](https://wiki.openstreetmap.org/wiki/Key:surface#Unpaved)* </li><li> *<Translate android="true" ids="routing_attr_driving_style_balance_name"/>* (cette option est un compromis entre *préférer les chemins de traverse* et *itinéraire le plus court*) </li><li> *<Translate android="true" ids="routing_attr_driving_style_speed_name"/>* (pour l'itinéraire, les routes plus larges et généralement plus fréquentées seront préférées, offrant des itinéraires plus rapides) </li></ul> |
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Sélectionnez les routes que vous souhaitez éviter pendant la navigation. </summary>![Éviter les routes Android](@site/static/img/navigation/routing/avoid_cycling_andr.png) </details> | Vous pouvez soit [sélectionner une route sur la carte](../../map/map-context-menu/#avoid-road), soit choisir le(s) type(s) de route(s) dans la liste : <ul><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Éviter de traverser une frontière vers un autre pays)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un type de transport aquatique qui transporte des véhicules à travers des étendues d'eau)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[Éviter les pavés](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dcobblestone)</li><li> [<Translate android="true" ids="routing_attr_avoid_fords_name"/>](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (parties d'une route où un cours d'eau la traverse) </li><li> [<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel) </li><li> Pas de pavés</li><li> [<Translate android="true" ids="routing_attr_avoid_footways_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dfootway) </li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Les restrictions d'accès privé seront ignorées lors du calcul de l'itinéraire. | La balise *[private](https://wiki.openstreetmap.org/wiki/Key:access)* est utilisée dans OSM pour décrire les restrictions d'utilisation des routes et autres voies de transport, ainsi que des bâtiments, des entrées, des équipements et des entités de loisirs. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* (Android) *Terrain&nbsp;préféré* (iOS) | <details><summary> Les données d'altitude seront utilisées dans le calcul de l'itinéraire : des [pénalités pour les routes](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) avec un autre profil d'altitude seront définies. </summary> ![Utiliser les données d'altitude Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png) </details> | Cette préférence peut aider à éviter les côtes raides ou, inversement, à les préférer. Si vous choisissez un itinéraire *vallonné*, la préférence sera donnée aux collines et aux montagnes. Si *plat* - aux plaines, les collines seront évitées. La préférence moins vallonnée est un compromis entre ces deux options. Sans données d'altitude, l'itinéraire le plus rapide sera calculé comme sur un terrain plat. |


## Particularités de l'itinéraire VTT {#mtb-routing-particularities}

Le mécanisme d'itinéraire VTT (vélo tout terrain) est le même que l'itinéraire à vélo. Notez qu'il existe des pénalités pour l'utilisation des [itinéraires VTT](../../map/vector-maps.md#routes), et qu'ils sont donc moins susceptibles d'être proposés pour se rendre à vélo à la maison ou au travail.


## Autres paramètres d'itinéraire {#other-routing-settings}

- L'algorithme de routage peut également prendre en compte les limitations temporaires spécifiées dans OpenStreetMap. Cela peut être fait en utilisant l'option *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Notez que dans certains cas, les informations d'OSM peuvent être obsolètes.

- Dans la section [*Recalculer l'itinéraire*](../../navigation/guidance/navigation-settings.md#recalculate-route) des *Paramètres de l'itinéraire*, vous pouvez activer et ajuster les options de recalcul de l'itinéraire.

- Dans la section [*Développement*](../guidance/navigation-settings.md#development-settings) des *Paramètres de l'itinéraire*, vous pouvez essayer de nouvelles fonctionnalités de routage qui sont actuellement en phase de test. Notez que ces paramètres ne sont disponibles que lorsque le [plugin de développement OsmAnd](../../plugins/development.md) est activé.

- Le paramètre *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* dans la version *iOS* d'OsmAnd se trouve dans *Paramètres de navigation → Paramètres de l'itinéraire* (pour *Android*, dans *Paramètres du véhicule → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Ce paramètre est utilisé sur les routes inconnues sans limitation de vitesse. C'est le plus souvent le cas lors de la navigation sur une trace ou un itinéraire en ligne. Il doit être réglé en fonction des paramètres de votre véhicule.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. La configuration correcte des paramètres vous aidera à éviter les problèmes lors de la création d'un itinéraire. Vous pouvez sélectionner l'itinéraire le plus approprié en fonction du type de véhicule et des restrictions routières, ainsi que calculer le temps de trajet.

> *Dernière mise à jour : juin 2024*