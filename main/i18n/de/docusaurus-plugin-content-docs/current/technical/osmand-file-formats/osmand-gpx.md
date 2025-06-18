---
source-hash: f4b2b293ad51358460be21f120eea4ead0ba855b2536fc69c26f9eb724fe95d1
sidebar_position: 2
---

# OsmAnd GPX {#osmand-gpx}

## Einführung {#introduction}

GPX (GPS Exchange Format) ist ein weit verbreiteter XML-basierter Standard zum Speichern von GPS-Daten, einschließlich Tracks, Routen und Wegpunkten. OsmAnd unterstützt das GPX-Format für den Import, Export und die Anpassung von GPS-Daten zur Navigation, sodass sowohl Anfänger als auch fortgeschrittene Benutzer ihre Erfahrung optimieren können.

#### Was macht OsmAnd GPX einzigartig? {#what-makes-osmand-gpx-unique}

OsmAnd erweitert das Standard-GPX 1.1-Format durch die Einführung eines eigenen benutzerdefinierten `osmand:` XML-Namespaces. Dieser Namespace ermöglicht das Speichern zusätzlicher Daten wie:

- Visuelle Einstellungen für Tracks (Farbe, Breite, Pfeile).
- Gruppierung und Symbole von Wegpunkten.
- Detaillierte Routenattribute, einschließlich berechneter Routen und Aktivitätstypen.

#### Was lernen Sie in diesem Leitfaden? {#what-will-you-learn-in-this-guide}

Dieser Artikel bietet einen umfassenden Überblick über die GPX-Dateistruktur und die Funktionen in OsmAnd. Sie lernen:

1. Wie Sie Tracks und Wegpunkte mithilfe von GPX-Tags anpassen.
2. Erweiterte Funktionen wie HTML-Beschreibungen, Sensordaten und Aktivitätstypen.
3. Wie Sie berechnete Routen exportieren und ihre volle Funktionalität erhalten.
4. Konvertieren von GPX-Dateien in das OBF-Format für optimierte Speicherung und erweiterte Suchfunktionen.

#### Übersicht über die GPX-Struktur {#gpx-structure-overview}

GPX-Dateien in OsmAnd organisieren Daten hierarchisch in den folgenden Elementen:

- `<gpx>` - das Stammelement der Datei.
- `<trk>` - stellt Tracks dar, die Folgendes enthalten:
  - `<trkseg>` - Segmente des Tracks, die weiter in `<trkpt>` (Trackpunkte) unterteilt sind.
- `<rte>` - stellt Routen dar, einschließlich Wegpunkten und Schlüsselpunkten.
- `<wpt>` - stellt einzelne Wegpunkte dar.

## Track-Anpassung {#track-customization}

### Parameter für die Track-Darstellung {#track-appearance-parameters}

Dieser Abschnitt beschreibt, wie OsmAnd Tracks auf der Karte anzeigt und welche Anpassungsoptionen zur Verfügung stehen, um deren Erscheinungsbild anzupassen. Die unten beschriebenen Parameter werden innerhalb des `<gpx>`-Tags angewendet und betreffen alle Tracks, die in einer GPX-Datei enthalten sind.

| Tag-Name | Beschreibung / Werte |
|:----------------------------------------|:---------|
| `<color>`                                 | - Definiert die Farbe der Tracklinie auf der Karte.  <br/>  - *String:* HEX-Farbcode `#RRGGBB` oder `#AARRGGBB` |
| `<width>`                                 | - Gibt die Breite der Tracklinie an. <br/>  - *String:* `„thin"`, `„medium"`, `„bold"` (definiert durch das Attribut `„currentTrackWidth"`) oder Integer (1-24) |
| `<show_arrows>`                           | - Aktiviert oder deaktiviert Richtungspfeile entlang des Tracks. <br/> - *Bool:* `"true"` / `"false"` |
| `<show_start_finish>`                     | - Zeigt oder verbirgt Markierungen für den Anfang und das Ende des Tracks. <br/> - *Bool:* `"true"` / `"false"` |
| `<split_type>`                            | - Gibt den Typ der Segmentierung für den Track an. <br/> - *String:* `"no_split"`, `"distance"`, `"time"` |
| `<split_interval>`                        | - Legt das Intervall für die Track-Segmentierung basierend auf dem ausgewählten Typ fest. <br/> - *Double:* Integer (Meter für `"distance"`, Sekunden für `"time"`) |
| `<line_3d_visualization_by_type>`         | - Gibt den Typ der 3D-Visualisierung für den Track an. <br/> - *String:* `"none"`, `"altitude"`, `"shared_string_speed"`, `"map_widget_ant_heart_rate"`, `"map_widget_ant_bicycle_cadence"`, `"map_widget_ant_bicycle_power"`, `"shared_string_temperature"`, `"shared_string_speed"`, `"fixed_height"` |
| `<line_3d_visualization_wall_color_type>` | - Definiert den Wandfarbtyp für die 3D-Visualisierung. <br/> - *String:* `"none"`, `"solid"`, `"downward_gradient"`, `"upward_gradient"`, `"altitude"`, `"slope"`, `"speed"` |
| `<line_3d_visualization_position_type>`   | - Legt die Position der 3D-Visualisierung relativ zum Track fest. <br/> - *String:* `"top"`, `"bottom"`, `"top_bottom"`|
| `<vertical_exaggeration_scale>`           | - Multiplikator zur Skalierung des Werts des Attributs `line_3d_visualization_by_type`. <br/> - *Float:* Standard: 1.0 |
| `<elevation_meters>`                      | - Gibt eine feste Höhe in Metern für `"fixed_height"` in `<line_3d_visualization_by_type>` an. <br/> - *Float:* Standard: `1000` |
| `<coloring_type>`                         | - Bestimmt die Färbemethode für den Track. <br/> - *String:* `"solid"`, `"speed"`, `"altitude"`, `"slope"`, `"routeInfo_roadClass`, `"routeInfo_surface"`, `"routeInfo_smoothness"` |
| `<color_palette>`                         | - Gibt das Farbschema für den Track an. <br/> - *String:* `"default"` / [benutzerdefinierte Schemas](/docs/user/personal/color-palette-schemes) |

