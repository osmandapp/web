---
source-hash: 7351826c8fb4c60b25d85b76503d19be0d8c40372400b9f8e4bb8e6c1112825b 
sidebar_position: 5
title:  Itinéraire en transports en commun
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

La navigation en transports en commun dans l'application OsmAnd vous permet de calculer des itinéraires en utilisant les transports en commun, ce qui vous aidera certainement à vous déplacer plus rapidement dans la "jungle de béton".

Les données sur les itinéraires de transports en commun proviennent du projet [OpenStreetMap](http://openstreetmap.org/). OsmAnd utilise le [schéma PTv2](https://wiki.openstreetmap.org/wiki/Public_transport) pour la navigation. OsmAnd prend en charge les itinéraires OpenStreetMap suivants pour la navigation : *bus*, *trolleybus*, *share_taxi*, *funicular*, *subway*, *light_rail*, *monorail*, *train*, *tram*, *ferry*. La vitesse par défaut pour chaque type de véhicule est configurée dans [Routing xml](../../../technical/build-osmand/routing.md) et est utilisée pour trouver les itinéraires les plus rapides.

:::note
La navigation en transports en commun est en phase de test. Pour l'instant, vous pouvez construire et visualiser votre itinéraire sans la fonction de navigation complète.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation public transport Android](@site/static/img/navigation/public/navigation_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![avigation public transport iOS](@site/static/img/navigation/public/navigation_ios.png)

</TabItem>

</Tabs>


## Comment utiliser

Pour commencer à naviguer dans la ville en transports en commun, utilisez [le bouton de navigation](../../widgets/map-buttons.md#directions) sur l'écran de la carte ou sélectionnez l'option de navigation dans le *Menu principal*.

**1.** Vous devez choisir le *profil de navigation Transports en commun*, les points de départ et d'arrivée.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation public transport routes Android](@site/static/img/navigation/public/navigation_public_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigation public transport routes iOS](@site/static/img/navigation/public/navigation_public_ios.png)

</TabItem>

</Tabs>

**2.** OsmAnd propose des options d'itinéraire avec les temps de marche et les itinéraires de transports en commun avec des informations sur l'itinéraire : temps, distance, correspondance et lignes de transports en commun. Vous devez faire défiler l'écran de navigation pour sélectionner l'option requise.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation public transport way Android](@site/static/img/navigation/public/navigation_way_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigation public transport way iOS](@site/static/img/navigation/public/navigation_way_ios.png)

</TabItem>

</Tabs>

**3.** Vous pouvez visualiser toutes les suggestions d'itinéraire possibles sur la carte en utilisant le bouton *Afficher sur la carte*. Faites glisser les écrans pour afficher l'option d'itinéraire suivante.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation public transport Details Android](@site/static/img/navigation/public/navigation_details_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigation public transport Details iOS](@site/static/img/navigation/public/navigation_details_ios.png)

</TabItem>

</Tabs>


**4.** Appuyez sur le bouton "Détails" pour ouvrir une description de l'itinéraire sélectionné avec tous les arrêts et correspondances.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation public transport stops list Android](@site/static/img/navigation/public/navigation_stops_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigation public transport stops list iOS](@site/static/img/navigation/public/navigation_stops_list_ios.png)

</TabItem>

</Tabs>


## Données et directives

OsmAnd utilise un nouveau schéma de transports en commun, également appelé Public Transport Version 2 (PTv2), pour l'algorithme de navigation des transports en commun d'OsmAnd.

- Vous pouvez vérifier vos transports en commun [ici](http://tools.geofabrik.de/osmi/).
- Un guide pour construire ou ajuster les itinéraires de transports en commun est disponible sur notre [blog](https://osmand.net/blog/guideline-pt).
- La présentation [2019 : Navigation en transports en commun utilisant OpenStreetMap par OsmAnd](https://www.youtube.com/watch?v=SPab09kaWPc&ab_channel=StateoftheMap).

> *Cet article a été mis à jour pour la dernière fois en juin 2024.*

