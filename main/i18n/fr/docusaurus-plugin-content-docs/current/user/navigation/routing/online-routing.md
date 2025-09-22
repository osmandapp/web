---
source-hash: ad9c1155352c7c8fc6705861acfb7f006ba101d59528a256c0205ba34b62fd80
sidebar_position: 11
title:  Itinéraire en ligne
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

<InfoAndroidOnly />

L'itinéraire en ligne est un outil puissant qui peut aider les utilisateurs à gagner du temps et à naviguer plus efficacement. Cependant, il est important de noter que l'itinéraire en ligne dépend de la connectivité Internet et peut ne pas être disponible dans les zones à faible couverture réseau. De plus, les utilisateurs doivent toujours faire preuve de prudence et de jugement lorsqu'ils suivent un itinéraire suggéré par un service d'itinéraire en ligne.

![Itinéraire en ligne Android](@site/static/img/navigation/routing/online_routing_andr.png)

## Paramètres d'itinéraire - Itinéraire en ligne {#route-parameters---online-routing}

*L'itinéraire en ligne* peut être activé dans la section [Type de navigation](../guidance/navigation-settings.md#overview) des paramètres de navigation du *Profil* sélectionné. Dans OsmAnd, il existe deux *moteurs d'itinéraire en ligne* prédéfinis ([ZLZK](https://zlzk.biz/) et [OSM DE](https://routing.openstreetmap.de)), qui proposent trois types d'*itinéraire en ligne* : *Vélo, Voiture et À pied*.

:::note
Les types d'itinéraire en ligne sont conçus pour les profils *Conduite, Vélo et Marche*, bien qu'ils puissent également être utilisés avec d'autres profils OsmAnd (Camion, Moto, Ski, Équitation). Ils sont fournis "tels quels", vous ne pouvez donc pas les personnaliser selon vos besoins en utilisant différentes options de navigation.
:::

### Itinéraire en ligne personnalisé {#custom-online-routing}

En plus des types d'itinéraire en ligne prédéfinis, vous pouvez configurer d'autres mécanismes d'itinéraire en ligne.
Appuyez sur le bouton **+ Ajouter un moteur d'itinéraire en ligne** et choisissez l'un des types d'itinéraire en ligne proposés ([Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Openrouteservice](https://openrouteservice.org)). Sélectionnez le véhicule approprié et appuyez sur *tester l'itinéraire* avant d'enregistrer vos modifications.

![Itinéraire en ligne personnalisé Android](@site/static/img/navigation/routing/custom_online_routing_andr_1.png) ![Itinéraire en ligne personnalisé Android](@site/static/img/navigation/routing/custom_online_routing_andr_2.png)

:::info
Vous pouvez en apprendre davantage sur les différences entre les moteurs d'itinéraire en ligne dans [OSMwiki](https://wiki.openstreetmap.org/wiki/Routing/online_routers).
:::

### Itinéraire GPX en ligne personnalisé {#custom-online-gpx-routing}

Le serveur en ligne construit un itinéraire en utilisant votre point de départ et votre destination. Après avoir reçu la trace du serveur, OsmAnd crée un itinéraire en utilisant la fonctionnalité *[Attacher aux routes](../setup/gpx-navigation.md#attach-to-the-roads)*. Ainsi, toutes les informations d'itinéraire nécessaires seront extraites de nos cartes hors ligne, et un guidage plus précis le long de l'itinéraire sera fourni.

![Itinéraire GPX personnalisé Android 1](@site/static/img/navigation/routing/online_routing_gpx_1.png) ![Itinéraire GPX personnalisé Android 1](@site/static/img/navigation/routing/online_routing_gpx_2.png)

## Paramètres de l'itinéraire en ligne {#online-routing-setting}

Lorsque l'itinéraire en ligne est sélectionné pour la navigation, une option supplémentaire apparaît dans les paramètres.

![Paramètres de l'itinéraire en ligne Android](@site/static/img/navigation/routing/settings_online_routing_1.png)

- *<Translate android="true" ids="calculate_osmand_route_without_internet"/>* - Permet d'utiliser l'itinéraire hors ligne d'OsmAnd, lorsque l'itinéraire en ligne est sélectionné dans les paramètres de navigation. Cette option peut être utile si un itinéraire a déjà été calculé en ligne, mais qu'il y a eu ensuite une déviation de l'itinéraire et que la connexion Internet a été perdue en même temps. Dans ce cas, l'itinéraire hors ligne sera utilisé pour revenir à l'itinéraire précédemment calculé en ligne.