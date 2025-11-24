---
source-hash: fdd12adf291a5cea20dd8e7dbadf1d71cf7c14eada5b2f809e40ee69e559cbd6
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


## Übersicht {#overview}

Das Menü **Bildschirm konfigurieren** in OsmAnd ermöglicht es Ihnen, die Kartenoberfläche durch Hinzufügen und Anordnen von Widgets, Schaltflächen und Schnellaktionen auf mehreren Leisten anzupassen.

Sie können:

- [Informations-](../widgets/info-widgets.md), [Navigations-](../widgets/nav-widgets.md) und [markierungsbezogene](../widgets/markers.md) Widgets hinzufügen.
- [Schnellaktionen](../widgets/quick-action.md), [benutzerdefinierte Schaltflächen](../widgets/quick-action.md#custom-buttons) und [Standard-Schaltflächen](../widgets/map-buttons.md) hinzufügen oder bearbeiten.
- Widgets in Leisten (oben, unten, links, rechts, zentriert) organisieren.
- Mehrere **Seiten** innerhalb der Seitenleisten erstellen, die Größe der Widgets wählen.
- Zeilenhöhe wählen und Widget-Symbole umschalten.

Alle Widgets sind [profilabhängig](../personal/profiles.md) — jedes Profil hat sein eigenes Layout, seine eigene Reihenfolge, Sichtbarkeit und Einstellungen.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Menü Bildschirm konfigurieren](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Menü Bildschirm konfigurieren](@site/static/img/widgets/configure_screen_overview_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Menü Bildschirm konfigurieren](@site/static/img/widgets/configure_screen_overview_ios_1.png)  

</TabItem>

</Tabs>


## Widget-Leisten {#widget-panels}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Bildschirm konfigurieren](@site/static/img/widgets/configure_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Bildschirm konfigurieren](@site/static/img/widgets/configure_screen_ios.png)

</TabItem>

</Tabs>

OsmAnd ermöglicht es Ihnen, die Kartenoberfläche mit anpassbaren Widget-Leisten zu organisieren.  
Sie können Widgets in den folgenden Leisten hinzufügen, neu anordnen, gruppieren und entfernen:

- **Obere Leiste**
- **Untere Leiste**
- **Linke Leiste**
- **Rechte Leiste**

Jede Leiste unterstützt unterschiedliche Layout-Verhaltensweisen:

- **Obere und untere Leisten** zeigen Widgets in Zeilen an. Sie können ein oder zwei Widgets pro Zeile platzieren und bei Bedarf mehrere Zeilen hinzufügen.
- **Linke und rechte Leisten** unterstützen mehrere Seiten. Sie können Widgets in separaten Seiten gruppieren und zwischen ihnen wechseln.


### Widget-Katalog {#widgets-catalog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menü Bildschirm konfigurieren](@site/static/img/widgets/configure_screen_widgets_panels_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menü Bildschirm konfigurieren](@site/static/img/widgets/configure_screen_widgets_panels_ios.png)

</TabItem>

</Tabs>

***Navigations-Widgets:***  

