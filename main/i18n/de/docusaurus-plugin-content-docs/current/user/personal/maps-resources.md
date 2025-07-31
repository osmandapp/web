---
source-hash: 57a0e223941f4fa5c78b961d2b8a0c14ce6e335350aa6cf77cf17491e4fcf0f6
sidebar_position: 2
title: Karten & Ressourcen
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



## Überblick {#overview}

Im Bereich **Karten und Ressourcen** können Sie *Online*- und *Offline*-Karten sowie andere in OsmAnd verwendete Ressourcen verwalten. Sie können beispielsweise herunterladen, löschen, umbenennen, den Cache leeren, aktualisieren und die Größe überprüfen sowie verschiedene Aktionen ausführen.

OsmAnd arbeitet mit zwei Kartentypen: [Vektorkarten](../map/vector-maps.md) und [Rasterkarten](../map/raster-maps.md). Die Registerkarte [Lokal](#local) speichert alle Karten und Ressourcen. Verfügbare Kartentypen können von der Registerkarte [Downloads](#downloads) heruntergeladen werden. Auf der Registerkarte [Updates](#updates) können Sie Karten herunterladen, die für Updates verfügbar sind, und [Live-Updates](#osmand-live) verwenden. Sie können auch auf die Funktion [Zusätzliche Karte](#extra-maps) zugreifen, um eigene Kartentypen zu erstellen.

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

![Karten-Download-Menü Android](@site/static/img/personal/maps/map_type_1_andr.png) ![Regionale Karten Android](@site/static/img/personal/maps/map_type_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Karten-Download-Menü iOS](@site/static/img/personal/maps/map_type_1_ios.png) ![Regionale Karten Android](@site/static/img/personal/maps/map_type_2_ios.png)

</TabItem>

</Tabs>

Das Herunterladen von Karten in die OsmAnd-Anwendung ist ein wichtiger Schritt, der die Funktionalität und Effizienz der Navigation bestimmt.

#### Kostenlose Funktionen für den ausgewählten Standort {#free-features-for-the-selected-location}

- **Standardkarte**. Bietet einen Überblick über das Gebiet basierend auf der [OpenStreetMap](https://www.openstreetmap.org/)-Quelle und enthält eine Karte, Routen, Adressen, POI und Informationen zu öffentlichen Verkehrsmitteln. Ein Tippen öffnet einen Bildschirm mit einer Liste der Regionen des ausgewählten Landes und Informationen darüber, wie viel Speicherplatz diese Karten auf Ihrem Gerät belegen werden.
- **Nur Straßen** (*nur Android*). Die Karte enthält nur Informationen zum Straßennetz, um sich auf Routen und die Straßeninfrastruktur zu konzentrieren. Durch das Entfernen von Details wie Gebäuden und Points of Interest ist sie kleiner als eine Standardkarte. Ein Tippen öffnet einen Bildschirm mit einer Liste der Regionen im ausgewählten Land und Informationen darüber, wie viel Speicherplatz diese Karten auf Ihrem Gerät belegen werden.

#### Bezahlte Funktionen für den ausgewählten Standort {#paid-features-for-the-selected-location}

- [Höhenlinien](../plugins/topography.md#contour-lines). Eine Karte mit Höhenlinien zur Visualisierung des Geländes.
- [Geländekarte (Schummerung und Neigung)](../plugins/topography.md#hillshade-slope-and-altitude-layers). Karten mit Schatten oder Neigungen liefern zusätzliche Geländeinformationen.
- [Geländekarte (3D)](../plugins/topography.md#3d-relief). Dreidimensionale Darstellung des Geländes für ein besseres Verständnis Ihrer Umgebung. [Karten-Rendering-Engine Version 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) muss aktiviert sein.
- [Wikipedia](../plugins/wikipedia.md). Vektorkarte mit georeferenzierten [Wikipedia](https://wikipedia.org/)-Artikeln über Sehenswürdigkeiten oder zusätzliche Informationen zu Orten.
- [Wettervorhersage](../plugins/weather.md). Wetterinformationen auf einer Karte zur einfachen Routenplanung.
- [Online-Rasterkarten](../map/raster-maps.md). Die Karten stehen online zum Download bereit und können als Drittanbieterkarten oder OsmAnd-Kacheln installiert werden.

#### Weltübersichtskarte {#world-overview-map}

Versionen von OsmAnd bis 3.8 bieten das Herunterladen einer Weltkarte an, damit Sie sie auf planetarischer Ebene anzeigen können. In neueren Versionen von OsmAnd ist eine leichte *Mini-Weltkarte* in der Anwendung gebündelt. Die App ermöglicht es Ihnen, eine größere Übersichtsweltkarte mit detaillierteren Informationen herunterzuladen.


## Karten & Ressourcen {#maps--resources}

Der Abschnitt **Karten & Ressourcen** im *Hauptmenü* der OsmAnd-App bietet Zugriff zur Verwaltung von Karten und anderen wichtigen Daten.

- Die Registerkarte [Karten herunterladen](#downloads) ermöglicht das Herunterladen von Karten für die Offline-Nutzung, wodurch deren Verfügbarkeit ohne Internet gewährleistet ist.
- Auf der Registerkarte [Lokale Karten](#local) finden und verwalten Sie detaillierte Informationen zu Karten und Orten, einschließlich Favoriten, Tracks, OSM-Notizen und anderen Elementen, die Sie auf Ihrem Gerät haben.
- Die Registerkarte [Updates](#updates) ermöglicht Benutzern, Informationen über verfügbare Updates für Karten und andere Ressourcen zu erhalten, um sicherzustellen, dass die Daten aktuell und genau sind.

***Allgemeine Aktionen, die Sie in Karten & Ressourcen ausführen können***:

- **Aktualisieren**. Lädt die Liste der verfügbaren Karten vom OsmAnd-Server neu.
- **Suchen**. Suchen Sie nach Karten nach **Land**, **Provinz** oder größerer **Stadt**.
- **Gerätespeicher**. Zeigt auf der Anzeige an, wie viel Speicherplatz für den Download verfügbar ist und wie viele Karten kostenlos heruntergeladen werden können. Je nach Registerkarte werden manchmal leicht unterschiedliche Daten angezeigt.
- **Kartenzähler** (*Kostenlose Version* ist nur sichtbar, wenn Sie kein [Abonnement](../purchases/index.md) haben). Die Anzeige mit Trennlinien zeigt an, wie viele Karten Sie noch von den *7 verfügbaren* herunterladen können.

:::info monatliche Karten-Updates
Bitte beachten Sie, dass monatliche Karten-Updates als weiterer Karten-Download gelten und von der verfügbaren Anzahl kostenloser Karten-Downloads abgezogen werden.
:::


### Downloads {#downloads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Download-Kartenmenü allgemein Android](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Download-Kartenmenü allgemein iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

Auf der Registerkarte **Download** können Sie verschiedene Kartentypen von OsmAnd-Servern herunterladen, was eine aktive Internetverbindung erfordert.

***Um eine Karte herunterzuladen:***

- **Öffnen Sie die Registerkarte Download**, suchen Sie den gewünschten Abschnitt und tippen Sie auf den entsprechenden Ordner, um die verfügbaren Karten anzuzeigen.

- **Verfügbare Karten** zeigen Download-Symbole an, für eine einzelne Karte oder für [mehrere Karten](#multiple-map-loading).

- **Heruntergeladene Karten** zeigen ein grünes Symbol mit einem Menü-Button:
    - *Android*: Drei-Punkte-Menü.
    - *iOS*: Info (I)-Symbol.

- **Karten, die sich im Ladevorgang befinden**, haben ein Symbol, das dies visualisiert. Um den Download abzubrechen, tippen Sie auf das Symbol. Um die Liste der Karten in der Download-Warteschlange anzuzeigen und die Downloads abzubrechen, tippen Sie auf die Download-Leiste im Bereich "Gerätespeicherinformationen" der Registerkarten "Downloads" und "Updates".

- **In der kostenlosen Version** zeigen nicht zum Download verfügbare Karten ein [GET](../purchases/index.md)-Symbol an, das zur Kaufseite verlinkt.

***Die Registerkarte Downloads besteht aus Kartengruppen:***

- **Gerätespeicherinfo**. Visualisiert den belegten und freien Speicherplatz auf Ihrem Gerät.
- **Kartenzähler** (***Kostenlose Version***). Zeigt an, wie viele Karten Sie noch herunterladen können.
- [Zusätzliche Karten](#extra-maps). Zeigt die Kartendaten für das [Benutzerdefinierte Paket](../plugins/custom.md) an.
- **Regionen**. Liste nach Kontinent und Weltregion: *Afrika, Antarktis, Asien, Australien und Ozeanien, Mittelamerika, Europa, Nordamerika, Russland und Südamerika.*
- [Weltkarten](#world-maps). Eine Liste von Karten der ganzen Welt: *Welt-Höhenkorrektur (nur Android)*, *Welt-Übersichtskarte*, *Ganze Welt (Wettervorhersage)*
- [Seekarten](../plugins/nautical-charts.md) ([*kostenpflichtige Funktion*](../purchases/index.md)). Vektorkarten mit Höhen als Punkte oder Linien.
- [Reiseführer (Wikivoyage)](../plan-route/travel-guides.md) ([*kostenpflichtige Funktion*](../purchases/index.md)). Vektorkarten mit einer Sammlung von Artikeln im HTML-Format und zusätzlich GPX-Dateien.
- **Andere Karten**. Karten, die der aktuellen Kartenhierarchie nicht zugeordnet werden können, da sie nicht unterstützt werden oder in zukünftigen Versionen verfügbar sein werden.
- [Sprachansagen](../navigation/guidance/voice-navigation.md) (*nur Android*). Sprachpakete für die Sprachausgabe von Navigationsansagen.
- [Karten-Schriftarten](../map/vector-maps.md#map-fonts-android) (*nur Android*). Zusätzliche Schriftdateien zeigen Text auf der Karte an.

#### Weltkarten {#world-maps}

Im Menü "Karten herunterladen" gibt es einen Abschnitt **Weltkarten**, der Zugriff auf den Download verschiedener Weltkarten bietet und die Funktionalität der App ergänzt.

- **Welt-Höhenkorrektur** (*nur Android*). Verbessert die Navigationsgenauigkeit, insbesondere in bergigem Gelände.
- **Weltübersichtskarte**. Bietet einen umfassenden Überblick über die Erdoberfläche, nützlich für die langfristige Routenplanung und gelegentliche Erkundungen.
- **Ganze Welt (Wettervorhersage)**. Ermöglicht das Herunterladen einer Karte mit Wetterinformationen.

Informationen zum *Kartenmenü* und zu *Aktionen* finden Sie im Artikel [Karten herunterladen](../start-with/download-maps.md).


#### Mehrfachkarten-Ladevorgang {#multiple-map-loading}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Download-Kartenmenü allgemein Android](@site/static/img/personal/maps/multiple_maps_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Download-Kartenmenü allgemein iOS](@site/static/img/personal/maps/multiple_maps_ios.png)

</TabItem>

</Tabs>

Für Länder, die aus **mehreren Regionalkarten** bestehen, können Sie das Massenladen mehrerer Karten verwenden. Karten, die für diese Art des Downloads verfügbar sind, werden mit doppelten Download-Pfeilsymbolen und einer Beschriftung mit der Anzahl der Regionen (z. B. Höhenlinien / Alle Regionen: 10) angezeigt. Sie können wählen, wie viele Karten heruntergeladen werden sollen.


### Lokal {#local}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*

![Lokale Registerkarte Android 1](@site/static/img/settings/new_map_and_resourses_andr_1.png) ![Lokale Registerkarte Android 2](@site/static/img/settings/new_map_and_resourses_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![Lokale Registerkarte Menü iOS](@site/static/img/personal/maps/local_tab_ios.png)

</TabItem>

</Tabs>

Die Registerkarte "Lokal" bietet einen Überblick über die Speichernutzung aller OsmAnd-Daten auf Ihrem Gerät. Die Daten sind zur besseren Übersichtlichkeit in drei farbcodierte Abschnitte unterteilt, wobei die Elemente nach Größe von groß nach klein sortiert sind. Jeder Abschnitt zeigt nur Elemente mit heruntergeladenen Daten an:

- ***Ressourcen*** (*blau*).
    Umfasst Karten ([Standard](../map/vector-maps.md), &nbsp;[Seekarten](../plugins/nautical-charts.md), &nbsp;[Topographie](../plugins/topography.md), &nbsp;[Wetter](../plugins/weather.md)), &nbsp;[Wikipedia](../plugins/wikipedia.md) und [Reiseführer](../plan-route/travel-guides.md), &nbsp;[Live-Updates](../personal/maps-resources.md#osmand-live), &nbsp;**Nur Straße**, &nbsp;[Kartenquellen](../map/raster-maps.md), &nbsp;[Rendering-Stile](../map/vector-maps.md#default-map-styles), &nbsp;**Karten-Schriftarten, &nbsp;Sprachansagen (aufgenommen und TTS), &nbsp;Cache**.

- ***Meine Orte*** (*gelb*).
    Umfasst [Favoriten](../personal/favorites.md), &nbsp;[Tracks](../personal/tracks/manage-tracks.md), &nbsp;[OSM-Notizen](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;[OSM-Bearbeitungen](../plugins/osm-editing.md#osm-editing-layer), &nbsp;[A/V-Notizen](../plugins/audio-video-notes.md), &nbsp;[Kartenmarkierungen](../personal/markers.md), &nbsp;[Verlauf](../personal/global-settings.md#history), &nbsp;*Reiseroute*.

- ***Einstellungen*** (*grün*).
    Umfasst [Profile](../personal/profiles.md), &nbsp;[Farben](../personal/color-palette-schemes.md) und **Andere** App-Konfigurationen.


#### Daten anzeigen {#viewing-data}

![Lokale Kategorieübersicht Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Lokale Kategorieoptionen Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


Tippen Sie auf ein Element in der Registerkarte **Lokal**, um dessen detaillierte Liste zu öffnen. Oben in dieser Liste zeigt ein visuelles Panel an, wie viel Speicherplatz der ausgewählte Datentyp im Verhältnis zum gesamten OsmAnd-Speicher belegt.

***Verfügbare Aktionen:***

- **Suchen**. Finden Sie bestimmte Daten nach Namen innerhalb des ausgewählten Ordners.
- **Drei-Punkte-Menü**:
    ***Auswählen***. Wählen Sie mehrere Elemente für Aktionen wie *Löschen*, *Deaktivieren* oder *Aktivieren*.
    ***Importieren***. Greifen Sie auf den Gerätespeicher zu, um Dateien zu importieren.
- [Sortieroption](#sorting-options). Sortieren Sie Elemente nach Name, Land, Datum oder Größe (Verfügbarkeit hängt vom Datentyp ab).


#### Menü für Elemente aus der Liste {#menu-for-items-from-the-list}

![Lokale Kategorieelementaktionen 2](@site/static/img/personal/maps/local_menu_items_1_andr.png) ![Lokale Kategorieelementaktionen](@site/static/img/personal/maps/local_menu_items_2_andr.png)

Jedes Element in der Liste bietet ein *Drei-Punkte-Menü* mit Optionen:

- **Info**. Detaillierte Informationen zum *[Datenelement](#local-data-item-overview)* anzeigen.
- **Exportieren**. Daten über *Einstellungen → Exportieren in Datei* in einer Datei speichern.

***Zusätzliche Optionen für Karten:***

- **Deaktivieren**. Vektorkarten deaktivieren, ohne sie zu löschen. Sie bleiben gespeichert, werden aber nicht für Navigation, Suche oder Routenplanung verwendet. Reduziert die Last auf das Gerät und beschleunigt OsmAnd.
- **Aktualisieren**. Die neueste Version der Karte herunterladen.
- **Umbenennen**. Den Namen der Karte zur besseren Identifizierung anpassen.
- **Entfernen**. Die Karte von Ihrem Gerät löschen.
- **Bearbeiten** (für Online-Karten). Die Online-Kartenkonfiguration ändern.

#### Menü der Kartenquellen-Elemente {#map-source-items-menu}

![Menü der Kartenquellen-Elemente](@site/static/img/personal/maps/map_source_items_menu_andr.png)

Jedes Element in der [Kartenquellen](../map/raster-maps.md)-Liste bietet Einstellungen zur Verwaltung von Online-Rasterkarten, die auf Ihrem Gerät gespeichert sind. Öffnen Sie das *Drei-Punkte-Menü*, um auf die verfügbaren Aktionen zuzugreifen:

- [Info](#local-data-item-overview). Zeigt allgemeine Details zur ausgewählten Kartenquelle an, einschließlich Format und letztem Aktualisierungsdatum.
- **Größe berechnen**. Schätzt den Speicherplatz, der von den zwischengespeicherten Kacheln dieser Kartenquelle belegt wird. Wenn der Cache *50 MB* überschreitet, kann die Größe als *≥50 MB* anstelle einer genauen Zahl angezeigt werden.
- **Alle Kacheln löschen**. Löscht alle zwischengespeicherten Kacheln für die ausgewählte Kartenquelle, wodurch Speicherplatz freigegeben wird, während die Kartenquelle für die zukünftige Verwendung verfügbar bleibt.
- **Exportieren**. Speichert die Konfiguration der ausgewählten Kartenquelle zur Sicherung oder Freigabe.
- **Entfernen**. Löscht die ausgewählte Kartenquelle. Diese Aktion wirkt sich nicht auf heruntergeladene Offline-Karten aus, löscht aber den zugehörigen Cache.


#### Übersicht über lokale Datenelemente {#local-data-item-overview}

![Übersicht über lokale Datenelemente](@site/static/img/settings/local_category_overview_2.png) ![Übersicht über lokale Datenelemente 2](@site/static/img/settings/local_category_overview_1.png)

Beim Anzeigen eines lokalen Datenelements sehen Sie:

- **Typ**. Der Datentyp aus der Liste **Lokal**.
- **Erstellt**. Das Datum, an dem das Element hinzugefügt wurde.
- **Größe**. Die Größe des Elements in MB.

Verfügbare **Aktionen** hängen vom Datentyp ab und können **Deaktivieren**, **Aktualisieren**, **Umbenennen**, **Exportieren** und **Löschen** umfassen.

#### Sortieroptionen {#sorting-options}

![Lokale Datensortieroptionen](@site/static/img/settings/local_sorting_options_andr_1.png)

Verwenden Sie Sortieroptionen, um Kartendaten zu organisieren:

- **Name (A - Z / Z - A)**. Elemente alphabetisch suchen.
- **Landesname (A - Z / Z - A)**. Karten geografisch organisieren.
- **Neuestes Datum zuerst** / **Ältestes Datum zuerst**. Updates oder ältere Versionen anzeigen.
- **Große Größe zuerst** / **Kleine Größe zuerst**. Große Karten identifizieren, um Speicherplatz freizugeben.


### Updates {#updates}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*

![Kartenmenü Karten aktualisieren Android](@site/static/img/personal/maps/maps_update_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates"/>*

![Kartenmenü Karten aktualisieren iOS](@site/static/img/personal/maps/maps_update_ios.png)

</TabItem>

</Tabs>

Auf der Registerkarte **Updates** können Sie OsmAnd-Karten monatlich aktualisieren. Verwenden Sie die Schaltfläche *Alle aktualisieren*, um alle Karten gleichzeitig zu aktualisieren, oder aktualisieren Sie einzelne Karten nach Bedarf. Standard- und Nur-Straßen-Karten werden in der Regel zwei Wochen nach Monatsbeginn veröffentlicht. Für stündliche Updates überprüfen Sie Ihren [OsmAnd Live](#osmand-live)-Abonnementstatus. Wenn aktiviert, wird der Abschnitt **Live-Updates** oben auf der Registerkarte unter der Gerätespeicheranzeige angezeigt.


### Zusätzliche Karten {#extra-maps}

OsmAnd unterstützt die Übertragung von profilspezifischen Einstellungen und Daten, einschließlich Rendering-Dateien, Schriftarten, Routen, Karten und benutzerdefinierten Plugins. Erstellen Sie einen benutzerdefinierten Kartenordner mit einer `.osf`-Plugin-Datei (einem komprimierten `.zip`-Format).

Um eine Datei zu importieren:

1. Suchen Sie die `.osf`-Datei im Speicher Ihres Geräts, in einem Messenger oder per E-Mail.
2. Tippen Sie darauf, um sie mit OsmAnd zu öffnen.
3. Das Plugin wird im Abschnitt **Plugin-Liste** angezeigt, wo es aktiviert werden kann.
4. Ein entsprechender Ordner wird dann im Abschnitt **Zusätzliche Karten** der Registerkarte [Downloads](#downloads) angezeigt.

Lesen Sie mehr im Artikel [**Benutzerdefiniertes Paket**](../plugins/custom).


## OsmAnd Live {#osmand-live}

:::tip Kauf
OsmAnd Live ist eine kostenpflichtige Funktion.
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

**OsmAnd Live** bietet häufige, inkrementelle Kartenaktualisierungen durch [Abonnement](../purchases/index.md) oder ist für [OSM-Beitragende](#free-for-osm-mappers) kostenlos. Updates erfolgen alle 15 Minuten auf OsmAnd-Servern und sind stündlich, täglich oder wöchentlich herunterladbar. Diese Updates verbrauchen minimalen Speicherplatz – etwa 2-4 % der vollständigen Kartengröße pro Monat.

<!--
Each card has an independent collection of tiny updates, so **be careful** if you have overlapping areas. If you want to revert to the original state, you can *disable updates and clear the cache*.
-->

Hauptmerkmale:

- **<Translate android="true" ids="shared_string_enabled"/> / <Translate android="true" ids="shared_string_disabled"/> Live-Updates**. Verwaltung über einen Schalter in den Einstellungen.
- **&#8230; &#124;** Schaltfläche (*Android*) / **&#62;** Schaltfläche (*iOS*). Öffnen Sie die *OsmAnd Live*-Einstellungen.
- **Schalter** (*Android*) / **&#43;** Schaltfläche (*iOS*). Karten für *Live-Updates* hinzufügen.
- **<Translate android="true" ids="update_frequency"/>**. Wählen Sie die Kartenaktualisierungsfrequenz (stündlich, täglich oder wöchentlich).
- **<Translate android="true" ids="update_now"/>**. Starten Sie das *OsmAnd Live*-Kartenupdate.
- **<Translate android="true" ids="updates_size"/>** (*Android*) / **<Translate ios="true" ids="osmand_live_updates_size"/>** (*iOS*). Größe der *Live-Updates*.
- **Mülleimer-Schaltfläche** (*Android*). Löschen Sie alle empfangenen *Live-Updates* für die aktuelle Karte.
- **<Translate android="true" ids="only_download_over_wifi"/>**. Verwalten Sie den Download von *Live-Updates* über eine Wi-Fi-Verbindung.


### Update-Zeitstempel {#update-timestamps}

- **Letztes OSM-Update.**
    Zeigt die zuletzt verarbeiteten OpenStreetMap-Änderungen an.
- **Region aktualisiert.**
    Zeigt an, wann die Updates der spezifischen Region zuletzt verarbeitet wurden.
- **Nächstes Update.**
    Zeigt die geplante Zeit für die nächste Update-Prüfung an.


### Einschränkungen von OsmAnd Live {#limitations-of-osmand-live}

Adressänderungen werden nur über monatliche Updates unterstützt.
Aktualisierte Straßen fehlen Höhenangaben, was die Gradientengrafiken beeinflusst.
Gelöschte oder geänderte Routenreferenzen können immer noch falsch angezeigt werden.


### Kostenlos für OSM-Mapper {#free-for-osm-mappers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd live für Mapper](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live für Mapper](@site/static/img/personal/maps/map_updates_mappers_ios.png)

</TabItem>

</Tabs>

Beitragende zu [OpenStreetMap](https://openstreetmap.org/) haben Anspruch auf kostenlose, unbegrenzte Karten-Downloads und Live-Updates. Um sich zu qualifizieren:
Aktivieren Sie das [OpenStreetMap-Bearbeitungs-Plugin](../plugins/osm-editing.md).
[Melden Sie sich an](../plugins/osm-editing.md#settings) mit Ihrem OSM-Benutzernamen.
Pflegen Sie mindestens [**30 Bearbeitungen**](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/plugins/osmedit/fragments/MappersFragment.java#L65) in den letzten zwei Monaten.

## Verwandte Artikel {#related-articles}

- [Profile (Einstellungen)](./profiles.md)
- [Import / Export](../personal/import-export.md)

### Häufige Probleme und Lösungen {#common-issues-and-solutions}

- Sprachnavigation. [(prüfen)](../troubleshooting/navigation.md#voice-navigation)
- Suchverlauf löschen. [(prüfen)](../troubleshooting/general.md#how-to-delete-search-history)
- Für weitere Fehlerbehebung besuchen Sie: [Karten & Daten](../troubleshooting/maps-data.md)

> *Zuletzt aktualisiert: Februar 2025*