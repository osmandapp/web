---
source-hash: 8826b2eb6a139e524ef632c763796638e85679b9e77950d519cb5b8c87dc9085
sidebar_position: 15
title:  Aufnahme einer Tour
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

Das **Plugin zur Touraufnahme** ist ein unverzichtbares Werkzeug zur Erfassung Ihrer Routen, Bewegungen und Trainingseinheiten. Mit dieser Funktion können Sie nicht nur Ihre Touren aufzeichnen, sondern Ihre Tracks auch einfach wiederverwenden, ändern, aktualisieren und mit anderen teilen.

Mit dem *Plugin zur Touraufnahme* können Sie neue Tracks erstellen, aufgezeichnete Tracks direkt auf der Karte anzeigen und vorhandene Aufzeichnungen verwalten. Es bietet wertvolle Einblicke in Ihre Touren, wie z. B. Geschwindigkeit, Höhenunterschiede, Geländedetails und Daten von externen Sensoren. Das Plugin zeichnet Ihre Route auf und ermöglicht so eine detaillierte Analyse und Weitergabe nach Ihrer Tour.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Aufgezeichnete Tour in Android](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aufgezeichnete Tour in iOS](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_ios_2.png)

</TabItem>

</Tabs>


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Um mit der Aufzeichnung von Tracks zu beginnen, müssen Sie die folgenden Einstellungen vornehmen:

