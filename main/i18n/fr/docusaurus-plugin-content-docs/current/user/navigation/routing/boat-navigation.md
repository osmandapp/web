---
sidebar_position: 8
title:  Itinéraire pour bateaux
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Aperçu

L'itinéraire pour bateaux peut être un outil précieux pour tous ceux qui aiment naviguer en bateau ou à la voile sur des canaux, des rivières ou des voies navigables. En raison du manque de la plupart des voies navigables dans les données OpenStreetMap, l'itinéraire pour bateaux *n'est pas recommandé* pour la **navigation en eaux libres**. Il est suggéré d'utiliser plutôt la **[navigation directe vers un point](#navigation-directe-vers-un-point-pour-bateaux)**. Avec les lignes de contour de profondeur activées, cela peut vous aider à rester en sécurité sur l'eau en évitant les dangers tels que les eaux peu profondes, les rochers ou d'autres obstacles.
Le moteur d'itinéraire pour bateaux d'OsmAnd prend également en compte les caractéristiques des voies navigables et des bateaux eux-mêmes.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Écran de navigation pour bateaux Android](@site/static/img/navigation/boat/boat_navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Écran de navigation pour bateaux iOS](@site/static/img/navigation/boat/boat_navigation_ios.png)

</TabItem>

</Tabs>

## Paramètres d'itinéraire - Bateau

:::note
Par défaut, le *profil Bateau* est désactivé. Pour utiliser ce profil pour la navigation, vous devez l'activer dans *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

