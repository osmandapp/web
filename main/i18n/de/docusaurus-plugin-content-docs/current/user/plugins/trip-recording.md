---
source-hash: e1a3f5ce0d81dca7643a74c1b296a1fe55655bb835af2e641fc8bfd97ffe611a
sidebar_position: 15
title:  Aufnahme von Touren
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

Das **Plugin zur Aufnahme von Touren** ist ein unverzichtbares Werkzeug zur Aufzeichnung Ihrer Routen, Bewegungen und Trainingseinheiten. Mit dieser Funktion können Sie nicht nur Ihre Touren aufzeichnen, sondern Ihre Tracks auch einfach wiederverwenden, ändern, aktualisieren und mit anderen teilen.

Mit dem *Plugin zur Aufnahme von Touren* können Sie neue Tracks erstellen, aufgezeichnete Tracks direkt auf der Karte anzeigen und bestehende Aufzeichnungen verwalten. Es bietet wertvolle Einblicke in Ihre Touren, wie z. B. Geschwindigkeit, Höhenunterschiede, Geländedetails und Daten von externen Sensoren. Das Plugin zeichnet Ihre Route auf und ermöglicht so eine detaillierte Analyse und Weitergabe nach Ihrer Tour.

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

1. [Aktivieren](../plugins/index.md#enable--disable) Sie das **Plugin zur Aufnahme von Touren**.
2. [Konfigurieren](#recording-settings) Sie die **Aufnahmeeinstellungen** für das erforderliche [Profil](../personal/profiles.md).
3. [Fügen](#widgets) Sie **Widgets zur Aufnahme von Touren** zum Bildschirm hinzu (optional).
4. Verwalten Sie Tracks auf der Karte (optional).


## Neue Track-Aufnahme {#new-track-recording}

![Entfernungs-/Start-Stopp-Widget in iOS](@site/static/img/plugins/trip-recording/create_new_track_and-1.png) ![Entfernungs-/Start-Stopp-Widget in Android](@site/static/img/plugins/trip-recording/create_new_track_ios-1.png)

Mit dem Plugin zur Aufnahme von Touren in OsmAnd können Sie ganz einfach mit der Aufzeichnung Ihres Tracks beginnen, indem Sie eine Vielzahl praktischer Optionen nutzen. So können Sie Ihre Reise beginnen:

- [Entfernungs-/Start-Stopp-Widget](#distance-start-stop) – Zum Aktivieren der Aufzeichnung verwenden.

- [<Translate android="true" ids="start_recording"/>](../personal/myplaces.md#tracks) – Tippen Sie auf die Schaltfläche in der Registerkarte *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.

- [Schnellaktionsschaltflächen](../widgets/quick-action.md#add-and-delete-actions) – Um eine Tour aufzuzeichnen, gehen Sie zu *Menü → Bildschirm konfigurieren → Benutzerdefinierte Schaltflächen → Schnellaktion → Aktion hinzufügen → Meine Orte* und wählen Sie [Start / Pause: Aufnahme von Touren](../widgets/quick-action.md#my-places).

- *Nur Android*:
    - Gehen Sie zu *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*.

    - [Systembenachrichtigung](#notifications) – Im Benachrichtigungsbereich Ihres Geräts verwenden.

    - [Anwendungsstarter](#launcher-android) – Zum Starten der Aufzeichnung verwenden.

**Empfehlungen:**

- [Präziser Standort](../start-with/first-steps.md#permission-to-access-the-location) – Stellen Sie für eine genaue Track-Aufzeichnung sicher, dass OsmAnd diese Berechtigung hat.

- [Fehlerbehebung](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps) – **iOS-Geräte** können manchmal Apps, die im Hintergrund laufen, vorübergehend **anhalten oder stoppen**, was die Track-Aufzeichnung unterbrechen könnte.

- **Standortquelle** (*Nur Android*) – Passen Sie die Einstellungen in OsmAnd an, um den am besten geeigneten GPS-Anbieter für genaue Aufzeichnungen auszuwählen. [Erfahren Sie hier mehr](../personal/global-settings.md#location-source).


### Startdialog {#start-a-dialog}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Der Startdialog wird geöffnet, wenn die Option **<Translate android="true" ids="show_start_dialog"/>** im Einstellungsbereich des Startdialogs aktiviert ist.

![Aufnahme starten in Android](@site/static/img/plugins/trip-recording/start_rec_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

Der Startdialog wird geöffnet, wenn die Option **<Translate ios="true" ids="track_interval_remember"/>** nicht aktiviert ist.

![Aufnahme starten in iOS](@site/static/img/plugins/trip-recording/start_rec_ios_1.png)

</TabItem>

</Tabs>

- **Protokollierungsintervall** (*Android/iOS*). Diese Einstellung steuert, wie oft die App Daten vom GPS-Sensor anfordert, um neue Punkte auf Ihrem Track zu markieren. Durch Anpassen des Intervalls können Sie zwischen Track-Detail und Batterieverbrauch abwägen. Ein kürzeres Intervall führt zu detaillierteren Tracks, aber höherem Batterieverbrauch, während ein längeres Intervall Batterie spart, aber die Track-Genauigkeit reduziert.

- **Liniensymbol** (*Android*). Tippen Sie auf dieses Symbol, um auf die [Track-Darstellungsoptionen](../map/tracks/appearance.md) zuzugreifen. Hier können Sie anpassen, wie Ihr Track auf der Karte angezeigt wird, einschließlich Linienfarbe, Dicke und Stil. Sobald Sie einen Track mit einer angepassten Darstellung speichern, werden diese Einstellungen für zukünftige Aufzeichnungen beibehalten, um Konsistenz bei jeder Anzeige oder erneuten Aktivierung des Tracks zu gewährleisten.

- **Einstellungsmenü** (*Android*). Greifen Sie auf dieses Menü zu, um Ihre Aufnahmeeinstellungen zu optimieren. Eine detaillierte Übersicht finden Sie im Abschnitt [Einstellungen zur Aufnahme von Touren](#recording-settings).

- **Meine Auswahl merken** (*iOS*). Wenn diese Option aktiviert ist, beginnt die Track-Aufzeichnung automatisch, ohne dass zusätzliche Einstellungen oder Bestätigungen abgefragt werden. Wenn Sie die Aufnahmeeinstellungen ändern möchten, bevor Sie einen neuen Track starten, starten Sie das Plugin zur Aufnahme von Touren neu, damit das Einstellungsmenü wieder angezeigt wird.


### Launcher (Android) {#launcher-android}

![Kontextmenü des Symbols](@site/static/img/plugins/trip-recording/launcher_icon_andr.png) ![Symbol Aufnahme starten](@site/static/img/plugins/trip-recording/and_trip_rec_icon.png)

Sie können eine neue Track-Aufzeichnung schnell direkt vom Bildschirm Ihres Android-Geräts aus über das Kontextmenü des OsmAnd-App-Symbols starten.

- **Langes Tippen** auf das OsmAnd-App-Symbol öffnet das Kontextmenü, in dem Sie die Option **Aufnahme starten** finden.

- Tippen Sie auf die Option **Aufnahme starten**, um die OsmAnd-App mit den auf dem Bildschirm angezeigten [Einstellungen zur Track-Aufzeichnung](#overview-screen) zu starten.

- **Langes Tippen** auf die Option **Aufnahme starten** im Kontextmenü des App-Symbols, um eine Verknüpfung für schnelleren Zugriff hinzuzufügen.

Während die Track-Aufzeichnung aktiv ist, wird ein Benachrichtigungsabzeichen in der Ecke des OsmAnd-App-Symbols angezeigt, das anzeigt, dass die Aufzeichnung läuft. Weitere Details zur Verwaltung dieser Benachrichtigung finden Sie im Abschnitt [Benachrichtigung](#notifications).


## Aktuelle Track-Aufzeichnung {#current-track-recording}

Zum *Stoppen / Speichern / Pausieren*:

- Um die Aufzeichnung zu **stoppen**, tippen Sie auf die entsprechende Schaltfläche im Dialogfeld des [Entfernungs-/Start-Stopp-Widgets](#distance-start-stop).

- (*Nur Android*) Um die Aufzeichnung zu **stoppen**, tippen Sie auf den Menüpunkt *Aufnahme von Touren* im Hauptmenü.

- Um einen aufgezeichneten Track zu **stoppen** oder zu **speichern**, gehen Sie zu *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/> Registerkarte*](../personal/myplaces.md#tracks) und tippen Sie auf die entsprechende Schaltfläche im Feld *Aktuell aufgenommener Track*.

- Um eine neue Strecke zu **speichern, pausieren, starten** oder die Aufzeichnung zu **beenden**, verwenden Sie die [Schnellaktionsschaltflächen](../widgets/quick-action.md#add-and-delete-actions). Gehen Sie zu *Menü → Bildschirm konfigurieren → Benutzerdefinierte Schaltflächen → Schnellaktion → Aktion hinzufügen → [Meine Orte](../widgets/quick-action.md#my-places)* und fügen Sie eine oder mehrere Schnellaktionsschaltflächen hinzu.

- (*Nur Android*) Um einen aufgezeichneten Track zu **pausieren** oder zu **speichern**, verwenden Sie die System-[Benachrichtigung](#notifications) im Benachrichtigungsbereich Ihres Geräts.<br/><br/> ![stop-save-pause](@site/static/img/plugins/trip-recording/stop-save-pause_andr.png)


### Übersichts-Bildschirm {#overview-screen}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Übersicht](@site/static/img/plugins/trip-recording/overview_screen_graphs_andr.png) ![Übersicht](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aufnahme beenden in iOS](@site/static/img/plugins/trip-recording/start_rec_ios_3.png) ![Aufnahme beenden in iOS](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_ios.png)

</TabItem>

</Tabs>

In OsmAnd handhaben die **Android**- und **iOS**-Versionen die Benutzeroberfläche zur Track-Aufzeichnung etwas unterschiedlich. Unter Android finden Sie ein eigenes Menü für den Kontext *Track-Aufzeichnung*, während dies unter iOS in das Kontextmenü *Aktuell aufgenommener Track* integriert ist.

Während Sie einen Track aufzeichnen, werden dynamische Diagramme generiert, die Echtzeit-Visualisierungen Ihrer Reise liefern. Diese Diagramme können Informationen für die gesamte Route oder nur für einen ausgewählten Abschnitt anzeigen, abhängig von Ihrem Zoomlevel.
Hier ist, was Sie darauf finden können:

- **Datenwerte**. Auf der rechten Seite des Diagramms befinden sich die ***höchsten***, ***niedrigsten*** und ***durchschnittlichen*** Werte für den sichtbaren Abschnitt des Tracks.

- **Diagramm für Schlüsselinformationen**:
    - ***Android***. Für die ***Y-Achse*** im Diagramm können Sie *bis zu zwei Parameter* aus allen verfügbaren Daten auswählen, wie z. B. *Höhe*, *Steigung*, *Geschwindigkeit* und [Informationen von externen Sensoren](../plugins/external-sensors.md#trip-recording). Für die ***X-Achse*** wählen Sie die Anzeige von *Entfernung*, *Zeit* oder *Tageszeit*.
    - ***iOS***. Die Parameter sind in Registerkarten *Übersicht*, *Höhe* und *Geschwindigkeit* mit den entsprechenden Werten für die Y-Achse und *Entfernung* für die X-Achse organisiert.

- **Statistik**. Für Android wird ein konstanter Satz von Statistikdaten unabhängig von den Diagrammeinstellungen angezeigt: *Entfernung*, *Zeitspanne*, *Aufstieg*, *Abstieg*, *Durchschnittsgeschwindigkeit*. Für iOS hat jede Registerkarte, Übersicht, Höhe und Geschwindigkeit, einen anderen Datensatz.

Für eine detailliertere Ansicht können Sie das **Diagramm skalieren**:

- Verwenden Sie die [Zwei-Finger-Geste](../map/interact-with-map.md#gestures), um hinein- oder herauszuzoomen und sich auf bestimmte Intervalle zu konzentrieren.
- Tippen Sie auf einen beliebigen Punkt im Diagramm, um eine Markierung anzuzeigen, die die genauen Werte für diesen Ort anzeigt.

| |
| ------------- |
|**Übersicht** Registerkarte iOS (für Android sind die Y-Achsen-Parameter *Höhe*, *Geschwindigkeit* und der X-Achsen-Parameter *Entfernung*). Diese Registerkarte zeigt ein Diagramm, das Änderungen der Geschwindigkeit und Höhe entlang der Länge des Tracks sowie wichtige Track-Details darstellt. Track-Daten für iOS: *Entfernung*, *Zeitspanne*, *Startzeit* und *Endzeit*. Sie können sehen, wie dies in den Android- und iOS-Versionen unten angezeigt wird. |
| ![Daten](@site/static/img/plugins/trip-recording/graph_overview_andr.png) ![Daten](@site/static/img/plugins/trip-recording/graph_overview_ios.png) |
| **Höhe** Registerkarte iOS (für Android sind die Y-Achsen-Parameter *Höhe*, *Steigung* und der X-Achsen-Parameter *Entfernung*). Diese Registerkarte konzentriert sich auf das Höhenprofil Ihres aufgezeichneten Tracks und bietet Einblicke in Höhenänderungen und Geländesteigungen. Wichtige Metriken für iOS sind: *Durchschnittliche Höhe*, *Höhenbereich*, *Aufstieg* und *Abstieg*. Die Diagramme unten veranschaulichen die Unterschiede zwischen den Android- und iOS-Oberflächen. |
| ![Daten](@site/static/img/plugins/trip-recording/graph_altitude_andr.png) ![Daten](@site/static/img/plugins/trip-recording/graph_altitude_ios.png) |
| **Geschwindigkeit** Registerkarte iOS (für Android ist der Y-Achsen-Parameter *Geschwindigkeit* und der X-Achsen-Parameter *Entfernung*). Die Registerkarte Geschwindigkeit hebt geschwindigkeitsbezogene Daten während des gesamten Tracks hervor. Für iOS enthält sie Informationen wie *Durchschnittsgeschwindigkeit*, *Höchstgeschwindigkeit*, *Zeit in Bewegung* und *Korrigierte Entfernung*. Die Screenshots unten zeigen, wie diese Daten auf beiden Plattformen angezeigt werden. |
| ![Daten](@site/static/img/plugins/trip-recording/graph_speed_andr.png) ![Daten](@site/static/img/plugins/trip-recording/graph_speed_ios.png) |
| Für **Android** können Sie weitere Kombinationen der verfügbaren Y-Achsen-Daten und X-Achsen-Werte erstellen. |
| ![Daten](@site/static/img/plugins/trip-recording/graph_y-x-combinations_andr.png) |

:::info
Für weitere Details können Sie das [**Track-Kontextmenü**](../map/tracks/track-context-menu.md#options) erkunden, in dem Sie verschiedene Track-bezogene Optionen wie Umbenennen, Löschen oder Hinzufügen von Wegpunkten verwalten können. Um anzupassen, wie Tracks auf der Karte angezeigt werden, besuchen Sie den Abschnitt [**Darstellung**](../map/tracks/appearance.md). Wenn Sie bestimmte Wegpunkte zu Ihrem aktuellen Track hinzufügen möchten, lesen Sie die Anleitung [**Track-Punkte**](../map/tracks/track-context-menu.md#waypoints-folder). Für alle Änderungen, wie z. B. das Umbenennen eines Tracks, verwenden Sie die Registerkarte [**Optionen**](https://osmand.net/docs/user/map/track-context-menu#options) im Track-Kontextmenü.
:::


### Auf der Karte anzeigen {#show-on-the-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![show_tr_onmap_andr_1](@site/static/img/plugins/trip-recording/show_tr_onmap_andr_1.png) ![Karten-Tracks konfigurieren Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![sshow_tr_onmap_ios_1](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_1.png) ![Karten-Tracks konfigurieren iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)
</TabItem>

</Tabs>

Verwalten Sie, welche Tracks auf Ihrer Karte sichtbar sind, indem Sie eine von zwei Optionen verwenden. Gehen Sie zu *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*<Translate ios="true" ids="shared_string_gpx_tracks"/> Registerkarte*](../map/tracks/index.md#my-places) und aktivieren Sie die Option *Auf Karte anzeigen* für jeden Track, den Sie anzeigen oder ausblenden möchten. Alternativ können Sie zu *<Translate android="true" ids="shared_string_menu,configure_map"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/>*](../map/tracks/index.md#configure-map) gehen, um die Sichtbarkeit aller Ihrer Tracks an einem Ort schnell anzupassen.


### Aufgezeichnete GPX-Datei {#recorded-gpx-file}

OsmAnd erfasst Ihre Reise in einer strukturierten [GPX-Datei](https://en.wikipedia.org/wiki/GPS_Exchange_Format) und verwendet dabei eine Hierarchie von *Datei > Track > Segmenten > Punkten*. So funktioniert es:

- **Punkte** stellen einzelne Momente Ihres aufgezeichneten Pfades dar, jeder mit Attributen wie Koordinaten, Geschwindigkeit, Höhe und Richtung markiert.
- Diese Punkte werden zu **Tracks** gruppiert, die Ihre gesamte Route darstellen.
- Wenn es eine Lücke in der Aufzeichnung gibt (z. B. wenn die Verfolgung pausiert wurde), beginnt der nächste Punkt nach der Pause ein neues **Segment**, das die Trennung in Ihrer Reise markiert.
- Sowohl **Segmente** als auch **Tracks** werden visuell mit *Start*- und *Ende*-Symbolen auf der Karte dargestellt.

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
| `trkpt` | **Track-Punkt** stellt einen bestimmten geografischen Ort dar, der während Ihrer Aktivität erkannt wurde. Jeder Track-Punkt enthält Breiten- und Längenkoordinaten und bildet die Grundlage Ihres aufgezeichneten Pfades. |
| `trkseg`  | **Track-Segment** gruppiert aufeinanderfolgende Track-Punkte, getrennt durch Aktivitätsunterbrechungen, wie Pausen oder Stopps. Dies hilft, kontinuierliche Bewegung von Ruhezeiten innerhalb einer einzigen Aufzeichnung zu unterscheiden.  |
| `lat` | **Breitengrad** gibt die Nord-Süd-Position eines Punktes auf der Erdoberfläche an. Es ist eine Hälfte des Koordinatenpaares, das zur genauen Bestimmung Ihres Standorts verwendet wird.   |
| `lon` | **Längengrad** gibt die Ost-West-Position an und ergänzt den Breitengrad, um einen Punkt auf der Erde genau zu lokalisieren. Zusammen definieren Breitengrad und Längengrad Ihre genaue geografische Position.    |
| `ele` | **Höhe** misst die Höhe eines Track-Punktes über dem Meeresspiegel, aufgezeichnet in Metern. Dies kann nützlich sein, um Höhenänderungen während Ihrer Aktivitäten, wie Wanderungen oder Radtouren, zu verfolgen.    |
| `time` | **Zeitstempel** zeichnet das genaue Datum und die Uhrzeit auf, zu der ein Track-Punkt protokolliert wird. Dies ermöglicht es Ihnen, die Dauer und den Zeitpunkt Ihrer Aktivität präzise zu verfolgen.    |
| `hdop` | **Horizontal Dilution of Precision (HDOP)** ist ein Maß für die GPS-Genauigkeit, das den potenziellen Fehler im Standort aufgrund der Positionen der Satelliten widerspiegelt. Im Gegensatz zum Standard-HDOP verwenden OsmAnd GPX-Tracks diesen Wert, um die horizontale Genauigkeit in Metern darzustellen. Bitte beachten Sie, dass sich diese Implementierung von typischen HDOP-Standards unterscheidet. [Erfahren Sie mehr](https://github.com/osmandapp/Osmand/issues/3445).   |
| `speed` | **Geschwindigkeit** zeichnet Ihre Bewegungsrate in Metern pro Sekunde auf. Sie gibt Einblick in Ihr Tempo während verschiedener Abschnitte Ihrer Aktivität.  |
| `heading`  | **Richtung** gibt die Richtung an, in die die Vorderseite Ihres Fahrzeugs oder Geräts zeigt, gemessen in Grad. Sie unterscheidet sich vom Kurs, der der tatsächliche Bewegungspfad ist. Unterschiede können aufgrund externer Faktoren wie Wind, Strömungen oder Straßenbedingungen auftreten. [Mehr zur Richtung](https://en.wikipedia.org/wiki/Heading_(navigation)).  |
| `speed_sensor` | **Geschwindigkeit** von [externen Sensoren](../plugins/external-sensors.md) erfasst Daten von verbundenen Sensoren und liefert präzisere Geschwindigkeitsinformationen, besonders nützlich beim Radfahren. Weitere Details finden Sie in der [Dokumentation zum GPX-Dateiformat](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).  |
| `cadence` | **Trittfrequenz** misst die Anzahl der Pedalrevolutionen pro Minute, aufgezeichnet mit [externen Sensoren](../plugins/external-sensors.md). Dies ist besonders nützlich für Radfahrer, die ihre Treteffizienz überwachen und optimieren möchten. [Mehr lesen](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).  |
| `power` | **Fahrradleistung** quantifiziert die beim Treten erzeugte Leistung, erfasst von [externen Sensoren](../plugins/external-sensors.md). Es ist eine wesentliche Metrik für ernsthafte Radfahrer, die ihre Leistung messen möchten. [Erfahren Sie mehr](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).   |
| `atemp` | **Lufttemperatur** zeichnet die Umgebungslufttemperatur während Ihrer Aktivität auf, gemessen mit [externen Sensoren](../plugins/external-sensors.md). Beachten Sie, dass die Wassertemperatur nicht unterstützt wird. [Details hier](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).   |
| `hr` | **Herzfrequenz** überwacht Ihre Herzschläge pro Minute, unter Verwendung von Daten von verbundenen [Sensoren](../plugins/external-sensors.md). Diese Informationen können entscheidend sein, um Ihre kardiovaskuläre Leistung während des Trainings zu verfolgen. [Mehr erfahren](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).  |


## Aufnahmeeinstellungen {#recording-settings}

Bevor Sie mit der Aufzeichnung Ihrer Touren beginnen, müssen Sie das **Plugin zur Aufnahme von Touren** für optimale Leistung richtig konfigurieren.

- **Profilspezifische Einstellungen**. Jedes Profil in der App kann seine eigenen einzigartigen Einstellungen zur Aufnahme von Touren haben. Dies ermöglicht es Ihnen, das Aufnahmeverhalten präzise an Ihre Aktivität anzupassen, z. B. Autofahren, Radfahren oder sogar Nordic Walking, die möglicherweise unterschiedliche Konfigurationen erfordern.

- **Aufnahmeparameter anpassen**. Die Aufnahmeeinstellungen können je nach Ihrer Bewegung variieren. Zum Beispiel kann das Fahren langer Strecken eine geringere Aufzeichnungsfrequenz erfordern, während Wandern oder Spazierengehen von häufigeren Updates profitieren könnte.

- **Präzise Standortdaten**. Um sicherzustellen, dass Ihre Aufzeichnungen reibungslos und für die zukünftige Verwendung nutzbar sind, können Sie die Art und Weise anpassen, wie Sie Standortpunkte erfassen. Dies könnte die Anpassung der Aufzeichnungsfrequenz, des Formats Ihrer Daten (wie die Anzahl der Punkte pro Entfernungseinheit) oder des Abstands zwischen aufgezeichneten Punkten umfassen.

- **Globale Einstellungen**. Die Einstellungen zur Aufnahme von Touren werden pro Profil konfiguriert, die Sie in den globalen [Einstellungen](../personal/global-settings.md) der App verwalten können. Bevor Sie das Plugin zur Aufnahme von Touren anpassen, wählen Sie das Profil, das Sie konfigurieren möchten, aus dem Abschnitt [Profile](../personal/profiles.md) aus. Navigieren Sie von dort zu den Einstellungen des Profils, um auf die Optionen zur Aufnahme von Touren zuzugreifen.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Konfigurieren der Aufnahme von Touren in Android](@site/static/img/plugins/trip-recording/recording_sett_1_andr.png) ![Konfigurieren der Aufnahme von Touren in Android](@site/static/img/plugins/trip-recording/recording_sett_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Konfigurieren der Aufnahme von Touren in iOS](@site/static/img/plugins/trip-recording/recording_sett_1_ios.png) ![Konfigurieren der Aufnahme von Touren in iOS](@site/static/img/plugins/trip-recording/recording_sett_2_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschreibung |
|---|---|
| **Dialog zur Batterieoptimierung** (*Android*) | Öffnet die [Android-Einstellungen zur Batterieoptimierung](#battery-optimization). Tippen Sie auf *Nicht mehr fragen*, wenn Sie nicht erneut aufgefordert werden möchten. |
| **Startdialog anzeigen** (*Android*) | Aktiviert einen Dialog, in dem Sie Einstellungen vor Beginn der Aufzeichnung konfigurieren können. Wenn deaktiviert, startet die Aufzeichnung automatisch. |
| **Track während der Navigation automatisch aufzeichnen** | Zeichnet den Track während der Navigation automatisch auf und speichert ihn in der Registerkarte *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*. <br />*Hinweis*: Die Track-Aufzeichnung verbraucht Batterie und läuft im Hintergrund weiter, auch wenn der Bildschirm ausgeschaltet ist. |
| **Allgemeines Protokollierungsintervall** | Definiert, wie oft Standortpunkte aufgezeichnet werden. Der Standardwert ist 5 Sekunden. Es wird mit dem *Widget zur Aufnahme von Touren* aktiviert. |
| **Mindestverschiebung** | Ein Filter, um die Aufzeichnung von Punkten zu vermeiden, wenn wenig oder keine Bewegung stattfindet. Er hilft, Datenrauschen zu reduzieren.<ul><li>*Nebenwirkungen*: Ruhezeiten werden möglicherweise nicht aufgezeichnet, und kleine Bewegungen werden möglicherweise ignoriert. Dies kann die Nachbearbeitung von Daten reduzieren, aber auch verhindern, dass GPS-Fehler protokolliert werden.</li><li>*Empfehlung*: Stellen Sie die Verschiebung auf 5 Meter ein, wenn Sie weniger kleine Details in Ihren Aufzeichnungen wünschen.</li></ul> |
| **Mindestgenauigkeit** | Filtert Standortpunkte unterhalb eines Mindestschwellenwerts für die Genauigkeitsanzeige heraus, wie vom Gerät gemeldet.<ul><li>*Nebenwirkungen*: Punkte in Bereichen mit schlechtem Signal (unter Brücken, Bäumen, zwischen Gebäuden oder bei bestimmten Wetterbedingungen) können fehlen.</li><li>*Empfehlung*: Wenn Sie unsicher sind, ist es möglicherweise besser, diesen Filter zu deaktivieren, um fehlende Daten zu vermeiden.</li></ul><details><summary>*Anmerkung*</summary>Angenommen, das GPS wurde kurz vor der Aufzeichnung ausgeschaltet. In diesem Fall kann der erste gemessene Punkt eine reduzierte Genauigkeit aufweisen, daher ist es besser, eine Weile zu warten, bevor der Punkt aufgezeichnet wird, oder den besten von 3 aufeinanderfolgenden Punkten aufzuzeichnen.</details> |
| **Mindestgeschwindigkeit** | Legt einen Schwellenwert fest, um Punkte zu ignorieren, die unter einer bestimmten Geschwindigkeit aufgezeichnet wurden.<ul><li>*Nebenwirkungen*: Abschnitte, in denen die Geschwindigkeit unter einen bestimmten Schwellenwert fällt, werden nicht aufgezeichnet.</li><li>*Empfehlung*: Verwenden Sie stattdessen den Filter *Mindestverschiebung*, da dieser bessere Ergebnisse liefern kann, ohne wichtige Daten zu verlieren.</li></ul><details><summary>*Anmerkung*</summary>Versuchen Sie zuerst, die Bewegungserkennung über den Filter für die minimale Protokollierungsverschiebung (B) zu verwenden. Dies kann bessere Ergebnisse liefern und Sie verlieren weniger Daten. Wenn Ihre Tracks bei niedrigen Geschwindigkeiten weiterhin verrauscht sind, versuchen Sie hier Werte ungleich Null. Bitte beachten Sie, dass einige Messungen überhaupt keinen Geschwindigkeitswert melden (einige netzwerkbasierte Methoden), in welchem Fall Sie nichts aufzeichnen würden.<br/><br/>Geschwindigkeit > 0 Prüfung: Die meisten GPS-Chipsätze melden einen Geschwindigkeitswert nur, wenn der Algorithmus feststellt, dass Sie in Bewegung sind, und keinen, wenn Sie es nicht sind. Daher verwendet die Einstellung > 0 in diesem Filter in gewisser Weise die Bewegungserkennung des GPS-Chipsatzes. Aber selbst wenn hier zum Zeitpunkt der Aufzeichnung nicht gefiltert wird, verwenden wir diese Funktion immer noch in unserer GPX-Analyse, um die korrigierte Entfernung zu bestimmen, d. h. der in diesem Feld angezeigte Wert ist die Entfernung, die während der Bewegung aufgezeichnet wurde.</details> |
| **Aufzeichnungen nach Lücke automatisch aufteilen** | Teilt Tracks automatisch basierend auf Zeitlücken zwischen aufgezeichneten Punkten auf. <ul><li>Ein neues Segment beginnt nach einer Lücke von 6 Minuten.</li><li>Ein neuer Track beginnt nach einer Lücke von 2 Stunden.</li><li>Eine neue Datei beginnt, wenn sich das Datum ändert.</li><li>Lücken können durch GPS-Signalverlust, geringe Geschwindigkeit oder Konfigurationseinstellungen entstehen.</li></ul><details><summary>*Anmerkung*</summary>Eine Lücke wird identifiziert, wenn keine Punkte aufgezeichnet werden. Dies kann entweder passieren, weil der Standort nicht erkannt wird oder weil er erkannt, aber nicht aufgezeichnet wird. Mehrere Faktoren können dies verursachen, darunter schwache GPS-Signale aufgrund schlechter Wetterbedingungen oder die Bewegungsgeschwindigkeit, die unter den konfigurierten Schwellenwert fällt. In solchen Fällen zeichnet das Gerät den Standort, obwohl es ihn möglicherweise erkennt, nicht auf.<br/><br/>Diese Lücken in den aufgezeichneten Daten können die Erstellung eines neuen Segments innerhalb desselben Tracks, eines neuen Tracks in derselben Datei oder einer neuen GPX-Datei innerhalb einer Aufzeichnung auslösen. Dies wird innerhalb einer einzigen Start-/Stopp-Aufzeichnungssitzung verwaltet.</details> |
| **Eigenständige Protokollierung verhindern** (*Android*) | Pausiert die Track-Aufzeichnung, wenn die OsmAnd-App beendet wird (über *aktuelle Apps*). Die Hintergrundanzeige wird im Android-Benachrichtigungsfeld nicht angezeigt. |
| **Richtung einschließen** | Zeichnet die Richtung (Bewegungsrichtung) für jeden Punkt in der GPX-Datei auf. Die Richtung ist die Richtung, in die das Gerät zeigt, die sich aufgrund externer Faktoren wie Wind oder Rutschen von der Bewegungsrichtung unterscheiden kann. |
| **Aktivität** (*Android*) | Die Option ermöglicht es Ihnen, einen [Aktivitätstyp](../map/tracks/track-context-menu.md#track-information-activity) für ein Profil vorzuwählen, der dann automatisch auf alle aufgezeichneten Tracks angewendet wird. |
| **Externe Sensoren** <br/> *Plugin muss aktiviert sein* | Daten von [externen Sensoren](../plugins/external-sensors.md#trip-recording) wie *<Translate android="true" ids="map_widget_ant_heart_rate"/>* oder *<Translate android="true" ids="map_widget_ant_bicycle_speed"/>* werden in die GPX-Datei protokolliert. *Entfernungsdaten* werden unter Android oder iOS nicht aufgezeichnet. Wird nur angezeigt, wenn das [Plugin für externe Sensoren](../plugins/external-sensors.md) aktiviert ist. |
| **Fahrzeugmetriken** (*Android*) <br/> *Plugin muss aktiviert sein* | Daten vom [OBD-II-Scanner](../plugins/vehicle-metrics.md#trip-recording) werden in die GPX-Datei protokolliert. Wird nur angezeigt, wenn das [Plugin für Fahrzeugmetriken](../plugins/vehicle-metrics.md) aktiviert ist.<br />*Hinweis*: Sie können aus der Liste auswählen, welche Metriken in der GPX-Datei aufgezeichnet werden sollen: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_trip_recording,shared_string_settings"/>* |
| **Track-Speicherordner** (*Android*) | Definiert, wo in der Registerkarte *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>* aufgezeichnete Tracks gespeichert werden. Optionen umfassen das Speichern aller Tracks im Ordner Rec oder die Organisation nach Monat, z. B. Rec/jjjj-mm. |
| **Benachrichtigung** | Steuert die Anzeige einer Systembenachrichtigung zur [Aufnahme von Touren](#notifications) im Benachrichtigungsbereich des Geräts, die es Ihnen ermöglicht, die Aufzeichnung von Touren zu starten. |
| **Online-Tracking** (*Android*) | Ermöglicht die Echtzeit-Verfolgung Ihres Standorts durch Senden aufgezeichneter Punkte an eine angegebene URL. Das Tracking-Intervall bestimmt, wie oft Punkte gesendet werden, und der Zeitpuffer speichert Punkte, wenn keine Internetverbindung besteht.<details><summary>*Anmerkung*</summary>Wenn diese Option aktiviert ist und die Track-Aufzeichnung läuft, wird das Entfernungs-/Start-Stopp-Widget (REC) **grün** statt **rot**, was anzeigt, dass jeder aufgezeichnete Punkt an eine angegebene URL übertragen wird. Im Feld **Webadresse** können Sie die URL mit dem folgenden Parameterformat eingeben:<ul><li>`lat={0}`: Breitengrad</li><li>`lon={1}`: Längengrad</li><li>`timestamp={2}`: Zeitstempel (Unix-Zeit)</li><li>`hdop={3}`: Horizontale Verdünnung der Präzision</li><li>`altitude={4}`: Höhe</li><li>`speed={5}`: Geschwindigkeit</li><li>`bearing={6}`: Peilung (Bewegungsrichtung)</li><li>`eta={7}`: Geschätzte Ankunftszeit (Unix-Zeit)</li><li>`etfa={8}`: Geschätzte Zeit bis zum ersten Zwischenpunkt oder Endpunkt (Unix-Zeit)</li><li>`eda={9}`: Geschätzte Entfernung bis zur Ankunft oder einem Marker (in Metern)</li><li>`edfa={10}`: Geschätzte Entfernung bis zum ersten Zwischenpunkt oder Endpunkt (in Metern)</li></ul>Sie können das **Tracking-Intervall** festlegen, um anzugeben, wie oft Standortpunkte gesendet werden, mit Optionen von 0 Sekunden bis 5 Minuten. Zusätzlich bestimmt der Parameter **Zeitpuffer**, wie lange Standortpunkte gespeichert werden, wenn keine Internetverbindung besteht, um sicherzustellen, dass Daten gespeichert und übertragen werden, wenn die Verbindung wiederhergestellt ist.</details> |
| **Tracks** | Ein schneller Verweis auf den Ordner, in dem Tracks gespeichert sind, in der Registerkarte *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*. |
| **Plugin-Einstellungen auf Standard zurücksetzen** | Setzt alle Einstellungen zur Aufnahme von Touren für das aktuelle Profil auf ihre Standardwerte zurück. |
| **Von einem anderen Profil kopieren** (*Android*) | Kopiert die Einstellungen zur Aufnahme von Touren von einem Profil auf ein anderes. |


### Batterieoptimierung {#battery-optimization}

<InfoAndroidOnly />

![Track auf der Karte iOS](@site/static/img/plugins/trip-recording/battery_2_andr.png) ![Track auf der Karte iOS](@site/static/img/plugins/trip-recording/battery_1_andr.png)

Diese Funktion ermöglicht es Ihnen, die Einstellungen zur Batterieoptimierung für OsmAnd zu verwalten, um einen unterbrechungsfreien Zugriff auf Ihren Standort zu gewährleisten, auch wenn die App im Hintergrund während der Navigation oder Track-Aufzeichnung läuft.

- **Einstellungen zur Batterieoptimierung**. Öffnet die Android-Einstellungen, in denen Sie die Einstellungen zum Batteriesparen für OsmAnd ändern können. [Weitere Details hier](../troubleshooting/general.md#optimizing-battery-consumption).
- **Nicht mehr fragen**. Schließt das Dialogfeld dauerhaft, sodass es nicht wieder angezeigt wird.
- **Schließen**. Schließt das Dialogfeld vorübergehend, das beim nächsten Mal, wenn die Batterieoptimierung Aufmerksamkeit erfordert, wieder angezeigt wird.


### Benachrichtigungen {#notifications}

![Benachrichtigung zur Aufnahme von Touren](@site/static/img/plugins/trip-recording/trip_rec_notific_1_andr.png)

Wenn [Benachrichtigung](#recording-settings) in den Plugin-Einstellungen aktiviert ist, werden Benachrichtigungen zur Aufnahme von Touren immer im Systembenachrichtigungsbereich angezeigt, wenn die Aufzeichnung aktiv ist. Diese Benachrichtigung stellt sicher, dass der Aufzeichnungsprozess vom System nicht unterbrochen wird, und sie kann während einer aktiven Aufzeichnung nicht deaktiviert werden.

- Der Benachrichtigungsbereich öffnet sich, wenn Sie vom oberen Bildschirmrand nach unten wischen, und schließt sich, wenn Sie nach oben wischen. Diese Nachrichten informieren Sie über Aktionen wie das Starten/Stoppen der Aufnahme von Touren, insbesondere wenn die automatische Aufzeichnung während der Navigation aktiviert ist.
- Benachrichtigungen bleiben sichtbar, unabhängig davon, ob die App im Vordergrund, Hintergrund oder geschlossen läuft. Sie können die alte Benachrichtigung manuell löschen, wenn sie nicht mehr benötigt wird, aber dies stoppt die laufende Aufzeichnung nicht.

**Wichtiger Hinweis**.

Dieses Verhalten wird von Android für jeden Vordergrunddienst, wie z. B. die Aufnahme von Touren, benötigt, um für Sie sichtbar zu bleiben.

- Wenn die Benachrichtigung entfernt wird, stoppt Android die Aufzeichnung automatisch. Sie können die Einstellung [Eigenständige Protokollierung verhindern](#recording-settings) verwenden.
- Die Einstellung **Benachrichtigung** in OsmAnd beeinflusst, ob die Benachrichtigungsleiste eine Verknüpfung zum Starten einer Aufzeichnung anzeigt, wenn keine Aufzeichnung aktiv ist. Sie steuert **nicht** die Sichtbarkeit der Benachrichtigung während einer aktiven Aufzeichnung.

**Zusätzliche Android-Optionen**.

![Benachrichtigung zur Aufnahme von Touren](@site/static/img/plugins/trip-recording/trip_rec_notification_andr.png)

- In den ***Android-Einstellungen → Benachrichtigungen und Statusleiste → Benachrichtigungen auf dem Sperrbildschirm*** können Sie OsmAnd aus der App-Liste entfernen, um zu verhindern, dass Benachrichtigungen auf dem Sperrbildschirm angezeigt werden, und so eine versehentliche Bildschirmaktivierung zu vermeiden. Dies hat keine Auswirkungen auf die Track-Aufzeichnung. Benachrichtigungen werden weiterhin im regulären Benachrichtigungsbereich angezeigt.
- **OsmAnd** kann auch unter ***Datenschutz → Spezielle Berechtigungen → Bildschirm einschalten*** angezeigt werden. Wenn Sie verhindern möchten, dass sich der Bildschirm einschaltet, wenn eine Benachrichtigung angezeigt wird, versuchen Sie, OsmAnd aus dieser Liste zu entfernen.

<!--
- OsmAnd is not listed under **Privacy** *→* **Special Permissions** → **Alarms and reminders**.
-->

**Badge-Benachrichtigung**.

![Benachrichtigung zur Aufnahme von Touren](@site/static/img/plugins/trip-recording/trip_rec_notification_badge_andr.png)

Das App-Symbol-Badge erscheint neben dem OsmAnd-Symbol, wenn die Track-Aufzeichnung aktiv ist.

- Dieses Symbol verschwindet, wenn die Track-Aufzeichnung abgeschlossen ist. Um zu überprüfen, ob eine Aufzeichnung aktiv ist, können Sie zu *Menü → Meine Orte → Registerkarte Tracks* gehen oder auf das Widget tippen, um die Aufzeichnung zu verwalten.
- Wenn keine Aufzeichnung läuft und das Badge immer noch angezeigt wird, kann dies bedeuten, dass eine Nachricht von OsmAnd im Benachrichtigungsfeld des Geräts hinterlassen wurde.
- Um Badges in den Android-Einstellungen zu deaktivieren, gehen Sie zu den Geräte-*Einstellungen → Apps → OsmAnd → Benachrichtigungen* und deaktivieren Sie die Option zur Badge-Anzeige für diese App.


## Widgets {#widgets}

Widgets ermöglichen es Ihnen, wichtige Informationen zur Track-Aufzeichnung direkt auf dem Bildschirm anzuzeigen, wie z. B. *Entfernung*, *Dauer*, *Aufstieg* und *Abstieg*.

Um die *Widgets zur Aufnahme von Touren* zu verwenden, müssen Sie alle folgenden Einstellungen vornehmen:

1. [Aktivieren Sie das Plugin](../start-with/first-steps.md#how-to-configure-plugins).
2. Konfigurieren Sie die Einstellungen zur Aufnahme von Touren für das erforderliche [Profil](../personal/profiles.md).
3. Fügen Sie die notwendigen **Widgets zur Aufnahme von Touren** zum Bildschirm hinzu. Beachten Sie, dass diese Konfiguration **profilspezifisch** ist.


### Aufnahme-Widget hinzufügen {#add-recording-widget}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wählen Sie ein Panel → <Translate android="true" ids="map_widget_monitoring"/>*

![Entfernungs-/Start-Stopp-Widget in Android hinzufügen](@site/static/img/plugins/trip-recording/add_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Wählen Sie ein Panel → <Translate android="true" ids="map_widget_monitoring"/>*

![Aufnahme-Widgets in iOS hinzufügen](@site/static/img/plugins/trip-recording/add_recording_widgets_ios.png)

</TabItem>

</Tabs>

Das [Widget zur Aufnahme von Touren](../widgets/info-widgets.md#trip-recording-widgets) bietet eine einfache Möglichkeit, Ihren Aufzeichnungsstatus zu überwachen und schnell auf Aufnahmeeinstellungen und Details zuzugreifen. Dieses Widget wird automatisch zu Ihrem Bildschirm hinzugefügt, wenn das Plugin zur Aufnahme von Touren aktiviert ist.

Um Ihre Benutzeroberfläche anzupassen, können Sie das Widget zur Aufnahme von Touren und [andere Widgets](../plugins/trip-recording#duration-uphill-downhill) über das Menü Bildschirm konfigurieren hinzufügen oder entfernen.


### Entfernung (Start-Stopp) {#distance-start-stop}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widget zur Aufnahme von Touren](@site/static/img/plugins/trip-recording/trip_rec_widgets_andr.png)
![Aufnahme beenden in Android](@site/static/img/plugins/trip-recording/distance_start_rec_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget zur Aufnahme von Touren](@site/static/img/widgets/tr_rec_wid_conf_scr.png) ![Widget zur Aufnahme von Touren](@site/static/img/widgets/tr_rec_wid_conf_scr_2.png)

</TabItem>

</Tabs>

Wenn Widgets auf der Karte angezeigt werden, zeigt das Tippen auf eines davon zusätzliche Track-Details an und ermöglicht die Interaktion mit der Aufzeichnung.
Das Widget *Entfernung* zeigt die Gesamtdistanz Ihrer aktuellen aufgezeichneten Tour an und dient als Hauptschnittstelle zur Verwaltung Ihrer Aufzeichnungen. Durch Tippen darauf wird der [Dialog zur Aufnahme von Touren](#start-a-dialog) angezeigt, in dem Sie detaillierte Informationen zu Ihrem Track starten, stoppen und anzeigen können.

- Das Widget wird automatisch hinzugefügt, wenn das *Plugin zur Aufnahme von Touren* aktiviert ist, kann aber über das [Menü Bildschirm konfigurieren](../widgets/configure-screen.md#configure-screen-menu) ausgeblendet werden.
- Wenn die Option *Startdialog anzeigen* in den Einstellungen des Plugins zur Aufnahme von Touren deaktiviert ist, wird durch Tippen auf das aktive Widget dennoch das Dialogfeld *Aufnahme von Touren* geöffnet, sodass Sie auf weitere Optionen und Informationen zugreifen können.

Zusätzlich zum Widget *Entfernung/Start-Stopp* enthält das **Plugin zur Aufnahme von Touren** drei weitere Widgets: *Dauer*, *Aufstieg* und *Abstieg*. Diese liefern zusätzliche Informationen zu Ihrer Tour und helfen Ihnen, den Fortschritt in Echtzeit zu verfolgen.

| |
|-----------|
| **Entfernung/Start-Stopp**. Dieses Widget zeigt die Entfernung Ihrer laufenden Tourenaufzeichnung an. Es wird automatisch hinzugefügt, wenn das Plugin zur Aufnahme von Touren aktiviert ist, kann aber über das Menü Bildschirm konfigurieren ausgeblendet werden. Das Widget verfügt über drei verschiedene Zustände: *Aufnahme*, *Pausiert* und *Inaktiv*, die jeweils den aktuellen Status Ihrer Tourenaufzeichnung anzeigen. |
| ![Widget zur Aufnahme von Touren (REC)](@site/static/img/widgets/tr_rec_wid_rec.png) |
| Um den [Dialog zur Aufnahme von Touren](#start-a-dialog) beim Tippen auf ein inaktives Widget zu öffnen, aktivieren Sie die Option *Startdialog anzeigen* in den Einstellungen des Plugins zur Aufnahme von Touren. Wenn die Option deaktiviert ist, beginnt die Aufzeichnung sofort nach dem Tippen auf das Widget, ohne den Dialog zu öffnen.|


### Dauer, Aufstieg, Abstieg {#duration-uphill-downhill}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

</TabItem>

<TabItem value="ios" label="iOS">

</TabItem>

</Tabs>

| |
|------------|
|**Dauer**. Zeigt die Gesamtdauer der aktuellen Tourenaufzeichnung in Stunden und Minuten an. |
|![Widgets](@site/static/img/widgets/tr_rec_wid_dur.png)|
|**Aufstieg**. Zeigt den kumulierten Höhengewinn für die aktuelle Tourenaufzeichnung an. |
|![Widgets](@site/static/img/widgets/tr_rec_wid_up.png)|
|**Abstieg**. Zeigt den gesamten Abstieg an, der während der aktuellen Tourenaufzeichnung angesammelt wurde. |
|![Widgets](@site/static/img/widgets/tr_rec_wid_dow.png)|

Wenn Sie mehrere Widgets ausgewählt haben – *Dauer*, *Aufstieg* oder *Abstieg* – können Sie auf dasselbe Dialogfeld für jedes zugreifen, ohne wechseln oder schließen zu müssen. Diese einheitliche Benutzeroberfläche erleichtert das nahtlose Anzeigen und Verwalten aller zugehörigen Informationen.


## Verwandte Artikel {#related-articles}

- [Karten-Kontextmenü](../map/map-context-menu.md)
- [Track auf Karte anzeigen](../map/tracks/index.md)
- [Auf Karte analysieren](../map/tracks/index.md#analyze-track-on-map)
- [Track-Kontextmenü](../map/tracks/track-context-menu.md)
- [Navigation nach Track](../navigation/setup/gpx-navigation.md)

### Häufige Probleme und Lösungen {#common-issues-and-solutions}

- Die Aufnahme von Touren startet nicht.
    - Stellen Sie sicher, dass das **Plugin zur Aufnahme von Touren** aktiviert ist: *Menü → Plugins → Aufnahme von Touren → Aktivieren*.
    - Überprüfen Sie, ob die Einstellungen korrekt sind: *Menü → Profil konfigurieren → Plugin-Einstellungen → Aufnahme von Touren*.
    - Wenn die Aufzeichnung immer noch nicht startet, starten Sie die App neu und versuchen Sie es erneut.

- Die Aufnahme von Touren stoppt unerwartet.
    - Überprüfen Sie, ob die *Batterieoptimierungseinstellungen Ihres Geräts* die Aufzeichnung stoppen. Einige Geräte können Hintergrundaktivitäten pausieren, um Strom zu sparen. Gehen Sie zu *Geräteeinstellungen → Batterie*.

- Die aufgezeichnete Entfernung stimmt nicht mit der tatsächlichen Entfernung überein.
    - Überprüfen Sie, ob GPS aktiviert ist und ein aktives Signal hat.
    - Reduzieren Sie den Schwellenwert für die GPS-Genauigkeit: *Menü → Profil konfigurieren → Aufnahme von Touren → Mindestgenauigkeit*.

- Aufgezeichnete Tracks sind verrauscht. [(prüfen)](../troubleshooting/track-recording-issues.md#recorded-tracks-are-noisy).
- Aufgezeichnete Tracks haben Lücken. [(prüfen)](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps)
- Wie man die zurückgelegte Entfernung verfolgt. [(prüfen)](../troubleshooting/track-recording-issues.md#how-to-track-traveled-distance)

Für weitere Fehlerbehebung besuchen Sie: [Fehlerbehebung bei der Track-Aufzeichnung](https://osmand.net/docs/user/troubleshooting/track-recording-issues).

> *Zuletzt aktualisiert: Januar 2025*