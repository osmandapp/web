---
source-hash: c714e52890d474392987e42babe6eed754ad1dbbaa5e4c8fe091171e272426fe
sidebar_position: 5
title:  Track-Darstellung
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

Die Funktion **Track-Darstellung** ermöglicht es Benutzern, die Anzeige von Tracks auf der Karte anzupassen. Dies umfasst die Anpassung von Farbe, Breite, Richtungsanzeigen und anderen visuellen Elementen. Das Anpassen der Track-Darstellung hilft, mehrere Tracks zu unterscheiden, bestimmte Routen hervorzuheben und die Lesbarkeit der Karte zu verbessern.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Track Appearance overview Android](@site/static/img/map/track-appear-and-1.png)  ![Track menu Appearance Android](@site/static/img/map/track_appearence_1_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Appearance iOS](@site/static/img/map/track_appearence_1_ios.png) ![Track menu Appearance iOS](@site/static/img/map/track_appearence_2_ios.png)  

</TabItem>

</Tabs>


## Zugriff auf das Menü {#access-to-the-menu}

Sie können die Track-Darstellung mit einer der folgenden Methoden ändern:

- **Aus Meine Orte**. Öffnen Sie *Menü → Meine Orte → Tracks*, wählen Sie einen Track aus, tippen Sie auf das *Darstellungs-Symbol* im [Track-Kontextmenü](../../map/tracks/track-context-menu.md#overview).
- **Von der Karte**. Tippen Sie direkt auf einen Track auf der Karte, dann tippen Sie auf das *Darstellungs-Symbol* im Abschnitt *Übersicht*.
- **Aus der Track-Aufzeichnung**. Ändern Sie die Darstellung des aktuell aufgezeichneten Tracks über das [Kontextmenü der Track-Aufzeichnung](../../plugins/trip-recording.md#сurrent-track-recording).  
- **Aus dem Menü Karte konfigurieren**. Gehen Sie zu *<Translate android="true" ids="shared_string_menu,configure_map,show_gpx"/> →* **&#8942;** *→ <Translate android="true" ids="change_appearance"/>* für die angezeigten Tracks.


## Track-Darstellungseinstellungen {#track-appearance-settings}

### Farbe {#color}

:::tip purchases
Einige Einstellungen können Sie nur mit *OsmAnd Pro* verwenden. <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">Android</a> und <a href="https://osmand.net/docs/user/purchases/ios#free-and-paid-features">iOS</a> Kostenlose und kostenpflichtige Funktionen.
:::

![Appearance](@site/static/img/map/appearance_color_andr.png)

Sie können die Track-Farbe manuell einstellen oder die **farbbasierte Datenvisualisierung** (z. B. Geschwindigkeit, Höhe, Steigung) verwenden. Wenn einem Track bestimmte Daten fehlen, zeigt OsmAnd fehlende Abschnitte in Grau an.

**Verfügbare Farboptionen:**

- **Kostenlose Einstellungen**: *<Translate android="true" ids="track_coloring_solid"/> Farbe*, *<Translate android="true" ids="shared_string_speed"/>* (falls aufgezeichnet) und *<Translate android="true" ids="altitude"/>* (falls aufgezeichnet).

    ![Track menu Appearance Track color Android](@site/static/img/map/track_appearance_menu_track_color_android.png)  ![Appearance Track color Android](@site/static/img/map/track_appearance_menu_track_color_ios-2.png)  

- [Pro-Funktion](../../purchases/index.md)): *<Translate android="true" ids="shared_string_slope"/>*, *<Translate android="true" ids="routeInfo_roadClass_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_smoothness_name"/>*, *<Translate android="true" ids="routeInfo_winter_ice_road_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_horse_scale_name"/>*.  

Weitere Details zur Anpassung der Routenliniendarstellung finden Sie unter [Kartenbildschirm während der Navigation](../../navigation/guidance/map-during-navigation.md#color) und zur Auswahl und Erstellung einer benutzerdefinierten Farbe unter [Farbschemata](../../personal/color-palette-schemes.md#routes).


### Breite {#width}

![Track menu Appearance Track Thickness Android](@site/static/img/map/track_appearance_menu_track_thickness_android.png)   ![Track Appearance](@site/static/img/map/track_appearance_width_andr.png)  

Sie können die Darstellung des Tracks in mehreren Menüs der Anwendung anpassen:

- [*Track → Darstellung*](../../personal/tracks/manage-tracks.md#track-folder).
- [*Navigationseinstellungen → Routenlinie anpassen*](../../navigation/guidance/navigation-settings.md#customize-route-line).
- [*Meine Orte → Tracks-Tab → beliebiger Ordner → Standarddarstellung*](../../personal/tracks/manage-tracks.md#track-folder).

Passen Sie die Track-Breite an, um die Sichtbarkeit auf der Karte zu verbessern.

- **Voreingestellte Optionen**: **Dünn, Mittel** und **Fett**.

- **Benutzerdefinierte Breite**: Einstellbar von 1 bis 24 px mit einem Schieberegler.

- **Profilbasierte Breite**: Kann über *Navigationseinstellungen → [Routenlinie anpassen](../../navigation/guidance/navigation-settings.md#customize-route-line)* eingestellt werden.


### Intervall teilen {#split-interval}

![Track menu Appearance Split interval](@site/static/img/map/track_appearance_menu_split_interval_android.png)  ![Split interval](@site/static/img/map/track_appearance_menu_split_interval_ios.png)  

Wählen Sie, ob das Intervall auf dem Track **nach Entfernung oder nach Zeit** geteilt werden soll.

### Richtungspfeile {#direction-arrows}

![Track menu Appearance direction arrows Android](@site/static/img/map/track_appearance_menu_direction_arrows_android.png)  

Fügt **Pfeilmarkierungen** entlang des Tracks hinzu, um die Bewegungsrichtung anzuzeigen.

### Start- und Zielsymbole {#start-and-finish-icons}

![Track menu Appearance start and finish icons Android](@site/static/img/map/track_appearance_menu_sf_icons_android.png)  

Ermöglicht die Auswahl, ob die **Start- und Zielsymbole** für Track-Segmente angezeigt werden sollen.

### Lücken schließen {#join-gaps}

Verbindet **Track-Segmente**, die aufgrund von GPS-Verlust oder einer Aufzeichnungspause unterbrochen wurden. Die Funktion **<Translate android="true" ids="join_segments"/>** (*Android*) oder **<Translate ios="true" ids="gpx_join_gaps"/>** (*iOS*) ermöglicht es Ihnen, diese Lücken im ausgewählten GPX-Track mit geraden Linien zu verbinden.

### Auf Original zurücksetzen {#reset-to-original}

Stellt alle **Track-Darstellungseinstellungen** auf ihre Standardwerte zurück.


## 3D-Track {#3d-track}

:::info Paid feature
**3D-Track** ist eine **OsmAnd Pro** kostenpflichtige Funktion für [iOS](../../purchases/ios.md#pro-features) und [Android](../../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track menu Appearance 3D visualisation](@site/static/img/map/3d_track_appearance_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Appearance 3D visualisation](@site/static/img/map/3d_track_appearance_ios.png)

</TabItem>

</Tabs>

Die Funktion **3D-Track** erzeugt eine dreidimensionale Visualisierung, indem sie Höhendaten in standardmäßige 2D-Tracks integriert. Diese Funktionalität erstellt eine tiefenverbesserte Darstellung, die eine präzise Analyse des Tracks in Bezug auf das Gelände ermöglicht. Durch die Einbeziehung von Höhendetails bietet der 3D-Track eine umfassendere Ansicht der Topographie und des geografischen Kontexts der Route.

### 3D-Track-Einstellungen {#3d-track-settings}

**Wandhöhe**  
Sie können einen 3D-Track nach Höhe und anderen verfügbaren Daten innerhalb des Tracks oder nach fester Höhe visualisieren.

- **<Translate android="true" ids="visualized_by"/>**: &nbsp;*Höhe*, &nbsp;*Geschwindigkeit*, &nbsp;*Feste Höhe*. 3D-Sensordaten: &nbsp;*Herzfrequenz*, &nbsp;*Fahrradtrittfrequenz*, &nbsp;*Fahrradleistung*, &nbsp;*Temperatur*, &nbsp;*Fahrradgeschwindigkeit*.

- **<Translate android="true" ids="vertical_exaggeration"/>**. Wenn nach *Höhe* oder *Geschwindigkeit* visualisiert, können Sie 3D-Daten skalieren, um eine prominentere Visualisierung für den 3D-Track im Bereich von *Keine* bis *x3.0* zu erhalten.

- **<Translate android="true" ids="wall_height"/>**. Wenn nach *Fester Höhe* visualisiert, stellen Sie die feste Höhe für den 3D-Track ein, indem Sie seine Höhe auf der Karte im Bereich von *Keine* bis *2000 m* definieren.

- Sie können es mit [3D-Relief](../../plugins/topography.md#3d-relief) kombinieren. Wenn die Quelle der 3D-Daten nicht die Höhe ist, ist die 3D-Darstellung eine Kombination aus Reliefhöhe und den ausgewählten Daten, wie Geschwindigkeit oder Herzfrequenz.

**<Translate android="true" ids="wall_color"/>**  
Passt die **3D-Track-Farbe** mithilfe von Verläufen oder datenbasierter Visualisierung an.  
Optionen umfassen: *Keine*, &nbsp;*Einfarbig*, &nbsp;*Absteigender Verlauf*, &nbsp;*Aufsteigender Verlauf*, &nbsp;*Höhe*, &nbsp;*Steigung*, &nbsp;*Geschwindigkeit*.

**<Translate android="true" ids="track_line"/>**  
Fügt eine [hervorgehobene Linie](#color) oben oder unten am 3D-Track hinzu.  
Optionen umfassen: *Oben*, &nbsp;*Unten*, &nbsp;*Oben und unten*.

> **HINWEIS**: *Die **Android-Version** der App erfordert, dass die Karten-Rendering-Engine [Version 2 (OpenGL)](../../personal/global-settings.md#map-rendering-engine) aktiviert ist, um die 3D-Track-Visualisierung nutzen zu können.*


### Anwendungsfälle {#use-cases}

Die 3D-Track-Funktion ist für Aktivitäten wie Paragliding sehr vorteilhaft, da die Visualisierung Ihrer Flugbahn tiefere Einblicke bieten kann. Durch die Darstellung des Tracks in 3D können Sie Funktionen wie **Wandhöhe** und **Wandfarbe** nutzen, um wertvolle visuelle Informationen für die Analyse zu extrahieren.

1. **Visualisierung nach Geschwindigkeit mit 3D**.  
    Ein häufiger Anwendungsfall ist die Verwendung von 3D-Tracks zur Visualisierung von Geschwindigkeitsvariationen. Dies ermöglicht es Ihnen, bestimmte Abschnitte des Tracks zu identifizieren, in denen Sie langsamer oder schneller wurden.  

    Mit der Wandfarbe basierend auf der Steigung können Sie beobachten, wie das Gelände, insbesondere Hügel und Steigungen, Ihre Geschwindigkeit beeinflusst hat. Diese Kombination aus Geschwindigkeits- und Steigungsvisualisierung bietet ein detailliertes Verständnis der Leistung während der gesamten Aktivität.

2. **Visualisierung nach Herzsensor mit 3D-Relief**.  
    Eine weitere aufschlussreiche Anwendung ist die Kombination von Herzfrequenzsensordaten mit 3D-Reliefkarten. Dies ermöglicht es Ihnen, Herzfrequenzschwankungen direkt auf das Gelände abzubilden, was Ihnen eine umfassende Ansicht darüber gibt, wie Höhenänderungen Ihre körperliche Anstrengung beeinflusst haben könnten.  

    Die 3D-Relief-Funktion, die die Höhe übertreibt, funktioniert unabhängig von der 3D-Track-Ansicht. Zwei vertikale Übertreibungsparameter können angepasst werden, um die Korrelation zwischen Herzfrequenz und Geländeerhebung besser zu verstehen.

3. **Visualisierung von Trackhöhe und Steigungsfarblinie auf einer flachen Erdansicht.**  
    Bei der Visualisierung von Höhendaten wird empfohlen, eine flache Erdansicht zu verwenden, um Probleme wie GPS-Fehler zu vermeiden, die dazu führen könnten, dass Abschnitte des Tracks unterirdisch erscheinen.  

    In diesem Szenario können Steigungsänderungen separat entlang der Tracklinie visualisiert werden, während die Wandfarbe zur Darstellung der Höhe verwendet wird. Diese Methode stellt sicher, dass Sie auch bei potenziellen Datenungenauigkeiten eine klare und genaue Visualisierung von Steigung und Höhe erhalten.

## Darstellung für mehrere Tracks ändern {#change-appearance-for-multiple-tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Appearance Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_1_andr.png)  ![Appearance Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Change Appearance](@site/static/img/map/tracks_change_appear_3_ios.png)  ![Change Appearance](@site/static/img/map/tracks_change_appear_2_ios.png)

</TabItem>

</Tabs>  

Der Tab [Tracks](../../personal/tracks/manage-tracks.md) zeigt automatisch alle jemals aufgezeichneten, erstellten oder importierten Tracks an. Sie sind nach Ordnern organisiert oder werden als Liste darunter angezeigt.  

Ändern Sie die Darstellung mehrerer Tracks in *Meine Orte → Tracks*:

- **Standarddarstellung ändern** - Wendet Einstellungen auf alle Tracks in einem [Ordner](../../personal/tracks/manage-tracks.md#track-folder) an.
- **Auf Original zurücksetzen** - Stellt individuelle Track-Einstellungen wieder her.

- [Auswahlmodus](../../personal/tracks/manage-tracks.md#selection-mode) - Ändert die Darstellung bestimmter Tracks im ausgewählten Ordner oder die gesamte Liste im Tracks-Tab.
    - Tippen Sie auf das *Drei-Punkte-Menü* in der oberen rechten Ecke des Tracks-Tabs und tippen Sie auf *Auswählen*.
    - Tippen Sie dann auf das *Drei-Punkte-Menü* oben auf dem Bildschirm und wählen Sie *Darstellung ändern*.  

Optionen zur Massenanpassung der Darstellung:

- **Richtungspfeile** - Fügt [Bewegungsindikatoren](#direction-arrows) hinzu.  
    Zustände: *Unverändert*, &nbsp;*Original*, &nbsp;*An*, &nbsp;*Aus*.

- **Start- und Zielsymbole anzeigen** - [Zeigt Markierungen](#start-and-finish-icons) für Start- und Endpunkte des Tracks an.  
    Zustände: *Unverändert*, &nbsp;*Original*, &nbsp;*An*, &nbsp;*Aus*.

- **Farbe** – Manuelle oder datenbasierte [Färbung](#color) anwenden.

- **Breite** – Passen Sie die [Tracklinienbreite](#width) mit Voreinstellungen oder manuell an.

- **Intervall teilen** – [Intervall](#split-interval) für Entfernungs-/Zeitmarkierungen festlegen.  
    Zustände: *Unverändert*, &nbsp;*Original*, &nbsp;*Auswählen*: *Zeit* oder *Entfernung*.

Original und unverändert:

- **Original** - Stellt die ursprünglichen Parameter aus der Track-Datei wieder her.

- **Unverändert** - Behält die aktuellen Einstellungen während der Bearbeitungssitzung bei.


## Track-Farben in GPX-Dateien {#track-colors-in-gpx-files}

OsmAnd unterstützt **benutzerdefinierte Track-Farben** in GPX-Dateien mithilfe des `<osmand:color>`-Tags innerhalb des `<extensions>`-Abschnitts eines `<trk>`-Elements. Dies ermöglicht es Benutzern, Farben für einzelne Tracks zu definieren, wodurch die visuelle Unterscheidung verbessert wird, wenn mehrere Tracks auf der Karte angezeigt werden.

Um eine Farbe für einen Track anzugeben, verwenden Sie das folgende Format:  

```xml
<trk>
  <name>Beispiel-Track</name>
  <extensions>
    <osmand:color>#FF0000</osmand:color>
  </extensions>
</trk>
```

- Das `<osmand:color>`-Tag akzeptiert **hexadezimale Farbcodes** (z. B. `#FF0000` für Rot).
- Wenn mehrere Tracks in einer GPX-Datei vorhanden sind, kann jeder Track sein eigenes `<osmand:color>`-Tag haben.


**Verhalten in OsmAnd:**

1. **Standard-Farbzuweisung**:  

    - Wenn ein **GPX-Track als einzelner Track importiert wird** (Option ***Als ein Track importieren***), wird dem gesamten Track die **Standard-GPX-Farbe** (Rot) zugewiesen.  
    - In OsmAnd **4.9.10 und höher** wurde dieses Problem behoben – individuelle Track-Farben bleiben beim Import nun erhalten.

2. **Einfarbige Anzeige für zusammengeführte Tracks:**  

    - Wenn Tracks mit ***Segmente zusammenführen*** **zusammengeführt** werden, wird der resultierende Track als **ein durchgehender Track mit einem einzigen Segment** behandelt.
    - Eine mehrfarbige Darstellung wird für zusammengeführte Tracks **nicht unterstützt**.
    - Der zusammengeführte Track wird mit der **Haupt-GPX-Farbe** (Standard: Rot) angezeigt, auch wenn einzelne Track-Segmente ursprünglich unterschiedliche Farben hatten.

3. **Priorität der Darstellungseinstellungen:**  

    - OsmAnd unterstützt derzeit **Farb- und Breiteeinstellungen nur für den gesamten Track**.
    - Diese Darstellungseinstellungen werden in den **obersten GPX-Erweiterungen** gespeichert.
    - Wenn eine Farbe oder Breite **auf oberster Ebene festgelegt ist** (entweder in der GPX-Datei oder manuell in OsmAnd), hat diese Einstellung Vorrang vor Farben, die einzelnen Track-Segmenten zugewiesen sind.

**Problemumgehung für mehrfarbige Tracks:**

- Um **individuelle Farben für mehrere Tracks** zu erhalten, **importieren Sie Tracks separat**, anstatt sie zusammenzuführen.

- Passen Sie die Track-Farben manuell in den **Track-Darstellungseinstellungen** an:

  - Öffnen Sie den Track in OsmAnd.
  - Tippen Sie auf den Track, um das **Kontextmenü** zu öffnen.
  - Wählen Sie **Darstellung**.
  - Wählen Sie die bevorzugte Farbe.

- Dies stellt sicher, dass jeder Track seine **vorgesehene Farbdarstellung** behält, auch wenn die GPX-Datei ursprünglich mehrere Segmente mit unterschiedlichen Farben enthielt.


## Verwandte Artikel {#related-articles}

- [Karten-Kontextmenü](../map-context-menu.md)
- [Karte konfigurieren](../configure-map-menu.md)
- [Punkte auf der Karte](../point-layers-on-map.md)
- [Tracks](../tracks/index.md)
- [Tracks-Kontextmenü](../tracks/track-context-menu.md)
- [Reiseaufzeichnung](../../plugins/trip-recording.md)

> *Zuletzt aktualisiert: Februar 2025*