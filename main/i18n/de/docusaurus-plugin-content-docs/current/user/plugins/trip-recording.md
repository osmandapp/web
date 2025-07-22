---
source-hash: cbb0cf4d59d01946eeabdc12f73feec5aec68b5a7434c67e7ceb082189d83310
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

Das **Routenaufzeichnungs-Plugin** ist ein unverzichtbares Werkzeug zum Erfassen Ihrer Routen, Bewegungen und Trainingseinheiten. Diese Funktion ermöglicht es Ihnen nicht nur, Ihre Routen aufzuzeichnen, sondern auch, sie einfach wiederzuverwenden, zu ändern, zu aktualisieren und mit anderen zu teilen.

Mit dem *Routenaufzeichnungs-Plugin* können Sie neue Routen erstellen, aufgezeichnete Routen direkt auf der Karte anzeigen und bestehende Aufzeichnungen verwalten. Es bietet wertvolle Einblicke in Ihre Routen, wie z. B. Geschwindigkeit, Höhenunterschiede, Geländedetails und Daten von externen Sensoren. Das Plugin zeichnet Ihre Route auf und ermöglicht so eine detaillierte Analyse und Freigabe nach Ihrer Reise.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Aufgezeichnete Route in Android](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aufgezeichnete Route in iOS](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_ios_2.png)

</TabItem>

</Tabs>


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Um mit der Aufzeichnung von Routen zu beginnen, müssen Sie die folgenden Einstellungen vornehmen:

