---
source-hash: 13f229400445a81db544afbadce1fb85746267eecddcd8299384d384de2a58b5
sidebar_position: 3
title: Historique de recherche
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Vue d'ensemble {#overview}

L' *Historique de recherche* est un enregistrement de toutes les recherches et de tous les lieux que vous avez saisis ou recherchés dans l'application pendant la période d'utilisation. Cet outil vous permet de trouver et d'accéder facilement aux lieux précédemment recherchés, ce qui facilite la navigation et vous fait gagner du temps.

OsmAnd propose plusieurs façons de consulter votre historique de recherche.

- Le [bouton de recherche](../widgets/map-buttons.md#search) est toujours affiché sur la carte, et en appuyant dessus, vous accédez à l'[écran général](#how-to-use) de l'outil.
- Allez dans le *Menu* principal d'Android *→ Recherche → Onglet Historique*.
- Lorsque vous vous préparez à démarrer un itinéraire, appuyez sur *Navigation → Définir la destination → Champ de recherche*.
- Le bloc d'informations dans le menu de navigation de la [préparation d'itinéraire](../navigation/setup/route-navigation.md#navigation-menu) affiche une liste des points de destination récents, qui font également partie de l'historique de recherche.
- L'historique de recherche est disponible dans [Android Auto](../navigation/auto-car.md#search) et [CarPlay](../navigation/car-play.md#search).


## Comment l'utiliser {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Historique de recherche](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Historique de recherche](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

L'historique de recherche sert à fournir des informations pertinentes sur vos actions précédentes.

- *Re-recherche*. Vous pouvez utiliser l'historique de recherche pour rechercher à nouveau des lieux ou des adresses précédemment recherchés sans avoir à ressaisir la requête.

- *Accès rapide aux lieux fréquemment visités*. Si vous visitez fréquemment certains lieux, tels que votre domicile, votre lieu de travail ou vos lieux préférés, l'Historique de recherche enregistre ces lieux, vous offrant un accès rapide à ceux-ci.

- *Suivi des trajets précédents*. L'historique de recherche peut être utile pour suivre les trajets et les itinéraires précédents. Vous pouvez suivre les itinéraires que vous avez déjà empruntés, ou [planifier votre prochain itinéraire](../plan-route/create-route.md) en fonction des précédents.

- *Rechercher des lieux sur une certaine période*. Pour l'application Android, vous devez utiliser un appui long, puis trouver le mois où vous avez effectué le trajet, quitter le menu de suppression et définir le nom dans le champ de recherche. Pour l'application iOS, la liste de l'historique de recherche est déjà divisée en blocs par mois.

- *Supprimer des entrées*. L'Historique de recherche permet de [supprimer](#delete) les entrées précédentes, ce qui peut être utile pour la confidentialité ou pour garder votre historique organisé.


## Éléments de l'historique {#history-items}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Historique de recherche](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Historique de recherche](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Chaque champ de la liste de l'Historique de recherche contient certaines des **informations** disponibles pour l'application.

- Une icône qui identifie le type ou la catégorie de l'objet trouvé.
- Le nom de l'objet, l'emplacement, l'adresse ou la requête de type. Pour les traces, des informations sur la distance, le nombre de points de cheminement et le temps sont affichées.
- Distance de votre position actuelle au point et direction par boussole.


### Ordre des éléments {#order-of-items}

- **Éléments récents**. Les requêtes ou les emplacements les plus récents sont affichés en haut de la liste. Cela permet un accès rapide aux éléments récemment utilisés.
- **Ordre chronologique**. Les éléments de la liste de l'Historique de recherche sont classés par ordre chronologique, en commençant par les entrées les plus anciennes et en terminant par les plus récentes. Les anciens éléments descendent progressivement dans la liste à mesure que de nouvelles entrées sont ajoutées, à moins que les anciens éléments de l'historique de recherche n'aient été utilisés, auquel cas ils seront déplacés en haut de la liste.
- Sous iOS, la liste est triée par mois.

### Type d'objets {#type-of-objects}

Les **types d'objets** suivants sont inclus dans la liste de l'Historique de recherche :

- **Lieux**. Il peut s'agir d'une adresse, d'un nom d'entreprise, d'un numéro de route, de coordonnées, de marqueurs, de points d'intérêt, de notes OSM ou de lieux sur lesquels vous avez appuyé sur la carte.
- **Traces et points de cheminement**. La liste comprend les traces que vous avez créées, enregistrées ou téléchargées et que vous avez utilisées dans des itinéraires précédents, ainsi que les points de cheminement si vous y avez navigué séparément.


## Actions {#actions}

Dans l'outil Historique de recherche, vous pouvez [supprimer](#delete) les requêtes inutiles, toutes à la fois ou par éléments individuels. Vous pouvez utiliser l'[exportation](#export-and-share) de l'historique. L'application Android offre une action supplémentaire de [partage](#share-android) des éléments de recherche sous forme de fichier [GPX](../../technical/osmand-file-formats/osmand-gpx.md).

Vous pouvez **désactiver ou activer** l'affichage de l'historique de recherche complet. Dans ce cas, les requêtes ne sont pas supprimées de l'appareil. Sous Android, l'interrupteur se trouve sur l'écran principal de l'outil, dans l'[onglet Historique](#overview). Sous iOS, il se trouve dans *Menu → Paramètres → Paramètres OsmAnd → Historique → Historique de recherche*.


### Supprimer {#delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Historique de recherche](@site/static/img/search/history_search_delete_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Historique de recherche](@site/static/img/search/history_search_delete_ios.png)

</TabItem>

</Tabs>

Après une longue utilisation d'OsmAnd, la liste de l'*Historique de recherche* peut devenir trop longue, de sorte que la suppression des requêtes de recherche aide à vider la liste. Vous pouvez supprimer les requêtes qui ne sont plus pertinentes ou que vous n'avez plus l'intention d'utiliser à l'avenir, ce qui facilite la recherche dans la liste, surtout lorsque vous devez trouver rapidement des requêtes de recherche spécifiques.

Vous devez **appuyer longuement sur l'un des éléments de requête de la liste** pour ouvrir l'écran de suppression.

- *Sélectionner ou désélectionner des éléments aléatoires* - appuyez sur l'élément requis dans la liste.
- *Sélectionner la période disponible pour la suppression*, comme le jour, les 7 derniers jours ou le mois - cochez la case avec le sous-titre dans la liste.
- *Vous pouvez supprimer l'historique entier* en une seule fois en appuyant sur le bouton *Tout sélectionner* en bas de l'écran.
- *Menu → Paramètres → Paramètres OsmAnd → Historique → Actions*. Cette section contient le bouton **Supprimer tout l'historique**.


### Exporter et partager {#export-and-share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Paramètres généraux Historique Android](@site/static/img/personal/profiles/general_settings_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Paramètres généraux Historique iOS](@site/static/img/personal/profiles/history_settings_ios.png)

</TabItem>

</Tabs>

Plusieurs options sont disponibles pour exporter l'historique de recherche. Tous les fichiers sont exportés au format `.osf` (fichier de paramètres OsmAnd).

1. *Menu → Paramètres → Paramètres OsmAnd → Historique → Historique de recherche*.
    L'exportation est disponible via le menu des paramètres OsmAnd. Pour Android, ce chemin vous mène à l'écran de suppression, où le [partage de l'historique](#share-android) est disponible. Dans le cas d'iOS, vous pouvez sélectionner des éléments individuels ou l'historique entier sur l'écran, et après avoir appuyé sur le bouton *Exporter*, accéder au menu *Sauvegarde locale*.

2. *Menu → Paramètres → Importer/Exporter → Sauvegarder en tant que fichier* (Android).
    *Menu → Paramètres → Paramètres OsmAnd → Historique → Actions → Exporter* (iOS).
    Appuyer sur ces éléments vous mène au menu *Importer/Exporter* (Android) ou *Sauvegarde locale* (iOS). Développez la liste *Mes lieux* et trouvez *Historique de recherche*. Toutes les requêtes sont exportées dans un seul fichier à la fois.

3. *Menu → Paramètres → Importer/Exporter → Exporter vers un fichier* (Android).
    *Menu → Paramètres → Sauvegarde locale → Sauvegarder en tant que fichier* (iOS).
    Vous pouvez lire plus de détails dans l'article [Importer/Exporter](../personal/import-export.md#export).

4. [OsmAnd Cloud](../personal/osmand-cloud.md#select-data-to-back-up)
    Vous pouvez utiliser le Cloud pour sauvegarder votre historique de recherche. Dans le menu *Modifications locales* ou *Paramètres → Sauvegarder les données → Mes lieux → Historique de recherche*.

![Historique des paramètres](@site/static/img/search/history_search_share_andr.png)

L'exportation d'éléments ou de l'historique de recherche complet peut être utile dans les cas suivants :

- *Sauvegarde*. Vous pouvez sauvegarder votre historique de recherche pour enregistrer les informations avant de les supprimer et les restaurer si nécessaire.
- *Transfert vers un autre appareil*. Lorsque vous changez d'appareil, vous pouvez utiliser la fonction d'exportation ou le Cloud pour transférer votre historique de recherche vers un nouvel appareil sans avoir à rechercher et à saisir à nouveau les données.
- *Analyser et traiter les données*. Vous pouvez exporter votre historique de recherche pour l'analyse des données ou l'utiliser dans d'autres applications.
- [Partager](#share-android) l'historique de recherche avec d'autres utilisateurs d'OsmAnd.


#### Partager (Android) {#share-android}

![Historique des paramètres](@site/static/img/search/history_search_share_andr.png)

Les étapes pour partager des éléments de l'historique de recherche sont similaires à l'[exportation](#export-and-share), à la différence que vous exportez l'historique entier en une seule fois sous forme de fichier [osf](../../technical/osmand-file-formats/osmand-osf.md), tandis que vous pouvez partager des fichiers individuels sélectionnés au format gpx.

Sur l'écran de [suppression](#delete), sélectionnez les éléments requis dans la liste de l'Historique de recherche. Dans le coin supérieur droit de l'écran, il y a une icône indiquant le partage. Sélectionnez une application ou une action disponible dans la liste à partager.


## Articles connexes {#related-articles}

- [Rechercher tout](./search-all.md)
- [Rechercher une adresse](./search-address.md)
- [Rechercher un POI](./search-poi.md)
- [Rechercher des coordonnées](./search-coordinates.md)


> *Dernière mise à jour : juillet 2024*