---
source-hash: cbfcf0aa9a07f3ab40e670385d79d1a04431696bcbef518decc18f41ef282921
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

Le menu **Configurer l'écran** dans OsmAnd vous permet de personnaliser l'interface de la carte en ajoutant et en organisant des widgets, des boutons et des actions rapides sur plusieurs panneaux.

Vous pouvez :

- Ajouter des widgets [d'information](../widgets/info-widgets.md), de [navigation](../widgets/nav-widgets.md) et [liés aux marqueurs](../widgets/markers.md).
- Ajouter ou modifier des [Actions rapides](../widgets/quick-action.md), des [Boutons personnalisés](../widgets/quick-action.md#custom-buttons) et des [Boutons par défaut](../widgets/map-buttons.md).
- Organiser les widgets dans des panneaux (haut, bas, gauche, droite, centre).
- Créer plusieurs **pages** dans les panneaux latéraux, choisir la taille des widgets.
- Choisir la hauteur des lignes et activer/désactiver les icônes de widget.

Tous les widgets sont [dépendants du profil](../personal/profiles.md) — chaque profil a sa propre disposition, son ordre, sa visibilité et ses paramètres.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Aller à : *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Menu Configurer l'écran](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Menu Configurer l'écran](@site/static/img/widgets/configure_screen_overview_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Aller à : *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Menu Configurer l'écran](@site/static/img/widgets/configure_screen_overview_ios_1.png)  

</TabItem>

</Tabs>


## Panneaux de widgets {#widget-panels}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Aller à : *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Configurer l'écran](@site/static/img/widgets/configure_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Aller à : *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Configurer l'écran](@site/static/img/widgets/configure_screen_ios.png)

</TabItem>

</Tabs>

OsmAnd vous permet d'organiser l'interface de la carte à l'aide de panneaux de widgets personnalisables.
Vous pouvez ajouter, réorganiser, regrouper et supprimer des widgets dans les panneaux suivants :

- **Panneau supérieur**
- **Panneau inférieur**
- **Panneau gauche**
- **Panneau droit**

Chaque panneau prend en charge différents comportements de disposition :

- Les **panneaux supérieur et inférieur** affichent les widgets en lignes. Vous pouvez placer un ou deux widgets par ligne et ajouter plusieurs lignes si nécessaire.
- Les **panneaux gauche et droit** prennent en charge plusieurs pages. Vous pouvez regrouper les widgets dans des pages distinctes et basculer entre elles.


### Catalogue de widgets {#widgets-catalog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu Configurer l'écran](@site/static/img/widgets/configure_screen_widgets_panels_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu Configurer l'écran](@site/static/img/widgets/configure_screen_widgets_panels_ios.png)

</TabItem>

</Tabs>

***Widgets de navigation :***  

- [Cap](../widgets/nav-widgets.md#bearing).
    Cet ensemble affiche le cap absolu ou relatif vers une cible en unités angulaires.
    3 widgets sont inclus : *Cap relatif*, *Cap magnétique*, *Cap vrai*.

- [Profil d'élévation](../widgets/nav-widgets#elevation-widget) (*Haut/Bas seulement*, *Android seulement*).
    Affiche l'élévation et la pente de l'itinéraire.

- [Voies](../widgets/nav-widgets#lanes) (*Haut/Bas seulement*).
    Guidage visuel des voies.

- [Barre de marqueurs de carte](../widgets/markers.md#configure-marker-widgets-android) (*Haut/Bas seulement*).
    Affiche la distance/direction vers les marqueurs enregistrés.
    Configurable pour 1 ou 2 marqueurs.

- [Point de navigation](../widgets/nav-widgets.md#navigation-points).
    L'ensemble affiche la distance restante jusqu'à une destination, un point intermédiaire, l'heure d'arrivée à un point intermédiaire ou le temps de trajet pour un itinéraire calculé.
    4 widgets sont inclus : [Distance à destination](../widgets/nav-widgets.md#distance-to-destination), [Distance à intermédiaire](../widgets/nav-widgets.md#distance-to-intermediate), [Temps à intermédiaire](../widgets/nav-widgets.md#time-to-intermediate), [Temps à destination](../widgets/nav-widgets.md#time-to-destination).

- [Manœuvres d'itinéraire](../widgets/nav-widgets.md#next-turn) (*Panneau gauche/droit seulement*).
    Cet ensemble est activé pendant la navigation et affiche la distance et la flèche vers la prochaine manœuvre.
    3 widgets sont inclus : *Prochain virage*, *Prochain virage (petit)*, *Deuxième prochain virage*.

- [Limite de vitesse](../widgets/nav-widgets.md#speed-limit).
    Affiche la limite de vitesse actuelle pour la route.

- [Compteur de vitesse](../widgets/info-widgets.md#speedometer).
    Affiche la vitesse actuelle basée sur les données GPS et la vitesse limitée basée sur les [données OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed).

- [Nom de la rue](../widgets/nav-widgets#street-name) (*Haut/Bas seulement*).
    Affiche la rue actuelle ou à venir.

<br/>

***Widgets d'information :***

- [Altitude](../widgets/info-widgets.md#altitude-widgets).
    L'ensemble affiche l'altitude au-dessus du niveau de la mer pour l'emplacement actuel ou pour le centre de la carte actuel.
    2 widgets sont inclus : *Altitude : emplacement actuel*, *Élévation : centre de la carte*.

- [Vitesse moyenne](../widgets/info-widgets.md#average-speed-widget).
    Affiche la vitesse moyenne du trajet actuel.

- [Niveau de batterie](../widgets/info-widgets.md#battery-level).
    Affiche le niveau de batterie de l'appareil.

- [Widgets de coordonnées](../widgets/info-widgets#coordinates-widget) (*Haut/Bas seulement*).
    Cet ensemble affiche les coordonnées géographiques de la géolocalisation actuelle.
    2 widgets sont inclus : *Coordonnées : centre de la carte*, *Coordonnées : emplacement actuel*.

- [Vitesse actuelle](../widgets/info-widgets.md#speed).
    Affiche la vitesse du capteur GPS.

- [Heure actuelle](../widgets/info-widgets.md#current-time).
    Affiche l'heure système actuelle.

- [Rapport de plané](../widgets/info-widgets.md#glide-ratio).
    Les widgets affichent le rapport de plané vers la cible et le rapport de plané moyen pour le vol actuel.
    2 widgets sont inclus : *Rapport de plané vers la cible*, *Rapport de plané moyen*.

- [Infos GPS](../widgets/info-widgets.md#gps-info) (*Android seulement*).
    Affiche le nombre de satellites détectés.

- [Marqueurs de carte](../widgets/markers.md).
    L'ensemble affiche la distance ou l'heure d'arrivée estimée (ETA) pour les deux premiers marqueurs de [la liste](https://osmand.net/docs/user/personal/markers#itinerary-list).
    2 widgets sont inclus : *Premier marqueur*, *Deuxième marqueur*.

- [Règle de rayon](../widgets/info-widgets.md#radius-ruler).
    Affiche la distance entre votre position et un point sur la carte, encerclé par l'[outil de règle de rayon](../widgets/radius-ruler.md).

- [Lever, coucher du soleil](../widgets/info-widgets.md#sunset-and-sunrise).
    Affiche l'heure du prochain lever ou coucher du soleil pour le centre de la carte.
    2 widgets sont inclus : *Lever du soleil*, *Coucher du soleil*.

<br/>

***Widgets basés sur des plugins :***  

- [Notes audio/vidéo](../widgets/info-widgets.md#audiovideo-notes-widget).
    Accès rapide pour capturer des médias.
    4 widgets sont inclus : *Sur demande*, *Enregistrer l'audio*, *Enregistrer la vidéo*, *Prendre une photo*.

- [Widgets développeur](../widgets/info-widgets.md#developer-widgets).
    Affiche des informations facultatives.
    5 widgets sont inclus : *FPS de rendu de carte*, *Inclinaison de la caméra*, *Élévation de la caméra*, *Niveau de zoom*, *Distance de la caméra à la cible*, *RAM disponible*.

- [Widgets de capteurs externes](../widgets/info-widgets.md#external-sensors-widgets).
    L'ensemble aide à suivre les données des capteurs BLE/ANT+ en temps réel.
    6 widgets sont inclus : *Fréquence cardiaque*, *Puissance du vélo* (*Android seulement*), *Cadence du vélo*, *Vitesse du vélo*, *Distance du vélo*, *Température*.

- [Mapillary](../widgets/info-widgets.md#mapillary-widget).
    Ouvre l'application Mapillary pour l'imagerie au niveau de la rue.

- [Statut du traqueur OsmAnd](../widgets/info-widgets.md#tracker-widget).
    Accès rapide à l'[application OsmAnd Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram).

- [Widget de stationnement](../widgets/info-widgets.md#parking-widget).
    Distance du centre de l'écran à l'emplacement de stationnement enregistré.

- [Enregistrement de trajet](../widgets/info-widgets.md#trip-recording-widgets).
    Démarre et arrête l'enregistrement de la trace, et affiche les données d'enregistrement de la trace.
    4 widgets sont inclus : *Distance*, *Durée*, *Montée*, *Descente*.

- [Météo](../widgets/info-widgets.md#weather-widgets).
    Affiche des informations météorologiques détaillées.
    5 widgets sont inclus : *Température*, *Pression atmosphérique*, *Vent*, *Nuage*, *Précipitations*.

:::note Widgets dépendants du panneau

- Uniquement disponibles dans les **panneaux supérieur et inférieur** et doivent être placés dans des lignes séparées : *Widgets de coordonnées, widget de profil d'élévation, widget de voies, barre de marqueurs de carte, widget de nom de rue*.
- Uniquement disponibles dans les **panneaux gauche et droit** : *Manœuvres d'itinéraire*.

:::


### Lignes {#rows}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu Configurer l'écran](@site/static/img/widgets/configure_screen_widgets_rows_1_andr.png)  ![Menu Configurer l'écran](@site/static/img/widgets/configure_screen_widgets_rows_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu Configurer l'écran](@site/static/img/widgets/configure_screen_widgets_rows_1_ios.png)  ![Menu Configurer l'écran](@site/static/img/widgets/configure_screen_widgets_rows_ios.png) 

</TabItem>

</Tabs>



La fonction **Mode ligne** vous permet d'ajouter autant de lignes que nécessaire aux panneaux supérieur et inférieur. Vous pouvez afficher plusieurs widgets par ligne, ce qui augmente la quantité d'informations visibles.

***Comment configurer les lignes :***

- **Ajouter des widgets** : Appuyez sur le bouton *Plus* (Android) ou *Ajouter un widget* (iOS), puis sélectionnez dans la liste des widgets disponibles.
- **Réorganiser les widgets** : Appuyez sur le bouton *Crayon* (Android) ou *Modifier* (iOS) pour réorganiser les widgets.
- **Ajouter des lignes** : Appuyez sur le bouton *Ajouter une ligne* pour créer de nouvelles lignes pour vos widgets.
- **Déplacer des widgets** : Faites glisser les widgets entre différentes lignes.
- **Accéder aux paramètres du widget** : Appuyez sur l'icône *"i"* (Android) ou la flèche *">"* (iOS) pour ouvrir les paramètres du widget.
- **Enregistrer les modifications** : Appuyez sur *Appliquer* (Android) ou *Terminé* (iOS) pour enregistrer la disposition.


#### Types de widgets et restrictions {#widget-types-and-restrictions}

Le mode vous permet d'ajouter **plus d'un widget dans une seule ligne** sur les panneaux supérieur et inférieur pour afficher autant d'informations que nécessaire.

- **Widgets complexes**. Un seul widget complexe peut être ajouté par ligne. Ceux-ci incluent :
    - [Barre de marqueurs de carte (*Android seulement*)](../widgets/markers.md#configure-marker-widgets-android)
    - [Nom de la rue](../widgets/nav-widgets#street-name)
    - [Widgets de coordonnées](../widgets/info-widgets#coordinates-widget)
    - [Voies](../widgets/nav-widgets#lanes)
    - [Profil d'élévation (*Android seulement*)](../widgets/nav-widgets#elevation-widget)
    - [Manœuvres d'itinéraire](../widgets/nav-widgets.md#next-turn)

- **Widgets simples**. Plusieurs widgets simples peuvent être ajoutés à une seule ligne. Ces widgets peuvent afficher le *Nom*, les *Unités de mesure*, la *Valeur* et l'*Icône*.


### Pages {#pages}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Aller à : *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left"/> → Modifier → Ajouter une page*  

![Page de widget](@site/static/img/widgets/widget_page_1_andr.png) ![Page de widget](@site/static/img/widgets/widget_page_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Aller à : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left"/> → Modifier → Ajouter une page*

![Page de widget](@site/static/img/widgets/widget_page_1_ios.png) ![Page de widget](@site/static/img/widgets/widget_page_2_ios.png)  

</TabItem>

</Tabs>

Les widgets des panneaux droit et gauche peuvent être regroupés en **Pages**. La fonction **Mode Pages** vous permet d'ajouter 5 pages aux panneaux gauche et droit.

***Comment configurer les lignes :***

- **Ajouter une page**. Accédez aux paramètres du panneau gauche/droit et appuyez sur *Modifier → Ajouter une page*.
- **Organiser les widgets par page**. Cette fonction est utile lorsque différents ensembles de widgets sont nécessaires pour différentes tâches, comme la navigation ou la consultation de la carte.
- Les pages vous permettent de créer des **ensembles de widgets** pour des scénarios spécifiques, améliorant le flux de travail et réduisant l'encombrement.


## Paramètres des widgets {#widget-settings}

![Menu Configurer l'écran](@site/static/img/widgets/configure_screen_widgets_settings_1_andr.png)   ![Menu Configurer l'écran](@site/static/img/widgets/configure_screen_widgets_settings_2_andr.png)

1. **Options de taille de widget** (*pour tous les panneaux*) :
    Vous pouvez personnaliser la taille des **widgets simples** dans les **panneaux supérieur, inférieur, gauche et droit** :

    - **Petit**. Idéal pour les affichages compacts, économisant plus d'espace d'écran pour les cartes.
    - **Moyen** (*taille de widget par défaut*). Équilibre la visibilité et l'utilisation de l'espace.
    - **Grand**. Fournit des informations de widget plus grandes et plus visibles.

2. **Masquer les icônes de widget** (*pour les panneaux supérieur et inférieur*) :

    - Améliore la clarté et maximise l'espace pour les données importantes.
    - Particulièrement utile lors de l'affichage de nombreux widgets sur la même **ligne**.

3. **Taille individuelle pour différentes lignes** (*pour tous les panneaux*) :

    - Les widgets peuvent être dimensionnés individuellement en ajustant la taille des lignes et des colonnes.
    - **REMARQUE :** La modification de la taille d'un widget dans une ligne/colonne redimensionnera tous les widgets de cette ligne/colonne.

4. **Pour modifier la taille du widget et la visibilité de l'icône :**

    - Sélectionnez un widget que vous avez déjà ajouté au panneau.
    - Appuyez sur l'icône *Paramètres* sur le côté droit du champ du widget.
    - Appuyez sur le paramètre *Taille* et sélectionnez l'une des tailles disponibles.
    - Basculez en position Off, dans le champ *Afficher l'icône*.


## Personnalisation des panneaux {#panels-customization}

### Menu contextuel du widget {#widget-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Duplicata de widget](@site/static/img/widgets/widget_context_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Duplicata de widget](@site/static/img/widgets/widget_context_menu_ios.png)

</TabItem>

</Tabs>

Le **menu contextuel du widget** offre un moyen rapide de gérer et de configurer les widgets directement depuis l'écran de la carte. Vous pouvez y accéder en ***appuyant longuement*** sur n'importe quel widget pour personnaliser la disposition des widgets sans quitter la carte.

**Pour les panneaux supérieur et inférieur**  

- *Ajouter un widget à droite/gauche :*

    - Sélectionnez une position pour le nouveau widget par rapport à celui actuel.
    - Choisissez le widget dans la liste des [widgets disponibles](#widgets-for-all-panels).

**Pour les panneaux gauche et droit**  

- *Ajouter un widget au-dessus/en dessous :*

    - Sélectionnez si vous souhaitez positionner le nouveau widget au-dessus ou en dessous du widget actuel.
    - Appuyez sur le widget requis dans la liste pour l'ajouter à la position spécifiée.

**Actions générales pour tous les panneaux**  

- *Paramètres*.
    - Accédez aux paramètres du widget (si disponibles) pour personnaliser son apparence ou son comportement.

- *Réinitialiser la vitesse moyenne*.
    - Disponible pour le widget [Vitesse moyenne](../widgets/info-widgets.md#average-speed).
    - Appuyez longuement pour réinitialiser instantanément la valeur de la vitesse pendant un trajet.

- *Supprimer*.
    - Supprime le widget du panneau.
    - Une invite de confirmation garantit que l'action est intentionnelle.

### Copies de widgets {#copies-of-widgets}

*Menu OsmAnd → Configurer l'écran → Widgets → Panneau*  

![Duplicata de widget](@site/static/img/widgets/widget_dublicate.png)  

OsmAnd vous permet d'ajouter plusieurs instances du même widget à différents panneaux ou pages. Cette fonctionnalité est particulièrement utile lorsque vous avez besoin d'informations cohérentes sur différentes vues ou profils.  

***Comment dupliquer des widgets :***

- **Ajouter le widget**. Accédez à : *Menu OsmAnd → Configurer l'écran → Widgets → Panneau →* **Ajouter** *un widget*.
- **Dupliquer à l'aide du menu contextuel**. Appuyez sur le widget et sélectionnez **Dupliquer** dans la liste des actions.
- **Méthode alternative**. Sélectionnez le même widget dans la liste des *widgets disponibles* et appuyez sur *Ajouter*.


### Déplacer ou supprimer {#move-or-delete}

*Menu OsmAnd → Configurer l'écran → Widgets → Panneau*  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu Configurer l'écran](@site/static/img/widgets/configure_screen_remove_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu Configurer l'écran](@site/static/img/widgets/configure_screen_remove_ios.png) 

</TabItem>

</Tabs>



Vous pouvez réorganiser ou supprimer des widgets de l'écran de l'application à l'aide du mode **Modifier**.  

***Comment déplacer un widget :***

- Allez à : *Menu OsmAnd → Configurer l'écran → Widgets → Panneau → Bouton Modifier*.
- Appuyez longuement sur l'**icône à droite** du widget.
- Faites-le glisser vers la position requise dans la liste des widgets.

***Comment supprimer un widget :***  

- Suivez les mêmes étapes que ci-dessus.
- Appuyez sur l'**icône moins** à gauche du nom du widget.
- Confirmez la suppression lorsque vous y êtes invité.


## Boutons {#buttons}

### Boutons personnalisés {#custom-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Aller à : *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Page de widget](@site/static/img/widgets/conf_screen_buttons_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Aller à : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Page de widget](@site/static/img/widgets/conf_screen_buttons_2_ios.png)

</TabItem>

</Tabs>

**Action rapide (boutons personnalisés)** vous permet d'ajouter une liste d'actions uniques parmi toutes les [Actions rapides](../widgets/quick-action.md#custom-buttons) disponibles. Ces actions peuvent être attribuées à un ou plusieurs boutons de widget sur l'écran de la carte. Les boutons personnalisés offrent un accès rapide aux actions fréquemment utilisées.

### Boutons par défaut {#default-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Aller à : *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Page de widget](@site/static/img/widgets/conf_screen_buttons_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Aller à : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Page de widget](@site/static/img/widgets/conf_screen_buttons_3_ios.png)

</TabItem>

</Tabs>

1. Les **boutons par défaut** vous permettent de personnaliser les boutons de carte prédéfinis visibles sur l'écran de la carte. Vous pouvez choisir de masquer ou d'afficher les boutons suivants :

    - [Mode 3D](../widgets/map-buttons.md#3d-mode). Pour iOS, le bouton est toujours disponible. Pour Android, il apparaît dans la liste et est disponible pour le réglage si le moteur de rendu de carte [Version 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) est sélectionné.

    - [Boussole](../widgets/map-buttons.md#display-options). Indique comment la carte est orientée sur l'appareil.
    3 vues : *Toujours visible*, *Toujours masqué*, *Visible si la carte est tournée*.

    - [Configurer la carte](../map/configure-map-menu.md). Accédez aux options pour modifier le style, les couches et les paramètres supplémentaires de la carte.

    - [Menu](../widgets/map-buttons.md#main-menu). Ouvre le menu principal de l'application pour accéder à toutes les fonctionnalités.

    - [Ma position](../widgets/map-buttons.md#my-location-and-zoom). Centre la carte sur votre position actuelle.

    - [Navigation](../widgets/map-buttons.md#directions). Essentiel pour la planification d'itinéraire et le démarrage de la navigation.

    - [Recherche](../widgets/map-buttons.md#search). Ouvre l'outil de recherche pour trouver des emplacements.

    - [Zoom avant/arrière](../widgets/map-buttons.md#my-location-and-zoom). Ajuste le niveau de zoom de la carte pour afficher plus ou moins de détails.

2. Le **menu à trois points** sur l'écran des boutons par défaut contient des actions telles que :

    - *Réinitialiser aux valeurs par défaut*. Vous permet de rétablir les paramètres des boutons à leur apparence d'origine.
    - *Copier depuis un autre profil*. Sélectionnez le profil dans la liste proposée à partir duquel vous souhaitez copier les paramètres des boutons.

3. L'**apparence des boutons par défaut** (*Android uniquement*) offre une variété d'options de personnalisation pour ce type de boutons. Pour modifier l'apparence d'un bouton, appuyez sur le bouton requis dans la liste et sélectionnez l'option [Apparence](#button-appearance).


### Apparence des boutons {#button-appearance}

<InfoAndroidOnly/>

![Apparence des boutons](@site/static/img/widgets/button_appearance_settings_andr.png)

La fonction *Apparence des boutons* vous permet de personnaliser entièrement l'aspect des boutons sur votre interface cartographique. Ces options de personnalisation sont disponibles pour les *Actions rapides (boutons personnalisés)* et les *Boutons par défaut*, offrant un contrôle complet sur l'apparence de l'interface cartographique et permettant des ajustements précis de la conception des boutons.

***Options de personnalisation*** :

- **Icône**. Sélectionnez dans une liste d'icônes qui représentent les actions que vous avez déjà ajoutées, ce qui facilite l'identification des fonctions en un coup d'œil.
- **Rayon des coins**. Ajustez ce paramètre pour modifier la forme du bouton, allant des coins vifs et carrés aux bords lisses et arrondis.
- **Taille**. Choisissez la taille du bouton qui correspond le mieux à votre écran et qui se démarque selon les besoins. Pour les *boutons par défaut*, les tailles sont prédéfinies et ne peuvent pas être ajustées.
- **Opacité de l'arrière-plan**. Contrôlez la visibilité de l'arrière-plan du bouton. Vous pouvez le rendre entièrement visible ou partiellement transparent, ou afficher uniquement l'ombre du cadre et l'icône.


## Autres {#other}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Aller à : *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other"/>*

![Page de widget](@site/static/img/widgets/conf_screen_other_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Aller à : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Autre*

![Page de widget](@site/static/img/widgets/conf_screen_other_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="display_position"/> / <Translate ios="true" ids="position_on_map"/>](#display-position-location-position-on-screen). [⬇](#display-position-location-position-on-screen)
- [Distance au toucher](../widgets/radius-ruler.md#distance-by-tap). Permet de mesurer la distance entre votre position et le point sélectionné.
- [Compteur de vitesse](../widgets/info-widgets.md#speedometer). Affiche la vitesse actuelle basée sur les données GPS et la vitesse limitée basée sur les [données OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed). Les données affichées dépendent également du paramètre [Tolérance de limite de vitesse](../navigation/guidance/voice-navigation.md#speed-limit) d'OsmAnd.


### Afficher la position (position de l'emplacement à l'écran) {#display-position-location-position-on-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Page de widget](@site/static/img/widgets/conf_screen_display_position_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Page de widget](@site/static/img/widgets/conf_screen_display_position_ios.png)

</TabItem>

</Tabs>

> *Position de l'emplacement à l'écran* est le nom de ce paramètre dans la version iOS d'OsmAnd.  

Vous permet de définir le placement du curseur sur *[Ma position](../map/interact-with-map.md#my-location-and-zoom)* sur la carte OsmAnd. Trois options sont disponibles :  

- **<Translate android="true" ids="position_on_map_center"/>**. Le curseur est toujours positionné au centre de l'écran.
- **<Translate android="true" ids="position_on_map_bottom"/>**. *Ma position* est placée légèrement en dessous du centre de l'écran. Ce mode vous permet de voir plus d'informations sur la carte devant votre mouvement, ce qui est utile pendant la navigation.
- **<Translate android="true" ids="shared_string_automatic"/>**. Place *Ma position* en fonction de l'[orientation de la carte](../map/interact-with-map.md#map-orientation-modes) (*Bas* - pour la direction du mouvement, *Centre* - pour tous les autres).


## Actions {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Aller à : *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_actions"/>*  

![Page de widget](@site/static/img/widgets/widget_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Aller à : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → N'importe quel panneau*

![Page de widget](@site/static/img/widgets/widget_actions_ios.png)  

</TabItem>

</Tabs>

Accès à des actions supplémentaires dans l'écran Configurer :

- *Android*. Situé dans l'écran Configurer en bas de l'écran dans la section *Actions* : *Menu → Configurer l'écran → Actions*.
- *Android / iOS*. Situé sur les écrans de chaque panneau dans le *menu à trois points* en haut à droite de l'écran.

Actions disponibles :

- **Réinitialiser aux valeurs par défaut**. Cette fonction vous permet de réinitialiser tous les paramètres aux valeurs par défaut si vous souhaitez recommencer, ou d'utiliser uniquement les préréglages au démarrage d'OsmAnd.
- **Copier depuis un autre profil**. Cette fonction vous permet d'importer rapidement des paramètres depuis un autre profil, de sélectionner les profils requis dans la liste et de les copier.


## Changer de profil {#switch-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu Configurer l'écran](@site/static/img/widgets/configure_screen_switch_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu Configurer l'écran](@site/static/img/widgets/configure_screen_switch_ios.png)

</TabItem>

</Tabs>

- Pour les appareils **Android**, vous pouvez changer de profil en haut de l'écran d'accueil de Configurer l'écran à l'aide des icônes de profil disponibles.
- Si vous utilisez un appareil **iOS**, appuyez sur l'icône de profil dans le coin supérieur de l'écran d'accueil de Configurer l'écran et sélectionnez le profil requis dans la liste pour l'activer.

**À noter**. L'option *Changer de profil* n'affiche pas tous les profils existants, mais uniquement ceux qui ont été *activés* dans le menu Paramètres.


## Articles connexes {#related-articles}

- [Boutons de carte](./map-buttons.md)
- [Widgets d'information](./info-widgets.md)
- [Widgets de navigation](./nav-widgets.md)
- [Règle de rayon et Règle](./radius-ruler.md)
- [Widgets de marqueurs](./markers.md)
- [Action rapide](./quick-action.md)

> *Dernière mise à jour : juillet 2025*