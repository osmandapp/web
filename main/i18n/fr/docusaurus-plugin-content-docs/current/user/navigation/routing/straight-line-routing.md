---
source-hash: 7e3135f97cb0856e50ca46f17778ece558a18d14044f072d10d8739db6285192
sidebar_position: 10
title:  Guidage en ligne droite (Avion)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


<InfoIncompleteArticle/>


## Vue d'ensemble {#overview}

Contrairement aux algorithmes de routage traditionnels qui utilisent des routes, des sentiers ou des itinéraires prédéfinis, le routage en ligne droite calcule la distance la plus courte entre deux points sur la carte sous la forme d'une ligne droite. Cette fonction peut être utile pour les randonneurs actifs qui souhaitent s'éloigner des sentiers ou explorer des zones reculées où les itinéraires traditionnels peuvent ne pas être disponibles. Pour les pilotes d'avions légers et les skippers de navires, l'utilisation du *type de routage en ligne droite* peut être très utile pour la navigation.

<!-- ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_1.png) ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_2.png)  -->

- Le routage *en ligne droite* ne tient pas compte des obstacles ou des barrières qui peuvent être présents sur le terrain, tels que les montagnes, les rivières ou les forêts denses.
- Il ne fournit aucune information sur la qualité du terrain, le niveau de difficulté de l'itinéraire ou tout autre facteur pertinent susceptible d'affecter la sécurité ou la faisabilité de l'itinéraire (la section [Détails de l'itinéraire](../setup/route-details.md) est vide).

![Straight-line Navigation type Android](@site/static/img/navigation/routing/straight_line_routing_andr.png)


## Paramètres d'itinéraire - Ligne droite {#route-parameters---straight-line}

:::note
Le routage en ligne droite est lié au *profil Avion*. Par défaut, ce profil est désactivé. Pour utiliser ce profil pour le routage, vous devez l'activer dans *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Le routage *en ligne droite* peut être configuré selon vos besoins dans la section [Paramètres d'itinéraire](../guidance/navigation-settings.md#route-parameters) des paramètres de navigation.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Straight line routing settings Android 1](@site/static/img/navigation/routing/aircraft_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Straight line routing settings iOS 1](@site/static/img/navigation/routing/straight_line_ios.png)

</TabItem>

</Tabs>

| Paramètre | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="recalc_angle_dialog_title"/>* |  <details><summary> <Translate android="true" ids="recalc_angle_dialog_descr"/>  </summary>![Straight line recalculation Android](@site/static/img/navigation/routing/straight_line_recalculation_andr.png) </details>  | Lorsque l'angle entre l'itinéraire calculé et la géolocalisation réelle est supérieur à celui que vous avez défini, le chemin le plus court de votre position actuelle à l'itinéraire calculé sera construit. En d'autres termes, OsmAnd calculera un segment d'itinéraire supplémentaire à l'itinéraire précédemment calculé. |


## Autres paramètres de routage {#other-routing-settings}

- Dans la section [*Recalculer l'itinéraire*](../../navigation/guidance/navigation-settings.md#recalculate-route) des *Paramètres d'itinéraire*, la distance à laquelle l'itinéraire sera recalculé pour le *routage en ligne droite* est définie par défaut à 500 mètres.

- Dans la section [*Développement*](../guidance/navigation-settings.md#development-settings) des *Paramètres d'itinéraire*, vous pouvez essayer de nouvelles fonctionnalités de routage qui sont actuellement en phase de test. Notez que ces paramètres ne sont disponibles que lorsque le [plugin de développement OsmAnd](../../plugins/development.md) est activé.

- Le paramètre *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* dans la version *iOS* d'OsmAnd se trouve dans *Paramètres de navigation → Paramètres d'itinéraire* (pour *Android*, dans *Paramètres du véhicule → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Ces paramètres peuvent également être définis pour le routage *Direct-to-point*. Il est utilisé pour calculer l'heure d'arrivée estimée.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. La configuration correcte des paramètres vous aidera à éviter les problèmes lors de la création d'un itinéraire. Vous pouvez sélectionner l'itinéraire le plus approprié en fonction du type de véhicule et des restrictions routières, ainsi que calculer le temps de trajet.

> *Dernière mise à jour : juin 2024*