---
source-hash: 27722eb18550cf9d93cb885bccf878c6d53e33daba1748a270790fa1cca1066e
sidebar_position: 3
title: Audio-/Video-Notizen
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

## Übersicht {#overview}

Ihre Audio- und Videoaufnahmen können in Zukunft nützlich sein, z. B. als Erinnerungen an Orte, an denen Sie waren. Sie sind im Menü [Meine Orte](../personal/myplaces.md) verfügbar und sichtbar, wenn das Audio-/Video-Notizen-Plugin aktiviert ist.

Das Audio-/Video-Notizen-Plugin erweitert die Funktionalität von OsmAnd, indem es Ihnen ermöglicht, eigene Notizen in verschiedenen Formaten wie Fotos, Videos oder Audio zu erstellen und diese mit ihrem geografischen Standort oder dem aktuellen Standort zu verknüpfen. Sie können Aufnahmen nur machen, wenn das Plugin eingeschaltet ist, indem Sie das [Audio-/Video-Notizen-Widget](../widgets/info-widgets.md#-audio-video-notes-widget) und/oder das [Karten Kontextmenü](../map/map-context-menu.md#-audiovideo-note) verwenden. Die empfangenen Daten werden automatisch in [Meine Orte](../personal/myplaces.md) gespeichert, von wo aus sie bequem verwaltet und geteilt werden können.

Alle erstellten Audio- und Video-Notizen bilden die Aufzeichnungsebene. Wenn sie auf der Karte aktiviert ist, ändert sich die Ansicht der aufgezeichneten Daten und es gibt weitere Einstellungen zur Verwaltung der Aufzeichnungen. In der Aufzeichnungsebene werden Audio- und Video-Notizen als POIs auf der Karte platziert, wodurch eine nur für den Gerätebesitzer sichtbare Benutzererzählung entsteht.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Audio video notes intro](@site/static/img/plugins/audio-video-notes/widgets_view.png)

</TabItem>

</Tabs>


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Die Audio-/Video-Notizen werden mit dem Audio-/Video-Notizen-Plugin bereitgestellt und erfordern die folgende Einrichtung:

