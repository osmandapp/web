---
source-hash: f953b48d9c0d7991a8de80efdc7104d4b8ee996aea6dfedafb14348ff4309e96 
sidebar_position: 7
title:  Action rapide (Boutons personnalisés)
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



## Aperçu

Le widget Action rapide est un élément d'interface utilisateur interactif qui offre un accès rapide aux fonctions ou actions clés sans ouvrir de paramètres supplémentaires. Ce widget est placé sur l'écran principal de la carte et vous permet de simplifier et d'accélérer l'interaction avec l'application, la rendant plus pratique et efficace.

![Widget Action rapide](@site/static/img/widgets/quick_action_widget.png)


## Widget Action rapide

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*

![Widget Action rapide_android](@site/static/img/widgets/quick_action_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*

![Widget Action rapide_ios](@site/static/img/widgets/quick_action_widget_ios.png)

</TabItem>

</Tabs>

Pour utiliser le bouton Action rapide, vous devez d'abord activer ce widget.

<!--
- To open the Quick action menu, just tap the button.
- By default, the Quick action button will appear on the right corner (above the zoom buttons), but it can be moved to any part of the screen by long tapping it. -->


### Ajouter et supprimer des actions

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/> → Appuyer sur Supprimer (icône Corbeille dans le coin supérieur droit) → Sélectionner les actions*

![Widget Action rapide_android_add](@site/static/img/widgets/quick_action_widget_andr.png)  ![Bouton personnalisé Android](@site/static/img/widgets/add_action_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/>  → Appuyer sur Modifier (icône Crayon dans le coin supérieur droit) → Sélectionner les actions*

![Widget Action rapide_ios_add](@site/static/img/widgets/quick_action_widget_2_ios.png) ![Bouton personnalisé Android](@site/static/img/widgets/add_action_screen_ios.png)

</TabItem>

</Tabs>

Toutes les actions sont organisées dans le menu **Ajouter une action** et regroupées par type. Une liste complète des actions et de leurs descriptions se trouve dans la section [Types d'actions](#action-types).

Vous pouvez attribuer une ou plusieurs [actions](#action-types) au bouton d'action rapide. Il existe deux façons d'ajouter des actions.

- **Dans l'écran Configurer**. Sélectionnez un bouton dans la liste, et appuyez sur le bouton&nbsp;  "**＋**"  &nbsp;. Vous devez d'abord sélectionner le [type d'action](#action-types), puis modifier son nom et ses [paramètres](#actions-in-loop).
- **Dans le panneau du bouton d'action rapide**. Appuyez sur le *bouton Action rapide* sur l'écran de la carte. À la fin de la liste, sur le dernier écran du panneau, se trouve la case "**＋**"  &nbsp;*Ajouter une action*. Appuyez dessus et sélectionnez une action dans la [liste des types](#action-types).


:::note

- Chaque action doit avoir un nom unique.
- Les écrans, numérotés numériquement comme Écran 1, Écran 2, etc., sont créés automatiquement lorsque le nombre d'actions dans la liste augmente jusqu'à 6 éléments.

:::


### Paramètres d'action

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widget Action rapide_android_order](@site/static/img/widgets/quick_action_widget_android_order.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget Action rapide_ios_order](@site/static/img/widgets/quick_action_widget_ios_order.png)

</TabItem>

</Tabs>

Les actions attribuées à un bouton d'action rapide sont regroupées en écrans. Ces groupes d'actions s'ouvrent lorsque vous appuyez sur ce bouton sur la carte. De nouveaux écrans sont automatiquement créés lorsque la liste d'actions dépasse *6 éléments*. Vous pouvez réorganiser les actions selon vos préférences en suivant ces étapes :

**Pour Android**.

1. Via l'écran de configuration :

    - Aller à *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*.
    - Utilisez *Maintenir et faire glisser* sur l'icône à deux lignes verticales pour réorganiser les actions.

2. Via le menu d'action rapide :

    - Ouvrez le menu d'action rapide, puis appuyez longuement sur *Ajouter une action*.
    - Utilisez *Maintenir et faire glisser* sur l'icône à deux lignes verticales pour réorganiser les actions.

**Pour iOS**.

- Naviguez vers *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/>*.
- Appuyez sur *Modifier* (icône crayon), puis *Maintenez et faites glisser* sur l'icône à trois lignes verticales pour réorganiser les actions.

#### Actions en boucle

![Bouton personnalisé Android](@site/static/img/widgets/actions_in_loop_andr.png)

Pour certaines actions, vous pouvez attribuer une liste de couches qui changeront en cercle à chaque appui : *Source de la carte*, *Style de la carte*, *Superposition*, *Sous-couche*, *Schéma de couleurs du terrain*, *Ajouter un profil*.

Le bouton vous permet d'attribuer une seule couche ou une liste de couches qui changent circulairement lorsqu'on appuie dessus ou avec une boîte de dialogue intermédiaire.

- **Afficher une boîte de dialogue intermédiaire**. Affiche une boîte de dialogue avec une liste de cartes.
- **Ne pas afficher de boîte de dialogue intermédiaire**. Les sources de carte changent dans un ordre défini.


### Changer la position sur la carte

Le widget *Action rapide* apparaît dans le coin inférieur de l'écran de la carte lorsque vous l'activez pour la première fois. Vous pouvez déplacer le widget vers n'importe quelle partie de l'écran en le maintenant et en le faisant glisser. Pour un placement précis et exact des boutons sur l'écran de la carte, ils sont automatiquement alignés sur la position de grille invisible la plus proche lorsqu'ils sont déplacés.

- **Apparence initiale**. Par défaut, le widget d'action rapide est placé dans le coin inférieur droit de l'interface de la carte.

    ![Vue du widget Action rapide](@site/static/img/widgets/quick_action_widget_view.png)

- **Déplacer le widget**. En appuyant longuement et en faisant glisser le widget, vous pouvez le repositionner sur l'écran, avec un alignement automatique des colonnes et des lignes.

    ![Appuyer sur le widget Action rapide](@site/static/img/widgets/quick_action_widget_tap.png)

- **Nouveau placement**. Une fois déplacé, le widget restera dans sa nouvelle position sur l'écran de la carte jusqu'à ce qu'il soit à nouveau ajusté manuellement.

    ![Déplacer le widget Action rapide](@site/static/img/widgets/quick_action_widget_move.png)

- **Plusieurs [boutons personnalisés](#custom-buttons)**. Vous pouvez ajouter plusieurs boutons d'action rapide à l'écran de la carte. Ces boutons peuvent également être personnalisés et repositionnés individuellement en utilisant la même méthode de glisser-déposer.

    ![Déplacer le widget Action rapide](@site/static/img/widgets/quick_action_widget_multi.png)


### Boutons personnalisés

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate android="true" ids="add_button"/>*

![Bouton personnalisé Android](@site/static/img/widgets/custom_button_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*

![Bouton personnalisé Android](@site/static/img/widgets/custom_button_ios.png)

</TabItem>

</Tabs>

Les **boutons personnalisés** sont des boutons supplémentaires sur la carte qui fonctionnent de la même manière que le bouton *Action rapide*. Vous pouvez créer un bouton avec une ou plusieurs actions et l'afficher sur l'écran de la carte. Les boutons personnalisés se trouvent dans la liste *Écran de configuration → Boutons → Boutons personnalisés*. Chaque bouton a une liste d'actions indépendante du profil et doit avoir un ***Nom*** unique, cependant, un bouton peut être activé/désactivé individuellement pour chaque **profil**.

Toutes les [actions](#action-types) disponibles sont identiques à celles qui peuvent être appliquées à l'action rapide par défaut. Les boutons personnalisés peuvent être configurés comme des boutons ***à action unique***, qui appliquent l'action sélectionnée immédiatement après avoir été appuyés, sans avoir besoin de naviguer dans un menu supplémentaire.


### Apparence du bouton Action rapide

<InfoAndroidOnly/>

![Apparence du bouton Action rapide](@site/static/img/widgets/qa_button_appearance_andr.png)

Vous pouvez modifier l'apparence des boutons Action rapide via : *Menu → Écran de configuration → Boutons personnalisés → Action rapide → menu à trois points → Apparence*. Ce paramètre offre des options pour personnaliser la taille, la forme, l'icône et l'opacité de l'arrière-plan du bouton, offrant un meilleur contrôle sur l'apparence des boutons sur votre écran.

Pour des paramètres de personnalisation détaillés, consultez l'article [Écran de configuration](../widgets/configure-screen.md#button-appearance), où vous pouvez apprendre à affiner l'apparence de chaque bouton pour qu'elle corresponde à vos préférences.


## Types d'actions

### Configurer la carte

| Action | Description |
|:-------------|:-------------|
| Afficher / Masquer <br/> [**Routes**](../map/vector-maps.md#routes) | Vous pouvez sélectionner les types de routes pour activer ou désactiver leur affichage. <br/> Certaines routes ont des paramètres supplémentaires. Par défaut, si vous n'avez rien sélectionné dans le menu [Configurer la carte](../map/configure-map-menu.md), le premier type de route de la liste sera attribué, sinon, un type de votre choix sera attribué. Vous pouvez en savoir plus dans l'article [Routes](../map/routes.md). <br/> - ***Routes cyclables***  &nbsp;(*Route*, *Réseaux de nœuds*) <br/> - ***Routes VTT***  &nbsp;(*Échelle VTT*, *IMBA*) <br/> - ***Routes de randonnée***  &nbsp;(*Échelle OSMC*, *Affiliation réseau*, *Réseaux de nœuds*) <br/> - ***Difficulté des sentiers de randonnée***  &nbsp;(*Échelle SAC*, *Échelle CAI*) <br/> - ***Pistes de ski*** <br/> - ***Routes équestres*** <br/> - ***Sports d'eau vive*** <br/> - ***Routes de course à pied*** <br/> - ***Parcours de fitness*** <br/> - ***Routes de voyage***  &nbsp;(*Traces*, *Carnets de voyage*, *Points*) <br/> |
| Afficher / Masquer <br/> [**Couches de topographie**](../plugins/topography.md#overview) | Toutes les données topographiques sont présentées sous forme de couches de carte distinctes. Vous pouvez rapidement basculer la visibilité de ces couches avec Action rapide. <br/> - ***Courbes de niveau*** <br/> - ***Terrain***  &nbsp;(*Selon la couche sélectionnée dans le menu [Configurer la carte](../map/configure-map-menu.md)*, *Ombrage*, *Pente*, ou *Altitude* *sera affiché.*) |
| Changer <br/> [**Schéma de couleurs du terrain**](../plugins/topography.md#modify-color-scheme) | Vous permet de sélectionner une ou plusieurs palettes dans une liste de palettes existantes, qui changeront lorsque vous appuierez sur le bouton. |
| Afficher / Masquer <br/> [**Couches météo**](../plugins/weather.md#weather-layers) | Toutes les données météorologiques sont présentées sous forme de couches de carte distinctes. Avec Action rapide, vous pouvez accéder rapidement pour basculer la visibilité de ces couches sur la carte. <br/> - ***Couche de précipitations*** <br/> - ***Couche de nuages*** <br/> - ***Couche de pression*** <br/> - ***Couche de vent*** <br/> - ***Couche de température*** |
| Ouvrir <br/> [**Écran météo**](../plugins/weather.md) <br /> *Android uniquement* | Ouvre l'[*écran de prévisions météo*](../plugins/weather.md#weather-forecast-screen) avec les informations détaillées. |
| Afficher / Masquer <br/> [**Favoris**](../personal/favorites.md#view-on-the-map) | Afficher ou masquer les points favoris sur la carte. |
| Afficher / Masquer <br/> [**Traces**](../personal/tracks/manage-tracks.md#show-tracks-on-map) | Afficher ou masquer les dernières traces visibles sur la carte. |
| Afficher / Masquer <br/> [**POI**](../map/point-layers-on-map.md#points-of-interest-poi) | Activer ou désactiver l'affichage des couches de POI avec les catégories sélectionnées sur la carte.<br/>Vous pouvez sélectionner plusieurs catégories de POI. L'action remplace les catégories de POI sélectionnées dans Configurer la carte sans utiliser les Actions rapides. |
| Changer <br/> [**Mode carte**](../map/vector-maps.md#map-mode) | Accès rapide pour basculer entre les modes jour et nuit. |
| Changer <br/> [**<Translate ios="true" ids="quick_action_map_source_title"/>**](../map/raster-maps.md) | Le bouton vous permet d'attribuer une seule source de carte ou une liste de sources qui changent circulairement lorsqu'on appuie dessus ou avec une boîte de dialogue intermédiaire. <br/> - *Afficher une boîte de dialogue intermédiaire*. Affiche une boîte de dialogue avec une liste de cartes. <br/> - *Ne pas afficher de boîte de dialogue intermédiaire*. Les sources de carte changent dans un ordre défini. <br/> - *Nom affiché* - *Source de carte* >. ">" après le nom de la carte indique quelle source de carte est actuellement sélectionnée. <br/> - *Nom affiché* - > *Source de carte suivante*. ">" avant le nom de la carte indique quelle sera la prochaine source de carte sélectionnée si l'action est exécutée. <br/> - *Note*. Pour changer de source de carte dans OsmAnd, vous pouvez soit configurer une seule action rapide qui vous permet de basculer entre plusieurs sources de carte, soit créer plusieurs actions rapides distinctes, chacune pour une source de carte spécifique. |
| Afficher / Masquer <br /> [**Transports en commun**](../map/vector-maps.md#transport) | Activer ou désactiver la couche de carte des transports en commun <br /> - *Type de transport*. Au premier appui, vous pouvez sélectionner un ou plusieurs types de transport, y compris *Arrêts de transport*, *Lignes de bus, trolleybus et navette*, *Lignes de tramway et de train*, *Lignes de métro*. |
| Changer <br/> [**<Translate ios="true" ids="map_settings_over"/>**](../map/raster-maps.md) | Créez une liste de sources de carte en tant que superposition de carte et parcourez-les. <br /> - *Note*. Pour changer les superpositions de carte dans OsmAnd, vous pouvez soit configurer une seule action rapide qui vous permet de basculer entre plusieurs superpositions de carte, soit créer plusieurs actions rapides distinctes, chacune pour une superposition de carte spécifique. |
| Changer <br/> [**<Translate ios="true" ids="map_settings_under"/>**](../map/raster-maps.md) | Créez une liste de sources de carte en tant que sous-couche de carte et parcourez-les. <br /> - *Note*. Pour changer les superpositions de carte dans OsmAnd, vous pouvez soit configurer une seule action rapide qui vous permet de basculer entre plusieurs sous-couches de carte, soit créer plusieurs actions rapides distinctes, chacune pour une sous-couche de carte spécifique. |
| Changer <br/> [**<Translate android="true" ids="quick_action_map_style"/>**](../map/vector-maps.md#default-map-styles) | Créez une liste de styles de carte pour les cartes vectorielles et parcourez-les. <br /> - *Note*. Pour changer les styles de carte dans OsmAnd, vous pouvez soit configurer une seule action rapide qui vous permet de basculer entre plusieurs superpositions de carte, soit créer plusieurs actions rapides distinctes, chacune pour un style de carte spécifique. |
| Afficher / Masquer <br/> [**Couche Mapillary**](../plugins/mapillary.md) | Vous permet de visualiser les couches de carte avec des images au niveau de la rue fournies par Mapillary. |
| Afficher / Masquer <br/> [**<Translate android="true" ids="osm_notes"/>**](../plugins/osm-editing.md) | Vous pouvez choisir d'afficher ou de masquer toutes les notes OSM sur la carte en un seul appui sur le bouton. |


### Interface

| Action | Description |
|:-------------|:-------------|
| Naviguer <br/> **Écran précédent** | Un bouton pour naviguer vers l'écran précédent. |
| Afficher / Masquer <br/> [**Vue de navigation**](../navigation/setup/route-navigation.md) | Bascule la visibilité de la vue de l'écran de navigation. |
| Afficher / Masquer <br/> [**Vue de recherche**](../search/search-all.md) | Ouvre ou ferme la vue de recherche. |
| Afficher / Masquer <br/> [**Menu latéral**](../start-with/main-menu.md) | Bascule la visibilité du menu latéral principal pour accéder aux fonctionnalités principales. |
| Activer / Désactiver <br/> [**Verrouillage de l'écran tactile**](../map/interact-with-map.md#touch-screen-lock) | Active ou désactive le verrouillage de l'écran tactile pour éviter les interactions involontaires. |


### Interactions avec la carte

| Action | Description |
|:-------------|:-------------|
| Carte <br/> [**Zoom avant**](../map/interact-with-map.md) | Zoom avant sur la carte avec augmentation simultanée de la quantité de données affichées. |
| Carte <br/> [**Zoom arrière**](../map/interact-with-map.md) | Réduction de l'échelle de la carte. Il est pratique de l'utiliser avec le [widget Développeur - Niveau de zoom](../widgets/info-widgets.md#developer-widgets). |
| Déplacer <br/> [**Carte vers le bas**](../map/interact-with-map.md) | Vous pouvez utiliser le bouton d'action rapide pour déplacer la carte vers le bas. |
| Déplacer <br/> [**Carte vers le haut**](../map/interact-with-map.md) | Lorsque vous appuyez, l'écran de la carte se déplace vers le haut. |
| Déplacer <br/> [**Carte vers la gauche**](../map/interact-with-map.md) | Lorsque vous appuyez sur le bouton, l'écran de la carte se déplace vers la gauche. |
| Déplacer <br/> [**Carte vers la droite**](../map/interact-with-map.md) | Avec un bouton d'action rapide, vous pouvez déplacer la carte vers la droite. |
| Déplacer <br/> [**Vers Ma position**](../map/interact-with-map.md#my-location-and-zoom) | Déplace la carte vers la position *Ma position*. |


### Mes lieux

| Action | Description |
|:-------------|:-------------|
| Démarrer / Mettre en pause <br/> [**Enregistrement de trajet**](../plugins/trip-recording.md#new-track-recording) | Commencer une session d'enregistrement de la trace actuelle ou mettre en pause pour arrêter temporairement sans terminer le trajet. |
| Démarrer <br/> [**Nouveau segment de trajet**](../plugins/trip-recording.md#overview-screen) | Démarrer un nouveau segment du trajet sans arrêter l'enregistrement global. |
| Enregistrer <br/> [**Trajet enregistré et continuer**](../plugins/trip-recording.md#current-track-recording) | Enregistrer l'enregistrement de trajet actuel et continuer l'enregistrement sans interruption. |
| Terminer <br/> [**Enregistrement de trajet**](../plugins/trip-recording.md#current-track-recording) | Terminer la session d'enregistrement de trajet actuelle. |
| Ajouter <br/> [**Favori**](../map/configure-map-menu.md#map-layers) | Ajoute un favori à l'emplacement de carte sélectionné (central). <br /> - *Afficher une boîte de dialogue intermédiaire*. Affiche une boîte de dialogue de confirmation. <br /> - *Groupe*. Ajoute un favori au groupe sélectionné. <br /> - *Couleur*. Ajoute un favori avec une couleur présélectionnée <br /> - *Nom*. Ajoute un favori avec le préfixe de nom spécifié. |
| Ajouter <br/> [**Point de passage de trace**](../map/point-layers-on-map.md#track-waypoints) | Ajoute un nouveau point de passage de trace à la [trace en cours d'enregistrement](../plugins/trip-recording.md) ou à [toute trace dans Mes lieux](../personal/tracks/manage-tracks.md). <br /> - *Afficher une boîte de dialogue intermédiaire*. Affiche une boîte de dialogue de confirmation. <br /> - *Groupe*. Ajoute un favori au groupe sélectionné. <br /> - *Couleur*. Ajoute un favori avec une couleur présélectionnée <br /> - *Nom*. Ajoute un favori avec le préfixe de nom spécifié. |
| Ajouter <br/> [**Marqueur de carte**](../map/configure-map-menu.md#map-layers) | Ajoute un marqueur à un emplacement de carte sélectionné (centre). |
| Ajouter <br/> [**Place de parking**](../plugins/parking.md) | Ajoute un parking à un emplacement de carte sélectionné (centre). L'ancienne position de parking est supprimée. |
| Ajouter <br/> [**POI**](../map/point-layers-on-map.md#points-of-interest-poi) | Ajoute un POI à un emplacement de carte sélectionné (centre) (identique à l'action du menu contextuel). <br /> - *Afficher une boîte de dialogue intermédiaire*. Affiche une boîte de dialogue de confirmation. <br /> - *Type de POI* (facultatif). Présélectionne le type de POI OSM. <br /> - *Balise/Valeur* (multiple). Ajoute des balises/valeurs [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_Features) |
| Ajouter <br/> [**Note OSM**](../plugins/osm-editing.md#create--modify-osm-note) | Ajoute une [note OSM](https://wiki.openstreetmap.org/wiki/Notes) <br /> - *Afficher une boîte de dialogue intermédiaire*. Affiche une boîte de dialogue de confirmation. <br /> - *Message*. Ajoute un message par défaut à la note. |
| Ajouter <br/> [**Notes multimédia**](../plugins/audio-video-notes.md) | Démarre l'enregistrement de notes audio/photo/vidéo pour un emplacement de carte sélectionné (centre). |
| Créer <br/> [**Nouvel itinéraire**](../plan-route/create-route.md) <br /> *Android uniquement* | Ouvre l'outil [Planifier un itinéraire](../plan-route/create-route.md) et crée un itinéraire pour l'emplacement sélectionné (central) sur la carte. |


### Navigation

| Action | Description |
|:-------------|:-------------|
| Ajouter <br/> [**<Translate android="true" ids="quick_action_first_intermediate"/>**](../navigation/setup/route-navigation.md#intermediate-destinations) | Vous pouvez sélectionner le centre de l'écran de la carte comme premier point intermédiaire. La destination précédente reste la même. |
| Activer / Désactiver <br/> [**Invites vocales**](../navigation/guidance/voice-navigation.md) | Couper ou réactiver le guidage vocal pendant la navigation. |
| Définir <br/> [**Point de départ**](../navigation/setup/route-navigation.md#set-destinations) | Marquer un emplacement de carte sélectionné (centre) comme point de départ. |
| Définir <br/> [**Destination**](../navigation/setup/route-navigation.md#set-destinations) | Ajouter l'emplacement sélectionné (central) sur la carte comme destination. La destination précédente devient le dernier point intermédiaire. |
| Remplacer <br/> [**Destination**](../navigation/setup/route-navigation.md#intermediate-destinations) | Définir / Remplacer un emplacement de carte sélectionné (centre) comme destination. La destination précédente est supprimée. |
| Activer / Désactiver <br/> [**Zoom automatique de la carte**](../map/interact-with-map.md) | Activer ou désactiver le zoom automatique de la carte pendant la navigation. |
| Démarrer/arrêter <br/> [**Navigation**](../navigation/setup/route-navigation.md#start--stop-navigation) | Démarrer la navigation (s'il y a un point de destination) ou arrêter la navigation. |
| Mettre en pause / Reprendre <br/> [**Navigation**](../navigation/setup/route-navigation.md#pause--resume-navigation) | Mettre en pause / Reprendre la navigation. |
| Supprimer <br/> [**Point de destination suivant**](../navigation/setup/route-navigation.md#intermediate-destinations) | Supprime le point intermédiaire suivant, s'il est présent, sinon supprime la destination et affiche la boîte de dialogue de fin de navigation. L'action est inactive si vous n'avez pas de destination. |
| Simuler <br/> [**Position par GPX**](../plugins/development.md#gpx-track-simulation) | Simule la position et le mouvement de votre appareil à l'aide d'une trace GPX. |


### Paramètres

| Action | Description |
|:-------------|:-------------|
| Changer <br/> [**Profil d'application**](../personal/profiles.md) | Créez une liste de profils d'application et parcourez-les. <br /> - *Afficher une boîte de dialogue intermédiaire*. Affiche une boîte de dialogue avec une liste de profils. <br /> - *Ne pas afficher de boîte de dialogue intermédiaire*. Les profils changent dans un ordre défini. <br /> - *Note*. Vous pouvez personnaliser une seule action qui vous permet de basculer entre plusieurs profils, ou créer plusieurs actions distinctes, chacune pour un profil spécifique. |
| Changer <br/> [**Profil d'application vers le suivant**](../personal/profiles.md) | Bascule vers le profil suivant dans la liste. |
| Changer <br/> [**Profil d'application vers le précédent**](../personal/profiles.md) | Bascule vers le profil précédent dans la liste. |
| Changer <br/> [**<Translate android="true" ids="quick_action_display_position_in_center"/>**](../widgets/configure-screen.md#display-position-location-position-on-screen) <br /> *Android uniquement* | Vous permet de définir le placement du curseur *Ma position* sur la carte. Active ou désactive le curseur pour qu'il soit toujours au centre de l'écran. |
| Changer <br/> [**Position de l'emplacement sur l'écran**](../widgets/configure-screen.md#display-position-location-position-on-screen) <br /> *iOS uniquement* | Vous permet d'activer ou de désactiver l'affichage de la position du curseur Ma position précédemment sélectionnée sur la carte. |


## Utiliser le clavier pour les actions

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![Appareils externes](@site/static/img/map/external_custom_2_andr.png)

En utilisant la fonctionnalité de l'outil Action rapide, vous pouvez attribuer les actions requises aux touches de votre périphérique d'entrée externe. Une description se trouve dans l'article [Interagir avec la carte](../map/interact-with-map.md#custom-input-device-type).


## Articles connexes

- [Écran de configuration](./configure-screen.md)
- [Boutons de carte](./map-buttons.md)
- [Widgets d'information](./info-widgets.md)
- [Widgets de navigation](./nav-widgets.md)
- [Règle de rayon et Règle](./radius-ruler.md)
- [Widgets de marqueurs](./markers.md)

> *Cet article a été mis à jour pour la dernière fois en avril 2025*

