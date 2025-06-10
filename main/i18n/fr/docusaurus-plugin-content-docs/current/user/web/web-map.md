---
source-hash: dde8250578460772829e966968add9c68eaa6a84529c9781ca298152f25ce984
sidebar_position: 3
sidebar_label: Carte
title: Carte globale sur le site web
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


<InfoIncompleteArticle/>

:::info
Le site *[osmand.net/map](https://osmand.net/map/)* est actuellement en cours de développement et de test.
**Par conséquent, la mise en page et le fonctionnement de certaines fonctions sur le site peuvent être différents de ceux décrits dans cet article.**

Nous avons créé le [thème de discussion](https://github.com/osmandapp/OsmAnd/discussions/16567) sur notre GitHub afin que vous puissiez y laisser vos commentaires.
:::


## Aperçu {#overview}

La carte web OsmAnd est une carte globale basée sur les données [OpenStreetMap (OSM)](https://www.openstreetmap.org/). Elle permet aux utilisateurs de visualiser leurs propres données, telles que les traces et les favoris, de créer des itinéraires de navigation pour n'importe quel profil, et d'accéder à des fonctionnalités supplémentaires comme la météo, les traces GPX publiques, les POI et les images Wikimedia. Explorez et personnalisez votre expérience de données directement dans votre navigateur.

![OsmAnd Web all](@site/static/img/web/web_map_all.png)


## Menu contextuel de la carte {#map-context-menu}

Pour l'ouvrir, faites un clic droit n'importe où sur la carte. Ce menu comprend les actions suivantes :

- **Où suis-je** – Trouvez rapidement votre position actuelle sur la carte. Cette fonction affiche les adresses les plus proches du point sélectionné sur la carte.
- **Ouvrir la météo** – Accédez au [menu Météo](#weather-on-the-web) pour afficher les détails météorologiques.
- **Créer un nouvel itinéraire** – Ouvre l'[outil *Planifier un itinéraire*](../web/planner.md#create-track-and-local) avec l'emplacement sélectionné comme point de départ ou de destination.
- **Ajouter un favori** – Vous permet de créer et d'enregistrer un [favori](../web/web-userdata.mdx#add--edit-favorite) à n'importe quel point de la carte pour un accès facile.
- **Itinéraire depuis** – Définit le point sélectionné comme [emplacement de départ](../web/planner.md#navigation-route) pour la navigation.
- **Itinéraire vers** – Définit le point sélectionné comme [destination pour la navigation](../web/planner.md#navigation-route).
- **Copier les coordonnées** – Copie les coordonnées du point sélectionné pour une utilisation externe.
- **Ajouter une épingle** – Place une épingle pour marquer un emplacement sur la carte. ([Exemple](https://osmand.net/map/?pin=37.546483,-77.446446#15/37.5458/-77.4470))
- **Afficher les régions** – Affiche les régions associées à l'emplacement sélectionné.

![Map Context menu](@site/static/img/web/map_context_menu.png)


## Météo sur le Web {#weather-on-the-web}

OsmAnd Web fournit des informations météorologiques provenant de deux sources de prévisions :

- **GFS (par défaut)**
- **ECMWF**

Pour basculer entre ces sources de prévisions, cliquez sur le **bouton parapluie** dans le menu Météo.

***Fonctionnalités du menu météo :***

- **Données météorologiques actuelles** : Affiche vos coordonnées ainsi que les données suivantes :

  - Température.
  - Précipitations.
  - Vent.
  - Pression atmosphérique.
  - Couverture nuageuse.

- **Réglage de l'heure** : Modifiez la date et l'heure à l'aide de l'[**outil temporel**](#weather-on-the-web) dans le menu Météo pour afficher la météo à un moment précis.

***Couches météo sur la carte :***

- Utilisez le **bouton couches** pour sélectionner et activer les couches météo telles que :

  - Température.
  - Pression.
  - Vent.
  - Couverture nuageuse.
  - Précipitations.

***Affichage des prévisions :***

- Les prévisions météorologiques sont disponibles pour les **7 jours** à venir.
- Les mises à jour des prévisions sont fournies par **pas de 3 heures** pour des informations détaillées.

Pour accéder ou personnaliser ces fonctionnalités, utilisez les menus sur le côté gauche ou droit de l'interface.

  ![OsmAnd Web Weather](@site/static/img/web/web_weather.png)

***Prévisions à 7 jours*** :

Cliquez sur les données de prévisions dans le menu pour afficher les **prévisions à 7 jours** pour votre emplacement. Les prévisions sont disponibles en :

- **Format graphique**
- **Format liste**

  ![OsmAnd Web Weather](@site/static/img/web/web_7day.png)


## Menu Configurer la carte {#configure-map-menu}

Le menu Configurer la carte vous permet de gérer les paramètres d'affichage des données cartographiques, tels que les couches de POI, les favoris, les traces et le terrain. Veuillez vous connecter à votre compte OsmAnd pour utiliser cette section du menu.

Pour ouvrir ce menu, cliquez sur le bouton dans le **coin supérieur gauche** ou accédez-y via le **Menu**.

- [Superposition de POI...](#poi-overlay-section). Vous permet de choisir et d'afficher les catégories de POI nécessaires sur la carte.
- [Favoris](#favorites-section). Active ou désactive l'affichage des favoris sur la carte.
- [Traces](#tracks-section). Contient les traces GPX visibles sur la carte.
- [Terrain](#terrain-section). Active ou désactive le schéma de couleurs du terrain sur la carte.

![POIs menu](@site/static/img/web/configure_map_web.png)


### Section Superposition de POI {#poi-overlay-section}

Pour afficher les POI sur la carte :

*Menu Configurer la carte → Superposition de POI...*. Ici, vous pouvez choisir les catégories à afficher sur la carte.

Alternativement, vous pouvez utiliser la [**section Recherche**](web-search.md) pour trouver l'endroit souhaité.

![POIs menu](@site/static/img/web/poi_menu.png)


### Section Favoris {#favorites-section}

En un clic, vous pouvez activer ou désactiver les favoris sur la carte. Cependant, seuls les favoris avec [**Afficher sur la carte activé**](../web/web-userdata.mdx##favorites-on-the-web) seront affichés.


### Section Traces {#tracks-section}

Cette section contient une liste de vos [**traces GPX visibles sur la carte**](../web/web-userdata.mdx#visible-on-the-map) et des traces **Récemment visibles**.

- Vous pouvez activer ou désactiver les traces directement.
- Activer ou désactiver les traces de la liste **Récemment visibles**.

Chaque trace dispose d'un **Menu contextuel** (accessible via le bouton ⋮) avec les commandes suivantes :

- **Masquer la trace** : Masque la trace actuellement visible de la carte.
- **Rendre la trace visible** : Affiche une trace de la liste Récemment visibles sur la carte.
- **Renommer** : Vous permet de renommer la trace pour une identification plus facile.
- **Dupliquer** : Crée une copie de la trace.
- **Télécharger** : Enregistre la trace sur votre appareil local.
- **Supprimer** : Supprime définitivement la trace de la liste.

![Configure map menu Tracks](@site/static/img/web/configure_map_track.png)


### Section Terrain {#terrain-section}

La section **Terrain** est une fonctionnalité payante <ProFeature/>. Pour utiliser cette fonctionnalité, vous devez d'abord vous connecter à votre compte OsmAnd Pro.

Dans cette section, vous pouvez :

- Choisir un **schéma de couleurs** pour le terrain :
  - **Ombrage**
  - **Pente**
  - **Hauteur**
- Ajuster la visibilité de la couche de terrain sélectionnée de **0% à 100%**.

![Configure map menu Terrain](@site/static/img/web/configure_map_terrain.png)


<!--
## Map style {#map-style}

In this section of the menu, you can change the map style. You can read more about how to do this in the article [Vector Maps (Map Styles)](../map/vector-maps.md) for the OsmAnd app. The settings in the web version are no different.
**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->


## Schémas d'URL {#url-schemes}

Pour faciliter l'utilisation du service web (et de l'application) OsmAnd, vous pouvez profiter des liens directs. Ce sont des URL spéciales qui vous permettent de transférer des données de localisation et d'inclure des détails sur les épingles, les traces, la météo, etc.

Ces URL peuvent être copiées et partagées en utilisant n'importe quel support pris en charge par votre appareil et sont compatibles avec les versions Android et iOS d'OsmAnd.

1. **URL avec une épingle sur la carte :**

  https://osmand.net/map/?pin=52.491143,7.116394#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_pin.png)

2. **URL sans épingle sur la carte :**

  https://osmand.net/map/#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_without.png)

3. **URL avec navigation :** `osmand.net/map/navigate`

  https://osmand.net/map/navigate/?start=52.236210,5.119629&finish=52.412472,4.855957&type=osmand&profile=car&pin=52.491143,7.116394#9/52.3873/5.2570

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_track.png)

Selon les paramètres spécifiés, les chaînes d'URL peuvent contenir :

- **latitude** : valeur de la latitude sous forme de nombre.
- **longitude** : valeur de la longitude sous forme de nombre.
- **start-finish** : coordonnées pour la navigation.
- **profile** : profil de navigation (par exemple, voiture, vélo).
- **zoom** : niveau de zoom.

4. **Météo**&nbsp; – &nbsp;`osmand.net/map/weather`

***Par exemple***, vous pouvez accéder directement à la page météo avec les coordonnées spécifiées :
    [`https://osmand.net/map/weather/#9/52.2394/21.0362`](https://osmand.net/map/weather/#9/52.2394/21.0362)

5. **Compte**&nbsp; – &nbsp;`osmand.net/map/account`

6. **Configurer la carte**&nbsp; – &nbsp;`osmand.net/map/configure/`

7. **Traces**&nbsp; – &nbsp;`osmand.net/map/mydata/tracks`

8. **Favoris**&nbsp; – &nbsp;`osmand.net/map/mydata/favorites`

9. **Paramètres**&nbsp; – &nbsp;`osmand.net/map/settings`

10. **Planifier un itinéraire**&nbsp; - &nbsp;`osmand.net/map/plan`

11. Lien direct vers la [**page Explorer**](https://osmand.net/docs/user/web/web-search#explore) actuelle&nbsp; - &nbsp;`osmand.net/map/search`


> *Dernière mise à jour : Janvier 2025*