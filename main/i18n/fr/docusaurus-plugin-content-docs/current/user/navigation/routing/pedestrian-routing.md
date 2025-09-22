---
source-hash: 627c2c21830d1233dba44cacd666d91b7c9653f1681b66a17ad59c7b8df6029b
sidebar_position: 4
title:  Itinéraire piéton
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

Le calcul d'itinéraire piéton désigne le processus de recherche du meilleur itinéraire pour un piéton se déplaçant d'un lieu à un autre, en tenant compte de facteurs tels que les zones piétonnes, les trottoirs, les passages pour piétons et les intersections adaptées aux piétons. Il peut également prendre en compte d'autres facteurs tels que les *escaliers*, ce qui peut être utile pour l'accessibilité en fauteuil roulant. OsmAnd utilise toujours les données d'altitude pour calculer l'heure d'arrivée estimée (temps pour parcourir la distance) selon la [règle de Naismith](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb).

Pour configurer l'*Itinéraire piéton*, allez à la section [Paramètres de l'itinéraire](../guidance/navigation-settings#route-parameters) des paramètres de Navigation.

### Paramètres de l'itinéraire - Marche {#route-parameters---walking}

Le calcul d'itinéraire piéton peut être utile non seulement dans les zones urbaines, où les piétons peuvent rencontrer divers obstacles pour se rendre d'un endroit à un autre. Vous pouvez également utiliser ce type d'itinéraire pour le jogging, la randonnée et la marche nordique en dehors de la ville ou en montagne. Ajustez simplement les paramètres de l'itinéraire en fonction de vos besoins.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paramètres itinéraire piéton Android 2](@site/static/img/navigation/routing/routing_pedestrian_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres itinéraire piéton iOS 2](@site/static/img/navigation/routing/pedestrian_routing_ios.png)

</TabItem>

</Tabs>

| Paramètre | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Sélectionnez les routes que vous souhaitez éviter pendant la navigation. Vous pouvez soit [sélectionner une route sur la carte](../../map/map-context-menu/#avoid-road) soit choisir des types de routes dans la liste.  </summary>![Éviter les routes Android](@site/static/img/navigation/routing/avoid_pedestrian_andr.png) </details>       | <ul><li> [<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un type de transport par eau, qui transporte des véhicules à travers des étendues d'eau)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> Vous pouvez choisir quel type de surface privilégier lors de la création d'un itinéraire. </summary> ![Élévation piéton Android](@site/static/img/navigation/routing/prefer_pedestrian_andr.png)  </details>  | Vous pouvez choisir entre deux options :<ul><li>[<Translate android="true" ids="routing_attr_prefer_hiking_routes_name"/>](https://wiki.openstreetmap.org/wiki/Hiking#Tagging_ways,_points_and_areas). Ces itinéraires se trouvent généralement dans des environnements naturels tels que les forêts, les montagnes et les parcs. </li><li>[<Translate android="true" ids="routing_attr_prefer_tactile_paving_name"/>](https://wiki.openstreetmap.org/wiki/Key:tactile_paving). Ce système d'indicateur de surface de sol texturé peut être installé sur les sentiers, les escaliers et les quais de transport en commun pour aider les piétons aveugles ou malvoyants à se déplacer. </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Les restrictions d'accès privé seront ignorées lors du calcul de l'itinéraire.  | Le tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* est utilisé dans OSM pour décrire les restrictions sur l'utilisation des routes et autres voies de transport, ainsi que des bâtiments, des entrées, des commodités et des entités de loisirs.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> Les données d'altitude seront utilisées dans le calcul de l'itinéraire : des [pénalités](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) seront appliquées aux routes qui diffèrent du type sélectionné. </summary> ![Utiliser les données d'altitude Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png)  </details> | Cette préférence peut aider à éviter les pentes raides ou, au contraire, à les privilégier. L'utilisation de cette option peut être très utile pour le calcul d'itinéraire piéton. Sans données d'altitude, l'itinéraire le plus rapide comme sur un terrain plat sera calculé. |
|*<Translate android="true" ids="routing_attr_allow_via_ferrata_name"/>*| Les itinéraires de *Via ferrata* seront utilisés pour le calcul d'itinéraire lorsque cette option est activée avec *Utiliser les données d'altitude*.  | Une [Via ferrata](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dvia_ferrata) est un itinéraire de montagne équipé de câbles fixes, de marches, d'échelles et de ponts. |