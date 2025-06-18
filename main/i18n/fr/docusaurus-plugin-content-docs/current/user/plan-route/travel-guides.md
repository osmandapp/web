---
source-hash: bd839a5ee6ccc19abd4bedd194ba51bd5ed2b39816629811284b6f76740aeab1
sidebar_position: 2
title: Guides de voyage
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



## Aperçu {#overview}

:::info Fonctionnalité payante
Les Guides de voyage sont une [fonctionnalité payante](../purchases/index.md) de l'application OsmAnd.
:::

Les guides de voyage virtuels dans OsmAnd offrent aux utilisateurs des informations précieuses, des recommandations et des conseils. Ils permettent également aux voyageurs d'accéder à des informations de navigation complètes sur les attractions dans l'application.

Les guides de voyage OsmAnd sont basés sur les données de [Wikivoyage](https://www.wikivoyage.org/), un projet communautaire similaire à Wikipédia, où des auteurs bénévoles créent des articles à jour.
Les informations de Wikivoyage comprennent les faits principaux sur un lieu, les transports, les attractions, le shopping, et plus encore.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Vue Guides de voyage Général](@site/static/img/guides/travel_guides_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Cartes iOS](@site/static/img/personal/maps/travel_guides_overview_ios.png)

</TabItem>

</Tabs>


## Comment utiliser {#how-to-use}

