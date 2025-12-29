---
source-hash: 34cdbd7faeeddcb957aff2e6c83967fb6111c3baa30d876cbad58ab2801cd0d1
sidebar_position: 8
title:  Routage pour bateau
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

Le routage pour bateau peut être un outil précieux pour tous ceux qui aiment naviguer ou faire de la voile sur des canaux, des rivières ou des chenaux. En raison de l'absence de la plupart des chenaux dans les données OpenStreetMap, le routage pour bateau est *non recommandé* pour la **navigation en eaux libres**, il est suggéré d'utiliser plutôt le **[Routage direct vers un point](#direct-to-point-routing-for-boat)**. Avec les lignes de contour de profondeur activées, cela peut vous aider à rester en sécurité sur l'eau en évitant les dangers tels que les eaux peu profondes, les rochers ou d'autres obstacles.  
Le moteur de routage pour bateau d'OsmAnd prend également en compte les caractéristiques des voies navigables et des bateaux eux-mêmes.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Écran de navigation pour bateau Android](@site/static/img/navigation/boat/boat_navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Écran de navigation pour bateau iOS](@site/static/img/navigation/boat/boat_navigation_ios.png)  

</TabItem>

</Tabs>  

## Paramètres d'itinéraire - Bateau {#route-parameters---boat}

:::note
Par défaut, le *profil Bateau* est désactivé. Pour utiliser ce profil pour le routage, vous devez l'activer dans *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Le routage pour bateau peut être configuré selon vos besoins dans la section [Paramètres d'itinéraire](../../navigation/guidance/navigation-settings.md#route-parameters) des paramètres de navigation.  

Généralement, le *routage pour bateau* est utilisé avec le profil bateau (le dernier activé avec le [plugin Cartes marines](../../plugins/nautical-charts.md)). Cependant, il est possible d'utiliser le routage pour bateau avec d'autres profils également, et différents [types de routage](#other-routing-types-for-boat) peuvent aussi être employés dans le profil bateau.  


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">


![Paramètres de routage pour bateau Android](@site/static/img/navigation/routing/boat_route_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres de routage pour bateau iOS](@site/static/img/navigation/routing/boat_route_ios.png)  

</TabItem>

</Tabs>

| Paramètre | Description | Remarque |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="routing_attr_allow_streams_name"/>* | Permet d'utiliser les ruisseaux et les drains pour la navigation en bateau. L'activation de cette option peut être utile pour les petites embarcations telles que les canoës, les kayaks, les radeaux, les barques. |  [Les ruisseaux](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dstream) sont des voies d'eau formées naturellement trop étroites pour être appelées une rivière. [Les drains](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Ddrain) sont des voies d'eau artificielles, généralement revêtues de béton ou d'un matériau similaire, utilisées pour évacuer les eaux superflues comme les eaux pluviales ou les rejets d'eaux grises.|
| *<Translate android="true" ids="routing_attr_allow_intermittent_name"/>* |  L'activation de cette option vous permet d'utiliser des voies navigables intermittentes pour naviguer en bateau.   | La balise [Intermittent](https://wiki.openstreetmap.org/wiki/Key:intermittent) est utilisée pour indiquer qu'une voie navigable ne contient pas d'eau en permanence.  |
| *Autoriser les ferries* | Active le routage via les itinéraires de ferry. | Généralement, les [itinéraires de ferry](https://wiki.openstreetmap.org/wiki/Tag:route%3Dferry) sont inaccessibles pour les petites embarcations selon la définition OSM. |

:::note Navigation sur l'eau et limitations

1. Le profil Bateau est conçu pour le routage le long des rivières, des lacs et d'autres voies navigables. Il prend en charge les balises OSM telles que :
    - `waterway=river`
    - `waterway=canal`
    - `natural=water`, etc.

2. Le profil Bateau prend également en charge les **itinéraires de ferry (`route=ferry`)** lorsque l'option **Autoriser les ferries** est activée. Cela signifie que si des itinéraires de ferry sont présents sur la carte, ils seront utilisés lors du calcul des itinéraires pour bateau.

3. Si aucune voie navigable ou itinéraire de ferry approprié n'est cartographié dans OSM, le moteur de routage peut ne pas être en mesure de construire un itinéraire approprié. Dans ces cas, vous pouvez utiliser l'outil Planifier un itinéraire et placer les points de passage manuellement.

:::

## Autres types de routage pour bateau {#other-routing-types-for-boat}

Le [type de routage pour bateau](#route-parameters---boat) est l'algorithme de routage par défaut pour le profil Bateau. Bien que vous puissiez choisir un autre type de routage, qui est également adapté à la navigation en bateau :  

 - [Routage direct vers un point pour bateau](./boat-navigation.md#direct-to-point-routing-for-boat)
 - [Routage en ligne droite pour bateau](./boat-navigation.md#straight-line-routing-for-boat)

Il est important de noter que les types de routage *Direct vers un point* et *Ligne droite* ne doivent être utilisés qu'en eaux libres où il n'y a pas d'obstacles ou de dangers pour la navigation. Si vous naviguez dans une voie d'eau avec un chenal ou un itinéraire spécifique, vous devez utiliser le type de routage pour bateau dans OsmAnd, qui vous guidera à travers les bons chenaux de navigation et évitera les zones peu profondes ou d'autres dangers. Certains dangers cartographiés basés sur les balises OSM hazard=* peuvent être affichés sur la carte sous forme d'icônes POI de danger ou d'étiquettes textuelles.  

Ces types de routage pour le profil bateau peuvent être activés en suivant le chemin suivant : *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile"/> (<Translate android="true" ids="app_mode_boat"/> ou un autre) → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*.


### Routage direct vers un point pour bateau {#direct-to-point-routing-for-boat}

:::note
Lorsque vous utilisez les types de navigation Direct vers un point et Bateau, vous aurez besoin des [données de contours de profondeur](../../plugins/nautical-charts.md#nautical-map-style), qui peuvent être activées et définies dans *Configurer la carte*.
:::

Le [type de routage direct vers un point](./direct-to-point-routing.md) peut être utilisé avec le profil bateau lorsque vous souhaitez naviguer votre bateau en eaux libres sans suivre d'itinéraire ou de voie navigable spécifique. Ce type de routage vous permet de définir un point de destination et OsmAnd calculera un chemin direct vers ce point depuis votre position actuelle. Ce type de routage ne prend pas en compte les caractéristiques de votre bateau telles que les vitesses minimale et maximale, la hauteur et la largeur. Votre itinéraire ne sera pas recalculé en cas d'écart.

![Type de navigation direct vers un point Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)


### Routage en ligne droite pour bateau {#straight-line-routing-for-boat}

Le [type de routage en ligne droite](./straight-line-routing) peut être utilisé avec le profil bateau lorsque vous souhaitez naviguer votre bateau en eaux libres mais préférez suivre une ligne droite plutôt qu'un itinéraire courbe jusqu'à votre point de destination. Cela peut être utile lors de la navigation vers un point éloigné, visible à l'horizon, par exemple.

![Type de navigation en ligne droite Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)