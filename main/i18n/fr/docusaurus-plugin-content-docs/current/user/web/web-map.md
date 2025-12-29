---
source-hash: bdb9eac116a28f1d5dfc284cdfe30f108124a7c87fbf05c077f70e32504f6445
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

<!--
<InfoIncompleteArticle/>


:::info
The *[osmand.net/map](https://osmand.net/map/)* site is currently being developed and tested.  
**Therefore, the layout and operation of some functions on the site may be different from those described in this article.**

We created the [Discussion theme](https://github.com/osmandapp/OsmAnd/discussions/16567) on our GitHub so you can leave feedback there.
:::
-->


## Aperçu {#overview}

La carte web d'OsmAnd est une carte mondiale basée sur les données d'[OpenStreetMap (OSM)](https://www.openstreetmap.org/). Elle permet aux utilisateurs de visualiser leurs propres données, telles que les traces et les favoris, de créer des itinéraires de navigation pour n'importe quel profil, et d'accéder à des fonctionnalités supplémentaires comme la météo, les traces GPX publiques, les POI et les images Wikimedia. Explorez et personnalisez votre expérience des données directement dans votre navigateur.

![OsmAnd Web tout](@site/static/img/web/web_map_all.png)


## Menu contextuel de la carte {#map-context-menu}

Pour l'ouvrir, faites un clic droit n'importe où sur la carte. Ce menu comprend les actions suivantes :

- **Où suis-je** – Trouvez rapidement votre position actuelle sur la carte. Cette fonction affiche les adresses les plus proches du point sélectionné sur la carte.
- **Ouvrir la météo** – Accédez au [menu Météo](#weather-on-the-web) pour voir les détails météorologiques.
- **Créer un nouvel itinéraire** – Ouvre l'outil [*Planifier un itinéraire*](../web/planner.md#navigation-route) avec l'emplacement sélectionné comme point de départ ou de destination.
- **Ajouter un favori** – Permet de créer et d'enregistrer un [favori](../web/web-favorites.md#add--edit-favorite) à n'importe quel point de la carte pour un accès facile.
- **Itinéraire depuis** – Définit le point sélectionné comme [lieu de départ](../web/planner.md#navigation-route) pour la navigation.
- **Itinéraire vers** – Définit le point sélectionné comme [destination pour la navigation](../web/planner.md#navigation-route).
- **Copier les coordonnées** – Copie les coordonnées du point sélectionné pour une utilisation externe.
- **Afficher les régions** – Affiche les régions associées à l'emplacement sélectionné.

<!--
- **Add pin** – Places a pin to mark a location on the map. ([Example](https://osmand.net/map/?pin=37.546483,-77.446446#15/37.5458/-77.4470))

![Map Context menu](@site/static/img/web/map_context_menu.png)

Add pin option will be added back once it becomes available again.
-->

![Menu contextuel de la carte](@site/static/img/web/map_context_menu_new.png)


## Menu Configurer la carte {#configure-map-menu}

Le menu Configurer la carte vous permet de gérer les paramètres d'affichage des données cartographiques, telles que les couches de POI, les favoris, les traces et le terrain. Ce menu est disponible après vous être connecté à votre compte OsmAnd. Pour l'ouvrir, cliquez sur le bouton dans le **coin supérieur gauche** ou accédez-y via le **Menu**.

- [Superposition de POI...](#poi-overlay). Permet de choisir et d'afficher les catégories de POI nécessaires sur la carte.
- [Favoris](#favorites). Active ou désactive l'affichage des favoris sur la carte.
- [Traces](#tracks). Contient les traces GPX visibles sur la carte.  
- [Terrain](#terrain). Active ou désactive le schéma de couleurs du terrain sur la carte.

![Menu POI](@site/static/img/web/configure_map_web.png)


### Superposition de POI {#poi-overlay}

La fonctionnalité de superposition de POI vous permet d'afficher les points d'intérêt (POI) sur la carte par catégories sélectionnées. Cela est utile lorsque vous souhaitez parcourir des lieux directement sur la carte.

Pour ouvrir la superposition : *Menu Configurer la carte → Superposition de POI*... La liste de superposition contient 18 catégories. Vous pouvez activer une catégorie ou activer plusieurs catégories dans n'importe quelle combinaison. Lorsque au moins une catégorie est activée, la superposition fournit une action **Désélectionner tout** pour effacer la sélection d'un coup.

**Note :** Si vous recherchez un lieu spécifique, vous pouvez également utiliser la [**section Rechercher**](web-search.md) sur la carte.

Une fois les POI affichés, la sélection d'un marqueur POI sur la carte ouvre son panneau de détails qui montre les informations disponibles pour cet objet. Selon le POI, cela peut inclure : nom du lieu et type, adresse, champs de contact, identifiants liés à OSM et coordonnées, liens de référence (Wikipedia, Wikidata), lorsqu'ils sont présents. 

Pour les POI qui ont des photos en ligne, le panneau de détails affiche un bloc Photos en ligne avec des miniatures. Afficher tout ouvre une vue galerie avec la liste complète des photos. Dans le visualiseur de photos, OsmAnd Web affiche les métadonnées des photos lorsqu'elles sont disponibles, y compris : date, auteur, licence et description.

Dans le panneau de détails du POI, des actions rapides sont disponibles à partir des boutons d'action :
- *Ajouter aux favoris* — enregistre le POI dans vos favoris.
- *Partager* — génère un lien partageable qui ouvre directement le POI dans OsmAnd Web. Le lien inclut le nom du POI, le type et les coordonnées (épingle).
- *Itinéraire depuis* — définit le POI sélectionné comme point de départ et ouvre le panneau Itinéraire pour que vous puissiez choisir une destination et un profil.
- *Navigation* — définit le POI sélectionné comme point de destination pour la navigation.

![Menu POI](@site/static/img/web/poi_categories.png) ![Menu POI](@site/static/img/web/poi_photo_new.png)


### Favoris {#favorites}

En un clic, vous pouvez activer ou désactiver les favoris sur la carte. Cependant, seuls les favoris avec l'option [**Afficher sur la carte activée**](../web/web-favorites.md#manage-favorites) seront affichés.


### Traces {#tracks}

Cette section contient une liste de vos [**traces GPX visibles sur la carte**](../web/web-tracks.md#visible-on-the-map) et des traces **Récemment visibles**.

- Vous pouvez activer ou désactiver les traces directement.  
- Activez ou désactivez les traces depuis la liste **Récemment visibles**.  

Chaque trace a un **Menu contextuel** (accessible via le bouton ⋮) avec les commandes suivantes :

- **Masquer la trace** : Masque la trace actuellement visible de la carte.  
- **Rendre la trace visible** : Affiche une trace de la liste Récemment visibles sur la carte.  
- **Renommer** : Vous permet de renommer la trace pour une identification plus facile.  
- **Dupliquer** : Crée une copie de la trace.  
- **Télécharger** : Enregistre la trace sur votre appareil local.  
- **Supprimer** : Supprime définitivement la trace de la liste.

![Menu Configurer la carte Traces](@site/static/img/web/configure_map_track.png)


### Terrain {#terrain}

La section **Terrain** est une fonctionnalité payante <ProFeature/>. Pour utiliser cette fonctionnalité, vous devez d'abord vous connecter à votre compte OsmAnd Pro.

Dans cette section, vous pouvez :

- Choisir un **schéma de couleurs** pour le terrain :
  - **Relief ombré**
  - **Pente**
  - **Hauteur**
- Ajuster la visibilité de la couche de terrain sélectionnée de **0 % à 100 %**.

![Menu Configurer la carte Terrain](@site/static/img/web/configure_map_terrain.png)


## Paramètres {#settings}

Dans le Planificateur Web, les *Paramètres généraux* (Langue d'affichage, Unités de longueur, Unité de vitesse) sont disponibles pour tous les utilisateurs, que vous soyez connecté ou non. Une fois connecté avec votre compte OsmAnd, une section supplémentaire OsmAnd Cloud apparaît dans le panneau Paramètres. Vous pouvez en lire plus sur OsmAnd Cloud [ici](./web-cloud.md).

### Langue {#language}

Pour changer la langue de l'interface :

*Allez à : Menu → ⚙ Paramètres → Langue d'affichage*

![Langue Web](@site/static/img/web/web_language.png)

### Unités {#units}

*Allez à : Menu → ⚙ Paramètres → Unités de longueur*  
*Allez à : Menu → ⚙ Paramètres → Unité de vitesse*

Vous pouvez choisir quelles unités sont utilisées pour afficher la distance, l'altitude et la vitesse sur la carte, dans les détails de l'itinéraire et dans les outils de mesure. Cela vous aide à garder OsmAnd cohérent avec vos habitudes habituelles ou les normes régionales.

L'option **Unités de longueur** définit comment la distance horizontale et l'altitude sont affichées :
- Kilomètres/mètres.
- Miles/pieds.
- Miles/mètres.
- Miles/yards.
- Milles nautiques/mètres.
- Milles nautiques/pieds. 

Par exemple, une distance de 10 km sera affichée comme environ 6,21 mi si vous choisissez l'une des options Miles/..., ou comme environ 5,40 nmi lorsque Milles nautiques/... est sélectionné.

L'option **Unité de vitesse** contrôle comment la vitesse actuelle et les limitations de vitesse sont affichées :
- Kilomètres par heure.
- Miles par heure.
- Mètres par seconde.
- Minutes par mile.
- Minutes par kilomètre.
- Milles nautiques par heure (nœuds). 

Par exemple, une vitesse de 90 km/h correspond à 25 m/s ou environ 55,92 mph.

![Unités Web](@site/static/img/web/web_units_len.png) ![Unités Web](@site/static/img/web/web_units_spe.png)


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

Pour une utilisation facile du service web (et de l'application) OsmAnd, vous pouvez profiter des liens directs. Ce sont des URL spéciales qui vous permettent de transférer des données de localisation et d'inclure des détails sur les épingles, les traces, la météo, et plus encore.

Ces URL peuvent être copiées et partagées via n'importe quel support pris en charge par votre appareil et sont compatibles avec les versions Android et iOS d'OsmAnd.

1. **URL avec une épingle sur la carte :**

  https://osmand.net/map/?pin=52.491143,7.116394#9/52.3924/6.3116

  ![Créer une trace Web OsmAnd](@site/static/img/plan-route/web_url_pin.png)

2. **URL sans épingle sur la carte :**

  https://osmand.net/map/#9/52.3924/6.3116

  ![Créer une trace Web OsmAnd](@site/static/img/plan-route/web_url_without.png)

3. **URL avec navigation :** `osmand.net/map/navigate`

  https://osmand.net/map/navigate/?start=52.236210,5.119629&finish=52.412472,4.855957&type=osmand&profile=car&pin=52.491143,7.116394#9/52.3873/5.2570

  ![Créer une trace Web OsmAnd](@site/static/img/plan-route/web_url_track.png)

Selon les paramètres spécifiés, les chaînes d'URL peuvent contenir :

- **latitude** : valeur de la latitude sous forme de nombre.  
- **longitude** : valeur de la longitude sous forme de nombre.  
- **start-finish** : coordonnées pour la navigation.  
- **profile** : profil de navigation (par ex., voiture, vélo).  
- **zoom** : niveau de zoom.

4. **Météo**&nbsp; – &nbsp;`osmand.net/map/weather`

***Par exemple***, vous pouvez accéder directement à la page météo avec des coordonnées spécifiées :  
    [`https://osmand.net/map/weather/#9/52.2394/21.0362`](https://osmand.net/map/weather/#9/52.2394/21.0362)

5. **Compte**&nbsp; – &nbsp;`osmand.net/map/account`

6. **Configurer la carte**&nbsp; – &nbsp;`osmand.net/map/configure/`

7. **Traces**&nbsp; – &nbsp;`osmand.net/map/mydata/tracks`

8. **Favoris**&nbsp; – &nbsp;`osmand.net/map/mydata/favorites`

9. **Paramètres**&nbsp; – &nbsp;`osmand.net/map/settings`

10. **Planifier un itinéraire**&nbsp; - &nbsp;`osmand.net/map/plan`

11. Lien direct vers la page [**Explorer**](https://osmand.net/docs/user/web/web-search#explore) actuelle&nbsp; - &nbsp;`osmand.net/map/search`


## Articles associés {#related-articles}

- [Menu contextuel de la carte](../map/map-context-menu.md)
- [Compte OsmAnd](./web-cloud.md)
- [Traces](./web-tracks.md)
- [Favoris](./web-favorites.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)