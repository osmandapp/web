---
source-hash: b83a46b082181d9f4c5b16b74c868c131e880e2aad3256067a77098bd5c9ae01
sidebar_position: 3
---

# Tracce KML - .kml, .km {#kml-tracks---kml-km}

In GoogleEarth (GE) puoi aggiungere i tuoi Placemark sulla mappa e raccoglierli in una cartella. Da GE puoi salvare la cartella in formato KML. Quando hai un formato diverso puoi usare QGIS o altri software opensource per convertire in formato KML. Forse puoi convertirlo direttamente in OSM. Puoi usare qualsiasi formato contenente i tuoi POI, se sei in grado di convertirlo in formato OSM. Puoi formattare KML in GPX [qui](https://kml2gpx.com/).

## Supporto nativo {#native-support}
OsmAnd non supporta KML nativamente, ma OsmAnd può importarne alcuni. Durante il processo di importazione il file verrà trasformato in GPX e successivamente verrà trattato come [OsmAnd GPX](osmand-gpx).

## Conversione di KML (o altri formati) in formato OSM {#converting-kml-or-other-formats-into-the-osm-format}

Per eseguire questa operazione dobbiamo usare gpsbabel. È molto utile per convertire waypoint, tracce e percorsi tra ricevitori GPS e programmi di mappatura popolari. La sintassi è molto semplice e GPS Babel ha un'interfaccia per creare la sintassi per te:

```
$ gpsbabel -i kml -f my_places.kml -o osm,tagnd="tourism:museum",​created_by -F my_places.osm
```

Il file generato appare così:

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

Tutti i punti all'interno del file KML vengono convertiti in punti OSM, assegnando loro alcune proprietà come la categoria turistica e il tipo di museo. L'opzione `created_by=` con valore mancante significa che le proprietà verranno ignorate. Se il tuo POI appartiene a diverse categorie, ti suggerisco di creare più file OSM e creare file OBF di OsmAnd e unirli successivamente con OsmAndMapCreator, oppure creare più file OBF.

## Conversione del formato OSM in formato OBF {#converting-osm-format-into-obf-format}

Ora sei pronto per eseguire il passaggio finale. La conversione verrà eseguita utilizzando OsmAndMapCreator. Scarica, decomprimi ed esegui questo programma.
- Deseleziona tutte le scelte tranne Build POI Index come mostrato:
- Seleziona la directory di lavoro (File/Specifica directory di lavoro...)
- Carica my_places.osm (File/Seleziona file osm...)

Se tutto è corretto troverai My\_places.obf nella tua cartella di lavoro. Carica semplicemente questo file nella cartella delle tracce di OsmAnd dei tuoi dispositivi.