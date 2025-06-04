---
source-hash: 01ab83fc1add3f64ee06a82467bbc6119125eca881b3218ea4b69228df55a9dc
sidebar_position: 3
---

# Pistes KML - .kml, .km {#kml-tracks---kml-km}

Dans GoogleEarth (GE), vous pouvez ajouter vos propres repères sur la carte et les regrouper dans un dossier. À partir de GE, vous pouvez enregistrer le dossier au format KML. Si vous avez un format différent, vous pouvez utiliser QGIS ou d'autres logiciels open source pour convertir au format KML. Vous pouvez peut-être le convertir directement en OSM. Vous pouvez utiliser n'importe quel format contenant vos POI, si vous êtes capable de le convertir au format OSM. Vous pouvez formater KML en GPX [ici](https://kml2gpx.com/).

## Prise en charge native {#native-support}
OsmAnd ne prend pas en charge nativement le format KML, mais OsmAnd peut en importer certains. Pendant le processus d'importation, le fichier sera transformé en GPX et sera ensuite traité comme un [GPX OsmAnd](osmand-gpx).


## Conversion de KML (ou d'autres formats) au format OSM {#converting-kml-or-other-formats-into-the-osm-format}

Pour effectuer cette tâche, nous devons utiliser gpsbabel. Il est très utile pour convertir des points de cheminement, des pistes et des routes entre les récepteurs GPS et les programmes de cartographie populaires. La syntaxe est très simple, et GPS Babel dispose d'une interface pour créer la syntaxe pour vous :

```
$ gpsbabel -i kml -f my_places.kml -o osm,tagnd="tourism:museum",​created_by -F my_places.osm
```

Le fichier généré ressemble à ceci :

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

Tous les points du fichier KML sont convertis en points OSM, en leur attribuant certaines propriétés comme la catégorie tourisme et le type musée. L'option `created_by=` avec une valeur manquante signifie que les propriétés seront ignorées. Si votre POI appartient à différentes catégories, je vous suggère de créer plusieurs fichiers OSM et de créer des fichiers OBF OsmAnd et de les fusionner plus tard avec OsmAndMapCreator, ou de créer plusieurs fichiers OBF.

## Conversion du format OSM au format OBF {#converting-osm-format-into-obf-format}

Vous êtes maintenant prêt à effectuer l'étape finale. La conversion sera effectuée à l'aide d'OsmAndMapCreator. Téléchargez, décompressez et exécutez ce programme.
- Désélectionnez toutes les options sauf Build POI Index comme indiqué :
- Sélectionnez le répertoire de travail (File/Specify working directory…)
- Chargez my_places.osm (File/Select osm file…)

Si tout est correct, vous trouverez My\_places.obf dans votre dossier de travail. Téléchargez simplement ce fichier dans le dossier des pistes OsmAnd de vos appareils.