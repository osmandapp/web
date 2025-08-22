---
source-hash: 65d58e4d60970c5f1ac65b7011c0c7fe2efa530f4578330a7ac4de7a0624b753
sidebar_position: 15
title:  Routenaufzeichnung
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



## Überblick {#overview}

Das **Routenaufzeichnungs-Plugin** ist ein unverzichtbares Werkzeug, um Ihre Routen, Bewegungen und Trainingseinheiten zu erfassen. Diese Funktion ermöglicht es Ihnen nicht nur, Ihre Routen aufzuzeichnen, sondern auch, Ihre Tracks einfach wiederzuverwenden, zu ändern, zu aktualisieren und mit anderen zu teilen.

Mit dem *Routenaufzeichnungs-Plugin* können Sie neue Tracks erstellen, aufgezeichnete Tracks direkt auf der Karte anzeigen und bestehende Aufzeichnungen verwalten. Es bietet wertvolle Einblicke in Ihre Routen, wie z.B. Geschwindigkeit, Höhenänderungen, Geländedetails und Daten von externen Sensoren. Das Plugin zeichnet Ihre Route auf und ermöglicht eine detaillierte Analyse und Freigabe nach Ihrer Reise.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Aufgezeichnete Route in Android](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aufgezeichnete Route in iOS](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_ios_2.png)

</TabItem>

</Tabs>


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Um mit der Aufzeichnung von Tracks zu beginnen, müssen Sie die folgenden Einstellungen vornehmen:

