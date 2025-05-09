---
sidebar_position: 9
title:  Navigation point à point (Bateau)
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

La navigation point à point dans OsmAnd est une fonctionnalité utile qui vous permet de naviguer directement vers un point spécifique sur la carte sans avoir à suivre un itinéraire prédéfini ou un réseau routier. Cette fonctionnalité peut être utilisée par les skippers de bateaux,
les amateurs de plein air ou par les services d'urgence lors d'opérations de sauvetage. Dans l'ensemble, la navigation point à point est une fonctionnalité flexible et polyvalente qui peut être utilisée dans diverses situations où les méthodes de navigation traditionnelles peuvent ne pas être appropriées ou efficaces.

![Type de navigation point à point Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

Un point sur une ligne est un point virtuel dont la distance à la destination est la même que la distance depuis votre position actuelle, mais ce n'est pas une projection de votre position actuelle sur une ligne. Cela facilite la mesure de la progression, et vous pouvez utiliser l'outil de mesure pour obtenir la distance correcte.


## Paramètres d'itinéraire - Point à point

Le type de navigation *Point à point* n'est lié à aucun profil et peut être utilisé avec différents profils.
Ce type de navigation ne prend pas en compte les obstacles ou les barrières qui peuvent être présents sur le terrain, tels que les montagnes, les rivières ou les forêts denses. Il ne fournit pas non plus d'informations sur la qualité du terrain, le niveau de difficulté de l'itinéraire ou tout autre facteur pertinent susceptible d'affecter la sécurité ou la faisabilité de l'itinéraire (la section [Détails de l'itinéraire](../setup/route-details.md) est vide).

:::note
Lorsque vous utilisez les types de navigation Point à point et Bateau, vous aurez besoin des [données de courbes de profondeur](../../plugins/nautical-charts.md#nautical-map-style), qui peuvent être activées et définies dans *Configurer la carte*.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → n'importe quel profil → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Paramètres de navigation point à point](@site/static/img/navigation/routing/direct_to_point_routing_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → n'importe quel profil → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Paramètres de navigation point à point iOS](@site/static/img/navigation/routing/direct_to_point_ios.png)

</TabItem>

</Tabs>


## Autres paramètres de navigation

- Dans la section [*Recalculer l'itinéraire*](../../navigation/guidance/navigation-settings.md#recalculate-route) des *Paramètres d'itinéraire*, vous pouvez activer et ajuster les options de recalcul de l'itinéraire. La valeur par défaut est 0 mètre de déviation, ce qui signifie que l'itinéraire n'est pas recalculé.

- Dans la section [*Développement*](../guidance/navigation-settings.md#development-settings) des *Paramètres d'itinéraire*, vous pouvez essayer de nouvelles fonctionnalités de navigation qui sont actuellement en phase de test. Notez que ces paramètres ne sont disponibles que lorsque le [plugin de développement OsmAnd](../../plugins/development.md) est activé.

- Le paramètre *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* dans la version *iOS* d'OsmAnd se trouve dans *Paramètres de navigation → Paramètres d'itinéraire* (pour *Android*, dans *Paramètres du véhicule → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Ces paramètres peuvent également être définis pour la navigation *Point à point*. Ils sont utilisés pour calculer l'heure d'arrivée estimée.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. La configuration correcte des paramètres vous aidera à éviter les problèmes lors de la création d'un itinéraire. Vous pouvez sélectionner l'itinéraire le plus approprié en fonction du type de véhicule et des restrictions routières, ainsi que calculer le temps de trajet.

> *Cet article a été mis à jour pour la dernière fois en juin 2024*

-- source-hash: blake2s: 692d6bd8d626aeeb392e543280f0d2d29b59c90b1a5ff8048e85b3b23fc28d5d --
