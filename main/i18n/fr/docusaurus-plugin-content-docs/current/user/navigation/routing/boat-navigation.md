---
source-hash: b90723fd147da874ab79701ef17448053b224c227ce332a293f132b90ca25383
sidebar_position: 8
title:  Navigation en bateau
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

La navigation en bateau peut être un outil précieux pour tous ceux qui aiment naviguer en bateau ou à la voile sur des canaux, des rivières ou des voies navigables. En raison du manque de la plupart des voies navigables dans les données OpenStreetMap, la navigation en bateau n'est *pas recommandée* pour la **navigation en pleine mer**. Il est suggéré d'utiliser plutôt la **[navigation directe vers un point](#direct-to-point-routing-for-boat)**. Avec les courbes de niveau de profondeur activées, elle peut vous aider à rester en sécurité sur l'eau en évitant les dangers tels que les eaux peu profondes, les rochers ou d'autres obstacles.
Le moteur de navigation en bateau d'OsmAnd prend également en compte les caractéristiques des voies navigables et des bateaux eux-mêmes.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Écran de navigation en bateau Android](@site/static/img/navigation/boat/boat_navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Écran de navigation en bateau iOS](@site/static/img/navigation/boat/boat_navigation_ios.png)

</TabItem>

</Tabs>

## Paramètres d'itinéraire - Bateau {#route-parameters---boat}

:::note
Par défaut, le *profil Bateau* est désactivé. Pour utiliser ce profil pour la navigation, vous devez l'activer dans *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

La navigation en bateau peut être configurée selon vos besoins dans la section [Paramètres d'itinéraire](../../navigation/guidance/navigation-settings.md#route-parameters) des paramètres de navigation.

Généralement, la *navigation en bateau* est utilisée avec le profil bateau (le dernier activé avec le [plugin Nautique](../../plugins/nautical-charts.md)). Cependant, il est possible d'utiliser la navigation en bateau avec d'autres profils également, et différents [types de navigation](#other-routing-types-for-boat) peuvent également être utilisés dans le profil bateau.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">


![Paramètres de navigation en bateau Android](@site/static/img/navigation/routing/boat_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres de navigation en bateau iOS](@site/static/img/navigation/routing/boat_routing_ios.png)

</TabItem>

</Tabs>

| Paramètre | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="routing_attr_allow_streams_name"/>* | Vous permet d'utiliser les ruisseaux et les drains pour la navigation en bateau. L'activation de cette option peut être utile pour les petits bateaux tels que les canoës, les kayaks, les radeaux, les bateaux à rames. | Les [ruisseaux](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dstream) sont des voies navigables naturelles trop étroites pour être appelées rivières. Les [drains](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Ddrain) sont des voies navigables artificielles, généralement revêtues de béton ou similaire, utilisées pour évacuer l'eau superflue comme les eaux pluviales ou les eaux grises.|
| *<Translate android="true" ids="routing_attr_allow_intermittent_name"/>* | L'activation de cette option vous permet d'utiliser les voies navigables intermittentes pour naviguer en bateau. | Le tag [Intermittent](https://wiki.openstreetmap.org/wiki/Key:intermittent) est utilisé pour indiquer qu'une voie navigable ne contient pas d'eau en permanence. |


:::note Navigation et limitations nautiques

1. Le profil Bateau est conçu pour la navigation le long des rivières, des lacs et autres voies navigables. Il prend en charge les tags OSM tels que :
    - `waterway=river`
    - `waterway=canal`
    - `natural=water`, etc.

2. Le profil Bateau **ne prend pas en charge les routes de ferry (`route=ferry`)**. Cela signifie que les routes de ferry, même si elles sont présentes sur la carte, ne seront **pas utilisées** lors du calcul des itinéraires de bateau.

3. Pour suivre manuellement une ligne de ferry :

    - Utilisez l'outil [Planifier un itinéraire](../../plan-route/create-route.md) et placez les points de passage manuellement.
    - Utilisez le profil Voiture, qui prend en charge les routes de ferry.

:::

## Autres types de navigation pour bateau {#other-routing-types-for-boat}

Le type de [navigation en bateau](#route-parameters---boat) est l'algorithme de navigation par défaut pour le profil Bateau. Bien que vous puissiez choisir un autre type de navigation, qui convient également à la navigation en bateau :

 - [Navigation directe vers un point pour bateau](./boat-navigation.md#direct-to-point-routing-for-boat)
 - [Navigation en ligne droite pour bateau](./boat-navigation.md#straight-line-routing-for-boat)

Il est important de noter que les types de navigation *Directe vers un point* et *Ligne droite* ne doivent être utilisés qu'en pleine mer où il n'y a pas d'obstacles ou de dangers pour la navigation. Si vous naviguez dans une voie navigable avec un chenal ou un itinéraire spécifique, vous devez utiliser le type de navigation en bateau dans OsmAnd, qui vous guidera à travers les chenaux de navigation corrects et évitera les zones peu profondes ou autres dangers.

Ces types de navigation pour le profil bateau peuvent être activés en suivant le chemin suivant : *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile"/> (<Translate android="true" ids="app_mode_boat"/> ou un autre) → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*.


### Navigation directe vers un point pour bateau {#direct-to-point-routing-for-boat}

:::note
Lorsque vous utilisez les types de navigation Directe vers un point et Bateau, vous aurez besoin des [données de courbes de niveau de profondeur](../../plugins/nautical-charts.md#nautical-map-style), qui peuvent être activées et définies dans *Configurer la carte*.
:::

Le [type de navigation Directe vers un point](./direct-to-point-routing.md) peut être utilisé avec le profil bateau lorsque vous souhaitez naviguer en pleine mer sans suivre d'itinéraire ou de voie navigable spécifique. Ce type de navigation vous permet de définir un point de destination et OsmAnd calculera un chemin direct vers ce point depuis votre position actuelle. Ce type de navigation ne prend pas en compte les caractéristiques de votre bateau telles que les vitesses minimale et maximale, la hauteur et la largeur. Votre itinéraire ne sera pas recalculé en cas de déviation.

![Type de navigation Directe vers un point Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)


### Navigation en ligne droite pour bateau {#straight-line-routing-for-boat}

Le [type de navigation Ligne droite](./straight-line-routing) peut être utilisé avec le profil bateau lorsque vous souhaitez naviguer en pleine mer mais préférez suivre une ligne droite plutôt qu'un itinéraire courbe vers votre point de destination. Cela peut être utile lorsque vous naviguez vers un point éloigné, visible à l'horizon, par exemple.

![Type de navigation Ligne droite Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)


## Autres paramètres de navigation {#other-routing-settings}

- L'algorithme de navigation peut également prendre en compte les limitations temporaires spécifiées dans OpenStreetMap. Cela peut être fait en utilisant l'option *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Notez que dans certains cas, les informations d'OSM peuvent être obsolètes.

- Dans la section [*Recalculer l'itinéraire*](../../navigation/guidance/navigation-settings.md#recalculate-route) des *Paramètres d'itinéraire*, vous pouvez activer et ajuster les options de recalcul d'itinéraire.

- Dans la section [*Développement*](../guidance/navigation-settings.md#development-settings) des *Paramètres d'itinéraire*, vous pouvez essayer de nouvelles fonctionnalités de navigation qui sont actuellement en phase de test. Notez que ces paramètres ne sont disponibles que lorsque le [plugin de développement OsmAnd](../../plugins/development.md) est activé.

- Le paramètre *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* dans la version *iOS* d'OsmAnd se trouve dans *Paramètres de navigation → Paramètres d'itinéraire* (pour *Android*, dans *Paramètres du véhicule → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Ce paramètre est utilisé sur les routes inconnues sans limitation de vitesse. C'est le plus souvent le cas lors de la navigation sur une trace ou un itinéraire en ligne. Il doit être réglé en fonction des paramètres de votre véhicule.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. La configuration correcte des paramètres vous aidera à éviter les problèmes lors de la création d'un itinéraire. Vous pouvez sélectionner l'itinéraire le plus approprié en fonction du type de véhicule et des restrictions routières, ainsi que calculer le temps de trajet.

> *Cet article a été mis à jour pour la dernière fois en mai 2025*