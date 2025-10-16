---
source-hash: 13fd1af76a8741fd09464e167ec356fac8a95838f37bb43f0fc4715f11186d0d
sidebar_position: 9
title:  Routage direct vers un point (Bateau)
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

Le routage direct vers un point dans OsmAnd est une fonctionnalité utile qui vous permet de naviguer directement vers un point spécifique sur la carte sans avoir à suivre un itinéraire prédéfini ou un réseau routier. Cette fonctionnalité peut être utilisée par les skippers de bateaux, les amateurs de plein air ou les services d'urgence lors d'opérations de sauvetage. Dans l'ensemble, le routage direct vers un point est une fonctionnalité flexible et polyvalente qui peut être utilisée dans diverses situations où les méthodes de routage traditionnelles peuvent ne pas être appropriées ou efficaces.

![Type de navigation directe vers un point Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

Un point sur une ligne est un point virtuel dont la distance à la destination est la même que la distance depuis votre position actuelle, mais ce n'est pas une projection de votre position actuelle sur une ligne. Cela facilite la mesure de la progression, et vous pouvez utiliser l'outil de mesure pour obtenir la distance correcte.

## Paramètres d'itinéraire - Direct vers un point {#route-parameters---direct-to-point}

Le type de routage *Direct vers un point* n'est lié à aucun profil et peut être utilisé avec différents profils.
Ce type de routage ne prend en compte aucun obstacle ou barrière pouvant être présent sur le terrain, comme les montagnes, les rivières ou les forêts denses. Il ne fournit également aucune information sur la qualité du terrain, le niveau de difficulté de l'itinéraire ou tout autre facteur pertinent pouvant affecter la sécurité ou la faisabilité de l'itinéraire (la section [Détails de l'itinéraire](../setup/route-details.md) est vide).

:::note
Lorsque vous utilisez les types de navigation Direct vers un point et Bateau, vous aurez besoin des [données des courbes de niveau de profondeur](../../plugins/nautical-charts.md#nautical-map-style), qui peuvent être activées et configurées dans *Configurer la carte*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → n'importe quel profil → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Paramètres de routage direct vers un point](@site/static/img/navigation/routing/direct_to_point_routing_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → n'importe quel profil → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Paramètres de routage direct vers un point iOS](@site/static/img/navigation/routing/direct_to_point_ios.png)

</TabItem>

</Tabs>