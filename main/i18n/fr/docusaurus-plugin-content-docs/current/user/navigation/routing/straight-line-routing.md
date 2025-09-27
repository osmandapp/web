---
source-hash: 1ca5ebf392132069b1b5beabb8bfe492c629807a3258b756d15d406a2613de59
sidebar_position: 10
title:  Itinéraire en ligne droite (Avion)
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


## Aperçu {#overview}

Contrairement aux algorithmes d'itinéraire traditionnels qui utilisent des routes, des sentiers ou des itinéraires prédéfinis, l'itinéraire en ligne droite calcule la distance la plus courte entre deux points sur la carte en ligne droite. Cette fonctionnalité peut être utile pour les randonneurs actifs qui souhaitent s'éloigner des sentiers ou explorer des zones reculées où les itinéraires traditionnels peuvent ne pas être disponibles. Pour les pilotes d'avions légers et les capitaines de navires, l'utilisation du *type d'itinéraire en Ligne droite* peut être très utile pour la navigation.

<!-- ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_1.png) ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_2.png)  -->

- L'itinéraire en *Ligne droite* ne prend en compte aucun obstacle ou barrière pouvant être présent sur le terrain, comme les montagnes, les rivières ou les forêts denses.
- Il ne fournit aucune information sur la qualité du terrain, le niveau de difficulté de l'itinéraire ou tout autre facteur pertinent pouvant affecter la sécurité ou la faisabilité de l'itinéraire (la section [Détails de l'itinéraire](../setup/route-details.md) est vide).

![Type de navigation en ligne droite Android](@site/static/img/navigation/routing/straight_line_routing_andr.png)


## Paramètres d'itinéraire - Ligne droite {#route-parameters---straight-line}

:::note
L'itinéraire en ligne droite est lié au *profil Avion*. Par défaut, ce profil est désactivé. Pour utiliser ce profil pour le calcul d'itinéraire, vous devez l'activer dans *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

L'itinéraire en *Ligne droite* peut être configuré selon vos besoins dans la section [Paramètres d'itinéraire](../guidance/navigation-settings.md#route-parameters) des paramètres de navigation.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paramètres d'itinéraire en ligne droite Android 1](@site/static/img/navigation/routing/aircraft_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres d'itinéraire en ligne droite iOS 1](@site/static/img/navigation/routing/straight_line_ios.png)

</TabItem>

</Tabs>

| Paramètre | Description | Remarque |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="recalc_angle_dialog_title"/>* |  <details><summary> <Translate android="true" ids="recalc_angle_dialog_descr"/>  </summary>![Recalcul en ligne droite Android](@site/static/img/navigation/routing/straight_line_recalculation_andr.png) </details>  | Lorsque l'angle entre l'itinéraire calculé et la géolocalisation réelle est supérieur à celui que vous avez défini, le chemin le plus court depuis votre position actuelle jusqu'à l'itinéraire calculé sera construit. En d'autres termes, OsmAnd calculera un segment d'itinéraire supplémentaire vers l'itinéraire précédemment calculé. |