1. Das **Routenaufzeichnungs-Plugin** [aktivieren](../plugins/index.md#enable--disable).
2. Die **Aufzeichnungseinstellungen** für das erforderliche [Profil](../personal/profiles.md) [konfigurieren](#recording-settings).
3. **Routenaufzeichnungs-Widgets** zum Bildschirm hinzufügen (optional).
4. Routen auf der Karte [verwalten](../map/tracks/appearance.md) (optional).


## Neue Routenaufzeichnung {#new-track-recording}

![Entfernungs-/Start-Stopp-Widget in iOS](@site/static/img/plugins/trip-recording/create_new_track_and-1.png) ![Entfernungs-/Start-Stopp-Widget in Android](@site/static/img/plugins/trip-recording/create_new_track_ios-1.png)

Mit dem Routenaufzeichnungs-Plugin in OsmAnd können Sie Ihre Route ganz einfach mit verschiedenen praktischen Optionen aufzeichnen. So können Sie Ihre Reise beginnen:

- [Entfernungs-/Start-Stopp-Widget](#distance-start-stop) — Zum Aktivieren der Aufzeichnung verwenden.

- [<Translate android="true" ids="start_recording"/>](../personal/myplaces.md#tracks) — Tippen Sie auf die Schaltfläche im Reiter *Haupt-<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.

- [Schnellaktionsschaltflächen](../widgets/quick-action.md#add-and-delete-actions) — Um eine Routenaufzeichnung zu starten, gehen Sie zu *Menü → Bildschirm konfigurieren → Benutzerdefinierte Schaltflächen → Schnellaktion → Aktion hinzufügen → Meine Orte* und wählen Sie [Start / Pause: Routenaufzeichnung](../widgets/quick-action.md#my-places).

- *Nur Android*:
    - Gehen Sie zu *Haupt-<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*.

    - [Systembenachrichtigung](#notifications) — Im Benachrichtigungsbereich Ihres Geräts verwenden.

    - [Anwendungsstarter](#launcher-android) — Zum Starten der Aufzeichnung verwenden.

**Empfehlungen:**

- [Genaue Standortbestimmung](../start-with/first-steps.md#permission-to-access-the-location) — Für eine genaue Routenaufzeichnung stellen Sie sicher, dass OsmAnd diese Berechtigung hat.

- [Fehlerbehebung](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps) — **iOS-Geräte** können Apps, die im Hintergrund laufen, manchmal vorübergehend **anhalten oder beenden**, was die Routenaufzeichnung unterbrechen könnte.

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

- **Protokollierungsintervall** (*Android/iOS*). Diese Einstellung steuert, wie oft die App Daten vom GPS-Sensor anfordert, um neue Punkte auf Ihrer Route zu markieren. Durch Anpassen des Intervalls können Sie ein Gleichgewicht zwischen Routendetail und Batterieverbrauch herstellen. Ein kürzeres Intervall führt zu detaillierteren Routen, aber höherem Batterieverbrauch, während ein längeres Intervall Batterie spart, aber die Routengenauigkeit reduziert.

- **Liniensymbol** (*Android*). Tippen Sie auf dieses Symbol, um auf die [Routen-Darstellungsoptionen](../map/tracks/appearance.md) zuzugreifen. Hier können Sie anpassen, wie Ihre Route auf der Karte angezeigt wird, einschließlich Linienfarbe, Dicke und Stil. Sobald Sie eine Route mit einer angepassten Darstellung speichern, bleiben diese Einstellungen für zukünftige Aufzeichnungen erhalten, um Konsistenz bei jeder Anzeige oder erneuten Aktivierung der Route zu gewährleisten.

- **Einstellungsmenü** (*Android*). Greifen Sie auf dieses Menü zu, um Ihre Aufzeichnungspräferenzen zu optimieren. Eine detaillierte Übersicht finden Sie im Abschnitt [Routenaufzeichnungseinstellungen](#recording-settings).

- **Meine Wahl merken** (*iOS*). Wenn aktiviert, startet die Routenaufzeichnung automatisch, ohne zusätzliche Einstellungen oder Bestätigungen abzufragen. Wenn Sie die Aufzeichnungseinstellungen ändern möchten, bevor Sie eine neue Route starten, starten Sie das Routenaufzeichnungs-Plugin neu, damit das Einstellungsmenü wieder angezeigt wird.


### Launcher (Android) {#launcher-android}

![Kontextmenü des Symbols](@site/static/img/plugins/trip-recording/launcher_icon_andr.png) ![Symbol für Startaufzeichnung](@site/static/img/plugins/trip-recording/and_trip_rec_icon.png)

Sie können eine neue Routenaufzeichnung direkt über das Kontextmenü des OsmAnd-App-Symbols auf dem Bildschirm Ihres Android-Geräts starten.

- **Langes Tippen** auf das OsmAnd-App-Symbol öffnet das Kontextmenü, in dem Sie die Option **Aufzeichnung starten** finden.

- Tippen Sie auf die Option **Aufzeichnung starten**, um die OsmAnd-App mit den auf dem Bildschirm angezeigten [Routenaufzeichnungseinstellungen](#overview-screen) zu starten.

- **Langes Tippen** auf die Option **Aufzeichnung starten** im Kontextmenü des App-Symbols, um eine Verknüpfung für einen schnelleren Zugriff hinzuzufügen.

Während die Routenaufzeichnung aktiv ist, erscheint ein Benachrichtigungsabzeichen in der Ecke des OsmAnd-App-Symbols, das anzeigt, dass die Aufzeichnung läuft. Weitere Details zur Verwaltung dieser Benachrichtigung finden Sie im Abschnitt [Benachrichtigung](#notifications).


## Aktuelle Routenaufzeichnung {#current-track-recording}

Zum *Stoppen / Speichern / Pausieren*:

- Um die Aufzeichnung zu **stoppen**, tippen Sie auf die entsprechende Schaltfläche im Dialogfeld des [Entfernungs-/Start-Stopp-Widgets](#distance-start-stop).

- (*Nur Android*) Um die Aufzeichnung zu **stoppen**, tippen Sie auf den Menüpunkt *Routenaufzeichnung* im Hauptmenü.

- Um eine aufgenommene Route zu **stoppen** oder zu **speichern**, gehen Sie zu *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/> Reiter*](../personal/myplaces.md#tracks) und tippen Sie auf die entsprechende Schaltfläche im Feld *Aktuell aufgenommene Route*.

- Um eine Aufzeichnung zu **speichern, pausieren, ein neues Segment zu starten** oder zu **beenden**, verwenden Sie die [Schnellaktionsschaltflächen](../widgets/quick-action.md#add-and-delete-actions). Gehen Sie zu *Menü → Bildschirm konfigurieren → Benutzerdefinierte Schaltflächen → Schnellaktion → Aktion hinzufügen → [Meine Orte](../widgets/quick-action.md#my-places)* und fügen Sie eine oder mehrere Schnellaktionsschaltflächen hinzu.

- (*Nur Android*) Um eine aufgenommene Route zu **pausieren** oder zu **speichern**, verwenden Sie die System-[Benachrichtigung](#notifications) im Benachrichtigungsbereich Ihres Geräts.<br/><br/> ![stop-save-pause](@site/static/img/plugins/trip-recording/stop-save-pause_andr.png)


### Übersichts-Bildschirm {#overview-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Übersicht](@site/static/img/plugins/trip-recording/overview_screen_graphs_andr.png) ![Übersicht](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aufzeichnung in iOS beenden](@site/static/img/plugins/trip-recording/start_rec_ios_3.png) ![Aufzeichnung in iOS beenden](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_ios.png)

</TabItem>

</Tabs>

In OsmAnd handhaben die **Android**- und **iOS**-Versionen die Routenaufzeichnungsoberfläche leicht unterschiedlich. Unter Android finden Sie ein dediziertes Menü für den *Routenaufzeichnungs*-Kontext, während dies unter iOS in das Kontextmenü *Aktuell aufgenommene Route* integriert ist.

Während Sie eine Route aufzeichnen, werden dynamische Diagramme generiert, die Echtzeit-Visualisierungen Ihrer Reise liefern. Diese Diagramme können Informationen für die gesamte Route oder nur für ein ausgewähltes Segment anzeigen, abhängig von Ihrem Zoomlevel.
Hier ist, was Sie darauf finden können:

- **Datenwerte**. Auf der rechten Seite des Diagramms befinden sich die ***höchsten***, ***niedrigsten*** und ***durchschnittlichen*** Werte für den sichtbaren Abschnitt der Route.

- **Diagramm für Schlüsselinformationen**:
    - ***Android***. Für die ***Y-Achse*** im Diagramm können Sie *bis zu zwei Parameter* aus allen verfügbaren Daten wie *Höhe*, *Steigung*, *Geschwindigkeit* und [Informationen von externen Sensoren](../plugins/external-sensors.md#trip-recording) auswählen. Für die ***X-Achse*** wählen Sie die Anzeige von *Distanz*, *Zeit* oder *Tageszeit*.
    - ***iOS***. Die Parameter sind in den Reitern *Übersicht*, *Höhe* und *Geschwindigkeit* mit den entsprechenden Werten für die Y-Achse und *Distanz* für die X-Achse organisiert.

- **Statistik**. Für Android wird ein konstanter Satz von Statistikdaten angezeigt, unabhängig von den Diagrammeinstellungen: *Distanz*, *Zeitspanne*, *Bergauf*, *Bergab*, *Durchschnittsgeschwindigkeit*. Für iOS hat jeder Reiter, Übersicht, Höhe und Geschwindigkeit, einen anderen Datensatz.

Für eine detailliertere Ansicht können Sie das **Diagramm skalieren**:

- Verwenden Sie die [Zwei-Finger-Geste](../map/interact-with-map.md#gestures), um hinein- oder herauszuzoomen und sich auf bestimmte Intervalle zu konzentrieren.
- Tippen Sie auf einen beliebigen Punkt im Diagramm, um eine Markierung anzuzeigen, die die genauen Werte für diesen Ort anzeigt.

| |
| ------------- |
|**Übersicht**-Reiter iOS (für Android sind die Y-Achsen-Parameter *Höhe*, *Geschwindigkeit* und der X-Achsen-Parameter *Distanz*). Dieser Reiter zeigt ein Diagramm, das Änderungen in Geschwindigkeit und Höhe entlang der Route sowie wichtige Routendetails darstellt. Routendaten für iOS: *Distanz*, *Zeitspanne*, *Startzeit* und *Endzeit*. Sie können sehen, wie dies in den Android- und iOS-Versionen unten angezeigt wird. |
| ![Daten](@site/static/img/plugins/trip-recording/graph_overview_andr.png) ![Daten](@site/static/img/plugins/trip-recording/graph_overview_ios.png) |
| **Höhe**-Reiter iOS (für Android sind die Y-Achsen-Parameter *Höhe*, *Steigung* und der X-Achsen-Parameter *Distanz*). Dieser Reiter konzentriert sich auf das Höhenprofil Ihrer aufgezeichneten Route und bietet Einblicke in Höhenänderungen und Geländeneigungen. Wichtige Metriken für iOS sind: *Durchschnittliche Höhe*, *Höhenbereich*, *Bergauf* und *Bergab*. Die Diagramme unten veranschaulichen die Unterschiede zwischen Android- und iOS-Oberflächen. |
| ![Daten](@site/static/img/plugins/trip-recording/graph_altitude_andr.png) ![Daten](@site/static/img/plugins/trip-recording/graph_altitude_ios.png) |
| **Geschwindigkeit**-Reiter iOS (für Android ist der Y-Achsen-Parameter *Geschwindigkeit* und der X-Achsen-Parameter *Distanz*). Der Geschwindigkeits-Reiter hebt geschwindigkeitsbezogene Daten während der gesamten Route hervor. Für iOS enthält er Informationen wie *Durchschnittsgeschwindigkeit*, *Höchstgeschwindigkeit*, *Bewegungszeit* und *Korrigierte Distanz*. Die Screenshots unten zeigen, wie diese Daten auf beiden Plattformen angezeigt werden. |
| ![Daten](@site/static/img/plugins/trip-recording/graph_speed_andr.png) ![Daten](@site/static/img/plugins/trip-recording/graph_speed_ios.png) |
| Für **Android** können Sie weitere Kombinationen von verfügbaren Y-Achsen-Daten und X-Achsen-Werten erstellen. |
| ![Daten](@site/static/img/plugins/trip-recording/graph_y-x-combinations_andr.png) |

:::info
Für weitere Details können Sie das [**Routen-Kontextmenü**](../map/tracks/track-context-menu.md#options) erkunden, wo Sie verschiedene routenbezogene Optionen wie Umbenennen, Löschen oder Hinzufügen von Wegpunkten verwalten können. Um anzupassen, wie Routen auf der Karte erscheinen, besuchen Sie den Abschnitt [**Darstellung**](../map/tracks/appearance.md). Wenn Sie bestimmte Wegpunkte zu Ihrer aktuellen Route hinzufügen möchten, lesen Sie die Anleitung [**Routenpunkte**](../map/tracks/track-context-menu.md#points--waypoints). Für Änderungen, wie das Umbenennen einer Route, verwenden Sie den Reiter [**Optionen**](https://osmand.net/docs/user/map/track-context-menu#options) im Routen-Kontextmenü.
:::


### Auf der Karte anzeigen {#show-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![show_tr_onmap_andr_1](@site/static/img/plugins/trip-recording/show_tr_onmap_andr_1.png) ![Kartenrouten konfigurieren Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![sshow_tr_onmap_ios_1](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_1.png) ![Kartenrouten konfigurieren iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)
</TabItem>

</Tabs>

Verwalten Sie die Sichtbarkeit von Routen auf Ihrer Karte mit einer von zwei Optionen. Gehen Sie zu *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*<Translate ios="true" ids="shared_string_gpx_tracks"/> Reiter*](../map/tracks/index.md#my-places) und aktivieren Sie die Option *Auf Karte anzeigen* für jede Route, die Sie anzeigen oder ausblenden möchten. Alternativ können Sie zu *<Translate android="true" ids="shared_string_menu,configure_map"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/>*](../map/tracks/index.md#configure-map) gehen, um die Sichtbarkeit aller Ihrer Routen an einem Ort schnell anzupassen.


### Aufgezeichnete GPX-Datei {#recorded-gpx-file}

OsmAnd erfasst Ihre Reise in einer strukturierten [GPX-Datei](https://en.wikipedia.org/wiki/GPS_Exchange_Format), die eine Hierarchie von *Datei > Route > Segmenten > Punkten* verwendet. So funktioniert es:

- **Punkte** repräsentieren einzelne Momente Ihres aufgezeichneten Pfades, jeder mit Attributen wie Koordinaten, Geschwindigkeit, Höhe und Richtung markiert.
- Diese Punkte werden zu **Routen** gruppiert, die Ihre gesamte Strecke darstellen.
- Wenn es eine Lücke in der Aufzeichnung gibt (z. B. wenn die Verfolgung pausiert wurde), beginnt der nächste Punkt nach der Pause ein neues **Segment**, das die Trennung in Ihrer Reise markiert.
- Sowohl **Segmente** als auch **Routen** werden visuell mit *Start*- und *Ende*-Symbolen auf der Karte dargestellt.

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
|---|---|
| `trkpt` | **Routenpunkt** stellt einen bestimmten geografischen Ort dar, der während Ihrer Aktivität erfasst wurde. Jeder Routenpunkt enthält Breiten- und Längenkoordinaten und bildet die Grundlage Ihres aufgezeichneten Pfades. |
| `trkseg` | **Routensegment** gruppiert aufeinanderfolgende Routenpunkte, die durch Aktivitätsunterbrechungen wie Pausen oder Stopps getrennt sind. Dies hilft, kontinuierliche Bewegung von Ruhezeiten innerhalb einer einzelnen Aufzeichnung zu unterscheiden. |
| `lat` | **Breitengrad** gibt die Nord-Süd-Position eines Punktes auf der Erdoberfläche an. Er ist eine Hälfte des Koordinatenpaares, das zur genauen Bestimmung Ihres Standortes verwendet wird. |
| `lon` | **Längengrad** gibt die Ost-West-Position an und ergänzt den Breitengrad, um einen Punkt auf dem Globus genau zu lokalisieren. Zusammen definieren Breiten- und Längengrad Ihre genaue geografische Position. |
| `ele` | **Höhe** misst die Höhe eines Routenpunktes über dem Meeresspiegel, aufgezeichnet in Metern. Dies kann nützlich sein, um Höhenänderungen während Ihrer Aktivitäten, wie Wanderungen oder Radtouren, zu verfolgen. |
| `time` | **Zeitstempel** zeichnet das genaue Datum und die Uhrzeit auf, zu der ein Routenpunkt protokolliert wird. Dies ermöglicht es Ihnen, die Dauer und den Zeitpunkt Ihrer Aktivität präzise zu verfolgen. |
| `hdop` | **Horizontale Genauigkeitsverdünnung (HDOP)** ist ein Maß für die GPS-Genauigkeit, das den potenziellen Fehler in der Position aufgrund der Positionen der Satelliten widerspiegelt. Im Gegensatz zum Standard-HDOP verwenden OsmAnd GPX-Routen diesen Wert, um die horizontale Genauigkeit in Metern darzustellen. Bitte beachten Sie, dass diese Implementierung von typischen HDOP-Standards abweicht. [Erfahren Sie mehr](https://github.com/osmandapp/Osmand/issues/3445). |
| `speed` | **Geschwindigkeit** zeichnet Ihre Bewegungsgeschwindigkeit in Metern pro Sekunde auf. Sie gibt Aufschluss über Ihr Tempo während verschiedener Abschnitte Ihrer Aktivität. |
| `heading` | **Richtung** gibt die Richtung an, in die Ihr Fahrzeug oder Gerät zeigt, gemessen in Grad. Sie unterscheidet sich vom Kurs, der der tatsächliche Bewegungspfad ist. Unterschiede können aufgrund externer Faktoren wie Wind, Strömungen oder Straßenbedingungen auftreten. [Mehr zur Richtung](https://en.wikipedia.org/wiki/Heading_(navigation)). |
| `speed_sensor` | **Geschwindigkeit** von [externen Sensoren](../plugins/external-sensors.md) erfasst Daten von verbundenen Sensoren und liefert präzisere Geschwindigkeitsinformationen, besonders nützlich beim Radfahren. Weitere Details finden Sie in der [GPX-Dateiformatdokumentation](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `cadence` | **Trittfrequenz** misst die Anzahl der Pedal-Umdrehungen pro Minute, aufgezeichnet mit [externen Sensoren](../plugins/external-sensors.md). Dies ist besonders nützlich für Radfahrer, die ihre Treteffizienz überwachen und optimieren möchten. [Lesen Sie mehr](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `power` | **Fahrradleistung** quantifiziert die beim Treten erzeugte Leistung, erfasst von [externen Sensoren](../plugins/external-sensors.md). Es ist eine wesentliche Metrik für ernsthafte Radfahrer, die ihre Leistung messen möchten. [Erfahren Sie mehr](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `atemp` | **Lufttemperatur** zeichnet die Umgebungslufttemperatur während Ihrer Aktivität auf, gemessen mit [externen Sensoren](../plugins/external-sensors.md). Beachten Sie, dass die Wassertemperatur nicht unterstützt wird. [Details hier](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `hr` | **Herzfrequenz** überwacht Ihre Herzschläge pro Minute, unter Verwendung von Daten von verbundenen [Sensoren](../plugins/external-sensors.md). Diese Informationen können entscheidend sein, um Ihre kardiovaskuläre Leistung während des Trainings zu verfolgen. [Erfahren Sie mehr](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |


## Aufzeichnungseinstellungen {#recording-settings}

Bevor Sie Ihre Routen verfolgen, müssen Sie das **Routenaufzeichnungs-Plugin** für eine optimale Leistung richtig konfigurieren.

- **Profilspezifische Einstellungen**. Jedes Profil in der App kann seine eigenen einzigartigen Routenaufzeichnungseinstellungen haben. Dies ermöglicht es Ihnen, das Aufzeichnungsverhalten präzise an Ihre Aktivität anzupassen, wie z. B. Autofahren, Radfahren oder sogar Nordic Walking, die möglicherweise unterschiedliche Konfigurationen erfordern.

- **Aufzeichnungsparameter anpassen**. Die Aufzeichnungseinstellungen können je nach Ihrer Bewegung variieren. Zum Beispiel könnte das Fahren langer Strecken eine geringere Aufzeichnungsfrequenz erfordern, während Wandern oder Spazierengehen von häufigeren Aktualisierungen profitieren könnte.

- **Präzise Standortdaten**. Um sicherzustellen, dass Ihre Aufzeichnungen reibungslos und für die zukünftige Verwendung nutzbar sind, können Sie die Art und Weise anpassen, wie Sie Standortpunkte erfassen. Dies könnte das Anpassen der Aufzeichnungsfrequenz, des Formats Ihrer Daten (wie die Anzahl der Punkte pro Entfernungseinheit) oder des Abstands zwischen aufgezeichneten Punkten umfassen.

- **Globale Einstellungen**. Die Routenaufzeichnungseinstellungen werden pro Profil konfiguriert, die Sie in den globalen [Einstellungen](../personal/global-settings.md) der App verwalten können. Bevor Sie das Routenaufzeichnungs-Plugin anpassen, wählen Sie das Profil, das Sie konfigurieren möchten, aus dem Abschnitt [Profile](../personal/profiles.md) aus. Von dort aus navigieren Sie zu den Einstellungen des Profils, um auf die Routenaufzeichnungsoptionen zuzugreifen.


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
| **Route während der Navigation automatisch aufzeichnen** | Zeichnet die Route während der Navigation automatisch auf und speichert sie im Reiter *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*. <br />*Hinweis*: Die Routenaufzeichnung verbraucht Batterie und läuft im Hintergrund weiter, auch wenn der Bildschirm ausgeschaltet ist. |
| **Allgemeines Protokollierungsintervall** | Definiert, wie oft Standortpunkte aufgezeichnet werden. Der Standardwert ist 5 Sekunden. Es wird mit dem *Routenaufzeichnungs-Widget* aktiviert. |
| **Minimale Verschiebung** | Ein Filter, um die Aufzeichnung von Punkten bei geringer oder keiner Bewegung zu vermeiden. Er hilft, Datenrauschen zu reduzieren.<ul><li>*Nebenwirkungen*: Ruhezeiten werden möglicherweise nicht aufgezeichnet, und kleine Bewegungen können ignoriert werden. Dies kann die Nachbearbeitung von Daten reduzieren, aber auch verhindern, dass GPS-Fehler protokolliert werden.</li><li>*Empfehlung*: Setzen Sie die Verschiebung auf 5 Meter, wenn Sie weniger geringfügige Details in Ihren Aufzeichnungen wünschen.</li></ul> |
| **Minimale Genauigkeit** | Filtert Standortpunkte unterhalb eines Mindestgenauigkeits-Schwellenwerts heraus, wie vom Gerät gemeldet.<ul><li>*Nebenwirkungen*: Punkte in Bereichen mit schlechtem Signal (unter Brücken, Bäumen, zwischen Gebäuden oder bei bestimmten Wetterbedingungen) können fehlen.</li><li>*Empfehlung*: Im Zweifelsfall ist es besser, diesen Filter zu deaktivieren, um Datenverluste zu vermeiden.</li></ul><details><summary>*Anmerkung*</summary>Angenommen, das GPS wurde kurz vor der Aufzeichnung ausgeschaltet. In diesem Fall kann der erste gemessene Punkt eine reduzierte Genauigkeit aufweisen, daher ist es besser, eine Weile zu warten, bevor der Punkt aufgezeichnet wird, oder den besten von 3 aufeinanderfolgenden Punkten aufzuzeichnen.</details> |
| **Minimale Geschwindigkeit** | Legt einen Schwellenwert fest, um Punkte zu ignorieren, die unter einer bestimmten Geschwindigkeit aufgezeichnet wurden.<ul><li>*Nebenwirkungen*: Abschnitte, in denen die Geschwindigkeit unter einen bestimmten Schwellenwert fällt, werden nicht aufgezeichnet.</li><li>*Empfehlung*: Verwenden Sie stattdessen den Filter *Minimale Verschiebung*, da dieser bessere Ergebnisse liefern kann, ohne wichtige Daten zu verlieren.</li></ul><details><summary>*Anmerkung*</summary>Versuchen Sie zuerst, die Bewegungserkennung über den Filter für die minimale Protokollierungsverschiebung (B) zu verwenden, dies kann bessere Ergebnisse liefern, und Sie verlieren weniger Daten. Wenn Ihre Routen bei niedrigen Geschwindigkeiten weiterhin verrauscht sind, versuchen Sie hier Nicht-Null-Werte. Bitte beachten Sie, dass einige Messungen überhaupt keinen Geschwindigkeitswert melden (einige netzwerkbasierte Methoden), in welchem Fall Sie nichts aufzeichnen würden.<br/><br/>Geschwindigkeit > 0 Prüfung: Die meisten GPS-Chipsätze melden einen Geschwindigkeitswert nur, wenn der Algorithmus feststellt, dass Sie in Bewegung sind, und keinen, wenn Sie es nicht sind. Daher verwendet die Einstellung > 0 in diesem Filter in gewisser Weise die Bewegungserkennung des GPS-Chipsatzes. Aber selbst wenn hier zum Zeitpunkt der Aufzeichnung nicht gefiltert wird, verwenden wir diese Funktion immer noch in unserer GPX-Analyse, um die korrigierte Distanz zu bestimmen, d.h. der in diesem Feld angezeigte Wert ist die Distanz, die während der Bewegung aufgezeichnet wurde.</details> |
| **Aufzeichnungen nach Lücke automatisch teilen** | Teilt Routen automatisch basierend auf Zeitlücken zwischen aufgezeichneten Punkten. <ul><li>Ein neues Segment beginnt nach einer 6-minütigen Lücke.</li><li>Eine neue Route beginnt nach einer 2-stündigen Lücke.</li><li>Eine neue Datei beginnt, wenn sich das Datum ändert.</li><li>Lücken können durch GPS-Signalverlust, geringe Geschwindigkeit oder Konfigurationseinstellungen entstehen.</li></ul><details><summary>*Anmerkung*</summary>Eine Lücke wird identifiziert, wenn keine Punkte aufgezeichnet werden. Dies kann entweder geschehen, weil der Standort nicht erkannt wird oder weil er erkannt, aber nicht aufgezeichnet wird. Mehrere Faktoren können dies verursachen, einschließlich schwacher GPS-Signale aufgrund schlechter Wetterbedingungen oder der Bewegungsgeschwindigkeit, die unter den konfigurierten Schwellenwert fällt. In solchen Fällen, obwohl das Gerät den Standort erkennen kann, zeichnet es ihn nicht auf.<br/><br/>Diese Lücken in den aufgezeichneten Daten können die Erstellung eines neuen Segments innerhalb derselben Route, einer neuen Route in derselben Datei oder einer neuen GPX-Datei innerhalb einer Aufzeichnung auslösen. Dies wird innerhalb einer einzigen Start-/Stopp-Aufzeichnungssitzung verwaltet.</details> |
| **Eigenständige Protokollierung verhindern** (*Android*) | Pausiert die Routenaufzeichnung, wenn die OsmAnd-App beendet wird (über *aktuelle Apps*). Die Hintergrundanzeige wird im Android-Benachrichtigungsfeld nicht angezeigt. |
| **Richtung einbeziehen** | Zeichnet die Richtung (Bewegungsrichtung) für jeden Punkt in der GPX-Datei auf. Die Richtung ist die Richtung, in die das Gerät zeigt, die aufgrund externer Faktoren wie Wind oder Schleudern von der Bewegungsrichtung abweichen kann. |
| **Aktivität** | Die Option ermöglicht es Ihnen, einen [Aktivitätstyp](../map/tracks/track-context-menu.md#track-information-activity) für ein Profil vorzuwählen, der dann automatisch auf alle aufgezeichneten Routen angewendet wird. |
| **Externe Sensoren** <br/> *Plugin muss aktiviert sein* | Daten von [externen Sensoren](../plugins/external-sensors.md#trip-recording) wie *<Translate android="true" ids="map_widget_ant_heart_rate"/>* oder *<Translate android="true" ids="map_widget_ant_bicycle_speed"/>* werden in der GPX-Datei protokolliert. *Entfernungsdaten* werden weder auf Android noch auf iOS aufgezeichnet. Nur angezeigt, wenn das [Plugin für externe Sensoren](../plugins/external-sensors.md) aktiviert ist. |
| **Fahrzeugmetriken** (*Android*) <br/> *Plugin muss aktiviert sein* | Daten vom [OBD-II-Scanner](../plugins/vehicle-metrics.md#trip-recording) werden in der GPX-Datei protokolliert. Nur angezeigt, wenn das [Plugin Fahrzeugmetriken](../plugins/vehicle-metrics.md) aktiviert ist.<br />*Hinweis*: Sie können auswählen, welche Metriken in der GPX-Datei aus der Liste aufgezeichnet werden sollen: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_trip_recording,shared_string_settings"/>* |
| **Routen-Speicherordner** (*Android*) | Definiert, wo im Reiter *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>* aufgezeichnete Routen gespeichert werden. Optionen umfassen das Speichern aller Routen im Ordner Rec oder deren Organisation nach Monat, z. B. Rec/jjjj-mm. |
| **Benachrichtigung** | Steuert die Anzeige einer [Routenaufzeichnungs-Systembenachrichtigung](#notifications) im Benachrichtigungsbereich des Geräts, die es Ihnen ermöglicht, Routenaufzeichnungen zu starten. |
| **Online-Tracking** (*Android*) | Ermöglicht die Echtzeit-Verfolgung Ihres Standorts durch Senden aufgezeichneter Punkte an eine angegebene URL. Das Tracking-Intervall bestimmt, wie oft Punkte gesendet werden, und der Zeitpuffer speichert Punkte, wenn keine Internetverbindung besteht.<details><summary>*Anmerkung*</summary>Wenn diese Option aktiviert ist und die Routenaufzeichnung läuft, wird das Entfernungs-/Start-Stopp-Widget (REC) **grün** statt **rot**, was anzeigt, dass jeder aufgezeichnete Punkt an eine angegebene URL übertragen wird. Das Feld **Webadresse** ermöglicht es Ihnen, die URL mit dem folgenden Parameterformat einzugeben:<ul><li>`lat={0}`: Breitengrad</li><li>`lon={1}`: Längengrad</li><li>`timestamp={2}`: Zeitstempel (Unix-Zeit)</li><li>`hdop={3}`: Horizontale Genauigkeitsverdünnung</li><li>`altitude={4}`: Höhe</li><li>`speed={5}`: Geschwindigkeit</li><li>`bearing={6}`: Peilung (Bewegungsrichtung)</li><li>`eta={7}`: Geschätzte Ankunftszeit (Unix-Zeit)</li><li>`etfa={8}`: Geschätzte Zeit bis zum ersten Zwischenpunkt oder Endpunkt (Unix-Zeit)</li><li>`eda={9}`: Geschätzte Entfernung bis zur Ankunft oder einem Marker (in Metern)</li><li>`edfa={10}`: Geschätzte Entfernung bis zum ersten Zwischenpunkt oder Endpunkt (in Metern)</li></ul>Sie können das **Tracking-Intervall** festlegen, um anzugeben, wie oft Standortpunkte gesendet werden, mit Optionen von 0 Sekunden bis 5 Minuten. Zusätzlich bestimmt der Parameter **Zeitpuffer**, wie lange Standortpunkte gespeichert werden, wenn keine Internetverbindung besteht, um sicherzustellen, dass Daten gespeichert und übertragen werden, wenn die Verbindung wiederhergestellt ist.</details> |
| **Routen** | Ein schneller Verweis auf den Ordner, in dem Routen gespeichert werden, im Reiter *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*. |
| **Plugin-Einstellungen auf Standard zurücksetzen** | Setzt alle Routenaufzeichnungseinstellungen für das aktuelle Profil auf ihre Standardwerte zurück. |
| **Von anderem Profil kopieren** (*Android*) | Kopiert die Routenaufzeichnungseinstellungen von einem Profil in ein anderes. |


### Batterieoptimierung {#battery-optimization}

<InfoAndroidOnly />

![Route auf der Karte iOS](@site/static/img/plugins/trip-recording/battery_2_andr.png) ![Route auf der Karte iOS](@site/static/img/plugins/trip-recording/battery_1_andr.png)

Diese Funktion ermöglicht es Ihnen, die Batterieoptimierungseinstellungen für OsmAnd zu verwalten, um einen ununterbrochenen Zugriff auf Ihren Standort zu gewährleisten, auch wenn die App im Hintergrund während der Navigation oder Routenaufzeichnung läuft.

- **Batterieoptimierungseinstellungen**. Öffnet die Android-Einstellungen, wo Sie die Batteriespar-Einstellungen für OsmAnd ändern können. [Weitere Details hier](../troubleshooting/general.md#optimizing-battery-consumption).
- **Nicht mehr fragen**. Schließt das Dialogfeld dauerhaft, sodass es nicht wieder angezeigt wird.
- **Schließen**. Schließt das Dialogfeld vorübergehend, das beim nächsten Mal, wenn die Batterieoptimierung Aufmerksamkeit erfordert, wieder angezeigt wird.


### Benachrichtigungen {#notifications}

![Routenaufzeichnungs-Benachrichtigung](@site/static/img/plugins/trip-recording/trip_rec_notific_1_andr.png)

Wenn [Benachrichtigung](#recording-settings) in den Plugin-Einstellungen aktiviert ist, werden Routenaufzeichnungs-Benachrichtigungen immer im Systembenachrichtigungsbereich angezeigt, wenn die Aufzeichnung aktiv ist. Diese Benachrichtigung stellt sicher, dass der Aufzeichnungsprozess nicht vom System unterbrochen wird, und sie kann während einer aktiven Aufzeichnung nicht deaktiviert werden.

- Der Benachrichtigungsbereich öffnet sich, wenn Sie vom oberen Bildschirmrand nach unten wischen, und schließt sich, wenn Sie nach oben wischen. Diese Nachrichten informieren Sie über Aktionen wie das Starten/Stoppen der Routenaufzeichnung, insbesondere wenn die automatische Aufzeichnung während der Navigation aktiviert ist.
- Benachrichtigungen bleiben sichtbar, unabhängig davon, ob die App im Vordergrund, Hintergrund läuft oder geschlossen ist. Sie können die alte Benachrichtigung manuell löschen, wenn sie nicht mehr benötigt wird, aber dies stoppt die laufende Aufzeichnung nicht.

**Wichtiger Hinweis**.

Dieses Verhalten wird von Android für jeden Vordergrunddienst, wie die Routenaufzeichnung, verlangt, um für Sie sichtbar zu bleiben.

- Wenn die Benachrichtigung entfernt wird, stoppt Android die Aufzeichnung automatisch. Sie können die Einstellung [Eigenständige Protokollierung verhindern](#recording-settings) verwenden.
- Die Einstellung **Benachrichtigung** in OsmAnd beeinflusst, ob die Benachrichtigungsleiste eine Verknüpfung zum Starten einer Aufzeichnung anzeigt, wenn keine Aufzeichnung aktiv ist. Sie steuert **nicht** die Sichtbarkeit der Benachrichtigung während einer aktiven Aufzeichnung.

**Zusätzliche Android-Optionen**.

![Routenaufzeichnungs-Benachrichtigung](@site/static/img/plugins/trip-recording/trip_rec_notification_andr.png)

- In ***Android-Einstellungen → Benachrichtigungen und Statusleiste → Sperrbildschirmbenachrichtigungen*** können Sie OsmAnd aus der App-Liste entfernen, um zu verhindern, dass Benachrichtigungen auf dem Sperrbildschirm angezeigt werden, und so eine versehentliche Bildschirmaktivierung vermeiden. Dies hat keine Auswirkungen auf die Routenaufzeichnung. Benachrichtigungen werden weiterhin im regulären Benachrichtigungsbereich angezeigt.
- **OsmAnd** kann auch unter ***Datenschutz → Besondere Berechtigungen → Bildschirm einschalten*** erscheinen. Wenn Sie verhindern möchten, dass sich der Bildschirm einschaltet, wenn eine Benachrichtigung erscheint, versuchen Sie, OsmAnd aus dieser Liste zu entfernen.

<!--
- OsmAnd ist nicht unter **Datenschutz** *→* **Besondere Berechtigungen** → **Alarme und Erinnerungen** aufgeführt.
-->

**Badge-Benachrichtigung**.

![Routenaufzeichnungs-Benachrichtigung](@site/static/img/plugins/trip-recording/trip_rec_notification_badge_andr.png)

Das App-Symbol-Badge erscheint neben dem OsmAnd-Symbol, wenn die Routenaufzeichnung aktiv ist.

- Dieses Symbol verschwindet, wenn die Routenaufzeichnung abgeschlossen ist. Um zu überprüfen, ob eine Aufzeichnung aktiv ist, können Sie zu *Menü → Meine Orte → Reiter Routen* gehen oder auf das Widget tippen, um die Aufzeichnung zu verwalten.
- Wenn keine Aufzeichnung läuft und das Badge immer noch angezeigt wird, kann dies bedeuten, dass eine Nachricht von OsmAnd im Benachrichtigungsfeld des Geräts hinterlassen wurde.
- Um Badges in den Android-Einstellungen zu deaktivieren, gehen Sie zu den Geräteeinstellungen *→ Apps → OsmAnd → Benachrichtigungen* und deaktivieren Sie die Option zur Anzeige von Badges für diese App.


## Widgets {#widgets}

Widgets ermöglichen es Ihnen, wichtige Informationen zur Routenaufzeichnung direkt auf dem Bildschirm anzuzeigen, wie z. B. *Distanz*, *Dauer*, *Bergauf* und *Bergab*.

Um *Routenaufzeichnungs-Widgets* zu verwenden, müssen Sie alle folgenden Einstellungen vornehmen:

1. Das [Plugin aktivieren](../start-with/first-steps.md#how-to-configure-plugins).
2. Routenaufzeichnungseinstellungen für das erforderliche [Profil](../personal/profiles.md) konfigurieren.
3. Die notwendigen **Routenaufzeichnungs-Widgets** zum Bildschirm hinzufügen. Beachten Sie, dass diese Konfiguration **profilspezifisch** ist.


### Aufzeichnungs-Widget hinzufügen {#add-recording-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Ein Panel auswählen → <Translate android="true" ids="map_widget_monitoring"/>*

![Entfernungs-/Start-Stopp-Widget in Android hinzufügen](@site/static/img/plugins/trip-recording/add_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Ein Panel auswählen → <Translate android="true" ids="map_widget_monitoring"/>*

![Aufzeichnungs-Widgets in iOS hinzufügen](@site/static/img/plugins/trip-recording/add_recording_widgets_ios.png)

</TabItem>

</Tabs>

Das [Routenaufzeichnungs-Widget](../widgets/info-widgets.md#trip-recording-widgets) bietet eine einfache Möglichkeit, Ihren Aufzeichnungsstatus zu überwachen und schnell auf Aufzeichnungseinstellungen und Details zuzugreifen. Dieses Widget wird automatisch zu Ihrem Bildschirm hinzugefügt, wenn das Routenaufzeichnungs-Plugin aktiviert ist.

Um Ihre Benutzeroberfläche anzupassen, können Sie das Routenaufzeichnungs-Widget und [andere Widgets](../plugins/trip-recording#duration-uphill-downhill) über das Menü „Bildschirm konfigurieren“ hinzufügen oder entfernen.


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

Wenn Widgets auf der Karte angezeigt werden, zeigt das Tippen auf eines davon zusätzliche Routendetails an und ermöglicht die Interaktion mit der Aufzeichnung.
Das *Distanz*-Widget zeigt die Gesamtdistanz Ihrer aktuell aufgezeichneten Route an und dient als Hauptschnittstelle zur Verwaltung Ihrer Aufzeichnungen. Das Tippen darauf öffnet den [Routenaufzeichnungsdialog](#start-a-dialog), wo Sie detaillierte Informationen zu Ihrer Route starten, stoppen und anzeigen können.

- Das Widget wird automatisch hinzugefügt, wenn das *Routenaufzeichnungs-Plugin* aktiviert ist, kann aber über das [Bildschirm konfigurieren-Menü](../widgets/configure-screen.md#configure-screen-menu) ausgeblendet werden.
- Wenn die Option *Startdialog anzeigen* in den Einstellungen des Routenaufzeichnungs-Plugins deaktiviert ist, öffnet das Tippen auf das aktive Widget trotzdem das Dialogfeld *Routenaufzeichnung*, sodass Sie auf weitere Optionen und Informationen zugreifen können.

Zusätzlich zum *Distanz-/Start-Stopp*-Widget enthält das **Routenaufzeichnungs-Plugin** drei weitere Widgets: *Dauer*, *Bergauf* und *Bergab*. Diese liefern zusätzliche Informationen über Ihre Reise und helfen Ihnen, den Fortschritt in Echtzeit zu verfolgen.

| |
|-----------|
| **Distanz/Start-Stopp**. Dieses Widget zeigt die Distanz Ihrer laufenden Routenaufzeichnung an. Es wird automatisch hinzugefügt, wenn das Routenaufzeichnungs-Plugin aktiviert ist, kann aber über das Menü „Bildschirm konfigurieren“ ausgeblendet werden. Das Widget verfügt über drei verschiedene Zustände: *Aufnahme*, *Pausiert* und *Inaktiv*, die jeweils den aktuellen Status Ihrer Routenaufzeichnung anzeigen. |
| ![Routenaufzeichnungs-Widget (REC)](@site/static/img/widgets/tr_rec_wid_rec.png) |
| Um den [Routenaufzeichnungsdialog](#start-a-dialog) zu öffnen, wenn Sie auf ein inaktives Widget tippen, aktivieren Sie die Option *Startdialog anzeigen* in den Einstellungen des Routenaufzeichnungs-Plugins. Wenn die Option deaktiviert ist, beginnt die Aufzeichnung sofort nach dem Tippen auf das Widget, ohne den Dialog zu öffnen.|


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
|**Bergauf**. Zeigt den kumulierten Höhengewinn für die aktuelle Routenaufzeichnung an. |
|![Widgets](@site/static/img/widgets/tr_rec_wid_up.png)|
|**Bergab**. Zeigt den gesamten Abstieg an, der während der aktuellen Routenaufzeichnung gesammelt wurde. |
|![Widgets](@site/static/img/widgets/tr_rec_wid_dow.png)|

Wenn Sie mehrere Widgets ausgewählt haben – *Dauer*, *Bergauf* oder *Bergab* – können Sie auf dasselbe Dialogfeld für jedes zugreifen, ohne wechseln oder es schließen zu müssen. Diese einheitliche Benutzeroberfläche macht es einfach, alle zugehörigen Informationen nahtlos anzuzeigen und zu verwalten.


## Verwandte Artikel {#related-articles}

- [Karten-Kontextmenü](../map/map-context-menu.md)
- [Route auf Karte anzeigen](../map/tracks/index.md)
- [Auf Karte analysieren](../map/tracks/index.md#analyze-track-on-map)
- [Routen-Kontextmenü](../map/tracks/track-context-menu.md)
- [Navigation nach Route](../navigation/setup/gpx-navigation.md)

### Häufige Probleme und Lösungen {#common-issues-and-solutions}

- Routenaufzeichnung startet nicht.
    - Stellen Sie sicher, dass das **Routenaufzeichnungs-Plugin** aktiviert ist: *Menü → Plugins → Routenaufzeichnung → Aktivieren*.
    - Überprüfen Sie, ob die Einstellungen korrekt sind: *Menü → Profil konfigurieren → Plugin-Einstellungen → Routenaufzeichnung*.
    - Wenn die Aufzeichnung immer noch nicht startet, starten Sie die App neu und versuchen Sie es erneut.

- Routenaufzeichnung stoppt unerwartet.
    - Überprüfen Sie, ob die *Batterieoptimierungseinstellungen* Ihres Geräts die Aufzeichnung stoppen. Einige Geräte können Hintergrundaktivitäten pausieren, um Energie zu sparen. Gehen Sie zu *Geräteeinstellungen → Batterie*.

- Aufgezeichnete Distanz stimmt nicht mit der tatsächlichen Distanz überein.
    - Überprüfen Sie, ob GPS aktiviert ist und ein aktives Signal hat.
    - Reduzieren Sie den GPS-Genauigkeitsschwellenwert: *Menü → Profil konfigurieren → Routenaufzeichnung → Minimale Genauigkeit*.

- Aufgezeichnete Routen sind verrauscht. [(prüfen)](../troubleshooting/track-recording-issues.md#recorded-tracks-are-noisy).
- Aufgezeichnete Routen haben Lücken. [(prüfen)](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps)
- Wie man die zurückgelegte Distanz verfolgt. [(prüfen)](../troubleshooting/track-recording-issues.md#how-to-track-traveled-distance)

Für weitere Fehlerbehebung besuchen Sie: [Fehlerbehebung bei der Routenaufzeichnung](https://osmand.net/docs/user/troubleshooting/track-recording-issues).

> *Zuletzt aktualisiert: Januar 2025*