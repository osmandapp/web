---
source-hash: 973e69c0cb886cadc73cf960009690fe7b3a6cf4ee2e80158f43cb20e77d05c0
sidebar_position: 5
title:  Apparence de la trace
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

La fonction **Apparence de la trace** permet aux utilisateurs de personnaliser la façon dont les traces sont affichées sur la carte. Cela inclut l'ajustement de la couleur, de la largeur, des indicateurs de direction et d'autres éléments visuels. La personnalisation de l'apparence de la trace permet de différencier plusieurs traces, de mettre en évidence des itinéraires spécifiques et d'améliorer la lisibilité de la carte.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Aperçu de l'apparence de la trace Android](@site/static/img/map/track-appear-and-1.png) ![Menu Apparence de la trace Android](@site/static/img/map/track_appearence_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Apparence de la trace iOS](@site/static/img/map/track_appearence_1_ios.png) ![Menu Apparence de la trace iOS](@site/static/img/map/track_appearence_2_ios.png)

</TabItem>

</Tabs>


## Accès au menu {#access-to-the-menu}

Vous pouvez modifier l'apparence de la trace en utilisant l'une des méthodes suivantes :

- **Depuis Mes Lieux**. Ouvrez *Menu → Mes Lieux → Traces*, sélectionnez une trace, appuyez sur l'*icône Apparence* dans le [menu contextuel de la trace](../../map/tracks/track-context-menu.md#overview).
- **Depuis la carte**. Appuyez directement sur une trace sur la carte, puis appuyez sur l'*icône Apparence* dans la section *Aperçu*.
- **Depuis l'enregistrement de trace**. Modifiez l'apparence de la trace en cours d'enregistrement via le [menu contextuel d'enregistrement de trace](../../plugins/trip-recording.md#сurrent-track-recording).
- **Depuis le menu Configurer la carte**. Allez dans *<Translate android="true" ids="shared_string_menu,configure_map,show_gpx"/> →* **&#8942;** *→ <Translate android="true" ids="change_appearance"/>* pour les traces affichées.


## Paramètres d'apparence de la trace {#track-appearance-settings}

### Couleur {#color}

:::tip purchases
Certains paramètres ne peuvent être utilisés qu'avec *OsmAnd Pro*. <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">Android</a> et <a href="https://osmand.net/docs/user/purchases/ios#free-and-paid-features">iOS</a> Fonctionnalités gratuites et payantes.
:::

![Apparence](@site/static/img/map/appearance_color_andr.png)

Vous pouvez définir la couleur de la trace manuellement ou utiliser la **visualisation de données basée sur la couleur** (par exemple, vitesse, altitude, pente). Si une trace manque de certaines données, OsmAnd affiche les sections manquantes en gris.

**Options de couleur disponibles :**

- **Paramètres gratuits** : *<Translate android="true" ids="track_coloring_solid"/> couleur*, *<Translate android="true" ids="shared_string_speed"/>* (si enregistré) et *<Translate android="true" ids="altitude"/>* (si enregistré).

    ![Menu Apparence de la trace Couleur de la trace Android](@site/static/img/map/track_appearance_menu_track_color_android.png) ![Apparence Couleur de la trace Android](@site/static/img/map/track_appearance_menu_track_color_ios-2.png)

- [Fonctionnalité Pro](../../purchases/index.md)) : *<Translate android="true" ids="shared_string_slope"/>*, *<Translate android="true" ids="routeInfo_roadClass_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_smoothness_name"/>*, *<Translate android="true" ids="routeInfo_winter_ice_road_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_horse_scale_name"/>*.