- [Télécharger](#download-articles) les *Guides de voyage*.
- Parcourir les [articles](#browse-articles) sur un pays, une région, une ville, une attraction.
    - Alternativement, [afficher les articles et/ou points des guides de voyage sur la carte](#travel-routes) en utilisant le menu Configurer la carte.
    - Parcourir les attractions sur la carte, les ajouter aux *[Marqueurs de carte](../personal/markers.md#add--edit-markers)* ou aux *[Favoris](../personal/favorites.md#favorite-group-actions)*.
    - En utilisant le bouton *[Lire l'intégralité](#manage-as-gpx-track)*, accéder à l'*[article](#travel-article)* dans les *Guides de voyage*.
- [Mettre en signet](#explore-and-bookmark) des articles pour les lire plus tard.
- Choisir des [points](#points) dans les articles à visiter et les ajouter à la carte OsmAnd.
- Obtenir plus d'informations sur les lieux à visiter à partir d'[articles Wikipédia](#combine-with-wikipedia) hors ligne.
- [Construire un itinéraire](../navigation/setup/route-navigation.md#set-destinations) vers les attractions touristiques choisies ou une promenade libre entre les points.

:::note
Les articles des *Guides de voyage* sont stockés dans OsmAnd sous forme de traces GPX avec des points de passage. Après avoir ajouté ces traces à la carte (voir les sections *[Points](#points)* ou *[Itinéraires de voyage](#travel-routes)* de cet article), vous pouvez les gérer via le menu *[Mes lieux](../personal/myplaces.md)*.
:::

### Télécharger des articles {#download-articles}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*

![Menu de téléchargement des guides de voyage](@site/static/img/guides/travel_guides_download.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,travel_guides_beta"/>*

![Menu Cartes iOS](@site/static/img/guides/travel_guides_download_1_ios.png)

</TabItem>

</Tabs>

Avant de commencer à utiliser les guides de voyage, vous devez les télécharger via le [menu Télécharger la carte](../start-with/download-maps.md#main-menu) (*<Translate android="true" ids="shared_string_menu,maps_and_resources,shared_string_travel_guides"/>*). Les articles sont regroupés par régions : *Afrique, Asie, Australie et Océanie, Amérique centrale, Europe, Amérique du Nord, Russie et Amérique du Sud*, vous n'avez donc pas à télécharger de livres de voyage pour une ville ou un pays spécifique.
En enregistrant les régions requises sur votre appareil, vous pouvez parcourir les articles avec OsmAnd même lorsque vous êtes à l'étranger ou hors de portée de votre réseau mobile.

:::note
En plus des guides de pays, régions ou villes, vous pouvez trouver des guides de lieux de films, de livres, de jeux vidéo, de lieux de mémoire de grandes personnalités, etc.
Il existe également des guides spécialisés, tels que la liste du Réseau mondial des géoparcs UNESCO ou les aéroports internationaux les plus grands et les plus complexes du monde.
:::

## Parcourir les articles {#browse-articles}

L'écran *Guides de voyage* se compose de deux parties générales : un [*champ de recherche*](#search) et une liste de *guides de voyage* avec deux onglets : *[<Translate android="true" ids="shared_string_explore"/> et <Translate android="true" ids="saved_articles"/>](#explore-and-bookmark)*. Vous pouvez basculer entre eux d'un simple toucher d'onglet.
Lorsque vous ouvrez *Guides de voyage* (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*), OsmAnd vous montrera des articles sur des lieux intéressants situés près des coordonnées géographiques du centre actuel de la carte. Lorsque vous touchez un élément de la liste, l'[article du Guide de voyage](#travel-article) s'ouvre. En bas de l'écran se trouve un bouton pour passer à l'*onglet Signets*.

### Explorer et enregistrer {#explore-and-bookmark}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Écran principal des guides de voyage](@site/static/img/guides/travel_guides_main_screen_1.png) ![Écran principal des guides de voyage 2](@site/static/img/guides/travel_guides_main_screen_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Écran principal des guides de voyage](@site/static/img/guides/travel_guides_main_screen_1_ios.png) ![Écran principal des guides de voyage 2](@site/static/img/guides/travel_guides_main_screen_2_ios.png)

</TabItem>

</Tabs>

Dans l'onglet **Explorer** ou **<Translate android="true" ids="popular_destinations"/>**, les 30 meilleurs articles sur les destinations sont listés à proximité du centre de l'écran (hors localisation). En touchant un élément de la liste avec un titre et une brève description de l'article, vous pouvez visualiser le texte intégral de cet article.
Si vous touchez le *bouton Signet*, l'article sera enregistré pour une lecture ultérieure et sera disponible dans l'onglet Signets. Dans l'onglet *Articles enregistrés*, les articles sont classés par ordre d'enregistrement, les plus récents étant en haut.

- &nbsp;**<Translate android="true" ids="shared_string_read"/>**. Ouvre l'[article de voyage](#travel-article).
- &nbsp;**<Translate android="true" ids="shared_string_bookmark"/>**. Déplace l'article sélectionné vers <Translate android="true" ids="saved_articles"/>.
- &nbsp;**<Translate android="true" ids="shared_string_remove"/>**. Supprime l'article sélectionné de <Translate android="true" ids="saved_articles"/>.

### Recherche {#search}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menu de recherche des guides de voyage](@site/static/img/guides/travel_guides_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de recherche des guides de voyage](@site/static/img/guides/travel_guides_search_1_ios.png)

</TabItem>

</Tabs>

Le champ de recherche est situé en haut de l'écran <Translate android="true" ids="shared_string_travel_guides"/>. Si vous commencez à taper les premières lettres d'un pays, d'une ville ou d'un lieu célèbre, une liste d'articles apparaîtra sous le champ de recherche. En touchant celui dont vous avez besoin, vous pouvez commencer à lire.
À côté de chaque résultat de recherche sont listées les 3 langues les plus couramment utilisées dans lesquelles l'article sélectionné peut être lu. Cependant, les articles populaires sont disponibles dans plus de langues que les 3 listées.

**Fonctionnalités supplémentaires :**

- Vous pouvez rechercher des attractions culturelles spéciales, telles que *Tourisme Harry Potter*, *Villes fantômes*, *Monarchies*, et autres.
- Pour supprimer l'historique de recherche, vous devez utiliser le [bouton <Translate android="true" ids="shared_string_options"/>](#options).

<!--
- Search is complete only when you hit &#128269; or space at the end of the word. - doesn't work as it should be
-->

### Options {#options}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menu Options des guides de voyage](@site/static/img/guides/travel_guides_options_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de recherche des guides de voyage](@site/static/img/guides/travel_guides_options_ios.png)

</TabItem>

</Tabs>

Dans ce menu, vous pouvez personnaliser l'apparence des articles lorsque vous travaillez hors ligne. NOTEZ que les guides de voyage *[téléchargés](#download-articles)* ne contiennent pas d'images. Elles n'apparaissent que lorsque vous consultez les articles avec une connexion Internet active.
Dans le menu Options, vous pouvez choisir si vous souhaitez enregistrer les images des articles consultés pour les utiliser lorsque vous êtes hors ligne. Vous pouvez également vider le cache d'images existant ou supprimer l'historique de recherche (ne fonctionne que lors de la recherche dans les *Guides de voyage*).

- &nbsp;**<Translate android="true" ids="wikivoyage_download_pics"/>**. Les images des articles peuvent être téléchargées pour une utilisation hors ligne.
- &nbsp;**<Translate android="true" ids="images_cache"/>**. Vide le cache d'images pour libérer de la mémoire.
- &nbsp;**<Translate android="true" ids="delete_search_history"/>**. Efface l'[historique de recherche](#search).

## Article de voyage {#travel-article}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Article des guides de voyage](@site/static/img/guides/travel_guides_article.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de recherche des guides de voyage](@site/static/img/guides/travel_guides_article_ios.png)

</TabItem>

</Tabs>

Vous pouvez ouvrir un article à partir des options suggérées dans l'*[onglet Explorer](#explore-and-bookmark)* ou en utilisant l'option *[Recherche](#search)*. Lorsque vous ajoutez des attractions touristiques appelées *[Points](#points)* à partir d'un *article de Guide de voyage* à la carte OsmAnd, vous pouvez également ouvrir l'article en utilisant le bouton *Lire l'intégralité* dans la [section description](../map/tracks/track-context-menu.md#description-and-info) du point de passage.

Les commandes suivantes sont situées en haut de l'écran :

- Bouton pour changer la langue de l'article. La langue peut être sélectionnée parmi les options disponibles. La langue du système est utilisée par défaut.
- En utilisant le bouton &#8942;, vous pouvez partager l'article avec vos amis. Le lien s'ouvre dans l'application OsmAnd, le fichier de guides de voyage approprié doit être téléchargé sur l'appareil du destinataire ou sur le site [Wikivoyage](https://www.wikivoyage.org/), si le destinataire n'a pas l'application OsmAnd ou pour les appareils iOS.
- Taper sur la barre de navigation ouvre le *[Menu de navigation des guides de voyage](#navigation-menu)*.

En bas de l'écran se trouvent des boutons tels que :

- [Contenu](#table-of-contents). Ouvre la table des matières de l'article.
- [Points](#points). Affiche les attractions touristiques liées à l'article sur une carte.
- [Signet](#explore-and-bookmark). Permet d'ajouter un article aux signets pour une lecture ultérieure.


### Menu de navigation {#navigation-menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menu Contenu des guides de voyage](@site/static/img/guides/travel_guides_navigation_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de recherche des guides de voyage](@site/static/img/guides/travel_guides_navigation_menu_ios.png)

</TabItem>

</Tabs>

Pour passer d'un article à un autre dans les *articles du Guide de voyage*, utilisez le **Menu de navigation**. Vous pouvez y accéder en tapant sur le champ d'adresse au-dessus de l'image. NOTEZ que les articles dans les Guides de voyage sont regroupés comme suit : *Continent → Région → Pays → Province (région) → Ville*.
Si vous tapez sur la flèche dans le coin supérieur gauche de l'écran, vous irez directement à l'onglet *Explorer* ou *Articles enregistrés* (selon l'onglet que vous avez ouvert précédemment).


### Table des matières {#table-of-contents}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menu Contenu des guides de voyage](@site/static/img/guides/travel_guides_contents_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de recherche des guides de voyage](@site/static/img/guides/travel_guides_contents_menu_ios.png)

</TabItem>

</Tabs>

La plupart des *articles de Guide de voyage* ont la même structure de contenu : *introduction* (images et description du site touristique) et *chapitres suivants*.

- &nbsp;*Comprendre*. Détails sur la culture et les habitudes locales.
- &nbsp;*Comment arriver*. Détails sur la façon de se rendre à certains endroits et combien coûtera cet itinéraire.
- &nbsp;*Voir*. Une liste d'attractions (musées, sites historiques, etc.) avec des descriptions complètes : prix des billets, heures d'ouverture, liens utiles et numéros de téléphone.
- &nbsp;*Faire*. Lieux où passer du temps.
- &nbsp;*Acheter*. Lieux où faire du shopping.
- &nbsp;*Manger*. Établissements de restauration (divisés par budget : petit budget, gamme moyenne, luxe).
- &nbsp;*Boire*. Bars et cafés.
- &nbsp;*Dormir*. Hébergements divisés par budget (petit budget, gamme moyenne, luxe).
- &nbsp;*Aller ensuite*. Lieux les plus proches de Wikivoyage.

### Points {#points}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menu Points des guides de voyage](@site/static/img/guides/travel_guides_points_on_the_map_2.png) ![Menu Points des guides de voyage](@site/static/img/guides/travel_guides_articles_three_dots_point.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de recherche des guides de voyage](@site/static/img/guides/travel_guides_points_on_the_map_1_ios.png) ![Menu de recherche des guides de voyage](@site/static/img/guides/travel_guides_points_on_the_map_2_ios.png)

</TabItem>

</Tabs>

Les *articles de Guide de voyage* contiennent souvent des attractions touristiques regroupées par thème. En tapant une fois sur le bouton *Points* en bas de l'*[Article](#travel-article)*, toutes les attractions liées au thème (lieux de restauration, options d'hébergement, aéroports, magasins, monuments historiques, etc.) seront ajoutées à la carte et pourront être *[gérées comme une trace](#manage-as-gpx-track)*.

Par défaut, les groupes d'attractions sont marqués par certaines icônes : les catégories *Manger et Boire* avec un couteau et une fourchette dans un cercle rouge, *Faire et Voir* avec un appareil photo dans un cercle vert, et autres. Vous pouvez gérer les groupes de points avec &#8942; comme un *[dossier de points de passage](../map/tracks/track-context-menu.md#points--waypoints)*.

:::note
Les points dans les *articles de voyage* font référence aux points de passage sur une trace GPX.
Vous pouvez également *[ajouter des points à la carte](#travel-routes)* dans le menu *Configurer la carte*. Vous pouvez les afficher tous ou sélectionner une catégorie spécifique.
:::


## Itinéraires de voyage {#travel-routes}

*<Translate android="true" ids="shared_string_menu,configure_map,travel_routes"/>*

Une autre façon de parcourir les *Guides de voyage* est de les afficher sur la carte en utilisant le menu *Configurer la carte*. Cette fonctionnalité ne s'applique pas à la capacité fournie par OsmAnd d'utiliser Wikivoyage, elle s'applique uniquement aux traces. Vous pouvez en savoir plus dans notre [blog](https://osmand.net/blog/routes#generated-travel-routes).

![Menu Points des guides de voyage](@site/static/img/guides/travel_guides_travel_routes_path.png) ![Menu Points des guides de voyage](@site/static/img/guides/travel_guides_travel_routes_view.png)


### Itinéraires de voyage et articles sur la carte {#travel-routes-and-articles-on-the-map}

![Menu Points des guides de voyage](@site/static/img/guides/travel_guides_articles_routes_on_the_map.png) ![Menu Points des guides de voyage](@site/static/img/guides/travel_guides_articles_routes_context_menu.png)

Après avoir activé l'affichage des *Itinéraires de voyage* dans le menu *Configurer la carte*, des cercles de différentes couleurs apparaîtront sur la carte. Les oranges représentent les traces d'itinéraires, les articles d'itinéraires et certains points de passage. Tapez sur un itinéraire, un article ou un point spécifique, puis tapez sur le bouton *Télécharger* (&#9047;), et vous pourrez [les gérer comme une trace](#manage-as-gpx-track).

### Guides de voyage personnalisés {#custom-travel-guides}

Nous vous recommandons d'ajouter de nouveaux articles ou des modifications à [Wikivoyage](https://en.wikivoyage.org/). Nous mettons à jour les Guides de voyage environ tous les 6 mois, et vous pouvez télécharger de nouveaux articles. Vous pouvez également créer votre propre *Livre de voyage*. Comment le faire est décrit dans la documentation technique (voir l'article *[Créer un guide de voyage personnalisé](../../technical/map-creation/create_travel_guide.md)*).

<!--
### Collections of tracks {#collections-of-tracks}

https://osmand.net/blog/routes/#generated-travel-routes
-->


## Gérer comme trace GPX {#manage-as-gpx-track}

![Menu Points des guides de voyage 2](@site/static/img/guides/travel_guides_points_on_the_map.png) ![Menu Points des guides de voyage 2](@site/static/img/guides/travel_guides_articles_my_places.png)

Après avoir ajouté les *Guides de voyage* à la carte, les *articles de voyage* peuvent être enregistrés comme une trace GPX et gérés via le menu *[Mes lieux](../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks,icon_group_travel"/>*). Ils peuvent être affichés sur la carte, partagés, renommés, placés dans un autre dossier, exportés ou supprimés.

- &nbsp;Dans *[Aperçu](../map/tracks/track-context-menu.md#overview)*, vous pouvez lire une brève description ou ouvrir l'[article du Guide de voyage](#travel-article) en tapant sur le bouton *Lire l'intégralité*. *Modifier* vous permet de corriger l'article.
- &nbsp;Il n'y a pas d'informations dans la section *[Trace](../map/tracks/track-context-menu.md#altitude--speed-graphs)*, les fichiers GPX des *Guides de voyage* ne contiennent que des points de passage.
- &nbsp;Sous *[Points](../map/tracks/track-context-menu.md#points--waypoints)*, vous voyez des dossiers avec des points regroupés par nom (Acheter, Faire, Boire, etc.).
- &nbsp;Le bouton *[Option](../map/tracks/track-context-menu.md#options)* exécute les mêmes fonctions que dans une trace normale.

:::info
Les *Points* sont stockés dans un [fichier GPX](../../technical/osmand-file-formats/osmand-gpx.md) (un format couramment utilisé pour les traces) en tant que [Points de passage](../map/point-layers-on-map.md#track-waypoints). Le nombre de points (points de passage) contenus dans la trace est marqué à côté de l'icône &#128681; dans le champ de la trace.
Dans le *[menu contextuel de la trace](../map/tracks/track-context-menu.md)* du fichier GPX, vous pouvez trouver des informations générales sur l'article auquel cette trace appartient.
:::

## Combiner avec Wikipédia {#combine-with-wikipedia}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Guides de voyage combinés avec Wikipédia 1](@site/static/img/guides/travel_guides_wikipedia_1.png) ![Guides de voyage combinés avec Wikipédia 2](@site/static/img/guides/travel_guides_wikipedia_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de recherche des guides de voyage](@site/static/img/guides/travel_guides_wikipedia_1_ios.png) ![Menu de recherche des guides de voyage](@site/static/img/guides/travel_guides_wikipedia_2_ios.png)

</TabItem>

</Tabs>

Dans les *articles de Guide de voyage*, vous pouvez trouver des informations utiles sur les attractions touristiques (informations de contact, liens web, prix, etc.). De nombreux articles ont un bouton *Wikipédia* qui permet d'ouvrir un *[article Wikipédia](../plugins/wikipedia.md)* (en ligne ou hors ligne) sur le lieu d'intérêt.

Dans certains cas, l'*[onglet Signets](#explore-and-bookmark)* d'OsmAnd vous invitera à télécharger la [couche cartographique Wikipédia](../plugins/wikipedia.md#download-wikipedia-packages-download-wikipedia-packages) pour parcourir les articles connexes hors ligne.

![Guides de voyage télécharger Wikipédia](@site/static/img/guides/travel_guides_wikipedia_download.png)

:::info NOTE
Le [plugin Wikipédia](../plugins/wikipedia.md) est une [fonctionnalité payante](../purchases/index.md) de l'application OsmAnd.
:::

## Articles connexes {#related-articles}

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres globaux](../../user/personal/global-settings.md)
- [Cartes vectorielles (Styles de carte)](../../user/map/vector-maps.md)

> *Dernière mise à jour : Janvier 2025*