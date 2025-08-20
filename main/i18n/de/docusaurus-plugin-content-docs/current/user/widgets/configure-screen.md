---
source-hash: cbfcf0aa9a07f3ab40e670385d79d1a04431696bcbef518decc18f41ef282921
sidebar_position: 1
title: Bildschirm konfigurieren
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

Das Menü **Bildschirm konfigurieren** in OsmAnd ermöglicht es Ihnen, die Kartenschnittstelle anzupassen, indem Sie Widgets, Schaltflächen und Schnellaktionen über mehrere Bereiche hinweg hinzufügen und anordnen.

Sie können:

- [Informations-](../widgets/info-widgets.md), [Navigations-](../widgets/nav-widgets.md) und [Marker-bezogene](../widgets/markers.md) Widgets hinzufügen.
- [Schnellaktionen](../widgets/quick-action.md), [Benutzerdefinierte Schaltflächen](../widgets/quick-action.md#custom-buttons) und [Standardschaltflächen](../widgets/map-buttons.md) hinzufügen oder bearbeiten.
- Widgets in Panels (oben, unten, links, rechts, Mitte) organisieren.
- Mehrere **Seiten** innerhalb von Seitenpanels erstellen, Größe der Widgets wählen.
- Zeilenhöhe wählen und Widget-Symbole umschalten.

Alle Widgets sind [profilabhängig](../personal/profiles.md) – jedes Profil hat sein eigenes Layout, seine eigene Reihenfolge, Sichtbarkeit und Einstellungen.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_1.png)  

</TabItem>

</Tabs>


## Widget-Panels {#widget-panels}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Configure screen](@site/static/img/widgets/configure_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Configure screen](@site/static/img/widgets/configure_screen_ios.png)

</TabItem>

</Tabs>

OsmAnd ermöglicht es Ihnen, die Kartenschnittstelle mithilfe anpassbarer Widget-Panels zu organisieren.
Sie können Widgets in den folgenden Panels hinzufügen, neu anordnen, gruppieren und entfernen:

- **Oberes Panel**
- **Unteres Panel**
- **Linkes Panel**
- **Rechtes Panel**

Jedes Panel unterstützt unterschiedliche Layout-Verhaltensweisen:

- **Obere und untere Panels** zeigen Widgets in Zeilen an. Sie können ein oder zwei Widgets pro Zeile platzieren und bei Bedarf mehrere Zeilen hinzufügen.
- **Linke und rechte Panels** unterstützen mehrere Seiten. Sie können Widgets in separate Seiten gruppieren und zwischen diesen wechseln.


### Widget-Katalog {#widgets-catalog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_panels_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_panels_ios.png)

</TabItem>

</Tabs>

***Navigations-Widgets:***  

