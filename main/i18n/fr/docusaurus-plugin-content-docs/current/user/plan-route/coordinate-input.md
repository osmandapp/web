---
source-hash: 1505593576ed8b4e4ca8274ad047f82a70181f3fcafd8e9ca6d60e795b2f0724
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

La *Saisie de coordonnées* est un outil simple et facile à utiliser pour créer des points de cheminement en spécifiant leur emplacement géographique. Cette fonctionnalité peut être utile pour naviguer vers certains endroits dont vous ne connaissez que les coordonnées : les points ajoutés peuvent être [enregistrés](#save-as-track) en tant que trace GPX et utilisés ultérieurement pour la [navigation GPX](../navigation/setup/gpx-navigation.md) ou la [navigation par marqueurs](../navigation/setup/markers-navigation.md#overview).  

![Aperçu de la saisie de coordonnées](@site/static/img/plan-route/coordinates_input/coordinates_input_overview.png) 

## Comment utiliser {#how-to-use}

Vous pouvez créer des points de cheminement à partir du menu *[Marqueurs sur la carte](../personal/markers.md#actions)* ou de [Mes lieux](../personal/myplaces.md) (voir les captures d'écran). Veuillez suivre ces chemins pour accéder à l'option de saisie de coordonnées :
  - *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → Bouton globe en bas de l'écran*
  - *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,coordinate_input"/>*

![Comment trouver la saisie de coordonnées](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_1.png) ![Comment trouver la saisie de coordonnées](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_2.png) 

Après avoir ouvert l'écran de saisie des coordonnées :

- &nbsp;Assurez-vous que les bonnes [unités de mesure](#coordinates-format) sont utilisées. Sinon, modifiez le format des coordonnées dans le menu [Options](#options).  
- &nbsp;Saisissez les coordonnées du point en utilisant le [modèle](#add-a-point). Après avoir appuyé sur le bouton *[Ajouter](#add-a-point)*, votre point sera ajouté à la *[liste des points](#points-list)*. Si nécessaire, vous pouvez saisir des points supplémentaires.  
- &nbsp;Enregistrez votre ou vos points en tant que *[Trace](../personal/tracks/manage-tracks.md)* en utilisant le *[menu Options](#options)* ou le bouton &#8592; *(Retour)*.  

:::note
Les résultats de la création de points par coordonnées - une *[trace GPX](../personal/tracks/manage-tracks.md)* avec des points de cheminement - se trouvent dans le menu [Mes lieux](../personal/myplaces.md) (dossier *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/>*).
:::

## Options {#options}

Le menu des options vous permet d'[enregistrer](#save-as-track) le ou les points ajoutés en tant que trace, d'activer des options de saisie avancées (clavier système et longitude à deux chiffres), ou de changer le format des coordonnées.

![Menu Options de la saisie de coordonnées Android](@site/static/img/plan-route/coordinates_input/coordinates_input_options.png)

- &nbsp;*<Translate android="true" ids="coord_input_save_as_track"/>* - ouvre une boîte de dialogue qui vous permet d'enregistrer le ou les points créés en tant que trace GPX. Vous pouvez changer le nom de&nbsp;la trace ou le laisser par défaut.
- &nbsp;*<Translate android="true" ids="use_system_keyboard"/>* - vous permet d'utiliser le clavier système Android pour saisir les coordonnées.
- &nbsp;*<Translate android="true" ids="use_two_digits_longitude"/>* - permet de saisir les données de longitude avec seulement deux chiffres. Cela peut être utile pour les longitudes de 0° à 99° (par exemple, en Europe).
- &nbsp;*<Translate android="true" ids="coordinates_format"/>* - permet de changer le format des coordonnées pour la saisie.  

### Format des coordonnées {#coordinates-format}

Lorsque vous saisissez des coordonnées, il est important de vous assurer que les unités de mesure appropriées sont utilisées. Nous prenons en charge les degrés décimaux&nbsp;(DD), les degrés et minutes, ou les degrés, minutes et secondes&nbsp;(DMS).  

|Format des coordonnées| Exemple |
|:------|:------|
|<Translate android="true" ids="dd_ddddd_format"/> |23.48125°|
|<Translate android="true" ids="dd_dddddd_format"/> | 23.481251°|
|<Translate android="true" ids="dd_mm_mmm_format"/> | 23°27.215′|
|<Translate android="true" ids="dd_mm_mmmm_format"/> | 23°27.2152′|
|<Translate android="true" ids="dd_mm_ss_format"/> | 23°27′30″|

## Ajouter un point {#add-a-point}

Après avoir sélectionné les bonnes unités, vous êtes prêt à saisir les coordonnées des futurs points de cheminement.  
L'écran de saisie des coordonnées se compose des éléments suivants :

![Menu de saisie de coordonnées Android](@site/static/img/plan-route/coordinates_input/coordinates_input_add_point.png) 

- &nbsp;*<Translate android="true" ids="shared_string_options"/>*. Ouvre le menu *[Options](#options)* (décrit ci-dessus).
- &nbsp;*<Translate android="true" ids="navigate_point_latitude"/> / <Translate android="true" ids="navigate_point_longitude"/>*. Est utilisé pour saisir des données dans le format sélectionné (D - degrés, M - minutes, S - secondes). Vous pouvez changer le format des coordonnées dans le *[menu <Translate android="true" ids="shared_string_options"/>](#options)*.
- &nbsp;Boutons d'hémisphère *<Translate android="true" ids="navigate_point_latitude"/> et <Translate android="true" ids="navigate_point_longitude"/>*. Permettent de changer les côtés de l'horizon : *Sud - Nord* et *Ouest - Est*.
- &nbsp;Champ *Nom du point*. Vous pouvez laisser le nom par défaut ou en créer un.  
- &nbsp;Bouton *X*. Efface le champ de saisie de la ligne correspondante.  

### Clavier court {#short-keyboard}

Pour saisir des données, vous pouvez utiliser le clavier court (par défaut) ou le clavier système (Android). Pour changer la méthode de saisie, allez dans le menu *[Options](#options)*. Après avoir saisi la latitude et la longitude, vous pouvez ajouter le point à la *[liste](#points-list)* en utilisant le bouton *+Ajouter*.

![Ajouter un point via la saisie de coordonnées Android](@site/static/img/plan-route/coordinates_input/coordinates_input_keyboard.png)  

- Le bouton *<Translate android="true" ids="shared_string_add"/>* permet d'enregistrer un point dans la *[Liste des points](#points-list)*.
- Le bouton *<Translate android="true" ids="shared_string_clear"/>* réinitialise toutes les données saisies.
- &#9032; vous permet de passer à la valeur suivante.
- Les *boutons du clavier* permettent de saisir des données, de les supprimer, de passer à la valeur de coordonnée suivante, de masquer le clavier. 

### Liste des points {#points-list}

Affiche les points déjà créés : nom, distance et direction vers ce point.

![Enregistrer un point via la saisie de coordonnées Android 1](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_1.png) ![Enregistrer un point via la saisie de coordonnées Android 2](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_2.png)

Le bouton **⁝** ouvre un menu d'actions pour modifier ou supprimer le point sélectionné. 
Lorsque vous appuyez sur un point, il devient possible de modifier ses coordonnées. Appuyez sur le bouton *Appliquer* pour enregistrer les modifications.


## Enregistrer en tant que trace {#save-as-track}

Pour enregistrer vos points en tant que trace, appuyez sur le bouton *Retour* ( &#8592; ) ou utilisez le menu *[Options](#options)*.

![Enregistrer un point via la saisie de coordonnées Android 1](@site/static/img/plan-route/coordinates_input/coordinates_input_save.png) ![Liste de Mes lieux via la saisie de coordonnées Android 2](@site/static/img/plan-route/coordinates_input/coordinates_input_my_places_list.png)

Dans le menu contextuel, vous pouvez saisir votre propre nom de trace ou l'enregistrer par défaut. Appuyez sur <Translate android="true" ids="shared_string_save"/> pour enregistrer les points ajoutés en tant que nouvelle trace.  
Vous trouverez votre trace dans le menu [Mes lieux](../personal/myplaces.md) (<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/>).