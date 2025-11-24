---
source-hash: 494c0f42fb3a14331085fa79522a6bbb96cda5013289fdce88b34a3330403762
sidebar_position: 3
title:  Audio-/Videonotizen
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

Ihre Audio- und Videoaufnahmen können in Zukunft nützlich sein, zum Beispiel als Erinnerung an Orte, an denen Sie waren. Sie sind im Menü [Meine Orte](../personal/myplaces.md) verfügbar und sichtbar, wenn das Audio-/Videonotizen-Plugin aktiviert ist.

Das Audio-/Videonotizen-Plugin erweitert die Funktionalität von OsmAnd, indem es Ihnen ermöglicht, eigene Notizen in verschiedenen Formaten wie Fotos, Videos oder Audio zu erstellen und sie mit ihrem geografischen Standort oder dem aktuellen Standort zu verknüpfen. Aufnahmen können nur bei eingeschaltetem Plugin über das [Audio-/Videonotizen-Widget](../widgets/info-widgets.md#audiovideo-notes-widget) und/oder das [Kartenkontextmenü](../map/map-context-menu.md#-audiovideo-note) gemacht werden. Die erfassten Daten werden automatisch in [Meine Orte](../personal/myplaces.md) gespeichert, von wo aus sie bequem verwaltet und geteilt werden können.  

Alle erstellten Audio- und Videonotizen bilden die Aufnahmeebene. Wenn diese auf der Karte aktiviert ist, ändert sich die Ansicht der aufgezeichneten Daten und es gibt mehr Einstellungen zur Verwaltung der Aufnahmen. In der Aufnahmeebene werden Audio- und Videonotizen als POIs auf der Karte platziert, wodurch eine nur für den Gerätebesitzer sichtbare Benutzererzählung entsteht.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Audio video notes intro](@site/static/img/plugins/audio-video-notes/widgets_view.png)

</TabItem>

</Tabs>


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Die Audio-/Videonotizen werden durch das Audio-/Videonotizen-Plugin bereitgestellt und erfordern die folgende Einrichtung:

