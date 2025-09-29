---
source-hash: cd85b9f943b1bca0b2953a02a698885ade5850557c59dcce8a6611b292a2962a
sidebar_position: 2
---

# OsmAnd GPX {#osmand-gpx}

## Einführung {#introduction}

GPX (GPS Exchange Format) ist ein weit verbreiteter XML-basierter Standard zur Speicherung von GPS-Daten, einschließlich Tracks, Routen und Wegpunkten. OsmAnd unterstützt das GPX-Format für den Import, Export und die Anpassung von GPS-Daten für die Navigation, was sowohl Anfängern als auch fortgeschrittenen Benutzern ermöglicht, ihre Erfahrung zu optimieren.

#### Was macht OsmAnd GPX einzigartig? {#what-makes-osmand-gpx-unique}

OsmAnd erweitert das Standard-GPX-1.1-Format durch die Einführung eines eigenen `osmand:` XML-Namensraums. Dieser Namensraum ermöglicht die Speicherung zusätzlicher Daten wie:

- Visuelle Einstellungen für Tracks (Farbe, Breite, Pfeile).
- Gruppierung und Symbole für Wegpunkte.
- Detaillierte Routenattribute, einschließlich berechneter Routen und Aktivitätstypen.

#### Was werden Sie in diesem Leitfaden lernen? {#what-will-you-learn-in-this-guide}

Dieser Artikel bietet einen umfassenden Überblick über die Struktur und Funktionen von GPX-Dateien in OsmAnd. Sie werden lernen:

1. Wie man Tracks und Wegpunkte mit GPX-Tags anpasst.
2. Fortgeschrittene Funktionen wie HTML-Beschreibungen, Sensordaten und Aktivitätstypen.
3. Wie man berechnete Routen exportiert und ihre volle Funktionalität beibehält.
4. Die Konvertierung von GPX-Dateien in das OBF-Format für optimierte Speicherung und erweiterte Suchfunktionen.

#### Überblick über die GPX-Struktur {#gpx-structure-overview}

GPX-Dateien in OsmAnd organisieren Daten hierarchisch in den folgenden Elementen:

- `<gpx>` - das Wurzelelement der Datei.
- `<trk>` - repräsentiert Tracks, die Folgendes enthalten:
  - `<trkseg>` - Segmente des Tracks, die weiter in `<trkpt>` (Trackpunkte) unterteilt sind.
- `<rte>` - repräsentiert Routen, einschließlich Wegpunkten und Schlüsselpunkten.
- `<wpt>` - repräsentiert einzelne Wegpunkte.


## Track-Anpassung {#track-customization}

### Parameter für das Erscheinungsbild von Tracks {#track-appearance-parameters}

Dieser Abschnitt beschreibt, wie OsmAnd Tracks auf der Karte anzeigt und welche Anpassungsoptionen zur Verfügung stehen, um deren Erscheinungsbild zu ändern. Die unten beschriebenen Parameter werden innerhalb des `<gpx>`-Tags angewendet und wirken sich auf alle in einer GPX-Datei enthaltenen Tracks aus.

