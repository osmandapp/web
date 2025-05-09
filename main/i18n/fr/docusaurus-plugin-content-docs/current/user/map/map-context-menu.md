---
source-hash: 1c5eaaa1b1ace2e24bb8b85799b0fcc37dd4575d3f7514a4913fb799b68ef7c8 
sidebar_position: 3
title: Menu contextuel de la carte
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


## Aperçu

Le menu contextuel de la carte fournit des informations sur l'objet sélectionné sur la carte. Vous pouvez également l'utiliser pour créer un itinéraire vers l'emplacement sélectionné. Pour ouvrir le menu contextuel, trouvez d'abord l'emplacement requis sur la carte, puis sélectionnez l'objet avec un appui court ou un appui long lorsque vous sélectionnez un point précis sur la carte.


### Sélectionner un objet (appui simple)

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menu contextuel Android](@site/static/img/map/map_context_menu_short_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu contextuel iOS](@site/static/img/map/map_context_menu_short_tap_ios.png)

</TabItem>

</Tabs>

Le **menu contextuel** apparaît lorsque vous **appuyez une fois** sur un objet marqué sur la carte. Ce menu contextuel affiche des informations essentielles sur l'objet sélectionné, notamment son *nom, son icône* (telle que représentée sur la carte), son *adresse, sa distance* et sa *direction* par rapport à votre position actuelle.

Vous pouvez sélectionner différents types d'objets cartographiques, tels que des *POI*, des *favoris*, des *arrêts de transport*, des *marqueurs*, des *sommets de montagne* ou d'autres *objets cartographiques*.

:::note
Les objets cartographiques sélectionnés correspondent aux [**nœuds**](https://wiki.openstreetmap.org/wiki/Node) ou aux [**voies**](https://wiki.openstreetmap.org/wiki/Way) d'OpenStreetMap.
:::

> *L'altitude des sommets de montagne est affichée en mètres ou en pieds selon les [unités de longueur](../personal/profiles.md#units--formats) sélectionnées dans les paramètres du profil.*


### Sélectionner n'importe quel point (appui long)

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menu contextuel appui long Android](@site/static/img/map/map_context_menu_long_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu contextuel appui long iOS](@site/static/img/map/map_context_menu_long_tap_ios.png)

</TabItem>

</Tabs>

Lorsque vous **appuyez longuement** n'importe où sur la carte, un **menu contextuel** apparaît, fournissant des informations sur l'emplacement sélectionné. Cela inclut l'adresse, la distance et la direction par rapport à votre position actuelle.

> **NOTE**. *Un appui long sur un **numéro de bâtiment** met en évidence son contour et ouvre le menu contextuel de la carte.*


### Sélectionner un itinéraire

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menu contextuel de la trace Android](@site/static/img/map/context_track_menu_Android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Écran des statistiques de la trace iOS](@site/static/img/personal/tracks/statistics_track_ios.png)

</TabItem>

</Tabs>

Appuyer sur une [trace GPX](../map/tracks/index.md) sur la carte ouvre le [menu contextuel de la trace](../map/tracks/track-context-menu.md), où vous pouvez accéder à des options supplémentaires liées à la trace.


### Masquer le menu contextuel

Pour fermer le **menu contextuel** :

- Appuyez sur une *zone vide* de la carte pour éviter de rouvrir le menu.
- Faites glisser le menu *vers le bas* depuis le haut.


## Détails

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menu contextuel Android](@site/static/img/map/context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu contextuel iOS](@site/static/img/map/context_menu_ios.png)

</TabItem>

</Tabs>

Pour obtenir des informations plus détaillées sur un objet, appuyez sur le bouton **Détails** dans le menu contextuel ou faites glisser le panneau vers le haut pour le développer.


### Informations sur l'objet

Le panneau **Informations sur l'objet** fournit des détails supplémentaires sur l'objet sélectionné. Vous pouvez appuyer sur n'importe quelle entrée pour copier les informations dans le presse-papiers.

Les détails disponibles incluent :