1. [Aktivieren](../plugins/index.md#enable--disable) Sie das **Routenaufzeichnungs-Plugin**.
2. [Konfigurieren](#recording-settings) Sie die **Aufzeichnungseinstellungen** für das erforderliche [Profil](../personal/profiles.md).
3. [Fügen](#widgets) Sie **Routenaufzeichnungs-Widgets** zum Bildschirm hinzu (optional).
4. [Verwalten](../map/tracks/appearance.md) Sie Tracks auf der Karte (optional).


## Neue Track-Aufzeichnung {#new-track-recording}

![Entfernungs-/Start-Stopp-Widget in iOS](@site/static/img/plugins/trip-recording/create_new_track_and-1.png) ![Entfernungs-/Start-Stopp-Widget in Android](@site/static/img/plugins/trip-recording/create_new_track_ios-1.png)

Mit dem Routenaufzeichnungs-Plugin in OsmAnd können Sie Ihre Track-Aufzeichnung ganz einfach mit verschiedenen praktischen Optionen starten. So können Sie Ihre Reise beginnen:

- [Entfernungs-/Start-Stopp-Widget](#distance-start-stop) — Zum Aktivieren der Aufzeichnung verwenden.

- [<Translate android="true" ids="start_recording"/>](../personal/myplaces.md#tracks) — Tippen Sie auf die Schaltfläche im Reiter *Haupt <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.

- [Schnellaktionsschaltflächen](../widgets/quick-action.md#add-and-delete-actions) — Um eine Routenaufzeichnung zu starten, gehen Sie zu *Menü → Bildschirm konfigurieren → Benutzerdefinierte Schaltflächen → Schnellaktion → Aktion hinzufügen → Meine Orte* und wählen Sie [Start / Pause: Routenaufzeichnung](../widgets/quick-action.md#my-places).

- *Nur Android*:
    - Gehen Sie zu *Haupt <Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*.

    - [Systembenachrichtigung](#notifications) — Im Benachrichtigungsbereich Ihres Geräts verwenden.

    - [Anwendungsstarter](#launcher-android) — Zum Starten der Aufzeichnung verwenden.

**Empfehlungen:**

- [Präziser Standort](../start-with/first-steps.md#permission-to-access-the-location) — Für eine genaue Track-Aufzeichnung stellen Sie sicher, dass OsmAnd diese Berechtigung besitzt.

- [Fehlerbehebung](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps) — **iOS-Geräte** können manchmal Apps im Hintergrund vorübergehend **anhalten oder beenden**, was die Track-Aufzeichnung unterbrechen könnte.

- **Standortquelle** (*Nur Android*) — Passen Sie die Einstellungen in OsmAnd an, um den am besten geeigneten GPS-Anbieter für genaue Aufzeichnungen auszuwählen. [Erfahren Sie hier mehr](../personal/global-settings.md#location-source).


### Startdialog {#start-a-dialog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Der Startdialog öffnet sich, wenn die Option **<Translate android="true" ids="show_start_dialog"/>** im Einstellungsbereich des Startdialogfelds aktiviert ist.

![Aufzeichnung starten in Android](@site/static/img/plugins/trip-recording/start_rec_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

Der Startdialog öffnet sich, wenn die Option **<Translate ios="true" ids="track_interval_remember"/>** nicht aktiviert ist.

![Aufzeichnung starten in iOS](@site/static/img/plugins/trip-recording/start_rec_ios_1.png)

</TabItem>

</Tabs>

- **Protokollierungsintervall** (*Android/iOS*). Diese Einstellung steuert, wie oft die App Daten vom GPS-Sensor anfordert, um neue Punkte auf Ihrem Track zu markieren. Durch Anpassen des Intervalls können Sie ein Gleichgewicht zwischen Track-Detail und Batterieverbrauch herstellen. Ein kürzeres Intervall führt zu detaillierteren Tracks, aber höherem Batterieverbrauch, während ein längeres Intervall Batterie spart, aber die Track-Genauigkeit reduziert.

- **Liniensymbol** (*Android*). Tippen Sie auf dieses Symbol, um auf die [Track-Darstellungsoptionen](../map/tracks/appearance.md) zuzugreifen. Hier können Sie anpassen, wie Ihr Track auf der Karte erscheint, einschließlich Linienfarbe, -dicke und -stil. Sobald Sie einen Track mit einer angepassten Darstellung speichern, bleiben diese Einstellungen für zukünftige Aufzeichnungen erhalten, was bei jeder Anzeige oder erneuten Aktivierung des Tracks Konsistenz gewährleistet.

- **Einstellungsmenü** (*Android*). Greifen Sie auf dieses Menü zu, um Ihre Aufzeichnungseinstellungen zu optimieren. Eine detaillierte Übersicht finden Sie im Abschnitt [Routenaufzeichnungseinstellungen](#recording-settings).

- **Meine Auswahl merken** (*iOS*). Wenn aktiviert, startet die Track-Aufzeichnung automatisch, ohne zusätzliche Einstellungen oder Bestätigung anzufordern. Wenn Sie die Aufzeichnungseinstellungen ändern möchten, bevor Sie einen neuen Track starten, starten Sie das Routenaufzeichnungs-Plugin neu, damit das Einstellungsmenü wieder angezeigt wird.


### Launcher (Android) {#launcher-android}

![Kontextmenü des Symbols](@site/static/img/plugins/trip-recording/launcher_icon_andr.png) ![Symbol für Aufzeichnung starten](@site/static/img/plugins/trip-recording/and_trip_rec_icon.png)

Sie können eine neue Track-Aufzeichnung direkt über das Kontextmenü des OsmAnd-App-Symbols auf dem Bildschirm Ihres Android-Geräts schnell starten.

- **Langes Tippen** auf das OsmAnd-App-Symbol öffnet das Kontextmenü, in dem Sie die Option **Aufzeichnung starten** finden.

- Tippen Sie auf die Option **Aufzeichnung starten**, um die OsmAnd-App mit den auf dem Bildschirm angezeigten [Track-Aufzeichnungseinstellungen](#overview-screen) zu starten.

- **Langes Tippen** auf die Option **Aufzeichnung starten** im Kontextmenü des App-Symbols, um eine Verknüpfung für einen schnelleren Zugriff hinzuzufügen.

Während die Track-Aufzeichnung aktiv ist, erscheint ein Benachrichtigungsabzeichen in der Ecke des OsmAnd-App-Symbols, das anzeigt, dass die Aufzeichnung läuft. Weitere Details zur Verwaltung dieser Benachrichtigung finden Sie im Abschnitt [Benachrichtigung](#notifications).


## Aktuelle Track-Aufzeichnung {#current-track-recording}

Für *Stopp / Speichern / Pause*:

- Um die Aufzeichnung zu **stoppen**, tippen Sie auf die entsprechende Schaltfläche im Dialogfeld des [Entfernungs-/Start-Stopp-Widgets](#distance-start-stop).

- (*Nur Android*) Um die Aufzeichnung zu **stoppen**, tippen Sie auf den Menüpunkt *Routenaufzeichnung* im Hauptmenü.

- Um einen aufzeichnenden Track zu **stoppen** oder zu **speichern**, gehen Sie zu *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/> Tab*](../personal/myplaces.md#tracks) und tippen Sie auf die entsprechende Schaltfläche im Feld *Aktuell aufzeichnender Track*.

- Um ein neues Segment zu **speichern, pausieren, starten** oder die Aufzeichnung zu **beenden**, verwenden Sie die [Schnellaktionsschaltflächen](../widgets/quick-action.md#add-and-delete-actions). Gehen Sie zu *Menü → Bildschirm konfigurieren → Benutzerdefinierte Schaltflächen → Schnellaktion → Aktion hinzufügen → [Meine Orte](../widgets/quick-action.md#my-places)* und fügen Sie eine oder mehrere Schnellaktionsschaltflächen hinzu.

- (*Nur Android*) Um einen aufzeichnenden Track zu **pausieren** oder zu **speichern**, verwenden Sie die System-[Benachrichtigung](#notifications) im Benachrichtigungsbereich Ihres Geräts.<br/><br/> ![stop-save-pause](@site/static/img/plugins/trip-recording/stop-save-pause_andr.png)


### Übersichts-Bildschirm {#overview-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Übersicht](@site/static/img/plugins/trip-recording/overview_screen_graphs_andr.png) ![Übersicht](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aufzeichnung beenden in iOS](@site/static/img/plugins/trip-recording/start_rec_ios_3.png) ![Aufzeichnung beenden in iOS](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_ios.png)

</TabItem>

</Tabs>

In OsmAnd handhaben die **Android**- und **iOS**-Versionen die Track-Aufzeichnungsoberfläche leicht unterschiedlich. Unter Android finden Sie ein dediziertes Menü für den *Track-Aufzeichnungskontext*, während dies unter iOS in das Kontextmenü *Aktuell aufzeichnender Track* integriert ist.

Während Sie einen Track aufzeichnen, werden dynamische Diagramme generiert, die Echtzeit-Visualisierungen Ihrer Reise liefern. Diese Diagramme können Informationen für die gesamte Route oder nur für ein ausgewähltes Segment anzeigen, abhängig von Ihrem Zoomlevel.
Hier ist, was Sie darauf finden können:

- **Datenwerte**. Auf der rechten Seite des Diagramms befinden sich die ***höchsten***, ***niedrigsten*** und ***durchschnittlichen*** Werte für den sichtbaren Abschnitt des Tracks.

- **Diagramm für Schlüsselinformationen**:
    - ***Android***. Für die ***Y-Achse*** im Diagramm können Sie *bis zu zwei Parameter* aus allen verfügbaren Daten wie *Höhe*, *Steigung*, *Geschwindigkeit* und [externe Sensorinformationen](../plugins/external-sensors.md#trip-recording) auswählen. Für die ***X-Achse*** wählen Sie die Anzeige von *Distanz*, *Zeit* oder *Tageszeit*.
    - ***iOS***. Die Parameter sind in den Reitern *Übersicht*, *Höhe* und *Geschwindigkeit* mit den entsprechenden Werten für die Y-Achse und *Distanz* für die X-Achse organisiert.

- **Statistik**. Für Android wird ein konstanter Satz von Statistikdaten angezeigt, unabhängig von den Diagrammeinstellungen: *Distanz*, *Zeitspanne*, *Bergauf*, *Bergab*, *Durchschnittsgeschwindigkeit*. Für iOS hat jeder Reiter, Übersicht, Höhe und Geschwindigkeit, einen anderen Datensatz.

Für eine detailliertere Ansicht können Sie das **Diagramm skalieren**:

- Verwenden Sie die [Zwei-Finger-Geste](../map/interact-with-map.md#gestures), um hinein- oder herauszuzoomen und sich auf bestimmte Intervalle zu konzentrieren.
- Tippen Sie auf einen beliebigen Punkt im Diagramm, um einen Marker anzuzeigen, der die genauen Werte für diesen Ort anzeigt.

| |
| ------------- |
|**Übersicht** Reiter iOS (für Android sind die Y-Achsen-Parameter *Höhe*, *Geschwindigkeit* und der X-Achsen-Parameter *Distanz*). Dieser Reiter zeigt ein Diagramm, das Änderungen in Geschwindigkeit und Höhe entlang des Tracks sowie wichtige Track-Details darstellt. Track-Daten für iOS: *Distanz*, *Zeitspanne*, *Startzeit* und *Endzeit*. Sie können sehen, wie dies in den Android- und iOS-Versionen unten angezeigt wird. |
| ![Daten](@site/static/img/plugins/trip-recording/graph_overview_andr.png) ![Daten](@site/static/img/plugins/trip-recording/graph_overview_ios.png) |
| **Höhe** Reiter iOS (für Android sind die Y-Achsen-Parameter *Höhe*, *Steigung* und der X-Achsen-Parameter *Distanz*). Dieser Reiter konzentriert sich auf das Höhenprofil Ihres aufgezeichneten Tracks und bietet Einblicke in Höhenänderungen und Geländeneigungen. Wichtige Metriken für iOS sind: *Durchschnittliche Höhe*, *Höhenbereich*, *Bergauf* und *Bergab*. Die Diagramme unten veranschaulichen die Unterschiede zwischen Android- und iOS-Oberflächen. |
| ![Daten](@site/static/img/plugins/trip-recording/graph_altitude_andr.png) ![Daten](@site/static/img/plugins/trip-recording/graph_altitude_ios.png) |
| **Geschwindigkeit** Reiter iOS (für Android ist der Y-Achsen-Parameter *Geschwindigkeit* und der X-Achsen-Parameter *Distanz*). Der Geschwindigkeitsreiter hebt geschwindigkeitsbezogene Daten während des gesamten Tracks hervor. Für iOS enthält er Informationen wie *Durchschnittsgeschwindigkeit*, *Höchstgeschwindigkeit*, *Zeit in Bewegung* und *Korrigierte Distanz*. Die Screenshots unten zeigen, wie diese Daten auf beiden Plattformen angezeigt werden. |
| ![Daten](@site/static/img/plugins/trip-recording/graph_speed_andr.png) ![Daten](@site/static/img/plugins/trip-recording/graph_speed_ios.png) |
| Für **Android** können Sie weitere Kombinationen von verfügbaren Y-Achsen-Daten und X-Achsen-Werten erstellen. |
| ![Daten](@site/static/img/plugins/trip-recording/graph_y-x-combinations_andr.png) |

:::info
Für weitere Details können Sie das [**Track-Kontextmenü**](../map/tracks/track-context-menu.md#options) erkunden, wo Sie verschiedene trackbezogene Optionen wie Umbenennen, Löschen oder Hinzufügen von Wegpunkten verwalten können. Um anzupassen, wie Tracks auf der Karte erscheinen, besuchen Sie den Abschnitt [**Darstellung**](../map/tracks/appearance.md). Wenn Sie bestimmte Wegpunkte zu Ihrem aktuellen Track hinzufügen möchten, lesen Sie die Anleitung [**Trackpunkte**](../map/tracks/track-context-menu.md#points--waypoints). Für Änderungen, wie das Umbenennen eines Tracks, verwenden Sie den Reiter [**Optionen**](https://osmand.net/docs/user/map/track-context-menu#options) im Track-Kontextmenü.
:::


### Auf der Karte anzeigen {#show-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![show_tr_onmap_andr_1](@site/static/img/plugins/trip-recording/show_tr_onmap_andr_1.png) ![Karte konfigurieren Tracks Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![sshow_tr_onmap_ios_1](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_1.png) ![Karte konfigurieren Tracks iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)
</TabItem>

</Tabs>

Verwalten Sie, welche Tracks auf Ihrer Karte sichtbar sind, indem Sie eine von zwei Optionen verwenden. Gehen Sie zu *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*<Translate ios="true" ids="shared_string_gpx_tracks"/> Tab*](../map/tracks/index.md#my-places) und aktivieren Sie die Option *Auf Karte anzeigen* für jeden Track, den Sie anzeigen oder ausblenden möchten. Alternativ können Sie zu *<Translate android="true" ids="shared_string_menu,configure_map"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/>*](../map/tracks/index.md#configure-map) gehen, um die Sichtbarkeit aller Ihrer Tracks an einem Ort schnell anzupassen.


### Aufgezeichnete GPX-Datei {#recorded-gpx-file}

OsmAnd erfasst Ihre Reise in einer strukturierten [GPX-Datei](https://en.wikipedia.org/wiki/GPS_Exchange_Format), die eine Hierarchie von *Datei > Track > Segmenten > Punkten* verwendet. So funktioniert es:

- **Punkte** repräsentieren einzelne Momente Ihres aufgezeichneten Pfades, jeder mit Attributen wie Koordinaten, Geschwindigkeit, Höhe und Kurs markiert.
- Diese Punkte werden zu **Tracks** gruppiert, die Ihre gesamte Route darstellen.
- Wenn es eine Lücke in der Aufzeichnung gibt (z.B. wenn die Verfolgung pausiert wurde), beginnt der nächste Punkt nach der Pause ein neues **Segment**, das die Trennung in Ihrer Reise markiert.
- Sowohl **Segmente** als auch **Tracks** werden visuell mit *Start*- und *Ziel*-Symbolen auf der Karte dargestellt.

```xml
<extensions>
    <gpxtpx:TrackPointExtension>
        <gpxtpx:hr>107</gpxtpx:hr>
        <gpxtpx:atemp>107</gpxtpx:atemp>
        <gpxtpx:cad>107</gpxtpx:cad>
    </gpxtpx:TrackPointExtension>
</extensions>
```

<!-- ![GPX file of a recorded track](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm4.png)

![GPX file of a recorded track](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm2.png)  -->


| Parameter | Beschreibung |
|-----------------|----------------|
| `trkpt` | **Trackpunkt** stellt einen spezifischen geografischen Standort dar, der während Ihrer Aktivität erfasst wurde. Jeder Trackpunkt enthält Breiten- und Längengradkoordinaten und bildet die Grundlage Ihres aufgezeichneten Pfades. |
| `trkseg` | **Tracksegment** gruppiert aufeinanderfolgende Trackpunkte, getrennt durch Pausen in der Aktivität, wie z.B. Unterbrechungen oder Stopps. Dies hilft, kontinuierliche Bewegung von Ruhezeiten innerhalb einer einzelnen Aufzeichnung zu unterscheiden. |
| `lat` | **Breitengrad** gibt die Nord-Süd-Position eines Punktes auf der Erdoberfläche an. Er ist eine Hälfte des Koordinatenpaares, das zur genauen Bestimmung Ihres Standorts verwendet wird. |
| `lon` | **Längengrad** gibt die Ost-West-Position an und ergänzt den Breitengrad, um einen Punkt auf dem Globus genau zu lokalisieren. Zusammen definieren Breitengrad und Längengrad Ihre genaue geografische Position. |
| `ele` | **Höhe** misst die Höhe eines Trackpunktes über dem Meeresspiegel, aufgezeichnet in Metern. Dies kann nützlich sein, um Höhenänderungen während Ihrer Aktivitäten, wie Wanderungen oder Radtouren, zu verfolgen. |
| `time` | **Zeitstempel** zeichnet das genaue Datum und die Uhrzeit auf, zu der ein Trackpunkt protokolliert wird. Dies ermöglicht es Ihnen, die Dauer und den Zeitpunkt Ihrer Aktivität präzise zu verfolgen. |
| `hdop` | **Horizontal Dilution of Precision (HDOP)** ist ein Maß für die GPS-Genauigkeit, das den potenziellen Fehler im Standort aufgrund der Positionen der Satelliten widerspiegelt. Im Gegensatz zum Standard-HDOP verwenden OsmAnd GPX-Tracks diesen Wert, um die horizontale Genauigkeit in Metern darzustellen. Bitte beachten Sie, dass diese Implementierung von typischen HDOP-Standards abweicht. [Erfahren Sie mehr](https://github.com/osmandapp/Osmand/issues/3445). |
| `speed` | **Geschwindigkeit** zeichnet Ihre Bewegungsrate in Metern pro Sekunde auf. Sie gibt Aufschluss über Ihr Tempo während verschiedener Segmente Ihrer Aktivität. |
| `heading` | **Kurs** gibt die Richtung an, in die Ihr Fahrzeug oder Gerät zeigt, gemessen in Grad. Er unterscheidet sich vom tatsächlichen Bewegungspfad. Unterschiede können aufgrund externer Faktoren wie Wind, Strömungen oder Straßenbedingungen auftreten. [Mehr zum Kurs](https://en.wikipedia.org/wiki/Heading_(navigation)). |
| `speed_sensor` | **Geschwindigkeit** von [externen Sensoren](../plugins/external-sensors.md) erfasst Daten von verbundenen Sensoren und liefert präzisere Geschwindigkeitsinformationen, besonders nützlich beim Radfahren. Weitere Details finden Sie in der [GPX-Dateiformatdokumentation](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `cadence` | **Trittfrequenz** misst die Anzahl der Pedalrevolutionen pro Minute, aufgezeichnet mit [externen Sensoren](../plugins/external-sensors.md). Dies ist besonders nützlich für Radfahrer, die ihre Treteffizienz überwachen und optimieren möchten. [Lesen Sie mehr](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `power` | **Fahrradleistung** quantifiziert die beim Treten erzeugte Leistung, erfasst von [externen Sensoren](../plugins/external-sensors.md). Es ist eine wesentliche Metrik für ernsthafte Radfahrer, die ihre Leistung messen möchten. [Erfahren Sie mehr](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `atemp` | **Lufttemperatur** zeichnet die Umgebungstemperatur während Ihrer Aktivität auf, gemessen mit [externen Sensoren](../plugins/external-sensors.md). Beachten Sie, dass Wassertemperatur nicht unterstützt wird. [Details hier](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `hr` | **Herzfrequenz** überwacht Ihre Herzschläge pro Minute, unter Verwendung von Daten von verbundenen [Sensoren](../plugins/external-sensors.md). Diese Informationen können entscheidend sein, um Ihre Herz-Kreislauf-Leistung während des Trainings zu verfolgen. [Erfahren Sie mehr](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |


## Aufzeichnungseinstellungen {#recording-settings}

Bevor Sie Ihre Routen verfolgen, müssen Sie das **Routenaufzeichnungs-Plugin** für eine optimale Leistung richtig konfigurieren.

- **Profilspezifische Einstellungen**. Jedes Profil in der App kann seine eigenen einzigartigen Routenaufzeichnungseinstellungen haben. Dies ermöglicht es Ihnen, das Aufzeichnungsverhalten präzise an Ihre Aktivität anzupassen, wie z.B. Autofahren, Radfahren oder sogar Nordic Walking, die unterschiedliche Konfigurationen erfordern könnten.

- **Aufzeichnungsparameter anpassen**. Die Aufzeichnungseinstellungen können je nach Bewegungsart variieren. Zum Beispiel könnte das Fahren langer Strecken eine geringere Aufzeichnungsfrequenz erfordern, während Wandern oder Spazierengehen von häufigeren Updates profitieren könnte.

- **Präzise Standortdaten**. Um sicherzustellen, dass Ihre Aufzeichnungen reibungslos und für die zukünftige Verwendung nutzbar sind, können Sie die Art und Weise anpassen, wie Sie Standortpunkte erfassen. Dies könnte die Anpassung der Aufzeichnungsfrequenz, des Formats Ihrer Daten (wie die Anzahl der Punkte pro Entfernungseinheit) oder des Abstands zwischen aufgezeichneten Punkten umfassen.

- **Globale Einstellungen**. Routenaufzeichnungseinstellungen werden pro Profil konfiguriert, die Sie in den globalen [Einstellungen](../personal/global-settings.md) der App verwalten können. Bevor Sie das Routenaufzeichnungs-Plugin anpassen, wählen Sie das Profil aus, das Sie konfigurieren möchten, aus dem Abschnitt [Profile](../personal/profiles.md). Navigieren Sie von dort zu den Profileinstellungen, um auf die Routenaufzeichnungsoptionen zuzugreifen.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routenaufzeichnung in Android konfigurieren](@site/static/img/plugins/trip-recording/recording_sett_1_andr.png) ![Routenaufzeichnung in Android konfigurieren](@site/static/img/plugins/trip-recording/recording_sett_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routenaufzeichnung in iOS konfigurieren](@site/static/img/plugins/trip-recording/recording_sett_1_ios.png) ![Routenaufzeichnung in iOS konfigurieren](@site/static/img/plugins/trip-recording/recording_sett_2_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschreibung |
|---|---|
| **Batterieoptimierungsdialog** (*Android*) | Öffnet die [Android-Batterieoptimierungseinstellungen](#battery-optimization). Tippen Sie auf *Nicht mehr fragen*, wenn Sie nicht erneut aufgefordert werden möchten. |
| **Startdialog anzeigen** (*Android*) | Aktiviert einen Dialog, in dem Sie Einstellungen vor dem Start der Aufzeichnung konfigurieren können. Wenn deaktiviert, startet die Aufzeichnung automatisch. |
| **Track während der Navigation automatisch aufzeichnen** | Zeichnet den Track während der Navigation automatisch auf und speichert ihn im Reiter *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*. <br />*Hinweis*: Die Track-Aufzeichnung verbraucht Batterie und läuft im Hintergrund weiter, auch wenn der Bildschirm ausgeschaltet ist. |
| **Allgemeines Protokollierungsintervall** | Definiert, wie oft Standortpunkte aufgezeichnet werden. Der Standardwert ist 5 Sekunden. Es wird mit dem *Routenaufzeichnungs-Widget* aktiviert. |
| **Mindestverschiebung** | Ein Filter, um die Aufzeichnung von Punkten bei geringer oder keiner Bewegung zu vermeiden. Er hilft, Datenrauschen zu reduzieren.<ul><li>*Nebenwirkungen*: Ruhezeiten werden möglicherweise nicht aufgezeichnet, und kleine Bewegungen können ignoriert werden. Dies kann die Nachbearbeitung von Daten reduzieren, aber auch verhindern, dass GPS-Fehler protokolliert werden.</li><li>*Empfehlung*: Stellen Sie die Verschiebung auf 5 Meter ein, wenn Sie weniger kleine Details in Ihren Aufzeichnungen wünschen.</li></ul> |
| **Mindestgenauigkeit** | Filtert Standortpunkte unterhalb eines Mindestgenauigkeits-Schwellenwerts heraus, wie vom Gerät gemeldet.<ul><li>*Nebenwirkungen*: Punkte in Gebieten mit schlechtem Signal (unter Brücken, Bäumen, zwischen Gebäuden oder bei bestimmten Wetterbedingungen) können fehlen.</li><li>*Empfehlung*: Im Zweifelsfall ist es besser, diesen Filter zu deaktivieren, um fehlende Daten zu vermeiden.</li></ul><details><summary>*Anmerkung*</summary>Angenommen, das GPS wurde kurz vor der Aufzeichnung ausgeschaltet. In diesem Fall kann der erste gemessene Punkt eine reduzierte Genauigkeit aufweisen, daher ist es besser, eine Weile zu warten, bevor der Punkt aufgezeichnet wird, oder den besten von 3 aufeinanderfolgenden Punkten aufzuzeichnen.</details> |
| **Mindestgeschwindigkeit** | Legt einen Schwellenwert fest, um Punkte zu ignorieren, die unter einer bestimmten Geschwindigkeit aufgezeichnet wurden.<ul><li>*Nebenwirkungen*: Abschnitte, in denen die Geschwindigkeit unter einen bestimmten Schwellenwert fällt, werden nicht aufgezeichnet.</li><li>*Empfehlung*: Verwenden Sie stattdessen den Filter *Mindestverschiebung*, da dieser bessere Ergebnisse liefern kann, ohne wichtige Daten zu verlieren.</li></ul><details><summary>*Anmerkung*</summary>Versuchen Sie zuerst die Bewegungserkennung über den Filter für die minimale Protokollierungsverschiebung (B), dies kann bessere Ergebnisse liefern und Sie verlieren weniger Daten. Wenn Ihre Tracks bei niedrigen Geschwindigkeiten weiterhin verrauscht sind, versuchen Sie hier Nicht-Null-Werte. Bitte beachten Sie, dass einige Messungen überhaupt keinen Geschwindigkeitswert melden (einige netzwerkbasierte Methoden), in welchem Fall Sie nichts aufzeichnen würden.<br/><br/>Geschwindigkeit > 0 Prüfung: Die meisten GPS-Chipsätze melden einen Geschwindigkeitswert nur, wenn der Algorithmus feststellt, dass Sie in Bewegung sind, und keinen, wenn Sie es nicht sind. Daher verwendet die Einstellung > 0 in diesem Filter gewissermaßen die Bewegungserkennung des GPS-Chipsatzes. Aber selbst wenn hier zum Zeitpunkt der Aufzeichnung nicht gefiltert wird, verwenden wir diese Funktion immer noch in unserer GPX-Analyse, um die korrigierte Distanz zu bestimmen, d.h. der in diesem Feld angezeigte Wert ist die Distanz, die in Bewegung aufgezeichnet wurde.</details> |
| **Aufzeichnungen nach Lücke automatisch teilen** | Teilt Tracks automatisch basierend auf Zeitlücken zwischen aufgezeichneten Punkten. <ul><li>Ein neues Segment beginnt nach einer 6-minütigen Lücke.</li><li>Ein neuer Track beginnt nach einer 2-stündigen Lücke.</li><li>Eine neue Datei beginnt, wenn sich das Datum ändert.</li><li>Lücken können durch GPS-Signalverlust, geringe Geschwindigkeit oder Konfigurationseinstellungen entstehen.</li></ul><details><summary>*Anmerkung*</summary>Eine Lücke wird identifiziert, wenn keine Punkte aufgezeichnet werden. Dies kann entweder daran liegen, dass der Standort nicht erkannt wird, oder daran, dass er erkannt, aber nicht aufgezeichnet wird. Mehrere Faktoren können dies verursachen, einschließlich schwacher GPS-Signale aufgrund schlechter Wetterbedingungen oder der Bewegungsgeschwindigkeit, die unter den konfigurierten Schwellenwert fällt. In solchen Fällen, selbst wenn das Gerät den Standort erkennen kann, zeichnet es ihn nicht auf.<br/><br/>Diese Lücken in den aufgezeichneten Daten können die Erstellung eines neuen Segments innerhalb desselben Tracks, eines neuen Tracks in derselben Datei oder einer neuen GPX-Datei innerhalb einer Aufzeichnung auslösen. Dies wird innerhalb einer einzigen Start-/Stopp-Aufzeichnungssitzung verwaltet.</details> |
| **Eigenständige Protokollierung verhindern** (*Android*) | Pausiert die Track-Aufzeichnung, wenn die OsmAnd-App beendet wird (über *aktuelle Apps*). Die Hintergrundanzeige wird im Android-Benachrichtigungsfeld nicht angezeigt. |
| **Kurs einbeziehen** | Zeichnet den Kurs (Bewegungsrichtung) für jeden Punkt in der GPX-Datei auf. Der Kurs ist die Richtung, in die das Gerät zeigt, die sich aufgrund externer Faktoren wie Wind oder Schleudern von der Bewegungsrichtung unterscheiden kann. |
| **Aktivität** | Die Option ermöglicht es Ihnen, einen [Aktivitätstyp](../map/tracks/track-context-menu.md#track-information-activity) für ein Profil vorzuwählen, der dann automatisch auf alle aufgezeichneten Tracks angewendet wird. |
| **Externe Sensoren** <br/> *Plugin muss aktiviert sein* | Daten von [externen Sensoren](../plugins/external-sensors.md#trip-recording) wie *<Translate android="true" ids="map_widget_ant_heart_rate"/>* oder *<Translate android="true" ids="map_widget_ant_bicycle_speed"/>* werden in die GPX-Datei protokolliert. *Entfernungsdaten* werden weder auf Android noch auf iOS aufgezeichnet. Nur angezeigt, wenn das [Externe Sensoren Plugin](../plugins/external-sensors.md) aktiviert ist. |
| **Fahrzeugmetriken** <br/> *Plugin muss aktiviert sein* | Daten vom [OBD-II-Scanner](../plugins/vehicle-metrics.md#trip-recording) werden in die GPX-Datei protokolliert. Nur angezeigt, wenn das [Fahrzeugmetriken-Plugin](../plugins/vehicle-metrics.md) aktiviert ist.<br />*Hinweis*: Sie können aus der Liste auswählen, welche Metriken in der GPX-Datei aufgezeichnet werden sollen: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_trip_recording,shared_string_settings"/>* |
| **Track-Speicherordner** (*Android*) | Definiert, wo im Reiter *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>* aufgezeichnete Tracks gespeichert werden. Optionen umfassen das Speichern aller Tracks im Ordner "Rec" oder die Organisation nach Monat, z.B. "Rec/jjjj-mm". |
| **Benachrichtigung** | Steuert die Anzeige einer [Routenaufzeichnungs-Systembenachrichtigung](#notifications) im Benachrichtigungsbereich des Geräts, die es Ihnen ermöglicht, Routenaufzeichnungen zu starten. |
| **Online-Tracking** (*Android*) | Ermöglicht die Echtzeitverfolgung Ihres Standorts, indem aufgezeichnete Punkte an eine angegebene URL gesendet werden. Das Tracking-Intervall bestimmt, wie oft Punkte gesendet werden, und der Zeitpuffer speichert Punkte, wenn keine Internetverbindung besteht.<details><summary>*Anmerkung*</summary>Wenn diese Option aktiviert ist und die Track-Aufzeichnung läuft, wird das Entfernungs-/Start-Stopp-Widget (REC) **grün** statt **rot**, was anzeigt, dass jeder aufgezeichnete Punkt an eine angegebene URL übertragen wird. Das Feld **Webadresse** ermöglicht es Ihnen, die URL mit dem folgenden Parameterformat einzugeben:<ul><li>`lat={0}`: Breitengrad</li><li>`lon={1}`: Längengrad</li><li>`timestamp={2}`: Zeitstempel (Unix-Zeit)</li><li>`hdop={3}`: Horizontale Verdünnung der Präzision</li><li>`altitude={4}`: Höhe</li><li>`speed={5}`: Geschwindigkeit</li><li>`bearing={6}`: Peilung (Bewegungsrichtung)</li><li>`eta={7}`: Geschätzte Ankunftszeit (Unix-Zeit)</li><li>`etfa={8}`: Geschätzte Zeit bis zum ersten Zwischenpunkt oder Endpunkt (Unix-Zeit)</li><li>`eda={9}`: Geschätzte Entfernung bis zur Ankunft oder einem Marker (in Metern)</li><li>`edfa={10}`: Geschätzte Entfernung bis zum ersten Zwischenpunkt oder Endpunkt (in Metern)</li></ul>Sie können das **Tracking-Intervall** festlegen, um anzugeben, wie oft Standortpunkte gesendet werden, mit Optionen von 0 Sekunden bis 5 Minuten. Zusätzlich bestimmt der Parameter **Zeitpuffer**, wie lange Standortpunkte gespeichert werden, wenn keine Internetverbindung besteht, um sicherzustellen, dass Daten gespeichert und übertragen werden, wenn die Verbindung wiederhergestellt ist.</details> |
| **Tracks** | Ein schneller Verweis auf den Ordner, in dem Tracks im Reiter *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>* gespeichert werden. |
| **Plugin-Einstellungen auf Standard zurücksetzen** | Setzt alle Routenaufzeichnungseinstellungen für das aktuelle Profil auf ihre Standardwerte zurück. |
| **Von anderem Profil kopieren** (*Android*) | Kopiert die Routenaufzeichnungseinstellungen von einem Profil in ein anderes. |


### Batterieoptimierung {#battery-optimization}

<InfoAndroidOnly />

![Track auf der Karte iOS](@site/static/img/plugins/trip-recording/battery_2_andr.png) ![Track auf der Karte iOS](@site/static/img/plugins/trip-recording/battery_1_andr.png)

Diese Funktion ermöglicht es Ihnen, die Batterieoptimierungseinstellungen für OsmAnd zu verwalten, um einen ununterbrochenen Zugriff auf Ihren Standort zu gewährleisten, auch wenn die App im Hintergrund während der Navigation oder Track-Aufzeichnung läuft.

- **Batterieoptimierungseinstellungen**. Öffnet die Android-Einstellungen, wo Sie die Energiespareinstellungen für OsmAnd ändern können. [Weitere Details hier](../troubleshooting/general.md#optimizing-battery-consumption).
- **Nicht mehr fragen**. Schließt das Dialogfeld dauerhaft, sodass es nicht wieder angezeigt wird.
- **Schließen**. Schließt das Dialogfeld vorübergehend, das beim nächsten Mal, wenn die Batterieoptimierung Aufmerksamkeit erfordert, wieder angezeigt wird.


### Benachrichtigungen {#notifications}

![Routenaufzeichnungs-Benachrichtigung](@site/static/img/plugins/trip-recording/trip_rec_notific_1_andr.png)

Wenn [Benachrichtigung](#recording-settings) in den Plugin-Einstellungen aktiviert ist, werden Routenaufzeichnungsbenachrichtigungen immer im Systembenachrichtigungsbereich angezeigt, wenn die Aufzeichnung aktiv ist. Diese Benachrichtigung stellt sicher, dass der Aufzeichnungsprozess nicht vom System unterbrochen wird, und sie kann während einer aktiven Aufzeichnung nicht deaktiviert werden.

- Der Benachrichtigungsbereich öffnet sich, wenn Sie vom oberen Bildschirmrand nach unten wischen, und schließt sich, wenn Sie nach oben wischen. Diese Nachrichten informieren Sie über Aktionen wie das Starten/Stoppen der Routenaufzeichnung, insbesondere wenn die automatische Aufzeichnung während der Navigation aktiviert ist.
- Benachrichtigungen bleiben sichtbar, unabhängig davon, ob die App im Vordergrund, Hintergrund läuft oder geschlossen ist. Sie können die alte Benachrichtigung manuell löschen, wenn sie nicht mehr benötigt wird, aber dies stoppt die laufende Aufzeichnung nicht.

**Wichtiger Hinweis**.

Dieses Verhalten wird von Android für jeden Vordergrunddienst, wie die Routenaufzeichnung, gefordert, um für Sie sichtbar zu bleiben.

- Wenn die Benachrichtigung entfernt wird, stoppt Android die Aufzeichnung automatisch. Sie können die Einstellung [Eigenständige Protokollierung verhindern](#recording-settings) verwenden.
- Die Einstellung **Benachrichtigung** in OsmAnd beeinflusst, ob die Benachrichtigungsleiste eine Verknüpfung zum Starten einer Aufzeichnung anzeigt, wenn keine Aufzeichnung aktiv ist. Sie steuert **nicht** die Sichtbarkeit der Benachrichtigung während einer aktiven Aufzeichnung.

**Zusätzliche Android-Optionen**.

![Routenaufzeichnungs-Benachrichtigung](@site/static/img/plugins/trip-recording/trip_rec_notification_andr.png)

- In den ***Android-Einstellungen → Benachrichtigungen und Statusleiste → Sperrbildschirmbenachrichtigungen*** können Sie OsmAnd aus der App-Liste entfernen, um zu verhindern, dass Benachrichtigungen auf dem Sperrbildschirm angezeigt werden, und so eine versehentliche Bildschirmaktivierung vermeiden. Dies hat keine Auswirkungen auf die Track-Aufzeichnung. Benachrichtigungen werden weiterhin im regulären Benachrichtigungsbereich angezeigt.
- **OsmAnd** kann auch unter ***Datenschutz → Besondere Berechtigungen → Bildschirm einschalten*** erscheinen. Wenn Sie verhindern möchten, dass sich der Bildschirm einschaltet, wenn eine Benachrichtigung erscheint, versuchen Sie, OsmAnd aus dieser Liste zu entfernen.

<!--
- OsmAnd is not listed under **Privacy** *→* **Special Permissions** → **Alarms and reminders**.
-->

**Badge-Benachrichtigung**.

![Routenaufzeichnungs-Benachrichtigung](@site/static/img/plugins/trip-recording/trip_rec_notification_badge_andr.png)

Das App-Symbol-Badge erscheint neben dem OsmAnd-Symbol, wenn die Track-Aufzeichnung aktiv ist.

- Dieses Symbol verschwindet, wenn die Track-Aufzeichnung abgeschlossen ist. Um zu überprüfen, ob eine Aufzeichnung aktiv ist, können Sie zu *Menü → Meine Orte → Tracks-Tab* gehen oder auf das Widget tippen, um die Aufzeichnung zu verwalten.
- Wenn keine Aufzeichnung läuft und das Badge immer noch angezeigt wird, kann dies bedeuten, dass eine Nachricht von OsmAnd im Benachrichtigungsfeld des Geräts verblieben ist.
- Um Badges in den Android-Einstellungen zu deaktivieren, gehen Sie zu *Geräteeinstellungen → Apps → OsmAnd → Benachrichtigungen* und deaktivieren Sie die Option zur Badge-Anzeige für diese App.


## Widgets {#widgets}

Widgets ermöglichen es Ihnen, wichtige Informationen zur Routenaufzeichnung direkt auf dem Bildschirm anzuzeigen, wie z.B. *Distanz*, *Dauer*, *Bergauf* und *Bergab*.

Um *Routenaufzeichnungs-Widgets* zu verwenden, müssen Sie alle folgenden Einstellungen vornehmen:

1. [Aktivieren Sie das Plugin](../start-with/first-steps.md#how-to-configure-plugins).
2. Konfigurieren Sie die Routenaufzeichnungseinstellungen für das erforderliche [Profil](../personal/profiles.md).
3. Fügen Sie die notwendigen **Routenaufzeichnungs-Widgets** zum Bildschirm hinzu. Beachten Sie, dass diese Konfiguration **profilspezifisch** ist.


### Aufzeichnungs-Widget hinzufügen {#add-recording-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wähle ein Panel → <Translate android="true" ids="map_widget_monitoring"/>*

![Entfernungs-/Start-Stopp-Widget in Android hinzufügen](@site/static/img/plugins/trip-recording/add_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Wähle ein Panel → <Translate android="true" ids="map_widget_monitoring"/>*

![Aufzeichnungs-Widgets in iOS hinzufügen](@site/static/img/plugins/trip-recording/add_recording_widgets_ios.png)

</TabItem>

</Tabs>

Das [Routenaufzeichnungs-Widget](../widgets/info-widgets.md#trip-recording-widgets) bietet eine einfache Möglichkeit, Ihren Aufzeichnungsstatus zu überwachen und schnell auf Aufzeichnungseinstellungen und Details zuzugreifen. Dieses Widget wird automatisch zu Ihrem Bildschirm hinzugefügt, wenn das Routenaufzeichnungs-Plugin aktiviert ist.

Um Ihre Oberfläche anzupassen, können Sie das Routenaufzeichnungs-Widget und [andere Widgets](../plugins/trip-recording#duration-uphill-downhill) über das Menü "Bildschirm konfigurieren" hinzufügen oder entfernen.


### Distanz (Start-Stopp) {#distance-start-stop}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routenaufzeichnungs-Widget](@site/static/img/plugins/trip-recording/trip_rec_widgets_andr.png)
![Aufzeichnung in Android beenden](@site/static/img/plugins/trip-recording/distance_start_rec_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routenaufzeichnungs-Widget](@site/static/img/widgets/tr_rec_wid_conf_scr.png) ![Routenaufzeichnungs-Widget](@site/static/img/widgets/tr_rec_wid_conf_scr_2.png)

</TabItem>

</Tabs>

Wenn Widgets auf der Karte angezeigt werden, zeigt das Tippen auf eines davon zusätzliche Trackdetails an und ermöglicht die Interaktion mit der Aufzeichnung.
Das *Distanz*-Widget zeigt die Gesamtdistanz Ihrer aktuell aufgezeichneten Route an und dient als Hauptschnittstelle zur Verwaltung Ihrer Aufzeichnungen. Durch Tippen darauf wird der [Routenaufzeichnungsdialog](#start-a-dialog) angezeigt, in dem Sie detaillierte Informationen zu Ihrem Track starten, stoppen und anzeigen können.

- Das Widget wird automatisch hinzugefügt, wenn das *Routenaufzeichnungs-Plugin* aktiviert ist, kann aber über das [Bildschirm konfigurieren-Menü](../widgets/configure-screen.md#configure-screen-menu) ausgeblendet werden.
- Wenn die Option *Startdialog anzeigen* in den Einstellungen des Routenaufzeichnungs-Plugins deaktiviert ist, öffnet das Tippen auf das aktive Widget dennoch das Dialogfeld *Routenaufzeichnung*, sodass Sie auf weitere Optionen und Informationen zugreifen können.

Zusätzlich zum *Distanz-/Start-Stopp*-Widget enthält das **Routenaufzeichnungs-Plugin** drei weitere Widgets: *Dauer*, *Bergauf* und *Bergab*. Diese liefern zusätzliche Informationen zu Ihrer Reise und helfen Ihnen, den Echtzeitfortschritt zu verfolgen.

| |
|-----------|
| **Distanz/Start-Stopp**. Dieses Widget zeigt die Distanz Ihrer laufenden Routenaufzeichnung an. Es wird automatisch hinzugefügt, wenn das Routenaufzeichnungs-Plugin aktiviert ist, kann aber über das Menü "Bildschirm konfigurieren" ausgeblendet werden. Das Widget verfügt über drei verschiedene Zustände: *Aufnahme*, *Pausiert* und *Inaktiv*, die jeweils den aktuellen Status Ihrer Routenaufzeichnung anzeigen. |
| ![Routenaufzeichnungs-Widget (REC)](@site/static/img/widgets/tr_rec_wid_rec.png) |
| Um den [Routenaufzeichnungsdialog](#start-a-dialog) beim Tippen auf ein inaktives Widget zu öffnen, aktivieren Sie die Option *Startdialog anzeigen* in den Einstellungen des Routenaufzeichnungs-Plugins. Wenn die Option deaktiviert ist, startet die Aufzeichnung sofort nach dem Tippen auf das Widget, ohne den Dialog zu öffnen.|


### Dauer, Bergauf, Bergab {#duration-uphill-downhill}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

</TabItem>

<TabItem value="ios" label="iOS">

</TabItem>

</Tabs>

| |
|------------|
|**Dauer**. Zeigt die Gesamtzeit der aktuellen Routenaufzeichnung in Stunden und Minuten an. |
|![Widgets](@site/static/img/widgets/tr_rec_wid_dur.png)|
|**Bergauf**. Zeigt den kumulativen Höhengewinn für die aktuelle Routenaufzeichnung an. |
|![Widgets](@site/static/img/widgets/tr_rec_wid_up.png)|
|**Bergab**. Zeigt den gesamten Abstieg an, der während der aktuellen Routenaufzeichnung angesammelt wurde. |
|![Widgets](@site/static/img/widgets/tr_rec_wid_dow.png)|

Wenn Sie mehrere Widgets ausgewählt haben – *Dauer*, *Bergauf* oder *Bergab* – können Sie für jedes denselben Dialog aufrufen, ohne wechseln oder schließen zu müssen. Diese einheitliche Oberfläche erleichtert die nahtlose Anzeige und Verwaltung aller zugehörigen Informationen.


## Verwandte Artikel {#related-articles}

- [Karten-Kontextmenü](../map/map-context-menu.md)
- [Track auf Karte anzeigen](../map/tracks/index.md)
- [Auf Karte analysieren](../map/tracks/index.md#analyze-track-on-map)
- [Track-Kontextmenü](../map/tracks/track-context-menu.md)
- [Navigation nach Track](../navigation/setup/gpx-navigation.md)

### Häufige Probleme und Lösungen {#common-issues-and-solutions}

- Routenaufzeichnung startet nicht.
    - Stellen Sie sicher, dass das **Routenaufzeichnungs-Plugin** aktiviert ist: *Menü → Plugins → Routenaufzeichnung → Aktivieren*.
    - Überprüfen Sie, ob die Einstellungen korrekt sind: *Menü → Profil konfigurieren → Plugin-Einstellungen → Routenaufzeichnung*.
    - Wenn die Aufzeichnung immer noch nicht startet, starten Sie die App neu und versuchen Sie es erneut.

- Routenaufzeichnung stoppt unerwartet.
    - Überprüfen Sie, ob die *Batterieoptimierungseinstellungen Ihres Geräts* die Aufzeichnung stoppen. Einige Geräte können Hintergrundaktivitäten pausieren, um Strom zu sparen. Gehen Sie zu *Geräteeinstellungen → Batterie*.

- Aufgezeichnete Distanz stimmt nicht mit der tatsächlichen Distanz überein.
    - Überprüfen Sie, ob GPS aktiviert ist und ein aktives Signal hat.
    - Reduzieren Sie den GPS-Genauigkeitsschwellenwert: *Menü → Profil konfigurieren → Routenaufzeichnung → Mindestgenauigkeit*.

- Aufgezeichnete Tracks sind verrauscht. [(prüfen)](../troubleshooting/track-recording-issues.md#recorded-tracks-are-noisy).
- Aufgezeichnete Tracks haben Lücken. [(prüfen)](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps)
- Wie man die zurückgelegte Strecke verfolgt. [(prüfen)](../troubleshooting/track-recording-issues.md#how-to-track-traveled-distance)

Für weitere Fehlerbehebung besuchen Sie: [Fehlerbehebung bei der Routenaufzeichnung](https://osmand.net/docs/user/troubleshooting/track-recording-issues).

> *Zuletzt aktualisiert: Januar 2025*