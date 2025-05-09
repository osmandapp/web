---
sidebar_position: 4
title:  Menu contextuel de la trace
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

Le *menu contextuel de la trace* fournit des informations sur la *[Trace](../../personal/tracks/index.md)* sous forme textuelle et [graphique](#altitude--speed-graphs). Il vous permet d'ajouter des informations, d'apporter des modifications, d'éditer et d'effectuer diverses autres actions avec la trace. Vous pouvez accéder au *menu contextuel de la trace* en appuyant simplement sur la trace souhaitée sur la carte ou en utilisant le menu *[Mes lieux](../../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*). Vous devrez peut-être ouvrir le dossier de la trace et sélectionner la trace souhaitée en appuyant dessus.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Overview track context menu Android](@site/static/img/personal/tracks/track_context_overview_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Overview track context menu iOS](@site/static/img/personal/tracks/track_context_overview_2_ios.png)

</TabItem>

</Tabs>


## Aperçu de la trace

Lorsque vous appuyez sur une trace, le premier écran du *menu contextuel de la trace* s'ouvre - l'*onglet Aperçu*. Sur cet onglet, vous pouvez trouver un résumé sur la trace choisie (*[Panneau d'information](#info-panel)*) et effectuer les actions les plus courantes avec la trace en utilisant le *[menu Actions de la trace](#track-actions)*. Vous pouvez voir la [description et les informations de service](#description-and-info) sur votre trace si vous faites glisser l'onglet Aperçu vers le haut.

<!--
You can [short tap](../../map/map-context-menu.md#select-route-short-tap-for-android) on the track on the map → <Translate android="true" ids="shared_string_overview"/> → click to "eye" button for not showing the track on the map.
-->

### Panneau d'information

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Info panel overview Android](@site/static/img/personal/tracks/track_context_info_panel_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Info panel overview iOS](@site/static/img/personal/tracks/track_context_info_panel_ios.png)

</TabItem>

</Tabs>

En haut du panneau d'information, vous pouvez voir le nom de la trace et le symbole utilisé pour la marquer (*Android uniquement*). Le nom de la trace peut être modifié à l'aide de la fonction de renommage dans le [menu Options](#options). Certaines traces (principalement les *[Guides de voyage](../../plan-route/travel-guides.md#manage-as-gpx-track)*) peuvent avoir une courte *[description](#description-and-info)* et (ou) une image sous le *Nom de la trace*. Une flèche indique la *Direction vers le point le plus proche de la trace* depuis [Ma position](../../map/interact-with-map#my-location-and-zoom).

Le panneau d'information fournit également des informations sur les éléments suivants :

- *<Translate android="true" ids="distance"/>*. Affiche la longueur de la trace.
- *<Translate android="true" ids="altitude_ascent"/>* / *<Translate android="true" ids="altitude_descent"/>*. Affiche la somme totale des ascensions et des descentes pendant le trajet.
- *<Translate android="true" ids="altitude_range"/>*. Indique l'altitude min et max sur une trace.

:::note
Si votre trace a été créée dans OsmAnd ou toute autre application de suivi (de sorte que ses points ont des balises [`time` et `speed`](../../plugins/trip-recording#recorded-gpx-file)), le panneau d'information contiendra également des informations sur la *<Translate android="true" ids="average_speed"/>*, la *<Translate android="true" ids="max_speed"/>*, la *<Translate android="true" ids="shared_string_time_span"/>* (*Android*) ou le *<Translate ios="true" ids="total_time"/>* (*iOS*) (la durée entre les points de début et de fin de la trace), la *<Translate android="true" ids="shared_string_time_moving"/>* (la somme du temps de conduite).
:::

### Actions de la trace

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track context menu overview Android 3](@site/static/img/personal/tracks/track_context_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track context menu overview iOS 3](@site/static/img/personal/tracks/track_context_actions_ios.png)

</TabItem>

</Tabs>

- Boutons **Afficher / masquer**. Modifie la visibilité de la trace sur la carte.
- [Apparence](./appearance.md). Personnalisez l'apparence de votre trace.
- **Modifier la trace** (*Android*). Ouvre la trace dans l'[outil Planifier un itinéraire](../../plan-route/create-route.md).
- **Exporter** (*iOS*). Vous permet d'[exporter une trace](../../personal/tracks/manage-tracks.md#export).
- **Directions**. Ouvre la trace en mode *[Navigation](../../navigation/setup/gpx-navigation.md#start-gpx-navigation)*.


### Options

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track menu options Android](@site/static/img/personal/tracks/track_menu_options_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu options Android](@site/static/img/personal/tracks/track_menu_options_ios.png)

</TabItem>

</Tabs>

Le menu **Options** vous permet de gérer et de modifier la trace sélectionnée avec divers outils et paramètres.

- **<Translate android="true" ids="shared_string_show_on_map"/>** – Contrôle la visibilité de la trace sur la carte.
- **<Translate android="true" ids="shared_string_appearance"/>** – Ouvre le [menu Apparence](../tracks/appearance.md) pour personnaliser la couleur, la largeur et la transparence de la trace.
- **<Translate android="true" ids="follow_track"/>** (*Android*) / **<Translate ios="true" ids="shared_string_navigation"/>** (*iOS*) – Démarre la [navigation par trace](../../navigation/setup/gpx-navigation.md), alignant votre itinéraire sur la trace sélectionnée.

<br/>

- **<Translate android="true" ids="join_segments"/>** (*Android uniquement*) – Fusionne les segments de trace pour combler les lacunes.
- **<Translate android="true" ids="analyze_on_map"/>**. Ouvre l'[outil Analyser sur la carte](../index.md#analyze-track-on-map) pour inspecter l'élévation, la vitesse et la distance de la trace.
- **<Translate android="true" ids="analyze_by_intervals"/>** (*Android uniquement*) - Analyse la trace par [intervalles](./track-context-menu.md#split-interval) de temps ou de distance.

<br/>

- **<Translate android="true" ids="shared_string_share"/>** – Exporte la trace sélectionnée au format GPX.
- **<Translate android="true" ids="upload_to_openstreetmap"/>** - [Télécharge](../../plugins/osm-editing.md#how-to-upload-gpx-track) la trace sélectionnée sur OpenStreetMap.

<br/>

- **<Translate android="true" ids="edit_track"/>** - Ouvre l'[outil Planifier un itinéraire](../../plan-route/create-route.md) pour modifier la trace.
- **Dupliquer la trace** (*iOS uniquement*) – Crée et enregistre une copie de la trace.
- **<Translate android="true" ids="rename_track"/>** – Permet de modifier le nom de la trace.
- **<Translate android="true" ids="change_folder"/>** – Déplace la trace vers un autre dossier ou en crée un nouveau.

<br/>

- **<Translate android="true" ids="shared_string_gps_filter"/>** (*Android uniquement*) - Permet de [filtrer les points de la trace](#gps-filter) pour affiner la précision.
- **<Translate android="true" ids="altitude_correction"/>** (*Android uniquement*) - Pour [recevoir les données d'élévation](#calculate-missing-elevation), [attacher votre trace aux routes](../../navigation/setup/gpx-navigation.md#attach-to-the-roads) ou la calculer hors ligne (nécessite des [cartes de terrain](../../plugins/topography.md#download-maps)).
- **<Translate android="true" ids="simulate_your_location"/>** (*Android uniquement*) - [Simule votre position](../../plugins/development.md#gpx-track-simulation) à l'aide d'une trace GPX.

<br/>

- **<Translate android="true" ids="shared_string_delete"/>**. Supprime la trace.


### Description et informations

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Description and Info Android](@site/static/img/personal/tracks/track_context_overview_1_andr.png)  ![Description and Info Android](@site/static/img/personal/tracks/track_context_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Description of a track iOS](@site/static/img/personal/tracks/track_context_overview_ios_4-1.png)

</TabItem>

</Tabs>

Cette section de l'*onglet Aperçu* affiche les ***données de balise*** et ***toutes les informations générales***.

- **Description**. Le bouton *<Translate android="true" ids="shared_string_edit"/>* (*Android*) / *<Translate ios="true" ids="context_menu_edit_descr"/>* (*iOS*) est utilisé pour modifier la description de la trace. Balise `desc`.

- **Général**. Contient des informations sur la *taille du fichier GPX*, le *dossier du fichier* et la *date de création* avec la balise `time`.

- **Info**. Balises : *Mots-clés* - `keywords`, &nbsp;*Lien* - `link`, &nbsp;*Activité* - `activities`.

- **Auteur**. Balises : *Auteur* - `author`, &nbsp;*Nom* - `name`, &nbsp;*Adresse e-mail* - `email`, &nbsp;*Lien* - `link`.

- **Copyright**. Balises : *Copyright* - `copyright`, &nbsp;*Auteur* - `author`, &nbsp;*Année* - `year`, &nbsp;*Licence* - `license`.

- **Supplémentaire**. Toutes les balises de la section ***extensions*** :&nbsp; `address`,&nbsp; `icon`,&nbsp; `background`,&nbsp; `color`,&nbsp; `country`,&nbsp; `state`,&nbsp; `telephone`,&nbsp; `postcode`,&nbsp; `start_date`,&nbsp; `desc`.


<details>

<summary>Exemple de code XML de fichier GPX</summary>

```xml
 <metadata>
    <name>GPX File Example</name>
    <desc>Example GPX file with various tags</desc>
    <author>
      <name>Author Name</name>
      <email id="your" domain="email.com" />
      <link href="https://yourwebsite.com" />
    </author>
    <copyright author="OsmAnd B.V">
      <year>2023</year>
      <license>https://github.com/osmandapp/OsmAnd/blob/master/LICENSE</license>
    </copyright>
    <link href="http://docs.osmand.net" />
    <time>2023-12-13T12:00:00Z</time>
    <keywords>gpx, osmand, hiking</keywords>
    <extensions>
      <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
      <osmand:icon>place_town</osmand:icon>
      <osmand:background>circle</osmand:background>
      <osmand:color>#ff4e4eff</osmand:color>
      <osmand:country>United States</osmand:country>
      <osmand:state>Virginia</osmand:state>
      <osmand:telephone>(804) 828-0100</osmand:telephone>
      <osmand:postcode>23284</osmand:postcode>
      <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
      <osmand:desc>Boardwalks are walkways that cross over water or marshy ground. They are typically made of wood or other smooth materials and are accessible to wheelchairs. Please check with your park to see if there are accessible trails available. Boardwalks are often near parking lots, so expect large crowds.</osmand:desc>
    </extensions>
  </metadata>

```

</details>


### Activité d'information sur la trace

<InfoAndroidOnly />

![Track Information Activity](@site/static/img/personal/tracks/track_info_activity_andr.png)

La fonctionnalité *Activité* dans OsmAnd vous permet de marquer les traces GPX enregistrées avec des activités spécifiques pour une analyse et une organisation ultérieures dans des dossiers.

- [Balises d'activité pour les traces GPX](../../plugins/trip-recording.md#recording-settings). Lors de l'enregistrement d'une trace GPX, vous pouvez attribuer un type d'activité. Cette balise d'activité vous aide à catégoriser initialement les traces.
- [Filtre d'activité](../../personal/tracks/smart-folder.md#search-filter). Vous pouvez filtrer les traces GPX enregistrées par activité, ce qui vous permet de vous concentrer sur la recherche de types d'enregistrements spécifiques, tels que toutes les traces de vélo ou de randonnée.
- [Gérer les types d'activité](../../personal/tracks/manage-tracks.md#selection-mode). Vous pouvez modifier le type d'activité pour les dossiers ou traces sélectionnés à l'aide du mode de sélection dans l'onglet Traces du menu Mes lieux.
- **Liste d'activités**. Les catégories et groupes d'activités sont définis dans les ressources d'OsmAnd. Pour les développeurs et les contributeurs, la liste d'activités est maintenue dans un format structuré à [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json), qui détaille les groupes et types d'activités disponibles.


## Graphiques d'altitude / de vitesse

Sur l'*onglet <Translate android="true" ids="shared_string_gpx_track"/>*, vous pouvez trouver des informations sur la trace sous forme graphique. À l'aide du commutateur, vous pouvez choisir les données à afficher sur le graphique : données séparées sur l'*[<Translate android="true" ids="altitude"/>](#altitude)*, sur la *[Vitesse](#speed)* (cette option n'est disponible que pour les traces enregistrées) ou afficher le tout (*[<Translate android="true" ids="shared_string_overview"/>](#overview-information)*).

Interaction avec le graphique :

- ***Placer un point sur le graphique***. Si vous souhaitez voir les informations à un point particulier d'une trace, vous pouvez appuyer n'importe où sur le graphique et un pointeur avec les valeurs apparaîtra. En même temps, un marqueur bleu apparaîtra sur la carte, pointant vers cet emplacement sur la trace.
- ***Zoom avant/arrière***. Vous pouvez utiliser des [mouvements à deux doigts](../../map/interact-with-map.md#gestures) pour zoomer avant et arrière afin d'obtenir une vue plus détaillée. Après avoir zoomé avant, vous pouvez déplacer le graphique vers la droite et la gauche, ce qui correspond à un déplacement vers l'avant et vers l'arrière le long de l'itinéraire.
- ***Informations supplémentaires***. Le côté droit du graphique contient des données sur l'altitude la plus basse, la plus haute et moyenne, la pente et la vitesse. En bas du graphique, vous pouvez voir les marques de distance.


### Informations générales

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Context track menu Graphs Android](@site/static/img/personal/tracks/track_menu_graph_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Context track menu Graphs iOS](@site/static/img/personal/tracks/track_menu_graph_2_ios.png)

</TabItem>

</Tabs>

Sur l'onglet **Aperçu**, vous pouvez voir des paramètres tels que :

- *<Translate android="true" ids="distance"/>*. La somme de la distance totale parcourue sur la trace, ou la longueur de la trace elle-même.
- *<Translate android="true" ids="shared_string_time_span"/>*. L'intervalle de temps entre les points de début et de fin de la trace.
- *<Translate android="true" ids="shared_string_start_time"/>* L'heure exacte à laquelle l'enregistrement de la trace commence.
- *<Translate android="true" ids="shared_string_end_time"/>*. L'heure de fin de l'enregistrement de la trace.

Les **boutons** actifs donnent accès à des actions telles que :

- Le bouton **<Translate android="true" ids="analyze_on_map"/>** ouvre le [menu Analyser la trace](../tracks/index.md#analyze-track-on-map) pour la trace.
- Le bouton **<Translate android="true" ids="shared_string_options"/>** ouvre un menu avec :

  - *Modifier* ouvre la trace dans l'[outil Planifier un itinéraire](../../plan-route/index.md).
  - *Supprimer* vous permet de supprimer l'élément de trace sélectionné.
  - *Fractionner l'intervalle* ouvre la [fonction Fractionner l'intervalle](#split-interval) pour la trace.


### Vitesse

:::note Traces enregistrées uniquement
Cet onglet ne peut être visible que sur les traces enregistrées. Les points de ce type de trace ont des balises **[`speed`](../../plugins/trip-recording#recorded-gpx-file)**.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track graph Speed Android](@site/static/img/personal/tracks/track_graph_speed_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track graph Speed iOS](@site/static/img/personal/tracks/track_graph_speed_3_ios.png)

</TabItem>

</Tabs>

Le graphique **Vitesse** affiche des métriques telles que :

- *<Translate android="true" ids="average_speed"/>*. Indique la vitesse moyenne pendant le trajet.
- *<Translate android="true" ids="max_speed"/>*. Affiche la vitesse maximale pendant le trajet.
- *<Translate android="true" ids="moving_time"/>*. Affiche le temps total pendant le trajet en mouvement uniquement.
- *<Translate android="true" ids="distance_moving"/>*. Indique la distance ajustée du trajet.


### Altitude

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track graph altitude Android](@site/static/img/personal/tracks/track_graph_altitude_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track graph altitude iOS](@site/static/img/personal/tracks/track_graph_altitude_2_ios.png)

</TabItem>

</Tabs>

Le graphique **Altitude** affiche des métriques telles que :

- *<Translate android="true" ids="average_altitude"/>*. Indique l'altitude moyenne au-dessus du niveau de la mer sur l'itinéraire.
- *<Translate android="true" ids="altitude_range"/>*. L'altitude la plus haute et la plus basse enregistrée sur l'itinéraire.
- *<Translate android="true" ids="altitude_ascent"/>*. Le gain cumulé d'altitude au-dessus du niveau de la mer le long de l'itinéraire.
- *<Translate android="true" ids="altitude_descent"/>*. La perte cumulée d'altitude le long de l'itinéraire.

**Obtenir les données d'élévation.**
S'il n'y a *pas d'informations d'élévation* sur l'itinéraire, vous pouvez les ajouter de la manière suivante :

- *Bouton Calculer l'élévation → [Utiliser les routes à proximité](../../plan-route/create-route.md#use-nearby-roads)*. Utilise une carte hors ligne pour trouver les routes à proximité et les données d'élévation. Il vous permet de personnaliser la géométrie de la trace.
- [Utiliser les cartes de terrain](#calculate-missing-elevation). Utilise les cartes de terrain pour obtenir les données d'élévation. La géométrie de la trace reste inchangée.


### Calculer l'élévation manquante

:::note Abonnement OsmAnd Pro
La fonctionnalité de calcul de l'élévation hors ligne n'est disponible que pour les [**abonnés OsmAnd Pro**](../../purchases/android.md#pro-features) <ProFeature />.
:::

<InfoAndroidOnly />

Cette fonctionnalité vous permet de calculer le profil d'élévation pour une trace GPX hors ligne pour n'importe quel terrain entre 70 degrés de latitude nord et 70 degrés de latitude sud, en fonction des [données des cartes de terrain](../../plugins/topography.md#how-to-download). *Les cartes de terrain (3D) doivent avoir été téléchargées au préalable*.

1. Téléchargez les [cartes de terrain (3D)](../../plugins/topography.md#download-maps) pour la région requise.
2. Si la trace ne contient aucune donnée d'altitude, allez dans le menu contextuel de la trace (*Menu contextuel de la trace → <Translate android="true" ids="shared_string_gpx_track,altitude,calculate_altitude"/>*), sélectionnez *Utiliser les cartes de terrain*, et après le calcul, vous obtiendrez un graphique de trace basé sur les données de terrain.

    ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_2.png)   ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_10.png)   <!--![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_4.png)  ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_3.png) -->

3. Si vous créez un itinéraire avec l'[outil Planifier un itinéraire](../../plan-route/create-route.md#graph) en utilisant la méthode *Ligne droite* et qu'il n'y a pas de données d'élévation sur le graphique, vous devez :
    - Appuyez sur *Obtenir les données d'élévation*, puis sélectionnez *Utiliser les cartes de terrain*.
    - Après le calcul, vous obtiendrez le graphique complet Altitude/Pente de votre itinéraire basé sur les données de terrain.

  ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_9.png)   ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_5.png)


## Points / Points de passage

Les points de passage sont l'un des types de points disponibles sur la carte. En général, il peut s'agir de points de trace qui font partie des fichiers GPX. Une description détaillée est disponible dans l'article [points sur la carte](../../map/point-layers-on-map.md).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Context track menu Points Android](@site/static/img/personal/tracks/track_context_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Context track menu Points iOS](@site/static/img/personal/tracks/track_context_points_ios.png)

</TabItem>

</Tabs>

Dans cet onglet *Points* :

- [Afficher les données des points de trace](#display-custom-gpx-tags) et modifier vos points de trace (points de passage et points d'itinéraire), les [supprimer et ajouter](#points--waypoints) des points de passage à une trace.
- Créer et modifier un [Groupe (dossier) de points](#waypoint-groups).


### Ajouter un point de passage à une trace

Les points de passage peuvent être ajoutés à la trace actuellement enregistrée ou à toute trace de la liste [*Mes lieux → Traces*](../../personal/tracks/manage-tracks.md) :

- Utilisez le [menu contextuel de la carte](../../map/map-context-menu.md#-add--edit--track-waypoint).
  - Les points de passage sont automatiquement affichés si la trace sélectionnée est activée sur la carte.
  - [Appuyez longuement](../../map/map-context-menu.md#select-any-point-long-tap) sur la carte à l'emplacement choisi pour créer un point de passage.
  - Vous pouvez définir des informations sur le point de passage dans le [menu contextuel de la carte](../../map/map-context-menu.md#-add--edit--track-waypoint) ouvert.

- Utilisez le bouton [Ajouter un point de passage](#points--waypoints) du menu contextuel de la trace.

- Ajoutez un point de passage comme bouton [Action rapide](../../widgets/quick-action.md#my-places).

#### Créer un point de passage

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Add waypoint](@site/static/img/personal/tracks/add_waypoint_1_andr.png)  ![Add waypoint](@site/static/img/personal/tracks/add_waypoint_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Add waypoint](@site/static/img/personal/tracks/add-track-waypoint-ios-1.png)  ![Add waypoint](@site/static/img/personal/tracks/add_waypoints_2_ios.png)

</TabItem>

</Tabs>

Appuyez sur le bouton *Ajouter un point de passage* pour ouvrir l'écran de création de point de passage (cet écran est similaire au [menu contextuel des favoris](../../personal/favorites.md#favorite-context-menu)).

1. **Ajoutez** le *Nom* du point de passage, l'*Adresse* de l'emplacement sélectionné et une *Description* (facultatif).
2. **Sélectionnez** un groupe.

    - Sélectionnez des catégories de groupes précédemment créées ou créez-en une nouvelle.
    - Créez un nom et une apparence pour le nouveau groupe de points de passage. C'est également appelé *nouvelle catégorie* dans l'application.
    - L'**icône**, la **couleur de l'icône** et la **forme** seront utilisées pour tous les nouveaux points de passage ajoutés au groupe.

3. Paramètre **Apparence** :

    - Sélectionnez une [**icône**](../../personal/favorites.md#favorite-icons) dans la liste de toutes les icônes de catégories de POI.
    - Sélectionnez la **Couleur** de l'icône.
    - Sélectionnez ensuite la **Forme** de l'icône : *Cercle, Octogone, Carré*.

4. **Remplacez** un autre point par celui-ci, si nécessaire.


### Actions avec les groupes

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track menu Group menu Android](@site/static/img/personal/tracks/track_menu_group_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Group menu iOS](@site/static/img/personal/tracks/track_menu_group_menu_ios.png)

</TabItem>

</Tabs>

Le *menu à trois points* ( &#8285; ) ouvre le *menu de groupe* des points de passage.

**Actions :**

- **<Translate android="true" ids="shared_string_show_on_map"/>**. Vous permet d'afficher ou de ne pas afficher les points de passage du groupe sur la carte. Ou vous pouvez utiliser [le bouton d'écran](#points--waypoints) pour afficher ou omettre les points de passage du groupe sur la carte.
- **<Translate android="true" ids="shared_string_rename"/>**. Modifier le nom du groupe.
- **<Translate android="true" ids="change_color"/>**. Modifier la couleur des points de passage du groupe.
- **<Translate android="true" ids="copy_to_map_markers"/>** (*Android uniquement*). Déplacer les points de passage du groupe vers les [marqueurs de carte](../../personal/markers.md).
- **<Translate android="true" ids="copy_to_map_favorites"/>** (*Android uniquement*). Déplacer les points de passage du groupe vers les [favoris](../../personal/favorites.md).
- **<Translate android="true" ids="shared_string_delete"/>**. Supprimer les points de passage du groupe.


### Groupes de points de passage

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track menu Group map Android](@site/static/img/personal/tracks/waypoints_group_map_android.png) ![Track menu Group map Android](@site/static/img/personal/tracks/waypoints_group_map_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Group map iOS](@site/static/img/personal/tracks/waypoints_group_map_ios.png) ![Track menu Group map iOS](@site/static/img/personal/tracks/waypoints_group_map_1_ios.png)

</TabItem>

</Tabs>

- Vous pouvez contrôler la visibilité des groupes sur la carte. Si la trace est masquée, tous les groupes seront également masqués.

- Vous pouvez activer ou désactiver les points de passage du groupe sur la carte à l'aide du bouton situé dans le coin supérieur droit du menu contextuel de la trace sur la carte. Appuyez dessus et sélectionnez l'action requise.

### Afficher les balises GPX personnalisées

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Points](@site/static/img/personal/tracks/waypoints_tag_info_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Points](@site/static/img/personal/tracks/waypoints_tag_info_ios.png)

</TabItem>

</Tabs>


<details>

<summary>Exemple de code XML de balises de point de passage</summary>

```xml
  <wpt lat="40.123456" lon="-73.987654">
    <ele>100</ele>
    <time>2024-04-04T13:12:11Z</time>
    <name>Waypoint 1</name>
    <desc>Long description</desc>
    <link href="http://docs.osmand.net" />
    <type></type>
    <cmt>Short comment for the waypoint.</cmt>
    <extensions>
      <osmand:country>United States</osmand:country>
      <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
      <osmand:color>#ff4e4eff</osmand:color>
      <osmand:background>circle</osmand:background>
      <osmand:icon>place_town</osmand:icon>
      <osmand:postcode>23284</osmand:postcode>
      <osmand:telephone>(804) 828-0100</osmand:telephone>
      <osmand:state>Virginia</osmand:state>
      <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
    </extensions>
  </wpt>
```

</details>

<details>

<summary>Exemple de code XML de balises de point d'itinéraire</summary>

```xml
  <rte>
    <name>Route 1</name>
    <desc>A sample route</desc>
    <rtept lat="40.123456" lon="-73.987654">
      <ele>110</ele>
      <name>Route Point 1</name>
      <desc>Point 1 of the route</desc>
      <extensions>
        <osmand:country>United States</osmand:country>
        <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
        <osmand:color>#ff4e4eff</osmand:color>
        <osmand:background>circle</osmand:background>
        <osmand:icon>place_town</osmand:icon>
        <osmand:postcode>23284</osmand:postcode>
        <osmand:telephone>(804) 828-0100</osmand:telephone>
        <osmand:state>Virginia</osmand:state>
        <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
      </extensions>
    </rtept>
  </rte>
```

</details>

**Balises :**

| Paramètre | Description |
| --- | --- |
| `lat` | La **latitude** est l'une des coordonnées géographiques par lesquelles vous pouvez déterminer un emplacement. |
| `lon` | La **longitude** est une autre des coordonnées géographiques par lesquelles vous pouvez déterminer un emplacement. |
| `time` | L'**horodatage** est la date et l'heure auxquelles le point a été enregistré. |
| `name` | Le **nom** est le nom du point. Tous les caractères sont autorisés. |
| `desc` | La **description** contient des informations supplémentaires sur le point. |
| `type` | **Sélectionner un groupe** est le nom du dossier OsmAnd dans lequel ce point de passage est enregistré. |
| `cmt` | Le **commentaire** est un court commentaire sur un point. |
| `link` | Le **lien** est un lien vers n'importe quelle source. |
| `ele` | L'**élévation** est l'élévation d'un point. |


**Extensions :**

| Extension | Description |
| --- | --- |
| `osmand:icon` | L'**icône** est le nom de l'icône que vous avez sélectionnée. |
| `osmand:color` | La **couleur** est la couleur au format HEX. |
| `osmand:background` | L'**arrière-plan** est la forme de l'icône, telle qu'un cercle, un octogone ou un carré. |
| `osmand:country` | Le **pays** est le nom du pays. |
| `osmand:address` | L'**adresse** est l'adresse. |
| `osmand:postcode` | Le **code postal** est le code postal. |
| `osmand:telephone` | Le **téléphone** est le numéro de téléphone. |
| `osmand:state` | L'**état** est le nom de l'état. |
| `osmand:start_date` | La **date de début** est la date de planification d'un point. |

Les points de passage sont enregistrés avec la trace dans le [fichier GPX](../../../technical/osmand-file-formats/osmand-gpx.md). Chacun de ces points de passage a son propre ensemble de balises pour la description. Toutes les balises directement liées à la description des points de passage qui peuvent être modifiées directement dans l'application OsmAnd sont listées dans cette section.
Pour modifier la description d'un point de passage, vous pouvez suivre l'une des méthodes suivantes :

1. Trouvez la trace requise dans la liste de l'*onglet <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.
2. Appuyez sur la trace sur la carte, si elle est incluse dans la [liste des traces visibles](../tracks/index.md#display-tracks-on-the-map).
3. Appuyez sur le point de passage requis s'il est [visible](../../personal/tracks/manage-tracks.md#show-tracks-on-map) sur la carte.

    Ensuite, dans le [menu contextuel des traces](./track-context-menu.md), appuyez sur *points*, le champ du dossier requis avec les points de passage disponibles et le point de passage que vous recherchez. Sélectionnez le menu *Actions →* **Modifier le point de passage GPX** et apportez les modifications. Vous ne pouvez pas modifier la date de création d'un point, l'*horodatage*, dans l'application.

Les **balises d'équipement** qui décrivent des informations supplémentaires, telles que les heures d'ouverture ou le numéro de téléphone, spécifiques au POI, prennent ces informations des données OpenStreetMap ou des données que vous avez saisies lors de la création du POI. Vous ne pouvez modifier ces balises et les [balises personnalisées](#display-custom-gpx-tags) que dans le code du fichier GPX, que vous pouvez ouvrir avec n'importe quel éditeur de texte sur votre appareil.


## Fractionner l'intervalle

<InfoAndroidOnly />

Vous pouvez diviser la trace en intervalles, tels que la distance et le temps, et l'analyser.

Fractionner la trace par intervalle de distance ou de temps.
*<Translate android="true" ids="shared_string_options,analyze_by_intervals"/>*

![Track split interval screen Android](@site/static/img/personal/tracks/track_split_interval_android.png) ![Track split interval screen time Android](@site/static/img/personal/tracks/track_split_interval_time_android.png)


## Filtre GPS

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_options,shared_string_gps_filter"/>*

![GPS filter screen Android](@site/static/img/personal/tracks/gps_filter_android.png)

<!-- A user can filter points of a GPX track by Smoothing, Speed, Altitude, and Min GPS Precision for saving new track without excluded points. -->

Ce filtre vous permet d'améliorer les statistiques de votre trace en excluant les données inutiles ou incorrectes. Vous pouvez filtrer les points de trace qui ne correspondent pas à vos paramètres de trace, et ainsi obtenir un graphique et une ligne d'itinéraire visuelle plus précis sans distorsion ni bruit d'enregistrement. Vous pouvez apporter des modifications avec des filtres tels que *Lissage*, *Vitesse*, *Altitude* et *Précision GPS*, qui masquent les points filtrés de la trace actuelle. De plus, dans le menu *Statistiques*, vous pouvez vérifier comment vos modifications sont affichées sur le graphique avant de les enregistrer. Vous pouvez également *Réinitialiser à l'original* et *Enregistrer comme copie* de votre trace dans ce filtre sans enregistrer l'original.

<!-- In the screen you see the map (with [zoom buttons](../../map/interact-with-map.md#my-location-and-zoom), [my location button](../../map/interact-with-map.md#my-location-and-zoom), my track location button), buttons "Reset" and "&#8285;"(Actions), part with two menus: **Filter** and **Statistics**.

- "&#8285;"(Actions) button opens the "Actions" part of the "Filter" or "Statistics" menu.
- "&#8634;" button allows you to reset the track to the original.
- "My track location" button allows you to move the map to your track.-->

La page de l'application Android GPS Filter comprend les éléments suivants :

- Une carte avec une trace enregistrée et un bouton supplémentaire, *Ma position de trace* (il aligne une trace au centre d'une carte).
- Boutons *Actualiser* et *Menu* en haut (*Menu* ouvre le champ *Action* en bas de la page).
- Blocs *Filtre*, *Statistiques*, *Action*.


### Menu Filtre

Dans ce menu, vous pouvez modifier certains paramètres de votre trace tels que *Lissage*, *Vitesse*, *Altitude* ou *Précision GPS* à l'aide de filtres. Le menu est divisé en une *partie Points* et une *partie Actions*.

| ***Points*** |
|:------------|
|Cette partie affiche le nombre de points après filtrage et le nombre total de points sur la trace sélectionnée avant l'utilisation des filtres.|
|![GPS filter screen points numbers Android](@site/static/img/personal/tracks/gps_filter_points_numbers_android.png) |
| ***Actions*** |
|*Lissage*. Définit la distance seuil entre les points. Les points de trace qui sont au moins à cette distance du dernier point visible sont masqués. Tous les points de la trace, qui sont à une distance les uns des autres inférieure à la distance sélectionnée par le filtre, seront masqués. Les points de trace sont comptés à partir du dernier point visible. Notez que des seuils élevés peuvent trop simplifier la géométrie de la trace.|
|![GPS filter smoothing numbers Android](@site/static/img/personal/tracks/gps_filter_smoothing_android.png) |
|*Vitesse*. Seuls les points de trace correspondant à l'intervalle de vitesse sélectionné sont affichés sur le graphique et la carte, les autres sont masqués.|
|![GPS filter speed numbers Android](@site/static/img/personal/tracks/gps_filter_speed_android.png) |
|*Altitude*. Seuls les points de trace correspondant à l'intervalle d'altitude sélectionné sont affichés sur le graphique et la carte, les autres sont masqués.|
|![GPS filter altitude numbers Android](@site/static/img/personal/tracks/gps_filter_altitude_android.png) |
|*Précision GPS*. Définit la valeur maximale admissible pour le HDOP. Les points avec une valeur plus élevée sont masqués.|
|![GPS filter precision numbers Android](@site/static/img/personal/tracks/gps_filter_precision_android.png) |


### Statistiques

![GPS filter graph Android](@site/static/img/personal/tracks/gps_filter_graph_statistics_andr.png)

L'onglet Statistiques affiche des informations sur la trace **modifiée**, c'est-à-dire la trace sans les valeurs filtrées. Elles sont affichées dans les blocs de statistiques et les données du graphique.

- La partie *Données* affiche des statistiques similaires au [menu Filtre](#filter-menu).
- La partie *Graphique* affiche trois types de graphiques par paramètres : Aperçu, Altitude et Vitesse. Cette fonctionnalité est une copie des [graphiques de trace](#altitude--speed-graphs).

### Actions

![GPS filter action Android](@site/static/img/personal/tracks/gps_filter_action_android.png)

La liste des actions est disponible en bas de l'onglet **Filtre** ou **Statistiques**. OsmAnd applique toutes les modifications apportées à la trace sans mettre à jour le fichier, mais vous pouvez enregistrer les modifications manuellement.

- *<Translate android="true" ids="reset_to_original"/>*. Vous permet de ramener les paramètres à leur état d'origine.
- *<Translate android="true" ids="save_as_copy"/>*. Vous permet d'enregistrer la trace comme une nouvelle trace.
- *<Translate android="true" ids="save_changes_into_file"/>*. Vous permet de réécrire la trace avec les nouveaux paramètres.


## Articles connexes

- [Traces GPX](../../personal/tracks/manage-tracks.md)
- [Traces sur la carte](./track-context-menu.md)
- [Navigation par trace](../../navigation/setup/gpx-navigation.md)
- [Planifier un itinéraire](../../plan-route/index.md)
- [Plugin Enregistrement de trajet](../../plugins/trip-recording.md)
- [Analyser sur la carte](../index.md#analyze-track-on-map)

> *Cet article a été mis à jour pour la dernière fois en novembre 2024*

-- source-hash: blake2s: 64f6ba33270669888360c16fcd3b8d4bf41161d02ddde07ef5793c0a6dfda96f --