- [Peilung](../widgets/nav-widgets.md#bearing-widget).  
    Diese Gruppe zeigt die absolute oder relative Peilung zu einem Ziel in Winkeleinheiten an.  
    3 Widgets sind enthalten: *Relative Peilung*, *Magnetische Peilung*, *Wahre Peilung*.

- [Höhenprofil](../widgets/nav-widgets#elevation-widget) (*Nur oben/unten*, *Nur Android*).  
    Zeigt die Höhe und Steigung der Route an.

- [Fahrspuren](../widgets/nav-widgets#lanes) (*Nur oben/unten*).  
    Visuelle Fahrspurführung.

- [Kartenmarkierungsleiste](../widgets/markers.md#configure-marker-widgets) (*Nur oben/unten*).  
    Zeigt Entfernung/Richtung zu gespeicherten Markierungen an.  
    Konfigurierbar für 1 oder 2 Markierungen.

- [Navigationspunkt](../widgets/nav-widgets.md#navigation-points).  
    Die Gruppe zeigt die verbleibende Entfernung zu einem Ziel, einem Zwischenziel, die Ankunftszeit an einem Zwischenziel oder die Fahrzeit für eine berechnete Route an.  
    4 Widgets sind enthalten: [Entfernung zum Ziel](../widgets/nav-widgets.md#distance-to-destination), [Entfernung zum Zwischenziel](../widgets/nav-widgets.md#distance-to-intermediate), [Zeit zum Zwischenziel](../widgets/nav-widgets.md#time-to-intermediate), [Zeit zum Ziel](../widgets/nav-widgets.md#time-to-destination).

- [Routenmanöver](../widgets/nav-widgets.md#next-turn) (*Nur linke/rechte Leiste*).  
    Diese Gruppe wird während der Navigation aktiviert und zeigt die Entfernung und den Pfeil zum nächsten Manöver an.  
    3 Widgets sind enthalten: *Nächste Abbiegung*, *Nächste Abbiegung (klein)*, *Zweitnächste Abbiegung*.

- [Geschwindigkeitsbegrenzung](../widgets/nav-widgets.md#speed-limit).  
    Zeigt die aktuelle Geschwindigkeitsbegrenzung für die Straße an.

- [Tachometer](../widgets/info-widgets.md#speedometer).  
    Zeigt die aktuelle Geschwindigkeit basierend auf GPS-Daten und die Geschwindigkeitsbegrenzung basierend auf [OpenStreetMap-Daten](https://wiki.openstreetmap.org/wiki/Key:maxspeed) an.

- [Straßenname](../widgets/nav-widgets#street-name) (*Nur oben/unten*).  
    Zeigt die aktuelle oder kommende Straße an.

<br/>

***Informations-Widgets:***

- [Höhe](../widgets/info-widgets.md#altitude-widgets).  
    Die Gruppe zeigt die Höhe über dem Meeresspiegel für den aktuellen Standort oder für das aktuelle Kartenzentrum an.  
    2 Widgets sind enthalten: *Höhe: aktueller Standort*, *Höhe: Kartenzentrum*.

- [Durchschnittsgeschwindigkeit](../widgets/info-widgets.md#average-speed).  
    Zeigt die Durchschnittsgeschwindigkeit der aktuellen Fahrt an.

- [Akkustand](../widgets/info-widgets.md#battery-level).  
    Zeigt den Akkustand des Geräts an.

- [Koordinaten-Widgets](../widgets/info-widgets#coordinates-widget) (*Nur oben/unten*).  
    Diese Gruppe zeigt die geografischen Koordinaten des aktuellen Standorts an.  
    2 Widgets sind enthalten: *Koordinaten: Kartenzentrum*, *Koordinaten: aktueller Standort*.

- [Aktuelle Geschwindigkeit](../widgets/info-widgets.md#current-speed).  
    Zeigt die Geschwindigkeit vom GPS-Sensor an.

- [Aktuelle Zeit](../widgets/info-widgets.md#current-time).  
    Zeigt die aktuelle Systemzeit an.

- [Gleitverhältnis](../widgets/info-widgets.md#glide-ratio).  
    Die Widgets zeigen das Gleitverhältnis zum Ziel und das durchschnittliche Gleitverhältnis für den aktuellen Flug an.  
    2 Widgets sind enthalten: *Gleitverhältnis zum Ziel*, *Durchschnittliches Gleitverhältnis*.

- [GPS-Info](../widgets/info-widgets.md#gps-info) (*Nur Android*).  
    Zeigt die Anzahl der erkannten Satelliten an.

- [Kartenmarkierungen](../widgets/markers.md).  
    Die Gruppe zeigt die Entfernung oder die geschätzte Ankunftszeit (ETA) für die ersten beiden Markierungen in [der Liste](https://osmand.net/docs/user/personal/markers#itinerary-list) an.  
    2 Widgets sind enthalten: *Erste Markierung*, *Zweite Markierung*.

- [Radiuslineal](../widgets/info-widgets.md#radius-ruler).  
    Zeigt die Entfernung zwischen Ihrem Standort und einem Punkt auf der Karte an, der vom [Radiuslineal-Werkzeug](../widgets/radius-ruler.md) eingekreist ist.

- [Sonnenaufgang, Sonnenuntergang](../widgets/info-widgets.md#sun-position).  
    Zeigt die Zeit des nächsten Sonnenaufgangs oder Sonnenuntergangs für das Zentrum der Karte an.  
    2 Widgets sind enthalten: *Sonnenaufgang*, *Sonnenuntergang*.

<br/>

***Plugin-basierte Widgets:***  

- [Audio-/Videonotizen](../widgets/info-widgets.md#audiovideo-notes-widget).  
    Schneller Zugriff zur Aufnahme von Medien.  
    4 Widgets sind enthalten: *Auf Anfrage*, *Audio aufnehmen*, *Video aufnehmen*, *Foto machen*.

- [Entwickler-Widgets](../widgets/info-widgets.md#developer-widgets).  
    Zeigt optionale Informationen an.  
    5 Widgets sind enthalten: *Karten-Rendering FPS*, *Kameraneigung*, *Kamerahöhe*, *Zoomstufe*, *Entfernung von Kamera zum Ziel*, *Verfügbarer RAM*.  

- [Externe Sensoren-Widgets](../widgets/info-widgets.md#external-sensors-widgets).  
    Die Gruppe hilft bei der Verfolgung von Daten von BLE/ANT+-Sensoren in Echtzeit.  
    6 Widgets sind enthalten: *Herzfrequenz*, *Fahrradleistung* (*Nur Android*), *Fahrrad-Trittfrequenz*, *Fahrradgeschwindigkeit*, *Fahrrad-Distanz*, *Temperatur*.

- [Mapillary](../widgets/info-widgets.md#mapillary-widget).  
    Öffnet die Mapillary-App für Straßenansichtsbilder.

- [OsmAnd Tracker-Status](../widgets/info-widgets.md#tracker-widget).  
    Schneller Zugriff auf die [OsmAnd Tracker-Anwendung](https://play.google.com/store/apps/details?id=net.osmand.telegram).

- [Park-Widget](../widgets/info-widgets.md#parking-widget).  
    Entfernung vom Bildschirmzentrum zum gespeicherten Parkplatz.

- [Routenaufzeichnung](../widgets/info-widgets.md#trip-recording-widgets).  
    Startet und stoppt die Routenaufzeichnung und zeigt Routenaufzeichnungsdaten an.  
    4 Widgets sind enthalten: *Distanz*, *Dauer*, *Bergauf*, *Bergab*.

- [Wetter](../widgets/info-widgets.md#weather-widgets).  
    Zeigt detaillierte Wetterinformationen an.  
    5 Widgets sind enthalten: *Temperatur*, *Luftdruck*, *Wind*, *Wolken*, *Niederschlag*.

:::note Leistenabhängige Widgets

- Nur in der **oberen und unteren Leiste** verfügbar und müssen in separaten Zeilen platziert werden: *Koordinaten-Widgets, Höhenprofil-Widget, Fahrspur-Widget, Kartenmarkierungsleiste, Straßenname-Widget*.
- Nur in der **linken und rechten Leiste** verfügbar: *Routenmanöver*.

:::


### Zeilen {#rows}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menü Bildschirm konfigurieren](@site/static/img/widgets/configure_screen_widgets_rows_1_andr.png)  ![Menü Bildschirm konfigurieren](@site/static/img/widgets/configure_screen_widgets_rows_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menü Bildschirm konfigurieren](@site/static/img/widgets/configure_screen_widgets_rows_1_ios.png)  ![Menü Bildschirm konfigurieren](@site/static/img/widgets/configure_screen_widgets_rows_ios.png) 

</TabItem>

</Tabs>



Die Funktion **Zeilenmodus** ermöglicht es Ihnen, so viele Zeilen wie nötig zur oberen und unteren Leiste hinzuzufügen. Sie können mehrere Widgets pro Zeile anzeigen, was die Menge der sichtbaren Informationen erhöht.

***Wie man Zeilen konfiguriert:***

- **Widgets hinzufügen**: Tippen Sie auf die *Plus*-Schaltfläche (Android) oder *Widget hinzufügen* (iOS) und wählen Sie dann aus der Liste der verfügbaren Widgets.
- **Widgets neu anordnen**: Tippen Sie auf die *Stift*-Schaltfläche (Android) oder *Bearbeiten* (iOS), um die Widgets neu anzuordnen.
- **Zeilen hinzufügen**: Tippen Sie auf die Schaltfläche *Zeile hinzufügen*, um neue Zeilen für Ihre Widgets zu erstellen.
- **Widgets verschieben**: Ziehen Sie Widgets zwischen verschiedenen Zeilen.
- **Widget-Einstellungen aufrufen**: Tippen Sie auf das *"i"*-Symbol (Android) oder den *">"*-Pfeil (iOS), um die Widget-Einstellungen zu öffnen.
- **Änderungen speichern**: Tippen Sie auf *Anwenden* (Android) oder *Fertig* (iOS), um das Layout zu speichern.


#### Widget-Typen und Einschränkungen {#widget-types-and-restrictions}

Der Modus ermöglicht es Ihnen, **mehr als ein Widget in einer einzigen Zeile** auf der oberen und unteren Leiste hinzuzufügen, um so viele Informationen wie nötig anzuzeigen.  

- **Komplexe Widgets**. Pro Zeile kann nur ein komplexes Widget hinzugefügt werden. Dazu gehören:
    - [Kartenmarkierungsleiste (*Nur Android*)](../widgets/markers.md#configure-marker-widgets)
    - [Straßenname](../widgets/nav-widgets#street-name)
    - [Koordinaten-Widgets](../widgets/info-widgets#coordinates-widget)
    - [Fahrspuren](../widgets/nav-widgets#lanes)
    - [Höhenprofil (*Nur Android*)](../widgets/nav-widgets#elevation-widget)
    - [Routenmanöver](../widgets/nav-widgets.md#next-turn)

- **Einfache Widgets**. Mehrere einfache Widgets können zu einer einzigen Zeile hinzugefügt werden. Diese Widgets können *Name*, *Maßeinheiten*, *Wert* und *Symbol* anzeigen. Der Text in einfachen Widgets wird automatisch umrandet, um eine klare Lesbarkeit auf verschiedenen Kartenhintergründen im transparenten Leistenmodus zu gewährleisten.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widget-Umriss Android](@site/static/img/widgets/simple_widgets_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">  

![Widget-Umriss iOS](@site/static/img/widgets/simple_widgets_ios.png) 

</TabItem>

</Tabs>


### Seiten {#pages}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left"/> → Bearbeiten → Seite hinzufügen*  

![Widget-Seite](@site/static/img/widgets/widget_page_1_andr.png) ![Widget-Seite](@site/static/img/widgets/widget_page_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left"/> → Bearbeiten → Seite hinzufügen*

![Widget-Seite](@site/static/img/widgets/widget_page_1_ios.png) ![Widget-Seite](@site/static/img/widgets/widget_page_2_ios.png)  

</TabItem>

</Tabs>

Widgets in der rechten und linken Leiste können in **Seiten** gruppiert werden. Die Funktion **Seitenmodus** ermöglicht es Ihnen, 5 Seiten zur linken und rechten Leiste hinzuzufügen.

***Wie man Zeilen konfiguriert:***

- **Eine Seite hinzufügen**. Navigieren Sie zu den Einstellungen der linken/rechten Leiste und tippen Sie auf *Bearbeiten → Seite hinzufügen*.
- **Widgets nach Seite organisieren**. Diese Funktion ist nützlich, wenn verschiedene Sätze von Widgets für unterschiedliche Aufgaben benötigt werden, wie z. B. beim Navigieren im Vergleich zum Durchsuchen der Karte.
- Seiten ermöglichen es Ihnen, **Widget-Sätze** für bestimmte Szenarien zu erstellen, was den Arbeitsablauf verbessert und die Übersichtlichkeit erhöht.


## Widget-Einstellungen {#widget-settings}

![Menü Bildschirm konfigurieren](@site/static/img/widgets/configure_screen_widgets_settings_1_andr.png)   ![Menü Bildschirm konfigurieren](@site/static/img/widgets/configure_screen_widgets_settings_2_andr.png)

1. **Optionen für Widget-Größe** (*für alle Leisten*):  
    Sie können die Größe von **einfachen Widgets** in der **oberen, unteren, linken und rechten Leiste** anpassen:

    - **Klein**. Ideal für kompakte Anzeigen, um mehr Bildschirmplatz für Karten zu sparen.
    - **Mittel** (*Standard-Widget-Größe*). Gleicht Sichtbarkeit und Platzverbrauch aus.
    - **Groß**. Bietet größere, besser sichtbare Widget-Informationen.  

2. **Ausblenden von Widget-Symbolen** (*für obere und untere Leisten*):

    - Verbessert die Übersichtlichkeit und maximiert den Platz für wichtige Daten.
    - Besonders nützlich, wenn viele Widgets in derselben **Zeile** angezeigt werden.

3. **Ausblenden von Widget-Textbeschriftungen**:

    - Blendet Textbeschriftungen automatisch aus, um numerische Informationen in kompakten Layouts vollständig sichtbar zu halten.
    - Hilft, eine saubere und lesbare Widget-Anordnung beizubehalten, wenn der Platz begrenzt ist.   

4. **Individuelle Größe für verschiedene Zeilen** (*für alle Leisten*):

    - Widgets können individuell durch Anpassung der Zeilen- und Spaltengröße dimensioniert werden.
    - **HINWEIS:** Das Ändern der Größe eines Widgets in einer Zeile/Spalte ändert die Größe aller Widgets in dieser Zeile/Spalte.

5. **So ändern Sie die Widget-Größe und die Sichtbarkeit des Symbols:**

    - Wählen Sie ein Widget aus, das Sie bereits zur Leiste hinzugefügt haben.  
    - Tippen Sie auf das *Einstellungen*-Symbol auf der rechten Seite des Widget-Feldes.
    - Tippen Sie auf die Einstellung *Größe* und wählen Sie eine der verfügbaren Größen aus.
    - Schalten Sie im Feld *Symbol anzeigen* auf die Aus-Position.


## Anpassung der Leisten {#panels-customization}

### Widget-Kontextmenü {#widget-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widget-Kontextmenü](@site/static/img/widgets/widget_context_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Widget-Kontextmenü](@site/static/img/widgets/widget_context_menu_ios.png)

</TabItem>

</Tabs>

Das **Widget-Kontextmenü** bietet eine schnelle Möglichkeit, Widgets direkt vom Kartenbildschirm aus zu verwalten und zu konfigurieren. Sie können es durch ***langes Tippen*** auf ein beliebiges Widget aufrufen, um das Layout der Widgets anzupassen, ohne die Karte zu verlassen.


- **Widget rechts/links hinzufügen** (nur für *obere und untere Leisten*)
    - Wählen Sie eine Position für das neue Widget relativ zum aktuellen.
    - Wählen Sie das Widget aus der Liste der [verfügbaren Widgets](#widgets-catalog).

- **Widget oben/unten hinzufügen** (nur für *linke und rechte Leisten*)
    - Wählen Sie, ob das neue Widget über oder unter dem aktuellen Widget positioniert werden soll.
    - Tippen Sie auf das gewünschte Widget in der Liste, um es an der angegebenen Position hinzuzufügen.

- **Einstellungen**
    - Greifen Sie auf die Einstellungen des Widgets zu (falls verfügbar), um dessen Aussehen oder Verhalten anzupassen.

- **Löschen**
    - Entfernen Sie das Widget von der Leiste.
    - Eine Bestätigungsaufforderung stellt sicher, dass die Aktion beabsichtigt ist.

- **Durchschnittsgeschwindigkeit zurücksetzen** (Beispiel für *Widget-spezifische Aktionen*)
    - Verfügbar für das Widget [Durchschnittsgeschwindigkeit](../widgets/info-widgets.md#average-speed).
    - Langes Tippen, um den Geschwindigkeitswert während einer Fahrt sofort zurückzusetzen.


### Kopien von Widgets {#copies-of-widgets}

*OsmAnd-Menü → Bildschirm konfigurieren → Widgets → Leiste*  

![Widget-Duplikat](@site/static/img/widgets/widget_dublicate.png)  

OsmAnd ermöglicht es Ihnen, mehrere Instanzen desselben Widgets zu verschiedenen Leisten oder Seiten hinzuzufügen. Diese Funktion ist besonders nützlich, wenn Sie konsistente Informationen über verschiedene Ansichten oder Profile hinweg benötigen.  

***Wie man Widgets dupliziert:***

- **Das Widget hinzufügen**. Navigieren Sie zu: *OsmAnd-Menü → Bildschirm konfigurieren → Widgets → Leiste →* **Widget hinzufügen**.
- **Über das Kontextmenü duplizieren**. Tippen Sie auf das Widget und wählen Sie **Duplizieren** aus der Liste der Aktionen.
- **Alternative Methode**. Wählen Sie dasselbe Widget aus der Liste der *verfügbaren Widgets* und tippen Sie auf *Hinzufügen*.


### Verschieben oder Löschen {#move-or-delete}

*OsmAnd-Menü → Bildschirm konfigurieren → Widgets → Leiste*  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menü Bildschirm konfigurieren](@site/static/img/widgets/configure_screen_remove_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menü Bildschirm konfigurieren](@site/static/img/widgets/configure_screen_remove_ios.png) 

</TabItem>

</Tabs>



Sie können Widgets auf dem Anwendungsbildschirm im **Bearbeiten**-Modus neu anordnen oder entfernen.  

***Wie man ein Widget verschiebt:***

- Gehen Sie zu: *OsmAnd-Menü → Bildschirm konfigurieren → Widgets → Leiste → Bearbeiten-Schaltfläche*.
- Tippen Sie lange auf das **Symbol rechts** neben dem Widget.
- Ziehen Sie es an die gewünschte Position in der Widget-Liste.

***Wie man ein Widget löscht:***  

- Befolgen Sie die gleichen Schritte wie oben.
- Tippen Sie auf das **Minus-Symbol** links neben dem Widget-Namen.
- Bestätigen Sie das Löschen, wenn Sie dazu aufgefordert werden.


## Schaltflächen {#buttons}

### Benutzerdefinierte Schaltflächen {#custom-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget-Seite](@site/static/img/widgets/conf_screen_buttons_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget-Seite](@site/static/img/widgets/conf_screen_buttons_2_ios.png)

</TabItem>

</Tabs>

**Schnellaktion (Benutzerdefinierte Schaltflächen)** ermöglicht es Ihnen, eine Liste von Einzelaktionen aus allen verfügbaren [Schnellaktionen](../widgets/quick-action.md#custom-buttons) hinzuzufügen. Diese Aktionen können einer oder mehreren Widget-Schaltflächen auf dem Kartenbildschirm zugewiesen werden. Benutzerdefinierte Schaltflächen bieten schnellen Zugriff auf häufig verwendete Aktionen.

### Standard-Schaltflächen {#default-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget-Seite](@site/static/img/widgets/conf_screen_buttons_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget-Seite](@site/static/img/widgets/conf_screen_buttons_3_ios.png)

</TabItem>

</Tabs>

1. **Standard-Schaltflächen** ermöglichen es Ihnen anzupassen, welche voreingestellten Kartenschaltflächen auf dem Kartenbildschirm sichtbar sind. Sie können wählen, die folgenden Schaltflächen aus- oder einzublenden:

    - [3D-Modus](../widgets/map-buttons.md#3d-mode). Für iOS ist die Schaltfläche immer verfügbar. Für Android erscheint sie in der Liste und ist zur Einstellung verfügbar, wenn die Karten-Rendering-Engine [Version 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) ausgewählt ist.

    - [Kompass](../widgets/map-buttons.md#display-options). Zeigt an, wie die Karte auf dem Gerät ausgerichtet ist.  
    3 Ansichten: *Immer sichtbar*, *Immer ausgeblendet*, *Sichtbar, wenn Karte gedreht wird*.

    - [Karte konfigurieren](../map/configure-map-menu.md). Zugriff auf Optionen zur Änderung des Kartenstils, der Ebenen und zusätzlicher Einstellungen.

    - [Menü](../widgets/map-buttons.md#main-menu). Öffnet das Hauptmenü der Anwendung für den Zugriff auf alle Funktionen.

    - [Mein Standort](../widgets/map-buttons.md#my-location-and-zoom). Zentriert die Karte auf Ihre aktuelle Position.

    - [Navigation](../widgets/map-buttons.md#directions). Unverzichtbar für die Routenplanung und den Start der Navigation.

    - [Suche](../widgets/map-buttons.md#search). Öffnet das Suchwerkzeug zum Finden von Orten.

    - [Vergrößern / Verkleinern](../widgets/map-buttons.md#my-location-and-zoom). Passt die Zoomstufe der Karte an, um mehr oder weniger Details anzuzeigen.

2. Das **Drei-Punkte-Menü** auf dem Bildschirm der Standard-Schaltflächen enthält Aktionen wie:

    - *Auf Standard zurücksetzen*. Ermöglicht es Ihnen, die Schaltflächeneinstellungen auf ihre ursprüngliche Erscheinung zurückzusetzen.
    - *Von einem anderen Profil kopieren*. Wählen Sie aus der angebotenen Liste aus, von welchem Profil Sie die Schaltflächeneinstellungen kopieren möchten.

3. **Das Erscheinungsbild der Standard-Schaltfläche** (*Nur Android*) bietet eine Vielzahl von Anpassungsoptionen für diesen Schaltflächentyp. Um das Erscheinungsbild einer Schaltfläche zu ändern, tippen Sie auf die gewünschte Schaltfläche in der Liste und wählen Sie die Option [Erscheinungsbild](#button-appearance).


### Erscheinungsbild der Schaltfläche {#button-appearance}

<InfoAndroidOnly/>

![Erscheinungsbild der Schaltfläche](@site/static/img/widgets/button_appearance_settings_andr.png)

Die Funktion *Erscheinungsbild der Schaltfläche* ermöglicht es Ihnen, das Aussehen von Schaltflächen auf Ihrer Kartenoberfläche vollständig anzupassen. Diese Anpassungsoptionen sind sowohl für *Schnellaktion (Benutzerdefinierte Schaltflächen)* als auch für *Standard-Schaltflächen* verfügbar und bieten eine umfassende Kontrolle über das Erscheinungsbild der Kartenoberfläche und ermöglichen präzise Anpassungen des Schaltflächendesigns.

***Anpassungsoptionen***:

- **Symbol**. Wählen Sie aus einer Liste von Symbolen, die bereits hinzugefügte Aktionen repräsentieren, um Funktionen auf einen Blick zu erkennen.
- **Eckenradius**. Passen Sie diese Einstellung an, um die Form der Schaltfläche zu ändern, von scharfen, quadratischen Ecken bis hin zu glatten, abgerundeten Kanten.
- **Größe**. Wählen Sie die Schaltflächengröße, die am besten zu Ihrem Bildschirm passt und bei Bedarf hervorsticht. Für *Standard-Schaltflächen* sind die Größen voreingestellt und können nicht angepasst werden.
- **Hintergrunddeckkraft**. Steuern Sie die Sichtbarkeit des Schaltflächenhintergrunds. Sie können ihn vollständig sichtbar oder teilweise transparent einstellen oder nur den Rahmenschatten und das Symbol anzeigen.


## Sonstiges {#other}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other"/>*

![Widget-Seite](@site/static/img/widgets/conf_screen_other_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Sonstiges*

![Widget-Seite](@site/static/img/widgets/conf_screen_other_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="display_position"/> / <Translate ios="true" ids="position_on_map"/>](#display-position-location-position-on-screen). [⬇](#display-position-location-position-on-screen)
- [Entfernung durch Tippen](../widgets/radius-ruler.md#distance-by-tap). Gibt die Möglichkeit, die Entfernung von Ihrer Position zum ausgewählten Punkt zu messen.
- [Tachometer](../widgets/info-widgets.md#speedometer). Zeigt die aktuelle Geschwindigkeit basierend auf GPS-Daten und die Geschwindigkeitsbegrenzung basierend auf [OpenStreetMap-Daten](https://wiki.openstreetmap.org/wiki/Key:maxspeed) an. Die angezeigten Daten hängen auch von der Einstellung [Geschwindigkeitsbegrenzungstoleranz](../navigation/guidance/voice-navigation.md#speed-limit) von OsmAnd ab.


### Anzeigeposition (Standortposition auf dem Bildschirm) {#display-position-location-position-on-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widget-Seite](@site/static/img/widgets/conf_screen_display_position_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Widget-Seite](@site/static/img/widgets/conf_screen_display_position_ios.png)

</TabItem>

</Tabs>

> *Standortposition auf dem Bildschirm* ist der Name dieser Einstellung in der iOS-Version von OsmAnd.  

Ermöglicht es Ihnen, die Platzierung des Cursors für *[Mein Standort](../map/interact-with-map.md#my-location-and-zoom)* auf der OsmAnd-Karte festzulegen. Es stehen drei Optionen zur Verfügung:  

- **<Translate android="true" ids="position_on_map_center"/>**. Der Cursor wird immer in der Mitte des Bildschirms positioniert.
- **<Translate android="true" ids="position_on_map_bottom"/>**. *Mein Standort* wird etwas unterhalb der Bildschirmmitte platziert. Dieser Modus ermöglicht es Ihnen, mehr Karteninformationen vor Ihrer Bewegung zu sehen, was während der Navigation nützlich ist.
- **<Translate android="true" ids="shared_string_automatic"/>**. Platziert *Mein Standort* abhängig von der *[Kartenausrichtung](../map/interact-with-map.md#map-orientation-modes)* (*Unten* - für Bewegungsrichtung, *Mitte* - für alle anderen).


## Aktionen {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_actions"/>*  

![Widget-Seite](@site/static/img/widgets/widget_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Beliebige Leiste*

![Widget-Seite](@site/static/img/widgets/widget_actions_ios.png)  

</TabItem>

</Tabs>

Der Zugriff auf zusätzliche Aktionen im Bildschirm "Konfigurieren" erfolgt:

- *Android*. Befindet sich im Bildschirm "Konfigurieren" am unteren Rand des Bildschirms im Abschnitt *Aktionen*: *Menü → Bildschirm konfigurieren → Aktionen*.
- *Android / iOS*. Befindet sich auf den Bildschirmen jeder Leiste im *Drei-Punkte-Menü* in der oberen rechten Ecke des Bildschirms.

Verfügbare Aktionen:

- **Auf Standard zurücksetzen**. Mit dieser Funktion können Sie alle Einstellungen auf die Standardwerte zurücksetzen, wenn Sie von vorne beginnen möchten oder nur die voreingestellten Werte beim Start von OsmAnd verwenden möchten.
- **Von einem anderen Profil kopieren**. Mit dieser Funktion können Sie schnell Einstellungen aus einem anderen Profil importieren, die gewünschten aus der Liste auswählen und kopieren.


## Profil wechseln {#switch-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menü Bildschirm konfigurieren](@site/static/img/widgets/configure_screen_switch_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menü Bildschirm konfigurieren](@site/static/img/widgets/configure_screen_switch_ios.png)

</TabItem>

</Tabs>

- Bei **Android**-Geräten können Sie die Profile oben auf dem Startbildschirm von "Bildschirm konfigurieren" über die verfügbaren Profilsymbole ändern.  
- Wenn Sie ein **iOS**-Gerät verwenden, tippen Sie auf das Profilsymbol in der oberen Ecke des Startbildschirms von "Bildschirm konfigurieren" und wählen Sie das gewünschte Profil aus der Liste aus, um es zu aktivieren.  

**Hinweis**: Die Option *Profil wechseln* zeigt nicht alle vorhandenen Profile an, sondern nur diejenigen, die im Einstellungsmenü *eingeschaltet* wurden.


## Verwandte Artikel {#related-articles}

- [Kartenschaltflächen](./map-buttons.md)
- [Informations-Widgets](./info-widgets.md)
- [Navigations-Widgets](./nav-widgets.md)
- [Radiuslineal und Lineal](./radius-ruler.md)
- [Markierungs-Widgets](./markers.md)
- [Schnellaktion](./quick-action.md)