---
source-hash: 46a1886051c86f82be8c7760e97112a93aa73290d7f57d40189238af7d9e4f39
sidebar_position: 4
title:  Guidage pour mobylette
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

Le *guidage pour mobylette* permet aux conducteurs de construire un itinéraire optimal (le plus rapide), en tenant compte des spécificités de la conduite d'un véhicule tel qu'une mobylette ou un scooter. Le processus de guidage prend en compte divers facteurs pour un déplacement sûr, confortable et légal sur les routes ou les pistes cyclables.

:::note
Par défaut, le *Profil Mobylette* est désactivé. Pour utiliser ce profil pour le guidage, vous devez l'activer dans *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::


## Paramètres d'itinéraire - Mobylette {#route-parameters---moped}

Le *guidage pour mobylette* peut être configuré selon vos besoins dans la section [Paramètres d'itinéraire](../guidance/navigation-settings.md#route-parameters) des paramètres de Navigation.  

Les paramètres de guidage pour mobylette sont très simples et ne comportent que quelques options.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Paramètres de guidage pour mobylette Android](@site/static/img/navigation/routing/moped_routing_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres de guidage pour mobylette iOS](@site/static/img/navigation/routing/moped_routing_ios.png)  

</TabItem>

</Tabs>

| Paramètre | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Sélectionnez les routes que vous souhaitez éviter pendant la navigation.  </summary>![Éviter les routes Android](@site/static/img/navigation/routing/avoid_moped_android.png) </details>  | Vous pouvez soit [sélectionner une route sur la carte](../../map/map-context-menu/#avoid-road) soit choisir un ou plusieurs types de routes dans la liste :  <ul><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un type de transport par eau, qui transporte des véhicules à travers des étendues d'eau)</li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Les restrictions d'accès privé seront ignorées lors du calcul de l'itinéraire.  | L'attribut *[private](https://wiki.openstreetmap.org/wiki/Key:access)* est utilisé dans OSM pour décrire les restrictions sur l'utilisation des autoroutes et autres voies de transport, ainsi que des bâtiments, entrées, commodités et entités de loisirs.   |