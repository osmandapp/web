---
source-hash: f3ae7502efc866393db44fa06909a99ed7ca0f9aec1864d654e84235132cb2f5
sidebar_position: 4
title:  Itinéraire en cyclomoteur
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

L'*itinéraire en cyclomoteur* permet aux conducteurs de construire un itinéraire optimal (le plus rapide), en tenant compte des spécificités de la conduite d'un véhicule tel qu'un cyclomoteur ou un scooter. Le processus d'itinéraire prend en compte divers facteurs pour un déplacement sûr, confortable et légal sur les routes ou les pistes cyclables.

:::note
Par défaut, le *profil Cyclomoteur* est désactivé. Pour utiliser ce profil pour l'itinéraire, vous devez l'activer dans *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::


## Paramètres d'itinéraire - Cyclomoteur {#route-parameters---moped}

L'*itinéraire en cyclomoteur* peut être configuré selon vos besoins dans la [section Paramètres d'itinéraire](../guidance/navigation-settings.md#route-parameters) des paramètres de navigation.

Les paramètres d'itinéraire du cyclomoteur sont très simples et ne comportent que quelques options.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Paramètres d'itinéraire en cyclomoteur Android](@site/static/img/navigation/routing/moped_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres d'itinéraire en cyclomoteur iOS](@site/static/img/navigation/routing/moped_routing_ios.png)

</TabItem>

</Tabs>

| Paramètre | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Sélectionnez les routes que vous souhaitez éviter pendant la navigation. </summary>![Éviter les routes Android](@site/static/img/navigation/routing/avoid_moped_android.png) </details>  | Vous pouvez soit [sélectionner une route sur la carte](../../map/map-context-menu/#avoid-road), soit choisir le(s) type(s) de route dans la liste : <ul><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un type de transport maritime, qui transporte des véhicules à travers des étendues d'eau)</li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Les restrictions d'accès privé seront ignorées lors du calcul de l'itinéraire.  | Le tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* est utilisé dans OSM pour décrire les restrictions d'utilisation des autoroutes et autres voies de transport, ainsi que des bâtiments, des entrées, des commodités et des entités de loisirs. |


## Autres paramètres d'itinéraire {#other-routing-settings}

- L'algorithme d'itinéraire peut également prendre en compte les limitations temporaires spécifiées dans OpenStreetMap. Cela peut être fait en utilisant l'option *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Notez que dans certains cas, les informations d'OSM peuvent être obsolètes.

- Dans la [*section Recalculer l'itinéraire*](../../navigation/guidance/navigation-settings.md#recalculate-route) des *Paramètres d'itinéraire*, vous pouvez activer et ajuster les options de recalcul de l'itinéraire.

- Dans la [*section Développement*](../guidance/navigation-settings.md#development-settings) des *Paramètres d'itinéraire*, vous pouvez essayer de nouvelles fonctionnalités d'itinéraire qui sont actuellement en phase de test. Notez que ces paramètres ne sont disponibles que lorsque le [plugin de développement OsmAnd](../../plugins/development.md) est activé.

- Le paramètre *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* dans la version *iOS* d'OsmAnd se trouve dans *Paramètres de navigation → Paramètres d'itinéraire* (pour *Android*, dans *Paramètres du véhicule → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Ce paramètre est utilisé sur les routes inconnues sans limitation de vitesse. C'est le plus souvent le cas lors de la navigation sur une trace ou un itinéraire en ligne. Il doit être réglé en fonction des paramètres de votre véhicule.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. La configuration correcte des paramètres vous aidera à éviter les problèmes lors de la création d'un itinéraire. Vous pouvez sélectionner l'itinéraire le plus approprié en fonction du type de véhicule et des restrictions routières, ainsi que calculer le temps de trajet.

> *Dernière mise à jour : juin 2024*