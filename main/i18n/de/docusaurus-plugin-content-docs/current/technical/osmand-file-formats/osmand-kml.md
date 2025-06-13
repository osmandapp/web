---
source-hash: b83a46b082181d9f4c5b16b74c868c131e880e2aad3256067a77098bd5c9ae01
sidebar_position: 3
---

# KML Tracks - .kml, .km {#kml-tracks---kml-km}

In GoogleEarth (GE) können Sie eigene Ortsmarken auf der Karte hinzufügen und in einem Ordner sammeln. Von GE aus können Sie den Ordner im KML-Format speichern. Wenn Sie ein anderes Format haben, können Sie QGIS oder andere Open-Source-Software verwenden, um es in das KML-Format zu konvertieren. Vielleicht können Sie es direkt in OSM konvertieren. Sie können jedes Format verwenden, das Ihre POIs enthält, wenn Sie es in das OSM-Format konvertieren können. Sie können KML [hier](https://kml2gpx.com/) in GPX formatieren.

## Native Unterstützung {#native-support}
OsmAnd unterstützt KML nicht nativ, aber OsmAnd kann einige davon importieren. Während des Importvorgangs wird die Datei in GPX umgewandelt und später als [OsmAnd GPX](osmand-gpx) behandelt.


## Konvertieren von KML (oder anderen Formaten) in das OSM-Format {#converting-kml-or-other-formats-into-the-osm-format}

Um diese Aufgabe auszuführen, müssen wir gpsbabel verwenden. Es ist sehr nützlich, Wegpunkte, Tracks und Routen zwischen gängigen GPS-Empfängern und Kartenprogrammen zu konvertieren. Die Syntax ist sehr einfach, und GPS Babel verfügt über eine Schnittstelle, um die Syntax für Sie zu erstellen:

```
$ gpsbabel -i kml -f my_places.kml -o osm,tagnd="tourism:museum",​created_by -F my_places.osm
```

Die generierte Datei sieht wie folgt aus:

```
<?xml version='1.0' encoding='UTF-8'?>
<osm version='0.5' generator='GPSBabel-1.4.0'>
  <node id='-1' visible='true' lat='41.890121' lon='12.492265'>
    <tag k='name' v='place01'/>
    <tag k='note' v='place01'/>
    <tag k='tourism' v='museum'/>
  </node>
  <node id='-2' visible='true' lat='41.892241' lon='12.489031'>>
    <tag k='name' v='place02'/>
    <tag k='note' v='place02'/>
    <tag k='tourism' v='museum'/>
  </node>
</osm>
```        

Alle Punkte innerhalb der KML-Datei werden in OSM-Punkte konvertiert und ihnen einige Eigenschaften wie Tourismuskategorie und Museumstyp zugewiesen. Die Option `created_by=` mit fehlendem Wert bedeutet, dass die Eigenschaften ignoriert werden. Wenn Ihre POIs zu verschiedenen Kategorien gehören, schlage ich vor, dass Sie mehrere OSM-Dateien erstellen und OsmAnd OBF-Dateien erstellen und diese später mit OsmAndMapCreator zusammenführen oder mehrere OBF-Dateien erstellen.

## Konvertieren des OSM-Formats in das OBF-Format {#converting-osm-format-into-obf-format}

Jetzt sind Sie bereit für den letzten Schritt. Die Konvertierung erfolgt mit OsmAndMapCreator. Laden Sie dieses Programm herunter, entpacken Sie es und führen Sie es aus.
- Deaktivieren Sie alle Optionen außer "Build POI Index", wie gezeigt:
- Wählen Sie das Arbeitsverzeichnis (Datei/Arbeitsverzeichnis festlegen...)
- Laden Sie my_places.osm (Datei/osm-Datei auswählen...)

Wenn alles richtig ist, finden Sie My\_places.obf in Ihrem Arbeitsverzeichnis. Laden Sie diese Datei einfach in den OsmAnd Tracks-Ordner Ihres Geräts hoch.