- [Noms alternatifs](#alternative-names)
- [Coordonnées](../map/map-context-menu.md#coordinates)
- [Articles Wikipédia à proximité](../map/map-context-menu.md#nearby-pois-wikipedia)
- [POI à proximité](../map/map-context-menu.md#nearby-pois-wikipedia)
- [Itinéraires de transport en commun](../map/map-context-menu.md#public-transport-routes) (pour les arrêts de transport)
- [Favoris / Points de trace du même groupe](../map/map-context-menu.md#favorites--track-points-from-the-group)
- [Lien OpenStreetMap](../map/map-context-menu.md#openstreetmap-link)
- [Image / description de l'article](../map/map-context-menu.md#article-image--description)
- [Photos en ligne](../map/map-context-menu.md#online-photos)

De plus, le panneau peut inclure des [Détails OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_features), tels que :

- [Site web](https://wiki.openstreetmap.org/wiki/Key:website)
- [Numéro de téléphone](https://wiki.openstreetmap.org/wiki/Key:contact)
- [Heures d'ouverture](https://wiki.openstreetmap.org/wiki/Key:opening_hours)
- [Frais](https://wiki.openstreetmap.org/wiki/Key:fee)
- [Accessibilité](https://wiki.openstreetmap.org/wiki/Key:wheelchair)
- [Largeur](https://wiki.openstreetmap.org/wiki/Key:width) / [Hauteur](https://wiki.openstreetmap.org/wiki/Key:height)


### Noms alternatifs

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Noms alternatifs Android 1](@site/static/img/map/alternative_names_andr_1.png) ![Noms alternatifs Android](@site/static/img/map/alternative_names_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Noms alternatifs Android 1](@site/static/img/map/alternative_names_1_ios.png) ![Noms alternatifs Android](@site/static/img/map/alternative_names_2_ios.png)

</TabItem>

</Tabs>

OsmAnd affiche les **noms de POI supplémentaires** dans le *menu contextuel de la carte*, en donnant la priorité au nom dans la [langue d'affichage](../personal/global-settings.md#display-language) ou dans la liste des langues préférées du système. Si plusieurs traductions sont disponibles, elles sont regroupées en balises catégorisées telles que *nom, marque, opérateur* ou *POI à proximité*.

Fonctionnalités d'affichage des noms alternatifs :

- Des traductions supplémentaires sont accessibles via une *liste déroulante*.

- Les noms sont classés en différents groupes tels que la *liste des noms dans d'autres langues*, *Régional*, *Local*, *National*, *International*, *Court*, *Ancien*, *Officiel* et *Alternatif*.

- D'autres catégories incluent la *traduction spécifique à la région* ou les *paramètres par défaut*.

- Si une traduction spécifique n'est *pas disponible*, OsmAnd utilise par défaut le nom **local** pour garantir l'exactitude et la cohérence dans les régions multilingues.


### Informations sur le polygone

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Informations sur le polygone Android](@site/static/img/map/polygon_information_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Informations sur le polygone Android](@site/static/img/map/polygon_information_ios.png)

</TabItem>

</Tabs>

La fonctionnalité **Informations sur le polygone** fournit des données détaillées sur les **polygones** à proximité affichés sur la carte. Cela inclut les caractéristiques géographiques, les limites administratives et d'autres zones cartographiées.

**Dans la section :**

- Affiche une *liste des polygones environnants*, triés *du plus petit au plus grand* en fonction de la taille de la zone.

- Chaque entrée affiche le *type et le nom du polygone*, permettant une identification facile des régions et des limites.

**Détails supplémentaires :**

- Lorsque vous sélectionnez un point sur la carte ou un POI, le panneau **Informations sur le polygone** affiche une liste de tous les polygones qui contiennent l'emplacement sélectionné.

- Les entrées de la liste incluent les **divisions administratives, les zones d'utilisation des terres, les caractéristiques naturelles et d'autres régions catégorisées**.

- Le panneau permet aux utilisateurs de **copier le nom et les détails du polygone** pour référence.

- Pour afficher ces informations, accédez à *Menu contextuel de la carte → Détails → Dans*.

Cette fonctionnalité vous aide à comprendre votre *emplacement actuel* par rapport aux divisions administratives cartographiées, aux zones naturelles ou à d'autres caractéristiques géographiques importantes.


### Coordonnées

|Format des coordonnées| |
|:------|:------|
| <ul><li>DDD.DDDDD (Degrés décimaux simples)</li><li>DDD.DDDDD (N/S, E/W virgule)</li><li>DDD MM.MMM</li><li> DDD MM SS.S</li><li>[UTM Standard](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system)</li><li>[Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code)</li><li>[MGRS](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)</li><li>[Swiss Grid CH1903 et CH1903+](https://en.wikipedia.org/wiki/Swiss_coordinate_system)</li><li>[Lien web OsmAnd](https://osmand.net/map)</li><li>[Lien web OpenStreetMap](../map/map-context-menu.md#openstreetmap-link)</li></ul> | ![Coordonnées](@site/static/img/map/map_context_menu_Coordinates.png) |

Dans le menu contextuel, vous pouvez trouver les [coordonnées géographiques](../search/search-coordinates.md#coordinate-format) d'un point dans différents formats et également des liens OsmAnd et [OpenStreetMap partageables](../map/map-context-menu.md#openstreetmap-link) (la dernière option n'est disponible que si le [plugin d'édition OpenStreetMap](../plugins/osm-editing.md) est activé). Si vous développez la section des coordonnées et appuyez longuement sur une ligne de la liste, ses valeurs seront automatiquement copiées dans le presse-papiers (**Android**) ou l'option *Copier* deviendra disponible dans le message contextuel (**iOS**).

Le lien web OsmAnd peut être automatiquement reconnu par OsmAnd (exemple : `https://osmand.net/map?pin=52.51628,13.37771#15/52.51628/13.37771`). Les liens OsmAnd et [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Browsing#Adding_a_Marker) sont ouverts sur les sites correspondants avec une épingle marquant le lieu d'intérêt.


### POI / Wikipédia à proximité

![Articles Wikipédia à proximité](@site/static/img/map/map_context_menu_nearby_wikipedia.png) ![Articles Wikipédia à proximité](@site/static/img/map/map_context_menu_nearby_wikipedia_1.png)

Ces sections affichent les [articles Wikipédia](../plugins/wikipedia.md) ou les [points d'intérêt](../map/point-layers-on-map.md#points-of-interest-pois-on-the-map) à proximité avec *<Translate android="true" ids="shared_string_show_on_map"/>* et *<Translate android="true" ids="search_more"/>* pour afficher et [rechercher](../search/search-poi.md) tous les autres POI et articles Wikipédia.

Appuyer sur *POI / articles Wikipédia à proximité* ouvre une liste de points (POI ou Wikipédia). Un appui sur l'un de ces points dans une liste de points déplace la carte vers ce point (POI ou Wikipédia) avec l'ouverture du menu contextuel de la carte du point.

> **NOTE**. *[<Translate android="true" ids="wiki_around"/>](../plugins/wikipedia.md) n'apparaîtra que si vous avez précédemment téléchargé des cartes spéciales avec des [articles Wikipédia pour cette zone](../plugins/wikipedia.md#download-wikipedia)*.


### Itinéraires de transport en commun

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Itinéraires de transport en commun Android](@site/static/img/map/pt_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Itinéraires de transport en commun iOS](@site/static/img/map/pt_routes_ios.png)

</TabItem>

</Tabs>

Informations affichées sur les itinéraires de transport en commun pour l'arrêt de transport choisi. Informations sur le menu contextuel des transports en commun et les actions associées, lisez [ici](../map/public-transport.md#transport-routes-context-menu).


### Favoris / Points de trace du groupe

![Liste des favoris](@site/static/img/map/favorite_list_android.png) ![Liste complète des favoris](@site/static/img/map/favorite_list_full_android.png)

Il s'agit d'une liste de tous les points d'un groupe pour un [Favori](../map/point-layers-on-map.md#favorites-on-the-map) ou un point de passage. En appuyant, la liste entière des points d'un groupe se développe, en appuyant sur un point de la liste, la carte se déplace vers le point sélectionné.


### Objet linéaire

![Liste des favoris](@site/static/img/map/linear_object_andr.png)

Pour les **objets linéaires**, tels que les *barrières, les marches, les portails, les bancs, les cales, les déversoirs, les bornes ou les coupures*, le menu contextuel affiche des détails supplémentaires. Ceux-ci incluent le type de POI et l'adresse qui leur sont associés, ou le type d'objet si aucun nom n'est attribué.


### Détails de la zone d'escalade et de la falaise

![Liste des favoris](@site/static/img/map/climbing_andr.png)

Lors de la sélection d'une [zone d'escalade ou d'une falaise](../map/routes.md#climbing-routes), OsmAnd fournit un résumé détaillé du site d'escalade, comprenant : le nom et l'emplacement, la cotation de difficulté d'escalade (UIAA, française, YDS, etc.), le type de roche, la hauteur et la longueur de la voie, la qualité de l'escalade et les conditions de surface.


### Pistes de ski, itinéraires VTT et pistes de moto tout-terrain

![Pistes de ski et itinéraires VTT](@site/static/img/map/ski_mtb.png) ![Pistes de ski et itinéraires VTT](@site/static/img/map/ski_mtb_2.png)

Vous pouvez appuyer sur des éléments de carte tels que les **pistes de ski**, les **itinéraires de VTT** et les **pistes de moto tout-terrain** pour ouvrir leur menu contextuel avec des informations détaillées. Les informations disponibles incluent : le nom de l'itinéraire ou de la piste (si disponible dans les données OSM), l'ID de l'objet OSM ou l'ID de la relation, le niveau de difficulté, la longueur du sentier, le type de terrain, et plus encore.

**Balises prises en charge :** `piste:type=*` (pistes de ski), `route=mtb`, `route=atv` ou `route=dirt_bike` (pistes de moto tout-terrain)

:::note
Utilisez les styles de carte [Hiver et ski](../map/vector-maps.md#winter-and-ski) ou [Tout-terrain](../map/vector-maps.md#offroad) pour une meilleure visibilité.
:::


### Description de l'article

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Liste des descriptions](@site/static/img/map/description_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Liste des descriptions](@site/static/img/map/description_list_ios.png)

</TabItem>

</Tabs>

Cette partie contient une partie de la description de l'[article Wikipédia](../plugins/wikipedia.md), du [Favori](../personal/favorites.md) ou de la description du point de passage. En appuyant, vous pouvez ouvrir la description complète.


### Lien OpenStreetMap

![Lien OSM](@site/static/img/map/context_menu_osm_link.png) ![Lien OSM](@site/static/img/map/context_menu_osm_link_1.png)

Le lien OpenStreetMap fournit un lien direct vers l'objet OpenStreetMap où vous pouvez trouver des informations complètes à son sujet :
[nœud](https://wiki.openstreetmap.org/wiki/Node) ou [voie](https://wiki.openstreetmap.org/wiki/Way).


### Photos en ligne

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menu contextuel Photos en ligne Android](@site/static/img/map/images_nearby_1_andr.png) ![Imagerie au niveau de la rue Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu contextuel Photos en ligne iOS](@site/static/img/map/online_photo_ios.png) ![Imagerie au niveau de la rue iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

#### Photos en ligne

Comment accéder :

- Appuyez sur le bouton **Tout afficher** pour ouvrir la galerie en mode plein écran. Là, vous pouvez faire défiler toutes les images liées à l'emplacement sélectionné.

- Appuyez sur une photo pour accéder à des actions telles que *Partager*, *Détails*, *Ouvrir dans le navigateur* et *Télécharger*.

- Vous pouvez également [parcourir](../map/point-layers-on-map.md#-street-level-imagery) les images au niveau de la rue sur la carte.

Dans la section **Photos en ligne** du menu contextuel de la carte, vous pouvez accéder aux photos d'objets de [Wikimedia](https://www.wikimedia.org/), qui propose des fichiers multimédias étiquetés avec `image` ou `wikimedia` d'OpenStreetMap.

<!--
Images à proximité

Détails :

- Mapillary propose des images au niveau de la rue à proximité, tandis que Wikimedia fournit des médias étiquetés avec `image` ou `wikimedia` d'OpenStreetMap.

- Vous pouvez contribuer vos photos en utilisant le bouton *Ajouter des photos*.

La section *Images à proximité* (*iOS*) donne accès aux photos de points d'intérêt provenant de sources telles que [Wikimedia](https://www.wikimedia.org/) et [Mapillary](../plugins/mapillary.md).
-->

#### Imagerie au niveau de la rue

Détails :

- Avec le bouton *Ajouter des photos*, vous pouvez partager vos propres images au niveau de la rue via Mapillary.

- Utilisez le bouton *Explorer* pour ouvrir la vue Mapillary avec les photos.

L'*imagerie au niveau de la rue* intègre la vaste collection de vues de rue réelles de Mapillary. Vous pouvez accéder aux images de rues et de chemins à proximité, capturées séquentiellement. De plus, Mapillary fournit des images au niveau de la rue directement sur la vue de la carte. Vous pouvez en savoir plus dans l'article [Plugin Mapillary](../plugins/mapillary.md).


### * Note audio/vidéo

<InfoAndroidOnly />

![Liste des images](@site/static/img/map/image_list_android.png) ![Liste des vidéos](@site/static/img/map/video_list_android.png)

Les informations sur les [notes audio/vidéo](../plugins/audio-video-notes.md) telles que la date, les coordonnées, l'aperçu et autres sont disponibles dans le menu **Détails**. Vous pouvez ouvrir les notes dans un logiciel secondaire en appuyant sur le bouton **Lire / Afficher** dans le menu contextuel de la note.


## Actions

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menu Actions Android](@site/static/img/map/actions_menu_android.png) ![Menu Actions supplémentaires Android](@site/static/img/map/actions_additional_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Actions iOS](@site/static/img/map/actions_menu_ios.png) ![Menu Actions supplémentaires iOS](@site/static/img/map/actions_additional_menu_ios.png)

</TabItem>

</Tabs>

Il s'agit d'un ensemble de manipulations spécifiques pouvant être effectuées sur un point ou un objet. Ce menu est divisé en deux parties : la section visible se compose d'un maximum de 3 actions et les autres actions sont accessibles via le bouton *Actions*. Vous pouvez personnaliser (*Android*) l'ordre des actions dans les [Paramètres généraux](#customize).


### Ajouter / Modifier un favori

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Action Ajouter Modifier un favori Android](@site/static/img/map/add_favorite_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Action Ajouter Modifier un favori iOS](@site/static/img/map/add_favorite_ios.png)

</TabItem>

</Tabs>

Dans le menu contextuel, il existe des options pour **ajouter** ou **modifier** le point / objet sélectionné dans la [liste des favoris](../personal/myplaces.md).

- Pour **Ajouter**, vous devez sélectionner un point / objet, appuyer sur l'icône *Étoile* (avec la signature Ajouter) et saisir toutes les informations nécessaires.

- Pour **Modifier** les informations sur un point favori, vous devez activer *Afficher sur la carte* (*Menu → Mes lieux → Favoris*), puis appuyer dessus et dans le menu contextuel, au lieu de l'icône *Étoile*, une *icône Crayon* (avec la signature Modifier) apparaîtra.

- [<Translate android="true" ids="add_edit_favorite"/>](../personal/myplaces.md) - ajoute un point sélectionné à la liste des favoris.


### Ajouter / Modifier un marqueur

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Action Ajouter Modifier un marqueur Android](@site/static/img/map/add_marker_android.png) ![Action Marqueur passé Android](@site/static/img/map/action_pass_marker_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Action Ajouter Modifier un marqueur iOS](@site/static/img/map/add_marker_ios.png) ![Action Restaurer un marqueur Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

Il est possible de marquer un point ou un objet pour faciliter la planification de la navigation. Il suffit d'appuyer sur l'icône **drapeau** dans le menu (*Android*), **flèche** (*iOS*) - affiche la direction et la distance jusqu'au point sélectionné depuis votre position actuelle.

Actions :

- [<Translate android="true" ids="shared_string_marker"/> / <Translate android="true" ids="edit_map_marker"/>](../personal/markers.md). Place un nouveau marqueur sur le point sélectionné.
- **Marquer comme passé** (*Android*) / *Ignorer* (*iOS*). Désactive le marqueur et le place dans l'historique.
- **Rendre actif** (*Android*). Déplace le marqueur en position supérieure (sur le panneau supérieur).
- **Restaurer le marqueur** (*Android*). Déplace le marqueur de l'historique vers la liste active.

En savoir plus sur les [marqueurs ici](../personal/markers.md).


### Partager

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

| Versions jusqu'à Android 14 | 14+ Android |
|:------------|:---------------|
| ![Action Partager Android](@site/static/img/map/action_share_1_andr.png) | ![Action Partager Android](@site/static/img/map/action_share_2_andr.png) |

</TabItem>

<TabItem value="ios" label="iOS">

![Action Partager iOS](@site/static/img/map/action_share_1_ios.png)

</TabItem>

</Tabs>

L'application OsmAnd vous permet de **<Translate android="true" ids="shared_string_share"/>** *Ma position* ou tout autre emplacement sélectionné sur la carte avec des messageries, des e-mails ou des réseaux sociaux.

Options disponibles pour partager l'emplacement :

- ***Envoyer***. Envoie du texte via les applications disponibles sur votre appareil. Inclut toutes les informations sur l'emplacement : nom de Ma position ou nom du POI sélectionné, adresse, coordonnées et géolocalisation sous forme de lien.
- ***Copier***. Copie toutes les informations de localisation (nom de Ma position ou nom du POI sélectionné, adresse, coordonnées et géolocalisation sous forme de lien) dans le presse-papiers.
- ***Copier l'adresse***. Copie uniquement les informations d'adresse dans le presse-papiers.
- ***Copier le nom du POI***. Copie uniquement le nom du POI ou l'adresse s'il n'y a pas de nom dans le presse-papiers.
- ***Copier les coordonnées***. Copie uniquement les informations de coordonnées dans le presse-papiers.
- ***geo***. Ouvre une liste des applications disponibles qui prennent en charge les géolocalisations. <!-- (info about [geo urls Android](https://developers.google.com/maps/documentation/urls/android-intents)). -->
- ***Code QR*** (*Android*). Génère un lien vers l'emplacement sélectionné dans un code QR.

<!--
- ***Enregistrer l'image*** (*iOS*) - enregistre une capture d'écran avec la carte et le point sélectionné dans la galerie d'images.
- ***Attribuer à un contact*** (*iOS*) - crée une icône pour le contact choisi à partir de la capture d'écran de la carte.
- ***Imprimer*** (*iOS*) - ouvre les options d'impression pour imprimer la capture d'écran de la carte.
- ***Enregistrer dans les fichiers*** (*iOS*) - enregistre la capture d'écran de la carte dans iCloud Drive ou le stockage de votre appareil. -->


### Itinéraires vers / depuis

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Itinéraires Android](@site/static/img/map/action_directions_android.png)

![Itinéraires multiples Android](@site/static/img/map/action_multiple_directions_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Itinéraires iOS](@site/static/img/map/action_directions_ios.png)

</TabItem>

</Tabs>

Pour démarrer la navigation ou la planification d'itinéraire, vous devez d'abord sélectionner la destination avec [<Translate android="true" ids="get_directions"/>](../widgets/map-buttons.md#directions). Si vous avez déjà un point de destination, le menu vous proposera de remplacer le point de destination ou de l'insérer comme autre point intermédiaire ou de départ.

Il est également possible de sélectionner *Depuis* la destination d'abord via le menu contextuel de la carte (<Translate android="true" ids="context_menu_item_directions_from"/>).

En savoir plus sur la [navigation ici](../navigation/setup/route-navigation.md).

:::note Appuyer sur Démarrer la navigation
Si vous appuyez sur **Démarrer la navigation** - le point *Depuis* sera ignoré car l'application passe en mode Navigation. Pour conserver un itinéraire, n'appuyez pas sur *Démarrer la navigation* et [**faites glisser vers le bas**](#hide-context-menu) le menu *Préparation de l'itinéraire*.
:::


### Rechercher à proximité

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Action Rechercher Android](@site/static/img/map/action_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Action Rechercher iOS](@site/static/img/map/action_search_ios.png)

</TabItem>

</Tabs>

Avec cette action du menu contextuel, il est possible de rechercher autour d'un emplacement spécifique sur la carte.

En savoir plus sur la fonctionnalité de [recherche](../search/index.md).


### Éviter la route

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Éviter la route sur la carte Android](@site/static/img/map/action_avoid_android.png) ![Ignorer la route évitée Android](@site/static/img/map/action_avoid_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Éviter la route sur la carte iOS](@site/static/img/map/avoid_route_ios_1.png) ![Ignorer la route évitée iOS](@site/static/img/map/dismiss_avoid_ios_1.png)

</TabItem>

</Tabs>

En utilisant le menu contextuel de la carte, vous pouvez ajouter une route spécifique à la liste des routes non utilisées pour le routage. Cela affectera la [préparation de l'itinéraire](../navigation/setup/route-navigation.md).
Pour supprimer les routes précédemment sélectionnées de la *[liste des routes à éviter](../navigation/routing/osmand-routing.md#avoid-roads-menu)*, appuyez sur un signe, choisissez *Supprimer* (**Android**) ou *Ignorer* (**iOS**).

:::note
La fonction Éviter les routes est globale et affecte tous les *[types de routage](../navigation/routing/osmand-routing.md#routing-types)* (sauf le *[routage en ligne](../navigation/routing/online-routing.md)*).
:::


### Modifier la position de l'objet

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Action Modifier la position Android](@site/static/img/map/action_change_position_android.png)

![Interface utilisateur de l'action Modifier la position Android](@site/static/img/map/action_change_position_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Action Modifier la position iOS](@site/static/img/map/action_change_position_ios.png)

![Interface utilisateur de l'action Modifier la position iOS](@site/static/img/map/action_change_position_ui_iOS.png)

</TabItem>

</Tabs>

Presque tous les objets créés par l'utilisateur sont déplaçables, c'est-à-dire Marqueur, Favori, POI créé, Note audio/vidéo ou Point de passage de trace. Sélectionnez d'abord un objet sur la carte, puis utilisez *<Translate android="true" ids="change_markers_position"/>* le menu pour le déplacer vers un nouvel emplacement.


### Planifier un itinéraire

![Action Planifier un itinéraire Android](@site/static/img/map/action_plan_route_android.png)

Vous pouvez démarrer la planification d'un itinéraire à partir d'un point sélectionné via le menu contextuel de l'objet.

En savoir plus sur l'outil [Planifier un itinéraire](../plan-route/create-route.md).


### Mettre à jour / Télécharger des cartes en ligne

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Action Télécharger la carte en ligne Android](@site/static/img/map/action_load_online_map_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Action Télécharger la carte en ligne iOS](@site/static/img/map/action_download_online_map_ios.png)

</TabItem>

</Tabs>

Pour mettre à jour ou télécharger des cartes en ligne (tuiles) à un emplacement spécifique, vous pouvez utiliser le menu contextuel de l'objet :

- **Android** : *<Translate android="true" ids="shared_string_download_map"/>* et pour *Mettre à jour*, allez dans : *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*.
- **iOS** : *<Translate ios="true" ids="shared_string_download_map"/>* et *<Translate ios="true" ids="update_tile"/>*.

Veuillez lire les [instructions complètes](../map/raster-maps.md#download--update-tiles).


### Mettre à jour / Télécharger des cartes vectorielles

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Action Télécharger la carte vectorielle Android](@site/static/img/map/action_download_vector_map_android.png)

![Sélectionner la carte vectorielle mondiale sur Android](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Action Télécharger la carte vectorielle iOS](@site/static/img/map/action_download_vector_map_ios.png)

![Sélectionner la carte vectorielle sur iOS](@site/static/img/map/download_map_ios.png)

</TabItem>

</Tabs>

Si aucune carte hors ligne n'est présente à l'emplacement sélectionné, par exemple si le menu de l'objet cartographique a été ouvert via la recherche ou via un favori spécifique, la plus petite carte hors ligne possible sera suggérée au [téléchargement](../start-with/download-maps.md#download---map-context-menu).

**iOS**. Si vous avez déjà [téléchargé](../map/map-context-menu.md) des cartes OsmAnd (vectorielles ou de terrain), il est possible de les mettre à jour via le menu contextuel. Vous devrez d'abord sélectionner la région sur la carte - appuyez sur n'importe quel emplacement sur le zoom mondial 3-7.

> **NOTE**. *Si vous avez ouvert le menu contextuel pour une région de carte (la région est mise en évidence), vous pourrez voir ***<Translate android="true" ids="rendering_category_details"/>*** à son sujet : type et taille d'une carte disponible, lien vers une page Wikipédia, langue, population et autres.*


### * Ajouter / Supprimer un point de stationnement

:::note
Pour ajouter/supprimer des points de stationnement, activez le [**plugin Position de stationnement**](../plugins/parking.md) d'OsmAnd.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Action Stationnement Android](@site/static/img/map/action_parking_android.png)

![Action Supprimer le stationnement Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Action Stationnement iOS](@site/static/img/map/action_parking_ios.png)

![Action Supprimer le stationnement iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Tout emplacement sélectionné sur la carte peut être marqué comme [position de stationnement](../plugins/parking.md). Pour supprimer une position de stationnement, vous pouvez ouvrir le menu contextuel associé à l'emplacement de stationnement.


### * Ajouter / Modifier un point de passage de trace

:::note
Pour ajouter/modifier des points de trace, activez le [**plugin Enregistrement de trajet**](../plugins/trip-recording.md) d'OsmAnd.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Action Point de passage Android](@site/static/img/map/action_waypoint_android.png)

![Sélectionner la trace pour ajouter un point de passage Android](@site/static/img/map/action_select_track_to_add_waypoint_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Action Point de passage iOS](@site/static/img/map/action_waypoint_ios.png)

![Sélectionner la trace pour ajouter un point de passage iOS](@site/static/img/map/action_select_track_to_add_waypoint_ios.png)

</TabItem>

</Tabs>

Vous pouvez ajouter des points de passage à une trace enregistrée ou à l'enregistrement de trace actuel à l'aide du menu contextuel de la carte.

- Sélectionnez un emplacement sur la carte avec un [appui long](../map/map-context-menu.md#select-any-point-long-tap).
- Dans le *menu contextuel de la carte* qui s'ouvre, choisissez *Actions → Ajouter un point de passage de trace*.
- La liste affiche les [traces](../map/tracks/index.md#display-tracks-on-the-map) enregistrées et affichées sur la carte, ainsi que l'[enregistrement de trace actuel](../plugins/trip-recording.md#from-widget), auquel vous pouvez ajouter le point de passage sélectionné.
- Vous pouvez ajouter des points de passage à une trace qui n'est pas encore active pour l'enregistrement, auquel cas la trace inactive passe de l'*état de départ* à l'*état de reprise*.
- [Remplissez](../map/tracks/track-context-menu.md#add-waypoint-to-a-track) les données requises et enregistrez le point de passage.
- Vous pouvez configurer les [Actions rapides](../widgets/quick-action.md) en ajoutant un point de passage à l'*Ajouter un point de passage de trace*.


### * Créer / Modifier un POI

:::note
Pour ajouter/modifier des POI, activez le [**plugin d'édition OSM**](../plugins/osm-editing.md) d'OsmAnd.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Action POI Android](@site/static/img/map/action_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Action POI iOS](@site/static/img/map/action_poi_ios.png)

</TabItem>

</Tabs>

Avec le plugin d'édition OSM, vous pouvez créer et modifier la plupart des POI présents sur [OpenStreetMap](https://www.openstreetmap.org/).

- &nbsp;<Translate android="true" ids="context_menu_item_create_poi"/> - [crée un nouveau POI](../plugins/osm-editing.md#how-to-add-poi) à l'emplacement sélectionné.
- &nbsp;<Translate android="true" ids="poi_context_menu_modify"/> - [modifie le POI sélectionné](../plugins/osm-editing.md#how-to-modify-poi).


### * Ouvrir une note OSM

:::note
Pour ouvrir une note OSM, activez le [**plugin d'édition OSM**](../plugins/osm-editing.md) d'OsmAnd.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Action Note Android](@site/static/img/map/action_note_android.png)

![Action Ajouter une note Android](@site/static/img/map/action_add_osm_note_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Action Note iOS](@site/static/img/map/action_note_ios.png)

![Action Ajouter une note iOS](@site/static/img/map/action_add_osm_note_ui_ios.png)

</TabItem>

</Tabs>

Vous pouvez [signaler](../plugins/osm-editing.md#how-to-report-a-mistake) les erreurs de données cartographiques à un emplacement spécifique à la [communauté OpenStreetMap](https://wiki.openstreetmap.org/wiki/Join_the_community). Veuillez suivre les [directives](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes) et ajouter des commentaires appropriés à un problème.


### * Commenter / Fermer une note OSM

:::note
Pour commenter/fermer une note OSM, activez le [**plugin d'édition OSM**](../plugins/osm-editing.md) d'OsmAnd.
:::

![Commenter une note OSM Android](@site/static/img/map/action_comment_note_android.png) ![Rouvrir une note OSM Android](@site/static/img/map/action_reopen_note_android.png)

Vous pouvez [commenter](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes), [résoudre](https://wiki.openstreetmap.org/wiki/Notes#Resolving_notes) et rouvrir
les notes OpenStreetMap via le menu contextuel de l'objet.


### * Télécharger un POI / une note OSM

:::note
Pour télécharger un POI / une note OSM, activez le [**plugin d'édition OSM**](../plugins/osm-editing.md) d'OsmAnd.
:::

![Télécharger un POI Android](@site/static/img/map/action_poi_upload_android.png) ![Télécharger une note OSM Android](@site/static/img/map/action_note_upload_android.png)

Si vous utilisez le *mode hors ligne* pour ajouter/modifier un POI ou une note OSM, vous devrez télécharger les modifications sur OpenStreetMap. Par défaut, le *mode hors ligne* est activé pour éviter les modifications accidentelles de la base de données publique. Vous pouvez télécharger ou supprimer les modifications via le menu contextuel de l'objet créé.


### * Enregistrer une note AV

<InfoAndroidOnly />

:::note
Pour enregistrer des notes audio/vidéo, activez le [**plugin Notes audio/vidéo**](../plugins/audio-video-notes.md) d'OsmAnd.
:::

![Action Audio-Vidéo Android](@site/static/img/map/action_av_note_android.png)

Enregistre ou prend une note multimédia à un point sélectionné sur la carte.

- &nbsp;<Translate android="true" ids="recording_context_menu_arecord"/> - crée une [note audio](../map/point-layers-on-map.md#-audio--video-points-android) sur le point sélectionné (crée un nouveau point sur la superposition avec une icône audio).
- &nbsp;<Translate android="true" ids="recording_context_menu_vrecord"/> - crée une [note vidéo](../map/point-layers-on-map.md#-audio--video-points-android) sur le point sélectionné (crée un nouveau point sur la superposition avec une icône vidéo).
- &nbsp;<Translate android="true" ids="recording_context_menu_precord"/> - crée un [point photo](../map/point-layers-on-map.md#-audio--video-points-android) sur la carte.


## Personnaliser

<InfoAndroidOnly/>

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,context_menu_actions"/>*

![Menu contextuel de la carte Personnaliser](@site/static/img/map/map_context_menu_customize_1.png) <!-- ![Menu contextuel de la carte Personnaliser](@site/static/img/map/map_context_menu_customize_2.png) --> ![Menu contextuel de la carte Personnaliser](@site/static/img/map/map_context_menu_customize_3.png)

Vous pouvez modifier l'ordre ou masquer des éléments du menu *Actions* dans le *menu contextuel de la carte*. Un total de 16 actions sont suggérées.

- Vous pouvez déplacer les trois actions les plus utiles en haut de la liste *Actions principales*.
- Le reste du menu peut être personnalisé pour chaque profil séparément dans les sections *Actions supplémentaires* et *Masquées*.

Types d'actions disponibles :

- **<Translate android="true" ids="main_actions"/>**. La section ne comporte que 4 boutons, dont trois peuvent être personnalisés, et Actions, qui reste inchangé.
- **<Translate android="true" ids="additional_actions"/>**. Vous pouvez accéder à ces actions en appuyant sur le bouton *Actions*.
- **<Translate android="true" ids="shared_string_hidden"/>**. Le déplacement d'actions vers cette section ne les empêche pas de fonctionner. Elles n'apparaissent simplement pas dans le menu Actions.


## Articles connexes

- [Cartes vectorielles (Styles de carte)](./vector-maps.md)
- [Cartes raster (en ligne / hors ligne)](./raster-maps.md)
- [Points sur la carte](./point-layers-on-map.md)
- [Menu contextuel des traces](./tracks/track-context-menu.md)
- [Transport en commun](./public-transport.md)
- [Importation / Exportation](../personal/import-export.md)
- [Schémas de palette de couleurs](../personal/color-palette-schemes.md)

> *Cet article a été mis à jour pour la dernière fois en avril 2025*