1. Aktivieren Sie das [Audio-/Video-Notizen-Plugin](../plugins/index.md#enable--disable) im Abschnitt Plugins des *Hauptmenüs*.
2. Fügen Sie ein [Widget](../widgets/info-widgets.md#-audio-video-notes-widget) zum Kartenbildschirm hinzu, um die bequemste Nutzung zu gewährleisten.
3. Passen Sie die [Aufnahmeeinstellungen](#plugin-settings) für jedes Profil an, falls erforderlich.


## Plugin Einstellungen {#plugin-settings}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,audionotes_plugin_name,shared_string_settings"/>*

![Audio video plugin settings Photo Android](@site/static/img/plugins/audio-video-notes/settings_av_plugin.png)

</TabItem>

</Tabs>

Für jedes Profil können Sie die *Audio- und Videoaufnahmeoptionen* konfigurieren.

| Parameter | Beschreibung |
| --- | --- |
| **<Translate android="true" ids="camera_app"/>** | Sie können wählen, ob Sie die System-App oder die OsmAnd-Kamera verwenden möchten, um <Translate android="true" ids="photo_notes"/> aufzunehmen. |
| **<Translate android="true" ids="av_camera_pic_size"/>** | Legt die Größe der aufzunehmenden Fotos fest. Die Kamerafunktionen des Geräts bestimmen die Anzahl der verfügbaren Optionen. Wenn keine Option ausgewählt ist, verwendet die App die Größe aus den Systemeinstellungen der Gerätekamera. |
| **<Translate android="true" ids="av_camera_focus"/>** | Legt die Methode fest, wie der Kamerafokus eingestellt wird. Die Anzahl der verfügbaren Optionen wird durch die Fähigkeiten der Gerätekamera bestimmt. Grundsätzlich gibt es die folgenden drei Optionen: *<Translate android="true" ids="av_camera_focus_auto"/>*; *<Translate android="true" ids="av_camera_focus_continuous"/>*; und *<Translate android="true" ids="av_camera_focus_infinity"/>*. **Autofokus** ist die beliebteste Option und stellt den automatischen Modus für die Kamera ein; **kontinuierlich** lässt die Kamera Bewegungen erkennen und entsprechend neu fokussieren; und die Option **Unendlich** lässt das Objektiv auf eine Entfernung fokussieren und hält Objekte somit unabhängig von ihrer Entfernung im Fokus. |
| **<Translate android="true" ids="multimedia_photo_play_sound"/>** | Wenn aktiviert, wird ein Ton erzeugt, wenn die Kamera eine Aufnahme macht. Bitte beachten Sie, dass, wie vom Datenschutzgesetz vorgeschrieben, **in einigen Ländern Geräte keinen Stummschalter für den Kameraverschluss haben**. Wenn Sie die System-App verwenden, sollte der Ton in der Kamera-App deaktiviert werden. |
| **<Translate android="true" ids="av_audio_format"/>** | Bietet eine Auswahl an Formaten für eine Audiodatei. Die Anzahl der verfügbaren Optionen und welche standardmäßig verwendet wird, wird durch die Parameter eines bestimmten Geräts bestimmt. |
| **<Translate android="true" ids="av_audio_bitrate"/>** | Diese Option bietet eine Auswahl an Bitratenoptionen für eine zu erstellende Audiodatei. Die verfügbaren Bitratenoptionen reichen von 16 kbps bis 128 kbps oder der Standardoption. Der Standardparameter wird durch die "Standard"-Mikrofoneinstellungen Ihres Geräts bestimmt. |
| **<Translate android="true" ids="multimedia_use_system_camera"/>** | Wenn aktiviert, verwendet OsmAnd die Systemanwendung, um Videos in <Translate android="true" ids="video_notes"/> aufzunehmen. |
| **<Translate android="true" ids="av_video_quality"/>** | Dies bietet eine Auswahl an Optionen, die das Format des Ausgabebildes bestimmen. Der Bereich der verfügbaren Optionen wird durch die Parameter eines bestimmten Geräts bestimmt. Die Standardoption ist die Option *Höchste Qualität*. |
| **<Translate android="true" ids="multimedia_rec_split_title"/>** | Wenn aktiviert, werden alte Videoaufnahmen automatisch überschrieben und durch neue Videoaufnahmen ersetzt, wenn die Speichergröße die Größenbeschränkung erreicht. |
| **<Translate android="true" ids="rec_split_clip_length"/>** | Dies bestimmt die obere Zeitbegrenzung für aufgezeichnete Videoclips. Es gibt Optionen mit einem Bereich von 1 Minute bis 30 Minuten. |
| **<Translate android="true" ids="rec_split_storage_size"/>** | Dies legt die Größe des für aufgezeichnete Videos vorgesehenen Speichers fest. Es gibt Optionen mit einem Bereich von 1024 MB bis 62 GB. Ein bestimmter Bereich von Optionen und die Standardoption werden durch die Parameter eines bestimmten Geräts bestimmt. Eine Systemmeldung erinnert Sie daran, dass die Speichergröße die festgelegte Grenze erreicht. |
| **<Translate android="true" ids="notes"/>** | Diese Option leitet Sie zu den [Audio-/Video-Notizen in Meine Orte](../personal/myplaces.md) weiter - dem zentralen Speicher aller jemals in der App erstellten Audio-/Video-Notizen. |
| **<Translate android="true" ids="reset_plugin_to_default"/>** | Sie können die Standardwerte für alle A/V-Notizen Einstellungen festlegen. |
| **<Translate android="true" ids="copy_from_other_profile"/>** | Öffnet einen Dialog zur Auswahl eines Profils, von dem die Audio-/Video-Notizen-Aufnahmekonfiguration kopiert und für das aktuelle Profil festgelegt werden soll. |


## Eine einzelne Notiz verwalten {#manage-a-single-note}

Sie können Ihre Informationen, Gedanken, Ideen usw., die an einen geografischen Ort gebunden sind, wie folgt verwalten:

- Eine Notiz erstellen.
- Alle Notizen als Liste in [Meine Orte](../personal/myplaces.md) anzeigen.
- Die spezifische Notiz auf der Karte anzeigen.
- Eine Notiz in Meine Orte umbenennen.
- Alle Notizen [auf der Karte](../map/configure-map-menu.md#map-data-layers) anzeigen.
- Die Notiz abspielen.
- Wegpunkte in einem [Track](../plugins/trip-recording.md#gpx-file-details) erstellen.
- Nach [JOSM](https://josm.openstreetmap.de/) exportieren.


### Erstellen {#create}

Sie können eine Foto-, Video- und Audio-Notiz auf eine der folgenden Arten erstellen:

- Mit dem [Widget](../widgets/info-widgets.md#-audio-video-notes-widget-android). Wenn die Notiz an Ihre aktuelle geografische Position gebunden sein soll.
- Mit dem [Kontextmenü](../map/map-context-menu.md#-record-av-note-android) eines Punktes auf der Karte. Wenn die Notiz an den ausgewählten Punkt auf der Karte gebunden sein soll.


#### 1. Erstellen und an Ihre aktuelle Position binden {#1-create-and-tie-to-your-current-position}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Audio video plugin widget Android](@site/static/img/plugins/audio-video-notes/audio_video_plugin_widget_choice_android.png)

</TabItem>

</Tabs>

Das <Translate android="true" ids="map_widget_av_notes"/> Widget wird verwendet, um eine Notiz zu erstellen, die an Ihre aktuelle Position gebunden ist, und somit die Suche nach einem geeigneten Punkt für eine Notiz auf der Karte zu vermeiden. Tippen Sie einfach auf das Widget und erstellen Sie die Notiz.

Die Funktionen, die das <Translate android="true" ids="map_widget_av_notes"/> Widget bietet, hängen davon ab, wie es im Menü [Bildschirm konfigurieren](../widgets/info-widgets.md#-audio-video-notes-widget-android) konfiguriert ist. Das Widget öffnet entweder sofort die Kamera, um eine Notiz gemäß den festgelegten Einstellungen zu erstellen, oder fragt zuerst, in welchem Format eine Notiz erstellt werden soll, und öffnet dann den entsprechenden Recorder-Dialog.


#### 2. Erstellen und an ausgewählte Geolocation binden {#2-create-and-tie-to-selected-geolocation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Audio video plugin  Context menu take a note](@site/static/img/plugins/audio-video-notes/context-menu-take-note.png)

</TabItem>

</Tabs>

Um eine Notiz zu erstellen, die an einen ausgewählten Punkt auf der Karte gebunden ist, verwenden Sie das [Kontextmenü](../map/map-context-menu.md#-record-av-note-android) des Punktes:

1. Tippen Sie lange auf einen Punkt auf der Karte, und das [Kontextmenü](../map/map-context-menu.md) öffnet sich.
2. Tippen Sie auf **Aktionen** und wählen Sie eine der verfügbaren Optionen aus der Liste:

    - **<Translate android="true" ids="recording_context_menu_arecord"/>** - um eine Audio-Notiz zu erstellen und sie an den ausgewählten Punkt auf der Karte zu binden;
    - **<Translate android="true" ids="recording_context_menu_vrecord"/>** - um eine Video-Notiz zu erstellen und sie an den ausgewählten Punkt auf der Karte zu binden;
    - **<Translate android="true" ids="recording_context_menu_precord"/>** - um eine Foto-Notiz zu erstellen und sie an den ausgewählten Punkt auf der Karte zu binden.

3. Je nach ausgewähltem Format der Notiz öffnet sich der entsprechende Recorder-Dialog.


#### Recorder-Dialog {#recorder-dialog}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Video note recorder](@site/static/img/plugins/audio-video-notes/take_a_video_note_widget.png)

</TabItem>

</Tabs>

Für *Audio- und Video-Notizen* wird der Audio- bzw. Video-Recorder angezeigt. Sie können:

- Die Aufnahme mit dem *Stop*-Symbol stoppen.
- Die Dauer der Aufnahme anzeigen.
- Den Videobildschirm anzeigen oder ausblenden.

Es ist möglich, die Aufnahme mit einem Tippen auf das <Translate android="true" ids="map_widget_av_notes"/> Widget zu stoppen, unabhängig davon, ob das Kontextmenü oder das Widget die Aufnahme gestartet hat. Für *eine Foto-Notiz* wird die Kamerafunktion angezeigt, und Sie können ein Foto aufnehmen, das Ergebnis anzeigen, es akzeptieren und speichern oder ein neues Foto aufnehmen.

:::info note
Automatisch werden alle Foto-, Audio- und Videoaufnahmen gespeichert unter: <Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/> Tab.
:::


### In Meine Orte anzeigen {#view-in-my-places}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Audio video plugin My places menu](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu.png)

</TabItem>

</Tabs>

[Meine Orte](../personal/myplaces.md) ist ein zentrales Repository für alle Ihre Notizen. Es ermöglicht Ihnen, alle Ihre Notizen in einer sortierten Liste anzuzeigen, eine bestimmte Notiz auf einer Karte anzuzeigen und Ihre gesamte Liste von Notizen zu verwalten.


### Auf der Karte anzeigen {#show-on-the-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Audio video plugin My places menu Context](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_context.png)

</TabItem>

</Tabs>

Um eine bestimmte Notiz auf der Karte anzuzeigen, verwenden Sie die Liste der Notizen in Meine Orte, suchen Sie die benötigte und tippen Sie darauf. Daraufhin wird die Karte angezeigt, der Speicherort der Notiz hervorgehoben und das [Kontextmenü](../plugins/audio-video-notes.md#actions-in-map-context-menu) geöffnet. Es ist möglich, mit der Notiz zu arbeiten, indem Sie die Optionen im Kontextmenü auswählen.


### Abspielen {#play}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Audio video plugin Context menu](@site/static/img/plugins/audio-video-notes/audio_video_notes_map_context_menu_1.png)
![Audio video plugin My places menu actions](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Um eine Notiz abzuspielen, verwenden Sie die entsprechende Option im [Kontextmenü](../map/map-context-menu#-audiovideo-note-android), das für die Notiz geöffnet wurde:

- auf der Karte;
- in Meine Orte.

Der Abschnitt [Details](../map/map-context-menu#-audiovideo-note-android) enthält weitere Daten zu den Notizen, wie z. B. Breiten- und Längengrad, Datum und Uhrzeit der Notiz sowie Fotos.


### Umbenennen, Löschen, Teilen {#rename-delete-share}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Audio video plugin My places menu actions](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Um eine Notiz in Meine Orte zu verwalten, tippen Sie auf die vertikalen drei Punkte der Notiz in der Liste, und die verfügbaren Optionen werden angezeigt, wie folgt:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Öffnen und anzeigen des ausgewählten Videos oder Abspielen der Audio-Notiz.
- **<Translate android="true" ids="shared_string_share"/>**. Einfaches Teilen der ausgewählten Notiz mit anderen über verschiedene Plattformen.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Zeigt den genauen Speicherort und das [Kontextmenü](../plugins/audio-video-notes#actions-in-map-context-menu) der Notiz auf der Karte an.
- **<Translate android="true" ids="shared_string_rename"/>**. Ändern Sie den Namen der Notiz zur einfacheren Identifizierung.
- **<Translate android="true" ids="shared_string_delete"/>**. Entfernt Notizen dauerhaft aus der Anwendung.


## Aufnahme-Widget {#recording-widget}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![The widget](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)

</TabItem>

</Tabs>

Das [Audio-/Video-Notizen-Widget](../widgets/info-widgets.md#audiovideo-notes-widget) erstellt Notizen, Fotos, Audio- und Videodateien und verknüpft sie mit Ihrer aktuellen Position. Das Widget verfügt über mehrere Optionen, die als Standardaktion festgelegt werden können, die vom Widget ausgeführt wird, wenn der Bildschirm berührt wird.

Das Hinzufügen eines Widgets zum Bildschirm ist notwendig, wenn Sie die Suche nach Geolocation auf der Karte vermeiden und Notizen mit Ihrem aktuellen Standardspeicherort verknüpfen möchten. Um ein Widget hinzuzufügen oder anzupassen, folgen Sie den Schritten unten:

1. Gehen Sie zu:
    *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*

2. Wählen Sie **<Translate android="true" ids="map_widget_left"/>** oder **<Translate android="true" ids="map_widget_right"/>**.

3. Tippen Sie auf **<Translate android="true" ids="map_widget_av_notes"/>**, und das Kontextmenü des Widgets öffnet sich.

4. Wählen Sie die Option, die Sie standardmäßig verwenden möchten, indem Sie auf das Widget tippen:

    - **<Translate android="true" ids="av_def_action_choose"/>** - öffnet eine Auswahl an Optionen.

    - **<Translate android="true" ids="av_def_action_audio"/>** - startet die Aufnahme einer Audio-Nachricht.

    - **<Translate android="true" ids="av_def_action_video"/>** - startet die Videoaufnahme.

    - **<Translate android="true" ids="av_def_action_picture"/>** - startet die Aufnahme von Fotos.

    ![The widget](@site/static/img/plugins/audio-video-notes/widget.png)


## Mehrere Notizen verwalten {#manage-multiple-notes}

### In Meine Orte verwalten {#manage-in-my-places}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Audio video plugin My places menu Three actions](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_three_actions.png)

</TabItem>

</Tabs>

Die Optionen in der unteren Leiste können verwendet werden, um die Liste der Notizen im Menü [Meine Orte](../personal/myplaces.md#audiovideo-notes) zu verwalten.


### Mit GPX-Wegpunkten teilen {#share-with-gpx-waypoints}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

</TabItem>

</Tabs>

Sie können alle Notizen einschließlich [GPX](../plugins/audio-video-notes.md#waypoints-created-from-notes) teilen, das ausgewählte Notizen als Wegpunkte auf dem Bildschirm [Meine Orte](../personal/myplaces.md#audiovideo-notes) enthält, indem Sie auf die Schaltfläche "Teilen" im unteren Menü klicken. Neben jeder Notiz wird ein Kontrollkästchen angezeigt, um bestimmte Notizen auszuwählen. Über den Notizen befinden sich zwei Kontrollkästchen: *A/V-Notizen nach Datum*, um alle Notizen auszuwählen, und das Kontrollkästchen *Orte*. Das Kontrollkästchen *Orte* ermöglicht es Ihnen, eine separate GPX-Datei mit Koordinaten und Daten hinzuzufügen.

Jede Notiz enthält die Zeit, zu der sie erstellt wurde, die Datenmenge und, wenn es sich um eine Aufzeichnung handelt, die Aufnahmezeit und Standortdaten. Sie können GPX Daten hinzufügen.
Unterstützte Dateiformate: Audio - **3gp**, Video - **mp4**, Foto - **jpg**.


### Alle auf der Karte anzeigen {#show-all-on-the-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![Show notes on the map](@site/static/img/plugins/audio-video-notes/recording_layer.png)

</TabItem>

</Tabs>

Auf der Karte angezeigte Notizen können Ihre Geschichte erzählen, wo Sie Schilder gesehen haben, welche Tür Sie öffnen mussten, wo der Ausgang ist, den optimalen Weg und mehr. Sie können Notizen [einzeln](#show-on-the-map) oder alle auf einmal anzeigen.

Verwenden Sie die [Aufzeichnungsebene](../map/point-layers-on-map#-audio--video-points-android), um alle Notizen anzuzeigen oder auszublenden. Wenn Sie sie im Menü [Karte konfigurieren](../map/configure-map-menu) einschalten, zeigt die Aufzeichnungsebene alle Notizen auf der Karte an.

![No notes on the map](@site/static/img/plugins/audio-video-notes/no_notes_on_map.png) ![Notes are on the map](@site/static/img/plugins/audio-video-notes/notes_on_map.png)


## Wegpunkte, die aus Notizen erstellt wurden {#waypoints-created-from-notes}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Notes and waypoints on the map](@site/static/img/plugins/audio-video-notes/note_waypoint_on_map.png)
![Waypoints on the track](@site/static/img/plugins/audio-video-notes/waypoint_auto_manual.png)

</TabItem>

</Tabs>

Ein Wegpunkt wird erstellt, wenn eine Audio-, Video- oder Foto-Notiz zu einem Track hinzugefügt wird. Wegpunkte existieren innerhalb eines Tracks. Wenn ein Track sichtbar ist, sind auch seine Wegpunkte sichtbar. Somit können diese Notizen alle auf einmal oder nur auf einem bestimmten sichtbaren Track auf der Karte sichtbar sein. Im letzteren Fall werden die Notizen als Wegpunkte des Tracks angezeigt.

:::note
Wenn ein Track exportiert wird, können die Wegpunkte nicht angezeigt oder abgespielt werden, da Audio-/Video-/Foto-Notizen nur auf dem Gerät gespeichert und nur für Sie auf diesem Gerät verfügbar sind.
:::


### Wegpunkte erstellen {#create-waypoints}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Manually adding a waypoint to track](@site/static/img/plugins/audio-video-notes/waypoint_manually_created.png)

</TabItem>

</Tabs>

Es gibt zwei Möglichkeiten, einen Wegpunkt zu erstellen: automatisch und manuell.

1. **Automatisch** wird ein Wegpunkt erstellt, falls Sie eine Audio-/Video-/Foto-Notiz aufnehmen, während die [Trip-Aufzeichnung](../plugins/trip-recording) läuft, unabhängig von der Geolocation, ob sie an die aktuelle Position oder einen beliebigen Ort gebunden ist, und somit unabhängig von den dafür verwendeten Mitteln: ob es sich um das [Widget](../widgets/info-widgets#-audio-video-notes-widget-android) oder das [Kontextmenü](../map/map-context-menu#-audiovideo-note-android) handelt.

    Alle automatisch hinzugefügten Wegpunkte erhalten einen automatisch zugewiesenen Namen. Der Name wird gemäß dem unten für eine Audio-/Video-/Foto-Datei angegebenen Format erstellt und hat einen [Shortlink](https://wiki.openstreetmap.org/wiki/Shortlink). Das Beispiel der Wegpunkte in der obigen Abbildung zeigt automatisch und manuell erstellte Wegpunkte, wobei die ersten vier automatisch und der letzte manuell erstellt wurden.

2. **Manuell** wird ein Wegpunkt über das [Kontextmenü](../map/map-context-menu#-audiovideo-note-android) erstellt, wie folgt:

    - Wählen Sie die gewünschte Audio-/Video-/Foto-Notiz auf der Karte aus.
    - Tippen Sie auf **Aktionen** und dann auf **Track hinzufügen**.
    - Wählen Sie den Track aus, zu dem Sie einen Wegpunkt hinzufügen möchten.
    - Der Dialog *<Translate android="true" ids="quick_action_add_gpx"/>* öffnet sich und ermöglicht es Ihnen, einige Eigenschaften festzulegen, wie z. B. den Namen des Wegpunkts, ein Symbol, eine Farbe und andere. Wenn Sie fertig sind, tippen Sie auf **Speichern**.

:::info note
Sie können Namen für jeden manuell erstellten Wegpunkt angeben.
:::


### Wegpunkte anzeigen {#view-waypoints}

- Ein Wegpunkt kann als Wegpunkt auf der Karte und in der Liste der [Wegpunkte eines bestimmten Tracks](../map/tracks/track-context-menu.md#points--waypoints) angezeigt werden. Das Löschen des Wegpunkts löscht nicht die entsprechende Audio-/Video-/Foto-Notiz.

- Eine Audio-, Video- oder Foto-Notiz kann auf der Karte und in der Liste der A/V-Notizen in [Meine Orte](../plugins/audio-video-notes#view-in-my-places) angezeigt werden. Das Löschen der Audio-, Video- oder Foto-Notiz löscht nicht den entsprechenden Wegpunkt.

- Auf der Karte können ein Wegpunkt und eine Audio-, Video- oder Foto-Notiz auf der Karte sichtbar sein oder nicht. Dies wird durch die Ebene bestimmt, die derzeit für das Profil aktiviert ist.

- Wenn weder die Tracks- noch die Aufzeichnungsebene aktiviert ist, können sowohl Wegpunkte als auch Notizen durch Tippen in Meine Orte angezeigt werden. In diesem Fall zeigt die Karte die Speicherorte der angetippten Notiz oder die Speicherorte aller Wegpunkte des angetippten Tracks an.

| Sichtbar | Ebene aktiviert |
| --- | --- |
| Nur Wegpunkte | Tracks-Ebene |
| Wegpunkte und Notizen | Tracks- und Aufzeichnungsebene |
| Nur Notizen | Aufzeichnungsebene |
| Keine | Weder Tracks- noch Aufzeichnungsebene. |


### GPX-Datei mit Wegpunkten {#gpx-file-with-waypoints}

![Waypoint in a GPX file](@site/static/img/plugins/audio-video-notes/waypoint_in_GPX_file.png)

Wenn Sie die GPX-Datei des Tracks anzeigen, der mit einem Wegpunkt aus einer Audio-/Video-/Foto-Notiz hinzugefügt wurde, wird der Wegpunkt wie im folgenden Beispiel aussehen, mit den Koordinaten, dem Zeitstempel, dem Namen der entsprechenden Notiz und dem Shortlink.


## Sonstiges {#miscellaneous}

### Details zum Dateinamen {#file-name-details}

Das <Translate android="true" ids="audionotes_plugin_name"/> Plugin generiert Audio-/Video-/Foto-Dateien im folgenden Format:

    `{SHORTLINK_LOCATION}_Beschreibung.{avi,mp3,jpg}`

wobei `SHORTLINK_LOCATION` den Breiten- und Längengrad des Ortes angibt, an den die Datei gebunden ist. Der `SHORTLINK_LOCATION` wird gemäß der Spezifikation des [Shortlink](https://wiki.openstreetmap.org/wiki/Shortlink) kodiert.


### Export nach JOSM {#export-to-josm}

![Audio video notes in Josm](@site/static/img/plugins/audio-video-notes/josm-track-points.png)

Um später alles anzuzeigen, können Sie den Track zusammen mit allen Mediendateien exportieren und sie im [JOSM-Editor](https://josm.openstreetmap.de/) anzeigen. Beachten Sie, dass die Mediendateien im entsprechenden Ordner abgelegt werden müssen. Welcher das ist, erfahren Sie, indem Sie auf das Video klicken. Es erscheint eine Benachrichtigung, die anzeigt, dass keine Datei verfügbar ist. Legen Sie die richtige Datei in den angegebenen Ordner.


## Verwandte Artikel {#related-articles}

- [Interaktion mit der Karte](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)

> *Zuletzt aktualisiert: Mai 2023*