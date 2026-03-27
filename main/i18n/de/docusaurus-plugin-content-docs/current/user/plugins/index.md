---
source-hash: be742f68ef2cf4f1c1882c64eeb0f7f01eae8cee4fda985a0ff5a22115f9f3cf
sidebar_position: 18
title:  Plugins
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

Plugins erweitern die Funktionalität von OsmAnd erheblich. Jedes ist für eine bestimmte Aufgabe oder einen bestimmten Anwendungsfall konzipiert, z. B. für die Aufzeichnung einer Reise, den Offline-Zugriff auf Wikipedia-Artikel, die Visualisierung von Geländedaten oder die Bereitstellung einer Straßenansicht.

Plugins können intern sein und in der OsmAnd-Anwendung aktiviert werden, oder es können externe, separat installierte Programme sein. Plugins von Drittanbietern arbeiten über die OsmAnd-API und können auf OsmAnd-Daten zugreifen.


## Plugin konfigurieren {#configure-plugin}

Um auf die Funktionalität eines Plugins zuzugreifen, muss es zuerst [aktiviert](#enable--disable) werden, und einige Plugins erfordern vor der Verwendung einen [Kauf](#purchase). In einigen Fällen muss dann eine bestimmte Kartenebene aktiviert oder ein Benutzerprofil [konfiguriert](#plugin-settings) werden.


### Aktivieren / Deaktivieren {#enable--disable}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,plugin_settings"/> →  &#65049; → Aktivieren*

![Plugins aktivieren Android](@site/static/img/settings/plugins_enable_android.png) ![Plugin-Beispiel Android](@site/static/img/settings/plugin_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;*

![Plugins aktivieren iOS](@site/static/img/settings/plugins_enable_ios.png) ![Plugin-Beispiel iOS](@site/static/img/settings/plugin_example_ios.png)

</TabItem>

</Tabs>

### Kauf {#purchase}

Die meisten Plugins sind kostenlos erhältlich, nur die Plugins in der folgenden Liste erfordern den Kauf einer [OsmAnd+ oder OsmAnd Pro](../purchases/index.md) Lizenz zur Nutzung:  

- [Topografie](../plugins/topography.md)
- [3D-Relief](../plugins/topography.md#3d-relief) (Funktion des Topografie-Plugins)
- [Wikipedia](../plugins/wikipedia.md)
- [Seekartenansicht](../plugins/nautical-charts.md)
- [Wetter](../plugins/weather.md)

Detaillierte Informationen zum Kauf der Anwendung finden Sie im Abschnitt [Kauf](../purchases/).

### Plugin-Funktionen {#plugin-features}

OsmAnd-Plugins können diese Funktionsgruppen erweitern: **Ebenen**, **Widgets**, **Aktionen im Kontextmenü**, **Aktionen im Schubladenmenü**, **Kartenstil**, **Kartenquelle**, **Profil**.

🤖 *- nur für die Android-Version von OsmAnd.*

| Plugin-Name | Funktionen |
|:------------|:-------|
| [Wikipedia](#wikipedia) | [Kartenebene](../plugins/wikipedia.md#download-wikipedia-packages), [Kontextmenü](../plugins/wikipedia.md#wikipedia-settings) |
| [Online-Karten](#online-maps) |[Kartenebene](../plugins/online-map.md#how-to-prepare-raster-maps) |
| [Reiseaufzeichnung](#trip-recording) | [Widget](../plugins/trip-recording.md#widgets), [Profil](../plugins/trip-recording.md#recording-settings) |
| [Topografie](#topography) | [Kartenebene](../plugins/topography.md#hillshade-slope-and-altitude-layers) |
| [3D-Relief](#topography) 🤖  | [Kartenebene](../plugins/topography.md#3d-relief) |
| [Wetter](../plugins/weather.md) | [Kartenebene](../plugins/weather.md#display-weather-on-the-map), [Widget](../plugins/weather#weather-widgets), [Bildschirm](../plugins/weather.md#weather-forecast-screen) |
| [Seekartenansicht](#nautical-map-view) | [Kartenstil](../plugins/nautical-charts.md#nautical-map-style), [Profil](../plugins/nautical-charts.md#nautical-profile)  |
| [Skikartenansicht](#ski-map-view) | [Kartenstil](../plugins/ski-maps.md#set-winter-and-ski-map-style), [Profil](../plugins/ski-maps.md#skiing-profile) |
|[Audio-/Videonotizen](#audiovideo-notes) 🤖  | [Kartenebene](../plugins/audio-video-notes.md#show-all-on-the-map), [Kontextmenü](../plugins/audio-video-notes.md#create-a-single-note), [Widget](../plugins/audio-video-notes.md#recording-widget) |
|[Parkposition](#parking-position) | [Kontextmenü](../plugins/parking.md#set-a-spot), [Widget](../plugins/parking.md#parking-widget) |
|[OpenStreetMap-Bearbeitung](#openstreetmap-editing)| [Kartenebene](../plugins/osm-editing.md#authorization) |
|[Mapillary](#mapillary) | [Kartenebene](../plugins/mapillary.md#map-layer), [Kontextmenü](../plugins/mapillary.md#map-context-menu) , [Widget](../plugins/mapillary.md#mapillary-widget)|
|[Externe Sensoren](#external-sensors) 🤖  | [Widget](../plugins/external-sensors.md#widgets) |
|[Fahrzeugmetriken](#vehicle-metrics)  | [Benutzerdefinierte Einstellungen](../plugins/vehicle-metrics#scanner-settings), [Widget](../plugins/vehicle-metrics#widgets) |
|[Astronomie](#star-watcher)  | [Bildschirm](../plugins/astronomy.md#star-map-screen), [Kontextmenü](../plugins/astronomy.md#celestial-object-info) |
|[Bedienungshilfen](#accessibility) 🤖  | [Benutzerdefinierte Einstellungen](../plugins/accessibility.md#plugin-settings) |
|[OsmAnd-Entwicklung](#osmand-development) | [Benutzerdefinierte Einstellungen](../plugins/development.md#plugin-settings) |
|[OsmAnd Tracker](#osmand-tracker) 🤖  | [Kartenebene](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map), [Widget](../plugins/osmand-tracker.md#tracker-widget), [Kontextmenü](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map) |
|[AIS-Schiffstracker](#ais-vessel-tracker) 🤖  |  [Benutzerdefinierte Einstellungen](../plugins/ais-tracker.md#plugin-settings) |


### Plugin-Einstellungen {#plugin-settings}

:::caution HINWEIS
Nur das OsmAnd-Entwicklungs-Plugin und das OSM-Bearbeitungs-Plugin ändern die Einstellungen für alle Profile. Die übrigen Plugins werden für jedes Profil separat konfiguriert.  
:::

Die meisten Plugins bieten spezifische profil- oder globale Einstellungen, auf die Sie zugreifen können über:

- *Hauptmenü → Plugins → Plugin-Name → Einstellungen (&#x2699 für ios)* oder  
- *Hauptmenü → Einstellungen → Profil → [Plugin-Einstellungen](../personal/profiles.md#plugin-settings)*.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Einstellungen Plugin Android 1](@site/static/img/plugins/development/access_plugin_settings_andr_2.png) ![Einstellungen Plugin Android 2](@site/static/img/plugins/development/access_plugin_settings_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Einstellungen Plugin iOS 1](@site/static/img/plugins/development/access_plugin_settings_ios_2.png) ![Einstellungen Plugin iOS 2](@site/static/img/plugins/development/access_plugin_settings_ios_1.png)

</TabItem>

</Tabs>

Die folgenden Plugins bieten ihre eigenen Einstellungen:

🤖 *- nur für die Android-Version von OsmAnd.*

| Plugin-Name | Einstellungen |
|:------------|:-------|
| [Reiseaufzeichnung](#trip-recording) | Konfigurieren Sie die Reiseaufzeichnung [Betriebsmodi](../plugins/trip-recording.md#required-setup-parameters) |
| [Wetter](#weather) | Konfigurieren Sie die Maßeinheiten für die Anzeige von Wetterereignissen |
|[Audio-/Videonotizen](#audiovideo-notes) 🤖  | Wählen Sie [Videoformat, Speicherdauer usw.](../plugins/audio-video-notes.md#plugin-settings) |
|[OpenStreetMap-Bearbeitung](#openstreetmap-editing)| Geben Sie den Benutzer-[Login](../plugins/osm-editing.md#settings) an  |
|  [Externe Sensoren](#external-sensors) 🤖  | Verbinden Sie sich mit den [Einstellungen](../plugins/external-sensors.md#required-setup-parameters) eines externen Geräts |
|  [Bedienungshilfen](#accessibility) 🤖  | [Einstellungen](../plugins/accessibility.md#plugin-settings) ermöglichen es Ihnen, die [Bedienungshilfen-Funktionen von Android](https://www.android.com/accessibility/) in OsmAnd zu verwenden. |
| [OsmAnd-Entwicklung](#osmand-development) | [Plugin-Einstellungen](../plugins/development.md#plugin-settings) ermöglichen es Ihnen, spezielle Funktionen für Entwickler oder erfahrene Benutzer zu aktivieren |
|  [OsmAnd Tracker](#osmand-tracker) 🤖  | Alle Einstellungen sind in einer separaten App konfigurierbar |
| [AIS-Schiffstracker](#ais-vessel-tracker) | [Plugin-Einstellungen](../plugins/ais-tracker.md#plugin-settings) ermöglichen es Ihnen, spezielle Einstellungen zu aktivieren |

### Plugin-Aktionen {#plugin-actions}

**<Translate android="true" ids="reset_plugin_to_default"/>** - *Mit dieser Option können die Plugin-Einstellungen auf die Standardwerte zurückgesetzt werden*.  
**<Translate android="true" ids="copy_from_other_profile"/>** - *Plugin-Einstellungen können von einem anderen Profil kopiert werden*.


## Liste der Plugins {#plugins-list}

### [Wikipedia](./wikipedia.md) {#wikipedia}

Wikipedia auf Ihrer Reise hilft Ihnen, mehr über die Orte zu erfahren, die Sie besuchen. Es ist offline verfügbar und zeigt Wikipedia-Artikel zu den Points of Interest direkt auf der Karte an.

### [Online-Karten](./online-map.md) {#online-maps}

OsmAnd Online-Karten sind eine umfangreiche Ergänzung zur bereits in der Anwendung vorhandenen OpenStreetMap-Datenbank. Mit diesem Plugin können Sie Ihrer Karte Ebenen mit Informationen aus verschiedenen Quellen hinzufügen.  

### [Reiseaufzeichnung](./trip-recording.md) {#trip-recording}

Um eine Geschichte darüber zu erzählen, wo Sie gewesen sind, können GPS-Daten wie Breiten- und Längengrad Ihres Standorts aufgezeichnet und in einer Datei gespeichert werden, um sie dann wiederzuverwenden, zu verbessern, mit Wegpunkten zu erweitern, für die Navigation bereitzustellen, mit Freunden zu teilen usw.  

### [Topografie](./topography.md) {#topography}

Topografische Informationen wie Höhenlinien, Schummerung, Neigung und 3D-Relief helfen bei der visuellen Beurteilung der Geländebeschaffenheit, indem sie Höhe, Relief, Extreme, Steilheit, Punkte gleicher Höhe usw. anzeigen.  

### [Wetter](./weather.md) {#weather}

Zeigt die stündliche Vorhersage für den aktuellen Tag und für 7 Tage im Voraus an. 

### [Seekartenansicht](./nautical-charts.md) {#nautical-map-view}

Die Seekartenansicht bietet eine detaillierte grafische Darstellung von Ozeanen, Meeren, Küstengebieten und Flüssen, um Ihnen bei der Navigation auf dem Wasser zu helfen, beliebte Verkehrsrouten, Hindernisse auf der Wasserstraße, Häfen, Ankerplätze und andere wichtige Referenzen zu sehen.

### [Skikartenansicht](./ski-maps.md) {#ski-map-view}

Die Skikartenansicht zeigt Winterfarben und Pisten für Abfahrt oder Langlauf sowie Seilbahnen, Sessellifte, Einrichtungen und Dienstleistungen in der Nähe, was für die Navigation an Zielen wie Erholungsgebieten, Skigebieten und Funparks nützlich ist.

### [Audio-/Videonotizen](./audio-video-notes.md) {#audiovideo-notes}

Erstellen Sie Audio-/Videonotizen zur späteren Verwendung, z. B. um sich an ein Ereignis, eine Szene oder eine Interaktion zu erinnern. Erstellte Audio-/Videonotizen sind unter *Meine Orte* sowie auf der Karte als individuelle Ebene von benutzererstellten Geschichten und Gedanken verfügbar, die an einen geografischen Standort gebunden sind. Nur für Android.  

### [Parkposition](./parking.md) {#parking-position}

Legen Sie einen Punkt auf der Karte fest, an dem Ihr Auto auf der Straße abgestellt ist, und lassen Sie sich von Ihrem Kalender benachrichtigen, wenn die Parkzeit endet. Dies erleichtert Ihnen die Verfolgung der Zeit und des Standorts Ihres Autos.

### [OpenStreetMap-Bearbeitung](./osm-editing.md) {#openstreetmap-editing}

Das OpenStreetMap-Bearbeitungs-Plugin ermöglicht es Ihnen, zu OpenStreetMap beizutragen, einer globalen Gemeinschaft, die eine umfassende Karte der Welt erstellt und öffentlich verfügbare, aktuelle Open-Source-Daten bereitstellt.  

### [Mapillary](./mapillary.md) {#mapillary}

Sehen Sie sich Straßenansichten Ihrer Routen oder Sehenswürdigkeiten an, die von [Mapillary](https://www.mapillary.com/) bereitgestellt werden (eine Internetverbindung ist erforderlich).  

### [Externe Sensoren](./external-sensors.md) {#external-sensors}

Verbinden Sie externe Sensoren, um deren Daten in OsmAnd anzuzeigen und die Informationen in Streckenaufzeichnungen zu speichern.  

### [Fahrzeugmetriken](./vehicle-metrics.md) {#vehicle-metrics}

Verbinden Sie einen OBD-II-Scanner, um Fahrzeugdaten in OsmAnd anzuzeigen und die Informationen in Streckenaufzeichnungen zu speichern.  

### [Astronomie](./astronomy.md) {#astronomy}

Das Astronomie-Plugin zeigt eine interaktive Sternenhimmel-Überlagerung mit Sternen, Sternbildern, der Sonne, dem Mond und Planeten an. Es hilft Ihnen, Himmelskörper über Ihrem aktuellen Standort zu identifizieren, ihre Pfade für ein ausgewähltes Datum und eine Uhrzeit vorab anzusehen und Sternenbeobachtungssitzungen mit integrierten Zeitsteuerungen und Anzeigeoptionen zu planen.

### [Bedienungshilfen](./accessibility.md) {#accessibility}

Das Bedienungshilfen-Plugin macht die Bedienungshilfen-Funktionen des Geräts direkt in OsmAnd verfügbar. Nur für Android.  

### [OsmAnd-Entwicklung](./development.md) {#osmand-development}

Das OsmAnd-Entwicklungs-Plugin richtet sich an Entwickler und erfahrene Benutzer. Es ermöglicht Ihnen, Navigationsrouten zu simulieren, die Leistung der Bildschirmanzeige zu überprüfen usw.  

### [OsmAnd Tracker](./osmand-tracker.md) {#osmand-tracker}

OsmAnd Tracker hilft Ihnen zu sehen, wo sich Ihre Kontakte auf der Karte in OsmAnd befinden. Nur für Android.  

### [AIS-Schiffstracker](./ais-tracker.md) {#ais-vessel-tracker}

Zeigt AIS-Positionen und Informationen über umliegende Schiffe an. Die AIS-Daten werden über das Netzwerk von einem externen AIS-Empfänger empfangen.

## [Ein benutzerdefiniertes Plugin erstellen](./custom.md) {#create-a-custom-plugin}

Sie können Ihr eigenes Plugin erstellen, indem Sie dem Artikel *Benutzerdefiniertes Paket* folgen.


_______