- [Peilung](../widgets/nav-widgets.md#bearing).
    Diese Gruppe zeigt die absolute oder relative Peilung zu einem Ziel in Winkeleinheiten an.
    3 Widgets sind enthalten: *Relative Peilung*, *Magnetische Peilung*, *Wahre Peilung*.

- [Höhenprofil](../widgets/nav-widgets#elevation-widget) (*Nur oben/unten*, *Nur Android*).
    Zeigt Routenhöhe und Steigung an.

- [Spuren](../widgets/nav-widgets#lanes) (*Nur oben/unten*).
    Visuelle Spurenführung.

- [Kartenmarkerleiste](../widgets/markers.md#configure-marker-widgets-android) (*Nur oben/unten*).
    Zeigt Entfernung/Richtung zu gespeicherten Markern an.
    Konfigurierbar für 1 oder 2 Marker.

- [Navigationspunkt](../widgets/nav-widgets.md#navigation-points).
    Diese Gruppe zeigt die verbleibende Entfernung zu einem Ziel, einem Zwischenpunkt, die Ankunftszeit an einem Zwischenpunkt oder die Reisezeit für eine berechnete Route an.
    4 Widgets sind enthalten: [Entfernung zum Ziel](../widgets/nav-widgets.md#distance-to-destination), [Entfernung zum Zwischenpunkt](../widgets/nav-widgets.md#distance-to-intermediate), [Zeit zum Zwischenpunkt](../widgets/nav-widgets.md#time-to-intermediate), [Zeit zum Ziel](../widgets/nav-widgets.md#time-to-destination).

- [Routenmanöver](../widgets/nav-widgets.md#next-turn) (*Nur linkes/rechtes Panel*).
    Diese Gruppe wird während der Navigation aktiviert und zeigt die Entfernung und den Pfeil zum nächsten Manöver an.
    3 Widgets sind enthalten: *Nächste Abbiegung*, *Nächste Abbiegung (klein)*, *Zweitnächste Abbiegung*.

- [Geschwindigkeitsbegrenzung](../widgets/nav-widgets.md#speed-limit).
    Anzeige der aktuellen Geschwindigkeitsbegrenzung für die Straße.

- [Tachometer](../widgets/info-widgets.md#speedometer).
    Zeigt die aktuelle Geschwindigkeit basierend auf GPS-Daten und die begrenzte Geschwindigkeit basierend auf [OpenStreetMap-Daten](https://wiki.openstreetmap.org/wiki/Key:maxspeed) an.

- [Straßenname](../widgets/nav-widgets#street-name) (*Nur oben/unten*).
    Zeigt die aktuelle oder kommende Straße an.

<br/>

***Informations-Widgets:***

- [Höhe](../widgets/info-widgets.md#altitude-widgets).
    Diese Gruppe zeigt die Höhe über dem Meeresspiegel für den aktuellen Standort oder für den aktuellen Kartenausschnitt an.
    2 Widgets sind enthalten: *Höhe: aktueller Standort*, *Höhe: Kartenausschnitt*.

- [Durchschnittsgeschwindigkeit](../widgets/info-widgets.md#average-speed-widget).
    Zeigt die Durchschnittsgeschwindigkeit der aktuellen Fahrt an.

- [Batteriestand](../widgets/info-widgets.md#battery-level).
    Zeigt den Batteriestand des Geräts an.

- [Koordinaten-Widgets](../widgets/info-widgets#coordinates-widget) (*Nur oben/unten*).
    Diese Gruppe zeigt die geografischen Koordinaten des aktuellen Standorts an.
    2 Widgets sind enthalten: *Koordinaten: Kartenausschnitt*, *Koordinaten: aktueller Standort*.

- [Aktuelle Geschwindigkeit](../widgets/info-widgets.md#speed).
    Zeigt die Geschwindigkeit vom GPS-Sensor an.

- [Aktuelle Uhrzeit](../widgets/info-widgets.md#current-time).
    Zeigt die aktuelle Systemzeit an.

- [Gleitverhältnis](../widgets/info-widgets.md#glide-ratio).
    Die Widgets zeigen das Gleitverhältnis zum Ziel und das durchschnittliche Gleitverhältnis für den aktuellen Flug an.
    2 Widgets sind enthalten: *Gleitverhältnis zum Ziel*, *Durchschnittliches Gleitverhältnis*.

- [GPS-Info](../widgets/info-widgets.md#gps-info) (*Nur Android*).
    Zeigt die Anzahl der erkannten Satelliten an.

- [Kartenmarker](../widgets/markers.md).
    Diese Gruppe zeigt die Entfernung oder die geschätzte Ankunftszeit (ETA) für die ersten beiden Marker in [der Liste](https://osmand.net/docs/user/personal/markers#itinerary-list) an.
    2 Widgets sind enthalten: *Erster Marker*, *Zweiter Marker*.

- [Radius-Lineal](../widgets/info-widgets.md#radius-ruler).
    Zeigt die Entfernung zwischen Ihrem Standort und einem Punkt auf der Karte an, der mit dem [Radius-Lineal-Werkzeug](../widgets/radius-ruler.md) umkreist wurde.

- [Sonnenaufgang, Sonnenuntergang](../widgets/info-widgets.md#sunset-and-sunrise).
    Zeigt die Zeit des nächsten Sonnenaufgangs oder Sonnenuntergangs für die Mitte der Karte an.
    2 Widgets sind enthalten: *Sonnenaufgang*, *Sonnenuntergang*.

<br/>

***Plugin-basierte Widgets:***  

- [Audio-/Video-Notizen](../widgets/info-widgets.md#audiovideo-notes-widget).
    Schneller Zugriff zum Aufnehmen von Medien.
    4 Widgets sind enthalten: *Auf Anfrage*, *Audio aufnehmen*, *Video aufnehmen*, *Foto aufnehmen*.

- [Entwickler-Widgets](../widgets/info-widgets.md#developer-widgets).
    Zeigt optionale Informationen an.
    5 Widgets sind enthalten: *Karten-Rendering FPS*, *Kamera-Neigung*, *Kamera-Höhe*, *Zoomstufe*, *Entfernung von Kamera zum Ziel*, *Verfügbarer RAM*.

- [Widgets für externe Sensoren](../widgets/info-widgets.md#external-sensors-widgets).
    Diese Gruppe hilft, Daten von BLE/ANT+-Sensoren in Echtzeit zu verfolgen.
    6 Widgets sind enthalten: *Herzfrequenz*, *Fahrradleistung* (*Nur Android*), *Fahrradtrittfrequenz*, *Fahrradgeschwindigkeit*, *Fahrradentfernung*, *Temperatur*.

- [Mapillary](../widgets/info-widgets.md#mapillary-widget).
    Öffnet die Mapillary-App für Straßenbilder.

- [OsmAnd Tracker-Status](../widgets/info-widgets.md#tracker-widget).
    Schneller Zugriff auf die [OsmAnd Tracker-Anwendung](https://play.google.com/store/apps/details?id=net.osmand.telegram).

- [Park-Widget](../widgets/info-widgets.md#parking-widget).
    Entfernung von der Bildschirmmitte zum gespeicherten Parkplatz.

- [Fahrtaufzeichnung](../widgets/info-widgets.md#trip-recording-widgets).
    Startet und stoppt die Streckenaufzeichnung und zeigt Streckenaufzeichnungsdaten an.
    4 Widgets sind enthalten: *Entfernung*, *Dauer*, *Bergauf*, *Bergab*.

- [Wetter](../widgets/info-widgets.md#weather-widgets).
    Zeigt detaillierte Wetterinformationen an.
    5 Widgets sind enthalten: *Temperatur*, *Luftdruck*, *Wind*, *Wolken*, *Niederschlag*.

:::note Panel-abhängige Widgets

- Nur in den **oberen und unteren Panels** verfügbar und müssen in separaten Zeilen platziert werden: *Koordinaten-Widgets, Höhenprofil-Widget, Spuren-Widget, Kartenmarkerleiste, Straßenname-Widget*.
- Nur in den **linken und rechten Panels** verfügbar: *Routenmanöver*.

:::


### Zeilen {#rows}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_rows_1_andr.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_rows_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_rows_1_ios.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_rows_ios.png) 

</TabItem>

</Tabs>



Die Funktion **Zeilenmodus** ermöglicht es Ihnen, so viele Zeilen wie nötig zu den oberen und unteren Panels hinzuzufügen. Sie können mehrere Widgets pro Zeile anzeigen, wodurch die Menge der sichtbaren Informationen erhöht wird.

***So konfigurieren Sie Zeilen:***

- **Widgets hinzufügen**: Tippen Sie auf die Schaltfläche *Plus* (Android) oder *Widget hinzufügen* (iOS) und wählen Sie dann aus der Liste der verfügbaren Widgets.
- **Widgets neu anordnen**: Tippen Sie auf die Schaltfläche *Bleistift* (Android) oder *Bearbeiten* (iOS), um die Widgets neu anzuordnen.
- **Zeilen hinzufügen**: Tippen Sie auf die Schaltfläche *Zeile hinzufügen*, um neue Zeilen für Ihre Widgets zu erstellen.
- **Widgets verschieben**: Ziehen Sie Widgets zwischen verschiedenen Zeilen.
- **Widget-Einstellungen aufrufen**: Tippen Sie auf das *"i"-Symbol* (Android) oder den *">"-Pfeil* (iOS), um die Widget-Einstellungen zu öffnen.
- **Änderungen speichern**: Tippen Sie auf *Anwenden* (Android) oder *Fertig* (iOS), um das Layout zu speichern.


#### Widget-Typen und Einschränkungen {#widget-types-and-restrictions}

Der Modus ermöglicht es Ihnen, **mehr als ein Widget in einer einzigen Zeile** in den oberen und unteren Panels hinzuzufügen, um so viele Informationen wie nötig anzuzeigen.

- **Komplexe Widgets**. Pro Zeile kann nur ein komplexes Widget hinzugefügt werden. Dazu gehören:
    - [Kartenmarkerleiste (*Nur Android*)](../widgets/markers.md#configure-marker-widgets-android)
    - [Straßenname](../widgets/nav-widgets#street-name)
    - [Koordinaten-Widgets](../widgets/info-widgets#coordinates-widget)
    - [Spuren](../widgets/nav-widgets#lanes)
    - [Höhenprofil (*Nur Android*)](../widgets/nav-widgets#elevation-widget)
    - [Routenmanöver](../widgets/nav-widgets.md#next-turn)

- **Einfache Widgets**. Mehrere einfache Widgets können zu einer einzigen Zeile hinzugefügt werden. Diese Widgets können *Name*, *Maßeinheiten*, *Wert* und *Symbol* anzeigen.


### Seiten {#pages}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left"/> → Bearbeiten → Seite hinzufügen*  

![Widget page](@site/static/img/widgets/widget_page_1_andr.png) ![Widget page](@site/static/img/widgets/widget_page_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left"/> → Bearbeiten → Seite hinzufügen*

![Widget page](@site/static/img/widgets/widget_page_1_ios.png) ![Widget page](@site/static/img/widgets/widget_page_2_ios.png)  

</TabItem>

</Tabs>

Widgets in den rechten und linken Panels können in **Seiten** gruppiert werden. Die Funktion **Seitenmodus** ermöglicht es Ihnen, 5 Seiten zu den linken und rechten Panels hinzuzufügen.

***So konfigurieren Sie Zeilen:***

- **Eine Seite hinzufügen**. Navigieren Sie zu den Einstellungen des linken/rechten Panels und tippen Sie auf *Bearbeiten → Seite hinzufügen*.
- **Widgets nach Seite organisieren**. Diese Funktion ist hilfreich, wenn verschiedene Sätze von Widgets für unterschiedliche Aufgaben benötigt werden, z. B. für die Navigation im Gegensatz zum Durchsuchen der Karte.
- Seiten ermöglichen es Ihnen, **Widget-Sets** für bestimmte Szenarien zu erstellen, wodurch der Arbeitsablauf verbessert und die Unordnung reduziert wird.


## Widget-Einstellungen {#widget-settings}

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_settings_1_andr.png)   ![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_settings_2_andr.png)

1. **Widget-Größenoptionen** (*für alle Panels*):
    Sie können die Größe von **einfachen Widgets** in den **oberen, unteren, linken und rechten Panels** anpassen:

    - **Klein**. Ideal für kompakte Displays, spart mehr Bildschirmplatz für Karten.
    - **Mittel** (*Standard-Widget-Größe*). Gleicht Sichtbarkeit und Platzverbrauch aus.
    - **Groß**. Bietet größere, besser sichtbare Widget-Informationen.

2. **Ausblenden von Widget-Symbolen** (*für obere und untere Panels*):

    - Verbessert die Übersichtlichkeit und maximiert den Platz für wichtige Daten.
    - Besonders nützlich, wenn viele Widgets in derselben **Zeile** angezeigt werden.

3. **Individuelle Größe für verschiedene Zeilen** (*für alle Panels*):

    - Widgets können individuell durch Anpassen der Zeilen- und Spaltengröße dimensioniert werden.
    - **HINWEIS:** Das Ändern der Größe eines Widgets in einer Zeile/Spalte ändert die Größe aller Widgets in dieser Zeile/Spalte.

4. **So ändern Sie die Widget-Größe und Symbol-Sichtbarkeit:**

    - Wählen Sie ein Widget aus, das Sie bereits zum Panel hinzugefügt haben.
    - Tippen Sie auf das *Einstellungen*-Symbol auf der rechten Seite des Widget-Feldes.
    - Tippen Sie auf die Einstellung *Größe* und wählen Sie eine der verfügbaren Größen.
    - Schalten Sie im Feld *Symbol anzeigen* auf die Position Aus.


## Panel-Anpassung {#panels-customization}

### Widget-Kontextmenü {#widget-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widget dublicate](@site/static/img/widgets/widget_context_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Widget dublicate](@site/static/img/widgets/widget_context_menu_ios.png)

</TabItem>

</Tabs>

Das **Widget-Kontextmenü** bietet eine schnelle Möglichkeit, Widgets direkt vom Kartenbildschirm aus zu verwalten und zu konfigurieren. Sie können es durch ***langes Tippen*** auf ein beliebiges Widget aufrufen, um das Layout der Widgets anzupassen, ohne die Karte zu verlassen.

**Für obere und untere Panels**  

- *Widget nach rechts/links hinzufügen:*

    - Wählen Sie eine Position für das neue Widget relativ zum aktuellen.
    - Wählen Sie das Widget aus der Liste der [verfügbaren Widgets](#widgets-for-all-panels).

**Für linke und rechte Panels**  

- *Widget oben/unten hinzufügen:*

    - Wählen Sie, ob das neue Widget über oder unter dem aktuellen Widget positioniert werden soll.
    - Tippen Sie auf das gewünschte Widget in der Liste, um es an der angegebenen Position hinzuzufügen.

**Allgemeine Aktionen für alle Panels**  

- *Einstellungen*.
    - Greifen Sie auf die Einstellungen des Widgets zu (falls verfügbar), um dessen Aussehen oder Verhalten anzupassen.

- *Durchschnittsgeschwindigkeit zurücksetzen*.
    - Verfügbar für das [Durchschnittsgeschwindigkeits-Widget](../widgets/info-widgets.md#average-speed).
    - Langes Tippen, um den Geschwindigkeitswert während einer Fahrt sofort zurückzusetzen.

- *Löschen*.
    - Entfernen Sie das Widget aus dem Panel.
    - Eine Bestätigungsaufforderung stellt sicher, dass die Aktion beabsichtigt ist.

### Kopien von Widgets {#copies-of-widgets}

*OsmAnd-Menü → Bildschirm konfigurieren → Widgets → Panel*  

![Widget dublicate](@site/static/img/widgets/widget_dublicate.png)  

OsmAnd ermöglicht es Ihnen, mehrere Instanzen desselben Widgets zu verschiedenen Panels oder Seiten hinzuzufügen. Diese Funktion ist besonders nützlich, wenn Sie konsistente Informationen über verschiedene Ansichten oder Profile hinweg benötigen.

***So duplizieren Sie Widgets:***

- **Widget hinzufügen**. Navigieren Sie zu: *OsmAnd-Menü → Bildschirm konfigurieren → Widgets → Panel →* **Widget hinzufügen**.
- **Duplizieren über das Kontextmenü**. Tippen Sie auf das Widget und wählen Sie **Duplizieren** aus der Liste der Aktionen.
- **Alternative Methode**. Wählen Sie dasselbe Widget aus der Liste der *verfügbaren Widgets* und tippen Sie auf *Hinzufügen*.


### Verschieben oder Löschen {#move-or-delete}

*OsmAnd-Menü → Bildschirm konfigurieren → Widgets → Panel*  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Configure screen menu](@site/static/img/widgets/configure_screen_remove_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Configure screen menu](@site/static/img/widgets/configure_screen_remove_ios.png) 

</TabItem>

</Tabs>



Sie können Widgets vom Anwendungsbildschirm aus mithilfe des **Bearbeitungsmodus** neu anordnen oder entfernen.

***So verschieben Sie ein Widget:***

- Gehen Sie zu: *OsmAnd-Menü → Bildschirm konfigurieren → Widgets → Panel → Bearbeiten-Schaltfläche*.
- Tippen Sie lange auf das **Symbol rechts** neben dem Widget.
- Ziehen Sie es an die gewünschte Position in der Widget-Liste.

***So löschen Sie ein Widget:***  

- Befolgen Sie die gleichen Schritte wie oben.
- Tippen Sie auf das **Minus-Symbol** links neben dem Widget-Namen.
- Bestätigen Sie das Löschen, wenn Sie dazu aufgefordert werden.


## Schaltflächen {#buttons}

### Benutzerdefinierte Schaltflächen {#custom-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget page](@site/static/img/widgets/conf_screen_buttons_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget page](@site/static/img/widgets/conf_screen_buttons_2_ios.png)

</TabItem>

</Tabs>

**Schnellaktion (Benutzerdefinierte Schaltflächen)** ermöglicht es Ihnen, eine Liste einzelner Aktionen aus allen verfügbaren [Schnellaktionen](../widgets/quick-action.md#custom-buttons) hinzuzufügen. Diese Aktionen können einer oder mehreren Widget-Schaltflächen auf dem Kartenbildschirm zugewiesen werden. Benutzerdefinierte Schaltflächen bieten schnellen Zugriff auf häufig verwendete Aktionen.

### Standardschaltflächen {#default-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget page](@site/static/img/widgets/conf_screen_buttons_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget page](@site/static/img/widgets/conf_screen_buttons_3_ios.png)

</TabItem>

</Tabs>

1. **Standardschaltflächen** ermöglichen es Ihnen, anzupassen, welche voreingestellten Kartenschaltflächen auf dem Kartenbildschirm sichtbar sind. Sie können wählen, ob die folgenden Schaltflächen ausgeblendet oder angezeigt werden sollen:

    - [3D-Modus](../widgets/map-buttons.md#3d-mode). Für iOS ist die Schaltfläche immer verfügbar. Für Android erscheint sie in der Liste und ist einstellbar, wenn die Karten-Rendering-Engine [Version 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) ausgewählt ist.

    - [Kompass](../widgets/map-buttons.md#display-options). Zeigt an, wie die Karte auf dem Gerät ausgerichtet ist.
    3 Ansichten: *Immer sichtbar*, *Immer ausgeblendet*, *Sichtbar, wenn Karte gedreht ist*.

    - [Karte konfigurieren](../map/configure-map-menu.md). Zugriff auf Optionen zum Ändern des Kartenstils, der Ebenen und zusätzlicher Einstellungen.

    - [Menü](../widgets/map-buttons.md#main-menu). Öffnet das Hauptanwendungsmenü für den Zugriff auf alle Funktionen.

    - [Mein Standort](../widgets/map-buttons.md#my-location-and-zoom). Zentriert die Karte auf Ihre aktuelle Position.

    - [Navigation](../widgets/map-buttons.md#directions). Wesentlich für die Routenplanung und den Start der Navigation.

    - [Suchen](../widgets/map-buttons.md#search). Öffnet das Suchwerkzeug zum Auffinden von Orten.

    - [Vergrößern / Verkleinern](../widgets/map-buttons.md#my-location-and-zoom). Passt den Zoomfaktor der Karte an, um mehr oder weniger Details anzuzeigen.

2. Das **Drei-Punkte-Menü** auf dem Bildschirm der Standardschaltflächen enthält Aktionen wie:

    - *Auf Standard zurücksetzen*. Ermöglicht es Ihnen, alle Schaltflächeneinstellungen auf ihr ursprüngliches Aussehen zurückzusetzen.
    - *Von einem anderen Profil kopieren*. Wählen Sie aus der angebotenen Liste, aus welchem Profil Sie die Schaltflächeneinstellungen kopieren möchten.

3. **Das Standard-Schaltflächen-Erscheinungsbild** (*Nur Android*) bietet eine Vielzahl von Anpassungsoptionen für diese Art von Schaltflächen. Um das Erscheinungsbild einer Schaltfläche zu ändern, tippen Sie auf die gewünschte Schaltfläche in der Liste und wählen Sie die Option [Erscheinungsbild](#button-appearance).


### Schaltflächen-Erscheinungsbild {#button-appearance}

<InfoAndroidOnly/>

![Button Appearance](@site/static/img/widgets/button_appearance_settings_andr.png)

Die Funktion *Schaltflächen-Erscheinungsbild* ermöglicht es Ihnen, das Aussehen der Schaltflächen auf Ihrer Kartenoberfläche vollständig anzupassen. Diese Anpassungsoptionen sind sowohl für *Schnellaktionen (Benutzerdefinierte Schaltflächen)* als auch für *Standardschaltflächen* verfügbar und bieten umfassende Kontrolle über das Erscheinungsbild der Kartenoberfläche sowie präzise Anpassungen des Schaltflächendesigns.

***Anpassungsoptionen***:

- **Symbol**. Wählen Sie aus einer Liste von Symbolen, die Aktionen darstellen, die Sie bereits hinzugefügt haben, um Funktionen auf einen Blick leicht zu identifizieren.
- **Eckradius**. Passen Sie diese Einstellung an, um die Form der Schaltfläche zu ändern, von scharfen, quadratischen Ecken bis zu glatten, abgerundeten Kanten.
- **Größe**. Wählen Sie die Schaltflächengröße, die am besten zu Ihrem Bildschirm passt und bei Bedarf hervorsticht. Für *Standardschaltflächen* sind die Größen voreingestellt und können nicht angepasst werden.
- **Hintergrunddeckkraft**. Steuern Sie die Sichtbarkeit des Schaltflächenhintergrunds. Sie können ihn vollständig sichtbar oder teilweise transparent einstellen oder nur den Rahmenschatten und das Symbol anzeigen.


## Sonstiges {#other}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other"/>*

![Widget page](@site/static/img/widgets/conf_screen_other_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Sonstiges*

![Widget page](@site/static/img/widgets/conf_screen_other_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="display_position"/> / <Translate ios="true" ids="position_on_map"/>](#display-position-location-position-on-screen). [⬇](#display-position-location-position-on-screen)
- [Entfernung durch Tippen](../widgets/radius-ruler.md#distance-by-tap). Bietet die Möglichkeit, die Entfernung von Ihrer Position zum ausgewählten Punkt zu messen.
- [Tachometer](../widgets/info-widgets.md#speedometer). Zeigt die aktuelle Geschwindigkeit basierend auf GPS-Daten und die begrenzte Geschwindigkeit basierend auf [OpenStreetMap-Daten](https://wiki.openstreetmap.org/wiki/Key:maxspeed) an. Die angezeigten Daten hängen auch von der OsmAnd-Einstellung [Geschwindigkeitsbegrenzungstoleranz](../navigation/guidance/voice-navigation.md#speed-limit) ab.


### Anzeigeposition (Standortposition auf dem Bildschirm) {#display-position-location-position-on-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widget page](@site/static/img/widgets/conf_screen_display_position_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Widget page](@site/static/img/widgets/conf_screen_display_position_ios.png)

</TabItem>

</Tabs>

> *Standortposition auf dem Bildschirm* ist der Name dieser Einstellung in der iOS-Version von OsmAnd.

Ermöglicht es Ihnen, die Platzierung des Cursors auf *[Mein Standort](../map/interact-with-map.md#my-location-and-zoom)* auf der OsmAnd-Karte festzulegen. Es stehen drei Optionen zur Verfügung:

- **<Translate android="true" ids="position_on_map_center"/>**. Der Cursor ist immer in der Mitte des Bildschirms positioniert.
- **<Translate android="true" ids="position_on_map_bottom"/>**. *Mein Standort* wird leicht unterhalb der Bildschirmmitte platziert. Dieser Modus ermöglicht es Ihnen, mehr Karteninformationen vor Ihrer Bewegung zu sehen, was während der Navigation nützlich ist.
- **<Translate android="true" ids="shared_string_automatic"/>**. Platziert *Mein Standort* abhängig von der *[Kartenorientierung](../map/interact-with-map.md#map-orientation-modes)* (*Unten* - für die Bewegungsrichtung, *Mitte* - für alle anderen).


## Aktionen {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_actions"/>*  

![Widget page](@site/static/img/widgets/widget_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Beliebiges Panel*

![Widget page](@site/static/img/widgets/widget_actions_ios.png)  

</TabItem>

</Tabs>

Zugriff auf zusätzliche Aktionen im Bildschirm konfigurieren sind:

- *Android*. Befindet sich im Bildschirm Konfigurieren am unteren Bildschirmrand im Abschnitt *Aktionen*: *Menü → Bildschirm konfigurieren → Aktionen*.
- *Android / iOS*. Befindet sich auf den Bildschirmen jedes Panels im *Drei-Punkte-Menü* in der oberen rechten Ecke des Bildschirms.

Verfügbare Aktionen:

- **Auf Standard zurücksetzen**. Diese Funktion ermöglicht es Ihnen, alle Einstellungen auf die Standardwerte zurückzusetzen, wenn Sie neu beginnen oder nur die voreingestellten Werte beim Starten von OsmAnd verwenden möchten.
- **Von einem anderen Profil kopieren**. Diese Funktion ermöglicht es Ihnen, schnell Einstellungen von einem anderen Profil zu importieren, die gewünschten aus der Liste auszuwählen und zu kopieren.


## Profil wechseln {#switch-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Configure screen menu](@site/static/img/widgets/configure_screen_switch_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Configure screen menu](@site/static/img/widgets/configure_screen_switch_ios.png)

</TabItem>

</Tabs>

- Für **Android**-Geräte können Sie Profile oben auf dem Startbildschirm "Bildschirm konfigurieren" mithilfe der verfügbaren Profilsymbole wechseln.
- Wenn Sie ein **iOS**-Gerät verwenden, tippen Sie auf das Profilsymbol in der oberen Ecke des Startbildschirms "Bildschirm konfigurieren" und wählen Sie das gewünschte Profil aus der Liste aus, um es zu aktivieren.

**Beachten Sie**. Die Option *Profil wechseln* zeigt nicht alle vorhandenen Profile an, sondern nur diejenigen, die im Einstellungsmenü *aktiviert* wurden.


## Verwandte Artikel {#related-articles}

- [Kartenschaltflächen](./map-buttons.md)
- [Informations-Widgets](./info-widgets.md)
- [Navigations-Widgets](./nav-widgets.md)
- [Radius-Lineal und Lineal](./radius-ruler.md)
- [Marker-Widgets](./markers.md)
- [Schnellaktion](./quick-action.md)

> *Zuletzt aktualisiert: Juli 2025*