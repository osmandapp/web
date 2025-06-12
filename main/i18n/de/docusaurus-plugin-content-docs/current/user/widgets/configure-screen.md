---
source-hash: 1fd80d1d09f7e680cc085a34c5ed9d3971e1a94467831c5729ef1f0952117344
sidebar_position: 1
title:  Bildschirm konfigurieren
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

Das Menü **Bildschirm konfigurieren** in OsmAnd ermöglicht es Ihnen, die Kartenoberfläche anzupassen, indem Sie Widgets, Schaltflächen und Schnellaktionen über mehrere Bereiche hinweg hinzufügen und anordnen.

Sie können:

- [Informations-](../widgets/info-widgets.md), [Navigations-](../widgets/nav-widgets.md) und [Marker-bezogene](../widgets/markers.md) Widgets hinzufügen.
- [Schnellaktionen](../widgets/quick-action.md) und [Kartenschaltflächen](../widgets/map-buttons.md) hinzufügen.
- Widgets in Bereichen organisieren (oben, unten, links, rechts, Mitte).
- Mehrere **Seiten** innerhalb von Seitenbereichen erstellen.
- Zeilenhöhe wählen und Widget-Symbole umschalten.

Alle Widgets sind [profilabhängig](../personal/profiles.md) – jedes Profil hat sein eigenes Layout, seine eigene Reihenfolge, Sichtbarkeit und Einstellungen.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_1.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_2.png)

</TabItem>

</Tabs>


## Widget-Bereiche {#widget-panels}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Configure screen](@site/static/img/widgets/configure_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Configure screen](@site/static/img/widgets/configure_screen_ios.png)

</TabItem>

</Tabs>

OsmAnd ermöglicht es Ihnen, die Kartenoberfläche mithilfe anpassbarer Widget-Bereiche zu organisieren.  
Sie können Widgets in den folgenden Bereichen hinzufügen, neu anordnen, gruppieren und entfernen:

- **Oberer Bereich**
- **Unterer Bereich**
- **Linker Bereich**
- **Rechter Bereich**

Jeder Bereich unterstützt unterschiedliche Layout-Verhalten:

- **Oberer und unterer Bereich** zeigen Widgets in Zeilen an. Sie können ein oder zwei Widgets pro Zeile platzieren und bei Bedarf mehrere Zeilen hinzufügen.
- **Linker und rechter Bereich** unterstützen mehrere Seiten. Sie können Widgets in separate Seiten gruppieren und zwischen ihnen wechseln.


### Widget-Katalog {#widgets-catalog}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_panels_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_panels_ios.png)

</TabItem>

</Tabs>

***Navigations-Widgets:***  

