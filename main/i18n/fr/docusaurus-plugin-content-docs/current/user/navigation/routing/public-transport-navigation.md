---
source-hash: 666034567fd284a4497490ffa9885eebc102c1d37823e71a52d03c189944eb25
sidebar_position: 5
title: Acheminement par transport en commun
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

La navigation par transport en commun dans l'application OsmAnd vous permet de calculer des itinéraires en utilisant les transports en commun, ce qui vous aidera certainement à vous déplacer plus rapidement dans la "jungle de béton".

Les données sur les itinéraires de transport en commun sont tirées du projet [OpenStreetMap](http://openstreetmap.org/). OsmAnd utilise le [schéma PTv2](https://wiki.openstreetmap.org/wiki/Public_transport) pour la navigation. OsmAnd prend en charge les itinéraires OpenStreetMap suivants pour la navigation : *bus*, *trolleybus*, *share_taxi*, *funiculaire*, *métro*, *tramway*, *monorail*, *train*, *tram*, *ferry*. La vitesse par défaut pour chaque type de véhicule est configurée dans [Routing xml](../../../technical/build-osmand/routing.md) et est utilisée pour trouver les itinéraires les plus rapides.

:::note
L'acheminement par transport en commun est en phase de test. Pour l'instant, vous pouvez construire et visualiser votre itinéraire sans la fonction de navigation complète.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation transports en commun Android](@site/static/img/navigation/public/navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation transports en commun iOS](@site/static/img/navigation/public/navigation_ios.png)

</TabItem>

</Tabs>


## Comment utiliser {#how-to-use}

Pour commencer à naviguer en ville par les transports en commun, utilisez [le bouton de navigation](../../widgets/map-buttons.md#directions) sur l'écran de la carte ou sélectionnez l'option de navigation dans le *Menu principal*.

**1.** Vous devez choisir le *profil de navigation Transports en commun*, les points de départ et d'arrivée.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Itinéraires de navigation transports en commun Android](@site/static/img/navigation/public/navigation_public_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Itinéraires de navigation transports en commun iOS](@site/static/img/navigation/public/navigation_public_ios.png)

</TabItem>

</Tabs>

**2.** OsmAnd propose des options d'itinéraire avec les temps de marche et les itinéraires de transport en commun avec des informations sur l'itinéraire : temps, distance, correspondance et itinéraires publics. Vous devez faire défiler l'écran de navigation pour sélectionner l'option requise.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation transports en commun Android](@site/static/img/navigation/public/navigation_way_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation transports en commun iOS](@site/static/img/navigation/public/navigation_way_ios.png)

</TabItem>

</Tabs>

**3.** Vous pouvez visualiser toutes les suggestions d'itinéraire possibles sur la carte à l'aide du bouton *Afficher sur la carte*. Faites glisser les écrans pour afficher l'option d'itinéraire suivante.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Détails de navigation transports en commun Android](@site/static/img/navigation/public/navigation_details_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Détails de navigation transports en commun iOS](@site/static/img/navigation/public/navigation_details_ios.png)

</TabItem>

</Tabs>


**4.** Appuyez sur le bouton "Détails" pour ouvrir une description de l'itinéraire sélectionné avec tous les arrêts et correspondances.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Liste des arrêts de navigation transports en commun Android](@site/static/img/navigation/public/navigation_stops_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Liste des arrêts de navigation transports en commun iOS](@site/static/img/navigation/public/navigation_stops_list_ios.png)

</TabItem>

</Tabs>


## Données et directives {#data-and-guideline}

OsmAnd utilise un nouveau schéma de transport en commun, également appelé Public Transport Version 2 (PTv2) pour l'algorithme de navigation des transports en commun d'OsmAnd.

- Vous pouvez vérifier vos transports en commun [ici](http://tools.geofabrik.de/osmi/).
- Un guide pour construire ou ajuster les itinéraires de transport en commun est disponible sur notre [blog](https://osmand.net/blog/guideline-pt).
- La présentation [2019 : Navigation par transport en commun utilisant OpenStreetMap par OsmAnd](https://www.youtube.com/watch?v=SPab09kaWPc&ab_channel=StateoftheMap).

> *Dernière mise à jour : juin 2024.*