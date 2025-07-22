---
source-hash: 5920278abcfe315d7fbfdbeb177097e48bdb3e0b7a6127b1def7c80cbfc2a59a
sidebar_position: 8
title: Lieux populaires
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


<InfoIncompleteArticle/>


## Vue d'ensemble {#overview}

La fonctionnalité **Lieux populaires** d'OsmAnd met en évidence les points de repère et les attractions notables en utilisant des données structurées ouvertes provenant de [Wikidata](https://www.wikidata.org) et de [Wikipedia](https://www.wikipedia.org/). Elle aide les utilisateurs à explorer des destinations connues avec des descriptions multilingues et des photos.

Chaque lieu inclus dans cette fonctionnalité est lié à un **ID Wikidata**, ce qui permet à OsmAnd d'afficher des noms vérifiés, des images d'aperçu et des liens vers des articles Wikipédia. Cet outil ne montre **pas** tous les points OpenStreetMap (OSM). Il est limité aux POI avec des références Wikidata.

Actuellement, la base de données organisée comprend environ **50 000 à 150 000 lieux les mieux notés** dans le monde, sélectionnés parmi plus d'**1 million** d'objets Wikidata + OSM.

:::note
*Ceci est la première version de la fonctionnalité Lieux populaires. Les commentaires sont les bienvenus sur [GitHub](https://github.com/osmandapp/OsmAnd)*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Lieux populaires](@site/static/img/map/popular_places/popular_places.png) ![Lieux populaires](@site/static/img/map/popular_places/popular_places_1.png)

</TabItem>

</Tabs>


### Sources de données

Les **Lieux populaires** sont basés sur le contenu structuré de [Wikidata](https://www.wikidata.org) et de [Wikipedia](https://www.wikipedia.org/).

Seuls les POI avec un **ID Wikidata** lié sont affichés. Ces ID connectent les objets cartographiques à des noms, des descriptions et des images vérifiés.

Vous pouvez consulter le lien Wikidata directement dans le [Menu contextuel de la carte](../map/map-context-menu.md). Taper sur l'étiquette Wikidata ouvre la page complète de l'objet sur le site web de Wikidata.

Apprenez à trouver un ID Wikidata : [Wikipedia : Trouver un ID Wikidata](https://en.wikipedia.org/wiki/Wikipedia:Finding_a_Wikidata_ID)


## Comment utiliser {#how-to-use}

<InfoAndroidOnly/>

La fonctionnalité **Lieux populaires** comprend à la fois une liste organisée de points de repère à proximité et une couche de POI basés sur Wikipédia sur la carte.

Il existe deux façons principales d'accéder à cette fonctionnalité :

- **Version gratuite**
  Accès via la [Recherche](#explore-in-search) pour explorer les lieux à proximité en mode liste.
  *<Translate android="true" ids="android_button_seq"/>*. Aller à : *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

- **Versions payantes** *(Maps+ et OsmAnd Pro)*
  Activez la superposition visuelle dans [Configurer la carte](#enable-layer).
  *<Translate android="true" ids="android_button_seq"/>*. Aller à : *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

  Dans ce mode, les POI populaires apparaissent directement sur la carte avec des aperçus miniatures et du contenu Wikipédia.

  Vous pouvez basculer entre les sources Wikipédia **en ligne** et **hors ligne** dans les paramètres de superposition. En savoir plus dans [Activer la couche](#enable-layer).


## Explorer dans la recherche {#explore-in-search}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

![Mode exploration](@site/static/img/map/popular_places/popular_places_search.png)
![Mode exploration](@site/static/img/map/popular_places/popular_places_search_2.png)

</TabItem>

</Tabs>

La section **<Translate android="true" ids="popular_places_nearby"/>** affiche une liste déroulante des points de repère les mieux notés près de votre position actuelle. Chaque élément comprend :

- Nom du lieu.
- Courte description.
- Étiquette de catégorie de POI.
- Distance et direction.
- Image miniature (si disponible).

Appuyez sur **Afficher tout** pour voir la liste complète, ou sur **Afficher sur la carte** pour afficher tous les POI listés sur la carte.

Taper sur n'importe quel lieu ouvre le [menu contextuel du POI](./map-context-menu.md), où vous pouvez prévisualiser des photos et accéder au [contenu Wikipédia](../plugins/wikipedia.md) associé.

:::tip
Le mode d'exploration basé sur la recherche fonctionne **uniquement en ligne** dans la version gratuite.
Pour l'utiliser **hors ligne**, vous avez besoin d'un abonnement [Maps+ ou OsmAnd Pro](../purchases/android.md) et de cartes [Wikipédia](../plugins/wikipedia.md) téléchargées.
:::


## Activer la couche {#enable-layer}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**<Translate android="true" ids="android_button_seq"/>**. Aller à : *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Menu Lieux populaires](@site/static/img/map/popular_places/popular_places_menu.png)

</TabItem>

</Tabs>

La fonctionnalité **Lieux populaires (Wikipédia)** est disponible dans le [menu Configurer la carte](./configure-map-menu.md). Pour afficher les lieux populaires directement sur la carte, activez la couche POI avec les données de Wikipédia utilisant les images Wikidata.

Avant d'utiliser cette fonctionnalité :

- Assurez-vous que le [plugin Wikipédia](../plugins/wikipedia.md) est activé.
- Téléchargez les données Wikipédia pour votre région si vous souhaitez les utiliser hors ligne.

### Options de la couche

Une fois activées, les options suivantes deviennent disponibles :

- **<Translate android="true" ids="poi_osmwiki"/>** – Activer/désactiver les POI Wikipédia sur la carte.

- **Source POI** – Basculer entre :
  - *Mode hors ligne* (les articles Wikipédia doivent être téléchargés).
  - *Mode en ligne uniquement* (utilise les données et images en direct).

- **<Translate android="true" ids="shared_string_language"/>** – Sélectionnez la langue pour les descriptions Wikipédia.

- **<Translate android="true" ids="show_image_previews"/>** – Afficher les miniatures d'images de Wikidata à côté des POI.

Taper sur un POI sur la carte ouvre le [menu contextuel du POI](./map-context-menu.md), où vous pouvez visualiser les [photos en ligne](#online-photos) et accéder aux [articles Wikipédia](../plugins/wikipedia.md) liés.


## Photos en ligne {#online-photos}

*<Translate android="true" ids="help_article_map_map_context_menu_name,online_photos"/>*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu contextuel Photos en ligne Android](@site/static/img/map/popular_places/online_photos_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu contextuel Photos en ligne iOS](@site/static/img/map/popular_places/online_photos_ios.png)

</TabItem>

</Tabs>

Ceci est une section du [menu contextuel du POI](./map-context-menu.md) qui affiche un aperçu photo du lieu populaire sélectionné (Wikipédia). Vous pouvez faire défiler horizontalement pour parcourir les photos disponibles, ou taper sur n'importe quelle image pour l'ouvrir en [mode plein écran](#gallery).

En savoir plus sur les options supplémentaires dans la section [Actions](#actions) et la [Galerie](#gallery).


<!--

When you tap a Popular Place on the map or from the list, the [POI context menu](./map-context-menu.md) includes an **Online Photos** section with a horizontal preview of images.

- Tap any photo to view it in fullscreen.
- Swipe to browse more images.

For more actions like sharing, viewing metadata, or downloading — see [Gallery](#gallery).

-->

### Actions {#actions}

Dans le menu contextuel de la carte Comment accéder :

- Appuyez sur le bouton **Afficher tout** (Android) / **Voir tout** (iOS) pour ouvrir la [galerie](#gallery) en mode plein écran, où vous pouvez faire défiler toutes les photos disponibles pour l'emplacement sélectionné.

- Appuyez sur n'importe quelle photo pour la visualiser en [plein écran](#gallery) et accéder aux actions disponibles :
  **Partager**, **Détails**, **Ouvrir dans le navigateur** et **Télécharger**.


### Galerie {#gallery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu Galerie – Android](@site/static/img/map/gallery_menu_android.png)
![Menu Galerie – Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Galerie – iOS](@site/static/img/map/gallery_menu_ios.png)
![Menu Galerie – iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


Le **Menu Galerie** peut afficher jusqu'à **100 images** liées au point d'intérêt sélectionné. Vous pouvez faire défiler toutes les photos disponibles. Taper brièvement sur une photo ouvre une vue détaillée affichant : *Nom*, *Date d'ajout*, *Auteur*, *Licence*.

Vous pouvez également effectuer les actions suivantes sur chaque photo :

- **Partager**
  Partagez l'image sélectionnée à l'aide de toute application compatible installée sur votre appareil (par exemple, messagerie, e-mail ou médias sociaux). Le contenu partagé comprend l'image et son lien source (si disponible).

- **Détails**
  Ouvrez une vue détaillée affichant les métadonnées de l'image, y compris : *Nom*, *Date d'ajout*, *Auteur*, *Licence*, *Source* et *Lien direct*.

- **Ouvrir dans le navigateur**
  Lancez la page source de l'image (généralement sur [Wikimedia Commons](https://commons.wikimedia.org/)) dans votre navigateur par défaut. Cela vous permet de visualiser l'image complète, les informations de licence et le contenu associé.

- **Télécharger**
  Enregistrez l'image sur le stockage de votre appareil. L'image téléchargée se trouve dans le dossier Téléchargements par défaut de votre appareil et est accessible hors ligne.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

La version Android n'inclut pas de menu supplémentaire pour les actions sur les photos.

</TabItem>

<TabItem value="ios" label="iOS">

![iOS - Options du menu contextuel](@site/static/img/map/gallery_menu_ios_3.png)

Sur **iOS**, un appui long sur une photo ouvre un menu contextuel avec des actions supplémentaires :

- **Détails**
- **Ouvrir dans le navigateur**
- **Télécharger**

**Boutons** :

- Le bouton **Partager** vous permet de partager rapidement l'image sélectionnée.
- Le **menu à trois points** donne accès à des actions supplémentaires, notamment la visualisation des détails, l'ouverture de la source dans un navigateur ou le téléchargement de l'image.

</TabItem>

</Tabs>


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Android – Vue détaillée](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![iOS – Vue détaillée](@site/static/img/map/gallery_menu_ios_2.png)

</TabItem>

</Tabs>

L'écran **Détails** fournit toutes les métadonnées de la photo sélectionnée, y compris : *Nom*, *Date d'ajout*, *Auteur*, *Licence*, *Source* et *Lien direct*.


## Articles connexes

- [Menu contextuel de la carte](./map-context-menu.md)
- [Configurer la carte](./configure-map-menu.md)
- [Rechercher un POI](../search/search-poi.md)
- [Plugin Wikipédia](../plugins/wikipedia.md)


> *Dernière mise à jour : juillet 2025*


<!--
### Online Photos 2

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Online Photos context menu Android](@site/static/img/map/images_nearby_1_andr.png) ![Street-Level Imagery Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Online Photos context menu iOS](@site/static/img/map/online_photo_ios.png) ![Street-Level Imagery iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

#### Actions With Photos

How to access:

- Tap the **Show All**(Android) / **View All**(iOS) button to open [the gallery](#gallery-menu) in full screen mode. There you can swipe through all the images related to the selected location.

- Tap a photo to access actions such as *Share*, *Details*, *Open in browser*, and *Download*.

- You can also [browse](../map/point-layers-on-map.md#-street-level-imagery) street-level images on the map.

In the **Online photos** section of the map context menu, you can access photos of objects from the [Wikimedia](https://www.wikimedia.org/), which offers media files tagged with `image` or `wikimedia` from OpenStreetMap.

#### Gallery Menu 2

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Online Photos context menu Android](@site/static/img/map/gallery_menu_android.png) ![Street-Level Imagery Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios.png) ![Street-Level Imagery iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


The gallery can display up to 100 items. You can browse through all the photos, and short tapping on any photo will open it to view additional details (*Name*, *Date*, *Author*, *License*) and perform various actions (*Share*, *Details*, *Open in browser*, and *Download* options).


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

</TabItem>

<TabItem value="ios" label="iOS">

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios_3.png)

</TabItem>

</Tabs>



On iOS, long tapping on any photo opens an additional menu with actions such as *Details*, *Open in browser*, and *Download*.

Buttons:

- The **Share** button allows you to share the selected item.
- The **Three dots** button opens a menu with options like *Details*, *Open in browser*, and *Download*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Online Photos context menu Android](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios_2.png)

</TabItem>

</Tabs>


The Details screen provides information such as the *Name*, *Added Date*, *Author*, *License*, *Source*, and *Link* of the selected item.

-->