---
source-hash: 4d9f5039ab11085fb01ba9a87295b0709bf9134ac4123b410ba74a735353f314
sidebar_position: 5
title:  Itinéraire en transport en commun
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

La navigation en transport en commun dans l'application OsmAnd vous permet de calculer des itinéraires en utilisant les transports publics, ce qui vous aidera certainement à vous déplacer plus rapidement dans la "jungle de béton".

Les données sur les itinéraires de transport en commun proviennent du projet [OpenStreetMap](http://openstreetmap.org/). OsmAnd utilise le [schéma PTv2](https://wiki.openstreetmap.org/wiki/Public_transport) pour la navigation.  OsmAnd prend en charge le suivi des itinéraires OpenStreetMap pour la navigation en *bus*, *trolleybus*, *taxi collectif*, *funiculaire*, *métro*, *métro léger*, *monorail*, *train*, *tram*, *ferry*. La vitesse par défaut pour chaque type de véhicule est configurée dans le [fichier XML de routage](../../../technical/build-osmand/routing.md) et est utilisée pour trouver les itinéraires les plus rapides.

:::note
Le routage en transport en commun est en phase de test. Pour l'instant, vous pouvez créer et visualiser votre itinéraire sans la fonction de navigation complète.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation transport en commun Android](@site/static/img/navigation/public/navigation_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigation transport en commun iOS](@site/static/img/navigation/public/navigation_ios.png)

</TabItem>

</Tabs>


## Comment utiliser {#how-to-use}

Pour commencer à naviguer en ville en transport en commun, utilisez [le bouton de navigation](../../widgets/map-buttons.md#directions) sur l'écran de la carte ou sélectionnez l'option de navigation dans le *Menu principal*.  

**1.** Vous devez choisir le *profil de navigation Transport en commun*, ainsi que les points de départ et d'arrivée.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Itinéraires de navigation en transport en commun Android](@site/static/img/navigation/public/navigation_public_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Itinéraires de navigation en transport en commun iOS](@site/static/img/navigation/public/navigation_public_ios.png)

</TabItem>

</Tabs>

**2.** OsmAnd propose des options d'itinéraire avec les temps de marche et les itinéraires de transport en commun avec les informations sur le trajet : durée, distance, correspondances et lignes publiques. Vous devez faire défiler l'écran de navigation pour sélectionner l'option souhaitée.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Trajet de navigation en transport en commun Android](@site/static/img/navigation/public/navigation_way_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Trajet de navigation en transport en commun iOS](@site/static/img/navigation/public/navigation_way_ios.png)

</TabItem>

</Tabs>

**3.** Vous pouvez visualiser toutes les suggestions d'itinéraires possibles sur la carte en utilisant le bouton *Afficher sur la carte*. Balayez les écrans pour voir l'option d'itinéraire suivante.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Détails de la navigation en transport en commun Android](@site/static/img/navigation/public/navigation_details_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Détails de la navigation en transport en commun iOS](@site/static/img/navigation/public/navigation_details_ios.png)

</TabItem>

</Tabs>


**4.** Appuyez sur le bouton "Détails" pour ouvrir une description de l'itinéraire sélectionné avec tous les arrêts et correspondances.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Liste des arrêts de transport en commun Android](@site/static/img/navigation/public/navigation_stops_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Liste des arrêts de transport en commun iOS](@site/static/img/navigation/public/navigation_stops_list_ios.png)

</TabItem>

</Tabs>

## Types de transport en commun {#public-transport-types}

Vous pouvez rechercher des itinéraires de transport en commun bien organisés selon vos préférences et choisir de :

- Éviter les bus (et trolleybus)
- Éviter les métros
- Éviter les trains
- Éviter les trams
- Éviter les ferries
- Éviter les taxis collectifs

Par défaut, OsmAnd recherche des itinéraires qui incluent tous les types de transport en commun pris en charge.

## Itinéraires alternatifs {#alternative-routes}

Les itinéraires alternatifs sont des sections d'un itinéraire desservies par différents services de transport et qui partagent le même trajet et les mêmes arrêts.

Différents services de transport peuvent utiliser des numéros d'itinéraire (refs) différents ou même des types de transport différents.

L'interface utilisateur affiche les itinéraires alternatifs sous forme de badges colorés avec leurs refs.

## Performances et résultats {#performance-and-results}

**Profil Transport en commun -> Paramètres -> Paramètres de navigation -> Paramètres d'itinéraire**

1. **Nombre maximum de changements de transport**.

Les performances et la consommation de mémoire du routeur de transport en commun dépendent de la profondeur de recherche.

Le paramètre le plus important qui affecte cette profondeur est le **Nombre maximum de changements de transport**.

Nous utilisons **2** comme valeur par défaut, qui semble optimale pour les réseaux de transport en commun modernes.

Si vous rencontrez des performances faibles ou des erreurs de mémoire insuffisante, essayez de diminuer cette valeur.

Si vous êtes dans une petite ville ou que vous effectuez de courts trajets, une valeur de **1** peut mieux convenir.
<!--
There are two more parameters that help you choose the best routes.

2. **Display N best routes** (specify the number of best routes to display)

By default, OsmAnd displays the **10** best routes (including alternative routes).

You can decrease or increase this limit, or even display all routes.

Note: displaying unlimited routes might slow down your device.

Possible values: 0 (show all), 5, 10 (default), 15, 100
-->

## Données et directives {#data-and-guideline}

OsmAnd utilise un nouveau schéma de transport public, également appelé Public Transport Version 2 (PTv2), pour l'algorithme de navigation en transport en commun d'OsmAnd.

- Vous pouvez vérifier votre transport en commun [ici](http://tools.geofabrik.de/osmi/).
- Un guide pour créer ou ajuster les itinéraires de transport en commun est disponible sur notre [blog](https://osmand.net/blog/guideline-pt).
- La présentation [2019 : Navigation en transport en commun utilisant OpenStreetMap par OsmAnd](https://www.youtube.com/watch?v=SPab09kaWPc&ab_channel=StateoftheMap).