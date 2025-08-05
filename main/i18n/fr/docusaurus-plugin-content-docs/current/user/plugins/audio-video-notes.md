---
source-hash: 60b188c51e17690f3a3d5d8e4970eb6bd2391e27d4fafaddb68b30a36313f979
sidebar_position: 3
title: Audio / Video Notes
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

## Vue d'ensemble {#overview}

Vos enregistrements audio et vidéo peuvent être utiles à l'avenir, par exemple comme souvenirs des endroits où vous êtes allé. Ils sont disponibles dans le menu [Mes lieux](../personal/myplaces.md) et sont visibles lorsque le plugin Notes audio/vidéo est activé.

Le plugin Notes audio/vidéo étend les fonctionnalités d'OsmAnd en vous permettant de créer vos propres notes dans différents formats, tels que des photos, des vidéos ou des audios, et de les associer à leur emplacement géographique ou à leur emplacement actuel. Vous ne pouvez effectuer des enregistrements que lorsque le plugin est activé, à l'aide du [widget Notes audio/vidéo](../widgets/info-widgets.md#-audio-video-notes-widget) et/ou du [menu contextuel de la carte](../map/map-context-menu.md#-audiovideo-note). Les données reçues sont automatiquement enregistrées dans [Mes lieux](../personal/myplaces.md), d'où elles peuvent être facilement gérées et partagées.

Toutes les notes audio et vidéo créées composent la couche d'enregistrement. Lorsqu'elle est activée sur la carte, elle modifie l'affichage des données enregistrées et il y a plus de paramètres pour gérer les enregistrements. Dans la couche d'enregistrement, les notes audio et vidéo sont placées comme des POI sur la carte, créant ainsi un récit utilisateur visible uniquement par le propriétaire de l'appareil.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Audio video notes intro](@site/static/img/plugins/audio-video-notes/widgets_view.png)

</TabItem>

</Tabs>


## Paramètres de configuration requis {#required-setup-parameters}

Les notes audio/vidéo sont fournies avec le plugin Notes audio/vidéo et nécessitent la configuration suivante :

1. Activez le [plugin Notes audio/vidéo](../plugins/index.md#enable--disable) dans la section Plugins du *Menu principal*.
2. Ajoutez un [widget](../widgets/info-widgets.md#-audio-video-notes-widget) à l'écran de la carte pour une utilisation plus pratique.
3. Personnalisez les [paramètres d'enregistrement](#plugin-settings) pour chaque profil, si nécessaire.


## Paramètres du plugin {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,audionotes_plugin_name,shared_string_settings"/>*

![Audio video plugin settings Photo Android](@site/static/img/plugins/audio-video-notes/settings_av_plugin.png)

</TabItem>

</Tabs>

Pour chaque profil, vous pouvez configurer les *options d'enregistrement audio et vidéo*.

| Paramètre | Description |
| --- | --- |
| **<Translate android="true" ids="camera_app"/>** | Vous pouvez choisir d'utiliser l'application système ou l'appareil photo OsmAnd pour prendre des <Translate android="true" ids="photo_notes"/>. |
| **<Translate android="true" ids="av_camera_pic_size"/>** | Définit la taille des photos à prendre. Les capacités de l'appareil photo de l'appareil déterminent le nombre d'options disponibles. Si aucune option n'est sélectionnée, l'application utilise la taille des paramètres système de l'appareil photo de l'appareil. |
| **<Translate android="true" ids="av_camera_focus"/>** | Établit la méthode de réglage de la mise au point de l'appareil photo. Le nombre d'options disponibles est déterminé par les capacités de l'appareil photo de l'appareil. Il existe essentiellement trois options : *<Translate android="true" ids="av_camera_focus_auto"/>* ; *<Translate android="true" ids="av_camera_focus_continuous"/>* ; et *<Translate android="true" ids="av_camera_focus_infinity"/>*. L'**autofocus** est le plus populaire et établit le mode automatique pour l'appareil photo ; le mode **continu** fait en sorte que l'appareil photo détecte les mouvements et refocalise en conséquence ; et l'option **infini** fait en sorte que l'objectif se concentre sur une distance et maintient ainsi les objets au point, quelle que soit leur distance. |
| **<Translate android="true" ids="multimedia_photo_play_sound"/>** | Si activé, un son est produit lorsque l'appareil photo prend une photo. Veuillez noter que, comme l'exige la loi sur la protection de la vie privée, **dans certains pays, les appareils n'auront pas de commutateur de désactivation de l'obturateur de l'appareil photo**. Si vous utilisez l'application système, le son doit être désactivé dans l'application appareil photo. |
| **<Translate android="true" ids="av_audio_format"/>** | Offre un choix de formats pour un fichier audio. Le nombre d'options disponibles et celle qui est utilisée par défaut sont déterminés par les paramètres d'un appareil spécifique. |
| **<Translate android="true" ids="av_audio_bitrate"/>** | Cette option offre un choix d'options de débit binaire pour un fichier audio à créer. Les options de débit binaire disponibles vont de 16 kbps à 128 kbps, ou l'option par défaut. Le paramètre par défaut est déterminé par les paramètres « par défaut » du microphone de votre appareil. |
| **<Translate android="true" ids="multimedia_use_system_camera"/>** | Si activé, OsmAnd utilise l'application système pour enregistrer des vidéos dans <Translate android="true" ids="video_notes"/>. |
| **<Translate android="true" ids="av_video_quality"/>** | Cela offre un choix d'options qui déterminent le format de l'image de sortie. La gamme d'options disponibles est déterminée par les paramètres d'un appareil spécifique. L'option par défaut est l'option *Qualité la plus élevée*. |
| **<Translate android="true" ids="multimedia_rec_split_title"/>** | Si activé, les anciens enregistrements vidéo seront automatiquement réécrits et remplacés par de nouveaux enregistrements vidéo si la taille de stockage atteint la limite de taille. |
| **<Translate android="true" ids="rec_split_clip_length"/>** | Cela détermine la limite de temps supérieure pour les clips vidéo enregistrés. Il existe des options allant de 1 minute à 30 minutes. |
| **<Translate android="true" ids="rec_split_storage_size"/>** | Cela établit la taille du stockage destiné à la vidéo enregistrée. Il existe des options allant de 1024 Mo à 62 Go. Une gamme spécifique d'options, et l'option par défaut, est déterminée par les paramètres d'un appareil spécifique. Un message système vous rappellera que la taille de stockage atteint la limite établie. |
| **<Translate android="true" ids="notes"/>** | Cette option vous redirige vers les [Notes audio/vidéo dans Mes lieux](../personal/myplaces.md) - stockage central de toutes les notes audio/vidéo jamais créées dans l'application. |
| **<Translate android="true" ids="reset_plugin_to_default"/>** | Vous pouvez établir les valeurs par défaut pour tous les paramètres des notes A/V. |
| **<Translate android="true" ids="copy_from_other_profile"/>** | Ouvre une boîte de dialogue pour sélectionner un profil à partir duquel copier la configuration d'enregistrement des notes audio/vidéo, et l'établir pour le profil actuel. |


## Gérer une seule note {#manage-a-single-note}

Vous pouvez gérer vos informations, pensées, idées, etc. liées à un lieu géographique, comme suit :

- Créer une note.
- Afficher toutes les notes sous forme de liste dans [Mes lieux](../personal/myplaces.md).
- Afficher la note spécifique sur la carte.
- Renommer une note dans Mes lieux.
- Afficher toutes les notes [sur la carte](../map/configure-map-menu.md#map-data-layers).
- Lire la note.
- Créer des points de passage dans une [trace](../plugins/trip-recording.md#gpx-file-details).
- Exporter vers [JOSM](https://josm.openstreetmap.de/).


### Créer {#create}

Vous pouvez créer une note photo, vidéo et audio de l'une des manières suivantes :

- Avec le [Widget](../widgets/info-widgets.md#-audio-video-notes-widget-android). Si la note doit être liée à votre position géographique actuelle.
- Avec le [Menu contextuel](../map/map-context-menu.md#-record-av-note-android) d'un point sur la carte. Si la note doit être liée au point sélectionné sur la carte.


#### 1. Créer et lier à votre position actuelle {#1-create-and-tie-to-your-current-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Audio video plugin widget Android](@site/static/img/plugins/audio-video-notes/audio_video_plugin_widget_choice_android.png)

</TabItem>

</Tabs>

Le widget <Translate android="true" ids="map_widget_av_notes"/> est utilisé pour créer une note liée à votre position actuelle, et ainsi, éviter toute recherche d'un point approprié pour une note sur la carte. Il suffit de toucher le widget et de créer la note.

Les fonctions fournies par le widget <Translate android="true" ids="map_widget_av_notes"/> dépendent de la façon dont il est configuré dans le menu [Écran de configuration](../widgets/info-widgets.md#-audio-video-notes-widget-android). Le widget ouvre immédiatement l'appareil photo pour prendre une note, selon les paramètres établis, ou demande d'abord le format dans lequel créer une note, puis ouvre la boîte de dialogue d'enregistrement respective.


#### 2. Créer et lier à la géolocalisation sélectionnée {#2-create-and-tie-to-selected-geolocation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Audio video plugin Context menu take a note](@site/static/img/plugins/audio-video-notes/context-menu-take-note.png)

</TabItem>

</Tabs>

Pour créer une note liée à un point sélectionné sur la carte, utilisez le [Menu contextuel](../map/map-context-menu.md#-record-av-note-android) du point :

1. Appuyez longuement sur un point de la carte, et le [Menu contextuel](../map/map-context-menu.md) s'ouvre.
2. Appuyez sur **Actions**, puis sélectionnez l'une des options disponibles dans la liste :

    - **<Translate android="true" ids="recording_context_menu_arecord"/>** - pour créer une note audio et la lier au point sélectionné sur la carte ;
    - **<Translate android="true" ids="recording_context_menu_vrecord"/>** - pour créer une note vidéo et la lier au point sélectionné sur la carte ;
    - **<Translate android="true" ids="recording_context_menu_precord"/>** - pour créer une note photo et la lier au point sélectionné sur la carte.

3. Selon le format sélectionné de la note, la boîte de dialogue d'enregistrement respective s'ouvre.


#### Boîte de dialogue de l'enregistreur {#recorder-dialog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Video note recorder](@site/static/img/plugins/audio-video-notes/take_a_video_note_widget.png)

</TabItem>

</Tabs>

Pour les *notes audio et vidéo*, l'enregistreur audio ou vidéo est affiché respectivement. Vous pouvez :

- Arrêter l'enregistrement avec l'icône *Arrêter*.
- Afficher la durée de l'enregistrement.
- Afficher ou masquer l'écran vidéo.

Il est possible d'arrêter l'enregistrement en appuyant sur le widget <Translate android="true" ids="map_widget_av_notes"/>, que le menu contextuel ou le widget ait démarré l'enregistrement. Pour *une note photo*, la fonctionnalité de l'appareil photo apparaît, et vous pouvez prendre une photo, visualiser le résultat, l'accepter et l'enregistrer, ou prendre une nouvelle photo.

:::info note
Automatiquement, tous les enregistrements photo, audio et vidéo sont enregistrés dans : <Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/> onglet.
:::


### Afficher dans Mes lieux {#view-in-my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Audio video plugin My places menu](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu.png)

</TabItem>

</Tabs>

[Mes lieux](../personal/myplaces.md) est un référentiel central pour toutes vos notes. Il vous permet de visualiser toutes vos notes dans une liste triée, d'afficher une note spécifique sur une carte et de gérer toute votre liste de notes.


### Afficher sur la carte {#show-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Audio video plugin My places menu Context](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_context.png)

</TabItem>

</Tabs>

Pour afficher une note spécifique sur la carte, utilisez la liste des notes dans Mes lieux, trouvez celle dont vous avez besoin et appuyez dessus. En conséquence, la carte s'affiche, met en évidence l'emplacement de la note et ouvre le [Menu contextuel](../plugins/audio-video-notes.md#actions-in-map-context-menu). Il est possible de travailler avec la note en sélectionnant les options dans le menu contextuel.


### Lire {#play}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Audio video plugin Context menu](@site/static/img/plugins/audio-video-notes/audio_video_notes_map_context_menu_1.png)
![Audio video plugin My places menu actions](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Pour lire une note, utilisez l'option respective dans le [Menu contextuel](../map/map-context-menu#-audiovideo-note-android) ouvert pour la note :

- sur la carte ;
- dans Mes lieux.

La section [Détails](../map/map-context-menu#-audiovideo-note-android) fournit plus de données sur les notes, telles que la latitude et la longitude, la date et l'heure de la note, et les photos.


### Renommer, supprimer, partager {#rename-delete-share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Audio video plugin My places menu actions](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Pour gérer une note dans Mes lieux, appuyez sur les trois points verticaux de la note dans la liste, et les options disponibles s'affichent, comme suit :

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Ouvrir et visualiser la vidéo sélectionnée ou lire la note audio.
- **<Translate android="true" ids="shared_string_share"/>**. Partager facilement la note sélectionnée avec d'autres via diverses plateformes.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Affiche l'emplacement exact et le [Menu contextuel](../plugins/audio-video-notes#actions-in-map-context-menu) de la note sur la carte.
- **<Translate android="true" ids="shared_string_rename"/>**. Changer le nom de la note pour une identification plus facile.
- **<Translate android="true" ids="shared_string_delete"/>**. Supprime définitivement les notes de l'application.


## Widget d'enregistrement {#recording-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![The widget](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)

</TabItem>

</Tabs>

Le [widget Notes audio/vidéo](../widgets/info-widgets.md#audiovideo-notes-widget) crée des notes, des photos, des fichiers audio et vidéo et les lie à votre position actuelle. Le widget dispose de plusieurs options qui peuvent être définies comme l'action par défaut effectuée par le widget lorsque l'écran est touché.

L'ajout d'un widget à l'écran est nécessaire si vous préférez éviter de rechercher la géolocalisation sur la carte et de lier les notes à votre emplacement par défaut actuel. Pour ajouter ou personnaliser un widget, suivez les étapes ci-dessous :

1. Allez à :
    *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*

2. Sélectionnez **<Translate android="true" ids="map_widget_left"/>** ou **<Translate android="true" ids="map_widget_right"/>**.

3. Appuyez sur **<Translate android="true" ids="map_widget_av_notes"/>**, et le menu contextuel du widget s'ouvre.

4. Sélectionnez l'option que vous préférez utiliser par défaut en appuyant sur le widget :

    - **<Translate android="true" ids="av_def_action_choose"/>** - ouvrir une sélection d'options.

    - **<Translate android="true" ids="av_def_action_audio"/>** - commencer l'enregistrement d'un message audio.

    - **<Translate android="true" ids="av_def_action_video"/>** - commencer l'enregistrement vidéo.

    - **<Translate android="true" ids="av_def_action_picture"/>** - commencer à prendre des photos.

    ![The widget](@site/static/img/plugins/audio-video-notes/widget.png)


## Gérer plusieurs notes {#manage-multiple-notes}

### Gérer dans Mes lieux {#manage-in-my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Audio video plugin My places menu Three actions](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_three_actions.png)

</TabItem>

</Tabs>

Les options de la barre inférieure peuvent être utilisées pour gérer la liste des notes dans le menu [Mes lieux](../personal/myplaces.md#audiovideo-notes).


### Partager avec les points de passage GPX {#share-with-gpx-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

</TabItem>

</Tabs>

Vous pouvez partager toutes les notes, y compris les [GPX](../plugins/audio-video-notes.md#waypoints-created-from-notes) qui ont des notes sélectionnées comme points de passage sur l'écran [Mes lieux](../personal/myplaces.md#audiovideo-notes) en cliquant sur le bouton de partage du menu inférieur. Une case à cocher apparaîtra à côté de chaque note pour sélectionner des notes spécifiques. Il y a deux cases à cocher au-dessus des notes : *Notes A/V par date* pour sélectionner toutes les notes et la case à cocher *Emplacements*. La case à cocher *Emplacements* vous permet d'ajouter un fichier GPX séparé avec les coordonnées et les données.

Chaque note contient l'heure de sa création, la quantité de données, et s'il s'agit d'un enregistrement, l'heure de l'enregistrement et les données de localisation, vous pouvez ajouter des données GPX.
Formats de fichier pris en charge : audio - **3gp**, vidéo - **mp4**, photo -**jpg**.


### Tout afficher sur la carte {#show-all-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![Show notes on the map](@site/static/img/plugins/audio-video-notes/recording_layer.png)

</TabItem>

</Tabs>

Les notes affichées sur la carte peuvent raconter votre histoire, où vous avez repéré des panneaux, quelle porte vous deviez ouvrir, où se trouve la sortie, le chemin optimal, et plus encore. Vous pouvez afficher les notes [une par une](#show-on-the-map) ou toutes à la fois.

Utilisez la couche de carte [Enregistrement](../map/point-layers-on-map#-audio--video-points-android) pour afficher ou masquer toutes les notes. Si vous l'activez dans le menu [Configurer la carte](../map/configure-map-menu), la couche Enregistrement affiche toutes les notes sur la carte.

![No notes on the map](@site/static/img/plugins/audio-video-notes/no_notes_on_map.png) ![Notes are on the map](@site/static/img/plugins/audio-video-notes/notes_on_map.png)


## Points de passage créés à partir de notes {#waypoints-created-from-notes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Notes and waypoints on the map](@site/static/img/plugins/audio-video-notes/note_waypoint_on_map.png)
![Waypoints on the track](@site/static/img/plugins/audio-video-notes/waypoint_auto_manual.png)

</TabItem>

</Tabs>

Un point de passage est créé lorsqu'une note audio, vidéo ou photo est ajoutée à une trace. Les points de passage existent au sein d'une trace. Si une trace est visible, ses points de passage sont également visibles. Ainsi, ces notes peuvent être visibles sur la carte toutes à la fois ou seulement sur une trace visible spécifique. Dans ce dernier cas, les notes sont affichées comme des points de passage de la trace.

:::note
Si une trace est exportée, les points de passage ne peuvent pas être visualisés ou lus, car les notes audio/vidéo/photo sont stockées uniquement sur l'appareil et ne sont disponibles que pour vous sur cet appareil.
:::


### Créer des points de passage {#create-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Manually adding a waypoint to track](@site/static/img/plugins/audio-video-notes/waypoint_manually_created.png)

</TabItem>

</Tabs>

Il existe deux façons de créer un point de passage : automatiquement et manuellement.

1. **Automatiquement**, un point de passage est créé, au cas où vous prendriez une note audio/vidéo/photo lorsque l'[enregistrement de voyage](../plugins/trip-recording) est en cours, quelle que soit la géolocalisation si elle est liée à la position actuelle ou à n'importe quel endroit, et donc, quels que soient les moyens utilisés pour cela : qu'il s'agisse du [Widget](../widgets/info-widgets#-audio-video-notes-widget-android) ou du [Menu contextuel](../map/map-context-menu#-audiovideo-note-android).

    Tous les points de passage ajoutés automatiquement reçoivent un nom attribué automatiquement. Le nom est créé, selon le format spécifié ci-dessous pour un fichier audio/vidéo/photo, et a un [lien court](https://wiki.openstreetmap.org/wiki/Shortlink). L'exemple des points de passage dans la figure ci-dessus montre des points de passage créés automatiquement et manuellement, où les quatre premiers ont été créés automatiquement, et le dernier - manuellement.

2. **Manuellement**, un point de passage est créé via le [Menu contextuel](../map/map-context-menu#-audiovideo-note-android), comme suit :

    - Sélectionnez la note audio/vidéo/photo requise sur la carte.
    - Appuyez sur **Actions**, puis sur **Ajouter une trace**.
    - Sélectionnez la trace à laquelle vous avez l'intention d'ajouter un point de passage.
    - La boîte de dialogue *<Translate android="true" ids="quick_action_add_gpx"/>* s'ouvre et vous permet de définir certaines propriétés, telles que le nom du point de passage, une icône, une couleur, et d'autres. Une fois terminé, appuyez sur **Enregistrer**.

:::info note
Vous pouvez spécifier des noms pour chaque point de passage créé manuellement.
:::


### Afficher les points de passage {#view-waypoints}

- Un point de passage est disponible pour être visualisé comme un point de passage sur la carte et dans la liste des [points de passage d'une trace spécifique](../map/tracks/track-context-menu.md#points--waypoints). La suppression du point de passage ne supprime pas la note audio/vidéo/photo respective.

- Une note audio, vidéo ou photo est disponible pour être visualisée sur la carte et dans la liste des notes A/V dans [Mes lieux](../plugins/audio-video-notes#view-in-my-places). La suppression de la note audio, vidéo ou photo ne supprime pas le point de passage respectif.

- Sur la carte, un point de passage et une note audio, vidéo ou photo peuvent être visibles ou non sur la carte. Cela est déterminé par la couche actuellement activée pour le profil.

- Lorsque ni la couche Traces ni la couche Enregistrement ne sont activées, les points de passage et les notes peuvent être affichés en les touchant dans Mes lieux. Dans ce cas, la carte affiche les emplacements de la note touchée, ou respectivement, les emplacements de tous les points de passage de la trace touchée.

| Visible | Couche activée |
| --- | --- |
| Seulement les points de passage | Couche Traces |
| Points de passage et notes | Couches Traces et Enregistrement |
| Seulement les notes | Couche Enregistrement |
| Aucun | Ni la couche Traces, ni la couche Enregistrement. |


### Fichier GPX avec points de passage {#gpx-file-with-waypoints}

![Waypoint in a GPX file](@site/static/img/plugins/audio-video-notes/waypoint_in_GPX_file.png)

Si vous visualisez le fichier GPX de la trace ajoutée avec un point de passage à partir d'une note audio/vidéo/photo, le point de passage sera comme dans l'exemple ci-dessous, ayant les coordonnées, l'horodatage, le nom de la note respective et le lien court.


## Divers {#miscellaneous}

### Détails du nom de fichier {#file-name-details}

Le plugin <Translate android="true" ids="audionotes_plugin_name"/> génère des fichiers audio/vidéo/photo au format suivant :

    `{SHORTLINK_LOCATION}_Description.{avi,mp3,jpg}`

où `SHORTLINK_LOCATION` spécifie la latitude et la longitude de l'emplacement auquel le fichier est lié. Le `SHORTLINK_LOCATION` est encodé, selon la spécification du [Shortlink](https://wiki.openstreetmap.org/wiki/Shortlink).


### Exporter vers JOSM {#export-to-josm}

![Audio video notes in Josm](@site/static/img/plugins/audio-video-notes/josm-track-points.png)

Pour tout visualiser plus tard, vous pouvez exporter la trace avec tous les fichiers multimédias et les visualiser dans l'[éditeur JOSM](https://josm.openstreetmap.de/). Notez que les fichiers multimédias doivent être placés dans le dossier approprié. Vous pouvez savoir lequel en cliquant sur la vidéo. Une notification apparaîtra indiquant qu'aucun fichier n'est disponible, placez le fichier correct dans le dossier spécifié.


## Articles connexes {#related-articles}

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres globaux](../../user/personal/global-settings.md)
- [Cartes vectorielles (Styles de carte)](../../user/map/vector-maps.md)

> *Dernière mise à jour : mai 2023*