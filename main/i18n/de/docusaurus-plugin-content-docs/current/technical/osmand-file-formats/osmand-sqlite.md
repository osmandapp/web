---
source-hash: 777e1b6ae34dee89414b4c08be679e9d019b5045cbf293b733879b6dfb3cd8db
sidebar_position: 9
---

# Kachel-SQLite-Format - .sqlite {#tiles-sqlite-format---sqlite}



Das in OsmAnd verwendete SQLite-Format basiert auf dem von MOBAC unterstützten "BigPlanet" SQLite. In OsmAnd fügen wir eine Reihe von Tabellen hinzu, die das Format erweitern:

|Tabelle|Spalte|Spezifikation und Zweck|
|:----|:-----|:---------------|
|"info"|"url"|String. URL-Vorlage zum Herunterladen von Kacheln mit Zoom ≣ `{z}` ≣ `{0}`, `{x}` ≣ `{1}`, `{y}` ≣ `{2}`, Servername ≣ `{rnd}`|
||"randoms"|String. Die Namen der Spiegelserver. Kommagetrennt. Einer dieser Werte ersetzt zufällig den Platzhalter `{rdn}` im Feld "url".|
||"referer"|String. HTTP Referer. Wird zum Herunterladen verwendet.|
||"rule"|String. Unterstützte Vorlage: 1 (wie leer), wms_tile, yandex_traffic. Fügt spezifische Algorithmen zum Herunterladen von Kacheln hinzu. wms_tile verwendet einen Proxyserver wie whoots.mapwarper.net, um mit WMS-Quellen umzugehen|
||"useragent"|String. HTTP User Agent. Wird zum Herunterladen verwendet.|
||"minzoom"|Integer. Minimale Zoomstufe. Entsprechende ganze Zahl. (Auch im Falle von BigPlanet invertiert).|
||"maxzoom"|Integer. Maximale Zoomstufe. Entsprechende ganze Zahl. (Auch im Falle von BigPlanet invertiert).|
||"ellipsoid"|Integer 0 oder 1. 1 für Elliptic Mercator (Yandex-Kacheln). 0 für reguläres Spheric Web Mercator (OSM, Google Maps)|
||"inverted\_y"|Integer 0 oder 1. 1 für invertierte Y-Kachelnummer (Nakarte.me-Kacheln).|
||"timecolumn"|String "yes" oder "no". Eine Kacheltabelle mit einer "time"-Spalte gibt an, wann jede Kachel abgerufen wurde.|
||"expireminutes"|Integer. Gibt an, ob Kacheln nach der angegebenen Anzahl von Minuten ablaufen sollen. Sie würden immer noch angezeigt, aber auch erneut heruntergeladen.|
||"tilenumbering"|String "" oder "BigPlanet". Wenn "BigPlanet", wird der Zoom invertiert und als z = 17 - Zoom berechnet.|
||"tilesize"|Integer. Leer oder 256 oder 512, optional, wird verwendet, um die Kachelgröße zu beschreiben|
|"tiles"|"x", "y", "z"|Integer. Gibt die Mercator-Koordinaten der Kachel an. Beachten Sie, dass der Zoom für den BigPlanet-Fall invertiert werden kann.|
||"image"|Blob von Bild-Bytes.|
||"time"|Integer. Zeitstempel, wann das Bild heruntergeladen wurde.|

Dieses Format wird auch von den von der OsmAnd-Anwendung vertriebenen Hillshade- und Slope-Dateien verwendet.

Die unterstützende Klasse ist SQLiteTileSource unter oder in der Nähe von [https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/resources/SQLiteTileSource.java#L36](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/resources/SQLiteTileSource.java#L36).