***Beispiel:***

```xml
<gpx version="1.1" creator="OsmAnd~ 5.0.0" xmlns="https://www.topografix.com/GPX/1/1" xmlns:osmand="https://osmand.net/docs/technical/osmand-file-formats/osmand-gpx" xmlns:gpxtpx="https://www8.garmin.com/xmlschemas/TrackPointExtensionv1.xsd" xmlns:xsi="https://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://www.topografix.com/GPX/1/1 https://www.topografix.com/GPX/1/1/gpx.xsd">
...
  <extensions>
    <osmand:color>#4e4eff</osmand:color>
    <osmand:width>bold</osmand:width>
    <osmand:show_arrows>true</osmand:show_arrows>
    <osmand:split_type>distance</osmand:split_type>
    <osmand:split_interval>2000.0</osmand:split_interval>
  </extensions>
</gpx>
```

### Tag 'coloring_type' {#tag-coloringtype}

Der Tag `<coloring_type>` in OsmAnd ermöglicht es Benutzern, die Track-Färbung basierend auf bestimmten Datenattributen anzupassen und bietet so eine visuelle Möglichkeit, wichtige Informationen entlang des Tracks zu interpretieren.

| Typ | Beschreibung | Anwendungsfall |
|:-----------------------|:--------|:--------|
| `<solid>`                | Der gesamte Track wird mit einer einzigen, festen Farbe angezeigt, die durch den Tag `color` angegeben ist. | Verwenden, wenn eine einheitliche Farbe für klare Sichtbarkeit benötigt wird. |
| `<speed>`                | Der Track wird in einem Farbverlauf basierend auf den Geschwindigkeitswerten an jedem Trackpunkt (`<trkpt>`) eingefärbt. Höhere Geschwindigkeiten werden durch unterschiedliche Farben dargestellt. | Ideal für Aktivitäten wie Radfahren oder Autofahren, um Geschwindigkeitsänderungen zu visualisieren. |
| `<altitude>`             | Der Track wird entsprechend den Höhendaten an jedem `<trkpt>` eingefärbt. Ein Farbverlauf wird angewendet, der verschiedene Höhenbereiche anzeigt. | Nützlich für Wanderungen oder Bergrouten, um Höhenänderungen hervorzuheben. |
| `<slope>`                | Der Track wird basierend auf der Steigung/dem Gefälle zwischen aufeinanderfolgenden Trackpunkten eingefärbt. Positive Gradienten zeigen Bergaufhänge an, während negative Gradienten Bergab anzeigen. | Geeignet für Radfahrer oder Wanderer, die die Schwierigkeit des Tracks analysieren. |
| `<routeInfo_roadClass>`  | Färbt die Tracksegmente basierend auf der OpenStreetMap (OSM)-Straßenklassifizierung (z. B. Autobahn, Wohnstraße). | Hilft bei der Unterscheidung zwischen verschiedenen Straßentypen beim Folgen einer Route. |
| `<routeInfo_surface>`    | Färbt die Tracksegmente basierend auf dem OSM-Oberflächentyp (z. B. asphaltiert, Schotter, Erde). | Nützlich zur Bestimmung der Trackbedingungen bei Aktivitäten wie Offroad. |
| `<routeInfo_smoothness>` | Färbt den Track gemäß den OSM-Glattheitsbewertungen, die die Rauheit oder Glätte des Pfades anzeigen (z. B. ausgezeichnet, schlecht). | Hilfreich bei der Bewertung der Befahrbarkeit des Tracks für bestimmte Fahrzeuge. |

### GPX-Tags in der Benutzeroberfläche {#gpx-tags-in-ui}

GPX-Erweiterungs-Tags werden am unteren Rand des Track-Kontextmenüs angezeigt.
Sowohl `<metadata>` als auch `<gpx>` `<extensions>` werden aufgelistet.
Darstellungs-Tags sind von der Auflistung ausgeschlossen.
Unterstützt seit OsmAnd Android 5.0.

