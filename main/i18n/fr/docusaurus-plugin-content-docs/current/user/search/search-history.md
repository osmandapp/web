---
source-hash: e750c3ad7de0205a9500f893c56be0ee9d096f570987bbd67c2ad004df8b1816
sidebar_position: 3
title:  Exploration de recherche
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

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

L'onglet **Exploration** de l'outil Recherche vous aide à découvrir des lieux populaires autour de vous et à revenir rapidement aux endroits que vous avez déjà recherchés ou vers lesquels vous avez navigué. Il contient deux sections : [Lieux populaires à proximité](#popular-places-nearby) et [Historique](#history-items).

*L'historique* est un enregistrement de toutes les recherches et destinations de navigation que vous avez saisies ou recherchées dans l'application au cours de la période d'utilisation. Cet outil vous permet de retrouver et d'accéder facilement aux lieux précédemment recherchés, ce qui facilite la navigation et vous fait gagner du temps.

OsmAnd offre plusieurs moyens de consulter votre historique.

- Le [bouton Rechercher](../widgets/map-buttons.md#search) est toujours affiché sur la carte, et un appui dessus vous amènera à l'[écran général](#how-to-use) de l'outil.
- Allez dans le menu principal *Menu → Rechercher → Onglet Exploration*.
- Lors de la préparation d'un itinéraire, appuyez sur *Navigation → Définir la destination → Champ de recherche*.
- Le bloc d'information dans le menu de navigation de la [préparation d'itinéraire](../navigation/setup/route-navigation.md#navigation-menu) affiche une liste des points de destination récents, qui font également partie de l'historique de recherche.
- L'historique de recherche est disponible dans [Android Auto](../navigation/auto-car.md#search).

</TabItem>

<TabItem value="ios" label="iOS">

*L'historique de recherche* est un enregistrement de toutes les recherches et de tous les lieux que vous avez saisis ou recherchés dans l'application au cours de la période d'utilisation. Cet outil vous permet de retrouver et d'accéder facilement aux lieux précédemment recherchés, ce qui facilite la navigation et vous fait gagner du temps.

OsmAnd offre plusieurs moyens de consulter votre historique de recherche.  

- Le [bouton Rechercher](../widgets/map-buttons.md#search) est toujours affiché sur la carte. Appuyez dessus pour ouvrir l'[écran général](#how-to-use) de l'outil, puis sélectionnez l'onglet *Historique*.
- Lors de la préparation d'un itinéraire, appuyez sur *Navigation → Définir la destination → Champ de recherche*.
- Le bloc d'information dans le menu de navigation de la [préparation d'itinéraire](../navigation/setup/route-navigation.md#navigation-menu) affiche une liste des points de destination récents, qui font également partie de l'historique de recherche.
- L'historique de recherche est disponible dans [CarPlay](../navigation/car-play.md#search).

</TabItem>

</Tabs>


## Comment utiliser {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Exploration de recherche](@site/static/img/search/explore_search_android.webp)

L'onglet **Exploration** s'ouvre lorsque vous ouvrez l'outil Recherche. L'onglet Exploration sert à fournir des informations pertinentes sur les lieux autour de vous et sur vos actions précédentes.

- *Découvrir des lieux à proximité*. La section [Lieux populaires à proximité](#popular-places-nearby) affiche des points de repère et des attractions connus autour de vous, afin que vous puissiez trouver des endroits intéressants sans saisir de requête.
- *Re-rechercher*. Vous pouvez utiliser l'historique de recherche pour rechercher à nouveau des lieux ou des adresses précédemment recherchés sans avoir à saisir de nouveau la requête.
- *Accès rapide aux lieux fréquemment visités*. Si vous visitez fréquemment certains lieux, comme votre domicile, votre travail ou vos endroits préférés, l'historique de recherche enregistre ces lieux, offrant un accès rapide à ceux-ci.
- *Suivre les trajets précédents*. L'historique de recherche peut être utile pour suivre les trajets et les itinéraires précédents. Vous pouvez suivre les itinéraires que vous avez déjà empruntés, ou [planifier votre prochain itinéraire](../plan-route/create-route.md) en vous basant sur les précédents.
- *Rechercher des lieux sur une certaine période*. Sur l'écran Historique, les éléments triés par *Récents* sont regroupés par période : *Aujourd'hui*, *Hier*, *La semaine dernière*, puis par mois. Pour trouver un élément spécifique, appuyez sur le titre *Historique* en haut de l'écran et saisissez son nom.
- *Supprimer des entrées*. L'historique de recherche offre la possibilité de [supprimer](#delete) les entrées précédentes, ce qui peut être utile pour la confidentialité ou pour garder votre historique organisé.

</TabItem>

<TabItem value="ios" label="iOS">

![Historique de recherche](@site/static/img/search/history_search_ios.png)

L'historique de recherche sert à fournir des informations pertinentes sur vos actions précédentes.

- *Re-rechercher*. Vous pouvez utiliser l'historique de recherche pour rechercher à nouveau des lieux ou des adresses précédemment recherchés sans avoir à saisir de nouveau la requête.
- *Accès rapide aux lieux fréquemment visités*. Si vous visitez fréquemment certains lieux, comme votre domicile, votre travail ou vos endroits préférés, l'historique de recherche enregistre ces lieux, offrant un accès rapide à ceux-ci.  
- *Suivre les trajets précédents*. L'historique de recherche peut être utile pour suivre les trajets et les itinéraires précédents. Vous pouvez suivre les itinéraires que vous avez déjà empruntés, ou [planifier votre prochain itinéraire](../plan-route/create-route.md) en vous basant sur les précédents.  
- *Rechercher des lieux sur une certaine période*. La liste de l'historique de recherche est déjà divisée en blocs par mois.
- *Supprimer des entrées*. L'historique de recherche offre la possibilité de [supprimer](#delete) les entrées précédentes, ce qui peut être utile pour la confidentialité ou pour garder votre historique organisé.

</TabItem>

</Tabs>


## Lieux populaires à proximité {#popular-places-nearby}

<InfoAndroidOnly/>

![Lieux populaires à proximité](@site/static/img/search/popular_places_nearby.webp)

La section **Lieux populaires à proximité** affiche une liste déroulante de points de repère et d'attractions connus près de votre position. Chaque élément peut inclure le nom du lieu, sa catégorie, la distance et la direction, ainsi qu'une image d'aperçu si disponible. Appuyez sur *Afficher tout* pour ouvrir la liste complète ou sur *Afficher sur la carte* pour afficher ces lieux sur la carte.

Pour plus de détails, consultez l'article [Lieux populaires](../map/popular_places.md#explore-in-search).


## Éléments de l'historique {#history-items}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Section Historique](@site/static/img/search/history_section_list.webp)

La section **Historique** de l'onglet Exploration affiche jusqu'à 25 éléments les plus récents. Appuyez sur le titre de la section pour la réduire ou l'agrandir. Appuyez sur *Afficher tout* pour ouvrir l'écran *Historique* complet.

Si les options *Historique de recherche* et *Historique de navigation* sont toutes deux désactivées, la section affiche la carte *L'historique est désactivé*. Appuyez sur *Ouvrir les paramètres de l'historique* pour les activer.

Chaque champ de la liste de l'historique contient certaines des **informations** disponibles pour l'application.

- Une icône qui identifie le type ou la catégorie de l'objet trouvé.
- Le nom de l'objet, le lieu, l'adresse ou la requête de type. Pour les traces, des informations sur la distance, le nombre de points de cheminement et le temps sont affichées.

</TabItem>

<TabItem value="ios" label="iOS">

![Historique de recherche](@site/static/img/search/history_search_ios.png)

Chaque champ de la liste de l'historique de recherche contient certaines des **informations** disponibles pour l'application.

- Une icône qui identifie le type ou la catégorie de l'objet trouvé.
- Le nom de l'objet, le lieu, l'adresse ou la requête de type. Pour les traces, des informations sur la distance, le nombre de points de cheminement et le temps sont affichées.
- Distance de votre position actuelle au point et direction par boussole.

</TabItem>

</Tabs>


### Trier et filtrer {#sort-and-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Section Historique](@site/static/img/search/history_section_android.webp) ![Section Historique](@site/static/img/search/history_section_2_android.webp)

Sur l'écran *Historique* complet, vous pouvez trier et filtrer vos éléments d'historique à l'aide des options suivantes :

1. **Trier par** :
    - *Récents* — affiche d'abord les éléments ajoutés le plus récemment. Lorsque cette option est sélectionnée, les éléments sont regroupés par période, comme Aujourd'hui, Hier, La semaine dernière et les périodes antérieures.
    - *Les plus proches* — trie les éléments par leur distance par rapport à votre position actuelle.
    - *Les plus proches du centre de la carte* — trie les éléments par leur distance par rapport au centre actuel de la carte. Lorsque l'une des options de tri par distance est sélectionnée, les groupes temporels ne sont pas affichés.

2. **Type** — filtre les éléments d'historique par :
    - *Tous* — affiche tous les éléments d'historique disponibles.
    - *Recherche* — affiche les éléments de votre historique de recherche.
    - *Navigation* — affiche les éléments de votre historique de navigation.

Si l'*Historique de recherche* ou l'*Historique de navigation* est désactivé dans les paramètres de l'historique, le filtre *Type* n'est pas disponible.

3. **Filtres de catégorie** — filtre les éléments d'historique par catégorie. Les filtres de catégorie disponibles dépendent des types d'éléments présents dans votre historique. Par exemple, vous pouvez voir des catégories telles que POI, Trace, Lieu, Favori ou Adresse. Vous pouvez sélectionner plusieurs catégories à la fois.

4. **Paramètres** — appuyez sur l'icône d'engrenage dans le coin supérieur droit pour ouvrir les paramètres de l'historique, où vous pouvez activer ou désactiver *Historique de recherche*, *Historique de navigation* et *Historique des marqueurs de carte*, sauvegarder l'historique sous forme de fichier ou effacer tout l'historique.

</TabItem>

<TabItem value="ios" label="iOS">

- **Éléments récents**. Les requêtes ou les lieux les plus récents sont affichés en haut de la liste. Cela permet un accès rapide aux éléments récemment utilisés.
- **Ordre chronologique**. Les éléments de la liste de l'historique de recherche sont classés par ordre chronologique, en commençant par les entrées les plus anciennes ou les premières et en terminant par les plus récentes ou les dernières. Les anciens éléments descendent progressivement dans la liste à mesure que de nouvelles entrées sont ajoutées, à moins que les anciens éléments de l'historique de recherche n'aient été utilisés, auquel cas ils seront déplacés en haut de la liste.
- La liste est triée par mois.

</TabItem>

</Tabs>

### Type d'objets {#type-of-objects}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Les **types d'objets** suivants entrent dans la liste de l'historique de recherche :

- **Lieux**. Il peut s'agir d'une adresse, d'un nom d'entreprise, d'un numéro de route, de coordonnées, de marqueurs, de points d'intérêt, de notes OSM ou de lieux sur lesquels vous avez appuyé sur la carte.
- **Traces et points de cheminement**. La liste comprend les traces que vous avez créées, enregistrées ou téléchargées et que vous avez utilisées dans des itinéraires précédents, ainsi que les points de cheminement si vous y avez navigué séparément.
- **Favoris et photos**. Points favoris et notes photo que vous avez ouverts.
- **Destinations**. Points vers lesquels vous avez navigué.

</TabItem>

<TabItem value="ios" label="iOS">

Les **types d'objets** suivants entrent dans la liste de l'historique de recherche :

- **Lieux**. Il peut s'agir d'une adresse, d'un nom d'entreprise, d'un numéro de route, de coordonnées, de marqueurs, de points d'intérêt, de notes OSM ou de lieux sur lesquels vous avez appuyé sur la carte.
- **Traces et points de cheminement**. La liste comprend les traces que vous avez créées, enregistrées ou téléchargées et que vous avez utilisées dans des itinéraires précédents, ainsi que les points de cheminement si vous y avez navigué séparément.

</TabItem>

</Tabs>


## Actions {#actions}

Dans l'outil Historique de recherche, vous pouvez [supprimer](#delete) les requêtes inutiles, toutes à la fois ou par éléments individuels. Vous pouvez utiliser l'[exportation](#export-and-share) de l'historique. L'application Android offre une action supplémentaire de [partage](#share-android) des éléments de recherche sous forme de fichier [GPX](../../technical/osmand-file-formats/osmand-gpx.md).  

Vous pouvez **désactiver ou activer** l'affichage de l'ensemble de l'historique de recherche. Dans ce cas, les requêtes ne sont pas supprimées de l'appareil. Sous Android, le commutateur se trouve en haut de l'écran de [suppression](#delete) et dans les paramètres de l'historique, accessibles via l'icône d'engrenage sur l'écran [Historique](#sort-and-filter). Sous iOS, il se trouve dans *Menu → Paramètres → Paramètres OsmAnd → Historique → Historique de recherche*.


### Supprimer {#delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Historique de recherche](@site/static/img/search/history_search_delete_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Historique de recherche](@site/static/img/search/history_search_delete_ios.png)

</TabItem>

</Tabs>

Après une longue utilisation d'OsmAnd, la liste de l'*Historique de recherche* peut devenir trop longue, donc la suppression des requêtes de recherche aide à nettoyer la liste. Vous pouvez supprimer les requêtes qui ne sont plus pertinentes ou que vous n'avez plus l'intention d'utiliser à l'avenir, ce qui facilite la recherche dans la liste, surtout lorsque vous devez trouver rapidement des requêtes de recherche spécifiques.

Vous devez **appuyer longuement sur l'un des éléments de la requête dans la liste** pour ouvrir l'écran de suppression.

- *Sélectionner ou désélectionner des éléments au hasard* - appuyez sur l'élément requis dans la liste.
- *Sélectionner la période disponible pour la suppression*, comme le jour, les 7 derniers jours ou le mois - cochez la case avec le sous-titre dans la liste.
- *Vous pouvez supprimer tout l'historique* en une seule fois en appuyant sur le bouton *Tout sélectionner* en bas de l'écran.
- *Menu → Paramètres → Paramètres OsmAnd → Historique → Actions*. Cette section contient le bouton **Effacer tout l'historique** (*Android*)/**Supprimer tout l'historique** (*iOS*).


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