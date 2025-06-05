---
source-hash: 26138ed6e4c94edda5bc3c82a1525db4c4e58de15ed70733b433b660e457cdce
sidebar_position: 8
title: Lieux populaires
unlisted: true
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


## Aperçu {#overview}

<InfoAndroidOnly/>

L'outil **Lieux populaires** d'OsmAnd propose une sélection organisée de lieux remarquables dans le monde entier, aidant les utilisateurs à explorer des sites célèbres et des points d'intérêt. Cette fonctionnalité est entièrement alimentée par [Wikidata](https://www.wikidata.org) et [Wikipedia](https://www.wikipedia.org/), qui sont des bases de connaissances ouvertes structurées contenant des données sur des millions d'objets géographiques, y compris des articles, des coordonnées, des images et des descriptions multilingues.

Chaque lieu répertorié dans l'outil Lieux populaires est lié à un **ID Wikidata**, ce qui permet à OsmAnd d'afficher des informations détaillées et des images pertinentes pour le lieu sélectionné. La présence d'un ID Wikidata est essentielle pour une identification et une visualisation précises de chaque lieu.

Actuellement, l'outil présente un sous-ensemble ciblé d'environ **50 000 à 150 000 lieux les mieux notés**, sélectionnés parmi environ **1 million** d'objets Wikidata qui existent également dans [OpenStreetMap](https://www.openstreetmap.org). Bien que Wikidata inclue plus de **10 millions** d'objets géolocalisés dans le monde, OsmAnd ne met en évidence que les plus importants, ce qui donne une sélection petite mais de haute qualité.

> *Ceci est la première version de l'outil Lieux populaires dans OsmAnd. Nous apprécions vos commentaires sur tout problème ou lieu manquant.*

