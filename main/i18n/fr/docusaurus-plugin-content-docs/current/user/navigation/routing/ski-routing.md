---
source-hash: 27acdc622e2e460a91c82997ca3c6a46ddff094dce1fb89a1f2d05a529a31216
sidebar_position: 6
title: Itinéraire de ski
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
Le routage de ski et le profil de ski ne sont disponibles que lorsque le [plugin Vue carte de ski](../../plugins/ski-maps.md) est activé.
:::

Le *routage de ski* peut être particulièrement utile pour les skieurs de randonnée, les skieurs-alpinistes et autres amateurs de sports d'hiver qui souhaitent explorer de nouvelles zones et planifier leurs excursions à l'avance. Avec le *routage de ski*, les utilisateurs d'OsmAnd peuvent planifier des itinéraires et naviguer en toute sécurité tout en profitant de la beauté des paysages hivernaux.

Le *routage de ski* peut être configuré selon vos besoins dans la section [Paramètres d'itinéraire](../guidance/navigation-settings.md#route-parameters) des paramètres de navigation.

![Itinéraires cartographiques - pistes de ski](@site/static/img/navigation/routing/ski_routing_overview.png)


## Paramètres d'itinéraire - Ski {#route-parameters---ski}

:::note
Par défaut, le *profil de ski* est désactivé. Pour utiliser ce profil pour le routage, vous devez l'activer dans *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Les paramètres de *routage de ski* permettent aux utilisateurs de planifier leurs itinéraires en sélectionnant le niveau de difficulté souhaité et le type de terrain qu'ils souhaitent explorer. Il existe diverses options pour un déplacement sûr, confortable et agréable sur les pistes ou en freeride.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paramètres de routage de ski Android 1](@site/static/img/navigation/routing/skiing_routing_1_andr.png) ![Paramètres de routage de ski Android 2](@site/static/img/navigation/routing/skiing_routing_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres de routage de ski iOS 1](@site/static/img/navigation/routing/skiing_routing_ios_1.png)

</TabItem>

</Tabs>

| Paramètre | Permet d'utiliser pour le routage | Note |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="routing_attr_allow_skating_only_name"/>* | <Translate android="true" ids="routing_attr_allow_skating_only_description"/> | `https://wiki.openstreetmap.org/wiki/Piste_Maps#Type` |
|*<Translate android="true" ids="app_mode_ski_touring"/>* | <Translate android="true" ids="routing_attr_piste_type_skitour_description"/> | Un [itinéraire de ski de randonnée](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) ou une zone recommandée qui est généralement utilisée par de nombreux skieurs pendant une saison dans le but d'une ascension nordique et d'une descente en hors-piste. |
|*<Translate android="true" ids="routing_attr_allow_advanced_name"/>* | <Translate android="true" ids="routing_attr_allow_advanced_description"/> | Des [itinéraires plus difficiles](https://wiki.openstreetmap.org/wiki/Piste_Maps#Difficulty) seront autorisés pour le routage. |
|*<Translate android="true" ids="routing_attr_freeride_policy_name"/>* | <details><summary> Choisissez l'une des options pour le ski freeride. </summary>![Hors-piste Android](@site/static/img/navigation/routing/offpiste_android.png) </details> | |
|*<Translate android="true" ids="routing_attr_piste_type_downhill_name"/>* | <Translate android="true" ids="routing_attr_piste_type_downhill_description"/> | L'utilisation des [remontées mécaniques](https://wiki.openstreetmap.org/wiki/Piste_Maps#Ski_lifts) sera activée |
|*<Translate android="true" ids="routing_attr_piste_type_nordic_name"/>*&nbsp;(Android) *<Translate ios="true" ids="routeInfo_piste_type_name"/>*&nbsp;(iOS) | <Translate android="true" ids="routing_attr_piste_type_nordic_description"/>| |
|*<Translate android="true" ids="routing_attr_allow_classic_only_name"/>* | <Translate android="true" ids="routing_attr_allow_classic_only_description"/>| |
|*<Translate android="true" ids="routing_attr_allow_expert_name"/>* | <Translate android="true" ids="routing_attr_allow_expert_description"/>| |
|*<Translate android="true" ids="routing_attr_piste_type_sled_name"/>* | <Translate android="true" ids="routing_attr_piste_type_sled_description"/> | Les [luges](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) sont des véhicules plus petits qui sont tirés par un humain ou propulsés uniquement par la gravité. Lorsqu'elles sont activées, les [pistes de luge](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) seront utilisées pour le routage de ski |
|*<Translate android="true" ids="routing_attr_allow_intermediate_name"/>* | <Translate android="true" ids="routing_attr_allow_intermediate_description"/>| |
|*<Translate android="true" ids="routing_attr_difficulty_preference_name"/>* | <details><summary> <Translate android="true" ids="routing_attr_difficulty_preference_description"/> </summary>![Hors-piste Android](@site/static/img/navigation/routing/offpiste_android.png) </details> | |


## Autres paramètres de routage {#other-routing-settings}

- L'algorithme de routage peut également prendre en compte les limitations temporaires spécifiées dans OpenStreetMap. Cela peut être fait en utilisant l'option *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Notez que dans certains cas, les informations d'OSM peuvent être obsolètes.

- Dans la section [*Recalculer l'itinéraire*](../../navigation/guidance/navigation-settings.md#recalculate-route) des *Paramètres d'itinéraire*, vous pouvez activer et ajuster les options de recalcul d'itinéraire.

- Dans la section [*Développement*](../guidance/navigation-settings.md#development-settings) des *Paramètres d'itinéraire*, vous pouvez essayer de nouvelles fonctionnalités de routage qui sont actuellement en phase de test. Notez que ces paramètres ne sont disponibles que lorsque le [plugin de développement OsmAnd](../../plugins/development.md) est activé.

- Le paramètre *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* dans la version *iOS* d'OsmAnd se trouve dans *Paramètres de navigation → Paramètres d'itinéraire* (pour *Android*, dans *Paramètres du véhicule → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Ce paramètre est utilisé sur les routes inconnues sans limitation de vitesse. C'est le plus souvent le cas lors de la navigation sur une piste ou un itinéraire en ligne. Il doit être réglé en fonction des paramètres de votre véhicule.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. La configuration correcte des paramètres vous aidera à éviter les problèmes lors de la création d'un itinéraire. Vous pouvez sélectionner l'itinéraire le plus approprié en fonction du type de véhicule et des restrictions routières, ainsi que calculer le temps de trajet.

> *Dernière mise à jour : juin 2024*