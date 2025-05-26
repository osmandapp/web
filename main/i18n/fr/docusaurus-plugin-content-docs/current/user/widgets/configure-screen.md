---
source-hash: 5884b152288325062fb3737678d597a4164a5d6db0148bdeab8ea898ba51c637
sidebar_position: 1
title: Configurer l'écran
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


## Aperçu {#overview}

L'écran de configuration est un menu qui vous permet de personnaliser les widgets à afficher sur la carte. Sur cet écran, vous pouvez activer les [widgets d'information](../widgets/info-widgets.md) et de [navigation](../widgets/nav-widgets.md), les [boutons](../widgets/map-buttons.md), une [règle](../widgets/radius-ruler.md) et ajouter des [actions rapides](../widgets/quick-action.md).

Tous les widgets sont [dépendants du profil](../personal/profiles.md), de sorte que les modifications apportées à un profil, telles que l'ordre, la visibilité ou l'état, ne seront pas appliquées aux autres. Chaque profil possède sa liste prédéfinie de widgets basée sur la conception de l'écran de navigation. Il peut être configuré et utilisé avec ou sans navigation.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*

![Menu de l'écran de configuration](@site/static/img/widgets/configure_screen_overview_1-1_andr.png) ![Menu de l'écran de configuration](@site/static/img/widgets/configure_screen_overview_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*

![Menu de l'écran de configuration](@site/static/img/widgets/configure_screen_overview_ios_1.png) ![Menu de l'écran de configuration](@site/static/img/widgets/configure_screen_overview_ios_2.png)

</TabItem>

</Tabs>


## Panneaux de widgets {#widget-panels}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*

![Écran de configuration](@site/static/img/widgets/configure_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*

![Écran de configuration](@site/static/img/widgets/configure_screen_ios.png)

</TabItem>

</Tabs>

OsmAnd vous permet d'organiser vos widgets en les regroupant, en les copiant et en les personnalisant. Vous pouvez également déplacer des widgets dans la liste ou les supprimer de l'écran.

Pour organiser les widgets sur l'écran de l'application, utilisez des panneaux. Les panneaux vous permettent de placer des widgets à des emplacements spécifiques, soit en lignes en haut ou en bas, soit sur le côté gauche ou droit de l'écran. Cela vous aide à créer une disposition qui correspond à vos besoins et préférences.

### Widgets pour tous les panneaux {#widgets-for-all-panels}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menu de l'écran de configuration](@site/static/img/widgets/configure_screen_widgets_panel_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de l'écran de configuration](@site/static/img/widgets/configure_screen_widgets_panel_ios.png)

</TabItem>

</Tabs>

1. [Manœuvres d'itinéraire](../widgets/nav-widgets.md#next-turns) (*uniquement pour le panneau gauche/droit*). Cet ensemble de widgets *de navigation* est activé pendant la navigation et affiche des informations sur la distance jusqu'à la prochaine manœuvre.
    3 widgets sont inclus : *Prochain virage*, *Prochain virage (petit)*, *Deuxième prochain virage*.

2. [Point de navigation](../widgets/nav-widgets.md#navigation-points). Un ensemble de *widgets de navigation* affiche la distance restante jusqu'à une destination, un point intermédiaire, l'heure d'arrivée à un point intermédiaire ou le temps de trajet pour un itinéraire calculé.
    4 widgets sont inclus : [Distance jusqu'à la destination](../widgets/nav-widgets.md#distance-to-destination), [Distance jusqu'à l'intermédiaire](../widgets/nav-widgets.md#distance-to-intermediate), [Temps jusqu'à l'intermédiaire](../widgets/nav-widgets.md#time-to-intermediate), [Temps jusqu'à la destination](../widgets/nav-widgets.md#time-to-destination).

3. [Marqueurs de carte](../widgets/markers.md). Un ensemble de widgets affiche la distance ou l'heure d'arrivée estimée (ETA) pour les deux premiers marqueurs de la liste des marqueurs de carte. Affiche les points spéciaux marqués comme des drapeaux sur la carte. 2 widgets sont inclus : *Premier marqueur*, *Deuxième marqueur*.

4. [Cap](../widgets/nav-widgets.md#bearing). Cet ensemble de widgets *de navigation* affiche le cap absolu ou relatif vers une cible en unités angulaires (en mode 180 degrés, 360 degrés ou milliradians).
    3 widgets sont inclus : *Cap relatif*, *Cap magnétique*, *Cap vrai*.

5. [Vitesse actuelle](../widgets/info-widgets.md#speed). Un widget *d'information* affiche la vitesse actuelle détectée par le capteur GPS.

6. [Vitesse moyenne](../widgets/info-widgets.md#average-speed-widget). Un widget *d'information* affiche la vitesse moyenne du trajet en cours.

7. [Limite de vitesse](../widgets/nav-widgets.md#speed-limit). Un ensemble de widgets *d'information* affiche la limite de vitesse sur la route actuelle sur laquelle vous voyagez.

8. [Altitude](../widgets/info-widgets.md#altitude-widgets). Un ensemble de widgets *d'information* affiche l'altitude au-dessus du niveau de la mer pour la géolocalisation actuelle ou l'altitude au-dessus du niveau de la mer pour le centre de la carte actuel.
    2 widgets sont inclus : *Altitude : position actuelle*, *Altitude : centre de la carte*.

9. [Heure actuelle](../widgets/info-widgets.md#current-time). Un widget *d'information* affiche l'heure actuelle prise à partir de votre appareil.

10. [Niveau de batterie](../widgets/info-widgets.md#battery-level). Un widget *d'information* affiche le niveau de batterie de votre appareil.

11. [Règle de rayon](../widgets/info-widgets.md#radius-ruler). Le widget affiche sur une carte la distance entre votre position et le point intérieur des cercles de distance de l'[outil Règle de rayon](../widgets/radius-ruler.md).

12. [Rapport de plané](../widgets/info-widgets.md#glide-ratio). Les widgets affichent le rapport de plané vers la cible et le rapport de plané moyen pour le vol en cours.
    2 widgets sont inclus : *Rapport de plané vers la cible*, *Rapport de plané moyen*.

13. [Lever, coucher du soleil](../widgets/info-widgets.md#sunset-and-sunrise). Un ensemble de widgets *d'information* affiche l'heure du prochain lever ou coucher du soleil pour le centre de la carte.
    2 widgets sont inclus : *Lever du soleil*, *Coucher du soleil*.

14. [Statut OsmAnd Tracker](../widgets/info-widgets.md#-tracker-widget). Ce widget *d'information* est utilisé pour accéder rapidement à l'[application OsmAnd Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) afin de partager votre position avec d'autres utilisateurs.

15. [Infos GPS (*Android uniquement*)](../widgets/info-widgets.md#gps-info). Un widget *d'information* affiche le nombre de satellites que l'appareil détecte et utilise actuellement.

16. [Widgets développeur (du *plugin de développement OsmAnd*)](../widgets/info-widgets.md#developer-widgets). Un ensemble de widgets *d'information* fournit des informations sur le niveau de zoom, la vitesse de rendu de la carte, l'altitude du centre de la carte au-dessus du niveau de la mer, la distance jusqu'au centre de la carte, la hauteur et l'inclinaison de la caméra et la RAM disponible sur votre appareil.
    5 widgets sont inclus : *FPS de rendu de la carte*, *Inclinaison de la caméra*, *Altitude de la caméra*, *Niveau de zoom*, *Distance de la caméra à la cible*, *RAM disponible*.

17. [Mapillary (du *plugin Mapillary*)](../widgets/info-widgets.md#mapillary-widget). Un widget *d'information* permet d'accéder rapidement à l'application Mapillary pour ajouter des images de rue.

18. [Parking (du *plugin Position de stationnement*)](../widgets/info-widgets.md#parking-widget). Un widget *d'information* affiche la distance entre le centre de l'écran et l'emplacement de stationnement.

19. [Météo (du *plugin Météo*)](../widgets/info-widgets.md#weather-widgets). Un ensemble de widgets *d'information* affiche des données météorologiques détaillées.
    5 widgets sont inclus : *Température*, *Pression atmosphérique*, *Vent*, *Nuages*, *Précipitations*.
20. [Enregistrement de trajet (du *plugin Enregistrement de trajet*)](../widgets/info-widgets.md#trip-recording-widgets). Un ensemble de widgets *d'information* permet d'accéder rapidement au démarrage et à l'arrêt de l'enregistrement de la trace.
    4 widgets sont inclus : *Distance*, *Durée*, *Montée*, *Descente*.

21. [Notes audio/vidéo (du *plugin Notes audio/vidéo*)](../widgets/info-widgets.md#audiovideo-notes-widget). Cet ensemble de widgets *d'information* permet d'accéder rapidement au démarrage/arrêt de la prise de notes audio, vidéo ou photo.
    4 widgets sont inclus : *Sur demande*, *Enregistrer l'audio*, *Enregistrer la vidéo*, *Prendre une photo*.

22. [Widgets capteurs externes (du *plugin Capteurs externes*)](../widgets/info-widgets.md#external-sensors-widgets). Un ensemble de widgets *d'information* vous aide à suivre les données de vos capteurs externes en temps réel.
    6 widgets sont inclus : *Fréquence cardiaque*, *Puissance vélo* (*Android uniquement*), *Cadence vélo*, *Vitesse vélo*, *Distance vélo*, *Température*.
23. [Compteur de vitesse](../widgets/info-widgets.md#speedometer). Affiche la vitesse actuelle basée sur les données GPS et la vitesse limitée basée sur les [données OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed).


## Panneaux supérieur et inférieur {#top-and-bottom-panels}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Panneau supérieur / inférieur*

![panneau supérieur](@site/static/img/widgets/top_bottom_panel_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Panneau supérieur / inférieur*

![panneau supérieur](@site/static/img/widgets/top_bottom_panel_1_ios.png)

</TabItem>

</Tabs>

Les **panneaux supérieur et inférieur** vous permettent d'organiser les widgets en lignes. Vous pouvez ajouter plusieurs lignes, personnaliser la taille des widgets et gérer l'affichage.

***Widgets disponibles :***

1. [Tous les widgets](#widgets-for-all-panels). Tout widget disponible pour tous les panneaux.

2. [Widgets de coordonnées](../widgets/info-widgets#coordinates-widget). Cet ensemble de widgets *d'information* affiche les coordonnées géographiques de la géolocalisation actuelle.
    2 widgets sont inclus : *Coordonnées : centre de la carte*, *Coordonnées : position actuelle*.

3. [Nom de rue](../widgets/nav-widgets#street-name). Un widget *de navigation* affiche le nom de la rue actuelle avec une flèche droite ou le nom de la rue suivante avec une flèche pointant vers un virage à venir.

4. [Voies](../widgets/nav-widgets#lanes). Le widget *de navigation* affiche la disposition actuelle des voies routières et met en évidence les voies pour la circulation avec la navigation active.

5. [Barre de marqueurs de carte](../widgets/markers.md#configure-marker-widgets-android). Le widget affiche la distance et la direction jusqu'au prochain marqueur de carte à partir de votre position actuelle.
    Le widget peut être configuré pour afficher 1 ou 2 marqueurs.

6. [Profil d'élévation (*Android uniquement*)](../widgets/nav-widgets#elevation-widget). Un widget *de navigation* affiche le profil d'élévation et de pente de l'itinéraire actuel.
      ![profil d'élévation](@site/static/img/widgets/elevation_prof_and.png)


### Lignes {#rows}

![Menu de l'écran de configuration](@site/static/img/widgets/configure_screen_widgets_rows_1_andr.png) ![Menu de l'écran de configuration](@site/static/img/widgets/configure_screen_widgets_rows_andr.png)

La fonction **Mode ligne** vous permet d'ajouter autant de lignes que nécessaire aux panneaux supérieur et inférieur. Vous pouvez afficher plusieurs widgets par ligne, ce qui augmente la quantité d'informations visibles.

***Comment configurer les lignes :***

- **Ajouter des widgets**. Sélectionnez dans la liste des *Widgets disponibles*.
- **Modifier l'ordre**. Appuyez sur le bouton *Modifier l'ordre* pour organiser les widgets.
- **Ajouter des lignes**. Utilisez le bouton *Ajouter une ligne* pour créer de nouvelles lignes pour les widgets.
- **Déplacer des widgets**. Déplacez les widgets entre les lignes.
- **Appliquer les modifications**. Appuyez sur le bouton *Appliquer* pour enregistrer la configuration.

#### Types et restrictions de widgets {#widget-types-and-restrictions}

Le mode vous permet d'ajouter **plus d'un widget dans une seule ligne** sur les panneaux supérieur et inférieur pour afficher autant d'informations que nécessaire.

- **Widgets complexes**. Un seul widget complexe peut être ajouté par ligne. Ceux-ci incluent :
    - [Barre de marqueurs de carte (*Android uniquement*)](../widgets/markers.md#configure-marker-widgets-android)
    - [Nom de rue](../widgets/nav-widgets#street-name)
    - [Widgets de coordonnées](../widgets/info-widgets#coordinates-widget)
    - [Voies](../widgets/nav-widgets#lanes)
    - [Profil d'élévation (*Android uniquement*)](../widgets/nav-widgets#elevation-widget)
    - [Manœuvres d'itinéraire](../widgets/nav-widgets.md#next-turns)

- **Widgets simples**. Plusieurs widgets simples peuvent être ajoutés à une seule ligne. Ces widgets peuvent afficher *Nom*, *Unités de mesure*, *Valeur* et *Icône*.


## Panneaux gauche et droit {#left-and-right-panels}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Panneau gauche / droit*

![Écran de configuration](@site/static/img/widgets/configure_screen_left_right_andr.png) ![Écran de configuration](@site/static/img/widgets/configure_screen_left_right_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Panneau gauche / droit*

![Écran de configuration](@site/static/img/widgets/configure_screen_left_right_ios.png)

</TabItem>

</Tabs>

L'application OsmAnd vous permet de placer des [widgets pour tous les panneaux](#widgets-for-all-panels) dans les panneaux gauche et droit et de les regrouper par [Pages](#pages). La [personnalisation du redimensionnement](#widget-settings) des widgets est disponible pour les widgets latéraux, de la même manière que pour les widgets des panneaux supérieur et inférieur.

### Pages {#pages}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left"/> → Modifier → Ajouter une page*

![Page de widget](@site/static/img/widgets/widget_page_1_andr.png) ![Page de widget](@site/static/img/widgets/widget_page_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left"/> → Modifier → Ajouter une page*

![Page de widget](@site/static/img/widgets/widget_page_1_ios.png) ![Page de widget](@site/static/img/widgets/widget_page_2_ios.png)

</TabItem>

</Tabs>

Les widgets des panneaux droit et gauche peuvent être regroupés en **Pages**. La fonction **Mode pages** vous permet d'ajouter 5 pages aux panneaux gauche et droit.

***Comment configurer les lignes :***

- **Ajouter une page**. Naviguez vers les paramètres du panneau gauche/droit et appuyez sur *Modifier → Ajouter une page*.
- **Organiser les widgets par page**. Cette fonction est utile lorsque différents ensembles de widgets sont nécessaires pour différentes tâches, comme la navigation par rapport à la navigation sur la carte.
- Les pages vous permettent de créer des **ensembles de widgets** pour des scénarios spécifiques, améliorant le flux de travail et réduisant l'encombrement.


## Paramètres des widgets {#widget-settings}

![Menu de l'écran de configuration](@site/static/img/widgets/configure_screen_widgets_settings_1_andr.png) ![Menu de l'écran de configuration](@site/static/img/widgets/configure_screen_widgets_settings_2_andr.png)

1. **Options de taille des widgets** (*pour tous les panneaux*) :
    Vous pouvez personnaliser la taille des **widgets simples** dans les **panneaux supérieur, inférieur, gauche et droit** :

    - **Petit**. Idéal pour les écrans compacts, économisant plus d'espace d'écran pour les cartes.
    - **Moyen** (*taille de widget par défaut*). Équilibre la visibilité et l'utilisation de l'espace.
    - **Grand**. Fournit des informations de widget plus grandes et plus visibles.

2. **Masquer les icônes de widget** (*pour les panneaux supérieur et inférieur*) :

    - Améliore la clarté et maximise l'espace pour les données importantes.
    - Particulièrement utile lors de l'affichage de nombreux widgets sur la même **ligne**.

3. **Taille individuelle pour différentes lignes** (*pour les panneaux supérieur et inférieur*) :

    - Les widgets peuvent être dimensionnés individuellement en ajustant la taille de la ligne.
    - **NOTE :** La modification de la taille d'un widget dans une ligne redimensionnera tous les widgets de cette ligne.

4. **Pour modifier la taille du widget et la visibilité de l'icône :**

    - Sélectionnez un widget que vous avez déjà ajouté au panneau.
    - Appuyez sur l'icône *Paramètres* sur le côté droit du champ du widget.
    - Appuyez sur le paramètre *Taille* et sélectionnez l'une des tailles disponibles.
    - Basculez en position Off, dans le champ *Afficher l'icône*.


## Personnalisation des panneaux {#panels-customization}

### Menu contextuel des widgets {#widget-context-menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Duplication de widget](@site/static/img/widgets/widget_context_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Duplication de widget](@site/static/img/widgets/widget_context_menu_ios.png)

</TabItem>

</Tabs>

Le **menu contextuel des widgets** offre un moyen rapide de gérer et de configurer les widgets directement depuis l'écran de la carte. Vous pouvez y accéder en ***appuyant longuement*** sur n'importe quel widget pour personnaliser la disposition des widgets sans quitter la carte.

**Pour les panneaux supérieur et inférieur**

- *Ajouter un widget à droite/gauche :*

    - Sélectionnez une position pour le nouveau widget par rapport à celui actuel.
    - Choisissez le widget dans la liste des [Widgets disponibles](#widgets-for-all-panels).

**Pour les panneaux gauche et droit**

- *Ajouter un widget au-dessus/en dessous :*

    - Sélectionnez si vous souhaitez positionner le nouveau widget au-dessus ou en dessous du widget actuel.
    - Appuyez sur le widget requis dans la liste pour l'ajouter à la position spécifiée.

**Actions générales pour tous les panneaux**

- *Paramètres*.
    - Accédez aux paramètres du widget (si disponibles) pour personnaliser son apparence ou son comportement.

- *Réinitialiser la vitesse moyenne*.
    - Disponible pour le widget [Vitesse moyenne](../widgets/info-widgets.md#average-speed).
    - Appuyez longuement pour réinitialiser instantanément la valeur de la vitesse pendant un trajet.

- *Supprimer*.
    - Supprimez le widget du panneau.
    - Une invite de confirmation garantit que l'action est intentionnelle.

### Copies de widgets {#copies-of-widgets}

*Menu OsmAnd → Configurer l'écran → Widgets → Panneau*

![Duplication de widget](@site/static/img/widgets/widget_dublicate.png)

OsmAnd vous permet d'ajouter plusieurs instances du même widget à différents panneaux ou pages. Cette fonction est particulièrement utile lorsque vous avez besoin d'informations cohérentes sur différentes vues ou profils.

***Comment dupliquer des widgets :***

- **Ajouter le widget**. Naviguez vers : *Menu OsmAnd → Configurer l'écran → Widgets → Panneau →* **Ajouter** *widget*.
- **Dupliquer à l'aide du menu contextuel**. Appuyez sur le widget et sélectionnez **Dupliquer** dans la liste des actions.
- **Méthode alternative**. Sélectionnez le même widget dans la liste des *Widgets disponibles* et appuyez sur *Ajouter*.


### Déplacer ou supprimer {#move-or-delete}

*Menu OsmAnd → Configurer l'écran → Widgets → Panneau*

![Menu de l'écran de configuration](@site/static/img/widgets/configure_screen_remove_andr.png)

Vous pouvez réorganiser ou supprimer des widgets de l'écran de l'application à l'aide du mode **Modifier**.

***Comment déplacer un widget :***

- Aller à : *Menu OsmAnd → Configurer l'écran → Widgets → Panneau → Bouton Modifier*.
- Appuyez longuement sur l'**icône à droite** du widget.
- Faites-le glisser vers la position requise dans la liste des widgets.

***Comment supprimer un widget :***

- Suivez les mêmes étapes que ci-dessus.
- Appuyez sur l'**icône moins** à gauche du nom du widget.
- Confirmez la suppression lorsque vous y êtes invité.


## Boutons {#buttons}

### Boutons personnalisés {#custom-buttons}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Page de widget](@site/static/img/widgets/conf_screen_buttons_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Page de widget](@site/static/img/widgets/conf_screen_buttons_2_ios.png)

</TabItem>

</Tabs>

**Action rapide (boutons personnalisés)** vous permet d'ajouter une liste d'actions uniques parmi toutes les [Actions rapides](../widgets/quick-action.md#custom-buttons) disponibles. Ces actions peuvent être attribuées à un ou plusieurs boutons de widget sur l'écran de la carte. Les boutons personnalisés offrent un accès rapide aux actions fréquemment utilisées.

### Boutons par défaut {#default-buttons}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Page de widget](@site/static/img/widgets/conf_screen_buttons_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Page de widget](@site/static/img/widgets/conf_screen_buttons_3_ios.png)

</TabItem>

</Tabs>

1. Les **boutons par défaut** vous permettent de personnaliser les boutons de carte prédéfinis qui sont visibles sur l'écran de la carte. Vous pouvez choisir de masquer ou d'afficher les boutons suivants :

    - [Mode 3D](../widgets/map-buttons.md#3d-mode). Pour iOS, le bouton est toujours disponible. Pour Android, il apparaît dans la liste et est disponible pour le réglage si le moteur de rendu de carte [Version 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) est sélectionné.

    - [Boussole](../widgets/map-buttons.md#display-options). Indique comment la carte est orientée sur l'appareil.
    3 vues : *Toujours visible*, *Toujours masqué*, *Visible si la carte est tournée*.

    - [Configurer la carte](../map/configure-map-menu.md). Accédez aux options pour modifier le style, les couches et les paramètres supplémentaires de la carte.

    - [Menu](../widgets/map-buttons.md#main-menu). Ouvre le menu principal de l'application pour accéder à toutes les fonctionnalités.

    - [Ma position](../widgets/map-buttons.md#my-location-and-zoom). Centre la carte sur votre position actuelle.

    - [Navigation](../widgets/map-buttons.md#directions). Essentiel pour la planification d'itinéraire et le démarrage de la navigation.

    - [Recherche](../widgets/map-buttons.md#search). Ouvre l'outil de recherche pour trouver des emplacements.

    - [Zoom avant / arrière](../widgets/map-buttons.md#my-location-and-zoom). Ajuste le niveau de zoom de la carte pour afficher plus ou moins de détails.

2. Le **menu à trois points** sur l'écran des boutons par défaut contient des actions telles que :

    - *Réinitialiser par défaut*. Vous permet de rétablir les paramètres des boutons à leur apparence d'origine.
    - *Copier depuis un autre profil*. Sélectionnez dans quel profil de la liste proposée vous souhaitez copier les paramètres des boutons.

3. L'**apparence des boutons par défaut** (*Android uniquement*) offre une variété d'options de personnalisation pour ce type de boutons. Pour modifier l'apparence d'un bouton, appuyez sur le bouton requis dans la liste et sélectionnez l'option [Apparence](#button-appearance).


### Apparence des boutons {#button-appearance}

<InfoAndroidOnly/>

![Apparence des boutons](@site/static/img/widgets/button_appearance_settings_andr.png)

La fonction *Apparence des boutons* vous permet de personnaliser entièrement l'apparence des boutons sur votre interface cartographique. Ces options de personnalisation sont disponibles pour les *Actions rapides (boutons personnalisés)* et les *Boutons par défaut*, offrant un contrôle complet sur l'apparence de l'interface cartographique et permettant des ajustements précis de la conception des boutons.

***Options de personnalisation*** :

- **Icône**. Sélectionnez dans une liste d'icônes qui représentent les actions que vous avez déjà ajoutées, ce qui facilite l'identification des fonctions en un coup d'œil.
- **Rayon des coins**. Ajustez ce paramètre pour modifier la forme du bouton, allant des coins carrés et nets aux bords lisses et arrondis.
- **Taille**. Choisissez la taille du bouton qui convient le mieux à votre écran et qui se démarque si nécessaire. Pour les *Boutons par défaut*, les tailles sont prédéfinies et ne peuvent pas être ajustées.
- **Opacité de l'arrière-plan**. Contrôlez la visibilité de l'arrière-plan du bouton. Vous pouvez le définir comme entièrement visible ou partiellement transparent, ou afficher uniquement l'ombre du cadre et l'icône.


## Autres {#other}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other"/>*

![Page de widget](@site/static/img/widgets/conf_screen_other_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Autres*

![Page de widget](@site/static/img/widgets/conf_screen_other_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="display_position"/> / <Translate ios="true" ids="position_on_map"/>](#display-position-location-position-on-screen). [⬇](#display-position-location-position-on-screen)
- [Distance par appui](../widgets/radius-ruler.md#distance-by-tap-tool). Permet de mesurer la distance entre votre position et le point sélectionné.
- [Compteur de vitesse](../widgets/info-widgets.md#speedometer). Affiche la vitesse actuelle basée sur les données GPS et la vitesse limitée basée sur les [données OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed). Les données affichées dépendent également du paramètre [Tolérance de limite de vitesse](../navigation/guidance/voice-navigation.md#speed-limit) d'OsmAnd.


### Afficher la position (Position de la position à l'écran) {#display-position-location-position-on-screen}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Page de widget](@site/static/img/widgets/conf_screen_display_position_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Page de widget](@site/static/img/widgets/conf_screen_display_position_ios.png)

</TabItem>

</Tabs>

> *Position de la position à l'écran* est le nom de ce paramètre dans la version iOS d'OsmAnd.

Vous permet de définir le placement du curseur sur *[Ma position](../map/interact-with-map.md#my-location-and-zoom)* sur la carte OsmAnd. Trois options sont disponibles :

- **<Translate android="true" ids="position_on_map_center"/>**. Le curseur est toujours positionné au centre de l'écran.
- **<Translate android="true" ids="position_on_map_bottom"/>**. *Ma position* est placée légèrement en dessous du centre de l'écran. Ce mode vous permet de voir plus d'informations cartographiques devant votre mouvement, ce qui est utile pendant la navigation.
- **<Translate android="true" ids="shared_string_automatic"/>**. Place *Ma position* en fonction de l'[Orientation de la carte](../map/interact-with-map.md#map-orientation-modes) (*Bas* - pour la direction du mouvement, *Centre* - pour tous les autres).


## Actions {#actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_actions"/>*

![Page de widget](@site/static/img/widgets/widget_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → N'importe quel panneau*

![Page de widget](@site/static/img/widgets/widget_actions_ios.png)

</TabItem>

</Tabs>

Accès à des actions supplémentaires dans l'écran de configuration :

- *Android*. Situé dans l'écran de configuration en bas de l'écran dans la section *Actions* : *Menu → Configurer l'écran → Actions*.
- *Android / iOS*. Situé sur les écrans de chaque panneau dans le *menu à trois points* dans le coin supérieur droit de l'écran.

Actions disponibles :

- **Réinitialiser par défaut**. Cette fonction vous permet de réinitialiser tous les paramètres aux valeurs par défaut si vous souhaitez recommencer, ou d'utiliser uniquement ceux prédéfinis lors du démarrage d'OsmAnd.
- **Copier depuis un autre profil**. Cette fonction vous permet d'importer rapidement les paramètres d'un autre profil, de sélectionner ceux requis dans la liste et de copier.


## Changer de profil {#switch-profile}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menu de l'écran de configuration](@site/static/img/widgets/configure_screen_switch_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu de l'écran de configuration](@site/static/img/widgets/configure_screen_switch_ios.png)

</TabItem>

</Tabs>

- Pour les appareils **Android**, vous pouvez changer de profil en haut de l'écran d'accueil de l'écran de configuration à l'aide des icônes de profil disponibles.
- Si vous utilisez un appareil **iOS**, appuyez sur l'icône de profil dans le coin supérieur de l'écran d'accueil de l'écran de configuration et sélectionnez le profil requis dans la liste pour l'activer.

**Notez bien**. L'*option Changer de profil* n'affiche pas tous les profils existants, mais uniquement ceux qui ont été *activés* dans le menu Paramètres.


## Articles connexes {#related-articles}

- [Boutons de carte](./map-buttons.md)
- [Widgets d'information](./info-widgets.md)
- [Widgets de navigation](./nav-widgets.md)
- [Règle de rayon et Règle](./radius-ruler.md)
- [Widgets de marqueurs](./markers.md)
- [Action rapide](./quick-action.md)

> *Cet article a été mis à jour pour la dernière fois en avril 2025*