---
source-hash: 19e76040da0edfb73b924de7e238c773f7246dacc4dcc6ed307f98c4ffbac8ec
sidebar_position: 4
title:  Guidage piéton
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Aperçu {#overview}

Le guidage piéton fait référence au processus de recherche du meilleur itinéraire pour un piéton, d'un endroit à un autre, en tenant compte de facteurs tels que les zones réservées aux piétons, les trottoirs, les passages piétons et les intersections adaptées aux piétons. Il peut également prendre en compte d'autres facteurs tels que les *escaliers*, qui peuvent être utiles pour l'accessibilité en fauteuil roulant. OsmAnd utilise toujours les données d'altitude pour calculer l'heure d'arrivée estimée (temps nécessaire pour parcourir la distance) selon la [règle de Naismith](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb).

Pour configurer le *guidage piéton*, accédez à la section [Paramètres d'itinéraire](../guidance/navigation-settings.md/#route-parameters) des paramètres de navigation.
  
### Paramètres d'itinéraire - Marche {#route-parameters---walking}

Le guidage piéton peut être utile non seulement dans les zones urbaines, où les piétons peuvent rencontrer divers obstacles lorsqu'ils essaient de se rendre d'un endroit à un autre. Vous pouvez également utiliser ce type de guidage pour le jogging, la randonnée et la marche nordique en dehors de la ville ou en montagne. Il suffit d'ajuster les paramètres de guidage en fonction de vos besoins.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Paramètres de guidage piéton Android 2](@site/static/img/navigation/routing/routing_pedestrian_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres de guidage piéton iOS 2](@site/static/img/navigation/routing/pedestrian_routing_ios.png)

</TabItem>

</Tabs>

| Paramètre | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Sélectionnez les routes que vous souhaitez éviter pendant la navigation. Vous pouvez soit [sélectionner une route sur la carte](../../map/map-context-menu/#avoid-road), soit choisir des types de routes dans la liste.  </summary>![Éviter les routes Android](@site/static/img/navigation/routing/avoid_pedestrian_andr.png) </details>       | <ul><li> [<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un type de transport par eau, qui transporte des véhicules à travers des étendues d'eau)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> Vous pouvez choisir le type de surface à préférer lors de la construction d'un itinéraire. </summary> ![Altitude piéton Android](@site/static/img/navigation/routing/prefer_pedestrian_andr.png)  </details>  | Vous pouvez choisir entre deux options :<ul><li>[<Translate android="true" ids="routing_attr_prefer_hiking_routes_name"/>](https://wiki.openstreetmap.org/wiki/Hiking#Tagging_ways,_points_and_areas). Ces itinéraires se trouvent généralement dans des environnements naturels tels que les forêts, les montagnes et les parcs. </li><li>[<Translate android="true" ids="routing_attr_prefer_tactile_paving_name"/>](https://wiki.openstreetmap.org/wiki/Key:tactile_paving). Ce système d'indicateurs de surface texturée peut être installé sur les sentiers, les escaliers et les quais de transport en commun pour aider les piétons aveugles ou malvoyants à se déplacer. </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Les restrictions d'accès privé seront ignorées lors du calcul de l'itinéraire.  | Le tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* est utilisé dans OSM pour décrire les restrictions d'utilisation des routes et autres voies de transport, ainsi que des bâtiments, des entrées, des commodités et des entités de loisirs.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> Les données d'altitude seront utilisées dans le calcul de l'itinéraire : des [pénalités](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) seront appliquées aux routes qui diffèrent du type sélectionné. </summary> ![Utiliser les données d'altitude Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png)  </details> | Cette préférence peut aider à éviter les collines escarpées ou, inversement, à les préférer. L'utilisation de cette option peut être très utile dans le guidage piéton. Sans données d'altitude, l'itinéraire le plus rapide sera calculé comme sur un terrain plat. |
|*<Translate android="true" ids="routing_attr_allow_via_ferrata_name"/>*| Les itinéraires de *via ferrata* seront utilisés pour le guidage lorsque cette option est activée en même temps que *Utiliser les données d'altitude*.  | Une [via ferrata](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dvia_ferrata) est un itinéraire de montagne équipé de câbles fixes, de marches, d'échelles et de ponts. |


## Autres paramètres de guidage {#other-routing-settings}

- L'algorithme de guidage peut également prendre en compte les limitations temporaires spécifiées dans OpenStreetMap. Cela peut être fait en utilisant l'option *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Notez que dans certains cas, les informations d'OSM peuvent être obsolètes.  

- Dans la section [*Recalculer l'itinéraire*](../../navigation/guidance/navigation-settings.md#recalculate-route) des *Paramètres d'itinéraire*, vous pouvez activer et ajuster les options de recalcul de l'itinéraire.

- Dans la section [*Développement*](../guidance/navigation-settings.md#development-settings) des *Paramètres d'itinéraire*, vous pouvez essayer de nouvelles fonctionnalités de guidage qui sont actuellement en phase de test. Notez que ces paramètres ne sont disponibles que lorsque le [plugin de développement OsmAnd](../../plugins/development.md) est activé.

- Le paramètre *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* dans la version *iOS* d'OsmAnd se trouve dans *Paramètres de navigation → Paramètres d'itinéraire* (pour *Android*, dans *Paramètres du véhicule → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Ce paramètre est utilisé sur les routes inconnues sans limitation de vitesse. C'est le plus souvent le cas lors de la navigation sur une trace ou un itinéraire en ligne. Il doit être réglé en fonction des paramètres de votre véhicule.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. La configuration correcte des paramètres vous aidera à éviter les problèmes lors de la création d'un itinéraire. Vous pouvez sélectionner l'itinéraire le plus approprié en fonction du type de véhicule et des restrictions routières, ainsi que calculer le temps de trajet.

> *Cet article a été mis à jour pour la dernière fois en juin 2024*