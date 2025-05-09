---
source-hash: d835e634c90026418b561c2679f618c58012076cabb7fc146a6bc68e9fab4b7e 
sidebar_position: 2
title:  Guides de voyage
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


## Aperçu

:::info Fonctionnalité payante
Les Guides de voyage sont une [fonctionnalité payante](../purchases/index.md) de l'application OsmAnd.
:::

Les guides de voyage virtuels dans OsmAnd offrent aux utilisateurs des informations précieuses, des recommandations et des conseils. Ils permettent également aux voyageurs d'accéder à des informations de navigation complètes sur les attractions dans l'application.

Les guides de voyage OsmAnd sont basés sur les données de [Wikivoyage](https://www.wikivoyage.org/), un projet communautaire similaire à Wikipédia, où des auteurs bénévoles créent des articles à jour.
Les informations de Wikivoyage comprennent les faits principaux sur un lieu, les transports, les attractions, le shopping, et plus encore.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Travel guides view General](@site/static/img/guides/travel_guides_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Maps menu iOS](@site/static/img/personal/maps/travel_guides_overview_ios.png)

</TabItem>

</Tabs>


## Comment utiliser

- [Télécharger](#download-articles) les *Guides de voyage*.
- Parcourir les [articles](#browse-articles) sur un pays, une région, une ville, une attraction.
    - Alternativement, [afficher les articles et/ou les points des guides de voyage sur la carte](#travel-routes) en utilisant le menu Configurer la carte.
    - Parcourir les attractions sur la carte, les ajouter aux *[Marqueurs de carte](../personal/markers.md#add-marker-on-the-map)* ou aux *[Favoris](../personal/favorites.md#add-to-map-markers)*.
    - En utilisant le bouton *[Lire l'intégralité](#manage-as-gpx-track)*, accéder à l'*[article](#travel-article)* dans les *Guides de voyage*.
- [Marquer](#explore-and-bookmark) les articles pour les lire plus tard.
- Choisir des [points](#points) dans les articles à visiter et les ajouter à la carte OsmAnd.
- Obtenir plus d'informations sur les lieux à visiter à partir d'articles [Wikipédia hors ligne](#combine-with-wikipedia).
- [Construire un itinéraire](../navigation/setup/route-navigation.md#set-destinations) vers les attractions touristiques choisies ou une promenade libre entre les points.

:::note
Les articles des *Guides de voyage* sont stockés dans OsmAnd sous forme de traces GPX avec des points de passage. Après avoir ajouté ces traces à la carte (voir les sections *[Points](#points)* ou *[Itinéraires de voyage](#travel-routes)* de cet article), vous pouvez les gérer via le menu *[Mes lieux](../personal/myplaces.md)*.
:::

### Télécharger des articles

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *Android* *<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*

![Travel guides download menu](@site/static/img/guides/travel_guides_download.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *iOS* *<Translate ios="true" ids="shared_string_menu,travel_guides_beta"/>*

![Maps menu iOS](@site/static/img/guides/travel_guides_download_1_ios.png)

</TabItem>

</Tabs>

Avant de commencer à utiliser les guides de voyage, vous devez les télécharger via le menu [Télécharger la carte](../start-with/download-maps.md#main-menu) (*<Translate android="true" ids="shared_string_menu,maps_and_resources,shared_string_travel_guides"/>*). Les articles sont regroupés par régions : *Afrique, Asie, Australie et Océanie, Amérique centrale, Europe, Amérique du Nord, Russie et Amérique du Sud*, vous n'avez donc pas besoin de télécharger des guides de voyage pour une ville ou un pays séparé.
En enregistrant les régions requises sur votre appareil, vous pouvez parcourir les articles avec OsmAnd même lorsque vous êtes à l'étranger ou hors de portée de votre réseau mobile.

:::note
En plus des guides sur les pays, les régions ou les villes, vous pouvez trouver des guides sur des lieux de films, de livres, de jeux informatiques, des lieux de mémoire de grandes personnalités, etc.
Il existe également des guides spécialisés, tels que la liste du Réseau mondial des géoparcs de l'UNESCO ou les aéroports internationaux les plus grands et les plus complexes du monde.
:::

## Parcourir les articles

L'écran *Guides de voyage* se compose de deux parties générales : un [*champ de recherche*](#search) et une liste de *guides de voyage* avec deux onglets : *[<Translate android="true" ids="shared_string_explore"/> et <Translate android="true" ids="saved_articles"/>](#explore-and-bookmark)*. Vous pouvez basculer entre eux d'un simple toucher d'un onglet.
Lorsque vous ouvrez *Guides de voyage* (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*), OsmAnd vous montrera des articles sur des lieux intéressants situés près des coordonnées géographiques du centre actuel de la carte. Lorsque vous appuyez sur un élément de la liste, l'[article du Guide de voyage](#travel-article) s'ouvre. En bas de l'écran se trouve un commutateur vers l'onglet *Marque-pages*.

### Explorer et marquer

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Travel guides main screen](@site/static/img/guides/travel_guides_main_screen_1.png) ![Travel guides main screen 2](@site/static/img/guides/travel_guides_main_screen_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides main screen](@site/static/img/guides/travel_guides_main_screen_1_ios.png) ![Travel guides main screen 2](@site/static/img/guides/travel_guides_main_screen_2_ios.png)

</TabItem>

</Tabs>

Sur l'onglet **Explorer** ou **<Translate android="true" ids="popular_destinations"/>**, les 30 meilleurs articles sur les destinations sont listés à proximité du centre de l'écran (hors localisation). En appuyant sur un élément de la liste avec un titre et une brève description de l'article, vous pouvez afficher le texte intégral de cet article.
Si vous appuyez sur le bouton *Marque-page*, l'article sera enregistré pour une lecture ultérieure et sera disponible dans l'onglet Marque-pages. Dans l'onglet *Articles marqués*, les articles sont classés par ordre d'enregistrement, les articles les plus récents étant en haut.

- &nbsp;**<Translate android="true" ids="shared_string_read"/>**. Ouvre l'[article de voyage](#travel-article).
- &nbsp;**<Translate android="true" ids="shared_string_bookmark"/>**. Déplace l'article sélectionné vers <Translate android="true" ids="saved_articles"/>.
- &nbsp;**<Translate android="true" ids="shared_string_remove"/>**. Supprime l'article sélectionné de <Translate android="true" ids="saved_articles"/>.

### Recherche

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Travel guides search menu](@site/static/img/guides/travel_guides_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_search_1_ios.png)

</TabItem>

</Tabs>

Le champ de recherche est situé en haut de l'écran <Translate android="true" ids="shared_string_travel_guides"/>. Si vous commencez à taper les premières lettres d'un pays, d'une ville ou d'un lieu célèbre, une liste d'articles apparaîtra sous le champ de recherche. En touchant celui dont vous avez besoin, vous pouvez commencer à lire.
À côté de chaque résultat de recherche sont listées les 3 langues les plus couramment utilisées dans lesquelles l'article sélectionné peut être lu. Cependant, les articles populaires sont disponibles dans plus de langues que les 3 listées.

**Fonctionnalités supplémentaires :**

- Vous pouvez rechercher des attractions culturelles spéciales, telles que le *tourisme Harry Potter*, les *villes fantômes*, les *monarchies*, et autres.
- Pour supprimer l'historique de recherche, vous devez utiliser le bouton [<Translate android="true" ids="shared_string_options"/>](#options).

<!--
- Search is complete only when you hit &#128269; or space at the end of the word. - doesn't work as it should be
-->

### Options

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Travel guides options menu](@site/static/img/guides/travel_guides_options_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_options_ios.png)

</TabItem>

</Tabs>

Dans ce menu, vous pouvez personnaliser l'apparence des articles lorsque vous travaillez hors ligne. NOTEZ que les guides de voyage *[téléchargés](#download-articles)* ne contiennent pas d'images. Elles n'apparaissent que lorsque vous consultez des articles avec une connexion Internet active.
Dans le menu Options, vous pouvez choisir d'enregistrer les images des articles consultés pour les utiliser lorsque vous êtes hors ligne. Vous pouvez également vider le cache d'images existant ou supprimer l'historique de recherche (ne fonctionne que lors de la recherche dans les *Guides de voyage*).

- &nbsp;**<Translate android="true" ids="wikivoyage_download_pics"/>**. Les images des articles peuvent être téléchargées pour une utilisation hors ligne.
- &nbsp;**<Translate android="true" ids="images_cache"/>**. Vide le cache d'images pour libérer de la mémoire.
- &nbsp;**<Translate android="true" ids="delete_search_history"/>**. Efface l'[historique de recherche](#search).

## Article de voyage

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Travel guides article](@site/static/img/guides/travel_guides_article.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_article_ios.png)

</TabItem>

</Tabs>

Vous pouvez ouvrir un article à partir des options suggérées dans l'onglet *[Explorer](#explore-and-bookmark)* ou en utilisant l'option *[Recherche](#search)*. Lorsque vous ajoutez des attractions touristiques appelées *[Points](#points)* à partir d'un *article de Guide de voyage* à la carte OsmAnd, vous pouvez également ouvrir l'article en utilisant le bouton *Lire l'intégralité* dans la [section description](../map/tracks/track-context-menu.md#description-and-info) du point de passage.

Les commandes suivantes sont situées en haut de l'écran :

- Commutateur pour changer la langue de l'article. La langue peut être sélectionnée parmi les options disponibles. La langue du système est utilisée par défaut.
- En utilisant le bouton &#8942;, vous pouvez partager l'article avec vos amis. Le lien s'ouvre dans l'application OsmAnd, le fichier de guides de voyage approprié doit être téléchargé sur l'appareil du destinataire ou sur le site [Wikivoyage](https://www.wikivoyage.org/), si le destinataire n'a pas l'application OsmAnd ou pour les appareils iOS.
- En appuyant sur la barre de navigation, vous ouvrez le *[menu de navigation des Guides de voyage](#navigation-menu)*.

En bas de l'écran se trouvent des boutons tels que :

- [Sommaire](#table-of-contents). Ouvre le sommaire de l'article.
- [Points](#points). Affiche les attractions touristiques liées à l'article sur une carte.
- [Marque-page](#explore-and-bookmark). Permet d'ajouter un article aux marque-pages pour une lecture ultérieure.


### Menu de navigation

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Travel guides contents menu](@site/static/img/guides/travel_guides_navigation_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_navigation_menu_ios.png)

</TabItem>

</Tabs>

Pour passer d'un article à l'autre dans les *articles du Guide de voyage*, utilisez le **menu de navigation**. Vous pouvez y accéder en appuyant sur le champ d'adresse au-dessus de l'image. NOTEZ que les articles des Guides de voyage sont regroupés comme suit : *Continent → Région → Pays → Province (région) → Ville*.
Si vous appuyez sur la flèche dans le coin supérieur gauche de l'écran, vous accéderez directement à l'onglet *Explorer* ou *Articles marqués* (selon l'onglet que vous avez ouvert précédemment).


### Table des matières

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Travel guides contents menu](@site/static/img/guides/travel_guides_contents_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_contents_menu_ios.png)

</TabItem>

</Tabs>

La plupart des *articles de Guide de voyage* ont la même structure de contenu : *introduction* (images et description du site touristique) et *chapitres suivants*.

- &nbsp;*Comprendre*. Détails sur la culture et les habitudes locales.
- &nbsp;*Arriver*. Détails sur la façon de se rendre à certains endroits et le coût de cet itinéraire.
- &nbsp;*Voir*. Une liste d'attractions (musées, sites historiques, etc.) avec des descriptions complètes : prix des billets, heures d'ouverture, liens utiles et numéros de téléphone.
- &nbsp;*Faire*. Lieux où passer du temps.
- &nbsp;*Acheter*. Sites pour faire du shopping.
- &nbsp;*Manger*. Établissements de restauration (divisés par budget : budget, milieu de gamme, luxe).
- &nbsp;*Boire*. Bars et cafés.
- &nbsp;*Dormir*. Hébergements divisés par budget (budget, milieu de gamme, luxe).
- &nbsp;*Aller ensuite*. Lieux les plus proches de Wikivoyage.

### Points

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Travel guides points  menu](@site/static/img/guides/travel_guides_points_on_the_map_2.png) ![Travel guides points menu](@site/static/img/guides/travel_guides_articles_three_dots_point.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_points_on_the_map_1_ios.png) ![Travel guides search menu](@site/static/img/guides/travel_guides_points_on_the_map_2_ios.png)

</TabItem>

</Tabs>

Les *articles de Guide de voyage* contiennent souvent des attractions touristiques regroupées par thème. En appuyant une fois sur le bouton *Points* en bas de l'*[Article](#travel-article)*, toutes les attractions liées au thème (lieux de restauration, options d'hébergement, aéroports, magasins, monuments historiques, etc.) seront ajoutées à la carte et pourront être *[gérées comme une trace](#manage-as-gpx-track)*.

Par défaut, les groupes d'attractions sont marqués par certaines icônes : les catégories *Manger et Boire* avec un couteau et une fourchette dans un cercle rouge, *Faire et Voir* avec un appareil photo dans un cercle vert, et d'autres. Vous pouvez gérer les groupes de points avec &#8942; comme un *[dossier de points de passage](../map/tracks/track-context-menu.md#waypoints-folder)*.

:::note
Les points dans les *articles de voyage* font référence aux points de passage sur une trace GPX.
Vous pouvez également *[ajouter des points à la carte](#travel-routes)* dans le menu *Configurer la carte*. Vous pouvez les afficher tous ou sélectionner une catégorie spécifique.
:::


## Itinéraires de voyage

*<Translate android="true" ids="shared_string_menu,configure_map,travel_routes"/>*

Une autre façon de parcourir les *Guides de voyage* est de les afficher sur la carte en utilisant le menu *Configurer la carte*. Cette fonctionnalité ne s'applique pas à la possibilité offerte par OsmAnd d'utiliser Wikivoyage, elle ne s'applique qu'aux traces. Vous pouvez en savoir plus dans notre [blog](https://osmand.net/blog/routes#generated-travel-routes).

![Travel guides points menu](@site/static/img/guides/travel_guides_travel_routes_path.png) ![Travel guides points menu](@site/static/img/guides/travel_guides_travel_routes_view.png)


### Itinéraires de voyage et articles sur la carte

![Travel guides points  menu](@site/static/img/guides/travel_guides_articles_routes_on_the_map.png) ![Travel guides points  menu](@site/static/img/guides/travel_guides_articles_routes_context_menu.png)

Après avoir activé l'affichage des *Itinéraires de voyage* dans le menu *Configurer la carte*, des cercles de différentes couleurs apparaîtront sur la carte. Les oranges représentent les traces d'itinéraires, les articles d'itinéraires et certains points de passage. Appuyez sur un itinéraire, un article ou un point spécifique, puis appuyez sur le bouton *Télécharger* (&#9047;), et vous pourrez les [gérer comme une trace](#manage-as-gpx-track).

### Guides de voyage personnalisés

Nous vous recommandons d'ajouter de nouveaux articles ou des modifications à [Wikivoyage](https://en.wikivoyage.org/). Nous mettons à jour les Guides de voyage environ tous les 6 mois, et vous pouvez télécharger de nouveaux articles. Vous pouvez également créer votre propre *Guide de voyage*. La façon de le faire est décrite dans la documentation technique (voir l'article *[Créer un Guide de voyage personnalisé](../../technical/map-creation/create_travel_guide.md)*).

<!--
### Collections of tracks

https://osmand.net/blog/routes/#generated-travel-routes
-->


## Gérer comme une trace GPX

![Travel guides points menu 2](@site/static/img/guides/travel_guides_points_on_the_map.png) ![Travel guides points menu 2](@site/static/img/guides/travel_guides_articles_my_places.png)

Après avoir ajouté les *Guides de voyage* à la carte, les *articles de voyage* peuvent être enregistrés en tant que trace GPX et gérés via le menu *[Mes lieux](../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks,icon_group_travel"/>*). Ils peuvent être affichés sur la carte, partagés, renommés, placés dans un autre dossier, exportés ou supprimés.

- &nbsp;Dans *[Aperçu](../map/tracks/track-context-menu.md#overview)*, vous pouvez lire une brève description ou ouvrir l'[article du Guide de voyage](#travel-article) en appuyant sur le bouton *Lire l'intégralité*. *Modifier* vous permet de corriger l'article.
- &nbsp;Il n'y a pas d'informations dans la section *[Trace](../map/tracks/track-context-menu.md#altitude--speed-graphs)*, les fichiers GPX des *Guides de voyage* ne contiennent que des points de passage.
- &nbsp;Sous *[Points](../map/tracks/track-context-menu.md#points--waypoints)*, vous voyez des dossiers avec des points regroupés par nom (Acheter, Faire, Boire, etc.).
- &nbsp;Le bouton *[Option](../map/tracks/track-context-menu.md#options)* exécute les mêmes fonctions que dans une trace normale.

:::info
Les *Points* sont stockés dans un [fichier GPX](../../technical/osmand-file-formats/osmand-gpx.md) (un format couramment utilisé pour les traces) en tant que [Points de passage](../map/point-layers-on-map.md#track-waypoints). Le nombre de points (points de passage) contenus dans la trace est indiqué à côté de l'icône &#128681; dans le champ de la trace.
Dans le *[menu contextuel de la trace](../map/tracks/track-context-menu.md)* du fichier GPX, vous pouvez trouver des informations générales sur l'article auquel cette trace appartient.
:::

## Combiner avec Wikipédia

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Travel guides combine with Wikipedia 1](@site/static/img/guides/travel_guides_wikipedia_1.png) ![Travel guides combine with Wikipedia 2](@site/static/img/guides/travel_guides_wikipedia_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_wikipedia_1_ios.png) ![Travel guides search menu](@site/static/img/guides/travel_guides_wikipedia_2_ios.png)

</TabItem>

</Tabs>

Dans les *articles de Guide de voyage*, vous pouvez trouver des informations utiles sur les attractions touristiques (coordonnées, liens web, prix, etc.). De nombreux articles ont un bouton *Wikipédia* qui permet d'ouvrir un *[article Wikipédia](../plugins/wikipedia.md)* (en ligne ou hors ligne) sur le lieu d'intérêt.

Dans certains cas, l'onglet *[Marque-pages](#explore-and-bookmark)* d'OsmAnd vous invitera à télécharger la [couche de carte Wikipédia](../plugins/wikipedia.md#download-wikipedia-packages) pour parcourir les articles associés hors ligne.

![Travel guides download Wikipedia](@site/static/img/guides/travel_guides_wikipedia_download.png)

:::info NOTE
Le [plugin Wikipédia](../plugins/wikipedia.md) est une [fonctionnalité payante](../purchases/index.md) de l'application OsmAnd.
:::

## Articles connexes

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres globaux](../../user/personal/global-settings.md)
- [Cartes vectorielles (Styles de carte)](../../user/map/vector-maps.md)

> *Cet article a été mis à jour pour la dernière fois en janvier 2025*