Pour plus de détails sur la personnalisation de l'apparence de la ligne d'itinéraire, voir [Écran de carte pendant la navigation](../../navigation/guidance/map-during-navigation.md#color) et sur la sélection et la création d'une couleur personnalisée, voir [Schémas de couleurs](../../personal/color-palette-schemes.md#routes).


### Largeur {#width}

![Menu Apparence de la trace Épaisseur de la trace Android](@site/static/img/map/track_appearance_menu_track_thickness_android.png) ![Apparence de la trace](@site/static/img/map/track_appearance_width_andr.png)

Vous pouvez personnaliser l'apparence de la trace dans plusieurs menus de l'application :

- [*Trace → Apparence*](../../personal/tracks/manage-tracks.md#folder-menu).
- [*Paramètres de navigation → Personnaliser la ligne d'itinéraire*](../../navigation/guidance/navigation-settings.md#customize-route-line).
- [*Mes Lieux → Onglet Traces → n'importe quel dossier → Apparence par défaut*](../../personal/tracks/manage-tracks.md#folder-menu).

Ajustez la largeur de la trace pour améliorer la visibilité sur la carte.

- **Options prédéfinies** : **Fine, Moyenne** et **Épaisse**.

- **Largeur personnalisée** : réglable de 1 à 24 px à l'aide d'un curseur.

- **Largeur basée sur le profil** : peut être définie via *Paramètres de navigation → [Personnaliser la ligne d'itinéraire](../../navigation/guidance/navigation-settings.md#customize-route-line)*.


### Intervalle de division {#split-interval}

![Menu Apparence de la trace Intervalle de division](@site/static/img/map/track_appearance_menu_split_interval_android.png) ![Intervalle de division](@site/static/img/map/track_appearance_menu_split_interval_ios.png)

Sélectionnez si vous souhaitez diviser l'intervalle sur la trace **par distance ou par temps**.

### Flèches de direction {#direction-arrows}

![Menu Apparence de la trace Flèches de direction Android](@site/static/img/map/track_appearance_menu_direction_arrows_android.png)

Ajoute des **marqueurs fléchés** le long de la trace pour indiquer la direction du mouvement.

### Icônes de début et de fin {#start-and-finish-icons}

![Menu Apparence de la trace Icônes de début et de fin Android](@site/static/img/map/track_appearance_menu_sf_icons_android.png)

Vous permet de sélectionner si vous souhaitez afficher les **icônes de début et de fin** pour les segments de trace.

### Joindre les lacunes {#join-gaps}

Connecte les **segments de trace** qui ont été interrompus en raison d'une perte de GPS ou d'une pause dans l'enregistrement. La fonctionnalité **<Translate android="true" ids="join_segments"/>** (*Android*) ou **<Translate ios="true" ids="gpx_join_gaps"/>** (*iOS*) vous permet de connecter ces lacunes dans la trace GPX sélectionnée à l'aide de lignes droites.

### Réinitialiser à l'original {#reset-to-original}

Restaure tous les **paramètres d'apparence de la trace** à leurs valeurs par défaut.


## Trace 3D {#3d-track}

:::info Fonctionnalité payante
La **Trace 3D** est une fonctionnalité payante **OsmAnd Pro** pour [iOS](../../purchases/ios.md#pro-features) et [Android](../../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menu Apparence de la trace Visualisation 3D](@site/static/img/map/3d_track_appearance_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Apparence de la trace Visualisation 3D](@site/static/img/map/3d_track_appearance_ios.png)

</TabItem>

</Tabs>

La fonctionnalité **Trace 3D** génère une visualisation tridimensionnelle en intégrant des données d'élévation dans des traces 2D standard. Cette fonctionnalité crée une représentation améliorée en profondeur, permettant une analyse précise de la trace par rapport au terrain. En incorporant les détails d'élévation, la trace 3D offre une vue plus complète de la topographie et du contexte géographique de l'itinéraire.

### Paramètres de la trace 3D {#3d-track-settings}

**Hauteur du mur**
Vous pouvez visualiser une trace 3D par altitude et autres données disponibles dans la trace, ou par altitude fixe.

- **<Translate android="true" ids="visualized_by"/>** : &nbsp;*Altitude*, &nbsp;*Vitesse*, &nbsp;*Hauteur fixe*. Données du capteur 3D : &nbsp;*Fréquence cardiaque*, &nbsp;*Cadence de vélo*, &nbsp;*Puissance de vélo*, &nbsp;*Température*, &nbsp;*Vitesse de vélo*.

- **<Translate android="true" ids="vertical_exaggeration"/>**. Si visualisé par *Altitude* ou *Vitesse*, vous pouvez mettre à l'échelle les données 3D pour obtenir une visualisation plus proéminente de la trace 3D dans la plage de *Aucun* à *x3.0*.

- **<Translate android="true" ids="wall_height"/>**. Si visualisé par *Hauteur fixe*, définissez la hauteur fixe de la trace 3D en définissant son élévation sur la carte dans la plage de *Aucun* à *2000 m*.

- Vous pouvez le combiner avec le [Relief 3D](../../plugins/topography.md#3d-relief). Si la source des données 3D n'est pas l'altitude, la représentation 3D sera une combinaison de l'altitude du relief et des données sélectionnées, telles que la vitesse ou la fréquence cardiaque.

**<Translate android="true" ids="wall_color"/>**
Personnalise la **couleur de la trace 3D** à l'aide de dégradés ou d'une visualisation basée sur les données.
Les options incluent : *Aucun*, &nbsp;*Solide*, &nbsp;*Dégradé descendant*, &nbsp;*Dégradé ascendant*, &nbsp;*Altitude*, &nbsp;*Pente*, &nbsp;*Vitesse*.

**<Translate android="true" ids="track_line"/>**
Ajoute une [ligne surlignée](#color) en haut ou en bas de la trace 3D.
Les options incluent : *Haut*, &nbsp;*Bas*, &nbsp;*Haut et bas*.

> **NOTE** : *La **version Android** de l'application nécessite que le moteur de rendu de carte [Version 2 (OpenGL)](../../personal/global-settings.md#map-rendering-engine) soit activé pour utiliser la visualisation de trace 3D.*


### Cas d'utilisation {#use-cases}

La fonctionnalité de trace 3D est très bénéfique pour des activités comme le parapente, où la visualisation de votre trajectoire de vol peut offrir des informations plus approfondies. En rendant la trace en 3D, vous pouvez exploiter des fonctionnalités telles que la **Hauteur du mur** et la **Couleur du mur** pour extraire des informations visuelles précieuses pour l'analyse.

1. **Visualiser par vitesse avec 3D**.
    Un cas d'utilisation courant consiste à utiliser des traces 3D pour visualiser les variations de vitesse. Cela vous permet de localiser des sections spécifiques de la trace où vous avez ralenti ou accéléré.

    Avec la couleur du mur basée sur la pente, vous pouvez observer comment le terrain, en particulier les collines et les pentes, a eu un impact sur votre vitesse. Cette combinaison de visualisation de la vitesse et de la pente fournit une compréhension détaillée des performances tout au long de l'activité.

2. **Visualiser par capteur cardiaque avec relief 3D**.
    Une autre application intéressante consiste à combiner les données du capteur de fréquence cardiaque avec des cartes de relief 3D. Cela vous permet de mapper les fluctuations de la fréquence cardiaque directement sur le terrain, vous donnant une vue complète de la façon dont les changements d'altitude peuvent avoir influencé votre effort physique.

    La fonctionnalité de relief 3D, qui exagère l'altitude, fonctionne indépendamment de la vue de trace 3D. Deux paramètres d'exagération verticale peuvent être ajustés pour mieux comprendre la corrélation entre la fréquence cardiaque et l'élévation du terrain.

3. **Visualiser la hauteur de la trace et la ligne de couleur de la pente sur une vue de la Terre plate.**
    Lors de la visualisation des données d'altitude, il est recommandé d'utiliser une vue de la Terre plate pour éviter des problèmes tels que les erreurs GPS, qui pourraient faire apparaître des sections de la trace sous terre.

    Dans ce scénario, les changements de pente peuvent être visualisés séparément le long de la ligne de trace, tandis que la couleur du mur est utilisée pour représenter l'altitude. Cette méthode garantit que même avec des inexactitudes potentielles des données, vous recevez toujours une visualisation claire et précise de la pente et de l'élévation.

## Modifier l'apparence de plusieurs traces {#change-appearance-for-multiple-tracks}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Apparence Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_1_andr.png) ![Apparence Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Modifier l'apparence](@site/static/img/map/tracks_change_appear_3_ios.png) ![Modifier l'apparence](@site/static/img/map/tracks_change_appear_2_ios.png)

</TabItem>

</Tabs>

L'onglet [Traces](../../personal/tracks/manage-tracks.md) affiche automatiquement toutes les traces jamais enregistrées, créées ou importées. Elles sont organisées par dossier ou affichées sous forme de liste en dessous.

Modifiez l'apparence de plusieurs traces dans *Mes Lieux → Traces* :

- **Modifier l'apparence par défaut** - Applique les paramètres à toutes les traces d'un [dossier](../../personal/tracks/manage-tracks.md#folder-menu).
- **Réinitialiser à l'original** - Restaure les paramètres de trace individuels.

- [Mode de sélection](../../personal/tracks/manage-tracks.md#selection-mode) - Modifie l'apparence de traces spécifiques dans le dossier sélectionné ou de la liste entière dans l'onglet Traces.
    - Sélectionnez le *menu à trois points* dans le coin supérieur droit de l'onglet Traces et appuyez sur *Sélectionner*.
    - Appuyez ensuite sur le *menu à trois points* en haut de l'écran et sélectionnez *Modifier l'apparence*.

Options de personnalisation de l'apparence en masse :

- **Flèches de direction** - Ajoute des [indicateurs de mouvement](#direction-arrows).
    États : *Inchangé*, &nbsp;*Original*, &nbsp;*Activé*, &nbsp;*Désactivé*.

- **Afficher les icônes de début et de fin** - [Affiche les marqueurs](#start-and-finish-icons) pour les points de début et de fin de la trace.
    États : *Inchangé*, &nbsp;*Original*, &nbsp;*Activé*, &nbsp;*Désactivé*.

- **Couleur** – Applique une [coloration](#color) manuelle ou basée sur les données.

- **Largeur** – Ajuste la [largeur de la ligne de trace](#width) à l'aide de préréglages ou manuellement.

- **Intervalle de division** – [Définit l'intervalle](#split-interval) pour les marqueurs de distance/temps.
    États : *Inchangé*, &nbsp;*Original*, &nbsp;*Sélectionner* : *Temps* ou *Distance*.

Original et inchangé :

- **Original** - Restaure les paramètres d'origine du fichier de trace.

- **Inchangé** - Conserve les paramètres actuels pendant la session d'édition.


## Couleurs de trace dans les fichiers GPX {#track-colors-in-gpx-files}

OsmAnd prend en charge les **couleurs de trace personnalisées** dans les fichiers GPX à l'aide de la balise `<osmand:color>` dans la section `<extensions>` d'un élément `<trk>`. Cela permet aux utilisateurs de définir des couleurs pour les traces individuelles, améliorant la différenciation visuelle lorsque plusieurs traces sont affichées sur la carte.

Pour spécifier une couleur pour une trace, utilisez le format suivant :

```xml
<trk>
  <name>Example Track</name>
  <extensions>
    <osmand:color>#FF0000</osmand:color>
  </extensions>
</trk>
```

- La balise `<osmand:color>` accepte les **codes couleur hexadécimaux** (par exemple, `#FF0000` pour le rouge).
- Si plusieurs traces existent dans un fichier GPX, chaque trace peut avoir sa propre balise `<osmand:color>`.


**Comportement dans OsmAnd :**

1. **Attribution de couleur par défaut** :

    - Lorsqu'une **trace GPX est importée en tant que trace unique** (option ***Importer en tant qu'une seule trace***), la trace entière se voit attribuer la **couleur GPX par défaut** (rouge).
    - Dans OsmAnd **4.9.10 et versions ultérieures**, ce problème a été résolu : les couleurs de trace individuelles sont désormais conservées lors de l'importation.

2. **Affichage en une seule couleur pour les traces fusionnées** :

    - Si les traces sont **fusionnées** à l'aide de ***Joindre les segments***, la trace résultante est traitée comme **une trace continue avec un seul segment**.
    - La représentation multicolore n'est **pas prise en charge** pour les traces fusionnées.
    - La trace fusionnée sera affichée à l'aide de la **couleur GPX principale** (par défaut : rouge), même si les segments de trace individuels avaient à l'origine des couleurs différentes.

3. **Priorité des paramètres d'apparence** :

    - OsmAnd prend actuellement en charge les **paramètres de couleur et de largeur uniquement pour la trace entière**.
    - Ces paramètres d'apparence sont stockés dans les **extensions GPX de niveau supérieur**.
    - Si une couleur ou une largeur est **définie au niveau supérieur** (soit dans le fichier GPX, soit manuellement dans OsmAnd), ce paramètre aura la priorité sur les couleurs attribuées aux segments de trace individuels.

**Solution de contournement pour les traces multicolores :**

- Pour conserver les **couleurs individuelles pour plusieurs traces**, **importez les traces séparément** au lieu de les fusionner.

- Ajustez les couleurs de trace manuellement dans les **Paramètres d'apparence de la trace** :

  - Ouvrez la trace dans OsmAnd.
  - Appuyez sur la trace pour ouvrir le **Menu contextuel**.
  - Sélectionnez **Apparence**.
  - Choisissez la couleur préférée.

- Cela garantit que chaque trace conserve sa **représentation de couleur prévue**, même si le fichier GPX contenait à l'origine plusieurs segments avec des couleurs différentes.


## Articles connexes {#related-articles}

- [Menu contextuel de la carte](../map-context-menu.md)
- [Configurer la carte](../configure-map-menu.md)
- [Points sur la carte](../point-layers-on-map.md)
- [Traces](../tracks/index.md)
- [Menu contextuel des traces](../tracks/track-context-menu.md)
- [Enregistrement de trajet](../../plugins/trip-recording.md)

> *Cet article a été mis à jour pour la dernière fois en février 2025*