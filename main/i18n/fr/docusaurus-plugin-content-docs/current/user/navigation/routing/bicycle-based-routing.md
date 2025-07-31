---
source-hash: 5518fc70081b20221258351fc52ceac84a6e4c65f687401c6f1e219d9057dfed
sidebar_position: 3
title: Cyclisme (VTT)
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

Le calcul d'itinéraire à vélo tient compte de facteurs tels que la disponibilité des pistes cyclables, des sentiers et des routes sûres et légales pour les cyclistes. OsmAnd utilise toujours les données d'altitude pour calculer l'heure d'arrivée estimée (temps nécessaire pour parcourir la distance) selon la [règle de Naismith](https://fr.wikipedia.org/wiki/R%C3%A8gle_de_Naismith#%C3%89quivalence_de_Scarf_entre_la_distance_et_la_mont%C3%A9e). Par défaut, l'itinéraire le plus rapide est fourni.
Le calcul d'itinéraire à vélo peut également être utile pour le [VTT](#mtb-routing-particularities).

Vous pouvez configurer le *calcul d'itinéraire à vélo* dans la section [Paramètres d'itinéraire](../guidance/navigation-settings#route-parameters) des paramètres de navigation.

## Paramètres d'itinéraire - Vélo {#route-parameters---bicycle}

Les fonctionnalités de calcul d'itinéraire à vélo d'OsmAnd permettent aux cyclistes de saisir un point de départ et un point d'arrivée, puis de générer un itinéraire qui tient compte de leurs préférences et de la géographie locale.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paramètres d'itinéraire à vélo](@site/static/img/navigation/routing/cycling_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres d'itinéraire à vélo iOS](@site/static/img/navigation/routing/cycling_routing_ios.png)

</TabItem>

</Tabs>

| Paramètre | Description | Remarque |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="fast_route_mode"/>* | Le mécanisme de calcul d'itinéraire choisira des routes plus directes et, par conséquent, plus rapides. | Malgré l'augmentation de la vitesse de déplacement, la distance parcourue augmente également en même temps. Cela entraîne une augmentation de l'effort musculaire. |
| *<Translate android="true" ids="routing_attr_driving_style_name"/>* (Android) *Style&nbsp;de&nbsp;conduite* (iOS) | <details><summary> Vous pouvez choisir votre style de conduite pour un meilleur calcul d'itinéraire. </summary> ![Style de conduite cyclisme Android](@site/static/img/navigation/routing/style_cycling_andr.png) </details> | <ul><li> *<Translate android="true" ids="routing_attr_driving_style_safety_name"/>* (préférera les routes moins fréquentées avec les balises [secondary](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsecondary) et [residential](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential)) </li><li> *Préférer les [routes non pavées](https://wiki.openstreetmap.org/wiki/Key:surface#Unpaved)* </li><li> *<Translate android="true" ids="routing_attr_driving_style_balance_name"/>* (cette option est un juste milieu entre *préférer les chemins de traverse* et *itinéraire le plus court*) </li><li> *<Translate android="true" ids="routing_attr_driving_style_speed_name"/>* (pour le calcul d'itinéraire, les routes plus larges et généralement plus fréquentées seront préférées, offrant des itinéraires plus rapides) </li></ul> |
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Sélectionnez les routes que vous souhaitez éviter pendant la navigation. </summary>![Éviter les routes Android](@site/static/img/navigation/routing/avoid_cycling_andr.png) </details> | Vous pouvez soit [sélectionner une route sur la carte](../../map/map-context-menu/#avoid-road) ou choisir le(s) type(s) de route(s) dans la liste : <ul><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Éviter de traverser une frontière vers un autre pays)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un type de transport aquatique qui transporte des véhicules à travers des plans d'eau)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[Éviter les pavés](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dcobblestone)</li><li> [<Translate android="true" ids="routing_attr_avoid_fords_name"/>](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (parties d'une route où un cours d'eau la traverse) </li><li> [<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel) </li><li> [Pas de pavés](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dsett)</li><li> [<Translate android="true" ids="routing_attr_avoid_footways_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dfootway) </li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Les restrictions d'accès privé seront ignorées lors du calcul de l'itinéraire. | La balise *[private](https://wiki.openstreetmap.org/wiki/Key:access)* est utilisée dans OSM pour décrire les restrictions d'utilisation des routes et autres voies de transport, ainsi que des bâtiments, des entrées, des commodités et des entités de loisirs. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* (Android) *Terrain&nbsp;préféré* (iOS) | <details><summary> Les données d'altitude seront utilisées dans le calcul de l'itinéraire : des [pénalités pour les routes](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) avec un autre profil d'altitude seront définies. </summary> ![Utiliser les données d'altitude Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png) </details> | Cette préférence peut aider à éviter les collines escarpées ou, inversement, à les préférer. Si vous choisissez un itinéraire *vallonné*, la préférence sera donnée aux collines et aux montagnes. Si *plat* - aux plaines, les collines seront évitées. La préférence moins vallonnée est un juste milieu entre ces deux options. Sans données d'altitude, l'itinéraire le plus rapide sera calculé comme sur un terrain plat. |

## Particularités du calcul d'itinéraire VTT {#mtb-routing-particularities}

Le mécanisme de calcul d'itinéraire VTT (vélo tout-terrain) est le même que celui du cyclisme. Notez qu'il existe des pénalités pour l'utilisation des [itinéraires VTT](../../map/vector-maps.md#routes), et qu'ils sont donc moins susceptibles d'être proposés pour les trajets à vélo vers la maison ou le travail.

## Autres paramètres d'itinéraire {#other-routing-settings}

- L'algorithme de calcul d'itinéraire peut également prendre en compte les limitations temporaires spécifiées dans OpenStreetMap. Cela peut être fait en utilisant l'option *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Notez que dans certains cas, les informations d'OSM peuvent être obsolètes.

- Dans la section [*Recalculer l'itinéraire*](../../navigation/guidance/navigation-settings.md#recalculate-route) des *Paramètres d'itinéraire*, vous pouvez activer et ajuster les options de recalcul d'itinéraire.

- Dans la section [*Développement*](../guidance/navigation-settings.md#development-settings) des *Paramètres d'itinéraire*, vous pouvez essayer de nouvelles fonctionnalités de calcul d'itinéraire qui sont actuellement en phase de test. Notez que ces paramètres ne sont disponibles que lorsque le [plugin de développement OsmAnd](../../plugins/development.md) est activé.

- Le paramètre *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* dans la version *iOS* d'OsmAnd se trouve dans *Paramètres de navigation → Paramètres d'itinéraire* (pour *Android*, dans *Paramètres du véhicule → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Ce paramètre est utilisé sur les routes inconnues sans limitation de vitesse. C'est le plus souvent le cas lors de la navigation sur une trace ou un itinéraire en ligne. Il doit être défini en fonction des paramètres de votre véhicule.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. La configuration correcte des paramètres vous aidera à éviter les problèmes lors de la création d'un itinéraire. Vous pouvez sélectionner l'itinéraire le plus approprié en fonction du type de véhicule et des restrictions routières, ainsi que calculer le temps de trajet.

> *Dernière mise à jour : juin 2024*