---
source-hash: 2428f76d4d2b174f4096091771998583d1804e3fbc62cf63cf7e6bf40e95cc8c
sidebar_position: 6
title:  Itinéraire à ski
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

:::note
L'itinéraire à ski et le profil ski ne sont disponibles que lorsque le [plugin Carte des pistes de ski](../../plugins/ski-maps.md) est activé.  
:::

L'*itinéraire à ski* peut être particulièrement utile pour les skieurs de randonnée, les skieurs-alpinistes et autres amateurs de sports d'hiver qui souhaitent explorer de nouvelles zones et planifier leurs sorties à l'avance. Avec l'*itinéraire à ski*, les utilisateurs d'OsmAnd peuvent planifier des itinéraires et naviguer en toute sécurité tout en profitant de la beauté des paysages hivernaux.  

L'*itinéraire à ski* peut être configuré selon vos besoins dans la section [Paramètres de l'itinéraire](../guidance/navigation-settings.md#route-parameters) des paramètres de navigation.  

![Itinéraires sur la carte - pistes de ski](@site/static/img/navigation/routing/ski_routing_overview.png)


## Paramètres de l'itinéraire - Ski {#route-parameters---ski}

:::note
Par défaut, le *profil Ski* est désactivé. Pour utiliser ce profil pour le calcul d'itinéraire, vous devez l'activer dans *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Les paramètres de l'*itinéraire à ski* permettent aux utilisateurs de planifier leurs itinéraires en sélectionnant le niveau de difficulté souhaité et le type de terrain qu'ils veulent explorer. Il existe diverses options pour un déplacement sûr, confortable et agréable sur les pistes ou lors d'une sortie en freeride.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Paramètres d'itinéraire à ski Android 1](@site/static/img/navigation/routing/skiing_routing_1_andr.png) ![Paramètres d'itinéraire à ski Android 2](@site/static/img/navigation/routing/skiing_routing_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres d'itinéraire à ski iOS 1](@site/static/img/navigation/routing/skiing_routing_ios_1.png)

</TabItem>

</Tabs>

| Paramètre | Permet d'utiliser pour l'itinéraire | Note |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="routing_attr_allow_skating_only_name"/>* | <Translate android="true" ids="routing_attr_allow_skating_only_description"/> |  `https://wiki.openstreetmap.org/wiki/Piste_Maps#Type`  |
|*<Translate android="true" ids="app_mode_ski_touring"/>* |   <Translate android="true" ids="routing_attr_piste_type_skitour_description"/> | Un [itinéraire de ski de randonnée](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) recommandé ou une zone généralement utilisée par de nombreux skieurs pendant une saison pour une ascension nordique et une descente en hors-piste. |
|*<Translate android="true" ids="routing_attr_allow_advanced_name"/>* |  <Translate android="true" ids="routing_attr_allow_advanced_description"/>  | Des [itinéraires plus difficiles](https://wiki.openstreetmap.org/wiki/Piste_Maps#Difficulty) seront autorisés pour le calcul d'itinéraire. |
|*<Translate android="true" ids="routing_attr_freeride_policy_name"/>* |   <details><summary> Choisissez l'une des options pour le ski freeride.  </summary>![Hors-piste Android](@site/static/img/navigation/routing/offpiste_android.png) </details> |   |
|*<Translate android="true" ids="routing_attr_piste_type_downhill_name"/>* |  <Translate android="true" ids="routing_attr_piste_type_downhill_description"/> | L'utilisation des [remontées mécaniques](https://wiki.openstreetmap.org/wiki/Piste_Maps#Ski_lifts) sera activée |
|*<Translate android="true" ids="routing_attr_piste_type_nordic_name"/>*&nbsp;(Android) *<Translate ios="true" ids="routeInfo_piste_type_name"/>*&nbsp;(iOS) |   <Translate android="true" ids="routing_attr_piste_type_nordic_description"/>|  |
|*<Translate android="true" ids="routing_attr_allow_classic_only_name"/>* |   <Translate android="true" ids="routing_attr_allow_classic_only_description"/>|  |
|*<Translate android="true" ids="routing_attr_allow_expert_name"/>* |   <Translate android="true" ids="routing_attr_allow_expert_description"/>|  |
|*<Translate android="true" ids="routing_attr_piste_type_sled_name"/>* |  <Translate android="true" ids="routing_attr_piste_type_sled_description"/> | Les [luges](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) sont de petits engins tirés par une personne ou propulsés uniquement par la gravité. Lorsque cette option est activée, les [pistes de luge](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) seront utilisées pour l'itinéraire à ski |
|*<Translate android="true" ids="routing_attr_allow_intermediate_name"/>* |   <Translate android="true" ids="routing_attr_allow_intermediate_description"/>|  |
|*<Translate android="true" ids="routing_attr_difficulty_preference_name"/>* |  <details><summary>  <Translate android="true" ids="routing_attr_difficulty_preference_description"/> </summary>![Hors-piste Android](@site/static/img/navigation/routing/offpiste_android.png) </details> |  |