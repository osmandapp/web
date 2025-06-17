---
source-hash: 7d2329d146d37fabfc8bb2a88931d3b6d8348378e4d02d7a0ec48973e6660cea
sidebar_position: 9
---

# Kachelverzeichnisformat - .metainfo {#tiles-directory-format---metainfo}

Das Metainfo-Format, das in OsmAnd verwendet wird, um die Einstellungen der Kachelebenen zu speichern. In OsmAnd fügen wir eine Reihe von Tabellen hinzu, die das Format erweitern:


| Feld | Spezifikation und Zweck |
| :---- | :---------------|
| `[url\_template]` | String. URL-Vorlage zum Herunterladen von Kacheln mit:<br /> Zoom: `{0}` oder `{$z}`<br /> x: `{1}` oder `{$x}` , y: `{2}` oder `{$y}`.<br /> Beachten Sie die Reihenfolge von x/y, sie kann in der URL unterschiedlich sein<br /> Servername - `{rnd}` wird aus [randoms] genommen<br /> Einige Server erwarten einen Quadkey - `{q}`, der anstelle von XYZ verwendet werden sollte<br /> `{bbox}` - Begrenzungsrahmen, in Grad, mit dem Format minLongitude,minLatitude,maxLongitude,maxLatitude, wie z.B. `-111.02783203,35.01200204,-111.00585938,35.02999637`<br /> Beispiele:<br /> `http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{$z}/{$y}/{$x}`<br /> `http://a{rnd}.ortho.tiles.virtualearth.net/tiles/a{q}.jpeg?g=700`<br /> `https://encdirect.noaa.gov/arcgis/services/encdirect/enc_harbour/MapServer/WmsServer?bbox={bbox}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:4326&width=256&height=256&layers=0,6,11&map=&styles=` |
| `[randoms]` | String. Die Namen der Server-Spiegel. Komma-separiert. Einer dieser Werte ersetzt zufällig den Platzhalter `{rdn}` im Feld "url".|
| `[minzoom]` | Integer. Mindestzoomstufe. Im regulären Format (OSM, Google Maps).|
| `[maxzoom]` | Integer. Maximale Zoomstufe. Im regulären Format (OSM, Google Maps).|
| `[ellipsoid]` | Bool "true" oder "false". True für Elliptic Mercator (Yandex-Kacheln). False für reguläre Spheric Web Mercator (OSM, Google Maps).|
| `[inverted\_y]` | Bool "true" oder "false". True für invertierte Y-Kachel-Nummer (Nakarte.me-Kacheln).|
| `[tile\_size]` | Integer 256 oder 512. Seitengröße der heruntergeladenen Kachel in px.|
| `[img\_density]` | Integer. Kachel-Bilddichte.|
| `[avg\_img\_size]` | Integer. Durchschnittliche Kachel-Bildgröße.|
| `[expiration\_time\_minutes]` | Integer. Gibt an, ob Kacheln nach der angegebenen Anzahl von Minuten ablaufen sollen. Sie werden weiterhin angezeigt, aber auch neu heruntergeladen.|

Die Klasse, die diese Kachelquelle unterstützt, befindet sich unter oder in der Nähe von [View](https://github.com/osmandapp/Osmand/blob/master/OsmAnd-java/src/main/java/net/osmand/map/TileSourceManager.java#L28).