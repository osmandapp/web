---
source-hash: 988210732638f1fe31705172188e1b0f353988d14be005a73c33e3c309a5021a
sidebar_position: 6
title:  Mes Lieux
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


<InfoIncompleteArticle/>

## Aperçu {#overview}

**Mes Lieux** est le centre névralgique de l'application OsmAnd pour gérer et personnaliser toutes les données personnelles. Vous pouvez utiliser cette section pour organiser les [Points favoris](#favorites) marqués comme importants ou fréquemment visités. L'onglet [Tracés](#tracks) vous permet de visualiser, d'importer, d'enregistrer et de créer des fichiers GPX pour vous aider à conserver un historique détaillé de vos itinéraires et de vos voyages. Vous pouvez également gérer vos [Modifications OpenStreetMap](#openstreetmap-edits), ce qui facilite la contribution aux améliorations et aux mises à jour de la carte. Le plugin et les widgets [Notes audio/vidéo](#audiovideo-notes) permettent aux utilisateurs Android de créer et d'enregistrer des notes multimédias liées à des lieux spécifiques, ajoutant ainsi du contexte à leurs voyages.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu"/> → Mes Lieux*

![My Places android](@site/static/img/personal/my_places_android.png) ![My places menu Android](@site/static/img/personal/my_places_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate android="true" ids="shared_string_menu"/> → Mes Lieux*

![My Places ios](@site/static/img/personal/my_places_ios.png)  ![My places menu iOS](@site/static/img/personal/my_places_menu_ios.png)

</TabItem>

</Tabs>

- [***Importer et exporter des données***](../personal/import-export.md) :

    Toutes les données stockées dans le menu *Mes Lieux* peuvent être déplacées en utilisant un format spécial `.osf` via les applications de votre appareil. Ce processus simplifie la sauvegarde et le transfert de données entre appareils et vous permet de les partager avec d'autres utilisateurs d'OsmAnd.

    **Aller à** la section *<Translate android="true" ids="shared_string_menu,shared_string_settings"/>* et sélectionnez si vous souhaitez exporter ou importer des données. Si vous sélectionnez *exporter*, vous devrez développer le *groupe Mes Lieux* et cocher les données requises.

- [***Cartes et ressources***](../personal/maps-resources.md) :

    L'élément *Cartes et ressources* du *Menu principal* de l'application OsmAnd donne accès à la gestion des données de la section *Mes Lieux*. L'onglet [*Local*](../personal/maps-resources.md#local) vous indique l'espace occupé par toutes les données OsmAnd existantes sur votre appareil, et la section *Mes Lieux* en particulier. Vous pouvez l'utiliser pour obtenir des informations détaillées sur vos données et y accéder pour les gérer. La section ne peut contenir que les éléments pour lesquels des données ont été téléchargées.

    **Aller à** *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*. Vérifiez et gérez vos données.


## Favoris {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites menu android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites menu iOS](@site/static/img/personal/favorites_menu_tab_ios.png)

</TabItem>

</Tabs>

Les **Favoris** vous permettent de marquer des lieux importants ou fréquemment visités. Ces points favoris sont organisés en dossiers et peuvent être personnalisés avec différentes couleurs, formes et icônes. Vous pouvez naviguer rapidement vers n'importe quel lieu favori via le menu **Mes Lieux** sans avoir à le rechercher à plusieurs reprises.


1. ***Boutons d'action***. Les *boutons d'action* en bas de l'écran Mes Lieux vous permettent de gérer la liste des dossiers avec vos favoris :

    - **Importer** (bouton *Ajouter*) — Permet d'importer des fichiers *favorite.gpx* depuis le stockage de votre appareil.

    - **Exporter** — Enregistrez vos points favoris sous forme de fichier *favorites.gpx* pour une utilisation externe ou une sauvegarde.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** (*Android uniquement*) — Vous pouvez ajouter n'importe quel point favori ou la liste entière des points favoris d'un dossier à la [liste des marqueurs de carte](../personal/markers.md).

    - **Supprimer** (*sur iOS, cette option se trouve dans le menu Modifier*) — Supprime les points favoris un par un ou les dossiers favoris sélectionnés et tous les points qu'ils contiennent.

2. ***Menu à trois points*** (*Android*) et ***appui long*** (*iOS*). Utilisez le menu *à trois points* à côté de chaque dossier ou *appuyez longuement* sur le dossier pour gérer les groupes de favoris :

    <Tabs groupId="operating-systems" queryString="current-os">

    <TabItem value="android" label="Android">

    ![Three-dot menu](@site/static/img/personal/favorites_three-dot_menu.png)

    </TabItem>

    <TabItem value="ios" label="iOS">

    ![Favorites menu iOS](@site/static/img/personal/favorites_long-tap_ios.png)

    </TabItem>

    </Tabs>

    - **<Translate android="true" ids="shared_string_rename"/>** — Utilisez cette option pour changer le nom du dossier sélectionné.

    - **<Translate android="true" ids="change_default_appearance"/>** — Personnalisez l'apparence des points favoris du dossier sur la carte en modifiant leurs icônes, couleurs ou étiquettes.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** ou **Masquer sur la carte** — Activez ou désactivez cette option pour afficher ou masquer les points favoris du dossier sur la carte.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** ou **Supprimer des marqueurs de carte** (*Android uniquement*) — Ajoutez tous les points favoris du dossier à la *liste des marqueurs de carte* ou supprimez-les si nécessaire pour une référence facile.

    - **<Translate android="true" ids="shared_string_share"/>** — Partagez les points favoris du dossier en les exportant sous forme de fichier *Favorites.gpx*, ce qui facilite le transfert ou la sauvegarde de vos données.

    - **<Translate android="true" ids="shared_string_delete"/>** — Supprimez définitivement le dossier de favoris sélectionné et tous les points qu'il contient.

Pour des instructions plus détaillées, consultez l'article [Favoris](../personal/favorites.md).


## Tracés {#tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> onglet*

![My Places with tracks in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> onglet*

![My Places with tracks in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

Les **Tracés** offrent des outils puissants pour enregistrer, créer et gérer des itinéraires dans OsmAnd. Ils peuvent être utilisés pour la [navigation](../navigation/setup/gpx-navigation.md), l'[enregistrement de trajets](../plugins/trip-recording.md) ou l'[intégration](../personal/tracks/manage-tracks.md#import) de fichiers GPX externes.

- **Onglet Tracés** — Tous les tracés jamais enregistrés, créés ou importés sont automatiquement affichés dans le dossier *Mes Lieux* dans l'onglet *Tracés*. Ils sont organisés par dossier ou affichés dans une liste en dessous.

- **Créer un tracé** — Commencez l'enregistrement à l'aide de l'**onglet Tracés** ou du [plugin d'enregistrement de trajets](../plugins/trip-recording.md).

- **Afficher et modifier** — Accédez à la liste des tracés via *Mes Lieux* et gérez-les à l'aide du *menu à trois points* pour les [dossiers](../personal/tracks/manage-tracks.md#track-folder) ou du menu [tracé unique](../personal/tracks/manage-tracks.md#single-track-menu).

- **Gérer** — Utilisez les outils [Filtre](../personal/tracks/smart-folder.md#filter) et [Dossier intelligent](../personal/tracks/smart-folder.md#smart-folder) pour organiser les tracés en fonction de paramètres spécifiques.

- **Apparence et analyse** — [Personnalisez](../map/tracks/appearance.md) le style visuel des tracés et [analysez-les](../map/tracks/index.md#analyze-track-on-map) à l'aide de l'outil [Planifier un itinéraire](../plan-route/create-route.md) d'OsmAnd.

Pour des conseils complets, consultez l'article [Gérer les tracés](../personal/tracks/manage-tracks.md).


## Modifications OpenStreetMap {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

</Tabs>

La fonction **Modifications OpenStreetMap** d'OsmAnd vous permet de contribuer à la communauté cartographique mondiale en ajoutant, modifiant ou commentant les données cartographiques.

1. ***Boutons d'action***. Vous pouvez utiliser les *boutons d'action* sur l'écran Mes Lieux pour gérer votre liste de notes :

    ![Share](@site/static/img/plugins/osm-editing/osm_plugin_export.png)

    - **Télécharger les fichiers sur OSM** — Envoyez vos notes et données à OpenStreetMap pour contribuer à la communauté.

    - **Exporter** (*Android uniquement*) — Enregistrez vos notes et POI sous forme de fichiers pour une utilisation externe ou une sauvegarde, avec des options d'exportation sous forme de notes OSM, de POI ou de toutes les données combinées.

    - **Supprimer** — Supprimez définitivement les éléments sélectionnés de votre liste.


2. ***Menu à trois points***. Vous pouvez gérer des POI ou des notes spécifiques à l'aide du *menu à trois points* à côté de chaque note :

    ![Three-dot menu](@site/static/img/plugins/osm-editing/osm_plugin_three-dot_menu.png)

    - **Télécharger la modification sur OSM** — Soumettez vos modifications ou éditions à OpenStreetMap pour que d'autres puissent les voir.

    - **Afficher sur la carte** — Affichez l'emplacement spécifique du POI ou de la note sur la carte.

    - **Modifier la modification/note OSM** — Apportez d'autres modifications au POI ou à la note qui ont déjà été ajoutés à OpenStreetMap.

    - **Supprimer** — Supprimez le POI ou la note sélectionné de votre liste.

Reportez-vous au [plugin d'édition OSM](../plugins/osm-editing.md) pour des instructions étape par étape.


## Notes audio/vidéo {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Audio video plugin My places menu Three actions](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)

Le **plugin Notes audio/vidéo** vous permet de créer des notes multimédias liées à des emplacements cartographiques spécifiques. Ces notes sont stockées dans **Mes Lieux** sous l'**onglet Notes A/V**.

1. ***Boutons d'action***. Vous pouvez utiliser les *boutons d'action* en bas de l'écran Mes Lieux pour gérer votre liste de notes :

    ![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx_2.png)

    - **<Translate android="true" ids="shared_string_sort"/>** — Ouvre une sélection de méthodes de tri, *Par type* ou *Par date*, et une fois sélectionnée, trie la liste en conséquence.

    - **<Translate android="true" ids="shared_string_share"/>** — Affiche une liste de contrôle de toutes les notes, y compris celles ajoutées aux fichiers GPX en tant que points de cheminement. Tout d'abord, les notes requises sont cochées, puis l'icône *Partager* dans le coin supérieur droit de l'écran suggère les options de partage disponibles, et enfin, ces notes deviennent disponibles selon l'option sélectionnée.

    - **Partager avec les points de cheminement GPX** — Vous pouvez partager les notes sélectionnées comme points de cheminement dans le menu *Mes Lieux* en leur ajoutant des [données GPX](../plugins/audio-video-notes.md#share-with-gpx-waypoints) à l'aide du bouton **Partager** en bas de l'écran de l'onglet *Notes A/V*.

    - **<Translate android="true" ids="shared_string_delete"/>** — Affiche une liste de contrôle des notes audio, photo et vidéo uniquement. Tout d'abord, cochez les notes inutiles, puis appuyez sur l'icône *Supprimer* dans le coin supérieur droit de l'écran, après confirmation, les notes sélectionnées seront définitivement supprimées.


2. ***Menu à trois points***. Vous pouvez gérer des notes audio, vidéo ou photo spécifiques à l'aide du *menu à trois points* à côté de chaque note :

    ![Three-dot menu](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

    - **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>** — Affiche ou écoute directement la note audio, vidéo ou photo sélectionnée.

    - **<Translate android="true" ids="shared_string_share"/>** — Partage la note avec d'autres via diverses applications ou plateformes.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** — Affiche l'emplacement associé et le [menu contextuel](../plugins/audio-video-notes#actions-in-map-context-menu) de la note sur la carte.

    - **<Translate android="true" ids="shared_string_rename"/>** — Change le nom de la note pour quelque chose de plus descriptif ou pertinent.

    - **<Translate android="true" ids="shared_string_delete"/>** — Les notes sélectionnées sont définitivement supprimées de votre collection.

Pour plus d'informations, visitez la page du [plugin Notes audio/vidéo](../plugins/audio-video-notes.md).


<!--
### Share with GPX Waypoints {#share-with-gpx-waypoints}

![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

You can share the notes selected as waypoints in the *My Places* menu by adding [GPX data](../plugins/audio-video-notes.md#share-with-gpx-waypoints) to them using the **Share** button at the bottom of the *A/V notes* tab screen.

### Manage Single Note {#manage-single-note}

![Three-dot menu](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

You can manage specific audio, video, or photo notes using the **three-dot menu** next to each note:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Views or listens to the selected audio, video, or photo note directly.
- **<Translate android="true" ids="shared_string_share"/>**. Shares the note with others through various apps or platforms.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Displays the related location and [Context menu](../plugins/audio-video-notes#actions-in-map-context-menu) of the note on the map.
- **<Translate android="true" ids="shared_string_rename"/>**. Change the name of the note to something more descriptive or relevant.
- **<Translate android="true" ids="shared_string_delete"/>**. Selected notes are permanently deleted from your collection.
-->

## Articles connexes {#related-articles}

- [Gérer les tracés](../personal/tracks/manage-tracks.md#import--export-track)
- [Historique de recherche](../search/search-history.md#export-and-share)
- [Schémas de palette de couleurs](../personal/color-palette-schemes.md)

> *Dernière mise à jour : mars 2025*