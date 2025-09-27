---
source-hash: 14cc910311b8184de4592823da11d7e1fc80a1c137f871fb88891d55a65ae840
sidebar_position: 5
title:  Darstellung von Tracks
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

Die Funktion **Darstellung von Tracks** ermöglicht es Benutzern, die Anzeige von Tracks auf der Karte anzupassen. Dies umfasst die Anpassung von Farbe, Breite, Richtungspfeilen und anderen visuellen Elementen. Die Anpassung der Track-Darstellung hilft dabei, mehrere Tracks zu unterscheiden, bestimmte Routen hervorzuheben und die Lesbarkeit der Karte zu verbessern.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Übersicht Track-Darstellung Android](@site/static/img/map/track-appear-and-1.png)  ![Track-Menü Darstellung Android](@site/static/img/map/track_appearence_1_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Track-Menü Darstellung iOS](@site/static/img/map/track_appearence_1_ios.png) ![Track-Menü Darstellung iOS](@site/static/img/map/track_appearence_2_ios.png)  

</TabItem>

</Tabs>


## Zugriff auf das Menü {#access-to-the-menu}

Sie können die Darstellung von Tracks mit einer der folgenden Methoden ändern:

- **Über "Meine Orte"**. Öffnen Sie *Menü → Meine Orte → Tracks*, wählen Sie einen Track aus und tippen Sie auf das *Symbol "Darstellung"* im [Track-Kontextmenü](../../map/tracks/track-context-menu.md#overview).
- **Von der Karte**. Tippen Sie direkt auf einen Track auf der Karte und dann auf das *Symbol "Darstellung"* im Bereich *Übersicht*.
- **Während der Track-Aufzeichnung**. Ändern Sie die Darstellung des aktuell aufgezeichneten Tracks über das [Kontextmenü der Track-Aufzeichnung](../../plugins/trip-recording.md#current-track-recording).  
- **Über das Menü "Karte konfigurieren"**. Gehen Sie zu *<Translate android="true" ids="shared_string_menu,configure_map,show_gpx"/> →* **&#8942;** *→ <Translate android="true" ids="change_appearance"/>* für die angezeigten Tracks.


## Einstellungen zur Track-Darstellung {#track-appearance-settings}

### Farbe {#color}

:::tip Käufe
Einige Einstellungen können nur mit *OsmAnd Pro* verwendet werden. Kostenlose und kostenpflichtige Funktionen für <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">Android</a> und <a href="https://osmand.net/docs/user/purchases/ios#free-and-paid-features">iOS</a>.
:::

![Darstellung](@site/static/img/map/appearance_color_andr.png)

Sie können die Track-Farbe manuell einstellen oder eine **farbbasierte Datenvisualisierung** verwenden (z. B. nach Geschwindigkeit, Höhe, Steigung). Wenn einem Track bestimmte Daten fehlen, zeigt OsmAnd die fehlenden Abschnitte in Grau an.

**Verfügbare Farboptionen:**

- **Kostenlose Einstellungen**: *<Translate android="true" ids="track_coloring_solid"/> Farbe*, *<Translate android="true" ids="shared_string_speed"/>* (falls aufgezeichnet) und *<Translate android="true" ids="altitude"/>* (falls aufgezeichnet).

    ![Track-Menü Darstellung Track-Farbe Android](@site/static/img/map/track_appearance_menu_track_color_android.png)  ![Darstellung Track-Farbe Android](@site/static/img/map/track_appearance_menu_track_color_ios-2.png)  

- [Pro-Funktion](../../purchases/index.md)): *<Translate android="true" ids="shared_string_slope"/>*, *<Translate android="true" ids="routeInfo_roadClass_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_smoothness_name"/>*, *<Translate android="true" ids="routeInfo_winter_ice_road_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_horse_scale_name"/>*.  

Weitere Details zur Anpassung der Routenliniendarstellung finden Sie unter [Kartenbildschirm während der Navigation](../../navigation/guidance/map-during-navigation.md#color) und zur Auswahl und Erstellung einer benutzerdefinierten Farbe unter [Farbschemata](../../personal/color-palette-schemes.md#routes).


### Breite {#width}

![Track-Menü Darstellung Track-Dicke Android](@site/static/img/map/track_appearance_menu_track_thickness_android.png)   ![Track-Darstellung](@site/static/img/map/track_appearance_width_andr.png)  

Sie können die Darstellung des Tracks in mehreren Menüs der Anwendung anpassen:

- [*Track → Darstellung*](../../personal/tracks/manage-tracks.md#track-folder).
- [*Navigationseinstellungen → Routenlinie anpassen*](../../navigation/guidance/navigation-settings.md#customize-route-line).
- [*Meine Orte → Tab "Tracks" → beliebiger Ordner → Standarddarstellung*](../../personal/tracks/manage-tracks.md#track-folder).

Passen Sie die Track-Breite an, um die Sichtbarkeit auf der Karte zu verbessern.

- **Voreingestellte Optionen**: **Dünn, Mittel** und **Fett**.

- **Benutzerdefinierte Breite**: Einstellbar von 1 bis 24 px mit einem Schieberegler.

- **Profilbasierte Breite**: Kann über *Navigationseinstellungen → [Routenlinie anpassen](../../navigation/guidance/navigation-settings.md#customize-route-line)* eingestellt werden.


### Teilungsintervall {#split-interval}

![Track-Menü Darstellung Teilungsintervall](@site/static/img/map/track_appearance_menu_split_interval_android.png)  ![Teilungsintervall](@site/static/img/map/track_appearance_menu_split_interval_ios.png)  

Wählen Sie, ob das Intervall auf dem Track **nach Entfernung oder nach Zeit** aufgeteilt werden soll.

### Richtungspfeile {#direction-arrows}

![Track-Menü Darstellung Richtungspfeile Android](@site/static/img/map/track_appearance_menu_direction_arrows_android.png)  

Fügt **Pfeilmarkierungen** entlang des Tracks hinzu, um die Bewegungsrichtung anzuzeigen.

### Start- und Ziel-Symbole {#start-and-finish-icons}

![Track-Menü Darstellung Start- und Ziel-Symbole Android](@site/static/img/map/track_appearance_menu_sf_icons_android.png)  

Ermöglicht die Auswahl, ob die **Start- und Ziel-Symbole** für Track-Segmente angezeigt werden sollen.

### Lücken schließen {#join-gaps}

Verbindet **Track-Segmente**, die aufgrund von GPS-Verlust oder einer Aufzeichnungspause unterbrochen wurden. Die Funktion **<Translate android="true" ids="join_segments"/>** (*Android*) oder **<Translate ios="true" ids="gpx_join_gaps"/>** (*iOS*) ermöglicht es Ihnen, diese Lücken im ausgewählten GPX-Track mit geraden Linien zu verbinden.

### Auf Original zurücksetzen {#reset-to-original}

Stellt alle **Einstellungen zur Track-Darstellung** auf ihre Standardwerte zurück.


## 3D-Track {#3d-track}

:::info Kostenpflichtige Funktion
**3D-Track** ist eine kostenpflichtige **OsmAnd Pro**-Funktion für [iOS](../../purchases/ios.md#pro-features) und [Android](../../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track-Menü Darstellung 3D-Visualisierung](@site/static/img/map/3d_track_appearance_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track-Menü Darstellung 3D-Visualisierung](@site/static/img/map/3d_track_appearance_ios.png)

</TabItem>

</Tabs>

Die **3D-Track**-Funktion erzeugt eine dreidimensionale Visualisierung durch die Integration von Höhendaten in standardmäßige 2D-Tracks. Diese Funktionalität schafft eine tiefen-erweiterte Darstellung, die eine präzise Analyse des Tracks in Bezug auf das Gelände ermöglicht. Durch die Einbeziehung von Höhendetails bietet der 3D-Track eine umfassendere Ansicht der Topografie und des geografischen Kontexts der Route.

### 3D-Track-Einstellungen {#3d-track-settings}

**Wandhöhe**  
Sie können einen 3D-Track nach Höhe und anderen verfügbaren Daten innerhalb des Tracks oder nach einer festen Höhe visualisieren.

- **<Translate android="true" ids="visualized_by"/>**: &nbsp;*Höhe*, &nbsp;*Geschwindigkeit*, &nbsp;*Feste Höhe*. 3D-Sensordaten: &nbsp;*Herzfrequenz*, &nbsp;*Trittfrequenz (Fahrrad)*, &nbsp;*Leistung (Fahrrad)*, &nbsp;*Temperatur*, &nbsp;*Geschwindigkeit (Fahrrad)*.

- **<Translate android="true" ids="vertical_exaggeration"/>**. Wenn nach *Höhe* oder *Geschwindigkeit* visualisiert wird, können Sie 3D-Daten skalieren, um eine deutlichere Visualisierung für den 3D-Track im Bereich von *Keine* bis *x3.0* zu erhalten.

- **<Translate android="true" ids="wall_height"/>**. Wenn nach *Fester Höhe* visualisiert wird, stellen Sie die feste Höhe für den 3D-Track ein, indem Sie seine Höhe auf der Karte im Bereich von *Keine* bis *2000 m* definieren.

- Sie können dies mit [3D-Relief](../../plugins/topography.md#3d-relief) kombinieren. Wenn die Quelle der 3D-Daten nicht die Höhe ist, ist die 3D-Darstellung eine Kombination aus der Reliefhöhe und den ausgewählten Daten, wie z. B. Geschwindigkeit oder Herzfrequenz.

**<Translate android="true" ids="wall_color"/>**  
Passt die **Farbe des 3D-Tracks** mithilfe von Farbverläufen oder datenbasierter Visualisierung an.  
Optionen umfassen: *Keine*, &nbsp;*Einfarbig*, &nbsp;*Absteigender Verlauf*, &nbsp;*Aufsteigender Verlauf*, &nbsp;*Höhe*, &nbsp;*Steigung*, &nbsp;*Geschwindigkeit*.

**<Translate android="true" ids="track_line"/>**  
Fügt eine [hervorgehobene Linie](#color) oben oder unten am 3D-Track hinzu.  
Optionen umfassen: *Oben*, &nbsp;*Unten*, &nbsp;*Oben und unten*.

> **HINWEIS**: *Die **Android-Version** der App erfordert, dass die Karten-Rendering-Engine [Version 2 (OpenGL)](../../personal/global-settings.md#map-rendering-engine) aktiviert ist, um die 3D-Track-Visualisierung zu verwenden.*


### Anwendungsfälle {#use-cases}

Die 3D-Track-Funktion ist besonders nützlich für Aktivitäten wie Paragliding, bei denen die Visualisierung Ihrer Flugbahn tiefere Einblicke bieten kann. Durch die Darstellung des Tracks in 3D können Sie Funktionen wie **Wandhöhe** und **Wandfarbe** nutzen, um wertvolle visuelle Informationen für die Analyse zu gewinnen.

1. **Visualisierung nach Geschwindigkeit mit 3D**.  
    Ein häufiger Anwendungsfall ist die Nutzung von 3D-Tracks zur Visualisierung von Geschwindigkeitsänderungen. Dies ermöglicht es Ihnen, bestimmte Abschnitte des Tracks zu identifizieren, in denen Sie langsamer oder schneller wurden.  

    Mit der Wandfarbe basierend auf der Steigung können Sie beobachten, wie das Gelände, insbesondere Hügel und Anstiege, Ihre Geschwindigkeit beeinflusst hat. Diese Kombination aus Geschwindigkeits- und Steigungsvisualisierung bietet ein detailliertes Verständnis der Leistung während der gesamten Aktivität.

2. **Visualisierung nach Herzfrequenzsensor mit 3D-Relief**.  
    Eine weitere aufschlussreiche Anwendung ist die Kombination von Herzfrequenzsensordaten mit 3D-Reliefkarten. Dies ermöglicht es Ihnen, Herzfrequenzschwankungen direkt auf das Gelände zu projizieren und so einen umfassenden Überblick darüber zu erhalten, wie Höhenänderungen Ihre körperliche Anstrengung beeinflusst haben könnten.  

    Die 3D-Relief-Funktion, die die Höhe übertreibt, funktioniert unabhängig von der 3D-Track-Ansicht. Zwei vertikale Überhöhungsparameter können angepasst werden, um die Korrelation zwischen Herzfrequenz und Geländehöhe besser zu verstehen.

3. **Visualisierung von Track-Höhe und Steigungsfarblinie in einer flachen Kartenansicht.**  
    Bei der Visualisierung von Höhendaten wird eine flache Kartenansicht empfohlen, um Probleme wie GPS-Fehler zu vermeiden, die dazu führen könnten, dass Abschnitte des Tracks unter der Erde erscheinen.  

    In diesem Szenario können Steigungsänderungen separat entlang der Track-Linie visualisiert werden, während die Wandfarbe zur Darstellung der Höhe verwendet wird. Diese Methode stellt sicher, dass Sie auch bei potenziellen Datenungenauigkeiten eine klare und genaue Visualisierung von Steigung und Höhe erhalten.

## Darstellung für mehrere Tracks ändern {#change-appearance-for-multiple-tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Darstellung Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_1_andr.png)  ![Darstellung Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Darstellung ändern](@site/static/img/map/tracks_change_appear_3_ios.png)  ![Darstellung ändern](@site/static/img/map/tracks_change_appear_2_ios.png)

</TabItem>

</Tabs>  

Der Tab [Tracks](../../personal/tracks/manage-tracks.md) zeigt automatisch alle jemals aufgezeichneten, erstellten oder importierten Tracks an. Sie sind nach Ordnern geordnet oder als Liste darunter angezeigt.  

Ändern Sie die Darstellung mehrerer Tracks unter *Meine Orte → Tracks*:

- **Standarddarstellung ändern** - Wendet Einstellungen auf alle Tracks in einem [Ordner](../../personal/tracks/manage-tracks.md#track-folder) an.
- **Auf Original zurücksetzen** - Stellt die individuellen Track-Einstellungen wieder her.

- [Auswahlmodus](../../personal/tracks/manage-tracks.md#selection-mode) - Ändert die Darstellung bestimmter Tracks im ausgewählten Ordner oder der gesamten Liste im Tab "Tracks".
    - Wählen Sie das *Drei-Punkte-Menü* in der oberen rechten Ecke des Tabs "Tracks" und tippen Sie auf *Auswählen*.
    - Tippen Sie dann auf das *Drei-Punkte-Menü* oben auf dem Bildschirm und wählen Sie *Darstellung ändern*.  

Optionen zur Massenanpassung der Darstellung:

- **Richtungspfeile** - Fügt [Bewegungsindikatoren](#direction-arrows) hinzu.  
    Zustände: *Unverändert*, &nbsp;*Original*, &nbsp;*An*, &nbsp;*Aus*.

- **Start- und Ziel-Symbole anzeigen** - [Zeigt Markierungen](#start-and-finish-icons) für Start- und Endpunkte des Tracks an.  
    Zustände: *Unverändert*, &nbsp;*Original*, &nbsp;*An*, &nbsp;*Aus*.

- **Farbe** – Manuelle oder datenbasierte [Färbung](#color) anwenden.

- **Breite** – Passen Sie die [Breite der Track-Linie](#width) über Voreinstellungen oder manuell an.

- **Teilungsintervall** – [Intervall](#split-interval) für Entfernungs-/Zeitmarkierungen festlegen.  
    Zustände: *Unverändert*, &nbsp;*Original*, &nbsp;*Auswählen*: *Zeit* oder *Entfernung*.

Original und Unverändert:

- **Original** - Stellt die ursprünglichen Parameter aus der Track-Datei wieder her.

- **Unverändert** - Behält die aktuellen Einstellungen während der Bearbeitungssitzung bei.


## Track-Farben in GPX-Dateien {#track-colors-in-gpx-files}

OsmAnd unterstützt **benutzerdefinierte Track-Farben** in GPX-Dateien mithilfe des `<osmand:color>`-Tags innerhalb des `<extensions>`-Abschnitts eines `<trk>`-Elements. Dies ermöglicht es Benutzern, Farben für einzelne Tracks zu definieren, was die visuelle Unterscheidung verbessert, wenn mehrere Tracks auf der Karte angezeigt werden.

Um eine Farbe für einen Track festzulegen, verwenden Sie das folgende Format:  

```xml
<trk>
  <name>Example Track</name>
  <extensions>
    <osmand:color>#FF0000</osmand:color>
  </extensions>
</trk>
```

- Der `<osmand:color>`-Tag akzeptiert **hexadezimale Farbcodes** (z. B. `#FF0000` für Rot).
- Wenn in einer GPX-Datei mehrere Tracks vorhanden sind, kann jeder Track seinen eigenen `<osmand:color>`-Tag haben.


**Verhalten in OsmAnd:**

1. **Standard-Farbzuweisung**:  

    - Wenn ein **GPX-Track als einzelner Track importiert wird** (Option ***Als einen Track importieren***), wird dem gesamten Track die **Standard-GPX-Farbe** (Rot) zugewiesen.  
    - In OsmAnd **4.9.10 und neuer** wurde dieses Problem behoben – die Farben einzelner Tracks bleiben nun beim Import erhalten.

2. **Einfarbige Anzeige für zusammengeführte Tracks:**  

    - Wenn Tracks mit ***Segmente verbinden*** **zusammengeführt** werden, wird der resultierende Track als **ein durchgehender Track mit einem einzigen Segment** behandelt.
    - Eine mehrfarbige Darstellung wird für zusammengeführte Tracks **nicht unterstützt**.
    - Der zusammengeführte Track wird mit der **Haupt-GPX-Farbe** (Standard: Rot) angezeigt, auch wenn einzelne Track-Segmente ursprünglich unterschiedliche Farben hatten.

3. **Priorität der Darstellungseinstellungen:**  

    - OsmAnd unterstützt derzeit **Farb- und Breiteneinstellungen nur für den gesamten Track**.
    - Diese Darstellungseinstellungen werden in den **GPX-Erweiterungen auf oberster Ebene** gespeichert.
    - Wenn eine Farbe oder Breite **auf der obersten Ebene festgelegt ist** (entweder in der GPX-Datei oder manuell in OsmAnd), hat diese Einstellung Vorrang vor den Farben, die einzelnen Track-Segmenten zugewiesen sind.

**Workaround für mehrfarbige Tracks:**

- Um **individuelle Farben für mehrere Tracks beizubehalten**, **importieren Sie die Tracks separat**, anstatt sie zusammenzuführen.

- Passen Sie die Track-Farben manuell in den **Einstellungen zur Track-Darstellung** an:

  - Öffnen Sie den Track in OsmAnd.
  - Tippen Sie auf den Track, um das **Kontextmenü** zu öffnen.
  - Wählen Sie **Darstellung**.
  - Wählen Sie die gewünschte Farbe.

- Dies stellt sicher, dass jeder Track seine **beabsichtigte Farbdarstellung** beibehält, auch wenn die GPX-Datei ursprünglich mehrere Segmente mit unterschiedlichen Farben enthielt.


## Verwandte Artikel {#related-articles}

- [Karten-Kontextmenü](../map-context-menu.md)
- [Karte konfigurieren](../configure-map-menu.md)
- [Punkte auf der Karte](../point-layers-on-map.md)
- [Tracks](../tracks/index.md)
- [Track-Kontextmenü](../tracks/track-context-menu.md)
- [Aufzeichnung einer Reise](../../plugins/trip-recording.md)