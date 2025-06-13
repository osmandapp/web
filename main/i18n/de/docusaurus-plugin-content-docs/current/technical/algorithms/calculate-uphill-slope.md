---
source-hash: 6f725a1fadd0a2c5cd2626f8424f87e2e54b060d0b683fd33a90f9426413a826
sidebar_position: 5
---

# Berechnung von bergauf / bergab / Steigung {#calculation-of-uphill--downhill--slope}

OsmAnd verwendet verschiedene Algorithmen zur Berechnung von **Steigung** und **bergauf** basierend auf SRTM-Satellitendaten, die in Offline Karten eingebettet sind, und basierend auf aufgezeichneten GPX Tracks.

Das Hauptziel bei der Berechnung von **bergauf** ist es, relevante Informationen darüber zu liefern, wie viel **zusätzliche Energie** beim Bergauffahren verbraucht wird. Offensichtlich hängt dies von mehreren Faktoren ab, wie z. B. Fahrzeug oder Transportmittel, Untergrund, Gewicht der Person und anderen.
Am Ende sollte **bergauf** ein Parameter sein, der bei der höhenbasierten Routenplanung berücksichtigt wird, um eine energieeffiziente Routenplanung zu ermöglichen.

Das Hauptziel bei der Berechnung der **Steigung** ist es, eine visuelle Anzeige zu haben, welche steilen Straßen vermieden werden müssen.


## Bergauf / Bergab {#uphill--downhill}

Es gibt viele Probleme bei der Berechnung von **bergauf**, da es keinen Standard gibt und es vom Transportmittel und vielen anderen Parametern abhängt. Es ist schwierig, dem Benutzer eine vernünftige Kontrolle zu bieten, damit es nicht zu kompliziert wird. Normalerweise wird bergauf mit anderen Programmen verglichen, aber es gibt kein Programm, das einen goldenen Standard hat.

OsmAnd verwendet einen 3-Schritte-Algorithmus:

- Rauschdaten filtern.
- Lokale Extremwerte (Minima und Maxima) finden.
- Summe der Differenzen zwischen Min und Max berechnen.

Einige Tracks enthalten viele Rauschdaten, die zuerst gefiltert werden müssen. Derzeit wenden wir die Filterung auf alle Tracks an, aber vorbereitete Tracks, wie sie vom Planungs-Tool, Navigations-Tool oder nach der SRTM-Korrektur erstellt wurden, sollten durch die Filterung nicht beeinträchtigt werden.


### 70% Steigung filtern {#filter-70-slope}

Die Filterung basiert auf der Suche nach **Extrempunkten**, die signifikant höher oder niedriger sind als 1 Nachbarpunkt links und 1 Nachbarpunkt rechts auf dem Graphen.
Diese **Extrempunkte** werden von der weiteren Berechnung ausgeschlossen. Der ```Schwellenwert``` ist [70% Steigung](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L11) - [Code](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L72).

**Beispiel 1**. (alle Punkte im Abstand von 10 m), Höhe - [5, 3, 10, 3, 5]. 10 ist ein Extrempunkt: weil 10 > 3 (70% Steigung).

**Beispiel 2**. (alle Punkte im Abstand von 10 m), Höhe - [5, 3, 10, 13, 15]. 10 ist kein Extrempunkt: weil 10 > 3, aber 10 < 13, also ist es ein lokaler Gipfel.

### Sprungpunkte filtern {#filter-jumping-points}

