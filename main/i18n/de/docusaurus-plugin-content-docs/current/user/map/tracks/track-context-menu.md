---
source-hash: c3e5ac67f7089096f5b71e7e0201440bab4f393bc16c357be3085327287a1bd3
sidebar_position: 4
title:  Track-Kontextmenü
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



## Übersicht {#overview}

Das *Track-Kontextmenü* bietet Informationen über den *[Track](../../personal/tracks/index.md)* sowohl in Text- als auch in [grafischer](#altitude--speed-graphs) Form. Es ermöglicht Ihnen, Informationen hinzuzufügen, Änderungen vorzunehmen, zu bearbeiten und verschiedene andere Aktionen mit dem Track durchzuführen. Sie können das *Track-Kontextmenü* aufrufen, indem Sie einfach auf den gewünschten Track auf der Karte tippen oder das Menü *[Meine Orte](../../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*) verwenden. Möglicherweise müssen Sie den Track-Ordner öffnen und den gewünschten Track durch Antippen auswählen.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Übersicht Track-Kontextmenü Android](@site/static/img/personal/tracks/track_context_overview_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Übersicht Track-Kontextmenü iOS](@site/static/img/personal/tracks/track_context_overview_2_ios.png)

</TabItem>

</Tabs>


## Track-Übersicht {#track-overview}

Wenn Sie auf einen Track tippen, öffnet sich der erste Bildschirm des *Track-Kontextmenüs* - der *Tab Übersicht*. Auf diesem Tab finden Sie eine Zusammenfassung des ausgewählten Tracks (*[Infobereich](#info-panel)*) und können die häufigsten Aktionen mit dem Track über das *[Track-Aktionen-Menü](#track-actions)* ausführen. Sie können [Beschreibung und Serviceinformationen](#description-and-info) zu Ihrem Track sehen, wenn Sie den Tab "Übersicht" nach oben ziehen.

<!--
You can [short tap](../../map/map-context-menu.md#select-route-short-tap-for-android) on the track on the map → <Translate android="true" ids="shared_string_overview"/> → click to "eye" button for not showing the track on the map. 
-->

### Infobereich {#info-panel}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Infobereich Übersicht Android](@site/static/img/personal/tracks/track_context_info_panel_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Infobereich Übersicht iOS](@site/static/img/personal/tracks/track_context_info_panel_ios.png)

</TabItem>

</Tabs>

Oben im Infobereich sehen Sie den Namen des Tracks und das Symbol, mit dem er markiert ist (*nur Android*). Der Trackname kann mit der Umbenennungsfunktion im [Optionsmenü](#options) geändert werden. Einige Tracks (meistens die *[Reiseführer](../../plan-route/travel-guides.md#manage-as-gpx-track)*) können eine kurze *[Beschreibung](#description-and-info)* und/oder ein Bild unter dem *Tracknamen* haben. Ein Pfeil zeigt die *Richtung zum nächstgelegenen Punkt des Tracks* von [Mein Standort](../../map/interact-with-map.md#my-location-and-zoom) aus an.  

Der Infobereich bietet auch Informationen über Folgendes:

- *<Translate android="true" ids="distance"/>*. Zeigt die Tracklänge an.
- *<Translate android="true" ids="altitude_ascent"/>* / *<Translate android="true" ids="altitude_descent"/>*. Zeigt die Gesamtsumme der Auf- und Abstiege während der Tour an.
- *<Translate android="true" ids="altitude_range"/>*. Gibt die minimale und maximale Höhe auf einem Track an.  

Falls Ihr Track in OsmAnd oder einer anderen Tracking-App erstellt wurde (sodass seine Punkte [`time`- und `speed`](../../plugins/trip-recording#recorded-gpx-file)-Tags haben), enthält der Infobereich auch Informationen über *<Translate android="true" ids="average_speed"/>*, *<Translate android="true" ids="max_speed"/>*, *<Translate android="true" ids="map_widget_trip_recording_duration"/>* (die Zeitspanne zwischen dem Start- und Endpunkt des Tracks) und *<Translate android="true" ids="shared_string_time_moving"/>* (die Gesamtzeit während der Fahrt).

**Hinweis:** Bei aufgezeichneten Tracks zeigt die Dauer die tatsächliche Fahrzeit basierend auf den Zeitstempeln an. Bei geplanten Tracks zeigt die Dauer die geschätzte Zeit an, die aus der Routenlänge und der durchschnittlichen Geschwindigkeit des ausgewählten Navigationsprofils berechnet wird, sofern die gesamte Route ein Profil verwendet und keine Abschnitte mit gerader Linie enthält.


### Track-Aktionen {#track-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track-Kontextmenü Übersicht Android 3](@site/static/img/personal/tracks/track_context_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track-Kontextmenü Übersicht iOS 3](@site/static/img/personal/tracks/track_context_actions_ios.png)

</TabItem>

</Tabs>

- **Anzeigen / Ausblenden**-Schaltflächen. Ändert die Sichtbarkeit des Tracks auf der Karte.
- [Darstellung](./appearance.md). Passen Sie die Darstellung Ihres Tracks an.
- **Track bearbeiten** (*Android*). Öffnet den Track im Werkzeug [Route planen](../../plan-route/create-route.md).
- **Exportieren** (*iOS*). Ermöglicht Ihnen, [einen Track zu exportieren](../../personal/tracks/manage-tracks.md#export).
- **Richtungen**. Öffnet den Track im *[Navigationsmodus](../../navigation/setup/gpx-navigation.md#start-gpx-navigation)*.


### Optionen {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track-Menü Optionen Android](@site/static/img/personal/tracks/track_menu_options_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Track-Menü Optionen iOS](@site/static/img/personal/tracks/track_menu_options_ios.png)  

</TabItem>

</Tabs>

Das Menü **Optionen** ermöglicht es Ihnen, den ausgewählten Track mit verschiedenen Werkzeugen und Einstellungen zu verwalten und zu ändern.  

- **<Translate android="true" ids="shared_string_show_on_map"/>** – Steuert die Sichtbarkeit des Tracks auf der Karte.
- **<Translate android="true" ids="shared_string_appearance"/>** – Öffnet das [Menü Darstellung](../tracks/appearance.md), um Farbe, Breite und Transparenz des Tracks anzupassen.
- **<Translate android="true" ids="follow_track"/>** (*Android*) / **<Translate ios="true" ids="shared_string_navigation"/>** (*iOS*) – Startet die [Navigation entlang des Tracks](../../navigation/setup/gpx-navigation.md) und richtet Ihre Route am ausgewählten Track aus.

<br/>

- **<Translate android="true" ids="join_segments"/>** (*Nur Android*) – Führt Track-Segmente zusammen, um Lücken zu füllen.
- **<Translate android="true" ids="analyze_on_map"/>**. Öffnet das Werkzeug [Auf Karte analysieren](../tracks/index.md#analyze-track-on-map), um Höhe, Geschwindigkeit und Entfernung des Tracks zu überprüfen.
- **<Translate android="true" ids="analyze_by_intervals"/>** (*Nur Android*) - Analysiert den Track nach Zeit- oder Distanz-[Intervallen](./track-context-menu.md#analyze-by-intervals).

<br/>

- **<Translate android="true" ids="shared_string_share"/>** – Exportiert den ausgewählten Track im GPX-Format über das System-Freigabemenü.
- **<Translate android="true" ids="upload_to_openstreetmap"/>** - [Lädt](../../plugins/osm-editing.md#upload-gps-track) den ausgewählten Track auf OpenStreetMap hoch.

<br/>

- **<Translate android="true" ids="edit_track"/>** - Öffnet das Werkzeug [Route planen](../../plan-route/create-route.md) zum Ändern des Tracks.
- **Track duplizieren** (*Nur iOS*) – Erstellt und speichert eine Kopie des Tracks.
- **<Translate android="true" ids="rename_track"/>** – Ermöglicht das Ändern des Tracknamens.
- **<Translate android="true" ids="change_folder"/>** – Verschiebt den Track in einen anderen Ordner oder erstellt einen neuen.

<br/>

- **<Translate android="true" ids="shared_string_gps_filter"/>** (*Nur Android*) - Ermöglicht das [Filtern von Trackpunkten](#gps-filter), um die Genauigkeit zu verbessern.
- **<Translate android="true" ids="altitude_correction"/>** (*Nur Android*) - Um [Höhendaten zu erhalten](#calculate-missing-elevation), [verbinden Sie Ihren Track mit den Straßen](../../navigation/setup/gpx-navigation.md#attach-to-the-roads) oder berechnen Sie sie offline (benötigt [Geländekarten](../../plugins/topography.md#download-maps)).
- **<Translate android="true" ids="simulate_your_location"/>** (*Nur Android*) - [Simuliert Ihre Position](../../plugins/development.md#gpx-track-simulation) mithilfe eines GPX-Tracks.

<br/>

- **<Translate android="true" ids="shared_string_delete"/>**. Löscht den Track.


### Beschreibung und Info {#description-and-info}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Beschreibung und Info Android](@site/static/img/personal/tracks/track_context_overview_1_andr.png)  ![Beschreibung und Info Android](@site/static/img/personal/tracks/track_context_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Beschreibung eines Tracks iOS](@site/static/img/personal/tracks/track_context_overview_ios_4-1.png)

</TabItem>

</Tabs>

Dieser Abschnitt des *Übersicht*-Tabs zeigt ***Tag-Daten*** und ***alle allgemeinen Informationen*** an.

- **Beschreibung**.  *<Translate android="true" ids="shared_string_edit"/>* (*Android*) / *<Translate ios="true" ids="context_menu_edit_descr"/>* (*iOS*) Schaltfläche wird verwendet, um die Track-Beschreibung zu bearbeiten. Tag `desc`.

- **Allgemein**. Enthält Informationen über die *GPX-Dateigröße*, den *Dateiordner* und das *Erstellungsdatum* mit dem `time`-Tag.

- **Info**. Tags: *Schlüsselwörter* - `keywords`, &nbsp;*Link* - `link`, &nbsp;*Aktivität* - `activities`.

- **Autor**. Tags: *Autor* - `author`, &nbsp;*Name* - `name`, &nbsp;*E-Mail-Adresse* - `email`, &nbsp;*Link* - `link`.

- **Copyright**. Tags: *Copyright* - `copyright`, &nbsp;*Autor* - `author`, &nbsp;*Jahr* - `year`, &nbsp;*Lizenz* - `license`.

- **Zusätzlich**. Alle Tags aus dem Abschnitt ***Erweiterungen***:&nbsp; `address`,&nbsp; `icon`,&nbsp; `background`,&nbsp; `color`,&nbsp; `country`,&nbsp; `state`,&nbsp; `telephone`,&nbsp; `postcode`,&nbsp; `start_date`,&nbsp; `desc`.
  

<details>

<summary>Beispiel-XML-Code einer GPX-Datei</summary>

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


### Track-Aktivitätstyp {#ttrack-activity-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track-Aktivitätstyp](@site/static/img/personal/tracks/track_info_activity_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track-Aktivitätstyp](@site/static/img/personal/tracks/track_info_activity_ios.png)

</TabItem>

</Tabs>


Die *Aktivitäts*-Funktion in OsmAnd ermöglicht es Ihnen, aufgezeichnete GPX-Tracks mit bestimmten Aktivitäten zu versehen, um sie später zu analysieren und in Ordnern zu organisieren.

- [Aktivitäts-Tags für GPX-Tracks](../../plugins/trip-recording.md#recording-settings). Aufgezeichnete Tracks erhalten automatisch einen Aktivitätstyp basierend auf dem ausgewählten Profil, was die Kategorisierung und Filterung erleichtert. Sie können die Aktivität bei Bedarf manuell ändern.
- [Aktivitätsfilter](../../personal/tracks/smart-folder.md#search-filter). Sie können die aufgezeichneten GPX-Tracks nach Aktivität filtern, was es Ihnen ermöglicht, sich auf die Suche nach bestimmten Arten von Aufzeichnungen zu konzentrieren, wie z. B. alle Rad- oder Wandertracks.
- [Aktivitätstypen verwalten](../../personal/tracks/manage-tracks.md#selection-mode). Sie können den Aktivitätstyp für ausgewählte Ordner oder Tracks im Auswahlmodus auf dem Tab "Tracks" des Menüs "Meine Orte" ändern.
- **Aktivitätsliste**. Die Aktivitätskategorien und -gruppen sind in den Ressourcen von OsmAnd definiert. Für Entwickler und Mitwirkende wird die Aktivitätsliste in einem strukturierten Format unter [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json) gepflegt, das die verfügbaren Aktivitätsgruppen und -typen detailliert beschreibt.


## Höhen-/Geschwindigkeitsdiagramme {#altitude--speed-graphs}

Auf dem Tab *<Translate android="true" ids="shared_string_gpx_track"/>* finden Sie Informationen über den Track in grafischer Form. Mit dem Schalter können Sie wählen, welche Daten im Diagramm angezeigt werden sollen: separate Daten zur *[<Translate android="true" ids="altitude"/>](#altitude)*, zur *[Geschwindigkeit](#speed)* (diese Option ist nur für aufgezeichnete Tracks verfügbar) oder alles zusammen anzeigen (*[<Translate android="true" ids="shared_string_overview"/>](#overview-information)*).

Interaktion mit dem Diagramm:

- ***Einen Punkt im Diagramm platzieren***. Wenn Sie die Informationen an einem bestimmten Punkt eines Tracks sehen möchten, können Sie an eine beliebige Stelle im Diagramm tippen, und es erscheint ein Zeiger mit den Werten. Gleichzeitig erscheint auf der Karte eine blaue Markierung, die auf diesen Ort auf dem Track zeigt.
- ***Vergrößern/Verkleinern***. Sie können [Zwei-Finger-Bewegungen](../../map/interact-with-map.md#gestures) verwenden, um für eine detailliertere Ansicht hinein- und herauszuzoomen. Nach dem Vergrößern können Sie das Diagramm nach rechts und links verschieben, was dem Vor- und Zurückbewegen entlang der Route entspricht.
- ***Zusätzliche Informationen***. Die rechte Seite des Diagramms enthält Daten über die niedrigste, höchste und durchschnittliche Höhe, Steigung und Geschwindigkeit. Am unteren Rand des Diagramms sehen Sie die Entfernungsmarkierungen.


### Übersichtsinformationen {#overview-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kontext Track-Menü Diagramme Android](@site/static/img/personal/tracks/track_menu_graph_1_new_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kontext Track-Menü Diagramme iOS](@site/static/img/personal/tracks/track_menu_graph_2_new_ios.png)

</TabItem>

</Tabs>

Auf dem Tab **Übersicht** können Sie Parameter wie die folgenden sehen:

- *<Translate android="true" ids="distance"/>*. Die Summe der auf dem Track zurückgelegten Gesamtstrecke oder die Länge des Tracks selbst.
- *<Translate android="true" ids="map_widget_trip_recording_duration"/>*. Das Zeitintervall zwischen dem Start- und Endpunkt des Tracks.
- *<Translate android="true" ids="shared_string_start_time"/>* Die genaue Zeit, zu der die Aufzeichnung des Tracks beginnt.
- *<Translate android="true" ids="shared_string_end_time"/>*. Die Endzeit der Track-Aufzeichnung.

Die aktiven **Schaltflächen** ermöglichen den Zugriff auf Aktionen wie:

- Die Schaltfläche **<Translate android="true" ids="analyze_on_map"/>** öffnet das Menü [Track analysieren](../tracks/index.md#analyze-track-on-map) für den Track.
- Die Schaltfläche **<Translate android="true" ids="shared_string_options"/>** öffnet ein Menü mit:

  - *Bearbeiten* öffnet den Track im Werkzeug [Route planen](../../plan-route/index.md).
  - *Löschen* ermöglicht es Ihnen, das ausgewählte Track-Element zu entfernen.
  - *Intervall teilen* öffnet die [Funktion Intervall teilen](#analyze-by-intervals) für den Track.


### Geschwindigkeit {#speed}

:::note Nur aufgezeichnete Tracks
Dieser Tab ist nur bei aufgezeichneten Tracks sichtbar. Punkte auf dieser Art von Track haben **[`speed`](../../plugins/trip-recording#recorded-gpx-file)**-Tags.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track-Diagramm Geschwindigkeit Android](@site/static/img/personal/tracks/track_graph_speed_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track-Diagramm Geschwindigkeit iOS](@site/static/img/personal/tracks/track_graph_speed_3_ios.png)

</TabItem>

</Tabs>

Das **Geschwindigkeits**-Diagramm zeigt Metriken wie:

- *<Translate android="true" ids="average_speed"/>*. Gibt die Durchschnittsgeschwindigkeit während der Fahrt an.
- *<Translate android="true" ids="max_speed"/>*. Zeigt die maximale Geschwindigkeit während der Fahrt an.
- *<Translate android="true" ids="moving_time"/>*. Zeigt die Gesamtzeit während der Fahrt nur in Bewegung an.
- *<Translate android="true" ids="distance_moving"/>*. Gibt die angepasste Entfernung der Fahrt an.


### Höhe {#altitude}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track-Diagramm Höhe Android](@site/static/img/personal/tracks/track_graph_altitude_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track-Diagramm Höhe iOS](@site/static/img/personal/tracks/track_graph_altitude_2_ios.png)

</TabItem>

</Tabs>

Das **Höhen**-Diagramm zeigt Metriken wie:

- *<Translate android="true" ids="average_altitude"/>*. Gibt die durchschnittliche Höhe über dem Meeresspiegel auf der Route an.
- *<Translate android="true" ids="altitude_range"/>*. Die höchste und niedrigste auf der Route aufgezeichnete Höhe.
- *<Translate android="true" ids="altitude_ascent"/>*. Der kumulative Höhengewinn über dem Meeresspiegel entlang der Route.
- *<Translate android="true" ids="altitude_descent"/>*. Der kumulative Höhenverlust entlang der Route.

**Höhendaten abrufen.**  
Wenn auf der Route *keine Höheninformationen* vorhanden sind, können Sie diese auf folgende Weisen hinzufügen:

- *Schaltfläche Höhe berechnen → [Nahegelegene Straßen verwenden](../../plan-route/create-route.md#get-elevation-data)*. Verwendet eine Offline-Karte, um nahegelegene Straßen und Höhendaten zu finden. Es ermöglicht Ihnen, die Geometrie des Tracks anzupassen.
- [Geländekarten verwenden](#calculate-missing-elevation). Verwendet Geländekarten, um Höhendaten zu erhalten. Die Track-Geometrie bleibt unverändert.


### Fehlende Höhe berechnen {#calculate-missing-elevation}

:::note OsmAnd Pro-Abonnement
Die Funktion zur Offline-Berechnung der Höhe ist nur für [**OsmAnd Pro-Abonnenten**](../../purchases/android.md#pro-features) verfügbar <ProFeature />.
:::

<InfoAndroidOnly />

Diese Funktion ermöglicht es Ihnen, das Höhenprofil für einen GPX-Track offline für jedes Gelände zwischen 70 Grad nördlicher und 70 Grad südlicher Breite zu berechnen, basierend auf [Geländekartendaten](../../plugins/topography.md#download-maps). *Geländekarten (3D) müssen zuvor heruntergeladen werden*.

1. Laden Sie [Geländekarten (3D)](../../plugins/topography.md#download-maps) für die erforderliche Region herunter.
2. Wenn der Track keine Höhendaten enthält, gehen Sie zum Track-Kontextmenü (*Track-Kontextmenü → <Translate android="true" ids="shared_string_gpx_track,altitude,calculate_altitude"/>*), wählen Sie *Geländekarten verwenden*, und nach der Berechnung erhalten Sie ein Track-Diagramm basierend auf den Geländedaten.  

    ![Track-Diagramm Höhe Android](@site/static/img/personal/tracks/calculate_elevation_2.png)   ![Track-Diagramm Höhe Android](@site/static/img/personal/tracks/calculate_elevation_10.png)   <!--![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_4.png)  ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_3.png) -->  

3. Wenn Sie eine Route mit dem Werkzeug [Route planen](../../plan-route/create-route.md#graph) unter Verwendung der Methode *Gerade Linie* erstellen und keine Höhendaten im Diagramm vorhanden sind, müssen Sie:
    - Tippen Sie auf *Höhendaten abrufen* und wählen Sie dann *Geländekarten verwenden*.
    - Nach der Berechnung erhalten Sie das vollständige Höhen-/Steigungsdiagramm Ihrer Route basierend auf den Geländedaten.  

  ![Track-Diagramm Höhe Android](@site/static/img/personal/tracks/calculate_elevation_9.png)   ![Track-Diagramm Höhe Android](@site/static/img/personal/tracks/calculate_elevation_5.png)  


## Punkte / Wegpunkte {#points--waypoints}

Wegpunkte sind eine der Arten von Punkten, die auf der Karte verfügbar sind. Im Allgemeinen können es Trackpunkte sein, die Teil von GPX-Dateien sind. Eine detaillierte Beschreibung finden Sie im Artikel [Punkte auf der Karte](../../map/point-layers-on-map.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kontext Track-Menü Punkte Android](@site/static/img/personal/tracks/track_context_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kontext Track-Menü Punkte iOS](@site/static/img/personal/tracks/track_context_points_ios.png)

</TabItem>

</Tabs>

In diesem *Punkte*-Tab:

- [Trackpunktdaten anzeigen](#display-custom-gpx-tags) und Ihre Trackpunkte (Wegpunkte und Routenpunkte) ändern, [löschen und Wegpunkte](#points--waypoints) zu einem Track hinzufügen.
- [Gruppe (Ordner) von Punkten](#waypoint-groups) erstellen und ändern.


### Wegpunkt zu einem Track hinzufügen {#add-waypoint-to-a-track}

Wegpunkte können zum aktuell aufgezeichneten Track oder zu jedem Track aus der Liste [*Meine Orte → Tracks*](../../personal/tracks/manage-tracks.md) hinzugefügt werden:

- Verwenden Sie das [Kartenkontextmenü](../../map/map-context-menu.md#-add--edit-track-waypoint).
  - Wegpunkte werden automatisch angezeigt, wenn der ausgewählte Track auf der Karte aktiviert ist.
  - [Langes Tippen](../../map/map-context-menu.md#select-any-point-long-tap) Sie an einer beliebigen Stelle auf die Karte, um einen Wegpunkt zu erstellen.
  - Sie können Informationen über den Wegpunkt im geöffneten [Kartenkontextmenü](../../map/map-context-menu.md#-add--edit-track-waypoint) festlegen.

- Verwenden Sie die Schaltfläche [Wegpunkt hinzufügen](#points--waypoints) des Track-Kontextmenüs.

- Fügen Sie einen Wegpunkt als [Schnellaktionsschaltfläche](../../widgets/quick-action.md#my-places) hinzu.

### Wegpunkt erstellen {#create-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wegpunkt hinzufügen](@site/static/img/personal/tracks/add_waypoint_1_andr.png)  ![Wegpunkt hinzufügen](@site/static/img/personal/tracks/add_waypoint_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wegpunkt hinzufügen](@site/static/img/personal/tracks/add-track-waypoint-ios-1.png)  ![Wegpunkt hinzufügen](@site/static/img/personal/tracks/add_waypoints_2_ios.png)

</TabItem>

</Tabs>

Tippen Sie auf die Schaltfläche *Wegpunkt hinzufügen*, um den Bildschirm zur Erstellung von Wegpunkten zu öffnen (dieser Bildschirm ist bekannt aus dem [Favoriten-Kontextmenü](../../personal/favorites.md#create)).

1. **Fügen Sie** den *Namen* des Wegpunkts, die *Adresse* des ausgewählten Ortes und eine *Beschreibung* dafür hinzu (optional).
2. **Wählen Sie** eine Gruppe.

    - Wählen Sie zuvor erstellte Gruppenkategorien aus oder erstellen Sie eine neue.
    - Erstellen Sie einen Namen und ein Erscheinungsbild für die neue Wegpunktgruppe. Dies wird in der Anwendung auch als *neue Kategorie* bezeichnet.
    - Das **Symbol**, die **Symbolfarbe** und die **Form** werden für alle neuen Wegpunkte verwendet, die der Gruppe hinzugefügt werden.

3. **Darstellungs**-Einstellung:

    - Wählen Sie ein [**Symbol**](../../personal/favorites.md#favorite-icons) aus der Liste aller POI-Kategoriensymbole.
    - Wählen Sie die **Farbe** des Symbols.
    - Wählen Sie dann die **Form** des Symbols: *Kreis, Achteck, Quadrat*.

4. **Ersetzen** Sie bei Bedarf einen anderen Punkt durch diesen.  


### Aktionen mit Gruppen {#actions-with-groups}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track-Menü Gruppenmenü Android](@site/static/img/personal/tracks/track_menu_group_menu_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track-Menü Gruppenmenü iOS](@site/static/img/personal/tracks/track_menu_group_menu_ios.png)

</TabItem>

</Tabs>

Das *Drei-Punkte-Menü* ( &#8285; ) öffnet das *Gruppenmenü* des Wegpunkts.

**Aktionen:**

- **<Translate android="true" ids="shared_string_show_on_map"/>** - Ermöglicht es Ihnen, Gruppenwegpunkte auf der Karte anzuzeigen oder nicht. Oder Sie können die [Bildschirmschaltfläche](#points--waypoints) verwenden, um Gruppenwegpunkte auf der Karte anzuzeigen oder auszublenden.
- **<Translate android="true" ids="shared_string_rename"/>** - Ändern Sie den Namen der Gruppe.
- **<Translate android="true" ids="change_default_appearance"/>** - Ändern Sie die Anzeigeoptionen für eine Gruppe von Wegpunkten.
- **<Translate android="true" ids="add_group_to_markers"/>** oder **Entfernen** (*Nur Android*) - Verschieben Sie Gruppenwegpunkte in die Liste der [Kartenmarkierungen](../../personal/markers.md).
- **<Translate android="true" ids="add_to_favorites"/>** (*Nur Android*) - Ermöglicht es Ihnen, die ausgewählte Gruppe von Wegpunkten in [Favoriten](../../personal/favorites.md) zu kopieren. Sie können eine von zwei Optionen wählen: ***<Translate android="true" ids="copy_as_new_folder"/>*** oder ***<Translate android="true" ids="add_to_a_folder"/>***.
- **<Translate android="true" ids="add_to_navigation"/>**  (*Nur Android*) - Erstellt eine Route zwischen Wegpunkten. Der erste und letzte Punkt werden zum Start und Ziel der Route, und die restlichen werden zu Zwischenpunkten.
- **<Translate android="true" ids="shared_string_delete"/>** - Löschen Sie eine Gruppe von Wegpunkten.


### Wegpunktgruppen {#waypoint-groups}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track-Menü Gruppenkarte Android](@site/static/img/personal/tracks/waypoints_group_map_android.png) ![Track-Menü Gruppenkarte Android](@site/static/img/personal/tracks/waypoints_group_map_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track-Menü Gruppenkarte iOS](@site/static/img/personal/tracks/waypoints_group_map_ios.png) ![Track-Menü Gruppenkarte iOS](@site/static/img/personal/tracks/waypoints_group_map_1_ios.png)

</TabItem>

</Tabs>

Verwalten Sie die Sichtbarkeit von Gruppen auf der Karte: Wenn Sie einen Track ausblenden, wird auch die gesamte Gruppe ausgeblendet.  

Sie können Gruppenwegpunkte auf der Karte ein- oder ausschalten, indem Sie die Schaltfläche in der oberen rechten Ecke des Kontextmenüs des Tracks auf der Karte verwenden. Tippen Sie darauf und wählen Sie die gewünschte Aktion aus.

### Benutzerdefinierte GPX-Tags anzeigen {#display-custom-gpx-tags}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Punkte](@site/static/img/personal/tracks/waypoints_tag_info_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Punkte](@site/static/img/personal/tracks/waypoints_tag_info_ios.png)

</TabItem>

</Tabs>
  

<details>

<summary>Beispiel-XML-Code von Wegpunkt-Tags</summary>

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

<summary>Beispiel-XML-Code von Routenpunkt-Tags</summary>

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

**Tags:**  

| Parameter | Beschreibung |
| --- | --- |
| `lat` | **Breitengrad** ist eine der geografischen Koordinaten, mit denen Sie einen Ort bestimmen können. |
| `lon` | **Längengrad** ist eine weitere der geografischen Koordinaten, mit denen Sie einen Ort bestimmen können. |
| `time` | **Zeitstempel** ist das Datum und die Uhrzeit, zu der der Punkt aufgezeichnet wurde. |
| `name` | **Name** ist der Name des Punktes. Alle Zeichen sind erlaubt.  |
| `desc` | **Beschreibung** enthält zusätzliche Informationen über den Punkt. |
| `type` | **Gruppe auswählen** ist der Name des OsmAnd-Ordners, in dem dieser Wegpunkt gespeichert ist. |
| `cmt` | **Kommentar** ist ein kurzer Kommentar zu einem Punkt. |
| `link` | **Link** ist ein Link zu beliebigen Quellen. |
| `ele` | **Höhe** ist die Höhe eines Punktes. |


**Erweiterungen:**  

| Erweiterung | Beschreibung |
| --- | --- |
| `osmand:icon` | **Symbol** ist der Name des von Ihnen ausgewählten Symbols. |
| `osmand:color` | **Farbe** ist die Farbe im HEX-Format.  |
| `osmand:background` | **Hintergrund** ist die Form des Symbols, wie z. B. ein Kreis, Achteck oder Quadrat. |
| `osmand:country` | **Land** ist der Name des Landes.  |
| `osmand:address` | **Adresse** ist die Adresse.  |
| `osmand:postcode` | **Postleitzahl** ist die Postleitzahl.  |
| `osmand:telephone` | **Telefon** ist die Telefonnummer.  |
| `osmand:state` | **Bundesland** ist der Name des Bundeslandes.  |
| `osmand:start_date` | **Startdatum** sind die Plandaten eines Punktes.  |

Wegpunkte werden mit dem Track in der [GPX-Datei](../../../technical/osmand-file-formats/osmand-gpx.md) aufgezeichnet. Jeder dieser Wegpunkte hat seinen eigenen Satz von Tags zur Beschreibung. Alle Tags, die sich direkt auf die Beschreibung von Wegpunkten beziehen und direkt in der OsmAnd-Anwendung bearbeitet werden können, sind in diesem Abschnitt aufgeführt.  
Um die Wegpunktbeschreibung zu ändern, können Sie einen der folgenden Wege gehen:
  
1. Finden Sie den gewünschten Track in der Liste des Tabs *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.
2. Tippen Sie auf den Track auf der Karte, wenn er in der [Liste der sichtbaren Tracks](../tracks/index.md#display-tracks-on-the-map) enthalten ist.
3. Tippen Sie auf den gewünschten Wegpunkt, wenn er auf der Karte [sichtbar](../../personal/tracks/manage-tracks.md#track-menu) ist.  

    Tippen Sie dann im [Track-Kontextmenü](./track-context-menu.md) auf *Punkte*, das Feld des gewünschten Ordners mit verfügbaren Wegpunkten und den gesuchten Wegpunkt. Wählen Sie das Menü *Aktionen →* **GPX-Wegpunkt bearbeiten** und nehmen Sie Änderungen vor. Sie können das Erstellungsdatum eines Punktes, den *Zeitstempel*, in der Anwendung nicht ändern.  

**Einrichtungs-Tags**, die zusätzliche Informationen wie Öffnungszeiten oder Telefonnummern beschreiben, die für den POI spezifisch sind, entnehmen diese Informationen den OpenStreetMap-Daten oder den Daten, die Sie bei der Erstellung des POI eingegeben haben. Sie können solche Tags und [benutzerdefinierte Tags](#display-custom-gpx-tags) nur im Code der GPX-Datei bearbeiten, die Sie mit einem beliebigen Texteditor auf Ihrem Gerät öffnen können.


## Nach Intervallen analysieren {#analyze-by-intervals}

<InfoAndroidOnly />

![Track nach Android aufteilen](@site/static/img/personal/tracks/split_by_1.png) 

Die Option **Nach Intervallen analysieren** ermöglicht es Ihnen, einen Track in Abschnitte zu unterteilen und detaillierte Statistiken für jeden Teil der Route anzuzeigen. Tracks können nach ***Entfernung***, ***Zeit*** oder ***Bergauf/-ab***-Parametern aufgeteilt werden. 

Um diese Option zu öffnen:  
*<Translate android="true" ids="shared_string_options,analyze_by_intervals"/>* → wählen Sie den gewünschten Aufteilungmodus 


### Nach Entfernung aufteilen {#split-by-distance}

![Track-Aufteilung nach Entfernung Tab](@site/static/img/personal/tracks/split_by_2_new_tab.png) ![Track-Aufteilung nach Entfernung Karte](@site/static/img/personal/tracks/split_by_2_map.png)  

Diese Option ermöglicht es Ihnen, einen Track in feste Entfernungsintervalle zu unterteilen und detaillierte Statistiken für jedes Segment zu analysieren. Verfügbare Entfernungsintervalle sind ***20 m***, ***50 m***, ***100 m***, ***200 m***, ***500 m***, ***1 km***, ***2 km***, ***5 km*** und ***10 km***. Nach der Auswahl eines Entfernungsintervalls wird der Track als Liste von Segmenten angezeigt. 

Für jedes Segment können Sie anzeigen:
- zurückgelegte Entfernung.
- Dauer.
- durchschnittliche, minimale und maximale Höhe.
- Auf- und Abstieg.
- Zeit in Bewegung.
- durchschnittliche und maximale Geschwindigkeit.

Wenn Sie auf ein beliebiges Segment in der Liste tippen, zeigt die Kartenansicht den vollständigen Track mit seinen Intervallen an und öffnet das Kontextmenü für den Track am unteren Rand des Bildschirms.


### Nach Zeit aufteilen {#split-by-time}

![Track-Aufteilung nach Zeit Tab](@site/static/img/personal/tracks/split_by_3_new_tab.png) ![Track-Aufteilung nach Zeit Karte](@site/static/img/personal/tracks/split_by_3_map.png) 

Die Option **Nach Zeit aufteilen** teilt einen Track in Intervalle gleicher Dauer auf. Sie können zwischen ***1 min***, ***2 min***, ***2,5 min***, ***5 min***, ***10 min***, ***15 min***, ***30 min*** und ***60 min*** wählen. Die Art und Weise, wie die Intervalle angezeigt werden, die für jedes Segment bereitgestellten Statistiken und wie sie auf der Karte erscheinen, sind dieselben wie im Abschnitt [Nach Entfernung aufteilen](#split-by-distance).


### Nach Bergauf/-ab aufteilen {#split-by-uphill-downhill}

![Track-Aufteilung nach Bergauf/-ab Tab](@site/static/img/personal/tracks/split_by_4_new_tab.png) ![Track-Aufteilung nach Bergauf/-ab Karte](@site/static/img/personal/tracks/split_by_4_map.png) 

Diese Option teilt einen Track in Segmente basierend auf Höhenänderungen auf. Jedes Intervall wird als ***Bergauf***, ***Bergab*** oder ***Ebene*** klassifiziert. Die Art und Weise, wie die Intervalle angezeigt werden, die für jedes Segment bereitgestellten Statistiken und wie sie auf der Karte erscheinen, sind ebenfalls dieselben wie im Abschnitt [Nach Entfernung aufteilen](#split-by-distance).


### Herzfrequenz-Metriken {#heart-rate-metrics}

![Herzfrequenz-Metriken](@site/static/img/personal/tracks/heart_rate.png)

Diese Option ermöglicht es Ihnen, durchschnittliche, minimale und maximale Herzfrequenzwerte (Schläge pro Minute, bpm) für jedes Intervall Ihres Tracks anzuzeigen. Herzfrequenzdaten werden aus der Track-GPX-Datei entnommen oder direkt von einem verbundenen [externen Herzfrequenzsensor](https://osmand.net/docs/user/plugins/external-sensors) (BLE) aufgezeichnet. Wenn keine Herzfrequenzdaten verfügbar sind, wird diese Zeile in der Intervalltabelle ausgeblendet.

**Hinweis:** Sie können einen BLE-Herzfrequenzmonitor über *<Translate android="true" ids="shared_string_plugin,external_sensors_plugin_name"/>* verbinden, um HR-Daten direkt in OsmAnd aufzunehmen.


## GPS-Filter {#gps-filter}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_options,shared_string_gps_filter"/>*

![GPS-Filter-Bildschirm Android](@site/static/img/personal/tracks/gps_filter_android.png)

<!-- A user can filter points of a GPX track by Smoothing, Speed, Altitude, and Min GPS Precision for saving new track without excluded points. -->

Dieser Filter ermöglicht es Ihnen, Ihre Track-Statistiken zu verbessern, indem Sie unnötige oder falsche Daten ausschließen. Sie können Trackpunkte herausfiltern, die nicht zu Ihren Track-Parametern passen, und erhalten so ein genaueres Diagramm und eine visuelle Routenlinie ohne Verzerrungen oder Aufzeichnungsrauschen. Sie können Änderungen mit Filtern wie *Glättung*, *Geschwindigkeit*, *Höhe* und *GPS-Genauigkeit* vornehmen, die gefilterte Punkte aus dem aktuellen Track ausblenden. Außerdem können Sie im Menü *Statistik* überprüfen, wie Ihre Änderungen im Diagramm angezeigt werden, bevor Sie sie speichern. Sie können Ihren Track in diesem Filter auch *Auf Original zurücksetzen* und *Als Kopie speichern*, ohne das Original zu speichern.  

<!-- In the screen you see the map (with [zoom buttons](../../map/interact-with-map.md#my-location-and-zoom), [my location button](../../map/interact-with-map.md#my-location-and-zoom), my track location button), buttons "Reset" and "&#8285;"(Actions), part with two menus: **Filter** and **Statistics**.

- "&#8285;"(Actions) button opens the "Actions" part of the "Filter" or "Statistics" menu.
- "&#8634;" button allows you to reset the track to the original.
- "My track location" button allows you to move the map to your track.-->

Die Android-GPS-Filter-App-Seite enthält Folgendes:  

- Eine Karte mit einem gespeicherten Track und einer zusätzlichen Schaltfläche, *Mein Track-Standort* (richtet einen Track in der Mitte einer Karte aus).
- Schaltflächen *Aktualisieren* und *Menü* oben (*Menü* öffnet das Feld *Aktion* am unteren Rand der Seite).
- Blöcke *Filter*, *Statistik*, *Aktion*.  


### Filtermenü {#filter-menu}

In diesem Menü können Sie einige Parameter Ihres Tracks wie *Glättung*, *Geschwindigkeit*, *Höhe* oder *GPS-Genauigkeit* mithilfe von Filtern ändern. Das Menü ist in einen *Punkte-Teil* und einen *Aktionen-Teil* unterteilt.

| ***Punkte*** |
|:------------|
|Dieser Teil zeigt die Anzahl der Punkte nach dem Filtern und die Gesamtzahl der Punkte auf dem ausgewählten Track, bevor Filter verwendet wurden.|
|![GPS-Filter-Bildschirm Punktzahlen Android](@site/static/img/personal/tracks/gps_filter_points_numbers_android.png) |
| ***Aktionen*** |
|*Glättung*. Legt den Schwellenwert für den Abstand zwischen den Punkten fest. Trackpunkte, die mindestens diesen Abstand vom letzten sichtbaren Punkt haben, werden ausgeblendet. Alle Punkte auf dem Track, die einen geringeren Abstand zueinander haben als der durch den Filter gewählte Abstand, werden ausgeblendet. Die Trackpunkte werden vom letzten sichtbaren Punkt aus gezählt. Beachten Sie, dass hohe Schwellenwerte die Track-Geometrie zu stark vereinfachen können.|
|![GPS-Filter Glättungszahlen Android](@site/static/img/personal/tracks/gps_filter_smoothing_android.png) |
|*Geschwindigkeit*. Nur die Trackpunkte, die dem ausgewählten Geschwindigkeitsintervall entsprechen, werden im Diagramm und auf der Karte angezeigt, die anderen werden ausgeblendet.|
|![GPS-Filter Geschwindigkeitszahlen Android](@site/static/img/personal/tracks/gps_filter_speed_android.png) |
|*Höhe*. Nur die Trackpunkte, die dem ausgewählten Höhenintervall entsprechen, werden im Diagramm und auf der Karte angezeigt, die anderen werden ausgeblendet.|
|![GPS-Filter Höhenzahlen Android](@site/static/img/personal/tracks/gps_filter_altitude_android.png) |
|*GPS-Genauigkeit*. Legt den maximal zulässigen Wert für HDOP fest. Punkte mit einem höheren Wert werden ausgeblendet.|
|![GPS-Filter Genauigkeitszahlen Android](@site/static/img/personal/tracks/gps_filter_precision_android.png) |  


### Statistik {#statistics}

![GPS-Filter-Diagramm Android](@site/static/img/personal/tracks/gps_filter_graph_statistics_new_andr.png)

Der Tab "Statistik" zeigt Informationen über den **geänderten** Track an, d. h. den Track ohne die gefilterten Werte. Er wird in den Statistikblöcken und Diagrammdaten angezeigt.
  
- Der Teil *Daten* zeigt Statistiken ähnlich dem [Filtermenü](#filter-menu).  
- Der Teil *Diagramm* zeigt drei Arten von Diagrammen nach Parametern an: Übersicht, Höhe und Geschwindigkeit. Diese Funktionalität ist eine Kopie des [Track-Diagramms](#altitude--speed-graphs).

### Aktionen {#actions}

![GPS-Filter Aktion Android](@site/static/img/personal/tracks/gps_filter_action_android.png)

Die Liste der Aktionen ist am unteren Rand des Tabs **Filter** oder **Statistik** verfügbar. OsmAnd wendet alle am Track vorgenommenen Änderungen an, ohne die Datei zu aktualisieren, aber Sie können die Änderungen manuell speichern.

- *<Translate android="true" ids="reset_to_original"/>*. Ermöglicht es Ihnen, die Parameter auf ihren ursprünglichen Zustand zurückzusetzen.  
- *<Translate android="true" ids="save_as_copy"/>*. Ermöglicht es Ihnen, den Track als neuen zu speichern.
- *<Translate android="true" ids="save_changes_into_file"/>*. Ermöglicht es Ihnen, den Track mit den neuen Parametern zu überschreiben.  


## Verwandte Artikel {#related-articles}

- [GPX-Tracks](../../personal/tracks/manage-tracks.md)
- [Tracks auf der Karte](./track-context-menu.md)
- [Navigation entlang eines Tracks](../../navigation/setup/gpx-navigation.md)
- [Route planen](../../plan-route/index.md)
- [Plugin für Reiseaufzeichnung](../../plugins/trip-recording.md)
- [Auf Karte analysieren](../tracks/index.md#analyze-track-on-map)