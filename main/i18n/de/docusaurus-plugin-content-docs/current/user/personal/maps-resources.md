---
source-hash: 7709beb792400753a1f976b6fb02017857a5da0e9d06e235ddb18b6b45b4fb49
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

Im Bereich **Karten & Ressourcen** können Sie *Online-* und *Offline*-Karten sowie andere in OsmAnd verwendete Ressourcen verwalten. Sie können beispielsweise herunterladen, löschen, umbenennen, den Cache leeren, die Größe überprüfen und verschiedene andere Aktionen ausführen.

OsmAnd arbeitet mit zwei Kartentypen: [Vektorkarten](../map/vector-maps.md) und [Rasterkarten](../map/raster-maps.md). Der Reiter [Lokal](#local) speichert alle Karten und Ressourcen. Verfügbare Kartentypen können vom Reiter [Downloads](#downloads) heruntergeladen werden. Auf dem Reiter [Updates](#updates) können Sie Karten herunterladen, für die Updates verfügbar sind, und [Live-Updates](#osmand-live) nutzen. Sie können auch auf die Funktion [Extra Karten](#extra-maps) zugreifen, um eigene Kartentypen zu erstellen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources"/>*

![Maps menu Android](@site/static/img/personal/maps/maps_overview_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Maps menu iOS](@site/static/img/personal/maps/maps_overview_ios.png)

</TabItem>

</Tabs>


## Kartentypen {#map-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Download map menu Android](@site/static/img/personal/maps/map_type_1_andr.png) ![Regionwide maps Android](@site/static/img/personal/maps/map_type_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Download map menu iOS](@site/static/img/personal/maps/map_type_1_ios.png) ![Regionwide maps Android](@site/static/img/personal/maps/map_type_2_ios.png)  

</TabItem>

</Tabs>

Das Herunterladen von Karten in die OsmAnd-Anwendung ist ein wichtiger Schritt, der die Funktionalität und Effizienz der Navigation bestimmt.

#### Kostenlose Funktionen für den ausgewählten Ort {#free-features-for-the-selected-location}

- **Standardkarte**. Bietet einen Überblick über das Gebiet basierend auf der Quelle [OpenStreetMap](https://www.openstreetmap.org/) und enthält eine Karte, Routen, Adressen, POIs und Informationen zum öffentlichen Nahverkehr. Durch Tippen öffnet sich ein Bildschirm mit einer Liste der Regionen des ausgewählten Landes und Informationen darüber, wie viel Speicherplatz diese Karten auf Ihrem Gerät beanspruchen.  
- **Nur Straßen** (*nur Android*). Die Karte enthält nur Informationen zum Straßennetz, um sich auf Routen und die Straßeninfrastruktur zu konzentrieren. Durch das Entfernen von Details wie Gebäuden und Points of Interest ist sie kleiner als eine Standardkarte. Durch Tippen öffnet sich ein Bildschirm mit einer Liste der Regionen im ausgewählten Land und Informationen darüber, wie viel Speicherplatz diese Karten auf Ihrem Gerät beanspruchen.

#### Bezahlte Funktionen für den ausgewählten Ort {#paid-features-for-the-selected-location}

- [Höhenlinien](../plugins/topography.md#contour-lines). Eine Karte mit Höhenlinien zur Visualisierung des Geländes.
- [Geländekarte (Schattierung und Neigung)](../plugins/topography.md#hillshade-slope-and-altitude-layers). Karten mit Schatten oder Neigungen liefern zusätzliche Geländeinformationen.
- [Geländekarte (3D)](../plugins/topography.md#3d-relief). Dreidimensionale Darstellung des Geländes für ein besseres Verständnis Ihrer Umgebung. Die [Karten-Rendering-Engine Version 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) muss aktiviert sein.
- [Wikipedia](../plugins/wikipedia.md). Vektorkarte mit geopositionierten [Wikipedia](https://wikipedia.org/)-Artikeln über Sehenswürdigkeiten oder zusätzliche Informationen über Orte.
- [Wettervorhersage](../plugins/weather.md). Wetterinformationen auf einer Karte zur einfachen Routenplanung.
- [Online-Rasterkarten](../map/raster-maps.md). Die Karten können online heruntergeladen und als Karten von Drittanbietern oder OsmAnd-Kacheln installiert werden.

#### Weltübersichtskarte {#world-overview-map}

OsmAnd-Versionen bis 3.8 bieten das Herunterladen einer Weltkarte an, sodass Sie sie auf planetarischer Ebene anzeigen können. In neueren Versionen von OsmAnd ist eine leichte *Mini-Weltkarte* in der Anwendung enthalten. Die App ermöglicht das Herunterladen einer größeren Übersichtsweltkarte mit detaillierteren Informationen.


## Karten & Ressourcen {#maps--resources}

Der Bereich **Karten & Ressourcen** im *Hauptmenü* der OsmAnd-App bietet Zugriff zur Verwaltung von Karten und anderen wichtigen Daten.

- Über den Reiter [Downloads](#downloads) können Sie Karten für die Offline-Nutzung herunterladen und so deren Verfügbarkeit ohne Internet sicherstellen.  
- Im Reiter [Lokal](#local) finden und verwalten Sie detaillierte Informationen zu Karten und Orten, einschließlich Favoriten, Tracks, OSM-Notizen und anderen Elementen, die Sie auf Ihrem Gerät gespeichert haben.  
- Der Reiter [Updates](#updates) ermöglicht es Benutzern, Informationen über verfügbare Updates für Karten und andere Ressourcen zu erhalten, um sicherzustellen, dass die Daten aktuell und genau sind.

***Allgemeine Aktionen, die Sie in Karten & Ressourcen ausführen können***:

- **Aktualisieren**. Lädt die Liste der verfügbaren Karten vom OsmAnd-Server neu.  
- **Suchen**. Suchen Sie nach Karten nach **Land**, **Provinz** oder größerer **Stadt**.  
- **Gerätespeicher**. Zeigt auf dem Indikator an, wie viel Speicherplatz für den Download verfügbar ist und wie viele Karten kostenlos heruntergeladen werden können. Je nach Reiter werden manchmal leicht unterschiedliche Daten angezeigt.  
- **Kartenzähler** (*Kostenlose Version* ist nur sichtbar, wenn Sie kein [Abonnement](../purchases/index.md) haben). Der Indikator mit Trennlinien zeigt an, wie viele Karten Sie von den *7 verfügbaren* noch herunterladen können.

:::info Monatliche Karten-Updates
Bitte beachten Sie, dass monatliche Karten-Updates als ein weiterer Karten-Download gelten und von der Anzahl der verfügbaren kostenlosen Karten-Downloads abgezogen werden.
:::


### Downloads {#downloads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Download map menu general Android](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Download map menu general iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

Über den Reiter **Downloads** können Sie verschiedene Kartentypen von OsmAnd-Servern herunterladen. Hierfür ist eine aktive Internetverbindung erforderlich.

***So laden Sie eine Karte herunter:***

- **Öffnen Sie den Reiter Downloads**, suchen Sie den gewünschten Bereich und tippen Sie auf den entsprechenden Ordner, um die verfügbaren Karten anzuzeigen.

- **Verfügbare Karten** zeigen Download-Symbole an, für eine einzelne Karte oder für [mehrere Karten](#multiple-map-loading).

- **Heruntergeladene Karten** zeigen ein grünes Symbol mit einem Menü-Button:  
    - *Android*: Drei-Punkte-Menü.  
    - *iOS*: Info (I)-Symbol.

- **Karten im Ladevorgang** haben ein Symbol, das dies visualisiert. Um den Download abzubrechen, tippen Sie auf das Symbol. Um die Liste der Karten in der Download-Warteschlange anzuzeigen und die Downloads abzubrechen, tippen Sie auf die Download-Leiste im Bereich Gerätespeicherinformationen der Reiter Downloads und Updates.

- **In der kostenlosen Version** zeigen Karten, die nicht zum Download verfügbar sind, ein [GET](../purchases/index.md)-Symbol an, das zur Kaufseite verlinkt.

***Der Reiter Downloads besteht aus Kartengruppen:***

- **Gerätespeicherinformationen**. Visualisieren Sie die Menge des belegten und freien Speicherplatzes auf Ihrem Gerät.
- **Kartenzähler** (***Kostenlose Version***). Zeigt an, wie viele Karten Sie noch zum Herunterladen übrig haben.
- [Extra Karten](#extra-maps). Zeigt die Kartendaten für das [Benutzerdefinierte Paket](../plugins/custom.md) an.
- **Regionen**. Liste nach Kontinent und Weltregion: *Afrika, Antarktis, Asien, Australien und Ozeanien, Mittelamerika, Europa, Nordamerika, Russland und Südamerika.*
- [Weltkarten](#world-maps). Eine Liste von Karten der ganzen Welt: *Welt-Höhenkorrektur (nur Android)*, *Weltübersichtskarte*, *Ganze Welt (Wettervorhersage)*
- [Seekarten](../plugins/nautical-charts.md) ([*kostenpflichtige Funktion*](../purchases/index.md)). Vektorkarten mit Höhen als Punkte oder Linien.
- [Reiseführer (Wikivoyage)](../plan-route/travel-guides.md) ([*kostenpflichtige Funktion*](../purchases/index.md)). Vektorkarten mit einer Sammlung von Artikeln im HTML-Format und zusätzlich GPX-Dateien.
- **Andere Karten**. Karten, die der aktuellen Kartenhierarchie nicht zugeordnet werden können, da sie nicht unterstützt werden oder in zukünftigen Versionen verfügbar sein werden.
- [Sprachansagen](../navigation/guidance/voice-navigation.md) (*nur Android*). Sprachpakete zur Vertonung von Navigationsansagen.
- [Karten-Schriftarten](../map/vector-maps.md#map-fonts-android) (*nur Android*). Zusätzliche Schriftartdateien zeigen Text auf der Karte an.

#### Weltkarten {#world-maps}

Im Menü Karten herunterladen gibt es einen Abschnitt **Weltkarten**, der den Zugriff auf das Herunterladen verschiedener Weltkarten ermöglicht und die Funktionalität der App ergänzt.  

- **Welt-Höhenkorrektur** (*nur Android*). Verbessert die Navigationsgenauigkeit, insbesondere in bergigem Gelände.
- **Weltübersichtskarte**. Bietet einen umfassenden Überblick über die Erdoberfläche, nützlich für die langfristige Routenplanung und gelegentliche Erkundungen.
- **Ganze Welt (Wettervorhersage)**. Ermöglicht das Herunterladen einer Karte mit Wetterinformationen.

Informationen zum *Kartenmenü* und zu *Aktionen* finden Sie im Artikel [Karten herunterladen](../start-with/download-maps.md).


#### Mehrere Karten gleichzeitig laden {#multiple-map-loading}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Download map menu general Android](@site/static/img/personal/maps/multiple_maps_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Download map menu general iOS](@site/static/img/personal/maps/multiple_maps_ios.png)

</TabItem>

</Tabs>

Für Länder, die aus **mehreren Regionenkarten** bestehen, können Sie das Massenladen mehrerer Karten verwenden. Karten, die für diesen Download-Typ verfügbar sind, werden mit doppelten Download-Pfeil-Symbolen und einem Label mit der Anzahl der Regionen darin angezeigt (z.B. Höhenlinien / Alle Regionen: 10). Sie können auswählen, wie viele Karten Sie herunterladen möchten.


### Lokal {#local}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*

![Local tab Android 1](@site/static/img/settings/new_map_and_resourses_andr_1.png) ![Local tab Android 2](@site/static/img/settings/new_map_and_resourses_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![Local tab menu iOS](@site/static/img/personal/maps/local_tab_ios.png)

</TabItem>

</Tabs>

Der Reiter Lokal bietet einen Überblick über die Speichernutzung aller OsmAnd-Daten auf Ihrem Gerät. Die Daten sind zur besseren Übersichtlichkeit in drei farblich gekennzeichnete Abschnitte unterteilt, wobei die Elemente nach Größe vom größten zum kleinsten sortiert sind. Jeder Abschnitt zeigt nur Elemente mit heruntergeladenen Daten an:

- ***Ressourcen*** (*blau*).  
    Umfasst Karten ([Standard](../map/vector-maps.md), &nbsp;[Seekarten](../plugins/nautical-charts.md), &nbsp;[Topographie](../plugins/topography.md), &nbsp;[Wetter](../plugins/weather.md)), &nbsp;[Wikipedia](../plugins/wikipedia.md) und [Reiseführer](../plan-route/travel-guides.md), &nbsp;[Live-Updates](../personal/maps-resources.md#osmand-live), &nbsp;**Nur Straßen**,  &nbsp;[Kartenquellen](../map/raster-maps.md), &nbsp;[Rendering-Stile](../map/vector-maps.md#default-map-styles), &nbsp;**Karten-Schriftarten, &nbsp;Sprachansagen (aufgezeichnet und TTS), &nbsp;Cache**.  

- ***Meine Orte*** (*gelb*).  
    Umfasst [Favoriten](../personal/favorites.md), &nbsp;[Tracks](../personal/tracks/manage-tracks.md), &nbsp;[OSM-Notizen](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;[OSM-Bearbeitungen](../plugins/osm-editing.md#osm-editing-layer), &nbsp;[A/V-Notizen](../plugins/audio-video-notes.md), &nbsp;[Kartenmarkierungen](../personal/markers.md), &nbsp;[Verlauf](../personal/global-settings.md#history), &nbsp;*Reiseroute*.  

- ***Einstellungen*** (*grün*).  
    Umfasst [Profile](../personal/profiles.md), &nbsp;[Farben](../personal/color-palette-schemes.md) und **Weitere** App-Konfigurationen.


#### Anzeigen von Daten {#viewing-data}

![Local category overview Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Local category options Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


Tippen Sie auf einen beliebigen Eintrag im Reiter **Lokal**, um die detaillierte Liste zu öffnen. Am oberen Rand dieser Liste zeigt ein visuelles Panel an, wie viel Speicherplatz der ausgewählte Datentyp im Verhältnis zum gesamten OsmAnd-Speicher belegt.

***Verfügbare Aktionen:***

- **Suchen**. Finden Sie bestimmte Daten nach Namen innerhalb des ausgewählten Ordners.
- **Drei-Punkte-Menü**:  
    ***Auswählen***. Wählen Sie mehrere Elemente für Aktionen wie *Löschen*, *Deaktivieren* oder *Aktivieren*.  
    ***Importieren***. Greifen Sie auf den Speicher des Geräts zu, um Dateien zu importieren.
- [Sortieroptionen](#sorting-options). Sortieren Sie Elemente nach Name, Land, Datum oder Größe (Verfügbarkeit hängt vom Datentyp ab).


#### Menü für Elemente aus der Liste {#menu-for-items-from-the-list}

![Local category item actions 2](@site/static/img/personal/maps/local_menu_items_1_andr.png) ![Local category item actions](@site/static/img/personal/maps/local_menu_items_2_andr.png)  

Jedes Element in der Liste bietet ein *Drei-Punkte-Menü* mit Optionen:

- **Info**. Zeigen Sie detaillierte Informationen zum *[Datenelement](#local-data-item-overview)* an.
- **Exportieren**. Speichern Sie Daten über *Einstellungen → In Datei exportieren* in einer Datei.

***Zusätzliche Optionen für Karten:***

- **Deaktivieren**. Deaktivieren Sie Vektorkarten, ohne sie zu löschen. Sie bleiben gespeichert, werden aber nicht für Navigation, Suche oder Routing verwendet. Reduziert die Last auf dem Gerät und beschleunigt OsmAnd.
- **Aktualisieren**. Laden Sie die neueste Version der Karte herunter.
- **Umbenennen**. Passen Sie den Namen der Karte zur besseren Identifizierung an.
- **Entfernen**. Löschen Sie die Karte von Ihrem Gerät.
- **Bearbeiten** (für Online-Karten). Ändern Sie die Online-Kartenkonfiguration.

#### Menü für Kartenquellen-Elemente {#map-source-items-menu}

![Map Source items menu](@site/static/img/personal/maps/map_source_items_menu_andr.png)

Jedes Element in der Liste der [Kartenquellen](../map/raster-maps.md) bietet Einstellungen zur Verwaltung der auf Ihrem Gerät gespeicherten Online-Rasterkarten. Öffnen Sie das *Drei-Punkte-Menü*, um auf die verfügbaren Aktionen zuzugreifen:

- [Info](#local-data-item-overview). Zeigt allgemeine Details zur ausgewählten Kartenquelle an, einschließlich Format und Datum der letzten Aktualisierung.  
- **Größe berechnen**. Schätzt den Speicherplatz, der von den gecachten Kacheln dieser Kartenquelle belegt wird. Wenn der Cache *50 MB* überschreitet, kann die Größe als *≥50 MB* anstelle einer genauen Zahl angezeigt werden.
- **Alle Kacheln löschen**. Löscht alle gecachten Kacheln für die ausgewählte Kartenquelle, gibt Speicherplatz frei, während die Kartenquelle für zukünftige Nutzung verfügbar bleibt.  
- **Exportieren**. Speichert die Konfiguration der ausgewählten Kartenquelle zur Sicherung oder Freigabe.  
- **Entfernen**. Löscht die ausgewählte Kartenquelle. Diese Aktion wirkt sich nicht auf heruntergeladene Offline-Karten aus, löscht aber den zugehörigen Cache.


#### Übersicht über lokale Datenelemente {#local-data-item-overview}

![Local data item overview](@site/static/img/settings/local_category_overview_2.png) ![Local data item overview 2](@site/static/img/settings/local_category_overview_1.png)  

Beim Anzeigen eines lokalen Datenelements sehen Sie:

- **Typ**. Der Datentyp aus der Liste **Lokal**.
- **Erstellt**. Das Datum, an dem das Element hinzugefügt wurde.
- **Größe**. Die Größe des Elements in MB.

Verfügbare **Aktionen** hängen vom Datentyp ab und können **Deaktivieren**, **Aktualisieren**, **Umbenennen**, **Exportieren** und **Löschen** umfassen.

#### Sortieroptionen {#sorting-options}

![Local data sorting options](@site/static/img/settings/local_sorting_options_andr_1.png)

Verwenden Sie Sortieroptionen, um Kartendaten zu organisieren:

- **Name (A - Z / Z - A)**. Finden Sie Elemente alphabetisch.
- **Landesname (A - Z / Z - A)**. Organisieren Sie Karten geografisch.
- **Neuestes Datum zuerst** / **Ältestes Datum zuerst**. Sehen Sie sich Updates oder ältere Versionen an.
- **Große Größe zuerst** / **Kleine Größe zuerst**. Identifizieren Sie große Karten, um Speicherplatz freizugeben.


### Updates {#updates}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*

![Maps menu Update maps Android](@site/static/img/personal/maps/maps_update_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates"/>*

![Maps menu Update maps iOS](@site/static/img/personal/maps/maps_update_ios.png)

</TabItem>

</Tabs>

Der Reiter **Updates** ermöglicht es Ihnen, OsmAnd-Karten monatlich zu aktualisieren. Verwenden Sie die Schaltfläche *Alle aktualisieren*, um alle Karten gleichzeitig zu aktualisieren, oder aktualisieren Sie einzelne Karten nach Bedarf. Standard- und Nur-Straßenkarten werden typischerweise zwei Wochen nach Beginn jedes Monats veröffentlicht. Für stündliche Updates überprüfen Sie den Status Ihres [OsmAnd Live](#osmand-live) Abonnements. Wenn aktiviert, erscheint der Abschnitt **Live-Updates** oben im Reiter, unter dem Gerätespeicher-Indikator.


### Extra Karten {#extra-maps}

OsmAnd unterstützt die Übertragung von profil-spezifischen Einstellungen und Daten, einschließlich Rendering-Dateien, Schriftarten, Routen, Karten und benutzerdefinierten Plugins. Erstellen Sie einen benutzerdefinierten Kartenordner mithilfe einer `.osf`-Plugin-Datei (ein komprimiertes `.zip`-Format).

So importieren Sie eine Datei:

1. Suchen Sie die `.osf`-Datei im Speicher Ihres Geräts, in einem Messenger oder per E-Mail.
2. Tippen Sie darauf, um sie mit OsmAnd zu öffnen.
3. Das Plugin wird im Abschnitt **Plugin-Liste** angezeigt, wo es aktiviert werden kann.
4. Ein entsprechender Ordner erscheint dann im Abschnitt **Extra Karten** des Reiters [Downloads](#downloads).

Lesen Sie mehr im Artikel [**Benutzerdefiniertes Paket**](../plugins/custom).


## OsmAnd Live {#osmand-live}

:::tip Kauf
OsmAnd Live ist eine kostenpflichtige Funktion.  
:::
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates,live_updates"/>*  

![Maps menu OsmAnd live Android](@site/static/img/personal/maps/maps_menu_osmand_live_android.png) ![Maps menu OsmAnd live edit Android](@site/static/img/personal/maps/maps_menu_osmand_live_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates,live_updates"/>*

![Maps menu OsmAnd live  iOS](@site/static/img/personal/maps/maps_menu_osmand_live_ios.png) ![Maps menu OsmAnd live edit iOS](@site/static/img/personal/maps/maps_menu_osmand_live_edit_ios.png)

</TabItem>

</Tabs>

**OsmAnd Live** bietet häufige, inkrementelle Karten-Updates durch [Abonnement](../purchases/index.md) oder ist kostenlos für [OSM-Beitragende](#free-for-osm-mappers). Updates erfolgen alle 15 Minuten auf OsmAnd-Servern und können stündlich, täglich oder wöchentlich heruntergeladen werden. Diese Updates verbrauchen nur minimalen Speicherplatz – etwa 2-4 % der vollen Kartengröße pro Monat.

<!--
Each card has an independent collection of tiny updates, so **be careful** if you have overlapping areas. If you want to revert to the original state, you can *disable updates and clear the cache*.
-->

Hauptmerkmale:

- **<Translate android="true" ids="shared_string_enabled"/> / <Translate android="true" ids="shared_string_disabled"/> Live-Updates**. Verwaltung über einen Schalter in den Einstellungen.
- **&#8230; &#124;** Schaltfläche (*Android*) / **&#62;** Schaltfläche (*iOS*). Öffnen Sie die Einstellungen von *OsmAnd Live*.
- **Schalter** (*Android*) / **&#43;** Schaltfläche (*iOS*). Fügen Sie Karten für *Live-Updates* hinzu.
- **<Translate android="true" ids="update_frequency"/>**. Wählen Sie die Häufigkeit der Kartenaktualisierung (stündlich, täglich oder wöchentlich).
- **<Translate android="true" ids="update_now"/>**. Starten Sie die Kartenaktualisierung von *OsmAnd Live*.
- **<Translate android="true" ids="updates_size"/>** (*Android*) / **<Translate ios="true" ids="osmand_live_updates_size"/>** (*iOS*). Größe der *Live-Updates*.
- **Papierkorb-Schaltfläche** (*Android*). Löschen Sie alle empfangenen *Live-Updates* für die aktuelle Karte.
- **<Translate android="true" ids="only_download_over_wifi"/>**. Verwalten Sie den Download von *Live-Updates* über eine WLAN-Verbindung.


### Update-Zeitstempel {#update-timestamps}

- **Letztes OSM-Update.**  
    Zeigt die zuletzt verarbeiteten OpenStreetMap-Änderungen an.
- **Region aktualisiert.**  
    Zeigt an, wann die Updates der spezifischen Region zuletzt verarbeitet wurden.
- **Nächstes Update.**  
    Zeigt den geplanten Zeitpunkt für die nächste Update-Überprüfung an.


### Einschränkungen von OsmAnd Live {#limitations-of-osmand-live}

Adressänderungen werden nur über monatliche Updates unterstützt.
Aktualisierte Straßen weisen keine Höhendetails auf, was sich auf Steigungsdiagramme auswirkt.
Gelöschte oder geänderte Routenreferenzen können weiterhin falsch angezeigt werden.


### Kostenlos für OSM-Mapper {#free-for-osm-mappers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_ios.png)

</TabItem>

</Tabs>

Beitragende zu [OpenStreetMap](https://openstreetmap.org/) sind berechtigt, kostenlose, unbegrenzte Karten-Downloads und Live-Updates zu erhalten. Um sich zu qualifizieren:
Aktivieren Sie das [OpenStreetMap-Bearbeitungs-Plugin](../plugins/osm-editing.md).
[Melden Sie sich an](../plugins/osm-editing.md#settings) mit Ihrem OSM-Benutzernamen.
Pflegen Sie mindestens [**30 Bearbeitungen**](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/plugins/osmedit/fragments/MappersFragment.java#L65) in den letzten zwei Monaten.

## Verwandte Artikel {#related-articles}

- [Profile (Einstellungen)](./profiles.md)
- [Import / Export](../personal/import-export.md)

### Häufige Probleme und Lösungen {#common-issues-and-solutions}

- Sprachnavigation. [(prüfen)](../troubleshooting/navigation.md#voice-navigation)
- Wie lösche ich den Suchverlauf? [(prüfen)](../troubleshooting/general.md#how-to-delete-search-history)
- Für weitere Fehlerbehebung besuchen Sie: [Karten & Daten](../troubleshooting/maps-data.md)

> *Letzte Aktualisierung: Februar 2025*