## Wegpunkt-Anpassung {#waypoints-customization}

Dieser Abschnitt erklärt, wie OsmAnd die Anpassung von Wegpunkten in GPX-Dateien durch die Verwendung von Symbolen, Farben und Gruppierung ermöglicht.

### Wegpunkt-Symbole {#waypoint-icons}

Die folgenden Tags steuern die Anzeige von Wegpunkt-Symbolen in OsmAnd:

| GPX-Tag      | Standard   | Zweck    |
|:-------------|:----------|:-----------|
| `<icon>`       | *(Keine)*    | Gibt das Symbol für den Wegpunkt an (z. B. `historic_castle`). |
| `<color>`      | `"red"`     | Legt die Farbe des Symbols mit einem HEX-Code (z. B. `#FF0000`) oder einem Farbnamen (z. B. `"blue"`) fest. |
| `<background>` | `"circle"`  | Definiert die Hintergrundform des Symbols. Mögliche Werte: `"circle"`, `"square"`, `"octagon"`. |

***Beispiel:***

```xml
<wpt lat="52.5163" lon="13.3779">
  <name>Brandenburg Gate</name>
  <extensions>
    <osmand:color>#FF5020</osmand:color>
    <osmand:icon>city_gate</osmand:icon>
    <osmand:background>square</osmand:background>
  </extensions>
</wpt>
```

### Wegpunktgruppen {#waypoint-groups}

Wegpunkte in OsmAnd können nach ihrem Typ in Gruppen sortiert werden. Diese Gruppierung ermöglicht es dem Benutzer, mehrere Wegpunkte unter bestimmten Kategorien zu organisieren, was die Klarheit und Lesbarkeit der Karte verbessert.

- **Definition der Punktgruppe.** Der Tag `<type>` innerhalb des Elements `<wpt>` gibt die Gruppe des Punkts an (z. B. `"castle"`, `"aqueduct"`).
- **Gruppenkonfiguration.** Die Erweiterung `<osmand:points_groups>` im Element `<gpx>` definiert die Einstellungen für jede Gruppe, einschließlich `name`, `color`, `icon` und `background` für alle Wegpunkte in dieser Gruppe.

***Beispiel:***

```xml
<gpx>
  <wpt lat="1.234" lon="5.678">
    <name>Schauen Sie nach oben, um das Wasser zu sehen</name>
    <type>aqueduct</type>
  </wpt>
  <wpt lat="5.678" lon="1.234">
    <name>Vorsicht vor Geistern</name>
    <type>castle</type>
  </wpt>
  <wpt lat="66.666" lon="66.666">
    <name>Das Haus von Beetlejuice</name>
    <type>castle</type>
  </wpt>
  <extensions>
    <osmand:points_groups>
      <group name="castle" color="#FF0000" icon="historic_castle" background="circle"/>
      <group name="aqueduct" color="#0000FF" icon="bridge_structure_arch" background="circle"/>
    </osmand:points_groups>
  </extensions>
</gpx>
```

## Erweiterte GPX-Funktionen {#advanced-gpx-features}

### Aktivitätstyp {#activity-type}

