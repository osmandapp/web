---
source-hash: 7e75b5e052216e2fd2c8684ffc936212758b2d1c0efb985a5c0f8ef838440750
sidebar_position: 18
title: Plugins
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

Plugins erweitern die Funktionalität von OsmAnd erheblich. Jedes Plugin ist darauf ausgelegt, eine bestimmte Aufgabe oder einen Anwendungsfall zu lösen, wie z.B. die Aufzeichnung einer Reise, den Offline-Zugriff auf Wikipedia-Artikel, die Visualisierung von Geländedaten oder die Bereitstellung einer Ansicht auf Straßenebene.

Plugins können intern sein, in der OsmAnd-Anwendung aktiviert, oder extern, separat installierte Programme. Drittanbieter-Plugins arbeiten über die OsmAnd-API und können auf OsmAnd-Daten zugreifen.

## Plugin konfigurieren {#configure-plugin}

Um die Funktionalität eines Plugins nutzen zu können, muss es zunächst [aktiviert](#enable--disable) werden, und einige Plugins erfordern vor der Nutzung einen [Kauf](#purchase). In einigen Fällen muss dann eine bestimmte Kartenebene aktiviert oder ein Benutzerprofil [konfiguriert](#plugin-settings) werden.

### Aktivieren / Deaktivieren {#enable--disable}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,plugin_settings"/> → &#65049; → Aktivieren*

![Plugins aktivieren Android](@site/static/img/settings/plugins_enable_android.png) ![Plugin Beispiel Android](@site/static/img/settings/plugin_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;*

![Plugins aktivieren iOS](@site/static/img/settings/plugins_enable_ios.png) ![Plugin Beispiel iOS](@site/static/img/settings/plugin_example_ios.png)

</TabItem>

</Tabs>

### Kaufen {#purchase}

Die meisten Plugins sind kostenlos verfügbar, nur die unten aufgeführten Plugins erfordern den Kauf einer [OsmAnd+ oder OsmAnd Pro](../purchases/index.md)-Lizenz zur Nutzung:

- [Topographie](../plugins/topography.md)
- [3D-Relief](../plugins/topography.md#3d-relief) (Funktion des Topographie-Plugins)
- [Wikipedia](../plugins/wikipedia.md)
- [Nautische Kartenansicht](../plugins/nautical-charts.md)
- [Wetter](../plugins/weather.md)

Detaillierte Informationen zum Kauf der Anwendung finden Sie im Abschnitt [Kauf](../purchases/).

### Plugin-Funktionen {#plugin-features}

OsmAnd-Plugins können diese Funktionsgruppen erweitern: **Ebenen**, **Widgets**, **Kontextmenü-Aktionen**, **Drawer-Aktionen**, **Kartenstil**, **Kartenquelle**, **Profil**.

🤖 - *nur für die Android-Version von OsmAnd.*

| Plugin-Name | Funktionen |
|:------------|:-------|
| [Wikipedia](#wikipedia) | [Kartenebene](../plugins/wikipedia.md#download-wikipedia-packages), [Kontextmenü](../plugins/wikipedia.md#wikipedia-languages) |
| [Online-Karten](#online-maps) |[Kartenebene](../plugins/online-map.md#configure-map-source) |
| [Reiseaufzeichnung](#trip-recording) | [Widget](../plugins/trip-recording.md#widgets), [Profil](../plugins/trip-recording.md#profile-settings) |
| [Topographie](#topography) | [Kartenebene](../plugins/topography.md#hillshade-slope-and-altitude-layers) |
| [3D-Relief](#topography) 🤖 | [Kartenebene](../plugins/topography.md#3d-relief) |
| [Wetter](../plugins/weather.md) | [Kartenebene](../plugins/weather.md#display-weather-on-the-map), [Widget](../plugins/weather#weather-widgets), [Bildschirm](../plugins/weather.md#configure-screen) |
| [Nautische Kartenansicht](#nautical-map-view) | [Kartenstil](../plugins/nautical-charts.md#nautical-map-style), [Profil](../plugins/nautical-charts.md#nautical-options) |
| [Ski-Kartenansicht](#ski-map-view) | [Kartenstil](../plugins/ski-maps.md#set-winter-style), [Profil](../plugins/ski-maps.md#skiing-profile) |
|[Audio-/Video-Notizen](#audiovideo-notes) 🤖 | [Kartenebene](../plugins/audio-video-notes.md#show-all-on-the-map), [Kontextmenü](../plugins/audio-video-notes.md#create), [Widget](../plugins/audio-video-notes.md#recording-widget) |
|[OpenStreetMap-Bearbeitung](#openstreetmap-editing)| [Kartenebene](../plugins/osm-editing.md#how-to-use) |
|[Parkposition](#parking-position) | [Kontextmenü](../plugins/parking.md#set-a-point), [Widget](../plugins/parking.md#parking-widget) |
|[Mapillary](#mapillary) | [Kartenebene](../plugins/mapillary.md#map-layer), [Kontextmenü](../plugins/mapillary.md#map-context-menu) , [Widget](../plugins/mapillary.md#mapillary-widget)|
|[Externe Sensoren](#external-sensors) 🤖 | [Widget](../plugins/external-sensors.md#widgets) |
|[Barrierefreiheit](#accessibility) 🤖 | [Benutzerdefinierte Einstellungen](../plugins/accessibility.md#plugin-settings) |
| [OsmAnd-Entwicklung](#osmand-development) | [Benutzerdefinierte Einstellungen](../plugins/development.md#plugin-settings) |
| [OsmAnd Tracker](#osmand-tracker) 🤖 | [Kartenebene](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map), [Widget](../plugins/osmand-tracker.md#osmand-tracker-widget), [Kontextmenü](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map) |
| [AIS-Schiffs-Tracker](#ais-vessel-tracker) 🤖 | [Benutzerdefinierte Einstellungen](../plugins/ais-tracker.md#plugin-settings) |

### Plugin-Einstellungen {#plugin-settings}

:::caution HINWEIS
Nur das OsmAnd-Entwicklungs-Plugin und das OSM-Bearbeitungs-Plugin ändern die Einstellungen für alle Profile. Die restlichen Plugins werden für jedes Profil separat konfiguriert.
:::

Die meisten Plugins bieten spezifische Profil- oder globale Einstellungen, die über folgende Wege aufgerufen werden können:

- *Hauptmenü → Plugins → Plugin-Name → Einstellungen (&#x2699 für iOS)* oder
- *Hauptmenü → Einstellungen → Profil → [Plugin-Einstellungen](../personal/profiles.md#plugin-settings)*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Einstellungen Plugin Android 1](@site/static/img/plugins/development/access_plugin_settings_andr_2.png) ![Einstellungen Plugin Android 2](@site/static/img/plugins/development/access_plugin_settings_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Einstellungen Plugin iOS 1](@site/static/img/plugins/development/access_plugin_settings_ios_2.png) ![Einstellungen Plugin iOS 2](@site/static/img/plugins/development/access_plugin_settings_ios_1.png)

</TabItem>

</Tabs>

Die folgenden Plugins bieten eigene Einstellungen:

🤖 - *nur für die Android-Version von OsmAnd.*

| Plugin-Name | Einstellungen |
|:------------|:-------|
| [Reiseaufzeichnung](#trip-recording) | Konfigurieren Sie die [Betriebsmodi](../plugins/trip-recording.md#recording-parameters) der Reiseaufzeichnung |
| [Wetter](#weather) | Konfigurieren Sie die Maßeinheiten für die Anzeige von Wetterereignissen |
|[Audio-/Video-Notizen](#audiovideo-notes) 🤖 | Wählen Sie [Videoformat, Speicherdauer usw.](../plugins/audio-video-notes.md#plugin-settings) |
|[OpenStreetMap-Bearbeitung](#openstreetmap-editing)| Geben Sie den Benutzer-[Login](../plugins/osm-editing.md#plugin-settings) an |
| [Externe Sensoren](#external-sensors) 🤖 | Verbindung zu externem Gerät [Einstellungen](../plugins/external-sensors.md#settings) |
| [Barrierefreiheit](#accessibility) 🤖 | [Einstellungen](../plugins/accessibility.md#plugin-settings) ermöglichen die Nutzung von [Android-Barrierefreiheitsfunktionen](https://www.android.com/accessibility/) innerhalb von OsmAnd. |
| [OsmAnd-Entwicklung](#osmand-development) | [Plugin-Einstellungen](../plugins/development.md#plugin-settings) ermöglichen die Aktivierung spezieller Funktionen für Entwickler oder erfahrene Benutzer |
| [OsmAnd Tracker](#osmand-tracker) 🤖 | Alle Einstellungen sind in einer separaten App konfigurierbar |
| [AIS-Schiffs-Tracker](#ais-vessel-tracker) | [Plugin-Einstellungen](../plugins/ais-tracker.md#plugin-settings) ermöglichen die Aktivierung spezieller Einstellungen |

### Plugin-Aktionen {#plugin-actions}

**<Translate android="true" ids="reset_plugin_to_default"/>** - *Mit dieser Option können die Plugin-Einstellungen auf die Standardwerte zurückgesetzt werden*.
**<Translate android="true" ids="copy_from_other_profile"/>** - *Plugin-Einstellungen können von einem anderen Profil kopiert werden*.

## Plugin-Liste {#plugins-list}

### [Wikipedia](./wikipedia.md) {#wikipedia}

Wikipedia auf Ihrer Reise hilft Ihnen, mehr über die Orte zu erfahren, die Sie besuchen. Es ist offline verfügbar und zeigt Wikipedia-Artikel zu den Sehenswürdigkeiten direkt auf der Karte an.

### [Online-Karten](./online-map.md) {#online-maps}

OsmAnd Online-Karten sind eine umfangreiche Ergänzung zur bereits in der Anwendung vorhandenen OpenStreetMap-Datenbank. Mit diesem Plugin können Sie Ihrer Karte Ebenen mit Informationen aus verschiedenen Quellen hinzufügen.

### [Reiseaufzeichnung](./trip-recording.md) {#trip-recording}

Um eine Geschichte darüber zu erzählen, wo Sie gewesen sind, können GPS-Daten, wie Breiten- und Längengrad Ihres Standorts, aufgezeichnet und in einer Datei gespeichert werden, und dann wiederverwendet, verbessert, mit Wegpunkten erweitert, zur Navigation bereitgestellt, mit Freunden geteilt usw.

### [Topographie](./topography.md) {#topography}

Topographische Informationen wie Höhenlinien, Schattierungen, Neigungen, 3D-Relief helfen, eine visuelle Einschätzung der Geländebeschaffenheit zu erhalten, indem sie Höhe, Relief, Extreme, Steilheit, Punkte gleicher Höhe usw. anzeigen.

### [Nautische Kartenansicht](./nautical-charts.md) {#nautical-map-view}

Die nautische Kartenansicht bietet eine detaillierte grafische Darstellung von Ozeanen, Meeren, Küstengebieten und Flüssen, um Ihnen die Navigation auf dem Wasser zu erleichtern, beliebte Verkehrsrouten, Hindernisse im Wasserweg, Häfen, Ankerplätze und andere wichtige Referenzen anzuzeigen.

### [Ski-Kartenansicht](./ski-maps.md) {#ski-map-view}

Die Ski-Kartenansicht zeigt Winterfarben und Pisten bergab oder langlaufend, sowie Seilbahnen, Sessellifte, Einrichtungen und Dienstleistungen in der Nähe, was nützlich ist für die Navigation zu Zielen wie Erholungsgebieten, Skigebieten und Funparks.

### [Audio-/Video-Notizen](./audio-video-notes.md) {#audiovideo-notes}

Erstellen Sie Audio-/Video-Notizen für zukünftige Referenzen, z.B. um ein Ereignis, eine Szene oder eine Interaktion festzuhalten. Erstellte Audio-/Video-Notizen sind über *Meine Orte* sowie auf der Karte als individuelle Ebene von benutzererstellten Geschichten und Gedanken, die an eine Geolocation gebunden sind, verfügbar. Nur für Android.

### [Parkposition](./parking.md) {#parking-position}

Legen Sie einen Punkt auf der Karte fest, an dem Ihr Auto auf der Straße abgestellt ist, und benachrichtigen Sie Ihren Kalender, wenn die Parkzeit endet. Dies erleichtert Ihnen die Verfolgung von Zeit und Ort Ihres Autos.

### [OpenStreetMap-Bearbeitung](./osm-editing.md) {#openstreetmap-editing}

Das OpenStreetMap-Bearbeitungs-Plugin ermöglicht es Ihnen, zu OpenStreetMap beizutragen, einer globalen Gemeinschaft, die eine umfassende Karte der Welt erstellt und öffentlich verfügbare, aktuelle Open-Source-Daten bereitstellt.

### [Mapillary](./mapillary.md) {#mapillary}

Sehen Sie sich Straßenansichten Ihrer Routen oder interessanten Orte an, bereitgestellt von [Mapillary](https://www.mapillary.com/) (eine Internetverbindung ist erforderlich).

### [Barrierefreiheit](./accessibility.md) {#accessibility}

Das Barrierefreiheits-Plugin macht die Barrierefreiheitsfunktionen des Geräts direkt in OsmAnd verfügbar. Nur für Android.

### [Externe Sensoren](./external-sensors.md) {#external-sensors}

Verbinden Sie externe Sensoren, um deren Daten in OsmAnd anzuzeigen und die Informationen in Track-Aufzeichnungen zu speichern.

### [Fahrzeugdaten](./vehicle-metrics.md) {#vehicle-metrics}

Verbinden Sie einen OBD-II-Scanner, um Fahrzeugdaten in OsmAnd anzuzeigen und die Informationen in Track-Aufzeichnungen zu speichern.

### [Wetter](./weather.md) {#weather}

Zeigt die stündliche Vorhersage für den aktuellen Tag und für 7 Tage im Voraus an.

### [OsmAnd-Entwicklung](./development.md) {#osmand-development}

Das OsmAnd-Entwicklungs-Plugin richtet sich an Entwickler und erfahrene Benutzer. Es ermöglicht Ihnen, Navigationsrouten zu simulieren, die Bildschirm-Rendering-Leistung zu überprüfen usw.

### [OsmAnd Tracker](./osmand-tracker.md) {#osmand-tracker}

OsmAnd Tracker hilft Ihnen, die Position Ihrer Kontakte auf der Karte in OsmAnd zu sehen. Nur für Android.

### [AIS-Schiffs-Tracker](./ais-tracker.md) {#ais-vessel-tracker}

Anzeige von AIS-Positionen und Informationen über umliegende Schiffe. Die AIS-Daten werden über das Netzwerk von einem externen AIS-Empfänger empfangen.

## [Ein benutzerdefiniertes Plugin erstellen](./custom.md) {#create-a-custom-plugin}

Sie können Ihr eigenes Plugin erstellen, indem Sie dem Artikel *Benutzerdefiniertes Paket* folgen.

_______

> *Zuletzt aktualisiert: März 2025*