---
source-hash: bbd8a4068925d6a30bba06c2e75c496a884452d7e338c2615117b76552e9cc2c
sidebar_position: 15
title:  Reiseaufzeichnung
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


## Übersicht {#overview}

Das **Reiseaufzeichnungs-Plugin** ist ein unverzichtbares Werkzeug zur Erfassung Ihrer Routen, Bewegungen und Trainingseinheiten. Diese Funktion ermöglicht es Ihnen nicht nur, Ihre Reisen aufzuzeichnen, sondern auch Ihre Tracks einfach wiederzuverwenden, zu ändern, zu aktualisieren und mit anderen zu teilen.  

Mit dem *Reiseaufzeichnungs-Plugin* können Sie neue Tracks erstellen, aufgezeichnete direkt auf der Karte anzeigen und bestehende Aufzeichnungen verwalten. Es bietet wertvolle Einblicke in Ihre Reisen, wie Geschwindigkeit, Höhenänderungen, Geländedetails und Daten von externen Sensoren. Das Plugin zeichnet Ihre Route auf und ermöglicht eine detaillierte Analyse und das Teilen nach Ihrer Reise.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Aufgezeichnete Reise in Android](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aufgezeichnete Reise in iOS](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_ios_2.png)

</TabItem>

</Tabs>


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Um mit der Aufzeichnung von Tracks zu beginnen, müssen Sie die folgenden Einstellungen vornehmen:

