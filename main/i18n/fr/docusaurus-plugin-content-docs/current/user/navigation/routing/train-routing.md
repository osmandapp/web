---
source-hash: f5ae16407762521ec4aa196b206ad374ecb06bfd7b394248db04784c9100bc68
sidebar_position: 7
title:  Itinéraire ferroviaire
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




## Aperçu {#overview}

:::note
Par défaut, le *profil Train* est désactivé. Pour utiliser ce profil pour l'itinéraire, vous devez l'activer dans *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

L'*itinéraire ferroviaire* dans OsmAnd offre aux utilisateurs la possibilité d'utiliser les lignes de chemin de fer pour la navigation comme s'ils conduisaient un train comme une voiture. Cette option peut être utile, par exemple, pour la randonnée lorsque d'autres routes ne sont pas disponibles. Dans d'autres cas, il est préférable d'utiliser l'*[itinéraire de transport en commun](./public-transport-navigation.md)*.

![Map transport tram](@site/static/img/navigation/routing/train_routing_overview.png)


## Paramètres d'itinéraire - Train {#route-parameters---train}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Train routing settings Android](@site/static/img/navigation/routing/train_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Train routing settings iOS](@site/static/img/navigation/routing/train_routing_ios.png)

</TabItem>

</Tabs>

L'*itinéraire ferroviaire* peut être configuré selon vos besoins dans la section [Paramètres d'itinéraire](../guidance/navigation-settings.md#route-parameters) des paramètres de navigation.


## Autres paramètres d'itinéraire {#other-routing-settings}

- L'algorithme de routage peut également prendre en compte les limitations temporaires spécifiées dans OpenStreetMap. Cela peut être fait en utilisant l'option *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Notez que dans certains cas, les informations d'OSM peuvent être obsolètes.

- Dans la section [*Recalculer l'itinéraire*](../../navigation/guidance/navigation-settings.md#recalculate-route) des *Paramètres d'itinéraire*, vous pouvez activer et ajuster les options de recalcul d'itinéraire.

- Dans la section [*Développement*](../guidance/navigation-settings.md#development-settings) des *Paramètres d'itinéraire*, vous pouvez essayer de nouvelles fonctionnalités de routage qui sont actuellement en phase de test. Notez que ces paramètres ne sont disponibles que lorsque le [plugin de développement OsmAnd](../../plugins/development.md) est activé.

- Le paramètre *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* dans la version *iOS* d'OsmAnd se trouve dans *Paramètres de navigation → Paramètres d'itinéraire* (pour *Android*, dans *Paramètres du véhicule → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Ces paramètres peuvent également être définis pour le routage *Direct vers un point*. Il est utilisé pour calculer l'heure d'arrivée estimée.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Une configuration correcte des paramètres vous aidera à éviter les problèmes lors de la création d'un itinéraire. Vous pouvez sélectionner l'itinéraire le plus approprié en fonction du type de véhicule et des restrictions routières, ainsi que calculer le temps de trajet.

> *Dernière mise à jour : juin 2024*