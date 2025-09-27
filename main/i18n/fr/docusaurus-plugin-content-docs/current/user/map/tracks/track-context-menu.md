---
source-hash: d55b5a0fc81682b066b7df15d53ce4c417c7dc366dac8b7d40d13d50c6f094e7
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




## Aperçu {#overview}

Le *menu contextuel de la trace* fournit des informations sur la *[Trace](../../personal/tracks/index.md)* sous forme de texte et de [graphique](#altitude--speed-graphs). Il vous permet d'ajouter des informations, d'apporter des modifications, d'éditer et d'effectuer diverses autres actions avec la trace. Vous pouvez accéder au *menu contextuel de la trace* en appuyant simplement sur la trace souhaitée sur la carte ou en utilisant le menu *[Mes lieux](../../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*). Vous devrez peut-être ouvrir le dossier de la trace et sélectionner la trace désirée en appuyant dessus.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Aperçu du menu contextuel de la trace Android](@site/static/img/personal/tracks/track_context_overview_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aperçu du menu contextuel de la trace iOS](@site/static/img/personal/tracks/track_context_overview_2_ios.png)

</TabItem>

</Tabs>


## Aperçu de la trace {#track-overview}

Lorsque vous appuyez sur une trace, le premier écran du *menu contextuel de la trace* s'ouvre - l'onglet *Aperçu*. Dans cet onglet, vous pouvez trouver un résumé de la trace choisie (*[Panneau d'information](#info-panel)*) et effectuer les actions les plus courantes avec la trace en utilisant le *[menu des actions de la trace](#track-actions)*. Vous pouvez voir la [description et les informations de service](#description-and-info) de votre trace si vous faites glisser l'onglet Aperçu vers le haut.

<!--
You can [short tap](../../map/map-context-menu.md#select-route-short-tap-for-android) on the track on the map → <Translate android="true" ids="shared_string_overview"/> → click to "eye" button for not showing the track on the map. 
-->

### Panneau d'information {#info-panel}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Aperçu du panneau d'information Android](@site/static/img/personal/tracks/track_context_info_panel_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aperçu du panneau d'information iOS](@site/static/img/personal/tracks/track_context_info_panel_ios.png)

</TabItem>

</Tabs>

En haut du panneau d'information, vous pouvez voir le nom de la trace et le symbole utilisé pour la marquer (*Android uniquement*). Le nom de la trace peut être modifié à l'aide de la fonction de renommage dans le [menu Options](#options). Certaines traces (principalement les *[Guides de voyage](../../plan-route/travel-guides.md#manage-as-gpx-track)*) peuvent avoir une courte *[description](#description-and-info)* et/ou une image sous le *Nom de la trace*. Une flèche indique la *Direction vers le point le plus proche de la trace* depuis [Ma position](../../map/interact-with-map.md#my-location-and-zoom).

Le panneau d'information fournit également des informations sur les éléments suivants :

- *<Translate android="true" ids="distance"/>*. Affiche la longueur de la trace.
- *<Translate android="true" ids="altitude_ascent"/>* / *<Translate android="true" ids="altitude_descent"/>*. Affiche la somme totale des montées et des descentes pendant le trajet.
- *<Translate android="true" ids="altitude_range"/>*. Indique l'altitude minimale et maximale sur une trace.

:::note
Si votre trace a été créée dans OsmAnd ou toute autre application de suivi (ses points ont donc les balises [`time` et `speed`](../../plugins/trip-recording#recorded-gpx-file)), le panneau d'information contiendra également des informations sur *<Translate android="true" ids="average_speed"/>*, *<Translate android="true" ids="max_speed"/>*, *<Translate android="true" ids="shared_string_time_span"/>* (*Android*) ou *<Translate ios="true" ids="total_time"/>* (*iOS*) (la durée entre les points de départ et d'arrivée de la trace), *<Translate android="true" ids="shared_string_time_moving"/>* (la somme du temps passé en mouvement).
:::

### Actions de la trace {#track-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Aperçu du menu contextuel de la trace Android 3](@site/static/img/personal/tracks/track_context_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aperçu du menu contextuel de la trace iOS 3](@site/static/img/personal/tracks/track_context_actions_ios.png)

</TabItem>

</Tabs>

- Boutons **Afficher / Masquer**. Modifie la visibilité de la trace sur la carte.
- [Apparence](./appearance.md). Personnalisez l'apparence de votre trace.
- **Modifier la trace** (*Android*). Ouvre la trace dans l'outil [Planifier un itinéraire](../../plan-route/create-route.md).
- **Exporter** (*iOS*). Vous permet d'[exporter une trace](../../personal/tracks/manage-tracks.md#export).
- **Directions**. Ouvre la trace en mode *[Navigation](../../navigation/setup/gpx-navigation.md#start-gpx-navigation)*.


### Options {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Options du menu de la trace Android](@site/static/img/personal/tracks/track_menu_options_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Options du menu de la trace iOS](@site/static/img/personal/tracks/track_menu_options_ios.png)

</TabItem>

</Tabs>

Le menu **Options** vous permet de gérer et de modifier la trace sélectionnée avec divers outils et paramètres.

- **<Translate android="true" ids="shared_string_show_on_map"/>** – Contrôle la visibilité de la trace sur la carte.
- **<Translate android="true" ids="shared_string_appearance"/>** – Ouvre le [menu Apparence](../tracks/appearance.md) pour personnaliser la couleur, la largeur et la transparence de la trace.
- **<Translate android="true" ids="follow_track"/>** (*Android*) / **<Translate ios="true" ids="shared_string_navigation"/>** (*iOS*) – Démarre la [navigation par trace](../../navigation/setup/gpx-navigation.md), en alignant votre itinéraire sur la trace sélectionnée.

<br/>

- **<Translate android="true" ids="join_segments"/>** (*Android uniquement*) – Fusionne les segments de trace pour combler les lacunes.
- **<Translate android="true" ids="analyze_on_map"/>**. Ouvre l'outil [Analyser sur la carte](../tracks/index.md#analyze-track-on-map) pour inspecter l'altitude, la vitesse et la distance de la trace.
- **<Translate android="true" ids="analyze_by_intervals"/>** (*Android uniquement*) - Analyse la trace par [intervalles](./track-context-menu.md#split-interval) de temps ou de distance.

<br/>

- **<Translate android="true" ids="shared_string_share"/>** – Exporte la trace sélectionnée au format GPX.
- **<Translate android="true" ids="upload_to_openstreetmap"/>** - [Téléverse](../../plugins/osm-editing.md#upload-gps-track) la trace sélectionnée sur OpenStreetMap.

<br/>

- **<Translate android="true" ids="edit_track"/>** - Ouvre l'outil [Planifier un itinéraire](../../plan-route/create-route.md) pour modifier la trace.
- **Dupliquer la trace** (*iOS uniquement*) – Crée et enregistre une copie de la trace.
- **<Translate android="true" ids="rename_track"/>** – Permet de changer le nom de la trace.
- **<Translate android="true" ids="change_folder"/>** – Déplace la trace vers un autre dossier ou en crée un nouveau.

<br/>

- **<Translate android="true" ids="shared_string_gps_filter"/>** (*Android uniquement*) - Permet de [filtrer les points de la trace](#gps-filter) pour affiner la précision.
- **<Translate android="true" ids="altitude_correction"/>** (*Android uniquement*) - Pour [recevoir des données d'altitude](#calculate-missing-elevation), [attachez votre trace aux routes](../../navigation/setup/gpx-navigation.md#attach-to-the-roads) ou calculez-la hors ligne (nécessite des [Cartes de terrain](../../plugins/topography.md#download-maps)).
- **<Translate android="true" ids="simulate_your_location"/>** (*Android uniquement*) - [Simule votre position](../../plugins/development.md#gpx-track-simulation) à l'aide d'une trace GPX.

<br/>

- **<Translate android="true" ids="shared_string_delete"/>**. Supprime la trace.


### Description et informations {#description-and-info}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Description et informations Android](@site/static/img/personal/tracks/track_context_overview_1_andr.png)  ![Description et informations Android](@site/static/img/personal/tracks/track_context_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Description d'une trace iOS](@site/static/img/personal/tracks/track_context_overview_ios_4-1.png)

</TabItem>

</Tabs>

Cette section de l'onglet *Aperçu* affiche les ***données des balises*** et ***toutes les informations générales***.

- **Description**. Le bouton *<Translate android="true" ids="shared_string_edit"/>* (*Android*) / *<Translate ios="true" ids="context_menu_edit_descr"/>* (*iOS*) est utilisé pour modifier la description de la trace. Balise `desc`.

- **Général**. Contient des informations sur la *taille du fichier GPX*, le *dossier du fichier* et la *date de création* avec la balise `time`.

- **Info**. Balises : *Mots-clés* - `keywords`, &nbsp;*Lien* - `link`, &nbsp;*Activité* - `activities`.

- **Auteur**. Balises : *Auteur* - `author`, &nbsp;*Nom* - `name`, &nbsp;*Adresse e-mail* - `email`, &nbsp;*Lien* - `link`.

- **Copyright**. Balises : *Copyright* - `copyright`, &nbsp;*Auteur* - `author`, &nbsp;*Année* - `year`, &nbsp;*Licence* - `license`.

- **Supplémentaire**. Toutes les balises de la section ***extensions*** :&nbsp; `address`,&nbsp; `icon`,&nbsp; `background`,&nbsp; `color`,&nbsp; `country`,&nbsp; `state`,&nbsp; `telephone`,&nbsp; `postcode`,&nbsp; `start_date`,&nbsp; `desc`.


<details>

<summary>Exemple de code XML d'un fichier GPX</summary>

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


### Type d'activité de la trace {#ttrack-activity-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Type d'activité de la trace](@site/static/img/personal/tracks/track_info_activity_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Type d'activité de la trace](@site/static/img/personal/tracks/track_info_activity_ios.png)

</TabItem>

</Tabs>


La fonction *Activité* dans OsmAnd vous permet de marquer les traces GPX enregistrées avec des activités spécifiques pour une analyse plus approfondie et une organisation dans des dossiers.

- [Balises d'activité pour les traces GPX](../../plugins/trip-recording.md#recording-settings). Lors de l'enregistrement d'une trace GPX, vous pouvez attribuer un type d'activité. Ce marquage d'activité vous aide à catégoriser initialement les traces.
- [Filtre d'activité](../../personal/tracks/smart-folder.md#search-filter). Vous pouvez filtrer les traces GPX enregistrées par activité, ce qui vous permet de vous concentrer sur la recherche de types d'enregistrements spécifiques, comme toutes les traces de vélo ou de randonnée.
- [Gérer les types d'activité](../../personal/tracks/manage-tracks.md#selection-mode). Vous pouvez modifier le type d'activité pour les dossiers ou les traces sélectionnés en utilisant le mode de sélection dans l'onglet Traces du menu Mes lieux.
- **Liste d'activités**. Les catégories et groupes d'activités sont définis dans les ressources d'OsmAnd. Pour les développeurs et les contributeurs, la liste des activités est maintenue dans un format structuré à l'adresse [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json), qui détaille les groupes et types d'activités disponibles.


## Graphiques d'altitude / de vitesse {#altitude--speed-graphs}

Dans l'onglet *<Translate android="true" ids="shared_string_gpx_track"/>*, vous pouvez trouver des informations sur la trace sous forme de graphique. À l'aide du commutateur, vous pouvez choisir les données à afficher sur le graphique : des données séparées sur l'[<Translate android="true" ids="altitude"/>](#altitude)*, sur la *[Vitesse](#speed)* (cette option n'est disponible que pour les traces enregistrées) ou tout afficher ensemble (*[<Translate android="true" ids="shared_string_overview"/>](#overview-information)*).

Interaction avec le graphique :

- ***Placer un point sur le graphique***. Si vous souhaitez voir les informations à un point particulier d'une trace, vous pouvez appuyer n'importe où sur le graphique et un pointeur avec les valeurs apparaîtra. En même temps, un marqueur bleu apparaîtra sur la carte, indiquant cet emplacement sur la trace.
- ***Zoom avant/arrière***. Vous pouvez utiliser des [mouvements à deux doigts](../../map/interact-with-map.md#gestures) pour zoomer et dézoomer pour une vue plus détaillée. Après avoir zoomé, vous pouvez déplacer le graphique vers la droite et la gauche, ce qui correspond à un déplacement vers l'avant et vers l'arrière le long de l'itinéraire.
- ***Informations supplémentaires***. Le côté droit du graphique contient des données sur l'altitude la plus basse, la plus haute et moyenne, la pente et la vitesse. En bas du graphique, vous pouvez voir les marques de distance.


### Informations générales {#overview-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Graphiques du menu contextuel de la trace Android](@site/static/img/personal/tracks/track_menu_graph_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Graphiques du menu contextuel de la trace iOS](@site/static/img/personal/tracks/track_menu_graph_2_ios.png)

</TabItem>

</Tabs>

Dans l'onglet **Aperçu**, vous pouvez voir des paramètres tels que :

- *<Translate android="true" ids="distance"/>*. La somme de la distance totale parcourue sur la trace, ou la longueur de la trace elle-même.
- *<Translate android="true" ids="shared_string_time_span"/>*. L'intervalle de temps entre les points de départ et d'arrivée de la trace.
- *<Translate android="true" ids="shared_string_start_time"/>* L'heure exacte à laquelle l'enregistrement de la trace commence.
- *<Translate android="true" ids="shared_string_end_time"/>*. L'heure de fin de l'enregistrement de la trace.

Les **boutons** actifs donnent accès à des actions telles que :

- Le bouton **<Translate android="true" ids="analyze_on_map"/>** ouvre le [menu Analyser la trace](../tracks/index.md#analyze-track-on-map) pour la trace.
- Le bouton **<Translate android="true" ids="shared_string_options"/>** ouvre un menu avec :

  - *Modifier* ouvre la trace dans l'[outil Planifier un itinéraire](../../plan-route/index.md).
  - *Supprimer* vous permet de supprimer l'élément de trace sélectionné.
  - *Diviser l'intervalle* ouvre la [fonction Diviser l'intervalle](#split-interval) pour la trace.


### Vitesse {#speed}

:::note Uniquement les traces enregistrées
Cet onglet n'est visible que sur les traces enregistrées. Les points sur ce type de trace ont des balises **[`speed`](../../plugins/trip-recording#recorded-gpx-file)**.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Graphique de vitesse de la trace Android](@site/static/img/personal/tracks/track_graph_speed_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Graphique de vitesse de la trace iOS](@site/static/img/personal/tracks/track_graph_speed_3_ios.png)

</TabItem>

</Tabs>

Le graphique **Vitesse** affiche des métriques telles que :

- *<Translate android="true" ids="average_speed"/>*. Indique la vitesse moyenne pendant le trajet.
- *<Translate android="true" ids="max_speed"/>*. Affiche la vitesse maximale pendant le trajet.
- *<Translate android="true" ids="moving_time"/>*. Affiche le temps total pendant le trajet en mouvement uniquement.
- *<Translate android="true" ids="distance_moving"/>*. Indique la distance ajustée du trajet.


### Altitude {#altitude}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Graphique d'altitude de la trace Android](@site/static/img/personal/tracks/track_graph_altitude_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Graphique d'altitude de la trace iOS](@site/static/img/personal/tracks/track_graph_altitude_2_ios.png)

</TabItem>

</Tabs>

Le graphique **Altitude** affiche des métriques telles que :

- *<Translate android="true" ids="average_altitude"/>*. Indique l'altitude moyenne au-dessus du niveau de la mer sur l'itinéraire.
- *<Translate android="true" ids="altitude_range"/>*. L'altitude la plus haute et la plus basse enregistrée sur l'itinéraire.
- *<Translate android="true" ids="altitude_ascent"/>*. Le gain cumulé d'altitude au-dessus du niveau de la mer le long de l'itinéraire.
- *<Translate android="true" ids="altitude_descent"/>*. La perte cumulée d'altitude le long de l'itinéraire.

**Obtenir les données d'altitude.**
S'il n'y a *aucune information d'altitude* sur l'itinéraire, vous pouvez l'ajouter des manières suivantes :

- *Bouton Calculer l'altitude → [Utiliser les routes à proximité](../../plan-route/create-route.md#get-elevation-data)*. Utilise une carte hors ligne pour trouver les routes et les données d'altitude à proximité. Cela vous permet de personnaliser la géométrie de la trace.
- [Utiliser les cartes de terrain](#calculate-missing-elevation). Utilise les cartes de terrain pour obtenir les données d'altitude. La géométrie de la trace reste inchangée.


### Calculer l'altitude manquante {#calculate-missing-elevation}

:::note Abonnement OsmAnd Pro
La fonctionnalité de calcul d'altitude hors ligne n'est disponible que pour les [**abonnés OsmAnd Pro**](../../purchases/android.md#pro-features) <ProFeature />.
:::

<InfoAndroidOnly />

Cette fonctionnalité vous permet de calculer le profil d'altitude pour une trace GPX hors ligne pour n'importe quel terrain entre 70 degrés de latitude nord et 70 degrés de latitude sud, en se basant sur les [données des cartes de terrain](../../plugins/topography.md#download-maps). *Les cartes de terrain (3D) doivent être préalablement téléchargées*.

1. Téléchargez les [Cartes de terrain (3D)](../../plugins/topography.md#download-maps) pour la région requise.
2. Si la trace ne contient aucune donnée d'altitude, allez dans le menu contextuel de la trace (*Menu contextuel de la trace → <Translate android="true" ids="shared_string_gpx_track,altitude,calculate_altitude"/>*), sélectionnez *Utiliser les cartes de terrain*, et après le calcul, vous obtiendrez un graphique de la trace basé sur les données du terrain.

    ![Graphique d'altitude de la trace Android](@site/static/img/personal/tracks/calculate_elevation_2.png)   ![Graphique d'altitude de la trace Android](@site/static/img/personal/tracks/calculate_elevation_10.png)   <!--![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_4.png)  ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_3.png) -->

3. Si vous créez un itinéraire avec l'outil [Planifier un itinéraire](../../plan-route/create-route.md#graph) en utilisant la méthode *Ligne droite* et qu'il n'y a pas de données d'altitude sur le graphique, vous devez :
    - Appuyez sur *Obtenir les données d'altitude*, puis sélectionnez *Utiliser les cartes de terrain*.
    - Après le calcul, vous obtiendrez le graphique complet Altitude/Pente de votre itinéraire basé sur les données du terrain.

  ![Graphique d'altitude de la trace Android](@site/static/img/personal/tracks/calculate_elevation_9.png)   ![Graphique d'altitude de la trace Android](@site/static/img/personal/tracks/calculate_elevation_5.png)


## Points / Waypoints {#points--waypoints}

Les waypoints sont l'un des types de points disponibles sur la carte. En général, il peut s'agir de points de trace faisant partie de fichiers GPX. Une description détaillée est disponible dans l'article sur les [points sur la carte](../../map/point-layers-on-map.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Points du menu contextuel de la trace Android](@site/static/img/personal/tracks/track_context_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Points du menu contextuel de la trace iOS](@site/static/img/personal/tracks/track_context_points_ios.png)

</TabItem>

</Tabs>

Dans cet onglet *Points* :

- [Afficher les données des points de la trace](#display-custom-gpx-tags) et modifier vos points de trace (waypoints et points d'itinéraire), les [supprimer et ajouter](#points--waypoints) des waypoints à une trace.
- Créer et modifier un [Groupe (dossier) de points](#waypoint-groups).


### Ajouter un waypoint à une trace {#add-waypoint-to-a-track}

Les waypoints peuvent être ajoutés à la trace en cours d'enregistrement ou à n'importe quelle trace depuis [*Mes lieux → Liste des traces*](../../personal/tracks/manage-tracks.md) :

- Utilisez le [menu contextuel de la carte](../../map/map-context-menu.md#-add--edit-track-waypoint).
  - Les waypoints sont automatiquement affichés si la trace sélectionnée est activée sur la carte.
  - Faites un [appui long](../../map/map-context-menu.md#select-any-point-long-tap) sur la carte à n'importe quel endroit choisi pour créer un waypoint.
  - Vous pouvez définir des informations sur le waypoint dans le [menu contextuel de la carte](../../map/map-context-menu.md#-add--edit-track-waypoint) qui s'ouvre.

- Utilisez le bouton [Ajouter un waypoint](#points--waypoints) du menu contextuel de la trace.

- Ajoutez un waypoint en tant que bouton d'[Action rapide](../../widgets/quick-action.md#my-places).

### Créer un waypoint {#create-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ajouter un waypoint](@site/static/img/personal/tracks/add_waypoint_1_andr.png)  ![Ajouter un waypoint](@site/static/img/personal/tracks/add_waypoint_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ajouter un waypoint](@site/static/img/personal/tracks/add-track-waypoint-ios-1.png)  ![Ajouter un waypoint](@site/static/img/personal/tracks/add_waypoints_2_ios.png)

</TabItem>

</Tabs>

Appuyez sur le bouton *Ajouter un waypoint* pour ouvrir l'écran de création de waypoint (cet écran est similaire au [menu contextuel des favoris](../../personal/favorites.md#create)).

1. **Ajoutez** le *Nom* du waypoint, l'*Adresse* de l'emplacement sélectionné et une *Description* (facultatif).
2. **Sélectionnez** un groupe.

    - Sélectionnez des catégories de groupes précédemment créées ou créez-en une nouvelle.
    - Créez un nom et une apparence pour le nouveau groupe de waypoints. Ceci est également appelé *nouvelle catégorie* dans l'application.
    - L'**icône**, la **couleur de l'icône** et la **forme** seront utilisées pour tous les nouveaux waypoints ajoutés au groupe.

3. Paramètre d'**apparence** :

    - Sélectionnez une [**icône**](../../personal/favorites.md#favorite-icons) dans la liste de toutes les icônes de catégories de POI.
    - Sélectionnez la **Couleur** de l'icône.
    - Sélectionnez ensuite la **Forme** de l'icône : *Cercle, Octogone, Carré*.

4. **Remplacez** un autre point par celui-ci, si nécessaire.


### Actions avec les groupes {#actions-with-groups}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu du groupe du menu de la trace Android](@site/static/img/personal/tracks/track_menu_group_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu du groupe du menu de la trace iOS](@site/static/img/personal/tracks/track_menu_group_menu_ios.png)

</TabItem>

</Tabs>

Le *menu à trois points* ( &#8285; ) ouvre le *menu du groupe* de waypoints.

**Actions :**

- **<Translate android="true" ids="shared_string_show_on_map"/>** - Permet d'afficher ou de ne pas afficher les waypoints du groupe sur la carte. Ou vous pouvez utiliser [le bouton à l'écran](#points--waypoints) pour afficher ou masquer les waypoints du groupe sur la carte.
- **<Translate android="true" ids="shared_string_rename"/>** - Changer le nom du groupe.
- **<Translate android="true" ids="change_default_appearance"/>** - Changer les options d'affichage pour un groupe de waypoints.
- **<Translate android="true" ids="add_group_to_markers"/>** ou **Supprimer** (*Android uniquement*) - Déplacer les waypoints du groupe vers la liste des [Marqueurs de carte](../../personal/markers.md).
- **<Translate android="true" ids="copy_to_map_favorites"/>** (*Android uniquement*) - Déplacer les waypoints du groupe vers les [Favoris](../../personal/favorites.md).
- **<Translate android="true" ids="add_to_navigation"/>** (*Android uniquement*) - Crée un itinéraire entre les waypoints. Les premier et dernier points deviennent le départ et l'arrivée de l'itinéraire, et les autres sont convertis en points intermédiaires.
- **<Translate android="true" ids="shared_string_delete"/>** - Supprimer un groupe de waypoints.


### Groupes de waypoints {#waypoint-groups}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Carte du groupe du menu de la trace Android](@site/static/img/personal/tracks/waypoints_group_map_android.png) ![Carte du groupe du menu de la trace Android](@site/static/img/personal/tracks/waypoints_group_map_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Carte du groupe du menu de la trace iOS](@site/static/img/personal/tracks/waypoints_group_map_ios.png) ![Carte du groupe du menu de la trace iOS](@site/static/img/personal/tracks/waypoints_group_map_1_ios.png)

</TabItem>

</Tabs>

Gérez la visibilité des groupes sur la carte : si vous masquez une trace, le groupe entier sera également masqué.

Vous pouvez activer ou désactiver les waypoints de groupe sur la carte à l'aide du bouton situé dans le coin supérieur droit du menu contextuel de la trace sur la carte. Appuyez dessus et sélectionnez l'action requise.

### Afficher les balises GPX personnalisées {#display-custom-gpx-tags}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Points](@site/static/img/personal/tracks/waypoints_tag_info_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Points](@site/static/img/personal/tracks/waypoints_tag_info_ios.png)

</TabItem>

</Tabs>


<details>

<summary>Exemple de code XML des balises de waypoint</summary>

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

<summary>Exemple de code XML des balises de point d'itinéraire</summary>

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
| `lat` | La **Latitude** est l'une des coordonnées géographiques permettant de déterminer un emplacement. |
| `lon` | La **Longitude** est une autre des coordonnées géographiques permettant de déterminer un emplacement. |
| `time` | L'**Horodatage** est la date et l'heure auxquelles le point a été enregistré. |
| `name` | Le **Nom** est le nom du point. Tous les caractères sont autorisés. |
| `desc` | La **Description** contient des informations supplémentaires sur le point. |
| `type` | **Sélectionner un groupe** est le nom du dossier OsmAnd dans lequel ce waypoint est enregistré. |
| `cmt` | Le **Commentaire** est un court commentaire sur un point. |
| `link` | Le **Lien** est un lien vers n'importe quelle source. |
| `ele` | L'**Altitude** est l'altitude d'un point. |


**Extensions :**

| Extension | Description |
| --- | --- |
| `osmand:icon` | L'**Icône** est le nom de l'icône que vous avez sélectionnée. |
| `osmand:color` | La **Couleur** est la couleur au format HEX. |
| `osmand:background` | L'**Arrière-plan** est la forme de l'icône, comme un cercle, un octogone ou un carré. |
| `osmand:country` | Le **Pays** est le nom du pays. |
| `osmand:address` | L'**Adresse** est l'adresse. |
| `osmand:postcode` | Le **Code postal** est le code postal. |
| `osmand:telephone` | Le **Téléphone** est le numéro de téléphone. |
| `osmand:state` | L'**État** est le nom de l'état ou de la région. |
| `osmand:start_date` | La **Date de début** correspond aux données de planification d'un point. |

Les waypoints sont enregistrés avec la trace dans le [fichier GPX](../../../technical/osmand-file-formats/osmand-gpx.md). Chacun de ces waypoints a son propre ensemble de balises pour la description. Toutes les balises directement liées à la description des waypoints qui peuvent être modifiées directement dans l'application OsmAnd sont répertoriées dans cette section.
Pour modifier la description d'un waypoint, vous pouvez procéder de l'une des manières suivantes :

1. Trouvez la trace requise dans la liste de l'onglet *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.
2. Appuyez sur la trace sur la carte, si elle est incluse dans la [liste des traces visibles](../tracks/index.md#display-tracks-on-the-map).
3. Appuyez sur le waypoint requis s'il est [visible](../../personal/tracks/manage-tracks.md#track-menu) sur la carte.

    Ensuite, dans le [menu contextuel des traces](./track-context-menu.md), appuyez sur *points*, le champ du dossier requis avec les waypoints disponibles et le waypoint que vous recherchez. Sélectionnez le menu *Actions →* **Modifier le waypoint GPX** et effectuez les modifications. Vous ne pouvez pas modifier la date de création d'un point, l'*horodatage*, dans l'application.

Les **balises d'aménités** qui décrivent des informations supplémentaires, telles que les heures d'ouverture ou le numéro de téléphone, spécifiques au POI, tirent ces informations des données OpenStreetMap ou des données que vous avez saisies lors de la création du POI. Vous ne pouvez modifier ces balises et les [balises personnalisées](#display-custom-gpx-tags) que dans le code du fichier GPX, que vous pouvez ouvrir avec n'importe quel éditeur de texte sur votre appareil.


## Diviser l'intervalle {#split-interval}

<InfoAndroidOnly />

Vous pouvez diviser la trace en intervalles, tels que la distance et le temps, et l'analyser.

Divisez la trace par intervalle de distance ou de temps.
*<Translate android="true" ids="shared_string_options,analyze_by_intervals"/>*

![Écran de division d'intervalle de la trace Android](@site/static/img/personal/tracks/track_split_interval_android.png) ![Écran de division d'intervalle de temps de la trace Android](@site/static/img/personal/tracks/track_split_interval_time_android.png)


## Filtre GPS {#gps-filter}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_options,shared_string_gps_filter"/>*

![Écran du filtre GPS Android](@site/static/img/personal/tracks/gps_filter_android.png)

<!-- A user can filter points of a GPX track by Smoothing, Speed, Altitude, and Min GPS Precision for saving new track without excluded points. -->

Ce filtre vous permet d'améliorer les statistiques de votre trace en excluant les données inutiles ou incorrectes. Vous pouvez filtrer les points de trace qui ne correspondent pas aux paramètres de votre trace et, par conséquent, obtenir un graphique et une ligne d'itinéraire visuelle plus précis, sans distorsion ni bruit d'enregistrement. Vous pouvez apporter des modifications avec des filtres tels que *Lissage*, *Vitesse*, *Altitude* et *Précision GPS*, qui masquent les points filtrés de la trace actuelle. De plus, dans le menu *Statistiques*, vous pouvez vérifier comment vos modifications sont affichées sur le graphique avant de les enregistrer. Vous pouvez également *Réinitialiser à l'original* et *Enregistrer comme une copie* de votre trace dans ce filtre sans enregistrer l'original.

<!-- In the screen you see the map (with [zoom buttons](../../map/interact-with-map.md#my-location-and-zoom), [my location button](../../map/interact-with-map.md#my-location-and-zoom), my track location button), buttons "Reset" and "&#8285;"(Actions), part with two menus: **Filter** and **Statistics**.

- "&#8285;"(Actions) button opens the "Actions" part of the "Filter" or "Statistics" menu.
- "&#8634;" button allows you to reset the track to the original.
- "My track location" button allows you to move the map to your track.-->

La page de l'application Filtre GPS sur Android comprend les éléments suivants :

- Une carte avec une trace enregistrée et un bouton supplémentaire, *Position de ma trace* (il aligne une trace au centre d'une carte).
- Les boutons *Actualiser* et *Menu* en haut (*Menu* ouvre le champ *Action* en bas de la page).
- Les blocs *Filtre*, *Statistiques*, *Action*.


### Menu Filtre {#filter-menu}

Dans ce menu, vous pouvez modifier certains paramètres de votre trace tels que le *Lissage*, la *Vitesse*, l'*Altitude* ou la *Précision GPS* à l'aide de filtres. Le menu est divisé en une partie *Points* et une partie *Actions*.

| ***Points*** |
|:------------|
|Cette partie montre le nombre de points après le filtrage et le nombre total de points sur la trace sélectionnée avant l'utilisation des filtres.|
|![Numéros de points du filtre GPS Android](@site/static/img/personal/tracks/gps_filter_points_numbers_android.png) |
| ***Actions*** |
|*Lissage*. Définit la distance seuil entre les points. Les points de la trace qui sont au moins à cette distance du dernier point visible sont masqués. Tous les points de la trace qui sont à une distance inférieure à la distance sélectionnée par le filtre seront masqués. Les points de la trace sont comptés à partir du dernier point visible. Notez que des seuils élevés peuvent trop simplifier la géométrie de la trace.|
|![Numéros de lissage du filtre GPS Android](@site/static/img/personal/tracks/gps_filter_smoothing_android.png) |
|*Vitesse*. Seuls les points de la trace correspondant à l'intervalle de vitesse sélectionné sont affichés sur le graphique et la carte, les autres sont masqués.|
|![Numéros de vitesse du filtre GPS Android](@site/static/img/personal/tracks/gps_filter_speed_android.png) |
|*Altitude*. Seuls les points de la trace correspondant à l'intervalle d'altitude sélectionné sont affichés sur le graphique et la carte, les autres sont masqués.|
|![Numéros d'altitude du filtre GPS Android](@site/static/img/personal/tracks/gps_filter_altitude_android.png) |
|*Précision GPS*. Définit la valeur maximale autorisée pour le HDOP. Les points avec une valeur plus élevée sont masqués.|
|![Numéros de précision du filtre GPS Android](@site/static/img/personal/tracks/gps_filter_precision_android.png) |


### Statistiques {#statistics}

![Graphique des statistiques du filtre GPS Android](@site/static/img/personal/tracks/gps_filter_graph_statistics_andr.png)

L'onglet Statistiques affiche des informations sur la trace **modifiée**, c'est-à-dire la trace sans les valeurs filtrées. Elles sont affichées dans les blocs de statistiques et les données du graphique.

- La partie *Données* affiche des statistiques similaires au [menu Filtre](#filter-menu).
- La partie *Graphique* affiche trois types de graphiques par paramètres : Aperçu, Altitude et Vitesse. Cette fonctionnalité est une copie du [graphique de la trace](#altitude--speed-graphs).

### Actions {#actions}

![Action du filtre GPS Android](@site/static/img/personal/tracks/gps_filter_action_android.png)

La liste des actions est disponible en bas de l'onglet **Filtre** ou **Statistiques**. OsmAnd applique toutes les modifications apportées à la trace sans mettre à jour le fichier, mais vous pouvez enregistrer les modifications manuellement.

- *<Translate android="true" ids="reset_to_original"/>*. Permet de rétablir les paramètres à leur état d'origine.
- *<Translate android="true" ids="save_as_copy"/>*. Permet d'enregistrer la trace comme une nouvelle.
- *<Translate android="true" ids="save_changes_into_file"/>*. Permet de réécrire la trace avec les nouveaux paramètres.


## Articles connexes {#related-articles}

- [Traces GPX](../../personal/tracks/manage-tracks.md)
- [Traces sur la carte](./track-context-menu.md)
- [Navigation par trace](../../navigation/setup/gpx-navigation.md)
- [Planifier un itinéraire](../../plan-route/index.md)
- [Plugin Enregistrement de trajet](../../plugins/trip-recording.md)
- [Analyser sur la carte](../tracks/index.md#analyze-track-on-map)