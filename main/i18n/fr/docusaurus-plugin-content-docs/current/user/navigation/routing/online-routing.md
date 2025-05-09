---
sidebar_position: 11
title:  Routage en ligne
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


## Aperçu

<InfoAndroidOnly />

Le routage en ligne est un outil puissant qui peut aider les utilisateurs à gagner du temps et à naviguer plus efficacement. Cependant, il est important de noter que le routage en ligne dépend de la connectivité Internet et peut ne pas être disponible dans les zones où la couverture réseau est faible. De plus, les utilisateurs doivent toujours faire preuve de prudence et utiliser leur jugement lorsqu'ils suivent un itinéraire suggéré par un service de routage en ligne.

![Routage en ligne Android](@site/static/img/navigation/routing/online_routing_andr.png)


## Paramètres d'itinéraire - Routage en ligne

Le *routage en ligne* peut être activé dans la section [Type de navigation](../guidance/navigation-settings.md#overview) des paramètres de navigation du *Profil* sélectionné. Dans OsmAnd, il existe deux *moteurs de routage en ligne* prédéfinis ([ZLZK](https://zlzk.biz/) et [OSM DE](https://routing.openstreetmap.de)), qui proposent trois types de *routage en ligne* : *Vélo, Voiture et À pied*.

:::note
Les types de routage en ligne sont conçus pour les profils *Conduite, Cyclisme et Marche*, bien qu'ils puissent également être utilisés avec d'autres profils OsmAnd (Camion, Moto, Ski, Équitation). Ils sont fournis « tels quels », vous ne pouvez donc pas les personnaliser selon vos besoins en utilisant différentes options de navigation.
:::

### Routage en ligne personnalisé

En plus des types de routage en ligne prédéfinis, vous pouvez configurer d'autres mécanismes de routage en ligne.
Appuyez sur le bouton **+ Ajouter un moteur de routage en ligne** et choisissez l'un des types de routage en ligne proposés ([Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Openrouteservice](https://openrouteservice.org)). Sélectionnez le véhicule approprié et appuyez sur *tester le routage* avant d'enregistrer vos modifications.

![Routage en ligne personnalisé Android](@site/static/img/navigation/routing/custom_online_routing_andr_1.png) ![Routage en ligne personnalisé Android](@site/static/img/navigation/routing/custom_online_routing_andr_2.png)

:::info
Vous pouvez lire les différences entre les moteurs de routage en ligne dans [OSMwiki](https://wiki.openstreetmap.org/wiki/Routing/online_routers).
:::

### Routage GPX en ligne personnalisé

Le serveur en ligne construit un itinéraire en utilisant votre point de départ et votre destination. Après avoir reçu la trace du serveur, OsmaAnd crée un itinéraire en utilisant la fonction *[Attacher aux routes](../setup/gpx-navigation.md#attach-to-roads)*. Ainsi, toutes les informations de routage nécessaires seront tirées de nos cartes hors ligne, et des indications plus précises le long de l'itinéraire seront fournies.

![Routage GPX personnalisé Android 1](@site/static/img/navigation/routing/online_routing_gpx_1.png) ![Routage GPX personnalisé Android 1](@site/static/img/navigation/routing/online_routing_gpx_2.png)


## Paramètres de routage en ligne

Lorsque le routage en ligne est sélectionné pour la navigation, une option supplémentaire apparaît dans les paramètres.

![Paramètres de routage en ligne Android](@site/static/img/navigation/routing/settings_online_routing_1.png)

- *<Translate android="true" ids="calculate_osmand_route_without_internet"/>* - Permet d'utiliser le routage hors ligne d'OsmAnd lorsque le routage en ligne est sélectionné dans les paramètres de navigation. Cette option peut être utile si un itinéraire a déjà été construit en ligne, mais qu'il y a eu ensuite une déviation de l'itinéraire et qu'en même temps la connexion Internet a été perdue. Dans ce cas, le routage hors ligne sera utilisé pour revenir à l'itinéraire, précédemment calculé en ligne.

> *Cet article a été mis à jour pour la dernière fois en juin 2024*

-- source-hash: blake2s: d5cfab4861b9bd743d3f04bbd7ef92694768358602639508d75e0d21cfe0c9a9 --