1. [Aktivieren](../plugins/index.md#enable--disable) Sie das **Reiseaufzeichnungs-Plugin**.  
2. [Konfigurieren](#recording-settings) Sie die **Aufnahmeeinstellungen** für das gewünschte [Profil](../personal/profiles.md).  
3. [Fügen](#widgets) Sie **Reiseaufzeichnungs-Widgets** zum Bildschirm hinzu (optional).
4. [Verwalten](../map/tracks/appearance.md) Sie Tracks auf der Karte (optional).


## Neue Track-Aufzeichnung {#new-track-recording}

![Distanz/Start-Stopp-Widget in iOS](@site/static/img/plugins/trip-recording/create_new_track_and-1.png) ![Distanz/Start-Stopp-Widget in Android](@site/static/img/plugins/trip-recording/create_new_track_ios-1.png)

Mit dem Reiseaufzeichnungs-Plugin in OsmAnd können Sie ganz einfach mit der Aufzeichnung Ihres Tracks beginnen, indem Sie eine Vielzahl von praktischen Optionen nutzen. So können Sie Ihre Reise beginnen:

- [Distanz/Start-Stopp-Widget](#distance-start-stop) — Zur Aktivierung der Aufzeichnung verwenden.

- [<Translate android="true" ids="start_recording"/>](../personal/myplaces.md#tracks) — Tippen Sie auf die Schaltfläche im Tab *Hauptmenü <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.

- [Schnellaktionsschaltflächen](../widgets/quick-action.md#add-and-delete-actions) — Um die Aufzeichnung einer Reise zu starten, gehen Sie zu *Menü → Bildschirm konfigurieren → Benutzerdefinierte Schaltflächen → Schnellaktion → Aktion hinzufügen → Meine Orte* und wählen Sie [Start / Pause: Reiseaufzeichnung](../widgets/quick-action.md#my-places).

- *Nur Android*:
    - Gehen Sie zu *Hauptmenü <Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*.

    - [Systembenachrichtigung](#notifications) — Im Benachrichtigungsbereich Ihres Geräts verwenden.

    - [Anwendungsstarter](#launcher-android) — Zum Starten der Aufzeichnung verwenden.  

**Empfehlungen:**

- [Genauer Standort](../start-with/first-steps.md#permission-to-access-the-location) — Stellen Sie für eine genaue Track-Aufzeichnung sicher, dass OsmAnd diese Berechtigung hat.

- [Fehlerbehebung](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps) — **iOS-Geräte** können manchmal Apps, die im Hintergrund laufen, vorübergehend **anhalten oder stoppen**, was die Track-Aufzeichnung unterbrechen könnte.

- **Standortquelle** (*Nur Android*) — Passen Sie die Einstellungen in OsmAnd an, um den am besten geeigneten GPS-Anbieter für genaue Aufzeichnungen auszuwählen. [Erfahren Sie hier mehr](../personal/global-settings.md#location-source).


### Startdialog {#start-a-dialog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Der Startdialog öffnet sich, wenn die Option **<Translate android="true" ids="show_start_dialog"/>** im Einstellungsbereich des Startdialogfelds aktiviert ist.

![Aufzeichnung in Android starten](@site/static/img/plugins/trip-recording/start_rec_andr_1.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Der Startdialog öffnet sich, wenn die Option **<Translate ios="true" ids="track_interval_remember"/>** nicht aktiviert ist.

![Aufzeichnung in iOS starten](@site/static/img/plugins/trip-recording/start_rec_ios_1.png)

</TabItem>

</Tabs>

- **Aufzeichnungsintervall** (*Android/iOS*). Diese Einstellung steuert, wie oft die App Daten vom GPS-Sensor anfordert, um neue Punkte auf Ihrem Track zu markieren. Durch Anpassen des Intervalls können Sie ein Gleichgewicht zwischen Track-Detail und Akkuverbrauch herstellen. Ein kürzeres Intervall führt zu detaillierteren Tracks, aber einem höheren Akkuverbrauch, während ein längeres Intervall den Akku schont, aber die Genauigkeit des Tracks verringert.

- **Liniensymbol** (*Android*). Tippen Sie auf dieses Symbol, um auf die [Optionen zur Track-Darstellung](../map/tracks/appearance.md) zuzugreifen. Hier können Sie anpassen, wie Ihr Track auf der Karte erscheint, einschließlich Linienfarbe, -dicke und -stil. Sobald Sie einen Track mit einem angepassten Erscheinungsbild speichern, bleiben diese Einstellungen für zukünftige Aufzeichnungen erhalten und gewährleisten so Konsistenz bei jeder Ansicht oder erneuten Aktivierung des Tracks.

- **Einstellungsmenü** (*Android*). Greifen Sie auf dieses Menü zu, um Ihre Aufnahmeeinstellungen zu verfeinern. Eine detaillierte Übersicht finden Sie im Abschnitt [Einstellungen für die Reiseaufzeichnung](#recording-settings).

- **Meine Auswahl merken** (*iOS*). Wenn aktiviert, startet die Track-Aufzeichnung automatisch, ohne nach zusätzlichen Einstellungen oder Bestätigungen zu fragen. Wenn Sie die Aufnahmeeinstellungen vor dem Starten eines neuen Tracks ändern möchten, starten Sie das Reiseaufzeichnungs-Plugin neu, damit das Einstellungsmenü wieder erscheint.


### Anwendungsstarter (Android) {#launcher-android}

![Kontextmenü des Symbols](@site/static/img/plugins/trip-recording/launcher_icon_andr.png) ![Symbol für Aufzeichnung starten](@site/static/img/plugins/trip-recording/and_trip_rec_icon.png)

Sie können eine neue Track-Aufzeichnung schnell direkt vom Bildschirm Ihres Android-Geräts aus starten, indem Sie das Kontextmenü des OsmAnd-App-Symbols verwenden.

- **Langes Tippen** auf das OsmAnd-App-Symbol öffnet das Kontextmenü, in dem Sie die Option **Aufzeichnung starten** finden.

- Tippen Sie auf die Option **Aufzeichnung starten**, um die OsmAnd-App mit den auf dem Bildschirm angezeigten [Track-Aufzeichnungseinstellungen](#overview-screen) zu starten.

- **Langes Tippen** auf die Option **Aufzeichnung starten** im Kontextmenü des App-Symbols, um eine Verknüpfung für einen schnelleren Zugriff hinzuzufügen.

Während die Track-Aufzeichnung aktiv ist, erscheint ein Benachrichtigungs-Badge in der Ecke des OsmAnd-App-Symbols, das anzeigt, dass die Aufzeichnung läuft. Weitere Details zur Verwaltung dieser Benachrichtigung finden Sie im Abschnitt [Benachrichtigung](#notifications).


## Aktuelle Track-Aufzeichnung {#current-track-recording}

Für *Stopp / Speichern / Pause*:

- Um die Aufzeichnung zu **stoppen**, tippen Sie auf die entsprechende Schaltfläche im Dialogfeld des [Distanz/Start-Stopp-Widgets](#distance-start-stop).

- (*Nur Android*) Um die Aufzeichnung zu **stoppen**, tippen Sie auf den Hauptmenüpunkt *Reiseaufzeichnung*.

- Um einen aufgezeichneten Track zu **stoppen** oder zu **speichern**, gehen Sie zu *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/> Tab*](../personal/myplaces.md#tracks) und tippen Sie auf die entsprechende Schaltfläche im Feld *Aktuell aufgenommener Track*.

- Um ein neues Segment zu **speichern, zu pausieren, zu starten** oder die Aufzeichnung zu **beenden**, verwenden Sie die [Schnellaktionsschaltflächen](../widgets/quick-action.md#add-and-delete-actions). Gehen Sie zu *Menü → Bildschirm konfigurieren → Benutzerdefinierte Schaltflächen → Schnellaktion → Aktion hinzufügen → [Meine Orte](../widgets/quick-action.md#my-places)* und fügen Sie eine oder mehrere Schnellaktionsschaltflächen hinzu.

- (*Nur Android*) Um einen aufgezeichneten Track zu **pausieren** oder zu **speichern**, verwenden Sie die System-[Benachrichtigung](#notifications) im Benachrichtigungsbereich Ihres Geräts.<br/><br/> ![stopp-speichern-pause](@site/static/img/plugins/trip-recording/stop-save-pause_andr.png)


### Übersichtsbildschirm {#overview-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Übersicht](@site/static/img/plugins/trip-recording/overview_screen_graphs_new_andr.png)  ![Übersicht](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aufzeichnung in iOS beenden](@site/static/img/plugins/trip-recording/start_rec_ios_3.png)  ![Aufzeichnung in iOS beenden](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_new_ios.png)

</TabItem>

</Tabs>

In OsmAnd handhaben die **Android**- und **iOS**-Versionen die Benutzeroberfläche für die Track-Aufzeichnung leicht unterschiedlich. Unter Android finden Sie ein spezielles Menü für den Kontext *Track-Aufzeichnung*, während dies unter iOS in das Kontextmenü *Aktuell aufgenommener Track* integriert ist.

Während Sie einen Track aufzeichnen, werden dynamische Diagramme erstellt, die visuelle Echtzeitdaten über Ihre Reise liefern. Diese Diagramme können Informationen für die gesamte Route oder nur für einen ausgewählten Abschnitt anzeigen, abhängig von Ihrer Zoomstufe.  
Hier ist, was Sie darauf finden können:

- **Datenwerte**. Auf der rechten Seite des Diagramms befinden sich die ***höchsten***, ***niedrigsten*** und ***durchschnittlichen*** Werte für den sichtbaren Abschnitt des Tracks.

- **Diagramm für Schlüsselinformationen**:
    - ***Android***. Für die ***Y-Achse*** im Diagramm können Sie *bis zu zwei Parameter* aus allen verfügbaren Daten wie *Höhe*, *Steigung*, *Geschwindigkeit* und [Informationen von externen Sensoren](../plugins/external-sensors.md#trip-recording) auswählen. Für die ***X-Achse*** wählen Sie entweder *Distanz*, *Zeit* oder *Tageszeit* zur Anzeige aus.
    - ***iOS***. Die Parameter sind in den Tabs *Übersicht*, *Höhe* und *Geschwindigkeit* mit den entsprechenden Werten für die Y-Achse und *Distanz* für die X-Achse organisiert.

- **Statistik**. Für Android wird ein konstanter Satz von Statistikdaten unabhängig von den Diagrammeinstellungen angezeigt: *Distanz*, *Zeitspanne*, *Bergauf*, *Bergab*, *Durchschnittsgeschwindigkeit*. Für iOS hat jeder Tab, Übersicht, Höhe und Geschwindigkeit, einen anderen Datensatz.

Für eine detailliertere Ansicht können Sie **das Diagramm skalieren**:

- Verwenden Sie die [Zwei-Finger-Geste](../map/interact-with-map.md#gestures), um hinein- oder herauszuzoomen und sich auf bestimmte Intervalle zu konzentrieren.
- Tippen Sie auf einen beliebigen Punkt im Diagramm, um eine Markierung anzuzeigen, die die genauen Werte für diesen Ort anzeigt.

| |  
| ------------- |
|**Übersicht**-Tab iOS (für Android sind die Y-Achsen-Parameter *Höhe*, *Geschwindigkeit* und der X-Achsen-Parameter ist *Distanz*). Dieser Tab zeigt ein Diagramm, das Änderungen von Geschwindigkeit und Höhe entlang der Tracklänge sowie wichtige Trackdetails darstellt. Trackdaten für iOS: *Distanz*, *Zeitspanne*, *Startzeit* und *Endzeit*. Sie können unten sehen, wie dies in den Android- und iOS-Versionen angezeigt wird. |
| ![Daten](@site/static/img/plugins/trip-recording/graph_overview_new_andr.png)  ![Daten](@site/static/img/plugins/trip-recording/graph_overview_new_ios.png) |
| **Höhe**-Tab iOS (für Android sind die Y-Achsen-Parameter *Höhe*, *Steigung* und der X-Achsen-Parameter ist *Distanz*). Dieser Tab konzentriert sich auf das Höhenprofil Ihres aufgezeichneten Tracks und bietet Einblicke in Höhenänderungen und Geländeneigungen. Wichtige Metriken für iOS sind: *Durchschnittliche Höhe*, *Höhenbereich*, *Bergauf* und *Bergab*. Die folgenden Diagramme veranschaulichen die Unterschiede zwischen den Android- und iOS-Schnittstellen. |
| ![Daten](@site/static/img/plugins/trip-recording/graph_altitude_new_andr.png)  ![Daten](@site/static/img/plugins/trip-recording/graph_altitude_new_ios.png) |
| **Geschwindigkeit**-Tab iOS (für Android ist der Y-Achsen-Parameter *Geschwindigkeit* und der X-Achsen-Parameter ist *Distanz*). Der Geschwindigkeit-Tab hebt geschwindigkeitsbezogene Daten entlang des Tracks hervor. Für iOS enthält er Informationen wie *Durchschnittsgeschwindigkeit*, *Maximale Geschwindigkeit*, *Zeit in Bewegung* und *Korrigierte Distanz*. Die folgenden Screenshots zeigen, wie diese Daten auf beiden Plattformen angezeigt werden. |
| ![Daten](@site/static/img/plugins/trip-recording/graph_speed_new_andr.png)  ![Daten](@site/static/img/plugins/trip-recording/graph_speed_new_ios.png) |
| Für **Android** können Sie mehr Kombinationen aus verfügbaren Y-Achsen-Daten und X-Achsen-Werten erstellen. |
| ![Daten](@site/static/img/plugins/trip-recording/graph_y-x-combinations_andr.png) |

:::info
Für weitere Details können Sie das [**Track-Kontextmenü**](../map/tracks/track-context-menu.md#options) erkunden, in dem Sie verschiedene trackbezogene Optionen wie Umbenennen, Löschen oder Hinzufügen von Wegpunkten verwalten können. Um die Darstellung von Tracks auf der Karte anzupassen, besuchen Sie den Abschnitt [**Darstellung**](../map/tracks/appearance.md). Wenn Sie Ihrem aktuellen Track bestimmte Wegpunkte hinzufügen möchten, lesen Sie die Anleitung zu [**Track-Punkten**](../map/tracks/track-context-menu.md#points--waypoints). Für Änderungen, wie das Umbenennen eines Tracks, verwenden Sie den Tab [**Optionen**](https://osmand.net/docs/user/map/track-context-menu#options) im Track-Kontextmenü.
:::


### Auf der Karte anzeigen {#show-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![show_tr_onmap_andr_1](@site/static/img/plugins/trip-recording/show_tr_onmap_andr_1.png) ![Karten-Tracks konfigurieren Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![sshow_tr_onmap_ios_1](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_1.png) ![Karten-Tracks konfigurieren iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)
</TabItem>

</Tabs>

Verwalten Sie, welche Tracks auf Ihrer Karte sichtbar sind, mit einer von zwei Optionen. Gehen Sie zu *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*<Translate ios="true" ids="shared_string_gpx_tracks"/> Tab*](../map/tracks/index.md#my-places) und aktivieren Sie die Option *Auf Karte anzeigen* für jeden Track, den Sie anzeigen oder ausblenden möchten. Alternativ können Sie zu *<Translate android="true" ids="shared_string_menu,configure_map"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/>*](../map/tracks/index.md#configure-map) gehen, um die Sichtbarkeit all Ihrer Tracks an einem Ort schnell anzupassen.


### Aufgezeichnete GPX-Datei {#recorded-gpx-file}

OsmAnd erfasst Ihre Reise in einer strukturierten [GPX-Datei](https://de.wikipedia.org/wiki/GPS_Exchange_Format), die eine Hierarchie von *Datei > Track > Segmente > Punkte* verwendet. So funktioniert es:

- **Punkte** repräsentieren einzelne Momente Ihres aufgezeichneten Pfades, jeder markiert mit Attributen wie Koordinaten, Geschwindigkeit, Höhe und Kurs.
- Diese Punkte werden zu **Tracks** gruppiert, die Ihre gesamte Route darstellen.
- Wenn es eine Lücke in der Aufzeichnung gibt (zum Beispiel, wenn die Aufzeichnung pausiert wurde), beginnt der nächste Punkt nach der Unterbrechung ein neues **Segment**, das die Trennung in Ihrer Reise markiert.
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


| Parameter  | Beschreibung |
|-----------------|----------------|
| `trkpt` | **Track-Punkt** repräsentiert einen bestimmten geografischen Ort, der während Ihrer Aktivität erfasst wurde. Jeder Track-Punkt enthält Breiten- und Längengradkoordinaten und bildet die Grundlage Ihres aufgezeichneten Pfades. |
| `trkseg`  | **Track-Segment** gruppiert aufeinanderfolgende Track-Punkte, die durch Unterbrechungen der Aktivität, wie Pausen oder Stopps, getrennt sind. Dies hilft, kontinuierliche Bewegung von Ruhephasen innerhalb einer einzigen Aufzeichnung zu unterscheiden.  |
| `lat` | **Breitengrad** gibt die Nord-Süd-Position eines Punktes auf der Erdoberfläche an. Es ist eine Hälfte des Koordinatenpaars, das zur genauen Bestimmung Ihres Standorts verwendet wird.   |
| `lon` | **Längengrad** gibt die Ost-West-Position an und ergänzt den Breitengrad, um einen Punkt auf dem Globus genau zu lokalisieren. Zusammen definieren Breiten- und Längengrad Ihre genaue geografische Position.    |
| `ele` | **Höhe** misst die Höhe eines Track-Punktes über dem Meeresspiegel, aufgezeichnet in Metern. Dies kann nützlich sein, um Höhenänderungen während Ihrer Aktivitäten, wie Wanderungen oder Radtouren, zu verfolgen.    |
| `time` | **Zeitstempel** zeichnet das genaue Datum und die Uhrzeit auf, zu der ein Track-Punkt protokolliert wird. Dies ermöglicht es Ihnen, die Dauer und das Timing Ihrer Aktivität präzise zu verfolgen.    |
| `hdop` | **Horizontale Genauigkeitsverdünnung (HDOP)** ist ein Maß für die GPS-Genauigkeit, das den potenziellen Standortfehler aufgrund der Positionen der Satelliten widerspiegelt. Im Gegensatz zum Standard-HDOP verwenden OsmAnd GPX-Tracks diesen Wert, um die horizontale Genauigkeit in Metern darzustellen. Bitte beachten Sie, dass diese Implementierung von typischen HDOP-Standards abweicht. [Erfahren Sie mehr](https://github.com/osmandapp/Osmand/issues/3445).   |
| `speed` | **Geschwindigkeit** zeichnet Ihre Bewegungsrate in Metern pro Sekunde auf. Es gibt Einblick in Ihr Tempo während verschiedener Abschnitte Ihrer Aktivität.  |
| `heading`  | **Kurs** gibt die Richtung an, in die die Vorderseite Ihres Fahrzeugs oder Geräts zeigt, gemessen in Grad. Er unterscheidet sich vom tatsächlichen Bewegungspfad (Course over ground). Unterschiede können durch externe Faktoren wie Wind, Strömungen oder Straßenbedingungen entstehen. [Mehr zum Thema Kurs](https://de.wikipedia.org/wiki/Kurs_(Navigation)).  |
| `speed_sensor` | **Geschwindigkeit** von [externen Sensoren](../plugins/external-sensors.md) erfasst Daten von verbundenen Sensoren und liefert präzisere Geschwindigkeitsinformationen, was besonders beim Radfahren nützlich ist. Weitere Details finden Sie in der [Dokumentation zum GPX-Dateiformat](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).  |
| `cadence` | **Trittfrequenz** misst die Anzahl der Pedalumdrehungen pro Minute, aufgezeichnet mit [externen Sensoren](../plugins/external-sensors.md). Dies ist besonders nützlich für Radfahrer, die ihre Treteffizienz überwachen und optimieren möchten. [Lesen Sie mehr](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).  |
| `power` | **Fahrradleistung** quantifiziert die beim Treten erzeugte Leistung, erfasst von [externen Sensoren](../plugins/external-sensors.md). Es ist eine wesentliche Metrik für ernsthafte Radfahrer, die ihre Leistung messen möchten. [Erfahren Sie mehr](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).   |
| `atemp` | **Lufttemperatur** zeichnet die Umgebungslufttemperatur während Ihrer Aktivität auf, gemessen mit [externen Sensoren](../plugins/external-sensors.md). Beachten Sie, dass die Wassertemperatur nicht unterstützt wird. [Details hier](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).   |
| `hr` | **Herzfrequenz** überwacht Ihre Herzschläge pro Minute unter Verwendung von Daten von verbundenen [Sensoren](../plugins/external-sensors.md). Diese Information kann entscheidend sein, um Ihre kardiovaskuläre Leistung während des Trainings zu verfolgen. [Erfahren Sie mehr](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).  |


## Aufnahmeeinstellungen {#recording-settings}

Bevor Sie mit der Aufzeichnung Ihrer Reisen beginnen, müssen Sie das **Reiseaufzeichnungs-Plugin** für eine optimale Leistung richtig konfigurieren.

- **Profilspezifische Einstellungen**. Jedes Profil in der App kann seine eigenen einzigartigen Reiseaufzeichnungseinstellungen haben. Dies ermöglicht es Ihnen, das Aufnahmeverhalten präzise an Ihre Aktivität anzupassen, wie z. B. Autofahren, Radfahren oder sogar Nordic Walking, die möglicherweise unterschiedliche Konfigurationen erfordern.

- **Aufnahmeparameter anpassen**. Die Aufnahmeeinstellungen können je nach Ihrer Bewegungsart variieren. Zum Beispiel könnten lange Autofahrten eine niedrigere Aufnahmefrequenz erfordern, während Wandern oder Gehen von häufigeren Aktualisierungen profitieren könnten.

- **Präzise Standortdaten**. Um sicherzustellen, dass Ihre Aufnahmen flüssig und für die zukünftige Verwendung nutzbar sind, können Sie die Art und Weise anpassen, wie Sie Standortpunkte erfassen. Dies könnte die Anpassung der Aufnahmefrequenz, des Formats Ihrer Daten (wie die Anzahl der Punkte pro Entfernungseinheit) oder des Abstands zwischen den aufgezeichneten Punkten umfassen.

- **Globale Einstellungen**. Die Einstellungen für die Reiseaufzeichnung werden pro Profil konfiguriert, die Sie in den globalen [Einstellungen](../personal/global-settings.md) der App verwalten können. Bevor Sie das Reiseaufzeichnungs-Plugin anpassen, wählen Sie das Profil aus, das Sie im Abschnitt [Profile](../personal/profiles.md) konfigurieren möchten. Von dort aus navigieren Sie zu den Einstellungen des Profils, um auf die Optionen für die Reiseaufzeichnung zuzugreifen.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Konfiguration der Reiseaufzeichnung in Android](@site/static/img/plugins/trip-recording/recording_sett_1_andr.png)  ![Konfiguration der Reiseaufzeichnung in Android](@site/static/img/plugins/trip-recording/recording_sett_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Konfiguration der Reiseaufzeichnung in iOS](@site/static/img/plugins/trip-recording/recording_sett_1_ios.png)  ![Konfiguration der Reiseaufzeichnung in iOS](@site/static/img/plugins/trip-recording/recording_sett_2_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschreibung |
|---|---|
| **Akkuoptimierungsdialog** (*Android*) | Öffnet die [Android-Akkuoptimierungseinstellungen](#battery-optimization). Tippen Sie auf *Nicht mehr fragen*, wenn Sie nicht erneut dazu aufgefordert werden möchten. |
| **Startdialog anzeigen** (*Android*) | Aktiviert einen Dialog, in dem Sie Einstellungen vor dem Start der Aufzeichnung konfigurieren können. Wenn deaktiviert, startet die Aufzeichnung automatisch. |
| **Track während der Navigation automatisch aufzeichnen** | Zeichnet den Track während der Navigation automatisch auf und speichert ihn im Tab *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*.<br />*Hinweis*: Die Track-Aufzeichnung verbraucht Akku und läuft auch bei ausgeschaltetem Bildschirm im Hintergrund weiter. |
| **Allgemeines Aufzeichnungsintervall** | Definiert, wie oft Standortpunkte aufgezeichnet werden. Der Standardwert ist 5 Sekunden. Es wird mit dem *Reiseaufzeichnungs-Widget* aktiviert. |
| **Minimale Verschiebung** | Ein Filter, um die Aufzeichnung von Punkten bei geringer oder keiner Bewegung zu vermeiden. Er hilft, Datenrauschen zu reduzieren.<ul><li>*Nebenwirkungen*: Ruhezeiten werden möglicherweise nicht aufgezeichnet und kleine Bewegungen können ignoriert werden. Dies kann die Nachbearbeitungsdaten reduzieren, aber auch verhindern, dass GPS-Fehler protokolliert werden.</li><li>*Empfehlung*: Stellen Sie die Verschiebung auf 5 Meter ein, wenn Sie weniger kleine Details in Ihren Aufzeichnungen wünschen.</li></ul> |
| **Minimale Genauigkeit** | Filtert Standortpunkte heraus, die unter einem vom Gerät gemeldeten Mindestgenauigkeitsschwellenwert liegen.<ul><li>*Nebenwirkungen*: Punkte in Gebieten mit schlechtem Signal (unter Brücken, Bäumen, zwischen Gebäuden oder bei bestimmten Wetterbedingungen) können fehlen.</li><li>*Empfehlung*: Wenn Sie unsicher sind, ist es möglicherweise besser, diesen Filter zu deaktivieren, um Datenverluste zu vermeiden.</li></ul><details><summary>*Anmerkung*</summary>Angenommen, das GPS wurde kurz vor der Aufzeichnung ausgeschaltet. In diesem Fall kann der erste gemessene Punkt eine reduzierte Genauigkeit aufweisen. Es ist daher besser, eine Weile zu warten, bevor der Punkt aufgezeichnet wird, oder den besten von 3 aufeinanderfolgenden Punkten aufzuzeichnen.</details> |
| **Minimale Geschwindigkeit** | Legt einen Schwellenwert fest, um Punkte zu ignorieren, die unter einer bestimmten Geschwindigkeit aufgezeichnet wurden.<ul><li>*Nebenwirkungen*: Abschnitte, in denen die Geschwindigkeit unter einen festgelegten Schwellenwert fällt, werden nicht aufgezeichnet.</li><li>*Empfehlung*: Verwenden Sie stattdessen den Filter *Minimale Verschiebung*, da dieser bessere Ergebnisse liefern kann, ohne wichtige Daten zu verlieren.</li></ul><details><summary>*Anmerkung*</summary>Versuchen Sie zuerst, die Bewegungserkennung über den Filter für die minimale Aufzeichnungsverschiebung (B) zu verwenden, dies kann zu besseren Ergebnissen führen und Sie verlieren weniger Daten. Wenn Ihre Tracks bei niedrigen Geschwindigkeiten weiterhin verrauscht sind, versuchen Sie hier Werte ungleich Null. Bitte beachten Sie, dass einige Messungen möglicherweise überhaupt keinen Geschwindigkeitswert melden (einige netzwerkbasierte Methoden), in diesem Fall würden Sie nichts aufzeichnen.<br/><br/>Geschwindigkeit > 0 Prüfung: Die meisten GPS-Chipsätze melden einen Geschwindigkeitswert nur, wenn der Algorithmus feststellt, dass Sie sich in Bewegung befinden, und keinen, wenn Sie es nicht sind. Daher verwendet die Einstellung > 0 in diesem Filter gewissermaßen die Bewegungserkennung des GPS-Chipsatzes. Aber auch wenn hier bei der Aufzeichnung nicht gefiltert wird, verwenden wir diese Funktion in unserer GPX-Analyse, um die korrigierte Distanz zu bestimmen, d.h. der in diesem Feld angezeigte Wert ist die während der Bewegung aufgezeichnete Distanz.</details> |
| **Aufzeichnungen nach Lücke automatisch teilen** | Teilt Tracks automatisch basierend auf Zeitlücken zwischen aufgezeichneten Punkten. <ul><li>Ein neues Segment beginnt nach einer Lücke von 6 Minuten.</li><li>Ein neuer Track beginnt nach einer Lücke von 2 Stunden.</li><li>Eine neue Datei beginnt, wenn sich das Datum ändert.</li><li>Lücken können durch GPS-Signalverlust, niedrige Geschwindigkeit oder Konfigurationseinstellungen entstehen.</li></ul><details><summary>*Anmerkung*</summary>Eine Lücke wird identifiziert, wenn keine Punkte aufgezeichnet werden. Dies kann entweder daran liegen, dass der Standort nicht erkannt wird oder dass er zwar erkannt, aber nicht aufgezeichnet wird. Mehrere Faktoren können dies verursachen, einschließlich schwacher GPS-Signale aufgrund schlechter Wetterbedingungen oder wenn die Bewegungsgeschwindigkeit unter den konfigurierten Schwellenwert fällt. In solchen Fällen zeichnet das Gerät den Standort nicht auf, obwohl er möglicherweise erkannt wird.<br/><br/>Diese Lücken in den aufgezeichneten Daten können die Erstellung eines neuen Segments innerhalb desselben Tracks, eines neuen Tracks in derselben Datei oder einer neuen GPX-Datei innerhalb einer Aufzeichnung auslösen. Dies wird innerhalb einer einzigen Start/Stopp-Aufzeichnungssitzung verwaltet.</details> |
| **Eigenständige Aufzeichnung verhindern** (*Android*) | Pausiert die Track-Aufzeichnung, wenn die OsmAnd-App beendet wird (über *letzte Apps*). Die Hintergrundanzeige wird nicht im Android-Benachrichtigungsfeld angezeigt. |
| **Kurs einbeziehen** | Zeichnet den Kurs (Bewegungsrichtung) für jeden Punkt in der GPX-Datei auf. Der Kurs ist die Richtung, in die das Gerät zeigt, was sich aufgrund externer Faktoren wie Wind oder Schleudern von der Bewegungsrichtung unterscheiden kann. |
| **Aktivität**  | Die Option ermöglicht es Ihnen, einen [Aktivitätstyp](../map/tracks/track-context-menu.md#ttrack-activity-type) für ein Profil vorab auszuwählen, der dann automatisch auf alle aufgezeichneten Tracks angewendet wird. |
| **Externe Sensoren** <br/> *Plugin muss aktiviert sein* | Daten von [externen Sensoren](../plugins/external-sensors.md#trip-recording) wie *<Translate android="true" ids="map_widget_ant_heart_rate"/>* oder *<Translate android="true" ids="map_widget_ant_bicycle_speed"/>* werden in der GPX-Datei protokolliert. *Distanz*-Daten werden weder auf Android noch auf iOS aufgezeichnet. Wird nur angezeigt, wenn das [Plugin für externe Sensoren](../plugins/external-sensors.md) aktiviert ist. |
| **Fahrzeugmetriken** <br/> *Plugin muss aktiviert sein* | Daten von einem [OBD-II-Scanner](../plugins/vehicle-metrics.md#trip-recording) werden in der GPX-Datei protokolliert. Wird nur angezeigt, wenn das [Plugin für Fahrzeugmetriken](../plugins/vehicle-metrics.md) aktiviert ist.<br />*Hinweis*: Sie können aus der Liste auswählen, welche Metriken in der GPX-Datei aufgezeichnet werden sollen: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_trip_recording,shared_string_settings"/>* |
| **Speicherordner für Tracks** (*Android*) | Definiert, wo im Tab *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>* aufgezeichnete Tracks gespeichert werden. Optionen umfassen das Speichern aller Tracks im Ordner "Rec" oder die Organisation nach Monat, wie z. B. "Rec/yyyyy-mm". |
| **Benachrichtigung** | Steuert die Anzeige einer Systembenachrichtigung zur [Reiseaufzeichnung](#notifications) im Benachrichtigungsbereich des Geräts, mit der Sie die Aufzeichnung von Reisen starten können. |
| **Online-Tracking** (*Android*) | Ermöglicht die Echtzeitverfolgung Ihres Standorts durch Senden aufgezeichneter Punkte an eine angegebene URL. Das Tracking-Intervall bestimmt, wie oft Punkte gesendet werden, und der Zeitpuffer speichert Punkte, wenn keine Internetverbindung besteht.<details><summary>*Anmerkung*</summary>Wenn diese Option aktiviert ist und die Track-Aufzeichnung läuft, wird das Distanz/Start-Stopp (REC)-Widget **grün** statt **rot**, was anzeigt, dass jeder aufgezeichnete Punkt an eine angegebene URL übertragen wird. Das Feld **Webadresse** ermöglicht die Eingabe der URL im folgenden Parameterformat:<ul><li>`lat={0}`: Breitengrad</li><li>`lon={1}`: Längengrad</li><li>`timestamp={2}`: Zeitstempel (Unix-Zeit)</li><li>`hdop={3}`: Horizontale Genauigkeitsverdünnung</li><li>`altitude={4}`: Höhe</li><li>`speed={5}`: Geschwindigkeit</li><li>`bearing={6}`: Peilung (Bewegungsrichtung)</li><li>`eta={7}`: Geschätzte Ankunftszeit (Unix-Zeit)</li><li>`etfa={8}`: Geschätzte Zeit bis zum ersten Zwischenpunkt oder Zielpunkt (Unix-Zeit)</li><li>`eda={9}`: Geschätzte Entfernung bis zur Ankunft oder einer Markierung (in Metern)</li><li>`edfa={10}`: Geschätzte Entfernung bis zum ersten Zwischenpunkt oder Zielpunkt (in Metern)</li></ul>Sie können das **Tracking-Intervall** festlegen, um anzugeben, wie oft Standortpunkte gesendet werden, mit Optionen von 0 Sekunden bis 5 Minuten. Zusätzlich bestimmt der Parameter **Zeitpuffer**, wie lange Standortpunkte gespeichert werden, wenn keine Internetverbindung besteht, um sicherzustellen, dass die Daten gespeichert und übertragen werden, wenn die Verbindung wiederhergestellt ist.</details> |
| **Tracks** | Ein schneller Verweis auf den Ordner, in dem Tracks im Tab *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>* gespeichert werden. |
| **Plugin-Einstellungen auf Standard zurücksetzen** | Setzt alle Einstellungen für die Reiseaufzeichnung für das aktuelle Profil auf die Standardwerte zurück. |
| **Von einem anderen Profil kopieren** (*Android*) | Kopiert die Einstellungen für die Reiseaufzeichnung von einem Profil in ein anderes. |


### Akkuoptimierung {#battery-optimization}

<InfoAndroidOnly />

![Track auf der Karte iOS](@site/static/img/plugins/trip-recording/battery_2_andr.png)  ![Track auf der Karte iOS](@site/static/img/plugins/trip-recording/battery_1_andr.png)  

Diese Funktion ermöglicht es Ihnen, die Akkuoptimierungseinstellungen für OsmAnd zu verwalten, um einen ununterbrochenen Zugriff auf Ihren Standort zu gewährleisten, auch wenn die App während der Navigation oder Track-Aufzeichnung im Hintergrund läuft.

- **Akkuoptimierungseinstellungen**. Öffnet die Android-Einstellungen, wo Sie die Energiesparpräferenzen für OsmAnd ändern können. [Weitere Details hier](../troubleshooting/general.md#optimizing-battery-consumption).
- **Nicht mehr fragen**. Schließt das Dialogfeld dauerhaft, sodass es nicht wieder erscheint.
- **Schließen**. Schließt das Dialogfeld vorübergehend. Es wird beim nächsten Mal, wenn die Akkuoptimierung Aufmerksamkeit erfordert, wieder angezeigt.


### Benachrichtigungen {#notifications}

![Reiseaufzeichnungs-Benachrichtigung](@site/static/img/plugins/trip-recording/trip_rec_notific_1_andr.png)  

Wenn [Benachrichtigung](#recording-settings) in den Plugin-Einstellungen aktiviert ist, werden Benachrichtigungen zur Reiseaufzeichnung immer im Systembenachrichtigungsbereich angezeigt, wenn die Aufzeichnung aktiv ist. Diese Benachrichtigung stellt sicher, dass der Aufzeichnungsprozess nicht vom System unterbrochen wird, und sie kann während einer aktiven Aufzeichnung nicht deaktiviert werden.

- Der Benachrichtigungsbereich öffnet sich, wenn Sie vom oberen Bildschirmrand nach unten wischen, und schließt sich, wenn Sie nach oben wischen. Diese Nachrichten informieren Sie über Aktionen wie das Starten/Stoppen der Reiseaufzeichnung, insbesondere wenn die automatische Aufzeichnung während der Navigation aktiviert ist.
- Benachrichtigungen bleiben sichtbar, unabhängig davon, ob die App im Vordergrund, im Hintergrund läuft oder geschlossen ist. Sie können die alte Benachrichtigung manuell löschen, wenn sie nicht mehr benötigt wird, aber dies stoppt die laufende Aufzeichnung nicht.

**Wichtiger Hinweis**.

Dieses Verhalten wird von Android für jeden Vordergrunddienst, wie die Reiseaufzeichnung, verlangt, um für Sie sichtbar zu bleiben.

- Wenn die Benachrichtigung entfernt wird, stoppt Android automatisch die Aufzeichnung. Sie können die Einstellung [Eigenständige Aufzeichnung verhindern](#recording-settings) verwenden.
- Die Einstellung **Benachrichtigung** in OsmAnd beeinflusst, ob die Benachrichtigungsleiste eine Verknüpfung zum Starten einer Aufzeichnung anzeigt, wenn keine Aufzeichnung aktiv ist. Sie steuert **nicht** die Sichtbarkeit der Benachrichtigung während einer aktiven Aufzeichnung.

**Zusätzliche Android-Optionen**.

![Reiseaufzeichnungs-Benachrichtigung](@site/static/img/plugins/trip-recording/trip_rec_notification_andr.png)

- In ***Android-Einstellungen → Benachrichtigungen und Statusleiste → Sperrbildschirm-Benachrichtigungen*** können Sie OsmAnd aus der App-Liste entfernen, um zu verhindern, dass Benachrichtigungen auf dem Sperrbildschirm erscheinen und so eine versehentliche Aktivierung des Bildschirms vermieden wird. Dies hat keinen Einfluss auf die Track-Aufzeichnung. Benachrichtigungen werden weiterhin im regulären Benachrichtigungsbereich angezeigt.
- **OsmAnd** kann auch unter ***Datenschutz → Spezielle Berechtigungen → Bildschirm einschalten*** erscheinen. Wenn Sie verhindern möchten, dass sich der Bildschirm einschaltet, wenn eine Benachrichtigung erscheint, versuchen Sie, OsmAnd aus dieser Liste zu entfernen.

<!--
- OsmAnd is not listed under **Privacy** *→* **Special Permissions** → **Alarms and reminders**.
-->

**Badge-Benachrichtigung**.

![Reiseaufzeichnungs-Benachrichtigung](@site/static/img/plugins/trip-recording/trip_rec_notification_badge_andr.png)

Das App-Symbol-Badge erscheint neben dem OsmAnd-Symbol, wenn die Track-Aufzeichnung aktiv ist.

- Dieses Symbol verschwindet, wenn die Track-Aufzeichnung abgeschlossen ist. Um zu überprüfen, ob eine Aufzeichnung aktiv ist, können Sie zu *Menü → Meine Orte → Tracks-Tab* gehen oder auf das Widget tippen, um die Aufzeichnung zu verwalten.  
- Wenn keine Aufzeichnung läuft und das Badge immer noch angezeigt wird, kann dies bedeuten, dass eine Nachricht von OsmAnd im Benachrichtigungsfeld des Geräts verblieben ist.  
- Um Badges in den Android-Einstellungen zu deaktivieren, gehen Sie zu den Geräte-*Einstellungen → Apps → OsmAnd → Benachrichtigungen* und deaktivieren Sie die Option zur Anzeige von Badges für diese App.


## Widgets {#widgets}

Widgets ermöglichen es Ihnen, wichtige Informationen zur Track-Aufzeichnung direkt auf dem Bildschirm anzuzeigen, wie z. B. *Distanz*, *Dauer*, *Bergauf* und *Bergab*. Unter Android können Sie auch *Max. Geschwindigkeit* und *Durchschnittssteigung*-Widgets hinzufügen.

Um die *Reiseaufzeichnungs-Widgets* zu verwenden, müssen Sie alle folgenden Einstellungen vornehmen:

1. [Aktivieren Sie das Plugin](../start-with/first-steps.md#how-to-configure-plugins).
2. Konfigurieren Sie die Reiseaufzeichnungseinstellungen für das erforderliche [Profil](../personal/profiles.md).
3. Fügen Sie die notwendigen **Reiseaufzeichnungs-Widgets** zum Bildschirm hinzu. Beachten Sie, dass diese Konfiguration **profilspezifisch** ist.


### Aufzeichnungs-Widget hinzufügen {#add-recording-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wählen Sie ein Panel → <Translate android="true" ids="map_widget_monitoring"/>*

![Distanz/Start-Stopp-Widget in Android hinzufügen](@site/static/img/plugins/trip-recording/add_widg_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Wählen Sie ein Panel → <Translate android="true" ids="map_widget_monitoring"/>*  

![Distanz/Start-Stopp-Widget in iOS hinzufügen](@site/static/img/plugins/trip-recording/add_recording_widgets_ios_2.png)

</TabItem>

</Tabs>

Das [Reiseaufzeichnungs-Widget](../widgets/info-widgets.md#trip-recording-widgets) bietet eine einfache Möglichkeit, Ihren Aufzeichnungsstatus zu überwachen und schnell auf Aufzeichnungseinstellungen und -details zuzugreifen. Dieses Widget wird automatisch zu Ihrem Bildschirm hinzugefügt, wenn das Reiseaufzeichnungs-Plugin aktiviert ist.

Um Ihre Benutzeroberfläche anzupassen, können Sie das Reiseaufzeichnungs-Widget und [andere Widgets](../plugins/trip-recording#duration-uphill-downhill) über das Menü "Bildschirm konfigurieren" hinzufügen oder entfernen.


### Distanz (Start-Stopp) {#distance-start-stop}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Aufzeichnung in Android beenden](@site/static/img/plugins/trip-recording/distance_start_rec_new_andr.png)
![Reiseaufzeichnungs-Widget](@site/static/img/plugins/trip-recording/trip_rec_widgets_mode.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Reiseaufzeichnungs-Widget](@site/static/img/widgets/tr_rec_wid_conf_scr.png) ![Reiseaufzeichnungs-Widget](@site/static/img/widgets/tr_rec_wid_conf_scr_2.png)  

</TabItem>

</Tabs>  

Wenn Widgets auf der Karte angezeigt werden, zeigt ein Tippen auf eines von ihnen zusätzliche Track-Details an und ermöglicht die Interaktion mit der Aufzeichnung.
Das *Distanz*-Widget zeigt die Gesamtdistanz Ihrer aktuell aufgezeichneten Reise an und dient als Hauptschnittstelle zur Verwaltung Ihrer Aufzeichnungen. Ein Tippen darauf öffnet den [Reiseaufzeichnungsdialog](#start-a-dialog), in dem Sie detaillierte Informationen zu Ihrem Track starten, stoppen und anzeigen können.

- Das Widget wird automatisch hinzugefügt, wenn das *Reiseaufzeichnungs-Plugin* aktiviert ist, kann aber über das Menü [Bildschirm konfigurieren](../widgets/configure-screen.md#overview) ausgeblendet werden.
- Wenn die Option *Startdialog anzeigen* in den Einstellungen des Reiseaufzeichnungs-Plugins deaktiviert ist, öffnet ein Tippen auf das aktive Widget dennoch das *Reiseaufzeichnungsdialogfeld*, sodass Sie auf weitere Optionen und Informationen zugreifen können.  

Zusätzlich zum *Distanz/Start-Stopp*-Widget enthält das **Reiseaufzeichnungs-Plugin** drei weitere Widgets: *Dauer*, *Bergauf*, *Bergab*, *Max. Geschwindigkeit* und *Durchschnittssteigung* (die letzten beiden sind nur unter Android verfügbar). Diese liefern zusätzliche Informationen über Ihre Reise und helfen Ihnen, den Fortschritt in Echtzeit zu verfolgen.

| |
|-----------|
| **Distanz/Start-Stopp**. Dieses Widget zeigt die Distanz Ihrer laufenden Reiseaufzeichnung an. Es wird automatisch hinzugefügt, wenn das Reiseaufzeichnungs-Plugin aktiviert ist, aber Sie können es über das Menü "Bildschirm konfigurieren" ausblenden. Das Widget hat drei verschiedene Zustände: *Aufzeichnung*, *Pausiert* und *Inaktiv*, die jeweils den aktuellen Status Ihrer Reiseaufzeichnung anzeigen. |
| ![Reiseaufzeichnungs (REC) Widget](@site/static/img/widgets/tr_rec_wid_rec.png) |
| Um den [Reiseaufzeichnungsdialog](#start-a-dialog) zu öffnen, wenn Sie auf ein inaktives Widget tippen, aktivieren Sie die Option *Startdialog anzeigen* in den Einstellungen des Reiseaufzeichnungs-Plugins. Wenn die Option deaktiviert ist, startet die Aufzeichnung sofort nach dem Tippen auf das Widget, ohne den Dialog zu öffnen.| 

Unter Android unterstützt das Distanz-Widget mehrere Anzeigemodi:
- **Gesamtdistanz** – Gesamtdistanz der aktuellen Aufzeichnung (Standard).
- **Letzter Bergauf** – Distanz des zuletzt aufgenommenen Anstiegsabschnitts.
- **Letzter Bergab** – Distanz des zuletzt aufgenommenen Abstiegsabschnitts.


### Dauer, Bergauf, Bergab {#duration-uphill-downhill}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| |
|------------|
|**Dauer**. Zeigt die Gesamtzeit der aktuellen Reiseaufzeichnung in Stunden und Minuten an. |
|![Widgets](@site/static/img/widgets/tr_rec_wid_dur.png)|  
|**Bergauf**. Zeigt den gesamten Anstieg oder den letzten Anstiegsabschnitt an, abhängig vom ausgewählten Modus. |
|![Widgets](@site/static/img/widgets/tr_rec_wid_up.png)|
|**Bergab**. Zeigt den gesamten Abstieg oder den letzten Abstiegsabschnitt an, abhängig vom ausgewählten Modus. |
|![Widgets](@site/static/img/widgets/tr_rec_wid_dow.png)|

</TabItem>

<TabItem value="ios" label="iOS">  

| |
|------------|
|**Dauer**. Zeigt die Gesamtzeit der aktuellen Reiseaufzeichnung in Stunden und Minuten an. |
|![Widgets](@site/static/img/widgets/tr_rec_wid_dur.png)|  
|**Bergauf**. Zeigt den kumulativen Höhengewinn für die aktuelle Reiseaufzeichnung an. |
|![Widgets](@site/static/img/widgets/tr_rec_wid_up.png)|
|**Bergab**. Zeigt den gesamten Höhenverlust an, der während der aktuellen Reiseaufzeichnung angesammelt wurde. |
|![Widgets](@site/static/img/widgets/tr_rec_wid_dow.png)|

</TabItem>

</Tabs>

Wenn Sie mehrere Widgets ausgewählt haben – *Dauer*, *Bergauf* oder *Bergab* – können Sie für jedes auf dasselbe Dialogfeld zugreifen, ohne es wechseln oder schließen zu müssen. Diese einheitliche Benutzeroberfläche erleichtert die nahtlose Anzeige und Verwaltung aller zugehörigen Informationen.

### Max. Geschwindigkeit & Durchschnittssteigung {#max-speed--average-slope}

<InfoAndroidOnly />

![Max. Geschwindigkeit Android](@site/static/img/widgets/max_speed_android.png) ![Durchschnittssteigung Android](@site/static/img/widgets/average_slope_android.png)  

Das **Max. Geschwindigkeit**-Widget zeigt die maximale Geschwindigkeit für die aktuell aufgezeichnete Reise an. Tippen Sie auf das Widget, um zwischen der Gesamtmaximalgeschwindigkeit und der maximalen Geschwindigkeit aus dem letzten Bergauf- oder Bergababschnitt zu wechseln.

Das **Durchschnittssteigung**-Widget zeigt die durchschnittliche Steigung für den letzten Bergauf- oder Bergababschnitt der aktuellen Reise an. Es hilft, abzuschätzen, wie steil der vorherige Anstieg oder Abstieg war, basierend auf Höhengewinn und Distanz.


## Verwandte Artikel {#related-articles}

- [Kartenkontextmenü](../map/map-context-menu.md)
- [Track auf Karte anzeigen](../map/tracks/index.md)
- [Auf Karte analysieren](../map/tracks/index.md#analyze-track-on-map)
- [Track-Kontextmenü](../map/tracks/track-context-menu.md)
- [Navigation nach Track](../navigation/setup/gpx-navigation.md)

### Häufige Probleme und Lösungen {#common-issues-and-solutions}

- Die Reiseaufzeichnung startet nicht.
    - Stellen Sie sicher, dass das **Reiseaufzeichnungs-Plugin** aktiviert ist: *Menü → Plugins → Reiseaufzeichnung → Aktivieren*.
    - Überprüfen Sie, ob die Einstellungen korrekt sind: *Menü → Profil konfigurieren → Plugin-Einstellungen → Reiseaufzeichnung*.
    - Wenn die Aufzeichnung immer noch nicht startet, starten Sie die App neu und versuchen Sie es erneut.

- Die Reiseaufzeichnung stoppt unerwartet.
    - Überprüfen Sie, ob die *Akkuoptimierungseinstellungen Ihres Geräts* die Aufzeichnung stoppen. Einige Geräte können Hintergrundaktivitäten anhalten, um Strom zu sparen. Gehen Sie zu *Geräteeinstellungen → Akku*.

- Die aufgezeichnete Distanz stimmt nicht mit der tatsächlichen Distanz überein.
    - Überprüfen Sie, ob GPS aktiviert ist und ein aktives Signal hat.  
    - Reduzieren Sie den Schwellenwert für die GPS-Genauigkeit: *Menü → Profil konfigurieren → Reiseaufzeichnung → Minimale Genauigkeit*.

- Aufgezeichnete Tracks sind verrauscht. [(prüfen)](../troubleshooting/track-recording-issues.md#recorded-tracks-are-noisy).
- Aufgezeichnete Tracks haben Lücken. [(prüfen)](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps)
- Wie man die zurückgelegte Distanz verfolgt. [(prüfen)](../troubleshooting/track-recording-issues.md#how-to-track-traveled-distance)

Für weitere Fehlerbehebungen besuchen Sie: [Fehlerbehebung bei der Track-Aufzeichnung](https://osmand.net/docs/user/troubleshooting/track-recording-issues).