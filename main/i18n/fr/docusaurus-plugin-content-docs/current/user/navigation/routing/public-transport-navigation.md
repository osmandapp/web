---
source-hash: 80dc4983a69b5c41013a01014add8bf4ae3e59f35fc0c079bd4e47887e3e4bea
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


## Données et directives {#data-and-guideline}

OsmAnd utilise un nouveau schéma de transport public, également appelé Public Transport Version 2 (PTv2), pour l'algorithme de navigation en transport en commun d'OsmAnd.

- Vous pouvez vérifier votre transport en commun [ici](http://tools.geofabrik.de/osmi/).
- Un guide pour créer ou ajuster les itinéraires de transport en commun est disponible sur notre [blog](https://osmand.net/blog/guideline-pt).
- La présentation [2019 : Navigation en transport en commun utilisant OpenStreetMap par OsmAnd](https://www.youtube.com/watch?v=SPab09kaWPc&ab_channel=StateoftheMap).