1. Aktivieren Sie das [Audio-/Videonotizen-Plugin](../plugins/index.md#enable--disable) im Bereich Plugins des *Hauptmenüs*.  
2. Fügen Sie für eine möglichst bequeme Nutzung ein [Widget](../widgets/info-widgets.md#audiovideo-notes-widget) zum Kartenbildschirm hinzu.
3. Passen Sie bei Bedarf die [Aufnahmeeinstellungen](#plugin-settings) für jedes Profil an.  


## Plugin-Einstellungen {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,audionotes_plugin_name,shared_string_settings"/>*  

![Audio video plugin settings Photo Android](@site/static/img/plugins/audio-video-notes/settings_av_plugin.png)

</TabItem>

</Tabs>

Für jedes Profil können Sie die *Audio- und Videoaufnahmeoptionen* konfigurieren.  

| Parameter | Beschreibung |
| --- | --- |
| **<Translate android="true" ids="camera_app"/>**  | Sie können wählen, ob Sie die System-App oder die OsmAnd-Kamera verwenden möchten, um <Translate android="true" ids="photo_notes"/> aufzunehmen.|
| **<Translate android="true" ids="av_camera_pic_size"/>** | Legt die Größe der aufzunehmenden Fotos fest. Die Kamerafunktionen des Geräts bestimmen die Anzahl der verfügbaren Optionen. Wenn keine Option ausgewählt ist, verwendet die App die Größe aus den Systemeinstellungen der Gerätekamera. |
| **<Translate android="true" ids="av_camera_focus"/>** | Legt die Methode fest, wie der Kamerafokus eingestellt wird. Die Anzahl der verfügbaren Optionen wird durch die Fähigkeiten der Gerätekamera bestimmt. Grundsätzlich gibt es die folgenden drei Optionen: *<Translate android="true" ids="av_camera_focus_auto"/>*; *<Translate android="true" ids="av_camera_focus_continuous"/>*; und *<Translate android="true" ids="av_camera_focus_infinity"/>*. **Autofokus** ist die beliebteste und stellt den automatischen Modus für die Kamera ein; **kontinuierlich** lässt die Kamera Bewegungen erkennen und entsprechend neu fokussieren; und die **Unendlich**-Option lässt das Objektiv auf eine Entfernung fokussieren und hält so Objekte im Fokus, egal wie weit sie entfernt sind. |
| **<Translate android="true" ids="multimedia_photo_play_sound"/>** | Wenn aktiviert, wird ein Ton erzeugt, wenn die Kamera eine Aufnahme macht. Bitte beachten Sie, dass gemäß den Datenschutzgesetzen **in einigen Ländern Geräte keinen Stummschalter für den Kameraauslöser haben**. Wenn Sie die System-App verwenden, sollte der Ton in der Kamera-App deaktiviert werden. |
| **<Translate android="true" ids="av_audio_format"/>** | Bietet eine Auswahl an Formaten für eine Audiodatei. Die Anzahl der verfügbaren Optionen und welche standardmäßig verwendet wird, wird durch die Parameter eines bestimmten Geräts bestimmt. |
| **<Translate android="true" ids="av_audio_bitrate"/>** | Diese Option bietet eine Auswahl an Bitratenoptionen für eine zu erstellende Audiodatei. Die verfügbaren Bitratenoptionen reichen von 16 kbps bis 128 kbps oder die Standardoption. Der Standardparameter wird durch die "Standard"-Mikrofoneinstellungen Ihres Geräts bestimmt. |
| **<Translate android="true" ids="multimedia_use_system_camera"/>** | Wenn aktiviert, verwendet OsmAnd die Systemanwendung, um Videos in <Translate android="true" ids="video_notes"/> aufzunehmen. |
| **<Translate android="true" ids="av_video_quality"/>** | Dies bietet eine Auswahl an Optionen, die das Format des Ausgabebildes bestimmen. Der Bereich der verfügbaren Optionen wird durch die Parameter eines bestimmten Geräts bestimmt. Die Standardoption ist die Option *Höchste Qualität*.  |
| **<Translate android="true" ids="multimedia_rec_split_title"/>** | Wenn aktiviert, werden alte Videoaufnahmen automatisch neu geschrieben und durch neue Videoaufnahmen ersetzt, wenn die Speichergröße das Größenlimit erreicht.  |
| **<Translate android="true" ids="rec_split_clip_length"/>** | Dies bestimmt die obere Zeitgrenze für aufgezeichnete Videoclips. Es gibt Optionen mit einem Bereich von 1 Minute bis 30 Minuten.|
| **<Translate android="true" ids="rec_split_storage_size"/>** | Dies legt die Größe des für aufgezeichnete Videos vorgesehenen Speichers fest. Es gibt Optionen mit einem Bereich von 1024 MB bis 62 GB. Ein spezifischer Bereich von Optionen und die Standardoption werden mit den Parametern eines bestimmten Geräts bestimmt. Eine Systemmeldung erinnert Sie daran, wenn die Speichergröße das festgelegte Limit erreicht. |
| **<Translate android="true" ids="notes"/>** | Diese Option leitet Sie zu den [Audio-/Videonotizen in Meine Orte](../personal/myplaces.md) weiter - dem zentralen Speicher aller jemals in der App erstellten Audio-/Videonotizen. |
| **<Translate android="true" ids="reset_plugin_to_default"/>** | Sie können die Standardwerte für alle A/V-Notizeinstellungen festlegen.  |
| **<Translate android="true" ids="copy_from_other_profile"/>** | Öffnet einen Dialog zur Auswahl eines Profils, von dem die Konfiguration der Audio-/Videonotizaufnahme kopiert und für das aktuelle Profil übernommen werden soll. |


## Eine einzelne Notiz erstellen {#create-a-single-note}

Sie können eine Foto-, Video- und Audionotiz auf eine der folgenden Arten erstellen:

- Mit dem [Widget](../widgets/info-widgets.md#audiovideo-notes-widget). Wenn die Notiz mit Ihrer aktuellen geografischen Position verknüpft werden soll.
- Mit dem [Kontextmenü](../map/map-context-menu.md#overview) eines Punktes auf der Karte. Wenn die Notiz mit dem ausgewählten Punkt auf der Karte verknüpft werden soll.


### Erstellen & an aktueller Position anheften {#create-&-pin-current-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Audio video plugin widget Android](@site/static/img/plugins/audio-video-notes/audio_video_plugin_widget_choice_android.png)

</TabItem>

</Tabs>

Das <Translate android="true" ids="map_widget_av_notes"/>-Widget wird verwendet, um eine Notiz zu erstellen, die mit Ihrer aktuellen Position verknüpft ist, und so die Suche nach einem geeigneten Punkt für eine Notiz auf der Karte zu vermeiden. Tippen Sie einfach auf das Widget und machen Sie die Notiz.  

Die vom <Translate android="true" ids="map_widget_av_notes"/>-Widget bereitgestellten Funktionen hängen davon ab, wie es im Menü [Bildschirm konfigurieren](../widgets/info-widgets.md#audiovideo-notes-widget) konfiguriert ist. Das Widget öffnet entweder sofort die Kamera, um eine Notiz gemäß den festgelegten Einstellungen zu machen, oder fragt zuerst, in welchem Format eine Notiz erstellt werden soll, und öffnet dann den entsprechenden Aufnahmedialog.


### Erstellen & an ausgewählter Position anheften {#create-&-pin-selected-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Audio video plugin  Context menu take a note](@site/static/img/plugins/audio-video-notes/context-menu-take-note.png)

</TabItem>

</Tabs>

Um eine Notiz zu erstellen, die mit einem ausgewählten Punkt auf der Karte verknüpft ist, verwenden Sie das [Kontextmenü](../map/map-context-menu.md#-record-av-note) des Punktes:

1. Tippen Sie lange auf einen Punkt auf der Karte, und das [Kontextmenü](../map/map-context-menu.md) öffnet sich.
2. Tippen Sie auf **Aktionen** und wählen Sie eine der verfügbaren Optionen aus der Liste:

    - **<Translate android="true" ids="recording_context_menu_arecord"/>** - um eine Audionotiz zu machen und sie mit dem ausgewählten Punkt auf der Karte zu verknüpfen;
    - **<Translate android="true" ids="recording_context_menu_vrecord"/>** - um eine Videonotiz zu machen und sie mit dem ausgewählten Punkt auf der Karte zu verknüpfen;
    - **<Translate android="true" ids="recording_context_menu_precord"/>** - um eine Fotonotiz zu machen und sie mit dem ausgewählten Punkt auf der Karte zu verknüpfen.

3. Je nach ausgewähltem Format der Notiz öffnet sich der entsprechende Aufnahmedialog.


### Aufnahmedialog {#recorder-dialog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Video note recorder](@site/static/img/plugins/audio-video-notes/take_a_video_note_widget.png)

</TabItem>

</Tabs>

Für *Audio- und Videonotizen* wird jeweils der Audio- oder Videorekorder angezeigt. Sie können:

- Die Aufnahme mit dem *Stopp*-Symbol beenden.
- Die Dauer der Aufnahme anzeigen.
- Den Videobildschirm ein- oder ausblenden.

Es ist möglich, die Aufnahme durch Tippen auf das <Translate android="true" ids="map_widget_av_notes"/>-Widget zu stoppen, unabhängig davon, ob das Kontextmenü oder das Widget die Aufnahme gestartet hat. Für *eine Fotonotiz* wird die Kamerafunktionalität angezeigt, und Sie können ein Foto aufnehmen, das Ergebnis ansehen, es akzeptieren und speichern oder ein neues Foto aufnehmen.

:::info note
Automatisch werden alle Foto-, Audio- und Videoaufnahmen im Tab <Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/> gespeichert.
:::


## Eine einzelne Notiz verwalten {#manage-a-single-note}

Sie können Ihre Informationen, Gedanken, Ideen usw., die an einen geografischen Ort gebunden sind, wie folgt verwalten:

- Alle Notizen als Liste in [Meine Orte](../personal/myplaces.md) anzeigen.
- Die spezifische Notiz auf der Karte anzeigen.
- Eine Notiz in "Meine Orte" umbenennen.
- Alle Notizen [auf der Karte anzeigen](../map/configure-map-menu.md#map-data-layers).
- Die Notiz abspielen.
- Wegpunkte in einem [Track](../plugins/trip-recording.md#new-track-recording) erstellen.
- Nach [JOSM](https://josm.openstreetmap.de/) exportieren.


### In "Meine Orte" anzeigen {#view-in-my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Audio video plugin My places menu](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu.png)

</TabItem>

</Tabs>

[Meine Orte](../personal/myplaces.md) ist ein zentrales Repository für all Ihre Notizen. Es ermöglicht Ihnen, alle Ihre Notizen in einer sortierten Liste anzuzeigen, eine bestimmte Notiz auf einer Karte darzustellen und Ihre gesamte Liste von Notizen zu verwalten.


### Auf der Karte anzeigen {#show-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Audio video plugin My places menu Context](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_context.png)

</TabItem>

</Tabs>

Um eine bestimmte Notiz auf der Karte anzuzeigen, verwenden Sie die Liste der Notizen in "Meine Orte", finden Sie die gewünschte und tippen Sie darauf. Daraufhin wird die Karte angezeigt, der Standort der Notiz hervorgehoben und das Kontextmenü geöffnet. Es ist möglich, mit der Notiz zu arbeiten, indem Sie die Optionen im Kontextmenü auswählen.


### Abspielen {#play}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Audio video plugin Context menu](@site/static/img/plugins/audio-video-notes/audio_video_notes_map_context_menu_1.png)  
![Audio video plugin My places menu actions](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Um eine Notiz abzuspielen, verwenden Sie die entsprechende Option im [Kontextmenü](../map/map-context-menu#overview), das für die Notiz geöffnet wurde:

- auf der Karte;
- in "Meine Orte".

Der Abschnitt [Details](../map/map-context-menu#details) bietet weitere Daten zu den Notizen, wie Breiten- und Längengrad, Datum und Uhrzeit der Notiz sowie Fotos.


### Umbenennen, Löschen, Teilen {#rename-delete-share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Audio video plugin My places menu actions](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Um eine Notiz in "Meine Orte" zu verwalten, tippen Sie auf die vertikalen drei Punkte der Notiz in der Liste, und die verfügbaren Optionen werden angezeigt, wie folgt:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Öffnen und betrachten Sie das ausgewählte Video oder spielen Sie die Audionotiz ab.
- **<Translate android="true" ids="shared_string_share"/>**. Teilen Sie die ausgewählte Notiz einfach mit anderen über verschiedene Plattformen.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Zeigt den genauen Standort und das Kontextmenü der Notiz auf der Karte an.
- **<Translate android="true" ids="shared_string_rename"/>**. Ändern Sie den Namen der Notiz zur leichteren Identifizierung.
- **<Translate android="true" ids="shared_string_delete"/>**. Entfernt Notizen dauerhaft aus der Anwendung.


## Aufnahme-Widget {#recording-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![The widget](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)  

</TabItem>

</Tabs>

Das [Audio-/Videonotizen-Widget](../widgets/info-widgets.md#audiovideo-notes-widget) erstellt Notizen, Fotos, Audio- und Videodateien und verknüpft sie mit Ihrer aktuellen Position. Das Widget hat mehrere Optionen, die als Standardaktion festgelegt werden können, die vom Widget ausgeführt wird, wenn der Bildschirm berührt wird.  

Das Hinzufügen eines Widgets zum Bildschirm ist notwendig, wenn Sie es vorziehen, die Suche nach einer Geolokalisierung auf der Karte zu vermeiden und Notizen mit Ihrem aktuellen Standardstandort zu verknüpfen. Um ein Widget hinzuzufügen oder anzupassen, folgen Sie den nachstehenden Schritten:  

1. Gehen Sie zu:  
    *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*

2. Wählen Sie  **<Translate android="true" ids="map_widget_left"/>** oder **<Translate android="true" ids="map_widget_right"/>**.

3. Tippen Sie auf **<Translate android="true" ids="map_widget_av_notes"/>**, und das Kontextmenü des Widgets öffnet sich.

4. Wählen Sie die Option, die Sie standardmäßig durch Tippen auf das Widget verwenden möchten:

    - **<Translate android="true" ids="av_def_action_choose"/>** - eine Auswahl von Optionen öffnen.

    - **<Translate android="true" ids="av_def_action_audio"/>** - eine Audioaufnahme starten.

    - **<Translate android="true" ids="av_def_action_video"/>** - eine Videoaufnahme starten.

    - **<Translate android="true" ids="av_def_action_picture"/>** - mit dem Fotografieren beginnen.

    ![The widget](@site/static/img/plugins/audio-video-notes/widget.png)  

**Externe Eingabegeräte verwenden (*Android*)**. Wenn Sie ein [externes Eingabegerät](https://osmand.net/docs/user/map/interact-with-map#external-input-devices) verwenden, können Sie Audio-/Videonotizen starten und stoppen, ohne den Bildschirm zu berühren. Zu diesem Zweck weisen Sie die Aktion „Audio-Notiz hinzufügen“ oder „Video-Notiz hinzufügen“ einer Taste zu:<br/>
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,other_menu_group,external_input_device"/>*

Sobald zugewiesen, funktioniert die Taste als Umschalter:
- Der erste Druck startet die Aufnahme einer Audio- oder Videonotiz (je nach ausgewählter Aktion).
- Der zweite Druck auf dieselbe Taste stoppt die Aufnahme.

Wenn eine Aufnahme über ein externes Eingabegerät gestoppt wird, wird das Kontextmenü nicht angezeigt, was die Nutzung von OsmAnd in vollständig hands-free-Szenarien erleichtert (z. B. beim Motorradfahren oder Autofahren).


## Mehrere Notizen verwalten {#manage-multiple-notes}

### In "Meine Orte" verwalten {#manage-in-my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Audio video plugin My places menu Three actions](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_three_actions.png)

</TabItem>

</Tabs>

Die Optionen in der unteren Leiste können verwendet werden, um die Liste der Notizen im Menü [Meine Orte](../personal/myplaces.md#audiovideo-notes) zu verwalten.


### Mit GPX-Wegpunkten teilen {#share-with-gpx-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

</TabItem>

</Tabs>

Sie können alle Notizen, einschließlich [GPX](../plugins/audio-video-notes.md#waypoints-created-from-notes), die ausgewählte Notizen als Wegpunkte enthalten, auf dem Bildschirm [Meine Orte](../personal/myplaces.md#audiovideo-notes) teilen, indem Sie auf die Schaltfläche "Teilen" im unteren Menü klicken. Neben jeder Notiz erscheint ein Kontrollkästchen, um bestimmte Notizen auszuwählen. Über den Notizen gibt es zwei Kontrollkästchen: *A/V-Notizen nach Datum*, um alle Notizen auszuwählen, und das Kontrollkästchen *Standorte*. Das Kontrollkästchen *Standorte* ermöglicht es Ihnen, eine separate GPX-Datei mit Koordinaten und Daten hinzuzufügen.  

Jede Notiz enthält die Zeit ihrer Erstellung, die Datenmenge und, falls es sich um eine Aufnahme handelt, die Aufnahmezeit und Standortdaten. Sie können GPX-Daten hinzufügen.  
Unterstützte Dateiformate: Audio - **3gp**, Video - **mp4**, Foto -**jpg**.


### Alle auf der Karte anzeigen {#show-all-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![Show notes on the map](@site/static/img/plugins/audio-video-notes/recording_layer.png)

</TabItem>

</Tabs>

Auf der Karte angezeigte Notizen können Ihre Geschichte erzählen, wo Sie Schilder entdeckt haben, welche Tür Sie öffnen mussten, wo der Ausgang ist, der optimale Weg und mehr. Sie können Notizen [einzeln](#show-on-the-map) oder alle auf einmal anzeigen.

Verwenden Sie die Kartenebene [Aufnahme](../map/point-layers-on-map#-audio--video-points-android), um alle Notizen ein- oder auszublenden. Wenn Sie sie im Menü [Karte konfigurieren](../map/configure-map-menu) einschalten, zeigt die Aufnahmeebene alle Notizen auf der Karte an.

![No notes on the map](@site/static/img/plugins/audio-video-notes/no_notes_on_map.png) ![Notes are on the map](@site/static/img/plugins/audio-video-notes/notes_on_map.png)


## Aus Notizen erstellte Wegpunkte {#waypoints-created-from-notes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Notes and waypoints on the map](@site/static/img/plugins/audio-video-notes/note_waypoint_on_map.png)  
![Waypoints on the track](@site/static/img/plugins/audio-video-notes/waypoint_auto_manual.png)

</TabItem>

</Tabs>

Ein Wegpunkt wird erstellt, wenn eine Audio-, Video- oder Fotonotiz zu einem Track hinzugefügt wird. Wegpunkte existieren innerhalb eines Tracks. Wenn ein Track sichtbar ist, sind auch seine Wegpunkte sichtbar. Somit können diese Notizen auf der Karte alle auf einmal oder nur auf einem bestimmten sichtbaren Track sichtbar sein. Im letzteren Fall werden die Notizen als Wegpunkte des Tracks angezeigt.

:::note
Wenn ein Track exportiert wird, können die Wegpunkte nicht angezeigt oder abgespielt werden, da Audio-/Video-/Fotonotizen nur auf dem Gerät gespeichert und nur für Sie auf diesem Gerät verfügbar sind.
:::


### Wegpunkte erstellen {#create-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Manually adding a waypoint to track](@site/static/img/plugins/audio-video-notes/waypoint_manually_created.png)

</TabItem>

</Tabs>

Es gibt zwei Möglichkeiten, einen Wegpunkt zu erstellen: automatisch und manuell.

1. **Automatisch** wird ein Wegpunkt erstellt, wenn Sie eine Audio-/Video-/Fotonotiz aufnehmen, während die [Routenaufzeichnung](../plugins/trip-recording) läuft, unabhängig von der Geolokalisierung, ob sie an die aktuelle Position oder einen beliebigen Ort gebunden ist, und somit unabhängig von den dafür verwendeten Mitteln: ob es das [Widget](../widgets/info-widgets#audiovideo-notes-widget) oder das [Kontextmenü](../map/map-context-menu#-audiovideo-note) ist.

    Alle automatisch hinzugefügten Wegpunkte erhalten einen automatisch zugewiesenen Namen. Der Name wird gemäß dem unten für eine Audio-/Video-/Fotodatei angegebenen Format erstellt und hat einen [Shortlink](https://wiki.openstreetmap.org/wiki/Shortlink). Das Beispiel der Wegpunkte in der obigen Abbildung zeigt automatisch und manuell erstellte Wegpunkte, wobei die ersten vier automatisch und der letzte manuell erstellt wurden.

2. **Manuell** wird ein Wegpunkt über das [Kontextmenü](../map/map-context-menu#-audiovideo-note) wie folgt erstellt:

    - Wählen Sie die gewünschte Audio-/Video-/Fotonotiz auf der Karte aus.
    - Tippen Sie auf **Aktionen** und dann auf **Track hinzufügen**.
    - Wählen Sie den Track aus, zu dem Sie einen Wegpunkt hinzufügen möchten.
    - Der Dialog *<Translate android="true" ids="quick_action_add_gpx"/>* öffnet sich und ermöglicht es Ihnen, einige Eigenschaften wie den Namen des Wegpunkts, ein Symbol, eine Farbe und anderes festzulegen. Wenn Sie fertig sind, tippen Sie auf **Speichern**.

:::info note
Sie können für jeden manuell erstellten Wegpunkt Namen angeben.
:::


### Wegpunkte anzeigen {#view-waypoints}

- Ein Wegpunkt kann als Wegpunkt auf der Karte und in der Liste der [Wegpunkte eines bestimmten Tracks](../map/tracks/track-context-menu.md#points--waypoints) angezeigt werden. Das Löschen des Wegpunkts löscht nicht die entsprechende Audio-/Video-/Fotonotiz.

- Eine Audio-, Video- oder Fotonotiz kann auf der Karte und in der Liste der A/V-Notizen in [Meine Orte](../plugins/audio-video-notes#view-in-my-places) angezeigt werden. Das Löschen der Audio-, Video- oder Fotonotiz löscht nicht den entsprechenden Wegpunkt.

- Auf der Karte können ein Wegpunkt und eine Audio-, Video- oder Fotonotiz sichtbar sein oder nicht. Dies wird dadurch bestimmt, welche Ebene für das Profil gerade eingeschaltet ist.

- Wenn weder die Tracks- noch die Aufnahmeebene eingeschaltet ist, können sowohl Wegpunkte als auch Notizen angezeigt werden, indem man sie in "Meine Orte" antippt. In diesem Fall zeigt die Karte die Standorte der angetippten Notiz bzw. die Standorte aller Wegpunkte des angetippten Tracks an.

| Sichtbar | Ebene eingeschaltet |
| --- | --- |
| Nur Wegpunkte | Tracks-Ebene |
| Wegpunkte und Notizen | Tracks- und Aufnahmeebene |
| Nur Notizen | Aufnahmeebene |
| Keine | Weder Tracks- noch Aufnahmeebene. |


### GPX-Datei mit Wegpunkten {#gpx-file-with-waypoints}

![Waypoint in a GPX file](@site/static/img/plugins/audio-video-notes/waypoint_in_GPX_file.png)  

Wenn Sie die GPX-Datei des Tracks mit einem Wegpunkt aus einer Audio-/Video-/Fotonotiz anzeigen, sieht der Wegpunkt wie im folgenden Beispiel aus und enthält die Koordinaten, den Zeitstempel, den Namen der entsprechenden Notiz und den Shortlink.


## Sonstiges {#miscellaneous}

### Details zum Dateinamen {#file-name-details}

Das <Translate android="true" ids="audionotes_plugin_name"/>-Plugin generiert Audio-/Video-/Fotodateien im folgenden Format:

    `{SHORTLINK_LOCATION}_Beschreibung.{avi,mp3,jpg}`

wobei `SHORTLINK_LOCATION` den Breiten- und Längengrad des Ortes angibt, an den die Datei gebunden ist. Der `SHORTLINK_LOCATION` wird gemäß der Spezifikation des [Shortlink](https://wiki.openstreetmap.org/wiki/Shortlink) kodiert.


### Export nach JOSM {#export-to-josm}

![Audio video notes in Josm](@site/static/img/plugins/audio-video-notes/josm-track-points.png)  

Um alles später anzusehen, können Sie den Track zusammen mit allen Mediendateien exportieren und im [JOSM-Editor](https://josm.openstreetmap.de/) ansehen. Beachten Sie, dass die Mediendateien im entsprechenden Ordner abgelegt werden müssen. Welcher das ist, erfahren Sie, indem Sie auf das Video klicken. Es erscheint eine Benachrichtigung, die anzeigt, dass keine Datei verfügbar ist. Legen Sie die richtige Datei in dem angegebenen Ordner ab.  


## Verwandte Artikel {#related-articles}

- [Mit der Karte interagieren](../../user/map/interact-with-map.md)
- [Allgemeine Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)