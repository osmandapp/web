---
source-hash: b83a46b082181d9f4c5b16b74c868c131e880e2aad3256067a77098bd5c9ae01
sidebar_position: 3
---

# KML-tracks - .kml, .km {#kml-tracks---kml-km}

In GoogleEarth (GE) kun je je eigen Plaatsmarkeringen aan de kaart toevoegen en deze in een map verzamelen. Vanuit GE kun je de map opslaan in KML-formaat. Als je een ander formaat hebt, kun je QGIS of andere opensource software gebruiken om naar KML-formaat te converteren. Misschien kun je het direct naar OSM converteren. Je kunt elk formaat met je POI's gebruiken, als je het kunt converteren naar OSM-formaat. Je kunt KML naar GPX converteren [hier](https://kml2gpx.com/).

## Native ondersteuning {#native-support}
OsmAnd ondersteunt KML niet native, maar OsmAnd kan sommige ervan importeren. Tijdens het importproces wordt het bestand omgezet naar GPX en later behandeld als [OsmAnd GPX](osmand-gpx).

## KML (of andere formaten) converteren naar het OSM-formaat {#converting-kml-or-other-formats-into-the-osm-format}

Om deze taak uit te voeren, moeten we gpsbabel gebruiken. Het is erg handig om waypoints, tracks en routes te converteren tussen populaire GPS-ontvangers en kaartprogramma's. De syntaxis is heel eenvoudig, en GPS Babel heeft een interface om de syntaxis voor je te maken:

```
$ gpsbabel -i kml -f my_places.kml -o osm,tagnd="tourism:museum",​created_by -F my_places.osm
```

Het gegenereerde bestand ziet er als volgt uit:

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

Alle punten in het KML-bestand worden omgezet naar OSM-punten, waarbij ze enkele eigenschappen krijgen toegewezen, zoals de categorie toerisme en het type museum. De optie `created_by=` met een ontbrekende waarde betekent dat de eigenschappen worden genegeerd. Als je POI tot verschillende categorieën behoort, raad ik je aan meerdere OSM-bestanden te maken en OsmAnd OBF-bestanden te maken en deze later samen te voegen met OsmAndMapCreator, of meerdere OBF-bestanden te maken.

## OSM-formaat converteren naar OBF-formaat {#converting-osm-format-into-obf-format}

Nu ben je klaar om de laatste stap uit te voeren. De conversie wordt gedaan met OsmAndMapCreator. Download, pak uit en voer dit programma uit.
- Deselecteer alle keuzes behalve 'Build POI Index' zoals getoond:
- Selecteer de werkmap (Bestand/Werkmap opgeven...)
- Laad my_places.osm (Bestand/Selecteer osm-bestand...)

Als alles goed is, vind je My_places.obf in je werkmap. Upload dit bestand eenvoudig naar de OsmAnd tracks-map van je apparaten.