Punkte, die lokale Hügel ```/\``` darstellen, werden gefiltert. Dies führt dazu, dass der höchste und niedrigste Punkt immer herausgefiltert werden, aber es ermöglicht, mit verrauschten Tracks umzugehen, bei denen die Aufzeichnung nicht häufig war, so dass die erste Überprüfung mit extremer Steigung nicht funktioniert. Referenz zum [Code](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L49).

**Beispiel 1**. Höhe - [5, 3, 10, 3, 5] -> [5, 5].

**Beispiel 2**. Höhe - [5, 6, 10, 7, 5] -> [5, 6, 7, 5].

**Beispiel 3**. Höhe - [5, 2, 3, 4, 5] -> [5, 3, 4, 5].


### Extremwerte finden {#finding-extremums}

Um Extremwerte zu finden, wird der [Ramer-Douglas-Peucker](https://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm) Algorithmus verwendet. Er ist nicht absolut gut, um genau Extremwerte auf einem zufälligen Graphen zu finden, aber bei der Höhenberechnung vermeidet er viele zufällige kleine Spitzen, die während eines langen Anstiegs und einiger unmerklich kurzer Abfahrten dazwischen auftreten könnten.

Der Hauptzweck des Algorithmus ist es, die minimale Anzahl von geraden Linien zu finden, die den Höhengraph darstellen könnten. Der ```Schwellenwert``` beträgt **[7 Meter](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationDiffsCalculator.java#L13)**. So werden alle Spitzen, die mehr als 7 Meter Unterschied aufweisen, auf flachen Oberflächen erkannt und nicht erkannt, wenn sie weniger sind.

Extremwerte werden auf dem Graphen als blaue Punkte angezeigt, wenn das OsmAnd-Entwicklungs-Plugin aktiviert ist.

**Beispiel 1**. Höhe - [0, 0, 10, 0, 0]. **Extremwert** ist 10.

**Beispiel 2**. Höhe - [0, 1, 5, 4, -3, -2, -1, 0]. **Keine Extremwerte** - alle weniger als 7 Meter Unterschied.


### Bergauf / Bergab zwischen Extremwerten berechnen {#calculate-uphill--downhill-between-extremums}

Wenn Sie zum Beispiel einen einfachen Track haben, der auf und ab geht, haben Sie nur 1 Maximum auf Ihrem Weg, so dass die
  ```
  Start Höhenunterschied = <Start Höhe> - <Extremwert Höhe>    :
  End Höhenunterschied = <Extremwert Höhe> - <End Höhe>      : wenn positiv - **bergauf**, wenn negativ - **bergab**
  ```

1. Wenn *Start Höhenunterschied* > 0
  - **bergauf** = *Start Höhenunterschied*
  - **bergab** = *End Höhenunterschied*

2. Wenn *End Höhenunterschied* > 0
  - **bergauf** = *End Höhenunterschied*
  - **bergab** = *Start Höhenunterschied*


Weitere Beispiele werden hinzugefügt.


## Höhen-SRTM-Korrektur {#altitude-srtm-correction}

Es gibt 2 Alternativen, die in OsmAnd zur Höhenkorrektur verwendet werden können.

1. Öffnen Sie den Track in OsmAnd Android und finden Sie *Track bearbeiten → Optionen → Höhenkorrektur*
1.1 **Online** verarbeitet den Track über den OsmAnd-Server und die Daten.
1.2 **Offline** verarbeitet den Track auf dem Gerät, wenn 3D-Geotiff-Dateien heruntergeladen wurden.
2. Öffnen Sie die Website https://osmand.net/map und laden Sie den Track hoch, um die SRTM-Höhe zu sehen.


## Steigung {#slope}

Der grüne Graph wird anders berechnet als bergauf / bergab und kann leichte Abweichungen aufweisen. Theoretisch sollte der grüne Graph an allen **Extremwerten** die **0-Linie kreuzen**, obwohl alle Punkte mit 0 Steigung Extremwerte sind.

Zur Berechnung der Steigung werden die gesamten Daten in gleichmäßige 20-Meter-Schritte aufgeteilt. Für jeden Punkt dieses Rasters wird die durchschnittliche Höhe um den Punkt (10 Meter Radius) berechnet. Dann wird die diskrete Ableitung unter Verwendung der [zentralen endlichen Differenz](https://en.wikipedia.org/wiki/Finite_difference) berechnet.