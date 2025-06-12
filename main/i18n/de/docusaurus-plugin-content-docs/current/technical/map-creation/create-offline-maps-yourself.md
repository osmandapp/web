---
source-hash: 0ece8e7a1a25127672614cdf13cd0688a67a4cbb64515cc18d60c278f7999862
title: Offline-Raster- und Vektorkarten erstellen
versions: '*'
intro: Mit OsmAndMapCreator gibt es viele Möglichkeiten, Raster- und Vektorkarten für Ihre Bedürfnisse zu erstellen und anzupassen.
---

## OsmAndMapCreator {#osmandmapcreator}

[**OsmAndMapCreator**](https://wiki.openstreetmap.org/wiki/OsmAndMapCreator) kann verwendet werden, um alle von OsmAnd unterstützten Karten selbst zu erstellen. Sie können die neueste Version von der [Website](https://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) herunterladen. OsmAndMapCreator verfügt über UI-Funktionen zum Erstellen von Raster- und Vektorkarten. *Um eine Vektorkarte zu erstellen, benötigen Sie eine OSM-Datei (`*.pbf, *.osm.gz, *.osm.bz2`)* und *um eine Online-SQLite-Kartendatei zu erstellen, benötigen Sie eine `Basis-Kachel-URL`*.

### Rasterkarten (einfach) {#raster-maps-simple}

Sobald Sie im Menü **Source of tiles** die Kacheln ausgewählt haben, aus denen Sie eine Karte erstellen möchten, und diese erfolgreich in OsmAndMapCreator geladen wurden, können Sie mit der rechten Maustaste auf den Bereich klicken, den Sie vorladen möchten. Danach können Sie im Menü **Source of tiles** → **Create sqlite database** eine `.sqlitedb`-Datei erstellen.

Um eine Vektorkarte zu erstellen, benötigen Sie eine OSM-Datei (*.pbf, *.osm.gz, *.osm.bz2) und um eine Online-SQLite-Karte zu erstellen, benötigen Sie die URL der Basiskachel.

<img src={require('@site/static/img/osmandmapcreator/OsmAndMapCreator-download-raster-maps.png').default} alt="Rasterkarten herunterladen" />

<img src={require('@site/static/img/osmandmapcreator/OsmAndMapCreator-create-raster-maps.png').default} alt="Sqlitedb-Karten erstellen" />

### Vektorkarten (einfach) {#vector-maps-simple}

Schritte zum Erstellen einer Vektorkarte über die OsmAndMapCreator-Benutzeroberfläche:

1. OSM-Datei
    - Laden Sie sie von [Geofabrik](https://www.geofabrik.de/data/download.html) oder einen kleinen Export von [OpenStreetMap](https://www.openstreetmap.org/export#map=19/48.80672/2.13187) herunter.
    - Konvertieren Sie [Shapefile in OSM](https://wiki.openstreetmap.org/wiki/OGR).
    - Generieren Sie [OSM XML](https://wiki.openstreetmap.org/wiki/OSM_XML) selbst mit beliebigen Programmier-Utilities. Sie können dann fortfahren, indem Sie es in das [OBF-Format](../osmand-file-formats/osmand-obf.md) konvertieren, das OsmAnd verstehen kann.
2. Wählen Sie die Kontrollkästchen aus, ob Sie Karten mit Adress-/Routing-/Transport-/Kartendaten erstellen möchten.
3. Wählen Sie unter **File** → **Create .obf from file**.
4. Sobald der Vorgang abgeschlossen ist, haben Sie eine `.obf`-Datei im Arbeitsverzeichnis.

<img src={require('@site/static/img/osmandmapcreator/OsmAndMapCreator-create-vector-maps.png').default} alt="Vektorkarten erstellen" />

Weitere Parameter zur Generierung von Vektorkarten können im Shell-Skript `utilities.sh` angegeben werden.

## Vektorkarten (Shell-Skript) {#vector-maps-shell-script}

Die typischste und leistungsfähigste Methode zur Kartenerstellung, die von Entwicklern verwendet wird, ist das Shell-Skript `utilities.sh`, das in OsmAndMapCreator enthalten ist. Es verfügt auch über viele andere Dienstprogramme zur Erstellung benutzerdefinierter Karten wie Basiskarten oder Karten mit Regionsnamen und -grenzen (regions.ocbf).

Beispielskript:
```
wget -N http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip
wget  https://creator.osmand.net/osm-extract/albania_europe/albania_europe.pbf
unzip OsmAndMapCreator-main.zip -d OsmAndMapCreator
OsmAndMapCreator/utilities.sh generate-poi albania_europe.pbf --chars-build-poi-nameindex=3
```

Das Generierungsskript verarbeitet jeweils nur 1 OSM-Datei (.pbf, .osm.gz, osm.bz2, .osm) und viele optionale Parameter, die als `--xxxxxx` angegeben werden.

| Hauptbefehl | Beschreibung   |
|--------------|---------------|
| `generate-obf` | Generiert vollständiges OBF mit Karten-, Adress-, POI-, Transport- und Routinginformationen |
| `generate-obf-no-address` | Generiert vollständiges OBF, aber ohne Adressinformationen |
| `generate-address` | Generiert Karte nur mit Adressinformationen |
| `generate-poi` | Generiert Karte nur mit POI-Informationen |
| `generate-map` | Generiert Karte nur mit Kartenrendering-Informationen |
| `generate-roads` | Generiert Karte nur mit Routinginformationen |

Alle zusätzlichen Parameter finden Sie im Code, falls sie nicht ordnungsgemäß dokumentiert sind [Main Utilities](https://github.com/osmandapp/OsmAnd-tools/blob/master/java-tools/OsmAndMapCreatorUtilities/src/main/java/net/osmand/MainUtilities.java#L219). Alle Parameter sind optional!

| Parameter | Beschreibung |
|--------------|---------------|
| `--add-region-tags` | Verlangsamt den Kartenerstellungsprozess, indem jedem Weg ein Regionsname-Tag hinzugefügt wird, wo er verarbeitet wurde. Dies wird nur für weltweite Basiskarten oder bei der Verarbeitung multinationaler Regionen benötigt. In allen anderen Fällen ist es einfacher, einen geeigneten Namen für Ihre Datei zu haben, z. B. germany_..., us_.... Wenn Sie diesen Parameter nicht haben und ihn nicht angeben, ist es wahrscheinlich, dass Sie in OsmAnd nicht lokalisierte Straßen-/ÖPNV-Badges sehen. |
| `--keep-only-sea-objects` | Entfernt Objekte, die nicht Teil des Ozeans/Meeres sind, wird zur Erstellung von Seekarten verwendet |
| `--ram-process` | Gibt an, dass die Erstellung eine RAM-SQLite-DB anstelle einer Festplatte verwendet - [mehr Informationen](#ram-to-process-maps). |
| `--srtm=<FOLDER>` | Gibt den Ordner mit TIF-DEM-Bildern an, sodass Informationen über Höhe und Neigung in die Straßen kodiert werden |
| `--rendering-types=<FILE>` | Speicherort von rendering_types.xml mit Regeln und OSM-Tags, die in OBF kodiert werden müssen - [mehr Informationen](#custom-vector-map-tags). |
| `--poi-types=<FILE>` | Speicherort von poi_types.xml mit Regeln und OSM-Tags, die für POI in OBF kodiert werden müssen - [mehr Informationen](#custom-vector-map-tags). |
| `--extra-relations=<FILE>` | OSM-Datei mit Polygonen wie Umweltzonen, deren Tags an die Wege weitergegeben werden sollen. |

**Hinweis**: Das Erstellen von Karten mit batch.xml ist veraltet. Bitte verwenden Sie die oben genannten Shell-Methoden und kombinieren Sie sie mit Downloads/For-Schleifen unter Verwendung der Standard-Shell-Skriptfunktionen.

### RAM zur Verarbeitung von Karten {#ram-to-process-maps}

Das Erstellen von Karten ist speicherintensiv und I/O-intensiv. Mit anderen Worten: Es dauert sehr lange und kann zu Speichermangel führen! Bitte überprüfen Sie die Generierung zuerst auf kleinen Karten.
Um der JVM mehr Speicher zuzuweisen, können Sie die Umgebungsvariable JAVA_OPTS deklarieren.
```
export JAVA_OPTS="-Xms256M -Xmx6400M"
OsmAndMapCreator/utilities.sh generate-obf ....
```

Was können Sie tun, um die Leistung zu verbessern:

- Verwenden Sie SSD-Festplatten.
- Verwenden Sie mehrere Festplatten.
- Verwenden Sie "In-Memory"-Verarbeitung.
Wenn Sie die Verwendung von Speicherplatz vermeiden und nur RAM verwenden möchten, um den Prozess zu beschleunigen, geben Sie den Parameter `--ram-process` an. Diese "In-Memory"-Verarbeitung beschleunigt die Kartengenerierung um 10-50 %, erfordert aber viel Speicher. 10 % bis 50 % hängen von der Kartengröße ab. Kleinere Karten profitieren weniger von der In-Memory-Verarbeitung als größere Karten, da der Festplattenzugriff für das anfängliche Lesen und das endgültige Schreiben der Karte eine größere Rolle spielt, während größere Karten mehr "Berechnung" erfordern.

Bei der normalen "On-Disk"-Verarbeitung wird aus Ihrer *.osm- oder *.osm.pbf-Datei eine *nodes.tmp.odb*-Datei erstellt. Diese *nodes.tmp.odb*-Datei ist eine SQLite-Datenbankdatei und ist etwa 15 bis 25 Mal so groß wie die ursprüngliche *.osm.pbf*-Datei, die Sie von [geofabrik.de](http://download.geofabrik.de/) heruntergeladen haben. Wenn Ihre ursprüngliche *.osm.pbf*-Datei also 300 MB groß ist, ist Ihre *nodes.tmp.odb*-Datei 5 GB bis 6 GB groß! Beachten Sie, dass kleinere Karten etwa den Faktor 15x haben, während große Karten (>350 MB) zu einem Speicherzuwachs von 20x bis 25x führen.

Bei der "In-Memory"-Verarbeitung wird diese *nodes.tmp.odb*-Datei in Ihrem Arbeitsspeicher erstellt. Sie benötigen "die Größe der nodes.tmp.odb" + 20-25 %. Bitte beachten Sie, dass Sie den Parameter `-Xmx` nicht erhöhen müssen, da SQLite im Speicher keinen JVM-Speicher belegt und nur nativen Betriebsspeicher verwendet.

Beispiel: Für eine 250 MB *.osm.pbf* wird eine ~4,5 GB *nodes.tmp.odb*-Datei generiert.

### Benutzerdefinierte Vektorkarte (Tags) {#custom-vector-map-tags}

Das Rendering und die POI-Suche von OsmAnd basieren auf Informationen, die in [OBF](../osmand-file-formats/osmand-obf.md) geschrieben wurden. Es hat eine andere Struktur als andere OSM-Formate und ist für die mobile Nutzung optimiert. Sie können den Inhalt mit dem [Binary Inspector](../map-creation/how-to-inspect-an-obf.md) überprüfen. Die 3 wichtigsten Teile der OBF-Datei sind:

- **Kartenbereich** wird für das Kartenrendering verwendet, das durch [Rendering types](https://github.com/osmandapp/OsmAnd-resources/blob/master/obf_creation/rendering_types.xml) definiert ist.
- **POI-Bereich** wird für die POI-Suche und Objektinformationen verwendet, die durch [POI types](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/poi_types.xml) definiert sind.
- **Routing-Bereich** wird für das Routing verwendet, das durch [Routing types](https://github.com/osmandapp/OsmAnd-resources/blob/master/obf_creation/rendering_types.xml) definiert ist - dieselbe Datei wie Rendering-Typen, hat aber einen eigenen Abschnitt `<category name="routing"> - routing_type`.

`rendering_types.xml` und `poi_types.xml` können während des Kartenerstellungsprozesses in den OsmAndMapCreator UI-Einstellungen oder als Befehlszeilenparameter `--rendering-types=<path>`, `--poi-types==<path>` für `utilities.sh generate-obf` (im Lieferumfang von OsmAndMapCreator enthalten) überschrieben werden.

- Der Hauptkartobjekttyp (`<type tag="abandoned:highway" value="track" minzoom="13"/>`) wird pro OSM-Entität (Knoten oder Weg oder Multipolygon) registriert. Es können viele Haupttypen pro 1 Entität registriert werden (z. B. Straße + Straßenbahn + Buslinie), das Tag `order` sortiert die Typen innerhalb der Entität.
- Der zusätzliche Kartobjekttyp (`<type tag="service" value="driveway" minzoom="13" additional="true"/>`) ist zusätzliche Information, die an die OSM-Entität angehängt wird. Wenn die OSM-Entität nicht mit einem Haupttyp registriert ist, wird sie nicht in OBF gespeichert. Normalerweise speichert sie Informationen zur Anzeige zusätzlicher Funktionen wie Farbe, Glätte.
- Der Textkartobjekttyp (`<type tag="int_ref" additional="text" minzoom="1" order="32"/>`) speichert Textinformationen über das Objekt, damit es später auf der Karte angezeigt werden kann.
- `entity_convert` repräsentiert einfache Tag-Transformationsskripte (`<entity_convert pattern="tag_transform" from_tag="bridge" if_tag1="highway" if_value1="proposed" routing="no"/>`). Es wird oft verwendet, um Tags zu bestimmten Typen zu kombinieren, damit sie mit einem benutzerdefinierten Rendering-Stil einfacher angezeigt werden können. Es ermöglicht auch regionsspezifische Tag-Transformationen und ermöglicht die Anzeige verschiedener Funktionen pro Land.
- Weitergabe von Relationstags. OsmAnd indiziert keine Relationsobjekte (außer Multipolygonen - als Flächenobjekte gespeichert), aber es ermöglicht die Weitergabe, das Pushen von Tags von Relationen auf Mitglieder. Offensichtlich kann ein Mitglied mehrere übergeordnete Relationen haben und Tag-Konflikte sind möglich. OsmAnd unterstützt 3 Möglichkeiten, mit Konflikten umzugehen:
  - Kombinieren Sie alle Tags als lange, durch Kommas getrennte Zeile (gut für das Rendering von Busliniennamen als lange Zeichenfolge auf dem Weg - `nameTags`, `namePrefix`).
  - Sortieren Sie die Werte und behalten Sie den höchsten Wert bei (gut für das Rendering von lokalen vs. internationalen Routen - `relationGroupSort`, `additionalTags`, `additionalNamePrefix`).
  - Generiert eindeutige Tags für jede Relation (wird derzeit nicht verwendet, speichert aber Informationen ohne Verlust - `relationGroupNameTags`, `relationGroupAdditionalTags`, `relationGroupPrefix`). **Weitere Informationen** finden Sie in [Rendering types](https://github.com/osmandapp/OsmAnd-resources/blob/master/obf_creation/rendering_types.xml).

**Mehr lesen**: Benutzerdefinierte Vektorkarten werden normalerweise mit einem [benutzerdefinierten Rendering-Stil](../osmand-file-formats/osmand-rendering-style.md) kombiniert.

## Rasterkarten (fortgeschritten) {#raster-maps-advanced}

OSM ist eine große Datenbank für Karten, aber sie enthält nicht immer die Informationen, die Sie benötigen (z. B. über Wüsten). Manchmal können Sie die benötigten Informationen aus anderen Quellen erhalten, z. B. aus Papierkarten oder Satellitenbildern.

Es gibt spezielle Programme zur Vorbereitung, Konvertierung und Kalibrierung beliebiger Quellkarten (Karten im Bildformat, PDF-Format, Raster-Online-Karten) in OsmAnd-Online-Karten.

Einige davon werden im Folgenden beschrieben.

### MOBAC {#mobac}

Mobile Atlas Creator (MOBAC) ist ein Open-Source-Programm (GPL) zur Erstellung von Offline-Atlanten. Mobile Atlas Creator kann eine große Anzahl verschiedener Online-Karten, wie OpenStreetMap und andere Kartenanbieter, als Quelle für die Erstellung eines Offline-Atlas verwenden.

Laden Sie einfach das Programm [herunter](https://mobac.sourceforge.io/) und führen Sie es aus.

Wählen Sie im Dialog zur Formatauswahl *OsmAnd SQLite* oder *OsmAnd tile storage*. SQLite ist eine einzelne Datei mit dem ausgewählten Bereich, während Kacheln separate Teile der Karte sind, die auf Ihrem Gerät gesammelt werden. SQLite ist oft bequemer, da es an einem Ort gespeichert wird und weniger Speicherplatz benötigt.

Wählen Sie die Kartenquelle, Zoomstufen und andere Funktionen aus. Wählen Sie einen Bereich aus und wählen Sie dann das Menü *Selection* -> *Add selection*.

Danach können Sie Ihre SQLite-Datei erstellen: 'Atlas' -> 'Create Atlas'.

### MAPC2MAPC {#mapc2mapc}

[MAPC2MAPC](https://www.the-thorns.org.uk/mapping/) ist ein Windows-Programm zur Bearbeitung digitaler Karten und deren Konvertierung zwischen verschiedenen Plattformen und Software.

Sie können beispielsweise beliebige Bildformate und PDF-Karten in OsmAnd-Online-Karten konvertieren und kalibrieren.

[Video-Tutorial](https://www.youtube.com/watch?v=Y_fekLfcUOc) zur Verwendung des Programms.

### SASPlanet {#sasplanet}

SASPlanet ist eine kostenlose Open-Source-Navigationssoftware mit der Möglichkeit, Karten und Satellitenbilder der Erde von verschiedenen Online-Diensten anzuzeigen und herunterzuladen, um sie in OsmAnd-Online-Karten zu verwenden.

Laden Sie das Programm [herunter](http://www.sasgis.org/download/), [Englische Anleitung](https://www.evernote.com/shard/s100/client/snv?noteGuid=e659886a-096c-46b4-8280-b57b77373847&noteKey=dac8148d9a74ed77&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs100%2Fsh%2Fe659886a-096c-46b4-8280-b57b77373847%2Fdac8148d9a74ed77&title=How%2Bto%2Buse%2BSAS.Planet.%2BEnglish%2Bguideline).

### Geolokalisiertes PDF oder TIFF {#geolocated-pdf-or-tiff}

So konvertieren Sie geolokalisierte PDF/TIF/TIFF-Dateien in [OsmAnd SQLitedb](../osmand-file-formats/osmand-sqlite.md) unter Windows.
Die Georeferenzierung von TIF/TIFF- und PDF-Dateien kann in QGIS recht einfach durchgeführt werden.

1. **OSGeo4W installieren und ausführen**

[OSGeo4W](https://trac.osgeo.org/osgeo4w/) ist eine Binärdistribution einer breiten Palette von Open-Source-Geodatensoftware für Windows. Sie enthält QGIS, GDAL/OGR, GRASS sowie viele andere Pakete (über 150). Laden Sie den [OSGeo4W](https://trac.osgeo.org/osgeo4w/) Netzwerk-Installer herunter und führen Sie ihn aus.

Führen Sie nun über das Startmenü die OSGeo4W Shell aus. Sie sollte im Standardverzeichnis _C:\OSGeo4W_ starten. Navigieren Sie entweder zu Ihrem Arbeitsordner (oder Sie können einfach _C:\OSGeo4W_ für diesen Zweck verwenden).

2. **TIF/PDF in MBTiles konvertieren**

Um _tif/pdf_ in _mbtiles_ zu konvertieren, führen Sie Folgendes aus (ersetzen Sie _tif/pdf_ und _mbtiles_ Dateinamen bei Bedarf):

&nbsp;<i>gdal_translate -co "ZLEVEL=9" -of mbtiles map_1.tif map_1.mbtiles --config gdal_pdf_dpi 600</i>&nbsp;

&nbsp;<i>gdaladdo -r nearest map_1.mbtiles</i>&nbsp;

Der erste Befehl lässt _GDAL_ die maximale Zoomstufe ermitteln, die es basierend auf der Bildauflösung generieren kann. Und konvertiert die _tif/pdf_-Datei in _mbtiles_ mit der angegebenen DPI. Experimentieren Sie ruhig mit dieser Einstellung, aber seien Sie vorsichtig, da hohe DPI-Werte den Konvertierungsprozess sehr lange dauern lassen und die resultierende Dateigröße sehr groß wird.

Der zweite Befehl lässt _GDAL_ die kleineren Zoomstufen basierend auf der bereits vorhandenen maximalen Zoomstufe ermitteln und generieren. Es ist nicht ungewöhnlich, dass diese beiden Befehle eine Weile dauern, bis sie abgeschlossen sind.

3. **Python aus dem Microsoft Store installieren**

Der wahrscheinlich einfachste Weg ist, zum [Microsoft Store](https://apps.microsoft.com/detail/9nj46sx7x90p) zu gehen.

Wenn beim Versuch, das Python-Skript im nächsten Schritt auszuführen, dieser Fehler auftritt:

_Traceback (most recent call last):_

_File ```<console>```, line 1, in ```<module>```_

_ImportError: No module named PIL_

Führen Sie dann in PowerShell den folgenden Befehl aus:

_pip install Pillow_

4. **MBTiles-Format in SQLitedb konvertieren (geeignet für OsmAnd und RMaps)**

Sie finden das Python-Skript _mbtiles2osmand.py_ auf [GitHub](https://github.com/tarwirdur/mbtiles2osmand). Laden Sie es in Ihren Arbeitsordner herunter und führen Sie die Eingabeaufforderung oder PowerShell aus.

**Verwendung:**

&nbsp;<i>python3_ mbtiles2osmand.py [-h] [-f] [--jpg JPEG_QUALITY] input output</i>&nbsp;

&nbsp;<u>Positionelle Argumente:</u>&nbsp;

**input**&nbsp;&nbsp;&nbsp;&nbsp; Eingabedatei

**output**&nbsp;&nbsp;&nbsp;&nbsp; Ausgabedatei

&nbsp;<u>Optionale Argumente:</u>&nbsp;

**-h, --help** &nbsp;&nbsp;&nbsp;&nbsp;Diese Hilfemeldung anzeigen und beenden

**-f, -force** &nbsp;&nbsp;&nbsp;&nbsp;Ausgabedatei überschreiben, falls vorhanden

**--jpg JPEG_QUALITY** &nbsp;&nbsp;&nbsp;&nbsp;Kacheln in JPEG mit angegebener Qualität konvertieren

**Beispiele:**

Einfach:

&nbsp;<i>python3 mbtiles2osmand.py _input.mbtiles output.sqlitedb_</i>&nbsp;

Kacheln in JPEG mit Komprimierung konvertieren:

&nbsp;<i>python3 mbtiles2osmand.py _--jpg 75 input.mbtiles output.sqlitedb_</i>&nbsp;

5. **Die .sqlitedb-Datei nach OsmAnd kopieren**

Nun sollten Sie eine .sqlitedb-Datei in Ihrem Arbeitsordner haben. Kopieren Sie sie in den entsprechenden OsmAnd-Ordner und verwenden Sie sie als Haupt-, Unter- oder Overlay-Karte. Weitere Details finden Sie im [Benutzerhandbuch](../../user/map/raster-maps.md). Fertig!

6. **(OPTIONAL) Mehrere OsmAnd-Dateien zu einer einzigen Datei zusammenführen**

Bei Bedarf finden Sie die Skriptdatei unite_osmand.py auf [GitHub](https://github.com/tarwirdur/mbtiles2osmand). Laden Sie sie erneut in Ihren Arbeitsordner herunter und führen Sie die Eingabeaufforderung oder PowerShell aus.

**Verwendung:**

&nbsp;<i>python3 unite_osmand.py [-h] [-f] input [input ...] output</i>&nbsp;

<u>Positionelle Argumente:</u>

**input** &nbsp;&nbsp;&nbsp;&nbsp; Eingabedateien. Wenn mehrere Dateien Kacheln mit denselben Koordinaten enthalten, wird die Kachel aus der ersten (aus der Argumentliste) Datei verwendet.

**output** &nbsp;&nbsp;&nbsp;&nbsp;Ausgabedatei

<u>Optionale Argumente:</u>

**-h, --help** &nbsp;&nbsp;&nbsp;&nbsp;Diese Hilfemeldung anzeigen und beenden

**-f, -force** &nbsp;&nbsp;&nbsp;&nbsp;Ausgabedatei überschreiben, falls vorhanden

7. **EXTRA: Eine einzelne GeoPDF in GeoTIFF konvertieren**

Wenn Sie aus irgendeinem Grund eine einzelne _geopdf_ in _geotiff_ konvertieren möchten, verwenden Sie den Befehl _gdal_translate_ und geben Sie Ihre eigenen Parameter ein, wo durch < > gekennzeichnet. Sie können _gdal_translate_ mit oder ohne optionale Parameter verwenden. Die Verarbeitung kann lange dauern und die resultierende Tiff-Datei kann sehr groß sein, insbesondere wenn Orthobilder und schattiertes Gelände enthalten sind. Daher kann es eine gute Idee sein, einige der PDF-Ebenen auszuschließen (siehe zweites Beispiel).

**Verwendung:**

&nbsp;<i>gdal_translate ```<GeoPDF Dateiname> <Ausgabe Geotiff Dateiname>``` -of gtiff --config
gdal_pdf_layers_off “```<pdf Ebenenname 1>,<pdf Ebenenname 2>,<pdf Ebenenname 3>```” --config gdal_pdf_dpi ```<Ausgabe dpi>``` </i>&nbsp;

**Beispiele:**

Konvertieren von PDF mit allen Ebenen in ein GeoTIFF mit Standard-DPI:

&nbsp;<i>gdal_translate geo_sample_map.pdf output_sample_map.tif -of gtiff</i>&nbsp;

Ausschließen mehrerer Ebenen von der Konvertierung durch den Parameter <i>gdal_pdf_layers_off</i>, gefolgt von einer Liste durch Kommas getrennter Ebenennamen. Die Ausgabedatei ist ein GeoTIFF mit angegebenen 600 DPI:

&nbsp;<i>gdal_translate geo_sample_map.pdf output_sample_map.tif -of gtiff --config gdal_pdf_layers_off “Map_Collar, Map_Frame.Projections_and_Grids, Map_Frame.Terrain.Shaded_Relief, Images.Orthoimage” --config gdal_pdf_dpi 600</i>&nbsp;

8. **Quellen:**

- [Gdal2mbtiles](https://github.com/tarwirdur/mbtiles2osmandhttps://gist.github.com/jbaranski/0073f7b98bdf1f64f49988853daed67bhttps://github.com/ecometrica/gdal2mbtiles) (nur als Referenz),
- [How to convert geopdf to geotiff using GDAL](https://opengislab.com/blog/2016/4/2/usgs-geopdf-to-geotif-with-gdal),
- Siehe auch [Making Overlay Maps for OsmAnd on Linux](https://shallowsky.com/blog/mapping/osmand-making-overlay-maps.html).

## Häufige Probleme {#common-issues}

### OutOfMemoryError-Problem {#outofmemoryerror-issue}

**Problem**: OsmAndMapCreator schlägt mit der Meldung - OutOfMemoryError fehl.

Die Datei, die Sie mit OsmAndMapCreator verarbeiten möchten, ist zu groß. Versuchen Sie entweder, eine kleinere Datei zu verarbeiten, oder erhöhen Sie den Speicher für OsmAndMapCreator in der .sh- oder .bat-Datei. Der Parameter `-Xmx` gibt an, wie viel Speicher das Programm verbrauchen darf. Die Einstellungen können für 64-Bit- (mehr als 1,5 GB) und 32-Bit-Maschinen (maximal ca. 1,5 GB) unterschiedlich sein.

### Problem mit leerer Datei {#empty-file-issue}

**Problem**: Nach der Konvertierung einer .osm-Datei in .obf mit nur einem POI-Index ist die .obf-Datei leer, obwohl die ursprüngliche .osm-Datei POIs enthielt.

Es könnte sein, dass ein entscheidendes Tag fehlte, damit OsmAndMapCreator einen POI erkennen konnte, als Sie die osm-Datei aus einer anderen Quelle, wie Garmin, konvertiert haben. Wenn ein Punkt in der OSM-Datei so aussieht:
```
  <node id='-24' visible='true' lat='1.3094000' lon='103.7784000'>
    <tag k='created_by' v='GPSBabel-1.4.2'/>
    <tag k='name' v='Street-Soccer Court'/>
  </node>
```
ändern Sie es so, dass es ein zusätzliches 'amenity'-Tag enthält, wie:
```
  <node id='-24' visible='true' lat='1.3094000' lon='103.7784000'>
    <tag k='created_by' v='GPSBabel-1.4.2'/>
    <tag k='name' v='Street-Soccer Court'/>
    <tag k='amenity' v='point' />
  </node>
```

Konvertieren Sie dann die Datei mit OsmAndMapCreator. Sie können auf der OSM-Website überprüfen, welche Tags gut zu verwenden sind, und Sie können auch überprüfen, welche Tags von [OsmAnd](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/poi_types.xml) unterstützt werden.