---
source-hash: ab1e41d88d45cf90e8e97f0efc04df7c72257821a9279cc6ccbc4b8571774469
sidebar_position: 2
title:  Karten & Ressourcen
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

Im Bereich **Karten und Ressourcen** können Sie sowohl *Online*- als auch *Offline*-Karten und andere in OsmAnd verwendete Ressourcen verwalten. Sie können zum Beispiel herunterladen, löschen, umbenennen, den Cache leeren, aktualisieren und die Größe überprüfen sowie verschiedene Aktionen durchführen.

OsmAnd arbeitet mit zwei Arten von Karten: [Vektorkarten](../map/vector-maps.md) und [Rasterkarten](../map/raster-maps.md). Der Reiter [Lokal](#local-menu) speichert alle Karten und Ressourcen. Verfügbare Kartentypen können über den Reiter [Downloads](#downloads-menu) heruntergeladen werden. Im Reiter [Aktualisierungen](#updates-menu) können Sie Karten herunterladen, für die Updates verfügbar sind, und [Live-Updates](#live-updates) nutzen. Sie können auch auf die Funktion [Zusätzliche Karten](#extra-maps) zugreifen, um Ihre eigenen Kartentypen zu erstellen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources"/>*

![Kartenmenü Android](@site/static/img/personal/maps/maps_overview_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Kartenmenü iOS](@site/static/img/personal/maps/maps_overview_ios.png)

</TabItem>

</Tabs>


## Kartentypen {#map-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Karten-Download-Menü Android](@site/static/img/personal/maps/map_type_1_andr.png) ![Regionsweite Karten Android](@site/static/img/personal/maps/map_type_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Karten-Download-Menü iOS](@site/static/img/personal/maps/map_type_1_ios.png) ![Regionsweite Karten iOS](@site/static/img/personal/maps/map_type_2_ios.png)  

</TabItem>

</Tabs>

Das Herunterladen von Karten in die OsmAnd-Anwendung ist ein wichtiger Schritt, der die Funktionalität und Effizienz der Navigation bestimmt.

### Kostenlose Karteninhalte {#free-map-content}

- **Standardkarte**. Bietet eine Übersicht über das Gebiet basierend auf der Quelle [OpenStreetMap](https://www.openstreetmap.org/) und enthält eine Karte, Routen, Adressen, POIs und Informationen zum öffentlichen Nahverkehr. Durch Antippen öffnet sich ein Bildschirm mit einer Liste der Regionen des ausgewählten Landes und Informationen darüber, wie viel Speicherplatz diese Karten auf Ihrem Gerät belegen werden.  
- **Nur Straßen** (*Nur Android*). Die Karte enthält nur Informationen zum Straßennetz, um sich auf Routen und die Straßeninfrastruktur zu konzentrieren. Durch das Entfernen von Details wie Gebäuden und Sonderzielen ist sie kleiner als eine Standardkarte. Durch Antippen öffnet sich ein Bildschirm mit einer Liste der Regionen des ausgewählten Landes und Informationen darüber, wie viel Speicherplatz diese Karten auf Ihrem Gerät belegen werden.
- **Weltübersichtskarte**. Versionen von OsmAnd bis 3.8 bieten den Download einer Weltkarte an, damit Sie sie im globalen Maßstab betrachten können. In neueren Versionen von OsmAnd ist eine leichtgewichtige *Mini-Weltkarte* in der Anwendung enthalten. Die App ermöglicht es Ihnen, eine größere Übersichtsweltkarte mit detaillierteren Informationen herunterzuladen. 

:::info monatliche Kartenaktualisierungen
Bitte beachten Sie, dass monatliche Kartenaktualisierungen als weiterer Karten-Download gelten und von der verfügbaren Anzahl kostenloser Karten-Downloads abgezogen werden.
:::

### Kostenpflichtige Karteninhalte {#paid-map-content}

- [Höhenlinien](../plugins/topography.md#contour-lines). Eine Karte, die Höhenlinien enthält, um das Gelände zu visualisieren.
- [Geländekarte (Schummerung und Neigung)](../plugins/topography.md#hillshade-slope-and-altitude-layers). Karten mit Schatten oder Neigungen liefern zusätzliche Geländeinformationen.
- [Geländekarte (3D)](../plugins/topography.md#3d-relief). Dreidimensionale Darstellung des Geländes für ein besseres Verständnis Ihrer Umgebung. Die [Karten-Rendering-Engine Version 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) muss aktiviert sein.
- [Nautische Tiefen und Konturen](../plugins/nautical-charts.md). Seekarten, die Küstenlinien, Tiefen, Navigationshilfen, Häfen und Gefahren für sicheres Bootfahren und Segeln anzeigen.
- [Wikipedia](../plugins/wikipedia.md). Vektorkarte mit georeferenzierten [Wikipedia](https://wikipedia.org/)-Artikeln über Sehenswürdigkeiten oder zusätzlichen Informationen zu Orten.
- [Wikivoyage](../plan-route/travel-guides.md). Bietet Vektorkarten mit virtuellen Reiseführern, die den Nutzern wertvolle Informationen, Empfehlungen und Tipps geben.
- [Wettervorhersage](../plugins/weather.md). Wetterinformationen auf einer Karte zur einfachen Routenplanung.


## Downloads-Menü {#downloads-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Allgemeines Karten-Download-Menü Android](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Allgemeines Karten-Download-Menü iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

Der Reiter **Download** ermöglicht es Ihnen, verschiedene Kartentypen von den OsmAnd-Servern herunterzuladen, was eine aktive Internetverbindung erfordert.

***So laden Sie eine Karte herunter:***

- **Öffnen Sie den Reiter Download**, suchen Sie den gewünschten Abschnitt und tippen Sie auf den entsprechenden Ordner, um verfügbare Karten anzuzeigen.

- **Verfügbare Karten** zeigen Download-Symbole an, für eine einzelne Karte oder für [mehrere Karten](#multiple-map-loading).

- **Heruntergeladene Karten** zeigen ein grünes Symbol mit einer Menüschaltfläche:  
    - *Android*: Drei-Punkte-Menü.  
    - *iOS*: Info (i)-Symbol.

- **Karten, die gerade geladen werden**, haben ein Symbol, das dies visualisiert. Um den Download abzubrechen, tippen Sie auf das Symbol. Um die Liste der Karten in der Download-Warteschlange anzuzeigen und die Downloads abzubrechen, tippen Sie auf die Download-Leiste im Bereich Gerätespeicherinfo der Reiter Downloads und Aktualisierungen.

- **In der kostenlosen Version** zeigen Karten, die nicht zum Download verfügbar sind, ein [HOLEN](../purchases/index.md)-Symbol, das zur Kaufseite verlinkt.

***Der Downloads-Reiter besteht aus Kartengruppen:***

- **Gerätespeicherinfo**. Visualisiert den belegten und freien Speicherplatz auf Ihrem Gerät.
- **Kartenzähler** (***Kostenlose Version***). Zeigt an, wie viele Karten Sie noch herunterladen können.
- [Zusätzliche Karten](#extra-maps). Zeigt die Kartendaten für das [Benutzerdefinierte Paket](../plugins/custom.md) an.
- **Regionen**. Liste nach Kontinent und Weltregion: *Afrika, Antarktis, Asien, Australien und Ozeanien, Mittelamerika, Europa, Nordamerika, Russland und Südamerika.*
- [Weltkarten](#world-maps). Eine Liste von Karten der ganzen Welt: *Welt-Höhenkorrektur (nur Android)*, *Weltübersichtskarte*, *Ganze Welt (Wettervorhersage)*
- [Seekarten](../plugins/nautical-charts.md) ([*kostenpflichtige Funktion*](../purchases/index.md)). Vektorkarten mit Höhenangaben als Punkte oder Linien.
- [Reiseführer (Wikivoyage)](../plan-route/travel-guides.md) ([*kostenpflichtige Funktion*](../purchases/index.md)). Vektorkarten mit einer Sammlung von Artikeln im HTML-Format und zusätzlich GPX-Dateien.
- **Andere Karten**. Karten, die nicht der aktuellen Kartenhierarchie zugeordnet werden können, weil sie nicht unterstützt werden oder in zukünftigen Versionen verfügbar sein werden.
- [Sprachansagen](../navigation/guidance/voice-navigation.md) (*Nur Android*). Sprachpakete für die Sprachausgabe von Navigationsanweisungen.
- [Kartenschriftarten](../map/vector-maps.md#map-fonts-android) (*Nur Android*). Zusätzliche Schriftartdateien zur Anzeige von Text auf der Karte.
- **Stadt oder Region suchen** (*Nur Android*). Ein Schnellsuche-Werkzeug oben im Downloads-Reiter (Lupensymbol), um die benötigte Stadt oder Region zu finden.

### Weltkarten {#world-maps}

Im Menü Karten herunterladen gibt es einen Abschnitt **Weltkarten**, der den Zugriff auf den Download verschiedener Weltkarten ermöglicht und die Funktionalität der App ergänzt.  

- **Welt-Höhenkorrektur** (*Nur Android*). Diese Datei enthält Höhenkorrekturen, um die Krümmung des Planeten auszugleichen.
- **Weltübersichtskarte**. Bietet eine umfassende Übersicht über die Erdoberfläche, nützlich für die langfristige Routenplanung und gelegentliche Erkundungen.
- **Ganze Welt (Wettervorhersage)**. Ermöglicht das Herunterladen einer Karte mit Wetterinformationen.


### Zusätzliche Karten {#extra-maps}

OsmAnd unterstützt die Übertragung von profilspezifischen Einstellungen und Daten, einschließlich Rendering-Dateien, Schriftarten, Routen, Karten und benutzerdefinierten Plugins. Erstellen Sie einen benutzerdefinierten Kartenordner mit einer `.osf`-Plugin-Datei (ein komprimiertes `.zip`-Format).

So importieren Sie eine Datei:

1. Suchen Sie die `.osf`-Datei im Speicher Ihres Geräts, in einem Messenger oder in einer E-Mail.
2. Tippen Sie darauf, um sie mit OsmAnd zu öffnen.
3. Das Plugin erscheint im Abschnitt **Plugin-Liste**, wo es aktiviert werden kann.
4. Ein entsprechender Ordner erscheint dann im Abschnitt **Zusätzliche Karten** des Reiters [Downloads](#downloads-menu).

Lesen Sie mehr im Artikel [**Benutzerdefiniertes Paket**](../plugins/custom).


### Laden mehrerer Karten {#multiple-map-loading}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Allgemeines Karten-Download-Menü Android](@site/static/img/personal/maps/multiple_maps_andr.png) ![Abwahlmenü Android](@site/static/img/personal/maps/multiple_maps_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Allgemeines Karten-Download-Menü iOS](@site/static/img/personal/maps/multiple_maps_ios.png) ![Abwahlmenü iOS](@site/static/img/personal/maps/multiple_maps_2_ios.png)

</TabItem>

</Tabs>

Für Länder, die aus **mehreren Regionalkarten** bestehen, können Sie das Massenladen mehrerer Karten verwenden. Karten, die für diese Art von Download verfügbar sind, werden mit einem doppelten Download-Pfeil-Symbol und einer Beschriftung mit der Anzahl der enthaltenen Regionen angezeigt (z. B. Höhenlinien / Alle Regionen: 10). Sie können wählen, wie viele Karten Sie herunterladen möchten.


## Lokales Menü {#local-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*

![Lokaler Reiter Android 1](@site/static/img/settings/new_map_and_resourses_andr_1.png) ![Lokaler Reiter Android 2](@site/static/img/settings/new_map_and_resourses_andr_2.png)

Der Reiter 'Lokal' bietet eine Übersicht über die Speichernutzung aller OsmAnd-Daten auf Ihrem Gerät. Die Daten sind zur besseren Übersicht in drei farbcodierte Abschnitte unterteilt, wobei die Elemente nach Größe von groß nach klein sortiert sind. Jeder Abschnitt zeigt nur Elemente mit heruntergeladenen Daten an:

- ***Ressourcen*** (*blau*).  
    Umfasst Karten ([Standard](../map/vector-maps.md), &nbsp;[Seekarten](../plugins/nautical-charts.md), &nbsp;[Topografie](../plugins/topography.md), &nbsp;[Wetter](../plugins/weather.md)), &nbsp;[Wikipedia](../plugins/wikipedia.md) und [Reiseführer](../plan-route/travel-guides.md), &nbsp;[Live-Updates](../personal/maps-resources.md#live-updates), &nbsp;**Nur Straßen**,  &nbsp;[Kartenquellen](../map/raster-maps.md), &nbsp;[Renderstile](../map/vector-maps.md#default-map-styles), &nbsp;**Kartenschriftarten, &nbsp;Sprachansagen (aufgezeichnet und TTS), &nbsp;Cache**.  

- ***Meine Orte*** (*gelb*).  
    Umfasst [Favoriten](../personal/favorites.md), &nbsp;[Tracks](../personal/tracks/manage-tracks.md), &nbsp;[OSM-Notizen](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;[OSM-Bearbeitungen](../plugins/osm-editing.md#osm-editing-layer), &nbsp;[A/V-Notizen](../plugins/audio-video-notes.md), &nbsp;[Kartenmarkierungen](../personal/markers.md), &nbsp;[Verlauf](../personal/global-settings.md#history), &nbsp;*Reiseroute*.  

- ***Einstellungen*** (*grün*).  
    Umfasst [Profile](../personal/profiles.md), &nbsp;[Farben](../personal/color-palette-schemes.md) und **Andere** App-Konfigurationen.

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![Lokaler Reiter Menü iOS](@site/static/img/personal/maps/local_tab_ios.png)

Der Reiter 'Lokal' bietet eine Übersicht über die Speichernutzung für Karten- und Ressourcendaten auf Ihrem Gerät. Die Speicherleiste oben zeigt drei Kategorien an:

- ***Grün***. Gesamter genutzter Gerätespeicher.
- ***Orange***. Teil des genutzten Speichers, der von OsmAnd-Downloads belegt wird.
- ***Grau***. Freier Speicherplatz auf dem Gerät.

Unter der Speicherleiste wird eine Liste aller heruntergeladenen OsmAnd-Karten und -Ressourcen angezeigt, einschließlich ihres Typs und ihrer Dateigröße. Online-Karten werden in der Speicherleiste nicht gezählt, da sie gestreamt und nur vorübergehend zwischengespeichert werden.

</TabItem>

</Tabs>


### Daten anzeigen {#viewing-data}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Übersicht lokale Kategorie Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Optionen lokale Kategorie Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


Tippen Sie auf ein beliebiges Element im Reiter **Lokal**, um dessen detaillierte Liste zu öffnen. Oben in dieser Liste zeigt ein visuelles Panel an, wie viel Speicherplatz der ausgewählte Datentyp im Verhältnis zum gesamten OsmAnd-Speicher belegt.

***Verfügbare Aktionen:***

- **Suchen**. Finden Sie bestimmte Daten nach Namen im ausgewählten Ordner.
- **Drei-Punkte-Menü**:  
    ***Auswählen***. Wählen Sie mehrere Elemente für Aktionen wie *Löschen*, *Deaktivieren* oder *Aktivieren*.  
    ***Importieren***. Greifen Sie auf den Speicher des Geräts zu, um Dateien zu importieren.
- **Sortieroption**. Sortieren Sie Elemente nach Name, Land, Datum oder Größe (Verfügbarkeit hängt vom Datentyp ab).

Jedes Element in der Liste bietet ein *Drei-Punkte-Menü* mit Optionen:

- **Info**. Zeigen Sie detaillierte Informationen zu den *[Aktionen](#actions)* an.
- **Exportieren**. Speichern Sie Daten in einer Datei über *Einstellungen → In Datei exportieren*.

***Zusätzliche Optionen für Karten:***

- **Deaktivieren**. Deaktivieren Sie Vektorkarten, ohne sie zu löschen. Sie bleiben gespeichert, werden aber nicht für Navigation, Suche oder Routing verwendet. Reduziert die Last auf dem Gerät und beschleunigt OsmAnd.
- **Aktualisieren**. Laden Sie die neueste Version der Karte herunter.
- **Umbenennen**. Passen Sie den Namen der Karte zur besseren Identifizierung an.
- **Entfernen**. Löschen Sie die Karte von Ihrem Gerät.
- **Bearbeiten** (für Online-Karten). Ändern Sie die Konfiguration der Online-Karte.

</TabItem>

<TabItem value="ios" label="iOS">  

![Daten anzeigen](@site/static/img/personal/maps/viewing_data_ios.png)

Tippen Sie auf ein beliebiges Offline-Element im Reiter **Lokal**, um dessen detaillierte Daten wie folgt zu öffnen:

- **Typ**. Der Typ des Datenelements wie **Standardkarte**, **Wikipedia**, **Höhenlinien** usw.
- **Größe**. Die Größe des Elements in MB.
- **Erstellt am**. Das Datum, an dem das Element hinzugefügt wurde.

Bei Online-Karten werden nur der Typ und die Größe der zwischengespeicherten Daten angezeigt.

</TabItem>

</Tabs>


### Aktionen {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menü für Kartenquellen-Elemente](@site/static/img/personal/maps/map_source_items_menu_andr.png)

Jedes Element in der Liste der [Kartenquellen](../map/raster-maps.md) bietet Einstellungen zur Verwaltung von auf Ihrem Gerät gespeicherten Online-Rasterkarten. Öffnen Sie das *Drei-Punkte-Menü*, um auf die verfügbaren Aktionen zuzugreifen:

- **Info**. Zeigt allgemeine Details zur ausgewählten Kartenquelle an, einschließlich Format und letztem Aktualisierungsdatum.  
- **Größe berechnen**. Schätzt den Speicherplatz, der von den zwischengespeicherten Kacheln dieser Kartenquelle belegt wird. Wenn der Cache *50 MB* überschreitet, kann die Größe als *≥50 MB* anstelle einer genauen Zahl angezeigt werden.
- **Alle Kacheln löschen**. Löscht alle zwischengespeicherten Kacheln für die ausgewählte Kartenquelle, gibt Speicherplatz frei und hält die Kartenquelle für die zukünftige Verwendung verfügbar.  
- **Exportieren**. Speichert die Konfiguration der ausgewählten Kartenquelle zur Sicherung oder zum Teilen.  
- **Entfernen**. Löscht die ausgewählte Kartenquelle. Diese Aktion hat keine Auswirkungen auf heruntergeladene Offline-Karten, leert aber den zugehörigen Cache.

Wenn Sie ein lokales Datenelement anzeigen, sehen Sie:

- **Typ**. Der Datentyp aus der **Lokal**-Liste.
- **Erstellt**. Das Datum, an dem das Element hinzugefügt wurde.
- **Größe**. Die Größe des Elements in MB.

Verfügbare **Aktionen** hängen vom Datentyp ab und können **Deaktivieren**, **Aktualisieren**, **Umbenennen**, **Exportieren** und **Löschen** umfassen.

</TabItem>

<TabItem value="ios" label="iOS">  

![Aktionen iOS](@site/static/img/personal/maps/local_actions_ios.png)

Verfügbare **Aktionen** hängen vom Datentyp ab:

- Für **Offline-Elemente** ist nur die Option **Löschen** verfügbar.
- Für **Online-Karten** können die Aktionen **Cache leeren**, **Bearbeiten** und **Löschen** umfassen.

</TabItem>

</Tabs>

<!--
The Local tab provides an overview of the storage usage for all OsmAnd data on your device. Data is divided into three color-coded sections for clarity, with items sorted by size from largest to smallest. Each section displays only items with downloaded data:

- ***Resources*** (*blue*).  
    Includes maps ([Standard](../map/vector-maps.md), &nbsp;[Nautical](../plugins/nautical-charts.md), &nbsp;[Topography](../plugins/topography.md), &nbsp;[Weather](../plugins/weather.md)), &nbsp;[Wikipedia](../plugins/wikipedia.md) and [Travel guides](../plan-route/travel-guides.md), &nbsp;[Live updates](../personal/maps-resources.md#live-updates), &nbsp;**Road only**,  &nbsp;[Map sources](../map/raster-maps.md), &nbsp;[Rendering styles](../map/vector-maps.md#default-map-styles), &nbsp;**Map fonts, &nbsp;Voice prompts (recorded and TTS), &nbsp;Cache**.  

- ***My Places*** (*yellow*).  
    Includes [Favorites](../personal/favorites.md), &nbsp;[Tracks](../personal/tracks/manage-tracks.md), &nbsp;[OSM Notes](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;[OSM Edits](../plugins/osm-editing.md#osm-editing-layer), &nbsp;[A/V Notes](../plugins/audio-video-notes.md), &nbsp;[Map markers](../personal/markers.md), &nbsp;[History](../personal/global-settings.md#history), &nbsp;*Itinerary*.  

- ***Settings*** (*green*).  
    Includes [Profiles](../personal/profiles.md), &nbsp;[Colors](../personal/color-palette-schemes.md) and **Other** app configurations.


#### Viewing Data {#viewing-data}

![Local category overview Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Local category options Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


Tap any item in the **Local** tab to open its detailed list. At the top of this list, a visual panel displays how much space the selected data type occupies relative to the total OsmAnd storage.

***Available actions:***

- **Search**. Find specific data by name within the selected folder.
- **Three-dot menu**:  
    ***Select***. Choose multiple items for actions like *Delete*, *Deactivate*, or *Activate*.  
    ***Import***. Access the device's storage to import files.
- [Sorting option](#sorting-options). Sort items by name, country, date, or size (availability depends on the data type).


#### Menu for Items from the List {#menu-for-items-from-the-list}

![Local category item actions 2](@site/static/img/personal/maps/local_menu_items_1_andr.png) ![Local category item actions](@site/static/img/personal/maps/local_menu_items_2_andr.png)  

Each item in the list offers a *three-dot menu* with options:

- **Info**. View detailed information on the *[data item](#local-data-item-overview)*.
- **Export**. Save data to a file via *Settings → Export to File*.

***Additional options for maps:***

- **Deactivate**. Disable vector maps without deleting them. They remain stored but are not used for navigation, search, or routing. Reduces the load on the device and speeds up OsmAnd.
- **Update**. Download the latest version of the map.
- **Rename**. Customize the map’s name for better identification.
- **Remove**. Delete the map from your device.
- **Edit** (for Online Maps). Modify the online map configuration.

#### Map source items menu {#map-source-items-menu}

![Map Source items menu](@site/static/img/personal/maps/map_source_items_menu_andr.png)

Each item in the [Map source](../map/raster-maps.md) list provides settings for managing online raster map stored on your device. Open the *three-dot menu* to access the available actions:

- [Info](#local-data-item-overview). Displays general details about the selected map source, including format and last update date.  
- **Calculate Size**. Estimates the storage occupied by the cached tiles of this map source. If the cache exceeds *50MB*, the size can be displayed as *≥50MB* instead of an exact number.
- **Clear All Tiles**. Deletes all cached tiles for the selected map source, freeing up storage while keeping the map source available for future use.  
- **Export**. Saves the selected map source configuration for backup or sharing.  
- **Remove**. Deletes the selected map source. This action does not affect downloaded offline maps but clears the associated cache.


#### Local Data Item Overview {#local-data-item-overview}

![Local data item overview](@site/static/img/settings/local_category_overview_2.png) ![Local data item overview 2](@site/static/img/settings/local_category_overview_1.png)  

When viewing a local data item, you see:

- **Type**. The data type from the **Local** list.
- **Created**. The date the item was added.
- **Size**. The item’s size is in MB.

Available **Actions** depend on the data type and may include **Deactivate**, **Update**, **Rename**, **Export**, and **Delete**.

#### Sorting Options {#sorting-options}

![Local data sorting options](@site/static/img/settings/local_sorting_options_andr_1.png)

Use sorting options to organize map data:

- **Name (A - Z / Z - A)**. Locate items alphabetically.
- **Country name (A - Z / Z - A)**. Organize maps geographically.
- **Newest date first** / **Oldest date first**. See updates or older versions.
- **Large size first** / **Small size first**. Identify large maps to free storage space.

-->

## Aktualisierungsmenü {#updates-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*

![Kartenmenü Karten aktualisieren Android](@site/static/img/personal/maps/maps_update_andr.png)

Der Reiter **Aktualisierungen** ermöglicht es Ihnen, OsmAnd-Karten und -Ressourcen zu aktualisieren. Standard- und Nur-Straßen-Karten werden einmal im Monat veröffentlicht, normalerweise zwischen dem 2. und 5. Tag, und enthalten OpenStreetMap-Daten bis zum letzten Tag des Vormonats (zum Beispiel enthält die Oktober-Version Daten bis zum 30. September). Andere Daten wie Wikipedia, Gelände- oder Seekarten können unterschiedlichen, unregelmäßigen Aktualisierungsplänen folgen. Die Wettervorhersage hat ihren eigenen regelmäßigen Aktualisierungszyklus. Details finden Sie unter [Vorhersage herunterladen](../plugins/weather.md#download-forecast). 

Verwenden Sie die Schaltfläche *Alle aktualisieren*, um alle Karten gleichzeitig zu aktualisieren, oder aktualisieren Sie einzelne Karten nach Bedarf. Für stündliche Updates überprüfen Sie Ihren [Live-Updates](#live-updates)-Abonnementstatus. Wenn aktiviert, erscheint der Abschnitt **Live-Updates** oben im Reiter unter der Gerätespeicheranzeige.

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates"/>*

![Kartenmenü Karten aktualisieren iOS](@site/static/img/personal/maps/maps_update_ios.png) ![Wettervorhersage Karten aktualisieren iOS](@site/static/img/personal/maps/maps_update_2_ios.png)

Der Reiter **Aktualisierungen** ermöglicht es Ihnen, OsmAnd-Karten und -Ressourcen zu aktualisieren. Standard- und Nur-Straßen-Karten werden einmal im Monat veröffentlicht, normalerweise zwischen dem 2. und 5. Tag, und enthalten OpenStreetMap-Daten bis zum letzten Tag des Vormonats (zum Beispiel enthält die Oktober-Version Daten bis zum 30. September). Andere Daten wie Wikipedia, Gelände- oder Seekarten können unterschiedlichen, unregelmäßigen Aktualisierungsplänen folgen. 

Verwenden Sie die Schaltfläche *Alle aktualisieren*, um alle Karten gleichzeitig zu aktualisieren, oder aktualisieren Sie einzelne Karten nach Bedarf. Für stündliche Updates überprüfen Sie Ihren [Live-Updates](#live-updates)-Abonnementstatus. Wenn aktiviert, erscheint der Abschnitt **Live-Updates** oben im Reiter unter der Gerätespeicheranzeige.

Der Reiter **Aktualisierungen** enthält auch einen Abschnitt zur Wettervorhersage. Er dient zur Verwaltung Ihrer Offline-Vorhersagen für ausgewählte Länder:

- Wenn noch keine Vorhersage heruntergeladen wurde, werden Sie aufgefordert, Länder auszuwählen. Vorhersagedaten sind für bis zu 7 Tage verfügbar.
- Sobald eine Vorhersage heruntergeladen ist, zeigt der Bildschirm ***Offline-Vorhersage*** die Liste der Länder mit Statusinformationen an, einschließlich der letzten Aktualisierungszeit, des Gültigkeitszeitraums und der gesamten Datengröße.
- Durch Tippen auf ein Land werden detaillierte Informationen wie die letzte Aktualisierungszeit, die nächste Aktualisierung, die Datengröße und die Genauigkeit angezeigt. Zu den Optionen gehören ***Jetzt aktualisieren***, das Aktivieren oder Deaktivieren der ***Automatischen Aktualisierung*** (Die Wettervorhersage hat ihren eigenen regelmäßigen Aktualisierungszyklus. Details finden Sie unter [Vorhersage herunterladen](../plugins/weather.md#download-forecast).) und ***Vorhersage entfernen***.


</TabItem>

</Tabs>

## Live-Updates {#live-updates}

:::tip Kauf
Live-Updates sind eine kostenpflichtige Funktion.  
:::
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates,live_updates"/>*  

![Kartenmenü OsmAnd live Android](@site/static/img/personal/maps/maps_menu_osmand_live_android.png) ![Kartenmenü OsmAnd live bearbeiten Android](@site/static/img/personal/maps/maps_menu_osmand_live_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates,live_updates"/>*

![Kartenmenü OsmAnd live iOS](@site/static/img/personal/maps/maps_menu_osmand_live_ios.png) ![Kartenmenü OsmAnd live bearbeiten iOS](@site/static/img/personal/maps/maps_menu_osmand_live_edit_ios.png)

</TabItem>

</Tabs>

**Live-Updates** bieten häufige, inkrementelle Kartenaktualisierungen durch ein [Abonnement](../purchases/index.md) oder sind für [OSM-Mitwirkende](#free-for-osm-mappers) kostenlos. Updates erfolgen alle 15 Minuten auf den OsmAnd-Servern und können stündlich, täglich oder wöchentlich heruntergeladen werden. Diese Updates verbrauchen minimalen Speicherplatz – etwa 2-4% der vollen Kartengröße pro Monat.

<!--
Each card has an independent collection of tiny updates, so **be careful** if you have overlapping areas. If you want to revert to the original state, you can *disable updates and clear the cache*.
-->

Hauptmerkmale:

- **<Translate android="true" ids="shared_string_enabled"/> / <Translate android="true" ids="shared_string_disabled"/> Live-Updates**. Verwaltung über einen Schalter in den Einstellungen.
- **&#8230; &#124;** Schaltfläche (*Android*) / **&#62;** Schaltfläche (*iOS*). Öffnet die *Live-Updates*-Einstellungen.
- **Umschalter**(*Android*) / **&#43;** Schaltfläche (*iOS*). Fügt Karten für *Live-Updates* hinzu.
- **<Translate android="true" ids="update_frequency"/>**. Wählen Sie die Häufigkeit der Kartenaktualisierung (stündlich, täglich oder wöchentlich).
- **<Translate android="true" ids="update_now"/>**. Startet die *Live-Updates* für die Karte.
- **<Translate android="true" ids="updates_size"/>**(*Android*) / **<Translate ios="true" ids="osmand_live_updates_size"/>**(*iOS*). Größe der *Live-Updates*.
- **Papierkorb-Schaltfläche**(*Android*). Löscht alle erhaltenen *Live-Updates* für die aktuelle Karte.
- **<Translate android="true" ids="only_download_over_wifi"/>**. Verwalten Sie den Download von *Live-Updates* über eine WLAN-Verbindung.


### Zeitstempel der Aktualisierung {#update-timestamps}

- **Letztes OSM-Update.**  
    Gibt die letzten verarbeiteten OpenStreetMap-Änderungen an.
- **Region aktualisiert.**  
    Zeigt an, wann die Updates der spezifischen Region zuletzt verarbeitet wurden.
- **Nächste Aktualisierung.**  
    Zeigt die geplante Zeit für die nächste Aktualisierungsprüfung an.


### Einschränkungen von Live-Updates {#limitations-of-live-updates}

Adressänderungen werden nur durch monatliche Updates unterstützt.
Aktualisierte Straßen haben keine Höhendetails, was sich auf Steigungsdiagramme auswirkt.
Gelöschte oder geänderte Routenreferenzen können weiterhin falsch angezeigt werden.


### Kostenlos für OSM-Mapper {#free-for-osm-mappers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd live für Mapper](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live für Mapper](@site/static/img/personal/maps/map_updates_mappers_ios.png)

</TabItem>

</Tabs>

Mitwirkende bei [OpenStreetMap](https://openstreetmap.org/) haben Anspruch auf kostenlose, unbegrenzte Karten-Downloads und Live-Updates. Um sich zu qualifizieren:
Aktivieren Sie das [OpenStreetMap-Bearbeitungs-Plugin](../plugins/osm-editing.md).
[Melden Sie sich](../plugins/osm-editing.md#settings) mit Ihrem OSM-Benutzernamen an.
Pflegen Sie mindestens [**30 Bearbeitungen**](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/plugins/osmedit/fragments/MappersFragment.java#L65) in den letzten zwei Monaten.

## Verwandte Artikel {#related-articles}

- [Profile (Einstellungen)](./profiles.md)
- [Import / Export](../personal/import-export.md)

### Häufige Probleme und Lösungen {#common-issues-and-solutions}

- Sprachnavigation. [(prüfen)](../troubleshooting/navigation.md#voice-navigation)
- Wie man den Suchverlauf löscht. [(prüfen)](../troubleshooting/general.md#how-to-delete-search-history)
- Für weitere Fehlerbehebungen besuchen Sie: [Karten & Daten](../troubleshooting/maps-data.md)