1. [Aktivieren](../plugins/index.md#enable--disable) Sie das **Plugin zur Touraufnahme**.
2. [Konfigurieren](#recording-settings) Sie die **Aufnahmeeinstellungen** für das erforderliche [Profil](../personal/profiles.md).
3. [Fügen Sie](#widgets) der Anzeige **Widgets zur Touraufnahme** hinzu (optional).
4. Verwalten Sie [Tracks auf der Karte](../map/tracks/appearance.md) (optional).


## Neue Track-Aufnahme {#new-track-recording}

![Entfernungs/Start-Stopp-Widget in iOS](@site/static/img/plugins/trip-recording/create_new_track_and-1.png) ![Entfernungs/Start-Stopp-Widget in Android](@site/static/img/plugins/trip-recording/create_new_track_ios-1.png)

Mit dem Plugin zur Touraufnahme in OsmAnd können Sie ganz einfach mit der Aufzeichnung Ihres Tracks beginnen, indem Sie eine Vielzahl praktischer Optionen nutzen. So können Sie Ihre Reise beginnen:

- [Entfernungs/Start-Stopp-Widget](#distance-start-stop) – Zum Aktivieren der Aufnahme.

- [<Translate android="true" ids="start_recording"/>](../personal/myplaces.md#tracks) – Tippen Sie auf die Schaltfläche in der Registerkarte *Haupt-<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.

- [Schnellaktionsschaltflächen](../widgets/quick-action.md#add-and-delete-actions) – Um eine Tour aufzuzeichnen, gehen Sie zu *Menü → Bildschirm konfigurieren → Benutzerdefinierte Schaltflächen → Schnellaktion → Aktion hinzufügen → Meine Orte* und wählen Sie [Start / Pause: Touraufnahme](../widgets/quick-action.md#my-places).

- *Nur Android*:
    - Gehen Sie zu *Haupt-<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*.

    - [Systembenachrichtigung](#notifications) – Verwenden Sie den Benachrichtigungsbereich Ihres Geräts.

    - [Anwendungsstarter](#launcher-android) – Zum Starten der Aufnahme.

**Empfehlungen:**

- [Präzise Standortbestimmung](../start-with/first-steps.md#permission-to-access-the-location) – Für eine genaue Track-Aufzeichnung stellen Sie sicher, dass OsmAnd diese Berechtigung hat.

- [Fehlerbehebung](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps) – **iOS-Geräte** können manchmal Apps, die im Hintergrund laufen, vorübergehend **aussetzen oder beenden**, was die Track-Aufzeichnung unterbrechen könnte.

- **Standortquelle** (*Nur Android*) – Passen Sie die Einstellungen in OsmAnd an, um den am besten geeigneten GPS-Anbieter für genaue Aufzeichnungen auszuwählen. [Erfahren Sie hier mehr](../personal/global-settings.md#location-source).


### Startdialog {#start-a-dialog}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Der Startdialog öffnet sich, wenn die Option **<Translate android="true" ids="show_start_dialog"/>** im Einstellungsbereich des Startdialogs aktiviert ist.

![Aufnahme starten in Android](@site/static/img/plugins/trip-recording/start_rec_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

Der Startdialog öffnet sich, wenn die Option **<Translate ios="true" ids="track_interval_remember"/>** nicht aktiviert ist.

![Aufnahme starten in iOS](@site/static/img/plugins/trip-recording/start_rec_ios_1.png)

</TabItem>

</Tabs>

- **Protokollierungsintervall** (*Android/iOS*). Diese Einstellung steuert, wie oft die App Daten vom GPS-Sensor anfordert, um neue Punkte auf Ihrem Track zu markieren. Durch Anpassen des Intervalls können Sie zwischen Track-Detailgenauigkeit und Batterieverbrauch abwägen. Ein kürzeres Intervall führt zu detaillierteren Tracks, aber höherem Batterieverbrauch, während ein längeres Intervall Batterie spart, aber die Track-Genauigkeit reduziert.

- **Liniensymbol** (*Android*). Tippen Sie auf dieses Symbol, um auf die [Optionen zur Track-Darstellung](../map/tracks/appearance.md) zuzugreifen. Hier können Sie anpassen, wie Ihr Track auf der Karte angezeigt wird, einschließlich Linienfarbe, Dicke und Stil. Sobald Sie einen Track mit einer benutzerdefinierten Darstellung speichern, werden diese Einstellungen für zukünftige Aufzeichnungen beibehalten, um Konsistenz bei jeder Anzeige oder Wiederaktivierung des Tracks zu gewährleisten.

- **Einstellungsmenü** (*Android*). Greifen Sie auf dieses Menü zu, um Ihre Aufnahmeeinstellungen zu verfeinern. Eine detaillierte Übersicht finden Sie im Abschnitt [Einstellungen zur Touraufnahme](#recording-settings).

- **Meine Auswahl merken** (*iOS*). Wenn diese Option aktiviert ist, beginnt die Track-Aufzeichnung automatisch, ohne zusätzliche Einstellungen oder Bestätigung anzufordern. Wenn Sie die Aufnahmeeinstellungen ändern möchten, bevor Sie einen neuen Track starten, starten Sie das Plugin zur Touraufnahme neu, damit das Einstellungsmenü wieder angezeigt wird.


### Starter (Android) {#launcher-android}

![Kontextmenü des Symbols](@site/static/img/plugins/trip-recording/launcher_icon_andr.png) ![Symbol „Aufnahme starten“](@site/static/img/plugins/trip-recording/and_trip_rec_icon.png)

Sie können eine neue Track-Aufzeichnung schnell direkt vom Bildschirm Ihres Android-Geräts aus über das Kontextmenü des OsmAnd-App-Symbols starten.

- **Langes Tippen** auf das OsmAnd-App-Symbol öffnet das Kontextmenü, in dem Sie die Option **Aufnahme starten** finden.

- Tippen Sie auf die Option **Aufnahme starten**, um die OsmAnd-App mit den auf dem Bildschirm angezeigten [Einstellungen zur Track-Aufzeichnung](#overview-screen) zu starten.

- **Langes Tippen** auf die Option **Aufnahme starten** im Kontextmenü des App-Symbols, um eine Verknüpfung für schnelleren Zugriff hinzuzufügen.

Während die Track-Aufzeichnung aktiv ist, erscheint ein Benachrichtigungsabzeichen in der Ecke des OsmAnd-App-Symbols, das anzeigt, dass die Aufzeichnung läuft. Weitere Details zur Verwaltung dieser Benachrichtigung finden Sie im Abschnitt [Benachrichtigung](#notifications).


## Aktuelle Track-Aufzeichnung {#current-track-recording}

Für *Stoppen / Speichern / Pausieren*:

- Um die Aufnahme zu **stoppen**, tippen Sie auf die entsprechende Schaltfläche im Dialogfeld [Entfernung/Start-Stopp-Widget](#distance-start-stop).

- (*Nur Android*) Um die Aufnahme zu **stoppen**, tippen Sie auf den Menüpunkt *Touraufnahme* im Hauptmenü.

- Um einen Aufzeichnungstrack zu **stoppen** oder zu **speichern**, gehen Sie zu *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/> tab*](../personal/myplaces.md#tracks) und tippen Sie auf die entsprechende Schaltfläche im Feld *Aktuell aufzeichnender Track*.

- Um eine Aufzeichnung zu **speichern, zu pausieren, ein neues Segment zu starten** oder zu **beenden**, verwenden Sie die [Schnellaktionsschaltflächen](../widgets/quick-action.md#add-and-delete-actions). Gehen Sie zu *Menü → Bildschirm konfigurieren → Benutzerdefinierte Schaltflächen → Schnellaktion → Aktion hinzufügen → [Meine Orte](../widgets/quick-action.md#my-places)* und fügen Sie eine oder mehrere Schnellaktionsschaltflächen hinzu.

- (*Nur Android*) Um einen Aufzeichnungstrack zu **pausieren** oder zu **speichern**, verwenden Sie die System-[Benachrichtigung](#notifications) im Benachrichtigungsbereich Ihres Geräts.<br/><br/> ![stop-save-pause](@site/static/img/plugins/trip-recording/stop-save-pause_andr.png)


### Übersichtsfenster {#overview-screen}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Übersicht](@site/static/img/plugins/trip-recording/overview_screen_graphs_andr.png)  ![Übersicht](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aufzeichnung beenden in iOS](@site/static/img/plugins/trip-recording/start_rec_ios_3.png)  ![Aufzeichnung beenden in iOS](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_ios.png)

</TabItem>

</Tabs>

In OsmAnd handhaben die **Android**- und **iOS**-Versionen die Benutzeroberfläche zur Track-Aufzeichnung leicht unterschiedlich. Unter Android finden Sie ein dediziertes Menü für den Kontext *Track-Aufzeichnung*, während dies unter iOS in das Kontextmenü *Aktuell aufzeichnender Track* integriert ist.

Während Sie einen Track aufzeichnen, werden dynamische Diagramme generiert, die Echtzeit-Visualisierungsdaten über Ihre Reise liefern. Diese Diagramme können Informationen für die gesamte Route oder nur für ein ausgewähltes Segment anzeigen, je nach Ihrem Zoomlevel.
Hier ist, was Sie darin finden können:

- **Datenwerte**. Auf der rechten Seite des Diagramms befinden sich die ***höchsten***, ***niedrigsten*** und ***durchschnittlichen*** Werte für den sichtbaren Abschnitt des Tracks.

- **Diagramm für Schlüsselinformationen**:
    - ***Android***. Für die ***Y-Achse*** des Diagramms können Sie *bis zu zwei Parameter* aus allen verfügbaren Daten wie *Höhe*, *Steigung*, *Geschwindigkeit* und [Informationen von externen Sensoren](../plugins/external-sensors.md#trip-recording) auswählen. Für die ***X-Achse*** wählen Sie die Anzeige von *Entfernung*, *Zeit* oder *Tageszeit*.
    - ***iOS***. Die Parameter sind in den Registerkarten *Übersicht*, *Höhe* und *Geschwindigkeit* mit den entsprechenden Werten für die Y-Achse und *Entfernung* für die X-Achse organisiert.

- **Statistik**. Unter Android wird ein konstanter Satz von Statistikdaten unabhängig von den Diagrammeinstellungen angezeigt: *Entfernung*, *Zeitspanne*, *Aufstieg*, *Abstieg*, *Durchschnittsgeschwindigkeit*. Unter iOS hat jede Registerkarte, Übersicht, Höhe und Geschwindigkeit, einen anderen Datensatz.

Für eine detailliertere Ansicht können Sie das **Diagramm skalieren**:

- Verwenden Sie die [Zwei-Finger-Geste](../map/interact-with-map.md#gestures), um hinein- oder herauszuzoomen und sich auf bestimmte Intervalle zu konzentrieren.
- Tippen Sie auf einen beliebigen Punkt im Diagramm, um einen Marker anzuzeigen, der die genauen Werte für diesen Ort anzeigt.

| |
| ------------- |
|**Übersicht**-Registerkarte iOS (unter Android sind die Parameter der Y-Achse *Höhe*, *Geschwindigkeit* und der Parameter der X-Achse *Entfernung*). Diese Registerkarte zeigt ein Diagramm, das Änderungen der Geschwindigkeit und Höhe entlang der Länge des Tracks sowie wichtige Trackdetails darstellt. Track-Daten für iOS: *Entfernung*, *Zeitspanne*, *Startzeit* und *Endzeit*. Sie können sehen, wie dies in den Android- und iOS-Versionen dargestellt wird. |
| ![Daten](@site/static/img/plugins/trip-recording/graph_overview_andr.png)  ![Daten](@site/static/img/plugins/trip-recording/graph_overview_ios.png) |
| **Höhe**-Registerkarte iOS (unter Android sind die Parameter der Y-Achse *Höhe*, *Steigung* und der Parameter der X-Achse *Entfernung*). Diese Registerkarte konzentriert sich auf das Höhenprofil Ihres aufgezeichneten Tracks und bietet Einblicke in Höhenänderungen und Geländegradienten. Wichtige Metriken für iOS sind: *Durchschnittliche Höhe*, *Höhenbereich*, *Aufstieg* und *Abstieg*. Die folgenden Diagramme veranschaulichen die Unterschiede zwischen den Android- und iOS-Oberflächen. |
| ![Daten](@site/static/img/plugins/trip-recording/graph_altitude_andr.png)  ![Daten](@site/static/img/plugins/trip-recording/graph_altitude_ios.png) |
| **Geschwindigkeit**-Registerkarte iOS (unter Android ist der Parameter der Y-Achse *Geschwindigkeit* und der Parameter der X-Achse *Entfernung*). Die Registerkarte Geschwindigkeit hebt geschwindigkeitsbezogene Daten während des gesamten Tracks hervor. Für iOS enthält sie Informationen wie *Durchschnittsgeschwindigkeit*, *Höchstgeschwindigkeit*, *Zeit in Bewegung* und *Korrigierte Entfernung*. Die folgenden Screenshots zeigen, wie diese Daten auf beiden Plattformen angezeigt werden. |
| ![Daten](@site/static/img/plugins/trip-recording/graph_speed_andr.png)  ![Daten](@site/static/img/plugins/trip-recording/graph_speed_ios.png) |
| Unter **Android** können Sie weitere Kombinationen der verfügbaren Daten der Y-Achse und der Werte der X-Achse erstellen. |
| ![Daten](@site/static/img/plugins/trip-recording/graph_y-x-combinations_andr.png) |

:::info
Für weitere Details können Sie das [**Kontextmenü für Tracks**](../map/tracks/track-context-menu.md#options) erkunden, wo Sie verschiedene Track-bezogene Optionen wie Umbenennen, Löschen oder Hinzufügen von Wegpunkten verwalten können. Um anzupassen, wie Tracks auf der Karte angezeigt werden, besuchen Sie den Abschnitt [**Darstellung**](../map/tracks/appearance.md). Wenn Sie Ihrem aktuellen Track bestimmte Wegpunkte hinzufügen möchten, lesen Sie den Leitfaden [**Trackpunkte**](../map/tracks/track-context-menu.md#points--waypoints). Für alle Änderungen, wie z. B. das Umbenennen eines Tracks, verwenden Sie die Registerkarte [**Optionen**](https://osmand.net/docs/user/map/track-context-menu#options) im Kontextmenü für Tracks.
:::


### Auf der Karte anzeigen {#show-on-the-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![show_tr_onmap_andr_1](@site/static/img/plugins/trip-recording/show_tr_onmap_andr_1.png) ![Karte-Tracks konfigurieren Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![sshow_tr_onmap_ios_1](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_1.png) ![Karte-Tracks konfigurieren iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)
</TabItem>

</Tabs>

Verwalten Sie, welche Tracks auf Ihrer Karte sichtbar sind, indem Sie eine von zwei Optionen verwenden. Gehen Sie zu *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*<Translate ios="true" ids="shared_string_gpx_tracks"/> tab*](../map/tracks/index.md#my-places) und aktivieren Sie die Option *Auf Karte anzeigen* für jeden Track, den Sie anzeigen oder ausblenden möchten. Alternativ können Sie zu *<Translate android="true" ids="shared_string_menu,configure_map"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/>*](../map/tracks/index.md#configure-map) gehen, um die Sichtbarkeit aller Ihrer Tracks an einem Ort schnell anzupassen.


### Aufgezeichnete GPX-Datei {#recorded-gpx-file}

OsmAnd erfasst Ihre Reise in einer strukturierten [GPX-Datei](https://en.wikipedia.org/wiki/GPS_Exchange_Format) unter Verwendung einer Hierarchie von *Datei > Track > Segmenten > Punkten*. So funktioniert es:

- **Punkte** stellen einzelne Momente Ihres aufgezeichneten Pfades dar, die jeweils mit Attributen wie Koordinaten, Geschwindigkeit, Höhe und Richtung gekennzeichnet sind.
- Diese Punkte werden zu **Tracks** gruppiert, die Ihre gesamte Route darstellen.
- Wenn es eine Lücke in der Aufzeichnung gibt (z. B. wenn die Verfolgung pausiert wurde), beginnt der nächste Punkt nach der Pause ein neues **Segment** und markiert die Trennung in Ihrer Reise.
- Sowohl **Segmente** als auch **Tracks** werden visuell mit den Symbolen *Start* und *Ziel* auf der Karte dargestellt.

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
| `trkpt` | **Trackpunkt** stellt einen bestimmten geografischen Ort dar, der während Ihrer Aktivität erkannt wurde. Jeder Trackpunkt enthält Breiten- und Längenkoordinaten und bildet die Grundlage Ihres aufgezeichneten Pfades. |
| `trkseg` | **Tracksegment** gruppiert aufeinanderfolgende Trackpunkte, getrennt durch Pausen in der Aktivität, wie z. B. Pausen oder Stopps. Dies hilft, kontinuierliche Bewegung von Ruhezeiten innerhalb einer einzigen Aufzeichnung zu unterscheiden. |
| `lat` | **Breitengrad** gibt die Nord-Süd-Position eines Punkts auf der Erdoberfläche an. Es ist die eine Hälfte des Koordinatenpaares, das zur genauen Bestimmung Ihres Standorts verwendet wird. |
| `lon` | **Längengrad** gibt die Ost-West-Position an und ergänzt den Breitengrad, um einen Punkt auf der Erdkugel genau zu lokalisieren. Zusammen definieren Breitengrad und Längengrad Ihre genaue geografische Position. |
| `ele` | **Höhe** misst die Höhe eines Trackpunkts über dem Meeresspiegel, aufgezeichnet in Metern. Dies kann nützlich sein, um Höhenänderungen während Ihrer Aktivitäten, wie z. B. Wanderungen oder Radtouren, zu verfolgen. |
| `time` | **Zeitstempel** zeichnet das genaue Datum und die Uhrzeit auf, zu der ein Trackpunkt protokolliert wird. Dies ermöglicht Ihnen, die Dauer und den Zeitpunkt Ihrer Aktivität präzise zu verfolgen. |
| `hdop` | **Horizontal Dilution of Precision (HDOP)** ist ein Maß für die GPS-Genauigkeit, das den potenziellen Fehler in der Position aufgrund der Positionen der Satelliten widerspiegelt. Im Gegensatz zum Standard-HDOP verwenden OsmAnd-GPX-Tracks diesen Wert, um die horizontale Genauigkeit in Metern darzustellen. Bitte beachten Sie, dass diese Implementierung von typischen HDOP-Standards abweicht. [Erfahren Sie mehr](https://github.com/osmandapp/Osmand/issues/3445). |
| `speed` | **Geschwindigkeit** zeichnet Ihre Bewegungsgeschwindigkeit in Metern pro Sekunde auf. Sie gibt Aufschluss über Ihr Tempo während verschiedener Abschnitte Ihrer Aktivität. |
| `heading` | **Richtung** gibt die Richtung an, in die Ihr Fahrzeug oder die Vorderseite Ihres Geräts zeigt, gemessen in Grad. Sie unterscheidet sich vom Kurs, der der tatsächliche Bewegungspfad ist. Unterschiede können aufgrund externer Faktoren wie Wind, Strömungen oder Straßenbedingungen auftreten. [Mehr zur Richtung](https://en.wikipedia.org/wiki/Heading_(navigation)). |
| `speed_sensor` | **Geschwindigkeit** von [externen Sensoren](../plugins/external-sensors.md) erfasst Daten von verbundenen Sensoren und liefert präzisere Geschwindigkeitsinformationen, besonders nützlich beim Radfahren. Weitere Details finden Sie in der [Dokumentation zum GPX-Dateiformat](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `cadence` | **Trittfrequenz** misst die Anzahl der Pedalrevolutionen pro Minute, aufgezeichnet mithilfe von [externen Sensoren](../plugins/external-sensors.md). Dies ist besonders nützlich für Radfahrer, die ihre Treteffizienz überwachen und optimieren möchten. [Lesen Sie mehr](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `power` | **Fahrradleistung** quantifiziert die beim Treten erzeugte Leistung, die von [externen Sensoren](../plugins/external-sensors.md) erfasst wird. Dies ist eine wichtige Metrik für ernsthafte Radfahrer, die ihre Leistung messen möchten. [Erfahren Sie mehr](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `atemp` | **Lufttemperatur** zeichnet die Umgebungslufttemperatur während Ihrer Aktivität auf, gemessen mithilfe von [externen Sensoren](../plugins/external-sensors.md). Beachten Sie, dass die Wassertemperatur nicht unterstützt wird. [Details hier](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `hr` | **Herzfrequenz** überwacht Ihre Herzschläge pro Minute mithilfe von Daten von verbundenen [Sensoren](../plugins/external-sensors.md). Diese Informationen können für die Verfolgung Ihrer Herz-Kreislauf-Leistung während des Trainings entscheidend sein. [Erfahren Sie mehr](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |


## Aufnahmeeinstellungen {#recording-settings}

Bevor Sie mit der Aufzeichnung Ihrer Touren beginnen, müssen Sie das **Plugin zur Touraufnahme** ordnungsgemäß für eine optimale Leistung konfigurieren.

- **Profilspezifische Einstellungen**. Jedes Profil in der App kann eigene, einzigartige Einstellungen zur Touraufnahme haben. Dadurch können Sie das Aufnahmeverhalten präzise an Ihre Aktivität anpassen, z. B. Fahren, Radfahren oder sogar Nordic Walking, was möglicherweise unterschiedliche Konfigurationen erfordert.

- **Aufnahme-Parameter anpassen**. Die Aufnahmeeinstellungen können je nach Bewegungsart variieren. Zum Beispiel erfordert das Fahren langer Strecken möglicherweise eine geringere Aufzeichnungsfrequenz, während Wandern oder Spazierengehen von häufigeren Updates profitieren könnte.

- **Präzise Standortdaten**. Um sicherzustellen, dass Ihre Aufzeichnungen reibungslos und für die zukünftige Verwendung nutzbar sind, können Sie anpassen, wie Sie Standortpunkte erfassen. Dies könnte das Anpassen der Aufzeichnungsfrequenz, des Datenformats (wie die Anzahl der Punkte pro Entfernungseinheit) oder des Abstands zwischen aufgezeichneten Punkten umfassen.

- **Globale Einstellungen**. Die Einstellungen zur Touraufnahme werden pro Profil konfiguriert, die Sie in den globalen [Einstellungen](../personal/global-settings.md) der App verwalten können. Bevor Sie das Plugin zur Touraufnahme anpassen, wählen Sie das Profil, das Sie konfigurieren möchten, im Abschnitt [Profile](../personal/profiles.md) aus. Von dort aus navigieren Sie zu den Einstellungen des Profils, um auf die Optionen zur Touraufnahme zuzugreifen.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Konfigurieren der Touraufnahme in Android](@site/static/img/plugins/trip-recording/recording_sett_1_andr.png)  ![Konfigurieren der Touraufnahme in Android](@site/static/img/plugins/trip-recording/recording_sett_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Konfigurieren der Touraufnahme in iOS](@site/static/img/plugins/trip-recording/recording_sett_1_ios.png)  ![Konfigurieren der Touraufnahme in iOS](@site/static/img/plugins/trip-recording/recording_sett_2_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschreibung |
|---|---|
| **Akkuladeoptimierungsdialog** (*Android*) | Öffnet die [Android-Akkuladeoptimierungseinstellungen](#battery-optimization). Tippen Sie auf *Nicht mehr fragen*, wenn Sie nicht erneut aufgefordert werden möchten. |
| **Startdialog anzeigen** (*Android*) | Aktiviert einen Dialog, in dem Sie Einstellungen konfigurieren können, bevor Sie mit der Aufnahme beginnen. Wenn deaktiviert, startet die Aufnahme automatisch. |
| **Track während der Navigation automatisch aufzeichnen** | Zeichnet den Track während der Navigation automatisch auf und speichert ihn in der Registerkarte *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*. <br />*Hinweis*: Die Track-Aufzeichnung verbraucht Akku und läuft im Hintergrund weiter, auch wenn der Bildschirm ausgeschaltet ist. |
| **Allgemeines Protokollierungsintervall** | Definiert, wie oft Standortpunkte aufgezeichnet werden. Die Standardeinstellung ist 5 Sekunden. Sie wird mit dem *Widget zur Touraufnahme* aktiviert. |
| **Mindestverschiebung** | Ein Filter, um die Aufzeichnung von Punkten bei geringer oder keiner Bewegung zu vermeiden. Dies hilft, Datenrauschen zu reduzieren. <ul><li>*Nebenwirkungen*: Ruhezeiten werden möglicherweise nicht aufgezeichnet, und kleine Bewegungen werden möglicherweise ignoriert. Dies kann die Nachbearbeitungsdaten reduzieren, kann aber auch verhindern, dass GPS-Fehler protokolliert werden.</li><li>*Empfehlung*: Stellen Sie die Verschiebung auf 5 Meter ein, wenn Sie weniger kleine Details in Ihren Aufzeichnungen wünschen.</li></ul> |
| **Mindestgenauigkeit** | Filtert Standortpunkte unterhalb eines minimalen Genauigkeitsindikatorschwellenwerts heraus, wie vom Gerät gemeldet. <ul><li>*Nebenwirkungen*: Punkte in Bereichen mit schlechtem Signal (unter Brücken, Bäumen, zwischen Gebäuden oder bei bestimmten Wetterbedingungen) können fehlen.</li><li>*Empfehlung*: Wenn Sie unsicher sind, ist es möglicherweise besser, diesen Filter zu deaktivieren, um fehlende Daten zu vermeiden.</li></ul><details><summary>*Bemerkung*</summary>Angenommen, das GPS wurde kurz vor der Aufnahme ausgeschaltet. In diesem Fall kann der erste gemessene Punkt eine reduzierte Genauigkeit aufweisen, daher ist es besser, eine Weile zu warten, bevor der Punkt aufgezeichnet wird, oder den besten von 3 aufeinanderfolgenden Punkten aufzuzeichnen.</details> |
| **Mindestgeschwindigkeit** | Legt einen Schwellenwert fest, um Punkte zu ignorieren, die unter einer bestimmten Geschwindigkeit aufgezeichnet wurden. <ul><li>*Nebenwirkungen*: Abschnitte, in denen die Geschwindigkeit unter einen bestimmten Schwellenwert fällt, werden nicht aufgezeichnet.</li><li>*Empfehlung*: Verwenden Sie stattdessen den Filter *Mindestverschiebung*, da dieser bessere Ergebnisse liefern kann, ohne wichtige Daten zu verlieren.</li></ul><details><summary>*Bemerkung*</summary>Versuchen Sie zunächst die Bewegungserkennung über den Filter für die Mindestprotokollierungsverschiebung (B), dies kann bessere Ergebnisse liefern, und Sie verlieren weniger Daten. Wenn Ihre Tracks bei niedrigen Geschwindigkeiten weiterhin verrauscht sind, versuchen Sie hier Werte ungleich Null. Bitte beachten Sie, dass einige Messungen überhaupt keinen Geschwindigkeitswert melden (einige netzwerkbasierte Methoden), in diesem Fall würden Sie nichts aufzeichnen.<br/><br/>Geschwindigkeit > 0 Prüfung: Die meisten GPS-Chipsätze melden nur dann einen Geschwindigkeitswert, wenn der Algorithmus feststellt, dass Sie in Bewegung sind, und keinen, wenn Sie es nicht sind. Daher verwendet die Einstellung > 0 in diesem Filter in gewisser Weise die Bewegungserkennung des GPS-Chipsatzes. Aber selbst wenn hier zum Zeitpunkt der Aufzeichnung nicht gefiltert wird, verwenden wir diese Funktion in unserer GPX-Analyse immer noch, um die korrigierte Entfernung zu bestimmen, d.h. der in diesem Feld angezeigte Wert ist die Entfernung, die während der Bewegung aufgezeichnet wurde.</details> |
| **Aufzeichnungen nach Lücke automatisch aufteilen** | Teilt Tracks automatisch basierend auf Zeitlücken zwischen aufgezeichneten Punkten auf. <ul><li>Ein neues Segment beginnt nach einer Lücke von 6 Minuten.</li><li>Ein neuer Track beginnt nach einer Lücke von 2 Stunden.</li><li>Eine neue Datei beginnt, wenn sich das Datum ändert.</li><li>Lücken können durch GPS-Signalverlust, niedrige Geschwindigkeit oder Konfigurationseinstellungen entstehen.</li></ul><details><summary>*Bemerkung*</summary>Eine Lücke wird identifiziert, wenn keine Punkte aufgezeichnet werden. Dies kann entweder passieren, weil der Standort nicht erkannt wird oder weil er erkannt, aber nicht aufgezeichnet wird. Mehrere Faktoren können dies verursachen, darunter schwache GPS-Signale aufgrund schlechter Wetterbedingungen oder die Bewegungsgeschwindigkeit, die unter den konfigurierten Schwellenwert fällt. In solchen Fällen, obwohl das Gerät den Standort erkennen mag, wird er nicht aufgezeichnet.<br/><br/>Diese Lücken in den aufgezeichneten Daten können die Erstellung eines neuen Segments innerhalb desselben Tracks, eines neuen Tracks in derselben Datei oder einer neuen GPX-Datei innerhalb einer einzigen Aufzeichnung auslösen. Dies wird innerhalb einer einzigen Start/Stopp-Aufzeichnungssitzung verwaltet.</details> |
| **Standalone-Protokollierung verhindern** (*Android*) | Pausiert die Track-Aufzeichnung, wenn die OsmAnd-App beendet wird (über *aktuelle Apps*). Die Hintergrundanzeige wird im Android-Benachrichtigungsbereich nicht angezeigt. |
| **Richtung einbeziehen** | Zeichnet die Richtung (Bewegungsrichtung) für jeden Punkt in der GPX-Datei auf. Die Richtung ist die Richtung, in die das Gerät zeigt, die sich aufgrund externer Faktoren wie Wind oder Schleudern von der Bewegungsrichtung unterscheiden kann. |
| **Aktivität** (*Android*) | Die Option ermöglicht es Ihnen, einen [Aktivitätstyp](../map/tracks/track-context-menu.md#track-information-activity) für ein Profil vorzuwählen, der dann automatisch auf alle aufgezeichneten Tracks angewendet wird. |
| **Externe Sensoren** <br/> *Plugin muss aktiviert sein* | Daten von [externen Sensoren](../plugins/external-sensors.md#trip-recording) wie *<Translate android="true" ids="map_widget_ant_heart_rate"/>* oder *<Translate android="true" ids="map_widget_ant_bicycle_speed"/>* werden in der GPX-Datei protokolliert. *Entfernungsdaten* werden unter Android oder iOS nicht aufgezeichnet. Wird nur angezeigt, wenn das [Plugin für externe Sensoren](../plugins/external-sensors.md) aktiviert ist. |
| **Fahrzeugmetriken** (*Android*) <br/> *Plugin muss aktiviert sein* | Daten vom [OBD-II-Scanner](../plugins/vehicle-metrics.md#trip-recording) werden in der GPX-Datei protokolliert. Wird nur angezeigt, wenn das [Plugin für Fahrzeugmetriken](../plugins/vehicle-metrics.md) aktiviert ist. <br />*Hinweis*: Sie können aus der Liste auswählen, welche Metriken in der GPX-Datei aufgezeichnet werden sollen: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_trip_recording,shared_string_settings"/>* |
| **Track-Speicherordner** (*Android*) | Definiert, wo in der Registerkarte *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>* aufgezeichnete Tracks gespeichert werden. Zu den Optionen gehören das Speichern aller Tracks im Ordner Rec oder die Organisation nach Monat, z. B. Rec/jjjj-mm. |
| **Benachrichtigung** | Steuert die Anzeige einer [Systembenachrichtigung zur Touraufnahme](#notifications) im Benachrichtigungsbereich des Geräts, die es Ihnen ermöglicht, Touren aufzuzeichnen. |
| **Online-Verfolgung** (*Android*) | Ermöglicht die Echtzeit-Verfolgung Ihres Standorts durch Senden aufgezeichneter Punkte an eine angegebene URL. Das Verfolgungsintervall bestimmt, wie oft Punkte gesendet werden, und der Zeitpuffer speichert Punkte, wenn keine Internetverbindung besteht.<details><summary>*Bemerkung*</summary>Wenn diese Option aktiviert ist und die Track-Aufzeichnung läuft, wird das Entfernungs/Start-Stopp (REC)-Widget **grün** statt **rot**, was anzeigt, dass jeder aufgezeichnete Punkt an eine angegebene URL übertragen wird. Im Feld **Webadresse** können Sie die URL im folgenden Parameterformat eingeben:<ul><li>`lat={0}`: Breitengrad</li><li>`lon={1}`: Längengrad</li><li>`timestamp={2}`: Zeitstempel (Unixzeit)</li><li>`hdop={3}`: Horizontale Genauigkeitsverdünnung</li><li>`altitude={4}`: Höhe</li><li>`speed={5}`: Geschwindigkeit</li><li>`bearing={6}`: Peilung (Bewegungsrichtung)</li><li>`eta={7}`: Geschätzte Ankunftszeit (Unixzeit)</li><li>`etfa={8}`: Geschätzte Zeit bis zum ersten Zwischenpunkt oder Zielpunkt (Unixzeit)</li><li>`eda={9}`: Geschätzte Entfernung bis zur Ankunft oder einem Marker (in Metern)</li><li>`edfa={10}`: Geschätzte Entfernung bis zum ersten Zwischenpunkt oder Zielpunkt (in Metern)</li></ul>Sie können das **Verfolgungsintervall** festlegen, um anzugeben, wie oft Standortpunkte gesendet werden, mit Optionen von 0 Sekunden bis 5 Minuten. Zusätzlich bestimmt der Parameter **Zeitpuffer**, wie lange Standortpunkte gespeichert werden, wenn keine Internetverbindung besteht, um sicherzustellen, dass Daten gespeichert und übertragen werden, wenn die Verbindung wiederhergestellt ist.</details> |
| **Tracks** | Ein schneller Verweis auf den Ordner, in dem Tracks gespeichert sind, in der Registerkarte *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*. |
| **Plugin-Einstellungen auf Standard zurücksetzen** | Setzt alle Einstellungen zur Touraufnahme für das aktuelle Profil auf ihre Standardwerte zurück. |
| **Von einem anderen Profil kopieren** (*Android*) | Kopiert die Einstellungen zur Touraufnahme von einem Profil in ein anderes. |


### Akkuladeoptimierung {#battery-optimization}

<InfoAndroidOnly />

![Track auf der Karte iOS](@site/static/img/plugins/trip-recording/battery_2_andr.png)  ![Track auf der Karte iOS](@site/static/img/plugins/trip-recording/battery_1_andr.png)

Diese Funktion ermöglicht es Ihnen, die Akkuladeoptimierungseinstellungen für OsmAnd zu verwalten, um einen unterbrechungsfreien Zugriff auf Ihren Standort zu gewährleisten, auch wenn die App im Hintergrund während der Navigation oder Track-Aufzeichnung läuft.

- **Akkuladeoptimierungseinstellungen**. Öffnet die Android-Einstellungen, in denen Sie die Akkuladeoptimierungseinstellungen für OsmAnd ändern können. [Weitere Details hier](../troubleshooting/general.md#optimizing-battery-consumption).
- **Nicht mehr fragen**. Schließt das Dialogfeld dauerhaft, sodass es nicht mehr angezeigt wird.
- **Schließen**. Schließt das Dialogfeld vorübergehend, es wird jedoch beim nächsten Mal wieder angezeigt, wenn die Akkuladeoptimierung Aufmerksamkeit benötigt.


### Benachrichtigungen {#notifications}

![Benachrichtigung zur Touraufnahme](@site/static/img/plugins/trip-recording/trip_rec_notific_1_andr.png)

Wenn [Benachrichtigung](#recording-settings) in den Plugin-Einstellungen aktiviert ist, werden Benachrichtigungen zur Touraufnahme immer im Systembenachrichtigungsbereich angezeigt, wenn die Aufnahme aktiv ist. Diese Benachrichtigung stellt sicher, dass der Aufnahmeprozess nicht vom System unterbrochen wird, und sie kann während einer aktiven Aufnahme nicht deaktiviert werden.

- Der Benachrichtigungsbereich öffnet sich, wenn Sie von oben nach unten über den Bildschirm wischen, und schließt sich, wenn Sie nach oben wischen. Diese Nachrichten informieren Sie über Aktionen wie das Starten/Stoppen der Touraufnahme, insbesondere wenn die automatische Aufnahme während der Navigation aktiviert ist.
- Benachrichtigungen bleiben sichtbar, unabhängig davon, ob die App im Vordergrund, Hintergrund oder geschlossen läuft. Sie können die alte Benachrichtigung manuell löschen, wenn sie nicht mehr benötigt wird, aber dies stoppt die laufende Aufnahme nicht.

**Wichtiger Hinweis**.

Dieses Verhalten wird von Android für jeden Vordergrunddienst, wie die Touraufnahme, benötigt, um für Sie sichtbar zu bleiben.

- Wenn die Benachrichtigung entfernt wird, stoppt Android die Aufnahme automatisch. Sie können die Einstellung [Standalone-Protokollierung verhindern](#recording-settings) verwenden.
- Die Einstellung **Benachrichtigung** in OsmAnd beeinflusst, ob die Benachrichtigungsleiste eine Verknüpfung zum Starten einer Aufnahme anzeigt, wenn keine Aufnahme aktiv ist. Sie steuert **nicht** die Sichtbarkeit der Benachrichtigung während einer aktiven Aufnahme.

**Zusätzliche Android-Optionen**.

![Benachrichtigung zur Touraufnahme](@site/static/img/plugins/trip-recording/trip_rec_notification_andr.png)

- In den ***Android-Einstellungen → Benachrichtigungen und Statusleiste → Benachrichtigungen auf Sperrbildschirm*** können Sie OsmAnd aus der App-Liste entfernen, um zu verhindern, dass Benachrichtigungen auf dem Sperrbildschirm erscheinen und eine versehentliche Bildschirmaktivierung vermieden wird. Dies hat keinen Einfluss auf die Track-Aufzeichnung. Benachrichtigungen werden weiterhin im regulären Benachrichtigungsbereich angezeigt.
- **OsmAnd** kann auch unter ***Datenschutz → Spezielle Berechtigungen → Bildschirm einschalten*** erscheinen. Wenn Sie verhindern möchten, dass der Bildschirm beim Erscheinen einer Benachrichtigung eingeschaltet wird, versuchen Sie, OsmAnd aus dieser Liste zu entfernen.

<!--
- OsmAnd is not listed under **Privacy** *→* **Special Permissions** → **Alarms and reminders**.
-->

**Abzeichenbenachrichtigung**.

![Benachrichtigung zur Touraufnahme](@site/static/img/plugins/trip-recording/trip_rec_notification_badge_andr.png)

Das App-Symbol-Abzeichen erscheint neben dem OsmAnd-Symbol, wenn die Track-Aufzeichnung aktiv ist.

- Dieses Symbol verschwindet, wenn die Track-Aufzeichnung abgeschlossen ist. Um zu überprüfen, ob eine Aufzeichnung aktiv ist, können Sie zu *Menü → Meine Orte → Registerkarte Tracks* gehen oder auf das Widget tippen, um die Aufzeichnung zu verwalten.
- Wenn keine Aufzeichnung läuft und das Abzeichen immer noch angezeigt wird, bedeutet dies möglicherweise, dass eine Nachricht von OsmAnd im Benachrichtigungsfeld des Geräts hinterlassen wurde.
- Um Abzeichen in den Android-Einstellungen zu deaktivieren, gehen Sie zu den Geräte-*Einstellungen → Apps → OsmAnd → Benachrichtigungen* und deaktivieren Sie die Option zur Abzeichenanzeige für diese App.


## Widgets {#widgets}

Widgets ermöglichen es Ihnen, wichtige Informationen zur Touraufnahme direkt auf dem Bildschirm anzuzeigen, wie z. B. *Entfernung*, *Dauer*, *Aufstieg* und *Abstieg*.

Um die *Widgets zur Touraufnahme* verwenden zu können, müssen Sie alle folgenden Einstellungen vornehmen:

1. [Aktivieren Sie das Plugin](../start-with/first-steps.md#how-to-configure-plugins).
2. Konfigurieren Sie die Einstellungen zur Touraufnahme für das erforderliche [Profil](../personal/profiles.md).
3. Fügen Sie die erforderlichen **Widgets zur Touraufnahme** zum Bildschirm hinzu. Beachten Sie, dass diese Konfiguration **profilspezifisch** ist.


### Aufnahme-Widget hinzufügen {#add-recording-widget}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wählen Sie ein Panel → <Translate android="true" ids="map_widget_monitoring"/>*

![Entfernungs/Start-Stopp-Widget hinzufügen in Android](@site/static/img/plugins/trip-recording/add_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Wählen Sie ein Panel → <Translate android="true" ids="map_widget_monitoring"/>*

![Widgets zur Aufnahme hinzufügen in iOS](@site/static/img/plugins/trip-recording/add_recording_widgets_ios.png)

</TabItem>

</Tabs>

Das [Widget zur Touraufnahme](../widgets/info-widgets.md#trip-recording-widgets) bietet eine einfache Möglichkeit, Ihren Aufnahmestatus zu überwachen und schnell auf Aufnahmeeinstellungen und Details zuzugreifen. Dieses Widget wird automatisch zu Ihrem Bildschirm hinzugefügt, wenn das Plugin zur Touraufnahme aktiviert ist.

Um Ihre Benutzeroberfläche anzupassen, können Sie das Widget zur Touraufnahme und [andere Widgets](../plugins/trip-recording#duration-uphill-downhill) über das Menü Bildschirm konfigurieren hinzufügen oder entfernen.


### Entfernung (Start-Stopp) {#distance-start-stop}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widget zur Touraufnahme](@site/static/img/plugins/trip-recording/trip_rec_widgets_andr.png)
![Aufzeichnung beenden in Android](@site/static/img/plugins/trip-recording/distance_start_rec_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget zur Touraufnahme](@site/static/img/widgets/tr_rec_wid_conf_scr.png) ![Widget zur Touraufnahme](@site/static/img/widgets/tr_rec_wid_conf_scr_2.png)

</TabItem>

</Tabs>

Wenn Widgets auf der Karte angezeigt werden, zeigt das Tippen auf eines davon zusätzliche Track-Details an und ermöglicht die Interaktion mit der Aufzeichnung.
Das Widget *Entfernung* zeigt die Gesamtdistanz Ihrer aktuellen aufgezeichneten Tour an und dient als Hauptschnittstelle zur Verwaltung Ihrer Aufzeichnungen. Durch Tippen darauf wird der [Dialog zur Touraufnahme](#start-a-dialog) geöffnet, in dem Sie Ihre Track-Informationen starten, stoppen und detailliert anzeigen können.

- Das Widget wird automatisch hinzugefügt, wenn das *Plugin zur Touraufnahme* aktiviert ist, kann aber über das [Menü Bildschirm konfigurieren](../widgets/configure-screen.md#configure-screen-menu) ausgeblendet werden.
- Wenn die Option *Startdialog anzeigen* in den Einstellungen des Plugins zur Touraufnahme deaktiviert ist, öffnet das Tippen auf das aktive Widget dennoch das Dialogfeld *Touraufnahme*, sodass Sie auf weitere Optionen und Informationen zugreifen können.

Zusätzlich zum Widget *Entfernung/Start-Stopp* enthält das **Plugin zur Touraufnahme** drei weitere Widgets: *Dauer*, *Aufstieg* und *Abstieg*. Diese liefern zusätzliche Informationen über Ihre Tour und helfen Ihnen, den Fortschritt in Echtzeit zu verfolgen.

| |
|-----------|
| **Entfernung/Start-Stopp**. Dieses Widget zeigt die Entfernung Ihrer laufenden Touraufnahme an. Es wird automatisch hinzugefügt, wenn das Plugin zur Touraufnahme aktiviert ist, kann aber über das Menü Bildschirm konfigurieren ausgeblendet werden. Das Widget verfügt über drei verschiedene Zustände: *Aufnahme*, *Pausiert* und *Inaktiv*, die jeweils den aktuellen Status Ihrer Touraufnahme anzeigen. |
| ![Widget zur Touraufnahme (REC)](@site/static/img/widgets/tr_rec_wid_rec.png) |
| Um den [Dialog zur Touraufnahme](#start-a-dialog) beim Tippen auf ein inaktives Widget zu öffnen, aktivieren Sie die Option *Startdialog anzeigen* in den Einstellungen des Plugins zur Touraufnahme. Wenn die Option deaktiviert ist, startet die Aufnahme sofort nach dem Tippen auf das Widget, ohne den Dialog zu öffnen. |


### Dauer, Aufstieg, Abstieg {#duration-uphill-downhill}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

</TabItem>

<TabItem value="ios" label="iOS">

</TabItem>

</Tabs>

| |
|------------|
|**Dauer**. Zeigt die Gesamtdauer der aktuellen Touraufnahme in Stunden und Minuten an. |
|![Widgets](@site/static/img/widgets/tr_rec_wid_dur.png)|
|**Aufstieg**. Zeigt den kumulierten Höhengewinn für die aktuelle Touraufnahme an. |
|![Widgets](@site/static/img/widgets/tr_rec_wid_up.png)|
|**Abstieg**. Zeigt den gesamten Abstieg an, der während der aktuellen Touraufnahme angesammelt wurde. |
|![Widgets](@site/static/img/widgets/tr_rec_wid_dow.png)|

Wenn Sie mehrere Widgets ausgewählt haben – *Dauer*, *Aufstieg* oder *Abstieg* – können Sie für jedes das gleiche Dialogfeld öffnen, ohne wechseln oder schließen zu müssen. Diese einheitliche Benutzeroberfläche erleichtert die nahtlose Anzeige und Verwaltung aller zugehörigen Informationen.


## Verwandte Artikel {#related-articles}

- [Kontextmenü der Karte](../map/map-context-menu.md)
- [Track auf Karte anzeigen](../map/tracks/index.md)
- [Auf Karte analysieren](../map/tracks/index.md#analyze-track-on-map)
- [Kontextmenü für Tracks](../map/tracks/track-context-menu.md)
- [Navigation nach Track](../navigation/setup/gpx-navigation.md)

### Häufige Probleme und Lösungen {#common-issues-and-solutions}

- Die Touraufnahme startet nicht.
    - Stellen Sie sicher, dass das **Plugin zur Touraufnahme** aktiviert ist: *Menü → Plugins → Touraufnahme → Aktivieren*.
    - Überprüfen Sie, ob die Einstellungen korrekt sind: *Menü → Profil konfigurieren → Plugin-Einstellungen → Touraufnahme*.
    - Wenn die Aufnahme immer noch nicht startet, starten Sie die App neu und versuchen Sie es erneut.

- Die Touraufnahme stoppt unerwartet.
    - Überprüfen Sie, ob die *Akkuladeoptimierungseinstellungen Ihres Geräts* die Aufnahme stoppen. Einige Geräte können Hintergrundaktivitäten pausieren, um Strom zu sparen. Gehen Sie zu *Geräteeinstellungen → Akku*.

- Die aufgezeichnete Entfernung stimmt nicht mit der tatsächlichen Entfernung überein.
    - Überprüfen Sie, ob GPS aktiviert ist und ein aktives Signal hat.
    - Reduzieren Sie den Schwellenwert für die GPS-Genauigkeit: *Menü → Profil konfigurieren → Touraufnahme → Mindestgenauigkeit*.

- Aufgezeichnete Tracks sind verrauscht. [(prüfen)](../troubleshooting/track-recording-issues.md#recorded-tracks-are-noisy).
- Aufgezeichnete Tracks haben Lücken. [(prüfen)](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps)
- Wie man die zurückgelegte Strecke verfolgt. [(prüfen)](../troubleshooting/track-recording-issues.md#how-to-track-traveled-distance)

Weitere Informationen zur Fehlerbehebung finden Sie unter: [Fehlerbehebung bei der Track-Aufzeichnung](https://osmand.net/docs/user/troubleshooting/track-recording-issues).

> *Zuletzt aktualisiert: Januar 2025*