| Tag-Name  | Beschreibung / Werte |
|:----------------------------------------|:---------|
| `<color>`                                 | - Definiert die Farbe der Track-Linie auf der Karte.  <br/>  - *String:* HEX-Farbcode `#RRGGBB` oder `#AARRGGBB` |
| `<width>`                                 | - Gibt die Breite der Track-Linie an. <br/>  - *String:* `“thin”`, `“medium"`, `“bold”` (definiert durch das Attribut `“currentTrackWidth”`), oder eine ganze Zahl (1-24) |
| `<show_arrows>`                           | - Aktiviert oder deaktiviert Richtungspfeile entlang des Tracks. <br/> - *Bool:* `"true"` / `"false"` |
| `<show_start_finish>`                     | - Zeigt oder verbirgt Markierungen für den Start und das Ende des Tracks. <br/> - *Bool:* `"true"` / `"false"` |
| `<split_type>`                            | - Gibt den Segmentierungstyp für den Track an. <br/> - *String:* `"no_split"`, `"distance"`, `"time"` |
| `<split_interval>`                        | - Legt das Intervall für die Track-Segmentierung basierend auf dem ausgewählten Typ fest. <br/> - *Double:* Ganze Zahl (Meter für `"distance"`, Sekunden für `"time"`) |
| `<line_3d_visualization_by_type>`         | - Gibt den Typ der 3D-Visualisierung für den Track an. <br/> - *String:* `"none"`, `"altitude"`, `"shared_string_speed"`, `"map_widget_ant_heart_rate"`, `"map_widget_ant_bicycle_cadence"`, `"map_widget_ant_bicycle_power"`, `"shared_string_temperature"`, `"shared_string_speed"`, `"fixed_height"` |
| `<line_3d_visualization_wall_color_type>` | - Definiert den Wandfarbtyp für die 3D-Visualisierung. <br/> - *String:* `"none"`, `"solid"`, `"downward_gradient"`, `"upward_gradient"`, `"altitude"`, `"slope"`, `"speed"` |
| `<line_3d_visualization_position_type>`   | - Legt die Position der 3D-Visualisierung relativ zum Track fest. <br/> - *String:* `"top"`, `"bottom"`, `"top_bottom"`|
| `<vertical_exaggeration_scale>`           | - Multiplikator zur Skalierung des Wertes des `line_3d_visualization_by_type`-Attributs. <br/> - *Float:* Standard: 1.0 |
| `<elevation_meters>`                      | - Gibt eine feste Höhe in Metern für `"fixed_height"` in `<line_3d_visualization_by_type>` an. <br/> - *Float:* Standard: `1000` |
| `<coloring_type>`                         | - Bestimmt die Färbungsmethode für den Track. <br/> - *String:* `"solid"`, `"speed"`, `"altitude"`, `"slope"`, `"routeInfo_roadClass`, `"routeInfo_surface"`, `"routeInfo_smoothness"` |
| `<color_palette>`                         | - Gibt das Farbschema für den Track an. <br/> - *String:* `"default"` / [benutzerdefinierte Schemata](/docs/user/personal/color-palette-schemes) |

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

Der Tag `<coloring_type>` in OsmAnd ermöglicht es Benutzern, die Track-Färbung basierend auf spezifischen Datenattributen anzupassen und bietet so eine visuelle Möglichkeit, wichtige Informationen entlang des Tracks zu interpretieren.

| Typ | Beschreibung | Anwendungsfall |
|:-----------------------|:--------|:--------|
| `<solid>`                | Der gesamte Track wird in einer einzigen, durch den `color`-Tag festgelegten Farbe angezeigt. | Zu verwenden, wenn eine einheitliche Farbe für klare Sichtbarkeit benötigt wird. |
| `<speed>`                | Der Track wird in einem Farbverlauf basierend auf den Geschwindigkeitswerten an jedem Trackpunkt (`<trkpt>`) gefärbt. Höhere Geschwindigkeiten werden durch unterschiedliche Farben dargestellt. | Ideal für Aktivitäten wie Radfahren oder Autofahren, um Geschwindigkeitsänderungen zu visualisieren. |
| `<altitude>`             | Der Track wird entsprechend den Höhendaten an jedem `<trkpt>` gefärbt. Ein Farbverlauf wird angewendet, der verschiedene Höhenbereiche anzeigt. | Nützlich für Wander- oder Bergtouren, um Höhenänderungen hervorzuheben. |
| `<slope>`                | Der Track wird basierend auf der Steigung/dem Gefälle zwischen aufeinanderfolgenden Trackpunkten gefärbt. Positive Gradienten zeigen Steigungen an, während negative Gradienten Gefälle anzeigen. | Geeignet für Radfahrer oder Wanderer, die die Schwierigkeit des Tracks analysieren. |
| `<routeInfo_roadClass>`  | Färbt die Tracksegmente basierend auf der Straßenklassifizierung von OpenStreetMap (OSM) (z. B. Autobahn, Wohnstraße). | Hilft bei der Unterscheidung verschiedener Straßentypen beim Folgen einer Route. |
| `<routeInfo_surface>`    | Färbt die Tracksegmente basierend auf dem OSM-Oberflächentyp (z. B. asphaltiert, Schotter, unbefestigt). | Nützlich zur Bestimmung der Streckenbedingungen bei Aktivitäten wie Geländefahrten. |
| `<routeInfo_smoothness>` | Färbt den Track entsprechend den OSM-Glattheitsbewertungen, die die Rauheit oder Glätte des Weges angeben (z. B. ausgezeichnet, schlecht). | Hilfreich zur Bewertung der Befahrbarkeit des Tracks für bestimmte Fahrzeuge. |

