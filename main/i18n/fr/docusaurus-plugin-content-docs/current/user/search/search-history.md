---
source-hash: b0e4660605b0cdfdfcfc653e1f8929974cb654b66c0c55fbc588b89e37d05091
sidebar_position: 3
title:  Historique de recherche
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

*L'historique de recherche* est un enregistrement de toutes les recherches et de tous les lieux que vous avez saisis ou recherchés dans l'application au cours de la période d'utilisation. Cet outil vous permet de retrouver et d'accéder facilement aux lieux précédemment recherchés, ce qui facilite la navigation et vous fait gagner du temps.

OsmAnd offre plusieurs moyens de consulter votre historique de recherche.  

- Le [bouton Rechercher](../widgets/map-buttons.md#search) est toujours affiché sur la carte, et un appui dessus vous amènera à l'[écran général](#how-to-use) de l'outil.
- Allez dans le *Menu principal d'Android → Rechercher → Onglet Historique*.
- Lors de la préparation d'un itinéraire, appuyez sur *Navigation → Définir la destination → Champ de recherche*.
- Le bloc d'information dans le menu de navigation de la [préparation d'itinéraire](../navigation/setup/route-navigation.md#navigation-menu) affiche une liste des points de destination récents, qui font également partie de l'historique de recherche.
- L'historique de recherche est disponible dans [Android Auto](../navigation/auto-car.md#search) et [CarPlay](../navigation/car-play.md#search).


## Comment utiliser {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Historique de recherche](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Historique de recherche](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

L'historique de recherche sert à fournir des informations pertinentes sur vos actions précédentes.

- *Re-rechercher*. Vous pouvez utiliser l'historique de recherche pour rechercher à nouveau des lieux ou des adresses précédemment recherchés sans avoir à saisir de nouveau la requête.  

- *Accès rapide aux lieux fréquemment visités*. Si vous visitez fréquemment certains lieux, comme votre domicile, votre travail ou vos endroits préférés, l'historique de recherche enregistre ces lieux, offrant un accès rapide à ceux-ci.  

- *Suivre les trajets précédents*. L'historique de recherche peut être utile pour suivre les trajets et les itinéraires précédents. Vous pouvez suivre les itinéraires que vous avez déjà empruntés, ou [planifier votre prochain itinéraire](../plan-route/create-route.md) en vous basant sur les précédents.  

- *Rechercher des lieux sur une certaine période*. Pour l'application Android, vous devez effectuer un appui long, puis trouver le mois au cours duquel vous avez effectué le trajet, quitter le menu de suppression et saisir le nom dans le champ de recherche. Pour l'application iOS, la liste de l'historique de recherche est déjà divisée en blocs par mois.

- *Supprimer des entrées*. L'historique de recherche offre la possibilité de [supprimer](#delete) les entrées précédentes, ce qui peut être utile pour la confidentialité ou pour garder votre historique organisé.


## Éléments de l'historique {#history-items}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Historique de recherche](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Historique de recherche](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Chaque champ de la liste de l'historique de recherche contient certaines des **informations** disponibles pour l'application.

- Une icône qui identifie le type ou la catégorie de l'objet trouvé.
- Le nom de l'objet, le lieu, l'adresse ou la requête de type. Pour les traces, des informations sur la distance, le nombre de points de cheminement et le temps sont affichées.
- Distance de votre position actuelle au point et direction par boussole.


### Ordre des éléments {#order-of-items}

- **Éléments récents**. Les requêtes ou les lieux les plus récents sont affichés en haut de la liste. Cela permet un accès rapide aux éléments récemment utilisés.
- **Ordre chronologique**. Les éléments de la liste de l'historique de recherche sont classés par ordre chronologique, en commençant par les entrées les plus anciennes ou les premières et en terminant par les plus récentes ou les dernières. Les anciens éléments descendent progressivement dans la liste à mesure que de nouvelles entrées sont ajoutées, à moins que les anciens éléments de l'historique de recherche n'aient été utilisés, auquel cas ils seront déplacés en haut de la liste.
- Sous iOS, la liste est triée par mois.

### Type d'objets {#type-of-objects}

Les **types d'objets** suivants entrent dans la liste de l'historique de recherche :

- **Lieux**. Il peut s'agir d'une adresse, d'un nom d'entreprise, d'un numéro de route, de coordonnées, de marqueurs, de points d'intérêt, de notes OSM ou de lieux sur lesquels vous avez appuyé sur la carte.
- **Traces et points de cheminement**. La liste comprend les traces que vous avez créées, enregistrées ou téléchargées et que vous avez utilisées dans des itinéraires précédents, ainsi que les points de cheminement si vous y avez navigué séparément.


## Actions {#actions}

Dans l'outil Historique de recherche, vous pouvez [supprimer](#delete) les requêtes inutiles, toutes à la fois ou par éléments individuels. Vous pouvez utiliser l'[exportation](#export-and-share) de l'historique. L'application Android offre une action supplémentaire de [partage](#share-android) des éléments de recherche sous forme de fichier [GPX](../../technical/osmand-file-formats/osmand-gpx.md).  

Vous pouvez **désactiver ou activer** l'affichage de l'ensemble de l'historique de recherche. Dans ce cas, les requêtes ne sont pas supprimées de l'appareil. Sous Android, le commutateur se trouve sur l'écran principal de l'outil dans l'[onglet Historique](#overview). Sous iOS, il se trouve dans *Menu → Paramètres → Paramètres OsmAnd → Historique → Historique de recherche*.


### Supprimer {#delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Suppression de l'historique de recherche](@site/static/img/search/history_search_delete_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Suppression de l'historique de recherche](@site/static/img/search/history_search_delete_ios.png)

</TabItem>

</Tabs>

Après une longue utilisation d'OsmAnd, la liste de l'*Historique de recherche* peut devenir trop longue, donc la suppression des requêtes de recherche aide à nettoyer la liste. Vous pouvez supprimer les requêtes qui ne sont plus pertinentes ou que vous n'avez plus l'intention d'utiliser à l'avenir, ce qui facilite la recherche dans la liste, surtout lorsque vous devez trouver rapidement des requêtes de recherche spécifiques.

Vous devez **appuyer longuement sur l'un des éléments de la requête dans la liste** pour ouvrir l'écran de suppression.

- *Sélectionner ou désélectionner des éléments au hasard* - appuyez sur l'élément requis dans la liste.
- *Sélectionner la période disponible pour la suppression*, comme le jour, les 7 derniers jours ou le mois - cochez la case avec le sous-titre dans la liste.
- *Vous pouvez supprimer tout l'historique* en une seule fois en appuyant sur le bouton *Tout sélectionner* en bas de l'écran.
- *Menu → Paramètres → Paramètres OsmAnd → Historique → Actions*. Cette section contient le bouton **Supprimer tout l'historique**.


### Exporter et Partager {#export-and-share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Paramètres généraux Historique Android](@site/static/img/personal/profiles/general_settings_history_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Allez à : *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Paramètres généraux Historique IOS](@site/static/img/personal/profiles/history_settings_ios.png)  

</TabItem>

</Tabs>

Il existe plusieurs options disponibles pour exporter l'historique de recherche. Tous les fichiers sont exportés au format `.osf` (Fichier de paramètres OsmAnd).  

1. *Menu → Paramètres → Paramètres OsmAnd → Historique → Historique de recherche*.  
    L'exportation est disponible via le menu des paramètres d'OsmAnd. Pour Android, suivre ce chemin vous amène à l'écran de suppression, où le [Partage de l'historique](#share-android) est disponible. Dans le cas d'iOS, vous pouvez sélectionner des éléments individuels ou l'historique entier sur l'écran, et après avoir appuyé sur le bouton *Exporter*, allez au menu *Sauvegarde locale*.

2. *Menu → Paramètres → Paramètres OsmAnd → Historique → Actions → Sauvegarder en tant que fichier* (Android).  
    *Menu → Paramètres → Paramètres OsmAnd → Historique → Actions → Exporter* (iOS).  
    Appuyer sur ces éléments vous amène au menu *Importer/Exporter* (Android) ou *Sauvegarde locale* (iOS). Développez la liste *Mes lieux* et trouvez *Historique de recherche*. Toutes les requêtes sont exportées dans un seul fichier à la fois.  

3. *Menu → Paramètres → Importer/Exporter → Exporter vers un fichier* (Android).  
    *Menu → Paramètres → Sauvegarde locale → Sauvegarder en tant que fichier* (iOS).  
    Vous pouvez lire plus de détails dans l'article [Importer/Exporter](../personal/import-export.md#export).  

4. [OsmAnd Cloud](../personal/osmand-cloud.md#select-data-to-back-up)  
    Vous pouvez utiliser le Cloud pour sauvegarder votre historique de recherche. Dans le menu *Modifications locales* ou *Paramètres → Sauvegarder les données → Mes lieux → Historique de recherche*.  

![Paramètres de l'historique](@site/static/img/search/history_search_share_andr.png)  

L'exportation d'éléments ou de l'ensemble de l'historique de recherche peut être utile dans les cas suivants :

- *Sauvegarde*. Vous pouvez sauvegarder votre historique de recherche pour enregistrer les informations avant de les supprimer et les restaurer si nécessaire.
- *Transfert vers un autre appareil*. Lorsque vous changez d'appareil, vous pouvez utiliser la fonction d'exportation ou le Cloud pour transférer votre historique de recherche vers un nouvel appareil sans avoir à rechercher et à saisir à nouveau les données.
- *Analyser et traiter les données*. Vous pouvez exporter votre historique de recherche pour l'analyse de données ou l'utiliser dans d'autres applications.
- [Partager](#share-android) l'historique de recherche avec d'autres utilisateurs d'OsmAnd.


### Partager (Android) {#share-android}

![Paramètres de l'historique](@site/static/img/search/history_search_share_andr.png)

Les étapes pour partager des éléments de l'historique de recherche sont similaires à l'[exportation](#export-and-share), à la différence que vous exportez l'historique entier en une seule fois sous forme de fichier [osf](../../technical/osmand-file-formats/osmand-osf.md), tandis que vous pouvez partager des fichiers sélectionnés individuellement au format gpx.  

Sur l'écran de [suppression](#delete), sélectionnez les éléments requis dans la liste de l'historique de recherche. Dans le coin supérieur droit de l'écran, il y a une icône indiquant le partage. Sélectionnez une application ou une action disponible dans la liste pour partager.


## Articles connexes {#related-articles}

- [Rechercher tout](./search-all.md)
- [Rechercher une adresse](./search-address.md)
- [Rechercher un POI](./search-poi.md)
- [Rechercher des coordonnées](./search-coordinates.md)