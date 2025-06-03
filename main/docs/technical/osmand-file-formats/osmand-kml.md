---
sidebar_position: 3
---

# KML Tracks - .kml, .km {#kml-tracks---kml-km}

In GoogleEarth (GE) you can add you own Placemarks on the map and collect them into a folder. From GE you can save the folder in KML format. When you have a different format you can use QGIS or other opensource software to convert to KML format. Maybe you can convert it directly to OSM. You may use any format containing your POIs, if you are able to convert it to OSM format. You can format KML to GPX [here](https://kml2gpx.com/).

## Native support {#native-support}
OsmAnd doesn't support KML natively but OsmAnd can import some of them. During import process file will be transformed into GPX and later will be treated as [OsmAnd GPX](osmand-gpx).


## Converting KML (or Other Formats) into the OSM Format {#converting-kml-or-other-formats-into-the-osm-format}

To perform this task we need to use gpsbabel. It is very useful to convert waypoints, tracks, and routes between popular GPS receivers and mapping programs. The syntax is very simple, and GPS Babel has an interface to create the syntax for you:

```
$ gpsbabel -i kml -f my_places.kml -o osm,tagnd="tourism:museum",​created_by -F my_places.osm
```

The generated file looks like this:

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

All points inside the KML file are converted into OSM points, assigning them some properties like tourism category and museum type. The `created_by=` option with missing value means that the properties will be ignored. If your POI belongs to different categories, I suggest you create multiple OSM files and create OsmAnd OBF files and merge them together later with OsmAndMapCreator, or create multiple OBF files.

## Converting OSM Format into OBF Format {#converting-osm-format-into-obf-format}

Now you are ready to perform the final step. The conversion will be done using OsmAndMapCreator. Download, unzip and run this program.
- Deselect all choices except Build POI Index as shown:
- Select the work dir (File/Specify working directory…)
- Load my_places.osm (File/Select osm file…)

If all is right you'll find My\_places.obf into your workdir folder. Simply upload this file into your devices OsmAnd tracks folder.