### GPX-Tags in der Benutzeroberfläche {#gpx-tags-in-ui}

GPX-Erweiterungs-Tags werden am unteren Rand des Track-Kontextmenüs angezeigt.
Sowohl `<metadata>`- als auch `<gpx>`-`<extensions>` werden aufgelistet.
Tags für das Erscheinungsbild sind von der Auflistung ausgenommen.
Unterstützt seit OsmAnd Android 5.0.

## Anpassung von Wegpunkten {#waypoints-customization}

Dieser Abschnitt erklärt, wie OsmAnd die Anpassung von Wegpunkten in GPX-Dateien durch die Verwendung von Symbolen, Farben und Gruppierungen ermöglicht.

### Wegpunktsymbole {#waypoint-icons}

Die folgenden Tags steuern das Erscheinungsbild von Wegpunktsymbolen in OsmAnd:

| GPX-Tag      | Standard   | Zweck    |
|:-------------|:----------|:-----------|
| `<icon>`       | *(keiner)*    | Gibt das Symbol für den Wegpunkt an (z. B. `historic_castle`). |
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

Wegpunkte in OsmAnd können nach ihrem Typ in Gruppen sortiert werden. Diese Gruppierung ermöglicht es dem Benutzer, mehrere Wegpunkte unter bestimmten Kategorien zu organisieren, was die Übersichtlichkeit und Lesbarkeit der Karte verbessert.

- **Definition der Punktgruppe.** Der `<type>`-Tag innerhalb des `<wpt>`-Elements gibt die Gruppe des Punktes an (z. B. `"castle"`, `"aqueduct"`).
- **Gruppenkonfiguration.** Die `<osmand:points_groups>`-Erweiterung im `<gpx>`-Element definiert die Einstellungen für jede Gruppe, einschließlich `name`, `color`, `icon` und `background` für alle Wegpunkte in dieser Gruppe.

***Beispiel:***

```xml
<gpx>
  <wpt lat="1.234" lon="5.678">
    <name>Look up to see the water</name>
    <type>aqueduct</type>
  </wpt>
  <wpt lat="5.678" lon="1.234">
    <name>Beware of ghosts</name>
    <type>castle</type>
  </wpt>
  <wpt lat="66.666" lon="66.666">
    <name>The house of Beetlejuice</name>
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
        The first paragraph will be displayed as &lt;b&gt;brief&lt;/b&gt; description.
        HTML tags are stripped in brief descriptions.
    &lt;/p&gt;
    &lt;p&gt;
      &lt;h3&gt;Second paragraph&lt;/h3&gt;
        &lt;b&gt;Hello, world!&lt;/b&gt;&lt;br/&gt;
        &lt;img src="..."/&gt;&lt;br/&gt;
        &lt;a href="..."&gt;url&lt;/a&gt;&lt;br/&gt;
        &lt;table&gt; ... &lt;/table&gt;
    &lt;/p&gt;
  </desc>
</metadata>
```

***Wichtige Hinweise:***

- OsmAnd entfernt alle HTML-Tags bei der Erstellung von Kurzbeschreibungen und hinterlässt reinen Text.
- Sie können Tags wie `<b>`, `<i>`, `<p>`, `<br/>`, `<a>`, `<img>` und weitere zur Anpassung verwenden.


### Link-Tag {#link-tag}

Verwenden Sie den `<link>`-Tag, um URLs mit Metadaten, Autoreninformationen oder Wegpunkten in OsmAnd GPX-Dateien zu verknüpfen. Dieser Tag kann auch ein Bild anzeigen, wenn die URL auf eine Bilddatei verweist.

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