Ab OsmAnd [Version 4.9](/blog/osmand-android-4-9-released/#gpx-track-activities) können Sie Ihre Tracks nach Aktivitätstyp klassifizieren, um sie weiter zu analysieren und in Ordnern zu organisieren.

Die Liste der unterstützten Aktivitätstypen ist in der Datei [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json) verfügbar. Jede Aktivität wird durch ihre eindeutige `ID` identifiziert und in den `<metadata>`-Erweiterungen der GPX-Datei gespeichert.

***Beispiel:***

```xml
  <metadata>
    <extensions>
      <osmand:activity>off_road_motorcycling_dirt_biking</osmand:activity>
    </extensions>
  </metadata>
```

### HTML in Beschreibungen {#html-in-descriptions}

HTML-Tags können innerhalb der `<desc>`-Tags in den `<metadata>`- oder `<wpt>`-Elementen verwendet werden, um formatierte Beschreibungen für Tracks oder Wegpunkte bereitzustellen.

Um Konflikte mit der XML-Syntax zu vermeiden, ersetzen Sie Sonderzeichen wie folgt:

- `<` *→* `&lt;`
- `>` *→* `&gt;`
- `&` *→* `&amp;`

***Beispiel:***

```xml
<metadata>
  <desc>
    &lt;p&gt;
        Der erste Absatz wird als &lt;b&gt;kurze&lt;/b&gt; Beschreibung angezeigt.
        HTML-Tags werden in Kurzbeschreibungen entfernt.
    &lt;/p&gt;
    &lt;p&gt;
      &lt;h3&gt;Zweiter Absatz&lt;/h3&gt;
        &lt;b&gt;Hallo, Welt!&lt;/b&gt;&lt;br/&gt;
        &lt;img src="..."/&gt;&lt;br/&gt;
        &lt;a href="..."&gt;url&lt;/a&gt;&lt;br/&gt;
        &lt;table&gt; ... &lt;/table&gt;
    &lt;/p&gt;
  </desc>
</metadata>
```

***Wichtige Hinweise:***

- OsmAnd entfernt beim Generieren von Kurzbeschreibungen alle HTML-Tags und hinterlässt reinen Text.
- Sie können Tags wie `<b>`, `<i>`, `<p>`, `<br/>`, `<a>`, `<img>` und mehr zur Anpassung verwenden.

### Link-Tag {#link-tag}

Verwenden Sie den Tag `<link>`, um URLs mit Metadaten, Autoreninformationen oder Wegpunkten in OsmAnd GPX-Dateien zu verknüpfen. Dieser Tag kann auch ein Bild anzeigen, wenn die URL auf eine Bilddatei verweist.

***Beispiele (Metadaten-Link mit Bild):***

```xml
<metadata>
  <link href="https://osmand.net/img/logo.png">
    <text>OsmAnd Logo</text>
  </link>
</metadata>
```

***Beispiele (Wegpunkt-Link mit Bild):***

```xml
<wpt lat="52.5163" lon="13.3779">
  <link href="https://osmand.net/img/logo.png" />
</wpt>
```

### Sensordaten-Tags {#sensor-data-tags}

Sie können Ihre Tracks mit Daten von Fitnesssensoren anreichern, z. B. Herzfrequenzmessern oder Temperatursensoren. OsmAnd verwendet das Garmin [TrackPointExtension](https://www8.garmin.com/xmlschemas/TrackPointExtensionv1.xsd)-Schema, um diese Daten zu speichern, wodurch sie mit Plattformen wie **Strava** und **Garmin Basecamp** kompatibel sind.

*Unterstützte Sensordaten-Tags:*

- **hr** - Herzfrequenz (in Schlägen pro Minute).
- **cad** - Fahrradtrittfrequenz (in Umdrehungen pro Minute).
- **atemp** - Umgebungstemperatur (in Grad Celsius).
- **power** - Fahrradleistung (in Watt).

***Beispiel:***

```xml
<extensions>
  <gpxtpx:TrackPointExtension>
    <gpxtpx:hr>145</gpxtpx:hr>
    <gpxtpx:cad>80</gpxtpx:cad>
    <gpxtpx:atemp>22</gpxtpx:atemp>
    <gpxtpx:power>250</gpxtpx:power>
  </gpxtpx:TrackPointExtension>
</extensions>
```

### Trackpunkt-Details {#track-point-details}

Jeder `<trkpt>` (Trackpunkt) in der GPX-Datei kann zusätzliche Attribute enthalten, um Daten wie Geschwindigkeit, Kurs und Höhe zu erfassen.

*Unterstützte Attribute:*

- **speed** - Geschwindigkeit am Trackpunkt (in Metern pro Sekunde).
- **heading** - Bewegungsrichtung (0-359 Grad).
- **ele** - Höhe über dem Meeresspiegel (in Metern).
- **time** - Zeitstempel für den Trackpunkt.

***Beispiel:***

```xml
  <trkpt lat="52.397799" lon="4.575998">
    <ele>203</ele>
    <time>2019-05-08T10:36:43Z</time>
    <hdop>3</hdop>
    <extensions>
      <heading>273</heading>
      <speed>5.02</speed>
    </extensions>
  </trkpt>
```

## Berechnete Route(n) {#calculated-routes}

In **OsmAnd** können Sie eine Route berechnen und alle Daten in GPX speichern, so dass später alle Navigationsfunktionen wie das Ausführen der GPX-Navigation verfügbar sind. OsmAnd GPX enthält dann Routensegmente, Abbiegungen, Straßennamen, Straßentypen, Einschränkungen usw. Die Route kann vollständig wiederhergestellt werden, als ob sie gerade erstellt worden wäre, auch wenn die entsprechenden Offline-Karten nicht vorhanden sind.

Eine GPX-Datei kann mehrere Routen enthalten. Jede davon ist in einem spezifischen Segment unter **trkseg** / **extensions** enthalten. Eine GPX-Datei wird in dieser Form gespeichert, wenn eine konstruierte Route exportiert oder ein Track gespeichert wird, der aus mehreren separaten Segmenten über die Funktion [**Route planen**](../../user/plan-route/create-route.md) besteht.

[**Route planen**](../../user/plan-route/create-route.md) fügt der GPX-Datei auch einen (oder mehrere, entsprechend der Anzahl der enthaltenen separaten Segmente / Tracks) **rte**-Blöcke hinzu, die Routen-Schlüsselpunkte (**rtept**) enthalten.

#### GPX-Struktur: {#gpx-structure}

```xml
<trk>
  <trkseg>
    // Liste der Segmentpunkte. Die Reihenfolge der Punkte entspricht der Reihenfolge und Länge der Routensegmente (<route><segment length="x" ... />).
    // Der Wert des Attributs "length" entspricht der Anzahl der Punkte in diesem Segment der Route.
    <trkpt ... ></trkpt>
    <extensions>
      // Liste der Routensegmente
      <route>
        <segment ... />
      </route>
      // Eigenschaften der in der Route enthaltenen Segmente.
      // Diese Daten werden bei der erstmaligen Konstruktion einer Route aus Offline-Karten entnommen.
      <types>
        <type ... />
      </types>
    </extensions>
  </trkseg>
</trk>

// Liste der Zwischenroutenpunkte. Wenn es mehrere Routen gibt, entspricht die Reihenfolge der rte-Liste der Reihenfolge der Routensegmente.
<rte>
  <rtept ... />
    // Für Routen, die mit "Route planen" erstellt wurden, werden die Parameter der Schlüsselpunkte gespeichert.
    // Wenn rtept nicht der erste und letzte ist, wird vor ihm (mit demselben idx) trkpt mit denselben Daten sein.
    <extensions>
      // Routenprofiltyp für das nächste Segment (Auto, Fahrrad, Fußgänger usw.).
      <profile>...</profile>
      // Der Index des Punktes im GPX-Segment, der dem ersten Punkt der berechneten Route für dieses Segment entspricht.
      // Wenn rtept nicht der erste und letzte ist, wird vor ihm (mit demselben idx) trkpt mit denselben Daten sein.
      <trkpt_idx>...</trkpt_idx>
    </extensions>
  </rtept>
</rte>
```

#### Wichtige Eigenschaften: {#important-properties}

* **trkpt_idx** des ersten **rtept** in **trkseg** ist 0. Wenn es also zwei **trkseg**s gibt, gibt es zwei **rtept**s mit **trkpt_idx** = 0
* **trkpt_idx** des letzten **rtept** in **trkseg** ist gleich der Anzahl der **trkpt**s in **trkseg** minus 1. Wenn **trkseg** zum Beispiel 12 **trkpt**s hat, sollte **trkpt_idx** des letzten **rtept** 11 sein
* Benachbarte Routen**segmente** überlappen sich: Das Ende des vorherigen **segment**s und der Anfang des nächsten **segment**s sind derselbe **trkpt**.
* Es gibt eine Ausnahme, wenn benachbarte Routen**segmente** sich nicht überlappen (nicht denselben **trkpt** teilen). Dies geschieht, wenn es einen **rtept** "zwischen" Routen**segmenten** gibt. Das Ende des vorherigen Routen**segment**s ist ein **trkpt**, und der Anfang des nächsten Routen**segment**s ist ein anderer **rtept**. Aber diese beiden **trkpt**s sind in Bezug auf lat, lon und andere Parameter völlig gleich.
* Die Überlappung von Routen**segmenten** kann über **length** und **startTrkptIdx** (letzteres wird nur zur besseren Lesbarkeit verwendet) erkannt werden:
  - Wenn die Summe von **startTrkptIdx** und **length** des vorherigen Routen**segment**s gleich **startTrkptIdx** des nächsten Routen**segment**s ist, überlappen sich die Routen**segmente** nicht
  - Wenn die Summe um eins kleiner ist, dann überlappen sich die Routen**segmente**
* Es kann gerade Routen**segmente** geben. Sie sind mit **id="-1"** gekennzeichnet. Sie können in zwei Fällen auftreten:
  - Es handelt sich um eine Multiprofilroute, und der Benutzer hat eine gerade Linie ausgewählt
  - Der Benutzer hat **rtept** zu weit von der nächsten Straße entfernt platziert, so dass OsmAnd eine gerade Linie zwischen **rtept** und Straße gezogen hat
* trkpts = length - (segments - 1) + (rtepts - 2), wobei:
  - trkpts - Anzahl der **trkpt**s innerhalb von **trkseg**
  - length - Summe aller **length**s der Routen**segmente** innerhalb von **trkseg**
  - segments - Anzahl der Routen**segmente** innerhalb von **trkseg**
  - rtepts - Anzahl der **rtept**s, die zu **trkseg** gehören

#### Beispiel: {#example}

```xml
<gpx version="1.1" creator="OsmAndRouterV2" xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
  <metadata>
    <name>Fr 06 Nov 2020</name>
  </metadata>
  <trk>
    <name>Fr 06 Nov 2020</name>
    <trkseg>
      <trkpt lat="52.3639849" lon="4.8900533">
        <ele>0.801</ele>
      </trkpt>
      <trkpt lat="52.3636917" lon="4.8922849">
        <ele>0.998</ele>
      </trkpt>
      <trkpt lat="52.3636885" lon="4.892309">
        <ele>1</ele>
      </trkpt>
      <trkpt lat="52.3636426" lon="4.8922902">
        <ele>0.963</ele>
      </trkpt>
      <trkpt lat="52.363564" lon="4.8922607">
        <ele>0.899</ele>
      </trkpt>

      ....

      <extensions>
        <route>
          <segment id="7372058" length="3" segmentTime="178.44" speed="1.11" turnType="C" types="0,1,2,3,4,5,6" names="57" />
          <segment id="334164679" length="5" segmentTime="86.11" speed="1.11" turnType="TR" turnAngle="91.88" types="7,8,0,9,10,11,12,13,6" pointTypes=";;14,15;16,17,18;" names="58" />
          <segment id="334603581" length="6" segmentTime="75.5" speed="1.11" types="19,20,21,7,8,0,22,9,10,11,12,13,23,6" pointTypes=";14;16,24;16,24;14;" names="58" />
          <segment id="446707354" length="3" segmentTime="8.32" speed="1.11" turnType="TSLL" turnAngle="-25.44" types="19,25,21,7,8,22,9,1,11,12,13,6" names="58" />
          ...
        </route>
        <types>
          <type t="lit" v="yes" />
          <type t="oneway" v="yes" />
          <type t="highway" v="unclassified" />
          <type t="surface" v="paving_stones" />
          <type t="maxspeed" v="30" />
          ...
        </types>
      </extensions>
    </trkseg>
  </trk>

  <rte>
    <rtept lat="52.3639945" lon="4.8900532">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>0</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.3612797" lon="4.8911677">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>24</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.356996" lon="4.8912071">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>89</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.3542374" lon="4.8947024">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>121</trkpt_idx>
      </extensions>
    </rtept>
  </rte>
</gpx>
```

## GPX-Sammlungen in OBF {#gpx-collections-in-obf}

OsmAnd ermöglicht es Ihnen, mehrere GPX-Dateien in eine einzige OBF-Datei zu konvertieren. Dies ermöglicht die Speicherung von Tausenden von GPX-Tracks in einem kompakten, optimierten Format, während Funktionen wie spezielle Kartensymbole, Track-Anpassung und Suchfunktion erhalten bleiben. Dies vermeidet die Begrenzung lokaler großer GPX-Dateien, die typischerweise nicht mehr als 500.000 Punkte insgesamt verarbeiten können, obwohl einige Funktionen von GPX-Tracks im Vergleich zur Anzeige einer OBF-Datei fehlen können.

Schritte zur Konvertierung von GPX nach OBF:

- Melden Sie sich bei der [OsmAnd Web Map](https://osmand.net/map) an *→ Tracks → Wählen Sie einen Ordner → *Menü* (⋮) *→ Als OBF-Sammlung herunterladen*

- Die resultierende `<.obf>`-Datei kann in OsmAnd importiert werden (erfordert OsmAnd Android 5.0+).

### Tracklinien-Stil {#track-line-style}

Passen Sie Tracklinien mit den folgenden Tags an:

| GPX-Tag                   | Standard | Zweck  |
|:--------------------------|:--------|:---------|
| `<name>`                  | *(Keine)*  | Name, der über der Tracklinie angezeigt wird.  |
| `color`                   | `red`   | Primärfarbe (HEX oder Text). |
| `colour`, `displaycolor`  | *(Keine)*  | Alternative Möglichkeiten zur Übersteuerung von `color`. |
| `shield_waycolor`         | *(Keine)*  | Übersteuerung der Schild-Tracklinien-`color`. |
| `translucent_line_colors` | `no`    | Auf `yes` setzen für halbtransparente Farben. |
| `width`                   | `thin`  | Linienbreite: `"thin"`, `"medium"`, `"bold"`, `"1-24"` oder `"roadstyle"` |

**Unterstützte Farben:** black, blue, brown, darkyellow, gray, green, lightblue, lightgreen, orange, purple, red, white, yellow.

***Beispiel:***

```xml
<gpx>
  <metadata>
    <name>
      Trackname in Metadaten
    </name>
  </metadata>
  <trk>
    ...
  </trk>
  <extensions>
    <osmand:color>yellow</osmand:color>
    <osmand:width>roadstyle</osmand:width>
    <osmand:translucent_line_colors>yes</osmand:translucent_line_colors>
  </extensions>
</gpx>
```

### Tracklinien-Schilde {#track-line-shields}

Schilde sind Symbole, die entlang der Tracklinie angezeigt werden. OsmAnd unterstützt [OSMC-symbol-style](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol)-Schilde, die Folgendes enthalten können:

- Hintergrundsymbol - die Hauptform (z. B. Kreis oder Quadrat).
- Vordergrundsymbole - bis zu zwei kleinere Symbole, die über dem Hintergrund liegen.
- Text - kurze Beschreibungen oder Kennungen, abgeleitet von den Tags `shield_text` oder `ref`.

Wenn keine Schildeigenschaften definiert sind, verwendet OsmAnd ein automatisch angepasstes gelbes Schild für den Track.

***Tags für Schilde:***

| GPX-Tag            | Zweck                                                                |
|:-------------------|:-----------------------------------------------------------------------|
| `shield_bg`        | Definiert das Hintergrundsymbol für das Schild.                            |
| `shield_fg`        | Gibt das erste Vordergrundsymbol an (z. B. ein Pfeil oder Punkt).           |
| `shield_fg_2`      | Gibt das zweite Vordergrundsymbol an (optional).                       |
| `shield_text`      | Legt den kurzen Text fest, der über dem Schild angezeigt werden soll (z. B. Routen-Ref). |
| `shield_textcolor` | Bestimmt die Farbe des Schildtextes (optional).                    |
| `shield_waycolor`  | Übersteuert die Standard-Trackfarbe für die Linie des Schildes (optional).   |
| `ref`              | Wird als Fallback-Text verwendet, wenn `shield_text` nicht angegeben ist.                |

***Beispiel:***

```xml
<gpx>
  <trk>
    <name>Beispielroute</name>
  </trk>
  <extensions>
    <osmand:shield_text>ABC</osmand:shield_text>
    <osmand:shield_fg>osmc_red_dot</osmand:shield_fg>
    <osmand:shield_bg>osmc_white_bg</osmand:shield_bg>
    <osmand:shield_waycolor>red</osmand:shield_waycolor>
    <osmand:shield_textcolor>black</osmand:shield_textcolor>
  </extensions>
</gpx>
```

### Wegpunkt-Anzeige {#waypoints-display}

Wegpunkt-Symbole können mit den folgenden Tags angepasst werden:

| GPX-Tag      | Standard  | Zweck                                   |
|:-------------|:---------|:---------------------------------------------------|
| `icon`       | *(Keine)*   | Gibt das Symbol für den Wegpunkt an (verwendet die Standard-Symbole des OsmAnd-Wegpunkt-Editors). |
| `color`      | `red`    | Legt die Symbolfarbe mit einem HEX-Code (z. B. `#ffaa00`) oder einem unterstützten Farbnamen (begrenzte Optionen) fest. |
| `background` | `circle` | Definiert die Form des Symbols. Unterstützte Werte: `circle`, `square`, `octagon`. |

***Verhalten der `background`-Formen:***

- `circle` - zeigt das Symbol mit einem kreisförmigen Hintergrund an.
- `square` - zeigt das Symbol mit einem quadratischen Hintergrund an, standardmäßig rot, wenn keine Farbe angegeben ist.
- `octagon` - wird in OsmAnd als kreisförmiger Hintergrund behandelt.

**Unterstützte Farben für** `background=circle`: blue, gray, green, lightblue, lightgreen, orange, purple, yellow.

***Erweiterungen mit zusätzlichen Elementen:***

- Sie können formatierte Beschreibungen zu Wegpunkten hinzufügen, indem Sie [HTML-Code](#html-in-descriptions) verwenden. Dies ermöglicht es Ihnen, formatierten Text, Links oder sogar Bilder einzufügen.
- Wegpunkte können verknüpfte Bilder als [Link-als-Bild](#link-tag) anzeigen.

***Beispiel:***

```xml
<wpt lat="3.1415926" lon="42">
  <name>PI</name>
  <extensions>
    <osmand:icon>historic_archaeological_site</osmand:icon>
    <osmand:background>circle</osmand:background>
    <osmand:color>#ffaa00</osmand:color>
  </extensions>
</wpt>
```

### Suche nach Namen und Referenzen {#search-by-name-and-refs}

Tracks und Wegpunkte können über eine Vielzahl von GPX-Tags gefunden werden.

| GPX-Tag       | Speicherort               | Zweck                                                                     |
|:--------------|:-----------------------|:----------------------------------------------------------------------------|
| `<name>`      | `<metadata>`           | Der primäre Name des GPX-Tracks.                                          |
| `ref`         | GPX `<extensions>`     | Eine kurze Kennung, oft abgeleitet vom OSM `ref`-Tag.                   |
| `shield_text` | GPX `<extensions>`     | Text, der auf Schildern angezeigt wird (kann auch mit `ref` verwendet werden).                    |
| `name_-_lang` | GPX/WPT `<extensions>` | Lokalisierter `name:lang` (z. B. `name_-_en` für Englisch, ersetzen Sie `:` -> `_-_`) |
| `<name>`      | `<wpt>`                | Der Name des Wegpunkts.                                                   |

***Beispiel:***

```xml
<gpx>
  <metadata>
    <name>Xemxija Heritage Trail</name>
  </metadata>
  <extensions>
    <osmand:ref>XHT</osmand:ref>
  </extensions>
  <wpt lat="35.948477" lon="14.3806796">
    <name>Il-Mighba Rumana</name>
    <extensions>
      <osmand:name_-_en>The Roman Apiary</osmand:name_-_en>
    </extensions>
  </wpt>
</gpx>
```

### Suche nach Aktivitätstyp {#search-by-activity-type}

OsmAnd organisiert Tracks in OBF-Dateien in **Aktivitätsgruppen** und **Aktivitätstypen**. Diese Klassifizierungen helfen Ihnen, Tracks als POIs zu filtern oder aktivitätsbasierte Suchfilter zu erstellen.

So funktionieren Aktivitätstypen:

- Aktivitätstypen und -gruppen werden anhand der `"id"` und `"tags"` aus der Datei [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json) bestimmt.
- OsmAnd verwendet die Tags `osmand:activity` oder `osmand:route`, um Aktivitäten in GPX-Dateien zu klassifizieren.

| GPX-Tag           | Speicherort | Zweck                                          |
|:------------------|:---------|:-------------------------------------------------|
| `osmand:activity` | `<metadata>` | Haupt-OsmAnd-Tag zum Speichern des Aktivitätstyps (ID). |
| `osmand:route`    | GPX `<extensions>` | Alternative OSM-Methode zur Definition des Aktivitätstyps. |

***Beispiele für die Organisation von Tracks nach Aktivitätstyp:***

1. Dies klassifiziert den Track unter der Gruppe **Motorrad** mit dem Typ **Geländemotorrad (Dirt Biking)**.

    ```xml
    <metadata>
      <extensions>
        <osmand:activity>off_road_motorcycling_dirt_biking</osmand:activity>
      </extensions>
    </metadata>
    ```

2. Dies organisiert den Track unter der Gruppe **Radfahren** mit dem Typ **Mountainbiking**.

    ```xml
    <gpx>
      <extensions>
        <osmand:route>mtb</osmand:route>
      </extensions>
    </gpx>
    ```

### Suchinformationen-Tags {#search-information-tags}

OBF-Dateien generieren und speichern automatisch wichtige Track-Statistiken und -Analysen.

| OBF-Tag                               | Zweck                                                               |
|:--------------------------------------|:----------------------------------------------------------------------|
| `distance`                            | Gesamtstrecke, die von allen Tracksegmenten zurückgelegt wurde.                         |
| `start_ele`, `ele_graph`              | Höhendaten aus GPX, verpackt in einem kompakten Binärarray.           |
| `min_ele`, `avg_ele`, `max_ele`       | Minimum-, Durchschnitts- und Maximum-Höhenanalysen.                    |
| `diff_ele_up`, `diff_ele_down`        | Gesamthöhengewinn und -verlust über den Track.                       |
| `max_speed`, `avg_speed`, `min_speed` | Track-Geschwindigkeitsanalysen, einschließlich Maximum, Durchschnitt und Minimum. |
| `time_span`, `time_span_no_gaps`      | Gesamtzeit für den Track, mit und ohne Berücksichtigung von Lücken.       |
| `time_moving`, `time_moving_no_gaps`  | Gesamtbewegungszeit, mit und ohne Berücksichtigung von Lücken.              |

### Interne Tags {#internal-tags}

Einige GPX-Tags werden in OBF-Dateien indirekt verwendet oder gespeichert. Details zur Implementierung finden Sie in [OsmGpxWriteContext.java](https://github.com/osmandapp/OsmAnd-tools/blob/master/java-tools/OsmAndMapCreatorUtilities/src/main/java/net/osmand/obf/OsmGpxWriteContext.java).

| OBF-Tag                      | Zweck                                                                                                    |
|:-----------------------------|:-----------------------------------------------------------------------------------------------------------|
| `route_id`                   | Eine eindeutige Kennung für die GPX-Datei, die Karten- und POI-Daten verknüpft (Format: `/[A-Z]+[0-9]+/` z. B. `OSM12345`). |
| `route_type`                 | Aktivitätsgruppenkennung (`id`), abgeleitet von `poi/activities.json`                                        |
| `route_activity_type`        | Aktivitätstyp (innerhalb der Gruppe) Kennung (`id`), abgeleitet von `poi/activities.json`                      |
| `name`, `ref`, `description` | Lokalisierbare und durchsuchbare Attribute (`lang="true"` in POI-Typen)                                         |
| `filename`                   | Der Name der ursprünglichen GPX-Datei, die zur Generierung dieses Tracks verwendet wurde.                                            |
| `track_color`                | Kartenabschnitt-Trackfarbe, abgeleitet von `shield_waycolor`, `color`, `colour` oder `displaycolor`               |
| `extensions_extra_tags`      | Beliebige zusätzliche Tags für `<gpx><extensions>` im JSON-Format.                                               |
| `metadata_extra_tags`        | Beliebige zusätzliche Tags für `<metadata><extensions>` im JSON-Format.                                               |
| `wpt_extra_tags`             | Beliebige zusätzliche Tags für Wegpunkte `<wpt><extensions>` im JSON-Format.                                     |
| `route_track_point`          | Wegpunkte aus der GPX-Datei verwenden diesen Typ in den POI-Daten.                                                         |
| `route_bbox_radius`          | Gibt den Standardradius für die Suche nach Teilen des Tracks im POI-Abschnitt an                       |
| `route_shortlink_tiles`      | Gibt eine durch Kommas getrennte Liste von OSM-Kurzlink-Kacheln an, um das Lesen von Geometriedaten zu beschleunigen (optional)       |
| `route_segment_index`        | Gibt die Ordnungszahl des Geometriesegments an, das mit diesem Punkt verbunden ist (optional)               |
| `route_name`                 | Der Routenname, der von der internen `searchPoiByName` verwendet wird (veraltet)                                            |

> *Zuletzt aktualisiert: März 2025*