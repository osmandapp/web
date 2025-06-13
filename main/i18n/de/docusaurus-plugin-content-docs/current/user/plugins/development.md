---
source-hash: 580c8fbd0c79564b0976cee07d1bc9d431e8f4533df5daa052bc1202ccd84564
sidebar_position: 10
title:  OsmAnd Entwicklung
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

Testfunktionen der App sind im OsmAnd Entwicklungs-Plugin gesammelt. Die Nutzung erfolgt auf eigene Gefahr.

Das OsmAnd Entwicklungs-Plugin ermöglicht es Ihnen, neue Funktionen der App auszuprobieren oder OsmAnd für Tests zu konfigurieren: Navigationsrouten simulieren, die Bildschirm-Rendering-Leistung überprüfen usw. Das Plugin ist für *Entwickler und erfahrene Benutzer* konzipiert und für den täglichen Gebrauch der Anwendung nicht erforderlich.


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

So aktivieren Sie spezielle Funktionen für Entwickler und Tester:

1. [Aktivieren Sie](../plugins/index.md#enable--disable) das OsmAnd Entwicklungs-Plugin im Abschnitt Plugins des *Hauptmenüs*.
2. Nehmen Sie die notwendigen Einstellungen im [Einstellungsmenü](#plugin-settings) des Plugins vor.
3. Aktivieren Sie bei Bedarf **Entwickler-Widgets**.


## Plugin Einstellungen {#plugin-settings}

:::info info
Die Einstellungen des OsmAnd Entwicklungs-Plugins sind global und gelten für alle Profile.
:::

Verwenden Sie einen der folgenden Pfade, um die Plugin Einstellungen zu öffnen:

- *Hauptmenü → Plugins → OsmAnd Entwicklung → Einstellungen*.
- *Hauptmenü → [Globale Einstellungen](../personal/global-settings.md) → Profil → OsmAnd Entwicklungs-Plugin Einstellungen*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Development Settings Android](@site/static/img/plugins/development/development_settings_1_andr.png) ![Development Settings 2 Android](@site/static/img/plugins/development/development_settings_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Development Settings iOS](@site/static/img/plugins/development/development_ios_1.png)

</TabItem>

</Tabs>


### Gelände {#terrain}

- **Raster [SQLIte-Format](../../technical/osmand-file-formats/osmand-sqlite) für Schattierung und Neigung verwenden** (*Android*). Lädt Rasterkarten im alten Format.


### Fehlerbehebung {#troubleshotting}

- **Ihre Position simulieren** (*Android* / *iOS*). [Simulieren Sie](#gpx-track-simulation) den Standort und die Bewegung anhand eines GPX-Tracks.
- **Batteriesparmodus** (*Android* / *iOS*). Diese Einstellung reduziert [die Bildschirmaktualisierungsrate](#map-rendering-fps-widget) um 20 Bilder pro Sekunde, um beim Verwenden von Anwendungen Batteriestrom zu sparen.
- **3D-Standortpositionssymbole verwenden** (*iOS*). Ermöglicht die Auswahl eines 3D-Symbols für das [Mein Standort-Symbol](../personal/profiles.md#my-location-appearance).
- **OBD-Daten simulieren** (*Android*). Ermöglicht die Simulation der Verwendung eines [OBD-Scanners](./vehicle-metrics.md).
- **Leistungs-Debug-Informationen** (*Android*). Zeigt die Rendering- und Navigationsleistung an.
- **Kartenebenen deaktivieren** (*Android*). Deaktiviert alle Kartenebenen über der Vektorkarte (Neustart erforderlich).
- **Logcat-Puffer** (*Android*). Überprüfen und teilen Sie detaillierte Protokolle der App.
- **Toast über gedrückte Taste anzeigen** (*Android*). Zeigt eine Nachricht über die Taste an.
- **<Translate android="true" ids="write_bearing"/>** (*Android*). <Translate android="true" ids="write_bearing_description"/>. Peilung ist die Kompassrichtung von Ihrer aktuellen Position zu Ihrem beabsichtigten Ziel. Beeinflusst die *[Aufzeichnung von Tracks](../plugins/trip-recording.md)*.
- **<Translate android="true" ids="write_heading"/>** (*Android*). <Translate android="true" ids="write_heading_description"/>. Kurs ist die Kompassrichtung von Ihrer aktuellen Position zum wahren Norden. Diese Option ist standardmäßig aktiviert. Beeinflusst die *[Aufzeichnung von Tracks](../plugins/trip-recording.md)*.


### Anwendungstests {#application-testing}

:::caution Nur Android
:::

- **Ersten App-Start simulieren**. Setzt das Flag, das den ersten App-Start anzeigt, behält alle anderen Einstellungen unverändert bei.
- **Sprachansagen testen**. Wählen Sie eine Stimme aus und testen Sie sie, indem Sie Ansagen abspielen.
- **Transparente Statusleiste**. Die Karte wird unter der Statusleiste sichtbar.
- **Banner für kostenlose Version anzeigen**. Zeigt das Banner für die kostenlose Version auch in der kostenpflichtigen Version an.
- **Debug-Informationen anzeigen**. Zeigt grafische Informationen über die Platzierung jedes Textes auf der Karte an.
- **Anzeige oben zulassen**. Ermöglicht die Anzeige von Kartentexten übereinander.


### Interne Algorithmen {#internal-algorithms}

:::caution Nur Android
:::

- **Sicherer Modus**. Führen Sie die App im (langsameren) sicheren Modus aus.


### Speichereinstellungen {#memory-settings}

:::caution Nur Android
:::

- Die Option **Für Routing zugewiesener Speicher** ermöglicht es Ihnen, die Menge des für die Berechnung langer Routen zugewiesenen Speichers zu bestimmen. Sie können diese Option verwenden, wenn das [Standard-Routing A*](../navigation/guidance/navigation-settings.md#development-settings) in den *Navigationseinstellungen* ausgewählt ist.

***Berechnung von extra langen Routen:***

- Eine höhere Speicherzuweisung kann die Leistung anderer Apps beeinträchtigen.
- [Berechnung von 50 km Routen für Fußgänger](../troubleshooting/navigation.md#calculation-of-50-km-routes-for-pedestrians)


### Info und Statistik {#info-and-statistics}

:::caution Nur Android
:::

- **Zugewiesener Speicher**. Zeigt den zugewiesenen Systemspeicher für die OsmAnd-Anwendung an.
- **Gesamter nativer Speicher**. Zeigt die Gesamtmenge des der Anwendung zugewiesenen nativen Speichers an, einschließlich des proportionalen Speichers.
- **A-GPS-Info**. Zeigt an, wann A-GPS-Daten zuletzt heruntergeladen wurden.
- **Tag/Nacht-Info**. Zeigt die heutigen Sonnenauf- und Sonnenuntergangszeiten an.
- **Energiestatistik (Durchschnitt 1 / 5 / 15 Minuten)**. Zeigt den Batteriestand pro Minute (%) und den durchschnittlichen Energieverbrauch (mAh) über Intervalle von 1, 5 und 15 Minuten an.
- **Rendering-Statistik (Durchschnitt 1 / 5 / 15 Minuten)**. Zeigt Rendering-Statistiken an, einschließlich FPS über die letzten 1k Frames, CPU (Kacheln), CPU (Leerlaufzeit) und CPU (Standby) Durchschnittswerte über Intervalle von 1, 5 und 15 Minuten.

**Schaltfläche:**

- **Plugin Einstellungen auf Standard zurücksetzen**. Setzt alle Plugin Einstellungen auf ihre Standardwerte zurück.

    ![Development Settings Android](@site/static/img/plugins/development/devplugin_stat_and.png)


## Karten-Rendering-FPS-Widget {#map-rendering-fps-widget}

:::info Wichtig
OsmAnd Entwickler-Widgets können nur zum Bildschirm hinzugefügt werden, wenn das OsmAnd Entwicklungs-Plugin aktiviert ist.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Development widget fps 1](@site/static/img/plugins/development/dev_widgets_fps_1.png) ![Development widget fps 2](@site/static/img/plugins/development/dev_widgets_fps_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Development widget iOS 2](@site/static/img/plugins/development/dev_widgets_ios_fps_2.png)

</TabItem>

</Tabs>

Das [FPS-Widget](../widgets/info-widgets.md#map-rendering-fps) zeigt an, wie schnell die Karte und Kartenelemente angezeigt und aktualisiert werden. Der numerische Wert wird in Bildern pro Sekunde (FPS) angegeben.


## Kameraposition-Widgets {#camera-position-widgets}

:::info Wichtig
OsmAnd Entwickler-Widgets können nur zum Bildschirm hinzugefügt werden, wenn das OsmAnd Entwicklungs-Plugin aktiviert ist.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets"/>*

![Camera position Widgets 1](@site/static/img/plugins/development/dev_widgets_camera.png) ![Camera position Widgets 2](@site/static/img/plugins/development/dev_widgets_camera_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets"/>*

![Camera position Widgets 1](@site/static/img/plugins/development/dev_widgets_camera_ios.png) ![Camera position Widgets 2](@site/static/img/plugins/development/dev_widgets_camera_2_ios.png)

</TabItem>

</Tabs>

Sie können [Kameraposition-Widgets](../widgets/info-widgets.md#camera-widgets) verwenden, um der OsmAnd-Karte ein realistisches Aussehen zu verleihen und Fotos der Erde, die sowohl von oben als auch aus dem Weltraum aufgenommen wurden, anzupassen.


### Kameraneigung {#camera-tilt}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Camera tilt widget Android 1](@site/static/img/plugins/development/developer_widg_cam_tilt_1.png) ![Camera tilt widget Android 2](@site/static/img/plugins/development/developer_widg_cam_tilt_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Camera tilt widget ios 1](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_1.png) ![Camera tilt widget ios 2](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_2.png)

</TabItem>

</Tabs>

Das Kameraneigung-Widget zeigt die Neigung zwischen dem zentralen Blickvektor der Kamera (Betrachter) und einem imaginären flachen Boden der Erde an. Der Standardwert ist 90 Grad (keine Neigung).

:::note
Die Kameraneigung wird durch Bewegen der Kamera (Betrachter) geändert, während der Mittelpunkt auf der Karte (den wir betrachten) gleich bleibt. Die Entfernung dazu (tatsächlich der Zoom) ändert sich nicht.
Gleichzeitig ändert sich aufgrund der imaginären Bewegung des Betrachters die Entfernung von der Kamera zur Oberfläche.
:::


### Kamera-Höhe {#camera-elevation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Camera elevation widget Android 1](@site/static/img/plugins/development/developer_widg_cam_elevation_1.png) ![Camera elevation widget Android 2](@site/static/img/plugins/development/developer_widg_cam_elevation_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Camera elevation widget ios 1](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_1.png) ![Camera elevation widget ios 2](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_2.png)

</TabItem>

</Tabs>

Das Kamera-Höhe-Widget zeigt die Höhe der Kamera über dem Bodenniveau an. Die Kamera-Höhe wird in Metern / Kilometern angegeben.


### Zoomstufe {#zoom-level}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Zoom level widget Android 1](@site/static/img/plugins/development/developer_widget_zoom_2_andr.png) ![Zoom level widget Android 2](@site/static/img/plugins/development/developer_widg_zoom_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zoom level widget ios 1](@site/static/img/plugins/development/developer_widget_zoom_ios_1_ios.png) ![Zoom level widget ios 2](@site/static/img/plugins/development/developer_widget_zoom_ios_2_ios.png)

</TabItem>

</Tabs>

Das Widget hat zwei Ansichten, die durch Antippen umgeschaltet werden:

- **<Translate android="true" ids="map_widget_zoom_level"/>**. Zeigt die aktuelle Karten-Zoomstufe an.
- **<Translate android="true" ids="map_widget_map_scale"/>**. Zeigt das aktuelle Verhältnis zwischen einer Entfernung auf einer Karte und der entsprechenden Entfernung auf der Erde an. Beispiele: "1 : 3 000", "1 : 3,3 M" "1: 340 K".

:::note

- Die anfängliche Zoomstufe (0) ist die Stufe, auf der die gesamte Erdoberfläche (die vollständige Karte) auf dem Bildschirm angezeigt wird und ihre Größe 256 mal 256 Pixel beträgt.
- Jede nächste Zoomstufe reduziert die imaginäre Entfernung zum Boden um etwa das 2-fache.

:::

### Entfernung zum Ziel {#distance-to-target}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Distance to target widget 1 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_1.png) ![Distance to target widget 2 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Distance to target widget 1 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_1.png) ![Distance to target widget 2 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_2.png)
</TabItem>

</Tabs>

Das Widget "Entfernung von Kamera zum Ziel" zeigt die Entfernung zwischen der Kamera (Betrachter) und dem Mittelpunkt der Karte an. Diese Entfernung wird in Metern / Kilometern angezeigt.


### Vergleich mit Satellitenbildern {#comparison-with-a-satellite-imagery}

![Comparison](@site/static/img/plugins/development/comparison.png)

Ein Vergleich der OsmAnd-Karte und der Erdoberfläche zeigt die folgenden Muster:

- Maximale Verzerrung wird bei großen Zooms beobachtet (Zoom 6-7 bei Kameraneigung 90 Grad).
- Mit abnehmender Kameraneigung (von 90 auf 10 Grad) nimmt die Verzerrung der Karte zu.
- Verzerrungen werden in hohen Breiten früher beobachtet.

Die folgende Tabelle enthält Informationen über die Neigung der Kamera und die Entfernung zum Ziel sowie die Zoomstufe, bei der die Verzerrungen der OsmAnd-Karte sichtbar werden. Wenn sich die Kamera weiter vom Ziel entfernt, nimmt die beobachtete Verzerrung der OsmAnd-Karte zu.

|Neigung (90) |Breitengrad |Max Zoom |Höhe, km |Verzerrung|
|-----|-----|-----|-----|-----|
|90|26|6|5500|5%|
|90|50|6|2500|5%|
|90|66|7|1300|5%|
|**Neigung (60)** |**Breitengrad** |**Max Zoom** |**Höhe, km** |**Verzerrung**|
|65|26|8|1100|6.5%|
|65|50|8|800|6.5%|
|65|66|9|630|6.5%|
|**Neigung (45)** |**Breitengrad** |**Max Zoom** |**Höhe, km** |**Verzerrung**|
|45|26|9|350|7.5%|
|45|50|9|320|7.5%|
|45|66|8|210|7.5%|
|**Neigung (20)** |**Breitengrad** |**Max Zoom** |**Höhe, km** |**Verzerrung**|
|20| 26|12|30|10%|
|20| 50|11|30|10%|
|20| 66|11|30|10%|


## Verfügbares RAM-Widget {#available-ram-widget}

Dieses Widget wurde speziell für Sie entwickelt, um bei der Verwendung von OsmAnd eine bequemere und informativere Interaktion mit dem verfügbaren RAM auf Ihrem Gerät zu ermöglichen. Es ermöglicht Ihnen, den verfügbaren RAM einfach und schnell zu überwachen, was besonders nützlich ist, wenn Sie OsmAnd zur Navigation verwenden. Lesen Sie mehr über das Widget im Artikel [Informations-Widgets](../widgets/info-widgets.md#available-ram).


## GPX-Track-Simulation {#gpx-track-simulation}

OsmAnd bietet die Möglichkeit, den Standort und die Bewegung Ihres Geräts anhand eines GPX-Tracks zu simulieren. Verwenden Sie zu diesem Zweck die Option *<Translate android="true" ids="simulate_location_by_gpx"/>* in den [Einstellungen](#plugin-settings) des OsmAnd Entwicklungs-Plugins:

- Tippen Sie auf *<Translate android="true" ids="simulate_location_by_gpx"/>*.
- Wählen Sie einen Track aus, um den Standort und die Bewegung des Geräts zu simulieren.
- Wählen Sie die Simulationsgeschwindigkeit der Bewegung.
- Tippen Sie auf die Schaltfläche Start.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Development Settings Android](@site/static/img/plugins/development/simulate_position_andr_1.png) ![Development Settings Android](@site/static/img/plugins/development/simulate_position_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_track_1_ios.png) ![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_track_ios.png)

</TabItem>

</Tabs>

Nach dem Start der Simulation sehen Sie auf dem Hauptbildschirm der App, dass sich die Navigationsmarkierung entsprechend dem GPX-Track bewegt. Tippen Sie auf die [Mein Standort-Schaltfläche](../map/interact-with-map#my-location-and-zoom), um *Mein Standort* (simulierte Geolocation des Geräts) mit dem Mittelpunkt der Karte zu synchronisieren.
Um die Simulation der Bewegung Ihres Geräts zu stoppen, kehren Sie zu den OsmAnd Entwicklungs-[Einstellungen](#plugin-settings) zurück und tippen Sie auf **Stopp** in der Option **Ihre Position simulieren**.

- *<Translate android="true" ids="simulate_location_by_gpx"/>* kann auch über das **[Schnellaktionsmenü](../widgets/quick-action.md#navigation)** aufgerufen werden.
- Die Geschwindigkeit der Standortbewegung während der Simulation kann gleich der aufgezeichneten Geschwindigkeit (1) oder schneller (x2, x3, x4) eingestellt werden.
- Sie können die Bewegung entlang eines GPX-Tracks auch über das [Navigationsmenü](../navigation/setup/route-navigation.md#simulated-navigation) simulieren, ohne das OsmAnd Entwicklungs-Plugin zu aktivieren. In diesem Fall wird Ihr Standort nicht mit dem Track synchronisiert.


## Verwandte Artikel {#related-articles}

- [Interaktion mit der Karte](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)

> *Zuletzt aktualisiert: Mai 2023*