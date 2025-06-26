---
source-hash: b83a46b082181d9f4c5b16b74c868c131e880e2aad3256067a77098bd5c9ae01
sidebar_position: 3
---

# Ślady KML - .kml, .km {#kml-tracks---kml-km}

W GoogleEarth (GE) możesz dodawać własne znaczniki miejsc na mapie i grupować je w folderze. Z GE możesz zapisać folder w formacie KML. Jeśli masz inny format, możesz użyć QGIS lub innego oprogramowania open source do konwersji na format KML. Być może możesz przekonwertować go bezpośrednio na OSM. Możesz użyć dowolnego formatu zawierającego Twoje POI, jeśli jesteś w stanie przekonwertować go na format OSM. Możesz sformatować KML do GPX [tutaj](https://kml2gpx.com/).

## Natywne wsparcie {#native-support}
OsmAnd nie obsługuje KML natywnie, ale OsmAnd może importować niektóre z nich. Podczas procesu importu plik zostanie przekształcony w GPX, a następnie będzie traktowany jako [OsmAnd GPX](osmand-gpx).

## Konwersja KML (lub innych formatów) na format OSM {#converting-kml-or-other-formats-into-the-osm-format}

Aby wykonać to zadanie, musimy użyć gpsbabel. Jest to bardzo przydatne do konwersji punktów trasy, śladów i tras między popularnymi odbiornikami GPS a programami mapującymi. Składnia jest bardzo prosta, a GPS Babel ma interfejs do tworzenia składni dla Ciebie:

```
$ gpsbabel -i kml -f my_places.kml -o osm,tagnd="tourism:museum",​created_by -F my_places.osm
```

Wygenerowany plik wygląda następująco:

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

Wszystkie punkty w pliku KML są konwertowane na punkty OSM, przypisując im pewne właściwości, takie jak kategoria turystyczna i typ muzeum. Opcja `created_by=` z brakującą wartością oznacza, że właściwości zostaną zignorowane. Jeśli Twoje POI należą do różnych kategorii, sugeruję utworzenie wielu plików OSM i utworzenie plików OsmAnd OBF, a następnie połączenie ich razem za pomocą OsmAndMapCreator, lub utworzenie wielu plików OBF.

## Konwersja formatu OSM na format OBF {#converting-osm-format-into-obf-format}

Teraz jesteś gotowy do wykonania ostatniego kroku. Konwersja zostanie wykonana za pomocą OsmAndMapCreator. Pobierz, rozpakuj i uruchom ten program.
- Odznacz wszystkie opcje z wyjątkiem Build POI Index, jak pokazano:
- Wybierz katalog roboczy (Plik/Określ katalog roboczy…)
- Załaduj my_places.osm (Plik/Wybierz plik osm…)

Jeśli wszystko jest w porządku, znajdziesz My_places.obf w folderze roboczym. Po prostu prześlij ten plik do folderu śladów OsmAnd na swoim urządzeniu.