L'itinéraire pour bateaux peut être configuré selon vos besoins dans la [section Paramètres d'itinéraire](../../navigation/guidance/navigation-settings.md#route-parameters) des paramètres de navigation.

En règle générale, l'*itinéraire pour bateaux* est utilisé avec le profil bateau (le dernier activé avec le [plugin Nautique](../../plugins/nautical-charts.md)). Cependant, il est possible d'utiliser l'itinéraire pour bateaux avec d'autres profils également, et différents [types d'itinéraire](#autres-types-d'itinéraire-pour-bateaux) peuvent également être utilisés dans le profil bateau.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">


![Paramètres d'itinéraire pour bateaux Android](@site/static/img/navigation/routing/boat_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres d'itinéraire pour bateaux iOS](@site/static/img/navigation/routing/boat_routing_ios.png)

</TabItem>

</Tabs>

| Paramètre | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="routing_attr_allow_streams_name"/>* | Vous permet d'utiliser des ruisseaux et des drains pour la navigation en bateau. L'activation de cette option peut être utile pour les petits bateaux tels que les canoës, les kayaks, les radeaux, les bateaux à rames. | Les [ruisseaux](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dstream) sont des cours d'eau naturels trop étroits pour être appelés une rivière. Les [drains](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Ddrain) sont des cours d'eau artificiels, généralement revêtus de béton ou similaire, utilisés pour évacuer l'eau superflue comme les eaux pluviales ou les eaux grises.|
| *<Translate android="true" ids="routing_attr_allow_intermittent_name"/>* | L'activation de cette option vous permet d'utiliser des cours d'eau intermittents pour naviguer en bateau. | Le tag [Intermittent](https://wiki.openstreetmap.org/wiki/Key:intermittent) est utilisé pour indiquer qu'un cours d'eau ne contient pas d'eau en permanence. |


## Autres types d'itinéraire pour bateaux

Le type d'[itinéraire pour bateaux](#paramètres-d'itinéraire---bateau) est l'algorithme d'itinéraire par défaut pour le profil Bateau. Bien que vous puissiez choisir un autre type d'itinéraire, qui convient également à la navigation en bateau :

 - [Navigation directe vers un point pour bateaux](./boat-navigation.md#navigation-directe-vers-un-point-pour-bateaux)
 - [Navigation en ligne droite pour bateaux](./boat-navigation.md#navigation-en-ligne-droite-pour-bateaux)

Il est important de noter que les types d'itinéraire *Direct vers un point* et *Ligne droite* ne doivent être utilisés qu'en eaux libres où il n'y a pas d'obstacles ou de dangers pour la navigation. Si vous naviguez dans une voie navigable avec un chenal ou un itinéraire spécifique, vous devez utiliser le type d'itinéraire pour bateaux dans OsmAnd, qui vous guidera à travers les chenaux de navigation corrects et évitera les zones peu profondes ou autres dangers.

Ces types d'itinéraire pour le profil bateau peuvent être activés en utilisant le chemin suivant : *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile"/> (<Translate android="true" ids="app_mode_boat"/> ou un autre) → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*.


### Navigation directe vers un point pour bateaux

:::note
Lorsque vous utilisez les types de navigation Direct vers un point et Bateau, vous aurez besoin des [données de contours de profondeur](../../plugins/nautical-charts.md#nautical-map-style), qui peuvent être activées et définies dans *Configurer la carte*.
:::

Le [type d'itinéraire Direct vers un point](./direct-to-point-routing.md) peut être utilisé avec le profil bateau lorsque vous souhaitez naviguer en eaux libres sans suivre d'itinéraire ou de voie navigable spécifique. Ce type d'itinéraire vous permet de définir un point de destination et OsmAnd calculera un chemin direct vers ce point à partir de votre position actuelle. Ce type d'itinéraire ne prend pas en compte les caractéristiques de votre bateau telles que les vitesses minimale et maximale, la hauteur et la largeur. Votre itinéraire ne sera pas recalculé en cas de déviation.

![Type de navigation Direct vers un point Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)


### Navigation en ligne droite pour bateaux

Le [type d'itinéraire Ligne droite](./straight-line-routing) peut être utilisé avec le profil bateau lorsque vous souhaitez naviguer en eaux libres mais préférez suivre une ligne droite plutôt qu'un itinéraire courbe vers votre point de destination. Cela peut être utile lors de la navigation vers un point éloigné, visible à l'horizon, par exemple.

![Type de navigation Ligne droite Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)


## Autres paramètres d'itinéraire

- L'algorithme d'itinéraire peut également prendre en compte les limitations temporaires spécifiées dans OpenStreetMap. Cela peut être fait en utilisant l'option *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Notez que dans certains cas, les informations d'OSM peuvent être obsolètes.

- Dans la section [*Recalculer l'itinéraire*](../../navigation/guidance/navigation-settings.md#recalculate-route) des *Paramètres d'itinéraire*, vous pouvez activer et ajuster les options de recalcul d'itinéraire.

- Dans la section [*Développement*](../guidance/navigation-settings.md#development-settings) des *Paramètres d'itinéraire*, vous pouvez essayer de nouvelles fonctionnalités d'itinéraire qui sont actuellement en phase de test. Notez que ces paramètres ne sont disponibles que lorsque le [plugin de développement OsmAnd](../../plugins/development.md) est activé.

- Le paramètre *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* dans la version *iOS* d'OsmAnd se trouve dans *Paramètres de navigation → Paramètres d'itinéraire* (pour *Android*, dans *Paramètres du véhicule → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Ce paramètre est utilisé sur les routes inconnues sans limitation de vitesse. C'est le plus souvent le cas lors de la navigation sur une trace ou un itinéraire en ligne. Il doit être réglé en fonction des paramètres de votre véhicule.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. La configuration correcte des paramètres vous aidera à éviter les problèmes lors de la création d'un itinéraire. Vous pouvez sélectionner l'itinéraire le plus approprié en fonction du type de véhicule et des restrictions routières, ainsi que calculer le temps de trajet.

> *Cet article a été mis à jour pour la dernière fois en juin 2024.*

-- source-hash: blake2s: 5e218cf447ce45e390fca96be7a7825e4dd65864a4114fdd1056e7673ec618bb --