Sie können Ihre Tracks mit Daten von Fitness-Sensoren wie Herzfrequenzmessern oder Temperatursensoren anreichern. OsmAnd verwendet das [TrackPointExtension](https://www8.garmin.com/xmlschemas/TrackPointExtensionv1.xsd)-Schema von Garmin, um diese Daten zu speichern, was sie mit Plattformen wie **Strava** und **Garmin Basecamp** kompatibel macht.

*Unterstützte Sensordaten-Tags:*

- **hr** - Herzfrequenz (in Schlägen pro Minute).
- **cad** - Fahrrad-Trittfrequenz (in Umdrehungen pro Minute).
- **atemp** - Umgebungstemperatur (in Grad Celsius).
- **power** - Fahrrad-Leistungsabgabe (in Watt).

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

In **OsmAnd** können Sie eine Route berechnen und alle Daten in einer GPX-Datei speichern, sodass später alle Navigationsfunktionen als GPX-Navigation verfügbar sind. Die **OsmAnd**-GPX-Datei enthält dann Routensegmente, Abbiegungen, Straßennamen, Straßentypen, Einschränkungen usw. Die Route kann vollständig wiederhergestellt werden, als wäre sie gerade erst erstellt worden, selbst wenn die entsprechenden Offline-Karten nicht vorhanden sind.

Eine GPX-Datei kann mehrere Routen enthalten. Jede davon befindet sich in einem spezifischen Segment unter **trkseg** / **extensions**. Eine GPX-Datei wird in dieser Form gespeichert, wenn eine erstellte Route exportiert wird oder wenn ein Track, der aus mehreren separaten Segmenten besteht, über die Funktion [**Route planen**](../../user/plan-route/create-route.md) gespeichert wird.

[**Route planen**](../../user/plan-route/create-route.md) fügt der GPX-Datei auch einen (oder mehrere, entsprechend der Anzahl der enthaltenen separaten Segmente/Tracks) **rte**-Block hinzu, der die Schlüsselpunkte der Route (**rtept**) enthält.

#### GPX-Struktur: {#gpx-structure}

```xml
<trk>
  <trkseg>
    // Liste der Segmentpunkte. Die Reihenfolge der Punkte entspricht der Reihenfolge und Länge der Routensegmente (<route><segment length="x" ... />).
    // Der Wert des "length"-Attributs entspricht der Anzahl der Punkte in diesem Routensegment.
    <trkpt ... ></trkpt>
    <extensions>
      // Liste der Routensegmente
      <route>
        <segment ... />
      </route>
      // Eigenschaften der in der Route enthaltenen Segmente.
      // Diese Daten werden während der ursprünglichen Erstellung einer Route aus Offline-Karten entnommen.
      <types>
        <type ... />
      </types>
    </extensions>
  </trkseg>
</trk>

// Liste der Zwischenroutenpunkte. Bei mehreren Routen entspricht die Reihenfolge der rte-Liste der Reihenfolge der Routensegmente.
<rte>
  <rtept ... />
    // Für Routen, die mit "Route planen" erstellt wurden, werden die Parameter der Schlüsselpunkte gespeichert.
    // Wenn rtept nicht der erste und letzte ist, wird davor (mit demselben idx) ein trkpt mit denselben Daten stehen.
    <extensions>
      // Routenprofiltyp für das nächste Segment (Auto, Fahrrad, Fußgänger usw.).
      <profile>...</profile>
      // Der Index des Punktes im GPX-Segment, der dem ersten Punkt der berechneten Route für dieses Segment entspricht.
      // Wenn rtept nicht der erste und letzte ist, wird davor (mit demselben idx) ein trkpt mit denselben Daten stehen.
      <trkpt_idx>...</trkpt_idx>
    </extensions>
  </rtept>
</rte>
```

#### Wichtige Eigenschaften: {#important-properties}

* **trkpt_idx** des ersten **rtept** in **trkseg** ist 0. Wenn es also zwei **trkseg**s gibt, gibt es zwei **rtept**s mit **trkpt_idx** = 0
* **trkpt_idx** des letzten **rtept** in **trkseg** ist gleich der Anzahl der **trkpt**s in **trkseg** minus 1. Wenn **trkseg** beispielsweise 12 **trkpt**s hat, sollte **trkpt_idx** des letzten **rtept** 11 sein.
* Benachbarte Routen-**Segmente** überlappen sich: Das Ende des vorherigen **Segments** und der Anfang des nächsten **Segments** ist ein und derselbe **trkpt**.
* Es gibt eine Ausnahme, wenn benachbarte Routen-**Segmente** sich nicht überlappen (nicht denselben **trkpt** teilen). Dies geschieht, wenn sich ein **rtept** "zwischen" den Routen-**Segmenten** befindet. Das Ende des vorherigen Routen-**Segments** ist ein **trkpt**, und der Anfang des nächsten Routen-**Segments** ist ein anderer **rtept**. Aber diese beiden **trkpt**s sind in Bezug auf lat, lon und andere Parameter völlig identisch.
* Die Überlappung von Routen-**Segmenten** kann über **length** und **startTrkptIdx** erkannt werden (letzteres wird nur zur besseren Lesbarkeit für Menschen verwendet):
  - Wenn die Summe von **startTrkptIdx** und **length** des vorherigen Routen-**Segments** gleich **startTrkptIdx** des nächsten Routen-**Segments** ist, überlappen sich die Routen-**Segmente** nicht.
  - Wenn die Summe um eins kleiner ist, überlappen sich die Routen-**Segmente**.
* Es kann gerade Routen-**Segmente** geben. Sie sind mit **id="-1"** markiert. Sie können in zwei Fällen auftreten:
  - Es handelt sich um eine Route mit mehreren Profilen, und der Benutzer hat eine gerade Linie ausgewählt.
  - Der Benutzer hat einen **rtept** zu weit von der nächsten Straße entfernt platziert, sodass OsmAnd eine gerade Linie zwischen dem **rtept** und der Straße erstellt hat.
* trkpts = length - (segments - 1) + (rtepts - 2), wobei:
  - trkpts - Anzahl der **trkpt**s innerhalb von **trkseg**
  - length - Summe aller **length**s der Routen-**Segmente** innerhalb von **trkseg**
  - segments - Anzahl der Routen-**Segmente** innerhalb von **trkseg**
  - rtepts - Anzahl der **rtept**s, die zu **trkseg** gehören

#### Beispiel: {#example}

```xml
<gpx version="1.1" creator="OsmAndRouterV2" xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
  <metadata>
    <name>Fri 06 Nov 2020</name>
  </metadata>
  <trk>
    <name>Fri 06 Nov 2020</name>
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
      <trkpt lat="52.356996" lon="4.8912071">
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

OsmAnd ermöglicht es Ihnen, mehrere GPX-Dateien in eine einzige OBF-Datei zu konvertieren. Dies ermöglicht die Speicherung von Tausenden von GPX-Tracks in einem kompakten, optimierten Format, während Funktionen wie spezielle Kartensymbole, Anpassung des Track-Erscheinungsbildes und Suchfunktionen erhalten bleiben. Dies vermeidet eine Begrenzung lokaler großer GPX-Dateien, die typischerweise nicht mehr als 500.000 Punkte insgesamt verarbeiten können, obwohl einige Funktionen von GPX-Tracks im Vergleich zur Anzeige von OBF-Dateien fehlen könnten.

Schritte zur Konvertierung von GPX in OBF:

- Melden Sie sich bei der [OsmAnd Webkarte](https://osmand.net/map) an *→ Tracks → Wählen Sie einen Ordner → *Menü* (⋮) *→ Als OBF-Sammlung herunterladen*

- Die resultierende `<.obf>`-Datei kann in OsmAnd importiert werden (erfordert OsmAnd Android 5.0+).


### Stil der Track-Linie {#track-line-style}

Passen Sie Track-Linien mit den folgenden Tags an:

| GPX-Tag                   | Standard | Zweck  |
|:--------------------------|:--------|:---------|
| `<name>`                  | *(keiner)*  | Name, der über der Track-Linie angezeigt wird.  |
| `color`                   | `red`   | Primärfarbe (HEX oder Text). |
| `colour`, `displaycolor`  | *(keiner)*  | Alternative Möglichkeiten, `color` zu überschreiben. |
| `shield_waycolor`         | *(keiner)*  | Überschreibung für die `color` der Schild-Track-Linie. |
| `translucent_line_colors` | `no`    | Auf `yes` setzen für halbtransparente Farben. |
| `width`                   | `thin`  | Linienbreite: `"thin"`, `"medium"`, `"bold"`, `"1-24"` oder `"roadstyle"` |

**Unterstützte Farben:** black, blue, brown, darkyellow, gray, green, lightblue, lightgreen, orange, purple, red, white, yellow.

***Beispiel:***

```xml
<gpx>
  <metadata>
    <name>
      Track name located in Metadata
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

### Schilder für Track-Linien {#track-line-shields}

Schilder sind Symbole, die entlang der Track-Linie angezeigt werden. OsmAnd unterstützt Schilder im [OSMC-Symbol-Stil](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol), die Folgendes umfassen können:

- Hintergrundsymbol - die Hauptform (z. B. Kreis oder Quadrat).
- Vordergrundsymbole - bis zu zwei kleinere Symbole, die über den Hintergrund gelegt werden.
- Text - kurze Beschreibungen oder Kennungen, abgeleitet von den Tags `shield_text` oder `ref`.

Wenn keine Schildeigenschaften definiert sind, verwendet OsmAnd ein automatisch dimensioniertes gelbes Schild für den Track.

***Tags für Schilder:***

| GPX-Tag            | Zweck                                                                  |
|:-------------------|:-----------------------------------------------------------------------|
| `shield_bg`        | Definiert das Hintergrundsymbol für das Schild.                            |
| `shield_fg`        | Gibt das erste Vordergrundsymbol an (z. B. ein Pfeil oder ein Punkt).           |
| `shield_fg_2`      | Gibt das zweite Vordergrundsymbol an (optional).                       |
| `shield_text`      | Legt den kurzen Text fest, der über dem Schild angezeigt wird (z. B. Routenreferenz). |
| `shield_textcolor` | Bestimmt die Farbe des Schildtextes (optional).                    |
| `shield_waycolor`  | Überschreibt die Standard-Trackfarbe für die Linie des Schildes (optional).   |
| `ref`              | Wird als Ausweichtext verwendet, wenn `shield_text` nicht angegeben ist.                |

***Beispiel:***

```xml
<gpx>
  <trk>
    <name>Sample Route</name>
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

### Anzeige von Wegpunkten {#waypoints-display}

Wegpunktsymbole können mit den folgenden Tags angepasst werden:

| GPX-Tag      | Standard  | Zweck                                   |
|:-------------|:---------|:---------------------------------------------------|
| `icon`       | *(keiner)*   | Gibt das Symbol für den Wegpunkt an (verwendet Standard-Symbole des OsmAnd-Wegpunkt-Editors). |
| `color`      | `red`    | Legt die Symbolfarbe mit einem HEX-Code (z. B. `#ffaa00`) oder einem unterstützten Farbnamen fest (begrenzte Optionen). |
| `background` | `circle` | Definiert die Form des Symbols. Unterstützte Werte: `circle`, `square`, `octagon`. |

***Verhalten von `background`-Formen:***

- `circle` - zeigt das Symbol mit einem kreisförmigen Hintergrund an.
- `square` - zeigt das Symbol mit einem quadratischen Hintergrund an, standardmäßig rot, wenn keine Farbe angegeben ist.
- `octagon` - wird in OsmAnd als kreisförmiger Hintergrund behandelt.

**Unterstützte Farben für** `background=circle`: blue, gray, green, lightblue, lightgreen, orange, purple, yellow.

***Erweiterungen mit zusätzlichen Elementen:***

- Sie können formatierte Beschreibungen zu Wegpunkten mit [HTML-Code](#html-in-descriptions) hinzufügen. Dies ermöglicht es Ihnen, formatierten Text, Links oder sogar Bilder einzufügen.
- Wegpunkte können verknüpfte Bilder mit [Link-als-Bild](#link-tag) anzeigen.

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


### Suche nach Name und Referenzen {#search-by-name-and-refs}

Tracks und Wegpunkte können über eine Vielzahl von GPX-Tags gefunden werden.

| GPX-Tag       | Ort               | Zweck                                                                     |
|:--------------|:-----------------------|:----------------------------------------------------------------------------|
| `<name>`      | `<metadata>`           | Der primäre Name des GPX-Tracks.                                          |
| `ref`         | GPX `<extensions>`     | Eine kurze Kennung, oft abgeleitet vom OSM-`ref`-Tag.                   |
| `shield_text` | GPX `<extensions>`     | Text, der auf Schildern angezeigt wird (kann auch mit `ref` verwendet werden).                    |
| `name_-_lang` | GPX/WPT `<extensions>` | Lokalisierter `name:lang` (z. B. `name_-_en` für Englisch, ersetze `:` -> `_-_`) |
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


| GPX-Tag           | Ort | Zweck                                          |
|:------------------|:---------|:-------------------------------------------------|
| `osmand:activity` | `<metadata>` | Haupt-OsmAnd-Tag zur Speicherung des Aktivitätstyps (ID). |
| `osmand:route`    | GPX `<extensions>` | Alternative OSM-Methode zur Definition des Aktivitätstyps. |


***Beispiele für die Organisation von Tracks nach Aktivitätstyp:***

1. Dies klassifiziert den Track unter der Gruppe **Motorradfahren** mit dem Typ **Geländemotorradfahren (Dirt Biking)**.

    ```xml
    <metadata>
      <extensions>
        <osmand:activity>off_road_motorcycling_dirt_biking</osmand:activity>
      </extensions>
    </metadata>
    ```

2. Dies organisiert den Track unter der Gruppe **Radfahren** mit dem Typ **Mountainbiken**.

    ```xml
    <gpx>
      <extensions>
        <osmand:route>mtb</osmand:route>
      </extensions>
    </gpx>
    ```

### Suchinformations-Tags {#search-information-tags}

OBF-Dateien generieren und speichern automatisch wichtige Track-Statistiken und -Analysen.

| OBF-Tag                               | Zweck                                                               |
|:--------------------------------------|:----------------------------------------------------------------------|
| `distance`                            | Gesamtdistanz aller Track-Segmente.                         |
| `start_ele`, `ele_graph`              | Höhendaten aus GPX, verpackt in einem kompakten binären Array.           |
| `min_ele`, `avg_ele`, `max_ele`       | Minimale, durchschnittliche und maximale Höhenanalysen.                    |
| `diff_ele_up`, `diff_ele_down`        | Gesamter Höhengewinn und -verlust über den gesamten Track.                       |
| `max_speed`, `avg_speed`, `min_speed` | Track-Geschwindigkeitsanalysen, einschließlich maximaler, durchschnittlicher und minimaler Geschwindigkeit. |
| `time_span`, `time_span_no_gaps`      | Gesamtzeit für den Track, mit und ohne Berücksichtigung von Lücken.       |
| `time_moving`, `time_moving_no_gaps`  | Gesamtbewegungszeit, mit und ohne Berücksichtigung von Lücken.              |

### Interne Tags {#internal-tags}

Einige GPX-Tags werden indirekt in OBF-Dateien verwendet oder gespeichert. Details zur Implementierung finden Sie in [OsmGpxWriteContext.java](https://github.com/osmandapp/OsmAnd-tools/blob/master/java-tools/OsmAndMapCreatorUtilities/src/main/java/net/osmand/obf/OsmGpxWriteContext.java).

| OBF-Tag                      | Zweck                                                                                                    |
|:-----------------------------|:-----------------------------------------------------------------------------------------------------------|
| `route_id`                   | Eine eindeutige Kennung für die GPX-Datei, die Karten- und POI-Daten verknüpft (Format: `/[A-Z]+[0-9]+/` z.B. `OSM12345`). |
| `route_type`                 | Kennung der Aktivitätsgruppe (`id`), abgeleitet von `poi/activities.json`                                        |
| `route_activity_type`        | Kennung des Aktivitätstyps (innerhalb der Gruppe) (`id`), abgeleitet von `poi/activities.json`                      |
| `name`, `ref`, `description` | Lokalisierbare und durchsuchbare Attribute (`lang="true"` in POI-Typen)                                         |
| `filename`                   | Der Name der ursprünglichen GPX-Datei, die zur Erzeugung dieses Tracks verwendet wurde.                                             |
| `track_color`                | Kartenabschnitt-Trackfarbe, abgeleitet von `shield_waycolor`, `color`, `colour` oder `displaycolor`               |
| `extensions_extra_tags`      | Beliebige zusätzliche Tags für `<gpx><extensions>` im JSON-Format.                                               |
| `metadata_extra_tags`        | Beliebige zusätzliche Tags für `<metadata><extensions>` im JSON-Format.                                          |
| `wpt_extra_tags`             | Beliebige zusätzliche Tags für Wegpunkte `<wpt><extensions>` im JSON-Format.                                     |
| `route_track_point`          | Wegpunkte aus der GPX-Datei verwenden diesen Typ in den POI-Daten.                                                         |
| `route_bbox_radius`          | Gibt den Standardradius für die Suche nach Teilen des Tracks im POI-Abschnitt an                       |
| `route_shortlink_tiles`      | Gibt eine durch Kommas getrennte Liste von OSM-Shortlink-Kacheln an, um das Lesen von Geometriedaten zu beschleunigen (optional)       |
| `route_segment_index`        | Gibt eine Ordnungszahl des Geometriesegments an, das mit diesem Punkt verknüpft ist (optional)               |
| `route_name`                 | Der Routenname, der von der internen `searchPoiByName` verwendet wird (veraltet)                                            |