- [Peilung](../widgets/nav-widgets.md#bearing).  
    Dieser Satz zeigt die absolute oder relative Peilung zu einem Ziel in Winkeleinheiten.  
    3 Widgets sind enthalten: *Relative Peilung*, *Magnetische Peilung*, *Wahre Peilung*.

- [Höhenprofil](../widgets/nav-widgets#elevation-widget) (*Nur oben/unten*, *Nur Android*).  
    Zeigt Routenhöhe und Steigung an.

- [Fahrspuren](../widgets/nav-widgets#lanes) (*Nur oben/unten*).  
    Visuelle Fahrspurführung.

- [Kartenmarker-Leiste](../widgets/markers.md#configure-marker-widgets-android) (*Nur oben/unten*).  
    Zeigt Entfernung/Richtung zu gespeicherten Markern an.  
    Konfigurierbar für 1 oder 2 Marker.

- [Navigationspunkt](../widgets/nav-widgets.md#navigation-points).  
    Der Satz zeigt die verbleibende Entfernung zu einem Ziel, einem Zwischenpunkt, der Ankunftszeit an einem Zwischenpunkt oder der Reisezeit für eine berechnete Route.  
    4 Widgets sind enthalten: [Entfernung zum Ziel](../widgets/nav-widgets.md#distance-to-destination), [Entfernung zum Zwischenpunkt](../widgets/nav-widgets.md#distance-to-intermediate), [Zeit zum Zwischenpunkt](../widgets/nav-widgets.md#time-to-intermediate), [Zeit zum Ziel](../widgets/nav-widgets.md#time-to-destination).

- [Routenmanöver](../widgets/nav-widgets.md#next-turn) (*Nur linker/rechter Bereich*).  
    Dieser Satz wird während der Navigation aktiviert und zeigt die Entfernung und den Pfeil zum nächsten Manöver an.  
    3 Widgets sind enthalten: *Nächste Abbiegung*, *Nächste Abbiegung (klein)*, *Zweitnächste Abbiegung*.

- [Geschwindigkeitsbegrenzung](../widgets/nav-widgets.md#speed-limit).  
    Zeigt die aktuelle Geschwindigkeitsbegrenzung für die Straße an.

- [Tachometer](../widgets/info-widgets.md#speedometer).  
    Zeigt die aktuelle Geschwindigkeit basierend auf GPS-Daten und die begrenzte Geschwindigkeit basierend auf [OpenStreetMap-Daten](https://wiki.openstreetmap.org/wiki/Key:maxspeed) an.

- [Straßenname](../widgets/nav-widgets#street-name) (*Nur oben/unten*).  
    Zeigt die aktuelle oder kommende Straße an.

<br/>

***Informations-Widgets:***

- [Höhe](../widgets/info-widgets.md#altitude-widgets).  
    Der Satz zeigt die Höhe über dem Meeresspiegel für den aktuellen Standort oder für den aktuellen Kartenzentrum an.  
    2 Widgets sind enthalten: *Höhe: aktueller Standort*, *Höhe: Kartenzentrum*.

- [Durchschnittsgeschwindigkeit](../widgets/info-widgets.md#average-speed-widget).  
    Zeigt die Durchschnittsgeschwindigkeit der aktuellen Fahrt an.

- [Batteriestand](../widgets/info-widgets.md#battery-level).  
    Zeigt den Batteriestand des Geräts an.

- [Koordinaten-Widgets](../widgets/info-widgets#coordinates-widget) (*Nur oben/unten*).  
    Dieser Satz zeigt die geografischen Koordinaten der aktuellen Geolocation an.  
    2 Widgets sind enthalten: *Koordinaten: Kartenzentrum*, *Koordinaten: aktueller Standort*.

- [Aktuelle Geschwindigkeit](../widgets/info-widgets.md#speed).  
    Zeigt die Geschwindigkeit vom GPS-Sensor an.

- [Aktuelle Zeit](../widgets/info-widgets.md#current-time).  
    Zeigt die aktuelle Systemzeit an.

- [Gleitzahl](../widgets/info-widgets.md#glide-ratio).  
    Die Widgets zeigen die Gleitzahl zum Ziel und die durchschnittliche Gleitzahl für den aktuellen Flug an.  
    2 Widgets sind enthalten: *Gleitzahl zum Ziel*, *Durchschnittliche Gleitzahl*.

- [GPS-Info](../widgets/info-widgets.md#gps-info) (*Nur Android*).  
    Zeigt die Anzahl der erkannten Satelliten an.

- [Kartenmarker](../widgets/markers.md).  
    Der Satz zeigt die Entfernung oder die geschätzte Ankunftszeit (ETA) für die ersten beiden Marker in [der Liste](https://osmand.net/docs/user/personal/markers#itinerary-list) an.  
    2 Widgets sind enthalten: *Erster Marker*, *Zweiter Marker*.

- [Radiuslineal](../widgets/info-widgets.md#radius-ruler).  
    Zeigt die Entfernung zwischen Ihrem Standort und einem Punkt auf der Karte an, der vom [Radiuslineal-Werkzeug](../widgets/radius-ruler.md) umkreist wird.

- [Sonnenaufgang, Sonnenuntergang](../widgets/info-widgets.md#sunset-and-sunrise).  
    Zeigt die Zeit des nächsten Sonnenaufgangs oder Sonnenuntergangs für das Zentrum der Karte an.  
    2 Widgets sind enthalten: *Sonnenaufgang*, *Sonnenuntergang*.

<br/>

***Plugin-basierte Widgets:***  

- [Audio-/Video-Notizen](../widgets/info-widgets.md#audiovideo-notes-widget).  
    Schneller Zugriff zum Aufnehmen von Medien.  
    4 Widgets sind enthalten: *Auf Anfrage*, *Audio aufnehmen*, *Video aufnehmen*, *Foto aufnehmen*.

- [Entwickler-Widgets](../widgets/info-widgets.md#developer-widgets).  
    Zeigt optionale Informationen an.  
    5 Widgets sind enthalten: *Karten-Rendering FPS*, *Kameraneigung*, *Kamerahöhe*, *Zoomstufe*, *Entfernung von Kamera zum Ziel*, *Verfügbarer RAM*.  

- [Widgets für externe Sensoren](../widgets/info-widgets.md#external-sensors-widgets).  
    Der Satz hilft, Daten von BLE/ANT+-Sensoren in Echtzeit zu verfolgen.  
    6 Widgets sind enthalten: *Herzfrequenz*, *Fahrradleistung* (*Nur Android*), *Fahrradkadenz*, *Fahrradgeschwindigkeit*, *Fahrradentfernung*, *Temperatur*.

- [Mapillary](../widgets/info-widgets.md#mapillary-widget).  
    Öffnet die Mapillary-App für Street-Level-Bilder.

- [OsmAnd Tracker-Status](../widgets/info-widgets.md#tracker-widget).  
    Schneller Zugriff auf die [OsmAnd Tracker-Anwendung](https://play.google.com/store/apps/details?id=net.osmand.telegram).

- [Park-Widget](../widgets/info-widgets.md#parking-widget).  
    Entfernung vom Zentrum des Bildschirms zum gespeicherten Parkplatz.

- [Fahrtaufzeichnung](../widgets/info-widgets.md#trip-recording-widgets).  
    Startet und stoppt die Streckenaufzeichnung und zeigt Streckenaufzeichnungsdaten an.  
    4 Widgets sind enthalten: *Entfernung*, *Dauer*, *Bergauf*, *Bergab*.

- [Wetter](../widgets/info-widgets.md#weather-widgets).  
    Zeigt detaillierte Wetterinformationen an.  
    5 Widgets sind enthalten: *Temperatur*, *Luftdruck*, *Wind*, *Wolken*, *Niederschlag*.

:::note Bereichsabhängige Widgets

- Nur in den **oberen und unteren Bereichen** verfügbar und müssen in separaten Zeilen platziert werden: *Koordinaten-Widgets, Höhenprofil-Widget, Fahrspuren-Widget, Kartenmarker-Leiste, Straßenname-Widget*.
- Nur in den **linken und rechten Bereichen** verfügbar: *Routenmanöver*.

:::


### Zeilen {#rows}

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_rows_1_andr.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_rows_andr.png)

Die Funktion **Zeilenmodus** ermöglicht es Ihnen, so viele Zeilen wie nötig zu den oberen und unteren Bereichen hinzuzufügen. Sie können mehrere Widgets pro Zeile anzeigen, wodurch die Menge der sichtbaren Informationen erhöht wird.

***So konfigurieren Sie Zeilen:***

- **Widgets hinzufügen**. Wählen Sie aus der Liste der *Verfügbaren Widgets*.
- **Reihenfolge ändern.** Tippen Sie auf die Schaltfläche *Reihenfolge ändern*, um Widgets anzuordnen.
- **Zeilen hinzufügen.** Verwenden Sie die Schaltfläche *Zeile hinzufügen*, um neue Zeilen für Widgets zu erstellen.
- **Widgets verschieben**. Verschieben Sie Widgets zwischen Zeilen.
- **Änderungen anwenden.** Tippen Sie auf die Schaltfläche *Anwenden*, um die Konfiguration zu speichern.

#### Widget-Typen und Einschränkungen {#widget-types-and-restrictions}

Der Modus ermöglicht es Ihnen, **mehr als ein Widget in einer einzigen Zeile** in den oberen und unteren Bereichen hinzuzufügen, um so viele Informationen wie nötig anzuzeigen.  

- **Komplexe Widgets**. Pro Zeile kann nur ein komplexes Widget hinzugefügt werden. Dazu gehören:
    - [Kartenmarker-Leiste (*Nur Android*)](../widgets/markers.md#configure-marker-widgets-android)
    - [Straßenname](../widgets/nav-widgets#street-name)
    - [Koordinaten-Widgets](../widgets/info-widgets#coordinates-widget)
    - [Fahrspuren](../widgets/nav-widgets#lanes)
    - [Höhenprofil (*Nur Android*)](../widgets/nav-widgets#elevation-widget)
    - [Routenmanöver](../widgets/nav-widgets.md#next-turn)

- **Einfache Widgets**. Mehrere einfache Widgets können zu einer einzigen Zeile hinzugefügt werden. Diese Widgets können *Name*, *Maßeinheiten*, *Wert* und *Symbol* anzeigen.


### Seiten {#pages}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left"/> → Bearbeiten → Seite hinzufügen*  

![Widget page](@site/static/img/widgets/widget_page_1_andr.png) ![Widget page](@site/static/img/widgets/widget_page_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left"/> → Bearbeiten → Seite hinzufügen*

![Widget page](@site/static/img/widgets/widget_page_1_ios.png) ![Widget page](@site/static/img/widgets/widget_page_2_ios.png)  

</TabItem>

</Tabs>

Widgets in den rechten und linken Bereichen können in **Seiten** gruppiert werden. Die Funktion **Seitenmodus** ermöglicht es Ihnen, 5 Seiten zu den linken und rechten Bereichen hinzuzufügen.

***So konfigurieren Sie Zeilen:***

- **Seite hinzufügen**. Navigieren Sie zu den Einstellungen des linken/rechten Bereichs und tippen Sie auf *Bearbeiten → Seite hinzufügen*.
- **Widgets nach Seite organisieren**. Diese Funktion ist hilfreich, wenn verschiedene Sätze von Widgets für verschiedene Aufgaben benötigt werden, z. B. für die Navigation im Vergleich zum Durchsuchen der Karte.
- Seiten ermöglichen es Ihnen, **Widget-Sätze** für bestimmte Szenarien zu erstellen, den Arbeitsablauf zu verbessern und die Unordnung zu reduzieren.


## Widget-Einstellungen {#widget-settings}

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_settings_1_andr.png)   ![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_settings_2_andr.png)

1. **Widget-Größenoptionen** (*für alle Bereiche*):  
    Sie können die Größe von **einfachen Widgets** in den **oberen, unteren, linken und rechten Bereichen** anpassen:

    - **Klein**. Ideal für kompakte Displays, spart mehr Bildschirmplatz für Karten.
    - **Mittel** (*Standard-Widget-Größe*). Balanciert Sichtbarkeit und Platznutzung.
    - **Groß**. Bietet größere, besser sichtbare Widget-Informationen.  

2. **Ausblenden von Widget-Symbolen** (*für obere und untere Bereiche*):

    - Verbessert die Klarheit und maximiert den Platz für wichtige Daten.
    - Besonders nützlich, wenn viele Widgets in derselben **Zeile** angezeigt werden.

3. **Individuelle Größe für verschiedene Zeilen** (*für obere und untere Bereiche*):

    - Widgets können individuell durch Anpassen der Zeilengröße dimensioniert werden.
    - **HINWEIS:** Das Ändern der Größe eines Widgets in einer Zeile ändert die Größe aller Widgets in dieser Zeile.

4. **So ändern Sie die Widget-Größe und die Sichtbarkeit des Symbols:**

    - Wählen Sie ein Widget aus, das Sie bereits zum Bereich hinzugefügt haben.  
    - Tippen Sie auf das *Einstellungen*-Symbol auf der rechten Seite des Widget-Feldes.
    - Tippen Sie auf die Einstellung *Größe* und wählen Sie eine der verfügbaren Größen aus.
    - Schalten Sie im Feld *Symbol anzeigen* auf die Position Aus.


## Anpassung der Bereiche {#panels-customization}

### Widget-Kontextmenü {#widget-context-menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Widget dublicate](@site/static/img/widgets/widget_context_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Widget dublicate](@site/static/img/widgets/widget_context_menu_ios.png)

</TabItem>

</Tabs>

Das **Widget-Kontextmenü** bietet eine schnelle Möglichkeit, Widgets direkt vom Kartenbildschirm aus zu verwalten und zu konfigurieren. Sie können darauf zugreifen, indem Sie ein beliebiges Widget ***lange antippen***, um das Layout der Widgets anzupassen, ohne die Karte zu verlassen.

**Für obere und untere Bereiche**  

- *Widget nach rechts/links hinzufügen:*

    - Wählen Sie eine Position für das neue Widget relativ zum aktuellen aus.
    - Wählen Sie das Widget aus der Liste der [Verfügbaren Widgets](#widgets-for-all-panels) aus.

**Für linke und rechte Bereiche**  

- *Widget darüber/darunter hinzufügen:*

    - Wählen Sie aus, ob das neue Widget über oder unter dem aktuellen Widget positioniert werden soll.
    - Tippen Sie in der Liste auf das gewünschte Widget, um es an der angegebenen Position hinzuzufügen.

**Allgemeine Aktionen für alle Bereiche**  

- *Einstellungen*.
    - Greifen Sie auf die Einstellungen des Widgets zu (falls verfügbar), um dessen Aussehen oder Verhalten anzupassen.

- *Durchschnittsgeschwindigkeit zurücksetzen*.
    - Verfügbar für das Widget [Durchschnittsgeschwindigkeit](../widgets/info-widgets.md#average-speed).
    - Lange antippen, um den Geschwindigkeitswert während einer Fahrt sofort zurückzusetzen.

- *Löschen*.
    - Entfernen Sie das Widget aus dem Bereich.
    - Eine Bestätigungsaufforderung stellt sicher, dass die Aktion beabsichtigt ist.

### Kopien von Widgets {#copies-of-widgets}

*OsmAnd-Menü → Bildschirm konfigurieren → Widgets → Bereich*  

![Widget dublicate](@site/static/img/widgets/widget_dublicate.png)  

OsmAnd ermöglicht es Ihnen, mehrere Instanzen desselben Widgets zu verschiedenen Bereichen oder Seiten hinzuzufügen. Diese Funktion ist besonders nützlich, wenn Sie konsistente Informationen über verschiedene Ansichten oder Profile hinweg benötigen.  

***So duplizieren Sie Widgets:***

- **Widget hinzufügen**. Navigieren Sie zu: *OsmAnd-Menü → Bildschirm konfigurieren → Widgets → Bereich →* **Widget hinzufügen**.
- **Mit dem Kontextmenü duplizieren**. Tippen Sie auf das Widget und wählen Sie **Duplizieren** aus der Liste der Aktionen.
- **Alternative Methode**. Wählen Sie dasselbe Widget aus der Liste der *Verfügbaren Widgets* aus und tippen Sie auf *Hinzufügen*.


### Verschieben oder Löschen {#move-or-delete}

*OsmAnd-Menü → Bildschirm konfigurieren → Widgets → Bereich*  

![Configure screen menu](@site/static/img/widgets/configure_screen_remove_andr.png)

Sie können Widgets mithilfe des **Bearbeitungsmodus** auf dem Anwendungsbildschirm neu anordnen oder entfernen.  

***So verschieben Sie ein Widget:***

- Gehen Sie zu: *OsmAnd-Menü → Bildschirm konfigurieren → Widgets → Bereich → Schaltfläche Bearbeiten*.
- Tippen Sie lange auf das **Symbol rechts** neben dem Widget.
- Ziehen Sie es an die gewünschte Position in der Widget-Liste.

***So löschen Sie ein Widget:***  

- Befolgen Sie die gleichen Schritte wie oben.
- Tippen Sie auf das **Minus-Symbol** links neben dem Widget-Namen.
- Bestätigen Sie das Löschen, wenn Sie dazu aufgefordert werden.


## Schaltflächen {#buttons}

### Benutzerdefinierte Schaltflächen {#custom-buttons}

<Tabs groupId="operating-systems">

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

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget page](@site/static/img/widgets/conf_screen_buttons_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget page](@site/static/img/widgets/conf_screen_buttons_3_ios.png)

</TabItem>

</Tabs>

1. **Standardschaltflächen** ermöglichen es Ihnen, anzupassen, welche voreingestellten Kartenschaltflächen auf dem Kartenbildschirm sichtbar sind. Sie können die folgenden Schaltflächen ausblenden oder anzeigen:

    - [3D-Modus](../widgets/map-buttons.md#3d-mode). Für iOS ist die Schaltfläche immer verfügbar. Für Android wird sie in der Liste angezeigt und ist für die Einstellung verfügbar, wenn die Karten-Rendering-Engine [Version 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) ausgewählt ist.

    - [Kompass](../widgets/map-buttons.md#display-options). Zeigt an, wie die Karte auf dem Gerät ausgerichtet ist.  
    3 Ansichten: *Immer sichtbar*, *Immer ausgeblendet*, *Sichtbar, wenn die Karte gedreht ist*.

    - [Karte konfigurieren](../map/configure-map-menu.md). Greifen Sie auf Optionen zu, um den Stil, die Ebenen und zusätzliche Einstellungen der Karte zu ändern.

    - [Menü](../widgets/map-buttons.md#main-menu). Öffnet das Hauptanwendungsmenü für den Zugriff auf alle Funktionen.

    - [Mein Standort](../widgets/map-buttons.md#my-location-and-zoom). Zentriert die Karte auf Ihre aktuelle Position.

    - [Navigation](../widgets/map-buttons.md#directions). Wesentlich für die Routenplanung und den Start der Navigation.

    - [Suche](../widgets/map-buttons.md#search). Öffnet das Suchwerkzeug zum Finden von Orten.

    - [Vergrößern / Verkleinern](../widgets/map-buttons.md#my-location-and-zoom). Passt die Zoomstufe der Karte an, um mehr oder weniger Details anzuzeigen.

2. Das **Drei-Punkte-Menü** auf dem Bildschirm der Standardschaltflächen enthält Aktionen wie:

    - *Auf Standard zurücksetzen*. Ermöglicht es Ihnen, die Schaltflächeneinstellungen auf ihr ursprüngliches Aussehen zurückzusetzen.
    - *Von einem anderen Profil kopieren*. Wählen Sie aus der angebotenen Liste aus, von welchem Profil Sie die Schaltflächeneinstellungen kopieren möchten.

3. **Das Standardaussehen der Schaltfläche** (*Nur Android*) bietet eine Vielzahl von Anpassungsoptionen für diese Art von Schaltflächen. Um das Aussehen einer Schaltfläche zu ändern, tippen Sie auf die gewünschte Schaltfläche in der Liste und wählen Sie die Option [Aussehen](#button-appearance).


### Aussehen der Schaltfläche {#button-appearance}

<InfoAndroidOnly/>

![Button Appearance](@site/static/img/widgets/button_appearance_settings_andr.png)

Die Funktion *Aussehen der Schaltfläche* ermöglicht es Ihnen, das Aussehen der Schaltflächen auf Ihrer Kartenoberfläche vollständig anzupassen. Diese Anpassungsoptionen sind sowohl für *Schnellaktionen (Benutzerdefinierte Schaltflächen)* als auch für *Standardschaltflächen* verfügbar und bieten umfassende Kontrolle über das Aussehen der Kartenoberfläche sowie präzise Anpassungen des Schaltflächendesigns.

***Anpassungsoptionen***:

- **Symbol**. Wählen Sie aus einer Liste von Symbolen, die Aktionen darstellen, die Sie bereits hinzugefügt haben, um Funktionen auf einen Blick leicht zu identifizieren.
- **Eckenradius**. Passen Sie diese Einstellung an, um die Form der Schaltfläche zu ändern, von scharfen, quadratischen Ecken bis hin zu glatten, abgerundeten Kanten.
- **Größe**. Wählen Sie die Schaltflächengröße, die am besten zu Ihrem Bildschirm passt und bei Bedarf hervorsticht. Bei *Standardschaltflächen* sind die Größen voreingestellt und können nicht angepasst werden.
- **Hintergrunddeckkraft**. Steuern Sie die Sichtbarkeit des Hintergrunds der Schaltfläche. Sie können ihn vollständig sichtbar oder teilweise transparent einstellen oder nur den Rahmen, den Schatten und das Symbol anzeigen.


## Sonstiges {#other}

<Tabs groupId="operating-systems">

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
- [Entfernung per Tippen](../widgets/radius-ruler.md#distance-by-tap). Bietet die Möglichkeit, die Entfernung von Ihrer Position zum ausgewählten Punkt zu messen.
- [Tachometer](../widgets/info-widgets.md#speedometer). Zeigt die aktuelle Geschwindigkeit basierend auf GPS-Daten und die begrenzte Geschwindigkeit basierend auf [OpenStreetMap-Daten](https://wiki.openstreetmap.org/wiki/Key:maxspeed) an. Die angezeigten Daten hängen auch von der OsmAnd-Einstellung [Toleranz der Geschwindigkeitsbegrenzung](../navigation/guidance/voice-navigation.md#speed-limit) ab.


### Anzeigeposition (Standortposition auf dem Bildschirm) {#display-position-location-position-on-screen}

<Tabs groupId="operating-systems">

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
- **<Translate android="true" ids="shared_string_automatic"/>**. Platziert *Mein Standort* abhängig von der *[Kartenausrichtung](../map/interact-with-map.md#map-orientation-modes)* (*Unten* - für die Bewegungsrichtung, *Mitte* - für alle anderen).


## Aktionen {#actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Gehe zu: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_actions"/>*  

![Widget page](@site/static/img/widgets/widget_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Beliebiger Bereich*

![Widget page](@site/static/img/widgets/widget_actions_ios.png)  

</TabItem>

</Tabs>

Zugriff auf zusätzliche Aktionen im Bildschirm "Konfigurieren" sind:

- *Android*. Befindet sich im Bildschirm "Konfigurieren" am unteren Bildschirmrand im Abschnitt *Aktionen*: *Menü → Bildschirm konfigurieren → Aktionen*.
- *Android / iOS*. Befindet sich auf den Bildschirmen jedes Bereichs im *Drei-Punkte-Menü* in der oberen rechten Ecke des Bildschirms.

Verfügbare Aktionen:

- **Auf Standard zurücksetzen**. Diese Funktion ermöglicht es Ihnen, alle Einstellungen auf die Standardwerte zurückzusetzen, wenn Sie neu beginnen möchten oder beim Starten von OsmAnd nur die voreingestellten verwenden möchten.
- **Von einem anderen Profil kopieren**. Diese Funktion ermöglicht es Ihnen, Einstellungen schnell von einem anderen Profil zu importieren, die gewünschten aus der Liste auszuwählen und zu kopieren.


## Profil wechseln {#switch-profile}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Configure screen menu](@site/static/img/widgets/configure_screen_switch_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Configure screen menu](@site/static/img/widgets/configure_screen_switch_ios.png)

</TabItem>

</Tabs>

- Bei **Android**-Geräten können Sie Profile oben auf dem Startbildschirm "Bildschirm konfigurieren" über die verfügbaren Profilsymbole ändern.  
- Wenn Sie ein **iOS**-Gerät verwenden, tippen Sie auf das Profilsymbol in der oberen Ecke des Startbildschirms "Bildschirm konfigurieren" und wählen Sie das gewünschte Profil aus der Liste aus, um es zu aktivieren.  

**Beachten Sie**. Die Option *Profil wechseln* zeigt nicht alle vorhandenen Profile an, sondern nur diejenigen, die im Einstellungsmenü *eingeschaltet* wurden.


## Verwandte Artikel {#related-articles}

- [Kartenschaltflächen](./map-buttons.md)
- [Informations-Widgets](./info-widgets.md)
- [Navigations-Widgets](./nav-widgets.md)
- [Radiuslineal und Lineal](./radius-ruler.md)
- [Marker-Widgets](./markers.md)
- [Schnellaktion](./quick-action.md)

> *Zuletzt aktualisiert: Mai 2025*