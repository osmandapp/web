---
source-hash: 263596e04f0705ae1c8c57f5afa60aa2cbe3498370962ed69729ec73d60d14f6
sidebar_position: 3
title:  Saisie de coordonnées
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



<InfoAndroidOnly />

## Aperçu {#overview}

La *saisie de coordonnées* est un outil simple et facile à utiliser pour créer des points de passage en spécifiant leur position géographique. Cette fonction peut être utile pour naviguer vers certains lieux que vous ne connaissez que par leurs coordonnées : les points ajoutés peuvent être [enregistrés](#save-as-track) sous forme de trace GPX et utilisés ultérieurement pour la [navigation GPX](../navigation/setup/gpx-navigation.md) ou la [navigation par marqueurs](../navigation/setup/markers-navigation.md#add-gpx).

![Aperçu de la saisie de coordonnées](@site/static/img/plan-route/coordinates_input/coordinates_input_overview.png)

## Comment utiliser {#how-to-use}

Vous pouvez créer des points de passage à partir du menu *[Marqueurs de carte](../personal/markers.md#actions)* ou de [Mes lieux](../personal/myplaces.md) (voir les captures d'écran). Veuillez suivre ces chemins pour accéder à l'option de saisie de coordonnées :
- *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → bouton Terre en bas de l'écran*
- *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,coordinate_input"/>*

![Saisie de coordonnées comment trouver](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_1.png) ![Saisie de coordonnées comment trouver](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_2.png)

Après avoir ouvert l'écran de saisie de coordonnées :

- &nbsp;Assurez-vous que les [unités de mesure](#coordinates-format) correctes sont utilisées. Si ce n'est pas le cas, modifiez le format des coordonnées dans le menu [Options](#options).
- &nbsp;Entrez les coordonnées du point à l'aide du [modèle](#add-a-point). Après avoir appuyé sur le bouton *[Ajouter](#add-a-point)*, votre point sera ajouté à la *[liste des points](#points-list)*. Si nécessaire, vous pouvez saisir des points supplémentaires.
- &nbsp;Enregistrez votre ou vos points sous forme de *[Trace](../personal/tracks/manage-tracks.md)* à l'aide du *[menu Options](#options)* ou du bouton ← *(Retour)*.

:::note
Les résultats de la création de points par coordonnées - une *[trace GPX](../personal/tracks/manage-tracks.md)* avec des points de passage - se trouvent dans le menu [Mes lieux](../personal/myplaces.md) (dossier *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/>*).
:::

## Options {#options}

À l'aide du menu Options, vous pouvez [enregistrer](#save-as-track) le(s) point(s) ajouté(s) sous forme de trace, activer des options de saisie avancées (clavier système et longitude à deux chiffres), ou modifier le format des coordonnées.

![Menu Options de saisie de coordonnées Android](@site/static/img/plan-route/coordinates_input/coordinates_input_options.png)

- &nbsp;*<Translate android="true" ids="coord_input_save_as_track"/>* - ouvre une boîte de dialogue qui vous permet d'enregistrer le ou les points créés sous forme de trace GPX. Vous pouvez modifier le nom de la trace ou le laisser par défaut.
- &nbsp;*<Translate android="true" ids="use_system_keyboard"/>* - vous permet d'utiliser le clavier système Android pour saisir les coordonnées.
- &nbsp;*<Translate android="true" ids="use_two_digits_longitude"/>* - permet de saisir les données de longitude avec seulement deux chiffres. Cela peut être utile pour les longitudes de 0° à 99° (par exemple, en Europe).
- &nbsp;*<Translate android="true" ids="coordinates_format"/>* - permet de modifier le format des coordonnées pour la saisie.

### Format des coordonnées {#coordinates-format}

Lorsque vous saisissez des coordonnées, il est important de vous assurer que les unités de mesure appropriées sont utilisées. Nous prenons en charge les degrés décimaux (DD), les degrés et minutes, ou les degrés, minutes et secondes (DMS).

|Format des coordonnées| Exemple |
|:------|:------|
|<Translate android="true" ids="dd_ddddd_format"/> |23.48125°|
|<Translate android="true" ids="dd_dddddd_format"/> | 23.481251°|
|<Translate android="true" ids="dd_mm_mmm_format"/> | 23°27.215′|
|<Translate android="true" ids="dd_mm_mmmm_format"/> | 23°27.2152′|
|<Translate android="true" ids="dd_mm_ss_format"/> | 23°27′30″|

## Ajouter un point {#add-a-point}

Après avoir sélectionné les unités correctes, vous êtes prêt à saisir les coordonnées des futurs points de passage.
L'écran de saisie de coordonnées se compose des éléments suivants :

![Menu de saisie de coordonnées Android](@site/static/img/plan-route/coordinates_input/coordinates_input_add_point.png)

- &nbsp;*<Translate android="true" ids="shared_string_options"/>*. Ouvre le menu *[Options](#options)* (décrit ci-dessus).
- &nbsp;*<Translate android="true" ids="navigate_point_latitude"/> / <Translate android="true" ids="navigate_point_longitude"/>*. Il est utilisé pour saisir des données dans le format sélectionné (D - degrés, M - minutes, S - secondes). Vous pouvez modifier le format des coordonnées dans le *[menu <Translate android="true" ids="shared_string_options"/>](#options)*.
- &nbsp;Boutons demi-globe *<Translate android="true" ids="navigate_point_latitude"/> et <Translate android="true" ids="navigate_point_longitude"/>*. Vous permettent de changer les côtés de l'horizon : *Sud - Nord* et *Ouest - Est*.
- &nbsp;Champ *Nom du point*. Vous pouvez laisser le nom par défaut ou en créer un.
- &nbsp;Bouton *X*. Efface le champ de saisie de la ligne correspondante.

### Clavier abrégé {#short-keyboard}

Pour saisir des données, vous pouvez utiliser le clavier abrégé (par défaut) ou le clavier système (Android). Pour modifier la méthode de saisie, allez dans le menu *[Options](#options)*. Après avoir saisi la latitude et la longitude, vous pouvez ajouter le point à la *[liste](#points-list)* à l'aide du bouton *+Ajouter*.

![Saisie de coordonnées Ajouter un point Android](@site/static/img/plan-route/coordinates_input/coordinates_input_keyboard.png)

- Le bouton *<Translate android="true" ids="shared_string_add"/>* permet d'enregistrer un point dans la *[liste des points](#points-list)*.
- Le bouton *<Translate android="true" ids="shared_string_clear"/>* réinitialise toutes les données saisies.
- 9032; vous permet de passer à la valeur suivante.
- Les *boutons du clavier* permettent de saisir des données, de les supprimer, de passer à la valeur de coordonnée suivante, de masquer le clavier.

### Liste des points {#points-list}

Affiche les points déjà créés : nom, distance et direction vers ce point.

![Saisie de coordonnées enregistrer le point Android 1](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_1.png) ![Saisie de coordonnées enregistrer le point Android 2](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_2.png)

Le bouton **⁝** ouvre un menu d'actions pour modifier ou supprimer le point sélectionné.
Lorsque vous appuyez sur un point, il devient possible de modifier ses coordonnées. Appuyez sur le bouton *Appliquer* pour enregistrer les modifications.

## Enregistrer comme trace {#save-as-track}

Pour enregistrer vos points sous forme de trace, appuyez sur le bouton *Retour* (←) ou utilisez le menu *[Options](#options)*.

![Saisie de coordonnées enregistrer le point Android 1](@site/static/img/plan-route/coordinates_input/coordinates_input_save.png) ![Saisie de coordonnées enregistrer le point Android 2](@site/static/img/plan-route/coordinates_input/coordinates_input_my_places_list.png)

Dans le menu contextuel, vous pouvez saisir votre propre nom de trace ou l'enregistrer par défaut. Appuyez sur <Translate android="true" ids="shared_string_save"/> pour enregistrer les points ajoutés sous forme de nouvelle trace.
Vous trouverez votre trace dans le menu [Mes lieux](../personal/myplaces.md) (<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/>).