Vous pouvez continuer à lire ce guide pour apprendre à utiliser la fonctionnalité, ou [soumettre des commentaires sur GitHub](https://github.com/osmandapp/OsmAnd).

![Lieux populaires](@site/static/img/map/popular_places/popular_places.png) ![Lieux populaires](@site/static/img/map/popular_places/popular_places_1.png)

## Comment utiliser {#how-to-use}

<InfoAndroidOnly/>

La fonctionnalité **Lieux populaires** — qui comprend des POI sur la carte et une liste organisée de lieux remarquables — est accessible depuis deux sections différentes de l'application :

- **Version gratuite**  
  Via la [**Recherche**](#explore-in-search) :  
  Allez dans **<Translate android="true" ids="android_button_seq"/>** : *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>* pour explorer les sites et attractions à proximité.

- **Versions payantes** *([Maps+ et OsmAnd Pro](../purchases/android.md))*  
  Via [**Configurer la carte**](#enable-layer) :  
  Activez la superposition via **<Translate android="true" ids="android_button_seq"/>** : *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>* → Les points d'intérêt apparaîtront sur la carte, y compris les images miniatures de Wikidata (si disponibles).  
  Vous pouvez basculer entre les données Wikipedia hors ligne et les données en ligne en ajustant la **Source des POI** dans le [menu Lieux populaires](#enable-layer).

### Explorer dans la recherche {#explore-in-search}

![Mode exploration](@site/static/img/map/popular_places/popular_places_search.png) ![Mode exploration](@site/static/img/map/popular_places/popular_places_search_2.png)

**<Translate android="true" ids="android_button_seq"/>** : *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

La section *<Translate android="true" ids="popular_places_nearby"/>* affiche les destinations touristiques les plus populaires à proximité. Vous pouvez faire défiler vers la gauche ou la droite pour parcourir les lieux mis en évidence autour de vous, ou appuyer sur le bouton *<Translate android="true" ids="shared_string_show_all"/>* pour ouvrir la liste complète des lieux populaires.

Chaque élément comprend une image, une courte description, une étiquette de catégorie de POI, ainsi que la distance et la direction vers le lieu.

En haut de la liste, vous trouverez le bouton *<Translate android="true" ids="shared_string_show_on_map"/>*, qui affiche tous les POI répertoriés directement sur la carte.

Appuyer sur n'importe quel lieu ouvre le [menu contextuel des POI](./map-context-menu.md) sur la carte, où vous pouvez accéder à la section [Photos en ligne](#online-photos) et afficher l'[article Wikipedia](../plugins/wikipedia.md) lié pour le lieu sélectionné.

:::tip
Cette fonctionnalité fonctionne **uniquement en ligne** dans la version gratuite.  
Pour l'utiliser **hors ligne**, vous devez acheter un abonnement [Maps+ ou OsmAnd Pro](../purchases/android.md) et télécharger les [cartes Wikipedia](../plugins/wikipedia.md) pour votre région sélectionnée.
:::

### Activer la couche {#enable-layer}

![Menu Lieux populaires](@site/static/img/map/popular_places/popular_places_menu.png)

**<Translate android="true" ids="android_button_seq"/>** : *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

La fonctionnalité **<Translate android="true" ids="poi_osmwiki"/>** est disponible dans le [menu Configurer la carte](./configure-map-menu.md). Elle offre des paramètres étendus pour afficher du contenu basé sur Wikipedia sur la carte à l'aide d'images Wikidata.

Avant d'utiliser cette fonctionnalité, assurez-vous que le [plugin Wikipedia](../plugins/wikipedia.md) est activé. Ensuite, téléchargez la carte Wikipedia requise pour votre région sélectionnée si vous souhaitez l'utiliser hors ligne.

Cette fonctionnalité superpose les POI Wikipedia sur la carte, souvent avec des images associées de Wikidata.

Les options clés de ce menu incluent :

- **<Translate android="true" ids="poi_osmwiki"/>** – Active ou désactive la visibilité des POI avec du contenu Wikipedia sur la carte.
- **<Translate android="true" ids="shared_string_language"/>** – Choisissez la langue des articles Wikipedia et des descriptions de POI.
- **Source des POI** – Choisissez entre :
  - Mode **Hors ligne** (nécessite le téléchargement d'articles Wikipedia), ou
  - Mode **En ligne uniquement** (aucun téléchargement d'article requis).  
    En mode en ligne, les POI et leurs images sont affichés dynamiquement, comme dans le [mode Exploration par recherche](#explore-in-search).
- **<Translate android="true" ids="show_image_previews"/>** – Activez cette option pour afficher des aperçus miniatures des images des POI directement sur la carte.

Appuyer sur n'importe quel POI basé sur une image sur la carte ouvre le [menu contextuel des POI](./map-context-menu.md), où vous pouvez accéder à la section [Photos en ligne](#online-photos) et ouvrir l'[article Wikipedia](../plugins/wikipedia.md) lié pour le lieu sélectionné.


## Photos en ligne {#online-photos}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Menu contextuel Photos en ligne Android](@site/static/img/map/popular_places/online_photos_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu contextuel Photos en ligne iOS](@site/static/img/map/popular_places/online_photos_ios.png) 

</TabItem>

</Tabs>

*<Translate android="true" ids="help_article_map_map_context_menu_name,online_photos"/>*

Il s'agit d'une section du [menu contextuel des POI](./map-context-menu.md) qui affiche un aperçu photo du lieu populaire sélectionné (Wikipedia). Vous pouvez faire défiler horizontalement pour parcourir les photos disponibles, ou appuyer sur n'importe quelle image pour l'ouvrir en [mode plein écran](#gallery).

En savoir plus sur les options supplémentaires dans les sections [Actions](#actions) et [Galerie](#gallery).

### Sources de données {#data-sources}

Les données d'image dans Lieux populaires proviennent de [Wikidata](https://en.wikipedia.org/wiki/Wikidata), un graphe de connaissances multilingue édité en collaboration.  
Comme indiqué dans l'[Aperçu](#overview), chaque lieu présenté dans l'outil Lieux populaires est lié à un [**ID Wikidata**](https://en.wikipedia.org/wiki/Wikipedia:Finding_a_Wikidata_ID), ce qui permet à OsmAnd d'afficher des descriptions détaillées et des images pertinentes.

Dans le [menu contextuel de la carte](../map/map-context-menu.md), chaque lieu populaire comprend une étiquette Wikidata cliquable.  
Appuyer sur cette étiquette ouvre la page de l'objet correspondant sur le site Web de Wikidata.



### Actions {#actions}

Dans le menu contextuel de la carte Comment accéder :

- Appuyez sur le bouton **Tout afficher** (Android) / **Tout voir** (iOS) pour ouvrir la [galerie](#gallery) en mode plein écran, où vous pouvez faire défiler toutes les photos disponibles pour le lieu sélectionné.

- Appuyez sur n'importe quelle photo pour l'afficher en [plein écran](#gallery) et accéder aux actions disponibles :  
  **Partager**, **Détails**, **Ouvrir dans le navigateur** et **Télécharger**.


### Galerie {#gallery}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Menu Galerie – Android](@site/static/img/map/gallery_menu_android.png) ![Menu Galerie – Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu Galerie – iOS](@site/static/img/map/gallery_menu_ios.png) ![Menu Galerie – iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>

Le **menu Galerie** peut afficher jusqu'à **100 images** liées au point d'intérêt sélectionné. Vous pouvez faire défiler toutes les photos disponibles. Appuyer sur une photo ouvre brièvement une vue détaillée affichant : *Nom*, *Date d'ajout*, *Auteur*, *Licence* 

Vous pouvez également effectuer les actions suivantes sur chaque photo :

- **Partager**  
  Partagez l'image sélectionnée à l'aide de toute application compatible installée sur votre appareil (par exemple, messagerie, e-mail ou réseaux sociaux). Le contenu partagé comprend l'image et son lien source (si disponible).

- **Détails**  
  Ouvrez une vue détaillée affichant les métadonnées de l'image, notamment : *Nom*, *Date d'ajout*, *Auteur*, *Licence*, *Source* et *Lien direct*

- **Ouvrir dans le navigateur**  
  Lancez la page source de l'image (généralement sur [Wikimedia Commons](https://commons.wikimedia.org/)) dans votre navigateur par défaut. Cela vous permet d'afficher l'image complète, les informations de licence et le contenu connexe.

- **Télécharger**  
  Enregistrez l'image sur le stockage de votre appareil. L'image téléchargée se trouve dans le dossier Téléchargements par défaut de votre appareil et est accessible hors ligne.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

La version Android n'inclut pas de menu supplémentaire pour les actions sur les photos.

</TabItem>

<TabItem value="ios" label="iOS">  

![iOS - Options du menu contextuel](@site/static/img/map/gallery_menu_ios_3.png)

Sur **iOS**, un appui long sur une photo ouvre un menu contextuel avec des actions supplémentaires :

- **Détails**  
- **Ouvrir dans le navigateur**  
- **Télécharger**

**Boutons** :  
- Le bouton **Partager** vous permet de partager rapidement l'image sélectionnée.  
- Le **menu à trois points** donne accès à des actions supplémentaires, notamment l'affichage des détails, l'ouverture de la source dans un navigateur ou le téléchargement de l'image.

</TabItem>

</Tabs>


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Android – Vue détaillée](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![iOS – Vue détaillée](@site/static/img/map/gallery_menu_ios_2.png)

</TabItem>

</Tabs>

L'écran **Détails** fournit les métadonnées complètes de la photo sélectionnée, notamment : *Nom*, *Date d'ajout*, *Auteur*, *Licence*, *Source* et *Lien direct*